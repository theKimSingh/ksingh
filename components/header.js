import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "./selector";
// Local Data
import data from "../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                Kim Paul Singh.
              </h1>

              <div className="flex items-center">

                <Button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  {theme === "dark" ?
                    <img
                      className="h-6"
                      src={("images/moon.svg")}></img> : <img
                      className="h-6"
                      src={("images/sun.svg")}
                    ></img>}
                </Button>


                <Popover.Button>
                  <img
                    className="h-5"
                    src={(`images/${!open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`)}
                  ></img>
                </Popover.Button>
              </div>
            </div>

          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"
          } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          Kim Paul Singh.
        </h1>

        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>

          <Button onClick={() => window.open("https://read.cv/kimsingh")}>CV</Button>
          <Button onClick={handleAboutScroll}>Socials</Button>

          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>


      </div>
    </>
  );
};

export default Header;
