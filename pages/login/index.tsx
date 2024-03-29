import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const theme = createTheme();

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const [callbackUrl, setCallbackUrl] = React.useState<string>();
  const products = useSelector((state: RootState) => state.products);

  if (session) {
    router.push("/");
  }

  React.useEffect(() => {
    setCallbackUrl((router.query.callbackUrl || `/`) as string);
  }, [router.query.callbackUrl]);

  useEffect(() => {
    // redux store  state.products.products
    console.log(products.products);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onPointerDown={() => signIn("google", { callbackUrl })}
            >
              Sign In with Google
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
