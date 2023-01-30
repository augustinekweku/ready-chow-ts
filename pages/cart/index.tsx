import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
// import OrderDetail from "../components/OrderDetail";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import styled from "styled-components";

import Head from "next/head";
import { mobile } from "../../responsive";
import { useAppSelector } from "../../redux/hooks";
import { decreaseCart, deleteProduct, increaseCart } from "../../redux/cartSlice";
import { CartArrayType } from "../../helpers/types";

const CartContainer = styled.div``;
const ProductCard = styled.div`
  width: 100%;
  border: 1px solid lavender;
  border-radius: 7px;
  padding: 15px;
  margin-bottom: 15px;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(230, 230, 250, 1);
  }
`;

const ImageContainer = styled.div``;
const ProductImage = styled.img`
  width: 90%;
  ${mobile({ width: "95%" })}
  margin: 0 auto;
  padding-left: 7px;
`;

const ProductName = styled.div`
  font-size: 24px;
  & > h5 {
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.1;
    ${mobile({ fontSize: "16px", marginBottom: "5px" })}
  }
`;
const Extras = styled.div`
  & > span {
    font-size: 14px;
    ${mobile({ fontSize: "13px" })}
  }
  & > span::after {
    content: ", ";
  }
  & > span:first-child::after {
    content: ":" !important;
  }
  & > span:last-child::after {
    content: "." !important;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
`;

interface QtyActionProps {
    readonly plus: boolean;
}
const QtyAction = styled.div<QtyActionProps>`
  padding: 10px;
  border-radius: 50px;
  ${mobile({ width: "25px", height: "25px" })}

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.plus ? "#d1411e" : "#efefef")};
  margin: 10px;
  & > svg {
    ${mobile({ fontSize: "14px" })}
    font-size: 19px;
  }
`;
const Quantity = styled.div`
  & > h5 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const SwipeToDeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0000ef;
  height: calc(100% - 16px);
  border-radius: 7px;
`;
const ProductPrice = styled.div`
    text-align: center;
`
const CartTotalAmount = styled.div`
    text-align: right;
    font-size: 26px;
    font-weight: 500;
`


const Cart: FC = () => {
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const style = { layout: "vertical" };
    const dispatch = useDispatch();
    const cart = useAppSelector((state) => state.cart);
    const router = useRouter();
    const [cartArray, setCartArray] = useState<CartArrayType[]>([]);
    if (typeof window !== "undefined") {
        var localCartTotalAmount = JSON.parse(localStorage.getItem("cartTotal") || "");
    }

    //   const createOrder = async (data) => {
    //     try {
    //       const res = await axios.post(
    //         "https://dull-gray-sparrow.cyclic.app/api/orders",
    //         data
    //       );
    //       if (res.status === 201) {
    //         dispatch(reset());
    //         router.push(`/orders/${res.data._id}`);
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    useEffect(() => {
        if (typeof window !== "undefined") {

            var localCart = JSON.parse(localStorage.getItem("readyChowCart") || "");
            // 👉️ can use localStorage here
            setCartArray(localCart);
        }
    }, []);

    const trailingActions = (product: any, i: number) => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => deleteFromCart(product, i)}
            >
                <SwipeToDeleteContainer>
                    <DeleteIcon sx={{ color: "white" }} fontSize="large" />
                </SwipeToDeleteContainer>
            </SwipeAction>
        </TrailingActions>
    );

    const deleteFromCart = (product: any, i: number) => {
        const arr1 = cart.products;

        const newArr = arr1.filter((obj, objIndex) => objIndex !== i);
        // setCartArray(newArr);
        // console.log(newArr);

        let newCartObj = {
            cart: newArr,
            productPrice: parseFloat(product.price) * parseFloat(product.quantity),
            productQty: product.quantity,
        };
        dispatch(deleteProduct(newCartObj));
    };

    const increaseCount = (product: any, i: number) => {
        const newQty = parseInt(product.quantity) + 1;
        // console.log(newQty);
        const arr1 = cartArray;
        const newArr = arr1.map((obj, obj_id) => {
            if (obj_id === i) {
                return { ...obj, quantity: newQty };
            }
            return obj;
        });
        setCartArray(newArr);
        let newTotal = 0;
        for (let index = 0; index < newArr.length; index++) {
            newTotal +=
                newArr[index].price * newArr[index].quantity;
        }
        // dispatch(increaseCart(newArr));
        let newCartObj = {
            cart: newArr,
            total: newTotal,
        };
        dispatch(increaseCart(newCartObj));
    };

    const decreaseCount = (product: CartArrayType, i: number) => {
        // console.log(product.quantity);
        const newQty = product.quantity - 1;
        const arr1 = cartArray;
        const newArr = arr1.map((obj, obj_id) => {
            if (obj_id === i) {
                if (obj.quantity > 1) {
                    return { ...obj, quantity: newQty };
                }
            }
            return obj;
        });
        if (product.quantity > 1) {
            setCartArray(newArr);
            let newTotal = 0;
            for (let index = 0; index < newArr.length; index++) {
                newTotal +=
                    newArr[index].price * newArr[index].quantity;
            }
            // dispatch(increaseCart(newArr));
            let newCartObj = {
                cart: newArr,
                total: newTotal,
            };
            dispatch(decreaseCart(newCartObj));
        }
    };

    return (
        <div>
            <Head>
                <title>Check out Gob3&apos;s Profile </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/img/gob3.jpeg" />
            </Head>
            <Grid container>
                <Grid item xs={12} md={6} lg={5} sx={{ padding: "20px" }}>
                    <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                        <b>Cart</b>{" "}
                    </Typography>
                    <CartContainer>
                        {cartArray?.length > 0 ? (
                            <>
                                <SwipeableList>
                                    {cartArray?.map((product, i) => (
                                        <SwipeableListItem
                                            key={i}
                                            destructiveCallbackDelay={3000}
                                            trailingActions={trailingActions(product, i)}
                                        >
                                            <ProductCard key={i}>
                                                <Grid
                                                    container
                                                    sx={{ alignItems: "center" }}
                                                    spacing={2}
                                                >
                                                    <Grid item xs={2.5} lg={3}>
                                                        <ImageContainer>
                                                            <ProductImage src={product?.img} />
                                                        </ImageContainer>
                                                    </Grid>
                                                    <Grid item xs={5.5} lg={5.5}>
                                                        <ProductName>
                                                            {" "}
                                                            <h5>{product?.title}</h5>
                                                        </ProductName>
                                                        <Extras>
                                                            {product?.extras.length > 0 && (
                                                                <>
                                                                    <span>
                                                                        <b>Extras</b>{" "}
                                                                    </span>
                                                                </>
                                                            )}
                                                            {product?.extras &&
                                                                product?.extras.map((extra, i) => (
                                                                    <span key={i}>&nbsp;{extra.text}</span>
                                                                ))}
                                                        </Extras>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        lg={3.5}
                                                        sx={{ justifyContent: "end" }}
                                                    >
                                                        <ProductQuantity>
                                                            <QtyAction
                                                                plus={false}
                                                                onClick={() => decreaseCount(product, i)}
                                                            >
                                                                <RemoveIcon sx={{ color: "black" }} />
                                                            </QtyAction>
                                                            <Quantity>
                                                                <h5>{product?.quantity}</h5>
                                                            </Quantity>
                                                            <QtyAction
                                                                plus
                                                                onClick={() => increaseCount(product, i)}
                                                            >
                                                                <AddIcon sx={{ color: "white" }} />
                                                            </QtyAction>
                                                        </ProductQuantity>
                                                        <ProductPrice> GH¢{product?.price * product?.quantity}</ProductPrice>
                                                    </Grid>
                                                </Grid>
                                            </ProductCard>
                                        </SwipeableListItem>
                                    ))}
                                </SwipeableList>
                                <CartTotalAmount>Total: GH¢ {localCartTotalAmount}</CartTotalAmount>
                            </>
                        ) : (
                            <>
                                <ProductCard>
                                    <h3 style={{ margin: "50px", textAlign: "center" }}>
                                        No Items in Cart
                                    </h3>
                                </ProductCard>
                            </>
                        )}
                    </CartContainer>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    );
};

export default Cart;
