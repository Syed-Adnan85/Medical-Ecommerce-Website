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
    brand: "Calpol",
    expiry: "Dec 2026",
    image: "https://media.istockphoto.com/id/1022216070/photo/packet-of-generic-paracetamol-tablets.jpg?b=1&s=612x612&w=0&k=20&c=yfIbT9O1lQbsDzSGTI02KnqGPNfD_S-2ZkBqAy8-Czk=",
    description: "Pain reliever and fever reducer.",
    stock: true,
  },
  {
    id: 13,
    name: "Vitamin C Tablets",
    price: "100",
    brand: "Limcee",
    expiry: "Nov 2026",
    image: "https://images.pexels.com/photos/11348080/pexels-photo-11348080.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Boosts immunity and improves skin health.",
    stock: true,
  },
  {
    id: 14,
    name: "Thermometer",
    price: "2000",
    brand: "Dr. Morepen",
    expiry: "N/A",
    image: "https://images.pexels.com/photos/3873176/pexels-photo-3873176.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Digital thermometer for accurate temperature readings.",
    stock: true,
  },
  {
    id: 15,
    name: "Blood Pressure Monitor",
    price: "1500",
    brand: "Omron",
    expiry: "N/A",
    image: "https://images.pexels.com/photos/8088858/pexels-photo-8088858.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Digital blood pressure monitor with accurate readings.",
    stock: true,
  },
  {
    id: 16,
    name: "Multivitamin Capsules",
    price: "500",
    brand: "Becosules",
    expiry: "Oct 2026",
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
    brand: "Accu-Chek",
    expiry: "N/A",
    discount: "30% Off",
    image: "https://images.pexels.com/photos/6940859/pexels-photo-6940859.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Complete kit for monitoring blood sugar levels.",
    stock: true,
  },
  {
    id: 18,
    name: "Pain Relief Spray",
    price: "120",
    brand: "Moov",
    expiry: "jan 2026",
    discount: "20% Off",
    image: "https://images.pexels.com/photos/17605643/pexels-photo-17605643/free-photo-of-spray-painkiller-in-black-bottle.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Instant relief from muscle and joint pain.",
    stock: true,
  },
  {
    id: 19,
    name: "Hair Growth Oil",
    price: "350",
    brand: "Indulekha",
    expiry: "Feb 2026",
    discount: "15% Off",
    image: "https://media.istockphoto.com/id/2148447954/photo/natural-spray-for-hair-growth-with-herbs-in-hands.jpg?s=612x612&w=0&k=20&c=iCsilXDSEft0V5coTpG18FTXS5S7GczKRJelXvxZas8=",
    description: "Nourishes scalp and promotes hair growth.",
    stock: true,
  },
];

const ProductsList = [
  { id: 1, name: "Paracetamol 500mg", brand: "Calpol", category: "Medicines", price: 50, 
    expiry: "Dec 2026", image: "https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A widely used over-the-counter pain reliever and fever reducer. It helps alleviate mild to moderate headaches, muscle aches, colds, and flu symptoms.", 
    stock: true },

  { id: 2, name: "Ibuprofen 200mg", brand: "Brufen", category: "Medicines", price: 80, 
    expiry: "Aug 2025", image: "https://media.istockphoto.com/id/1163798570/photo/ibuprofen-medication.jpg?b=1&s=612x612&w=0&k=20&c=5u-gyM6ULXKH19m-BST9ni6ZZWABiznMFwLK2asNHcM=", 
    description: "A non-steroidal anti-inflammatory drug (NSAID) used to reduce fever and relieve pain or inflammation caused by headaches, arthritis, menstrual cramps, and muscle aches.", 
    stock: true },

  { id: 3, name: "Cough Syrup 100ml", brand: "Benadryl", category: "Medicines", price: 120, 
    expiry: "Apr 2025", image: "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A fast-acting syrup formulated to relieve cough, throat irritation, and congestion caused by colds, allergies, and respiratory infections.", 
    stock: false },

  { id: 4, name: "Vitamin C Tablets", brand: "Celin", category: "Supplements", price: 250, 
    expiry: "Nov 2026", image: "https://images.pexels.com/photos/30385883/pexels-photo-30385883/free-photo-of-a-pile-of-yellow-vitamin-tablets-on-light-background.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A dietary supplement that supports the immune system, promotes healthy skin, and aids in collagen production. Essential for overall health and well-being.", 
    stock: true },

  { id: 5, name: "Protein Powder 1kg", brand: "Optimum Nutrition", category: "Supplements", price: 1500, 
    expiry: "Jan 2027", image: "https://images.pexels.com/photos/13779116/pexels-photo-13779116.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A high-quality whey protein supplement designed to support muscle growth, recovery, and strength. Ideal for fitness enthusiasts and athletes.", 
    stock: true },

  { id: 6, name: "Hand Sanitizer 100ml", brand: "Dettol", category: "Personal Care", price: 120, 
    expiry: "Sep 2025", image: "https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A fast-acting liquid sanitizer that eliminates 99.9% of bacteria and viruses, ensuring proper hand hygiene when soap and water are not available.", 
    stock: true },

  { id: 7, name: "Face Mask (Pack of 10)", brand: "3M", category: "Personal Care", price: 150, 
    expiry: "N/A", image: "https://images.pexels.com/photos/3786153/pexels-photo-3786153.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A pack of 10 high-quality face masks that provide protection against dust, airborne particles, bacteria, and viruses, making them ideal for daily use.", 
    stock: true },

  { id: 8, name: "Blood Pressure Monitor", brand: "Omron", category: "Health Devices", price: 1999, 
    expiry: "N/A", image: "https://images.pexels.com/photos/6203474/pexels-photo-6203474.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A digital blood pressure monitor that provides accurate and easy-to-read readings. Suitable for home use to monitor heart health regularly.", 
    stock: false },

  { id: 9, name: "Glucometer Kit", brand: "Accu-Chek", category: "Health Devices", price: 2200, 
    expiry: "Jan 2027", image: "https://images.pexels.com/photos/6823519/pexels-photo-6823519.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A compact and user-friendly device designed for monitoring blood sugar levels with test strips, helping diabetic patients manage their health efficiently.", 
    stock: true },

  { id: 10, name: "Infrared Thermometer", brand: "Dr. Trust", category: "Health Devices", price: 1499, 
    expiry: "N/A", image: "https://images.pexels.com/photos/4021188/pexels-photo-4021188.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A non-contact infrared thermometer that provides instant and precise temperature readings, making it ideal for home and medical use.", 
    stock: true },

  { id: 11, name: "Baby Diapers (Pack of 20)", brand: "Pampers", category: "Baby Care", price: 400, 
    expiry: "Dec 2026", image: "https://images.pexels.com/photos/20886783/pexels-photo-20886783/free-photo-of-close-up-of-a-newborn-baby-lying-on-a-soft-blanket.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "Soft, ultra-absorbent baby diapers designed for maximum comfort and dryness, keeping your baby happy and rash-free.", 
    stock: true },

  { id: 12, name: "Baby Wipes (Pack of 80)", brand: "Huggies", category: "Baby Care", price: 150, 
    expiry: "Oct 2025", image: "https://media.istockphoto.com/id/152145349/photo/baby-wipes.jpg?s=612x612&w=0&k=20&c=8opHBO6IDoKKuzF3SHpTsyQbS14Z0CwBKkw_KSiYMe8=", 
    description: "Gentle, fragrance-free baby wipes infused with aloe and vitamin E, suitable for delicate skin and everyday cleaning.", 
    stock: true },

  { id: 13, name: "Aloe Vera Gel 200ml", brand: "Patanjali", category: "Skin Care", price: 250, 
    expiry: "Feb 2026", image: "https://images.pexels.com/photos/14798574/pexels-photo-14798574.jpeg?auto=compress&cs=tinysrgb&w=600", 
    description: "A natural skincare product that soothes, hydrates, and nourishes the skin. Effective for sunburns, acne, and skin irritation.", 
    stock: true },

  { id: 14, name: "Moisturizing Lotion 500ml", brand: "Nivea", category: "Skin Care", price: 350, 
    expiry: "Jul 2026", image: "https://images.pexels.com/photos/31110093/pexels-photo-31110093/free-photo-of-neutrogena-skincare-products-with-floral-arrangement.png?auto=compress&cs=tinysrgb&w=600", 
    description: "A deeply nourishing and hydrating body lotion enriched with essential oils to keep skin soft, smooth, and healthy.", 
    stock: true },

  { id: 15, name: "Yoga Mat", brand: "Reebok", category: "Fitness & Wellness", price: 1200, 
    expiry: "N/A", image: "https://media.istockphoto.com/id/1317688319/photo/close-up-of-female-hands-folding-blue-exercise-mat-on-wooden-floor.jpg?s=612x612&w=0&k=20&c=KKq0XKlwbQVKabIpyp1Z1F-H2CV-4r90yF9rPvIluLo=", 
    description: "A high-quality, non-slip yoga mat designed for comfortable and effective workouts, stretching, and meditation.", 
    stock: true },


    {
      id: 16,
      name: "Skipping Rope",
      brand: "Decathlon",
      category: "Fitness & Wellness",
      price: 300,
      expiry: "N/A",
      image: "https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "A high-quality skipping rope designed for effective cardio workouts, endurance training, and weight loss. Features a durable, tangle-free design with comfortable handles for a firm grip.",
      stock: true
  },

  {
      id: 17,
      name: "Ashwagandha Capsules",
      brand: "Himalaya",
      category: "Ayurvedic & Herbal",
      price: 500,
      expiry: "Sep 2026",
      image: "https://media.istockphoto.com/id/1136367795/photo/ashwagandha-capsules-concept-for-a-healthy-dietary-supplementation-bright-stone-background.jpg?s=612x612&w=0&k=20&c=sEM7fGFIBMqIswMBrRci66csk3oAcRPiKX40noNrrgg=",
      description: "Herbal supplement known for boosting immunity, reducing stress, improving energy levels, and enhancing overall well-being. Ideal for managing anxiety and promoting better sleep.",
      stock: true
  },

  {
      id: 18,
      name: "Neem Face Pack",
      brand: "Patanjali",
      category: "Ayurvedic & Herbal",
      price: 250,
      expiry: "May 2026",
      image: "https://images.pexels.com/photos/31110085/pexels-photo-31110085/free-photo-of-close-up-of-skincare-product-on-marble-surface.png?auto=compress&cs=tinysrgb&w=600",
      description: "A natural neem-based face pack that helps in acne treatment, skin detoxification, and oil control. Enriched with herbal extracts to cleanse pores and improve skin texture.",
      stock: true
  },

  {
      id: 19,
      name: "Diabetic Shoes",
      brand: "Dr. Comfort",
      category: "Diabetic Care",
      price: 2500,
      expiry: "N/A",
      image: "https://media.istockphoto.com/id/1219405500/photo/forefoot-off-loading-shoe-after-fractures-detachable-therapeutic-shoes-post-operative-heel.jpg?s=612x612&w=0&k=20&c=jZK60LvAgc8Uw_Oq37l2Reo4DxfX2xAcrE8tPgTGCQk=",
      description: "Specially designed orthopedic footwear for diabetic patients to provide maximum comfort, reduce pressure points, and prevent foot ulcers. Made with breathable material and cushioned soles for extra support.",
      stock: true
  },

  {
      id: 20,
      name: "Sugar-Free Tablets",
      brand: "Sugar Free Gold",
      category: "Diabetic Care",
      price: 150,
      expiry: "Dec 2026",
      image: "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Zero-calorie artificial sweetener tablets, ideal for diabetic patients and health-conscious individuals. Helps maintain blood sugar levels while enjoying sweet flavors in beverages and food.",
      stock: true
  }
  ];
  


export {categories, featuredProducts, deals, ProductsList}; 

