class CartObject {
  get products () {
    return JSON.parse(localStorage.getItem('shoppingCart') || '[]')
  }

  set products (products) {
    localStorage.setItem('shoppingCart', JSON.stringify(products))
  }

  addProduct (productObject) {
    let products = this.products

    const productAlreadyInCart = products.find((product) => product._id === productObject._id) !== undefined

    if (productAlreadyInCart) {
      // Increase quantity
      products = products.map((product) => {
        if (product._id === productObject._id) product.quantity++
        return product
      })
    } else {
      // Add product
      productObject.quantity = 1
      products.push(productObject)
    }

    this.products = products
  }
}

export default new CartObject()
