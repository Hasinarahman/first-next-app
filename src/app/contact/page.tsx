"use client";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: "url('/images/image11.png')" }}>
      <h1 className="text-4xl text-white font-bold drop-shadow" >Contact Us</h1>
      <form className="w-4/5 mt-8">
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-lg font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            placeholder="Your message"
          >
          </textarea>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl mx-4 drop-shadow-lg" style={{ textShadow: "2px 2px 4px black" }}>
            Go to Home ↩
          </Link>
          <button
            type="submit"
            className="bg-fuchsia-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
