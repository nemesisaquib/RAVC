import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false); // 👈 state to show note after submit

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_iwyzdca',
            'template_w51m044',
            form.current,
            'Eamt-dP7EHHoaGbgJ'
        ).then(
            (result) => {
                console.log(result.text);
                setSubmitted(true);      // ✅ Show the note
                form.current.reset();     // ✅ Reset the form
            },
            (error) => {
                console.log(error.text);
                alert("❌ Error Sending Message.");
            }
        );
    };

    return (
        <div id="contact" className="relative py-4 px-4 bg-white">
            <div className=" hidden md:block absolute left-10 top-20 -translate-y-1/2 z-30">
                <img src="/logo3.svg" alt="Left Centered Logo" className="w-[140px] h-auto object-cover bg-transparent" />
            </div>
            <div className="hidden md:block absolute right-10 bottom-10 -translate-y-1/2 z-30">
                <img src="/logo3.svg" alt="Right Centered Logo" className="w-[140px] h-auto object-cover bg-transparent" />
            </div>

            {/* Heading */}
            <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-gray-900 text-center mb-4">
                Send Us a Message
            </h2>

            {/* Centered Form */}
            <div className="flex justify-center">
                <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="to_name"
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dab369]"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company / Organization (optional)
                            </label>
                            <input
                                type="text"
                                name="company"
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="contact"
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>

                        {/* Type of Inquiry */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type of Inquiry
                            </label>
                            <select
                                name="inquiry_type"
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500"
                            >
                                <option value="">Select an option</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Media">Media</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#dab369] hover:bg-[#cda14f] text-white font-medium px-6 py-2 rounded-full flex items-center gap-2 transition cursor-pointer"
                        >
                            <Send size={16} />
                            Submit Inquiry
                        </button>

                        {/* Note */}
                        {submitted && (
                            <p className="text-center text-sm text-green-600 mt-2">
                                 Our team will get back to you within 1–2 business days.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
