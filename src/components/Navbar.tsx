"use client";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5"

const navLinks = ["Home", "Our Services", "About Us", "Contact Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <nav className=" flex items-center justify-between py-6 px-4 sticky w-full z-40 mulish bg-white">
      <Image src={"/ajarra.svg"} alt="logo" width={110} height={50} />
      <button
        className=" text-[#5E2D1F] md:hidden"
        onClick={() => setOpen(true)}
      >
        <HiOutlineMenuAlt3 size={30} />
      </button>

      <ul className="items-center mulish justify-between gap-2 hidden md:flex">
        {navLinks.map((link) => (
          <li
            key={link}
            onClick={() => setActive(link)}
            className={` border-b-3 border-transparent p-1 text-xs lg:text-base ${
              active === link ? " border-b-[#572514]" : ""
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="items-center justify-between gap-5 text-sm lg:text-base font-bold hidden md:flex">
        <button className=" text-[#572514] px-4 py-1 lg:px-6 lg:py-3 border border-[#572514] rounded-3xl flex items-center justify-center">
          Become a Vendor
        </button>
        <button className=" text-white bg-[#572514] rounded-3xl px-4 py-1 lg:px-6 lg:py-3 flex items-center justify-center">
          Plan your Event
        </button>
      </div>

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-[#5E2D1F] hover:text-gray-100"
            aria-label="Close menu"
          >
            <IoClose size={25} />
          </button>
        </div>

        {/* Sidebar links */}
        <nav className="p-4 space-y-4 font-medium text-gray-700">
          <a
            href="#"
            className="block hover:text-[#572514]"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block hover:text-[#572514]"
            onClick={() => setOpen(false)}
          >
            Our Services
          </a>
          <a
            href="#"
            className="block hover:text-[#572514]"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="#"
            className="block hover:text-[#572514]"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
          <button className=" text-[#572514] px-6 py-3 border border-[#572514] rounded-3xl flex items-center justify-center">
            Become a Vendor
          </button>
          <button className=" text-white bg-[#572514] rounded-3xl px-6 py-3 flex items-center justify-center">
            Plan your Event
          </button>
        </nav>
      </aside>
    </nav>
  );
};

export default Navbar;
