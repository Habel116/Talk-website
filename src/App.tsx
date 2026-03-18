import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetails2026 from "./pages/EventDetails2026";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/esemenyek" element={<Events />} />
          <Route path="/esemenyek/talalkazasok-2026" element={<EventDetails2026 />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/csapat" element={<Team />} />
          <Route path="/kuldetesunk" element={<Mission />} />
          <Route path="/kapcsolat" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
