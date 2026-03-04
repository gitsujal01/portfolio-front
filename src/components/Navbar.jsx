import { useEffect, useRef } from 'react';

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)';
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
          'dark:bg-darkTheme', 'dark:shadow-white/20'
        );
        navLinkRef.current.classList.remove(
          'bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent'
        );
      } else {
        navRef.current.classList.remove(
          'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
          'dark:bg-darkTheme', 'dark:shadow-white/20'
        );
        navLinkRef.current.classList.add(
          'bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden">
        <img src="./assets/header-bg-color.png" alt="header bg" className="w-full" />
      </div>

      <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
        {/* Desktop nav links */}
        <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent">
          <li><a href="#top" className="hover:text-gray-500 dark:hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300 transition">About me</a></li>
          <li><a href="#services" className="hover:text-gray-500 dark:hover:text-gray-300 transition">Services</a></li>
          <li><a href="#work" className="hover:text-gray-500 dark:hover:text-gray-300 transition">My Work</a></li>
          <li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-300 transition">Contact me</a></li>
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-4 ml-6">
          {/* Theme toggle */}
          <button onClick={toggleTheme}>
            <img src="./assets/moon_icon.png" alt="Dark mode" className="w-5 dark:hidden" />
            <img src="./assets/sun_icon.png" alt="Light mode" className="w-5 hidden dark:block" />
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={openMenu}>
            <img src="./assets/menu-black.png" alt="menu" className="w-6 dark:hidden" />
            <img src="./assets/menu-white.png" alt="menu" className="w-6 hidden dark:block" />
          </button>
        </div>

        {/* Mobile side menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen z-50 bg-rose-50 transform translate-x-[100%] transition-transform duration-500 font-Ovo dark:bg-darkHover dark:text-white">
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <img src="./assets/close-black.png" alt="close" className="w-5 dark:hidden" />
            <img src="./assets/close-white.png" alt="close" className="w-5 hidden dark:block" />
          </div>
          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  );
}