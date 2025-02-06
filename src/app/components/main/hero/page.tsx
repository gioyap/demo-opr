import React from "react";

const Hero = () => {
  return (
    <div>
        <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Online Patient Record Management System
      </h1>

      {/* Description */}
      <p className="text-lg text-primary-foreground max-w-xl mb-6">
        A secure and efficient platform to manage patient records, appointments, and medical history with ease.
      </p>

      {/* Feature Button */}
      <a href="../feature" className="px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-primary/80 transition">
        Features
      </a>
    </section>

     {/* Product Image Section */}
     <section className="h-screen">
        <img 
          src="/user.jfif"
          alt="User page"
          className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16"
        />
      </section>

        {/* Selling Title and Description */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-3xl font-bold mb-4">
          Empower Your Healthcare Team with Seamless Patient Management
        </h2>
        <p className="text-lg text-primary-foreground max-w-3xl mx-auto">
          With OPRMS, radiologic technologists can easily input patient data along with the results of their X-rays, while doctors can add diagnoses in real-time. Our system ensures that all information is securely stored and easily accessible, making the healthcare process faster, safer, and more efficient.
        </p>
      </section>
    </div>
  );
};

export default Hero;
