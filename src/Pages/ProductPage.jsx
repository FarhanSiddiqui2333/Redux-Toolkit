import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../Store/productSlice'
import { addToCart, removeToCart } from '../Store/cartSlice'
import { Link } from 'react-router-dom'
import Hero from '../component/Hero'


export function ProductPage({ searchItem }) {
    const DisplayProduct = useSelector((state) => state.product.value)
    const dispatch = useDispatch()
    const [CarName, setCarName] = useState("")
    const [CarBrand, setCarBrand] = useState("")
    const [CarCategory, setCarCategory] = useState("")
    const [CarPrice, setCarPrice] = useState("")
    const [pop, setPop] = useState(false);
    const popupRef = useRef(null);
    const [GetFilter, setGetFilter] = useState(DisplayProduct)
    const [hero, setHero] = useState(true)

    useEffect(() => {
        DisplayProduct.forEach(element => {
            if (searchItem == element.category) {
                setGetFilter(DisplayProduct.filter(item => searchItem == item.category))
            }
        });
    }, [searchItem])




    const filterData = (i) => {
        if (i == "all") {
            setGetFilter(DisplayProduct)
        }
        if (i != "all") {
            let filter = DisplayProduct.filter(item => item.category == i)
            setGetFilter(filter)
        }
    }

    const addData = (i) => {
        setGetFilter(DisplayProduct);
        dispatch(addProduct(i))
    }

    const popup = () => {
        setPop(!pop);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPop(false);
            }
        };

        if (pop) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [pop]);

    return (
        <div>
            {
                pop ? <div ref={popupRef} className="customProduct">
                    <h1 className="cartHead cust">Add Custom Cars</h1>
                    <div className='main'>
                        <input type="text" value={CarName} onChange={(e) => { setCarName(e.target.value) }} list='carName' placeholder='Enter You Car Name' />
                        <input type="text" value={CarBrand} onChange={(e) => { setCarBrand(e.target.value) }} list='carBrand' placeholder='Enter Car Brand' />
                        <input type="text" value={CarCategory} onChange={(e) => { setCarCategory(e.target.value) }} list='carCategory' placeholder='Define the Category' />
                        <input type="number" value={CarPrice} onChange={(e) => { setCarPrice(e.target.value) }} placeholder='Set the Car Price' />
                        <datalist id='carName'>
                            <option value="Ferrari GTB"></option>
                            <option value="Lamborghini Urus"></option>
                            <option value="Koenigsegg Jesko"></option>
                            <option value="Rolls Royce Phantom"></option>
                            <option value="Bugatti Divo"></option>
                            <option value="BMW M5"></option>
                            <option value="Supra MK5"></option>
                            <option value="Koenigsegg One:1"></option>
                            <option value="Lamborghini Huracan"></option>
                            <option value="BMW M4"></option>
                            <option value="Supra MK4"></option>
                            <option value="Formula 1"></option>
                            <option value="Civic"></option>
                            <option value="Carolla Grande"></option>
                        </datalist>
                        <datalist id='carCategory'>
                            <option value="sper car"></option>
                            <option value="suv"></option>
                            <option value="sport car"></option>
                            <option value="off roader"></option>
                            <option value="hyper car"></option>
                            <option value="relaible"></option>
                        </datalist>
                        <datalist id='carBrand'>
                            <option value="Bugatti"></option>
                            <option value="Toyota"></option>
                            <option value="Rolls Royce"></option>
                            <option value="Honda"></option>
                            <option value="Suzuki"></option>
                            <option value="Ferrari"></option>
                            <option value="Lamborghini"></option>
                            <option value="Koenigsegg"></option>
                            <option value="BMW"></option>
                            <option value="FOM"></option>
                        </datalist>

                        <button onClick={() => {
                            const customCars = {
                                brand: CarBrand,
                                category: CarCategory,
                                title: CarName,
                                price: CarPrice + "M",
                                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0l371dLbp9e756M_eStrlK0-EEz-dsoKP_w&s'
                            }
                            if (CarBrand !== "" && CarName !== "" && CarCategory !== "" && CarPrice !== "") {
                                addData(customCars)
                            }

                        }} >ADD CUSTOM CAR</button>

                    </div>
                </div> : null
            }
            <div className="custom" onClick={() => { popup() }}>
                <i className="fa-solid fa-plus"></i>
                Add Custom Product
            </div>

            <div className="nav">
                <button onClick={() => {
                    filterData("all")
                    setHero(false)
                }}>All</button>
                <button onClick={() => {
                    filterData("audio")
                    setHero(false)
                }}>Audio</button>
                <button onClick={() => {
                    filterData("mobile")
                    setHero(false)
                }}>Mobile</button>
                <button onClick={() => {
                    filterData("gaming")
                    setHero(false)
                }}>Gaming</button>
                <button onClick={() => {
                    filterData("tv")
                    setHero(false)
                }}>TV</button>
                <button onClick={() => {
                    filterData("all")
                    setHero(false)
                }}>Electronic</button>
                <button>Clothing</button>
                <button>Accessories</button>
                <button>Shoes</button>
                <button>Watch</button>
            </div>


            {
                hero ?
                    <Hero />
                    : null
            }
            {
                hero ? <div className="card">
                    <div><i className="fa-solid fa-check"></i> Online Transactions</div>
                    <div><i className="fa-solid fa-check"></i> Diverse Platforms</div>
                    <div><i className="fa-solid fa-check"></i> Growth</div>
                    <div><i className="fa-solid fa-check"></i> E-commerce</div>
                </div> : null
            }



            <h2 className='productHead'>Available Product</h2>

            <div className='main'>
                <div className='back' style={{ display: hero ? 'none' : 'block' }} onClick={() => { setHero(true) }} >
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                {
                    GetFilter.map((item, idx) => {
                        return (
                            <div key={idx} className='productCard'>
                                <img src={item.image} alt="" />
                                <h4>{item.category}</h4>
                                <h1>{item.title}</h1>
                                <h3>{item.brand}</h3>
                                <p>{"$" + item.price}</p>
                                <Link to="/cart">
                                    <button onClick={() => {
                                        dispatch(addToCart(item))
                                    }}>ADD TO CART</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}