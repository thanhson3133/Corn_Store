import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-[10px] text-white">
          7
        </span>
        <ShoppingCartOutlined className="-mt-1 cursor-pointer opacity-75 transition hover:opacity-100 text-4xl" />
      </div>
    </Link>
  );
};

export default Basket;
