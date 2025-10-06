import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4">Your Name</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Fixing tech problems that cost businesses customers. Performance, email, SEO, and custom development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-zinc-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-zinc-400 hover:text-white transition-colors">Services</a>
              <a href="#examples" className="block text-zinc-400 hover:text-white transition-colors">Examples</a>
              <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="h-4 w-4" />
                <a href="letmegoblind@gmail.com" className="hover:text-white transition-colors">
                  letmegoblind@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="h-4 w-4" />
                <span>Houston, TX • Working nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; 2025 Ryan Stefan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
