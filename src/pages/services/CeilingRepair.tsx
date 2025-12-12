import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService2 from "@/assets/artex-service-2.jpg";

const CeilingRepair = () => {
  const taskList = [
    "Damage assessment",
    "Crack repair",
    "Hole patching",
    "Water damage repair",
    "Joint reinforcement",
    "Skim coating",
    "Sanding and finishing",
    "Ready for painting",
  ];

  const productsDescription = [
    "Not every ceiling needs complete artex removal. Our ceiling repair service addresses cracks, holes, water damage, and other imperfections to restore your ceiling to perfect condition without the need for full removal and replacement.",
    "We use professional repair techniques including crack stitching, patching, and localised skim coating to seamlessly blend repairs with your existing ceiling. The result is invisible repairs that look as good as new.",
    "This service is ideal for ceilings with minor damage, ageing cracks, or areas affected by leaks. We can also repair and restore decorative features like coving and cornices to complete the transformation.",
  ];

  return (
    <ServicePageLayout
      title="Ceiling Repair"
      subtitle="Professional repair of cracks, holes, and damage. Restore your ceiling to perfect condition."
      heroImage={artexService2}
      description="Professional Ceiling Repair Service"
      taskList={taskList}
      productsTitle="Professional Ceiling Repair Service"
      productsDescription={productsDescription}
    />
  );
};

export default CeilingRepair;
