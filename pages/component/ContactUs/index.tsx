import { ShoppingCartOutlined } from "@ant-design/icons";
import { Image, notification } from "antd";
import React from "react";

const ContactUs = () => {
  return (
    <div className="h-fix flex w-[350px] select-none flex-col space-y-3 rounded-xl bg-[#f9f9f9d6] p-8 md:h-[428px] md:w-[400px] md:p-10">
      <div className="md:h-72px relative h-52 w-full opacity-100">
        <Image
          preview={false}
          src="/fruit.jpeg"
          className="rounded-xl object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3"></div>
    </div>
  );
};

export default ContactUs;
