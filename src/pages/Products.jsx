import { useEffect, useState } from 'react'
import { Card } from '../components/Card'

function Products() {
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState()

    const getProducts = async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            let resData = await response.json()
            setProducts(resData)
        } catch (err) {
            alert(err.message)
        }
    }

    const getCategories = async () => {
        let response = await fetch(
            'https://fakestoreapi.com/products/categories',
        )

        if (response.ok) {
            let resData = await response.json()
            setCategories(resData)
        } else {
            alert('Ошибка HTTP: ' + response.status)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <button onClick={getProducts}>getProducts</button>
            <button onClick={getCategories}>getCategories</button>

            {products &&
                products.map(elem => (
                    <Card id={elem.id} title={elem.title} image={elem.image} />
                ))}

            {categories && categories.map(elem => <div>{elem}</div>)}
        </div>
    )
}

export default Products
