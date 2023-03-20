import Link from 'next/link';
// import Image from 'next/image';
import { getAllProductsIds, getProductData } from '../lib/product';

export async function getStaticPaths() {
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = getProductData(Number(params.id));

  return {
    props: {
      productData: productData[0]
    },
  };
}

const Product = ({ productData }) => {
  return (
    <main>
    <h1>{productData.title}</h1>
    <h3>{productData.category}</h3>
    <p>{productData.description}</p>
    <p>{productData.price}</p>
    <Link href="/">Back to home</Link>
    
    </main>
  )
}

export default Product;
