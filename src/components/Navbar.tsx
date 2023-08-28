"use client";
import React, { useState } from "react";
import { Navbar } from "@/types/navbar.types";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/co-labora-logo.webp";
import burgerLogo from "../../public/icons/nav-burger-menu-icon.svg";
import userIcon from "../../public/icons/nav-user-icon.svg";

export default function Navbar(props: Navbar) {
  const [isActive, setIsActive] = useState(props.page);
  const handleNavHomeClick = (event: any) => {
    setIsActive((current) => (current = "home"));
  };
  const handleNavYourSpacesClick = (event: any) => {
    setIsActive((current) => (current = "your spaces"));
  };
  const handleNavInRentClick = (event: any) => {
    setIsActive((current) => (current = "in rent"));
  };
  const handleNavContactsClick = (event: any) => {
    setIsActive((current) => (current = "contacts"));
  };

  return (
    <header className="flex items-center justify-center w-full h-[56px] px-[65px]">
      <nav className="flex items-center justify-between w-full max-h-[56px] w-full">
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={104}
              height={24}
              alt="Co-Labora logo"
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="flex gap-[35px] items-center">
          <ul className=" flex gap-[35px] text-[14px] text-blue_700 font-semibold">
            <li>
              <Link
                href={"/"}
                className={isActive === "home" ? "navItemFocused" : ""}
                onClick={handleNavHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/your-spaces"}
                className={isActive === "your spaces" ? "navItemFocused" : ""}
                onClick={handleNavYourSpacesClick}>
                Tus espacios
              </Link>
            </li>
            <li>
              <Link
                href={"/in-rent"}
                className={isActive === "in rent" ? "navItemFocused" : ""}
                onClick={handleNavInRentClick}>
                En renta
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href={"/contacts"}
                className={isActive === "contacts" ? "navItemFocused" : ""}
                onClick={handleNavContactsClick}>
                Contáctanos
              </Link>
            </li>
          </ul>
          <span className="flex gap-[14px] items-center border border-secondary rounded-[42px] py-[6px] px-4">
            <button>
              <Image src={burgerLogo} alt="" width={28} height={28} />
            </button>
            <div>
              <Image
                src={userIcon}
                alt=""
                width={28}
                height={28}
                className="rounded-full"
              />
            </div>
          </span>
        </div>
      </nav>
    </header>
  );
}