import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  Checkbox,
  Divider,Select,
  IconButton,
  Container,
  Paper,
  FormControl,InputAdornment ,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLocation } from "react-router-dom";
import overlayImage from "/src/assets/images/11.png";
 import { useNavigate } from "react-router-dom"; // تأكد من استيرادها في الأعلى
import { LocalizationProvider, StaticDatePicker, PickersDay } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isSameDay } from "date-fns";
 
// ================= THEME =================
const THEME = {
  primaryBlue: "#0056D2",
  darkPurple: "#2D1E5F",
  lightBg: "#F4F6F8",
  priceRed: "#FF5C00",
  white: "#FFFFFF",
  border: "#EEEEEE",
};

// ================= 1. المكون الفرعي للتقويم (CustomCalendar) =================
const CustomCalendar = ({ selectedDate, handleUpdate, bookedDates }) => {
  return (
    <Box sx={{ 
      maxWidth: 500, 
      width: '100%',
      bgcolor: '#fff', 
      borderRadius: '12px', 
      pr: {xs:1},
      border: '1px solid #CCCBCB', 
      
      // --- حل مشكلة السكرول نهائياً ---
      '& .MuiDateCalendar-root': {
        width: '100%' ,
        maxWidth: { xs: '100%', md: '600px', lg: '800px' }, 
        height: 'auto', 
        maxHeight: 'none',
        overflow: 'hidden',
      },
      '& .MuiPickersFadeTransitionGroup-root': {
        overflow: 'hidden',
      },
      '& .MuiDayCalendar-monthContainer': {
        overflow: 'hidden',
      },
      '& .MuiDayCalendar-slideTransition': {
        minHeight: '350px', // مساحة كافية للأيام الكبيرة لمنع السكرول
        overflow: 'hidden',
      },
      '& *::-webkit-scrollbar': { display: 'none' }, // إخفاء السكرول في كروم
      '& *': { scrollbarWidth: 'none' }, // إخفاء السكرول في فايرفوكس

      '& .MuiPickersCalendarHeader-root': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        mb: 2,
        px: 0,
      },
      '& .MuiPickersCalendarHeader-labelContainer': {
        margin: '0 auto',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        zIndex: 1
      },
      '& .MuiPickersArrowSwitcher-root': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 2
      },

      '& .MuiDayCalendar-header': {
        justifyContent: 'space-between',
        '& .MuiDayCalendar-weekdayLabel': { 
          fontWeight: 'bold', 
          color: '#000',
          width: '55px', 
          fontSize: '1rem'
        }
      },
    }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newDate) => handleUpdate("date", newDate)}
          slots={{
            day: (props) => {
              const { day, outsideCurrentMonth, ...other } = props;
              const isBooked = bookedDates.some((date) => isSameDay(date, day));
              const isSelected = isSameDay(day, selectedDate);

              return (
                <PickersDay
                  {...other}
                  day={day}
                  outsideCurrentMonth={outsideCurrentMonth}
                  sx={{
                    margin: '4px', 
                    width: "55px", 
                    height: "55px", 
                    borderRadius: "10px",
                    fontSize: '1.1rem',
                    ...(outsideCurrentMonth && { 
                      bgcolor: "#f0f0f0 !important", 
                      color: "transparent",
                      border: "none" 
                    }),
                    ...(isBooked && !outsideCurrentMonth && !isSelected && {
                      border: '1px solid #CCCBCB',
                      bgcolor: '#fff',
                      
                    }),
                    ...(isSelected && { 
                      bgcolor: "#371F70 !important", 
                      color: "#fff !important",
                      border: "none",
                      
                    }),
                  }}
                >
                  {!outsideCurrentMonth && (
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {day.getDate()}
                      {isBooked && (
                        <Box sx={{ 
                          width: 7, 
                          height: 6, 
                          bgcolor: isSelected ? "#fff" : "#371F70", 
                          borderRadius: "50%", 
                          position: "absolute", 
                          bottom: -12 
                        }} />
                      )}
                    </Box>
                  )}
                </PickersDay>
              );
            }
          }}
          slotProps={{
            actionBar: { sx: { display: 'none' } },
            toolbar: { hidden: true },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
const largeInputStyle = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    height: 74, // الارتفاع المطلوب
    borderRadius: 2.5,
    fontSize: "1.1rem",
    bgcolor: "#fff",
    "& fieldset": { borderColor: "#eee" },
    "&.Mui-focused fieldset": { borderColor: "#0054E0" },
  },
};
// --- ضعه خارج مكون FlightBookingFlow في نهاية الملف أو قبله ---
const StepInfo = ({ booking, handleUpdate, totalCost, setStep, largeInputStyle }) => (
  <Grid container spacing={8} sx={{ width: '100%', maxWidth: 'none', p: { xs: 2, md: 2 }, m: 0 }}>
    <Grid
      item
      xs={12}
      md={5}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        flex: { md: 1.2 }
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 4 }, width: "100%" }}>
        {/* سطر: الحزمة المختارة */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography fontWeight={700} variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>
            Selected Package
          </Typography>
          <Paper variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2,  minWidth: { md: 200, xs: 120 }, textAlign: "center", borderColor: "#E0E0E0" }}>
            {booking.package}
          </Paper>
        </Box>

        {/* سطر: التاريخ */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography fontWeight={700} variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>
            Date
          </Typography>
          <Paper variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2, minWidth: { md: 200, xs: 120 }, textAlign: "center", borderColor: "#E0E0E0" }}>
            {booking.date ? booking.date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : ""}
          </Paper>
        </Box>

        {/* سطر: الخدمات الإضافية */}
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <Typography fontWeight={700} variant="h6" sx={{ mt: 1.5, fontSize: { xs: "0.9rem", md: "1.25rem" } }}>
            Extra Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, md: 2 } }}>
            {booking.extras.length === 0 ? (
              <Paper variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2, minWidth: { md: 250, xs: 120 }, textAlign: "center", borderColor: "#E0E0E0", color: "#999" }}>
                No extra services selected
              </Paper>
            ) : (
              booking.extras.map((item) => (
                <Paper key={item} variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2, minWidth: { md: 200, xs: 120 }, textAlign: "center", borderColor: "#0054E0", fontWeight: 600 }}>
                  {item}
                </Paper>
              ))
            )}
          </Box>
        </Box>

        {/* سطر: الركاب */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography fontWeight={700} variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>
            No.passengers
          </Typography>
          <Paper variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2, minWidth: { md: 200, xs: 120 }, textAlign: "center", borderColor: "#E0E0E0" }}>
            At {booking.time} ({booking.passengers})
          </Paper>
        </Box>

        {/* سطر: التكلفة */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography fontWeight={700} variant="h6" sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}>
            Total Cost
          </Typography>
          <Paper variant="outlined" sx={{ px: { xs: 2, md: 2 }, py: { xs: 1, md: 2 }, borderRadius: 2, minWidth: { md: 200, xs: 120 }, textAlign: "center", borderColor: "#E0E0E0", fontWeight: 800, color: "#0054E0" }}>
            {totalCost} QAR
          </Paper>
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} md={5} sx={{ flex: 1.4, minWidth: 0 }}>
      <Typography fontWeight="bold" mb={2}>Your Information</Typography>

      <TextField
        fullWidth
        placeholder="Your Name"
        value={booking.userName}
        onChange={(e) => handleUpdate("userName", e.target.value)}
        sx={largeInputStyle}
      />

      <TextField
        fullWidth
        placeholder="Phone Number"
        value={booking.phone}
        onChange={(e) => handleUpdate("phone", e.target.value.replace(/\D/g, ""))}
        sx={largeInputStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={{ display: "flex", alignItems: "center", pr: 2, mr: 1, borderRight: "1px solid #ddd", gap: 1 }}>
                <img src="https://flagcdn.com/w40/qa.png" alt="QA" style={{ width: '25px' }} />
                <Typography fontWeight={600}>+974</Typography>
              </Box>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        placeholder="Your Email"
        value={booking.email}
        onChange={(e) => handleUpdate("email", e.target.value)}
        sx={{ ...largeInputStyle, mb: 3 }}
      />

      <Button 
        fullWidth 
        variant="contained" 
        onClick={() => setStep(3)} 
        sx={{ height: 74, borderRadius: 2.5, bgcolor: "#0054E0", fontWeight: 700 }}
      >
        Continue
      </Button>
    </Grid>
  </Grid>
);
export default function FlightBookingFlow() {
/* ===================== STATES ===================== */

  const [step, setStep] = useState(1);
  const location = useLocation();
  const state = location?.state || {};

  const packageOptions = [
    { name: "Business", price: 900 },
    { name: "Economy", price: 600 },
    { name: "First Class", price: 1200 },
  ];


  const bookedDates = [
    new Date("2026-01-09"),
    new Date("2026-01-14"),
    new Date("2026-01-23"),
  ];


  const [booking, setBooking] = useState(() => {
    const state = location?.state || {};
    const saved = localStorage.getItem("skymasters_booking");
    const localData = saved ? JSON.parse(saved) : {};

    return {
      package: state.tourType || localData.package || "Business",
      passengers: state.passengers || localData.passengers || 1,
      date: state.date ? new Date(state.date) : (localData.date ? new Date(localData.date) : new Date()),
      time: localData.time || "09:00 AM",
      extras: localData.extras || [],
      userName: localData.userName || "",
      phone: localData.phone || "",
      email: localData.email || "",
    };
  });
const selectedDate = booking.date;
  useEffect(() => {
    localStorage.setItem("skymasters_booking", JSON.stringify(booking));
  }, [booking]);

 const handleUpdate = React.useCallback((field, value) => {
    setBooking((prev) => ({ ...prev, [field]: value }));
  }, []);
  


  const extraPrice = 100;
  const selectedPackage = packageOptions.find((p) => p.name === booking.package);
  const pricePerPerson = selectedPackage?.price || 0;
  const totalCost = pricePerPerson * booking.passengers + booking.extras.length * extraPrice;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();

  const StepSchedule = () => (
    <Grid container spacing={4} sx={{ p: { xs: 1, md: 3 } ,mt:1}}>
      {/* LEFT SIDE */}
      <Grid item xs={12} md={5}  sx={{flex: { md: 1.4 }, 
        minWidth: 0, 
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        width: '100%' }}>
        <Typography fontWeight={700} mb={4}  >Select Package:</Typography>
       <TextField
  select
  fullWidth
  size="medium"
  value={booking.package}
  onChange={(e) => handleUpdate("package", e.target.value)}
  sx={{ mb: 4, bgcolor: "#fff", borderRadius: 2 }}
  SelectProps={{
    renderValue: (selected) => selected, 
  }}
>
  {packageOptions.map((pkg) => (
    <MenuItem key={pkg.name} value={pkg.name}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2 
        }}
      >
        <Typography>{pkg.name}</Typography>
        <Typography sx={{ color: "#FE5900", fontWeight: 700 }}>
          {pkg.price} QAR
        </Typography>
      </Box>
    </MenuItem>
  ))}
</TextField>

    
      <Typography fontWeight={700} mb={1}>Select Date:</Typography>
        <CustomCalendar sx={{xs: {mr:1}}}
          selectedDate={booking.date} 
          handleUpdate={handleUpdate} 
          bookedDates={bookedDates} 
        />
    

        <Typography fontWeight={700} mb={2} mt={3}>Add An Extra Service</Typography>
{["Video", "Video Editing", "Controlling Experience", "Maneuver", "Transportation"].map((item) => (
  <Paper 
    key={item} 
    variant="outlined" 
    sx={{ 
      p: 2, 
      mb: 2, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      borderRadius: 2, 
      borderColor: booking.extras.includes(item) ? "#371F70" : "#eee" 
    }}
  >
    <Typography fontWeight={600}>{item}</Typography>
    <Box display="flex" alignItems="center">
      <Typography color={THEME.priceRed} fontWeight={700} mr={2}>{extraPrice} QAR/Per flight</Typography>
      <Checkbox
        size="small"
        checked={booking.extras.includes(item)}
        onChange={() => {
          const extras = booking.extras.includes(item) 
            ? booking.extras.filter((e) => e !== item) 
            : [...booking.extras, item];
          handleUpdate("extras", extras);
        }}
        sx={{
          color: "#371F70", 
          "&.Mui-checked": {
            color: "#371F70", 
          },
        }}
      />
    </Box>
  </Paper>
))}
      </Grid>

      {/* RIGHT SIDE */}
      <Grid item xs={12} md={5} sx={{ flex: 1.4, minWidth: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontWeight={700} sx={{ fontSize: '1.1rem' }}>Available Time</Typography>
            <Box sx={{ border: '1px solid #E0E0E0', p: '6px 14px', borderRadius: '8px', fontWeight: 600, color: '#371F70' }}>
              {`${selectedDate.getDate()} ${selectedDate.toLocaleDateString("en-US", { month: "short" })} ${selectedDate.getFullYear()}`}
            </Box>
          </Box>

         <Paper variant="outlined" sx={{ p: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: 2 }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <PersonOutlineIcon sx={{ color: '#0054E0', mr: 1 }} />
    <Typography fontWeight={600} ml={{xs:1,md:1}} >No. Of passengers</Typography>
  </Box>

  <Box sx={{ display: 'flex', alignItems: 'center' }}>
   
    <IconButton 
      size="medium" 
      sx={{ bgcolor: "#F1F3F6", borderRadius: 1.5 }}
      onClick={() => handleUpdate("passengers", Math.max(1, booking.passengers - 1))}
    >
      <RemoveIcon fontSize="small" />
    </IconButton>

   
    <Typography 
      fontWeight={700} 
      sx={{ 
        minWidth: '40px', 
        textAlign: 'center',
        mx: {xs: 1, md : 10}
      }}
    >
      {booking.passengers}
    </Typography>


    <IconButton 
      size="medium" 
      sx={{ 
        bgcolor: '#0054E0', 
        color: '#fff', 
        borderRadius: 1.5,
        '&:hover': { bgcolor: '#0046bc' } 
      }} 
      onClick={() => handleUpdate("passengers", booking.passengers + 1)}
    >
      <AddIcon fontSize="small" />
    </IconButton>
  </Box>
</Paper>

      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
  }}
>
  {["09:00 AM", "09:20 AM", "09:40 AM", "10:00 AM", "10:20 AM", "10:40 AM"].map((time) => (
    <Button
      key={time}
      fullWidth
      variant="outlined"
      onClick={() => handleUpdate("time", time)}
      sx={{
        py: 1.5,
        borderRadius: 2,
        fontSize: "0.8rem",
        fontWeight: 600,
        color: booking.time === time ? "#fff" : "#555",
        bgcolor: booking.time === time ? "#371F70" : "#fff",
        borderColor: booking.time === time ? "#371F70" : "#E0E0E0",
        "&:hover": {
          borderColor: "#371F70",
          bgcolor: booking.time === time ? "#371F70" : "#f9f9f9",
        },
      }}
    >
      {time}
    </Button>
  ))}
</Box>



          <Card variant="outlined" sx={{ borderRadius: 3, borderColor: '#E0E0E0' }}>
            <CardContent>
              <Typography fontWeight={800} mb={2} color="#371F70">Service Details</Typography>
              <Divider sx={{ mb: 2, borderStyle: 'dashed' }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Package ({booking.package})</Typography>
                <Typography fontWeight={600}>{pricePerPerson} QAR</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Passengers ({booking.passengers})</Typography>
                <Typography fontWeight={600}>{pricePerPerson * booking.passengers} QAR</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
  {booking.extras.length === 0 ? (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>Extras</Typography>
      <Typography fontWeight={600}>0 QAR</Typography>
    </Box>
  ) : (
    <>
      {booking.extras.map((item) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 0.5,
          }}
        >
          <Typography>{item}</Typography>
          <Typography fontWeight={600}>
            {extraPrice} QAR
          </Typography>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Typography fontWeight={700}>Extras Total</Typography>
        <Typography fontWeight={700}>
          {booking.extras.length * extraPrice} QAR
        </Typography>
      </Box>
    </>
  )}
</Box>

              <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography fontWeight={800} fontSize="1.1rem">Total Cost</Typography>
                <Typography fontWeight={800} fontSize="1.1rem" color="#371F70">{totalCost} QAR</Typography>
              </Box>
            </CardContent>
          </Card>

          <Button fullWidth variant="contained" onClick={() => setStep(2)} sx={{ height: 54, borderRadius: 2.5, bgcolor: "#0054E0", fontWeight: 700 }}>
            Book Now
          </Button>
        </Box>
      </Grid>
    </Grid>
  );

// const StepInfo = () => (
//     <Grid container spacing={10} sx={{ width: '100%', maxWidth: 'none', p: { xs: 2, md: 2 }, m: 0 }}>

//   <Grid
//   item
//   xs={12}
//   md={5}
//   sx={{
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//     minWidth: 0,
//     flex: { md: 1.2}
   
//   }}
// >
//   <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 4 }, width: "100%" }}>
    
//     {/* سطر: الحزمة المختارة */}
//     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//       <Typography
//         fontWeight={700}
//         variant="h6"
//         sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}
//       >
//         Selected Package
//       </Typography>
//       <Paper
//         variant="outlined"
//         sx={{
//           px: { xs: 2, md: 4 },
//           py: { xs: 1, md: 2 },
//           borderRadius: 2,
//           minWidth: { md: 250, xs: 120 },
//           textAlign: "center",
//           borderColor: "#E0E0E0",
//           fontSize: { xs: "0.9rem", md: "1.1rem" },
//         }}
//       >
//         {booking.package}
//       </Paper>
//     </Box>

//     {/* سطر: التاريخ */}
//     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//       <Typography
//         fontWeight={700}
//         variant="h6"
//         sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}
//       >
//         Date
//       </Typography>
//       <Paper
//         variant="outlined"
//         sx={{
//           px: { xs: 2, md: 4 },
//           py: { xs: 1, md: 2 },
//           borderRadius: 2,
//           minWidth: { md: 250, xs: 120 },
//           textAlign: "center",
//           borderColor: "#E0E0E0",
//           fontSize: { xs: "0.85rem", md: "1.1rem" },
//         }}
//       >
//         {booking.date
//           ? booking.date.toLocaleDateString("en-GB", {
//               day: "2-digit",
//               month: "short",
//               year: "numeric",
//             })
//           : ""}
//       </Paper>
//     </Box>

//     {/* سطر: الخدمات الإضافية */}
//     <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
//       <Typography
//         fontWeight={700}
//         variant="h6"
//         sx={{ mt: 1.5, fontSize: { xs: "0.9rem", md: "1.25rem" } }}
//       >
//         Extra Services
//       </Typography>

//       <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, md: 2 } }}>
//         {booking.extras.length === 0 ? (
//           <Paper
//             variant="outlined"
//             sx={{
//               px: { xs: 2, md: 4 },
//               py: { xs: 1, md: 2 },
//               borderRadius: 2,
//               minWidth: { md: 250, xs: 120 },
//               textAlign: "center",
//               borderColor: "#E0E0E0",
//               color: "#999",
//               fontSize: { xs: "0.85rem", md: "1rem" },
//             }}
//           >
//             No extra services selected
//           </Paper>
//         ) : (
//           booking.extras.map((item) => (
//             <Paper
//               key={item}
//               variant="outlined"
//               sx={{
//                 px: { xs: 2, md: 4 },
//                 py: { xs: 1, md: 2 },
//                 borderRadius: 2,
//                 minWidth: { md: 250, xs: 120 },
//                 textAlign: "center",
//                 borderColor: "#0054E0",
//                 fontWeight: 600,
//                 fontSize: { xs: "0.85rem", md: "1rem" },
//               }}
//             >
//               {item}
//             </Paper>
//           ))
//         )}
//       </Box>
//     </Box>

//     {/* سطر: الركاب */}
//     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//       <Typography
//         fontWeight={700}
//         variant="h6"
//         sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}
//       >
//         No.passengers
//       </Typography>
//       <Paper
//         variant="outlined"
//         sx={{
//           px: { xs: 2, md: 4 },
//           py: { xs: 1, md: 2 },
//           borderRadius: 2,
//           minWidth: { md: 250, xs: 120 },
//           textAlign: "center",
//           borderColor: "#E0E0E0",
//           fontSize: { xs: "0.85rem", md: "1rem" },
//         }}
//       >
//         At {booking.time} ({booking.passengers})
//       </Paper>
//     </Box>

//     {/* سطر: التكلفة */}
//     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//       <Typography
//         fontWeight={700}
//         variant="h6"
//         sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}
//       >
//         Total Cost
//       </Typography>
//       <Paper
//         variant="outlined"
//         sx={{
//           px: { xs: 2, md: 4 },
//           py: { xs: 1, md: 2 },
//           borderRadius: 2,
//           minWidth: { md: 250, xs: 120 },
//           textAlign: "center",
//           borderColor: "#E0E0E0",
//           fontWeight: 800,
//           color: "#0054E0",
//           fontSize: { xs: "0.9rem", md: "1.1rem" },
//         }}
//       >
//         {totalCost} QAR
//       </Paper>
//     </Box>
//   </Box>
// </Grid>


//  <Grid item xs={12} md={5} sx={{ flex: 1.4, minWidth: 0 }}>
//       <Typography fontWeight="bold" mb={2}>Your Information</Typography>

//       <TextField
//         fullWidth
//         placeholder="Your Name"
//         value={booking.userName}
//         onChange={(e) => handleUpdate("userName", e.target.value)}
//         sx={largeInputStyle}
//       />

//       <TextField
//         fullWidth
//         placeholder="Phone Number"
//         value={booking.phone}
//         onChange={(e) => handleUpdate("phone", e.target.value.replace(/\D/g, ""))}
//         sx={largeInputStyle}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <Box sx={{ display: "flex", alignItems: "center", pr: 2, mr: 1, borderRight: "1px solid #ddd", gap: 1 }}>
//                 <img src="https://flagcdn.com/w40/qa.png" alt="QA" style={{ width: '25px' }} />
//                 <Typography fontWeight={600}>+974</Typography>
//               </Box>
//             </InputAdornment>
//           ),
//         }}
//       />

//       <TextField
//         fullWidth
//         placeholder="Your Email"
//         value={booking.email}
//         onChange={(e) => handleUpdate("email", e.target.value)}
//         sx={{ ...largeInputStyle, mb: 3 }}
//       />

//       <Button fullWidth variant="contained" onClick={() => setStep(3)} sx={{ height: 74, borderRadius: 2.5, bgcolor: "#0054E0", fontWeight: 700 }}>
//         Continue
//       </Button>
//     </Grid>
// </Grid>
    

// );

const StepSuccess = ({ booking, totalCost, extraPrice }) => {
  return (
  
    <Box textAlign="center" py={1} sx={{ px: { xs: 2, md: 10 } }}>
      <Box><Typography variant="h5" fontWeight={800} mt={1} color="#371F70" sx={{ textAlign: 'left' }}>
       Let’s pay now!
      </Typography></Box>
      
      <Typography mt={1} mb={4} fontWeight={800} color="#1D1D1D">
        "You're all set! We've booked your date and time — we will be in touch soon to take care of the payment."
      </Typography>

      {/* بيانات الحجز */}
      <Box sx={{ border: "1px solid #2196f3", borderRadius: 2, mb: 3 }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>User Name</Typography>
            <Typography>{booking.userName}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Phone</Typography>
            <Typography>{booking.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Email</Typography>
            <Typography>{booking.email}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Booking Date</Typography>
            <Typography>
              {booking.date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* تفاصيل الخدمة */}
      <Box sx={{ border: "1px solid #E0E0E0", borderRadius: 2, mb: 4 }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{  mb: 2, textAlign: "left"}} >
            
            <Typography fontSize={20} fontWeight={700} color="#371F70">Service Details</Typography>
<Divider sx={{ mt: 1, borderColor: "#E0E0E0" }} />          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Business Type</Typography>
            <Typography>{booking.package} ({booking.package === "Business" ? 900 : booking.package === "Economy" ? 600 : 1200} QAR)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>No. passengers ({booking.passengers})</Typography>
            <Typography>{booking.passengers * (booking.package === "Business" ? 900 : booking.package === "Economy" ? 600 : 1200)} QAR</Typography>
          </Box>
          {booking.extras.length > 0 && booking.extras.map((item) => (
            <Box key={item} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Extra: {item}</Typography>
              <Typography >{extraPrice} QAR</Typography>
            </Box>
          ))}
<Divider sx={{ mt: 1, borderColor: "#E0E0E0" }} /> 
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, fontWeight: 800 }}>
            <Typography fontWeight={600} >Total Cost</Typography>
            <Typography color="#371F70">{totalCost} QAR</Typography>
          </Box>
        </Box>
      </Box>
           <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
          <Button
        variant="contained"
        sx={{  height: 54, fontWeight: 700,  width: { xs: "100%", md: "50%" },
            borderRadius: "10px",
            bgcolor: "#0054E0",
            fontSize: "1.2rem",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#003ba1",
              transform: "translateY(-3px)",}}}

        onClick={() => setStep(4)} 
      >
       Pay Now
      </Button>
           </Box>
      
    </Box>
  );
};

const StepOfSuccess = ({ booking, totalCost, extraPrice }) => {
  return (
  
    <Box textAlign="center" py={1} sx={{ px: { xs: 2, md: 10 } }}>
      <Box><Typography variant="h5" fontWeight={800} mt={1} color="#371F70" sx={{ textAlign: 'left' }}>
       Success! Your payment is complete
      </Typography></Box>
      <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "#2ecc71" }} />
       {/* تفاصيل الخدمة */}
      <Box sx={{ border: "1px solid #E0E0E0", borderRadius: 2, mb: 4 }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{  mb: 2, textAlign: "left"}} >
            <Typography fontSize={20} fontWeight={700} color="#371F70">Service Details</Typography>
          <Divider sx={{ mt: 1, borderColor: "#E0E0E0" }} />   
       </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Business Type</Typography>
            <Typography>{booking.package} ({booking.package === "Business" ? 900 : booking.package === "Economy" ? 600 : 1200} QAR)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>No. passengers ({booking.passengers})</Typography>
            <Typography>{booking.passengers * (booking.package === "Business" ? 900 : booking.package === "Economy" ? 600 : 1200)} QAR</Typography>
          </Box>
          
            <Divider sx={{mt:2}}></Divider>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, fontWeight: 800 }}>
            <Typography fontWeight={800}>Total Cost</Typography>
            <Typography color="#371F70">{totalCost} QAR</Typography>
          </Box>
        </Box>
      </Box>
           <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
          <Button
        variant="contained"
        sx={{  height: 54, fontWeight: 700,  width: { xs: "100%", md: "50%" },
            borderRadius: "10px",
            bgcolor: "#0054E0",
            fontSize: "1.2rem",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#003ba1",
              transform: "translateY(-3px)",}}}

        onClick={() => setStep(1)} 
      >
       Back To Home
      </Button>
        </Box>
     <Box/>
     </Box>
     );
     };

     


   return (
    <Box sx={{ width: "100%", bgcolor: step === 1 ? THEME.lightBg : THEME.white, minHeight: "100vh", pb: 0 }}>
      {/* HERO SECTION */}
      <Box sx={{ height: { xs: 260, md: 420 }, backgroundImage: "url('/src/assets/images/5.png')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.35)", zIndex: 1 }} />
        <Container maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
          <Typography fontWeight="800" color="#fff" textAlign="center" sx={{ fontSize: { xs: "1.8rem", md: "3.2rem" } }}>
            Paratrike Airtours
          </Typography>
        </Container>
        <Box sx={{ 
          position: "absolute", bottom: { xs: -40, md: -70 }, left: "50%", transform: "translateX(-50%)", 
          width: { xs: "85%", md: "96%" }, maxWidth: 1200, backgroundImage: `url(${overlayImage})`, 
          backgroundSize: "cover", borderRadius: 4, p: { xs: 2, md: 5 }, color: "#fff", zIndex: 3, boxShadow: "0 20px 50px rgba(0,0,0,0.35)" 
        }}>
          <Typography textAlign="center" sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
            Experience the breathtaking beauty of the landscape from above with our paratrike airtours.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ height: { xs: 60, md: 90 } }} />

      <Container maxWidth="lg" sx={{ pt: 1 }}>
{step < 3 && (
  <Box 
    display="flex" 
    alignItems="center" 
    mb={4}
    sx={{ cursor: 'pointer' }} 
  >
    {/* أيقونة الرجوع */}
    <IconButton 
      onClick={() => navigate("/")} 
      sx={{ color: "#371F70" }}
    >
      <ChevronLeftIcon />
    </IconButton>

    <Typography 
      variant="h5" 
      fontWeight={800} 
      ml={1} 
      mt={1}
      color="#371F70"
      onClick={() => navigate("/")} 
      sx={{ 
        userSelect: 'none', 
        '&:hover': { opacity: 0.8 } 
      }}
    >
      Schedule Your Flight
    </Typography>
  </Box>
)}
 
<Box>
  {step === 1 && <StepSchedule />}
  {step === 2 && (
    <StepInfo 
      booking={booking} 
      handleUpdate={handleUpdate} 
      totalCost={totalCost} 
      setStep={setStep} 
      largeInputStyle={largeInputStyle} 
    />
  )}
  {step === 3 && (
    <StepSuccess 
      booking={booking} 
      totalCost={totalCost} 
      extraPrice={extraPrice} 
      setStep={setStep} 
    />
  )}
  {step === 4 && (
    <StepOfSuccess 
      booking={booking} 
      totalCost={totalCost} 
      extraPrice={extraPrice} 
    />
  )}
</Box>
      </Container>
    </Box>
  );
}