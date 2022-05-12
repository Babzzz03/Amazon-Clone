import React from 'react'
import "./Home.css"
import Product from './Product';

import Slider from "./Slider"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="home__image"><Slider/></div>

        <div className="home__row">
          <Product
            id="1"
            title="Cotton Acetate Cardigan Stitch Double Front Long Sleeve Panel Cardigan"
            price={783}
            image="https://theshopyohjiyamamoto.com/img/goods/YQ-K65-046/YQ-K65-046_3-1.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround Sound PS4 Headset 50mm Drivers, 3.5mm Audio Jack Over Ear Headphones Wired for PC Switch Playstation Xbox PS5 Laptop"
            price={81}
            image="https://m.media-amazon.com/images/I/712cTozifHL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Tanned Soft Leather Combination Cap Toe Side Gore BTS"
            price={945}
            image="https://theshopyohjiyamamoto.com/img/goods/YG-E05-703/YG-E05-703_1-1.jpg"
            rating={6}
          />
          <Product
            id="4"
            title="Gen Game Wireless Bluetooth Gamepad Game Controller For IOS Android Smartphones Tablet"
            price={110}
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/193515/1.jpg?8877"
            rating={4}
          />
          <Product
            id="5"
            title="Amani 32Inches Amani Full HD LED TV 2 Years Waranty Promo Price"
            price={999}
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/910466/1.jpg?6806"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Infinix Note 11 Pro (X697) '6.95 FHD+ 120Hz, 8GB RAM + 128GB ROM'"
            price={1999}
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/466749/1.jpg?4443"
            rating={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home