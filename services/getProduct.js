export default function getProduct (productId) {
  return fetch(`${process.env.API_URL}/api/teddies/${productId}`)
    .then((httpBodyResponse) => httpBodyResponse.json())
}
