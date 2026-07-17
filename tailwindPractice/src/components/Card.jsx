
// here we are passing the name and btnText in this we can also pass the props after we can access it with the props.name and props.btnText
function Card({name, btnText}) {
  return (
    <>
      <div className="mt-6">
        <div className="w-72 bg-white/5 rounded-xl overflow-hidden shadow-xl mx-auto">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="w-full h-80 object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute left-4 bottom-4 text-left">
              <h3 className="text-white text-lg font-semibold">{name}</h3>
              <p className="text-gray-300 text-sm max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button className="mt-3 bg-black/80 text-white text-sm font-medium px-3 py-2 rounded-lg shadow">
                {btnText || "never click me!!!"}
                {/* {btnText} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
