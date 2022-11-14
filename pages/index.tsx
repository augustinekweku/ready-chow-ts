import { Typography } from '@mui/material'
import { useSession, signIn, SessionProvider } from 'next-auth/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../helpers/types'
import Featured from "../components/Featured"
import axios from 'axios'
import ProductList from '../components/ProductList'


interface HomeProps {
  productList: [];
}

const Home: NextPageWithLayout<HomeProps> = ({ productList }) => {
  const { data: session, status } = useSession()
  console.log(session)

  return (
    <>
      <Featured />
      <ProductList productList={productList} />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://dull-gray-sparrow.cyclic.app/api/products"
  );
  console.log(res.data)

  const products = res.data
  return {
    props: {
      productList: products,
    },
  };
};


export default Home;
