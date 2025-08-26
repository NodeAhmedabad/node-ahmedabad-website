import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Community from './pages/Community';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import Events from './pages/Events';
import GetInvolved from './pages/GetInvolved';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';
import TeamMember from './pages/TeamMember';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Events />} path="/events" />
          <Route element={<EventDetail />} path="/events/:slug" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogPost />} path="/blog/:slug" />
          <Route element={<Community />} path="/community" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<GetInvolved />} path="/get-involved" />
          <Route element={<Resources />} path="/resources" />
          <Route element={<TeamMember />} path="/team/:slug" />
          {/* Placeholder routes for remaining pages */}
          <Route element={<Index />} path="/sponsors" />
          <Route element={<Index />} path="/hall-of-fame" />
          <Route element={<Index />} path="/code-of-conduct" />
          <Route element={<Index />} path="/faqs" />
          <Route element={<Index />} path="/privacy-policy" />
          <Route element={<Index />} path="/terms" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
