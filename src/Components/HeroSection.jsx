
import React, { useState, useEffect } from "react";
import { 
  Box, Grid, Typography, Button, TextField, MenuItem, IconButton, Paper, Container 
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import FilterListIcon from '@mui/icons-material/FilterList';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShortcutIcon from '@mui/icons-material/Shortcut';
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Play from "@mui/icons-material/PlayArrow";
import img5 from "../assets/images/5.png";
import bgImage from "../assets/images/7.png"; 
import bgImage1 from "../assets/images/22.png";
import img8 from "../assets/images/8.png";
import img3 from "../assets/images/3.png";
import img9 from "../assets/images/Rectangle.png";
// Swiper imports if used
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FIELD_HEIGHT = 68;

const LandingPage = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [tourType, setTourType] = useState("Economy");
  const [passengers, setPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState(dayjs());

useEffect(() => {
  const saved = localStorage.getItem("skymasters_booking");
  if (saved) {
    const data = JSON.parse(saved);

    setTourType(
      ["Economy", "Business", "First Class"].includes(data.package)
        ? data.package
        : "Economy"
    );
  }
}, []);

      const navigate = useNavigate(); 

  const handleCheckAvailability = () => {

    const currentBooking = {
      package: tourType,
      passengers: passengers,
      date: selectedDate ? selectedDate.toISOString() : null,
    };

    const existingData = JSON.parse(localStorage.getItem("skymasters_booking") || "{}");
    localStorage.setItem("skymasters_booking", JSON.stringify({
      ...existingData,
      ...currentBooking
    }));
        navigate("/flightbookingflow", { state: { tourType } });

  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff", overflowX: "hidden" }}>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          // height: { xs: 300, sm: 360, md: 520 },    
          // width:"100%",
          backgroundImage: `url(${img5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          aspectRatio:1300/690
        }}
      >
        
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            
            borderRadius: { xs: 2, md: 3 },
          }}
        />

        {/* Text (Desktop only) */}
<Box
  sx={{
    position: "relative",
    zIndex: 2,
    color: "white",
    maxWidth: 600,
    ml: 10,
    mt: -10,
    display: { xs: "none", md: "block" },
    textAlign: "left",
    fontFamily: "Cairo",
  }}
>
  <Typography
    sx={{
      fontFamily: "Cairo",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "0%",
      opacity: 1,
    }}
  >
    Welcome
  </Typography>

  <Typography
    sx={{
      fontFamily: "Cairo",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "0%",
      my: 2,
    }}
  >
    SkyMasters Adventures
  </Typography>

  <Typography
    sx={{
      fontFamily: "Cairo",
      fontSize: "16px",
      lineHeight: "24px",
      opacity: 0.85,
      mb: 4,
    }}
  >
    Explore the skies with us
  </Typography>

  <Button
    sx={{
      height: 60,
      px: 4,
      borderRadius: "50px",
      bgcolor: "rgba(255,255,255,0.65)",
      color: "#FE5900",
      fontWeight: 600,
      fontFamily: "Cairo",
      textTransform: "none",
    }}
  >
    Learn More
  </Button>
</Box>

      </Box>

      {/* ================= BOOKING BOX ================= */}
      <Box
        sx={{
          position: "relative",
          maxWidth: 1200,
          mx: "auto",
          mt: { xs: -10, md: -10 },
          p: { xs: 3, md: 4 },
          ml : {xs :1 , md:4},mr:{xs: 1},
          borderRadius: "28px",
          background: "rgba(217,217,217,0.55)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 4,
            textAlign: "left",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#222",
          }}
        >
          Experience the best tours
        </Typography>

        {/* ================= FORM ================= */}
        <Grid container spacing={3} alignItems="center">

          {/* Tour Type */}
          <Grid item xs={12} md={4}>
            <Typography fontWeight={600} mb={1}>Tour Type</Typography>
            <Box sx={{
              ...fieldStyle,
              width: { xs: "150%", md: 250 }, 
            }}>
<FilterListIcon sx={{ mr: 1, color: "#0054E0" }} />
              <TextField
                select
                fullWidth
                SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              >

                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="First Class">First Class</MenuItem>
              </TextField>
            </Box>

          </Grid>

          {/* Passengers */}
          <Grid item xs={12} md={4}>
            <Typography fontWeight={600} mb={1}>No. Of passengers</Typography>
            <Box sx={{ ...fieldStyle, justifyContent: "space-between" , width: { xs: "95%", md: 250 },}}>
              <GroupsIcon sx={{ color: "#0054E0" }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center", }}>
                <IconButton sx={counterBtn} onClick={() => setPassengers(p => Math.max(1, p - 1))}>−</IconButton>
                <Typography fontWeight={700}  sx={{  minWidth: 100, textAlign: "center",  }}>{passengers}</Typography>
                <IconButton sx={counterBtn} onClick={() => setPassengers(p => p + 1)}>+</IconButton>
              </Box>
            </Box>
          </Grid>

       <Grid item xs={12} md={4}>
  <Typography fontWeight={600} mb={1}>Date</Typography>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{ ...fieldStyle, width: { xs: "92%", md: 250 }, display: "flex", alignItems: "center" }}>
      
      <IconButton onClick={() => setOpenDatePicker(true)} sx={{ p: 0, color: "#0054E0" }}>
        <CalendarMonthIcon />
      </IconButton>

      <DatePicker
  value={selectedDate}
  onChange={(newValue) => {
    setSelectedDate(newValue);

    const saved = JSON.parse(localStorage.getItem("skymasters_booking") || "{}");
    localStorage.setItem(
      "skymasters_booking",
      JSON.stringify({
        ...saved,
        date: newValue ? newValue.toISOString() : null,
      })
    );
  }}
  open={openDatePicker}
  onClose={() => setOpenDatePicker(false)}
  disableOpenPicker
  slotProps={{
    textField: {
      variant: "standard",
      fullWidth: true,
      InputProps: {
        disableUnderline: true,
        endAdornment: (
          <IconButton onClick={() => setOpenDatePicker(true)} sx={{ p: 0, color: "#777" }}>
            <ArrowDropDownIcon />
          </IconButton>
        ),
      },
      sx: { cursor: "pointer" },
    },
  }}
/>

    </Box>
  </LocalizationProvider>
</Grid>


          {/* Button */}
          <Grid item xs={12} md={4}>
            <Button
              sx={{
                ...fieldStyle,
                width: { xs: "140%", md: 230 },
                bgcolor: "#0054E0",
                color: "white",
                mt: 4,
                fontWeight: 600,
                borderRadius: "18px",
                fontSize: "1rem",
              }}
              onClick={handleCheckAvailability}
            >
              Check Availability
            </Button>
          </Grid>

        </Grid>
      </Box>

      <Box sx={{ height: { xs: 30, md: 20 },  }} />
    </Box>
  );
};

/* ================= STYLES ================= */
const fieldStyle = {
  height: FIELD_HEIGHT,
  bgcolor: "white",
  borderRadius: "18px",
  border: "2px solid #e3e3e3",
  display: "flex",
  alignItems: "center",
  px: 2.5,
  gap: 1.5,
};
const counterBtn = {
  bgcolor: "#0054E0", 
  color: "white",
  width: 40,
  height: 40,
  borderRadius: "12px",
  transition: "0.3s", 
  '&:hover': {
    backgroundColor: "#e3f2fd", 
    color: "#0054E0",           
  },
};


/* ==========================================================================
   2. PACKAGES SECTION
   ========================================================================== */
const PackagesSection = () => {
  const navigate = useNavigate();
const handleCardClick = (pkg) => {
  navigate("/flightbookingflow", { state: { tourType: pkg.title } });
};

  const packs = [
    {
      title: "Economy",
      price: "650",
      loc: "Sealine Beach",
      time: "20 minutes",
    },
    {
      title: "Business",
      price: "900",
      loc: "Sealine Beach Sand Dunes",
      time: "30 minutes",
    },
    {
      title: "First Class",
      price: "1200",
      loc: "Sealine Beach Sand Dunes ",
      time: "40 minutes",
    },
  ];

  return (
 <Box
  sx={{
    py: 4,
    backgroundImage: `linear-gradient(rgba(55,31,112,.1), rgba(55,31,112,1)), url(${bgImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
 <Container maxWidth="xl" >
  <Grid
    container
    spacing={8}
    sx={{
      flexDirection: { xs: "column", md: "row" }, 
      alignItems: { xs: "center", md: "flex-end" }, 
      justifyContent: { xs: "center", md: "flex-end" }, 
      pt: { xs: 2, md: 0 }, 
    }}
  >
    {/* الصورة والعنوان */}
    <Grid
      item
      xs={12}
      md={2.5}
      sx={{
       
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" }, 
        transform: { md: "translateX(-100px)" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 1,
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        Packages
      </Typography>

      <Box
        component="img"
        src={img8}
        sx={{
          display: { xs: "none", md: "block" }, 
          width: "100%",
          borderRadius: "12px",
          height: "160px",
          alignSelf: { md: "flex-start" },
          objectFit: "cover",
          mt: 2,
        }}
      />
    </Grid>

    {/* البطاقات */}
    <Grid
      item
      xs={12}
      md={9.5}
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" }, 
        mt: { xs: 3, md: 0 }, 
        mr: {md : 10}
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-end" },
          mt:{xs:-10},
        }}
      >
       {packs.map((pkg) => (
  <Grid item  key={pkg.title}
            sx={{
               width: { xs: "300px", md: "240px" }, 
                display: "flex",
              justifyContent: "center", 
              mb: { xs: 2, md: 0 },
              
           
                
            }}
          >
            <Paper
              elevation={2}
             onClick={() => handleCardClick(pkg)}
              sx={{
                borderRadius: "15px",
                p: 2,
                textAlign: "center",
                backgroundColor: "white",
                width: "100%", 
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "0.3s",
                
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
            
<Box sx={{ bgcolor: "rgba(217, 217, 217, 0.5)", borderRadius: "15px", py: 0.5, }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0054E0", fontSize: "18px" }}>
          {pkg.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ff6d00", fontWeight: "bold", fontSize: "14px" }}>
          {pkg.price} QAR
        </Typography>
      </Box>

      <Box sx={{ my: 1, color: "gray"  }}>
        <Typography sx={{ fontSize: "15px",  ml:2,display: "flex", flex: 1,justifyContent:"left"}}>
          <ShortcutIcon sx={{ color: '#0054E0', fontSize: 20, mr:1 ,transform: 'rotate(180deg)'}} /> {pkg.loc}
        </Typography>
        <Typography sx={{ fontSize: "15px", mt: 0.5 , ml:2,display: "flex", justifyContent:"left"}}>
           <AccessTimeIcon sx={{ color: '#0054E0', fontSize: 20 ,mr:1}} />{pkg.time}
        </Typography>
      </Box>

              <Button
                variant="contained"
                onClick={() => handleCardClick(pkg)}
                sx={{
                  bgcolor: "rgba(217, 217, 217, 0.5)",
                  color: "#ff6d00",
                  height: "35px",
                  alignSelf: "flex-end",
                  minWidth: "80px",
                  width: "fit-content",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(217, 217, 217, 0.8)",
                    boxShadow: "none",
                  },
                }}
              >
                FLYING ↗
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
</Container>

</Box>   

  );
};

/* ==========================================================================
   3. INDIVIDUAL SERVICES
   ========================================================================== */
const IndividualServices = () => {
  const [active, setActive] = useState(0);
  const items = [
    {
      id: "01",
      title: "Paratrike airtours",
      desc: "Experience the beauty from above.",
    },
    {
      id: "02",
      title: "Paramotor training",
      desc: "Ready to take control? Our comprehensive training courses will equip you with the skills and confidence to fly safely.",
    },
    {
      id: "03",
      title: "Aerial Photography",
      desc: "Capture moments from a new perspective.",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#F5F5F5" }}>
      <Container maxWidth="xl">
        <Box
  sx={{
    background: "linear-gradient(90deg, #2d1f5e 0%, #e2e0e8 100%)",
    p: 3,
    borderRadius: "20px",
    mb: 2,
    color: "white",
    ml:-2,
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "flex-start" }, 
    textAlign: { xs: "left", md: "left" },             
    whiteSpace: { xs: "nowrap", md: "normal" },       
  }}
>
  <Typography
    variant="h4"
    
    sx={{ letterSpacing: 4, fontSize: { xs: "23px", md: "32px" }, 
  fontWeight:{xs:"300" ,md:"bold"}}}
  >
    INDIVIDUALS SERVICES
  </Typography>
</Box>


<Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, md: 2},    px: { xs:  0 , md: 3 }  ,}}  >
  {items.map((item, idx) => (
    <Box
      key={idx}
      onClick={() => setActive(idx)}
      sx={{
        bgcolor: active === idx ? "white" : "#EEE",
         borderRadius: active === idx ? "30px" : "15px",
        // px: { xs: 1, md: 2 }, 
// py: { xs: active === idx ? 1 : 1, md: active === idx ? 0 : 2 },
        //  p: { xs: active === idx ? 1: 1, md: active === idx ? 0 : 2 },
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",
        boxShadow:
          active === idx ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
        position: "relative",
        width: { xs: "100%", md: "100%" },
       height: {
      xs: active === idx ? "200   " : 70,
      md: active === idx ? 300 :     90,
    },
      }}
    >
      <Box
  sx={{
   p: {
      xs: active === idx ? 3 : 1     ,
      md: active === idx ? 6 : 1  ,
    },
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>

      {/* النص */}
        <Typography
          variant="h2"
          sx={{
            color: active === idx ? "#FE5900" : "#CCC",
            fontWeight: "bold",
            fontSize: {
      xs: active === idx ? "20px" : "16px",
      md: active === idx ? "32px" : "20px",
    },
    lineHeight: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.id}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: active === idx ? 2 : 0,
    fontSize: {
      xs: active === idx ? "16px" : "14px",
      md: active === idx ? "24px" : "18px",
    },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.title}
        </Typography>

        {active === idx && (
          <Typography
            color="textSecondary"
            variant="h6"
            sx={{ mt: 1, fontSize: { xs: "12px", md: "16px" } }}
          >
            {item.desc}
          </Typography>
        )}
      </Box>

      {/* الصورة */}
      {active === idx && (
        <Box
          sx={{
            flex: 1,
            m:2,
            // bottom: 1,
            position: { xs: "absolute", md: "relative" },
            // top: { xs: 0, md: "auto" },
            right: { xs: 0, md: "auto" },
            width: { xs: "30%" , md: "80%" },
            height: { xs: 60, md: "90%" },
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={img3}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              top: { xs: 1 , md: 1}   ,
            }}
          />
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: { xs: 6, md: 30 }, 
              right: { xs: 2  , md: 30 },
              borderRadius:"50%" ,
              width: { xs: 30   , md: 100 },
              height: { xs: 30    , md: 100 },
              bgcolor: "rgba(217,217,217,0.8)",
              color: "#0054E0",
              minWidth: 0,
              padding:0, 
               mr:1, 
              fontSize: { xs: "6px", md: "14px" },
            }}
          >
            MORE ↗
          </Button>
        </Box>
      )}
    </Box>
  ))}
</Box>

      </Container>
    </Box>
  );
};

/* ==========================================================================
   4. CORPORATE SERVICES
   ========================================================================== */

const CorporateServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "01",
      title: "Paramotor airshow",
      desc: "Bring the Sky to Your Event with stunning aerial performances that captivate every audience.",
    },
    {
      id: "02",
      title: "Aerial Videography",
      desc: "Elevate Your Perspective with high-quality cinematic footage captured from the clouds.",
    },
    {
      id: "03",
      title: "Partnership with Us",
      desc: "Soar to New Heights Together by joining our network of professional aerial sports.",
    },
  ];

  return (
    <Box
      sx={{
        py: 1,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "270px",
        display: "flex",
        alignItems: "center",
      }}
    >
    
    <Box sx={{ py: { xs: 3 , md: 2} }}>
      {/* ===== Main Title ===== */}
      
      {/* ===== Cards ===== */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
              gap: { xs: 1, md: 3 },
          
          }}
        >
          {services.map((s, i) => {
            const isActive = activeTab === i;

            return (
              <Paper
                key={i}
                onClick={() => setActiveTab(i)}
                elevation={isActive ? 8 : 0}
                sx={{
                  flex: { xs: "1 1 100%", md: isActive ? 2.5 : 1 },
                 minHeight: {
                xs: isActive ? 160 : 100, 
               md: 360, },

                  cursor: "pointer",
                  p: { xs: 3, md: 4 },
                  borderRadius: "30px",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: isActive
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(217,217,217,0.4)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {isActive && (
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 28, md: 48 },
                      mb: { xs: 1, md: 2 },
                      color: "#2d1f5e",
                    }}
                  >
                    Corporate Services
                  </Typography>
                )}

                   {/* ===== Content ===== */}
         <Box  sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            height: "100%",          
          }}>
                  {/* ID */}
                  <Typography
                    sx={{
                      color: "#FE5900",
                      fontWeight: "bold",
                      fontSize: 16,
                    
                      
                    }}
                  >
                    {s.id}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 20, md: isActive ? 32 : 24 },
                      color: "#000",
                      
                    }}
                  >
                    {s.title}
                  </Typography>

                  {/* ===== Hidden Content ===== */}
                  <Box
                    sx={{
                      maxHeight: isActive ? "80px" : "0px",
                      opacity: isActive ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#555",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </Typography>
                  </Box>
                </Box>

               
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: isActive ? "#fff" : "transparent",
                    opacity: isActive ? 1 : 0,
                    transition: "0.3s",
                  }}
                >
                  <NorthEastIcon sx={{ fontSize: 18, color: "#FE5900" }} />
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
    </Box>

  );
};


/* ==========================================================================
   5. LATEST WORK & FOOTER
   ========================================================================== */

const LatestWork = () => {
  return (
    <Box sx={{ py: 5, bgcolor: "#fff", overflowX: "hidden" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2d1f5e"
          sx={{ mb: 4, fontSize: { xs: "24px", md: "32px" } }}
        >
          Latest Work
        </Typography>
</Container>
         <Grid
      container
      spacing={4}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: { xs: 3, md: 4 },
        
      }}
    >
      {/* القسم الأول: الفيديو */}
      <Grid
        item
        sx={{
          width: { xs: "100%", sm: 394, md: 596 },
          
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "30px",
              overflow: "hidden",
              backgroundColor: "#000",
              height: { xs: 261, md: 385 },
            }}
          >
            <Box
              component="img"
              src={img5}
              sx={{
                width: "100%",
                
                objectFit: "cover",
                height:{ xs:263 , md:"100%"}
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(217,217,217,0.8)",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(5px)",
                }}
              >
                <Play fill="#0054E0" color="#0054E0" size={25} />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Our airshow display
              </Typography>
              <Typography variant="caption" color="textSecondary">
                23 - Oct - 2025
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#FE5900",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "13px",
                textDecoration: "underline",
              }}
            >
              MORE Airshows ↗
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* القسم الثاني: الأخبار */}
     <Grid
  item
  sx={{
    width: { xs: "100%", sm: 394, md: 596 },
  }}
>
  <Box
    sx={{
      border: "1px solid #E0E7F0",
      borderRadius: "30px",
      p: 3,
      display: "flex",
      flexDirection: "column",
      gap: 3,
      height: { xs: "auto", md: 385 }, 
    }}
  >
    {[1, 2].map((n) => (
      <Box
        key={n}
        sx={{
          display: "flex",
          flexDirection: "row", 
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        <Box
          component="img"
          src={img3}
          sx={{
            width: { xs: 161, sm: 161, md: 285 },
            height: { xs: 106, md: 189 },
            borderRadius: "15px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <Box>
          <Typography variant="body2" fontWeight="bold">
            News Skymaster
          </Typography>
          <Typography variant="caption" color="primary" display="block">
            23 - Oct - 2025
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              whiteSpace: "pre-line",
            }}
          >
            Watch our past performances and witness the incredible
            skill of our pilots. {"\n"}
            Lorem ipsum dolor asperiores et mollitia nobis. {"\n"}
            This is a new line.
          </Typography>
        </Box>
      </Box>
    ))}

    <Box sx={{ textAlign: "right" }}>
      <Button
        sx={{
          color: "#FE5900",
          borderRadius: "20px",
          px: 1,
          py: 0.2,
          fontSize: "12px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        MORE News ↗
      </Button>
    </Box>
  </Box>
</Grid>


    </Grid>
        {/* السلايدر */}
       <Box sx={{ mt: 6, position: "relative" }}>
  <Swiper
    spaceBetween={10}
    slidesPerView={2.5  }
    breakpoints={{
      640: { slidesPerView: 4 },
      1024: { slidesPerView: 6.5 },
    }}
  >
    {[1, 2, 3, 4, 5, 6, 7].map((s) => (
      <SwiperSlide key={s}>
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            height: { xs: "100px", md: "130px" },
            width: "100%",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Box
            component="img"
            src={img9}
            sx={{

              width: {xs: "130%", md: "100%"},
              height: {xs: "100%", md: "100%"},
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>

 
  <Button
    sx={{
      position: "absolute",
      right: { xs: 10, md: -1 },
      top: "50%",
      transform: "translateY(-50%)",
      borderRadius: "50%",
      width: { xs: 50, md: 70 },
      height: { xs: 50, md: 70 },
      bgcolor: "rgba(217, 217, 217, 0.9)",
      color: "#FE5900",
      fontWeight: "bold",
      fontSize: { xs: "8px", md: "11px" },
      minWidth: 0,
      border: "1px solid rgba(255,255,255,0.5)",
      backdropFilter: "blur(4px)",
      zIndex: 10,
      "&:hover": { bgcolor: "#fff" },
    }}
  >
    MORE ↗
  </Button>
</Box>

    
    </Box>
  );
};



/* ==========================================================================
   MAIN PAGE ASSEMBLY
   ========================================================================== */
const HeroSection = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <LandingPage />
      <PackagesSection />
      <IndividualServices />
      <CorporateServices />
      <LatestWork />
    </Box>
  );
};

export default HeroSection;



