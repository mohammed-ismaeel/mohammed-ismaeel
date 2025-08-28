import React from "react";

const Sidebar = ({ navLinks, onClose, activeSection }) => {
  
  
  return (
    <div className="sidebar fixed mt-20 right-0 w-2/5 bg-gray-300 dark:bg-black z-40 max-sm:w-1/2">
      <div className="flex flex-col justify-between h-full">
        <div>
          <button
            onClick={onClose}  // <== نغلق الـ sidebar عند الضغط على زر x
            className="sidebar-heading bg-white ml-2 mt-2 px-2 rounded-sm text-xl font-bold hover:bg-blue hover:text-white">
            x
          </button>
          <div className="sidebar-nav">
            <ul className="flex flex-col gap-4 mt-5">
              {navLinks?.map((ele, index) => {
                return (
                  <li
                    key={index}
                    className={`sidebar-links border-b border-gray-400 ${
                      activeSection === ele ? "sidebar-active" : ""
                    }`}
                  >
                    <a
                      href={`#${ele}`}
                       onClick={onClose} // <== عند الضغط على أي عنصر نغلق الـ sidebar
                      className={`text-black w-full text-center font-semibold inline-block relative px-3.5 py-3 z-10 font-medium hover:text-blue hover:cursor-pointer hover:font-semibold no-underline dark:text-white`}
                    >
                      {ele}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ul className="flex list-none justify-evenly mb-1">
          <li className=" hover:scale-125">
            <a
              href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
              target="_blank"
              className=" text-4xl text-blue dark:text-white"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className=" hover:scale-125">
            <a
              href="https://t.me/Moh_Ismaeel"
              target="_blank"
              className=" text-4xl text-blue  dark:text-white"
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li className=" hover:scale-125">
            <a
              href="www.linkedin.com"
              target="_blank"
              className=" text-4xl text-blue  dark:text-white"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className=" hover:scale-125">
            <a
              href=""
              target="_blank"
              className=" text-4xl text-blue  dark:text-white"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li className=" hover:scale-125">
            <a
              href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
              target="_blank"
              className=" text-4xl text-blue  dark:text-white"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
