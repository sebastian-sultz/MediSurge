const NewsletterSignup = () => {
  return (
    <>
     <section className="py-16 bg-gradient-to-br from-surface to-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Ready to Partner With Us?</h2>
            <p className="text-sm md:text-base text-textSecondary mb-8">
              Whether you're a healthcare provider or distributor, we're here to meet your supply needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-fit mx-auto">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Connect With Sales
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a
                href="/products"
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-text/40 text-text font-semibold rounded-full hover:bg-text/10 hover:border-text/60 hover:shadow-md transition-all text-sm md:text-base w-full sm:w-auto"
              >
                Browse Catalog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Stay Informed</h2>
        <p className="text-text mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest product updates, industry news, and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full border border-text/40 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center">
              Subscribe
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsletterSignup;
