export default function Banner() {
    return (
      <div className="relative w-full h-[300px] md:h-[400px] bg-blue-500 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-80"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Your Trusted Online Medical Store
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Get genuine medicines and health products delivered to your doorstep.
          </p>
          <a
            href="/products"
            className="mt-5 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    );
  }
  