import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService2 from "@/assets/artex-service-2.jpg";

const CeilingRepair = () => {
  const taskList = [
    "Thorough damage assessment",
    "Identification of underlying cause",
    "Crack stabilisation and repair",
    "Hole and damage patching",
    "Water stain treatment",
    "Localised skim plastering",
    "Seamless blending with existing surface",
    "Final finishing and preparation",
  ];

  const productsDescription = [
    "Not every ceiling problem requires complete removal and replacement. Many issues – cracks, small holes, water damage, or localised deterioration – can be repaired effectively, saving you time and money while still achieving excellent results.",
    "Ceiling cracks often appear along joist lines or around light fittings due to natural building movement. We use jointing tape and flexible compounds to repair these cracks properly, preventing them from reappearing. For larger cracks, we use crack stitching techniques that reinforce the ceiling structure.",
    "Water damage is common in UK properties, often from roof leaks, burst pipes, or condensation issues. Once the water source is fixed, we can repair the damaged ceiling by cutting back affected areas, treating for stains, and patching or re-plastering as needed. We match the existing ceiling texture or can provide a smooth finish if you're ready for a change.",
    "Our repair service is ideal for maintaining otherwise good ceilings, preparing properties for sale, or addressing localised issues without the disruption of complete ceiling work. We assess each ceiling honestly and recommend repair only when it's the right solution – never when full removal would be more appropriate.",
  ];

  return (
    <ServicePageLayout
      title="Ceiling Repair"
      subtitle="Expert repair of cracks, holes, water damage, and deterioration. Cost-effective solutions that restore your ceiling to perfect condition."
      heroImage={artexService2}
      description="Professional Ceiling Repair Service"
      taskList={taskList}
      productsTitle="When Repair Is The Right Choice"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
        { name: "Smooth Plastering", href: "/services/smooth-plastering" },
        { name: "Textured Coating Removal", href: "/services/textured-coating-removal" },
      ]}
    />
  );
};

export default CeilingRepair;
