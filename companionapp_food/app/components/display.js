import Image from 'next/image'
import React from 'react'
import Card from './card'
export default function Display() {

  const placeholderImageSrcs = [
     "/cheetoSphere1.jpeg",
    "/bananas.jpeg", "/peanuts.jpeg"];

//"https://snackathonfoods.com/cdn/shop/products/kirkland-signature-roasted-salted-extra-crunchy-peanuts-kirkland-signature-crunchy-16-ounce-852107_644x1500.jpg?v=1602006813",
// "https://m.media-amazon.com/images/I/41aucKvYGDL.jpg",
// "https://www.meijer.com/content/dam/meijer/product/0015/66/5601/00/0015665601004_a1c1_0600.png",
// "https://media.npr.org/assets/img/2011/08/19/istock_000017061174small-6ca3bb7c8b6c768b92153932e822623a95065935.jpg",
// "https://www.candywarehouse.com/cdn/shop/files/rice-krispies-treats-60-piece-box-candy-warehouse-1.jpg?v=1689309790",
// "https://target.scene7.com/is/image/Target/GUEST_4dafd1cd-d2d6-4512-bd2a-2c7d97c12f48?wid=488&hei=488&fmt=pjpeg"
  
  const fetchedImages = [];

  //populating fetched Images array with next Image components
  // for (let i = 0 ; i < Object.keys(placeholderImageSrcs).length ; i++) {
  //   fetchedImages.push(<Image
  //     src={placeholderImageSrcs[i+1]} 
  //     alt='food image'
  //     width={100}
  //     height={150}
  //     quality={100} 
  //   />);
  // }
  return (
    <div>
      {placeholderImageSrcs.map((img, i) => (
          <Card img={img}></Card>
          
      ))}
      
    </div>
  )
}
