export function fetchProduct(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}