import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { NextPageWithLayout } from "../helpers/types";
import { useRouter } from "next/router";
import DefaultLayout from "../components/DefaultLayout";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import './global.css'
import { Provider } from "react-redux";
import { store } from "../redux/store";

const theme = createTheme({

  typography: {
    fontFamily: ['Assistant', 'sans-serif'].join(","),
  },
  palette: {
    primary: {
      main: "#0EA5E9",
      // darker: "#22C55E",
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});



type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <Provider store={store}>
      <SessionProvider>
        {Component.isAuth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <ThemeProvider theme={theme}>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </ThemeProvider>

        )}
      </SessionProvider>
    </Provider>

  );
}

const Auth = ({ children }: any) => {
  const { status } = useSession();
  const router = useRouter();
  console.log("status", status)

  if (status === "loading") {
    return (
      <div className="container font-weight-bold text-center">
        <p className="mt-4">Loading</p>
      </div>
    );
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>{children}</DefaultLayout>
    </ThemeProvider>
  )
};
