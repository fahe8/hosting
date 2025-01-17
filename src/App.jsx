import "./App.css";
import NavBar from "./header/NavBar";
import AnnoucementBody from "./announcementBody/AnnoucementBody";
import FaqCards from "./faqCards/FaqCards";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Apply from "./apply/Apply";
import Footer from "./footer/Footer";
import Pqr from "./pqr/Pqr";
import MostRecent from "./mostRecent/MostRecent";
import History from "./history/history";

function App() {
  const location = useLocation();

  return (
    <>
      <header className="">
        <div className="us-official">
          <div className="container lg:w-full md:w-[790px]">
            {" "}
            Official Website of the Department of Homeland Security{" "}
          </div>
        </div>
        {/* LOGOS NAVBAR */}
        <NavBar />
        <AnnoucementBody />

        <section>
          <div className="home-wrapper">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/apply" element={<Apply />}></Route>
              <Route path="/faq" element={<Pqr />}></Route>
              <Route path="/recent" element={<MostRecent/>}></Route>
              <Route path="/history" element={<History/>}></Route>
            </Routes>
            {location.pathname !== "/faq" && (
              <div className=" hidden lg:block bg-white text-center pt-6 pb-14">
                <h3 className="">
                  Frequently Asked Questions
                  <br />
                  <span>related to this page</span>
                </h3>
                <div className="bg-[#ede7dc] p-[10px] grid grid-cols-4 container lg:w-full md:w-[790px] my-6">
                  <FaqCards />
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className=" font-bold">
          <Footer />
        </footer>
      </header>
    </>
  );
}

export default App;
