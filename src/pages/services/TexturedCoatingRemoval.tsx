import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService3 from "@/assets/artex-service-3.jpg";

const TexturedCoatingRemoval = () => {
  const taskList = [
    "Identification of coating type",
    "Selection of appropriate removal method",
    "Complete area protection",
    "Careful, controlled removal",
    "Treatment of underlying surface",
    "Repair of any substrate damage",
    "Surface preparation for finishing",
    "Thorough cleanup and debris disposal",
  ];

  const productsDescription = [
    "Beyond traditional artex, many UK properties have other textured finishes that have fallen out of fashion. Woodchip wallpaper, popcorn ceilings, stipple paint, and various decorative textures were all popular at different times but now make properties feel dated and difficult to decorate.",
    "Each textured finish requires a specific removal approach. Woodchip wallpaper needs thorough soaking and careful scraping to avoid damaging the plaster beneath. Popcorn or cottage cheese ceilings (common in 1960s-70s properties) often contain a polystyrene aggregate that requires particular techniques. Stipple paint finishes may need specialist solvents or steam depending on their composition.",
    "We have experience removing all types of textured coatings and finishes. Before starting any job, we assess the coating type, test for asbestos if the property age warrants it, and select the most effective and least disruptive removal method for your specific situation.",
    "Whatever textured finish you want removed, we handle the complete process from start to finish. You'll be left with smooth surfaces ready for modern decoration, with all debris removed and the area thoroughly cleaned. Many customers tell us their rooms feel completely different once dated textures are replaced with clean, smooth walls and ceilings.",
  ];

  return (
    <ServicePageLayout
      title="Textured Coating Removal"
      subtitle="Specialist removal of woodchip, popcorn, stipple, and decorative textures. Whatever the coating, we have the experience to remove it properly."
      heroImage={artexService3}
      description="Textured Coating Removal Service"
      taskList={taskList}
      productsTitle="Removing All Types Of Textured Finishes"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
        { name: "Asbestos Testing", href: "/services/asbestos-testing" },
        { name: "Smooth Plastering", href: "/services/smooth-plastering" },
      ]}
    />
  );
};

export default TexturedCoatingRemoval;
