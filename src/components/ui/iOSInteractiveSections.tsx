"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Cpu, 
  Layers, 
  HardDrive, 
  Wifi, 
  Settings, 
  Check, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Tv,
  Globe
} from "lucide-react";

// ==========================================
// 1. IOS SYSTEM REQUIREMENTS INTERACTIVE
// ==========================================
export function IOSSystemReqsInteractive() {
  const [activeTab, setActiveTab] = useState<"minimum" | "recommended">("recommended");

  const specs = {
    minimum: [
      { name: "Device", value: "iPhone 7 / iPad 6th Gen or later", icon: Smartphone, percentage: 50 },
      { name: "Operating System", value: "iOS 13.0 or above", icon: Settings, percentage: 40 },
      { name: "Storage Space", value: "200 MB free storage", icon: HardDrive, percentage: 30 },
      { name: "RAM (Memory)", value: "2 GB RAM", icon: Layers, percentage: 40 },
      { name: "Internet Speed", value: "5 Mbps (for SD/HD streaming)", icon: Wifi, percentage: 35 },
      { name: "Additional Settings", value: "Allow installation from third-party apps", icon: AlertCircle, percentage: 40 }
    ],
    recommended: [
      { name: "Device", value: "iPhone 11 or later / iPad Pro series", icon: Smartphone, percentage: 95 },
      { name: "Operating System", value: "iOS 15.0 or later", icon: Settings, percentage: 90 },
      { name: "Storage Space", value: "500 MB or more free storage", icon: HardDrive, percentage: 80 },
      { name: "RAM (Memory)", value: "4 GB RAM or higher", icon: Layers, percentage: 85 },
      { name: "Internet Speed", value: "15+ Mbps (for smooth Full HD/4K)", icon: Wifi, percentage: 90 },
      { name: "Additional Settings", value: "Same + regular cache cleaning for best performance", icon: AlertCircle, percentage: 95 }
    ]
  };

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-6">
      <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h4 className="text-xl font-bold text-white">iOS Device Requirements Checklist</h4>
          <p className="text-slate-400 text-sm mt-1">Verify if your iPhone or iPad is ready to run sideloaded apps smoothly.</p>
        </div>
        
        {/* Toggle tab */}
        <div className="bg-dark-900 p-1 rounded-full border border-white/5 flex">
          <button
            onClick={() => setActiveTab("minimum")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-350 ${
              activeTab === "minimum" 
                ? "bg-gradient-primary text-white shadow-md shadow-primary/20" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Minimum
          </button>
          <button
            onClick={() => setActiveTab("recommended")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-350 ${
              activeTab === "recommended" 
                ? "bg-gradient-primary text-white shadow-md shadow-primary/20" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Recommended
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {specs[activeTab].map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="bg-dark-800/40 border border-white/5 rounded-xl p-5 hover:border-primary/20 transition-all duration-350">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary/15 text-secondary-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium text-sm sm:text-base">{spec.name}</span>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


// ==========================================
// 2. YOUCINE VS PAID STREAMING APPS COMPARISON
// ==========================================
export function YouCineVsPaidApps() {
  const comparisonData = [
    {
      feature: "Cost",
      label: "💰 Cost",
      youcine: { text: "Completely FREE", note: "No payment details or signup required", highlight: true },
      paid: { text: "Monthly Subscription", note: "Netflix & Disney+ charge recurring bills" }
    },
    {
      feature: "Content",
      label: "📺 Content",
      youcine: { text: "Unlimited", note: "Access movies, cartoons, anime, TV, and sports", highlight: true },
      paid: { text: "Limited by Plan", note: "Geoblocking and plan limits apply" }
    },
    {
      feature: "Device",
      label: "📱 Device",
      youcine: { text: "iPhone & iPad", note: "Supported on Apple devices via IPA", highlight: true },
      paid: { text: "Multiple Devices", note: "Standard device counts based on pricing tier" }
    },
    {
      feature: "Access",
      label: "🔓 Access",
      youcine: { text: "Instant", note: "Install and play in seconds", highlight: true },
      paid: { text: "Requires Payment", note: "Paid registration must be completed first" }
    }
  ];

  return (
    <div className="glass-panel overflow-hidden border border-white/5 shadow-2xl mt-6">
      <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <span className="font-bold text-white text-base uppercase tracking-wider">Comparison Grid</span>
        <span className="text-xs text-slate-400 font-medium">YouCine vs Paid Competitors</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-white/5 bg-dark-900/30">
              <th className="p-4 text-slate-400 font-bold text-xs sm:text-sm uppercase">Category</th>
              <th className="p-4 text-primary-light font-bold text-xs sm:text-sm uppercase tracking-wide">YouCine</th>
              <th className="p-4 text-slate-350 font-bold text-xs sm:text-sm uppercase">Netflix / Disney+</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 bg-dark-800/10">
            {comparisonData.map((row, index) => (
              <tr key={index} className="hover:bg-white/20 transition-colors">
                <td className="p-4 font-bold text-white text-sm sm:text-base">
                  {row.label}
                </td>
                <td className="p-4">
                  <div className="text-green-400 font-extrabold text-sm sm:text-base flex items-center">
                    <Check className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    {row.youcine.text}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{row.youcine.note}</div>
                </td>
                <td className="p-4">
                  <div className="text-slate-200 font-bold text-sm sm:text-base">
                    {row.paid.text}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{row.paid.note}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// ==========================================
// 3. AltStore/Sideloadly Step-by-Step guide
// ==========================================
export function IOSStepTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Download the Youcine IPA File",
      subtitle: "Get the secure iOS app package",
      desc: "First, download the Youcine IPA file from a safe and trusted website. Always make sure you are downloading from a reliable source to keep your phone safe from viruses and harmful files.",
      tip: "Verify that the file has the '.ipa' extension. Never run installers ending in other extensions on your Mac or iPhone."
    },
    {
      title: "Download a Sideloading Tool",
      subtitle: "Choose an installation manager",
      desc: "You cannot install an IPA file directly on your iPhone without computer signing. You need a special free tool called a Sideloading Tool. Pick any one of the top available tools: AltStore (most popular and easy), Sideloadly (simple and beginner-friendly), or Cydia Impactor (trusted classic). Install it on your computer for free.",
      tip: "AltStore is highly recommended because it manages automatic background refreshes over Wi-Fi."
    },
    {
      title: "Connect to Your Computer",
      subtitle: "Establish USB tethering link",
      desc: "Use your USB cable to connect your iPhone or iPad to your computer. Make sure the connection is tight and your device is unlocked. If prompted, click 'Trust This Computer' on your Apple screen.",
      tip: "Make sure Apple iTunes is running in the background on Windows to facilitate USB communication."
    },
    {
      title: "Upload the IPA File",
      subtitle: "Sign and transfer the package",
      desc: "Open the sideloading tool on your computer. Drag and drop the Youcine IPA file into the tool. When it asks for your Apple ID and password, enter them to begin the installation. Your Apple ID is required to digitally sign the package for your device.",
      tip: "We recommend creating a free alternative Apple ID (throwaway account) for sideloading to preserve your main account credentials."
    },
    {
      title: "Trust the App on Your iPhone",
      subtitle: "Approve Enterprise profile",
      desc: "After installation completes, the YouCine icon will appear on your iOS home screen, but it will show an 'Untrusted Developer' error when clicked. Open Settings on your iPhone, tap on General, tap on Profiles & Device Management (or VPN & Device Management), find the profile linked to your Apple ID, and tap 'Trust This App'. This step is very important — without it, Youcine will not open!",
      tip: "On iOS 16 and above, you must also enable 'Developer Mode' under Settings > Privacy & Security, then restart your phone."
    },
    {
      title: "Open Youcine & Stream!",
      subtitle: "Free Apple streaming experience",
      desc: "Go back to your iPhone home screen, find the Youcine app icon, and tap on it. That is it - you are all set! Start streaming your favorite movies, shows, anime, and sports completely for free.",
      tip: "Enjoy features like multi-subtitles, sound booster controls, and offline downloads directly from the app interface!"
    }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-8">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Steps Buttons */}
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

        {/* Right Side: Step Description */}
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
                  Step {activeStep + 1} of 6
                </span>
                <h4 className="text-2xl font-bold text-white mt-3">Step {activeStep + 1}. {steps[activeStep].title}</h4>
                <p className="text-slate-400 text-sm italic">{steps[activeStep].subtitle}</p>
              </div>

              <p className="text-slate-250 text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Tips Container */}
              <div className="bg-dark-800/60 border-l-4 border-secondary rounded-r-xl p-4 flex items-start space-x-3 mt-6">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold text-sm">Sideloading Tip: </span>
                  <span className="text-slate-350 text-sm leading-relaxed">{steps[activeStep].tip}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Footer */}
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
              onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
              disabled={activeStep === 5}
              className={`btn-primary flex items-center space-x-2 py-2.5 px-5 text-sm ${
                activeStep === 5 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>{activeStep === 5 ? "All Done" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
