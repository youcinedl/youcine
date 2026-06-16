import Image from "next/image";
import Link from "next/link";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta(
  "Top 10 Hidden Gems to Watch on YouCine This Month",
  "Discover the best underrated movies and TV shows currently streaming on YouCine. Don't miss these hidden gems.",
  "blog/article-1"
);

export default function Article1Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Top 10 Hidden Gems to Watch on YouCine This Month</h1>
      <p className="text-primary font-medium mb-8">Published on May 10, 2026 • 5 min read</p>

      <div className="prose prose-invert prose-lg max-w-none">
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Hidden Gems Movies" className="w-full h-full object-cover" />
        </div>

        <p className="text-slate-300">
          With thousands of titles available on YouCine, it's easy to get lost in the endless scrolling. While everyone is talking about the latest blockbusters, there is a treasure trove of incredible movies and TV shows that fly under the radar. Here is our curated list of hidden gems you must watch this month.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. The Silent Echo</h2>
        <p className="text-slate-300">A gripping psychological thriller that will keep you guessing until the very last frame. The cinematography alone is worth the watch.</p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Movie Scene 1" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Cinema" className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Beyond the Horizon</h2>
        <p className="text-slate-300">For sci-fi fans, this independent space opera delivers incredible visuals and a deeply emotional story without the massive Hollywood budget.</p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Midnight Cafe</h2>
        <p className="text-slate-300">A charming, slice-of-life series set in a 24-hour diner. It's the perfect comfort watch for a rainy weekend.</p>

        <div className="relative aspect-video rounded-xl overflow-hidden my-8">
          <Image src="/images/app_interface_1778387008367.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="YouCine Interface" className="w-full h-full object-cover" />
        </div>

        <p className="text-slate-300">
          Make sure your YouCine app is updated to the latest version by downloading the <Link href="/youcine-apk" className="text-primary hover:underline font-semibold">YouCine APK</Link>, setting up <Link href="/youcine-para-pc" className="text-primary hover:underline font-semibold">YouCine for PC</Link>, or installing it on your <Link href="/youcine-smart-tv" className="text-primary hover:underline font-semibold">YouCine Smart TV</Link> to access these titles in high definition. If you are on iOS, you can also follow our <Link href="/youcine-ios" className="text-primary hover:underline font-semibold">YouCine iOS guide</Link>. Happy streaming!
        </p>
      </div>

      {/* Internal Navigation Section */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Quick Installation Guides</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/youcine-apk" className="glass-panel p-5 text-center hover:border-primary/40 transition-all rounded-2xl block hover:-translate-y-1 transform duration-300">
            <span className="block text-3xl mb-2">📱</span>
            <span className="font-bold text-white text-base block mb-1">Android APK</span>
            <span className="text-xs text-slate-400">Mobile & TV Box</span>
          </Link>
          <Link href="/youcine-para-pc" className="glass-panel p-5 text-center hover:border-primary/40 transition-all rounded-2xl block hover:-translate-y-1 transform duration-300">
            <span className="block text-3xl mb-2">💻</span>
            <span className="font-bold text-white text-base block mb-1">PC / Mac</span>
            <span className="text-xs text-slate-400">Via Emulator</span>
          </Link>
          <Link href="/youcine-smart-tv" className="glass-panel p-5 text-center hover:border-primary/40 transition-all rounded-2xl block hover:-translate-y-1 transform duration-300">
            <span className="block text-3xl mb-2">📺</span>
            <span className="font-bold text-white text-base block mb-1">Smart TV</span>
            <span className="text-xs text-slate-400">TV & Firestick</span>
          </Link>
          <Link href="/youcine-ios" className="glass-panel p-5 text-center hover:border-primary/40 transition-all rounded-2xl block hover:-translate-y-1 transform duration-300">
            <span className="block text-3xl mb-2">🍎</span>
            <span className="font-bold text-white text-base block mb-1">iOS Device</span>
            <span className="text-xs text-slate-400">iPhone / iPad</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
