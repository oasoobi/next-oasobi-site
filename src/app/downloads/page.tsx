import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "downloads"
};
export default function Home() {
    return (
        <main className='pt-20 ml-10'>
            <h1 className='text-2xl'>Downloads</h1>
            <div className='h-screen flex justify-center items-center'>
                <h1 className='text-4xl text-center'>Comming soon...</h1></div>
        </main>
    )
}