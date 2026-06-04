const risks = [
  {
    icon: '💔',
    title: 'Unexpected death',
    body: 'The #1 reason families lose their home after a death is an unprotected mortgage. One policy changes everything.',
  },
  {
    icon: '🏥',
    title: 'Critical illness',
    body: 'Policies with living benefits can pay out early if you\'re diagnosed with cancer, stroke, or heart attack.',
  },
  {
    icon: '🛡️',
    title: 'Disability',
    body: 'Riders are available to cover your mortgage payments if you become too sick or injured to work.',
  },
];

export default function WhyNow() {
  return (
    <section id="why" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            The Mortgage Is Signed. The Risk Starts Today.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your lender required homeowners insurance to protect the <em>house</em>. But nothing protects the <em>payment</em> — that's up to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{r.title}</h3>
              <p className="text-gray-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-700 rounded-2xl p-8 text-white text-center">
          <p className="text-xl font-semibold mb-2">
            The best time to buy life insurance was before you got your mortgage.
          </p>
          <p className="text-blue-100">The second best time is <strong className="text-white">right now</strong> — while you're still healthy and rates are lowest.</p>
        </div>
      </div>
    </section>
  );
}
