'use client';

import { LuMapPin } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaPassportSolid } from "react-icons/lia";
import { MdKey } from "react-icons/md";
import { IoMapOutline } from "react-icons/io5";
import { MdOutlineTour } from "react-icons/md";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setKey(key + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="landing min-h-[100vh] lg:container mx-auto max-lg:flex-col-reverse py-8 px-6 flex items-center justify-between">
      <div className="left">
        <div className="title max-md:text-[42px] max-md:text-center max-lg:mt-[96px] text-[56px] mb-8 grid font-bold text-slate-800 uppercase leading-[1.2]">
          <span>{"let's"} go!</span>
          <span>
            the <span className="text-orange-500">adventure</span> is
          </span>
          <span>waiting for you</span>
        </div>
        <p className="desc text-[18px] leading-[1.7] text-slate-500 w-[550px] mb-8 max-md:w-full">
          Embark on Your Journey Today and Discover Uncharted Wonders Around the
          World - Your Adventure Awaits with Exciting Experiences, Unforgettable
          Memories, and Endless Opportunities
        </p>
        <div className="destination-details w-full bg-white shadow-lg flex items-center p-5 rounded-[18px] justify-between">
          <div>
            <span className="mb-2 text-slate-600 max-md:text-[14px]">Destination</span>
            <div className="info flex items-center">
              <LuMapPin className="text-orange-500" size={20} />
              <span className="ml-2 font-semibold text-slate-800 text-[20px] max-md:text-[12px]">Paris, France</span>
            </div>
          </div>
          <div>
            <span className="mb-2 text-slate-600 max-md:text-[14px]">Date</span>
            <div className="info flex items-center">
              <FaRegCalendarAlt className="text-orange-500" size={20} />
              <span className="ml-2 font-semibold text-slate-800 text-[20px] max-md:text-[12px]">07 September 2025</span>
            </div>
          </div>
          <button type="button" className="search-btn py-3 max-md:text-[14px] px-8 bg-orange-500 text-white rounded-[12px] transition-all hover:bg-orange-600">Search</button>
        </div>
      </div>
      <div className="right">
        <div className="header-bg w-[600px] relative max-md:w-[350px]">
          <Image src={"/header-bg.png"} alt="header-bg" width={550} height={0} className="rounded-full opacity-50" />
          <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-0"
          >
            <Image onLoad={() => setIsLoading(true)} src={"/header.png"} alt="header" width={550} height={0} />
          </motion.div>

          <div className="tickets absolute top-0 left-0 w-full h-full">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="ticket absolute right-[50px] text-[22px] max-md:right-[-50px] flex items-center py-3 px-5 gap-2 bg-white shadow-md rounded-[12px] w-fit text-slate-800">
              <LiaPassportSolid className="text-orange-500" size={28} />
              <span>Flight Tickets</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="ticket absolute left-[-100px] top-[25%] text-[22px] flex items-center py-3 px-5 gap-2 bg-white shadow-md rounded-[12px] w-fit text-slate-800">
              <MdKey className="text-orange-500" size={28} />
              <span>Hotel Booking</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="ticket absolute top-[60%] left-[-20px] text-[22px] flex items-center py-3 px-5 gap-2 bg-white shadow-md rounded-[12px] w-fit text-slate-800">
              <IoMapOutline className="text-orange-500" size={28} />
              <span>Local Events</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="ticket absolute right-[0px] top-[75%] text-[22px] flex items-center py-3 px-5 gap-2 bg-white shadow-md rounded-[12px] w-fit text-slate-800">
              <MdOutlineTour className="text-orange-500" size={28} />
              <span>Tour Guide</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
