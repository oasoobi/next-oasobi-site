import Image from "next/image";
import { Metadata } from "next"
import * as React from "react";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "home - oasobi"
};

export default function Home() {
  return (
    <>
      <div className="pt-[20%] md:pt-[10%] ml-10 mr-10">
        <div className="lg:flex">
          <Image src="/icon.svg" alt="icon" width={175} height={175} className="rounded-full md:ml-8"></Image>
          <div className="mt-[2%] md:ml-[5%]">
            <p className="inline text-3xl">おあそび</p>
            <p>プログラミングとマイクラが好きな人。</p>
            <p>Javaとかもやろうと思っている。</p>
          </div>
        </div>
        <div className="md:flex mt-20 md:mt-40 select-none" draggable="false">
          <a href="https://youtube.com/@oasoby">
            <div className="border border-solid border-[#FF0000] border-[1px] w-[100%] md:w-[20vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer shadow-[0_20px_50px_rgba(255,_0,_0,_0.5)]  transform hover:scale-95 transition-transform duration-300 hover:shadow-none">
              <div className="flex ml-5 mt-5 items-center">
                <img src="/youtube.svg" alt="" className="dark:invert mr-2 font-bold w-[30px] h-[30px] md:w-[27px] md:h-[27px]" />
                <p className="text-[1.2rem] md:text-[1rem]">Youtube</p>
              </div>
            </div>
          </a>
          <a href="https://x.com/oasoby">
            <div className="border border-solid border-[#1A8CD8] border-[1px] w-[100%] md:w-[20vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]  transform hover:scale-95 transition-transform duration-300 hover:shadow-none">
              <div className="flex ml-5 mt-5 items-center">
                <img src="/twitter.svg" alt="" className="dark:invert mr-2 font-bold w-[30px] h-[30px] md:w-[27px] md:h-[27px]" />
                <p className="text-[1.2rem] md:text-[1rem]">Twitter</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/oasoby">
            <div className="border border-solid border-[#000000] border-[1px] dark:border-[#FFFFFF] w-[100%] md:w-[20vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer shadow-[0_15px_45px_rgba(0,_0,_0,_0.5)] dark:shadow-[0_15px_45px_rgba(255,_255,_255,_0.5)]  transform hover:scale-95 transition-transform duration-300 hover:shadow-none">
              <div className="flex ml-5 mt-5 items-center">
                <img src="/github.svg" alt="" className="dark:invert mr-2 font-bold w-[30px] h-[30px] md:w-[27px] md:h-[27px]" />
                <p className="text-[1.2rem] md:text-[1rem]">GitHub</p>
              </div>
            </div></a>
          <Link href="/downloads">
            <div className="border border-solid border-[#000000] border-[1px] dark:border-[#FFFFFF] w-[100%] md:w-[23vw] h-[20vh] rounded-[20px] mb-10 md:ml-5 md:mr-5 cursor-pointer transform hover:scale-95 transition-transform duration-300">
              <div className="flex ml-5 mt-5 items-center">
                <img src="/downloads.svg" alt="" className="dark:invert  mr-2 font-bold w-[30px] h-[30px] md:w-[23px] md:h-[23px]" />
                <p className="text-[1.2rem] md:text-[1rem]">Downloads</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
