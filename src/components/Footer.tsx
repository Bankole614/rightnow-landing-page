// src/components/Footer.tsx
import React from "react";
import Brand from "./Brand";
import { Twitter, Linkedin, Github,  } from "lucide-react";

const Footer: React.FC = () => (
  <footer id="contact" className="mt-20 py-12 px-4 border-t border-slate-200">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <Brand />
        <p className="text-slate-600 max-w-sm mb-4">AI-powered legal case management for modern practices. Clarity for cases, confidence for clients.</p>
        <div className="flex gap-3">
          {[
            { name: 'twitter', icon: Twitter, href: 'https://twitter.com' },
            { name: 'linkedin', icon: Linkedin, href: 'https://linkedin.com' },
            { name: 'github', icon: Github, href: 'https://github.com' }
          ].map(({ name, icon: Icon, href }) => (
            <button key={name}  className="w-10 h-10 rounded-xl backdrop-blur-sm bg-slate-100 hover:bg-indigo-100 flex items-center justify-center transition-all hover:scale-110">
              <Icon className="w-5 h-5 text-slate-600 hover:text-primary" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h5 className="font-bold text-slate-900 mb-4">Product</h5>
        <ul className="space-y-3 text-sm text-slate-600">
          <li><a href="#features" className="hover:text-[#1D8ADF] transition-colors">Features</a></li>
          <li><a href="#ai" className="hover:text-[#1D8ADF] transition-colors">AI Assistant</a></li>
          <li><a href="#pricing" className="hover:text-[#1D8ADF] transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-[#1D8ADF] transition-colors">Changelog</a></li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold text-slate-900 mb-4">Company</h5>
        <ul className="space-y-3 text-sm text-slate-600">
          <li><a href="#" className="hover:text-[#1D8ADF] transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-[#1D8ADF] transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-[#1D8ADF] transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-[#1D8ADF] transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} RightNow. All rights reserved.</p>
      <div className="flex items-center gap-6 text-sm text-slate-500">
        <a href="#" className="hover:text-[#1D8ADF] transition-colors">hello@rightnow.app</a>
        <span>•</span>
        <a href="#" className="hover:text-[#1D8ADF] transition-colors">Support</a>
      </div>
    </div>
  </footer>
);

export default Footer;
