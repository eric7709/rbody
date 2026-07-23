import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import { site, services, waLink } from "@/lib/content";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white/60 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-display text-2xl text-white">
              R<span className="text-[#CDB7C8] italic">body</span>
            </span>
            <p className="text-sm leading-relaxed text-white/50">
              Specialist clinic for lymphatic drainage massage, post-surgical recovery,
              body sculpting, and medical weight-loss support in Lagos.
            </p>
            <div className="flex gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/rbody_clinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-[#CDB7C8] hover:text-[#CDB7C8] hover:bg-[#CDB7C8]/10 transition-all"
              >
                <FaInstagram size={16} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@rbody_clinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-[#CDB7C8] hover:text-[#CDB7C8] hover:bg-[#CDB7C8]/10 transition-all"
              >
                <FaTiktok size={15} />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/people/Rbody-Clinic/61580775179104"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-[#CDB7C8] hover:text-[#CDB7C8] hover:bg-[#CDB7C8]/10 transition-all"
              >
                <FaFacebook size={16} />
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-[#CDB7C8] hover:text-[#CDB7C8] hover:bg-[#CDB7C8]/10 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-white/50 transition-colors hover:text-[#CDB7C8]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-white/50 transition-colors hover:text-[#CDB7C8]">
                  Our Treatments
                </a>
              </li>
              <li>
                <a href="#results" className="text-sm text-white/50 transition-colors hover:text-[#CDB7C8]">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/50 transition-colors hover:text-[#CDB7C8]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-[#CDB7C8]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+${site.whatsappNumber}`}
                  className="flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-[#CDB7C8]"
                >
                  <Phone size={15} className="text-[#CDB7C8] shrink-0 mt-0.5" />
                  <span>{site.whatsappNumber}</span>
                </a>
              </li> 
              <li>
                <a
                  href="mailto:rclinicpostop@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-[#CDB7C8]"
                >
                  <Mail size={15} className="text-[#CDB7C8] shrink-0 mt-0.5" />
                  <span>rclinicpostop@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin size={15} className="text-[#CDB7C8] shrink-0 mt-0.5" />
                  <span>{site.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <Clock size={15} className="text-[#CDB7C8] shrink-0 mt-0.5" />
                  <span>
                    {site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 bg-[#8B6F86]/20 hover:bg-[#8B6F86]/30 text-[#CDB7C8] text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/5" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Rbody Clinic, Lagos. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-[#CDB7C8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#CDB7C8] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#CDB7C8] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}