import React from 'react'
import { allTheBooks } from './data'
import { notFound } from 'next/navigation'
import Image from 'next/image';

const getData = (cat) => {
  const data = allTheBooks[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const typePage = ({params}) => {
  const data = getData(params.type)
  return(
    <div>
      {data.map( item => (
        <div id={item.id}>
          <h1>{item.title}</h1>
          <Image src={item.img} height={30} width={30} alt='book cover' />
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default typePage