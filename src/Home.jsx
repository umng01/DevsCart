import React from "react";
import "./Home.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StarsIcon from "@material-ui/icons/Stars";
import FourKIcon from "@material-ui/icons/FourK";
import Categories from "./Categories";
import Card from "./Card";
import Carousel_3D from "./Carousel_3D";

const Home = ({product, setProduct}) => {
  return (
    <div className="home">
      <div className="home-intro">
        <h1>Get job-ready for an in-demand career Explore DevsCart</h1>
      </div>
      <div className="Wed-portion same">
        <h3>Expand your career opportunities with Web Development</h3>
        <p>
          Every website or piece of software that we encounter has been built by
          a web developer. To the outside eye, it may seem like a complicated,
          confusing, and somewhat inaccessible field. So, to shed some light on
          this fascinating industry, we’ve put together the ultimate courses and
          what it takes to become a fully-fledged web developer.
        </p>

        <div className="home_cards">
          <Card
            id={Math.random() * 10}
            src="https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg"
            title="Web Developer Bootcamp"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
            title="The JavaScript Course"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg"
            title="Angular - From Zero to Hero!"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg"
            title="The Backend Bootcamp"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>
        </div>
      </div>
      <div className="App-portion same">
        <h3>Expand your career opportunities with App Development</h3>
        <p>
          We employ diverse apps on the daily basis, and we can't deny the fact
          that mobile apps are a crucial part of the evolving world. To endure
          with the current technologies in the technical field, here we are with
          the extreme courses. Accelerate your move toward a career in mobile
          app development with DevsCart.
        </p>
        <div className="home_cards">
          <Card
            id={Math.random() * 10}
            src="https://courses.javacodegeeks.com/wp-content/uploads/2020/02/1625800_2ffc_5-300x300.jpg"
            title="Android Java Masterclass"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://www.slashgear.com/wp-content/uploads/2011/01/android_s2-hexcode_pre.jpg"
            title="The Complete Android 10"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://cdn.eduonix.com/assets/images/header_img/2020062508133511994.jpg"
            title="Android Multithreading Class"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://media.onlinefreecourse.net/udemy/2018/08/26061733/cPNPjQ.jpg"
            title="The Mobile Development"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>
        </div>
      </div>
      <div className="design-bar">
        <div className="bar">
          <span>
            <PlayCircleFilledIcon
              style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
            />
          </span>
          <h3>Learn in-demand skills with over various video courses</h3>
        </div>
        <div className="bar">
          <StarsIcon
            style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
          />
          <h3>Choose courses taught by real-world experts</h3>
        </div>
        <div className="bar">
          <FourKIcon
            style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
          />
          <h3>Learn at your own pace, with lifetime access at high Quality</h3>
        </div>
      </div>
      <div className="carousel">
        <Carousel_3D />
      </div>

      <div className="Game-portion same">
        <h3>Expand your career opportunities with Game Development</h3>
        <p>
          You are stuck at home and you are bored! What will you do in such a
          situation? Thinking of recreational activities, right! Let's get into
          the gaming world where you can play any kind of game of your choice.
          We have some amazing courses for you where you can learn to build such
          games! Then why not get into it !? Sounds like fun..
        </p>
        <div className="home_cards">
          <Card
            id={Math.random() * 10}
            src="https://source.unsplash.com/1600x900/?onlinegame,videogame"
            title="The Game Development"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://source.unsplash.com/1600x900/?gaming,laptop,online"
            title="Video Game Optimization"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://source.unsplash.com/1600x900/?games,gaming,coding"
            title="C# Unity Game Developer 2D"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://source.unsplash.com/1600x900/?musical,games"
            title="Unreal Engine C++ Developer"
            desc="The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>
        </div>
      </div>
      <div className="Accesories-portion same">
        <h3>Accessories</h3>
        <div className="home_cards">
          <Card
            id={Math.random() * 10}
            src="https://rukminim1.flixcart.com/image/416/416/ks4yz680/laptop-skin-decal/4/x/q/hd-printed-full-panel-laptop-skin-sticker-vinyl-fits-size-upto-original-imag5rtgsuj9yhyt.jpeg?q=70"
            title="Printed Full Panel Laptop Skin Sticker"
            desc=""
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_GEO_US_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122867000"
            title="iPhone12 and iPhone12 mini - Apple"
            desc=""
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://cdn.idealo.com/folder/Product/200455/6/200455675/s3_produktbild_gross/canon-eos-r6.jpg"
            title="Canon Canon Full Frame Mirrorless EOS R6 Camera Body"
            desc=""
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>

          <Card
            id={Math.random() * 10}
            src="https://i.gadgets360cdn.com/products/large/google-nest-mini-main-1200x675-1574667312.jpg"
            title="Google Nest Mini (2nd Gen) with Google Assistant Smart Speaker"
            desc=""
            price="₹385"
            cutprice="₹6,400"
            rating="★★★★★"
            view="https://www.udemy.com/course/the-web-developer-bootcamp/"
            product={product} setProduct={setProduct}
            type={1}
          ></Card>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Home;
