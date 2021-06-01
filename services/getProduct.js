export default function getProduct (productId) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teddies/${productId}`)
    .then((httpBodyResponse) => httpBodyResponse.json())
}
