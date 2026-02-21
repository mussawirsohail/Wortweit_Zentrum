import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="container">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-lg font-medium tracking-tight">Wortweit Zentrum</span>
              </Link>
              <p className="text-sm text-muted leading-relaxed">
                Master Languages. Expand Your World.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                <li><Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/languages" className="text-sm text-muted hover:text-foreground transition-colors">Languages</Link></li>
                <li><Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="text-sm text-muted hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-4">Languages</h4>
              <ul className="space-y-2.5">
                <li><Link href="/languages/english" className="text-sm text-muted hover:text-foreground transition-colors">English</Link></li>
                <li><Link href="/languages/german" className="text-sm text-muted hover:text-foreground transition-colors">German</Link></li>
                <li><Link href="/languages/japanese" className="text-sm text-muted hover:text-foreground transition-colors">Japanese</Link></li>
                <li><Link href="/languages/korean" className="text-sm text-muted hover:text-foreground transition-colors">Korean</Link></li>
                <li><Link href="/languages/turkish" className="text-sm text-muted hover:text-foreground transition-colors">Turkish</Link></li>
                <li><Link href="/languages/sindhi" className="text-sm text-muted hover:text-foreground transition-colors">Sindhi</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-4">Contact</h4>
              <address className="not-italic space-y-2">
                <p className="text-sm text-muted">123 Education Street</p>
                <p className="text-sm text-muted">Learning City, LC 12345</p>
                <p className="text-sm text-muted mt-3">
                  <a href="mailto:wortweitzentrum@gmail.com" className="hover:text-foreground transition-colors">wortweitzentrum@gmail.com</a>
                </p>
                <p className="text-sm text-muted">
                  <a href="tel:+923163610500" className="hover:text-foreground transition-colors">+92 316 3610500</a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Wortweit Zentrum. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="text-xs text-muted hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
