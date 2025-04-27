import React from 'react'

const Signup = () => {
    return (
        <div className="formContainer sign">
            <h1>Create an Account</h1>
            <form>
                <label>
                    <input type="text" placeholder='Enter Youe Name' />
                    <input type="text" placeholder='Enter Youe Last Name' />
                </label>
                <input type="email" placeholder='Enter Youe Email' />
                <input type="text" placeholder='Create Youe UserNamer' />
                <input type="password" placeholder='Create Strong Password' />
                <input type="number" placeholder='Enter Youe Phone Number' />
                <select>
                    <option value="">Select Account Type</option>
                    <option value="">Freelancer</option>
                    <option value="">Buyer / HR</option>
                    <option value="">Others</option>
                </select>
                <button>SIGN UP</button>
            </form>
        </div>
    )
}

export default Signup
