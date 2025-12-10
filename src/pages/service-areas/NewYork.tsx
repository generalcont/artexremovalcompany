import { AreaPageLayout } from "@/components/AreaPageLayout";

const neighborhoods = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Upper East Side",
  "Upper West Side",
  "Tribeca",
  "SoHo",
  "Chelsea",
  "Williamsburg",
  "Park Slope",
  "Astoria",
  "Long Island City",
];

export default function NewYork() {
  return (
    <AreaPageLayout
      areaName="New York"
      description="New York City never sleeps, and neither does our commitment to exceptional cleaning services. From Manhattan penthouses to Brooklyn brownstones, we provide thorough, eco-conscious cleaning that meets the high standards of NYC residents."
      neighborhoods={neighborhoods}
    />
  );
}
