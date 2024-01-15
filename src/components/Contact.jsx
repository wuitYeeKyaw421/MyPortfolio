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
      className="p-4 scroll-m-16 w-full text-[lightblue] flex justify-center items-center bg-[#0b1a30]"
    >
      <form
        className="flex flex-col max-w-[40rem] w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="text-center pb-8">
          <p className="HEADER_UNDERLINE">Contact</p>
          <p className="mt-8">Submit the form below and send me an email.</p>
        </div>
        <input
          className="border-none outline-none bg-gray-300 p-2 text-black"
          placeholder="Name"
          type="text"
          name="user_name"
        />
        <input
          className="my-4 p-2 border-none outline-none bg-gray-300 text-black"
          placeholder="Email"
          type="email"
          name="user_email"
        />
        <textarea
          className="bg-gray-300 border-none outline-none text-black p-2"
          placeholder="Message"
          name="message"
          rows={6}
        />
        <input
          className="button SHADOW_BORDER rounded-lg text-center m-2 bg-gray-300 font-bold text-lg text-black hover:bg-gray-800 hover:text-white duration-200 px-6 py-2 my-8 flex items-center mx-auto "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
