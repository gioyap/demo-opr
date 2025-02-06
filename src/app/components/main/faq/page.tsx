"use client"
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";

const FAQs = () => {
  return (
    <section className="my-16 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:max-w-screen-2xl mx-auto">
      {/* Title and description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy mb-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about OPRMS (Online Patient Record Management System).
        </p>
      </div>

      <div className="space-y-6 text-left mx-auto md:max-w-screen-sm lg:max-w-screen-md">
        {/* Question 1 */}
        <Drawer>
          <DrawerTrigger className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-navy mb-2">
              What is OPRMS and how can it benefit my department?
            </h3>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>What is OPRMS and how can it benefit my department?</DrawerTitle>
              <DrawerDescription>
                OPRMS (Online Patient Record Management System) is a secure and efficient platform for managing patient records, appointments, X-ray results, and diagnoses. It streamlines workflow and improves the accessibility of patient data, leading to better collaboration and quicker decision-making across departments.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Question 2 */}
        <Drawer>
          <DrawerTrigger className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-navy mb-2">
              How secure is patient data in OPRMS?
            </h3>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>How secure is patient data in OPRMS?</DrawerTitle>
              <DrawerDescription>
                OPRMS uses advanced encryption techniques to ensure the security of all patient data. With role-based access controls, only authorized personnel can view or update sensitive information, ensuring full compliance with privacy regulations.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Question 3 */}
        <Drawer>
          <DrawerTrigger className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-navy mb-2">
              How easy is it to integrate OPRMS with existing systems in my hospital?
            </h3>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>How easy is it to integrate OPRMS with existing systems in my hospital?</DrawerTitle>
              <DrawerDescription>
                OPRMS is designed to integrate seamlessly with existing healthcare systems. Whether you use EHRs or other patient management tools, OPRMS can work in harmony with your current infrastructure to enhance efficiency without disrupting workflows.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Question 4 */}
        <Drawer>
          <DrawerTrigger className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-navy mb-2">
              Can I access OPRMS remotely or only within the office?
            </h3>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Can I access OPRMS remotely or only within the office?</DrawerTitle>
              <DrawerDescription>
                OPRMS is a cloud-based platform, allowing you to securely access patient data and manage records remotely. Whether you're at the hospital or working from home, you can always stay connected to the system as long as you have an internet connection.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Question 5 */}
        <Drawer>
          <DrawerTrigger className="bg-white shadow-lg rounded-lg p-6 cursor-pointer">
            <h3 className="text-2xl font-semibold text-navy mb-2">
              What support options are available if I encounter issues with OPRMS?
            </h3>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>What support options are available if I encounter issues with OPRMS?</DrawerTitle>
              <DrawerDescription>
                OPRMS provides 24/7 customer support through multiple channels, including email, live chat, and phone. Our team of experts is always ready to assist you with any questions or technical difficulties you may encounter.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default FAQs;
