import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import banner_1 from "./Components/Assets/banner1.png";

import ServiceComponent from "./Components/ServiceComponent/ServiceComponent";
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
                            <ShopCategory banner={banner_1} category="parts" />
                        }
                    />
                    <Route
                        path="/womens"
                        element={<ServiceComponent></ServiceComponent>}
                    />

                    <Route path="/product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSignup />} />

                    {/* Define the route for ServiceComponent */}
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
