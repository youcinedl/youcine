"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  HardDrive, 
  Layers, 
  Monitor, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  ChevronDown
} from "lucide-react";

// ==========================================
// 1. SYSTEM REQUIREMENTS INTERACTIVE
// ==========================================
export function SystemReqsInteractive() {
  const [activeTab, setActiveTab] = useState<"minimum" | "recommended">("recommended");

  const specs = {
    minimum: [
      { name: "Operating System", value: "Windows 7/8/10 or macOS Sierra (10.12) & above", icon: Monitor, percentage: 50 },
      { name: "Processor", value: "Intel or AMD Dual-Core CPU", icon: Cpu, percentage: 40 },
      { name: "RAM (Memory)", value: "4 GB RAM", icon: Layers, percentage: 45 },
      { name: "Storage space", value: "At least 5 GB free HDD space", icon: HardDrive, percentage: 35 },
      { name: "Graphics (GPU)", value: "DirectX 11, Integrated Graphics supported", icon: CheckCircle2, percentage: 40 },
    ],
    recommended: [
      { name: "Operating System", value: "Windows 10/11 or macOS Monterey & above", icon: Monitor, percentage: 95 },
      { name: "Processor", value: "Intel Core i5 / AMD Ryzen 5 & above", icon: Cpu, percentage: 90 },
      { name: "RAM (Memory)", value: "8 GB RAM or more", icon: Layers, percentage: 85 },
      { name: "Storage space", value: "SSD with 10 GB free space", icon: HardDrive, percentage: 80 },
      { name: "Graphics (GPU)", value: "Dedicated NVIDIA / AMD GPU", icon: CheckCircle2, percentage: 90 },
    ]
  };

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-6">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h4 className="text-xl font-bold text-white">System Requirements Checklist</h4>
          <p className="text-slate-400 text-sm mt-1">Check if your PC/Mac is ready to run emulators smoothly.</p>
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
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-medium text-sm sm:text-base">{spec.name}</span>
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg mb-3">
                    {spec.value}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-dark-900 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${spec.percentage}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
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
// 2. EMULATORS COMPARISON INTERACTIVE
// ==========================================
export function EmulatorsComparison() {
  const [selectedEmu, setSelectedEmu] = useState<number>(0);

  const emulators = [
    {
      name: "BlueStacks",
      badge: "Best for Beginners",
      rating: "4.9/5",
      description: "BlueStacks is the most popular Android emulator globally. It features a extremely polished interface, great stability, and beginner-friendly settings that make installing YouCine a breeze.",
      pros: [
        "Very easy to use for beginners",
        "Supports multitasking — open many apps at the same time",
        "Fast and smooth video streaming performance",
        "Quick and simple installation wizard",
        "Works with both Windows and Mac computers",
        "Regular security & performance updates"
      ],
      color: "from-purple-500/25 to-pink-500/5",
      border: "hover:border-purple-500/40"
    },
    {
      name: "Nox Player",
      badge: "Lightweight Champion",
      rating: "4.7/5",
      description: "Nox Player is designed to run efficiently even on older hardware or budget PCs. If you experience lags or have a PC with limited RAM, Nox is the perfect stable solution.",
      pros: [
        "Works amazingly well on slow or old computers",
        "Extremely stable - does not crash easily",
        "Smooth playback even during hours of constant streaming",
        "Simple, clean and distraction-free interface",
        "100% Free to download and use",
        "Great for long binge-watching sessions without interruptions"
      ],
      color: "from-blue-500/25 to-indigo-500/5",
      border: "hover:border-blue-500/40"
    },
    {
      name: "LDPlayer",
      badge: "Balanced & Optimized",
      rating: "4.8/5",
      description: "LDPlayer is a smart, light emulator that handles streaming apps and games with equal ease. It uses minimal CPU resources, preventing your PC from overheating.",
      pros: [
        "Works great for both entertainment apps and high-end games",
        "Uses very low CPU power - does not slow down your PC/Mac",
        "Custom display controls for a fully tailored experience",
        "Fast loading times and buttery-smooth video playback",
        "Supports high-definition 4K video streaming quality",
        "Easy drag-and-drop APK installation"
      ],
      color: "from-emerald-500/25 to-cyan-500/5",
      border: "hover:border-emerald-500/40"
    },
    {
      name: "MEmu Play",
      badge: "Super Fast Loading",
      rating: "4.6/5",
      description: "MEmu Play stands out due to its blazing-fast startup and app-loading speeds. It is optimized to stream high-definition movies and live TV shows without lag or stuttering.",
      pros: [
        "Loads apps and emulated systems extremely quickly",
        "Perfect playback - absolutely no audio/video delay",
        "Ideal for watching live sports and TV shows on YouCine",
        "Works well on both low-end laptops and gaming PCs",
        "Intuitive interface designed for ease of use",
        "Supports multiple Android kernel versions"
      ],
      color: "from-amber-500/25 to-orange-500/5",
      border: "hover:border-amber-500/40"
    }
  ];

  return (
    <div className="mt-8 space-y-6">
      {/* Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {emulators.map((emu, index) => (
          <button
            key={index}
            onClick={() => setSelectedEmu(index)}
            className={`p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
              selectedEmu === index 
                ? "bg-white/5 border-primary shadow-lg shadow-primary/10" 
                : "bg-dark-800/30 border-white/5 hover:bg-white/5"
            }`}
          >
            <div className="font-bold text-white text-base sm:text-lg">{emu.name}</div>
            <div className={`text-xs mt-1 font-medium ${selectedEmu === index ? "text-primary-light" : "text-slate-400"}`}>
              {emu.badge}
            </div>
            {selectedEmu === index && (
              <motion.div 
                layoutId="activeEmuUnderline" 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Detail Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEmu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`glass-panel p-6 sm:p-8 bg-gradient-to-br ${emulators[selectedEmu].color} border border-white/5 relative`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider">
                {emulators[selectedEmu].badge}
              </span>
              <h4 className="text-2xl font-bold text-white mt-2">{emulators[selectedEmu].name} for YouCine</h4>
            </div>
            <div className="flex items-center space-x-2 bg-dark-900/60 px-4 py-2 rounded-xl border border-white/5 w-fit">
              <span className="text-yellow-400 font-bold">⭐ {emulators[selectedEmu].rating}</span>
              <span className="text-slate-400 text-xs">User Rating</span>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            {emulators[selectedEmu].description}
          </p>

          <h5 className="text-white font-bold mb-4 flex items-center">
            <span className="w-1.5 h-6 bg-gradient-primary rounded-full mr-2"></span>
            Key Features & Benefits
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emulators[selectedEmu].pros.map((pro, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-green-500/10 text-green-400 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300 text-sm sm:text-base">{pro}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


// ==========================================
// 3. STEP BY STEP VISUAL TIMELINE
// ==========================================
export function StepTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Download Emulator",
      subtitle: "Get a free Android emulator",
      desc: "First, select and download a reliable Android emulator of your choice (e.g. BlueStacks, Nox Player, or LDPlayer) from their respective official websites. Always use official sources to keep your operating system completely safe.",
      tip: "BlueStacks is recommended for beginners due to its effortless install process."
    },
    {
      title: "Install & Initialize",
      subtitle: "Launch the emulator on PC",
      desc: "Run the downloaded installer file. Follow the on-screen prompts to complete the installation. Once installed, open the emulator from your desktop screen or start menu. The first launch might take a couple of minutes to set up the engine.",
      tip: "Ensure virtualization (VT-x/AMD-V) is enabled in BIOS for maximum speeds."
    },
    {
      title: "Google Account Setup",
      subtitle: "Log in to the system",
      desc: "When the emulator boots up, it acts like a brand new Android smartphone. It will prompt you to sign in with a Google Account. Use your existing Gmail/Google credentials to log in, enabling full access to Android services.",
      tip: "You can skip this if you're installing the APK directly, but logging in ensures background updates."
    },
    {
      title: "Download Youcine APK",
      subtitle: "Get the secure APK file",
      desc: "Open a web browser on your PC or inside the emulator and download the 100% safe, verified YouCine APK file from a trusted site such as youcine-dl.com.",
      tip: "Beware of fake versions from unverified sites. Ensure the extension is strictly '.apk'."
    },
    {
      title: "Upload APK to Emulator",
      subtitle: "Import the app package",
      desc: "Now, import the APK file into your emulator. This is incredibly easy: you can literally drag the downloaded Youcine APK file from your computer and drop it directly onto the emulator window, or click 'Install APK' in the sidebar.",
      tip: "Alternatively, you can use the built-in browser inside the emulator to download the file directly."
    },
    {
      title: "Automatic Installation",
      subtitle: "Wait for the shortcut",
      desc: "The emulator will automatically detect the APK file, parse the Android package, and install the YouCine app. Within 10-30 seconds, a colorful YouCine shortcut icon will pop up on your emulator's home dashboard.",
      tip: "If it fails, check if the APK file size is ~40 MB to ensure it was not corrupted during download."
    },
    {
      title: "Open and Start Streaming!",
      subtitle: "Big screen cinema experience",
      desc: "Click on the YouCine icon! The app will open in high resolution. Log in or search for your favorite content: movies, TV series, cartoons, anime, or live sports, and stream everything on your gorgeous big PC monitor!",
      tip: "Use Fullscreen mode (usually F11 in most emulators) for an authentic movie theater vibe!"
    }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 border border-white/5 relative overflow-hidden mt-8">
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Step Buttons (Vertical timeline style on desktop, horizontal on mobile) */}
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
                <div className="font-bold text-sm">{step.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{step.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Step Content */}
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
                  Step {activeStep + 1} of 7
                </span>
                <h4 className="text-2xl font-bold text-white mt-3">{steps[activeStep].title}</h4>
                <p className="text-slate-400 text-sm italic">{steps[activeStep].subtitle}</p>
              </div>

              <p className="text-slate-250 text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Tip box */}
              <div className="bg-dark-800/60 border-l-4 border-secondary rounded-r-xl p-4 flex items-start space-x-3 mt-6">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold text-sm">Pro Tip: </span>
                  <span className="text-slate-300 text-sm">{steps[activeStep].tip}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
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
              onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
              disabled={activeStep === 6}
              className={`btn-primary flex items-center space-x-2 py-2.5 px-5 text-sm ${
                activeStep === 6 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>{activeStep === 6 ? "Completed" : "Next Step"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ==========================================
// 4. COMMON ERRORS INTERACTIVE
// ==========================================
export function CommonErrors() {
  const [openError, setOpenError] = useState<number | null>(0);

  const errors = [
    {
      problem: "Emulator Not Installing Properly",
      cause: "Low computer specifications, hardware virtualization disabled, or outdated graphics drivers.",
      solution: "Check if your PC/Mac meets the minimum requirements. Access BIOS settings during system startup and ensure 'Virtualization Technology' (VT-x or AMD-V) is enabled. Lastly, update your GPU drivers."
    },
    {
      problem: "Youcine APK Not Opening",
      cause: "Corrupt APK file, outdated emulator version, or internal cache glitch.",
      solution: "Ensure you are using the latest version of your emulator. Go to Emulator Settings > Apps > Youcine, and choose 'Clear Cache' & 'Clear Data'. If the problem persists, re-download the clean APK file."
    },
    {
      problem: "Black Screen or Video Freezing",
      cause: "Incorrect emulator engine settings or low RAM/CPU allocation.",
      solution: "Open emulator settings, navigate to Performance, and allocate at least 4 Cores CPU and 4GB of RAM. Change the Graphics engine from DirectX to OpenGL (or vice-versa), and ensure you are using stable GPU drivers."
    },
    {
      problem: "Youcine APK Not Installing",
      cause: "Corrupted installer file, unsupported architecture, or storage full.",
      solution: "Make sure you have at least 5GB free space. Choose a fresh, non-corrupted APK file. You can download the official, tested APK directly from our page using the 'Download Now' button above."
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
              isOpen ? "border-red-500/20 bg-red-950/5" : "border-white/5 hover:border-white/10"
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
                      <span className="text-green-400 font-bold text-xs sm:text-sm uppercase tracking-wider block">Solution:</span>
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
