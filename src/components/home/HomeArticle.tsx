import React from "react";

export default function HomeArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Youcine APK not installing on my phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is the most common problem people face. The number one reason is that your phone hasn't been given permission to install apps from outside the Play Store yet. Here's the quick fix: Go to Settings > Security > Turn ON 'Install from Unknown Sources'. Now try installing again. If it still doesn't work — delete the file and download a fresh copy from youcinedl.com. A corrupted or incomplete download is the second most common reason installation fails."
        }
      },
      {
        "@type": "Question",
        "name": "Why does Youcine keep crashing or closing by itself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This happens when the app has collected too much junk data over time or when you're running an outdated version. Try these fixes in order: Go to Settings > Apps > Youcine > Storage and tap Clear Cache. Restart your phone completely. If it still crashes uninstall the app and download a fresh copy from youcinedl.com. Clearing the cache alone fixes this problem for most people within seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Youcine buffering so much?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buffering almost always comes down to one thing your internet connection isn't strong enough to keep up with HD streaming. Here's what to do: Move closer to your WiFi router. Turn your WiFi off and back on again. Lower the video quality from HD down to 480p inside the player settings. Try switching from WiFi to mobile data sometimes that's actually faster. If YouTube and other apps are also slow your internet is the problem, not Youcine."
        }
      },
      {
        "@type": "Question",
        "name": "Is Youcine APK safe to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only if you download it from a trusted website like youcinedl.com. Files from this site are verified and checked before being made available. The danger comes from downloading from random unknown websites. Those sites sometimes add viruses or harmful software to the APK file without you knowing. Simple rule always use youcinedl.com and you'll never have a problem. Having a free antivirus app on your phone adds an extra layer of protection too."
        }
      },
      {
        "@type": "Question",
        "name": "Why are the subtitles not syncing properly on Youcine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is a really common and super frustrating issue but it's easy to fix! While your video is playing: Tap the screen to bring up the player controls. Look for Subtitle Settings. Adjust the timing forward or backward until the words match what's being said on screen. Most of the time a small adjustment of just a second or two fixes everything perfectly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I install Youcine on my iPhone or iPad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unfortunately, no. Youcine is not available for iPhones or iPads. It's not on the Apple App Store and Apple does not support APK files at all. Some websites suggest jailbreaking your iPhone to install it. Please don't do this. Jailbreaking removes all the built-in security from your iPhone and can permanently damage your device. The best alternative? Connect an Android TV Box to your TV and use Youcine on that instead. Works great and keeps your iPhone completely safe."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Youcine not working on my Smart TV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common reasons Youcine stops working on a Smart TV are: Unknown Sources is turned off — Go to Settings > Security and turn it ON. The APK file didn't transfer properly — Delete it and transfer again via USB or re-download using your TV's browser. The app version is outdated — Download the latest version from youcinedl.com. Not enough storage on your TV — Delete some unused apps to free up space. Try these fixes one by one and your TV should be up and running in minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How do I update Youcine APK to the latest version?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Youcine doesn't update automatically like Play Store apps do. You have to update it manually but it's really easy! Here's how: Go to youcinedl.com. Download the latest version of the APK. Install it on your device — it will automatically replace the old version. Your settings and preferences usually stay saved. Always keep Youcine updated for the best streaming experience and latest bug fixes."
        }
      },
      {
        "@type": "Question",
        "name": "Why is some content not available or blocked in my country?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some video links inside Youcine are region-locked — meaning they only work in certain countries. If you're getting an error or a video simply won't play — this is most likely why. The easiest fix is to use a free VPN app: Download any free VPN from the Play Store. Connect to a server in a different country US or UK works great. Now go back to Youcine and try playing the content again. It should work perfectly after that. A VPN basically tricks the app into thinking you're in a different location."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Youcine not showing up on my home screen after installing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This happens because some devices don't automatically add manually installed apps to the home screen. But don't worry the app is definitely there! Here's how to find it: Open your device's App Drawer the full list of all installed apps. Scroll through and find Youcine. Press and hold the icon and drag it to your home screen. If you still can't find it download a free app called Sideload Launcher from the Play Store. It automatically finds and shows all manually installed apps in one place. Problem solved! ✅"
        }
      }
    ]
  };

  const faqs = [
    { q: "Why is Youcine APK not installing on my phone?", a: "This is the most common problem people face. The number one reason is that your phone hasn't been given permission to install apps from outside the Play Store yet. Here's the quick fix: Go to Settings > Security > Turn ON 'Install from Unknown Sources'. Now try installing again. If it still doesn't work — delete the file and download a fresh copy from youcinedl.com. A corrupted or incomplete download is the second most common reason installation fails." },
    { q: "Why does Youcine keep crashing or closing by itself?", a: "This happens when the app has collected too much junk data over time or when you're running an outdated version. Try these fixes in order: Go to Settings > Apps > Youcine > Storage and tap Clear Cache. Restart your phone completely. If it still crashes uninstall the app and download a fresh copy from youcinedl.com. Clearing the cache alone fixes this problem for most people within seconds." },
    { q: "Why is Youcine buffering so much?", a: "Buffering almost always comes down to one thing your internet connection isn't strong enough to keep up with HD streaming. Here's what to do: Move closer to your WiFi router. Turn your WiFi off and back on again. Lower the video quality from HD down to 480p inside the player settings. Try switching from WiFi to mobile data sometimes that's actually faster. If YouTube and other apps are also slow your internet is the problem, not Youcine." },
    { q: "Is Youcine APK safe to download?", a: "Yes, but only if you download it from a trusted website like youcinedl.com. Files from this site are verified and checked before being made available. The danger comes from downloading from random unknown websites. Those sites sometimes add viruses or harmful software to the APK file without you knowing. Simple rule always use youcinedl.com and you'll never have a problem. Having a free antivirus app on your phone adds an extra layer of protection too." },
    { q: "Why are the subtitles not syncing properly on Youcine?", a: "This is a really common and super frustrating issue but it's easy to fix! While your video is playing: Tap the screen to bring up the player controls. Look for Subtitle Settings. Adjust the timing forward or backward until the words match what's being said on screen. Most of the time a small adjustment of just a second or two fixes everything perfectly." },
    { q: "Can I install Youcine on my iPhone or iPad?", a: "Unfortunately, no. Youcine is not available for iPhones or iPads. It's not on the Apple App Store and Apple does not support APK files at all. Some websites suggest jailbreaking your iPhone to install it. Please don't do this. Jailbreaking removes all the built-in security from your iPhone and can permanently damage your device. The best alternative? Connect an Android TV Box to your TV and use Youcine on that instead. Works great and keeps your iPhone completely safe." },
    { q: "Why is Youcine not working on my Smart TV?", a: "The most common reasons Youcine stops working on a Smart TV are: Unknown Sources is turned off — Go to Settings > Security and turn it ON. The APK file didn't transfer properly — Delete it and transfer again via USB or re-download using your TV's browser. The app version is outdated — Download the latest version from youcinedl.com. Not enough storage on your TV — Delete some unused apps to free up space. Try these fixes one by one and your TV should be up and running in minutes." },
    { q: "How do I update Youcine APK to the latest version?", a: "Youcine doesn't update automatically like Play Store apps do. You have to update it manually but it's really easy! Here's how: Go to youcinedl.com. Download the latest version of the APK. Install it on your device — it will automatically replace the old version. Your settings and preferences usually stay saved. Always keep Youcine updated for the best streaming experience and latest bug fixes." },
    { q: "Why is some content not available or blocked in my country?", a: "Some video links inside Youcine are region-locked — meaning they only work in certain countries. If you're getting an error or a video simply won't play — this is most likely why. The easiest fix is to use a free VPN app: Download any free VPN from the Play Store. Connect to a server in a different country US or UK works great. Now go back to Youcine and try playing the content again. It should work perfectly after that. A VPN basically tricks the app into thinking you're in a different location." },
    { q: "Why is Youcine not showing up on my home screen after installing?", a: "This happens because some devices don't automatically add manually installed apps to the home screen. But don't worry the app is definitely there! Here's how to find it: Open your device's App Drawer the full list of all installed apps. Scroll through and find Youcine. Press and hold the icon and drag it to your home screen. If you still can't find it download a free app called Sideload Launcher from the Play Store. It automatically finds and shows all manually installed apps in one place. Problem solved! ✅" }
  ];

  return (
    <section className="py-24 relative bg-dark-900/50 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        
        {/* Intro */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(250,204,21,0.15)] group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <p className="text-xl text-slate-300 leading-relaxed mb-4 font-medium">
            Tired of paying for streaming apps every month? Or getting stuck watching ads every 5 minutes?
          </p>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Yeah, that's super annoying. Youcine fixes all of that.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            It's completely free. No ads. No subscriptions. Just pick what you want to watch-movies, shows, sports, cartoons, and hit play.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed">
            And it works no matter where you live. No blocked shows, no restrictions. Everyone gets everything. its very simple App.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What is Youcine?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Youcine is a free app where you can watch almost anything movies, TV shows, cartoons, anime, live sports, and even live TV channels. All in one place now.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              No credit card. No monthly bill. Just download and start watching your favourite Movie or TV Shows whatever you want to enjoy of that moments.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              why people are loved this app, Reason is very easy and simple? It plays everything in HD quality, works on your phone, TV, tablet, or PC, and supports tons of different languages too.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              A lot of people use Youcine APP instead of Netflix or Disney+ because people are not interested to pay anythings, though they are getting everything in one userfiendly platfrom or same things for free?
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How Does Youcine Work?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Honestly, it's super simple. Once you install the you cine app, you are ready to go. No sign-ups, no confusing setup just open it and start watching.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              When you open Youcine, you will see everything laid out nicely movies, shows, cartoons, anime, sports all sorted into categories. So finding something to watch takes literally seconds.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Can't find what you are looking for? Just type it in the search bar and boom guy's, it shows up instantly.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              And if you want to get even more specific, Youcineapp has filters too. You can sort by genre, language, subtitles, or even the year it came out. Super handy when you are in the mood for something specific but don't know exactly what.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What is Youcine APK?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">Youcine APK is just a file that lets you install apps that are not on the Google Play Store.</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">Since Youcine is not available on the Play Store, you just download the APK file from a trusted site like youcinedl.com and you are good to go.</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">Once it is installed, you get access to everything. Movies, TV shows, cartoons, anime, live sports, live TV channels all in HD quality. And it is completely free.</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">And no ads either. Like, zero. No annoying pop-ups, no 30-second ads before your show. Just pure, uninterrupted watching.</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">Going somewhere or trip without WiFi? No problem. You can download any movie or episode and watch it offline later on the bus, on a plane ona beach, anywhere.</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">Everything is also available in multiple languages with subtitles. So no matter where you are from, you will feel right at home.</p>
          <p className="text-lg text-slate-300 leading-relaxed">Honestly? It's like having your own personal cinema right in your pocket.</p>
        </div>

        {/* Features Grid Widget */}
        <div>
          <div className="text-center mb-10 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Can Youcine Do?</h2>
            <p className="text-xl text-primary">Features or Here's Everything You Get For Free</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🎬</span> Tons of Stuff to Watch</h3>
              <p className="text-slate-400">Movies, shows, cartoons, anime, sports, live TV you name it. And new stuff gets added every single day.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">📱</span> Works on Any Device</h3>
              <p className="text-slate-400">Phone, tablet, TV, TV Box, or PC Youcine works on all of them. No matter what you have, you are good to go.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🔥</span> Always HD Quality</h3>
              <p className="text-slate-400">Every video plays in HD. If your internet is slow, the app automatically adjusts so it never stops buffering.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🚫</span> Zero Ads</h3>
              <p className="text-slate-400">No pop-ups. No ads before your show. Nothing. Just sit back and watch.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">😊</span> Super Easy to Use</h3>
              <p className="text-slate-400">Everything is organized into neat categories. Finding something to watch takes just a few seconds.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🔍</span> Search & Filter</h3>
              <p className="text-slate-400">Type anything in the search bar and find it fast. Filter by language, genre, year, or subtitles too.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">⬇️</span> Download & Watch Offline</h3>
              <p className="text-slate-400">Going somewhere without WiFi? Just download your show or movie before you leave and watch it anywhere.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🌍</span> Multiple Languages & Subtitles</h3>
              <p className="text-slate-400">Watch in your own language. Subtitles available too great for foreign movies.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">✅</span> No Rooting Needed</h3>
              <p className="text-slate-400">You don't need to do anything complicated. Just download, install, and open.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">▶️</span> Works with Other Players</h3>
              <p className="text-slate-400">Prefer watching with VLC or MX Player? No problem Youcine works with those too.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🔄</span> Always Getting Better</h3>
              <p className="text-slate-400">The app gets updated regularly with new features and fixes so it keeps running smooth.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">📦</span> Small App Size</h3>
              <p className="text-slate-400">The app doesn't take up much space. Works perfectly even on older phones.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">👶</span> Safe for Kids</h3>
              <p className="text-slate-400">You can turn on a filter that blocks adult content so kids can use it safely.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">💰</span> Completely Free</h3>
              <p className="text-slate-400">No subscription. No credit card. No hidden fees. Everything is 100% free or free.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl group-hover:scale-125 transition-transform">🎯</span> Made Just for You</h3>
              <p className="text-slate-400">Make your own playlists and get show recommendations based on what you already like watching.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What's New in Youcine v1.16.8?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">Good news this update makes Youcine even better! Here's what changed:</p>
          <ul className="space-y-4 text-lg text-slate-300">
            <li><strong>⚡ Videos Load Faster:</strong> Waiting for a video to load is super annoying. This update fixes that. Videos start quicker and play smoother even if your WiFi isn't that great.</li>
            <li><strong>📶 Better Connection, Less Freezing:</strong> The app now connects to better servers. So your movie or show won't randomly stop or freeze in the middle of a good scene.</li>
            <li><strong>💬 Subtitles Actually Match Now:</strong> You know when the subtitles show up too early or too late? Really frustrating, right? That's fixed now. Words on screen match perfectly with what's being said.</li>
            <li><strong>📺 Works Way Better on Android TV:</strong> If you watch on an Android TV, this update is great news. The app used to crash sometimes not anymore. Everything runs smooth and clean now.</li>
            <li><strong>🔥 Firestick Users Big Win!:</strong> Got an Amazon Firestick? The app now loads faster and plays better on it. Less waiting, less errors, more watching.</li>
            <li><strong>🎨 Looks Cleaner and Easier to Use:</strong> The menus got a little makeover. Everything is easier to find, easier to click, and just looks nicer overall.</li>
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Youcine APK Simple Tech Facts</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">Don't worry we will keep this super simple.</p>
          <ul className="space-y-4 text-lg text-slate-300">
            <li><strong>📦 One File, Easy Install:</strong> Youcine comes as one single file. No complicated steps, no extra downloads. Just one tap and it installs works on almost every Android device out there.</li>
            <li><strong>📱 Works on Old and New Phones:</strong> Got an old phone? New phone? Doesn't matter. Youcine is built to work smoothly on both. Whether your phone is 5 years old or brand new it runs just fine.</li>
            <li><strong>✅ Works on Android 5.0 and Above:</strong> If your phone runs Android 5.0 or newer, you're good to go. That covers pretty much every phone made in the last 10 years.</li>
            <li><strong>🔒 Safe and Verified File:</strong> Every Youcine APK file comes with a special security check built in. This means you can make sure the file is real and hasn't been messed with before you install it. Safe and clean every time.</li>
            <li><strong>🚫 Doesn't Need Google Play:</strong> Most apps need Google Play to work properly. Youcine doesn't. That means it works perfectly on Amazon Firestick, custom phones, and even TVs that don't have Google on them at all.</li>
          </ul>
        </div>

        {/* Pros & Cons Widget */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pros and Cons of Youcine</h2>
            <p className="text-xl text-slate-400">Before you download anything, it's always smart to know what you are getting into. So here's the full honest pron and cons list.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-900/40 to-dark-800/50 border border-emerald-500/30 p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-emerald-500/10 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] group-hover:bg-emerald-500/30 transition-colors"></div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-8 flex items-center gap-3 relative z-10"><span className="bg-emerald-500/20 p-2 rounded-xl">👍</span> Pros:</h3>
              <ul className="space-y-6 relative z-10 text-slate-300 text-lg">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Totally Free Forever</strong> No subscription. No credit card. No "free trial that charges you later." Youcine is completely free today, tomorrow, always. You never pay a single penny.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">So Much to Watch</strong> Movies, TV shows, cartoons, anime, live sports, live TV channels the library is absolutely massive. You could watch something new every single day and never run out of things to enjoy.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Works on Almost Everything</strong> Phone, tablet, TV, TV Box, PC Youcine runs on pretty much any device you already own. No need to buy anything new.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Crystal Clear HD Quality</strong> Everything plays in HD. And if your internet gets slow? The app automatically drops the quality a little so your video never stops and buffers. Smart, right?</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">No Ads At All</strong> Seriously. Zero ads. No pop-ups, no skippable ads, no random commercials in the middle of your show. Just non-stop watching from start to finish.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Download and Watch Anywhere</strong> Heading somewhere without WiFi? Just download your favorite movie or episode before you leave. Watch it on the bus, on a plane, in the car wherever you want.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Watch in Your Own Language</strong> Youcine supports tons of languages and subtitles. So no matter where you are from, you can watch everything in a way that feels comfortable for you.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Small Size, Big Performance</strong> The app is tiny. It won't much take up your phone's storage. And it runs smooth and fast even on older phones that struggle with other apps due to high version issue.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">✓</div>
                  <p><strong className="text-white block mb-1">Safe for the Whole Family</strong> Parents can turn on a filter that blocks adult content. So your kids can use Youcine without you worrying about what they might come across.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-900/40 to-dark-800/50 border border-rose-500/30 p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-rose-500/10 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-[50px] group-hover:bg-rose-500/30 transition-colors"></div>
              <h3 className="text-3xl font-bold text-rose-400 mb-8 flex items-center gap-3 relative z-10"><span className="bg-rose-500/20 p-2 rounded-xl">⚠️</span> Cons:</h3>
              <p className="text-slate-300 text-lg mb-6 relative z-10">You won't find Youcine on the official app stores. That means you have to download it manually as an APK file. It's easy but it's an extra step most people aren't used to.</p>
              <ul className="space-y-6 relative z-10 text-slate-300 text-lg">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">!</div>
                  <p><strong className="text-white block mb-1">Check Your Country's Rules</strong> Youcine is completely legal in Brazil. But depending on where you live, the rules might be different. It's always a good idea to quickly check if it's allowed in your country before downloading.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">!</div>
                  <p><strong className="text-white block mb-1">You Need a Decent Internet Connection</strong> For the best HD experience, you need a stable internet connection. If your WiFi is really weak or keeps cutting out, the video quality might drop or buffer more than usual.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">!</div>
                  <p><strong className="text-white block mb-1">Download Only from Trusted Sites</strong> Since it's not on official app stores, some websites offer fake or unsafe versions of the APK. Always download from a safe and trusted source like youcinedl.com that way you know you are getting the real, clean, virus-free file.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">!</div>
                  <p><strong className="text-white block mb-1">No Official Customer Support</strong> If something goes wrong, there's no official help desk or support team to call. But honestly? The app is so simple that most people never run into any problems at all.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden mt-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">What Can You Watch on Youcine? Everything</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 relative z-10">Seriously whatever you are in the mood for, Youcine has got it. Here's a full look at everything waiting for you inside the app:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">🎬</span> Hollywood Movies</h3>
              <p className="text-slate-300 leading-relaxed">Love big blockbuster movies? You're going to feel right at home. Youcine has thousands of Hollywood movies — from the latest releases hitting theaters right now, to old classic films you grew up loving. Action fan? Got it. Love a good thriller that keeps you on the edge of your seat? Covered. Prefer romantic movies, laugh-out-loud comedies, or mind-blowing sci-fi films? All there waiting for you. Every movie plays in HD quality, and you can switch languages or turn on subtitles with just one tap. No more searching five different apps just to find one good movie.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">🎭</span> Bollywood Movies</h3>
              <p className="text-slate-300 leading-relaxed">Big fan of Hindi movies? Youcine has one of the biggest Bollywood collections you'll find anywhere — completely free. Watch the newest releases the same week they drop, or go back and enjoy the timeless classics that never get old. Drama, romance, action, comedy — every mood is covered. And the best part? No regional restrictions. Whether you're watching from India, the US, or anywhere else in the world — every Bollywood movie is available to you.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">🌟</span> South Indian Movies</h3>
              <p className="text-slate-300 leading-relaxed">South Indian cinema is absolutely on fire right now — and Youcine makes sure you never miss a single hit. Watch Tamil, Telugu, and Malayalam movies in stunning quality. Can't understand the original language? No problem at all. Most movies come with dubbed versions and subtitles so you can enjoy every story no matter what language you speak. RRR, KGF, Pushpa — all the big blockbusters are right there waiting for you.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">💕</span> Korean Dramas (K-Dramas)</h3>
              <p className="text-slate-300 leading-relaxed">K-Dramas have taken over the world — and honestly, it's easy to see why. The stories are amazing, the acting is incredible, and once you start one, you just can't stop. Youcine has all the trending K-Dramas updated super fast — so you're never behind on the latest episodes. Romance, fantasy, action, thriller, historical — whatever K-Drama style you love, it's all here with accurate English subtitles so you never miss what's happening.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">🐉</span> Chinese Dramas</h3>
              <p className="text-slate-300 leading-relaxed">Into Chinese dramas? Youcine has a huge collection of popular Chinese shows — from epic historical series set in ancient kingdoms, to modern romance stories, action-packed martial arts dramas, and fantasy adventures that feel like movies. Everything plays smoothly with multiple subtitle options. So even if you're totally new to Chinese dramas, jumping in has never been easier.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">⚔️</span> Anime — Subbed & Dubbed</h3>
              <p className="text-slate-300 leading-relaxed">Anime fans — this one's for you. Youcine has a massive anime library covering everything from the most popular series to hidden gems you haven't discovered yet. Watch in the original Japanese with subtitles, or switch to a dubbed version in your own language — your choice, every time. Action, adventure, fantasy, romance, sci-fi, horror — every anime genre you love is right here. New episodes get added fast so you're always up to date.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">🧸</span> Cartoons for Kids</h3>
              <p className="text-slate-300 leading-relaxed">Got little ones at home? Youcine is a fantastic safe space for kids. Tons of fun cartoons, animated movies, and educational shows — all in one place. Parents can turn on the content filter to make sure kids only see age-appropriate stuff. So you can hand your child the remote and relax, knowing they're watching something totally safe and fun. Classic cartoons, new animated hits, educational shows that make learning feel like playtime — kids are going to absolutely love it.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">⚽</span> Live Sports — Watch the Game Right Now!</h3>
              <p className="text-slate-300 leading-relaxed">This is where Youcine really stands out. You can watch live sports — happening right now — completely free. No expensive sports package needed. Football matches, cricket games, UFC fights, basketball, tennis, and so much more — all streaming live as it happens. Can't catch the game live? No worries. Highlights and replays are available too so you never miss the best moments. Sports fans around the world use Youcine because it saves them hundreds of dollars every year on sports subscriptions.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><span className="text-2xl">📺</span> Live TV Channels — Like Cable, But Free</h3>
              <p className="text-slate-300 leading-relaxed">Miss having regular TV? Youcine brings it all back — without the monthly cable bill. Watch live news channels, entertainment channels, sports channels, and movie channels from all around the world. Whether you want to catch the morning news, watch a cooking show, or flip through channels like the good old days — it's all here, streaming live, completely free, in high definition.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Use Youcine — Super Easy Guide for Beginners! 🎬</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">Never used Youcine before? No worries at all! This guide will walk you through everything step by step. It's way easier than you think — promise!</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🏠 Home Tab — Your Starting Point</h3>
              <p className="text-slate-300 leading-relaxed">The very first thing you'll see when you open Youcine is the Home tab. Think of it like the front page of a magazine — everything popular and exciting is right there waiting for you. You'll see featured movies, freshly added shows, and stuff the app thinks you'll enjoy based on what you like. It's the perfect place to start when you're not sure what to watch. Just scroll down and something will catch your eye — guaranteed!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🔥 Trending Section — What Everyone is Watching Right Now</h3>
              <p className="text-slate-300 leading-relaxed">Want to know what's hot right now? Head over to the Trending section. This is where you'll find all the movies and shows that people are watching the most at this very moment. Think of it like asking a million people "what's good right now?" — and getting the answer instantly. This section updates all the time, so every time you open it, there's something fresh and exciting to discover.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">📺 Live TV Tab — Watch Real TV for Free</h3>
              <p className="text-slate-300 leading-relaxed">Miss watching regular TV? The Live TV tab brings it all back — completely free! News channels, entertainment channels, talk shows, cooking shows — all streaming live right now. Just tap the Live TV tab, pick a channel you like, and boom — you're watching live television just like the old days. Except you're not paying a single penny for it. Pretty amazing, right?</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⚽ Sports Tab — Never Miss a Game Again</h3>
              <p className="text-slate-300 leading-relaxed">This one is a total game changer for sports fans. Tap the Sports tab and you'll find live football matches, cricket games, UFC fights, basketball, tennis, and so much more — all streaming live as it happens. No expensive sports package. No subscription needed. Just tap, pick your game, and enjoy every exciting moment live. You can also find sports channels that run highlights and replays — so even if you missed the game, you can still catch all the best bits.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⬇️ Download Manager — Watch Without WiFi</h3>
              <p className="text-slate-300 leading-relaxed">Going somewhere without internet? No problem! The Download Manager is where all your saved movies and episodes live. Here's how it works — before you leave home, download whatever you want to watch. Then later, whether you're on a bus, a plane, or just somewhere with bad WiFi — open the Download Manager and everything you saved is right there, ready to play. No internet needed at all. Super handy!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">💬 Subtitle Settings — Never Miss a Word</h3>
              <p className="text-slate-300 leading-relaxed">Watching a foreign movie and can't understand what they're saying? Subtitles to the rescue! Youcine makes it really easy to turn subtitles on and set them up exactly how you like. Go into the player settings while a video is playing, pick your subtitle language, and you're good to go. You can even adjust the timing if the words feel a little too early or too late — so everything matches up perfectly with what's happening on screen.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🌍 Language Switcher — Watch in Your Own Language</h3>
              <p className="text-slate-300 leading-relaxed">Want to watch everything in your own language? Easy! The Language Switcher lets you change the audio language of any movie or show in just a few taps. So if a movie was originally in English but you want to watch it in Hindi, Spanish, or any other language — just switch it and enjoy. You can also change the whole app language so everything feels more comfortable and easy to understand for you.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">▶️ External Player — For the Best Watching Experience</h3>
              <p className="text-slate-300 leading-relaxed">Already have a video player app you love — like VLC or MX Player? Great news! Youcine lets you open any video in your favourite player instead. Just turn on the External Player option in settings, and from then on every video will open in whichever player you choose. This is perfect if you love having extra controls like playback speed, advanced subtitles, or better video quality settings. It's a small feature that makes a really big difference for people who love getting the most out of their videos.</p>
            </div>
          </div>

          <div className="mt-8 bg-dark-800/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Quick Tips Before You Start:</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li className="flex items-start gap-2"><span className="text-primary">👉</span> Always start at the Home tab — best place to find something great fast</li>
              <li className="flex items-start gap-2"><span className="text-primary">👉</span> Check Trending when you're not sure what to watch</li>
              <li className="flex items-start gap-2"><span className="text-primary">👉</span> Download your favourites before you leave home — don't wait until you have no WiFi</li>
              <li className="flex items-start gap-2"><span className="text-primary">👉</span> Set up subtitles first thing if you watch foreign content</li>
              <li className="flex items-start gap-2"><span className="text-primary">👉</span> Try the Sports tab on match days — it's completely free!</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl overflow-x-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Official Youcine App vs Youcine APK</h2>
          <table className="w-full text-left text-slate-300 border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 font-bold text-white w-1/3">Feature</th>
                <th className="p-4 font-bold text-white w-1/3">Official Youcine App</th>
                <th className="p-4 font-bold text-white w-1/3">Youcine APK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Availability</td>
                <td className="p-4">Available from limited official sources</td>
                <td className="p-4">Available from trusted APK websites like youcinedl.com</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Installation</td>
                <td className="p-4">Easy normal app install</td>
                <td className="p-4">Manual APK install needed</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Account Needed</td>
                <td className="p-4">May need login or account</td>
                <td className="p-4">No login or subscription needed</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Content Access</td>
                <td className="p-4">Some content may be limited</td>
                <td className="p-4">Watch unlimited movies, TV shows, anime, sports, and live TV</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Ads</td>
                <td className="p-4">May show ads</td>
                <td className="p-4">Completely ad-free</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Streaming Quality</td>
                <td className="p-4">Standard to HD</td>
                <td className="p-4">HD streaming with smooth playback</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Offline Download</td>
                <td className="p-4">Limited or not available</td>
                <td className="p-4">Download movies and shows to watch later</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Device Support</td>
                <td className="p-4">Mostly mobile devices</td>
                <td className="p-4">Works on Android phones, Android TV, TV Box, Firestick, and PC</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Google Play Services</td>
                <td className="p-4">Usually needed</td>
                <td className="p-4">Not required</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">APK Support</td>
                <td className="p-4">Depends on device</td>
                <td className="p-4">Supports ARMv7 and ARM64</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">APK Type</td>
                <td className="p-4">Official app version</td>
                <td className="p-4">Single APK file</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Updates</td>
                <td className="p-4">Updates automatically</td>
                <td className="p-4">Manual updates required</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Root Needed</td>
                <td className="p-4">No</td>
                <td className="p-4">No</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Extra Features</td>
                <td className="p-4">Basic settings</td>
                <td className="p-4">Subtitle control, quality selection, and external player support</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Safety</td>
                <td className="p-4">Safe from official source</td>
                <td className="p-4">Safe when downloaded from trusted websites</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Cost</td>
                <td className="p-4">Free with some limits</td>
                <td className="p-4">100% free with full access</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Legal Transparency and Disclaimer for Youcine APK</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">We want to be totally honest with you about how Youcine works and what you should know before using it. No confusing legal talk just plain and simple truth.</p>
          
          <div className="space-y-6">
            <div className="bg-dark-800/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🗄️ Youcine Does not Store Any Videos</h3>
              <p className="text-lg text-slate-300 leading-relaxed">First things first Youcine does not actually keep any movies or shows on its own computers. Think of it like Google Search. When you search for something on Google, Google does not own those websites - it just helps you find them. Youcine works the exact same way. It simply finds streaming links that are already floating around on the internet and brings them all together in one easy place for you. The videos themselves live somewhere else entirely - Youcine just helps you find and watch them easily.</p>
            </div>
            <div className="bg-dark-800/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⚖️ Know the Rules in Your Country</h3>
              <p className="text-lg text-slate-300 leading-relaxed">This is really important please don't skip this part. Streaming laws are different depending on where you live. What's totally fine in one country might not be allowed in another. So before you start watching, it's a good idea to quickly check what the streaming rules are where you live. Youcine is completely legal in Brazil. But in some other countries, the rules around free streaming apps can be different. We are not saying don't use it we are just saying be smart and know your local rules first. It takes two minutes and saves you any headaches later.</p>
            </div>
            <div className="bg-dark-800/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">✅ Youcine Plays by the Rules</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Youcine takes copyright seriously. If a movie studio, TV network, or content creator says "hey, please remove links to our content" Youcine listens and takes action. This is called DMCA compliance basically it just means Youcine respects the rights of people who make movies and shows. So Youcine is not trying to steal from anyone. It simply collects links that are already out there publicly on the internet just like how YouTube sometimes shows videos that other people have uploaded.</p>
            </div>
            <div className="bg-dark-800/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🎬 All Content Belongs to Its Creators</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Every movie, show, cartoon, anime, and sports stream you watch on Youcine belongs to the people who made it. Youcine does not own any of it not a single second of any video. The studios, directors, actors, and creators who worked hard to make your favourite content they still own it completely. Youcine is simply a bridge that helps you find and watch it. Nothing more, nothing less.</p>
            </div>
            <div className="bg-dark-800/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">👤 You Are Responsible for How You Use It</h3>
              <p className="text-lg text-slate-300 leading-relaxed">This is the big one. When you use Youcine, you are responsible for making sure you are following the rules in your own country. Youcine gives you access to the app but what you do with it is up to you. Think of it like a car. The car company builds the car and sells it to you. But how you drive it that's on you. Same idea here.</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">💡 The Simple Version</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Youcine does not own or store any videos. It just finds links that are already on the internet and puts them in one easy place. All the movies and shows belong to their original creators. Youcine follows copyright rules and removes content when asked. And it's your job to make sure streaming is allowed where you live.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Is Youcine Safe to Use?</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">This is probably one of the first things you want to know before downloading anything new on your phone. Totally understandable. So let's break it down in the simplest way possible.</p>

          <h3 className="text-xl font-bold text-white mb-4">📋 It Only Asks for What It Actually Needs</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">When you install Youcine, it will ask for a couple of basic permissions. But here's the important part it only asks for things it actually needs to work properly.</p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-300 mb-6">
            <li>It needs access to your storage so it can save downloaded movies and episodes on your phone.</li>
            <li>It also needs access to your internet connection so it can stream videos. Again, completely normal for any streaming app.</li>
            <li>That's it. Nothing weird. Nothing suspicious.</li>
          </ul>
          
          <p className="text-lg text-slate-300 font-bold mb-4">It does NOT ask for access to your:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-2">📵</span>
              <span className="text-slate-300 font-medium">Contacts</span>
              <span className="text-sm text-slate-400">it does not want your contact list</span>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-2">📷</span>
              <span className="text-slate-300 font-medium">Camera</span>
              <span className="text-sm text-slate-400">zero reason to use your camera</span>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-2">🎤</span>
              <span className="text-slate-300 font-medium">Microphone</span>
              <span className="text-sm text-slate-400">it won't listen to you</span>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-2xl mb-2">📍</span>
              <span className="text-slate-300 font-medium">Location</span>
              <span className="text-sm text-slate-400">it doesn't care where you are</span>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-8">This is actually really good news. A lot of sketchy apps ask for way too many permissions that they don't even need. Youcine keeps it simple and only takes what it needs to do its job. Nothing more.</p>

          <div className="bg-emerald-900/20 border border-emerald-500/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-2 flex items-center gap-2">✅ Download from the Right Place and You are Safe</h3>
            <p className="text-lg text-slate-300 leading-relaxed">Here's the most important safety tip of all where you download the APK from matters a lot. If you download Youcine from a trusted and safe website like youcinedl.com, the file has already been checked for viruses and harmful stuff before it's made available to you. Think of it like buying food from a clean, trusted store versus picking it up off the street. Same product very different levels of safety. Always avoid random websites you ave never heard of. Stick to trusted sources and you will be completely fine.</p>
          </div>
        </div>

        {/* System Requirements Widgets */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">System Requirements for Downloading and Installing Youcine APK</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">Following are the system requirements for downloading and installing the APK file on Android devices, Android Smart TV, Android TV Boxes, for PC, and for iOS:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all shadow-xl group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">📱</span> For Android</h3>
              <table className="w-full text-left text-slate-300 text-sm md:text-base">
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3 font-semibold text-white w-1/3">Operating System</td><td className="py-3">Android 5.0 (Lollipop) or higher</td></tr>
                  <tr><td className="py-3 font-semibold text-white">RAM</td><td className="py-3">Minimum 2 GB (4 GB or more recommended)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Storage Space</td><td className="py-3">At least 100 MB free for app + extra space</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Processor (CPU)</td><td className="py-3">Quad-core 1.5 GHz or higher recommended</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Internet Connection</td><td className="py-3">Stable Wi-Fi or 4G/5G (5 Mbps or higher)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Screen Resolution</td><td className="py-3">720p or higher for better viewing experience</td></tr>
                </tbody>
              </table>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all shadow-xl group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">📺</span> For TV</h3>
              <table className="w-full text-left text-slate-300 text-sm md:text-base">
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3 font-semibold text-white w-1/3">Operating System</td><td className="py-3">Android TV 5.0 (Lollipop) or higher</td></tr>
                  <tr><td className="py-3 font-semibold text-white">RAM</td><td className="py-3">Minimum 2 GB (4 GB or more recommended)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Storage Space</td><td className="py-3">At least 100 MB free for app + extra space</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Processor (CPU)</td><td className="py-3">Quad-core processor, 1.5 GHz or higher</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Internet Connection</td><td className="py-3">Stable Wi-Fi or Ethernet (10 Mbps or higher)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Display Resolution</td><td className="py-3">720p minimum, 1080p or 4K supported</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Input Device</td><td className="py-3">Remote control, air mouse, or external keyboard</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all shadow-xl group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">🎛️</span> For TV Box</h3>
              <table className="w-full text-left text-slate-300 text-sm md:text-base">
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3 font-semibold text-white w-1/3">Operating System</td><td className="py-3">Android 5.0+ (Fire OS for Amazon Firestick)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">RAM</td><td className="py-3">Minimum 2 GB (4 GB or higher recommended)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Storage Space</td><td className="py-3">At least 100 MB free for app + extra space</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Processor</td><td className="py-3">Quad-core CPU, 1.5 GHz+; GPU support</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Internet Connection</td><td className="py-3">Stable Wi-Fi or Ethernet (10 Mbps+ for HD)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Device Resolution</td><td className="py-3">720p minimum; 1080p and 4K supported</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Input Device</td><td className="py-3">TV remote, Bluetooth/USB keyboard, air mouse</td></tr>
                </tbody>
              </table>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all shadow-xl group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">💻</span> For PC</h3>
              <table className="w-full text-left text-slate-300 text-sm md:text-base">
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3 font-semibold text-white w-1/3">Operating System</td><td className="py-3">Windows 7/8/10/11 (64-bit) or macOS 10.12+</td></tr>
                  <tr><td className="py-3 font-semibold text-white">RAM</td><td className="py-3">Minimum 4 GB (8 GB recommended)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Storage Space</td><td className="py-3">At least 5 GB free (for emulator + APK + cache)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Processor (CPU)</td><td className="py-3">Intel or AMD Dual-core (i3/i5 or Ryzen rec.)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Internet Connection</td><td className="py-3">Stable broadband (10 Mbps+ for HD)</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Graphics (GPU)</td><td className="py-3">DirectX 11 / OpenGL 2.0 compatible; dedicated GPU recommended</td></tr>
                  <tr><td className="py-3 font-semibold text-white">Emulator Required</td><td className="py-3">BlueStacks, Nox Player, LDPlayer, or similar</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all shadow-xl group max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-3xl">🍎</span> For iOS</h3>
            <table className="w-full text-left text-slate-300 text-sm md:text-base">
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-3 font-semibold text-white w-1/3">Operating System</td><td className="py-3">iOS 11.0 or later</td></tr>
                <tr><td className="py-3 font-semibold text-white">Device Compatibility</td><td className="py-3">iPhone, iPad, and iPod Touch</td></tr>
                <tr><td className="py-3 font-semibold text-white">Processor (CPU)</td><td className="py-3">A9 chip or higher (recommended: A10 or above)</td></tr>
                <tr><td className="py-3 font-semibold text-white">RAM</td><td className="py-3">Minimum 2 GB (recommended: 3 GB or higher)</td></tr>
                <tr><td className="py-3 font-semibold text-white">Storage Space</td><td className="py-3">At least 200 MB free space</td></tr>
                <tr><td className="py-3 font-semibold text-white">Internet Connection</td><td className="py-3">Stable Wi-Fi or mobile data (10 Mbps+ for HD)</td></tr>
                <tr><td className="py-3 font-semibold text-white">Installation Method</td><td className="py-3 text-red-400 font-bold">Via third-party installer such as AltStore or TestFlight (Not Recommended)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Installation Widget */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden mt-16">
          <p className="text-lg text-primary font-bold mb-2 text-center relative z-10">Here's the simpler, friendlier, more detailed version:</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center relative z-10">How to Download and Install Youcine - Step by Step</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10 text-center relative z-10 max-w-3xl mx-auto">Don't worry if you've never installed an APK before. We're going to walk you through everything super slowly and clearly. Just follow the steps and you'll be watching your favorite content in no time!</p>

          <div className="space-y-12 relative z-10">
            {/* Android Phone */}
            <div className="bg-dark-800/40 p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">📱 How to Install Youcine on Your Android Phone</h3>
              <p className="text-lg text-slate-300 mb-6">This is the easiest one. Just follow these simple steps:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Allow App Installations</h4>
                    <p className="text-slate-400">Open your phone's Settings app. Scroll down and tap Security. Look for an option that says "Install from Unknown Sources" and turn it ON. This just tells your phone "hey, it's okay to install apps from outside the Play Store." Don't worry, it's completely safe to do this.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Download the App</h4>
                    <p className="text-slate-400">Open your phone's browser and go to youcinedl.com. Find the big download button and tap it. The APK file will start downloading to your phone. It only takes a few seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Install It</h4>
                    <p className="text-slate-400">Once the download is done, a little notification will pop up at the top of your screen. Tap it. Then tap the "Install" button when it appears.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Open and Enjoy</h4>
                    <p className="text-slate-400">Tap "Open" and Youcine is ready to go. Start watching whatever you want right away.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart TV */}
            <div className="bg-dark-800/40 p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">📺 How to Install Youcine on Your Android Smart TV</h3>
              <p className="text-lg text-slate-300 mb-6">Got a Smart TV? Here's how to get Youcine on the big screen:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Allow Unknown Sources</h4>
                    <p className="text-slate-400">Grab your TV remote and go to Settings. Find the Security section and turn ON "Install Apps from Unknown Sources." This is the same idea as on your phone just telling your TV it's okay to install apps from outside the official store.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Get the APK File</h4>
                    <p className="text-slate-400">You have two easy ways to do this:<br/><strong>Option A — USB Method:</strong> Download the Youcine APK on your computer from youcinedl.com. Save it onto a USB stick. Plug that USB stick into your TV.<br/><strong>Option B — Browser Method:</strong> If your Smart TV has a web browser, just open it, go to youcinedl.com, and download the file directly onto your TV. Super easy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Find and Install the File</h4>
                    <p className="text-slate-400">Open the File Manager on your TV. Find the Youcine APK file either in your Downloads folder or on your USB stick. Click on it and tap "Install."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Start Watching!</h4>
                    <p className="text-slate-400">Once it's installed, find the Youcine app on your TV's home screen. Open it and enjoy everything on your big screen.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TV Box */}
            <div className="bg-dark-800/40 p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">🎛️ How to Install Youcine on a TV Box</h3>
              <p className="text-lg text-slate-300 mb-6">Have an Android TV Box? This one is really straightforward:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Allow Unknown Sources</h4>
                    <p className="text-slate-400">Go to your TV Box Settings. Find Security and turn ON "Unknown Sources." Same step as always just giving your device permission to install the app.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Download the APK</h4>
                    <p className="text-slate-400">Open the browser on your TV Box. Go to youcinedl.com and tap the download button. The file will save automatically to your device.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Install It</h4>
                    <p className="text-slate-400">Open your File Manager app. Go to the Downloads folder and find the Youcine file. Tap it and hit "Install."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">You're Done</h4>
                    <p className="text-slate-400">Find Youcine in your app list on the home screen. Open it and start streaming.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PC */}
            <div className="bg-dark-800/40 p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">💻 How to Install Youcine on Your PC or Laptop</h3>
              <p className="text-lg text-slate-300 mb-6">Youcine is an Android app so to run it on a PC, you need a free tool called an Android Emulator. Think of it like a fake Android phone that lives inside your computer. Don't worry it's totally free and easy to set up!</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Download a Free Emulator</h4>
                    <p className="text-slate-400">Go to either BlueStacks or Nox Player both are completely free. Download and install one of them on your PC. It works just like installing any normal program.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Download the Youcine APK</h4>
                    <p className="text-slate-400">While the emulator is installing, open your browser and go to youcinedl.com. Download the Youcine APK file and save it somewhere easy to find like your Desktop.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Open the Emulator</h4>
                    <p className="text-slate-400">Once BlueStacks or Nox Player is ready, open it. It'll look just like an Android phone on your screen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Upload the APK File</h4>
                    <p className="text-slate-400">Find the Youcine APK file you downloaded. Simply drag and drop it into the emulator window. It will install automatically no extra steps needed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Watch on Your PC</h4>
                    <p className="text-slate-400">Once it's installed, find Youcine inside the emulator and open it. Now you can enjoy Youcine right on your computer screen as big as you want.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* iOS */}
            <div className="bg-rose-900/20 border border-rose-500/30 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-rose-400 mb-4 flex items-center gap-3">🍎 What About iPhone or iPad (iOS)?</h3>
              <p className="text-lg text-slate-300 mb-6">We have to be completely honest with you here - Youcine is not available for iPhones or iPads. It's not on the Apple App Store, and Apple doesn't allow APK files at all. Some websites might tell you that you can install it by jailbreaking your iPhone. But we strongly recommend you do NOT do this.</p>
              <h4 className="font-bold text-white text-lg mb-4">Here's why:</h4>
              <ul className="space-y-3 mb-6 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-rose-400">❌</span> Jailbreaking removes all the built-in security from your iPhone</li>
                <li className="flex items-center gap-2"><span className="text-rose-400">❌</span> It can make your phone vulnerable to viruses and hackers</li>
                <li className="flex items-center gap-2"><span className="text-rose-400">❌</span> It can permanently damage your device</li>
                <li className="flex items-center gap-2"><span className="text-rose-400">❌</span> It voids your Apple warranty completely</li>
              </ul>
              <p className="text-lg text-slate-300 font-medium">Your iPhone's security is way more valuable than any streaming app. If you have an iPhone, the safest option is to connect an Android TV Box to your TV and use Youcine on that instead. Best of both worlds.</p>
            </div>
          </div>
        </div>

        {/* Quick Recap Table */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl overflow-x-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">🎯 Quick Recap - Which Device Are You Using?</h2>
          <table className="w-full text-left text-slate-300 border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 font-bold text-white">Device</th>
                <th className="p-4 font-bold text-white">Can You Install Youcine?</th>
                <th className="p-4 font-bold text-white">How Hard Is It?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Android Phone</td>
                <td className="p-4 text-emerald-400 font-bold">✅ Yes</td>
                <td className="p-4">Super Easy</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">Android Smart TV</td>
                <td className="p-4 text-emerald-400 font-bold">✅ Yes</td>
                <td className="p-4">Easy</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">TV Box</td>
                <td className="p-4 text-emerald-400 font-bold">✅ Yes</td>
                <td className="p-4">Easy</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold text-white">PC / Laptop</td>
                <td className="p-4 text-emerald-400 font-bold">✅ Yes</td>
                <td className="p-4">Medium</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors bg-rose-900/10">
                <td className="p-4 font-bold text-white">iPhone / iPad</td>
                <td className="p-4 text-rose-400 font-bold">❌ Not Recommended</td>
                <td className="p-4 text-rose-400">Don't Try It</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Blocks: Trouble Installing, Is It Safe, Is It Legal */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all shadow-xl group">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🆘 Having Trouble Installing?</h3>
            <p className="text-slate-300 mb-4">Here are the most common problems and super easy fixes:</p>
            <ul className="space-y-3 text-sm text-slate-400 mb-4">
              <li><strong className="text-white">"App not installing"</strong> — Make sure Unknown Sources is turned ON in Settings</li>
              <li><strong className="text-white">"File not downloading"</strong> — Try a different browser or check your internet connection</li>
              <li><strong className="text-white">"App keeps crashing"</strong> — Delete it and download a fresh copy from youcinedl.com</li>
              <li><strong className="text-white">"Can't find the file"</strong> — Check your Downloads folder in the File Manager app</li>
            </ul>
            <p className="text-slate-300">Still stuck? Don't panic. The most common fix for almost every problem is simply deleting the file and downloading a fresh one from youcinedl.com. Works almost every time.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all shadow-xl group">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🔒 Is It Safe to Download Youcine APK?</h3>
            <p className="text-slate-300 mb-4">Here's the thing. The Youcine APK file itself is completely clean and safe. The only risk comes from WHERE you download it from. Think of it like buying a bottle of water. A sealed bottle from a trusted store? Totally safe. A random open bottle from somewhere sketchy? Not so much.</p>
            <ul className="space-y-3 text-sm text-slate-400 mb-4">
              <li><strong className="text-emerald-400 flex items-center gap-1">✅ Safe way:</strong> Always download from a trusted website like youcinedl.com. Every file on this site is checked and verified before it's made available to you. Clean file. Zero viruses. Zero worries.</li>
              <li><strong className="text-rose-400 flex items-center gap-1">❌ Risky way:</strong> Downloading from random websites you have never heard of. These sites sometimes add harmful stuff to the APK file like viruses or spyware that can damage your phone or steal your information without you even knowing.</li>
            </ul>
            <p className="text-slate-300 mb-4"><strong className="text-primary">💡 Extra Safety Tip:</strong> It's always a smart idea to have a free antivirus app installed on your phone. Think of it like a security guard that checks everything coming into your device. Even if you accidentally download something bad your antivirus catches it before it can do any damage.</p>
            <p className="text-white font-bold">Download from youcinedl.com and you will be completely fine. Simple as that!</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all shadow-xl group">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">⚖️ Is It Legal to Use Youcine APK?</h3>
            <p className="text-slate-300 mb-4">This is a great question and we are going to give you a completely honest answer. The truth is, it depends on two things. What you are watching and where you live.</p>
            <ul className="space-y-3 text-sm text-slate-400 mb-4">
              <li><strong className="text-emerald-400 flex items-center gap-1">✅ When It's Totally Fine:</strong> If you are watching movies, shows, or content that is free and publicly available meaning anyone is allowed to watch it for free then using Youcine is perfectly fine. Lots of content out there is free and legal to stream.</li>
              <li><strong className="text-amber-400 flex items-center gap-1">⚠️ When You Need to Be Careful:</strong> Some content on Youcine comes from third-party links that might include copyrighted movies or shows meaning someone owns the rights to that content and hasn't given permission for it to be streamed for free. Watching this kind of content through free apps sits in a grey area legally in many countries.</li>
              <li><strong className="text-primary flex items-center gap-1">🌍 It Also Depends on Where You Live:</strong> Every country has its own streaming and copyright laws. Youcine is completely legal in Brazil. But other countries might have different rules. So it's always a good idea to spend two minutes checking what the rules are in your country before you start watching.</li>
            </ul>
            <p className="text-slate-300"><strong className="text-primary">💡 The Simple Version:</strong> Use Youcine responsibly. Stick to free and publicly available content whenever possible. Know your local laws. And always download from youcinedl.com to make sure you have the official, clean version of the app.</p>
          </div>
        </div>

        {/* Troubleshooting Fixes Widget */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🔧 Youcine Not Working? Let's Fix It</h2>
          <p className="text-xl text-slate-400 mb-10">Don't panic if something goes wrong almost every problem has a super easy fix. Here are the most common issues people face and exactly how to solve them:</p>

          <div className="space-y-8">
            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">😤 Problem 1 — The App Won't Install</h3>
              <p className="text-slate-400 mb-2">This is the most common issue and the easiest to fix.</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Your phone or TV has not been given permission to install apps from outside the official app store yet.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Go to your device Settings</li>
                  <li>Tap Security</li>
                  <li>Turn ON "Install from Unknown Sources"</li>
                  <li>Now try installing again it'll work this time! ✅</li>
                </ol>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">📥 Problem 2 — The APK File Won't Download</h3>
              <p className="text-slate-400 mb-2">Frustrating — but easy to fix!</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Slow internet, browser issues, or a temporary problem with the website.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check your WiFi or mobile data make sure you're connected properly</li>
                  <li>Try using a different browser Chrome, Firefox, or your phone's built-in browser</li>
                  <li>Clear your browser's cache and try again</li>
                  <li>If nothing works wait a few minutes and try downloading again from youcinedl.com ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">📺 Problem 3 — Videos Keep Buffering or Freezing</h3>
              <p className="text-slate-400 mb-2">Nobody wants their show stopping every 30 seconds. Here's how to fix it:</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Slow internet connection or too many devices using your WiFi at the same time.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Move closer to your WiFi router</li>
                  <li>Turn off WiFi on other devices in your home temporarily</li>
                  <li>Lower the video quality inside the app tap the settings icon while a video is playing and choose a lower quality like 480p instead of HD</li>
                  <li>Try switching to a different video link most shows have more than one streaming link available inside Youcine ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">💥 Problem 4 — The App Keeps Crashing or Closing</h3>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> The app might be outdated, or your phone's memory might be full.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Delete the app and download a fresh copy from youcinedl.com</li>
                  <li>Clear your phone's cache go to Settings &gt; Apps &gt; Youcine &gt; Clear Cache</li>
                  <li>Close all other apps running in the background before opening Youcine</li>
                  <li>Make sure your phone has enough free storage space delete some old photos or apps if needed ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">🔤 Problem 5 — Subtitles Are Out of Sync</h3>
              <p className="text-slate-400 mb-2">The words on screen don't match what people are saying? Super annoying but easy to fix!</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Sometimes subtitle files load a little slower than the video.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>While the video is playing, tap the screen to bring up the player controls</li>
                  <li>Look for the Subtitle Settings option</li>
                  <li>Adjust the subtitle timing move it forward or backward until it matches perfectly ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">📵 Problem 6 — App Not Showing on Home Screen After Installing</h3>
              <p className="text-slate-400 mb-2">You installed it but now you can't find it anywhere?</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Some devices don't automatically add manually installed apps to the home screen.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Go to your device's App Drawer the full list of all installed apps</li>
                  <li>Scroll through and find Youcine</li>
                  <li>Press and hold the Youcine icon and drag it to your home screen</li>
                  <li>Or download a free app called Sideload Launcher from the Play Store it automatically finds and shows all manually installed apps ✅</li>
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">🌐 Problem 7 — Certain Content Is Blocked in My Country</h3>
              <p className="text-slate-400 mb-2">Some streaming links might not work depending on where you live.</p>
              <p className="text-slate-300 mb-3"><strong className="text-white">Why it happens:</strong> Some video links are region-locked meaning they only work in certain countries.</p>
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-slate-300">
                <strong className="text-primary block mb-2">How to fix it:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Download and turn on a free VPN app on your device</li>
                  <li>Connect to a different country's server</li>
                  <li>Now try playing the content again it should work perfectly ✅</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-emerald-900/20 border border-emerald-500/30 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">🆘 Quick Fix Checklist Try These First!</h3>
            <p className="text-slate-300 mb-6">Before anything else whenever something goes wrong, try these three things first:</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-white font-medium">
              <span className="bg-emerald-500/20 px-4 py-3 rounded-xl">✅ Close the app completely and reopen it</span>
              <span className="bg-emerald-500/20 px-4 py-3 rounded-xl">✅ Check your internet connection</span>
              <span className="bg-emerald-500/20 px-4 py-3 rounded-xl">✅ Delete and reinstall a fresh copy from youcinedl.com</span>
            </div>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">These three simple steps fix about 90% of all problems people ever have with Youcine. Seriously try them first before doing anything else! Still having trouble? The Youcine community online is super helpful. Search for your specific problem on Google or YouTube and you'll almost always find a quick video walkthrough showing exactly what to do. You're never stuck for long.</p>
          </div>
        </div>

        {/* Detailed Fixes Right Now Widget */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🔧 Something Not Working? Let's Fix It Right Now!</h2>
            <p className="text-xl text-slate-400">Don't stress almost every problem has a super simple fix. Just find your problem below and follow the easy steps.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Problem 1 — The App Won't Install</h3>
              <p className="text-slate-300 mb-6">You downloaded the file but it just won't install? Here's exactly what to do:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 1 — Check Your Permissions First</h4>
                  <p className="text-slate-400 mb-2">This is the number one reason the app won't install. Your phone needs permission to install apps from outside the Play Store. Here's how to turn it on:</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Open Settings on your phone</li>
                    <li>Tap Security</li>
                    <li>Find "Install from Unknown Sources"</li>
                    <li>Switch it ON</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2">Now try installing again — should work perfectly! ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 2 — Make Sure the File Downloaded Completely</h4>
                  <p className="text-slate-400 mb-2">Sometimes the download stops halfway without you noticing. A half-downloaded file will never install properly.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Open your Downloads folder</li>
                    <li>Check the file size — it should be at least a few hundred MB</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2">If it looks too small — delete it and download again from youcinedl.com ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 3 — The File Might Be Corrupted</h4>
                  <p className="text-slate-400 mb-2">Sometimes a file gets damaged during downloading — especially if your internet cut out halfway through.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Simply delete the file completely</li>
                    <li>Go back to youcinedl.com</li>
                    <li>Download a fresh copy</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2">Try installing again ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 4 — Delete the Old Version First</h4>
                  <p className="text-slate-400 mb-2">Got an older version of Youcine already on your phone? That can sometimes block the new one from installing.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Go to Settings {'>'} Apps {'>'} Youcine</li>
                    <li>Tap Uninstall</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2">Now install the fresh new version ✅</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">💥 Problem 2 — The App Keeps Crashing or Freezing</h3>
              <p className="text-slate-300 mb-6">You open the app and it just crashes or freezes up? Super annoying but really easy to fix!</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 1 Clear the App's Junk Data</h4>
                  <p className="text-slate-400 text-sm mb-2">Over time apps collect a lot of temporary junk files that slow everything down and cause crashes. Clearing them out is like giving the app a fresh start.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Go to Settings on your phone {'>'} Apps</li>
                    <li>Find and tap Youcine {'>'} Storage</li>
                    <li>Tap "Clear Cache"</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">Open Youcine again and see if it works ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 2 — Restart Your Device</h4>
                  <p className="text-slate-400 text-sm mb-2">Sometimes your phone or TV just needs a quick break. Turn it completely off not just sleep mode wait 30 seconds and turn it back on.</p>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">You'd be surprised how often this simple step fixes everything! ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 3 Reinstall a Fresh Copy</h4>
                  <p className="text-slate-400 text-sm mb-2">If clearing the cache and restarting didn't work it's time for a fresh start.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Uninstall Youcine completely</li>
                    <li>Go to youcinedl.com</li>
                    <li>Download the latest version and install</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">This fixes almost every crashing problem for good ✅</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">📺 Problem 3 — Videos Won't Play or Keep Buffering</h3>
              <p className="text-slate-300 mb-6">The video keeps stopping every few seconds? Or won't play at all? Here's how to fix it:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 1 — Check Your Internet</h4>
                  <p className="text-slate-400 text-sm mb-2">Streaming videos need a decent internet connection. If your WiFi is weak your video will struggle.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Move closer to your WiFi router</li>
                    <li>Turn your WiFi off and back on again</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">Check if other apps like YouTube are working fine ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 2 — Switch to a Different WiFi or Data</h4>
                  <p className="text-slate-400 text-sm mb-2">Sometimes one connection is just having a bad day.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Try switching from WiFi to your mobile data</li>
                    <li>Or connect to a different WiFi network</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">See if the video plays better ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 3 — Lower the Video Quality</h4>
                  <p className="text-slate-400 text-sm mb-2">If your internet isn't super fast HD quality might be too much for it to handle smoothly.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>While a video is playing tap the Settings icon</li>
                    <li>Change the quality from HD down to 480p or 360p</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">The video won't look quite as sharp but it'll play perfectly smooth ✅</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">⚙️ Problem 4 — The App Doesn't Work on My Device</h3>
              <p className="text-slate-300 mb-6">Getting an error saying the app isn't compatible with your device? Here are the fixes:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 1 — Update Your Device's Software</h4>
                  <p className="text-slate-400 text-sm mb-2">Old software on your phone or tablet can stop newer apps from working properly.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Go to Settings {'>'} Software Update</li>
                    <li>Install any available updates</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">Try opening Youcine again ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 2 — PC Users — You Need an Emulator</h4>
                  <p className="text-slate-400 text-sm mb-2">If you're trying to run Youcine directly on a Windows or Mac computer that won't work.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Download BlueStacks or Nox Player</li>
                    <li>Install the Youcine APK inside the emulator</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">Now it'll run perfectly on your computer ✅</p>
                </div>
                <div className="bg-dark-800/50 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-2">👉 Fix 3 — Try an Older Version</h4>
                  <p className="text-slate-400 text-sm mb-2">Sometimes the newest version doesn't work well on older devices. An older version might work perfectly fine.</p>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Go to youcinedl.com</li>
                    <li>Look for an older version of Youcine APK and install</li>
                  </ul>
                  <p className="text-emerald-400 font-bold mt-2 text-sm">Older phones often run older app versions without any problems ✅</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/20 border border-primary/30 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">🚀 Quick Fix Checklist — Try These First Every Time!</h3>
              <p className="text-slate-300 mb-6">Whenever anything goes wrong with Youcine try these three things before anything else:</p>
              <div className="flex flex-col md:flex-row justify-center gap-4 text-white font-medium">
                <span className="bg-primary/30 px-4 py-3 rounded-xl">✅ Step 1 — Close the app fully and reopen it</span>
                <span className="bg-primary/30 px-4 py-3 rounded-xl">✅ Step 2 — Check your internet connection</span>
                <span className="bg-primary/30 px-4 py-3 rounded-xl">✅ Step 3 — Delete and reinstall a fresh copy</span>
              </div>
              <p className="text-slate-300 mt-6 max-w-3xl mx-auto">These three steps alone fix the majority of problems people ever face with Youcine. Start here you'll probably never need to go further. Still can't figure it out? Search your exact problem on YouTube there are tons of helpful video guides that walk you through everything visually. You will find a solution in minutes.</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Widget */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">❓ Frequently Asked Questions About Youcine APK</h2>
            <p className="text-xl text-slate-400">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq: {q: string, a: string}, index: number) => (
              <details key={index} className="group glass-panel rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-bold text-white hover:text-primary transition-colors">
                  <span className="pr-6">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-open:bg-primary/20 transition-colors">
                    <span className="transition-transform duration-300 group-open:rotate-180 text-primary">▼</span>
                  </div>
                </summary>
                <div className="p-6 pt-0 text-lg text-slate-300 leading-relaxed border-t border-white/5 bg-dark-800/30">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final Verdict Table */}
        <div className="glass-panel p-8 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(250,204,21,0.1)] overflow-x-auto mt-16 max-w-3xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">⭐ Our Final Verdict</h2>
          <table className="w-full text-left text-slate-300 border-collapse bg-dark-800/50 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-primary/20 border-b border-primary/30">
                <th className="p-5 font-bold text-white text-xl w-1/2 text-center border-r border-primary/30">Feature</th>
                <th className="p-5 font-bold text-white text-xl w-1/2 text-center">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5 font-bold text-white text-center border-r border-white/5 text-lg">Content Library</td>
                <td className="p-5 text-primary text-xl text-center tracking-widest">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5 font-bold text-white text-center border-r border-white/5 text-lg">Ease of Use</td>
                <td className="p-5 text-primary text-xl text-center tracking-widest">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5 font-bold text-white text-center border-r border-white/5 text-lg">Video Quality</td>
                <td className="p-5 text-primary text-xl text-center tracking-widest">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5 font-bold text-white text-center border-r border-white/5 text-lg">Device Compatibility</td>
                <td className="p-5 text-primary text-xl text-center tracking-widest">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-5 font-bold text-white text-center border-r border-white/5 text-lg">Value for Money</td>
                <td className="p-5 text-primary text-xl text-center tracking-widest">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-primary/10 hover:bg-primary/20 transition-colors">
                <td className="p-5 font-bold text-primary text-center border-r border-primary/20 text-xl">Overall Experience</td>
                <td className="p-5 text-primary text-2xl text-center tracking-widest drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 hover:-translate-y-1 transition-transform shadow-2xl text-center mt-16 max-w-4xl mx-auto bg-gradient-to-b from-dark-800/80 to-dark-900/80">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Conclusion</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Youcine is a completely free streaming app that gives you access to thousands of movies, shows, cartoons, anime, live sports, and live TV channels all in HD quality, with no ads, no subscriptions, and no restrictions. It works on almost every device, supports multiple languages, and is incredibly easy to use. Just download it safely from youcinedl.com, install it in minutes, and enjoy unlimited entertainment for free forever.
          </p>
        </div>

      </div>
    </section>
  );
}
