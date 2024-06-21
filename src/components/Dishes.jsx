function Dishes({dishUniqueId, dishName,description,rating,type,price,image})
{
    return(
        <>
        <div className="w-[200px] shadow-md rounded-lg  mt-4">
          <div className="w-[200px] relative">
          <img src={image} alt=""  className="w-full rounded-tl-lg rounded-tr-lg object-cover" />
          {
            
            type=="Veg" ? <p className="font-semibold text-sm text-green-800 absolute right-2 bottom-2 bg-white px-1 rounded-md">{type}</p> : <p className="font-semibold text-sm text-red-700 absolute right-2 bottom-2 bg-white px-1 rounded-md">{type}</p>
          }
          </div>
          
          <div className="p-2 mt-1 flex items-center justify-between">
          <p className="font-semibold text-base">{dishName}</p>
          <p className="font-semibold text-sm bg-green-800 text-white px-1 rounded-lg">{rating}</p>
          </div>
          <p className="text-sm p-2 text-neutral-600 w-full mt-0">{description}</p>
          <p className="font-semibold text-base p-2 text-yellow-900 mt-0">{price}</p>
        </div>
        </>
    )
}
export default Dishes;