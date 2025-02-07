import Image from "next/image";
import { features } from "./featureData/feature";

export default function Features() {
  return (
    <div className="container mx-auto md:max-w-screen-xl">
    <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-4">
    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
        Seamless & Secure Patient Record Management  
    </h1>

    {/* Description */}
    <p className="text-md md:text-lg text-gray-600 max-w-screen-md mb-6">
        OPRMS (Online Patient Record Management System) streamlines patient data management with a secure, efficient, and user-friendly platform. From appointment scheduling to medical history tracking, OPRMS ensures seamless access to critical records for improved healthcare operations.  
    </p>
    </section>
      
     <section>
     <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col px-6 lg:px-12 xl:px-0 lg:flex-row items-center gap-8 ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
           <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl">
            <Image
                src={feature.image}
                alt={feature.title}
                width={900}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            </div>
            <div className="text-center lg:text-left lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-primary-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
     </section>
    </div>
  );
}
