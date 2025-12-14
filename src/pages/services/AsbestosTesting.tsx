import { ServicePageLayout } from "@/components/ServicePageLayout";
import artexService3 from "@/assets/artex-service-3.jpg";

const AsbestosTesting = () => {
  const taskList = [
    "Careful sample collection from textured areas",
    "Laboratory analysis at UKAS accredited facility",
    "Testing for all six asbestos fibre types",
    "Detailed written report within 2-3 days",
    "Clear interpretation of results",
    "Risk assessment and recommendations",
    "Guidance on next steps if positive",
    "Certificate of analysis provided",
  ];

  const productsDescription = [
    "If your home was built or renovated before 2000, there's a possibility your artex contains asbestos. White asbestos (chrysotile) was commonly mixed into artex compounds until it was banned in 1999. Testing before removal isn't just recommended – it's essential for your family's safety.",
    "We collect small samples carefully following HSE Control of Asbestos Regulations 2012. Samples are sealed, labelled, and sent to a UKAS accredited laboratory where technicians use polarised light microscopy and dispersion staining to identify any asbestos fibres present.",
    "Most artex coatings we test are asbestos-free, which means removal can proceed using our standard methods. If asbestos is detected, the concentration levels and your specific circumstances determine the best course of action. Low-risk asbestos artex can often be encapsulated or carefully removed by licensed contractors.",
    "Testing typically costs a fraction of removal work but provides invaluable peace of mind. We explain your results clearly in plain English, not technical jargon, so you can make informed decisions about your property.",
  ];

  return (
    <ServicePageLayout
      title="Asbestos Testing"
      subtitle="Essential safety testing before artex removal. UKAS accredited laboratory analysis with clear, honest guidance on your results."
      heroImage={artexService3}
      description="Certified Asbestos Testing Service"
      taskList={taskList}
      productsTitle="Understanding Asbestos Testing"
      productsDescription={productsDescription}
      relatedServices={[
        { name: "Artex Ceiling Removal", href: "/services/artex-ceiling-removal" },
        { name: "Wall Artex Removal", href: "/services/wall-artex-removal" },
        { name: "Textured Coating Removal", href: "/services/textured-coating-removal" },
      ]}
    />
  );
};

export default AsbestosTesting;
