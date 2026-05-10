import React, {  useEffect }  from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem,Stack,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema} from "../schemas/contactSchema";
import { useUser } from "../context/UserContext";
import { Snackbar, Alert, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

import heroImage from "/src/assets/images/4.png";
import overlayImage from "/src/assets/images/11.png";

function ContactX() {
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
    <Box sx={{ bgcolor: "#f9fafb", overflow: "hidden" , pb: 0}}>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          width:"100%",
          height: { xs: 200, sm: 360, md: 420 }, 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius:"20px",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.25)",
            zIndex: 1,
            borderRadius:"20px",
          }}
        />

        {/* Hero Title */}
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
            fontWeight={800}
            color="#fff"
            textAlign="center"
            sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" } }}
          >
            Contact Us
          </Typography>
        </Container>

        {/* Floating Card */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -35, md: -70 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "75%", md: "96%" },
            maxWidth: 1200,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 4,
            p: { xs: 4, md: 5 },
            color: "#fff",
            zIndex: 3,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            textAlign="center"
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" } }}
          >
            Ready to Fly? Get in Touch!
          </Typography>
        </Box>
      </Box>

      {/* Space under floating card */}
      <Box sx={{ height: { xs: 60, md: 120 } }} />

      {/* ================= CONTACT INFO ================= */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography
          variant="h5"
          fontWeight={400}
          textAlign="center"
          sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.rem" }, mb: 4 }}
        >
          We’re here to answer any questions you have about our services, training,
          or how to book your next adventure.
        </Typography>

          <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    justifyContent: "center",
    textAlign: "center",
  }}
>
  {/* الهاتف */}
  <Box
    sx={{
      bgcolor: "rgba(217, 217, 217, 0.5)",
      borderRadius: 2,
      width: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center", 
      gap: 1.5,
      p: 2,
    }}
  >
    {/* الأيقونة */}
    <Box
      component="span"
      sx={{ display: "flex", alignItems: "center" }}
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(254, 89, 0, 1)" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.28 21 3 13.72 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.48.57 3.56a1 1 0 01-.21 1.11l-2.24 2.12z"/>
        </svg>`,
      }}
    />
    {/* النص */}
    <Typography sx={{ color: "rgba(0, 84, 224, 1)", fontWeight: 600 }}>01 +97460004011</Typography>
  </Box>

  {/* البريد الإلكتروني */}
  <Box
    sx={{
      bgcolor: "rgba(217, 217, 217, 0.5)",
      borderRadius: 2,
      width: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1.5,
      p: 2,
    }}
  >
    <Box
      component="span"
      sx={{ display: "flex", alignItems: "center" }}
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(254, 89, 0, 1)" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>`,
      }}
    />
    <Typography sx={{ color: "rgba(0, 84, 224, 1)", fontWeight: 600 }}>info@skymasters.qa</Typography>
  </Box>

  {/* الموقع */}
  <Box
    sx={{
      bgcolor: "rgba(217, 217, 217, 0.5)",
      borderRadius: 2,
      width: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1.5,
      p: 2,
    }}
  >
    <Box
      component="span"
      sx={{ display: "flex", alignItems: "center" }}
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(254, 89, 0, 1)" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
        </svg>`,
      }}
    />
    <Typography sx={{ color: "rgba(0, 84, 224, 1)", fontWeight: 600 }}>Sealine- Qatar</Typography>
  </Box>
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
        {lang === "ar" ? " ارسال الرسالة" : "Send A Message"}
      </Typography>
    </Box>

    {/* 2. (Body) */}
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
                   SelectProps={{
    MenuProps: {
      disableScrollLock: true, 
    },
  }}
                  placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Controller
                          name="countryCode"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              variant="standard"
                              disableUnderline
                              sx={{ fontWeight: 600, mr: 1 }}
                            >
                              <MenuItem value="+974">
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
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
            "إرسال الآن"
          ) : (
            "Send Now"
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
}

export default ContactX;
