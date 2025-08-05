// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Zap, Wrench, Droplets, Sun, Settings, Eye, ChevronDown, Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const location = useLocation();
//   const servicesRef = useRef(null);

//   const currentPath = location.pathname;

//   const linkClasses = "relative font-normal leading-[100%] text-[16px] hover:text-[#DBB26B] cursor-pointer transition-colors duration-200";
//   const activeLinkClasses = "relative text-[#DBB26B] font-normal leading-[100%] text-[16px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-[#DBB26B]";

//   // Function to check if link is active
//   const isActive = (path) => {
//     return currentPath === path;
//   };

//   // Function to get link classes based on active state
//   const getLinkClasses = (path) => {
//     return isActive(path) ? activeLinkClasses : linkClasses;
//   };

// const serviceItems = [
//   {
//     icon: <Sun className="w-6 h-6 text-[#DBB26B]" />,
//     title: "Solar Rooftop",
//     subtitle: "Get creative inspiration",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/solar-rooftop"
//   },
//   {
//     icon: <Settings className="w-6 h-6 text-[#DBB26B]" />,
//     title: "O&M Services Page",
//     subtitle: "Impactful storytelling",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/om-services"
//   },
//   {
//     icon: <Zap className="w-6 h-6 text-[#DBB26B]" />,
//     title: "EPC Development",
//     subtitle: "Stunning web design",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/epc-development"
//   },
//   {
//     icon: <Eye className="w-6 h-6 text-[#DBB26B]" />,
//     title: "Solar Consultancy",
//     subtitle: "Functional digital products",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/solar-consultancy"
//   },
//   {
//     icon: <Droplets className="w-6 h-6 text-[#DBB26B]" />,
//     title: "Solar Water Pump",
//     subtitle: "Beautiful crafted prints",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/solar-water-pump"
//   },
//   {
//     icon: <Wrench className="w-6 h-6 text-[#DBB26B]" />,
//     title: "Solar Installation & Commissioning",
//     subtitle: "Artistic visual experience",
//     arrow: <ArrowRight className="w-4 h-4 text-gray-400" />,
//     path: "/services/solar-installation-commissioning"
//   }
// ];

//   // Check if any service page is active
//   const isServicesActive = () => {
//     return serviceItems.some(item => currentPath === item.path) || currentPath.startsWith('/services');
//   };

//   // Close services dropdown if click outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setServicesOpen(false);
//       }
//     }
//     if (servicesOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [servicesOpen]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
//         <div className="h-[116px] max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">

//           {/* Logo Div */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img
//                 src="/logoo.svg"
//                 alt="Logo"
//                 className="w-[100px] h-[84px] sm:w-[116px] sm:h-[98px] md:w-[276px] md:h-[101px] flex-shrink-0 aspect-[44/37]"
//               />
//             </Link>
//           </div>

//           {/* Desktop Links + Button Container */}
//           <div className="hidden xl:flex items-center justify-end flex-1 space-x-8 text-black">

//             {/* Navigation Links */}
//             <nav className="flex items-center space-x-8">
//               <Link to="/" className={getLinkClasses('/')} style={{ fontFamily: '"Open Sans", sans-serif' }}>
//                 Home
//               </Link>
//               <Link to="/about" className={getLinkClasses('/about')}>
//                 About us
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative" ref={servicesRef}>
//                 <button
//                   className={`flex items-center gap-1 font-normal leading-[100%] text-[16px] transition-colors duration-200 ${isServicesActive() ? 'text-[#DBB26B]' : 'hover:text-[#DBB26B]'
//                     }`}
//                   onClick={() => setServicesOpen(!servicesOpen)}
//                 >
//                   Services <ChevronDown className="w-3 h-3 mt-[2px]" />
//                 </button>
//                 {isServicesActive() && (
//                   <div className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-[#DBB26B]"></div>
//                 )}

//                 {servicesOpen && (
//                   <div
//                     className="absolute top-full mt-5 w-[717px] bg-white rounded-2xl shadow-2xl border border-gray-600 p-6 -ml-[580px]"
//                     style={{
//                       boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
//                     }}
//                   >
//                     <div className="absolute -top-2 right-18 w-4 h-4 bg-white border-l border-t border-gray-600 rotate-45"></div>

//                     <div className="grid grid-cols-2 gap-4">
//                       {serviceItems.map((item, index) => (
//                         <Link 
//                           key={index}
//                           to={item.path} 
//                           onClick={() => setServicesOpen(false)}
//                           className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer "
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className="w-10 h-10 bg-[#DBB26B]/10 rounded-lg flex items-center justify-center">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <h4 className="text-sm font-semibold text-gray-900 leading-tight">
//                                 {item.title}
//                               </h4>
//                               <p className="text-xs text-gray-500 mt-0.5">
//                                 {item.subtitle}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
//                             {item.arrow}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link to="/news-media" className={getLinkClasses('/news-media')}>
//                 News & Media
//               </Link>
//               <Link to="/contact" className={getLinkClasses('/contact')}>
//                 Contact
//               </Link>
//             </nav>
//             <Sun className="w-[24px] h-[24px] flex-shrink-0 text-white p-1 rounded-full bg-[#DBB26B]" />

//             {/* CTA Button */}
//             <Link to="/services">
//               <button className="inline-flex px-4 py-3 justify-center items-center content-center gap-[10px] flex-wrap bg-[#DBB26B] text-white font-semibold rounded-2xl hover:bg-[#c89d4f] text-[15px] transition-colors duration-200">
//                 Discover Our Services
//               </button>
//             </Link>

//           </div>

//           {/* Tablet View - Same as Desktop */}
//           <div className="hidden lg:flex xl:hidden items-center justify-end flex-1 space-x-6 text-black">

//             {/* Navigation Links */}
//             <nav className="flex items-center space-x-6">
//               <Link to="/" className={getLinkClasses('/')} style={{ fontFamily: '"Open Sans", sans-serif' }}>
//                 Home
//               </Link>
//               <Link to="/about" className={getLinkClasses('/about')}>
//                 About us
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative" ref={servicesRef}>
//                 <button
//                   className={`flex items-center gap-1 cursor-pointer font-normal leading-[100%] text-[16px] transition-colors duration-200 ${isServicesActive() ? 'text-[#DBB26B]' : 'hover:text-[#DBB26B]'
//                     }`}
//                   onClick={() => setServicesOpen(!servicesOpen)}
//                 >
//                   Services <ChevronDown className="w-3 h-3 mt-[2px]" />
//                 </button>
//                 {isServicesActive() && (
//                   <div className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-[#DBB26B]"></div>
//                 )}

//                 {/* Services Dropdown Card */}
//                 {servicesOpen && (
//                   <div
//                     className="absolute top-full mt-5 w-[717px] bg-white rounded-2xl shadow-2xl border border-gray-600 p-6 -ml-[580px]"
//                     style={{
//                       boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
//                     }}
//                   >

//                     {/* Arrow pointer positioned to the right */}
//                     <div className="absolute -top-2 right-18 w-4 h-4 bg-white border-l border-t border-gray-600 rotate-45"></div>

//                     <div className="grid grid-cols-2 gap-4">
//                       {serviceItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={item.path}
//                           className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
//                           onClick={() => setServicesOpen(false)}
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className="w-10 h-10 bg-[#DBB26B]/10 rounded-lg flex items-center justify-center">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <h4 className="text-sm font-semibold text-gray-900 leading-tight">
//                                 {item.title}
//                               </h4>
//                               <p className="text-xs text-gray-500 mt-0.5">
//                                 {item.subtitle}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
//                             {item.arrow}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <Link to="/news-media" className={getLinkClasses('/news-media')}>
//                 News & Media
//               </Link>
//               <Link to="/contact" className={getLinkClasses('/contact')}>
//                 Contact
//               </Link>
//             </nav>
//             <Sun className="w-[24px] h-[24px] flex-shrink-0 text-white p-1 rounded-full bg-[#DBB26B]" />

//             {/* CTA Button */}
//             <Link to="/services">
//               <button className="inline-flex px-4 py-3 justify-center items-center content-center gap-[10px] flex-wrap bg-[#DBB26B] text-white font-semibold rounded-2xl hover:bg-[#c89d4f] text-[15px] transition-colors duration-200">
//                 Discover Our Services
//               </button>
//             </Link>

//           </div>

//           {/* Mobile Hamburger */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//             >
//               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Drawer Overlay */}
//       {menuOpen && (
//         <div className="lg:hidden fixed inset-0 z-50 flex">
//           {/* Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
//             onClick={() => setMenuOpen(false)}
//           ></div>

//           {/* Drawer */}
//           <div className="relative bg-white w-full max-w-sm ml-auto h-full shadow-xl transform transition-transform duration-300 ease-in-out">

//             {/* Drawer Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <Link to="/" onClick={() => setMenuOpen(false)}>
//                 <img
//                   src="/logo.svg"
//                   alt="Logo"
//                   className="w-[80px] h-[67px] flex-shrink-0 aspect-[44/37]"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Drawer Content */}
//             <div className="flex flex-col h-full overflow-y-auto">
//               <nav className="flex-1 px-6 py-6 space-y-1">

//                 <Link
//                   to="/"
//                   className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${isActive('/') ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-800 hover:bg-gray-50'
//                     }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   to="/about"
//                   className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${isActive('/about') ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-800 hover:bg-gray-50'
//                     }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   About us
//                 </Link>

//                 {/* Mobile Services Section */}
//                 <div>
//                   <button
//                     className={`flex items-center justify-between w-full px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${isServicesActive() ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-800 hover:bg-gray-50'
//                       }`}
//                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   >
//                     Services
//                     <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {mobileServicesOpen && (
//                     <div className="mt-2 space-y-1 pl-4">
//                       {serviceItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={item.path}
//                           className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive(item.path) ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-600 hover:bg-gray-50'
//                             }`}
//                           onClick={() => {
//                             setMenuOpen(false);
//                             setMobileServicesOpen(false);
//                           }}
//                         >
//                           <div className="w-8 h-8 bg-[#DBB26B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                             <div className="w-4 h-4 text-[#DBB26B]">
//                               {React.cloneElement(item.icon, { className: "w-4 h-4 text-[#DBB26B]" })}
//                             </div>
//                           </div>
//                           <span className="text-sm font-medium">{item.title}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   to="/news-media"
//                   className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${isActive('/news-media') ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-800 hover:bg-gray-50'
//                     }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   News & Media
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${isActive('/contact') ? 'text-[#DBB26B] bg-[#DBB26B]/10' : 'text-gray-800 hover:bg-gray-50'
//                     }`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </nav>

//               {/* Drawer Footer */}
//               <div className="px-6 py-6 border-t border-gray-200 space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Sun className="w-[24px] h-[24px] flex-shrink-0 text-white p-1 rounded-full bg-[#DBB26B]" />
//                   <span className="text-sm text-gray-600">Solar Energy Solutions</span>
//                 </div>
//                 <Link to="/services" onClick={() => setMenuOpen(false)}>
//                   <button className="w-full inline-flex px-4 py-3 justify-center items-center bg-[#DBB26B] text-white font-semibold rounded-2xl hover:bg-[#c89d4f] text-[15px] transition-colors duration-200">
//                     Discover Our Services
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;


import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ArrowRight, Zap, Wrench, Droplets, Sun, Settings, Eye, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


// Constants for better maintainability
const HEADER_CONFIG = {
  HEIGHT: 116,
  MAX_WIDTH: 1440,
  LOGO_SIZES: {
    mobile: { width: 100, height: 84 },
    tablet: { width: 116, height: 98 },
    desktop: { width: 276, height: 101 }
  },
  COLORS: {
    primary: '#DBB26B',
    primaryHover: '#c89d4f',
    primaryLight: '#DBB26B'
  },
  BREAKPOINTS: {
    mobile: 0,
    tablet: 1024,
    desktop: 1280
  }
};

const SERVICE_ITEMS = [
    {
    icon: Zap,
    title: "EPC Development",
    subtitle: "Stunning web design",
    path: "/epc-development"
  },
  {
    icon: Eye,
    title: "IPP",
    subtitle: "Functional digital products",
    path: "/coming-soon"
  },
  {
    icon: Sun,
    title: "Solar Rooftop",
    subtitle: "Get creative inspiration",
    path: "/solar-rooftop"
  },
  {
    icon: Settings,
    title: "O&M Services ",
    subtitle: "Impactful storytelling",
    path: "/operation-and-maintenance"
  },

  // {
  //   icon: Droplets,
  //   title: "Solar Water Pump",
  //   subtitle: "Beautiful crafted prints",
  //   path: "/services/solar-water-pump"
  // },
  // {
  //   icon: Wrench,
  //   title: "Solar Installation & Commissioning",
  //   subtitle: "Artistic visual experience",
  //   path: "/services/solar-installation-commissioning"
  // }
];

const NAVIGATION_LINKS = [
  { path: '/', label: 'Home',  },
  { path: '/about', label: 'About us' }
];

// Custom hooks for better separation of concerns
const useActiveRoute = () => {
  const location = useLocation();
  
  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);
  
  const isServicesActive = useCallback(() => {
    return SERVICE_ITEMS.some(item => location.pathname === item.path) || 
           location.pathname.startsWith('/services');
  }, [location.pathname]);

  return { isActive, isServicesActive, currentPath: location.pathname };
};

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handler]);
};

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
};

// Utility functions
const getLinkClasses = (isActive) => {
  const baseClasses = "relative font-normal leading-[100%] text-[16px] transition-colors duration-200 cursor-pointer";
  const activeClasses = `${baseClasses} text-[${HEADER_CONFIG.COLORS.primary}] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-[${HEADER_CONFIG.COLORS.primary}]`;
  const inactiveClasses = `${baseClasses} hover:text-[${HEADER_CONFIG.COLORS.primary}]`;
  
  return isActive ? activeClasses : inactiveClasses;
};

// Sub-components for better organization
const Logo = ({ onLogoClick }) => (
  <div className="flex items-center">
    <Link to="/" onClick={onLogoClick}>
      <img
        src="/logoo.svg"
        alt="Logo"
        className="w-[226px] h-[102px] sm:w-[226px] sm:h-[98px] xl:w-[276px] xl:h-[101px] flex-shrink-0 aspect-[44/37] transition-all duration-200"
      />
    </Link>
  </div>
);

const ServiceDropdown = ({ isOpen, onToggle, onClose, isServicesActive }) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, onClose);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 font-normal leading-[100%] text-[16px] transition-colors duration-200 cursor-pointer ${
          isServicesActive ? `text-[${HEADER_CONFIG.COLORS.primary}]` : `hover:text-[${HEADER_CONFIG.COLORS.primary}]`
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services 
        <ChevronDown className={`w-3 h-3 mt-[2px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isServicesActive && (
        <div className={`absolute left-0 right-0 bottom-[-6px] h-[2px] bg-[${HEADER_CONFIG.COLORS.primary}]`}></div>
      )}

      {isOpen && (
        <div className="absolute top-full mt-5 w-[717px] bg-white rounded-2xl shadow-2xl border border-gray-600 p-6 -ml-[580px] z-50">
          <div className="absolute -top-2 right-18 w-4 h-4 bg-white border-l border-t border-gray-600 rotate-45"></div>
          
          <div className="grid grid-cols-2 gap-4">
            {SERVICE_ITEMS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={index}
                  to={item.path} 
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-[${HEADER_CONFIG.COLORS.primary}]/10 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-[${HEADER_CONFIG.COLORS.primary}]`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </h4>
                      {/* <p className="text-xs text-gray-500 mt-0.5">
                        {item.subtitle}
                      </p> */}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const DesktopNavigation = ({ isActive, isServicesActive, servicesOpen, onServicesToggle, onServicesClose }) => (
  <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
    {NAVIGATION_LINKS.map((link) => (
      <Link 
        key={link.path} 
        to={link.path} 
        className={getLinkClasses(isActive(link.path))}
        style={link.fontFamily ? { fontFamily: link.fontFamily } : undefined}
      >
        {link.label}
      </Link>
    ))}
    
    <ServiceDropdown 
      isOpen={servicesOpen}
      onToggle={onServicesToggle}
      onClose={onServicesClose}
      isServicesActive={isServicesActive()}
    />
    
    <Link to="/news-media" className={getLinkClasses(isActive('/news-media'))}>
      News & Media
    </Link>
    <Link to="/contact" className={getLinkClasses(isActive('/contact'))}>
      Contact
    </Link>
  </nav>
);

const MobileNavigation = ({ isOpen, onToggle, onClose, isActive, isServicesActive }) => {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  useBodyScrollLock(isOpen);

  const handleServiceItemClick = () => {
    setMobileServicesOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      <div 
        className="fixed inset-0 bg-black opacity-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-sm ml-auto h-full shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Logo onLogoClick={onClose} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="flex-1 px-6 py-6 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${
                  isActive(link.path) 
                    ? `text-[${HEADER_CONFIG.COLORS.primary}] bg-[${HEADER_CONFIG.COLORS.primary}]/10` 
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <button
                className={`flex items-center justify-between  w-full px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${
                  isServicesActive() 
                    ? `text-[${HEADER_CONFIG.COLORS.primary}] bg-[${HEADER_CONFIG.COLORS.primary}]/10` 
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {SERVICE_ITEMS.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive(item.path) 
                            ? `text-[${HEADER_CONFIG.COLORS.primary}] bg-[${HEADER_CONFIG.COLORS.primary}]/10` 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={handleServiceItemClick}
                      >
                        <div className={`w-8 h-8 bg-[${HEADER_CONFIG.COLORS.primary}]/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-4 h-4 text-[${HEADER_CONFIG.COLORS.primary}]`} />
                        </div>
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/news-media"
              className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${
                isActive('/news-media') 
                  ? `text-[${HEADER_CONFIG.COLORS.primary}] bg-[${HEADER_CONFIG.COLORS.primary}]/10` 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={onClose}
            >
              News & Media
            </Link>

            <Link
              to="/contact"
              className={`block px-4 py-3 font-medium text-lg rounded-lg transition-colors duration-200 ${
                isActive('/contact') 
                  ? `text-[${HEADER_CONFIG.COLORS.primary}] bg-[${HEADER_CONFIG.COLORS.primary}]/10` 
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>

          <div className="px-6 py-6 border-t border-gray-200 space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className={`w-[24px] h-[24px] flex-shrink-0 text-white p-1 rounded-full bg-[${HEADER_CONFIG.COLORS.primary}]`} />
              <span className="text-sm text-gray-600">Solar Energy Solutions</span>
            </div>
            <Link to="/services" onClick={onClose} className="cursor-pointer" >
              <button className={` w-full cursor-pointer  inline-flex px-4 py-3 justify-center items-center   bg-[${HEADER_CONFIG.COLORS.primary}] text-white font-semibold rounded-2xl  hover:bg-[${HEADER_CONFIG.COLORS.primaryHover}] text-[15px] transition-colors duration-200  `}>
                Discover Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionSection = () => (
  <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
    <Sun className={`w-[24px] h-[24px] flex-shrink-0 text-white p-1 rounded-full bg-[${HEADER_CONFIG.COLORS.primary}]`} />
    <Link to="/services">
      <button className={`inline-flex px-4 py-3 justify-center items-center bg-[${HEADER_CONFIG.COLORS.primary}] text-white font-semibold rounded-2xl hover:bg-[${HEADER_CONFIG.COLORS.primaryHover}] text-[15px] transition-colors duration-200 whitespace-nowrap cursor-pointer `}>
        Discover Our Services
      </button>
    </Link>
  </div>
);

const MobileMenuButton = ({ isOpen, onToggle }) => (
  <div className="lg:hidden flex items-center">
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
);

// Main Header Component
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const { isActive, isServicesActive } = useActiveRoute();

  const handleMenuToggle = useCallback(() => setMenuOpen(prev => !prev), []);
  const handleMenuClose = useCallback(() => setMenuOpen(false), []);
  
  const handleServicesToggle = useCallback(() => setServicesOpen(prev => !prev), []);
  const handleServicesClose = useCallback(() => setServicesOpen(false), []);

  // Memoized components for performance
  const memoizedDesktopNav = useMemo(() => (
    <DesktopNavigation 
      isActive={isActive}
      isServicesActive={isServicesActive}
      servicesOpen={servicesOpen}
      onServicesToggle={handleServicesToggle}
      onServicesClose={handleServicesClose}
    />
  ), [isActive, isServicesActive, servicesOpen, handleServicesToggle, handleServicesClose]);

  const memoizedMobileNav = useMemo(() => (
    <MobileNavigation 
      isOpen={menuOpen}
      onToggle={handleMenuToggle}
      onClose={handleMenuClose}
      isActive={isActive}
      isServicesActive={isServicesActive}
    />
  ), [menuOpen, handleMenuToggle, handleMenuClose, isActive, isServicesActive]);

  return (
    <>
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className={`h-[${HEADER_CONFIG.HEIGHT}px] max-w-[${HEADER_CONFIG.MAX_WIDTH}px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8`}>
          <Logo onLogoClick={handleMenuClose} />
          
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-6 xl:space-x-8 text-black">
            {memoizedDesktopNav}
            <ActionSection />
          </div>

          <MobileMenuButton isOpen={menuOpen} onToggle={handleMenuToggle} />
        </div>
      </header>

      {memoizedMobileNav}
    </>
  );
}

export default Header;
