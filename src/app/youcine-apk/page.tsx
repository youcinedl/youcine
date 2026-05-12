import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";

export const metadata = generateMeta(
  "Download YouCine APK Latest Version for Android",
  "Get the latest YouCine APK for Android devices. Enjoy ad-free streaming of 4K movies and TV series with smooth playback.",
  "youcine-apk"
);

export default function YouCineApkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Download YouCine APK</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Get the ultimate streaming app for your Android device. 100% safe, fast, and free.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white">How to Install YouCine APK on Android</h2>
          <p className="text-slate-300">
            Installing YouCine on your Android device is straightforward. Since it's a third-party application not available on the Google Play Store, you'll need to download the APK file directly and sideload it.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="YouCine Banner" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/app_interface_1778387008367.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="App Interface" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Step-by-Step Installation Guide</h3>
          <ol className="text-slate-300 space-y-4">
            <li><strong>Enable Unknown Sources:</strong> Go to Settings &gt; Security (or Privacy) and toggle on the option to allow installations from "Unknown Sources".</li>
            <li><strong>Download the APK:</strong> Click the download button on this page to get the latest `YouCine_v1.17.6.apk` file.</li>
            <li><strong>Locate the File:</strong> Open your device's File Manager and navigate to the Downloads folder.</li>
            <li><strong>Install:</strong> Tap on the downloaded APK file and click "Install" on the prompt.</li>
            <li><strong>Open and Enjoy:</strong> Once installed, open the YouCine app, grant necessary permissions, and start streaming!</li>
          </ol>

          <div className="grid grid-cols-2 gap-4 my-8">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Supported Devices" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Streaming Movie" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Features of the Latest Version</h3>
          <ul className="text-slate-300">
            <li>Fixed buffering issues on slow connections.</li>
            <li>Added new servers for faster download speeds.</li>
            <li>Updated UI for better navigation on mobile devices.</li>
            <li>More content added to the Kids section.</li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <DownloadCard 
              version="v1.17.6"
              size="36 MB"
              downloads="5M+"
              requirements="Android 4.4+"
              lastUpdate="Today"
              downloadLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
