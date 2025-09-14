

export const dishes = [
  // STARTERS (5)
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Marinated paneer cubes grilled with spices.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757830106/Crisp_creamy_and_absolutely_delicious_Our_ready_lyvoqh.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "2 tsp" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Spiced chicken chunks cooked in a clay oven.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757830695/c13af954-5842-4252-9326-e01315a5cae6_hhxmiy.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "2 tsp" }
    ]
  },
  {
    id: 3,
    name: "Veg Spring Rolls",
    description: "Crispy rolls stuffed with vegetables and spices.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757830997/Ingredients__For_the_Filling__1_cup_cabbage_fbdiuj.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Carrot", quantity: "1/2 cup" },
      { name: "Spring Roll Sheets", quantity: "10" }
    ]
  },
  {
    id: 4,
    name: "Fish Fingers",
    description: "Crispy fried fish fingers served with tartar sauce.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757831121/___%EF%B8%8F_Crispy_Battered_Fish_Fingers_with_Perfectly_yvcaha.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish Fillet", quantity: "200g" },
      { name: "Breadcrumbs", quantity: "1 cup" }
    ]
  },
  {
    id: 5,
    name: "Aloo Tikki Chaat",
    description: "Shallow fried potato patties topped with chutneys.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757831241/Prepare_aloo_tikki_potato_patties_and_roast_them_d11up4.jpg",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Potato", quantity: "2 medium" },
      { name: "Green Peas", quantity: "1/2 cup" }
    ]
  },

  // MAIN COURSE (7 for variety)
  {
    id: 6,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757831442/aed3ef97-91a3-4c4e-a931-3c204b8522ed_zzfbts.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    "ingredients": [
        { "name": "Paneer", "quantity": "200g" },
        { "name": "Onion", "quantity": "2 large" },
        { "name": "Capsicum", "quantity": "1 large" },
        { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    id: 7,
    name: "Butter Chicken",
    description: "Chicken cooked in creamy tomato sauce.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757831535/Indian_Butter_Chicken__A_rich_and_creamy_dish_uzwzve.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Cream", quantity: "1/2 cup" }
    ]
  },
  {
  id: 8,
  name: "Dal Makhani",
  description: "Creamy black lentils slow-cooked with butter and cream.",
  image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757831901/Ready_to_download_Dal_Makhani_Indian_food_stock_wlpnen.jpg",
  mealType: "MAIN COURSE",
  type: "VEG",
  ingredients: [
    { name: "Whole Black Lentils (Urad Dal)", quantity: "1 cup" },
    { name: "Kidney Beans (Rajma)", quantity: "1/4 cup" },
    { name: "Onion", quantity: "1 large, finely chopped" },
    { name: "Tomato Puree", quantity: "1 cup" },
    { name: "Cream", quantity: "1/2 cup" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Spices", quantity: "to taste" }
  ]
},
  {
    id: 9,
    name: "Mutton Rogan Josh",
    description: "Tender mutton in aromatic Kashmiri gravy.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832065/Delicious_Rogan_Josh_Recipe_v1zk2b.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" }
    ]
  },
  {
  id: 10,
  name: "Chole Bhature",
  description: "A classic North Indian dish of spicy chickpea curry (chole) served with deep-fried bread (bhature).",
  image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832317/e8882507-ae0e-4269-b716-d396f5c6cdcc_ia8uyg.jpg",
  mealType: "MAIN COURSE",
  type: "VEG",
  ingredients: [
    { name: "Chickpeas (Chole)", quantity: "1 cup (soaked overnight)" },
    { name: "Onions", quantity: "2 medium, finely chopped" },
    { name: "Tomatoes", quantity: "2 medium, pureed" },
    { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
    { name: "Spices", quantity: "to taste (chole masala, turmeric, chili powder)" },
    { name: "All-purpose Flour (Maida)", quantity: "2 cups (for bhature)" },
    { name: "Yogurt", quantity: "1/4 cup (for bhature dough)" }
  ]
},
  {
    id: 11,
    name: "Veg Biryani",
    description: "Fragrant rice with spices and mixed vegetables.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832428/Smoky_spicy_and_slow-cooked_to_perfection_mftoxv.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Mixed Veggies", quantity: "1 cup" }
    ]
  },
  {
    id: 12,
    name: "Chicken Biryani",
    description: "Layered rice with spiced chicken and saffron.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832577/58ee796c-005e-44a3-95d4-4d036774452b_ueq4pd.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Chicken", quantity: "250g" }
    ]
  },

  // SIDES (5)
  {
    id: 13,
    name: "Butter Naan",
    description: "Soft tandoor bread brushed with butter.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832644/Butter_Naan_q84auw.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "200g" },
      { name: "Butter", quantity: "20g" }
    ]
  },
  {
    id: 14,
    name: "Jeera Rice",
    description: "Steamed basmati rice with cumin.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832788/Cumin_rice___Jeera_rice_aw7m1a.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Cumin", quantity: "1 tsp" }
    ]
  },
  {
    id: 15,
    name: "Roti",
    description: "Whole wheat flatbread cooked on tawa.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832863/Picture_a_warm_soft_and_slightly_charred_w2shvv.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "200g" }
    ]
  },
  {
    id: 16,
    name: "Papad",
    description: "Crispy roasted lentil wafer.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757832975/951eef74-7397-4ecc-9ca0-36ff5ae342b4_uh28pf.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Urad Dal Flour", quantity: "100g" }
    ]
  },
  {
    id: 17,
    name: "Raita",
    description: "Cool yogurt dip with cucumber and spices.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757833154/Vegetable_Raita___Nourish_Deliciously_naatww.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Cucumber", quantity: "1 small" }
    ]
  },

  // DESSERTS (5)
  {
    id: 18,
    name: "Gulab Jamun",
    description: "Milk-solid balls fried and soaked in syrup.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757833236/gulab_jamun_a_Indian_dessert_of_deep-fried_dough_skdx1b.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Sugar", quantity: "1 cup" }
    ]
  },
  {
    id: 19,
    name: "Rasgulla",
    description: "Spongy cheese balls in sugar syrup.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757833397/a54bb96d-b9f5-4392-a78f-ba8215faf7d7_dv1ak3.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Sugar", quantity: "1 cup" }
    ]
  },
  {
    id: 20,
    name: "Kheer",
    description: "Rice pudding cooked with milk.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757833546/rice_kheer_is_a_famous_Indian_sweet_dish_Here_is_a_re0upx.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "1/4 cup" },
      { name: "Milk", quantity: "1 liter" }
    ]
  },
  {
    id: 21,
    name: "Chocolate Brownie",
    description: "Chocolate dessert baked to fudgy perfection.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757833772/Dive_into_the_rich_temptation_of_this_Brownie_vhzcvq.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chocolate", quantity: "200g" },
      { name: "Flour", quantity: "1 cup" }
    ]
  },
  {
    id: 22,
    name: "Ice Cream Sundae",
    description: "Ice cream scoops topped with nuts and syrup.",
    image: "https://res.cloudinary.com/drmleijbw/image/upload/v1757834059/In_this_captivating_photograph_a_luscious_ice_encgkg.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Ice Cream", quantity: "2 scoops" },
      { name: "Chocolate Syrup", quantity: "2 tbsp" }
    ]
  },
];
