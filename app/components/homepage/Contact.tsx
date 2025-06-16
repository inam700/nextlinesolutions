"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import servicebg from "../../../assets/images/service-bg-1.png";
import { toast } from "sonner";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { send } from "@emailjs/browser";

const contactSchema = z.object({
  email: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required")
    .email("Enter a valid email address"),
  name: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required"),
  phone: z
    .string({ required_error: "Required" })
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number too long")
    .regex(/^\+?\d+$/, "Enter a valid phone number"),
  message: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required")
    .min(10, "Message must be at least 10 characters"),
});

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="lg:p-20 relative mt-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:gap-6 xl:gap-8">
        <div className="group relative p-5 lg:p-10 text-darkPurple bg-porcelain1 shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-2xl md:text-5xl font-extrabold mb-5">
            How can we elevate your <b className="text-mainColor">success?</b>
          </p>
          <p className="text-lg mb-5">
            We believe in the power of dialogue to ignite innovation and drive
            success. Share your contact information, and one of our expert
            business analysts will reach out to discuss how we can transform
            your ambitions into reality.
          </p>
          <p className="text-lg mb-8">
            Let's connect and create something extraordinary together.
          </p>

          <div className="flex items-center gap-5 mb-5">
            <FaEnvelope size={25} className="text-mainColor" />
            <p className="text-lg">contact@nextlinesolutions.com</p>
          </div>

          <div className="flex items-center gap-5 mb-5">
            <FaMobileAlt size={25} className="text-mainColor" />
            <p className="text-lg">+92 (370) 6036749</p>
          </div>
          <div className="flex gap-5 mt-20">
            <Link
              href={
                "https://www.linkedin.com/company/104358802/admin/dashboard/"
              }
              target="_blank"
            >
              <FaLinkedin
                size={25}
                className="cursor-pointer hover:text-mainColor transition-all"
              />
            </Link>
            <Link
              href={"https://www.instagram.com/nextline.solutions/"}
              target="_blank"
            >
              <FaInstagram
                size={25}
                className="cursor-pointer hover:text-mainColor transition-all"
              />
            </Link>
            <Link href={"https://wa.me/923706036749"} target="_blank">
              <FaWhatsapp
                size={25}
                className="cursor-pointer hover:text-mainColor transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="group relative xl:col-span-2 p-5 lg:p-10 bg-porcelain1 shadow-lg hover:shadow-2xl transition duration-300">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid xl:grid-cols-2 gap-10 mb-5">
              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Full Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="border px-5 py-2 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Organization</label>
                <input
                  name="organization"
                  type="text"
                  className="border px-5 py-2 outline-none"
                />
              </div>

              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Phone Number</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="border px-5 py-2 outline-none"
                  placeholder="+92 3001234567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>

              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="border px-5 py-2 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                <label className="font-semibold text-sm">
                  Area of Interest
                </label>
                <select name="area" className="border px-5 py-2 outline-none">
                  <option selected disabled>
                    Select
                  </option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="uiux">UI/UX</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="data">Data Science</option>
                  <option value="cms">E-Commerce</option>
                  <option value="blockchain">Blockchain</option>
                </select>
              </div>

              <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                <label className="font-semibold text-sm">Message</label>
                <textarea
                  rows={7}
                  {...register("message")}
                  className="border px-5 py-2 outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-500 ease-in-out py-3 min-w-44 text-center inline-block"
              >
                {loading ? "Sending" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
