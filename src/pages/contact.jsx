import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from '../assets/address.lottie';
import animation1 from '../assets/phone.lottie';
import animation2 from '../assets/email.lottie';
import { useInView } from 'framer-motion';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  // Refs and InView hooks for contact info blocks
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const headingRef = useRef(null);
const paragraphRef = useRef(null);

const headingInView = useInView(headingRef, { once: true });
const paragraphInView = useInView(paragraphRef, { once: true });

  const isAddressInView = useInView(addressRef, { once: true });
  const isPhoneInView = useInView(phoneRef, { once: true });
  const isEmailInView = useInView(emailRef, { once: true });

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
<motion.h2
  ref={headingRef}
  initial={{ opacity: 0, y: -20 }}
  animate={headingInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="text-3xl font-bold text-center text-gray-800 mb-2"
>
  Contact Us
</motion.h2>

<motion.p
  ref={paragraphRef}
  initial={{ opacity: 0, y: 20 }}
  animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="text-xl text-center text-black mb-10"
>
  If you don’t see an answer to your question, you can send us an email from our contact form.
</motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-2 bg-white p-6 rounded space-y-4 shadow-xl border-1"
        >
          <div className="grid md:grid-cols-2 gap-4 text-black">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className="p-3 border rounded w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-black">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="p-3 border rounded w-full"
            />
            <select
              {...register("topic", { required: true })}
              className="p-3 border rounded w-full text-gray-800"
            >
              <option value="">Select Related Topic</option>
              <option value="tour">Tour Inquiry</option>
              <option value="booking">Booking</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <textarea
            placeholder="Message"
            rows="4"
            {...register("message", { required: true })}
            className="p-3 border rounded w-full text-gray-800"
          ></textarea>

          <div className="flex items-center space-x-2 text-gray-800">
            <input type="checkbox" {...register("agree", { required: true })} />
            <label className="text-sm">
              I agree to <span className="text-green-600">terms</span> and{" "}
              <span className="text-green-600">policy</span>.
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-full hover:translate-y-1 transition-all duration-300"
          >
            Send message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-3" ref={addressRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAddressInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-3">
                <div>
                  <DotLottieReact src={animation} autoplay loop style={{ width: 50, height: 50 }} />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Address</h4>
                  <p className="text-gray-600">Moonshine St. 14/05 Light City</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3" ref={phoneRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPhoneInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-5">
                <div>
                  <DotLottieReact src={animation1} autoplay loop style={{ width: 40, height: 40 }} />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <p className="text-gray-600">00 (123) 456 78 90</p>
                  <p className="text-gray-600">00 (987) 654 32 1</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3" ref={emailRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isEmailInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-5">
                <div>
                  <DotLottieReact src={animation2} autoplay loop style={{ width: 50, height: 50 }} />
                </div>
                <div>
                  <h4 className="font-semibold text-black">E-mail</h4>
                  <p className="text-gray-600">GoDekhoPakistan@email.com</p>
                  <p className="text-gray-600">help@GoDekhoPakistan.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
