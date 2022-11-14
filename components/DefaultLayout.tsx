import TopNav from "./TopNav";
import { Grid } from "@mui/material"
import Footer from "./Footer";
import { SessionProvider } from "next-auth/react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SessionProvider>
                <TopNav />
                <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                    {children}
                    <Footer />
                </div>
            </SessionProvider>
        </>
    );
};

export default DefaultLayout;
