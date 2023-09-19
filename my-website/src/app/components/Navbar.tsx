"use client";

const Navbar = () => {
  return (
    <div className="">
      <div className="fixed left-0 w-1/12 h-full transition-transform duration-500 -translate-x-32 hover:translate-x-0">
        <div className="-bottom-96 grid grid-cols-1 initial-load-left gap-0.5 ">
          <a
            className="transition ease-in-out delay-150 duration-300 bg-red-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
            href="#About_Me"
          >
            About me
          </a>

          <a
            className="transition ease-in-out delay-150 duration-300 bg-blue-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
            href="#Projects"
          >
            Projects
          </a>

          <a
            className="transition ease-in-out delay-150 duration-300 bg-green-500 inline-block py-3 text-center text-black border-2 border-black font-semibold rounded-sm hover:scale-125 hover:shadow-lg hover:px-3"
            href="#Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
