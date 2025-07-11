
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import EventDetail from "./pages/EventDetail";
import TeamMember from "./pages/TeamMember";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team/:slug" element={<TeamMember />} />
          {/* Placeholder routes for remaining pages */}
          <Route path="/sponsors" element={<Index />} />
          <Route path="/hall-of-fame" element={<Index />} />
          <Route path="/code-of-conduct" element={<Index />} />
          <Route path="/faqs" element={<Index />} />
          <Route path="/privacy-policy" element={<Index />} />
          <Route path="/terms" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
