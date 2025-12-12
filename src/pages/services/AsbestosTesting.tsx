import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService3 from "@/assets/artex-service-3.jpg";

const AsbestosTesting = () => {
  const taskList = [
    "Sample collection",
    "UKAS accredited lab testing",
    "Full analysis report",
    "Risk assessment",
    "Removal recommendations",
    "HSE compliant procedures",
    "Safe disposal guidance",
    "Certification provided",
  ];

  const productsDescription = [
    "If your property was built before 2000, your artex coating may contain asbestos. Our comprehensive asbestos testing service provides peace of mind by determining whether your textured coating contains this hazardous material.",
    "We collect samples carefully following HSE guidelines and send them to UKAS accredited laboratories for analysis. Results are typically available within 2-3 working days, and we provide a full report with clear recommendations.",
    "If asbestos is detected, we can advise on the safest removal options and connect you with licensed asbestos removal contractors. Many artex coatings are asbestos-free and can be safely removed using our standard procedures.",
  ];

  return (
    <ServicePageLayout
      title="Asbestos Testing"
      subtitle="Comprehensive asbestos testing for artex and textured coatings. Essential safety testing before any removal work begins."
      heroImage={artexService3}
      description="Certified Asbestos Testing Service"
      taskList={taskList}
      productsTitle="Certified Asbestos Testing Service"
      productsDescription={productsDescription}
    />
  );
};

export default AsbestosTesting;
