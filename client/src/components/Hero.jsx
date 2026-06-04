export default function Hero() {
  return (
    <section
      className="relative text-white py-24 md:py-36 px-4"
      style={{ background: 'linear-gradient(135deg, #0f2035 0%, #1e3a5f 60%, #1a56a0 100%)' }}
    >
      {/* subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trusted by new homeowners across the country
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            You Just Got a Mortgage.<br />
            <span className="text-yellow-400">Now Protect It.</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-lg">
            If something happened to you tomorrow, could your family afford to keep the home you just bought?
            Mortgage protection life insurance ensures the answer is always <strong className="text-white">yes</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-colors text-center"
            >
              Get My Free Quote →
            </a>
            <a
              href="#how"
              className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg transition-colors text-center"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No medical exam required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Coverage from $50K–$1.5M
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Quote in under 2 minutes
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 text-center max-w-xs">
            <div className="text-5xl mb-4">🏡</div>
            <div className="text-2xl font-bold mb-1">$250,000</div>
            <div className="text-blue-200 text-sm mb-4">Average mortgage balance</div>
            <div className="border-t border-white/20 pt-4">
              <div className="text-sm text-blue-200 mb-1">Mortgage protection coverage</div>
              <div className="text-3xl font-bold text-yellow-400">~$28/mo</div>
              <div className="text-xs text-blue-300 mt-1">Healthy 35-year-old, non-tobacco</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
