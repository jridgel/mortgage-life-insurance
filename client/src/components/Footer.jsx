export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span className="text-white font-bold text-lg">HomeShield Life</span>
            </div>
            <p className="text-sm leading-relaxed">
              Independent insurance brokerage helping new homeowners protect their most important investment.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#why" className="hover:text-white transition-colors">Why Mortgage Protection</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Coverage Options</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Get a Free Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href="tel:+18005550000" className="hover:text-white transition-colors">(800) 555-0000</a></li>
              <li>✉️ <a href="mailto:info@homeshieldlife.com" className="hover:text-white transition-colors">info@homeshieldlife.com</a></li>
              <li>🕒 Mon–Fri 8am–7pm ET</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-xs text-gray-500 space-y-2">
          <p>
            HomeShield Life is an independent insurance brokerage. We are licensed in all 50 states. Life insurance products are not deposits, not FDIC insured, not insured by any federal government agency, and are not guaranteed by the bank or its affiliates.
          </p>
          <p>
            © {new Date().getFullYear()} HomeShield Life. All rights reserved. &nbsp;
            <a href="#" className="hover:text-gray-300">Privacy Policy</a> &nbsp;·&nbsp;
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
