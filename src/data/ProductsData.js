import Products from "../Components/Products";

const categories = [
  { title: "Medicines", image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg" },
  { title: "Personal Care", image: "https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { title: "Health Devices", image: "https://images.pexels.com/photos/6940858/pexels-photo-6940858.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Supplements", image: "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Baby Care", image: "https://images.pexels.com/photos/3933272/pexels-photo-3933272.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Skin Care", image: "https://images.pexels.com/photos/31110091/pexels-photo-31110091/free-photo-of-vitamin-e-skincare-cream-with-natural-ingredients.png?auto=compress&cs=tinysrgb&w=600" },
  { title: "Fitness & Wellness", image: "https://images.pexels.com/photos/4397838/pexels-photo-4397838.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Ayurvedic & Herbal", image: "https://images.pexels.com/photos/6978215/pexels-photo-6978215.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Diabetic Care", image: "https://images.pexels.com/photos/6823509/pexels-photo-6823509.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const featuredProducts = [
  {
    id: 12,
    name: "Paracetamol",
    price: "30",
    image: "https://media.istockphoto.com/id/1022216070/photo/packet-of-generic-paracetamol-tablets.jpg?b=1&s=612x612&w=0&k=20&c=yfIbT9O1lQbsDzSGTI02KnqGPNfD_S-2ZkBqAy8-Czk=",
    description: "Pain reliever and fever reducer.",
    stock: true,
  },
  {
    id: 13,
    name: "Vitamin C Tablets",
    price: "100",
    image: "https://images.pexels.com/photos/11348080/pexels-photo-11348080.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Boosts immunity and improves skin health.",
    stock: true,
  },
  {
    id: 14,
    name: "Thermometer",
    price: "2000",
    image: "https://images.pexels.com/photos/3873176/pexels-photo-3873176.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Digital thermometer for accurate temperature readings.",
    stock: true,
  },
  {
    id: 15,
    name: "Blood Pressure Monitor",
    price: "1500",
    image: "https://images.pexels.com/photos/8088858/pexels-photo-8088858.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Digital blood pressure monitor with accurate readings.",
    stock: true,
  },
  {
    id: 16,
    name: "Multivitamin Capsules",
    price: "500",
    image: "https://images.pexels.com/photos/7615567/pexels-photo-7615567.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Complete daily nutrition for overall well-being.",
    stock: true,
  },
];

const deals = [
  {
    id: 17,
    name: "Diabetes Care Kit",
    price: "400",
    discount: "30% Off",
    image: "https://images.pexels.com/photos/6940859/pexels-photo-6940859.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Complete kit for monitoring blood sugar levels.",
    stock: true,
  },
  {
    id: 18,
    name: "Pain Relief Spray",
    price: "120",
    discount: "20% Off",
    image: "https://images.pexels.com/photos/17605643/pexels-photo-17605643/free-photo-of-spray-painkiller-in-black-bottle.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Instant relief from muscle and joint pain.",
    stock: true,
  },
  {
    id: 19,
    name: "Hair Growth Oil",
    price: "350",
    discount: "15% Off",
    image: "https://media.istockphoto.com/id/2148447954/photo/natural-spray-for-hair-growth-with-herbs-in-hands.jpg?s=612x612&w=0&k=20&c=iCsilXDSEft0V5coTpG18FTXS5S7GczKRJelXvxZas8=",
    description: "Nourishes scalp and promotes hair growth.",
    stock: true,
  },
];

  const ProductsList = [

    { id: 1, name: "Paracetamol 500mg", category: "Medicines", price: 50, image: "https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Pain reliever and fever reducer.", stock: true },
    { id: 2, name: "Ibuprofen 200mg", category: "Medicines", price: 80, image: "https://media.istockphoto.com/id/1163798570/photo/ibuprofen-medication.jpg?b=1&s=612x612&w=0&k=20&c=5u-gyM6ULXKH19m-BST9ni6ZZWABiznMFwLK2asNHcM=", description: "Used to reduce fever and treat pain or inflammation.", stock: true },
    { id: 3, name: "Cough Syrup 100ml", category: "Medicines", price: 120, image: "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Relieves cough and soothes throat irritation.", stock: false },
  
    { id: 4, name: "Vitamin C Tablets", category: "Supplements", price: 250, image: "https://images.pexels.com/photos/30385883/pexels-photo-30385883/free-photo-of-a-pile-of-yellow-vitamin-tablets-on-light-background.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Boosts immunity and improves skin health.", stock: true },
    { id: 5, name: "Protein Powder 1kg", category: "Supplements", price: 1500, image: "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&w=600", description: "High-quality whey protein for muscle growth.", stock: true },
  
    { id: 6, name: "Hand Sanitizer 100ml", category: "Personal Care", price: 120, image: "https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Kills 99.9% of germs instantly.", stock: true },
    { id: 7, name: "Face Mask (Pack of 10)", category: "Personal Care", price: 150, image: "https://images.pexels.com/photos/3786153/pexels-photo-3786153.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Protects against dust, bacteria, and viruses.", stock: true },

    { id: 8, name: "Blood Pressure Monitor", category: "Health Devices", price: 1999, image: "https://images.pexels.com/photos/6203474/pexels-photo-6203474.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Digital blood pressure monitor with accurate readings.", stock: false },
    { id: 9, name: "Glucometer Kit", category: "Health Devices", price: 2200, image: "https://images.pexels.com/photos/6823519/pexels-photo-6823519.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Measures blood sugar levels with test strips.", stock: true },
    { id: 10, name: "Infrared Thermometer", category: "Health Devices", price: 1499, image: "https://images.pexels.com/photos/4021188/pexels-photo-4021188.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Contactless temperature measurement device.", stock: true },
  
    { id: 11, name: "Baby Diapers (Pack of 20)", category: "Baby Care", price: 400, image: "https://images.pexels.com/photos/20886783/pexels-photo-20886783/free-photo-of-close-up-of-a-newborn-baby-lying-on-a-soft-blanket.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Soft and absorbent diapers for babies.", stock: true },
    { id: 12, name: "Baby Wipes (Pack of 80)", category: "Baby Care", price: 150, image: "https://media.istockphoto.com/id/152145349/photo/baby-wipes.jpg?s=612x612&w=0&k=20&c=8opHBO6IDoKKuzF3SHpTsyQbS14Z0CwBKkw_KSiYMe8=", description: "Gentle and safe wipes for babies.", stock: true },
  
    { id: 13, name: "Aloe Vera Gel 200ml", category: "Skin Care", price: 250, image: "https://images.pexels.com/photos/14798574/pexels-photo-14798574.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Soothes and hydrates the skin naturally.", stock: true },
    { id: 14, name: "Moisturizing Lotion 500ml", category: "Skin Care", price: 350, image: "https://images.pexels.com/photos/31110093/pexels-photo-31110093/free-photo-of-neutrogena-skincare-products-with-floral-arrangement.png?auto=compress&cs=tinysrgb&w=600", description: "Nourishes and protects dry skin.", stock: true },
  
    { id: 15, name: "Yoga Mat", category: "Fitness & Wellness", price: 1200, image: "https://media.istockphoto.com/id/1317688319/photo/close-up-of-female-hands-folding-blue-exercise-mat-on-wooden-floor.jpg?s=612x612&w=0&k=20&c=KKq0XKlwbQVKabIpyp1Z1F-H2CV-4r90yF9rPvIluLo=", description: "Non-slip yoga mat for workouts and stretching.", stock: true },
    { id: 16, name: "Skipping Rope", category: "Fitness & Wellness", price: 300, image: "https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Ideal for cardio workouts and fitness training.", stock: true },
  
    { id: 17, name: "Ashwagandha Capsules", category: "Ayurvedic & Herbal", price: 500, image: "https://media.istockphoto.com/id/1136367795/photo/ashwagandha-capsules-concept-for-a-healthy-dietary-supplementation-bright-stone-background.jpg?s=612x612&w=0&k=20&c=sEM7fGFIBMqIswMBrRci66csk3oAcRPiKX40noNrrgg=", description: "Boosts immunity and relieves stress naturally.", stock: true },
    { id: 18, name: "Neem Face Pack", category: "Ayurvedic & Herbal", price: 250, image: "https://images.pexels.com/photos/31110085/pexels-photo-31110085/free-photo-of-close-up-of-skincare-product-on-marble-surface.png?auto=compress&cs=tinysrgb&w=600", description: "Helps in acne and skin detox.", stock: true },
  
    { id: 21, name: "Diabetic Shoes", category: "Diabetic Care", price: 2500, image: "https://media.istockphoto.com/id/1219405500/photo/forefoot-off-loading-shoe-after-fractures-detachable-therapeutic-shoes-post-operative-heel.jpg?s=612x612&w=0&k=20&c=jZK60LvAgc8Uw_Oq37l2Reo4DxfX2xAcrE8tPgTGCQk=", description: "Specially designed for diabetic patients.", stock: true },
    { id: 22, name: "Sugar-Free Tablets", category: "Diabetic Care", price: 150, image: "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Artificial sweetener for diabetics.", stock: true }
  ];
  


export {categories, featuredProducts, deals, ProductsList}; 

