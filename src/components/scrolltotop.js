import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // First, instantly jump to the top to prevent landing in the footer
    window.scrollTo(0, 0);

    // Then apply custom behavior for the three service detail pages
    if (pathname.startsWith("/services/email-marketing")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
    else if (pathname.startsWith("/services/appointment-setting")) {
      window.scrollTo({ top: 0, behavior: "auto" }); // instant
    } 
    else if (pathname.startsWith("/services/lead-generation")) {
      window.scrollTo({ top: 50, behavior: "auto" }); // offset
    }
    // No action for other pages
  }, [pathname]);

  return null;
}
