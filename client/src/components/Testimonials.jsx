const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Phoenix, AZ',
    text: 'We closed on our house in March and got our policy set up the same week. The agent was incredibly patient explaining the difference between term and whole life. We went with a 30-year term to match our mortgage — couldn\'t be easier.',
    stars: 5,
  },
  {
    name: 'James & Linda T.',
    location: 'Charlotte, NC',
    text: 'After our first child was born, we finally got serious about this. Our agent found us a policy $40/month cheaper than what our lender offered. Don\'t let the bank upsell you — shop around!',
    stars: 5,
  },
  {
    name: 'Marcus D.',
    location: 'Tampa, FL',
    text: 'I filled out the form on a Sunday night, got a call Monday morning, and had my policy issued by Wednesday. The whole process was seamless and the pricing was better than I expected at my age.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            What Homeowners Are Saying
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
