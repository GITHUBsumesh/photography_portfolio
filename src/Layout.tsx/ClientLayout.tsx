"use client"; // This is now a Client Component

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY, lastScrollY);
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      {/* Navbar with smooth hide/show transition */}
      <div className={`fixed top-0 left-0 w-full z-50 h-[50px]  transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="">{children}</main>
    </div>
  );
}
