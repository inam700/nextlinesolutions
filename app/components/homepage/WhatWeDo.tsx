"use client";
import React from "react";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaBrain,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";

import Image from "next/image";

import javascript from "../../../assets/icons/services/tech/frontend/js.png";
import typescript from "../../../assets/icons/services/tech/frontend/ts.png";
import tailwind from "../../../assets/icons/services/tech/frontend/tailwind.png";
import shadcn from "../../../assets/icons/services/tech/frontend/shadcn.png";
import reactjs from "../../../assets/icons/services/tech/frontend/react.png";
import nextjs from "../../../assets/icons/services/tech/frontend/next.png";

import figma from "../../../assets/icons/services/tech/design/figma.png";
import xd from "../../../assets/icons/services/tech/design/xd.png";

import nodejs from "../../../assets/icons/services/tech/backend/node.png";
import java from "../../../assets/icons/services/tech/backend/java.png";
import express from "../../../assets/icons/services/tech/backend/express.png";
import springboot from "../../../assets/icons/services/tech/backend/springboot.png";

import python from "../../../assets/icons/services/tech/ds-ai/python.png";
import snowflake from "../../../assets/icons/services/tech/ds-ai/snowflake.png";
import tensorflow from "../../../assets/icons/services/tech/ds-ai/tensorflow.png";
import openai from "../../../assets/icons/services/tech/ds-ai/openai.png";
import numpy from "../../../assets/icons/services/tech/ds-ai/numpy.png";
import keras from "../../../assets/icons/services/tech/ds-ai/keras.png";

import docker from "../../../assets/icons/services/tech/devops/docker.png";
import kubernetes from "../../../assets/icons/services/tech/devops/kubernetes.png";
import cloud from "../../../assets/icons/services/tech/devops/cloud.png";
import azure from "../../../assets/icons/services/tech/devops/azure.png";
import aws from "../../../assets/icons/services/tech/devops/aws.png";

import android from "../../../assets/icons/services/tech/mobile/android.png";
import ios from "../../../assets/icons/services/tech/mobile/ios.png";
import swift from "../../../assets/icons/services/tech/mobile/swift.png";
import flutter from "../../../assets/icons/services/tech/mobile/flutter.png";

const WhatWeDo = () => {
  return (
    <section id="services" className="px-5 xl:px-20 pt-20 relative">
      <p className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
        <span className="text-mainColor">Technology </span> That Elevates You
      </p>
      <p className="text-lg mb-20 mt-3">
        Unleash your potential. Let's explore how we can help you succeed.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* UI/UX Design - span 2 */}
        <div className="col-span-1 lg:col-span-2 bg-porcelain1 p-10 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3 mb-5">
            <FaPaintBrush size={40} />
            <h3 className="text-2xl font-bold">UI/UX Design</h3>
          </div>
          <p className="text-lg min-h-[150px]">
            We design intuitive and elegant user interfaces that enhance
            usability and delight users across web and mobile platforms.
          </p>
          <div className="border-b border-mainColor mt-4" />
          <div className="flex flex-wrap gap-4 mt-6 text-xl">
            <Image src={figma} alt="" width={40} className="" />
            <Image src={xd} alt="" width={40} className="" />
          </div>
        </div>

        {/* Web Development - span 3 */}
        <div className="col-span-1 lg:col-span-4 bg-porcelain1 p-10 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3 mb-5">
            <FaLaptopCode size={40} />
            <h3 className="text-2xl font-bold">Web Development</h3>
          </div>
          <p className="text-lg min-h-[150px]">
            We build fast, secure, and scalable web applications tailored to
            your goals. From frontend to backend, our full-stack solutions are
            optimized for performance, reliability, and growth.
          </p>
          <div className="border-b border-mainColor mt-4" />
          <div className="flex flex-wrap gap-4 mt-6 text-pink text-xl">
            <Image src={javascript} alt="" width={40} className="" />
            <Image src={typescript} alt="" width={40} className="" />
            <Image src={tailwind} alt="" width={40} className="" />
            <Image src={reactjs} alt="" width={40} className="" />
            <Image src={nextjs} alt="" width={40} className="" />

            <Image src={nodejs} alt="" width={40} className="" />
            <Image src={express} alt="" width={40} className="" />
            <Image src={java} alt="" width={40} className="" />
            <Image src={springboot} alt="" width={40} className="" />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 bg-porcelain1 p-10 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3 mb-5">
            <FaMobileAlt size={40} />
            <h3 className="text-2xl font-bold">Mobile App Development</h3>
          </div>
          <p className="text-lg min-h-[150px]">
            We craft high-performance mobile apps for iOS and Android using
            modern frameworks like React Native and Flutter, ensuring a smooth
            and responsive user experience.
          </p>
          <div className="border-b border-mainColor mt-4" />

          <div className="flex flex-wrap gap-4 mt-6 text-pink text-xl">
            <Image src={android} alt="" width={40} className="" />
            <Image src={ios} alt="" width={40} className="" />
            <Image src={swift} alt="" width={40} className="" />
            <Image src={flutter} alt="" width={40} className="" />
            <Image src={reactjs} alt="" width={40} className="" />
          </div>
        </div>
        {/* Data & AI - span 3 */}
        <div className="col-span-1 lg:col-span-2 bg-porcelain1 p-10 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3 mb-5">
            <FaBrain size={40} />
            <h3 className="text-2xl font-bold">Data & AI</h3>
          </div>
          <p className="text-lg min-h-[150px]">
            Unlock the power of your data with intelligent AI solutions. We help
            you extract insights, make predictions, and drive smarter decisions.
          </p>
          <div className="border-b border-mainColor mt-4" />
          <div className="flex flex-wrap gap-4 mt-6 text-pink text-xl">
            <Image src={python} alt="" width={40} className="" />
            <Image src={tensorflow} alt="" width={40} className="" />
            <Image src={openai} alt="" width={40} className="" />
            <Image src={numpy} alt="" width={40} className="" />
            <Image src={keras} alt="" width={40} className="" />
          </div>
        </div>

        {/* DevOps - span 2 */}
        <div className="col-span-1 lg:col-span-2 bg-porcelain1 p-10 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3 mb-5">
            <FaServer size={40} />
            <h3 className="text-2xl font-bold">DevOps</h3>
          </div>
          <p className="text-lg min-h-[150px]">
            Automate your infrastructure and streamline CI/CD pipelines to
            achieve reliable, scalable, and efficient software delivery.
          </p>
          <div className="border-b border-mainColor mt-4" />

          <div className="flex flex-wrap gap-4 mt-6 text-pink text-xl">
            <Image src={docker} alt="" width={40} className="" />
            <Image src={kubernetes} alt="" width={40} className="" />
            <Image src={cloud} alt="" width={40} className="" />
            <Image src={azure} alt="" width={40} className="" />
            <Image src={aws} alt="" width={40} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
