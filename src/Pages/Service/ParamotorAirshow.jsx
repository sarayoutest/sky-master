import React, {  useEffect }  from "react";

import { Box, Container, Typography, Stack, Button, Divider, TextField, InputAdornment, Select, MenuItem } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import heroImage from "../../assets/images/44.png";
import overlayImage from "../../assets/images/11.png";
import img5 from "../../assets/images/5.png";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";
import { useUser } from "../../context/UserContext";
import { Snackbar, Alert, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

const ParamotorAirshow = () => {
 const { i18n } = useTranslation();
  const lang = i18n.language;

const { userData, setUserData } = useUser();
const [openSnackbar, setOpenSnackbar] = React.useState(false);
const {
  control,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm({
   resolver: zodResolver(contactSchema(lang)),
  defaultValues: {
    ...userData,
    countryCode: userData.countryCode || "+974",
  },
  mode: "onSubmit",
});

const onSubmit = async (data) => {
  try {
    
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setUserData(data);
    setOpenSnackbar(true);

    reset({
      name: "",
      phone: "",
      email: "",
      countryCode: "+974",
      detailedAddress: "",
    });
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  reset({
    name: "",
    phone: "",
    email: "",
    countryCode: "+974",
    detailedAddress: "",
  });
}, [lang]);

  return (
    <Box sx={{ bgcolor: "#fff", overflow: "hidden" ,py:0}}>
      {/* Hero Section */}
      <Box
        sx={{
         position: "relative",
          height: { xs: 200, sm: 360, md: 420 }, 
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          width:"100%",
          backgroundPosition: "center",
          borderRadius:"20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            
            zIndex: 1,
          }}
        />

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
            Paramotor Airshow
          </Typography>
        </Container>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -30, sm: -55, md: -70 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "85%", md: "92%" },
            maxWidth: 1200,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 4,
            p: { xs: 2.5, sm: 3, md: 5 },
            color: "#fff",
            zIndex: 3,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
            fontWeight="700"
            textAlign="center"
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" } }}
          >
            Bring The Sky To Your Event
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Container sx={{ mt:{xs:8 ,md: 15} }}>
        <Typography color="text.secondary" maxWidth={900} mb={4}>
          SkyMasters Sports Club was founded on a simple principle: a love for
          flight. Our journey began with a single paramotor and a dream to share
          the incredible feeling of soaring through the air.
        </Typography>

        <Divider sx={{ mb: 4 }} />
        
        <Box component="ul" sx={{ color: "text.secondary", lineHeight: 2, "& strong": { color: "rgba(0, 84, 224, 1)"}}}>
         

          <li>
          <strong >CUSTOMIZABLE SHOWS:</strong> CUSTOMIZABLE SHOWS: We can tailor our performance to fit the scale and theme of your event, from single-pilot to, multi-pilot demonstrations.
        </li>
        <li>
          <strong >EXPERIENCED PILOTS:</strong>  Our team consists of highly skilled and licensed pilots with extensive experience in airshow displays.
        </li>
        <li>
          <strong >SAFETY FIRST:</strong> We adhere to the strictest safety standards, conducting thorough site assessments and pre-flight checks to ensure a safe and professional show every time.
        </li>
        </Box>

        <Divider sx={{ mb: 4 }} />
        
        <Typography
          variant="h5"
          fontWeight="700"
          mb={3}
          color="rgba(55,31,112,1)"
        >
          Show Our Portfolio:
        </Typography>

        <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 3,
    overflowX: { xs: "visible", md: "visible" },
    pb: { xs: 2, md: 6 },
    pt: 3,
    "&::-webkit-scrollbar": { display: "none" },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  }}
>
  {[1, 2, 3].map((item) => (
    <Box
      key={item}
      sx={{
        
        flex: { xs:"1 1 100%" , md: "1 1 33.33%" },
        minWidth: { xs: "100%", md: "0" },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* الفيديو / الصورة */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "30px",
          overflow: "hidden",
          backgroundColor: "#000",
          height: { xs: 200, md: 240 }, 
           border: "2px solid #0054E0", 
        }}
      >
        <Box
          component="img"
          src={img5}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* زر التشغيل */}
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
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(5px)",
            }}
          >
            <PlayArrowIcon fill="#0054E0" color="rgba(0, 84, 224, 1)" size={20} />
          </Box>
        </Box>
      </Box>

      {/* النصوص */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          px: 1,
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight="bold" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
            Our airshow display {item}
          </Typography>
          <Typography variant="caption" color="rgba(0, 84, 224, 1)">
            23 - Oct - 2025
          </Typography>
        </Box>
      </Box>
    </Box>
  ))}
</Box>
      </Container>

      {/* ================= CONTACT FORM ================= */}
             <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          py: 0,
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
            mx: { md: 4 },
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
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "2.2rem" },
              }}
            >
        {lang === "ar" ? "طلب عرض سعر" : "Request a Price Quote"}
            </Typography>
          </Box>
      
          {/* 2. جسم النموذج (Body) */}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 6,
              }}
            >
              {/* القسم الأيسر */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, fontWeight: 700, color: "#444" }}
                >
                  {lang === "ar" ? "معلوماتك" : "Your Information"}
                </Typography>
                <Stack spacing={3}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        placeholder={lang === "ar" ? "الاسم" : "Your Name"}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    )}
                  />
      
                    <Controller
  name="phone"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      fullWidth
      placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
      error={!!errors.phone}
      helperText={errors.phone?.message}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Controller
              name="countryCode"
              control={control}
              render={({ field: countryField }) => (
                <Select
                  {...countryField}
                  variant="standard"
                  disableUnderline
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                  sx={{ fontWeight: 600, mr: 1 }}
                >
                  <MenuItem value="+974">
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                       {/* SVG Flag Box */}
                       <Box
                        component="span"
                        sx={{ display: "flex", alignItems: "center" }}
                        dangerouslySetInnerHTML={{
                          __html: `<svg width="20" height="20" viewBox="0 0 36 36" fill="#8D1B3D" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 5H11v26h21a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
                            <path fill="#EEE" d="M11 28.111l5.295-1.444L11 25.222l5.295-1.444L11 22.333l5.295-1.444L11 19.444L16.295 18L11 16.556l5.295-1.444L11 13.667l5.295-1.444L11 10.778l5.295-1.445L11 7.889l5.295-1.444L11 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h7l5.295-1.444L11 28.111z"/>
                          </svg>`,
                        }}
                      /> +974
                    </Box>
                  </MenuItem>
                  <MenuItem value="+966">+966</MenuItem>
                </Select>
              )}
            />
            <Box sx={{ borderRight: "1px solid #ddd", height: 24, mx: 1 }} />
          </InputAdornment>
        ),
      }}
    />
  )}
/>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        placeholder={lang === "ar" ? "البريد الإلكتروني" : "Your Email"}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Stack>
              </Box>
      
              {/* القسم الأيمن */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, fontWeight: 700, color: "#444" }}
                >
                  {lang === "ar"
                    ? "تفاصيل أخرى أو أسئلة"
                    : "Any other details or questions"}
                </Typography>
      
                <Controller
                  name="detailedAddress"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={8.5}
                      placeholder={lang === "ar" ? "اكتب هنا..." : "Write Here..."}
                    />
                  )}
                />
              </Box>
            </Box>
      
            {/* 3. زر الإرسال */}
            <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  px: 10,
                  py: 2,
                  width: { xs: "100%", md: "50%" },
                  borderRadius: "10px",
                  bgcolor: "#0054E0",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "#003ba1",
                    transform: "translateY(-3px)",
                    boxShadow: "0px 10px 20px rgba(0,84,224,0.3)",
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={22} sx={{ color: "#fff", mr: 1 }} />
                    {lang === "ar" ? "جاري الإرسال..." : "Sending..."}
                  </>
               ) : lang === "ar" ? (
            "تأكيد"
          ) : (
            "Submit"
          )}
              </Button>
            </Box>
          </Box>
        </Box>
      
        {/* Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {lang === "ar"
              ? "تم إرسال الرسالة بنجاح"
              : "Message sent successfully"}
          </Alert>
        </Snackbar>
      </Box>
      
    </Box> 
  );
};

export default ParamotorAirshow;
