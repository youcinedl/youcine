import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import { FileText, AlertTriangle } from "lucide-react";

export const metadata = generateMeta(
  "Terms and Conditions",
  "Terms and Conditions for using the YouCine-DL website and services.",
  "terms"
);

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
        <p className="text-slate-300 text-lg">Welcome to YouCine-DL!</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-slate-300">
          These terms and conditions outline the rules and regulations for the use of YouCine-DL's Website, located at https://www.youcine-dl.com.
          By accessing this website we assume you accept these terms and conditions. Do not continue to use YouCine-DL if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/hero_banner_1778386917716.png" fill priority sizes="(max-width: 768px) 100vw, 50vw"  alt="Terms Info" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
             <FileText className="w-16 h-16 text-primary opacity-50" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookies</h2>
        <p className="text-slate-300">
          We employ the use of cookies. By accessing YouCine-DL, you agreed to use cookies in agreement with the YouCine-DL's Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">License</h2>
        <p className="text-slate-300">
          Unless otherwise stated, YouCine-DL and/or its licensors own the intellectual property rights for all material on YouCine-DL. All intellectual property rights are reserved. You may access this from YouCine-DL for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        
        <ul className="text-slate-300">
          <li>Republish material from YouCine-DL</li>
          <li>Sell, rent or sub-license material from YouCine-DL</li>
          <li>Reproduce, duplicate or copy material from YouCine-DL</li>
        </ul>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 opacity-50" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Multi Device" className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Disclaimer</h2>
        <p className="text-slate-300">
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We do not host any APK files on our server, we only provide links to third-party sources.
        </p>
      </div>
    </div>
  );
}
