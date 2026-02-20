import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center -ml-3">
              <Image
                src="/logosss.png"
                alt="VoxaDent Logo"
                width={32}
                height={32}
                className="w-12 h-12"
              />
              {/* Brand Name */}
              <div className="flex items-baseline leading-none">
                <span className="text-lg hover:text-foreground font-semibold text-neutral-300">
                  Voxa
                </span>
                <span className="text-lg hover:text-foreground font-semibold text-amber-500">
                  Dent
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground -mt-2">
              AI-Powered Dental Assistance that actually helps.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy;2026 VoxaDent. Trusted AI guidance for everyday dental care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
