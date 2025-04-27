import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../Store/cartSlice'


const AddToCartPage = () => {
    const displayCart = useSelector((state) => state.cart.value)
    /*new set ki help array mai all element unique hote hai it mean iskai help sai ek element ek bar hi add hosakta hai bar bar nhi*/
    const FilterProduct = useRef(new Set())
    const [showProduct, setShowProduct] = useState([])
    const productFilter = () => {
        displayCart.forEach((element) => {
            /*it work as same principle of array function are "includes()" and "some()"*/
            if (!FilterProduct.current.has(element)) {
                FilterProduct.current.add(element);
            }
        });

        /*it can shift any data type and object into an array*/
        let result = Array.from(FilterProduct.current)

        setShowProduct(result);
    }
    const dispatch = useDispatch(); // make sure this is at the top

    const getdata = (item) => {
        // Remove item from the FilterProduct Set by its ID
        FilterProduct.current = new Set(
            Array.from(FilterProduct.current).filter(i => i.id !== item.id)
        );

        // Update the display list
        setShowProduct(Array.from(FilterProduct.current));

        // Remove from Redux cart as well (the actual source of truth)
        dispatch(removeToCart(item));
    };


    useEffect(() => {
        productFilter();
    }, []);


    return (
        <div>
            <h1 className='cartHead'>Cart Items</h1>

            <ul className='reviewHead'>
                <li>Product Review</li>
                <li>Category</li>
                <li>Name</li>
                <li>Brand</li>
                <li>Price</li>
            </ul>

            <div className='main cart'>
                {
                    showProduct.map((item, idx) => {
                        return (
                            <div key={idx} className='productCard'>
                                <img src={item.image} alt="" />
                                <i className="fa-solid fa-xmark" onClick={() => {
                                    getdata(item)
                                }}></i>
                                <h4>{item.category}</h4>
                                <h1>{item.title}</h1>
                                <h3>{item.brand}</h3>
                                <p>{"$" + item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AddToCartPage