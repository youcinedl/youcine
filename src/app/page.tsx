import Image from "next/image";
import Link from "next/link";
import { Download, Monitor, Smartphone, Tv } from "lucide-react";
import DownloadCard from "@/components/ui/DownloadCard";
import { generateMeta } from "@/lib/metadata";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import HomeArticle from "@/components/home/HomeArticle";

export const metadata = generateMeta(
  "YouCine APK Download Latest 2026 For Smooth Streaming",
  "Download Youcine APK for easy access to a wide range of movies and TV shows. Enjoy streaming with a user-friendly interface on your device.",
  ""
);

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "YouCine APK",
    "operatingSystem": "Android",
    "applicationCategory": "EntertainmentApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50231"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SchemaMarkup schemaData={schemaData} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/80 z-10 backdrop-blur-sm"></div>
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-secondary/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-outfit font-bold leading-tight">
                Stream Unlimited <br />
                <span className="text-gradient">Movies & Shows</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Youcine APK TV is a worldwide famous app where you can find a huge collection of movies, TV shows, and other amazing content. Access the latest high-quality media in a secure environment.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#download" className="btn-primary text-lg">
                  Download APK v1.17.6
                </Link>
                <Link href="#features" className="btn-secondary text-lg">
                  Explore Features
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-6 border-t border-white/10 text-slate-400">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">5M+</span>
                  <span className="text-sm">Active Users</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">4K</span>
                  <span className="text-sm">Resolution</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">100%</span>
                  <span className="text-sm">Free to Use</span>
                </div>
              </div>
            </div>

            <div className="relative lg:ml-auto w-full max-w-md mx-auto" id="download">
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
      </section>

      {/* Quick Download Navigation */}
      <section className="py-16 relative z-20 bg-dark-800/30 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Youcine APK v1.17.6 Download for Android, TV, TV Box, PC, and iOS</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            <Link href="#android" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-5 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-center">
              <span>📱 Youcine APK for</span>
              <span>Android</span>
            </Link>
            <Link href="#pc" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-5 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-center">
              <span>💻 Youcine APK for</span>
              <span>PC</span>
            </Link>
            <Link href="#tv" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-5 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-center">
              <span>📺 Youcine APK for</span>
              <span>TV</span>
            </Link>
            <Link href="#ios" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-5 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-center">
              <span>🍎 Youcine APK for</span>
              <span>iOS</span>
            </Link>
          </div>

          <div className="flex justify-center relative">
            <Link href="#download" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 gap-2 w-full md:w-3/4 lg:w-2/3 text-lg z-10">
              <span>⬇️ Download Youcine APK v1.17.6</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Massive Article Content via Component */}
      <HomeArticle />
    </>
  );
}
