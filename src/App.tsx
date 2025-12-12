import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import AreaPage from "./pages/service-areas/AreaPage";
import ArtexCeilingRemoval from "./pages/services/ArtexCeilingRemoval";
import SmoothPlastering from "./pages/services/SmoothPlastering";
import AsbestosTesting from "./pages/services/AsbestosTesting";
import WallArtexRemoval from "./pages/services/WallArtexRemoval";
import CeilingRepair from "./pages/services/CeilingRepair";
import TexturedCoatingRemoval from "./pages/services/TexturedCoatingRemoval";
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
          <Route path="/services/artex-ceiling-removal" element={<ArtexCeilingRemoval />} />
          <Route path="/services/smooth-plastering" element={<SmoothPlastering />} />
          <Route path="/services/asbestos-testing" element={<AsbestosTesting />} />
          <Route path="/services/wall-artex-removal" element={<WallArtexRemoval />} />
          <Route path="/services/ceiling-repair" element={<CeilingRepair />} />
          <Route path="/services/textured-coating-removal" element={<TexturedCoatingRemoval />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:slug" element={<AreaPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
