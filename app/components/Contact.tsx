"use client";

import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    num: "",
    msg: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name) return toast.error("Name is Required!");
    if (!form.email) return toast.error("Email is Required!");
    if (!form.email.includes("@gmail.com"))
      return toast.error("Enter valid Gmail!");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_atl1rih",
        "template_0eajhtg",
        formRef.current,
        "SxmJVJmvpjWbUMZ__"
      )
      .then(() => {
        toast.success("Your Message Send Successfully 🎉");
        setForm({ name: "", email: "", num: "", msg: "" });
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      });
  };

 return (
  <div>
    <Toaster position="top-right" />

    <div id="contact"></div>

    <div className="contact">
      <div className="cc1">
        <h2 className="headline">🤝 Let's Work Together</h2>
      </div>

      {/* IMPORTANT WRAPPER BACK */}
      <div className="cc2">

        <div className="cbox1">
          <h2>💬 Connect With Me</h2>

          <p>
            Ready to build something amazing together? I'm currently learning web and
            app development, and I love working on creative ideas.
          </p>

          <p>
            If you need help designing a modern website or want to collaborate on an
            app idea, let's connect and make it real.
          </p>

          <div className="contact-info">
            <a href="tel:7206881771">📞 +91 7206881771</a>
            <a href="mailto:mrgurirai77@gmail.com">
              📧 mrgurirai77@gmail.com
            </a>
          </div>
          <div className="social-links">
  <a href="https://instagram.com/YOUR_USERNAME" target="_blank">
    <FaInstagram />
  </a>

  <a href="https://x.com/YOUR_USERNAME" target="_blank">
    <FaXTwitter />
  </a>

  <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank">
    <FaYoutube />
  </a>
</div>
        </div>

        <div className="cbox2">
          <h2>🚀 Start a Project</h2>

          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone"
              value={form.num}
              onChange={(e) =>
                setForm({ ...form, num: e.target.value })
              }
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={form.msg}
              onChange={(e) =>
                setForm({ ...form, msg: e.target.value })
              }
            />

            <button className="sbutton" type="submit">
              Let's Collaborate 🚀
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
); };