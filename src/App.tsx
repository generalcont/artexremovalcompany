import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import HouseCleaning from "./pages/services/HouseCleaning";
import OfficeCleaning from "./pages/services/OfficeCleaning";
import DeepCleaning from "./pages/services/DeepCleaning";
import MoveInOutCleaning from "./pages/services/MoveInOutCleaning";
import Atlanta from "./pages/service-areas/Atlanta";
import Miami from "./pages/service-areas/Miami";
import LosAngeles from "./pages/service-areas/LosAngeles";
import NewYork from "./pages/service-areas/NewYork";
import Chicago from "./pages/service-areas/Chicago";
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/house-cleaning" element={<HouseCleaning />} />
          <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/services/move-in-out-cleaning" element={<MoveInOutCleaning />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/atlanta" element={<Atlanta />} />
          <Route path="/service-areas/miami" element={<Miami />} />
          <Route path="/service-areas/los-angeles" element={<LosAngeles />} />
          <Route path="/service-areas/new-york" element={<NewYork />} />
          <Route path="/service-areas/chicago" element={<Chicago />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
