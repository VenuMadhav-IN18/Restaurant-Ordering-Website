import foodImg from "../assets/food.jpg"; // add any food image here
import {motion,AnimatePresence} from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-red-500">Spice🔥</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-red-400">Home</a>
          <a href="#" className="hover:text-red-400">Menu</a>
          <a href="#" className="hover:text-red-400">Offers</a>
          <a href="#" className="hover:text-red-400">Contact</a>
        </div>

        <div className="space-x-4">
          <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800" onClick={() => window.location.href="/login"}>
            Sign In
          </button>
          <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700" onClick={() => window.location.href="/register"} >  
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-sm text-gray-400">Easy way to order your food</p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold leading-tight">
            Order Tasty & <br />
            Fresh Food <span className="text-red-500"
                animate={{rotate: 360}}
                transition={{duration:1,repeat:Infinity,ease:"linear"}}>anytime!</span>
          </motion.h1>

          <p className="text-gray-400">
            Just confirm your order and enjoy our fastest delivery.
          </p>

          <div className="space-x-4">
            <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Order Now
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              See Menu
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
          <img
            src={foodImg}
            alt="food"
            className="w-[400px] rounded-full shadow-2xl border-4 border-red-500"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;