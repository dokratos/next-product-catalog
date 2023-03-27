import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import getData from './lib/product';
import { Product } from '@/types';

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
  
  return (
    <>
      <main className='main'>
      <select
      onChange={handleFilter}
      className='select'
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
              <h3 className='product-name'>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <Image 
              src={product.image} 
              alt="product pic" 
              width={300} 
              height={300}
              priority={true}/>
            </Link>
          </article>
        )}
      </section>
      </main>
    </>
  )
}
