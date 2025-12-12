import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService3 from "@/assets/artex-service-3.jpg";

const TexturedCoatingRemoval = () => {
  const taskList = [
    "Coating type assessment",
    "Removal method selection",
    "Full dust containment",
    "Careful removal process",
    "Surface preparation",
    "Debris disposal",
    "Area cleaning",
    "Ready for finishing",
  ];

  const productsDescription = [
    "Beyond traditional artex, there are many types of textured coatings that can date a property. Our textured coating removal service handles woodchip wallpaper, popcorn ceilings, stipple finishes, and other decorative textures that you want removed.",
    "Each type of textured coating requires a specific removal approach. Woodchip wallpaper, for example, needs steam and careful scraping, while some textured paints may require specialist solvents. Our team has experience with all types and knows the best approach for each.",
    "Whatever type of textured coating you have, we can remove it safely and efficiently, leaving you with a smooth surface ready for modern decoration. We handle the entire process from assessment to completion.",
  ];

  return (
    <ServicePageLayout
      title="Textured Coating Removal"
      subtitle="Complete removal of woodchip, popcorn, stipple, and other textured finishes. All coating types handled professionally."
      heroImage={artexService3}
      description="Textured Coating Removal Service"
      taskList={taskList}
      productsTitle="Textured Coating Removal Service"
      productsDescription={productsDescription}
    />
  );
};

export default TexturedCoatingRemoval;
