import React from "react";
import Button from "./Button";
import { Image } from "antd";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center">
      <div className="">
        <h1 className="-mt-40 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Interllect</span>
          <span className="block">Driven By Values</span>
        </h1>
        <div className="space-x-8">
          <Button title="Buy Now" />
          <a
            className="relative cursor-pointer text-lg font-medium before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-green-500 before:transition-all before:duration-200 hover:before:scale-x-100"
            href=""
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="relative pt-10 pl-20 hidden h-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          preview={false}
          src="/fruit.jpeg"
          width={700}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};
export default Landing;
