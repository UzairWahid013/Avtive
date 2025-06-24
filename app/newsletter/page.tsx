import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
const NewsLetter = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white">
      {/* Header Section */}
      <div className="relative bg-[#E8F3E9]">
        <div className="relative w-full h-[300px]">
          <Image src="/newsletter/connect.png" alt="" fill />
        </div>
        <div className="h-[40px] w-[120px]  absolute top-[41px] left-[44px]">
          <Image src="/newsletter/logo.png" alt="" fill />
        </div>
      </div>
      {/* Main Content */}
      <div className="px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-[36px] text-[#0A3E94] font-bold  mb-4 leading-none">
            Welcome to Avtive <br /> Early Access!
          </h1>
          <p className="text-black leading-relaxed">
            Hi <span className="text-sm font-bold ">Syed,</span>
          </p>
          <p className="text-black leading-relaxed mt-2 text-sm">
            Thank you for signing up for{" "}
            <span className="font-bold">Avtive Early Access!</span> We&apos;re
            thrilled to have you on board.
          </p>
          <p className="text-black leading-relaxed mt-2 text-sm">
            Avtive is your AI-powered relationship assistant, designed to make
            professional networking effortless. Whether you&apos;re looking to
            nurture existing connections or build new ones, Avtive helps you
            stay engaged without the overwhelm of managing every detail.
          </p>
        </div>
        {/* Why Avtive Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#0A3E94] mb-4">Why Avtive?</h2>
          <ul className="space-y-3">
            <li className="flex items-start  gap-5">
              <div className="w-2 h-2">:rocket:</div>
              <p className="text-sm">
                <span className="font-bold">Smarter Connections:</span> Stay
                updated on important contacts and key business news.
              </p>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-2 h-2">:handshake:</div>
              <p className="text-black text-sm">
                <span className="font-bold">Effortless Outreach:</span>{" "}
                Personalized message suggestions to keep relationships strong.
              </p>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-2 h-2">:arrows_counterclockwise:</div>
              <p className="text-black text-sm">
                <span className="font-bold">Always Up-to-Date:</span> Keep your
                connections fresh and relevant.
              </p>
            </li>
          </ul>
        </div>
        {/* What's Next Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#0A3E94] mb-4">
            What&apos;s Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-gray-200 bg-[#F7F7F7]">
              <CardContent className="p-0">
                <div className="relative w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src="/newsletter/linkedin.svg" alt="" fill />
                </div>
                <h3 className="font-bold mb-2 text-sm">Regular Updates</h3>
                <p className="text-sm ">
                  Stay in the loop with our latest innovations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-gray-200 bg-[#F7F7F7]">
              <CardContent className="p-0">
                <div className="relative w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src="/newsletter/instagaram.svg" alt="" fill />
                </div>
                <h3 className="font-bold mb-2 text-sm">Sneak Peeks</h3>
                <p className="text-sm ">
                  Be the first to see upcoming features.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-gray-200 bg-[#F7F7F7]">
              <CardContent className="p-0">
                <div className="relative w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src="/newsletter/twitter.svg" alt="" fill />
                </div>
                <h3 className="font-bold mb-2 text-sm">Beta Invites</h3>
                <p className="text-sm">
                  Be the first to test new tools and share feedback
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-black text-sm p-6 mb-8">
          <p className=" mb-4">
            Were excited to help you connect smarter and grow faster with
            Avtive.
          </p>
          <p className="mb-4">
            Stay connected, exciting updates are coming soon!
          </p>
          <p className="mb-4 font-bold">The Avtive Team</p>
        </div>
        {/* Footer */}
        <div className="px-8 flex flex-row justify-between items-start gap-6">
          {/* Left side - Company info and social links */}
          <div className="flex flex-col gap-4">
            <div className="text-sm text-black">
              <h3 className=" font-bold mb-1">Avtive</h3>
              <p>NSTP, Islamabad, Pakistan</p>
            </div>
            {/* Social media icons */}
            <div className="flex gap-3">
                <div className="relative h-4 w-4">
                    <Image src="/newsletter/updates.svg" alt="" fill/>
                </div>
                             <div className="relative h-4 w-4">
                    <Image src="/newsletter/instagaram.svg" alt="" fill/>
                </div>
                             <div className="relative h-4 w-4">
                    <Image src="/newsletter/2.svg" alt="" fill/>
                </div>
                             <div className="relative h-4 w-4">
                    <Image src="/newsletter/1.svg" alt="" fill/>
                </div>
            </div>
          </div>
          {/* Right side - Email info and unsubscribe */}
          <div className=" md:max-w-xs">
            <p className="text-sm text-black mb-2 max-w-[250px]">
              You received this email because you signed up on our website
            </p>
            <a
              href="#"
              className="text-[#0A3E94] hover:text-blue-800 underline text-sm"
            >
              Unsubscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;