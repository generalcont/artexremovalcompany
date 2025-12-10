import { AreaPageLayout } from "@/components/AreaPageLayout";

const neighborhoods = [
  "Beverly Hills",
  "Santa Monica",
  "Hollywood",
  "West Hollywood",
  "Bel Air",
  "Venice",
  "Brentwood",
  "Malibu",
  "Pasadena",
  "Downtown LA",
  "Silver Lake",
  "Los Feliz",
];

export default function LosAngeles() {
  return (
    <AreaPageLayout
      areaName="Los Angeles"
      description="From the Hollywood Hills to the beaches of Santa Monica, our Los Angeles cleaning team brings eco-friendly cleaning excellence to your doorstep. We specialize in residential and commercial cleaning services throughout LA County."
      neighborhoods={neighborhoods}
    />
  );
}
