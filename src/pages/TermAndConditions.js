import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';


const TermAndConditions = () => {
  return (
   <>
   <Meta title={"Terms And Conditions"} />
            <BreadCrumb title="Terms And Conditions" />
            <section className='policy-wrapper py-3 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='policy'></div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default TermAndConditions