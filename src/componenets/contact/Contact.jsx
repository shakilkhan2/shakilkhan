import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ie6iksg",
        "template_sve4va4",
        form.current,
        "-aKhE8Nklxnfk-Rta"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-500 text-center my-8">
            <span className="text-amber-500">&lt;</span>Contact
            <span className="text-amber-500">&gt;</span>
          </h1>
          <div>
            <div className="">
              <p className="mt-4 text-lg text-gray-600">
                Have a question or want to work together? Send me a message!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="py-3 px-4 border block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-amber-500 rounded-md"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="py-3 border border-amber-500 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500  rounded-md"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border border-amber-500 rounded-md"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2 text-right">
              <button
                type="submit"
                className="inline-flex mt-4 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="md:w-1/2 mx-auto mt-28">
            <div className="flex items-center  sm:mt-0">
              <div>
                <FaEnvelope className="text-center text-2xl ms-4" />
              </div>
              <p className="text-xl ms-2">dev.shakilkhan@gmail.com</p>
            </div>
            <div className="flex  items-center mt-2 sm:mt-0">
              <div>
                <FaPhone className="text-center text-2xl ms-4" />
              </div>
              <p className="text-xl ms-2">+8801882339866</p>
            </div>
            <div className="flex mt-4 ms-16">
              <a
                href="https://github.com/shakilkhan2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mx-4 text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/khanshakil99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://web.facebook.com/itzshakill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl ms-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
