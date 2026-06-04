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

export default function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await axios.post('/api/leads', form);
      setStatus('success');
      setForm(initialState);
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
              <Field label="First Name *" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" required />
              <Field label="Last Name *" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" required />
              <Field label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required />
              <Field label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" required />
              <Field label="Your Age *" name="age" type="number" value={form.age} onChange={handleChange} placeholder="35" min="18" max="80" required />
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
              <Field label="Mortgage Loan Amount *" name="loanAmount" type="number" value={form.loanAmount} onChange={handleChange} placeholder="350000" min="50000" required prefix="$" />
              <Field label="Desired Coverage Amount *" name="coverageAmount" type="number" value={form.coverageAmount} onChange={handleChange} placeholder="350000" min="50000" required prefix="$" />
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

function Field({ label, name, type = 'text', value, onChange, placeholder, required, min, max, prefix }) {
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
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={`w-full border border-gray-300 rounded-lg py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${prefix ? 'pl-8 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  );
}
