export default async function getProducts () {
  return fetch(`${process.env.API_URL}/api/teddies`)
    .then((httpBodyResponse) => httpBodyResponse.json())
}
