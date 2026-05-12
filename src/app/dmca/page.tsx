import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import { CopySlash, Scale, Shield } from "lucide-react";

export const metadata = generateMeta(
  "DMCA Disclaimer",
  "DMCA Policy for YouCineApkPro. We respect intellectual property rights and comply with the Digital Millennium Copyright Act.",
  "dmca"
);

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">DMCA Disclaimer</h1>
        <p className="text-slate-300 text-lg">Digital Millennium Copyright Act Notice</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-slate-300">
          YouCineApkPro ("we", "us", "our") respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website, we will respond expeditiously to claims of copyright infringement.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
             <Scale className="w-16 h-16 text-primary opacity-50" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/app_interface_1778387008367.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Interface" className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">No File Hosting</h2>
        <p className="text-slate-300">
          We want to make it clear that YouCineApkPro is an educational and informational blog. <strong>We do not host, upload, or store any copyright-protected material, videos, movies, or APK files on our servers.</strong> All content linked on our website is stored on third-party servers not affiliated with us.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Takedown Request</h2>
        <p className="text-slate-300">
          If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing a DMCA Notice of Alleged Infringement and delivering it to us via our Contact Page.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
            <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Legal Shield" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800 flex items-center justify-center">
            <Shield className="w-16 h-16 text-secondary opacity-50" />
          </div>
        </div>

        <p className="text-slate-300">
          Upon receipt of Notice as described below, we will take whatever action, in our sole discretion, we deem appropriate, including removal of the challenged content from the Site.
        </p>
      </div>
    </div>
  );
}
