import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import heroImage from "/src/assets/images/4.png";
import overlayImage from "/src/assets/images/11.png";
import coursesBg from "/src/assets/images/7.png";
import cardImg from "/src/assets/images/image 12.png";

const cards = [
  { name: "Pilot One", img: cardImg },
  { name: "Pilot Two", img: cardImg },
  { name: "Pilot Three", img: cardImg },
  { name: "Pilot Four", img: cardImg },
  { name: "Pilot Five", img: cardImg },
];

function About() {
  const scrollRef = React.useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ bgcolor: "#f9fafb", overflow: "hidden" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 200, sm: 360, md: 420 }, 
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          borderRadius:"20px",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.25)",
            zIndex: 1,
            borderRadius:"20px",
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
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" },
            }}
          >
            About Us
          </Typography>
        </Container>

        {/* Floating Card */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -45, sm: -55, md: -70 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "80%", md: "96%" },
            maxWidth: 1200,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 4,
            p: { xs: 3, sm: 3, md: 5 },
            color: "#fff",
            zIndex: 3,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
          variant="h5"
            fontWeight="700"
            textAlign="center"
            sx={{ fontSize: { xs: "0.95rem", sm: "1.3rem", md: "1.6rem" } ,px: { xs: 1, md: 0 },mb: 1, lineHeight: 1.5,mx: "auto",
          }}
          >
            Discover The Sky
          </Typography>
        </Box>
      </Box>

      {/* Space under floating card */}
      <Box sx={{ height: { xs: 60, md: 120 } }} />

      {/* ================= TEXT ================= */}
      
        <Typography
  color="rgba(29, 29, 29, 1)"
  sx={{
   pl: { xs: 2, md: 5, lg: 9 }, 
    pr: { xs: 2, md: 5, lg: 9 },
    maxWidth: { xs: "100%", md: "1500px" },
    mb: 2,
    fontFamily: "'Cairo', sans-serif", 
    fontWeight: 300,                  
    fontSize: { xs: "16px", md: "22px" }, 
    lineHeight: "32px",
    letterSpacing: "0%",
    textAlign: "justify",           
  }}
>
  SkyMasters Sports Club was founded on a simple principle: a love for
  flight. Our journey began with a single paramotor and a dream to share
  the incredible feeling of soaring through the air. Today, we're a
  leading sports club providing a range of services from recreational
  tours to professional training. We're committed to the highest safety
  standards and passionate about making aviation accessible to everyone.
</Typography>
        <Divider sx={{ mb: 4 }} />

        <Typography
  variant="h4"
  fontWeight={700}
  color="rgba(55,31,112,1)"
  mb={1}
  sx={{
    fontSize: { xs: "28px", md: "34px", lg: "40px" }, 
    pl: { xs: 2, md: 5, lg: 9 } 
  }}
>
  Meet The Team
</Typography>

        <Typography color="rgba(29, 29, 29, 1)"
  sx={{
   pl: { xs: 2, md: 5, lg: 9 }, 
    pr: { xs: 2, md: 5, lg: 9 },
    maxWidth: { xs: "100%", md: "1500px" },
    mb: 2,
    fontFamily: "'Cairo', sans-serif", 
    fontWeight: 300,                  
    fontSize: { xs: "16px", md: "22px" }, 
    lineHeight: "32px",
    letterSpacing: "0%",
    textAlign: "justify", }}>
          Meet the skilled professionals who make every flight special.
        </Typography>
      

      {/* ================= TEAM ================= */}
      <Box
        sx={{
          
          backgroundImage: `url(${coursesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 10 },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative" }} >
          {/* Arrows – hidden on mobile */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              top: "50%",
              left: -20,
              transform: "translateY(-50%)",
              bgcolor: "rgba(217,217,217,0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              top: "50%",
              right: -20,
              transform: "translateY(-50%)",
              bgcolor: "rgba(217,217,217,0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Cards */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 4 },
              overflowX: "auto",
              scrollBehavior: "smooth",
              
              pl: { xs: 2, md: 5, lg: 9 },
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {cards.map((item, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: 340,
                  height: 400,
                  bgcolor: "rgba(217,217,217,0.5)",
                  borderRadius: 4,
                  p: 3,
                  
                  border: "2px solid white",
                  backdropFilter: "blur(12px)",
                  transition: "0.35s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "contain",
                    borderRadius: "50%",
                    border: "2px solid white",
                    mb: 2,
                     
                    bgcolor: "#fff",
                  }}
                />

                <Typography fontWeight={700} sx={{
   pl: { xs: 2, md: 1, lg: 3 }, mt: 3,}}>
                  {item.name}
                </Typography>

                <Typography color="rgba(29, 29, 29, 1)"
  sx={{
    
   pl: { xs: 2, md: 1, lg: 3 }, 
    pr: { xs: 2, md: 1,lg: 3  },
    maxWidth: { xs: "100%", md: "1500px" },
    mt: 4,
    mb:2,
    fontFamily: "'Cairo', sans-serif", 
    fontWeight: 300,                  
    fontSize: { xs: "16px", md: "18px" }, 
    lineHeight: "28px",
    letterSpacing: "0%",
    textAlign: "justify", }}>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nisl metus. Nullam iaculis tristique turpis, vel porttitor nibh semper at. Quisque nec fermentum urna. Morbi viverra, libero eu condimentum ultricies.
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
