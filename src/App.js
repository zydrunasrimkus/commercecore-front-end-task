import React from "react";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="md:flex">
        <Cart />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
