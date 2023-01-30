import { Typography } from '@mui/material'
import { useSession, signIn, SessionProvider } from 'next-auth/react'
import { ReactElement, useEffect } from 'react'
import { NextPageWithLayout } from '../helpers/types'
import Featured from "../components/Featured"
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductService from '../services/product-service'
import { AxiosClient } from '../helpers/clients'
import ProductRepository from '../repositories/product-repository'
import { useAppDispatch } from '../redux/hooks'
import { setProducts } from '../redux/productsSlice'
import TestProducts from '../components/TestProducts'


interface HomeProps {
  productList: [];
}
export let DI = {} as {
  productService: ProductService
};

const Home: NextPageWithLayout<HomeProps> = ({ productList }) => {
  const { data: session, status } = useSession();
  const client = new AxiosClient(axios);
  const dispatch = useAppDispatch();
  const productRepository = new ProductRepository(client);
  const productService = new ProductService(productRepository, dispatch, { setProducts });
  DI = {
    productService,
  }

  useEffect(() => {

  }, [])


  return (
    <>
      <Featured />
      {/* <ProductList productList={productList} /> */}
      <TestProducts />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const res = await axios.get(
//     "https://dull-gray-sparrow.cyclic.app/api/products"
//   );

//   const products = res.data
//   return {
//     props: {
//       productList: products,
//     },
//   };
// };




export default Home;
