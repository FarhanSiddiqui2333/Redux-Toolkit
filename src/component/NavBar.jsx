import React from 'react'
import logoIMG from '../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = ({ searchItem, setSearchItem }) => {

    return (
        <header>
            <div className='cupon'>
                <div>
                    You can use our coupon in order to get <span>Best Deals</span> & <span>Discount</span> & Enjoy your journey with us!
                </div>
                <div>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className='logo'>
                <Link to="/">
                    <img src={logoIMG} alt="" />
                </Link>
                <div className="acc">
                    <label>
                        <input type="text" placeholder='Enter item categort...' list='cat' value={searchItem}
                            onChange={(e) => {
                                setSearchItem(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setSearchItem(e.target.value)
                                    setSearchItem('')
                                }
                            }}
                        />
                        <i className="fa-solid fa-magnifying-glass" onClick={() => { setSearchItem("") }}></i>
                        <datalist id='cat'>
                            <option value="audio"></option>
                            <option value="gaming"></option>
                            <option value="mobile"></option>
                            <option value="tv"></option>
                        </datalist>
                    </label>
                    <p>
                        <Link to='/login'>
                            LOGIN
                        </Link>
                    </p>
                    <Link to='/sign'>
                        <button>SIGN UP</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar
