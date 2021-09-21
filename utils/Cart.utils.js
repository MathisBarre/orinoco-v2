export function addProduct (products, newProduct) {
  const productAlreadyInCart = products.find((product) => product._id === newProduct._id) !== undefined

  if (productAlreadyInCart) {
  // Increase quantity
    products = products.map((product) => {
      if (product._id === newProduct._id) product.quantity++
      return product
    })
  } else {
  // Add product
    newProduct.quantity = 1
    products.push(newProduct)
  }

  return products
}

export function updateProductQuantity (products, newQuantity, productToUpdateId) {
  return products.map((product) => {
    if (product._id === productToUpdateId) { product.quantity = newQuantity }
    return product
  })
}

export function getTotalPrice (products) {
  return Object.values(products).reduce((acc, curr) => {
    return acc + (curr.quantity * curr.price)
  }, 0)
}
