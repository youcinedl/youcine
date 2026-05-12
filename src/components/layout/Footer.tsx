import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { MessageCircle, Globe, Camera, Video } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center font-outfit font-bold text-xl text-white">
                YC
              </div>
              <span className="font-outfit font-bold text-2xl text-white tracking-tight">
                YouCine<span className="text-secondary">PRO</span>
              </span>
            </Link>
            <p className="text-slate-400 mt-4 max-w-sm">
              Your ultimate streaming companion. Download YouCine APK to enjoy the latest movies, TV shows, and live channels with high-definition playback and an ad-free experience.
            </p>
            <div className="flex space-x-4 mt-6">
              {[MessageCircle, Globe, Camera, Video].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white hover:underline transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal & Info</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-white hover:underline transition-all">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white hover:underline transition-all">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white hover:underline transition-all">Terms & Conditions</Link></li>
              <li><Link href="/dmca" className="text-slate-400 hover:text-white hover:underline transition-all">DMCA Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} YouCineApkPro. All Rights Reserved. This is an unofficial informational site.
          </p>
        </div>
      </div>
    </footer>
  );
}
