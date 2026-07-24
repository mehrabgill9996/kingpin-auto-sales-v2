export type Transmission = "Automatic" | "Manual";

export type Car = {
  id: string;
  name: string;
  slug: string;
  price: number;
  year: number;
  make: string;
  model: string;
  mileage: number;
  transmission: Transmission;
  fuelType: string;
  description: string;
  imagePlaceholder: string;
};

export const cars: Car[] = [
  {
    id: "car-1",
    name: "Car 1",
    slug: "car-1",
    price: 16999,
    year: 2019,
    make: "Honda",
    model: "Civic",
    mileage: 62500,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "This 2019 Honda Civic is a fuel-efficient, reliable sedan that's perfect for daily commuting around Regina. It comes with a clean history, a well-maintained interior, and Honda's legendary dependability. A great choice for first-time buyers or anyone looking for low-cost, low-hassle ownership.",
    imagePlaceholder: "/images/cars/sedan.jpg",
  },
  {
    id: "car-2",
    name: "Car 2",
    slug: "car-2",
    price: 28499,
    year: 2021,
    make: "Toyota",
    model: "RAV4",
    mileage: 38200,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "A spacious and versatile 2021 Toyota RAV4 SUV, ideal for Saskatchewan winters with confident all-weather handling. Low mileage and a spotless maintenance record make this one of our most popular family vehicles. Comes loaded with modern safety features and generous cargo space.",
    imagePlaceholder: "/images/cars/suv.jpg",
  },
  {
    id: "car-3",
    name: "Car 3",
    slug: "car-3",
    price: 32999,
    year: 2018,
    make: "Ford",
    model: "F-150",
    mileage: 71300,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "This 2018 Ford F-150 combines serious towing capability with everyday comfort, making it a favourite among Regina tradespeople and families alike. It's been well cared for, with strong tires, a clean bed liner, and plenty of power under the hood. Ready to work or play.",
    imagePlaceholder: "/images/cars/truck.jpg",
  },
  {
    id: "car-4",
    name: "Car 4",
    slug: "car-4",
    price: 24999,
    year: 2017,
    make: "BMW",
    model: "4 Series",
    mileage: 54800,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "A sharp-looking 2017 BMW 4 Series coupe that blends European style with a genuinely fun driving experience. The cabin features premium materials and thoughtful tech, while the tuned suspension keeps every drive engaging. A standout pick for buyers who want something a little different.",
    imagePlaceholder: "/images/cars/coupe.jpg",
  },
  {
    id: "car-5",
    name: "Car 5",
    slug: "car-5",
    price: 10499,
    year: 2015,
    make: "Toyota",
    model: "Camry",
    mileage: 98700,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "Looking for maximum value? This 2015 Toyota Camry offers Toyota's renowned reliability at an approachable price point. Higher mileage but consistently serviced, this sedan is a smart, budget-friendly option for students, new drivers, or anyone needing a dependable second car.",
    imagePlaceholder: "/images/cars/sedan.jpg",
  },
  {
    id: "car-6",
    name: "Car 6",
    slug: "car-6",
    price: 27999,
    year: 2020,
    make: "Jeep",
    model: "Grand Cherokee",
    mileage: 45600,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "This 2020 Jeep Grand Cherokee delivers a comfortable ride with genuine off-road capability, making it a great match for Saskatchewan's varied roads and seasons. It's equipped with a roomy interior, strong towing capacity, and the kind of presence that turns heads on the lot.",
    imagePlaceholder: "/images/cars/suv.jpg",
  },
  {
    id: "car-7",
    name: "Car 7",
    slug: "car-7",
    price: 41999,
    year: 2022,
    make: "Chevrolet",
    model: "Silverado",
    mileage: 21400,
    transmission: "Automatic",
    fuelType: "Diesel",
    description:
      "A near-new 2022 Chevrolet Silverado with a fuel-efficient diesel engine and impressively low mileage. This truck is built for serious hauling and towing without sacrificing everyday comfort, making it one of the top picks in our current inventory for work and weekend adventures alike.",
    imagePlaceholder: "/images/cars/truck.jpg",
  },
  {
    id: "car-8",
    name: "Car 8",
    slug: "car-8",
    price: 19999,
    year: 2016,
    make: "Audi",
    model: "A5",
    mileage: 67200,
    transmission: "Manual",
    fuelType: "Gasoline",
    description:
      "This 2016 Audi A5 is a rare manual-transmission find for enthusiasts who want a genuinely engaging drive. Its elegant coupe silhouette pairs with a well-kept cabin and precise handling, offering premium European flair at a used-car price.",
    imagePlaceholder: "/images/cars/coupe.jpg",
  },
  {
    id: "car-9",
    name: "Car 9",
    slug: "car-9",
    price: 23499,
    year: 2023,
    make: "Mazda",
    model: "3",
    mileage: 8900,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "Practically brand new, this 2023 Mazda 3 offers refined styling, a premium-feeling interior, and confident handling in a compact, efficient package. With only a few thousand kilometres on the odometer, it drives like new and comes backed by remaining factory coverage.",
    imagePlaceholder: "/images/cars/sedan.jpg",
  },
  {
    id: "car-10",
    name: "Car 10",
    slug: "car-10",
    price: 22999,
    year: 2019,
    make: "Honda",
    model: "CR-V",
    mileage: 51200,
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "A dependable 2019 Honda CR-V that checks every box for Regina families: spacious seating, easy-fold cargo area, and Honda's trusted reliability. Well maintained with a clean interior, this SUV is ready for school runs, road trips, and everything in between.",
    imagePlaceholder: "/images/cars/suv.jpg",
  },
];
