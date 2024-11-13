// import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";
// import Cart from "./Pages/Cart";
// import LoginSignup from "./Pages/LoginSignup";
// function App() {
//     return (
//         <div>
//             <Navbar></Navbar>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Shop></Shop>}></Route>
//                     <Route
//                         path="/mens"
//                         element={<ShopCategory category="men"></ShopCategory>}
//                     ></Route>
//                     <Route
//                         path="/womens"
//                         element={<ShopCategory category="women"></ShopCategory>}
//                     ></Route>
//                     <Route
//                         path="/kids"
//                         element={<ShopCategory category="kid"></ShopCategory>}
//                     ></Route>
//                     <Route
//                         path="/product"
//                         element={<Product></Product>}
//                     ></Route>
//                     <Route
//                         path=":productId"
//                         element={<Product></Product>}
//                     ></Route>
//                     <Route path="/cart" element={<Cart></Cart>}></Route>
//                     <Route
//                         path="/login"
//                         element={<LoginSignup></LoginSignup>}
//                     ></Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner1.png";
import women_banner from "./Components/Assets/banner2.jpg";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route
                        path="/mens"
                        element={
                            <ShopCategory
                                banner={men_banner}
                                category="parts"
                            />
                        }
                    />
                    <Route
                        path="/womens"
                        element={
                            <ShopCategory
                                banner={women_banner}
                                category="parts"
                            />
                        }
                    />
                    <Route
                        path="/kids"
                        element={
                            <ShopCategory banner={kid_banner} category="kid" />
                        }
                    />
                    x
                    <Route path="/product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
