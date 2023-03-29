import Link from 'next/link';
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Image from 'next/image';
import { getAllProductsIds, getProductData } from '../lib/product';
import { Product } from '../../types';

export async function getStaticPaths() {
  const paths = await getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{ productData: Product }> = async ({ params }) => {
  const productData = await getProductData(Number(params?.id));
  return {
    props: {
      productData: productData[0]
    },
  };
}

export default function Detail({ productData }: InferGetStaticPropsType<typeof getStaticProps>){

  return (
    <main className='product-page'>
      <Link href='/'>Back Home</Link>
      <h1>{productData.title}</h1>
      <p>{productData.price}</p>
      <p>{productData.description}</p>
      <Image 
              src={productData.image} 
              alt="product pic" 
              width={500} 
              height={500}
              priority={true}/>
    </main>
  );
}

