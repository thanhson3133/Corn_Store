import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/signin">
        Logout
      </a>
    ),
    danger: true,
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/info/:id">
        Info
      </a>
    ),
  },
];

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const signIn = () => {};
  const signOut = () => {};
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE]">
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
        <a
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href=""
        >
          Product
        </a>
        <a
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href=""
        >
          Explore
        </a>
        <a
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href=""
        >
          Support
        </a>
        <a
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href=""
        >
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchOutlined className="text-2xl" />

        <Link href={"/checkout"}>
          <div className="relative cursor-pointer">
            <span className="absolute -right-6 top-4 z-50 mr-5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              3
            </span>
            <ShoppingCartOutlined className="text-2xl" />
          </div>
        </Link>
        {isLogin ? (
          <div className="relative cursor-pointer">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="pt-1.5">
                  <span className="text-lg">Ts</span>
                  <DownOutlined className="text-sm" />
                </Space>
              </a>
            </Dropdown>
          </div>
        ) : (
          <Link href={"/signin"}>
            <div className="relative cursor-pointer">
              <UserOutlined className="text-xl" />
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
