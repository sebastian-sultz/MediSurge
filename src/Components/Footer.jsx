import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const policyLinks = [
    { to: "/terms", label: "Terms and Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refunds", label: "Refund Policy" },
  ];

  const quickLinks = [
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  const contactDetails = [
    { icon: FaPhone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: FaEnvelope, label: "Email", value: "contact@medsupply.com", href: "mailto:contact@medsupply.com" },
    { icon: FaMapMarkerAlt, label: "Address", value: "123 Health St, Medical City, CA 90210" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-border/50 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Branding */}
          <div className="flex flex-col items-start">
            <img
              width="40"
              height="40"
              className="h-10 w-auto mb-4 transition-all group-hover:scale-105 group-hover:shadow-glow"
              src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto/v1738956464/Logo2_qio7bh.png"
              alt="Logo"
              loading="lazy"
            />
            <p className="text-sm text-sterile max-w-xs">
              Revolutionizing medical supply chains with premium instruments for hospitals, clinics, and pharmacies.
            </p>
          </div>

        {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-sterile/80 hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-sterile/80 hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

         

          {/* Contact Details */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="text-lg font-bold text-sterile mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <Icon className="text-2xl text-accent group-hover:text-accent2 transition-colors animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-sterile/80">{label}</p>
                    {href ? (
                      <a href={href} className="text-base text-sterile hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base text-sterile">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-sterile/20 text-center">
          <p className="text-sm text-sterile/80">
            © {new Date().getFullYear()} MedSupply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;