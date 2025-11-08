import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuTop from "./layouts/MenuTop";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";
const Layout = () => {
  return (
    <body>
      <header id="header" style={{ minHeight: 169 }}>
        <div class="header_top">
          <div class="container_main">
            <MenuTop />
          </div>
        </div>

        <div id="main_menu"></div>

        <div class="header">
          <div class="container_main">
            <div class="logo">
              <a href="/">
                <img
                  src="https://www.bubbleblabber.com/wp-content/uploads/2025/09/TatsukiFujimoto17to26-819x1024-1-819x765.jpeg"
                  alt="Logo"
                />
              </a>
            </div>

            <div id="main_menu">
              <MenuBox />
            </div>
          </div>
        </div>
      </header>

      <div class="news-home">
        <div class="container_main" style={{ minHeight: 800 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Layout;
