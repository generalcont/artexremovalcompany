import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService1 from "@/assets/artex-service-1.jpg";

const ArtexCeilingRemoval = () => {
  const taskList = [
    "Initial ceiling assessment",
    "Asbestos sampling (pre-1999 properties)",
    "Full room dust containment",
    "Mechanical artex removal",
    "HEPA dust extraction",
    "Surface preparation",
    "Waste bagging and disposal",
    "Final clean-up",
  ];

  const productsDescription = [
    "We remove all types of textured artex coatings from ceilings — swirl, stipple, fan, and random patterns. The process involves scraping the coating from the plasterboard or lath-and-plaster substrate, then preparing the surface for a smooth skim finish.",
    "For properties built before 1999, we take samples and send them to a UKAS-accredited laboratory for asbestos analysis. Results take 3-5 working days. If asbestos is detected, we use licensed removal methods that comply with HSE regulations.",
    "During removal, we seal the room with polythene sheeting and use HEPA-filtered dust extractors to capture airborne particles. All waste is double-bagged and removed from site. Most single rooms are completed within one working day.",
  ];

  return (
    <ServicePageLayout
      title="Artex Ceiling Removal"
      subtitle="We remove textured artex coatings from ceilings using dust-controlled methods. All pre-1999 artex is tested for asbestos before work begins."
      heroImage={artexService1}
      description="Complete Artex Ceiling Removal Service"
      taskList={taskList}
      productsTitle="How We Remove Artex Ceilings"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Smooth Plastering", href: "/services/smooth-plastering" },
        { name: "Asbestos Testing", href: "/services/asbestos-testing" },
        { name: "Wall Artex Removal", href: "/services/wall-artex-removal" },
      ]}
    />
  );
};

export default ArtexCeilingRemoval;
