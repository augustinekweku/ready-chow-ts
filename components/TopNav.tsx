import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import { Badge } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// import { loadCart } from "../../redux/cartSlice";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const OrderNowImgWrapper = styled.div`
  background: white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
const OrderNowTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const OrderNowTopText = styled.h5`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;
const OrderNowNumber = styled.h4`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const TopNav = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { data: session } = useSession();
    console.log(session?.user?.name)


    //   const quantity = useSelector((state) => state.cart.quantity);

    // const [stateCartQty, setStateCartQty] = useState(null);
    // const dispatch = useDispatch();

    //   useEffect(() => {
    //     console.log("setStateCartQty running?", stateCartQty);
    //     if (typeof window !== "undefined") {
    //       if (localStorage.getItem("CartQty")) {
    //         var CartQty = JSON.parse(localStorage.getItem("CartQty"));
    //         if (CartQty) {
    //           var CartQty = JSON.parse(localStorage.getItem("CartQty"));
    //           var cartBody = JSON.parse(localStorage.getItem("readyChowCart"));
    //           var cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    //           const cartObj = {
    //             quantity: CartQty,
    //             cart: cartBody,
    //             total: cartTotal,
    //           };
    //           dispatch(loadCart(cartObj));
    //           setStateCartQty(CartQty);
    //         }
    //       }
    //     }
    //   }, []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ background: "#d1411e" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            alignItems: "center",
                        }}
                    >
                        <OrderNowImgWrapper>
                            <Image src="/img/telephone.png" alt="" width="32" height="32" />
                        </OrderNowImgWrapper>
                        <OrderNowTextWrapper>
                            <OrderNowTopText>ORDER NOW!</OrderNowTopText>
                            <OrderNowNumber>0241801505</OrderNowNumber>
                        </OrderNowTextWrapper>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <FastfoodIcon
                        sx={{ display: { xs: "flex", md: "none", color: "white" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        <Link href="/" passHref>
                            READY CHOW
                        </Link>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            marginLeft: "-100px",
                        }}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Home
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "white", display: "inline" }}
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    fontWeight: 700,
                                    letterSpacing: ".1rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <Link href="/" passHref>
                                    READY CHOW
                                </Link>
                            </Typography>
                        </Button>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Home
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                                className="d-none"
                            >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Link href="/cart" passHref>
                            <Badge
                                badgeContent={0}
                                sx={{ color: "white", cursor: "pointer" }}
                            >
                                <LocalMallIcon sx={{ color: "white" }} />
                            </Badge>
                        </Link>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopNav;
