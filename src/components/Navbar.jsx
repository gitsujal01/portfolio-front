import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)'; // slide in from right
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(100%)'; // slide out to right
    }
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add(
                    'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
                    'dark:bg-darkTheme', 'dark:shadow-white/20'
                );
                navLinkRef.current.classList.remove(
                    'bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent"
                );
            } else {
                navRef.current.classList.remove(
                    'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',
                    'dark:bg-darkTheme', 'dark:shadow-white/20'
                );
                navLinkRef.current.classList.add(
                    'bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent"
                );
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Set initial theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            {/* Background image */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50">
                {/* Centered navigation links */}
                <ul ref={navLinkRef} className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent">
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#top">Home</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#about">About me</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#services">Services</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#work">My Work</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contact me</a></li>
                </ul>

                {/* Right-side theme toggle */}
                <div className="flex items-center gap-4 ml-6">
                    <button onClick={toggleTheme}>
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    {/* Mobile menu button */}
                    <button className="block md:hidden" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* Mobile side menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen z-50 bg-rose-50 transform translate-x-[100%] transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}