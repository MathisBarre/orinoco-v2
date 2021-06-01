export default async function getProducts () {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teddies`)
    .then((httpBodyResponse) => httpBodyResponse.json())
}
