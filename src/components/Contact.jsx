import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pi4ovsl",
        "template_tixrut9",
        form.current,
        "wFRfwMyakiIYb8_5l"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email is sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="p-4 w-full flex justify-center items-center LIGHT DARK"
    >
      <form
        className="flex flex-col max-w-[40rem] w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="text-center pb-8">
          <p className="HEADER_UNDERLINE">Contact</p>
          <p className="mt-8 text-xl sm:text-2xl dark:text-[#add8e6b3] text-blue-900">
            Submit the form below and send me an email.
          </p>
        </div>
        <input
          className="border-none outline-none p-2 rounded-lg dark:bg-gray-300 bg-gray-700 dark:text-black text-white PLACEHOLDER"
          placeholder="Name"
          type="text"
          name="user_name"
          required
        />
        <input
          className="my-4 p-2 border-none outline-none rounded-lg dark:bg-gray-300 bg-gray-700 dark:text-black text-white PLACEHOLDER"
          placeholder="Email"
          type="email"
          name="user_email"
          required
        />
        <textarea
          className="border-none outline-none p-2 rounded-lg dark:bg-gray-300 bg-gray-700 dark:text-black text-white PLACEHOLDER"
          placeholder="Message"
          name="message"
          rows={6}
          required
        />
        <input
          className="button SHADOW_BORDER rounded-lg text-center m-2 dark:bg-gray-300 bg-gray-700 font-bold text-lg dark:text-black text-white hover:dark:bg-gray-800 hover:bg-gray-300 hover:dark:text-white hover:text-black duration-200 px-6 py-2 my-8 flex items-center mx-auto "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
