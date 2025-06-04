
import { FaHeartbeat, FaBoxOpen } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-24"
        style={{ backgroundImage: `url(https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto/v1749065506/greyNext/julml07gj7cou7jpeec0.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/20 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-white space-y-10 max-w-6xl w-full">
          <div className="space-y-6 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-sm uppercase font-semibold px-4 py-1 rounded-full backdrop-blur-md w-max mx-auto md:mx-0">
              <FaHeartbeat className="animate-pulse" />
              Trusted by Healthcare Experts
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl">
              Precision Surgical Goods <br className="hidden sm:inline" />
              For <span className="text-accent">Modern Healthcare</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto md:mx-0 text-sterile drop-shadow-md">
              Revolutionize your medical supply chain with our premium instruments,
              crafted for hospitals, clinics, and pharmacies demanding uncompromised quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start items-center mx-auto sm:mx-0 max-w-fit">
              <button
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Explore Catalog
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
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-sterile/40 text-sterile font-semibold rounded-full hover:bg-sterile/10 hover:border-sterile/60 hover:shadow-md transition-all text-sm md:text-base w-full sm:w-auto"
              >
                Connect With Sales
              </button>
            </div>
          </div>

          {/* Icon Highlights */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 sm:gap-10 pt-10 text-sterile">
            <div className="flex items-center gap-3">
              <MdLocalHospital className="text-3xl text-accent2" />
              <p className="text-sm font-bold">Serving 1K+ Hospitals</p>
            </div>
            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-3xl text-accent2" />
              <p className="text-sm font-bold">Wide Product Range</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Get Our App</h2>
        <p className="text-text mb-8 max-w-2xl mx-auto">
          Experience seamless ordering and support by downloading our app for Android or accessing our iOS portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mx-auto max-w-fit">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaGooglePlay className="text-xl" />
              Get it on Google Play
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
            href="#"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaApple className="text-xl" />
              Visit iOS Portal
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
        </div>
      </section>
    </>
  );
};

export default Hero;