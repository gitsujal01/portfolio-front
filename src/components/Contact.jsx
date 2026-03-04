import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [result, setResult] = useState("");
  const [emailError, setEmailError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const userEmail = e.target.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userEmail)) {
      setEmailError("Please enter a valid email address 📧");
      return;
    }

    setEmailError("");
    setResult("Sending...");

  const formData = {
  name: e.target.name.value,
  user_email: e.target.email.value, //user email
  message: e.target.message.value,
};

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResult("Message sent successfully ✅");
        e.target.reset();
      } else {
        console.error(data.error);
        setResult("Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      setResult("Failed to send message ❌");
    }
  };

  return (
    <section id="contact" className="w-full px-[10%] py-20 bg-black text-white">
      <h2 className="text-center text-5xl font-bold mb-12">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* ===== FORM ===== */}
        <form onSubmit={sendEmail} className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 flex flex-col">
          <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

          <label className="mb-2">Name</label>
          <input type="text" name="name" required placeholder="Your name" className="w-full mb-6 px-4 py-3 rounded bg-black/60" />

          <label className="mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className={`w-full mb-2 px-4 py-3 rounded bg-black/60 ${emailError ? "border border-red-500" : ""}`}
          />
          {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

          <label className="mb-2">Message</label>
          <textarea name="message" rows="5" required placeholder="Your message" className="w-full mb-8 px-4 py-3 rounded bg-black/60"></textarea>

          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-semibold transition-colors">
            Send Message
          </button>

          {result && <p className="mt-4 text-center">{result}</p>}
        </form>

        {/* ===== CONTACT INFO ===== */}
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-4"><FaEnvelope /> sujallokhande23@gmail.com</div>
          <div className="flex items-center gap-4"><FaPhoneAlt /> +91 7987445832</div>
          <div className="flex items-center gap-4"><FaMapMarkerAlt /> Pune, India</div>

          <div className="flex gap-6 justify-center mt-4">
            <a href="https://github.com/gitsujal01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com/in/sujallokhande" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><FaLinkedin /> LinkedIn</a>
            <a href="https://leetcode.com/u/Suja_l/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><SiLeetcode /> LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
}