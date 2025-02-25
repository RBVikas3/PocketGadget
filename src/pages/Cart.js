import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className='containner-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                                <h4  className='cart-col-1'>Product</h4>
                                <h4  className='cart-col-2'>Price</h4>
                                <h4  className='cart-col-3'>Quantity</h4>
                                <h4  className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'className='img-fluid' alt='product-image'/>
                                    </div>
                                    <div className='w-75'>
                                    <h5>asdffg</h5>
                                    <p>Size:dfg</p>
                                    <p>Color:vbn</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>$ 100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input className='form-control' type='number' name='' min={1} max={10} id=''/>
                                    </div>
                                    <div>
                                    <AiFillDelete className='text-danger'/>
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                <h5 className='price'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to='/product' className='button'>Continue to Shopping</Link>
                            </div>
                            <div className='d-flex flex-column align-items-end'>
                            <h4>SubTotal: $ 1000</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to='/checkout' className='button'>CheckOut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart