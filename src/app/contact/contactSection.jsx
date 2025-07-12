// app/components/Contact.js
"use client";

import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="bg-red-500 text-white p-5">Questions</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="p-3 border rounded w-full" />
                <input type="email" placeholder="Email" className="p-3 border rounded w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="p-3 border rounded w-full" />
                <input type="date" className="p-3 border rounded w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Number of People" className="p-3 border rounded w-full" />
                <input type="text" placeholder="Contact Number" className="p-3 border rounded w-full" />
              </div>
              <textarea rows="3" placeholder="Message" className="p-3 border rounded w-full"></textarea>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  By clicking SUBMIT you consent to receiving SMS messages. Messages and data rates may apply. Message frequency will vary. Reply Help to get more assistance. Reply Stop to Opt-out of messaging.
                </p>
              </div>
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded">Submit Now</button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact: MyOrlandoStay.com</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-gray-700" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:crestwynd@earthlink.net" className="text-blue-600 hover:underline">crestwynd@earthlink.net</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-xl text-gray-700" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+14075578999" className="text-blue-600 hover:underline">+1(407) 557-8999</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-xl text-green-600" />
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <a href="tel:+919839048100" className="text-blue-600 hover:underline">+91-9839048100</a>
                </div>
              </div>
              <p className="text-gray-600">
                Response guaranteed between 6 AM - 11 PM.
                <br />
                For immediate response call us at +1(407) 557-8999 or email us. (24 X 7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
