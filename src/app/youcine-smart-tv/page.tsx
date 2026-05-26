import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";
import dynamic from "next/dynamic";
import { 
  Tv, 
  Settings, 
  HardDrive, 
  Layers, 
  Wifi, 
  ShieldCheck, 
  Play, 
  Info,
  Check, 
  X,
  Search,
  Sliders,
  Sparkles,
  Volume2,
  RefreshCw,
  Heart,
  Flame,
  Package,
  Share2,
  Users,
  Utensils
} from "lucide-react";

const FAQSection = dynamic(() => import("@/components/ui/FAQSection"), {
  loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
});

const TVSystemReqsInteractive = dynamic(
  () => import("@/components/ui/TVInteractiveSections").then((mod) => mod.TVSystemReqsInteractive),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const TVDeviceCompatibility = dynamic(
  () => import("@/components/ui/TVInteractiveSections").then((mod) => mod.TVDeviceCompatibility),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const TVStepTimeline = dynamic(
  () => import("@/components/ui/TVInteractiveSections").then((mod) => mod.TVStepTimeline),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const TVHowToUse = dynamic(
  () => import("@/components/ui/TVInteractiveSections").then((mod) => mod.TVHowToUse),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const TVTroubleshooting = dynamic(
  () => import("@/components/ui/TVInteractiveSections").then((mod) => mod.TVTroubleshooting),
  {
    loading: () => <div className="h-64 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

export const metadata = generateMeta(
  "Download the Youcine APK for TV v1.17.4 (Android Smart TV, Fire TV)",
  "Baixe o YouCine APK para Smart TV, Firestick, TV Box. Assista a filmes, séries, anime e canais de TV ao vivo em tela cheia com qualidade 4K de graça.",
  "youcine-smart-tv"
);

export default function YouCineSmartTVPage() {
  const tvFaqs = [
    {
      question: "Is Youcine APK free to use on Smart TV?",
      answer: "Yes, Youcine is 100% free. There is no subscription fee, no hidden charges, and no credit card needed. Just download, install, and enjoy."
    },
    {
      question: "Is Youcine safe to download?",
      answer: "Yes, but only if you download it from a trusted website like youcine-dl.com. Always avoid unknown or shady websites to keep your device safe."
    },
    {
      question: "What devices support Youcine APK?",
      answer: "Youcine works on Android Smart TVs, Amazon Firestick, Fire TV, Android TV Boxes, and Chromecast-enabled TVs."
    },
    {
      question: "What video quality does Youcine support?",
      answer: "Youcine supports HD, Full HD, and even 4K quality — depending on your TV and internet speed."
    },
    {
      question: "What should I do if Youcine is not installed?",
      answer: "Go to your TV settings, make sure 'Unknown Sources' is turned on, clear your cache, and try installing again."
    },
    {
      question: "Can I watch live sports on Youcine?",
      answer: "Youcine has a wide range of live sports, TV channels, and programs available for free."
    },
    {
      question: "Does Youcine work without a subscription?",
      answer: "Yes, unlike Netflix or Disney+, Youcine requires no monthly subscription. Everything is completely free of charge."
    },
    {
      question: "Can I use external media players with Youcine?",
      answer: "Yes, Youcine supports popular external players like MX Player and VLC Media Player for an even better experience."
    }
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      {/* 1. HERO HEADER SECTION */}
      <header className="relative w-full mb-16 sm:mb-20 text-center lg:text-left">
        {/* Soft Background Neon Glow */}
        <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-12 right-12 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-light">
              <Tv className="w-4 h-4 text-secondary" />
              <span>Full Smart TV & Firestick Installer Manual</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Download Youcine <span className="text-gradient">for Smart TV</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Download the Youcine APK for TV v1.17.4 (Android Smart TV, TV Box, Fire TV Stick). Unlock 4K home theater streaming in minutes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5 text-base sm:text-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>Get APK Now</span>
              </a>
              <a href="#install-timeline" className="btn-secondary flex items-center space-x-2 px-7 py-3.5 text-base">
                <span>View TV Guide</span>
              </a>
            </div>
          </div>

          {/* Premium mockup graphic display */}
          <div className="lg:col-span-5 relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <Image 
              src="/images/youcine_tv_streaming.png" 
              alt="YouCine on Smart TV curved monitor screen" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/20 border border-secondary/30 px-3 py-1 rounded-full">
                TV Theater 4K
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">Movie Center on Large TV Panel</h3>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PAGE CONTENT LAYOUT: TWO COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12" id="download-section">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12 sm:space-y-16">
          
          {/* A. QUICK OVERVIEW STATS CARD */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine for Smart TV Profile</h2>
            </div>
            
            <p className="text-slate-350 text-base sm:text-lg leading-relaxed">
              Find the core configurations, device limits, and requirements parameters for setting up the TV-optimized application package:
            </p>

            <div className="glass-panel overflow-hidden border border-white/5 shadow-2xl">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <span className="font-bold text-white text-base tracking-wider uppercase">Application Profile</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase">
                  Verified Safe
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/5 bg-dark-800/20">
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">App Name</span>
                    <span className="text-white font-bold text-sm sm:text-base">Youcine for Smart TV</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Version</span>
                    <span className="text-white font-bold text-sm sm:text-base">Latest (2026)</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Supported Devices</span>
                    <span className="text-white font-bold text-xs sm:text-sm text-right leading-tight max-w-[180px]">
                      Smart TV, Android TV, Fire TV, TV Box
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">App Size</span>
                    <span className="text-white font-bold text-sm sm:text-base">~40 MB</span>
                  </div>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Recommended Storage</span>
                    <span className="text-white font-bold text-sm sm:text-base text-right">
                      Min 4 GB (8 GB Recommended)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Category</span>
                    <span className="text-white font-bold text-sm sm:text-base">Entertainment / Streaming</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Compatibility</span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      Android TV OS 5.0 and above
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">Internet Connection</span>
                    <span className="text-primary-light font-bold text-xs sm:text-sm text-right">
                      Stable Wi-Fi (Min 4 Mbps speed)
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-dark-900/60 p-4 border-t border-white/5 text-center flex justify-between items-center px-6">
                <span className="text-slate-450 text-xs sm:text-sm font-semibold">License Type</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-light rounded-full text-xs font-bold uppercase border border-secondary/30">
                  Free
                </span>
              </div>
            </div>
          </section>

          {/* B. STREAMING APPS INTRODUCTION */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Introduction</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Streaming is taking over cable TV and it's not even close. People everywhere are ditching their cable boxes to watch movies, anime, cartoons, live sports, and TV shows right from their phones and TVs.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              With so many streaming apps out there, one name keeps rising to the top: Youcine. It's built specifically for TV, TV Box, and Fire TV Stick users and packed with features that make it hard to beat.
            </p>
          </section>

          {/* C. WHAT IS THE YOUCINE APK FOR SMART TV */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What is the Youcine APK for Smart TV?</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Youcine APK is a free streaming app that was first built for Android phones. Now, it has grown way beyond that — millions of people are using it on Smart TVs, Fire Sticks, and TV Boxes, because watching on a big screen just feels better.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Most popular streaming apps like Netflix and Disney+ cost money every month. Youcine is different. It gives you access to thousands of movies, shows, and videos completely free, no credit card needed.
            </p>

            <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-5 mt-4">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                The latest version, **Youcine v1.16.5** (and the updated **v1.17.4**), makes everything even smoother. Expect faster loading, fewer problems, and fresh new content ready to watch.
              </p>
            </div>
          </section>

          {/* D. FEATURES OF YOUCINE APK */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Features of Youcine APK for Smart TV</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Youcine is not just another streaming app, it's packed with features that make it stand out from the rest. Here's what makes it so special:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {[
                { title: "🎬 Huge Content Library", text: "From Hollywood blockbusters and documentaries to anime, cartoons, live sports, and TV channels — Youcine has it all. The library is updated regularly, so there's always something new waiting for you." },
                { title: "📺 Crystal-Clear Streaming Quality", text: "Watch everything in HD and Full HD. Got a premium TV and a strong internet connection? Kick it up to stunning 4K quality for a cinema-like experience right at home." },
                { title: "🖥️ Clean & Easy Interface", text: "Everything is neatly organized into categories, so finding what you want takes seconds. No confusion, no clutter, just smooth, simple navigation." },
                { title: "🔍 Instant Search Bar", text: "Can't find something? Just type the name of any movie or show in the search bar and jump straight to it. Fast, easy, and always on point." },
                { title: "⚙️ Full Customization", text: "Make Youcine yours. Switch subtitles on or off, change the audio language, adjust video quality, and even connect it with external players like MX Player or VLC for extra control." },
                { title: "🆓 100% Free — No Subscription Needed", text: "While apps like Netflix and Disney+ charge monthly fees, Youcine gives you access to thousands of videos for absolutely nothing. No hidden charges, no credit card, no problem." },
                { title: "🎉 Perfect for Family & Friends", text: "A big Smart TV screen turns every movie into an event. Gathering the whole family or inviting friends over — Youcine makes group watching fun and comfortable for everyone." },
                { title: "🔄 Always Fresh Content", text: "New movies and shows are added as soon as they drop. With Youcine, you'll never fall behind on the latest releases." }
              ].map((feat, index) => (
                <div key={index} className="glass-panel p-5 border border-white/5 hover:border-primary/20 transition-all duration-350 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">{feat.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* E. WORKS ON ALMOST EVERY DEVICE */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">📱 Works on Almost Every Device</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              One of the best things about Youcine is that it works on a wide range of devices. No matter what you have at home, Youcine has got you covered:
            </p>

            <TVDeviceCompatibility />

            <p className="text-slate-350 text-sm sm:text-base pt-2">
              Whether you have a brand-new Smart TV or an older set with a Firestick, Youcine fits right in and works like a charm.
            </p>
          </section>

          {/* F. SYSTEM REQUIREMENTS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">System Requirements for Downloading Youcine APK</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Your system must meet the following minimum requirements if you want a smooth streaming experience on Youcine:
            </p>

            <TVSystemReqsInteractive />
          </section>

          {/* G. DOWNLOAD & INSTALL GUIDE */}
          <section className="space-y-6" id="install-timeline">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">📥 How to Download & Install Youcine APK on Your TV</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Installing Youcine on your TV is quick and simple. Just follow these easy steps and you will be streaming in no time:
            </p>

            <TVStepTimeline />
          </section>

          {/* H. HOW TO USE ON SMART TV */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">🎬 How to Use Youcine on Your Smart TV</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Using Youcine is as easy as it gets. Here's how to turn any ordinary evening into a full cinema experience:
            </p>

            <TVHowToUse />

            <div className="bg-yellow-550/15 border border-yellow-500/10 rounded-2xl p-5 flex items-start space-x-3 mt-4 text-left">
              <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-xs sm:text-sm">
                <strong>💡 Pro Tip:</strong> Use your TV's biggest screen mode and turn the lights down low for the ultimate cinema feel.
              </p>
            </div>
          </section>

          {/* I. TROUBLESHOOTING */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">🔧 Troubleshooting Youcine on TV</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Running into a problem? Don't worry, most issues are super easy to fix. Here's a simple guide to the most common problems and their solutions:
            </p>

            <TVTroubleshooting />
          </section>

          {/* J. SAFETY ISSUES */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">🛡️ Is Youcine APK Safe to Use on TV?</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              This is a great question and honesty matters here.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Youcine APK is not available on the Google Play Store or Apple App Store. This means you have to download it from a third-party website, which can be risky if you're not careful.
            </p>

            <div className="glass-panel border-red-500/10 bg-red-955/5 p-6 rounded-2xl space-y-3">
              <span className="text-red-400 font-extrabold text-sm sm:text-base flex items-center">
                <X className="w-5 h-5 mr-2" />
                ⚠️ Downloading from an unknown or shady website can expose your device to:
              </span>
              <ul className="space-y-2 pl-7 text-slate-350 text-xs sm:text-sm list-disc">
                <li>Dangerous viruses</li>
                <li>Hidden malware</li>
                <li>Security threats</li>
              </ul>
            </div>

            <div className="glass-panel border-green-500/15 bg-green-955/5 p-6 rounded-2xl space-y-2">
              <span className="text-green-400 font-extrabold text-sm sm:text-base flex items-center">
                <Check className="w-5 h-5 mr-2" />
                ✅ The safe and simple solution?
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-7">
                Always download Youcine from a website you can trust. We recommend **youcine-dl.com** — it's clean, safe, and completely free of viruses or malware. Thousands of users download from it every day without any issues.
              </p>
              <p className="text-slate-200 font-bold text-xs sm:text-sm pl-7 pt-2">
                One rule: stick to trusted sources, and you will have nothing to worry about. 🔒
              </p>
            </div>
          </section>

          {/* K. DYNAMIC FAQ CONTAINER */}
          <section className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-3 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider">
                FAQs Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions (FAQs)</h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg">
                Find quick, simplified answers to the most common queries regarding YouCine streaming on Smart TVs.
              </p>
            </div>

            <FAQSection faqs={tvFaqs} />
          </section>

          {/* L. CONCLUSION */}
          <section className="glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-r from-primary/15 via-secondary/5 to-transparent shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Conclusion</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Youcine APK is one of the best free streaming apps available for Smart TV users today. It gives you access to thousands of movies, shows, anime, live sports, and much more — all without spending a single penny. The app is easy to install, simple to use, and works perfectly on a wide range of devices. Whether you are watching alone or enjoying a fun movie night with family and friends, Youcine delivers a true cinema-like experience right from your living room. Download it today from youcine-dl.com and start streaming the smart way.
              </p>
              <div className="pt-6 flex justify-center sm:justify-start">
                <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Download YouCine TV APK</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Sticky Sidebar Component */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            
            {/* Main Download Card */}
            <DownloadCard 
              version="v1.17.4"
              size="40 MB"
              downloads="3M+"
              requirements="Android TV OS 5.0+ / Firestick"
              lastUpdate="2026-05-26"
              downloadLink="https://youcine-dl.com/download/youcine_tv.apk"
            />
            
            {/* Extra Sidebar Info Panel */}
            <div className="glass-panel p-5 border border-white/5 space-y-4">
              <h4 className="text-white font-extrabold text-base flex items-center">
                <span className="w-2 h-4 bg-primary rounded mr-2"></span>
                TV Buffer Warning
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                To guarantee zero lags on 4K streams, connect your Android Smart TV or TV Box directly via **Ethernet LAN cable** instead of 2.4GHz Wi-Fi!
              </p>
              <div className="pt-2">
                <a 
                  href="#install-timeline" 
                  className="text-xs text-secondary-light hover:text-white font-bold flex items-center space-x-1"
                >
                  <span>Read Setup Manual</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </article>
  );
}
