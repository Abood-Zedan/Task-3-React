import React from 'react'
import useFetch from '../../hooks/useFetch'
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/${id}`);
    console.log(data);
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="card mb-3 border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={data.thumbnail} alt={data.description} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column gap-3">
                                    <h2 className="card-title fw-bold">{data.title}</h2>
                                    <p className="card-text fs-5"><span className='fw-bold'>Description:</span> {data.description}</p>
                                    <h4>Price: {data.price}$</h4>
                                    <div className='d-flex gap-5'>
                                        <p>Category: {data.category}</p>
                                        <h5 className="card-text"><small className="text-body-secondary">Rating: {data.rating}</small></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        {data.images.length > 1 && data.images.map( img => 
                            <img src={img} alt={data.description} key={img} className='w-25' />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
