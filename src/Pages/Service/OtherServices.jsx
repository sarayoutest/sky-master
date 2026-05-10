import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Divider,
  TextField,
  Select,
  InputAdornment,
  Grid,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import { contactSchema } from "../../schemas/contactSchema";
import heroImage from "/src/assets/images/2.png";
import overlayImage from "/src/assets/images/11.png";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useUser } from "../../context/UserContext";
import { Snackbar, Alert, CircularProgress } from "@mui/material";

export default function OtherServices() {
 const { i18n } = useTranslation();
  const lang = i18n.language;
  const { userData, setUserData } = useUser();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema(lang)),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      countryCode: "+974",
      company: "",
      model: "",
      type: "",
      color: "",
      size: "",
      detailedAddress: "",
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
        company: "",
        model: "",
        type: "",
        color: "",
        size: "",
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
      company: "",
      model: "",
      type: "",
      color: "",
      size: "",
      detailedAddress: "",
    });
  }, [lang]);

  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden", pb: 0 }}>
      {/* ================= HERO SECTION ================= */}
      <Box
                         sx={{
                           position: "relative",
                         height: { xs: 200, sm: 360, md: 420 },    
                           backgroundImage: `url(${heroImage})`,
                           width:"100%",
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
                              Other Services
                           </Typography>
                         </Container>
                 
                         {/* Floating Card */}
                         <Box
                           sx={{
                             position: "absolute",
                             bottom: { xs: -70, sm: -55, md: -70 },
                             left: "50%",
                             transform: "translateX(-50%)",
                             width: { xs: "89%", md: "96%" },
                             maxWidth: 1200,
                             backgroundImage: `url(${overlayImage})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                             borderRadius: 4,
                             p: { xs: 1, sm: 3, md: 5 },
                             color: "#fff",
                             zIndex: 3,
                             boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                           }}
                         >
                           <Typography
                           variant="h6"
                             fontWeight="300"
                             textAlign="center"
                             sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" } ,px: { xs: 1, md: 0 },mb: 1, lineHeight: 1.5,mx: "auto",
                           }}
                           >
                              Our commitment to the paramotor community extends beyond training.
            We provide a full suite of services to support pilots at every stage
            of their journey.
                           </Typography>
                           </Box>
       </Box>
      
      <Box sx={{ height: { xs: 80, md: 100 } }} />

      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="700" mb={3} color="rgba(55,31,112,1)">
          Equipment Orders
        </Typography>

          <Box sx={{ 
  maxWidth: { xs: "90%", md: "1100px" }, 
  mx: "auto", 
  textAlign: "left", 
  px: { xs: 2, md: 0 } 
}}>
 
  <Typography 
    color="text.secondary" 
    sx={{ 
      mb: 3, 
      fontSize: { xs: "0.95rem", md: "1.1rem" }, 
      lineHeight: 1.6 
    }}
  >
    As an official dealer for leading paramotor brands, we make it easy to get the latest and best gear. Whether you're upgrading your current setup or looking for new equipment, our experts will help you choose the perfect glider, engine, and accessories to match your flying style and skill level.
  </Typography>

 
  <Stack spacing={2}>
    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Gliders:</Box> We offer a wide range of paragliding/ Paramotor wings from top manufacturers, available in various sizes, colors, and performance categories.
    </Typography>

    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Engines & Paramotors:</Box> Choose from a selection of powerful and reliable engines, complete paramotor units, and frames.
    </Typography>

    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Accessories:</Box> From harnesses and reserve parachutes to helmets and flight instruments, we supply all essentials to complete your setup.
    </Typography>
  </Stack>
</Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" fontWeight="700" mb={1} color="rgba(55,31,112,1)">
          Our services are expanding
        </Typography>

          
        <Box sx={{ 
  maxWidth: { xs: "90%", md: "1100px" }, 
  mx: "auto", 
  textAlign: "left", 
  px: { xs: 2, md: 0 } ,
  py:1,
}}>
 
  <Typography 
    color="text.secondary" 
    sx={{ 
      mb: 3, 
      fontSize: { xs: "0.95rem", md: "1.1rem" }, 
      lineHeight: 1.6 
    }}
  >
    As an official dealer for leading paramotor brands, we make it easy to get the latest and best gear. Whether you're upgrading your current setup or looking for new equipment, our experts will help you choose the perfect glider, engine, and accessories to match your flying style and skill level.
  </Typography>

  <Stack spacing={2}>
    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Gliders:</Box> We offer a wide range of paragliding/ Paramotor wings from top manufacturers, available in various sizes, colors, and performance categories.
    </Typography>

    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Engines & Paramotors:</Box> Choose from a selection of powerful and reliable engines, complete paramotor units, and frames.
    </Typography>

    <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
      <Box component="span" sx={{ fontWeight: "800", color: "#000" }}>• Accessories:</Box> From harnesses and reserve parachutes to helmets and flight instruments, we supply all essentials to complete your setup.
    </Typography>
  </Stack>
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
        mt:3,
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
        {/* 1.(Header) */}
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

        {/* محتوى النموذج */}
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
          {/* ===== Columns Wrapper ===== */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
            }}
          >
            {/* ===== Left Section ===== */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: "#444" }}>
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
                      variant="outlined"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
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
                  // التعديل هنا: إضافة MenuProps مباشرة للـ Select
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
      placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"}
      variant="outlined"
      error={!!errors.email}
      helperText={errors.email?.message}
      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
    />
  )}
/>

                {/* Equipment Details */}
                <Typography fontWeight={700} mt={2} mb={2} color="#444">
                      {lang === "ar" ? "التفاصيل" : "Equipment Details"}
                </Typography>
                <Stack spacing={3}>
                  <Controller
                    name="company"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
              placeholder={lang === "ar" ? " ماركة" : "Company / Brand"}
                        variant="outlined"
                        error={!!errors.company}
                        helperText={errors.company?.message}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                      />
                    )}
                  />
                  <Controller
                    name="model"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
               placeholder={lang === "ar" ? " اسم النوع " : "Model Name"}
                       
                        variant="outlined"
                        error={!!errors.model}
                        helperText={errors.model?.message}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                      />
                    )}
                  />
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                         placeholder={lang === "ar" ? "النوع" : "Equipment Type"}
                        variant="outlined"
                        error={!!errors.type}
                        helperText={errors.type?.message}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </Box>

            {/* ===== Right Section ===== */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: { xs: -2, md: 7 } }} />
              <Stack spacing={3}>
                <Controller
                  name="color"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
 placeholder={lang === "ar" ? "اللون" : "Color"}
                      
                      variant="outlined"
                      error={!!errors.color}
                      helperText={errors.color?.message}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                    />
                  )}
                />
                <Controller
                  name="size"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                  placeholder={lang === "ar" ? "حجم" : "Size"}
                      variant="outlined"
                      error={!!errors.size}
                      helperText={errors.size?.message}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                    />
                  )}
                />
              </Stack>

              <Typography
                variant="h6"
                sx={{ mt: 3, mb: 2, fontWeight: 700, color: "#444" }}
              >

                  {lang === "ar"
                    ? "تفاصيل أخرى أو أسئلة"
                    : "Any other details or questions"}              </Typography>
              <Controller
                name="detailedAddress"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={8}
                     placeholder={lang === "ar" ? "اكتب هنا..." : "Write Here..."}
                    variant="outlined"
                    error={!!errors.detailedAddress}
                    helperText={errors.detailedAddress?.message}
                    sx={{
                      flexGrow: 1,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        alignItems: "flex-start",
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Box>

          {/* ===== Submit Button ===== */}
          <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
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
                "&:hover": {
                  bgcolor: "#003ba1",
                  transform: "translateY(-3px)",
                },
              }}
            >{isSubmitting ? (
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
        {/* ===== Snackbar ===== */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
             {lang === "ar"
              ? "تم إرسال الرسالة بنجاح"
              : "Message sent successfully"}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
   
  );
};
