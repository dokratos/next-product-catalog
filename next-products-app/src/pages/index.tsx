import Link from 'next/link';
import Image, { ImageLoaderProps } from 'next/image';
import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// import catalogue from '../../data/data.json';

const myLoader = ({ width }: ImageLoaderProps) => {
  return `https://picsum.photos/${width}/`;
}

import getData from './lib/product';

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

export const getStaticProps: GetStaticProps<{ catalogue: Product[]}> = async () =>  {
  const catalogue: Product[] = await getData();
  return {
    props: {
      catalogue,
    },
  };
}


export default function Home({ catalogue }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState(catalogue);

  useEffect(() => {
    const getFilter = () =>{
      const categoryArray = catalogue.map(product => product.category);
      const categoryFilter = categoryArray.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      categoryFilter.unshift('All');
      setFilter(categoryFilter);
    };
    getFilter();
  }, []);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event) {
      if (event.target.value === 'All') return setData(catalogue);
      const filtered = catalogue.filter(item => item.category === event.target.value);
      setData(filtered);
    }
  };

  console.log(data[0].image)
  
  return (
    <>
      <main className='main'>
      <h1 className="title">Read <Link href="/product">this page!</Link></h1>
      <select
      onChange={handleFilter}
      >
        {filter.map((category, i) =>
        <option
        key={i}
        value={category}>{category}</option>
        )}
        </select>
      <section className='catalogue'>
        {data.map((product, i) => 
          <article
          className='catalogue__product'
          key={i}
          >
            <Link href={`/product/${product.id}`}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.category}</p>
              {/* <Image 
              loader={myLoader}
              src={product.image} alt="product pic" width={300} height={300}/> */}
            </Link>
          </article>
        )}
      </section>
      </main>
    </>
  )
}
