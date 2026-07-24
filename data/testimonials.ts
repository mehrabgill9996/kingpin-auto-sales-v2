export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: 5;
  comment: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jordan M.",
    location: "Regina, SK",
    rating: 5,
    comment:
      "Sahil made the whole process simple and honest. No pressure, no surprises — just a great vehicle at a fair price. Highly recommend Kingpin Auto Sales.",
  },
  {
    id: "t2",
    name: "Priya S.",
    location: "Regina, SK",
    rating: 5,
    comment:
      "Bought my first car here and felt completely supported from start to finish. The team answered every question and helped me find exactly what I needed.",
  },
  {
    id: "t3",
    name: "Marcus T.",
    location: "Moose Jaw, SK",
    rating: 5,
    comment:
      "Drove up from Moose Jaw and it was worth every kilometre. Quality vehicle, transparent pricing, and genuine customer care. Five stars all the way.",
  },
];
