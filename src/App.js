import "./App.css";

import Cart from "./Cart/Cart";
import HeaderCompnent from "./Cart/HeaderCompnent";
import FooterComponent from "./Cart/FooterComponent";

import "./Cart/Cart.css";
import { useState } from "react";

const data = [
  { id: 1, product: "Fancy product", price: "$40.00-$80.00" },
  { id: 2, product: "Special Item", price: "$20.00 $18.00" },
  { id: 3, product: "Sale Item", price: "$50.00 $25.00" },
  { id: 4, product: "Popular Item", price: "$40.00" },
  { id: 5, product: "Sale Item", price: "$50.00 $25.00" },
  { id: 6, product: "Fancy product", price: "$120.00-$280.00" },
  { id: 7, product: "Special Item", price: "$20.00 $18.00" },
  { id: 8, product: "Popular Item", price: "$40.00" },
];

function App() {
  const [addp, setAdd] = useState([]);

  console.log(addp);

  const addPro = (id) => {
    const cartProduct = data.filter((val) => val.id === id);
    console.log(cartProduct);
    setAdd([...addp, ...cartProduct]);
  };

  const removePro = (p) => {
    setAdd(addp.filter((pr) => pr.id !== p));
  };

  return (
    <div className="App">
      <HeaderCompnent addp={addp} />
      <div className="cartdiv">
        {data.map((pro) => {
          return (
            <Cart
              id={pro.id}
              product={pro.product}
              price={pro.price}
              buttn={addp.find((prr) => prr.id === pro.id)}
              addPro={addPro}
              removePro={removePro}
              key={pro.id}
            />
          );
        })}
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
