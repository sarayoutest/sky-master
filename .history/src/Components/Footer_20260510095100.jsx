import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import footerBg from "../assets/images/9.png";
import { Images } from "lucide-react";
const footerHover = {
  fontSize: "14px",
  cursor: "pointer",
  transition: "all .3s ease",
  width: "fit-content",

  "&:hover": {
    color: "#FE5900",
    transform: "translateX(4px)",
  },
};
const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <Box sx={{ position: "relative", color: "white",mt:"2% "}}>
        {/* Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
          }}
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 10 },
          }}
        >
          <Grid
            container
            spacing={8}
            alignItems="stretch" 
            justifyContent="space-between"
          >
            {/* ===== LEFT SECTION ===== */}
            <Grid item xs={12} md={5}>
              <Stack spacing={4}>
                {/* Logo */}
                <Link to="/">
                  <img
                    src="/src/assets/images/Logo.svg"
                    alt="Logo"
                    style={{ height: 60 }}
                  />
                </Link>

                {/* Services */}
                {/* Services */}
<Grid
  container
  direction={{ xs: "column", md: "row" }}
  spacing={{ xs: 2, md: 8 }} 
>
  <Grid item xs={12} md={6}>
    <Stack
      spacing={{ xs: 1.5, md: 2 }} 
      sx={{ pl: { xs: 1.5, md: 0 } ,
            ml:{xs :0 , md:-10}          }} 
    >
      <Typography  fontSize={14}>Individuals Services</Typography>
      <Typography fontSize={14}>Paratrike Airtours</Typography>
      <Typography fontSize={14}>Paramotor Training</Typography>
    </Stack>
  </Grid>

  <Grid item xs={12} md={6}>
    <Stack
      spacing={{ xs: 1.5, md: 2 }}
      sx={{ pl: { xs: 1.5, md: 0 },
    ml:{xs :0 , md:18}  }}
    >
      <Typography fontSize={14}>Partnership with Us</Typography>
      <Typography fontSize={14}>Aerial Videography</Typography>
      <Typography fontSize={14}>Paramotor airshow</Typography>
    </Stack>
  </Grid>
</Grid>


                {/* Social */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography fontWeight="bold" fontSize="14px">
                    Follow On
                  </Typography>
                  {[FacebookIcon, InstagramIcon, WhatsAppIcon].map(
                    (Icon, i) => (
                      <Icon
                        key={i}
                        sx={{
                          cursor: "pointer",
                          opacity: 0.85,
                          transition: "0.3s",
                          "&:hover": { opacity: 1, color: "#FE5900" },
                        }}
                      />
                    )
                  )}
                </Stack>
              </Stack>
            </Grid>

            {/* ===== DIVIDER (Desktop only) ===== */}
            <Grid
  item
  md={2}
  display={{ xs: "none", md: "flex" }}
  justifyContent="center"
  alignItems="stretch"
>
  <Divider
    orientation="vertical"
    flexItem
    sx={{
      borderColor: "white",
      borderLeftWidth: "2px",   // سمك الخط
      height: "165%",            // يزيد الطول من الأعلى والأسفل
      position: "relative",
      top: "-33%",               // يرفع الخط لأعلى
    }}
  />
</Grid>


            {/* ===== RIGHT SECTION ===== */}
            <Grid item xs={12} md={5} sx={{ ml:{xs:2, md:0 }}}>
  <Stack spacing={4} >
    {/* عنوان */}
    <Typography
      variant="h4"
      fontWeight="bold"
      fontSize={{ xs: "24px", md: "28px" }}
      textAlign="center"
       sx={{textAlign: { xs: "left", md: "center" }}}
    >
      Contact Us
    </Typography>

    {/* الموقع */}
    <Stack direction="row" spacing={1} >
      <LocationOnIcon fontSize="small" />
      <Typography variant="body2" fontSize="14px">
        Sealine – Qatar Zone 94, Street 601, Building 1612
        
      </Typography>
    </Stack>

    {/* الأعمدة باستخدام Flex */}
<Box
 display="flex"  flexDirection={{ xs: "column", md: "row" }}
 gap={{ xs: 2, md: 15 }}  >
      {/* العمود الأيسر */}
      <Stack spacing={4}>
        <Stack direction="row" spacing={1} alignItems="left">
          <PhoneIcon fontSize="small" />
          <Typography variant="body2" fontSize="14px">
            +974 6000 5011
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="left">
          <PhoneIcon fontSize="small" />
          <Typography variant="body2" fontSize="14px">
            +974 7000 8899
          </Typography>
        </Stack>
      </Stack>

      {/* العمود الأيمن */}
      <Stack spacing={4}>
        <Stack direction="row" spacing={1} alignItems="right">
          <EmailIcon fontSize="small" />
          <Typography variant="body2" fontSize="14px">
            info@skymasters.qa
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="right">
          <PublicIcon fontSize="small" />
          <Typography variant="body2" fontSize="14px">
            skymasters.qa
            
          </Typography>
        </Stack>
      </Stack>
    </Box>

    {/* Subscribe */}
    {/* <Stack
  direction={{ xs: "column", sm: "row" }} 
  spacing={2}
  alignItems={{ xs: "flex-start", sm: "center" }} 
  width="100%"
>
  <TextField
    variant="standard"
    placeholder="@Email*"
    fullWidth
    InputProps={{
      sx: {
        color: "white",
        "&:before": { borderBottomColor: "white" },
      },
    }}
    sx={{ mb: { xs: 1, sm: 0 } }} 
  />
  <Box
    sx={{
      width: { xs: "auto", sm: "auto" },
      display: "flex",
      
    }}
  >
    <Button
      sx={{
        minWidth: 100,
        color: "rgba(254,89,0,1)",
        fontWeight: "bold",
        borderRadius: "12px",
         ml: { xs:30 , md: 0 } ,
        backgroundColor: "rgba(217,217,217,0.5)",
        border: "1px solid white",
        "&:hover": { backgroundColor: "rgba(217,217,217,0.7)" },
      }}
      endIcon={
        <ArrowUpwardIcon
          sx={{ transform: "rotate(45deg)", color: "rgba(254,89,0,1)" }}
        />
      }
    >
      SUBSCRIBE
    </Button>
  </Box>
</Stack> */}



  </Stack>
</Grid>

          </Grid>
        </Container>
      </Box>

      {/* COPYRIGHT – خارج الخلفية */}
      <Typography
        textAlign="center"
        py={3}
        fontSize={20}
        fontWeight={700}
         sx={{
    width: { xs: "90%", md: "100%" }, 
    mx: "auto",                      
    fontSize: { xs: 16, md: 20 },}}
        color="rgba(55, 31, 112, 1)"
      >
        © 2026 SkyMasters – All Rights Reserved
      </Typography>
    </>
  );
};

export default Footer;

