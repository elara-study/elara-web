'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'For Students', href: '#student-moment' },
      { label: 'For Teachers', href: '#teacher-clarity' },
      { label: 'For Parents', href: '#parent-trust' },
      { label: 'Learning Reports', href: '#learning-report' },
    ],
    about: [
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'The Problem', href: '#problem' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'How It Works', href: '#perspectives' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#closing-cta' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
    { label: 'GitHub', href: '#', icon: '⚡' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer 
      className="relative border-t bg-gradient-to-b from-white to-slate-50/50"
      style={{
        borderTopColor: '#E2E8F0',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizeLegibility',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="#hero"
                onClick={(e) => handleLinkClick(e, '#hero')}
                className="inline-block"
              >
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    fontFamily: 'var(--font-comfortaa)',
                    color: '#0F172A',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  elara
                </h3>
              </Link>
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  color: '#475569',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                Learning should never lose its way. We're building a new way to support learning — one that listens, guides, and connects everyone who matters.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 pt-2"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-slate-100 transition-colors"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: '#475569',
                    borderColor: '#E2E8F0',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-comfortaa)',
                color: '#0F172A',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: '#475569',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-comfortaa)',
                color: '#0F172A',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      color: '#475569',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h4
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: '#0F172A',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: 'var(--font-nunito)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: 'var(--font-comfortaa)',
                  color: '#0F172A',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: 'var(--font-nunito)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3"
          style={{
            borderTopColor: '#E2E8F0',
          }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: '#94A3B8',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            © {currentYear} Elara
          </p>
          <p
            className="text-xs text-center md:text-right"
            style={{
              fontFamily: 'var(--font-nunito)',
              color: '#94A3B8',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            Technology should amplify learning, not override it.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
