import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";

export const metadata = generateMeta(
  "YouCine Smart TV App Download",
  "Get the YouCine app optimized specifically for Smart TVs. Enjoy a couch-friendly interface and 4K streaming capabilities directly on your television.",
  "youcine-smart-tv"
);

export default function YouCineSmartTVSitePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">YouCine Smart TV App</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          The ultimate living room experience. Download the TV-optimized version of YouCine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white">Why Use the TV Specific Version?</h2>
          <p className="text-slate-300">
            While the standard mobile APK can technically run on some Android TV boxes, the YouCine Smart TV App is specifically compiled and designed for television screens and remote control navigation.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="TV Interface" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="TV Remote" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">TV-Optimized Features</h3>
          <ul className="text-slate-300">
            <li><strong>Remote Control Support:</strong> Easily navigate through categories with your standard TV remote (D-pad support).</li>
            <li><strong>4K HDR Content:</strong> The TV app prioritizes high-resolution streams perfect for large displays.</li>
            <li><strong>Leanback Interface:</strong> Beautiful, large thumbnails and readable text designed for viewing from 10 feet away.</li>
          </ul>

          <div className="grid grid-cols-2 gap-4 my-8">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Smart TVs" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Cinema Experience" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <p className="text-slate-300">
            If you own an Android TV, Amazon Firestick, or a generic Android TV Box, downloading this specific version will drastically improve your viewing experience compared to the mobile version.
          </p>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <DownloadCard 
              version="v1.17.6 (TV Build)"
              size="28 MB"
              downloads="3M+"
              requirements="Android TV OS"
              lastUpdate="Today"
              downloadLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
