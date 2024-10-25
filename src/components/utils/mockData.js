// Sponsors logo
import gucci from "../../assets/images/gucci.webp";
import zara from "../../assets/images/zara.webp";
import prada from "../../assets/images/prada.webp";

export const headerData = [
  { id: 1, title: "Shop", options: ["option1", "option2", "option", 3] },
];

export const navLinks = [
  {
    id: 1,
    label: "Shop",
    dropdown: ["Fomals", "Casuals", "Party"],
  },
  { id: 2, label: "On Sale", path: "/on sale" },
  { id: 3, label: "New Arrivals", path: "/new arrivals" },
  { id: 4, label: "Brands", path: "/brand" },
];

export const heroSectionCounter = [
  { id: 1, count: "200", para: "International Brands" },
  { id: 2, count: "2,000", para: "High-Quality Products" },
  { id: 3, count: "30,000", para: "High-Quality Products" },
];

export const sponsorsIMG = [
  { id: 1, image: zara, alt: "zara" },
  { id: 2, image: gucci, alt: "gucci" },
  { id: 3, image: prada, alt: "prada" },
];
