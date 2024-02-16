import { Check } from "lucide-react";
import {Button} from '@/components/ui/button'
import clsx from "clsx";
import Link from "next/link";
export default async function Home() {
  return (
    <>
    <section className="h-full w-full pt-36 relatie flex items-center justify-center flex-col">
      <p className="text-center">Unleash Your Creativity</p>
      <div className='bg-gradient-to-r from primary to-secondary-foreground text-transparent bg-clip-text-relative'>
        <h1 className="text-8xl font-bold text-center md:text-[300px] text-emerald-300">Ink Flow</h1>
      </div>
      <div className='flex justify-center items-center relative md:mt-[-70px]'></div>
    </section>
    </>
  );
}
