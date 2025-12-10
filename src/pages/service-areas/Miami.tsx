import { AreaPageLayout } from "@/components/AreaPageLayout";

const neighborhoods = [
  "Miami Beach",
  "Coral Gables",
  "Brickell",
  "Coconut Grove",
  "Wynwood",
  "Little Havana",
  "South Beach",
  "Downtown Miami",
  "Design District",
  "Key Biscayne",
  "Aventura",
  "Bal Harbour",
];

export default function Miami() {
  return (
    <AreaPageLayout
      areaName="Miami"
      description="Looking for reliable cleaning services in Miami? Our professional team provides eco-friendly cleaning solutions for homes and businesses across Miami-Dade County. From beachfront condos to downtown offices, we deliver spotless results every time."
      neighborhoods={neighborhoods}
    />
  );
}
