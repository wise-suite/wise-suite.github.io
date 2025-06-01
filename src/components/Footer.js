const Footer = () => (
  <footer className="bg-blue-900 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-4">
        <a href="https://wise-suite.github.io/" className="flex-shrink-0 flex items-center justify-center">
          <img src="/tabwise/logo.png" alt="Tabwise Logo" className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Tabwise</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center space-x-6 mb-4">
        <a href="/tabwise/#features" className="text-white hover:text-gray-200">Features</a>
        <a href="/tabwise/#pricing" className="text-white hover:text-gray-200">Pricing</a>
        <a href="/tabwise/#experience" className="text-white hover:text-gray-200">Demo</a>
        <a href="/tabwise/blog.html" className="text-white hover:text-gray-200">Blog</a>
        <a href="/tabwise/terms.html" className="text-white hover:text-gray-200">Terms of Service</a>
        <a href="/tabwise/privacy.html" className="text-white hover:text-gray-200">Privacy Policy</a>
        <a href="https://wise-suite.github.io/" className="text-white hover:text-gray-200">Wise Suite</a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Tabwise. All rights reserved.</p>
    </div>
  </footer>
);
