import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { NextPageWithLayout } from "../helpers/types";
import { useRouter } from "next/router";
import DefaultLayout from "../components/DefaultLayout";
import { responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Assistant } from '@next/font/google';
import './global.css'


const assistant = Assistant({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },

  },
  typography: {
    fontFamily: assistant.style.fontFamily,
  },
});
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <SessionProvider>
      {Component.isAuth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

const Auth = ({ children }: any) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="container font-weight-bold text-center">
        <p className="mt-4">Loading</p>
      </div>
    );
  }
  if (status === "unauthenticated") {
    router.push("/login");
    return (
      <div className="container font-weight-bold text-center">
        <p className="mt-4">Loading</p>
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>{children}</DefaultLayout>
    </ThemeProvider>
  )
};
