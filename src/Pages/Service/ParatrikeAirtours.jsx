import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/images/1.png";
import overlayImage from "../../assets/images/11.png";
import coursesBg from "../../assets/images/7.png";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import vector3 from "../../assets/images/Vector (3).svg";
import vector1 from "../../assets/images/Vector (1).svg";
import vector2 from "../../assets/images/Vector (2).svg";
import vector5 from "../../assets/images/Vector (5).svg";
import vector4 from "../../assets/images/1.svg";
import vector from "../../assets/images/vector.svg";
import vec from "../../assets/images/2.svg";

export default function ParatrikeAirtours() {

   const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleBookingClick = (pkg) => {
    navigate("/flightbookingflow", { state: { tourType: pkg.type } });
  };
  
  const flightPackages = [
    {
      type: "Economy",
      price: "650 QAR",
      location: "Sealine Beach",
      duration: "20 minutes",
    },
    {
      type: "Business",
      price: "900 QAR",
      location: "Sealine Beach Sand Dunes",
      duration: "30 minutes",
    },
    {
      type: "First Class",
      price: "1200 QAR",
      location: "Sealine Beach Sand Dunes (Until Regency Resort)",
      duration: "40 minutes",
    },
  ];

  // بيانات الخدمات الإضافية
  const extraServicesInitial = [
    {
      icon: vector4,
      title: "Video Editing",
      desc: "* We'll professionally edit your flight video into a shareable video.",
      price: "350 QAR/Per flight",
    },
    {
      icon: vector1,
      title: "Controlling experience",
      desc: "* You can control the flight (altitude & direction) under the supervision of the pilot.",
      price: "100 QAR/Per flight",
    },
    {
      icon:vector2,
      title: "Maneuvers",
      desc: "* Add an extra thrill to your flight with special aerial maneuvers performed by your pilot.",
      price: "150 QAR/Per flight",
    },
  ];

  const extraServicesMore = [
    {
      icon: vector3,
      title: "Extended Flight",
      desc: "* Enjoy a longer airtime experience.",
      price: "200 QAR/Per flight",
    },
    {
      icon: vector5,
      title: "Sunset Flight",
      desc: "* Experience a magical sunset view from the sky.",
      price: "250 QAR/Per flight",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden", pb: 1 }}>
  {/* ================= HERO SECTION ================= */}
  <Box
    sx={{
      position: "relative",
      height: { xs: 200, md: 450 },
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius:"30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography
      variant="h2"
      fontWeight="800"
      color="#fff"
      sx={{
        textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        fontSize: { xs: "32px", md: "48px" },
        textAlign: "center",
        px: 2,
      }}
    >
      Paratrike Airtours
    </Typography>

    {/* Floating Purple Overlay Card */}
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: -70, sm: -55, md: -70 },
        width: { xs: "90%", md: "96%" },
        maxWidth: 1200,
        backgroundImage: `url(${overlayImage})`,
        borderRadius: 4,
         p: { xs: 1, sm: 3, md: 5 },
        color: "#fff",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h6" fontWeight="400" sx={{ fontSize: { xs: 14, md: 18 }}}>
        Experience the breathtaking beauty of the landscape from above with
        our paratrike airtours. It's the perfect way to see spectacular
        sights and feel the wind on your face.
      </Typography>
    </Box>
  </Box>

  <Box sx={{ height: { xs: 110, md: 120 } }} />

  {/* ================= WHO CAN JOIN ================= */}
  <Container maxWidth="lg">
 <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", gap: 3,mt:-3, flexDirection: { xs: "column", md: "row" }, }}>
          
              <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: "row",
      }}
    >
      <Box
        component="img"
        src={vector}
        sx={{ width: 28 }}
      />
    
      <Typography
        variant="h5"
        fontWeight="700"
        color="rgba(55,31,112,1)"
      >
        Who Can Join ?
      </Typography>
    </Box>
    
                <Typography color="text.secondary" maxWidth={720}>
                   Almost anyone can join in on the fun! We've made our flights
        accessible to a wide range of people so you can experience the
        thrill of the sky.
                </Typography>
              </Box>
            </Box>

    <Divider sx={{ mb: 4}} />

    <Box sx={{ pl: 2 }}>
      <Typography color="text.secondary" mb={3}>
        Almost anyone can join in on the fun! We've made our flights
        accessible to a wide range of people... Here’s a quick breakdown:
      </Typography>
      <Box component="ul" sx={{ color: "text.secondary", lineHeight: 2 }}>
         <li><strong>Age:</strong> 7 years old and up.</li>
          <li><strong>Weight:</strong> 110 kg or less.</li>
          <li><strong>Other Concerns:</strong> No pregnant individuals.</li>
      </Box>
    </Box>

<Divider sx={{ mb: 8}} />
       <Box sx={{ display: "flex", gap: 3,mt:-3, flexDirection: { xs: "column", md: "row" }, }}>
          
              <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: "row",
      }}
    >
      <Box component="img" 
        src={vec}
        sx={{ width: 30 }} />
      <Typography sx={{ color: "#FE5900", fontWeight: 500 }}>
        No experience is required! All flights are fully operated and
        controlled by our expert pilots, so you can sit back, relax, and
        enjoy the ride.
      </Typography>

    </Box>
    </Box>
  </Container>

      

    {/* ================= BOOK NOW SECTION ================= */}
   

<Box sx={{ mt: 1, mb: 1 }}>
  <Box  
    sx={{ 
      width: "100%", 
      display: "flex", 
      justifyContent: "center", 
      py: 6,
    }}
  >
    {/* الغلاف الرئيسي */}
    <Box 
      sx={{ 
        width: { xs: "95%", md: "100%", xl: "1800px" }, 
        borderRadius: 4, 
        overflow: "visible",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
        bgcolor: "#fff",
        mx: { md: 4 } 
      }}
    >
      {/* 1. رأس النموذج (Header) */}
      <Box
        sx={{
          background: "linear-gradient(90deg, rgba(55,31,112,1), rgba(140,110,220,1))",
          p: { xs: 3, md: 6 },
          pb: { xs: 10, md: 15 },
          borderTopLeftRadius: "32px", 
          borderTopRightRadius: "32px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            color: "#fff", 
            fontWeight: 700,
            fontSize: { xs: "1.2rem", md: "2.2rem" } 
          }}
        >
          BOOK NOW !
        </Typography>
      </Box>

      {/* محتوى الحجز */}
      <Box 
        sx={{ 
          p: { xs: 3, md: 8 },
          bgcolor: "#fff",
          borderRadius: 4, 
          border: "1px solid #e0e0e0",
          mt: { xs: -6, md: -10 },
          position: "relative", 
          zIndex: 10,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {flightPackages.map((pkg, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 2, md: 4 },
                mb: 3,
              }}
            >
              {/* بطاقة النوع والسعر */}
              <Box
                sx={{
                  bgcolor: "#F3F4F6",
                  p: 2,
                  borderRadius: 3,
                  textAlign: "center",
                  minWidth: { xs: "90%", md: 240 },
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
                }}
              >
                <Typography 
                  fontWeight="700" 
                  variant="h6" 
                  color="#0054E0"
                  sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                >
                  {pkg.type}
                </Typography>
                <Typography 
                  fontWeight="600" 
                  variant="subtitle1" 
                  color="#FE5900"
                  sx={{ fontSize: { xs: "0.75rem", md: "0.95rem" } }}
                >
                  price {pkg.price}
                </Typography>
              </Box>

              {/* معلومات إضافية */}
              <Box sx={{ flex: 1, pl: { xs: 0, md: 4 } }}>
                <Typography color="text.secondary">   <ShortcutIcon sx={{ color: '#0054E0', fontSize: 20, mr:1 ,transform: 'rotate(180deg)'}} /> {pkg.location}</Typography>
                <Typography color="text.secondary"><AccessTimeIcon sx={{ color: '#0054E0', fontSize: 20 ,mr:1}} />{pkg.duration}</Typography>
              </Box>
                
              {/* زر الحجز */}
              <Box sx={{ alignSelf: { xs: "flex-end", md: "center" }, mt: { xs: 2, md: 0 } }}>
                <Button
                  variant="contained"
                   onClick={() => handleBookingClick(pkg)}
                  sx={{
                    bgcolor: "rgba(217, 217, 217, 0.5)",
                    color: "#e07b3b",
                    borderRadius: 10,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: "#e07b3b",
                      color: "rgba(217, 217, 217, 0.5)",
                    },
                  }}
                >
                  Flying ↗
                </Button>
              </Box>
            </Box>

            {/* Divider يظهر فقط بين الحزم */}
            {index !== flightPackages.length - 1 && (
              <Divider sx={{ my: { xs: 3, md: 4 } }} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
</Box>


  {/* ================= EXTRA SERVICES ================= */}
  <Box
    sx={{
      backgroundImage: `url(${coursesBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      py: 5,
      mt: -4,
    }}
  >
    <Box
      sx={{
       
         display: "inline-block",
        px: 3,
        py: {xs:5,md: 8},
        width: {xs: 310, md:"90%" ,sm : "90%"},
        height: { xs: "100%", md: 450 },
        backgroundColor: "rgba(217, 217, 217, 0.3)",
        backdropFilter: "blur(15px)",
        borderRadius: 5,
        border: "1px solid rgba(255, 255, 255, 0.5)",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        ml: {xs: 1, md:4},
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="800"
          color="#2D1A5A"
          mb={6}
          sx={{ fontSize: { xs: 20, md: 36 }, textAlign: "center", mt:{xs:-3, md:0}}}
        >
          Add An Extra Service
        </Typography>
   <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row", sm: "row" },
    justifyContent: { xs: "center", md: "center" }, 
    flexWrap: "wrap",
    alignItems: { xs: "center", md: "flex-start", sm: "flex-start" },
    gap: 8,
    px: { xs: 1, md: 6 },
    py: {xs: 1,md:4},
    minHeight: {xs:100, md:220},
    width: "100%",
    maxWidth: 1200,
    mx: "auto",
    ml: {xs:"-4%" ,md: "-6%" }, 
  }}
>
  {(showMore ? extraServicesMore : extraServicesInitial).map((item, index) => (
    <Box
      key={index}
      sx={{
        flex: { 
          xs: "1 1 100%", 
          md: "0 1 calc(100% - 24px)",
          sm: "0 1 calc(50% - 24px)" 
        },
        maxWidth: { xs: "100%", md: 250 }, 
        minHeight: 210,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          mb: 6, 
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: "rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={item.icon}
          sx={{ width: 36, height: 36, objectFit: "contain" }}
        />
      </Box>

      <Typography fontWeight={700} sx={{ mb: 1 }}>{item.title}</Typography>
      <Typography color="text.secondary" sx={{ mb: 1, fontSize: "0.9rem" }}>{item.desc}</Typography>
      <Typography fontWeight={700} color="rgba(254,89,0,1)">
        {item.price}
      </Typography>
    </Box>
  ))}
</Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            onClick={() => setShowMore(!showMore)}
            sx={{
              bgcolor: "#D9D9D9",
              color: "#371F70",
              borderRadius: "50%",
              minWidth: 50,
              height: 50,
              left:38,
              bottom:{xs: -30,md:-1},
            }}
          >
            {!showMore ? "↗" : "↩"}
          </Button>
        </Box>
      </Container>
    </Box>
  </Box>
</Box>


  );
}
