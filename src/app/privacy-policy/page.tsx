import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import { ShieldAlert, Lock, Eye, CheckCircle } from "lucide-react";

export const metadata = generateMeta(
  "Privacy Policy",
  "Read the Privacy Policy of YouCine-DL to understand how we collect, use, and protect your personal information.",
  "privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-300 text-lg">Last updated: May 10, 2026</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-slate-300">
          At YouCine-DL, accessible from https://www.youcine-dl.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by YouCine-DL and how we use it.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Privacy Concept" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
             <ShieldAlert className="w-16 h-16 text-primary opacity-50" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Log Files</h2>
        <p className="text-slate-300">
          YouCine-DL follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookies and Web Beacons</h2>
        <p className="text-slate-300">
          Like any other website, YouCine-DL uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
            <Lock className="w-16 h-16 text-secondary opacity-50" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/app_interface_1778387008367.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Secure Data" className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third Party Privacy Policies</h2>
        <p className="text-slate-300">
          YouCine-DL's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Consent</h2>
        <p className="text-slate-300">
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
