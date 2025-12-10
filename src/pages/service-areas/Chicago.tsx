import { AreaPageLayout } from "@/components/AreaPageLayout";

const neighborhoods = [
  "Lincoln Park",
  "Wicker Park",
  "The Loop",
  "River North",
  "Gold Coast",
  "Lakeview",
  "Bucktown",
  "Old Town",
  "Hyde Park",
  "Logan Square",
  "Streeterville",
  "West Loop",
];

export default function Chicago() {
  return (
    <AreaPageLayout
      areaName="Chicago"
      description="Chicago's finest eco-friendly cleaning service is here to make your home or office shine. From the Magnificent Mile to the charming neighborhoods of Lincoln Park, we bring our professional touch to every corner of the Windy City."
      neighborhoods={neighborhoods}
    />
  );
}
