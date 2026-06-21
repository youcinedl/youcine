import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = generateMeta(
  "Contact Us",
  "Get in touch with the YouCine-DL team. We are here to help you with any queries regarding YouCine APK downloads or guides.",
  "contact"
);

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-slate-300 mb-8 text-lg">
            Have questions about YouCine APK? Need help with installation on your Smart TV or PC? Drop us a message, and our team will get back to you as soon as possible.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email Us</h3>
                <p className="text-slate-400">support@youcine-dl.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Call Us</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-green-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-slate-400">Tech Park, California, US</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill priority sizes="(max-width: 768px) 100vw, 50vw"  alt="Banner" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Support" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="glass-panel p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input type="text" className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input type="email" className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full btn-primary">Send Message</button>
          </form>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Devices" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Contact Us" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
