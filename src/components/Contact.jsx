// import React, { useState, useRef, useEffect } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// const Contact = ({ darkMode }) => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");
//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setStatus("Sending...");
//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus(data.error || "Failed to send message");
//       }
//     } catch (error) {
//       setStatus("Failed to send message");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   // Auto-clear status after 5 seconds
//   useEffect(() => {
//     if (!status) return;
//     const timer = setTimeout(() => setStatus(""), 5000);
//     return () => clearTimeout(timer);
//   }, [status]);

//   const ref = useRef(null);
//   const controls = useAnimation();
//   const inView = useInView(ref, { amount: 0.4 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//     else controls.start("hidden");
//   }, [inView, controls]);

//   const variants = {
//     hidden: { opacity: 0, y: -100 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   // Dynamic theme classes
//   const textColorPrimary = darkMode ? "text-white" : "text-gray-900";
//   const inputBg = darkMode
//     ? "bg-[rgba(255,255,255,0.05)]"
//     : "bg-[rgba(0,0,0,0.03)]";
//   const borderColor = darkMode ? "border-purple-600" : "border-purple-300";
//   const placeholderColor = darkMode ? "placeholder-gray-400" : "placeholder-gray-500";
//   const cardShadow = darkMode
//     ? "shadow-lg hover:shadow-[0_0_30px_#8A2BE2]"
//     : "shadow-md hover:shadow-lg";

//   return (
//     <motion.section
//       ref={ref}
//       id="contact"
//       className={`py-20 px-6 max-w-4xl mx-auto transition-colors duration-500 rounded-xl ${
//         darkMode ? "bg-black" : "bg-[#FFF9F0]"
//       }`}
//       initial="hidden"
//       animate={controls}
//       variants={variants}
//     >
//       <h2 className={`text-5xl font-bold text-center mb-12 ${darkMode ? "text-purple-400" : "text-purple-700"}`}>
//         Get In Touch ✉️
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className={`rounded-xl p-6 border ${borderColor} ${inputBg} backdrop-blur-md ${cardShadow} space-y-6`}
//       >
//         {/* Name */}
//         <div>
//           <label className={`block mb-2 font-semibold ${textColorPrimary}`} htmlFor="name">Name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             placeholder="Your full name"
//             disabled={isSending}
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className={`block mb-2 font-semibold ${textColorPrimary}`} htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             placeholder="your@email.com"
//             disabled={isSending}
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className={`block mb-2 font-semibold ${textColorPrimary}`} htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
//             placeholder="Let me know how I can help!"
//             disabled={isSending}
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className={`bg-purple-500 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition disabled:opacity-50 disabled:cursor-not-allowed`}
//           disabled={isSending}
//         >
//           {isSending ? "Sending..." : "Send Message"}
//         </button>

//         {/* Status */}
//         <p
//           role="alert"
//           aria-live="polite"
//           className={`mt-3 font-semibold ${
//             status.includes("successfully") ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {status}
//         </p>
//       </form>
//     </motion.section>
//   );
// };

// export default Contact;


import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", file: null });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   const data = new FormData();
  //   data.append("name", formData.name);
  //   data.append("email", formData.email);
  //   data.append("message", formData.message);
  //   if (formData.file) data.append("file", formData.file);

  //   try {
  //     const res = await fetch("http://localhost:5000/api/contact", {
  //       method: "POST",
  //       body: data,
  //     });

  //     const result = await res.json();

  //     if (res.ok) {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "", file: null });
  //     } else {
  //       setStatus(result.error || "Failed to send message");
  //     }
  //   } catch (error) {
  //     setStatus("Failed to send message");
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  if (!API_BASE_URL) {
    setStatus("Configuration error: API URL not set");
    console.warn("VITE_API_URL is not defined in .env");
    return;
  }

  const data = new FormData();
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("message", formData.message);
  if (formData.file) data.append("file", formData.file);

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", file: null });
    } else {
      setStatus(result.error || "Failed to send message");
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    setStatus("Failed to send message");
  }
};


  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.4 });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (inView && isScrollingDown) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textColorPrimary = darkMode ? "text-white" : "text-gray-900";
  const placeholderColor = darkMode ? "placeholder-gray-400" : "placeholder-gray-500";
  const inputBg = darkMode ? "bg-[rgba(255,255,255,0.05)]" : "bg-[rgba(0,0,0,0.03)]";
  const borderColor = darkMode ? "border-purple-600" : "border-purple-300";
  const cardShadow = darkMode ? "shadow-lg hover:shadow-[0_0_30px_#8A2BE2]" : "shadow-md hover:shadow-lg";

  return (
    <motion.section
      ref={ref}
      id="contact"
      className={`py-20 px-6 max-w-4xl mx-auto transition-colors duration-500 rounded-xl ${
        darkMode ? "bg-black" : "bg-[#FFF9F0]"
      }`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h2 className={`text-5xl font-bold text-center mb-12 ${darkMode ? "text-purple-400" : "text-purple-700"}`}>
        Get In Touch ✉️
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`rounded-xl p-6 border ${borderColor} ${inputBg} backdrop-blur-md ${cardShadow} space-y-6`}
      >
        <div>
          <label className={`block mb-2 font-semibold ${textColorPrimary}`}>Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className={`block mb-2 font-semibold ${textColorPrimary}`}>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className={`block mb-2 font-semibold ${textColorPrimary}`}>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
            placeholder="Let me know how I can help!"
          />
        </div>

        <div>
          <label className={`block mb-2 font-semibold ${textColorPrimary}`}>Attach File</label>
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded border ${borderColor} ${inputBg} ${textColorPrimary} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {formData.file && <p className="mt-1 text-sm text-gray-500">{formData.file.name}</p>}
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition"
        >
          Send Message
        </button>

        {status && (
          <p className={`mt-3 font-semibold ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {status}
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
