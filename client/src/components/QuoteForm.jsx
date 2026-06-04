import { useState } from 'react';
import axios from 'axios';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  loanAmount: '',
  coverageAmount: '',
  tobacco: 'no',
  message: '',
};

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatDollars(value) {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  return Number(digits).toLocaleString();
}

function validate(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(form.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }
  if (!form.age) {
    errors.age = 'Age is required.';
  } else if (Number(form.age) < 18 || Number(form.age) > 80) {
    errors.age = 'Age must be between 18 and 80.';
  }
  const loanRaw = Number(form.loanAmount.toString().replace(/,/g, ''));
  if (!form.loanAmount) {
    errors.loanAmount = 'Loan amount is required.';
  } else if (loanRaw < 50000) {
    errors.loanAmount = 'Minimum loan amount is $50,000.';
  }
  const coverageRaw = Number(form.coverageAmount.toString().replace(/,/g, ''));
  if (!form.coverageAmount) {
    errors.coverageAmount = 'Coverage amount is required.';
  } else if (coverageRaw < 50000) {
    errors.coverageAmount = 'Minimum coverage amount is $50,000.';
  }
  return errors;
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    let formatted = value;
    if (name === 'phone') formatted = formatPhone(value);
    if (name === 'loanAmount' || name === 'coverageAmount') formatted = formatDollars(value);
    setForm((f) => ({ ...f, [name]: formatted }));
    if (touched[name]) {
      const rawValue = (name === 'loanAmount' || name === 'coverageAmount')
        ? formatted.replace(/,/g, '')
        : formatted;
      setFieldErrors((prev) => ({ ...prev, [name]: validate({ ...form, [name]: rawValue })[name] }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validate(form)[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setTouched(Object.fromEntries(Object.keys(initialState).map((k) => [k, true])));
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const payload = {
        ...form,
        loanAmount: form.loanAmount.replace(/,/g, ''),
        coverageAmount: form.coverageAmount.replace(/,/g, ''),
      };
      const apiBase = import.meta.env.VITE_API_URL || '';
      await axios.post(`${apiBase}/api/leads`, payload);
      setStatus('success');
      setForm(initialState);
      setFieldErrors({});
      setTouched({});
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.response?.data?.error || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="quote" className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0f2035 0%, #1e3a5f 100%)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get Your Free Quote</h2>
          <p className="text-blue-200 text-lg">
            A licensed agent will contact you within one business day — no obligation, no pressure.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're all set!</h3>
            <p className="text-gray-600 text-lg">
              A licensed agent will reach out to you shortly with your personalized quote. Keep an eye on your phone and inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="First Name *" name="firstName" value={form.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Jane" error={fieldErrors.firstName} />
              <Field label="Last Name *" name="lastName" value={form.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Smith" error={fieldErrors.lastName} />
              <Field label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="jane@email.com" error={fieldErrors.email} />
              <Field label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="(555) 000-0000" error={fieldErrors.phone} />
              <Field label="Your Age *" name="age" type="number" value={form.age} onChange={handleChange} onBlur={handleBlur} placeholder="35" min="18" max="80" error={fieldErrors.age} />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tobacco User?</label>
                <select
                  name="tobacco"
                  value={form.tobacco}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <Field label="Mortgage Loan Amount *" name="loanAmount" type="text" value={form.loanAmount} onChange={handleChange} onBlur={handleBlur} placeholder="350,000" prefix="$" error={fieldErrors.loanAmount} />
              <Field label="Desired Coverage Amount *" name="coverageAmount" type="text" value={form.coverageAmount} onChange={handleChange} onBlur={handleBlur} placeholder="350,000" prefix="$" error={fieldErrors.coverageAmount} />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Notes (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any health conditions, specific questions, or preferred contact times..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="mt-4 bg-red-50 border border-red-300 rounded-lg px-4 py-3 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-8 w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-full text-lg transition-colors"
            >
              {status === 'loading' ? 'Submitting…' : 'Send My Free Quote Request →'}
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              By submitting this form you agree to be contacted by a licensed insurance agent.
              We never sell your information to third parties.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, onBlur, placeholder, min, max, prefix, error }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">{prefix}</span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          min={min}
          max={max}
          className={`w-full border rounded-lg py-3 text-gray-900 focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-gray-300 focus:ring-blue-500'
          } ${prefix ? 'pl-8 pr-4' : 'px-4'}`}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
