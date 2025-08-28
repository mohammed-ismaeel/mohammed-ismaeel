import Button from "../Button/Button";
import React, { useContext, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars } from "react-icons/fa6";

const NavBar = ({ onClick, navLinks,onSidebar }) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuLinks = menu.querySelectorAll("a");
    const activeClass = "nav-active";

    // إضافة الحسابات للرابط النشط الحالي
    const menuLinkActive = menu.querySelector("li.nav-active");
    if (menuLinkActive) {
      doCalculations(menuLinkActive);
    }

    // مستمع لأحداث التمرير
    window.addEventListener("scroll", handleScroll);

    // إضافة مستمعي الأحداث لكل رابط
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", function (e) {
        e.preventDefault(); // لمنع السلوك الافتراضي للرابط

        const sectionId = menuLink.getAttribute("href");

        if (sectionId === "#") {
          // التمرير إلى أعلى الصفحة عند النقر على "Home"
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // تمرير الصفحة إلى القسم المطلوب بسلاسة
          const section = document.querySelector(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }

        // تحديث الرابط النشط
        updateActiveLink(menuLink);
      });
    });

    // عند انتهاء التحريك، يتم تغيير لون النص إلى الأبيض
    menu.addEventListener("transitionend", function () {
      const currentActive = menu.querySelector("li.nav-active");
      if (currentActive) {
        currentActive.querySelector("a").style.color = "white";
      }
    });

    // إعادة حساب الموقع والحجم عند تغيير حجم النافذة
    window.addEventListener("resize", function () {
      const menuLinkActive = menu.querySelector("li.nav-active");
      if (menuLinkActive) {
        doCalculations(menuLinkActive);
      }
    });

    return () => {
      menuLinks.forEach((menuLink) => {
        menuLink.removeEventListener("click", () => {});
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  function handleScroll() {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.getBoundingClientRect().height;

      // إذا كان القسم في منتصف الشاشة تقريبًا
      if (
        sectionTop <= window.innerHeight / 2 &&
        sectionTop + sectionHeight >= window.innerHeight / 2
      ) {
        currentSectionId = `#${section.id}`;
      }
    });

    if (currentSectionId) {
      const menuLink = document.querySelector(`a[href="${currentSectionId}"]`);
      if (menuLink) {
        updateActiveLink(menuLink);
      }
    }
  }

  function updateActiveLink(menuLink) {
    const menu = document.querySelector(".menu");
    const activeClass = "nav-active";

    // تحديث الرابط النشط
    const currentActive = menu.querySelector("li.nav-active");
    if (currentActive) {
      currentActive.querySelector("a").style.color = "";
      currentActive.classList.remove(activeClass);
    }

    menuLink.parentElement.classList.add(activeClass);
    doCalculations(menuLink.parentElement);
  }

  function doCalculations(link) {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.style.setProperty("--transformJS", `${link.offsetLeft}px`);
      menu.style.setProperty("--widthJS", `${link.offsetWidth}px`);
    }
  }
  return (
    <nav className="w-full h-20 flex justify-between items-center fixed z-50 px-20 py-0 bg-white shadow-2xl dark:bg-black max-lg:px-10 max-sm:px-5">
      <div className="logo text-2xl font-bold dark:text-white">
        Dev.<span className="text-blue">Mohammed</span>
      </div>
      <ul className="flex gap-4 menu max-lg:hidden">
        {navLinks?.map((ele, index) => {
          return (
            <li className={`nav-link ${index === 0 ? "nav-active" : ""}`}>
              <a
                href={`#${ele}`}
                className={`text-black inline-block relative px-3.5 py-1.5 z-10 font-medium  hover:cursor-pointer  no-underline dark:text-white`}
              >
                {ele}
              </a>
            </li>
          );
        })}
      </ul>

      <button className="max-lg:hidden" onClick={onClick}>
        {theme == "light" ? (
          <IoMdMoon style={{ fontSize: "30px" }} />
        ) : (
          <IoSunny style={{ fontSize: "30px", color: "white" }} />
        )}
      </button>
      <div className="flex gap-5 lg:hidden">
        <button className="" onClick={onClick}>
          {theme == "light" ? (
            <IoMdMoon style={{ fontSize: "30px" }} />
          ) : (
            <IoSunny style={{ fontSize: "30px", color: "white" }} />
          )}
        </button>
        <button className="dark:text-white" onClick={onSidebar}>
          <FaBars style={{ fontSize: "25px" }} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
