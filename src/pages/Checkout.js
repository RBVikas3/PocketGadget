import React from 'react';
// import BreadCrumb from '../components/BreadCrumb';
// import Meta from '../components/Meta';
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const Checkout = () => {
    return (
        <>
            {/* <Meta title={"Cart"} />
            <BreadCrumb title="Cart" /> */}
            <div className='checkout- py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Dev Corner</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a></li>
                                        &nbsp; / &nbsp;
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark total-price' to="/cart">Cart</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Shipping </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details total'>Smitha R B (smitharb20@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action='' className='d-flex gap-15 flex-wrap justify-contain-between'>
                                    <div className='w-100'>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="" selected disabled>select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='First Name' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Last Name' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Apartment, Suite,etc' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='City' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value='' selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Zipcode' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='me-2' />Return to Cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{"top":"-10px","right":"2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                        <img src='https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='img-fluid' alt='product' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>asd</h5>
                                            <p className='total-price'>s/ #agfgfd</p>
                                        </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total-price'>$ 100</h5>
                                </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>SubTotal</p>
                                    <p className='total-price' >$1000</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$1000</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h4 className='total-price'>$10000</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout