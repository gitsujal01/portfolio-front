import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [result, setResult] = useState("");
  const [mobileError, setMobileError] = useState("");

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    const mobile = e.target.mobile.value.trim();
    const mobileRegex = /^[6-9]\d{9}$/; // Valid 10-digit Indian number

    if (!mobileRegex.test(mobile)) {
      setMobileError("Please enter a valid 10-digit Indian mobile number 📱");
      return;
    }

    setMobileError("");
    setResult("Sending...");

    emailjs
      .sendForm(
        "service_4zmc018", // Your service ID
        "template_zxkhsrw", // Your template ID
        e.target,
        "1ZtCv7jT8v5SeXBPa" // Your public key
      )
      .then(
        (res) => {
          console.log(res.text);
          setResult("Message sent successfully ✅");
          e.target.reset();
        },
        (err) => {
          console.log(err.text);
          setResult("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="w-full px-[10%] py-20 bg-black text-white">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-12">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* ===== FORM ===== */}
        <form
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 flex flex-col"
        >
          <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

          {/* Name Input */}
          <label className="mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full mb-6 px-4 py-3 rounded bg-black/60"
          />

          {/* Mobile Input with Validation */}
          <label className="mb-2">Mobile</label>
          <input
            type="text"
            name="mobile"
            required
            placeholder="Your mobile number"
            className={`w-full mb-2 px-4 py-3 rounded bg-black/60 ${
              mobileError ? "border border-red-500" : ""
            }`}
          />
          {mobileError && (
            <p className="text-red-500 text-sm mb-4">{mobileError}</p>
          )}

          {/* Message Input */}
          <label className="mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full mb-8 px-4 py-3 rounded bg-black/60"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-semibold transition-colors"
          >
            Send Message
          </button>

          {/* Result Message */}
          {result && <p className="mt-4 text-center">{result}</p>}
        </form>

        {/* ===== CONTACT INFO ===== */}
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-4">
            <FaEnvelope /> sujallokhande23@gmail.com
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt /> +91 7987445832
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt /> Pune, India
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-4">
            <a
              href="https://github.com/gitsujal01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sujallokhande"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Suja_l/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <SiLeetcode /> LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}