import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService1 from "@/assets/artex-service-1.jpg";

const ArtexCeilingRemoval = () => {
  const taskList = [
    "Full room assessment",
    "Dust containment setup",
    "Asbestos testing (if needed)",
    "Safe artex removal",
    "Surface preparation",
    "Debris disposal",
    "Area cleaning",
    "Quality inspection",
  ];

  const productsDescription = [
    "Our artex ceiling removal service is the comprehensive solution for homeowners looking to modernise their dated textured ceilings. We use professional-grade equipment and proven techniques to safely remove all types of artex patterns including swirl, stipple, fan, and random textures.",
    "Every project begins with a thorough assessment of your ceiling to determine the best removal approach. For properties built before 1999, we conduct asbestos testing to ensure complete safety. Our fully trained team then sets up complete dust containment to protect your home.",
    "The removal process is carried out efficiently with minimal disruption. We take care of all debris disposal and leave your ceiling ready for plastering. Most single rooms can be completed in just one day.",
  ];

  return (
    <ServicePageLayout
      title="Artex Ceiling Removal"
      subtitle="Transform your dated textured ceilings with our professional artex removal service. Safe, efficient, and thorough."
      heroImage={artexService1}
      description="Complete Artex Ceiling Removal Service"
      taskList={taskList}
      productsTitle="Complete Artex Ceiling Removal Service"
      productsDescription={productsDescription}
    />
  );
};

export default ArtexCeilingRemoval;
