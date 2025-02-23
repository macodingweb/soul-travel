'use client';

import Link from "next/link";
import { navLinks } from "@/constants/Home";
import { FiMenu } from "react-icons/fi";
import { MdOutlineMenuBook } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [exchange, setExchange] = useState(false);

  return (
    <nav className="lg:container flex items-center justify-between py-4 px-6 relative z-[100] max-lg:bg-orange-500 mx-auto">
      <div className="logo uppercase font-bold text-[22px] select-none max-lg:text-white">
        soul<span className="text-orange-500 max-lg:text-white">travel</span>.
      </div>
      <div className="exchange-btn hidden max-lg:block">
        <button onClick={() => setExchange(!exchange)}>
          { exchange ? (<MdOutlineMenuBook size={24} color="#fff" />) : (<FiMenu size={24} color="#fff" />) }
          
        </button>
      </div>
      <ul className={`main-list flex transition-all ${exchange ? "max-lg:top-[100%]" : "max-lg:top-[-400%]"} z-[-1] items-center gap-2 max-lg:flex-col max-lg:absolute max-lg:w-full max-lg:bg-orange-500 max-lg:left-0`}>
        { navLinks.map((link, index) => (
          <li className="list-item px-4 py-2 text-slate-700 transition-all cursor-pointer border-transparent border-0 border-solid border-b-[3px] hover:border-b-orange-500 max-lg:text-white" key={index}>
            <Link href={ link.url }>{ link.text }</Link>
          </li>
        )) }
      </ul> 
      <div className="auth-btns flex items-center gap-4 max-lg:hidden">
        <div className="btn sign-up px-5 py-2 cursor-pointer transition-all hover:text-orange-500">Sign Up</div>
        <div className="btn sign-in px-5 py-2 cursor-pointer bg-orange-500 text-white rounded-[12px] transition-all hover:bg-orange-600">Sign In</div>
      </div>
    </nav>
  )
}
