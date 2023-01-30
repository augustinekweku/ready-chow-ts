import {
    ActionCreatorWithPayload,
    AnyAction,
    Dispatch,
  } from "@reduxjs/toolkit";
import ProductRepository, { Product } from "../repositories/product-repository";

  
  export default class ProductService {
    private dispatch: Dispatch<AnyAction>;
    private productActions: {
        setProducts: ActionCreatorWithPayload<Product[], "products/setProducts">;
    };
    private ProductRepository: ProductRepository;
    constructor(
        ProductRepository: ProductRepository,
      dispatch: Dispatch<AnyAction>,
      productActions: { setProducts: ActionCreatorWithPayload<Product[], "products/setProducts"> }
    ) {
      this.ProductRepository = ProductRepository;
      this.dispatch = dispatch;
      this.productActions = productActions;
    }
  
    async getProducts() {
      let res;
        res = await this.ProductRepository.getProducts();
      //save to store
      this.dispatch(this.productActions.setProducts(res.data));
      return res;
    }
  
  }
  