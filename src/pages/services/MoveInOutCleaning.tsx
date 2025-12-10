import { ServicePageLayout } from "@/components/ServicePageLayout";
import moveCleaningImage from "@/assets/move-cleaning.jpg";

const MoveInOutCleaning = () => {
  const taskList = [
    "Complete wall washing",
    "Inside closet cleaning",
    "Deep floor cleaning",
    "All surface sanitization",
    "Window track cleaning",
    "Appliance interior cleaning",
    "Cabinet interior wiping",
    "Light switch sanitizing",
    "Baseboard scrubbing",
    "Bathroom deep cleaning",
  ];

  const productsDescription = [
    "Moving is stressful enough without worrying about cleaning. Whether you're moving into a new place or leaving your old one, our move in/out cleaning service ensures the space is spotless and ready for its next chapter.",
    "For move-out cleaning, we help you get your security deposit back by restoring the property to its original condition. Our thorough cleaning covers every surface, from inside cabinets to behind appliances.",
    "For move-in cleaning, we ensure your new home is completely sanitized and fresh before you unpack your first box. Start your new chapter in a perfectly clean environment.",
  ];

  return (
    <ServicePageLayout
      title="Move In/Out Cleaning"
      subtitle="Make your move stress-free with our comprehensive move in/out cleaning service."
      heroImage={moveCleaningImage}
      description="Start Fresh in Your New Space"
      taskList={taskList}
      productsTitle="Start Fresh in Your New Space"
      productsDescription={productsDescription}
    />
  );
};

export default MoveInOutCleaning;
