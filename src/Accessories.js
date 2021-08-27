import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Product2.css";
import Grid from "@material-ui/core/Grid";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "react-bootstrap";
import Row from "./Row";
import Card2 from "./Card2";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
  },
  media: {
    height: 140,
  },
});

function Accessories({product, setProduct}) {
  const classes = useStyles();
  const items = [
    {
      id: "1",
      src: "https://rukminim1.flixcart.com/image/416/416/ks4yz680/laptop-skin-decal/4/x/q/hd-printed-full-panel-laptop-skin-sticker-vinyl-fits-size-upto-original-imag5rtgsuj9yhyt.jpeg?q=70",
      title: "Printed Full Panel Laptop Skin Sticker",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "2",
      src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_GEO_US_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122867000",
      title: "iPhone12 and iPhone12 mini - Apple",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "3",
      src: "https://cdn.idealo.com/folder/Product/200455/6/200455675/s3_produktbild_gross/canon-eos-r6.jpg",
      title: "Canon Canon Full Frame Mirrorless EOS R6 Camera Body",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "4",
      src: "https://i.gadgets360cdn.com/products/large/google-nest-mini-main-1200x675-1574667312.jpg",
      title: "Google Nest Mini (2nd Gen) with Google Assistant Smart Speaker",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "5",
      src: "https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/keyboard/gaming-keyboard/p/t/7/zeb-magnus-zebronics-original-imafyfftskutknfu.jpeg?q=70",
      title: "HP KM3004 Wired Gaming Keyboard",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "6",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/iPad_Pro_2020_1200x768.jpeg?75BJfJMCD_d.UCSwkDLN8RZvxXkkiYcm&size=1200:675",
      title: "APPLE iPad Pro 2021 12.9 inch and wide display",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "7",
      src: "https://m.media-amazon.com/images/I/51KfNINjdTL._SX342_.jpg",
      title: "Portronics Konnect A Type C Cable 3 A 2 m USB Type C Cable",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "8",
      src: "https://rukminim1.flixcart.com/image/416/416/k6qsn0w0/smart-glass/f/g/p/virtual-reality-headset-ventarx-b11-32gb-raxdon-original-imafp4kumpnszbjb.jpeg?q=70",
      title: "Raxdon Virtual Reality Headset Ventarx B11 - 32GB",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "9",
      src: "https://www.exlmart.com/image/cache/catalog/B075R9P7H8/AppleWatch-Series3-GPS-42mm---Space-Gray-Aluminium-Case-with-Black-Sport-Band-B0-322x218.jpg",
      title: "APPLE Watch Series 3 GPS - 38 mm Black Sport Band",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "10",
      src: "https://m.media-amazon.com/images/I/51PUy7Umi0L._SL1291_.jpg",
      title: "Tenda AC10  Wireless Smart Dual-Band Gigabit WiFi Router",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "11",
      src: "https://m.media-amazon.com/images/I/917QAUQorDL._SL1500_.jpg",
      title: "Samsung 139.7 cm (55 inches) 4K Ultra HD Smart LED TV",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "12",
      src: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9803279/2019/10/11/8b3247d2-99d4-4448-aa57-9c28905968861570782281063-Apple-White-2nd-Gen-AirPods-with-Charging-Case-MV7N2HNA-1181-1.jpg",
      title: "Apple AirPods Pro: with charging case",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
  ];

  let arr = [];
  for (let i = 0; i < items.length; i += 4) {
    arr.push(
      <Row>
        <Card2
          className={classes.root}
          key={items[i].id}
          src={items[i].src}
          price={items[i].price}
          cutprice={items[i].cutprice}
          rating={items[i].rating}
          title={items[i].title}
          product={product} setProduct={setProduct}
        />
        <Card2
          className={classes.root}
          key={items[i + 1].id}
          src={items[i + 1].src}
          price={items[i].price}
          cutprice={items[i].cutprice}
          rating={items[i].rating}
          title={items[i + 1].title}
          product={product} setProduct={setProduct}
        />
        <Card2
          className={classes.root}
          key={items[i + 2].id}
          src={items[i + 2].src}
          price={items[i].price}
          cutprice={items[i].cutprice}
          rating={items[i].rating}
          title={items[i + 2].title}
          product={product} setProduct={setProduct}
        />
        <Card2
          className={classes.root}
          key={items[i + 3].id}
          src={items[i + 3].src}
          price={items[i].price}
          cutprice={items[i].cutprice}
          rating={items[i].rating}
          title={items[i + 3].title}
          product={product} setProduct={setProduct}
        />
      </Row>
    );
  }
  return (
    <div>
      <p>Accessories</p>
      <Carousel fade>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://image.lucrin.com/is/image/Lucrin/Office-Banner?$parallax%2Dbanner$"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/wallpapers/apple-gadgets.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src="https://blog.brandstik.com/wp-content/uploads/2016/05/9-best-Portable-Tech-gadgets-for-Everyday-Use.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Grid>{arr}</Grid>
      </div>
    </div>
  );
}

export default Accessories;
