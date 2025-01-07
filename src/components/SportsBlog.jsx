import React from "react";

const SportsBlog = () => {
  const blogPosts = [
    {
      title: "5 Essential Fitness Tips for Every Athlete",
      excerpt:
        "Discover the top fitness tips that can help you improve your performance in any sport. From stretching to diet, these simple steps will make a huge difference.",
      date: "January 7, 2025",
      link: "https://blog.nasm.org/behavior-change-and-motivation/how-to-make-health-and-fitness-a-lifestyle",
    },
    {
      title: "Top 10 Sports Equipment for 2025",
      excerpt:
        "Looking to upgrade your sports gear? Here are the top 10 products that every athlete should consider buying this year, from shoes to training equipment.",
      date: "January 5, 2025",
      link: "https://www.radial.com/insights/discover-top-trends-in-sporting-goods-in-2025",
    },
    {
      title: "How to Choose the Right Sports Equipment for Your Sport",
      excerpt:
        "Choosing the right sports equipment is crucial to performance and safety. This guide will help you select the perfect gear for your chosen sport.",
      date: "December 30, 2024",
      link: "https://blog.3ds.com/brands/delmia/how-to-choose-the-right-equipment-for-your-business/",
    },
    {
      title: "The Importance of Warm-Up Exercises Before Sports",
      excerpt:
        "Warming up before playing sports is key to preventing injuries and improving performance. Learn some of the best warm-up exercises for athletes.",
      date: "December 28, 2024",
      link: "https://www.nerdfitness.com/blog/warm-up/",
    },
    {
      title: "How to Stay Hydrated During Intense Sports Activities",
      excerpt:
        "Staying hydrated during sports is essential for maintaining peak performance. Here are some tips on how to stay properly hydrated during your workout or game.",
      date: "December 22, 2024",
      link: "https://www.kimshealth.org/trivandrum/blog/stay-hydrated-top-10-remarkable-ways-stay-hydrated/",
    },
    {
      title: "The Best Sports Shoes for Every Type of Athlete",
      excerpt:
        "The right pair of sports shoes can make a world of difference in your performance. Check out our recommendations for the best shoes for various sports.",
      date: "December 18, 2024",
      link: "https://www.outsideonline.com/outdoor-gear/run/best-running-shoes/",
    },
    {
      title: "Nutrition Tips for Athletes: What to Eat for Optimal Performance",
      excerpt:
        "What you eat can have a big impact on your performance. Here are some nutrition tips that will help you fuel your body for sports and improve your results.",
      date: "December 15, 2024",
      link: "https://www.upmc.com/services/orthopaedics/services/sports-medicine/services/nutrition/tips",
    },
    {
      title: "Why Recovery is Just as Important as Training",
      excerpt:
        "Many athletes overlook recovery in their training routine, but it is just as important as the workouts themselves. Learn why rest and recovery matter.",
      date: "December 10, 2024",
      link: "https://www.fitnesseducation.edu.au/blog/health/the-importance-of-recovery/",
    },
   
    
  ];

  return (
   <div className="bg-gray-50">
     <div className="container mx-auto p-6 pb-14 ">
      <h2 className="text-3xl text-center font-bold mt-4 mb-10">Sports Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <a
              href={post.link}
              target="-blank"
              className="text-blue-500 mt-4 inline-block font-semibold"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default SportsBlog;
