import { Typography } from '@mui/material'
import { useSession, signIn, SessionProvider } from 'next-auth/react'
import { ReactElement } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { NextPageWithLayout } from '../helpers/types'
import Featured from "../components/Featured"

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession()
  console.log(session)

  return (
    <>
      <Featured />
      <Typography>Hello world bjkjk kjbjkb kjkjkjj kjbkkkkjgkjgkjgjkgkj k jkjkjgjkgkbkhj</Typography>
    </>
  )
}




export default Home;
