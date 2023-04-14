import React, { useMemo, useState } from 'react'

export const UseMemo = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [products, setProducts] = useState([])

  const onAddProduct = () => {
    setProducts([...products, { name, price: Number(price) }])
    console.log(products);
  } 
  const total = useMemo(() => {
    const result = products.reduce((acc, ele) => {
      console.log('Tính toán lại ...');
      return acc + ele.price
    }, 0)
    return result
}, [products])
  // const total = products.reduce((prev, curr) => prev + curr.price, 0)
  return (
    <div>
      <input
        placeholder='Enter name...'
        value={name}
        type="text"
        onChange={e => setName(e.target.value)}
      />
      <input
        style={{display: 'block'}}
        placeholder='Enter price...'
        value={price}
        type="number"
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={onAddProduct}>Add product</button>
      <div>Total:{total} </div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - { product.price}</li>
        ))}
      </ul>
    </div>
  )
}
