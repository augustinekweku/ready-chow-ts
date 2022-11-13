import { Typography } from '@mui/material'
import { useSession, signIn } from 'next-auth/react'
import { NextPageWithLayout } from '../helpers/types'

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <h1>Hello world bjkjk kjbjkb kjkjkjj kjbkkkkjgkjgkjgjkgkj k jkjkjgjkgkbkhj</h1>
    </>
  )
}

Home.isAuth = true;

export default Home;
