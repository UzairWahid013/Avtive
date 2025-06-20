import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import Autoplay from "embla-carousel-autoplay";

interface CardData {
  title: string;
  titleClass?: string;
  subtitle?: string;
  headerImage?: boolean;
  content: React.ReactNode;
}

export default function DigitalBusinessCard() {
  const cardData: CardData[] = [
    {
      title: "Smart Digital Business Card",
      titleClass: "max-w-60 leading-[35px]",
      content: (
        <div className="space-y-4">
          {[
            { src: "/features/digital/QRcode.svg", text: "Instant sharing via QR code NFC, and link" },
            { src: "/features/digital/customize.svg", text: "Customizable profile with branding options" },
            { src: "/features/digital/contacts.svg", text: "Auto-update ensures contacts always have your latest info" },
          ].map(({ src, text }, i) => (
            <div
                key={i}
                className="flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl min-h-[80px]"
                >
                <Image src={src} width={37} height={37} alt="feature" />
                <p className="text-md leading-5">{text}</p>
                </div>
          ))}
        </div>
      ),
    },
    {
      title: "AI Smart Notes and Auto-Reminders",
      headerImage: true,
      content: (
        <div className="space-y-2">
          {[
            { src: "/features/ai/note.svg", text: "Auto-record & note key details" },
            { src: "/features/ai/followup.svg", text: "Smart follow-up reminders" },
          ].map(({ src, text }, i) => (
            <div key={i} className="flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl">
              <Image src={src} width={37} height={37} alt="feature" />
              <p className="text-md">{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Effortless Sharing and Control",
      titleClass: "max-w-68",
      subtitle: "Enable/disable details anytime for privacy",
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            {[
              { label: "Profile Information", checked: true },
              { label: "Contact Details", checked: false, disabled: true },
              { label: "Portfolio and Links", checked: true },
              { label: "Presentation", checked: true },
            ].map(({ label, checked, disabled }, i) => (
              <div key={i} className="flex items-center justify-between bg-white px-4 py-2 rounded-lg">
                <span className="text-md">{label}</span>
                <Switch checked={checked} disabled={disabled} />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "AI Networking",
      subtitle: "Connect smarter with AI-driven contact management, instant follow-ups, and intelligent chat assistance.",
      content: (
        <>
          <div className="absolute w-[340px] space-y-4">
            <div className="h-18 bg-white px-4 py-2 rounded-lg"></div>
            <div className="h-14 bg-white px-4 py-2 rounded-lg"></div>
            <div className="h-8 bg-white px-4 py-2 rounded-lg opacity-70 hidden md:block"></div>
            <div className="h-3 bg-white px-4 py-2 rounded-lg opacity-50 hidden md:block"></div>
          </div>
          <div className="pt-4 relative top-4 md:top-10">
            <div className="flex justify-center">
              <Image src="/features/gIdeas.svg" width={107} height={37} alt="AI networking" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Card Scanner",
      subtitle: "Allow users to scan any traditional business card",
      content: (
        <div className="flex justify-center">
          <div className="relative bg-white w-[272.48px] h-[276.35px] flex flex-col items-center justify-center gap-4 rounded-t-4xl">
            <div className="w-[63.05px] h-[19.14px] rounded-4xl bg-[#EFEFEF]"></div>

            <div className="w-[246.58px] h-[140.74px] border border-[#EA4335] rounded-[7px] flex items-center justify-center">
              <div className="w-[217.31px] h-[122.48px] bg-[#F7F7F7] rounded-[5px] relative">
                <div className="absolute right-5 top-5 w-[110.63px] h-[23.71px] bg-[#EFEFEF] rounded-[3px]"></div>
                <div className="absolute left-5 bottom-5 w-[40.83px] h-[40.83px] bg-[#EFEFEF] rounded-[6px]"></div>
                <div className="absolute right-5 bottom-4 w-[39.51px] bg-[#EFEFEF] border-2"></div>
                <div className="absolute right-5 bottom-8 w-[56.63px] bg-[#EFEFEF] border-2"></div>
                <div className="absolute right-5 bottom-12 w-[39.51px] bg-[#EFEFEF] border-2"></div>
                <div
                  className="absolute right-11 top-0 h-full w-[2px] bg-[#0FB287]"
                  style={{ boxShadow: "-10px 0 16px #0FB287" }}
                ></div>
              </div>
            </div>

            <div className="w-[246.58px] h-[65.04px] rounded-[7px] bg-[#F7F7F7] flex items-center justify-between px-4">
              <p className="font-inter text-xs leading-[25px]">Syed Mesum Raza</p>
              <div className="flex items-center gap-2">
                <Image src="/features/digital/contacts.svg" width={24} height={24} alt="contacts" />
                <Image src="/businesscard/message.png" width={24} height={24} alt="message" />
                <Image src="/businesscard/phone.png" width={24} height={24} alt="phone" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const renderCard = (card: CardData, index: number | string) => (
    <Card key={index} className="bg-[#F7F7F7] md:max-w-[394px] w-full h-[420px]">
      <CardHeader className={card.subtitle ? "flex flex-col space-y-1" : ""}>
        {card.headerImage && (
          <Image
            src="/features/ai/audio.svg"
            width={330}
            height={109}
            layout="responsive"
            alt="audio"
            className="m-auto mb-3"
          />
        )}
        <CardTitle className={`text-3xl font-bold ${card.titleClass || ""}`}>{card.title}</CardTitle>
        {card.subtitle && <p className="text-lg text-black leading-6">{card.subtitle}</p>}
      </CardHeader>
      <CardContent>{card.content}</CardContent>
    </Card>
  );

  return (
    <div className="px-4 py-0 mt-[30px] md:mt-[97px] flex w-[95%] m-auto select-none">
      {/* Mobile - Vertical Stack */}
      <div className="md:hidden w-full space-y-6">
        {cardData.map(renderCard)}
      </div>

      {/* Desktop - Carousel */}
      <div className="hidden md:flex w-full">
        <div className="bg-linear-to-r from-white to-transparent h-[420px] w-22 relative -mr-18 z-50" />
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                {renderCard(card, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="bg-linear-to-r from-transparent to-white h-[420px] w-22 relative -ml-16 z-50" />
      </div>
    </div>
  );
}
