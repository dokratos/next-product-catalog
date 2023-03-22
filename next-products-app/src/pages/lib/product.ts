import { Product }from '../../types';

const getData = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  return data.json();
}

export async function getAllProductsIds() {
  const data = await getData();
  return data.map((fileName: Product) => {
    return {
      params: {
        id: fileName.id.toString(),
      },
    };
  });
};

export async function getProductData(id : number) {
  const data: Product[] = await getData();
  const product = data.filter(item => item.id === id)
  return {
    ...product,
  }
}

export default getData;