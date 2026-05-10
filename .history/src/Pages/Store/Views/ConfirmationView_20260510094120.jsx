import React, { useState, useEffect } from "react"; // السطر الناقصimport {
import {
  CardMedia,
  IconButton,
 
  Select,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress
} from "@mui/material";

import PageHeader from "../PageHeader";
import { Add, Remove, DeleteOutline } from "@mui/icons-material";

import { useCart } from "../../../context/CartContext";
import { useUser } from "../../../context/UserContext"; 
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "@mui/material/styles";
import { contactSchema } from "/src/schemas/contactSchema";
import { Snackbar, Alert} from "@mui/material";
import { useTranslation } from "react-i18next";



const ConfirmationView = ({ setView }) => {
  /* ===================== CONTEXT ===================== */
  const { cartItems, updateQty, removeItem } = useCart();
  const { userData, setUserData } = useUser(); 

 const { i18n } = useTranslation();
  const lang = i18n.language;

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

  /* ===================== SUBMIT ===================== */


// const onSubmit = async (data) => {
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // مثال API
//   console.log(data);
//    setUserData(data); // تحديث بيانات المستخدم في Context

//   const payload = {
//     customer: data,
//     items: cartItems, // نأخذ العناصر الحالية من الكونتكس مباشرة
//     deliveryMethod: data.deliveryMethod,
//   };

//   localStorage.setItem("confirmationData", JSON.stringify(payload));
//   setView("payment");
// };

const CustomFormControlLabel = styled(FormControlLabel)(({ theme, checked }) => ({
  border: checked ? "1px solid #371F70" : "1px solid #ccc",
  borderRadius: "8px",
  padding: "4px ",
  
  minWidth: "260px",
  textAlign: "center",
  marginRight: "16px", // مسافة بين الزرين
  cursor: "pointer",
  "& .MuiRadio-root": {
    color: "#371F70", // لون الدائرة عند الاختيار
  },
}));
  return (
    <Container maxWidth="lg">
      <PageHeader title="Order Confirmation!" onBack={() => setView("cart")} />

      <Grid container spacing={4} direction={{ xs: "column", md: "row" }}>
        {/* ===================== CART ===================== */}
        <Grid item xs={12} md={7} sx={{ flex: 1.4, minWidth: 0 }}>
          {cartItems.map((item) => (
            <Paper
              key={item.id}
              variant="outlined"
              sx={{ p: { xs: 1, md: 2 }, mb: 2, borderRadius: 2, display: "flex", gap: 2, alignItems: "center" }}
            >
              <CardMedia
                component="img"
                image={item.image}
                sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 70 }, borderRadius: 1 }}
              />

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography fontWeight="bold" color="orange">{item.price} QAR</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1, mt: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", borderRadius: 1, border: "2px solid #CCCBCB", p: 0.5 }}>
                    <IconButton size="small" sx={{ color: "white", bgcolor: "#0052cc", borderRadius: "4px", "&:hover": { bgcolor: "#003d99", color: "#fff" } }} onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
                      <Remove fontSize="small" />
                    </IconButton>

                    <Typography variant="caption" sx={{ color: "#000", px: 1.5, py: 0.3, bgcolor: "white", borderRadius: "4px", mx: { xs: 3, md: 15 } }}>
                      {item.qty}
                    </Typography>

                    <IconButton size="small" sx={{ color: "white", bgcolor: "#0052cc", borderRadius: "4px", "&:hover": { bgcolor: "#003d99", color: "#fff" } }} onClick={() => updateQty(item.id, item.qty + 1)}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>

                  <IconButton size="small" color="error" sx={{ border: "2px solid #CCCBCB", borderRadius: "4px", height: "40px" }} onClick={() => removeItem(item.id)}>
                    <DeleteOutline fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          ))}

          <TextField placeholder="Coupon Code" fullWidth size="small" sx={{ mb: 2 }} />

          <Paper sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight="bold">Total Cost</Typography>
            <Typography fontWeight="bold" color="#2E1065">{cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)} QAR</Typography>
          </Paper>
        </Grid>

        {/* ===================== USER INFO ===================== */}
        <Grid item xs={12} md={4} sx={{ flex: 1.4, minWidth: 0 }}>
          <Typography fontWeight="bold" mb={2}>Your Information</Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* Delivery Method */}
              <Typography fontWeight="bold" mb={2}>Delivery Service</Typography>
              <Controller
  name="deliveryMethod"
  control={control}
  render={({ field }) => (
    <RadioGroup
      row
      value={field.value}
      onChange={field.onChange}
      sx={{
        alignItems: "center",
        pb: 4,
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <CustomFormControlLabel
        value="delivery"
        control={<Radio />}
        label="Delivery"
        labelPlacement="start" 
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: 0,
          display: "flex",
          pl: 2,  pr: 1,
          justifyContent: "space-between", 
        }}
      />
      <CustomFormControlLabel
        value="store"
        control={<Radio />}
        label="Direct From Store"
        labelPlacement="start" 
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: 0,
          pl: 2,    pr: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      />
    </RadioGroup>
  )}
/>
             <Typography fontWeight="bold" mb={2}>Your Address</Typography>

            {/* Address Fields */}
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" sx={{ mb: 1.5 }} {...field} error={!!errors.country} helperText={errors.country?.message}>
                  <MenuItem value="">Select Country</MenuItem>
                  <MenuItem value="QA">Qatar</MenuItem>
                  <MenuItem value="AE">UAE</MenuItem>
                </TextField>
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" sx={{ mb: 1.5 }} {...field} error={!!errors.city} helperText={errors.city?.message}>
                  <MenuItem value="">Select City</MenuItem>
                  <MenuItem value="Doha">Doha</MenuItem>
                  <MenuItem value="Al Wakrah">Al Wakrah</MenuItem>
                </TextField>
              )}
            />

            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" sx={{ mb: 1.5 }} {...field} error={!!errors.region} helperText={errors.region?.message}>
                  <MenuItem value="">Select Region</MenuItem>
                  <MenuItem value="West Bay">West Bay</MenuItem>
                  <MenuItem value="Al Rayyan">Al Rayyan</MenuItem>
                </TextField>
              )}
            />

            <Controller
              name="street"
              control={control}
              render={({ field }) => (
                <TextField fullWidth size="small" placeholder="Street Name" sx={{ mb: 1.5 }} {...field} error={!!errors.street} helperText={errors.street?.message} />
              )}
            />

            <Controller
              name="building"
              control={control}
              render={({ field }) => (
                <TextField fullWidth size="small" placeholder="Building Number" sx={{ mb: 1.5 }} {...field} error={!!errors.building} helperText={errors.building?.message} />
              )}
            />

            <Controller
              name="detailedAddress"
              control={control}
              render={({ field }) => (
                <TextField fullWidth size="small" placeholder="Detailed Address" sx={{ mb: 2 }} {...field} error={!!errors.detailedAddress} helperText={errors.detailedAddress?.message} />
              )}
            />

            {/* Map */}
            <Box sx={{ height: { xs: 200, md: 300 }, border: "1px solid #ccc", borderRadius: 2, mb: 3 }}>
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Qatar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
              />
            </Box>

      
          </form>
          
        </Grid>
      </Grid>
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
    </Container>
  );
};

export default ConfirmationView;
