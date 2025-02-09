import { Link } from "react-router-dom";
function FoodNavbar()
{
    return(
        <>
        <div className="w-[900px] mx-auto my-6 flex justify-between">
        <Link to={'/'} className="text-3xl text-yellow-900 font-bold">Foodie.</Link>
        <div className="flex items-center gap-4">
        <Link to={'/'} className="text-yellow-900 font-semibold underline">Home</Link>
        <Link to={'/'} className="text-yellow-900 font-semibold">menu</Link>
        <Link to={'/'} className="text-yellow-900 font-semibold">mobile app</Link>
        <Link to={'/'} className="text-yellow-900 font-semibold">contact us</Link>
        </div>
        <div className="text-yellow-900 flex items-center gap-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
         </svg>
          <button type="button" className="border border-yellow-900 py-1 px-4 rounded-full text-sm">Sign in</button>
        </div>
        </div>
        </>
    ) 
}

export default FoodNavbar;