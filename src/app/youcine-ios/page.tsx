import Image from "next/image";
import Link from "next/link";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";
import dynamic from "next/dynamic";
import { 
  Smartphone, 
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
  Tv,
  Eye,
  Languages,
  MessageCircle,
  RefreshCw,
  Heart
} from "lucide-react";

const FAQSection = dynamic(() => import("@/components/ui/FAQSection"), {
  loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
});

const IOSSystemReqsInteractive = dynamic(
  () => import("@/components/ui/iOSInteractiveSections").then((mod) => mod.IOSSystemReqsInteractive),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const YouCineVsPaidApps = dynamic(
  () => import("@/components/ui/iOSInteractiveSections").then((mod) => mod.YouCineVsPaidApps),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

const IOSStepTimeline = dynamic(
  () => import("@/components/ui/iOSInteractiveSections").then((mod) => mod.IOSStepTimeline),
  {
    loading: () => <div className="h-96 bg-dark-800/10 animate-pulse rounded-2xl border border-white/5"></div>
  }
);

export const metadata = generateMeta(
  "Download Youcine iOS for iPhone and iPads 2026",
  "Aprenda como baixar e instalar o YouCine no seu iPhone ou iPad usando ferramentas de sideloading (IPA). Assista a filmes, séries, anime e esportes de graça.",
  "youcine-ios"
);

export default function YouCineIOSPage() {
  const iosFaqs = [
    {
      question: "Is YouCine available on the Apple App Store?",
      answer: "No, YouCine is not available on the Apple App Store. It is a third-party app, which means Apple has not officially listed it. But do not worry! You can still easily install it on your iPhone or iPad by using a free tool called a sideloading app like AltStore or Sideloadly."
    },
    {
      question: "Is YouCine free to use on iOS?",
      answer: "Yes! YouCine is completely free to use. You do not need to pay anything or sign up for a subscription. Just download it, install it, and start watching your favorite movies, shows, anime, and sports all for free!"
    },
    {
      question: "Do I need to jailbreak my iPhone or iPad to install YouCine?",
      answer: "No! You do NOT need to jailbreak your iPhone or iPad. You can install YouCine safely using a free sideloading tool like AltStore or Sideloadly. This is a simple and safe process that anyone can do!"
    },
    {
      question: "Can I watch content offline on YouCine iOS?",
      answer: "Yes! YouCine lets you download your favorite movies and shows so you can watch them later without an internet connection. This is perfect for traveling or when your internet is slow or not available!"
    },
    {
      question: "Is YouCine safe for iPhone and iPad users?",
      answer: "Yes, YouCine is safe but only if you download it from a trusted and reliable website like youtube-dl.com. Always avoid downloading it from unknown or suspicious websites because they may contain harmful viruses that can damage your phone."
    }
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      {/* 1. HERO HEADER SECTION */}
      <header className="relative w-full mb-16 sm:mb-20 text-center lg:text-left">
        {/* Soft Background Neon Glow */}
        <div className="absolute -top-12 -left-12 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-12 right-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-secondary-light">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Full iOS 12+ IPA Sideloading Guide</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Download Youcine <span className="text-gradient">for iOS</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Download Youcine iOS for iPhone/iPads 2026. Learn how to sideload the secure IPA package to enjoy movies, anime, and live sports on your Apple device.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5 text-base sm:text-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>Get Started Now</span>
              </a>
              <a href="#sideload-timeline" className="btn-secondary flex items-center space-x-2 px-7 py-3.5 text-base">
                <span>View IPA Guide</span>
              </a>
            </div>
          </div>

          {/* Premium mockup graphic display */}
          <div className="lg:col-span-5 relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <Image 
              src="/images/youcine_ios_streaming.png" 
              alt="YouCine iOS Streaming curved monitor setup" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/20 border border-primary/30 px-3 py-1 rounded-full">
                iOS Premium
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">Streaming Center on iPhone 15 Pro</h3>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Download Youcine APK iOS</h2>
            </div>
            
            <p className="text-slate-350 text-base sm:text-lg leading-relaxed">
              Find the core technical specifications, compatibility profile, and release details for setting up the IPA app package on your iOS operating system:
            </p>

            <div className="glass-panel overflow-hidden border border-white/5 shadow-2xl">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <span className="font-bold text-white text-base tracking-wider uppercase">Application Profile</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase">
                  Verified IPA
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/5 bg-dark-800/20">
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">App Name</span>
                    <span className="text-white font-bold text-sm sm:text-base">YouCine iOS</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Version</span>
                    <span className="text-white font-bold text-sm sm:text-base">v 1.17.4</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Developer</span>
                    <span className="text-white font-bold text-sm sm:text-base">YouCine Team</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">App Size</span>
                    <span className="text-white font-bold text-sm sm:text-base">~40 MB</span>
                  </div>
                </div>
                
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Category</span>
                    <span className="text-white font-bold text-sm sm:text-base">Entertainment / Streaming</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Compatibility With</span>
                    <span className="text-white font-bold text-xs sm:text-sm text-right leading-tight max-w-[180px]">
                      iOS 12.0 and above (iPhone, iPad, iPod Touch)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-semibold">Updated On</span>
                    <span className="text-white font-bold text-sm sm:text-base">May 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-slate-400 text-sm font-semibold">License Type</span>
                    <span className="text-secondary-light font-bold text-sm">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. INTRODUCTION */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine for iPhone — Your Perfect Free Streaming App</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              These days, people love using streaming apps to watch their favorite content. Why? Because streaming apps are super easy to use and give you unlimited options to watch whatever you want, whenever you want!
            </p>
            
            <div className="bg-dark-800/30 border border-white/5 rounded-2xl p-6 space-y-4">
              <p className="text-slate-350 text-sm sm:text-base">
                Youcine is one of the most popular streaming apps available today. It is a completely free app that gives you access to a huge library of content, including:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { title: "Movies", icon: "🎬" },
                  { title: "TV Shows", icon: "📺" },
                  { title: "Cartoons", icon: "🧸" },
                  { title: "Anime", icon: "⚔️" },
                  { title: "Live Sports", icon: "⚽" },
                  { title: "Programs", icon: "🎙️" },
                  { title: "Documentaries", icon: "🎥" }
                ].map((item, index) => (
                  <div key={index} className="bg-dark-900/60 rounded-xl p-4 border border-white/5 text-center hover:border-primary/20 transition-all duration-300">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="font-bold text-white text-sm sm:text-base">{item.title}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-350 text-sm sm:text-base pt-2">
                No matter what you are in the mood for, Youcine has something for everyone!
              </p>
            </div>

            {/* Apple User Announcement Alert */}
            <div className="bg-gradient-to-r from-secondary/15 via-primary/5 to-transparent border-l-4 border-secondary rounded-r-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <h3 className="text-lg sm:text-xl font-black text-white flex items-center mb-2">
                Great News for iPhone Users! 🍎
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The best part is that Youcine is now available for iOS users too! So if you have an iPhone or iPad, you can enjoy all of this amazing free content right on your Apple device.
              </p>
            </div>
          </section>

          {/* C. WHAT IS IT / APP STORE PROFILE */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What is Youcine for iOS */}
              <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">What is Youcine for iOS?</h3>
                  <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                    Youcine for iOS is a free streaming app made specially for iPhone and iPad users. It lets you watch unlimited movies, shows, anime, sports, and much more all for free!
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-primary-light font-bold text-sm">
                  <span>Custom Apple experience</span>
                  <span>→</span>
                </div>
              </div>

              {/* Is it on Apple Store */}
              <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Is it on the Apple App Store?</h3>
                  <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                    Youcine is a third-party app, which means it is NOT officially available on the Apple App Store. But do not worry — you can still easily download and install it on your iPhone or iPad through a simple process. If you would rather watch on a desktop computer, check out our guide on <Link href="/youcine-para-pc" className="text-primary-light hover:underline font-semibold">YouCine for PC</Link>, or setup <Link href="/youcine-smart-tv" className="text-primary-light hover:underline font-semibold">YouCine for Smart TV</Link> to watch directly on television displays.
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-secondary-light font-bold text-sm">
                  <span>Install via IPA Sideloading</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </section>

          {/* D. YOUCINE VS PAID APPS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine vs Paid Streaming Apps</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Most popular streaming apps like Netflix or Disney+ ask you to pay every month. But Youcine is completely different:
            </p>

            <YouCineVsPaidApps />
          </section>

          {/* E. AMAZING FEATURES BULLET LISTS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Amazing Features of Youcine for iOS</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Youcine is packed with great features that make your streaming experience fun and easy:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {[
                { title: "HD Quality Videos", text: "Watch everything in crystal clear high definition.", icon: "🎥" },
                { title: "Easy Interface", text: "Simple and clean design that anyone can use.", icon: "🖥️" },
                { title: "Multi Language Support", text: "Watch content in many different languages.", icon: "🌍" },
                { title: "Customizable Themes", text: "Change the look of the app to match your style.", icon: "🎨" },
                { title: "Smooth Streaming", text: "Enjoy your favorite content without buffering or freezing.", icon: "📶" },
                { title: "Completely Free", text: "No hidden charges or monthly payments ever!", icon: "💰" }
              ].map((item, index) => (
                <div key={index} className="bg-dark-800/40 rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* F. SPECIAL SPECIFIC FEATURES GRID */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Features of Youcine for iOS — What Makes it Special?</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Youcine for iOS is loved by millions of people all around the world. Here is why it stands out from all other streaming apps:
            </p>

            <div className="space-y-4 pt-2">
              {[
                { 
                  index: "1", 
                  title: "Easy and Simple Interface", 
                  desc: "The Youcine homepage is very clean and well organized. All content is neatly sorted into easy categories like Movies, TV Shows, Cartoons, Anime, and Sports. You will never feel lost or confused; everything is right where you need it.", 
                  icon: Sliders 
                },
                { 
                  index: "2", 
                  title: "Quick Search Bar", 
                  desc: "Do not waste time scrolling through hundreds of titles. Just type what you are looking for in the search bar and find your favorite movie, show, or anime in seconds.", 
                  icon: Search 
                },
                { 
                  index: "3", 
                  title: "Personalized Themes", 
                  desc: "Youcine lets you customize the look of the app to match your style. You can change colors, layouts, and themes. It also has a Dark Mode for comfortable watching at night without hurting your eyes.", 
                  icon: Sparkles 
                },
                { 
                  index: "4", 
                  title: "HD Quality Videos", 
                  desc: "Watch all your favorite content in crystal clear HD quality from 720p all the way up to 1080p. The best part? Youcine automatically adjusts the video quality based on your internet speed so you never have to worry about buffering.", 
                  icon: Tv 
                },
                { 
                  index: "5", 
                  title: "Multi Language Support", 
                  desc: "Youcine supports many different languages from all around the world. No matter where you are from, you can enjoy your favorite content in your own language without any problem.", 
                  icon: Languages 
                },
                { 
                  index: "6", 
                  title: "Subtitles Available", 
                  desc: "Do not understand a language? No problem! Youcine offers subtitles in many different languages so you can read along and fully enjoy every show, movie, or anime without missing anything.", 
                  icon: MessageCircle 
                },
                { 
                  index: "7", 
                  title: "🆕 Always Updated Content", 
                  desc: "Youcine is always adding new and latest content regularly. You will never run out of things to watch! The newest movies, latest anime episodes, and fresh TV series are added as soon as they are available.", 
                  icon: RefreshCw 
                },
                { 
                  index: "8", 
                  title: "Adjustable Sound Options", 
                  desc: "You are in full control of your audio experience! You can easily adjust the sound levels inside the app. You can also connect your headphones or external speakers for a much richer and more powerful sound experience!", 
                  icon: Volume2 
                }
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.index} className="glass-panel p-5 sm:p-6 border border-white/5 flex items-start space-x-4 hover:border-primary/20 transition-colors">
                    <div className="p-3 bg-secondary/10 rounded-2xl text-secondary-light flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-extrabold text-base sm:text-lg flex items-center">
                        <span className="text-secondary-light font-black text-sm mr-2">{feat.index}.</span>
                        {feat.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* G. SYSTEM REQUIREMENTS CHASSIS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">System Requirements for Youcine on iOS</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Verify if your Apple mobile device or tablet features the correct hardware specification to enable smooth streaming and package compilation:
            </p>

            <IOSSystemReqsInteractive />
          </section>

          {/* H. STEP-BY-STEP TIMELINE GUIDE */}
          <section className="space-y-6" id="sideload-timeline">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How to Download and Install Youcine on iPhone or iPad — Easy Step by Step Guide</h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Since Youcine is not on the Apple App Store, you need to use a special file called an **IPA file** to sideload it. Follow these simplified steps to configure it in minutes:
            </p>

            <IOSStepTimeline />

            {/* Safety Tip Alert */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 flex items-start space-x-3 mt-4 text-left">
              <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                <strong>⚠️ Safety Tip:</strong> Always download Youcine from a trusted and safe website only. Never download it from unknown sources to protect your phone from harmful viruses.
              </p>
            </div>
          </section>

          {/* I. DYNAMIC FAQ CONTAINER */}
          <section className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-3 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider">
                FAQ Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">FAQs - Youcine for iOS</h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg">
                Find quick, simplified answers to the most common queries regarding YouCine streaming on iPhones & iPads.
              </p>
            </div>

            <FAQSection faqs={iosFaqs} />
          </section>

          {/* J. CONCLUSION */}
          <section className="glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-r from-primary/15 via-secondary/5 to-transparent shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Conclusion</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Youcine is a free app for iPhone and iPad users. You can use it to watch movies, cartoons, anime, live sports, documentaries, and TV shows all without paying anything! Installing Youcine is not hard at all. You just need a free tool called a sideloading app. Once it is installed, you can enjoy everything: subtitles, different languages, HD videos, and new content added every day! You can also download videos and watch them later without the internet. This is great for traveling or when your internet is slow. So go ahead - download Youcine today and enjoy free entertainment anytime, anywhere.
              </p>
              <div className="pt-6 flex justify-center sm:justify-start">
                <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Download YouCine IPA Now</span>
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
              version="v 1.17.4"
              size="40 MB"
              downloads="2M+"
              requirements="iOS 12.0 or above (No Jailbreak)"
              lastUpdate="2026-05-26"
              downloadLink="https://youcine-dl.com/download/youcine.ipa"
            />
            
            {/* Extra Sidebar Info Panel */}
            <div className="glass-panel p-5 border border-white/5 space-y-4">
              <h4 className="text-white font-extrabold text-base flex items-center">
                <span className="w-2 h-4 bg-primary rounded mr-2"></span>
                Sideloading Note
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Sideloaded apps using free Apple IDs must be refreshed every **7 days** under standard developer policies unless utilizing an enterprise license or service (like AltStore/Developer Account).
              </p>
              <div className="pt-2">
                <a 
                  href="#sideload-timeline" 
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
