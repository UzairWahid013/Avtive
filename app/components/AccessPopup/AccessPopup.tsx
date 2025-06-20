'use client'
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { GradientHeading } from "../headings/GradientHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Success from "../success/Success";
import Link from "next/link";
import { X } from 'lucide-react';

export default function AccessPopup({ handleModalClose }: { handleModalClose: () => void }) {
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        try {
            setLoading(true);
            await addDoc(collection(db, "Users"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                createdAt: serverTimestamp(),
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
            });

            setIsSuccess(true)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    if (isSuccess) {
        return <Success />
    }
    return (
        <div className="overflow-x-hidden w-screen bg-black/30 h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="w-[95%] py-20 md:w-full p-6 md:w-[60%] md:p-20 md:max-w-[600px] bg-white rounded-2xl">
                <div className="flex justify-end items-top -mt-[3.5rem] md:-mr-[4rem]" onClick={handleModalClose}>
                   <X />
                </div>
                <div className="flex w-full items-center justify-center mb-10 mt-6">
                    <Link href={'/'}>
                        <Image
                            src="/logo_new.svg"
                            alt="Logo"
                            width={240}
                            height={200}
                            sizes="(max-width: 600px) 100vw, 50vw"
                        />
                    </Link>
                </div>
                <GradientHeading heading="Early Access!" styles="md:!text-5xl text-center !ml-0 mb-2" />
                <p className=" mb-6 text-center">Join the Waitlist Today! Be among the first to experience
                    Avtive with priority access & exclusive perks.</p>

                <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                    <Input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-md border-gray-300 h-12 px-4"
                        required
                    />

                    <Input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-md border-gray-300 h-12 px-4"
                        required
                    />

                    <Input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-md border-gray-300 h-12 px-4"
                        required
                    />

                    <div className="w-full flex">
                        <Button
                            type="submit"
                            className="bg-[#EB5757] hover:bg-[#d86862] m-auto text-white rounded-md px-6 py-2 h-12 mt-4"
                        >
                            {
                                loading ? "Loading..." : "Request Early Access"
                            }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
