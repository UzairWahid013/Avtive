"use client";
import { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { GradientHeading } from "../headings/GradientHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Success from "../success/Success";
import Link from "next/link";
import { X } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function AccessPopup({ handleModalClose }: { handleModalClose: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle body overflow
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await addDoc(collection(db, "Users"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData({ name: "", email: "", phone: "" });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return <Success onClose={handleModalClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center max-md:items-center max-md:pt-0 max-md:pb-0 overflow-y-auto">
      <div className="w-[95%] md:w-[60%] md:max-w-[600px] bg-white rounded-2xl p-6 md:p-20 py-10 md:py-20 max-md:max-h-[90vh] max-md:overflow-y-auto max-md:my-auto">
        <div
          className="flex justify-end md:-mt-[3.5rem] md:-mr-[4rem] -mt-2 -mr-2"
          onClick={handleModalClose}
        >
          <X className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
        </div>

        <div className="flex w-full items-center justify-center mb-10 mt-6">
          <Link href="/">
            <Image
              src="/logo_new.svg"
              alt="Logo"
              width={240}
              height={200}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority
            />
          </Link>
        </div>

        <GradientHeading
          heading="Early Access!"
          styles="text-2xl md:!text-5xl text-center !ml-0 mb-2"
        />
        
        <p className="text-sm md:text-base mb-6 text-center">
          Join the Waitlist Today! Be among the first to experience Avtive with
          priority access & exclusive perks.
        </p>

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
              disabled={loading}
            >
              {loading ? "Loading..." : "Request Early Access"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}