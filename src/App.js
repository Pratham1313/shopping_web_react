import "./styles.css";
import "./component/navbar.js";
import Navbar from "./component/navbar.js";
import Home from "./pages/home.js";
import Cart from "./pages/cart.js";
import Login from "./pages/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppUser from "./context/AppContext";

export default function App() {
  const [product, setproduct] = useState([]);
  const [cart, Setcart] = useState([]);
  const [name, setname] = useState("");
  const [login, setlogin] = useState(false);

  function add_to_cart(item) {
    let abc = [...cart, item];
    let unique = abc.filter((item, i, arr) => arr.indexOf(item) === i);
    Setcart(unique);
  }

  function remove_cart(item) {
    Setcart(cart.filter((i) => i.title !== item));
  }

  function setnavname() {
    setlogin(true);
  }

  return (
    <>
      <AppUser.Provider
        value={{ product, setproduct, cart, Setcart, add_to_cart, remove_cart }}
      >
        <BrowserRouter>
          <Navbar
            cart={cart}
            name={name}
            setnavname={setnavname}
            login={login}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  product={product}
                  setproduct={setproduct}
                  add_to_cart={add_to_cart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} Setcart={Setcart} remove_cart={remove_cart} />
              }
            />
            <Route
              path="/login"
              element={
                <Login name={name} setname={setname} setnavname={setnavname} />
              }
            />
          </Routes>
        </BrowserRouter>
      </AppUser.Provider>
    </>
  );
}
