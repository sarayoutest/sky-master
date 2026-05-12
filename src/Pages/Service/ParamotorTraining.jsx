import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Grid,
  Button,
  Select,
  TextField,
  Stack,
  InputAdornment,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contactSchema";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


import heroImage from "../../assets/images/4.png";
import overlayImage from "../../assets/images/11.png";
import coursesBg from "../../assets/images/7.png";

export default function ParamotorTraining() {
  const trainingModules = [
    {
      title: "Theoretical Lectures",
      desc: "Up to 4 hours of essential aviation theory, including flight rules, safety, and risk management.",
    },
    {
      title: "Practical Training",
      desc: "Up to 4 hours covering wing and paramotor parts, equipment inspection, and basic operations.",
    },
    {
      title: "Ground Training",
      desc: "Up to 14 hours dedicated to harness setup, wing preparation, lifting, and ground handling.",
    },
    {
      title: "Aerial Training",
      desc: "10 flights focusing on takeoff, landing, and gaining confidence in the air.",
    },
    {
      title: "License & Exam",
      desc: "Final theoretical and practical exams, leading to a pilot license.",
    },
  ];
const navigate = useNavigate();
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
    <Box sx={{ bgcolor: "#fff", overflow: "hidden", py: 0 }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 200, sm: 360, md: 420 },
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.25)",
            zIndex: 1,
            borderRadius: "20px",
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
            Paramotor Training
          </Typography>
        </Container>

        {/* Floating Card */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -70, md: -70 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "89%", md: "96%" },
            maxWidth: 1200,
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 4,
            p: { xs: 1, md: 5 },
            color: "#fff",
            zIndex: 3,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            textAlign="center"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.2rem", md: "1.6rem" },
              mb: 1,
            }}
          >
            Learn to fly with the best.
          </Typography>

          <Typography
            textAlign="center"
            sx={{
              maxWidth: { md: "100%", lg: "1200px", xs: "90%" },
              mx: "auto",
              mb: 1,
              lineHeight: 1.5,
              fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
              px: { xs: 1, md: 0 },
              color: "#fff",
            }}
          >
            Ready to take control? Our comprehensive training courses will equip
            you with the skills and confidence to fly safely and independently.
          </Typography>
        </Box>
      </Box>

      {/* spacing */}
      <Box sx={{ height: { xs: 110, md: 120 } }} />

      {/* ================= WHO CAN JOIN ================= */}
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }} >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: -3,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: "row",
              }}
            >
              <Box component="img" src="/src/assets/images/vector.svg" sx={{ width: 28 }} />

              <Typography variant="h5" fontWeight="700" color="rgba(55,31,112,1)">
                Who Can Join ?
              </Typography>
            </Box>

            <Typography color="text.secondary" maxWidth={720}>
              No previous experience is necessary. A good level of physical
              fitness is required. Trainee weight must be less than 100 kg. Must
              be 18 years of age or older.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* ================= SUMMARY ================= */}
        <Typography variant="h5" fontWeight="700" mb={3} color="rgba(55,31,112,1)">
          Summary of Basic Paramotor Course
        </Typography>

        <Paper sx={{ borderRadius: 4, overflow: "hidden", width: "100%" }}>
          {trainingModules.map((item, index) => (
            <Box key={index}>
              <Grid
                container
                alignItems="center"
                sx={{
                  display: { xs: "block", md: "flex" },
                  p: { xs: 1, md: 3 },
                  py: { xs: 2, md: 3 },
                }}
              >
                <Grid item xs={12} md={3}>
                  <Button
                    fullWidth
                    disableRipple
                    sx={{
                      width: { xs: "100%", md: 220 },
                      maxWidth: "none",
                      height: { xs: 54, md: 64 },
                      borderRadius: { xs: 4, md: 4 },
                      bgcolor: "#F1F1F1",
                      color: "rgba(0,84,224,1)",
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      textTransform: "none",
                      "&:hover": { bgcolor: "#E5E5E5" },
                    }}
                  >
                    {item.title}
                  </Button>
                </Grid>

                <Grid item xs={12} md={9}>
                  <Typography
                    color="text.secondary"
                    sx={{ px: 2, mt: { xs: 2, md: 0 }, fontSize: "0.95rem", textAlign: "left" }}
                  >
                    {item.desc}
                  </Typography>
                </Grid>
              </Grid>

              {index !== trainingModules.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>
      </Container>

      {/* ================= DOWNLOAD FORM ================= */}
    
        <Box
   component="form"
   onSubmit={handleSubmit(onSubmit)}
   sx={{
     width: "100%",
     display: "flex",
     justifyContent: "center",
     py: 5,
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
         display:"flex",
         justifyContent:"space-between"
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
         {lang === "ar" ? "حمّل تفاصيل الدورة التدريبية كاملة!" : "Download Full Course Details !"}
       </Typography>
       <Typography
         variant="h3"
         sx={{
           color: "#FE5900",
           fontWeight: 800,
           fontSize: { xs: "1.5rem", md: "2.2rem" },
         }}
       >
        10,700 QAR
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
      {/* ================= OTHER COURSES ================= */}
      <Box
        sx={{
          backgroundImage: `url(${coursesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 3 },
          mt: -4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(12px)",
              borderRadius: 5,
              px: { xs: 1, md: 1 },
              py: 6,
              textAlign: "center",
            }}
          >
            <Typography variant="h3" fontWeight="800" mb={2} color="#2D1A5A" sx={{ fontSize: { xs: "1.3rem", md: "3rem" } }}>
              Other Training Courses
            </Typography>

            <Typography
              maxWidth={820}
              fontWeight="500"
              mx="auto"
              mb={5}
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, px: 2 }}
            >
              Our school offers a range of advanced courses designed to help you improve your skills and obtain further certifications.
              These training courses are subject to the pilot’s existing skills and previous certificates.
            </Typography>

            {/* Courses Boxes */}
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 2, mb: 5, mt: -3, p: 2 }}>
              {["Intermediate course", "Advanced course", "Paramotor Instructor Course"].map((c) => (
                <Box
                  key={c}
                  sx={{
                    flex: { xs: "1 1 100%", md: "1 1 30%" },
                    maxWidth: 500,
                    height: { xs: 64, md: 72 },
                    backgroundColor: "rgba(217, 217, 217, 0.3)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography sx={{ color: "rgba(0, 84, 224, 1)", fontWeight: 600, fontSize: "0.95rem", textAlign: "center", px: 2 }}>
                    {c}
                  </Typography>
                </Box>
              ))}

              {["Paratrike Course", "Tandem Paratrike Course"].map((c) => (
                <Box
                  key={c}
                  sx={{
                    width: { xs: "100%", md: "355px" },
                    height: { xs: 64, md: 72 },
                    backgroundColor: "rgba(217, 217, 217, 0.3)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography sx={{ color: "rgba(0, 84, 224, 1)", fontWeight: 600, fontSize: "0.95rem", textAlign: "center", px: 2 }}>
                    {c}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              onClick={() => navigate("/contactX")}
              sx={{
                px: 10,
                borderRadius: "10px",
                width: { xs: "90%", md: "50%" },
                height: "60px",
                backgroundColor: "rgba(0, 84, 224, 1)",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0, 70, 200, 1)" },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box> 

    
  );
}
