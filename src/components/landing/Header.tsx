import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logosss.png"}
            alt="VoxaDent Logo"
            width={32}
            height={32}
            className="w-12 h-12"
          />

          {/* Text Block */}
          <div className="relative flex flex-col justify-center">
            {/* Brand Name */}
            <div className="flex items-baseline leading-none">
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
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Show only when logged out */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Login
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button size={"sm"}>Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          {/* Show only when logged in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
