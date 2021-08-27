import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { Jumbotron } from "reactstrap";
import { useState } from "react";
import { Link,Redirect } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: "auto",
    backgroundSize: "cover",
    marginLeft: -250,
    marginTop: 20,
  },
  sec: {
    marginTop: 40,
    marginLeft: -230,
  },
  short: {
    height: 150,
    width: 150,
    marginLeft: 30,
    backgroundSize: "cover",
  },
  root2: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function NewProd({ product, setProduct ,cartItems, setCartItems }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [idx, setIdx] = useState();

  const side_img = [
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 150, width: 150 }}
            src="http://cdn.shopify.com/s/files/1/0402/9172/9566/products/LegionM600GamingMouse3_1200x1200.png?v=1614673721"
          ></img>
        </CardContent>
      </Card>
    </Row>,
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 150, width: 150 }}
            src="https://www.lenovo.com/medias/GY50X79385-05-500x400.png?context=bWFzdGVyfHJvb3R8MTI3NzUwfGltYWdlL3BuZ3xoMDgvaDkyLzExMDQ1MTIyMTQ2MzM0LnBuZ3wwZGI5YjgwYWQ0MDRhNWJjNWJlMmY0ZDA1OGZmYWRhODI2YmVmYTUyMDBiYWU0NjczN2IwM2FiMjY4ZWVkMjJj"
          ></img>
        </CardContent>
      </Card>
    </Row>,
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 150, width: 150 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp4vl9eDhx-SclzTPQQvWHHQlVsSQCBjOhGbg2Xnd_lmiDM3WW2CmtyQB6epWV6A3QWQ&usqp=CAU"
          ></img>
        </CardContent>
      </Card>
    </Row>,
  ];

  return (
    <div>
      <div>
        <Grid item>
          <Row>
            <Col>{product.type == 1 ? "" : side_img}</Col>
            <Col>
              <Card className={classes.root}>
                <img className="product_img" src={product.img}></img>
              </Card>
            </Col>

            <Col className={classes.sec}>
              <p className="head">{product.name}</p>

              <hr />
              <p style={{ color: "red", fontSize: "medium" }}>
                <span className="deal">Deal price: </span>
                {product.price}
              </p>

              <p>{product.desc}</p>

              <Button onClick={() => {let temp = cartItems; temp.push({name:product.name, price:product.price, image:product.img, cutprice:product.cutprice}); setCartItems(temp); localStorage.setItem('cart',temp)  }} className="my-4" color="primary" variant="contained">
                <Link style={{ textDecoration: "none", color: "white" }} to="/cart"> Add to cart </Link>
              </Button>
            </Col>
            <br></br>

           
          </Row>
          
        </Grid>

        <Grid>
          <Jumbotron style={{ marginTop: 50, backgroundColor: "black" }}>
            <img
              style={{ backgroundSize: "cover", marginLeft: "25%" }}
              src="https://images.moneycontrol.com/static-mcnews/2021/06/Realme_watch_2-770x433.jpg?impolicy=website&width=770&height=431"
            ></img>
          </Jumbotron>
        </Grid>
      </div>
    </div>
  );
}
export default NewProd;
