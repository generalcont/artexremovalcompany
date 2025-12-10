import { ServicePageLayout } from "@/components/ServicePageLayout";
import deepCleaningImage from "@/assets/deep-cleaning.jpg";

const DeepCleaning = () => {
  const taskList = [
    "Behind and under furniture cleaning",
    "Carpet deep cleaning",
    "Baseboard washing",
    "Ceiling fan cleaning",
    "Inside cabinet cleaning",
    "Appliance deep cleaning",
    "Grout scrubbing",
    "Vent and air duct cleaning",
    "Light fixture cleaning",
    "Upholstery steam cleaning",
  ];

  const productsDescription = [
    "Sometimes regular cleaning isn't enough. Our deep cleaning service tackles the dirt and grime that accumulates in hard-to-reach places over time. We go beyond surface cleaning to ensure every corner of your space is thoroughly sanitized.",
    "Deep cleaning is perfect for seasonal refreshes, preparing for special events, or as a first-time cleaning before transitioning to regular maintenance. Our team uses specialized equipment and techniques to restore your space to its pristine condition.",
    "From scrubbing tile grout to cleaning behind appliances, we leave no stone unturned. Experience the difference a thorough deep clean can make in your home or office.",
  ];

  return (
    <ServicePageLayout
      title="Deep Cleaning"
      subtitle="Get your space thoroughly cleaned with our comprehensive deep cleaning service."
      heroImage={deepCleaningImage}
      description="Thorough Cleaning for Every Corner"
      taskList={taskList}
      productsTitle="Thorough Cleaning for Every Corner"
      productsDescription={productsDescription}
    />
  );
};

export default DeepCleaning;
