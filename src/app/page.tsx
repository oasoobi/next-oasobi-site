import Image from "next/image";
import { Metadata } from "next"
import * as React from "react";

export const metadata: Metadata = {
  title: "home - oasobi"
};

export default function Home() {
  return (
    <main className="pt-60">
      <div>
        <div className="ml-10">
          <Image
            src="/icon.jpg"
            alt="icon"
            width={200}
            height={200}
            className="rounded-full"
          ></Image>
          <div className="mt-5">
            <h1 className="text-3xl inline">Oasobi</h1>
            <p className="inline text-2xl">/おあそび</p>
          </div>
          <div className="mt-10 inline">
            <p>プログラミングとマイクラが好きな人。</p>
            {/* <p>Javaとかもやろうと思っている。</p> */}
            <p>JavaScript, Python, C#, Go, PHPをやったが初心者レベル。</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}
