import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "../container/Container";
import { GradientHeading } from "../headings/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "How can I get early access to the Avtive App and be among the first users?",
    answer: "To get early access to the Avtive App, you can sign up for our waitlist through our website. Early adopters will receive exclusive features and benefits as we roll out the platform."
  },
  {
    value: "item-2",
    question: "How can Avtive App help me grow my professional network?",
    answer: "Avtive App provides smart networking tools that help you connect with relevant professionals in your industry. Our AI-powered features suggest connections, automate follow-ups, and help you maintain meaningful professional relationships."
  },
  {
    value: "item-3",
    question: "How does Avtive ensure data security and privacy for its users?",
    answer: "Avtive takes security and privacy seriously. We use industry-standard encryption, secure data storage practices, and provide granular privacy controls so you can decide exactly what information is shared and with whom."
  },
  {
    value: "item-4",
    question: "Can I customize my digital business card on Avtive App?",
    answer: "Yes, Avtive App offers extensive customization options for your digital business card. You can personalize the design, add your branding elements, and choose which information to display."
  }
];

export default function FAQComponent() {
  return (
    <Container>
      <div id="faqs" className="px-4 py-12 mb-4">
        {/* Mobile Help Section with Newsletter Signup */}
        <div className="md:hidden mb-16 text-left space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Can Help You?
          </h2>

          <p className="text-lg text-gray-600">
            Follow our newsletter. We&apos;ll regularly update you about our latest projects and availability.
          </p>

          <div className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-4 rounded-md border border-gray-300 w-full sm:w-[300px] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3E94]"
            />
            <Button className="h-12 px-6 text-sm">Let&apos;s Talk</Button>
          </div>

          <Link href="#" className="flex text-[#0fb287] items-center gap-1 text-2xl font-bold mt-10">
            More FAQ <ArrowRight size={25} />
          </Link>
        </div>

        {/* Desktop Heading */}
        <GradientHeading 
          heading="Frequently Asked Questions" 
          styles="hidden md:block !max-w-[810px] text-center !text-5xl mb-2" 
        />
        <p className="hidden md:block mb-20 text-center text-[25px]">
          Need Help? Reach Out to Us on <b className="text-[#0A3E94]">Email</b> or <b className="text-[#0A3E94]">Whatsapp.</b>
        </p>

        {/* FAQ Accordion */}
        <div className="grid gap-8 items-start">
          <div className="space-y-4 col-span-2">
            <Accordion type="single" collapsible className="w-full md:w-[80%] m-auto">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem 
                  key={item.value} 
                  value={item.value} 
                  className="border rounded-2xl bg-[#F7F7F7] mb-4"
                >
                  <AccordionTrigger className="px-6 md:px-10 py-6 hover:no-underline">
                    <p className="text-left font-bold text-sm md:text-xl">
                      {item.question}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-10 pb-4 text-sm md:text-lg">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
}