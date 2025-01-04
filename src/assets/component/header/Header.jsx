import React from 'react'
import ProductLimit from '../productLimit/ProductLimit'
import Category from '../category/Category'
import headerImage from '../../images/header.webp'

export default function Header() {
    return (
        <>
            <header className='mb-5'>
                <img src={headerImage} alt="" className='w-100' />
            </header>
            <Category/>
            <ProductLimit/>
        </>
    )
}
