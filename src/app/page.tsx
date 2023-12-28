import Image from "next/image";
import * as React from "react";

export default function Home() {
 return (
   <>
     <div className="ml-10 pt-60">
       <Image
         src="/icon.jpg"
         alt="icon"
         width={200}
         height={200}
         className="rounded-full"
       />
       <div className="mt-5">
         <p className="inline text-3xl">/おあそび</p>
       </div>
       <div className="mt-10 inline">
         <p>プログラミングとマイクラが好きな人。</p>
         <p>Javaとかもやろうと思っている。</p>
         <p>JavaScript, Python, C#, Go, PHPをやったが初心者レベル。</p>
       </div>
     </div>
   </>
 );
}
