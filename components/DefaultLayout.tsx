import TopNav from "./TopNav";
import { Grid } from "@mui/material"
import Footer from "./Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Grid container>
                    <Grid item xs={6}>
                        {children}
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
