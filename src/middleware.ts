import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - Next.js internals (_next)
     * - Static files
     * - Favicon
     */
    "/((?!_next|.*\\..*|favicon.ico).*)",
  ],
};
