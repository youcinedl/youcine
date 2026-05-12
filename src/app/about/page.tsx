import { generateMeta } from "@/lib/metadata";
import Image from "next/image";

export const metadata = generateMeta(
  "About Us",
  "Learn more about YouCineApkPro, our mission, and what makes us the best unofficial source for YouCine APK.",
  "about"
);

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About YouCine<span className="text-primary">PRO</span></h1>
      
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-slate-300">
          Welcome to YouCineApkPro, your number one source for all things related to YouCine. We're dedicated to providing you the very best of entertainment applications, with an emphasis on safe downloads, detailed guides, and the latest news about streaming.
        </p>
        
        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src="/images/hero_banner_1778386917716.png" alt="YouCine Interface" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src="/images/feature_devices_1778386931912.png" alt="Devices" fill className="object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
        <p className="text-slate-300">
          Founded in 2026, YouCineApkPro has come a long way from its beginnings. When we first started out, our passion for high-quality, free streaming drove us to start our own informational website.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose Us?</h2>
        <ul className="text-slate-300 space-y-2 list-disc pl-5">
          <li><strong>Safety First:</strong> We ensure all download links provided are scanned and secure.</li>
          <li><strong>Latest Updates:</strong> You get the most recent version of the app immediately.</li>
          <li><strong>Comprehensive Guides:</strong> Installation guides for PC, Smart TV, and Mobile.</li>
        </ul>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
             <Image src="/images/app_interface_1778387008367.png" alt="App UI" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Entertainment" className="object-cover w-full h-full" />
          </div>
        </div>

        <p className="text-slate-300 mt-8">
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
}
