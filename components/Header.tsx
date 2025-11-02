"use client";
import { useState } from "react";
import Image from "next/image";
import { scrollToElement } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: "Layanan", key: "services" },
    { label: "Portfolio", key: "portfolio" },
    { label: "Testimonial", key: "testimonials" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (key: string) => {
    scrollToElement(key);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-darkBg/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto py-3 md:py-5 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative h-10 md:h-12 w-10 md:w-12">
              <Image
                quality={100}
                src="/logo.png"
                alt="Logo"
                fill
                style={{
                  objectFit: "contain",
                  transform: "scale(1.8)",
                }}
              />
            </div>

            {/* Mobile Hamburger Button */}
            <div className="block md:hidden">
              {isMenuOpen ? (
                <X
                  className="size-6 text-white cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <button
                  onClick={toggleMenu}
                  className="bg-primary rounded p-1.5"
                >
                  <Menu className="size-5" />
                </button>
              )}
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {links.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white font-medium cursor-pointer hover:text-gray-300 transition-colors"
                    onClick={() => handleLinkClick(item.key)}
                  >
                    {item.label}
                  </li>
                ))}
                <li>
                  <Button className="group" size="sm">
                    Contact{" "}
                    <ArrowRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-darkBg/95 backdrop-blur-sm border-b border-white/10 z-40 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-start px-4">
          <ul className="space-y-8">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="text-white font-medium text-2xl hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Button className="group" size="sm">
                Contact{" "}
                <ArrowRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
