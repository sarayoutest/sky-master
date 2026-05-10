import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import theme from "./theme";

// Views
import StoreView from "./Views/StoreView";
import DetailsView from "./Views/DetailsView";
import ConfirmationView from "./Views/ConfirmationView";
import PaymentView from "./Views/PaymentView";
import SuccessView from "./Views/SuccessView";
import HistoryView from "./Views/HistoryView";

// Cart
import { useCart } from "../../context/CartContext";

// Hero Image
import heroImage from "/src/assets/images/product2.png";

const Store = ({ title = "Store", onBack }) => {
  const [view, setView] = useState("store");
  const { CartUI } = useCart();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      
      {heroImage && view !== "cart" && (
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 200, sm: 360, md: 420 },
              backgroundImage: `url(${heroImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              mb: 2,
              overflow: "hidden",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.25)",
                zIndex: 1,
              }}
            />

            {/* Title */}
            <Container
              maxWidth="lg"
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                fontWeight="800"
                color="#fff"
                textAlign="center"
                sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" } }}
              >
                {view === "store" ? title : view.toUpperCase()}
              </Typography>
            </Container>
          </Box>

          {/* Back Button */}
          {onBack && (
            <Box sx={{ px: 2 }}>
              <IconButton
                onClick={onBack}
                sx={{ border: "1px solid #eee", borderRadius: 2 }}
              >
                <ArrowBack fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      )}

      {/* Main Content */}
      <Box sx={{ py: 2 }}>
        {/* Store */}
        {view === "store" && (
          <Container maxWidth="xl">
            <StoreView setView={setView} />
          </Container>
        )}

        {/* Other Views */}
        {view !== "store" && (
          <Container maxWidth="lg">
            {view === "details" && <DetailsView setView={setView} />}
            {view === "cart" && <CartUI setView={setView} />}
            {view === "confirmation" && <ConfirmationView setView={setView} />}
            {view === "payment" && <PaymentView setView={setView} />}
            {view === "success" && <SuccessView setView={setView} />}
            {view === "history" && <HistoryView setView={setView} />}
           
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Store;
