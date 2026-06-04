export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          <span className="text-xl font-bold text-navy-800" style={{color:'#1e3a5f'}}>HomeShield Life</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#why" className="hover:text-blue-700 transition-colors">Why Now</a>
          <a href="#how" className="hover:text-blue-700 transition-colors">How It Works</a>
          <a href="#coverage" className="hover:text-blue-700 transition-colors">Coverage</a>
          <a href="#quote" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">
            Get Free Quote
          </a>
        </div>
        <a href="#quote" className="md:hidden bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
          Free Quote
        </a>
      </div>
    </nav>
  );
}
