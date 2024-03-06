let mealkits = [
    {
        title: "Asian Fusion",
        includes: "Includes",
        description: "An impressive selection of rice and other delicacies with an Asian theme that is bound to satisfy you.",
        category: "Classic Meals",
        price: 11.99,
        cookingTime: 25,
        servings: 2,
        imageUrl: "/images/AsianFusion.png",
        featuredMealKit: true
    },
    {
        title: "Mexican Fiesta",
        includes: "Includes",
        description: "Bring the party straight to your home and embrace your Latino side with this Mexican themed meal prep.",
        category: "Classic Meals",
        price: 13.99,
        cookingTime: 25,
        servings: 2,
        imageUrl: "/images/MexicanFiesta.png",
        featuredMealKit: true
    },
    {
        title: "Med Feast",
        includes: "Includes",
        description: "The juiciest meat that will be delivered to your door, enjoy our Mediterranean Feast with its several sides",
        category: "Classic Meals",
        price: 14.99,
        cookingTime: 25,
        servings: 2,
        imageUrl: "/images/MedFeast.png",
        featuredMealKit: true
    },
    {
        title: "Orange Chicken",
        includes: "Includes",
        description: "A modern classic, orange chicken perfects the mix between sweet and salty as you get a delicious chicken covered in a sweet and refreshing orange flavoured sauce which orange peels decorating the dish. A perfect way to spice things up and eat chicken differently",
        category: "Homemade Feels",
        price: 11.99,
        cookingTime: 25,
        servings: 2,
        imageUrl: "/images/OrangeChicken.webp",
        featuredMealKit: false
    },
    {
        title: "Rustic Italian Pasta Bake",
        includes: "Penne pasta, marinara sauce, mozzarella cheese, Italian sausage, bell peppers, onions, garlic, Italian seasoning",
        description: "A hearty and comforting dish, this Rustic Italian Pasta Bake combines al dente penne pasta with savory Italian sausage, a rich marinara sauce, and a blend of bell peppers and onions. Topped with gooey mozzarella cheese and baked to perfection, it's a perfect meal to gather the family around.",
        category: "Homemade Feels",
        price: 22.00,
        cookingTime: 45,
        servings: 4,
        imageUrl: "/images/BakedPasta.webp",
        featuredMealKit: false
    },
    {
        title: "Southern-Style Chicken & Waffles",
        includes: "Buttermilk chicken tenders, waffle mix, maple syrup, butter, hot honey sauce, coleslaw mix, ranch dressing",
        description: "Dive into the soulful flavors of the South with this classic combination of crispy buttermilk chicken tenders and fluffy, golden-brown waffles. Served with a side of coleslaw and drizzled with hot honey sauce for a sweet and spicy kick, this meal is a delightful blend of textures and tastes.",
        category: "Homemade Feels",
        price:24.00,
        cookingTime: 30,
        servings: 4,
        imageUrl: "/images/ChickenWaffles.webp",
        featuredMealKit: false
    },
    {
        title: "Vietnamese Banh Mi Bowls",
        includes: "Jasmine rice, pickled carrots and daikon, cucumber, cilantro, soy sauce, honey, lime, pork tenderloin, sriracha mayo",
        description: "Inspired by the vibrant flavors of Vietnamese street food, these Banh Mi Bowls deconstruct the classic sandwich into a delightful rice bowl. Featuring marinated pork tenderloin, tangy pickled vegetables, and a zesty sriracha mayo, it's a refreshing and flavorful meal that brings the essence of Vietnam to your table.",
        category: "Global Street Eats",
        price: 20.00,
        cookingTime: 35,
        servings: 4,
        imageUrl: "/images/MiBowls.webp",
        featuredMealKit: false
    },
    {
        title: "Moroccan Chickpea Street Tacos",
        includes: "Chickpeas, Moroccan spice blend, tortillas, red onion, feta cheese, tzatziki sauce, lemon, parsley",
        description: "Experience the fusion of Moroccan spices and the taco tradition with these innovative street tacos. Spiced chickpeas, zesty red onion, crumbled feta, and cool tzatziki sauce come together in soft tortillas for a quick, nutritious, and exciting meal that pays homage to global flavors.",
        category: "Global Street Eats",
        price: 18.00,
        cookingTime: 25,
        servings: 4,
        imageUrl: "/images/StreetTacos.webp",
        featuredMealKit: false
    },
    {
        title: "Tacos al Pastor",
        includes: "Marinated pork, cilantro lime rice, charred pineapple, red onions, avocado lime sauce",
        description: "This Tacos al Pastor Bowl deconstructs the traditional taco and turns it into a convenient meal prep option without losing any of the authentic flavors. This meal prep is not only flavorful but also balanced, offering protein, grains, and plenty of vegetables, making it a wholesome choice for any day of the week.",
        category: "Global Street Eats",
        price: 18.00,
        cookingTime: 25,
        servings: 4,
        imageUrl: "/images/TacosPastor.webp",
        featuredMealKit: false
    },
]

module.exports.getAllMealKits = function() 
{
    return mealkits;
}

module.exports.getFeaturedMealKits = function(mealkits) 
{
    let filtered = [];

    for (let i = 0; i < mealkits.length; i++)
    {
        if(mealkits[i].featuredMealKit)
        {
            filtered.push(mealkits[i]);
        }
    }

    return filtered;
}

module.exports.getMealKitsbyCategory = function(mealkits) 
{
    // Create an object to hold categories and their meal kits
    const categories = {};

    // Loop through each meal kit to organize them by category
    mealkits.forEach(mealKit => {
    // Check if the category already exists in the categories object
    if (!categories[mealKit.category]) 
    {
        // If not, initialize the category with the meal kit
        categories[mealKit.category] = {
        categoryName: mealKit.category,
        mealKits: []
        };
    }
    // Add the meal kit to the corresponding category
    categories[mealKit.category].mealKits.push(mealKit);
    });

    // Convert the categories object into an array of its values
    return Object.values(categories);
}

