"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const screenshots = [
  { id: 1, title: "Dashboard Overview", src: "/dashboard.png" },
  { id: 2, title: "Booking Management", src: "/booking.png" },
  { id: 3, title: "Payment Processing", src: "/Payments.png" },
  { id: 4, title: "Customer Offers", src: "/Offers.png" },
  { id: 5, title: "Analytics View", src: "/Analytics.png" },
  { id: 6, title: "Settings Panel", src: "/Settings.png" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const screenVariants = {
  hidden: { opacity: 0, x: 200, rotateY: -90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1] as const,
    },
  },
};

export default function PhoneScreens() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 w-full flex items-center justify-start md:justify-center h-[650px] overflow-x-auto md:overflow-visible hide-scrollbar"
      style={{ perspective: "2000px" }}
    >
      <div className="flex px-4 md:px-0 -space-x-48 hover:-space-x-12 transition-all duration-500">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={screenshot.id}
            variants={screenVariants}
            style={{
              transformStyle: "preserve-3d",
              zIndex: screenshots.length - index,
            }}
            className="w-[300px] h-[600px] shrink-0 relative transition-all duration-500 hover:scale-105"
          >
            <div className="w-full h-full relative">
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                fill
                className="object-cover rounded-[40px] p-4"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
