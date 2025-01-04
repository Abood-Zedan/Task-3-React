import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import DisplayProduct from '../displayProduct/DisplayProduct';
import { useParams } from 'react-router-dom';

export default function ProductsCategory() {

    const { name } = useParams();
    const { data, error, isLoading } = useFetch(`https://dummyjson.com/products/category/${name}`);
    if (isLoading) {
        return <Loading />
    }
    return (
        <DisplayProduct data={data} />
    )
}
