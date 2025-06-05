import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useUser } from '../UserContext';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useUser();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setLoggedInUser('');
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      to: '/',
      label: 'Home',
      icon: 'M5 12l-2 0l9 -9l9 9l-2 0 M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7 M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6',
    },
    {
      to: '/aboutUs',
      label: 'About Us',
      icon: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2',
    },
    {
      to: '/contact',
      label: 'Contact Us',
      icon: 'M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2H5a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2z',
    },
  ];

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 `}
    >
      <div className="mx-auto px-4 sm:max-w-7xl md:w-4/5 md:max-w-5xl ">
        <div
          className={`flex items-center justify-between py-1 md:py-2 rounded-full px-2 md:px-3 backdrop-blur-md bg-[rgba(255,255,255,0.2)] shadow-md border border-border transition-all duration-300`}
        >
          {/* Logo */}
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              width="40"
              height="40"
              className="h-10 w-auto"
              src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto/v1738956464/Logo2_qio7bh.png"
              alt="Logo"
              loading="lazy"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-all duration-200 relative px-3 py-1 ${isActive
                    ? 'text-accent font-semibold'
                    : 'text-primary hover:text-accent'
                  } after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-accent after:to-accent2 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 
                  }`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={({ isActive }) =>
                    `h-5 w-5 transition-transform ${isActive ? 'scale-110 text-accent' : 'text-primary'}`
                  }
                >
                  <path d={icon} />
                </svg>
                <span className="hidden lg:inline">{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to={loggedInUser ? '#' : '/login'} onClick={loggedInUser ? handleLogout : null}>
              <button
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaUser className="h-5 w-5" />
                  {loggedInUser ? 'Logout' : 'Login'}
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={loggedInUser ? handleLogout : () => navigate('/login')}
              className="inline-flex items-center p-2 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <FaUser className="h-5 w-5" />
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-highlight transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 17 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 mt-2 w-[80%] mx-auto max-w-5xl p-4 backdrop-blur-md bg-[rgba(255,255,255,0.2)] shadow-md border border-border rounded-lg animate-slide-down"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-all duration-200 relative ${isActive
                      ? 'text-accent font-semibold'
                      : 'text-primary hover:text-accent'
                    } after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-accent after:to-accent2 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-colors duration-200 ${isActive ? 'text-accent scale-110' : 'text-primary group-hover:text-accent'
                          }`}
                      >
                        <path d={icon} />
                      </svg>
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;