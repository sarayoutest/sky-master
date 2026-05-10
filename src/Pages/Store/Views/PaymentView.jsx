import React, { useEffect, useState , useMemo} from "react";
import { Container, Paper, Typography, Divider, Button, Box } from "@mui/material";
import { useCart } from "../../../context/CartContext";

import PageHeader from "../PageHeader";
import { q } from "framer-motion/client";

const PaymentView = ({ setView }) => {
  const { cartItems } = useCart(); 
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  
  const DELIVERY_PRICE = 3600 ;
  const DISCOUNT = 100;

  useEffect(() => {
    const savedData = localStorage.getItem("confirmationData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setDeliveryMethod(parsed.deliveryMethod || "delivery");
    }
  }, []);

  // الحسابات تعتمد على cartItems القادمة من الكونتكس
  const productsCost = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
  const productsCount = cartItems.reduce((sum, item) => sum + Number(item.qty), 0);
  const deliveryCost = deliveryMethod === "delivery" ? DELIVERY_PRICE : 0;
  const totalCost = productsCost + deliveryCost - DISCOUNT;

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <PageHeader title="Let's pay now!" onBack={() => setView("confirmation")} />

      <Typography variant="body2" sx={{ mb: 2, fontSize: "20px" }}>
        “You’re almost done! Please complete your payment to continue and secure your shopping”
      </Typography>

      <Paper sx={{ p: 3, textAlign: "left", mb: 4, border: "1px solid #CCCBCB", borderRadius: 2, maxWidth: 900, mx: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Products Cost ({productsCount}):</Typography>
          <Typography variant="body2" fontWeight="bold">{productsCost} QAR</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Delivery:</Typography>
          <Typography variant="body2" fontWeight="bold">{deliveryCost} QAR</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="body2">Discount:</Typography>
          <Typography variant="body2" fontWeight="bold" color="error.main">{DISCOUNT} QAR</Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography fontWeight="bold">Total Cost: {totalCost} QAR</Typography>
      </Paper>

      <Button variant="contained" onClick={() => setView("success")} sx={{ py: 2, width: { xs: "100%", md: "50%" } }}>
        Pay Now
      </Button>
    </Container>
  );
};

export default PaymentView;
