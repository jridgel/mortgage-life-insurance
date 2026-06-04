const plans = [
  {
    name: 'Term Life',
    tag: 'Most Popular',
    tagColor: 'bg-yellow-400 text-gray-900',
    description: 'Pure death benefit protection for a set term — 10, 15, 20, or 30 years. Perfectly matches your mortgage duration.',
    features: [
      'Lowest monthly premiums',
      'Match your mortgage term exactly',
      'Level premiums — never go up',
      'Tax-free death benefit',
      'Optional living benefit riders',
    ],
    cta: 'Get Term Quote',
    highlight: true,
  },
  {
    name: 'Whole Life',
    tag: 'Lifelong Coverage',
    tagColor: 'bg-blue-100 text-blue-800',
    description: 'Permanent coverage that builds cash value over time. Premiums are fixed for life and the policy never expires.',
    features: [
      'Coverage never expires',
      'Builds cash value you can borrow',
      'Guaranteed level premiums',
      'Dividend potential (mutual carriers)',
      'Estate planning tool',
    ],
    cta: 'Get Whole Life Quote',
    highlight: false,
  },
  {
    name: 'Universal Life',
    tag: 'Flexible',
    tagColor: 'bg-green-100 text-green-800',
    description: 'Flexible permanent coverage where you can adjust your premium and death benefit as your needs change.',
    features: [
      'Adjustable premium payments',
      'Flexible death benefit',
      'Cash value accumulation',
      'Indexed growth options (IUL)',
      'Long-term care riders available',
    ],
    cta: 'Get UL Quote',
    highlight: false,
  },
];

export default function CoverageOptions() {
  return (
    <section id="coverage" className="py-20 px-4" style={{ background: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Coverage Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We shop top-rated carriers to find you the best rate. Here's what we typically recommend for new homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border-2 transition-all ${
                p.highlight
                  ? 'border-blue-700 bg-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-extrabold text-gray-900">{p.name}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block text-center font-bold py-3 rounded-full transition-colors ${
                  p.highlight
                    ? 'bg-blue-700 hover:bg-blue-800 text-white'
                    : 'border-2 border-blue-700 text-blue-700 hover:bg-blue-50'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Not sure which is right for you? Our agents will compare options from multiple A-rated carriers at no cost to you.
        </p>
      </div>
    </section>
  );
}
