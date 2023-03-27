import { ShoppingCartOutlined } from "@ant-design/icons";
import { Image, notification } from "antd";
import React from "react";

const ProductComponent = () => {
  const handleAddBasket = async () => {
    try {
      notification.success({ message: "Thêm giỏ hàng thành công!" });
    } catch (error) {}
  };
  return (
    <div className="h-fix flex w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="md:h-72px relative h-64 w-full">
        <Image
          preview={false}
          src="/fruit.jpeg"
          className="rounded-xl object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>Fruit</p>
          <i>100$</i>
        </div>
        <div
          onClick={handleAddBasket}
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 md:h-[70px] md:w-[70px]"
        >
          <ShoppingCartOutlined className="text-4xl text-white -mt-2 -ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
