import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Product = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState()

  const getProducts = async() => {
    try {
      let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      let resData = await response.json()
      setProduct(resData)
    } catch(err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div>Product</div>
      <div>{product?.title}</div>
      <img width={300} src={product?.image} alt="" />
    </>

  )
}
