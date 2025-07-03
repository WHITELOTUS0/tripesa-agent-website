"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/animated-background";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Privacy Policy
                </h1>
                <p className="text-gray-300 mb-8 text-lg">
                  Last updated: July 2025
                </p>

                <div className="space-y-8 text-gray-300">
                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Introduction
                    </h2>
                    <p>
                      Welcome to Tripesa Agent. This Privacy Policy explains how
                      Tripesa (&quot;we,&quot; &quot;us,&quot; or
                      &quot;our&quot;) collects, uses, discloses, and protects
                      your information when you use our mobile application,
                      Tripesa Agent (the &quot;Service&quot;). We are committed
                      to protecting your privacy and handling your data in an
                      open and transparent manner.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Information We Collect
                    </h2>
                    <p className="mb-4">
                      We collect information that you provide directly to us,
                      information that is collected automatically, and
                      information from third parties.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                      Information You Provide to Us
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Account Information:</strong> When you create an
                        account, we collect information such as your name, email
                        address, phone number, password, and company details.
                      </li>
                      <li>
                        <strong>Agent Content:</strong> We collect and store the
                        information you create and manage through our Service,
                        including details about your clients, bookings,
                        payments, and offers. You are responsible for ensuring
                        that you have the necessary permissions and consents
                        from your clients to use their data within our Service.
                      </li>
                      <li>
                        <strong>Payment Information:</strong> When you process
                        payments, our third-party payment processors collect
                        your payment information. We do not store your full
                        credit card details on our servers.
                      </li>
                      <li>
                        <strong>Communications:</strong> If you contact us
                        directly, we may receive additional information about
                        you such as your name, email address, phone number, the
                        contents of the message and/or attachments you may send
                        us, and any other information you may choose to provide.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                      Information We Collect Automatically
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Usage Data:</strong> We automatically collect
                        information about your interactions with our Service,
                        such as the features you use, the actions you take, and
                        the time, frequency, and duration of your activities.
                      </li>
                      <li>
                        <strong>Device and Log Information:</strong> We collect
                        information from and about the device you use to access
                        our Service, including hardware model, operating system,
                        IP address, unique device identifiers, and mobile
                        network information.
                      </li>
                      <li>
                        <strong>Cookies and Similar Technologies:</strong> We
                        use cookies and similar tracking technologies to track
                        the activity on our Service and hold certain information
                        to enhance and personalize your experience.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      How We Use Your Information
                    </h2>
                    <p className="mb-4">
                      We use the information we collect for various purposes,
                      including to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, operate, and maintain our Service</li>
                      <li>
                        Process transactions and send you related information,
                        including confirmations and invoices
                      </li>
                      <li>
                        Send you technical notices, updates, security alerts,
                        and support messages
                      </li>
                      <li>
                        Respond to your comments, questions, and requests, and
                        provide customer service
                      </li>
                      <li>
                        Monitor and analyze trends, usage, and activities in
                        connection with our Service
                      </li>
                      <li>
                        Develop new products, services, features, and
                        functionality
                      </li>
                      <li>
                        Personalize our Service by providing content and
                        features that match your interests
                      </li>
                      <li>
                        For security purposes to prevent and detect fraud and
                        abuse
                      </li>
                      <li>
                        Comply with our legal obligations, including requests
                        from law enforcement
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      How We Share Your Information
                    </h2>
                    <p className="mb-4">
                      We may share the information we collect in the following
                      situations:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>With Service Providers:</strong> We may share
                        your information with third-party vendors and service
                        providers that perform services for us, such as cloud
                        hosting, payment processing, and analytics.
                      </li>
                      <li>
                        <strong>For Legal Reasons:</strong> We may disclose your
                        information if required to do so by law or in the good
                        faith belief that such action is necessary to comply
                        with a legal obligation, protect and defend our rights
                        or property, or in urgent circumstances to protect the
                        personal safety of users of the Service or the public.
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> We may share or
                        transfer your information in connection with, or during
                        negotiations of, any merger, sale of company assets,
                        financing, or acquisition of all or a portion of our
                        business to another company.
                      </li>
                      <li>
                        <strong>With Your Consent:</strong> We may disclose your
                        information for any other purpose with your consent.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Data Retention
                    </h2>
                    <p>
                      We retain your personal information for as long as your
                      account is active or as needed to provide you with our
                      services. We will also retain and use your information as
                      necessary to comply with our legal obligations, resolve
                      disputes, and enforce our agreements.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Data Security
                    </h2>
                    <p className="mb-4">
                      We implement a variety of security measures to maintain
                      the safety of your personal information. This includes
                      data encryption in transit and at rest, regular security
                      assessments, and strict access controls. However, please
                      remember that no method of transmission over the Internet,
                      or method of electronic storage, is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Your Privacy Rights
                    </h2>
                    <p className="mb-4">
                      Depending on your location, you may have certain rights
                      regarding your personal information, such as those
                      provided by the GDPR or CCPA. These rights may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        The right to access, update, or delete the information
                        we have on you.
                      </li>
                      <li>
                        The right of rectification if your information is
                        inaccurate or incomplete.
                      </li>
                      <li>
                        The right to object to our processing of your personal
                        information.
                      </li>
                      <li>
                        The right to request that we restrict the processing of
                        your personal information.
                      </li>
                      <li>
                        The right to data portability for the information you
                        provide to us.
                      </li>
                      <li>
                        The right to withdraw consent at any time where we
                        relied on your consent to process your information.
                      </li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us using the
                      contact information below.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Children&apos;s Privacy
                    </h2>
                    <p>
                      Our Service is not directed to individuals under the age
                      of 18. We do not knowingly collect personal identifiable
                      information from children under 18. If we become aware
                      that we have collected personal information from a child
                      under 18 without verification of parental consent, we take
                      steps to remove that information from our servers.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      International Data Transfers
                    </h2>
                    <p>
                      Your information, including personal data, may be
                      transferred to — and maintained on — computers located
                      outside of your state, province, country, or other
                      governmental jurisdiction where the data protection laws
                      may differ from those from your jurisdiction. We will take
                      all steps reasonably necessary to ensure that your data is
                      treated securely and in accordance with this Privacy
                      Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Changes to This Privacy Policy
                    </h2>
                    <p>
                      We may update this Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page and updating the &quot;Last
                      updated&quot; date at the top of this Privacy Policy. You
                      are advised to review this Privacy Policy periodically for
                      any changes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Contact Us
                    </h2>
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy,
                      please contact us:
                    </p>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <p className="mb-2">
                        <strong>Email:</strong> hello@tripesa.co
                      </p>
                      <p className="mb-2">
                        <strong>Phone:</strong>
                        <br />
                        +256 200 948 137
                        <br />
                        +256 200 948 139
                        <br />
                        +254 702 024627
                      </p>
                      <p className="mb-2">
                        <strong>Kampala Office:</strong>
                        <br />
                        Plot 27, Bandali Rise, Bugolobi, Kampala, Uganda
                      </p>
                      <p>
                        <strong>Nairobi Office:</strong>
                        <br />
                        Western Heights – Karuna Road 10th Floor, Westlands,
                        Nairobi
                      </p>
                    </div>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-teal-600 to-coral-600 hover:from-teal-700 hover:to-coral-700 text-white px-8 py-4 text-lg rounded-2xl">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
