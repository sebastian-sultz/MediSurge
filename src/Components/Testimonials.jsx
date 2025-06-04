import React from "react";
const Testimonials = ()=>{
    const data = [
    {
      name: "Dr. Asha Verma",
      role: "Cardiologist, Delhi",
      quote:
        "The quality of surgical tools is unmatched. We've trusted them for years without disappointment.",
    },
    {
      name: "PharmaMart",
      role: "Distributor Partner",
      quote:
        "Delivery is always on time and customer support is top-notch. Our clients are happy, so we are too.",
    },
    {
      name: "Dr. Vikram Chauhan",
      role: "Surgeon, Mumbai",
      quote:
        "Precision and durability are what matter most in surgery. These tools deliver both.",
    },
  ];
    return (
    <section className="bg-background py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-secondary/20 p-6 rounded-lg shadow-md text-left"
          >
            <p className="text-text italic mb-4">“{item.quote}”</p>
            <h4 className="text-md font-semibold text-text">{item.name}</h4>
            <p className="text-sm text-text/70">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials