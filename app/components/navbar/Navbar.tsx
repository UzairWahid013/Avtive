'use client';
import React, { useCallback, useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Container } from "../container/Container";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react"
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function Navbar({ handleModalOpen }: { handleModalOpen: () => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen])

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const handleLinkClick = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

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
                        <Button 
                            onClick={toggleMenu} 
                            variant="ghost" 
                            size="icon"
                            className="h-10 w-10"
                        >
                            <X className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full -mt-16">
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-col space-y-6">
                                <NavigationMenuItem>
                                    <Link href="/#feature" legacyBehavior passHref>
                                        <NavigationMenuLink 
                                            className={`${navigationMenuTriggerStyle()} text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            Features
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/#faqs" legacyBehavior passHref>
                                        <NavigationMenuLink 
                                            className={`${navigationMenuTriggerStyle()} text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            FAQs
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink 
                                            className={`${navigationMenuTriggerStyle()} text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            Beta Access
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Button 
                                        onClick={handleJoinWaitlist}
                                        className="mt-4 px-8 py-2"
                                    >
                                        Join Waitlist
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Logo at bottom */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <Link href="/" onClick={handleLinkClick}>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={100}
                                height={100}
                                sizes="100px"
                            />
                        </Link>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <Container>
                <div className="flex items-center justify-between p-4 mt-4 w-full max-w-[1000px] mx-auto">
                    {/* Mobile: Hamburger menu on left, Logo on right */}
                    <div className="flex items-center justify-between w-full md:contents">
                        {/* Hamburger Menu - Mobile Only */}
                        

                        {/* Logo - Right side on mobile, left side on desktop */}
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
                        <Button 
                            onClick={toggleMenu} 
                            variant="ghost" 
                            size="icon"
                            className="md:hidden h-10 w-10"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/#feature" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                                    Features
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/#faqs" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                                            FAQs
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                                            Beta Access
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="hidden md:block">
                        <AnimatedButton onClick={handleModalOpen}>
                            Join Waitlist
                        </AnimatedButton>
                    </div>
                </div>
            </Container>
        </>
    );
}

export { Navbar };