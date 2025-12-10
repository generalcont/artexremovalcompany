import { AreaPageLayout } from "@/components/AreaPageLayout";

const neighborhoods = [
  "Buckhead",
  "Morningside-Lenox Park",
  "Atlanta-Inman Park",
  "Cabbage Town",
  "Virginia-Highland",
  "Candler Park",
  "Ormewood Park-East Atlanta",
  "Oakdale",
  "Midtown",
  "Poncey-Highland",
  "Grant Park",
  "Old Fourth Ward",
];

export default function Atlanta() {
  return (
    <AreaPageLayout
      areaName="Atlanta"
      description="Whether you need a one-time deep clean or a regular maid service in Atlanta, GA we've got you covered. Some of the areas our housekeeping Pros specialize in are post-construction cleanups, deep cleans, spring cleaning, moving in or out, rental and Airbnb property turnovers, office maintenance, and more."
      neighborhoods={neighborhoods}
    />
  );
}
