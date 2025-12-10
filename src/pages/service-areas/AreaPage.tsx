import { useParams, Navigate } from "react-router-dom";
import { AreaPageLayout } from "@/components/AreaPageLayout";
import { getAreaBySlug, serviceAreas } from "@/data/serviceAreas";

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/service-areas" replace />;
  }
  
  const area = getAreaBySlug(slug);
  
  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }
  
  return (
    <AreaPageLayout
      areaName={area.name}
      description={area.description}
      neighborhoods={area.neighborhoods}
    />
  );
}
