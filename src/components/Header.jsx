export default function Header() {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile photo */}
      <img
  src="./assets/Sujal_photo.jpg"
  alt="Sujal Lokhande"
  className="w-48 h-48 rounded-full object-cover object-[30%_25%]"
/>

      {/* Greeting */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Sujal Lokhande
        <img src="./assets/hand-icon.png" alt="hand waving" className="w-6 mb-1" />
      </h3>

      {/* Main heading */}
      <h1 className="font-Outfit font-bold text-3xl sm:text-6xl lg:text-[66px] text-gray-900 dark:text-white">
        Java & Database Developer
      </h1>

      {/* Short description */}
      <p className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-200">
        I build reliable backend systems using Java and modern database technologies.
      </p>

      {/* Action buttons: Contact & Resume */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact me
          <img src="./assets/right-arrow-white.png" alt="arrow" className="w-4" />
        </a>

        {/* Resume Button */}
        <a
          href="./assets/Sujallokhande_Resume.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          My Resume
          <img src="./assets/download-icon.png" alt="download" className="w-4 dark:invert" />
        </a>
      </div>
    </header>
  )
}