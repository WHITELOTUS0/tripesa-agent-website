"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  Calendar,
  Gift,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/animated-background";
import { useState } from "react";

const features = [
  {
    icon: Calendar,
    title: "Track Bookings",
    description:
      "Monitor all your bookings in real-time with detailed analytics and status updates",
  },
  {
    icon: CreditCard,
    title: "Create Payments",
    description:
      "Secure payment processing on the go with multiple payment gateway integrations",
  },
  {
    icon: Smartphone,
    title: "Manage Bookings",
    description:
      "Full booking management capabilities with drag-and-drop scheduling interface",
  },
  {
    icon: Gift,
    title: "Make Offers",
    description:
      "Create and send custom offers to clients with dynamic pricing and packages",
  },
];

const screenshots = [
  { id: 1, title: "Dashboard Overview", src: "/dashboard.png" },
  { id: 2, title: "Booking Management", src: "/booking.png" },
  { id: 3, title: "Payment Processing", src: "/Payments.png" },
  { id: 4, title: "Customer Offers", src: "/Offers.png" },
  { id: 5, title: "Analytics View", src: "/Analytics.png" },
  { id: 6, title: "Settings Panel", src: "/Settings.png" },
];

const whyMobilePoints = [
  "Access your business data anywhere, anytime",
  "Real-time push notifications for new bookings",
  "Instant payment processing on the field",
  "Quick response to customer inquiries",
  "Offline mode for areas with poor connectivity",
  "Biometric security for enhanced protection",
];

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Tripesa Agent
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/privacy">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Privacy Policy
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Manage Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-coral-400">
                  Business
                </span>{" "}
                On The Go
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The mobile app that empowers agents to track bookings, create
                payments, manage bookings, and make offers - anywhere, anytime
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/English.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="cursor-pointer"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="/agent-on-phone.jpg"
                  alt="Tripesa Agent App Mockup"
                  width={500}
                  height={750}
                  className="mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-coral-400/20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-coral-400">
                Modern Agents
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your business efficiently and
              professionally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-coral-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See It In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-coral-400">
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a look at our intuitive interface designed for agents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                layoutId={`card-${screenshot.src}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(screenshot.src)}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.title}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white">
                        {screenshot.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mobile Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-coral-400">
                  Mobile?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                While our web platform is powerful, our mobile app takes your
                business management to the next level with these exclusive
                benefits:
              </p>

              <div className="space-y-4">
                {whyMobilePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full"></div>
                    <p className="text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button className="bg-gradient-to-r from-teal-600 to-coral-600 hover:from-teal-700 hover:to-coral-700 text-white px-8 py-4 text-lg rounded-2xl">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8">
                <CardContent className="p-0">
                  <Image
                    src="/man-on-phone.jpg"
                    alt="Mobile App Benefits"
                    width={400}
                    height={500}
                    className="w-full rounded-2xl"
                  />
                </CardContent>
              </Card>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-coral-400/20 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-12">
              <CardContent className="p-0">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-coral-400">
                    Business?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of agents who trust Tripesa Agent to manage
                  their business efficiently
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/Download_on_the_App_Store_Badge.svg"
                      alt="Download on the App Store"
                      width={180}
                      height={60}
                      className="cursor-pointer"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/English.svg"
                      alt="Get it on Google Play"
                      width={180}
                      height={60}
                      className="cursor-pointer"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Tripesa Agent
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses worldwide with cutting-edge mobile
              technology
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <p>&copy; 2025 Tripesa. All rights reserved.</p>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`card-${selectedImage}`}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Screenshot"
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 h-10 w-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
