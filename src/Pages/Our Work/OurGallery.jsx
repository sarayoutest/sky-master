import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import img55 from "../assets/images/55.png";
import imgRect from "../assets/images/Rectangle.png";
import heroImg from "../assets/images/4.png";
// نفترض أن هذه هي البيانات الخاصة بك
const galleryItems = [
  { id: 1, type: 'video', image: img55 },
  { id: 2, type: 'image', image: img55 },
  { id: 3, type: 'image', image: imgRect },
  { id: 4, type: 'image', image: imgRect },
  { id: 5, type: 'video', image: imgRect },
  { id: 6, type: 'image', image: img55 },
];

export default function OurGallery() {
  return (
    <Box sx={{ bgcolor: "#f9fafb", pb: 10 }}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 260, sm: 360, md: 450 },
         backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0 0 40px 40px", 
          mb: 6
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.3)", borderRadius: "0 0 40px 40px", zIndex: 1 }} />
        <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Typography fontWeight="800" color="#fff" textAlign="center" sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}>
            Our Gallery
          </Typography>
        </Container>
      </Box>

     <Container maxWidth="xl"> 
        <Typography variant="h4" fontWeight="700" mb={5} color="#371f70" textAlign='center'>
          A Visual Journey Through Our Projects
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4.5}>
            <MediaCard item={galleryItems[0]} height={{ xs: 300, md: 500 }} />
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <MediaCard item={galleryItems[1]} height={{ xs: 200, md: 242 }} />
              <MediaCard item={galleryItems[2]} height={{ xs: 200, md: 242 }} />
            </Box>
          </Grid>

          
          <Grid item xs={12} md={4.5}>
            <MediaCard item={galleryItems[3]} height={{ xs: 300, md: 500 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function MediaCard({ item, height }) {
  const isVideo = item.type === 'video';

  return (
    <Box sx={{ 
      position: "relative", 
      width: "80%", 
      height: height, 
      overflow: "hidden",
      borderRadius: "20px",
      border: isVideo ? "3px solid #0054e0" : "none",
    }}>
      <Box
        component="img"
        src={item.image}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          "&:hover": { transform: "scale(1.05)" }
        }}
      />

      {isVideo ? (
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(5px)",
            color: "#0054e0",
            width: 60,
            height: 60,
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.8)" },
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 40 }} />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            position: "absolute",
            bottom: 15,
            right: 15,
            bgcolor: "rgba(255, 255, 255, 0.7)",
            color: "#371f70",
            borderRadius: "10px",
          }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
    
  );
}

