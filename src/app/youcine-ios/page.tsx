import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";

export const metadata = generateMeta(
  "YouCine for iOS - iPhone and iPad Installation",
  "Is YouCine available for iOS? Find out the current status of YouCine for iPhone and iPad, along with safe streaming alternatives.",
  "youcine-ios"
);

export default function YouCineIOSPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">YouCine for iOS (iPhone & iPad)</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Important information regarding YouCine compatibility with Apple devices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white">Current Status of YouCine on iOS</h2>
          <p className="text-slate-300">
            Currently, YouCine is developed exclusively for the Android operating system. This means that there is <strong>no official YouCine app for iOS</strong> devices such as the iPhone or iPad. Apple's strict App Store policies and closed ecosystem make it difficult for third-party streaming apps to be officially hosted.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="YouCine Concept" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=2080&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="iPhone" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Beware of Fake Apps</h3>
          <p className="text-slate-300">
            You might find websites claiming to offer a "YouCine iOS Profile" or "YouCine IPA". We strongly advise against installing these. They are usually fake, contain malware, or require you to complete dubious surveys. Until official announcements are made, keep your iOS device safe.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/app_interface_1778387008367.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="App Interface" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="iPad" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Alternatives for iPhone Users</h3>
          <ul className="text-slate-300">
            <li>Use YouCine on a PC via an Android emulator.</li>
            <li>Purchase a cheap Android TV stick (like Firestick) for your TV.</li>
            <li>Explore web-based streaming services compatible with Safari.</li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <DownloadCard 
              version="N/A"
              size="0 MB"
              downloads="0"
              requirements="Not Available"
              lastUpdate="N/A"
              downloadLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
