import Image from "next/image";
import Link from "next/link";
import { Download, Monitor, Smartphone, Tv } from "lucide-react";
import DownloadCard from "@/components/ui/DownloadCard";
import ReviewSection from "@/components/ui/ReviewSection";
import FAQSection from "@/components/ui/FAQSection";
import { generateMeta } from "@/lib/metadata";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export const metadata = generateMeta(
  "YouCine APK Download Latest 2026 For Smooth Streaming",
  "Download Youcine APK for easy access to a wide range of movies and TV shows. Enjoy streaming with a user-friendly interface on your device.",
  ""
);

export default function Home() {
  const faqs = [
    { question: "Is YouCine APK free?", answer: "Yes, YouCine APK provides free access to a large collection of movies, TV shows, and live channels without any subscription fees." },
    { question: "Can I watch offline?", answer: "Yes, one of the best features of YouCine APK is the ability to download content and watch it offline without an internet connection." },
    { question: "Is it safe to use?", answer: "Using YouCine TV is safe as long as you download the APK from a trusted source to avoid malware or security issues." },
    { question: "Does it work on Smart TVs?", answer: "Absolutely. YouCine APK works smoothly on Android Smart TVs, Android TV Boxes, and Firestick devices." },
  ];

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
          {/* We will use one of our images as a background or side image */}
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-secondary/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-outfit font-bold leading-tight">
                Stream Unlimited <br/>
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

      {/* Image Gallery / 4 Images Requirement */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stunning Interface</h2>
            <p className="text-slate-400">Experience premium design across all your devices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video relative group">
              <Image src="/images/hero_banner_1778386917716.png" alt="YouCine Hero Interface" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video relative group">
              <Image src="/images/feature_devices_1778386931912.png" alt="YouCine on Multiple Devices" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video relative group">
              <Image src="/images/app_interface_1778387008367.png" alt="YouCine Mobile App" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-video relative flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900 group">
              {/* Fallback image 4 if generation failed */}
              <div className="text-center p-8 z-10 relative">
                <Monitor className="w-16 h-16 text-primary mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold text-white mb-2">PC Interface</h3>
                <p className="text-slate-400 text-sm">Optimized for large screens</p>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-transform duration-700 group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features of YouCine TV APK</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Advanced features that improve your entertainment experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ad-Free Streaming", desc: "Watch movies and shows without annoying ads or disturbances for smooth streaming.", icon: <Tv className="w-8 h-8 text-primary" /> },
              { title: "Offline Viewing", desc: "Download your favorite content and watch it anytime, anywhere without internet.", icon: <Download className="w-8 h-8 text-secondary" /> },
              { title: "Multi-Device Compatibility", desc: "Works on Android phones, Smart TVs, and TV boxes. Switch seamlessly.", icon: <Smartphone className="w-8 h-8 text-purple-400" /> },
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Article Content Section (SEO) */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Explore the Diverse Content Library in Youcine TV</h2>
          <p className="text-slate-300 mb-6">
            It can give a lot of entertainment with a huge collection that suits any type of viewer. From kids animations to trending TV shows and blockbuster movies, this app confirms unforgettable entertainment. Whether you are looking for educational content, the latest series, or action content, Youcine TV 2026 has got you covered.
          </p>
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Kid-Friendly Entertainment</h3>
          <p className="text-slate-300 mb-6">
            Parents don't have to worry about their children, as this app provides a safe and controlled environment for them. It includes a kids section full of educational cartoons, animated classics, and newly released favorites.
          </p>
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Blockbuster Movies for Every Mood</h3>
          <p className="text-slate-300 mb-6">
            If you are a true movie lover, you will find a huge collection of films in different categories. Whether you want to watch action, comedy, horror, or something emotional, Youcine APK TV covers you. The app allows you to stream movies with high-quality 4K results.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* FAQ */}
      <section className="py-24 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about YouCine APK.</p>
          </div>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </>
  );
}
