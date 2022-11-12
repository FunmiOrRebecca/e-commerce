const CATEGORIES = [
  {
    MainCategory: "Home & Office",
    subCategoriesList: [
      {
        category: "Home & Kitchen",
        subCategories: [
          "Bath",
          "Bedding",
          "Home Decor",
          "Home Furniture",
          "Vacuums & Floor Care",
          "Wall Art",
          "Cookware",
          "Bakeware",
          "Small Appliances",
          "Cutlery & Knife Accessories",
        ],
      },
      {
        category: "Home & Office Furniture",
        subCategories: [
          "Kitchen & Dining",
          "Lighting",
          "Stationery",
          "Storage & Organization",
        ],
      },
      {
        category: "Office Products",
        subCategories: [
          "Office & School Supplies",
          "Office Furniture & Lighting",
          "Packaging Materials",
        ],
      },
      {
        category: "Small Appliances",
        subCategories: [
          "Ironing & Laundry",
          "Kettles",
          "Mixing & Blending",
          "Microwave Ovens",
          "Vacuum Cleaners",
          "Kitchen Bundles",
        ],
      },
      {
        category: "Large Appliances",
        subCategories: [
          "Air Conditioners",
          "Cookers",
          "Washers & Dryers",
          "Fans",
          "Freezers",
          "Refrigerators",
          "Dishwashers",
        ],
      },
    ],
  },
  {
    MainCategory: "Phones & Tablets",
    subCategoriesList: [
      {
        category: "Mobile Phones",
        subCategories: ["Smartphones", "Basic Phones", "Refurbished Phones"],
      },
      {
        category: "Tablets",
        subCategories: [
          "iPads",
          "Android Tablets",
          "Educational Tablets",
          "Tablet Accessories",
        ],
      },
      {
        category: "Mobile Accessories",
        subCategories: [
          "Accessory Kits",
          "Adapters",
          "Batteries",
          "Battery Chargers",
          "Bluetooth Headsets",
          "Cables",
          "Car Accessories",
          "Chargers",
          "Earphones & Headsets",
          "MicroSD Cards",
          "Screen Protectors",
          "Selfie Sticks & Tripods",
          "Smart Watches",
        ],
      },
      {
        category: "Small Appliances",
        subCategories: [
          "iPhone 11 Pro Max",
          "Samsung Galaxy S10",
          "iPhone 11",
          "Nokia 7.2",
          "Huawei Y9 S",
          "iPhone XS Max",
          "Infinix S5",
        ],
      },
      {
        category: "Top Phone Brands",
        subCategories: [
          "Samsung",
          "Apple",
          "Huawei",
          "Nokia",
          "Xiaomi",
          "Tecno",
        ],
      },
    ],
  },
  {
    MainCategory: "Computers",
    subCategoriesList: [
      {
        category: "Mobile Phones",
        subCategories: ["Desktops", "Laptops"],
      },
      {
        category: "Data Storage",
        subCategories: [
          "External Hard Drives",
          "USB Flash Drives",
          "External Solid State",
        ],
      },
      {
        category: "Antivirus & Security",
        subCategories: ["Antivirus", "                Internet Security"],
      },
      {
        category: "Printers",
        subCategories: [
          "Inkjet Printers",
          "Laser Printers",
          "                    Printer Ink & Toner",
        ],
      },
      {
        category: "Computer Accessories",
        subCategories: [
          "Keyboards & Mice",
          "Uninterrupted Power Supply",
          "Memory Cards",
          "Batteries",
          "Scanners",
          "Video Projectors",
        ],
      },
      {
        category: "Top Brands",
        subCategories: [
          "HP",
          "Logitech",
          "Dell",
          "Lenovo",
          "Apple",
          "Huawei",
          "Microsoft",
          "Kingston",
          "Seagate",
          "Samsung",
          "Sandisk",
          "Toshiba",
        ],
      },
    ],
  },
  {
    MainCategory: "Beauty & Health",
    subCategoriesList: [
      {
        category: "Make Up",
        subCategories: [
          "Concealers & Color Correctors",
          "Foundation",
          "Powder",
          "Lip Gloss",
          "Lip Liner",
          "Lipstick",
          "Eyeliner & Kajal",
          "Eyeshadow",
          "Mascara",
        ],
      },
      {
        category: "Fragrances",
        subCategories: ["Women's", "Men's"],
      },
      {
        category: "Hair Care",
        subCategories: [
          "Hair & Scalp Care",
          "Hair Accessories",
          "Hair Cutting Tools",
        ],
      },
      {
        category: "Personal Care",
        subCategories: [
          "Inkjet Printers",
          "Laser Printers",
          "                    Printer Ink & Toner",
        ],
      },
      {
        category: "Oral Care",
        subCategories: [
          "Dental Care kits",
          "Dental Floss & Picks",
          "Teeth Whitening",
          "Toothbrushes",
          "Toothpaste",
          "Breath Freshners",
        ],
      },
      {
        category: "Health Care",
        subCategories: [
          "Face Protection",
          "Thermometers",
          "Hand Sanitizers",
          "Lab, Safety & Work Gloves",
        ],
      },
    ],
  },
  {
    MainCategory: "Electronics",
    subCategoriesList: [
      {
        category: "Television & Video",
        subCategories: [
          "Televisions",
          "Smart TVs",
          "LED & LCD TVs",
          "QLED & OLED TVs",
          "DVD Players & Recorders",
        ],
      },
      {
        category: "Home Audio",
        subCategories: [
          "Home Theatre Systems",
          "Receivers & Amplifiers",
          "Sound Bars",
        ],
      },
      {
        category: "Cameras & Photos",
        subCategories: [
          "Digital Cameras",
          "Projectors",
          "Video Surveillance",
          "Camcorders",
        ],
      },
      {
        category: " GENERATORS & PORTABLE POWER",
        subCategories: [
          "Generators",
          "Power Inverters",
          "Solar & Wind Power",
          "Stablizers",
        ],
      },
      {
        category: "Computer Accessories",
        subCategories: [
          "LG",
          "Samsung",
          "Sony",
          "TCL",
          "Hisense",
          "Canon",
          "DStv",
        ],
      },
    ],
  },
  {
    MainCategory: "Fashion",
    subCategoriesList: [
      {
        category: "Women's Fashion",
        subCategories: [
          "Clothing",
          "Shoes",
          "Accessories",
          "Jewelry",
          "Handbags & Wallets",
          "Underwear & Sleepwear",
          "Maternity",
          "Dresses",
          "Traditional",
          "Beach & Swimwear",
          "Flats",
        ],
      },
      {
        category: "KID'S FASHION",
        subCategories: ["Girl's Fashion", "Boy's Fashion"],
      },
      {
        category: "MEN'S FASHION",
        subCategories: [
          "Clothing",
          "Shoes",
          "Accessories",
          "Underwear & Sleepwear",
          "Traditional & Cultural Wear",
          "T-Shirts",
          "Polo Shirts",
          "Trousers & Chinos",
          "Sneakers",
          "Jewelry",
          "Jerseys",
        ],
      },
      {
        category: "All Fashion",
        subCategories: [],
      },
      {
        category: "Watches",
        subCategories: ["Men's Watches", "Women's Watches"],
      },
      {
        category: "Sunglasses",
        subCategories: ["Men's Sunglasses", "Women's Sunglasses"],
      },
      {
        category: "Watches",
        subCategories: [
          "Adidas",
          "Zara",
          "Nike",
          "Casio",
          "Puma",
          "Defacto",
          "Citizen",
        ],
      },
    ],
  },
  {
    MainCategory: "Supermarket",
    subCategoriesList: [
      {
        category: "Food Cupboard",
        subCategories: [
          "Grains & Rice",
          "Pasta & Noodles",
          "Breakfast Foods",
          "Herbs, Spices & Seasoning",
          "Flours & Meals",
          "Malt Drinks",
          "Coffee",
          "Water",
          "Cooking Oil",
          "Juices",
          "Soft Drinks",
          "Canned & Packaged Foods",
          "Candy & Chocolate",
          "Syrups, Sugars & Sweeteners",
        ],
      },
      {
        category: "Baby Products",
        subCategories: [
          "Disposable Diapers",
          "Bottle Feeding",
          "Wipes & Refills",
        ],
      },
      {
        category: "Household Cleaning",
        subCategories: [
          "Laundry",
          "Air Fresheners",
          "Toilet Paper & Wipes",
          "Bathroom Cleaners",
          "Dishwashing",
          "Cleaning Tools",
        ],
      },
      {
        category: "Beer, Wine & SPirits",
        subCategories: [
          "Beers",
          "Vodka",
          "Red Wine",
          "Champagne & Sparkling Wine",
          "White Wine",
          "Whiskey",
          "Liquors",
        ],
      },
    ],
  },
  {
    MainCategory: "Baby Products",
    subCategoriesList: [
      {
        category: "Apparel & Accessories",
        subCategories: ["Baby Boys", "Baby Girls"],
      },
      {
        category: "Diapering",
        subCategories: ["Disposable Diapers", "Diaper Bags", "Wipes & Holders"],
      },
      {
        category: "BABY & TODDLER TOYS",
        subCategories: ["Activity Play Centers", "Music & Sound", "Bath Toys"],
      },
      {
        category: "BATHING & SKIN CARE",
        subCategories: [
          "Washcloths & Towels",
          "Grooming & Healthcare Kits",
          "Skin Care",
          "Bathing Tubs & Seats",
          "Bathroom Safety",
        ],
      },
      {
        category: "Feeding",
        subCategories: [
          "Bibs & Burp Cloths",
          "Breastfeeding",
          "Bottle-Feeding",
          "Pacifiers & Accessories",
          "Food Storage",
          "Highchairs & Booster Seats",
          "Solid Feeding",
        ],
      },
      {
        category: "Gear",
        subCategories: [
          "Backpacks & Carriers",
          "Swings, Jumpers & Bouncers",
          "Walkers",
        ],
      },
    ],
  },
  {
    MainCategory: "Gaming",
    subCategoriesList: [
      {
        category: "Playstation",
        subCategories: [
          "Playstation 4",
          "Playstation 3",
          "Playstation 2",
          "Playstation",
          "Playstation Vita",
        ],
      },
      {
        category: "Xbox",
        subCategories: ["XBOX One", "XBOX 360", "XBOX"],
      },
      {
        category: "Nintendo",
        subCategories: [
          "Nintendo 3DS",
          "Nintendo DS",
          "Nintendo Switch",
          "Nintendo Wii",
        ],
      },
      {
        category: "Top Games",
        subCategories: [
          "FIFA '20",
          "PES '20",
          "PES '19",
          "PES 2017",
          "Call of Duty",
          "Uncharted",
          "Battlefield",
          "The Witcher 3",
          "Metal Gear Solid",
          "Fallout",
          "Madden NFL",
          "Far Cry",
          "Grand Theft Auto",
          "Sporting Goods",
        ],
      },
    ],
  },
  {
    MainCategory: "Sporting Goods",
    subCategoriesList: [
      {
        category: "Cardio Training",
        subCategories: ["Exercise Bikes", "Treadmills", "Elliptical Trainers"],
      },
      {
        category: "Strength training Equipment",
        subCategories: ["Core & Abdominal Trainers", "Dumbbells", "Bars"],
      },
      {
        category: "Accessories",
        subCategories: [
          "Exercise Bands",
          "Exercise Mats",
          "Jump Ropes",
          "Sports Clothing",
        ],
      },
      {
        category: "Team Sports",
        subCategories: [
          "Basketball",
          "Team Sport Accessories",
          "Tennis & Racquet Sports",
          "Running",
        ],
      },
      {
        category: "Computer Accessories",
        subCategories: [
          "Keyboards & Mice",
          "Uninterrupted Power Supply",
          "Memory Cards",
          "Batteries",
          "Scanners",
          "Video Projectors",
        ],
      },
      {
        category: "Top Brands",
        subCategories: [
          "HP",
          "Logitech",
          "Dell",
          "Lenovo",
          "Apple",
          "Huawei",
          "Microsoft",
          "Kingston",
          "Seagate",
          "Samsung",
          "Sandisk",
          "Toshiba",
        ],
      },
    ],
  },
  {
    MainCategory: "Automobile",
    subCategoriesList: [
      {
        category: "Car care",
        subCategories: ["Cleaning Kits", "Exterior Care", "Interior Care"],
      },
      {
        category: "Car electronics & Accessories",
        subCategories: [
          "Car Electronics",
          "Car Accessories",
          "Power & Battery",
        ],
      },
      {
        category: "Lights & Lightning Accessories",
        subCategories: ["Bulbs", "Accent & Off Road Lighting"],
      },
      {
        category: "Exterior Accessories",
        subCategories: [
          "Covers",
          "Mirrors",
          "Bumper Stickers, Decals & Magnets",
        ],
      },
      {
        category: "Oils & Fluids",
        subCategories: ["Brake Fluids", "Greases & Lubricants", "Oils"],
      },
      {
        category: "Interior Accessories",
        subCategories: [
          "Air Freshners",
          "Consoles & Organizers",
          "Key Chains",
          "Floor Mats & Cargo Liners",
          "Sun Protection",
          "Seat Covers & Accessories",
        ],
      },
      {
        category: "Tyres & Rins",
        subCategories: ["Tyre", "Inflator & Guages"],
      },
    ],
  },
];

export default CATEGORIES;
