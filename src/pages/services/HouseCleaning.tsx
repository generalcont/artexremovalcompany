import { ServicePageLayout } from "@/components/ServicePageLayout";
import houseCleaningImage from "@/assets/house-cleaning.jpg";

const HouseCleaning = () => {
  const taskList = [
    "Washing dishes",
    "Mopping & vacuuming floors",
    "Organizing",
    "Sanitizing surfaces",
    "Dusting",
    "Upholstery cleaning",
    "Making up beds",
    "Garbage removal",
    "Window washing",
    "Spot and stain removal",
  ];

  const productsDescription = [
    "Our eco-friendly house cleaning service goes above and beyond to ensure trust, safety, and exceptional quality. Each team member undergoes a thorough personal interview, rigorous screening, and extensive identity and background verification, providing you with peace of mind.",
    "Our staff is specially trained in eco-friendly cleaning methods, delivering top-tier results that align with your values. With a strong reputation and glowing testimonials from environmentally conscious clients, we're proud to be one of NYC's leading green cleaning providers.",
    "When you choose our service, your home will be cared for by the most skilled and eco-conscious cleaners in the city.",
  ];

  return (
    <ServicePageLayout
      title="House Cleaning"
      subtitle="Have you thought about hiring professional cleaners to keep your home spotless?"
      heroImage={houseCleaningImage}
      description="Save Time and Stress with Professional Home Cleaning"
      taskList={taskList}
      productsTitle="Save Time and Stress with Professional Home Cleaning"
      productsDescription={productsDescription}
    />
  );
};

export default HouseCleaning;
