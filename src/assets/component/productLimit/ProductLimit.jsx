import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import DisplayProduct from '../displayProduct/DisplayProduct';

export default function ProductLimit() {

    const { data, error, isLoading } = useFetch('https://dummyjson.com/products?limit=12');
    if(isLoading){
        return <Loading/>
    }
    return (
        <>
            <DisplayProduct data={data}/>
        </>
    )
}
