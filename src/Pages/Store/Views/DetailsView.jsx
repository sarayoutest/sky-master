import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CardMedia,
  IconButton,
  Paper,InputAdornment,
  MenuItem
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import PageHeader from "../PageHeader";
import { useCart } from "../../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
const DetailsView = ({ setView }) => {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const product = {
    id: 1,
    name: "Model Name",
    price: 4600,
    image: "https://picsum.photos/600/400",
    size: "Large",
    color: "White"
  };
// 1. تعريف حالة الصورة المختارة (ضعها بجانب qty)
  const [selectedImage, setSelectedImage] = useState(product.image);

  // 2. مصفوفة الصور الأربعة
  const productImages = [
    product.image,
    "https://picsum.photos/600/401",
    "https://picsum.photos/600/402",
    "https://picsum.photos/600/403",
    "https://picsum.photos/600/405",
    "https://picsum.photos/600/408",


  ];

 
  return (
    <Container maxWidth="xl" >
      <PageHeader title="Product Details" onBack={() => setView("store")} />

      <Grid container spacing={4} sx={{ xs:{maxWidth:"lg"} }} >
       
        <Grid item xs={12} md={6}>

 {/* الصورة الكبيرة */}
  <CardMedia
    component="img"
    image={selectedImage}
    sx={{ borderRadius: 4, mb: 2, height: 350 }}
  />

{/* الصور الصغيرة (Slider) */}
<Box 
  sx={{ 
    width: "100%",      
    maxWidth: "600px",  
    height: 100,
    display: "flex", 
    gap: 1, 
    mb: 2, 
    overflowX: "auto", 
    whiteSpace: "nowrap", 
    "&::-webkit-scrollbar": { display: "none" }, 
    msOverflowStyle: "none", 
    scrollbarWidth: "none",
    boxSizing: "border-box" 
  }}
>
  {productImages.map((imgUrl, i) => (
    <CardMedia
      key={i}
      component="img"
      image={imgUrl}
      onClick={() => setSelectedImage(imgUrl)}
      sx={{
        width: { 
          xs: "calc((100% - 16px) / 3)",
          md: "calc((100% - 16px) / 3)" 
        }, 
        height: 100, 
        flexShrink: 0, 
        borderRadius: 2,
        objectFit: "cover",
        cursor: "pointer",
        border: "2px solid",
        borderColor: selectedImage === imgUrl ? "#0052cc" : "#E5E7EB",
        "&:hover": { borderColor: "#0052cc" },
      }}
    />
  ))}
</Box>
 
             <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mt: 1 , width: "100%",}}>
   <Box 
     sx={{ 
       display: 'flex', 
       alignItems: 'center', 
       // bgcolor: '#0052cc', 
       borderRadius: 2, 
       border: "0.5px solid #CCCBCB",
       p: 0.5 ,
       width: "100%",
     }}
   >
      <IconButton
       
       sx={{ color: 'white' , bgcolor: '#0052cc', borderRadius: '4px',width:"50px" , height:"40px",
                "&:hover": {
      bgcolor: "#003d99",  
      color: "#fff",
      transform: "scale(1.05)", 
    },
      }}
      onClick={() => setQty(q => Math.max(1, q - 1))}
      >
        <Remove />
      </IconButton>

      <Typography fontWeight="bold"     sx={{ 
        color: '#000',           
        px: 1.5,                 
        py: 0.3,              
        bgcolor: 'white',        
        borderRadius: '4px',    
        mx: {xs: 11.4, md:29},                   
      }}>{qty}</Typography>

      <IconButton
        
         sx={{ color: 'white' , bgcolor: '#0052cc', width:"50px" , height:"40px",borderRadius: '4px',
         "&:hover": {
      bgcolor: "#003d99",  
      color: "#fff",
      transform: "scale(1.05)", 
    },
      }}
        onClick={() => setQty(q => q + 1)}
      >
        <Add />
      </IconButton>
    </Box>

    {/* زر Add To Cart */}
    
  </Box>
  <Button
      variant="contained"
      fullWidth
      
      sx={{ flex: 2 ,mt:4,borderRadius: 2,height: "50px" }}
      onClick={() => {
        addItem({ ...product, qty });
        setView("cart");
      }}
    >
      Add To Cart
    </Button>
</Grid>


        {/* التفاصيل */}
        <Grid item xs={12} md={6}  sx={{
    flex: 1.5, 
    minWidth: 0, 
  }}>
          <Typography variant="body2" fontWeight="bold">
            {product.name}
          </Typography>

          <TextField
            fullWidth
            size="small"
            SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
            value={product.id}
            sx={{ mb: 3 ,mt:2 }}
            disabled
            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon 
          icon={ faFilter} 
          style={{ color: "#0054e0" }} 
          size="2xs"
        />
      </InputAdornment>
    ),
  }}
          />

          <Typography variant="body2" fontWeight="bold">Size</Typography>
          <TextField
            select
            fullWidth
            SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
            size="small"
            defaultValue={product.size}
            sx={{ mb: 3,mt:2  }}
            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon 
          icon={ faFilter} 
          style={{ color: "#0054e0" }} 
          size="2xs"
        />
      </InputAdornment>
    ),
  }}
          >
            
            <MenuItem value={product.size}>{product.size}</MenuItem>
          </TextField>

          <Typography variant="body2" fontWeight="bold">Color</Typography>
          <TextField
            select
            fullWidth
            size="small"
            SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
            defaultValue={product.color}
            sx={{ mb: 3,mt:2  }}            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon 
          icon={ faFilter} 
          style={{ color: "#0054e0" }} 
          size="2xs"
        />
      </InputAdornment>
    ),
  }}
            
          >
            <MenuItem value={product.color}>{product.color}</MenuItem>
          </TextField>

          <TextField
            multiline
            rows={12}
            placeholder="Note Or Question"
            fullWidth
            sx={{ mb: 2}}
                       
          />

          <Paper
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              border:"0.5px solid #CCCBCB"
            }}
          >
            <Typography fontWeight="700">Product Price</Typography>
            <Typography  color="#371F70" fontSize={20} >
              {product.price} QAR
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsView;
