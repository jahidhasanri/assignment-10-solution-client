import React from "react";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "https://i.ibb.co.com/LJbFnfC/young-bearded-man-with-striped-shirt-273609-5677.jpg", 
      rating: "⭐⭐⭐⭐⭐",
      testimonial: "EquiSports offers amazing quality products and their customer service is top-notch!",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://i.ibb.co.com/mqrmpSV/pexels-italo-melo-881954-2379004.jpg",
      rating: "⭐⭐⭐⭐",
      testimonial: "I found the perfect gear for my tennis practice. Highly recommend this store!",
    },
    {
      id: 3,
      name: "Michael Brown",
      image: "https://i.ibb.co.com/QYVcySF/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-g.jpg",
      rating: "⭐⭐⭐⭐⭐",
      testimonial: "Fast delivery and excellent equipment. Will definitely shop again!",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://i.ibb.co.com/7tvLwCK/41fcf2fd-portrait-2865605-1920-1024x683.jpg",
      rating: "⭐⭐⭐⭐⭐",
      testimonial: "The customization options are fantastic. Loved the extra grip on my bat!",
    },
  ];

  return (
    <div className="bg-gray-100 w-full mx-auto ">
      <h2 className="text-center text-3xl font-bold pt-11 mb-11">Customer Testimonials</h2>
      <div className="container mx-auto pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
        {testimonials.map((customer) => (
          <div
            key={customer.id}
            className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
               
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mb-4"
              />
                
              <h3 className="text-xl font-semibold">{customer.name}</h3>
              <p className="text-yellow-500">{customer.rating}</p>
              <p className="text-gray-600 mt-2">{customer.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
