import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages1/About';
import Blog from './pages1/Blog';
import BlogPost from './pages1/BlogPost';
import Community from './pages1/Community';
import Contact from './pages1/Contact';
import EventDetail from './pages1/EventDetail';
import Events from './pages1/Events';
import GetInvolved from './pages1/GetInvolved';
import Index from './pages1/Index';
import NotFound from './pages1/NotFound';
import Resources from './pages1/Resources';
import TeamMember from './pages1/TeamMember';

import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const App = () => (
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
);

export default App;
