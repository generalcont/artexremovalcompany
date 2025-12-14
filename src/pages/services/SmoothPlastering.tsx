import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService2 from "@/assets/artex-service-2.jpg";

const SmoothPlastering = () => {
  const taskList = [
    "Thorough surface inspection and preparation",
    "Repair of cracks, holes, and imperfections",
    "Application of PVA bonding agent",
    "Two-coat skim plaster system",
    "Professional smoothing and finishing",
    "Edge detailing around coving and fixtures",
    "Light sanding for perfect finish",
    "Final quality inspection",
  ];

  const productsDescription = [
    "After artex removal, your ceiling needs a professional finish that will look beautiful for decades. Our smooth plastering service uses traditional plastering techniques refined over years of experience to create flawless ceilings that transform any room.",
    "We apply a two-coat skim plaster system using Thistle board finish and multi-finish plaster from British Gypsum. The first coat fills any imperfections and creates a key for the final skim, while the second coat is trowelled to a mirror-smooth finish. This technique ensures a durable surface that won't crack or deteriorate over time.",
    "Our plasterers are time-served tradespeople who take genuine pride in their craft. We understand that the plastering stage is what you'll see every day, so we never rush this critical finishing work. The result is a ceiling that's perfectly flat, smooth to the touch, and ready for any decorative finish you choose.",
    "We work in all property types from Victorian terraces to modern apartments. Whether you need one room or an entire house plastered, we deliver the same consistent, high-quality finish on every project.",
  ];

  return (
    <ServicePageLayout
      title="Smooth Plastering"
      subtitle="Expert skim plastering to create flawless, modern ceilings. The perfect finishing touch that transforms your room after artex removal."
      heroImage={artexService2}
      description="Professional Smooth Plastering Service"
      taskList={taskList}
      productsTitle="Why Professional Plastering Matters"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
        { name: "Ceiling Repair", href: "/services/ceiling-repair" },
        { name: "Wall Artex Removal", href: "/services/wall-artex-removal" },
      ]}
    />
  );
};

export default SmoothPlastering;
