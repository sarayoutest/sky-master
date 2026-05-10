import React, { createContext, useState, useContext,useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  CardMedia,
  IconButton,
  Pagination
} from "@mui/material";
import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import heroImage from "/src/assets/images/product2.png";
import { useNavigate } from "react-router-dom"; 

// داخل المكون الخاص بك:
const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
   useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // حفظ عند التغيير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, { ...item, qty: item.qty }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const CartUI = ({ setView }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;
    const pageCount = Math.ceil(cartItems.length / itemsPerPage);
    const displayedItems = cartItems.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
   
    return (
      <>
        
        {/* Hero Image */}
        {heroImage && (
          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: { xs: 200, sm: 360, md: 420 },
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        )}

        {/* Asking about previous request */}
        <Box sx={{ px: 2, mt: 2, display: "flex", alignItems: "center", gap: { xs: 4.5, sm: 0 },
            justifyContent: "space-between", }}>
        
<Typography
  variant="h5"
  fontWeight="900"
  color="#2E1065"
  sx={{ cursor: "pointer" }} 
  onClick={() => setView("details")} 
>
  Cart
</Typography>



<Typography
  fontWeight="500"
  color="#FE5900"
  onClick={() => navigate("/previousorders")} 
  sx={{
    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
    textDecoration: "underline",
    cursor: "pointer",
    display: "inline-block" 
  }}
>
  Asking about a previous request?
</Typography>
          
        </Box>

        {/* Cart Items */}
        <Box sx={{ px: 2, mt: 4, display: "flex", flexWrap: "wrap", gap: 4 }}>
          {displayedItems.map((item) => (
            <Paper
              key={item.id}
              sx={{
                p: { xs: 1, md: 2 },
                borderRadius: 4,
                display: "flex",
                gap: 2,
                alignItems: "center",
                width: { xs: "100%", md: "48%" },
              }}
            >
              <CardMedia
                component="img"
                image={item.image || "https://picsum.photos/100/100"}
                sx={{ width: 150, height: 100, borderRadius: 2 }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography fontWeight="bold" color="orange">
                    {item.price} QAR
                  </Typography>
                </Box>

                {/* Quantity Controls */}
                <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1, mt: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 1,
                      border: "0.5px solid #CCCBCB",
                      p: 0.5,
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        color: "white",
                        bgcolor: "#0052cc",
                        borderRadius: "4px",
                        "&:hover": { bgcolor: "#003d99", color: "#fff" },
                      }}
                      onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                    >
                      <Remove fontSize="small" />
                    </IconButton>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#000",
                        px: 1.5,
                        py: 0.3,
                        bgcolor: "white",
                        borderRadius: "4px",
                        mx: { xs: 3, md: 10 },
                      }}
                    >
                      {item.qty}
                    </Typography>

                    <IconButton
                      size="small"
                      sx={{
                        color: "white",
                        bgcolor: "#0052cc",
                        borderRadius: "4px",
                        "&:hover": { bgcolor: "#003d99", color: "#fff" },
                      }}
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Delete Button */}
                  <IconButton
                    size="small"
                    color="error"
                    sx={{ border: "0.5px solid #CCCBCB", borderRadius: "4px",height:"40px", }}
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteOutline fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Pagination */}
        {pageCount > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Box>
        )}

        {/* Confirm Button */}
        <Box sx={{ px: 2, mt: 4 }}>
          <Button
  variant="contained"
  disabled={cartItems.length === 0}
  onClick={() => setView("confirmation")}
  sx={{
    py: 2,
    width: { xs: "100%", md: "50%" },
    display: "block",
    mx: "auto", 
  }}
>
  Confirm Order
</Button>
        </Box>
      </>
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateQty, totalQty, CartUI }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
