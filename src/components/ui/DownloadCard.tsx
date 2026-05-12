"use client";

import Tilt from "react-parallax-tilt";
import { Download, ShieldCheck, Star } from "lucide-react";

interface DownloadCardProps {
  version: string;
  size: string;
  downloads: string;
  requirements: string;
  lastUpdate: string;
  downloadLink: string;
}

export default function DownloadCard({
  version,
  size,
  downloads,
  requirements,
  lastUpdate,
  downloadLink,
}: DownloadCardProps) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={1000}>
      <div className="glass-panel p-6 sm:p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -ml-10 -mb-10 transition-transform group-hover:scale-150"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 mb-6">
            <Download className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">YouCine APK</h3>
          <div className="flex items-center space-x-1 mb-6 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-slate-400 ml-2">(4.9/5 from 50K+ reviews)</span>
          </div>

          <div className="w-full bg-dark-800/50 rounded-xl p-4 mb-6 space-y-3 border border-white/5">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-slate-400">Version</span>
              <span className="text-white font-medium">{version}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-slate-400">File Size</span>
              <span className="text-white font-medium">{size}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-slate-400">Downloads</span>
              <span className="text-white font-medium">{downloads}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-slate-400">Requirements</span>
              <span className="text-white font-medium">{requirements}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Last Update</span>
              <span className="text-white font-medium">{lastUpdate}</span>
            </div>
          </div>

          <a 
            href={downloadLink} 
            className="w-full btn-primary flex justify-center items-center space-x-2 text-lg py-4"
          >
            <Download className="w-5 h-5" />
            <span>Download Now</span>
          </a>
          
          <div className="flex items-center space-x-2 mt-4 text-green-400 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Safe & Secure</span>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
