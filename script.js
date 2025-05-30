let menuList = [
    {dishName:"PALAK PANEER", description:"Palak Paneer is a creamy spinach curry with soft paneer cubes and rich spices.",img:"/images/Palak-Paneer.jpg",vegiterian:true},
     {dishName:"PANEER BUTTER MASALA", description:"Soft paneer cubes in a creamy, mildly spiced tomato and butter gravy.",img:"/images/paneerButterMasala.webp",vegiterian:true},
      {dishName:"CAESAR SALAD", description:" Crisp romaine lettuce tossed with Caesar dressing, parmesan cheese, and crunchy croutons.",img:"/images/caesarSalad.jpg",vegiterian:true},
      {dishName:"MARGHERITA PIZZA", description:" Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves",img:"/images/margiritaPizza.jpg",vegiterian:true},
      
{dishName:"CHANA MASALA", description:"Chana Masala is a tangy and spicy chickpea curry popular in North India.", img:"/images/Easy-Chana-Masala-Recipe-8.jpg", vegiterian:true},
{dishName:"PANEER TIKKA", description:"Paneer Tikka is a smoky grilled dish made with marinated paneer cubes and spices.", img:"/images/Paneer-Tikka-Indian-Appetizer-400x606.webp", vegiterian:true},
{dishName:"MUTTON ROGAN JOSH", description:"A flavorful Kashmiri curry made with tender mutton and aromatic spices.", img:"/images/muttonrogan.jpg", vegiterian:false},
{dishName:"VEG BIRYANI", description:"Veg Biryani is a fragrant rice dish cooked with mixed vegetables and exotic spices.", img:"/images/Vegetable-Biryani-Restaurant-Style.webp", vegiterian:true},
{dishName:"MASALA DOSA", description:"A crispy South Indian crepe filled with spiced mashed potatoes.", img:"/images/crispy-masala-dosa-indian-food-4zixiqaarbeupwuy.jpg", vegiterian:true},
{dishName:"FISH CURRY", description:"A tangy and spicy curry made with fresh fish and regional spices.", img:"/images/fishcurrey.jpg", vegiterian:false},
{dishName:"DAL MAKHANI", description:"Dal Makhani is a creamy lentil curry made with black lentils and butter.", img:"/images/Restaurant-Style-Dal-Makhani.jpg", vegiterian:true},
{dishName:"KADAI PANEER", description:"Kadai Paneer is a spicy and flavorful curry made with bell peppers, tomatoes, and paneer.", img:"/images/Best-Kadai-Paneer-Recipe.jpg", vegiterian:true},
{dishName:"EGG CURRY", description:"Egg Curry is a hearty and spicy gravy made with boiled eggs and aromatic spices.", img:"/images/eggcurry.jpg", vegiterian:false},
{dishName:"ALOO GOBI", description:"Aloo Gobi is a dry North Indian dish made with potatoes, cauliflower, and spices.", img:"/images/aloogobi.jpg", vegiterian:true},
{dishName:"CHICKEN 65", description:"Chicken 65 is a deep-fried spicy chicken dish from South India, often served as a starter.", img:"/images/chicken65.webp", vegiterian:false},
{dishName:"RAJMA", description:"Rajma is a comforting curry made with red kidney beans cooked in a spiced tomato gravy.", img:"/images/rajama.jpg", vegiterian:true},
{dishName:"TANDOORI CHICKEN", description:"Tandoori Chicken is a smoky, marinated chicken roasted in a traditional clay oven.", img:"/images/tandoorichicken-667x1000.webp", vegiterian:false},
{dishName:"BHINDI MASALA", description:"Bhindi Masala is a dry stir-fry made with okra and Indian spices.", img:"/images/bhendi.jpg", vegiterian:true},
{dishName:"KEEMA MATAR", description:"Keema Matar is a spiced ground meat curry with green peas, popular in North India.", img:"/images/Keema-Matar-14-1024x1536.jpg", vegiterian:false},
{dishName:"BAINGAN BHARTA", description:"Baingan Bharta is a smoky mashed eggplant dish mixed with onions, tomatoes, and spices.", img:"/images/bharta.jpg", vegiterian:true},
{dishName:"CHICKEN KORMA", description:"Chicken Korma is a rich and creamy curry made with yogurt, nuts, and mild spices.", img:"/images/Chicken-Korma-Recipe2.jpg", vegiterian:false}

]
function render(){
    menuList.forEach((dishN ,index)=> {
        const main = document.querySelector(".menu-Items");
       const div = document.createElement("div");
       div.className = "dish";
        main.appendChild(div);



       const dish = div;
        const image = document.createElement("img");
        image.src = dishN.img;
        dish.appendChild(image);

        const descriptionWrapper = document.createElement("div");
        descriptionWrapper.className = "description-wrapper";
        dish.appendChild(descriptionWrapper);


        const dishDescription = document.createElement("div");
        dishDescription.className= "dish-description";
        descriptionWrapper.appendChild(dishDescription);


    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.innerHTML = `${dishN.dishName}<br><p>${dishN.description}</p>`;
    dishDescription.appendChild(h1);
   

    });
}
render();