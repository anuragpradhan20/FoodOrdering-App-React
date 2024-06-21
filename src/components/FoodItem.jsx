const foods = [
  {
    foodUniqueId: 1,
    foodName: 'Salad',
    foodImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 1,
        dishName: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.',
        rating: '4.5/5',
        type: 'Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 2,
        dishName: 'Greek Salad',
        description: 'Mixed greens with olives, feta cheese, cucumbers, and tomatoes.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 3,
        dishName: 'Chicken Salad',
        description: 'Grilled chicken breast with mixed greens and a tangy vinaigrette.',
        rating: '4.8/5',
        type: 'Non-Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 4,
        dishName: 'Pasta Salad',
        description: 'Cold pasta mixed with fresh vegetables and Italian dressing.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹190',
        image: 'https://plus.unsplash.com/premium_photo-1705420671923-cc9270c18b34?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    foodUniqueId: 2,
    foodName: 'Rolls',
    foodImage: 'https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 5,
        dishName: 'Spring Roll',
        description: 'Crispy rolls filled with vegetables and served with a sweet chili sauce.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1515022376298-7333f33e704b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 6,
        dishName: 'Chicken Roll',
        description: 'Grilled chicken wrapped in a flatbread with sauces and veggies.',
        rating: '4.8/5',
        type: 'Non-Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1619158406245-48d552bbcbbf?q=80&w=1470'
      },
      {
        dishUniqueId: 7,
        dishName: 'Paneer Roll',
        description: 'Paneer tikka wrapped in a flatbread with mint chutney.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 8,
        dishName: 'Veggie Roll',
        description: 'Mixed vegetables rolled in a flatbread with tangy sauces.',
        rating: '4.5/5',
        type: 'Veg',
        price: '₹170',
        image: 'https://plus.unsplash.com/premium_photo-1664648119277-ce59c8ba5f43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    foodUniqueId: 3,
    foodName: 'Dessert',
    foodImage: 'https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 9,
        dishName: 'Chocolate Mousse',
        description: 'Rich and creamy chocolate mousse topped with whipped cream.',
        rating: '4.9/5',
        type: 'Veg',
        price: '₹200',
        image: 'https://plus.unsplash.com/premium_photo-1674176787502-9583ab25d0a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 10,
        dishName: 'Cheesecake',
        description: 'Creamy cheesecake with a graham cracker crust and fruit topping.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 11,
        dishName: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹300',
        image: 'https://plus.unsplash.com/premium_photo-1695028377634-72cf88a4ea1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        dishUniqueId: 12,
        dishName: 'Apple Pie',
        description: 'Warm apple pie with a flaky crust and a hint of cinnamon.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1506127946181-abb01a32593c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    foodUniqueId: 4,
    foodName: 'Sandwich',
    foodImage: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 13,
        dishName: 'Grilled Cheese Sandwich',
        description: 'Toasted bread with melted cheese, served with tomato soup.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 14,
        dishName: 'Club Sandwich',
        description: 'Triple-decker sandwich with turkey, bacon, lettuce, and tomato.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 15,
        dishName: 'Veggie Sandwich',
        description: 'Fresh vegetables and hummus on whole grain bread.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1562158073-98b50eb90134?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 16,
        dishName: 'Chicken Sandwich',
        description: 'Grilled chicken breast with lettuce, tomato, and mayo on a bun.',
        rating: '4.7/5',
        type: 'Non-Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  },
  {
    foodUniqueId: 5,
    foodName: 'Cake',
    foodImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 17,
        dishName: 'Chocolate Cake',
        description: 'Moist chocolate cake with rich chocolate frosting.',
        rating: '4.9/5',
        type: 'Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 18,
        dishName: 'Vanilla Cake',
        description: 'Classic vanilla cake with creamy vanilla frosting.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 19,
        dishName: 'Red Velvet Cake',
        description: 'Rich red velvet cake with cream cheese frosting.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 20,
        dishName: 'Carrot Cake',
        description: 'Moist carrot cake with cream cheese frosting and a hint of cinnamon.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  },
  {
    foodUniqueId: 6,
    foodName: 'Biryani',
    foodImage: 'https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 21,
        dishName: 'Chicken Biryani',
        description: 'Fragrant basmati rice with marinated chicken and spices.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 22,
        dishName: 'Veg Biryani',
        description: 'Aromatic basmati rice with mixed vegetables and spices.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 23,
        dishName: 'Mutton Biryani',
        description: 'Tender mutton pieces cooked with fragrant basmati rice and spices.',
        rating: '4.7/5',
        type: 'Non-Veg',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 24,
        dishName: 'Paneer Biryani',
        description: 'Basmati rice cooked with paneer cubes and aromatic spices.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  },
  {
    foodUniqueId: 7,
    foodName: 'Pasta',
    foodImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 25,
        dishName: 'Spaghetti Bolognese',
        description: 'Classic spaghetti with a rich meat sauce.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 26,
        dishName: 'Penne Arrabbiata',
        description: 'Penne pasta in a spicy tomato sauce.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb22?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 27,
        dishName: 'Fettuccine Alfredo',
        description: 'Fettuccine pasta in a creamy Alfredo sauce.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1514997130599-b9822b8e997b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 28,
        dishName: 'Pesto Pasta',
        description: 'Pasta tossed in a fresh basil pesto sauce.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹260',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  },
  {
    foodUniqueId: 8,
    foodName: 'Noodles',
    foodImage: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      {
        dishUniqueId: 29,
        dishName: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and soy sauce.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 30,
        dishName: 'Chicken Noodles',
        description: 'Stir-fried noodles with chicken and vegetables.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 31,
        dishName: 'Schezwan Noodles',
        description: 'Spicy stir-fried noodles with vegetables.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹230',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 32,
        dishName: 'Egg Noodles',
        description: 'Stir-fried noodles with egg and vegetables.',
        rating: '4.6/5',
        type: 'Non-Veg',
        price: '₹240',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  },
  {
    foodUniqueId: 9,
    foodName: 'Allfoods',
    foodImage: 'https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dishes: [
      // All the dishes from above consolidated into one array
      {
        dishUniqueId: 1,
        dishName: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.',
        rating: '4.5/5',
        type: 'Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 2,
        dishName: 'Greek Salad',
        description: 'Mixed greens with olives, feta cheese, cucumbers, and tomatoes.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 3,
        dishName: 'Chicken Salad',
        description: 'Grilled chicken breast with mixed greens and a tangy vinaigrette.',
        rating: '4.8/5',
        type: 'Non-Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 4,
        dishName: 'Pasta Salad',
        description: 'Cold pasta mixed with fresh vegetables and Italian dressing.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹190',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 5,
        dishName: 'Spring Roll',
        description: 'Crispy rolls filled with vegetables and served with a sweet chili sauce.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1541987392389-28a28e0f0d58?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 6,
        dishName: 'Chicken Roll',
        description: 'Grilled chicken wrapped in a flatbread with sauces and veggies.',
        rating: '4.8/5',
        type: 'Non-Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 7,
        dishName: 'Paneer Roll',
        description: 'Paneer tikka wrapped in a flatbread with mint chutney.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1562158073-98b50eb90134?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 8,
        dishName: 'Veggie Roll',
        description: 'Mixed vegetables rolled in a flatbread with tangy sauces.',
        rating: '4.5/5',
        type: 'Veg',
        price: '₹170',
        image: 'https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 9,
        dishName: 'Chocolate Mousse',
        description: 'Rich and creamy chocolate mousse topped with whipped cream.',
        rating: '4.9/5',
        type: 'Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 10,
        dishName: 'Cheesecake',
        description: 'Creamy cheesecake with a graham cracker crust and fruit topping.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 11,
        dishName: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 12,
        dishName: 'Apple Pie',
        description: 'Warm apple pie with a flaky crust and a hint of cinnamon.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 13,
        dishName: 'Grilled Cheese Sandwich',
        description: 'Toasted bread with melted cheese, served with tomato soup.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 14,
        dishName: 'Club Sandwich',
        description: 'Triple-decker sandwich with turkey, bacon, lettuce, and tomato.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 15,
        dishName: 'Veggie Sandwich',
        description: 'Fresh vegetables and hummus on whole grain bread.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1562158073-98b50eb90134?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 16,
        dishName: 'Chicken Sandwich',
        description: 'Grilled chicken breast with lettuce, tomato, and mayo on a bun.',
        rating: '4.7/5',
        type: 'Non-Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 17,
        dishName: 'Chocolate Cake',
        description: 'Moist chocolate cake with rich chocolate frosting.',
        rating: '4.9/5',
        type: 'Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 18,
        dishName: 'Vanilla Cake',
        description: 'Classic vanilla cake with creamy vanilla frosting.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 19,
        dishName: 'Red Velvet Cake',
        description: 'Rich red velvet cake with cream cheese frosting.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 20,
        dishName: 'Carrot Cake',
        description: 'Moist carrot cake with cream cheese frosting and a hint of cinnamon.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1585238342028-1cc13b16f3f7?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 21,
        dishName: 'Chicken Biryani',
        description: 'Fragrant basmati rice with marinated chicken and spices.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 22,
        dishName: 'Veg Biryani',
        description: 'Aromatic basmati rice with mixed vegetables and spices.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 23,
        dishName: 'Mutton Biryani',
        description: 'Tender mutton pieces cooked with fragrant basmati rice and spices.',
        rating: '4.7/5',
        type: 'Non-Veg',
        price: '₹320',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 24,
        dishName: 'Paneer Biryani',
        description: 'Basmati rice cooked with paneer cubes and aromatic spices.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1601924110234-1114ca4cde67?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 25,
        dishName: 'Spaghetti Bolognese',
        description: 'Classic spaghetti with a rich meat sauce.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹300',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 26,
        dishName: 'Penne Arrabbiata',
        description: 'Penne pasta in a spicy tomato sauce.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb22?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 27,
        dishName: 'Fettuccine Alfredo',
        description: 'Fettuccine pasta in a creamy Alfredo sauce.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹280',
        image: 'https://images.unsplash.com/photo-1514997130599-b9822b8e997b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 28,
        dishName: 'Pesto Pasta',
        description: 'Pasta tossed in a fresh basil pesto sauce.',
        rating: '4.6/5',
        type: 'Veg',
        price: '₹260',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 29,
        dishName: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and soy sauce.',
        rating: '4.8/5',
        type: 'Veg',
        price: '₹220',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 30,
        dishName: 'Chicken Noodles',
        description: 'Stir-fried noodles with chicken and vegetables.',
        rating: '4.9/5',
        type: 'Non-Veg',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 31,
        dishName: 'Schezwan Noodles',
        description: 'Spicy stir-fried noodles with vegetables.',
        rating: '4.7/5',
        type: 'Veg',
        price: '₹230',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        dishUniqueId: 32,
        dishName: 'Egg Noodles',
        description: 'Stir-fried noodles with egg and vegetables.',
        rating: '4.6/5',
        type: 'Non-Veg',
        price: '₹240',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ]
  }
]
export default foods;