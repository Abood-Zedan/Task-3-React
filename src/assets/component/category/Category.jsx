import React from 'react'
import useFetch from '../../hooks/useFetch'
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

export default function Category() {
    const { data, error, isLoading } = useFetch('https://dummyjson.com/products/categories');
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <section className='mt-5 categorys'>
                <h2 className='text-center'>Category</h2>
                <div className="container-fluid">
                    <div className="row justify-content-around row-gap-4">
                        {data.map(category =>
                            <div className="col-4 border text-center category">
                                <Link to={`products/${category.slug}`} className='fs-3 fw-bold text-light text-decoration-none'>{category.name}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
