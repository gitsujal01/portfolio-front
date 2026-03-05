import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {

  const [result, setResult] = useState("");
  const [emailError, setEmailError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user_email = formData.get("user_email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user_email)) {
      setEmailError("Please enter a valid email address 📧");
      return;
    }

    setEmailError("");
    setResult("Sending...");

    try {

      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS response:", res);

      setResult("Message sent successfully ✅");
      e.target.reset();

    } catch (err) {

      console.error("EmailJS error:", err);
      setResult("Failed to send message ❌");

    }
  };

  return (
    <section id="contact" className="w-full px-[10%] py-20 bg-black text-white">

      <h2 className="text-center text-5xl font-bold mb-12">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Form */}

        <form
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 flex flex-col"
        >

          <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

          <label className="mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full mb-6 px-4 py-3 rounded bg-black/60"
          />

          <label className="mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your email"
            className={`w-full mb-2 px-4 py-3 rounded bg-black/60 ${
              emailError ? "border border-red-500" : ""
            }`}
          />

          {emailError && (
            <p className="text-red-500 text-sm mb-4">{emailError}</p>
          )}

          <label className="mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full mb-8 px-4 py-3 rounded bg-black/60"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>

          {result && (
            <p className="mt-4 text-center">{result}</p>
          )}

        </form>

        {/* Contact Info */}

        <div className="flex flex-col items-center justify-center gap-8 text-center">

          <div className="flex items-center gap-4">
            <FaEnvelope />
            sujallokhande23@gmail.com
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt />
            +91 7987445832
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt />
            Pune, India
          </div>

          <div className="flex gap-6 justify-center mt-4">

            <a
              href="https://github.com/gitsujal01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/sujallokhande"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Suja_l/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <SiLeetcode /> LeetCode
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}