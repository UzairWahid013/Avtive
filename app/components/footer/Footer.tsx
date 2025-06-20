import Image from "next/image"
import { Container } from "../container/Container"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F8FBFF] py-12 h-[627px]">

      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-8">

        <div className="flex flex-col gap-4 col-span-1 items-center md:items-start">
          <Image
            src='/logo.svg'
            alt="logo"
            width={200}
            height={200}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
          </div>

          <div className="flex flex-col gap-4 col-span-1 items-center md:items-start leading-4 md:leading-normal">
            <Link href='#'>
            <h2 className="font-medium text-[18px] md:text-[25.58px]">About us</h2>
            </Link>
            <Link href='#'>
            <h2 className="font-medium text-[18px] md:text-[25.58px]">Features</h2>
            </Link>
            <Link href='#'>
            <h2 className="font-medium text-[18px] md:text-[25.58px] whitespace-nowrap">Frequently Asked</h2>
            </Link>
            <Link href='#'>
            <h2 className="font-medium text-[18px] md:text-[25.58px]">Help Center</h2>
            </Link>
          </div>

          {/* Get in Touch section */}
          <div className="flex flex-col gap-4 col-span-1 items-center md:items-start order-4 md:order-3">
          <h2 className="font-medium text-[20px] md:text-[25.58px]">Get in touch</h2>  
  {/* Wrap both blocks in a div with fixed width */}
<div className="w-full max-w-[282px]">

{/* WhatsApp block */}
<Link href="https://wa.me/923125175041">
  <div className="bg-[#104A64] text-white rounded-md p-2 flex items-center justify-between cursor-pointer w-full mb-3">
    <div>
    <h2 className="font-bold text-[16px] md:text-[17.06px]">Have Questions?</h2>
    <p className="font-medium text-[16px] md:text-[17.06px]">Chat with us</p>
    </div>
    <Image
      src="/whatsapp.svg"
      alt="whatsapp"
      width={30}
      height={30}
    />
  </div>
</Link>

{/* Call Us block */}
<Link href="https://wa.me/923125175041">
<div className="bg-[#DDDDDD] text-black rounded-md p-2 cursor-pointer w-full mb-3">
<h2 className="font-bold text-[16px] md:text-[17.06px]">Call us:</h2>
<p className="font-medium text-[16px] md:text-[17.06px]">+92 3125 175041</p>
</div>
</Link>
<div className="bg-[#DDDDDD] text-black rounded-md p-2 cursor-pointer w-full mb-6">
<h2 className="font-medium text-[16px] md:text-[17.06px]">Email us:</h2>
<p className="font-medium text-[16px] md:text-[17.06px]">Support@avtive.io</p>
  </div>
  <div className="flex justify-around w-full mx-auto md:mx-0">
    <Image src='/social/facebook.svg' alt="facebook" width={40.4} height={40.4} />
    <Image src='/social/instagram.svg' alt="instagram" width={40.4} height={40.4} />
    <Image src='/social/linkedin.svg' alt="linkedin" width={40.4} height={40.4} />
    <Image src='/social/youtube.svg' alt="x" width={40.4} height={40.4} />
    <Image src='/social/x.svg' alt="x" width={40.4} height={40.4} />
  </div>

</div>


  {/* Social media icons */}
  
</div>

          {/* Mobile App Coming Soon section */}
          <div className="flex flex-col gap-4 col-span-1 items-center md:items-start order-3 md:order-4">
          <h2 className="font-medium text-[20px] md:text-[25.58px] text-center md:text-left">Mobile App Coming Soon!</h2>
          <p className="text-[16px] md:text-[20px] max-w-[362px] text-center md:text-left">
            Join the Waitlist Today! Be among the first to experience Avtive with priority access & exclusive perks.
          </p>
            <div className="flex gap-3 justify-center md:justify-start">
  {/* Google Play */}
  <div className="relative overflow-hidden">
    <Image
      src="/social/googleplay.svg"
      alt="google play"
      width={130}
      height={30}
    />
    <span className="absolute right-[-30px] top-[8px] rounded-sm rotate-45 bg-[#F8FBFF] text-black text-[11px] px-8 py-[2px] font-bold shadow-lg border border-gray-300">
    Soon!
    </span>
  </div>

  {/* App Store */}
  <div className="relative overflow-hidden">
    <Image
      src="/social/appstore.svg"
      alt="app store"
      width={130}
      height={30}
    />
    <span className="absolute right-[-25px] top-[8px] rounded-sm rotate-45 bg-[#F8FBFF] text-black text-[11px] px-8 py-[2px] font-bold shadow-lg border border-gray-300">
    Soon!
    </span>
  </div>
</div>
          </div>

        </div>

        <h2 className="text-[16px] md:text-[20.47px] text-center m-auto mt-20 md:mt-40 mb-4">
  © 2025 Avtive All Rights Reserved
</h2>      </Container>
    </footer>
  )
}