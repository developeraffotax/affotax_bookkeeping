import axios from "axios";
import { useState } from "react";

export default function ContactUs() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "", });
  const [status, setStatus] = useState({ success: "", error: "", });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( formData.name.length < 1 || formData.email.length < 1 || formData.message.length < 1 ) {
      return setStatus({ success: "", error: "All fields are required" });
    }

    setStatus({ success: "Sending...", error: "" });

    try {
      const response = await axios.post("/api/contact", formData);

      setStatus({ success: "Message sent successfully.", error: "" });
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus({ success: "", error: "Failed to send message. Please try again later.", });
    }
  };


  
  return (
    <section
      className="  bg-gradient-to-b from-white-500 to-white-300 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
    
            <h2 className="font-heading mb-4 font-bold tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-3xl sm:text-6xl"> Get an Instant Quote </h2>
            <p className="text-base font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-400"> Feel Free to contact us anytime | we're available 24/7 for you </p>

          </div>
        </div>


        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6 mt-5">
              <p className=" mb-12 text-lg text-gray-600 dark:text-slate-400">
                We’re here to help with all your bookkeeping needs! Whether you
                have questions about our services or need assistance with your
                accounts, don’t hesitate to reach out. Fill out the form below
                or contact us directly, and our friendly team will get back to
                you as soon as possible.
              </p>


              <ul className="mb-6 md:mb-0">

                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" > <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"> Our Address </h3>
                    <p className="text-gray-600 dark:text-slate-400"> H#1049, St 56, Sector i14/3{" "} </p>
                    <p className="text-gray-600 dark:text-slate-400"> Islamabad, Pakistan </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" > <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path> <path d="M15 7a2 2 0 0 1 2 2"></path> <path d="M15 3a6 6 0 0 1 6 6"></path> </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"> Contact </h3>
                    <p className="text-gray-600 dark:text-slate-400"> Phone: 0515209208 </p>
                    <p className="text-gray-600 dark:text-slate-400"> Mail: info@affotaxbookkeeping.com </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" > <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 7v5l3 3"></path> </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"> Working hours </h3>
                    <p className="text-gray-600 dark:text-slate-400"> Monday - Friday: 08:00 - 17:00 </p>
                    {/* <p className="text-gray-600 dark:text-slate-400"> Saturday &amp; Sunday: 08:00 - 12:00 </p> */}
                  </div>
                </li>

              </ul>


            </div>

            <div className="card h-fit max-w-6xl  mt-5 bg-gray-500/20   p-12 rounded-xl shadow-lg  " id="form" >
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">

                  <div className="mx-0 mb-1 sm:mb-4">

                    <div className="mx-0 mb-1 sm:mb-4">
                      <label for="name" className="pb-1 text-xs uppercase tracking-wider" ></label>
                      <input type="text" value={formData.name} onChange={handleChange} id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                    </div>

                    <div className="mx-0 mb-1 sm:mb-4">
                      <label for="email" className="pb-1 text-xs uppercase tracking-wider" ></label>
                      <input type="email" value={formData.email} onChange={handleChange} id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                    </div>

                  </div>

                  <div className="mx-0 mb-1 sm:mb-4">
                    <label for="message" className="pb-1 text-xs uppercase tracking-wider" ></label>
                    <textarea id="textarea" value={formData.message} onChange={handleChange} name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" ></textarea>
                  </div>

                </div>

                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-500 hover:bg-gradient-to-br hover:from-blue-500/50 hover:to-cyan-500/50 text-xl text-white-500 px-6 py-3 font-xl rounded-md sm:mb-0" > Send Message </button>
                </div>

              </form>

              {status.success && ( <p className="text-center text-green-500 mt-4"> {status.success} </p> )}
              {status.error && ( <p className="text-center text-red-500 mt-4">{status.error}</p> )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
