"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await emailjs.send(
          "service_7d96cjr",
          "template_6jsy3vn",
          formData,
          "3g7fmoqhPZJraRgJ4"
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Form sent successfully", { position: "top-center" });
      } catch (error) {
        toast.error("Error submitting form", { position: "top-center" });
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border dark:border-lime-500 shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-2xl dark:text-white text-lime-400 font-semibold mb-4">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 dark:text-white font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 dark:text-white font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-600 dark:text-white font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.subject && "border-red-500"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-600 dark:text-white font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.message && "border-red-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-lime-500 dark:bg-lime-500 text-white rounded-md hover:bg-lime-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>

        {/* Right Side - Image/ Icon */}
<div className="flex flex-col justify-center items-center text-center space-y-4">
  <FaEnvelope className="text-8xl text-lime-500 dark:text-lime-400" />
  
  <h1 className="text-2xl font-bold dark:text-white text-lime-400">
    Let&apos;s Build Something Amazing Together!
  </h1>
  
  <p className="text-gray-600 dark:text-gray-300 max-w-md">
    Got a project in mind or just want to connect? Whether you need a full-stack solution, collaboration on a challenging tech project, or have any questions about my work, I’m here to help. Feel free to drop me a message, and I’ll get back to you as soon as possible!
  </p>
</div>

      </div>
    </div>
  );
};

export default Contact;
