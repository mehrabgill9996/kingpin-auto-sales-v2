export type SoldCar = {
  id: string;
  name: string;
  year: number;
  make: string;
  model: string;
  soldPrice: number;
  soldDate: string;
  imagePlaceholder: string;
};

export const soldCars: SoldCar[] = [
  {
    id: "sold-1",
    name: "Sold Vehicle",
    year: 2018,
    make: "Subaru",
    model: "Outback",
    soldPrice: 21999,
    soldDate: "June 2026",
    imagePlaceholder: "/images/cars/suv.jpg",
  },
  {
    id: "sold-2",
    name: "Sold Vehicle",
    year: 2020,
    make: "Honda",
    model: "Accord",
    soldPrice: 24499,
    soldDate: "June 2026",
    imagePlaceholder: "/images/cars/sedan.jpg",
  },
  {
    id: "sold-3",
    name: "Sold Vehicle",
    year: 2019,
    make: "Ram",
    model: "1500",
    soldPrice: 34999,
    soldDate: "May 2026",
    imagePlaceholder: "/images/cars/truck.jpg",
  },
  {
    id: "sold-4",
    name: "Sold Vehicle",
    year: 2017,
    make: "Mercedes-Benz",
    model: "C300",
    soldPrice: 22999,
    soldDate: "May 2026",
    imagePlaceholder: "/images/cars/coupe.jpg",
  },
  {
    id: "sold-5",
    name: "Sold Vehicle",
    year: 2021,
    make: "Hyundai",
    model: "Tucson",
    soldPrice: 26999,
    soldDate: "April 2026",
    imagePlaceholder: "/images/cars/suv.jpg",
  },
  {
    id: "sold-6",
    name: "Sold Vehicle",
    year: 2016,
    make: "Volkswagen",
    model: "Jetta",
    soldPrice: 13499,
    soldDate: "April 2026",
    imagePlaceholder: "/images/cars/sedan.jpg",
  },
];
