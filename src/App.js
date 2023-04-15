
import './App.css';

import Cart from './Cart/Cart';
import Comp1 from './Cart/Comp1';
import Comp2 from './Cart/Comp2';

import './Cart/Cart.css'
import { useState } from 'react';



const data = [
  { product: 'Fancy product', price: '$40.00-$80.00' },
  { product: 'Special Item', price: '$20.00 $18.00' },
  { product: 'Sale Item', price: '$50.00 $25.00' },
  { product: 'Popular Item', price: '$40.00' },
  { product: 'Sale Item', price: '$50.00 $25.00' },
  { product: 'Fancy product', price: '$120.00-$280.00' },
  { product: 'Special Item', price: '$20.00 $18.00' },
  { product: 'Popular Item', price: '$40.00' }
]




function App() {
  const [addp, setAdd] = useState([]);

  console.log(addp)

  const addPro = (prod) => {
    setAdd([...addp, prod]);
  }

  const removePro = (p) => {
    setAdd(addp.filter((pr) => pr !== p));
  }

 

  return (


    <div className="App">
      <Comp1 addp={addp} />
      <div className='cartdiv'>
        {data.map((pro) => {
          return (

            <Cart
              product={pro.product}
              price={pro.price}
              buttn={addp.find((prr) => prr === pro.product)}
              addPro={addPro}
              removePro={removePro}
              key={pro.product}
            />

          )
        })}
      </div>
      <Comp2/>
    </div>




  );
}

export default App;
