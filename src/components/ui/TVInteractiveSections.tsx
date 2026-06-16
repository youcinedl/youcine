"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Tv, 
  Settings, 
  HardDrive, 
  Layers, 
  Wifi, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  Monitor,
  Flame,
  Package,
  Share2,
  Users,
  Utensils,
  Play,
  Volume2
} from "lucide-react";

// ==========================================
// 1. SMART TV SYSTEM REQUIREMENTS INTERACTIVE
// ==========================================
export function TVSystemReqsInteractive() {
  const specs = [
    { name: "Operating System", value: "Android TV OS 5.0 or above", icon: Settings, percentage: 80 },
    { name: "RAM (Memory)", value: "Minimum 2GB for smooth streaming", icon: Layers, percentage: 70 },
    { name: "Storage Space", value: "At least 100MB free space", icon: HardDrive, percentage: 50 },
    { name: "Internet Speed", value: "Minimum 15 Mbps for HD/4K streaming", icon: Wifi, percentage: 90 },
    { name: "Apps Needed", value: "File Manager or Downloader (like Downloader on Firestick)", icon: AlertCircle, percentage: 85 }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-6">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <h4 className="text-xl font-bold text-white mb-6">Smart TV Hardware Requirements Checklist</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specs.map((spec, i) => {
          const Icon = spec.icon;
          return (
            <div key={i} className="bg-dark-800/40 border border-white/5 rounded-xl p-5 hover:border-primary/20 transition-all duration-350">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/15 text-primary-light">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-slate-350 font-medium text-sm sm:text-base">{spec.name}</span>
              </div>
              <div className="text-white font-bold text-base sm:text-lg mb-3 leading-snug">
                {spec.value}
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-dark-900 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${spec.percentage}%` }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="bg-gradient-primary h-full rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// ==========================================
// 2. DEVICE COMPATIBILITY CARDS
// ==========================================
export function TVDeviceCompatibility() {
  const devices = [
    {
      name: "Android Smart TVs",
      desc: "Watch on the big screen with full native app support. Fits standard Android TV brands perfectly.",
      icon: Tv,
      badge: "Full Support"
    },
    {
      name: "Amazon Firestick & Fire TV",
      desc: "Plug in, unlock developer settings, download via downloader, and start streaming instantly.",
      icon: Flame,
      badge: "Most Popular"
    },
    {
      name: "Android TV Boxes",
      desc: "Turn any standard television into a modern, smart streaming center with TV Box hardware.",
      icon: Package,
      badge: "Easy Setup"
    },
    {
      name: "Chromecast-Enabled TVs",
      desc: "Cast your favorite streams directly from your tablet or mobile phone with a single tap.",
      icon: Share2,
      badge: "Cast Support"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {devices.map((dev, index) => {
        const Icon = dev.icon;
        return (
          <div key={index} className="glass-panel p-5 border border-white/5 hover:border-primary/20 transition-all duration-350 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-secondary/10 text-secondary-light rounded-xl group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 bg-dark-900 border border-white/5 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {dev.badge}
                </span>
              </div>
              <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">{dev.name}</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{dev.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// ==========================================
// 3. STEP BY STEP TV TIMELINE GUIDE
// ==========================================
export function TVStepTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Allow Unknown Sources",
      subtitle: "Configure Security Permissions",
      desc: "Before downloading files, you need to allow your TV engine to install applications from outside the official Google Play Store. Go to your TV Settings, open 'Security & Restrictions' (or Device Preferences > Security), and toggle on 'Install Unknown Apps' for your web browser or downloader tool.",
      tip: "If using a Fire TV, navigate to Settings > My Fire TV > Developer Options, and enable both 'ADB Debugging' and 'Apps from Unknown Sources'."
    },
    {
      title: "Download the Youcine APK",
      subtitle: "Fetch the TV package file",
      desc: "Now, grab the installer. Open your TV's built-in web browser (or open the 'Downloader' app), search for 'Youcine APK for TV', visit the trusted secure website youcine-dl.com, and click the Download button. Wait for the APK file to download successfully into your storage.",
      tip: "Rely only on trusted domains like youcine-dl.com to avoid fake files or viruses."
    },
    {
      title: "Install the App",
      subtitle: "Execute the APK installer",
      desc: "Once the file download completes, open your TV's File Manager utility (or navigate to the 'Files' tab in your Downloader application), find the downloaded Youcine APK file, click on it, and select the 'Install' option. Wait a few seconds for the installation process to complete.",
      tip: "Ensure your TV has at least 100MB free storage space for installation."
    },
    {
      title: "Open & Start Streaming",
      subtitle: "Access thousands of free movies",
      desc: "You are all set! Return to your smart TV home dashboard, navigate to your 'Apps' collection, find the newly installed Youcine icon, and launch it. Explore the extensive categories, select a movie, sit back, relax, and start streaming!",
      tip: "Use high-quality video modes and set external players like MX Player for advanced control options!"
    }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-8">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Steps List */}
        <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 lg:border-r border-white/5 pr-0 lg:pr-6 scrollbar-none flex-shrink-0">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex items-center space-x-3 p-3.5 rounded-xl text-left transition-all duration-300 w-fit lg:w-full flex-shrink-0 border ${
                activeStep === i 
                  ? "bg-white/5 border-primary text-white" 
                  : "bg-transparent border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                activeStep === i ? "bg-gradient-primary text-white" : "bg-dark-800 text-slate-400"
              }`}>
                {i + 1}
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-sm truncate max-w-[170px]">{step.title}</div>
                <div className="text-xs text-slate-400 mt-0.5 truncate max-w-[170px]">{step.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Step details content */}
        <div className="lg:w-2/3 flex flex-col justify-between min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  Step {activeStep + 1} of 4
                </span>
                <h4 className="text-2xl font-bold text-white mt-3">{steps[activeStep].title}</h4>
                <p className="text-slate-400 text-sm italic">{steps[activeStep].subtitle}</p>
              </div>

              <p className="text-slate-250 text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Tips block */}
              <div className="bg-dark-800/60 border-l-4 border-secondary rounded-r-xl p-4 flex items-start space-x-3 mt-6">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold text-sm">Installation Tip: </span>
                  <span className="text-slate-350 text-sm leading-relaxed">{steps[activeStep].tip}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* timeline controller */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeStep === 0 
                  ? "text-slate-600 cursor-not-allowed" 
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
              disabled={activeStep === 3}
              className={`btn-primary flex items-center space-x-2 py-2.5 px-5 text-sm ${
                activeStep === 3 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>{activeStep === 3 ? "All Set!" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ==========================================
// 4. HOW TO USE CINEMA GUIDE
// ==========================================
export function TVHowToUse() {
  const steps = [
    {
      title: "Open the App",
      desc: "Turn on your Smart TV, find the Youcine app on your home screen, and tap to open it.",
      icon: Tv,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Gather Your People",
      desc: "Call the family over or invite some friends. The bigger the crowd, the more fun it gets.",
      icon: Users,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Grab the Snacks",
      desc: "No movie night is complete without popcorn. Get everyone's snacks ready before hitting play.",
      icon: Utensils,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    {
      title: "Pick What to Watch",
      desc: "Browse through thousands of options: movies, documentaries, anime, live sports, or your favorite TV series.",
      icon: Play,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Hit Play & Enjoy",
      desc: "Sit back, relax, and enjoy stunning picture quality on your big screen from the comfort of home.",
      icon: Volume2,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="glass-panel p-5 border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all duration-350 hover:-translate-y-1">
            <div>
              <div className={`p-3 rounded-xl w-fit border ${step.color} mb-4 shadow-sm`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-white font-extrabold text-base mb-2">
                <span className="text-primary-light font-black text-xs mr-1">0{index + 1}.</span>
                {step.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// ==========================================
// 5. TROUBLESHOOTING DYNAMIC PANEL
// ==========================================
export function TVTroubleshooting() {
  const [openError, setOpenError] = useState<number | null>(0);

  const errors = [
    {
      problem: "App Won't Install",
      cause: "Security restrictions preventing installation, low storage space, or corrupt package file.",
      solution: "Make sure 'Unknown Sources' is turned on in your settings, check if you have at least 100MB free space, clear your installer cache, and try again."
    },
    {
      problem: "Video Won't Play / Freezing",
      cause: "Slow internet connection speed, incorrect buffer settings, or resolution set too high.",
      solution: "Check your internet connection speed. If it is slow (below 15 Mbps), open the stream settings inside the video player, lower the video quality (to 720p or SD), and it should stream fine."
    },
    {
      problem: "App Keeps Crashing",
      cause: "Outdated version, core systems incompatibility, or system cache overload.",
      solution: "You might have an old version of the app. Go to your TV settings > Apps > YouCine, click 'Force Stop' and 'Clear Cache'. If the issue persists, download the latest Youcine APK from a trusted website like youcine-dl.com and reinstall."
    }
  ];

  return (
    <div className="space-y-4 mt-6">
      {errors.map((err, i) => {
        const isOpen = openError === i;
        return (
          <div 
            key={i} 
            className={`glass-panel border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-red-500/20 bg-red-955/5" : "border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setOpenError(isOpen ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 rounded-lg flex-shrink-0 ${
                  isOpen ? "bg-red-500/15 text-red-400" : "bg-dark-800 text-slate-400"
                }`}>
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="font-bold text-white text-sm sm:text-base">{err.problem}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="text-slate-400"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="p-5 pt-0 border-t border-white/5 space-y-3">
                    <div>
                      <span className="text-red-400/90 font-semibold text-xs sm:text-sm uppercase tracking-wider">Potential Cause:</span>
                      <p className="text-slate-350 text-sm mt-1">{err.cause}</p>
                    </div>
                    <div className="bg-green-950/20 border border-green-500/10 rounded-xl p-4">
                      <span className="text-green-400 font-bold text-xs sm:text-sm uppercase tracking-wider block">Quick Fix:</span>
                      <p className="text-slate-200 text-sm mt-1 leading-relaxed">{err.solution}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
