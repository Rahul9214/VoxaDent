import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/appointments(.*)",
  "/voice(.*)",
  "/pro(.*)",
  "/api/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();           
  const userId = session?.userId ?? null; 

  // Redirect logged-in users away from landing page
  if (req.nextUrl.pathname === "/" && userId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/",
    "/dashboard(.*)",
    "/appointments(.*)",
    "/voice(.*)",
    "/pro(.*)",
    "/api/(.*)",
  ],
};

 