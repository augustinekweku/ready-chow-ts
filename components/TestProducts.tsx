import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { DI } from "../pages";

const TestProducts = () => {
  useEffect(() => {
    DI.productService.getProducts().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <Link href="/login">Login</Link> TestProducts
    </div>
  );
};

export default TestProducts;
