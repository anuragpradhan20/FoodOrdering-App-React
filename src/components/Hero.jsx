function Hero() {
  return (
    <>
      <div className="w-[900px] mx-auto rounded-xl bg-yellow-700  relative px-10 py-16 flex gap-2">
        <div className="w-[400px]">
          <h1 className="font-semibold text-white text-4xl mb-4">
            Order Your Favorite Food here
          </h1>
          <p className="text-xs text-neutral-200 mb-4">
            Indulge in a symphony of flavors. Savor fresh ingredients expertly
            crafted. Experience culinary excellence delivered. Relish rich,
            savory gourmet meals. Enjoy a burst of vibrant flavors. Treat
            yourself to delectable dining. Discover perfectly balanced spices.
          </p>
          <button
            type="button"
            className="border-none py-2 px-6 rounded-full text-sm bg-white text-yellow-900"
          >
            View Menu
          </button>
        </div>
        <div className="w-[400px]">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            srcset=""
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
