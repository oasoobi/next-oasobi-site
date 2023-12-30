import Image from "next/image";
import { Metadata } from "next"
import * as React from "react";

export const metadata: Metadata = {
  title: "home - oasobi"
};

export default function Home() {
  return (
    <>
      <div className="pt-[20%] md:pt-[10%] ml-10 mr-10">
        <div className="md:flex">
          <Image src="/icon.jpg" alt="icon" width={175} height={175} className="rounded-full md:ml-8"></Image>
          <div className="mt-[2%] md:ml-[5%]">
            <p className="inline text-3xl">おあそび</p>
            <p>プログラミングとマイクラが好きな人。</p>
            <p>Javaとかもやろうと思っている。</p>
          </div>
        </div>
        <div className="md:flex mt-10 md:mt-20 select-none" draggable="false">
          <div className="boarder border-solid border-[#FF0000] border-[1px] w-[100%] md:w-[25vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer">
            <div className="flex ml-8 mt-5">
              <img src="/youtube.svg" width={30} height={30} alt="yt logo" className="dark:invert mr-2 font-bold"/>
              <p className="text-2xl">Youtube</p>
            </div>
          </div>
          <div className="border border-solid border-[#1A8CD8] border-[1px] w-[100%] md:w-[25vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer">
            <div className="flex ml-8 mt-5">
              <img src="/twitter.svg" width={30} height={30} alt="twitter logo" className="dark:invert mr-2 font-bold"/>
              <p className="text-2xl">Twitter</p>
            </div>
          </div>
          <div className="border border-solid border-[#000000] border-[1px] dark:border-[#FFFFFF] w-[100%] md:w-[25vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer">
            <div className="flex ml-8 mt-5">
              <img src="/github.svg" width={30} height={30} alt="github logo" className="dark:invert mr-2 font-bold"/>
              <p className="text-2xl">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
