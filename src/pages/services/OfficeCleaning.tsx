import { ServicePageLayout } from "@/components/ServicePageLayout";
import officeCleaningImage from "@/assets/office-cleaning.jpg";

const OfficeCleaning = () => {
  const taskList = [
    "Desk and workstation cleaning",
    "Carpet vacuuming",
    "Trash removal",
    "Floor mopping",
    "Restroom sanitization",
    "Window cleaning",
    "Kitchen/break room cleaning",
    "Conference room cleaning",
    "Dusting surfaces",
    "Disinfecting high-touch areas",
  ];

  const productsDescription = [
    "A clean office environment is essential for productivity, employee health, and making a positive impression on clients. Our professional office cleaning service ensures your workspace remains spotless and hygienic.",
    "We understand that every business has unique needs and schedules. That's why we offer flexible cleaning plans that can be customized to fit your requirements, whether you need daily, weekly, or monthly cleaning services.",
    "Our trained professionals use commercial-grade, eco-friendly products that effectively eliminate germs and allergens while being safe for your employees and the environment.",
  ];

  return (
    <ServicePageLayout
      title="Office Cleaning"
      subtitle="Create a productive and healthy workspace with our professional office cleaning services."
      heroImage={officeCleaningImage}
      description="Professional Commercial Cleaning Solutions"
      taskList={taskList}
      productsTitle="Professional Commercial Cleaning Solutions"
      productsDescription={productsDescription}
    />
  );
};

export default OfficeCleaning;
