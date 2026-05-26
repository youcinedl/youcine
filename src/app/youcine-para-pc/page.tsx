import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";
import dynamic from "next/dynamic";
import { 
  Monitor, 
  Volume2, 
  Layers, 
  Battery, 
  Camera, 
  Gamepad2, 
  Check, 
  X, 
  Info,
  ShieldCheck,
  Zap,
  Play
} from "lucide-react";

const FAQSection = dynamic(() => import("@/components/ui/FAQSection"), {
  loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
});

const SystemReqsInteractive = dynamic(
  () => import("@/components/ui/PCInteractiveSections").then((mod) => mod.SystemReqsInteractive),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const EmulatorsComparison = dynamic(
  () => import("@/components/ui/PCInteractiveSections").then((mod) => mod.EmulatorsComparison),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const StepTimeline = dynamic(
  () => import("@/components/ui/PCInteractiveSections").then((mod) => mod.StepTimeline),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const CommonErrors = dynamic(
  () => import("@/components/ui/PCInteractiveSections").then((mod) => mod.CommonErrors),
  {
    loading: () => <div className="h-64 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

export const metadata = generateMeta(
  "Download Youcine APK for PC (Windows 10/11 / Mac)",
  "Aprenda como baixar e instalar o YouCine no seu PC Windows ou Mac usando emuladores. Assista a filmes, séries, anime e esportes em tela grande com qualidade 4K.",
  "youcine-para-pc"
);

export default function YouCinePCPage() {
  const pcFaqs = [
    {
      question: "What is Youcine?",
      answer: "Youcine is a free streaming app where you can watch movies, TV shows, anime, cartoons, and live sports. It is completely free, you do not need to pay or subscribe to anything!"
    },
    {
      question: "Is Youcine available for PC or Mac?",
      answer: "No, Youcine does not have an official version for PC or Mac. It is only made for Android phones. But you can still use it on your PC by installing a free program called an emulator."
    },
    {
      question: "What is an Emulator and Why Do I Need It?",
      answer: "An emulator is a free program that makes your PC act like an Android phone. It lets you run phone apps on your computer. Without an emulator, you cannot use Youcine on your PC."
    },
    {
      question: "Which is the Best Emulator for Youcine on PC?",
      answer: "There are many good emulators available. Here are the most popular ones: BlueStacks — Best for beginners, Nox Player — Best for old or slow PCs, LDPlayer — Best for smooth performance, and MEmu Play — Best for fast loading. You can choose any one of these and they are all free."
    },
    {
      question: "Is Youcine Safe to Download?",
      answer: "Yes, Youcine is safe to download only if you download it from a trusted website like youcine-dl.com. Never download it from unknown or suspicious websites because they may contain harmful viruses that can damage your PC."
    },
    {
      question: "Does Youcine Cost Any Money?",
      answer: "No! Youcine is completely free. You do not need to pay anything or create a paid account. Just download it, open it, and start watching your favorite content right away!"
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
              <Zap className="w-4 h-4 text-secondary" />
              <span>Full Windows & macOS Setup Guide</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Download Youcine APK <span className="text-gradient">for PC</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Download Youcine APK for PC (for Windows / Mac) Using Android Emulator. Learn how to install it in minutes and unlock 4K streaming on the big screen.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5 text-base sm:text-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>Get Started Now</span>
              </a>
              <a href="#timeline-guide" className="btn-secondary flex items-center space-x-2 px-7 py-3.5 text-base">
                <span>View Steps</span>
              </a>
            </div>
          </div>

          {/* Premium mockup graphic display */}
          <div className="lg:col-span-5 relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <Image 
              src="/images/youcine_pc_streaming.png" 
              alt="YouCine on PC Curved Monitor Streaming Media Player Mockup" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/20 border border-secondary/30 px-3 py-1 rounded-full">
                Stunning Visuals
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">Streaming Center on PC Screen</h3>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine APK for PC Download</h2>
            </div>
            
            <p className="text-slate-350 text-base sm:text-lg leading-relaxed">
              Find the core configurations, file information, and requirements details for setting up the application package on your computer:
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
                    <span className="text-white font-bold text-sm sm:text-base">YouCine APK</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Platform</span>
                    <span className="text-white font-bold text-sm sm:text-base">Android (via Emulator on PC)</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Supported OS</span>
                    <span className="text-white font-bold text-sm sm:text-base text-right">Windows 7/8/10/11, macOS</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">App Size</span>
                    <span className="text-white font-bold text-sm sm:text-base">~40 MB</span>
                  </div>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Developer</span>
                    <span className="text-white font-bold text-sm sm:text-base">YouCine Team</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Latest Version</span>
                    <span className="text-white font-bold text-sm sm:text-base">v1.17.4</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Category</span>
                    <span className="text-white font-bold text-sm sm:text-base">Entertainment / Streaming</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">Required Emulator</span>
                    <span className="text-primary-light font-bold text-xs sm:text-sm text-right">BlueStacks, LDPlayer, Nox, MEmu</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. STREAMING APPS INTRODUCTION */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Streaming Apps — What They Are and Why People Love Them</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              These days, streaming apps are incredibly popular. People use them to watch their favorite shows and movies whenever they have free time. Modern platforms offer seamless playback, customized feeds, and convenience.
            </p>
            
            <div className="bg-dark-800/30 border border-white/5 rounded-2xl p-6 space-y-4">
              <p className="text-slate-350 text-sm sm:text-base">
                Most streaming apps are made primarily for mobile phones, and **YouCine** is one of them. It is a highly engaging, feature-rich app where you can enjoy diverse genres of entertainment, completely free:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { title: "Movies", subtitle: "Latest Blockbusters", icon: "🎬" },
                  { title: "TV Shows", subtitle: "Trending Series", icon: "📺" },
                  { title: "Cartoons", subtitle: "Kids Favorites", icon: "🧸" },
                  { title: "Anime", subtitle: "Japanese Animation", icon: "🎌" },
                  { title: "Live Sports", subtitle: "High-octane Action", icon: "⚽" }
                ].map((item, index) => (
                  <div key={index} className="bg-dark-900/60 rounded-xl p-4 border border-white/5 text-center hover:border-primary/20 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold text-white text-sm sm:text-base">{item.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.subtitle}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-350 text-sm sm:text-base pt-2">
                Youcine is designed to be highly intuitive and easy to use. Since it was made for mobile architectures, you can usually find it and download it for Android-based setups.
              </p>
            </div>
          </section>

          {/* C. CAN YOU USE IT ON PC / EMULATOR SECTION */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Can you use Youcine on PC */}
              <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Can You Use Youcine on a PC?</h3>
                  <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                    More and more people want to use Youcine on their computers to enjoy movies on expansive displays. However, because Youcine is not natively compiled for PC or Mac, you will need a special software tool called an **Android Emulator** to bridge the gap. If you want to watch on Apple devices, visit our guide on <a href="/youcine-ios" className="text-primary-light hover:underline font-semibold">YouCine for iOS</a>, or check out the <a href="/youcine-smart-tv" className="text-primary-light hover:underline font-semibold">YouCine for Smart TV</a> version for big screen TV streaming.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-primary-light font-bold text-sm">
                  <span>Emulators enable PC streaming</span>
                  <span>→</span>
                </div>
              </div>

              {/* Why do you need an emulator */}
              <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why Do You Need an Emulator?</h3>
                  <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                    Youcine is not available for PC or Mac directly on the Windows Microsoft Store or Apple App Store. It is strictly compiled as an Android package (.apk). Thus, a virtual environment is mandatory to run the application code on desktop architectures.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-secondary-light font-bold text-sm">
                  <span>Bypasses OS restrictions</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </section>

          {/* D. HOW DOES EMULATOR WORK */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How Does an Emulator Work?</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              An Android Emulator is a free program that creates a virtualized Android environment inside your computer. It tricks your PC into acting like a smartphone, enabling mobile applications to run natively on your laptop or desktop processor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {[
                { step: "01", title: "Install Emulator", text: "Download and set up an emulator such as BlueStacks or Nox Player." },
                { step: "02", title: "Import APK", text: "Drag and drop the Youcine APK installer into the emulator screen." },
                { step: "03", title: "Start Watching", text: "Launch the app and enjoy unlimited high-quality streams instantly!" }
              ].map((item, i) => (
                <div key={i} className="bg-dark-800/40 rounded-2xl p-5 border border-white/5 relative group hover:border-primary/30 transition-all duration-300">
                  <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-primary opacity-25 group-hover:opacity-40 transition-opacity">
                    {item.step}
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg mt-2 mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* E. SYSTEM REQUIREMENTS CHASSIS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">System Requirements for Downloading Youcine APK on PC</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Before configuring the emulator, make sure your computer has the necessary hardware resources. The interactive panel below displays both the minimum specs and our recommended hardware layout for fluid, zero-lag playback:
            </p>

            <SystemReqsInteractive />
          </section>

          {/* F. THE BEST EMULATORS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Best Android Emulators to Run Youcine on PC</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              There are many Android emulators available online, but not all are created equal. Some work extremely well, while others can be bloated, laggy, or difficult to configure. We have tested and cataloged the best options for streaming YouCine smoothly:
            </p>

            <EmulatorsComparison />
          </section>

          {/* G. STEP-BY-STEP TIMELINE GUIDE */}
          <section className="space-y-6" id="timeline-guide">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How to Download Youcine on PC — Step by Step Guide</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Follow these simple, step-by-step instructions to get YouCine working on your Windows PC or Mac laptop in just a few minutes:
            </p>

            <StepTimeline />
          </section>

          {/* H. COMMON ERROR RESOLUTION MATRIX */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Common Download Errors & Solutions</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Encountered an issue during configuration? Don't worry! Below is our interactive troubleshooting matrix detailing common problems and their quick solutions:
            </p>

            <CommonErrors />
          </section>

          {/* I. TOP BENEFITS OF PC STREAMING */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Use Youcine on a PC? - Top Benefits</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Streaming movies on your computer displays a wealth of advantages over standard mobile setups. Here are the top reasons why users prefer the desktop experience:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
              {[
                { 
                  title: "Bigger & Better Screen", 
                  desc: "Watch films in 4K resolution on wide desktop monitors or large TV screens instead of compact mobile displays.",
                  icon: Monitor,
                  color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
                },
                { 
                  title: "Superior Sound Quality", 
                  desc: "Plug in high-fidelity computer speakers, surround sound bars, or studio headphones for a theatrical soundstage.",
                  icon: Volume2,
                  color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
                },
                { 
                  title: "Fluid Multitasking", 
                  desc: "Watch shows in one window while working, browsing, or chatting in other tabs on a dual-monitor setup.",
                  icon: Layers,
                  color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
                },
                { 
                  title: "Zero Battery Limits", 
                  desc: "Stream movies for hours without worrying about battery drain, device overheating, or phone health degradation.",
                  icon: Battery,
                  color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                },
                { 
                  title: "Instant Screenshots", 
                  desc: "Capture and save iconic cinematic scenes instantly by pressing Windows + Shift + S to share with friends.",
                  icon: Camera,
                  color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
                },
                { 
                  title: "Ergonomic Comfort", 
                  desc: "Sit back and relax comfortably in your office chair without holding a heavy smartphone in your hands.",
                  icon: Gamepad2,
                  color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="glass-panel p-5 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all duration-350 hover:-translate-y-1">
                    <div>
                      <div className={`p-3 rounded-xl w-fit border ${item.color} mb-4 shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* J. PROS & CONS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine for PC — Pros & Cons</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              To give you an honest overview, here are the key advantages and drawbacks of utilizing YouCine on an Android emulator:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Pros */}
              <div className="glass-panel border-green-500/10 bg-green-950/5 p-6 sm:p-8">
                <h4 className="text-green-400 font-extrabold text-lg sm:text-xl flex items-center mb-6">
                  <span className="p-1.5 rounded-lg bg-green-500/10 text-green-400 mr-3">
                    <Check className="w-5 h-5" />
                  </span>
                  👍 Pros — The Good Things
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Completely Free", desc: "No subscriptions, sign-ups, or recurring credit card fees." },
                    { title: "Massive Content Library", desc: "Access movies, television programs, cartoons, anime, and live feeds." },
                    { title: "Excellent Emulator Stability", desc: "Runs exceptionally fast and smoothly inside modern emulators." },
                    { title: "Subtitles & Multi-Audio", desc: "Supports multiple tracks, subtitles, and localized languages." }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 font-bold mt-1 text-sm">•</span>
                      <div>
                        <strong className="text-white text-sm sm:text-base">{item.title}:</strong>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="glass-panel border-red-500/10 bg-red-950/5 p-6 sm:p-8">
                <h4 className="text-red-400 font-extrabold text-lg sm:text-xl flex items-center mb-6">
                  <span className="p-1.5 rounded-lg bg-red-500/10 text-red-400 mr-3">
                    <X className="w-5 h-5" />
                  </span>
                  👎 Cons — The Not So Good Things
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "No Direct Desktop App", desc: "Requires third-party emulators. No native Windows/Mac executable is available." },
                    { title: "Emulator Memory Cost", desc: "Setting up virtual machines uses hardware resources (RAM & CPU cores)." },
                    { title: "Security Awareness", desc: "Avoid downloading APKs from shady sources. Rely only on trusted platforms like youcine-dl.com." }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold mt-1 text-sm">•</span>
                      <div>
                        <strong className="text-white text-sm sm:text-base">{item.title}:</strong>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* K. DYNAMIC FAQ CONTAINER */}
          <section className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-3 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider">
                Still have questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">FAQs: Youcine for PC</h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg">
                Find quick, simplified answers to the most common queries regarding YouCine streaming on computers.
              </p>
            </div>

            <FAQSection faqs={pcFaqs} />
          </section>

          {/* L. CONCLUSION & CTA */}
          <section className="glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-r from-primary/15 via-secondary/5 to-transparent shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Is Youcine Worth Using on PC?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Youcine is an outstanding, completely free media application containing cataloged entertainment streams. Enjoying Youcine on your PC unlocks theater-quality acoustics, fluid mouse operations, and expansive viewing panels. Set up an emulator like BlueStacks in under five minutes, load your package file safely, and upgrade your home entertainment system today.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-start space-x-3 mt-4 text-left">
                <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-xs sm:text-sm">
                  <strong>Important Security Notice:</strong> Make sure you only acquire the Youcine APK installer from trusted platforms like <span className="text-yellow-400 font-semibold">youcine-dl.com</span> to protect your PC from malware.
                </p>
              </div>
              <div className="pt-6 flex justify-center sm:justify-start">
                <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Start Downloading Safely</span>
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
              downloads="5M+"
              requirements="Windows 7/8/10/11 & macOS via Emulator"
              lastUpdate="2026-05-26"
              downloadLink="https://youcine-dl.com/download/youcine.apk"
            />
            
            {/* Extra Sidebar Info Panel */}
            <div className="glass-panel p-5 border border-white/5 space-y-4">
              <h4 className="text-white font-extrabold text-base flex items-center">
                <span className="w-2 h-4 bg-secondary rounded mr-2"></span>
                Quick Setup Diagnostics
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                To guarantee zero lags, we recommend utilizing a **solid-state drive (SSD)**, allocating at least **4 CPU Cores** in emulator configuration, and confirming that hardware virtualization is active.
              </p>
              <div className="pt-2">
                <a 
                  href="#timeline-guide" 
                  className="text-xs text-primary-light hover:text-white font-bold flex items-center space-x-1"
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
