export const siteConfig = {
  name: "Kingpin Auto Sales",
  owner: "Sahil Sekhon",
  tagline: "Where Quality Drives Trust.",
  description:
    "Kingpin Auto Sales is a Regina, Saskatchewan dealership offering hand-picked, quality pre-owned vehicles with honest pricing and personal service.",
  url: "https://www.kingpinautosales.ca",
  phone: "(306) 316-0481",
  phoneHref: "tel:+13063160481",
  email: "kingpinautosalesltd@gmail.com",
  address: {
    street: "2221 1st Avenue",
    city: "Regina",
    province: "SK",
    country: "Canada",
  },
  hours: [
    { days: "Monday – Friday", time: "10:30 AM – 5:30 PM" },
    { days: "Saturday", time: "11:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  mapEmbedSrc: "https://www.google.com/maps?q=2221+1st+Avenue,+Regina,+SK&output=embed",
  social: {
    facebook: "https://facebook.com/kingpinautosales",
    instagram: "https://instagram.com/kingpinautosales",
  },
} as const;
