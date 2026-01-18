import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logosss.png"
                alt="VoxaDent Logo"
                width={32}
                height={32}
                className="w-12 h-12"
              />
              {/* Text Block */}
              <div className="relative flex flex-col justify-center">
                {/* Brand Name */}
                <div className="flex items-baseline gap-1 leading-none">
                  <span className="text-base hover:text-foreground font-semibold text-neutral-300">
                    Voxa
                  </span>
                  <span className="text-base hover:text-foreground font-semibold text-amber-500">
                    Dent
                  </span>
                </div>

                {/* Tagline with dashes */}
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="h-px w-5 bg-amber-500/70" />
                  <span className="text-[9px] font-semibold hover:text-foreground tracking-[0.32em] text-amber-600/80 whitespace-nowrap">
                    AI DENTAL ASSISTANT
                  </span>
                  <span className="h-px w-5 bg-amber-500/70" />
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              AI-powered dental assistance that actually helps.
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
            &copy;2026 VoxaDent. Built for real people with real dental
            questions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
