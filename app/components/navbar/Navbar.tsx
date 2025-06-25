'use client';
import React, { useCallback, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Container } from "../container/Container";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function Navbar({ handleModalOpen }: { handleModalOpen: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const handleLinkClick = useCallback(() => setIsMenuOpen(false), []);
  const handleJoinWaitlist = useCallback(() => {
    setIsMenuOpen(false);
    handleModalOpen();
  }, [handleModalOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white">
          <div className="flex items-center justify-end p-4">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="h-10 w-10">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-full -mt-16">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-6">
                {[
                  { href: "/#feature", label: "Features" },
                  { href: "/#faqs", label: "FAQs" },
                  { href: "/betaAccess", label: "Beta Access" },
                ].map(({ href, label }) => (
                  <NavigationMenuItem key={label}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} text-lg`}
                        onClick={handleLinkClick}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Button onClick={handleJoinWaitlist} className="mt-4 px-8 py-2">
                    Join Waitlist
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link href="/" onClick={handleLinkClick}>
              <Image src="/logo.svg" alt="Logo" width={100} height={100} sizes="100px" />
            </Link>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Container>
        <div className="flex items-center justify-between p-4 mt-4 w-full max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between w-full md:contents">
            {/* Logo */}
            <div className="md:order-first">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={180}
                  height={150}
                  sizes="(max-width: 768px) 120px, 180px"
                  className="w-[120px] h-auto md:w-[180px]"
                />
              </Link>
            </div>

            {/* Hamburger Menu - Mobile Only */}
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10"
            >
              <Menu className="h-6 w-6 hidden" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {[
                  { href: "/#feature", label: "Features" },
                  { href: "/#faqs", label: "FAQs" },
                  { href: "/docs", label: "Beta Access" },
                ].map(({ href, label }) => (
                  <NavigationMenuItem key={label}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <AnimatedButton onClick={handleModalOpen}>Join Waitlist</AnimatedButton>
          </div>
        </div>
      </Container>
    </>
  );
}

export { Navbar };
