import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardMedia,
  IconButton,
  InputAdornment,
  Pagination,
  Drawer,
} from "@mui/material";
import { Search, NorthEast, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useCart } from "../../../context/CartContext";
import FilterListIcon from '@mui/icons-material/FilterList';

  

const StoreView = ({ setView }) => {
  const images = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
  ];
const { addItem } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openFilters, setOpenFilters] = useState(false);

  const filterContent = (
    <Box sx={{ p: 3, width: isMobile ? "100%" : 280 }}>
      {!isMobile && (
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: 900, color: "#312E81", fontSize: "2.2rem" }}
        >
          Order Now!
        </Typography>
      )}
      {["Select a Category:", "Select One:", "Filter By:", "Sort By:"].map(
        (label, i) => (
          <Box key={i} sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
              {label}
            </Typography>
            
           <TextField
  select
  fullWidth
  SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
  size="small"
  defaultValue=""
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FilterListIcon sx={{ color: "#0054E0" }} />
      </InputAdornment>
    ),
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      bgcolor: "#fff",
    },
  }}
>
  <MenuItem value="">Select</MenuItem>
  <MenuItem value="1">Option 1</MenuItem>
  <MenuItem value="2">Option 2</MenuItem>
</TextField>
          </Box>
        )
      )}
      <Button
        fullWidth
        variant="contained"
        sx={{
          py: 1.5,
          mt: 2,
          borderRadius: "8px",
          backgroundColor: "#0052FF",
          textTransform: "none",
          fontWeight: "bold",
        }}
        onClick={() => setOpenFilters(false)}
      >
        Apply Filters
      </Button>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {!isMobile && <Box sx={{ width: 280, flexShrink: 0, position: "sticky", top: 20 }}>{filterContent}</Box>}

        <Box sx={{ flex: 1, width: "100%" }}>
         
          {isMobile && (
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 900, color: "#312E81", fontSize: "2.2rem" }}
            >
              Order Now!
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Search....."
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "#F9FAFB" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            }}
          />

          
          {isMobile && (
           <Button
  fullWidth
  variant="contained"
  sx={{
    py: 1.5,
    mb: 3,
    borderRadius: "8px",
    backgroundColor: "#0052FF",
    textTransform: "none",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    gap: 1, 
  }}
  onClick={() => setOpenFilters(!openFilters)}
>
  Show Filters
  {openFilters ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
</Button>

          )}

          {/* Drawer للجوال */}
          <Drawer
            anchor="bottom"
            open={openFilters}
            onClose={() => setOpenFilters(false)}
          >
            {filterContent}
          </Drawer>

          {/* المنتجات */}
          
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          onClick={() => setView?.("details")} // عند الضغط على البطاقة نفسها
          sx={{
            width: { xs: "100%", sm: "calc(50% - 16px)", lg: "calc(33.33% - 16px)" },
            borderRadius: "20px",
            position: "relative",
            height: "300px",
            border: "1px solid #E5E7EB",
            boxShadow: "none",
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={images[i % images.length]}
            sx={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              left: 12,
              right: 12,
              bgcolor: "rgba(255, 255, 255, 0.95)",
              p: 2,
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: "800", color: "#1E1B4B" }}>
                Product Name
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#4F46E5" }}>
                0000 QAR
              </Typography>
            </Box>
            <IconButton
              size="small"
              sx={{ bgcolor: "#F3F4F6" }}
              onClick={(e) => {
                e.stopPropagation(); 
                addItem({
                  id: i, 
                  name: "Product Name",
                  price: 1200, 
                  image: images[i % images.length],
                  qty: 1,
                });
              }}
            >
              <NorthEast sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>

          <Box
            sx={{
              mt: 5,
              pt: 2,
              borderTop: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#9CA3AF", fontWeight: "bold" }}>
              12 Items
            </Typography>
            <Pagination count={2} shape="rounded" color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreView;
