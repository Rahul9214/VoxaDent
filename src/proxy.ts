import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/appointments(.*)",
  "/voice(.*)",
  "/pro(.*)",
  "/api/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/dashboard(.*)",
    "/appointments(.*)",
    "/voice(.*)",
    "/pro(.*)",
    "/api/(.*)",
  ],
};
