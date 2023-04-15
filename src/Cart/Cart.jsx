import React from "react";


import './Cart.css';



function Cart({ product, price,buttn,addPro,removePro}) {

    return (
        <>

           
            
            <div className="card" style={{ width: "250px", height: "300px",margin:"30px" }}>
                {product === 'Sale Item'   && <div className="divin"><p className="p1">sale</p></div>}
                {product === 'Special Item'   && <div className="divin"><p className="p1">sale</p></div>}
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product}</h5>
                    {price.includes(' ') ? (<p className="card-text">{price.substring(0,6)}</p>) : (<p className="cardtext">{price}</p>)}
                    {price.includes(' ') ? (<p className="card-text1">{price.substring(6)}</p>) : ('')}
                    {buttn ? (<button className="btn btn-primary" styles = {{display : "block"}} onClick={() => {
                        removePro(product)
                    }}>Remove</button>)

                     : (<button className="btn btn-primary" styles = {{display : "block"}} onClick={ () =>{
                        addPro(product)
                     }}> Add to cart</button>)}
                    
                </div>
            </div>
            
        </>
    )

}


export default Cart;