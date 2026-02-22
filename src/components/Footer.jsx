import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-t from-[#1a0033] to-[#140021] text-white py-10">
      {/* Contact Section */}
      <div className="text-center mb-8">
        <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="./assets/mail_icon.png" alt="Mail" className="w-5 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="Mail" className="w-5 hidden dark:block" />
          <a
            href="mailto:sujallokhande23@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            sujallokhande23@gmail.com
          </a>
        </div>
      </div>

      {/* Links and Copyright */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 pt-4">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Sujal Lokhande. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/gitsujal01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sujallokhande"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/sujal.lokhande23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Optional Footer Bottom Note */}
      <div className="text-center text-xs text-gray-400 mt-4">
        Designed & Developed by Sujal Lokhande
      </div>
    </footer>
  );
}