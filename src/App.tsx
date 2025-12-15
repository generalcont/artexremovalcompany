import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eagerly load Index for fast initial load
import Index from "./pages/Index";

// Lazy load other routes for code splitting
const Services = lazy(() => import("./pages/Services"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const AreaPage = lazy(() => import("./pages/service-areas/AreaPage"));
const ArtexCeilingRemoval = lazy(() => import("./pages/services/ArtexCeilingRemoval"));
const SmoothPlastering = lazy(() => import("./pages/services/SmoothPlastering"));
const AsbestosTesting = lazy(() => import("./pages/services/AsbestosTesting"));
const WallArtexRemoval = lazy(() => import("./pages/services/WallArtexRemoval"));
const CeilingRepair = lazy(() => import("./pages/services/CeilingRepair"));
const TexturedCoatingRemoval = lazy(() => import("./pages/services/TexturedCoatingRemoval"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
