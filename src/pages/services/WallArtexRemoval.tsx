import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService1 from "@/assets/artex-service-1.jpg";

const WallArtexRemoval = () => {
  const taskList = [
    "Assessment of wall texture type and condition",
    "Asbestos testing if required",
    "Complete room protection setup",
    "Systematic texture removal",
    "Underlying plaster assessment",
    "Repair of any wall damage",
    "Surface preparation for finishing",
    "Full debris removal and cleaning",
  ];

  const productsDescription = [
    "Textured wall coatings were popular throughout the 1970s and 1980s, often applied to hide imperfect plasterwork or add decorative interest. Today, these rough, dated finishes can make rooms feel smaller and darker while being difficult to clean and decorate around.",
    "Wall artex removal requires different techniques than ceiling work. Walls are more visible and any imperfections in the finished surface are more noticeable. We take particular care with wall removal, working methodically from top to bottom and paying special attention to corners, window reveals, and areas around switches and sockets.",
    "Our process involves controlled removal using specialist scrapers and steam where appropriate. We protect all fixtures, skirting boards, and flooring before starting work. Once the texture is removed, we assess the underlying plaster and make any repairs needed before the wall is ready for skim plastering.",
    "Whether you have one textured feature wall or entire rooms to transform, we deliver consistent results. Many of our customers are surprised how much larger and brighter their rooms feel once the textured walls are replaced with smooth, modern finishes.",
  ];

  return (
    <ServicePageLayout
      title="Wall Artex Removal"
      subtitle="Transform dated textured walls into smooth, modern surfaces. Expert removal with the same attention to detail as our ceiling work."
      heroImage={artexService1}
      description="Professional Wall Artex Removal"
      taskList={taskList}
      productsTitle="Removing Textured Wall Coatings"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
        { name: "Smooth Plastering", href: "/services/smooth-plastering" },
        { name: "Asbestos Testing", href: "/services/asbestos-testing" },
      ]}
    />
  );
};

export default WallArtexRemoval;
