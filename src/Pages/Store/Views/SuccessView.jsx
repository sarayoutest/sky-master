
import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useCart } from "../../../context/CartContext";
import PageHeader from "../PageHeader";

const SuccessView = ({ setView }) => {
  const { cartItems } = useCart(); 
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const DELIVERY_PRICE = 3600;
  const DISCOUNT = 100;

  useEffect(() => {
    const savedData = localStorage.getItem("confirmationData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setDeliveryMethod(parsed.deliveryMethod || "delivery");
    }
  }, []);

  const productsCost = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
  const productsCount = cartItems.reduce((sum, item) => sum + Number(item.qty), 0);
  const deliveryCost = deliveryMethod === "delivery" ? DELIVERY_PRICE : 0;
  const totalCost = productsCost + deliveryCost - DISCOUNT;

  return (
     <Container maxWidth="lg" sx={{ py: 0, pt: 0 }}>
  <Box 
    sx={{ 
      pt: 0,          
      
     alignItems: "left" 
    }}
  >
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{
        color: "#2E1065",
        mt: 0,                
        lineHeight: 1.2,      
        whiteSpace: "nowrap",
        overflow: "hidden",   
        fontSize: { xs: "1.2rem", md: "1.7rem" },
      }}
    >
      Success! Your payment is complete
    </Typography>
  </Box>

      
      <Box sx={{ mt: 1, mb: 2, textAlign: "center"  }}>
        
        <CheckCircleOutline sx={{ fontSize: 90, color: "success.main", mb: 2 }} />
      <Paper 
        sx={{ 
          p: 3, 
          textAlign: "left", 
          mb: 4, 
          border: "1px solid #CCCBCB", 
          borderRadius: 2, 
          maxWidth: 900, 
          mx: "auto" 
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Products Cost ({productsCount}):</Typography>
          <Typography variant="body2" fontWeight="bold">{productsCost} QAR</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Delivery:</Typography>
          <Typography variant="body2" fontWeight="bold">{deliveryCost} QAR</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="body2">Discount (Coupon Code) </Typography>
          <Typography variant="body2" fontWeight="bold" color="error.main">-{DISCOUNT} QAR</Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Total Cost:</Typography>
          <Typography fontWeight="bold" sx={{ color: "#2E1065" }}>{totalCost} QAR</Typography>
        </Box>
      </Paper>

      
      <Button 
        variant="contained" 
        onClick={() => setView("store")} 
        sx={{ py: 2, width: { xs: "100%", md: "50%" }, borderRadius: 2, fontWeight: "bold" }}
      >
        Continue Shopping
      </Button>
      </Box>
    </Container>
  );
};

export default SuccessView;