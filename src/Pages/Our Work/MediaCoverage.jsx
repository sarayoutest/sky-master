import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

import heroImage from "/src/assets/images/MediaCoverage.png";
import overlayImage from "/src/assets/images/11.png";
import cardImg from "/src/assets/images/Rectangle.png"; 


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};


const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Airshows() {
  const data = Array(6).fill({
    date: "23 - Oct - 2025",
    title: "A CNN CORRESPONDENT TAKES ON A BREATHTAKING EXPERIENCE, FLYING ",
    desc: "Soaring in a 'Paratrike' 1,000 feet above Qatar gives CNN's Bijan Hosseini a unique opportunity to see the country...",
    image: cardImg, 
  });

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", pb: 1, overflow: "hidden" }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 200, sm: 360, md: 420 }, 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          borderRadius: "20px",
          mx: { xs: 0, md: 1 },
          mt: 1
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.25)", zIndex: 1, borderRadius: "20px" }} />
        
        <Container maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Typography fontWeight="800" color="#fff" textAlign="center" sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" } }}>
            Media Coverage
          </Typography>
        </Container>

        {/* Floating Card - بدون أنميشن (تمت إزالة motion.div) */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -35, sm: -55, md: -70 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "85%", md: "96%" },
            maxWidth: 1200,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 4,
            p: { xs: 2, md: 5 },
            color: "#fff",
            zIndex: 3,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Typography fontWeight="700" textAlign="center" sx={{ fontSize: { xs: "0.95rem", sm: "1.3rem", md: "1.6rem" } }}>
            See What The Media Has To Say About Us
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: { xs: 50, md: 130 } }} />

      <Container maxWidth="xl">
       
        <Typography 
          sx={{ 
           
            px: { xs: 2, md: 9 }, 
            mb:   { xs: 2, md: 8 }, 
            fontWeight: 300, 
            fontSize: { xs: "16px", md: "22px" }, 
            textAlign: "justify", 
            color: "#1d1d1d",
            lineHeight: 1.6
          }}
        >
          SkyMasters Sports Club was founded on a simple principle: a love for flight. Our journey began with a single paramotor and a dream to share the incredible feeling of soaring through the air.
        </Typography>

        {/* --- شبكة الكروت مع الأنميشن --- */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          sx={{
            display: "flex",
            flexWrap: "wrap", 
            gap: 3, 
            justifyContent: "center"
          }}
        >
          {data.map((item, i) => (
            <Box
              key={i}
              component={motion.div}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              sx={{
                width: { xs: "100%", sm: "48%", md: "31.5%" },
                display: "flex"
              }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  borderRadius: "24px",
                  border: "1px solid rgba(221, 230, 237, 1)",
                  bgcolor: "#fff",
                  overflow: "hidden"
                }}
              >
                <Box sx={{ p: 1.5, position: "relative" }}>
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100%",
                      height: { xs: 200, md: 250 },
                      borderRadius: "18px",
                      objectFit: "cover"
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 25,
                      right: 25,
                      bgcolor: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(6px)",
                      color: "#1a4d80",
                    }}
                  >
                    <ArrowOutwardIcon />
                  </IconButton>
                </Box>

                <CardContent sx={{ px: 3, pb: 4 }}>
                  <Typography variant="caption" sx={{ color: "#87c1e9", fontWeight: "700", mb: 1, display: "block" }}>
                    {item.date}
                  </Typography>
                  <Typography sx={{ fontWeight: "900", fontSize: "1.1rem", mb: 2, textTransform: "uppercase" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}