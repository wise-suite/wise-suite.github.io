const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="https://wise-suite.github.io/" className="flex-shrink-0 flex items-center">
              <img src="/tabwise/logo.png" alt="Tabwise Logo - Smart Tab Manager" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-blue-900">Tabwise</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/tabwise/#features" className="text-gray-600 hover:text-blue-600" aria-label="Features">Features</a>
            <a href="/tabwise/#pricing" className="text-gray-600 hover:text-blue-600" aria-label="Pricing">Pricing</a>
            <a href="/tabwise/#experience" className="text-gray-600 hover:text-blue-600" aria-label="Demo">Demo</a>
            <a href="/tabwise/blog.html" className="text-gray-600 hover:text-blue-600" aria-label="Blog">Blog</a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
              aria-label="Sign Up for Beta"
            >
              Sign Up for Beta
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <div className="flex flex-col space-y-2 px-4 py-2">
              <a href="/tabwise/#features" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="/tabwise/#pricing" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <a href="/tabwise/#experience" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
              <a href="/tabwise/blog.html" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 w-full text-left"
                aria-label="Sign Up for Beta"
              >
                Sign Up for Beta
              </button>
            </div>
          </div>
        )}
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} toolName="Tabwise" />
    </nav>
  );
};
