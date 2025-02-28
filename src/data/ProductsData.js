import Products from "../Components/Products";

const categories = [
    { title: "Medicines", img: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg" },
    { title: "Personal Care", img: "https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "Health Devices", img: "https://images.pexels.com/photos/6940858/pexels-photo-6940858.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Supplements", img: "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];
  const featuredProducts = [
    { name: "Paracetamol", price: "$10", img: "https://media.istockphoto.com/id/1022216070/photo/packet-of-generic-paracetamol-tablets.jpg?b=1&s=612x612&w=0&k=20&c=yfIbT9O1lQbsDzSGTI02KnqGPNfD_S-2ZkBqAy8-Czk=" },
    { name: "Vitamin C Tablets", price: "$15", img: "https://images.pexels.com/photos/11348080/pexels-photo-11348080.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Thermometer", price: "$25", img: "https://images.pexels.com/photos/3873176/pexels-photo-3873176.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Blood Pressure Monitor", price: "$50", img: "https://images.pexels.com/photos/8088858/pexels-photo-8088858.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const deals = [
    { name: "Diabetes Care Kit", price: "$40", discount: "30% Off", img: "https://images.pexels.com/photos/6940859/pexels-photo-6940859.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Pain Relief Spray", price: "$12", discount: "20% Off", img: "https://images.pexels.com/photos/17605643/pexels-photo-17605643/free-photo-of-spray-painkiller-in-black-bottle.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];


const ProductsList=[
  {
    "id": 1,
    "name": "Paracetamol 500mg",
    "category": "Medicines",
    "price": 50,
    "image": "https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Pain reliever and fever reducer.",
    "stock": true
  },
  {
    "id": 2,
    "name": "Ibuprofen 200mg",
    "category": "Medicines",
    "price": 80,
    "image": "https://media.istockphoto.com/id/1163798570/photo/ibuprofen-medication.jpg?b=1&s=612x612&w=0&k=20&c=5u-gyM6ULXKH19m-BST9ni6ZZWABiznMFwLK2asNHcM=",
    "description": "Used to reduce fever and treat pain or inflammation.",
    "stock": true
  },
  {
    "id": 3,
    "name": "Cough Syrup 100ml",
    "category": "Medicines",
    "price": 120,
    "image": "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Relieves cough and soothes throat irritation.",
    "stock": false
  },
  {
    "id": 4,
    "name": "Vitamin C Tablets",
    "category": "Supplements",
    "price": 250,
    "image": "https://images.pexels.com/photos/30385883/pexels-photo-30385883/free-photo-of-a-pile-of-yellow-vitamin-tablets-on-light-background.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Boosts immunity and improves skin health.",
    "stock": true
  },
  {
    "id": 5,
    "name": "Protein Powder 1kg",
    "category": "Supplements",
    "price": 1500,
    "image": "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "High-quality whey protein for muscle growth.",
    "stock": true
  },
  {
    "id": 6,
    "name": "Hand Sanitizer 100ml",
    "category": "Personal Care",
    "price": 120,
    "image": "https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Kills 99.9% of germs instantly.",
    "stock": true
  },
  {
    "id": 7,
    "name": "Face Mask (Pack of 10)",
    "category": "Personal Care",
    "price": 150,
    "image": "https://images.pexels.com/photos/3786153/pexels-photo-3786153.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Protects against dust, bacteria, and viruses.",
    "stock": true
  },
  {
    "id": 8,
    "name": "Blood Pressure Monitor",
    "category": "Health Devices",
    "price": 1999,
    "image": "https://images.pexels.com/photos/6203474/pexels-photo-6203474.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Digital blood pressure monitor with accurate readings.",
    "stock": false
  },
  {
    "id": 9,
    "name": "Glucometer Kit",
    "category": "Health Devices",
    "price": 2200,
    "image": "https://images.pexels.com/photos/6823519/pexels-photo-6823519.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Measures blood sugar levels with test strips.",
    "stock": true
  },
  {
    "id": 10,
    "name": "Infrared Thermometer",
    "category": "Health Devices",
    "price": 1499,
    "image": "https://images.pexels.com/photos/4021188/pexels-photo-4021188.jpeg?auto=compress&cs=tinysrgb&w=600",
    "description": "Contactless temperature measurement device.",
    "stock": true
  }
]





export {categories, featuredProducts, deals, ProductsList}; ;


