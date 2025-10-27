import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Toaster as Sonner } from '@/backup/components/ui/sonner';
import { Toaster } from '@/backup/components/ui/toaster';
import { TooltipProvider } from '@/backup/components/ui/tooltip';
import About from '@/backup/pages/About';
import Blog from '@/backup/pages/Blog';
import BlogPost from '@/backup/pages/BlogPost';
import Community from '@/backup/pages/Community';
import Contact from '@/backup/pages/Contact';
import EventDetail from '@/backup/pages/EventDetail';
import Events from '@/backup/pages/Events';
import GetInvolved from '@/backup/pages/GetInvolved';
import Index from '@/backup/pages/Index';
import NotFound from '@/backup/pages/NotFound';
import Resources from '@/backup/pages/Resources';
import TeamMember from '@/backup/pages/TeamMember';

import type { Component } from '@/types';

const App: Component = () => (
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
