import data from '../../../data/data.json';

export function getAllProductsIds() {


  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return data.map((fileName) => {
    return {
      params: {
        id: fileName.id.toString(),
      },
    };
  });
};

export function getProductData(id : number) {
  const product = data.filter(item => item.id === id)
  return {
    ...product,
  }
}
