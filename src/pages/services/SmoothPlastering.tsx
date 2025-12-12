import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService2 from "@/assets/artex-service-2.jpg";

const SmoothPlastering = () => {
  const taskList = [
    "Surface inspection",
    "Crack and hole repair",
    "PVA priming",
    "Multi-coat skim finish",
    "Sanding and smoothing",
    "Edge finishing",
    "Final inspection",
    "Ready for decoration",
  ];

  const productsDescription = [
    "Our smooth plastering service delivers the perfect finish after artex removal. Our skilled plasterers apply professional-grade skim coats to create a flawless, modern ceiling that's ready for painting or any decorative finish you choose.",
    "We use only premium plastering materials to ensure a durable, crack-resistant finish that will last for years. The skim coat is applied in multiple layers, with each layer carefully smoothed and dried before the next application.",
    "The result is a beautifully smooth ceiling that completely transforms the look of your room. Whether you're planning to paint, wallpaper, or simply leave it white, your new ceiling will be the perfect canvas.",
  ];

  return (
    <ServicePageLayout
      title="Smooth Plastering"
      subtitle="Achieve a flawless smooth ceiling finish with our expert plastering service. The perfect finishing touch after artex removal."
      heroImage={artexService2}
      description="Professional Smooth Plastering Service"
      taskList={taskList}
      productsTitle="Professional Smooth Plastering Service"
      productsDescription={productsDescription}
    />
  );
};

export default SmoothPlastering;
