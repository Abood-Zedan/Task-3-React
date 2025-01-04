import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayProduct({data}) {
    return (
        <>
            <section className='products mt-5'>
                <h2 className='text-center'>products</h2>
                <div className="container-fluid">
                    <div className="row justify-content-around row-gap-5">
                        {data.products.map(product =>
                            <div className='col-4 product d-flex align-items-center justify-content-center flex-column gap-3'>
                                <h3 className='text-center'>{product.title}</h3>
                                <img src={product.thumbnail}></img>
                                <Link to={`product/${product.id}`} className='btn text-light align-self-start ms-4'>details</Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
