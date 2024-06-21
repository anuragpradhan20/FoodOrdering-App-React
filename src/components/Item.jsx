import { Link } from "react-router-dom";

function Item({foodUniqueId,foodName,foodImage})
{
    return(
        <>
           <Link to={`/${foodUniqueId}`}>
           <div className="text-center w-[80px] flex flex-col">
            <img src={foodImage} alt="" className="w-[80px] h-[80px] rounded-full object-cover border-2 border-white transition hover:border-yellow-900 hover:scale-105"/>
            <p className="text-yellow-900 font-semibold mt-2 text-base">{foodName}</p>
           </div>
           </Link>
        </>
    )
}
export default Item;