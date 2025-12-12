import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService1 from "@/assets/artex-service-1.jpg";

const WallArtexRemoval = () => {
  const taskList = [
    "Wall condition assessment",
    "Furniture protection",
    "Dust containment",
    "Texture removal",
    "Surface smoothing",
    "Crack repair",
    "Debris removal",
    "Final cleaning",
  ];

  const productsDescription = [
    "Artex and textured coatings aren't just found on ceilings - many properties have textured walls too. Our wall artex removal service uses the same professional techniques to transform your walls from dated and textured to smooth and modern.",
    "Wall textures can be particularly challenging due to their visibility and the need for a perfect finish. Our experienced team takes extra care to ensure complete removal and a surface that's ready for plastering or decoration.",
    "Whether you have one feature wall or entire rooms with textured walls, we can help. We work carefully around fixtures and fittings, and our dust containment ensures minimal mess in your home.",
  ];

  return (
    <ServicePageLayout
      title="Wall Artex Removal"
      subtitle="Professional removal of textured coatings from walls. Same expert service for your walls as our ceiling work."
      heroImage={artexService1}
      description="Professional Wall Artex Removal"
      taskList={taskList}
      productsTitle="Professional Wall Artex Removal"
      productsDescription={productsDescription}
    />
  );
};

export default WallArtexRemoval;
