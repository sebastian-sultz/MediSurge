import { useEffect, useRef } from 'react';
import aboutData from "../Data/aboutData.json"

const AboutUs = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const entries = Array.from(timeline.querySelectorAll('.timeline-entry'));
    const line = timeline.querySelector('.timeline-progress');

    const updateTimeline = () => {
      try {
        const timelineRect = timeline.getBoundingClientRect();
        const timelineStart = window.scrollY + timelineRect.top;
        const timelineEnd = timelineStart + timelineRect.height;
        const scrollPosition = window.scrollY + window.innerHeight * 0.6;

        const progress = Math.min(Math.max((scrollPosition - timelineStart) / (timelineEnd - timelineStart), 0), 1);

        if (line) {
          line.style.transform = `scaleY(${progress})`;
        }

        entries.forEach((entry) => {
          const entryRect = entry.getBoundingClientRect();
          const entryPosition = window.scrollY + entryRect.top;
          const isVisible = scrollPosition > entryPosition - (window.innerWidth < 768 ? 50 : 100);

          const yearElement = entry.querySelector('.timeline-year');
          const contentElement = entry.querySelector('.timeline-content');

          if (yearElement && contentElement) {
            if (isVisible) {
              yearElement.classList.add('text-secondary', 'scale-105');
              contentElement.classList.add('opacity-100', 'translate-x-0');
              contentElement.classList.remove('opacity-0');
            } else {
              yearElement.classList.remove('text-secondary', 'scale-105');
              contentElement.classList.remove('opacity-100', 'translate-x-0');
              contentElement.classList.add('opacity-0');
            }
          }
        });
      } catch (error) {
        console.error('Error in timeline animation:', error);
      }
    };

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    updateTimeline();

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  // Helper function to render icon SVG
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'check-circle':
        return (
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-background px-4 sm:px-6 md:px-12 lg:px-20 py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutData.hero.image}
            alt="Medical equipment"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface/50 to-background/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl w-full">
          <div className="mb-8 space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text mb-4 leading-tight">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {aboutData.hero.title}
                </span>
              </h1>
            </div>
            <div className="relative inline-block max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-textSecondary leading-relaxed relative z-10 px-4 py-2 sm:px-6 sm:py-3">
                Trusted <span className="font-semibold text-secondary">medical supplies</span> for healthcare professionals
               
              </p>
              <div className="absolute inset-0 border-2 border-border rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-fit mx-auto">
            <a
              href={aboutData.hero.cta.link}
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center text-sm sm:text-base">
                {aboutData.hero.cta.text}
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
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-sm text-secondary/80 mb-2 tracking-widest font-medium">LEARN MORE</p>
            <div className="relative w-5 h-8 sm:w-6 sm:h-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-secondary rotate-45 animate-scroll-bounce"></div>
              <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-accent rotate-45 animate-scroll-bounce delay-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* History, Vision, Mission */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sterile p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4">{aboutData.historyVisionMission.history.title}</h2>
            <p className="text-textSecondary leading-relaxed text-sm md:text-base">
              {aboutData.historyVisionMission.history.content}
            </p>
          </div>
          <div className="bg-sterile p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4">{aboutData.historyVisionMission.vision.title}</h2>
            <p className="text-textSecondary leading-relaxed text-sm md:text-base">
              {aboutData.historyVisionMission.vision.content}
            </p>
          </div>
          <div className="bg-sterile p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-text mb-4">{aboutData.historyVisionMission.mission.title}</h2>
            <p className="text-textSecondary leading-relaxed text-sm md:text-base">
              {aboutData.historyVisionMission.mission.content}
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">{aboutData.values.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.values.items.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-b from-surface to-background hover:shadow-lg transition-all">
                <div className="bg-border w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4">
                  {renderIcon(value.icon)}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text mb-2">{value.title}</h3>
                <p className="text-textSecondary text-sm md:text-base">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Commitment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{aboutData.commitment.title}</h2>
            <p className="text-lg md:text-xl text-textSecondary">
              {aboutData.commitment.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {aboutData.commitment.sections.map((section, index) => (
              <div key={index} className="bg-surface p-6 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">{section.title}</h3>
                <p className="text-textSecondary mb-4 text-sm md:text-base">
                  {section.content}
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-success mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div id="our-journey" className="py-16 md:py-24 bg-gradient-to-br from-surface to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20" data-aos="fade-down" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4">
              {aboutData.timeline.title}
            </h2>
            <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto">
              {aboutData.timeline.subtitle}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 h-full w-1 bg-border/30 sm:transform sm:-translate-x-1/2">
              <div 
                className="timeline-progress absolute top-0 left-0 w-full h-full origin-top bg-secondary scale-y-0"
              ></div>
            </div>
            
            <div className="space-y-16 ml-12 sm:ml-0">
              {aboutData.timeline.items.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-entry relative flex ${window.innerWidth < 640 ? 'justify-start' : item.side === 'left' ? 'sm:justify-end sm:pr-10 lg:pr-16' : 'sm:justify-start sm:pl-10 lg:pl-16'}`}
                  data-aos={window.innerWidth < 640 ? 'fade-right' : item.animation}
                  data-aos-delay={index * 150}
                  data-aos-duration="800"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                >
                  <div className={`w-full sm:w-5/6 lg:w-1/2 ${item.side === 'left' ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="relative group">
                      {/* Year marker */}
                      <div 
                        className={`timeline-year absolute top-5 ${window.innerWidth < 640 ? '-left-12' : item.side === 'left' ? 'sm:left-auto sm:-right-12' : '-left-12'} w-8 h-8 bg-secondary/80 backdrop-blur-sm rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center text-white text-sm shadow-lg`}
                        data-aos="zoom-in"
                        data-aos-delay={index * 150 + 200}
                        data-aos-duration="600"
                      >
                        {item.icon}
                      </div>
                      
                      {/* Glass effect content card */}
                      <div 
                        className={`timeline-content p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:bg-white/15 group-hover:border-secondary/40 ${item.side === 'left' ? 'sm:mr-2' : 'sm:ml-2'} ${window.innerWidth < 640 ? 'ml-4 opacity-0 translate-x-4' : ''}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + 100}
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {item.year}
                        </h3>
                        <p className="text-base md:text-lg text-primary/90">
                          {item.content}
                        </p>
                      </div>
                      
                      {/* Connector line on mobile */}
                      <div className="absolute top-6 -left-8 w-8 h-px bg-white/30 sm:hidden"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles remain the same */}
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
          40% { transform: translateY(-8px) rotate(45deg); }
          60% { transform: translateY(-4px) rotate(45deg); }
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 2s infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        @media (min-width: 640px) {
          .timeline-entry:nth-child(odd) {
            justify-content: flex-end;
            padding-right: 2rem;
          }
          .timeline-entry:nth-child(even) {
            justify-content: flex-start;
            padding-left: 2rem;
          }
        }
        @media (max-width: 639px) {
          .timeline-entry {
            justify-content: flex-start !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .timeline-year {
            left: -3rem !important;
            right: auto !important;
          }
          .timeline-content {
            margin-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;