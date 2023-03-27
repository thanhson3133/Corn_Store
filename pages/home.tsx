import React from "react";
import Header from "./Hocs/Header";
import { Landing } from "./component/Landing";
import { Tab } from "@headlessui/react";
import ProductComponent from "./component/ProductComponent";
import Basket from "./component/Basket";

const HomePage = () => {
  return (
    <>
      <Header />
      <Basket />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <div className="relative z-40 -mt-[100vh] min-h-screen bg-[#181818]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group vertical>
            <Tab.List className="flex justify-center">
              <Tab
                key={"1"}
                id={"1"}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Apple
              </Tab>
              <Tab
                key={"2"}
                id={"2"}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Grape
              </Tab>
              <Tab
                key={"3"}
                id={"3"}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Orange
              </Tab>
              <Tab
                key={"4"}
                id={"4"}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Melon
              </Tab>
              <Tab
                key={"5"}
                id={"5"}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#35383C] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                Cherry
              </Tab>
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel
                id="1"
                className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </Tab.Panel>
              <Tab.Panel
                id="2"
                className="  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                <ProductComponent />
                <ProductComponent />
              </Tab.Panel>
              <Tab.Panel
                id="3"
                className="  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </Tab.Panel>
              <Tab.Panel
                id="4"
                className="  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </Tab.Panel>
              <Tab.Panel
                id="5"
                className="  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="relative z-10 mt-[0vh] min-h-screen bg-[#9e4141]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promossss
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
