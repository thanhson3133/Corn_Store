import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Image } from "antd";

export const Header = () => {
  const signIn = () => {};
  const signOut = () => {};
  return (
    <header className="p4 sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE]">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href={"/"}>
          <div className="relative h-10 w-5 pt-1.5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              preview={false}
              src="https://e7.pngegg.com/pngimages/727/248/png-clipart-popcorn-popcorn-thumbnail.png"
              width={25}
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink" href="">
          Product
        </a>
        <a className="headerLink" href="">
          Explore
        </a>
        <a className="headerLink" href="">
          Support
        </a>
        <a className="headerLink" href="">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchOutlined className="text-xl" />

        <Link href={"/checkout"}>
          <div className="relative cursor-pointer">
            <span className="absolute -right-6 -top-1 z-50 mr-5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              3
            </span>
            <ShoppingCartOutlined className="text-xl" />
          </div>
        </Link>
      </div>
    </header>
  );
};
