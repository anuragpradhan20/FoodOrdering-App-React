import foods from "./FoodItem";
import Item from "./Item";
import Dishes from "./Dishes";
import { useParams } from "react-router-dom";
function Menu() {
  let { foodUniqueId } = useParams();
  let fooditem = foods.find((foodie) => foodie.foodUniqueId == foodUniqueId);
  let allFoodItem=foods.find((foodie) => foodie.foodUniqueId == 9);
  return (
    <>
      <div className="w-[900px] mx-auto my-4">
        <h1 className="text-yellow-900 font-semibold text-xl">
          Explore our Menu
        </h1>
        <p className="w-[600px] text-sm text-gray-700 mt-2">
          Indulge in a symphony of flavors. Savor fresh ingredients expertly
          crafted. Experience culinary excellence delivered. Relish rich, savory
          gourmet meals. Enjoy a burst of vibrant flavors.{" "}
        </p>
      </div>
      <div className="w-[900px] mx-auto flex justify-between items-center ">
        {foods.map((food) => (
          <Item
            foodUniqueId={food.foodUniqueId}
            foodName={food.foodName}
            foodImage={food.foodImage}
          ></Item>
        ))}
      </div>
      <hr className="w-[900px] mx-auto my-8 border-t-2 border-gray-300"></hr>
      <h1 className="w-[900px] mx-auto text-yellow-900 font-semibold text-xl my-2">
        Top Dishes near to you
      </h1>
      <div className="w-[900px] mx-auto flex justify-between flex-wrap items-center mt-2">
        {fooditem ? (
          fooditem.dishes.map(dish => 
            <Dishes
              dishUniqueId={dish.dishUniqueId}
              dishName={dish.dishName}
              image={dish.image}
              description={dish.description}
              rating={dish.rating}
              type={dish.type}
              price={dish.price}
            ></Dishes>
          )
        ) : (

            allFoodItem.dishes.map(dish => 
                <Dishes
                  dishUniqueId={dish.dishUniqueId}
                  dishName={dish.dishName}
                  image={dish.image}
                  description={dish.description}
                  rating={dish.rating}
                  type={dish.type}
                  price={dish.price}
                ></Dishes>
              )
        )}
      </div>
      <hr className="w-[900px] mx-auto my-8 border-t-2 border-gray-300"></hr>
    </>
  );
}
export default Menu;
