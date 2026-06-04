const steps = [
  {
    num: '01',
    title: 'Submit your free quote request',
    body: 'Fill out our 2-minute form — no SSN, no medical exam required to get started.',
  },
  {
    num: '02',
    title: 'Speak with a licensed agent',
    body: 'A local, licensed broker will call you to compare rates from top-rated carriers and find the best fit.',
  },
  {
    num: '03',
    title: 'Apply and get covered',
    body: 'Most policies issue within 24–72 hours. Your family is protected from day one of coverage.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Getting covered is easier than you think.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-blue-100" />

          {steps.map((s) => (
            <div key={s.num} className="text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-700 text-white text-2xl font-extrabold mb-6 shadow-lg">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#quote"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Start My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
