import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container, Box, TextField, Button, Card,
  Typography, Grid, Divider, InputAdornment, 
  IconButton, Avatar, Paper
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useUser } from "../../../context/UserContext"; 
import { useCart } from "../../../context/CartContext";

const THEME = {
  primary: "#392467",
  primaryGradient: "linear-gradient(90deg, rgba(55,31,112,1), rgba(140,110,220,1))",
  secondary: "#FF6B00",
  blue: "#0061f2",
  grayBg: "#F9F9F9",
  lightGray: "#CCCBCB",
  errorRed: "#ff4d4d"
};

const COLORS = {
  primary: '#4A329A',
  blue: '#0061FE',
  lightGray: '#F9FAFB',
  border: '#E5E7EB'
};

const PreviousOrders = () => {
  const [view, setView] = useState("search"); // search, list, details, empty
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  
  const { userData } = useUser();
  const { cartItems } = useCart();

  const mockOrders = [
    { id: '2236515', total: '4600 QAR', date: '20 Jan 2026', status: 'On Delivery' },
  ];

  const handleFindOrders = () => {
    if (!phone && !orderNumber) {
      setView("empty"); 
    } else {
      setView("list");
    }
  };
const DELIVERY_PRICE = 3600; // نفس القيمة في صفحة الدفع
const DISCOUNT = 100;       // نفس القيمة في صفحة الدفع
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "10vh", mp: "0%"}}>
      
      {/* 1. HERO SECTION */}
      <Box sx={{ 
        height: { xs: 200, md: 300 }, 
        backgroundImage: "url('/src/assets/images/2.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.4)" }} />
        <Typography variant="h3" sx={{ color: "#fff", zIndex: 2, fontWeight: 800 }}>Our Products</Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, position: "relative", zIndex: 10, pb: 0 }}>
        
        {/* زر الرجوع والعنوان */}
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton 
            onClick={() => {
              if (view === "details") setView("list");
              else if (view === "list" || view === "empty") setView("search");
              else if (view === "search") navigate("/");
            }} 
            sx={{ bgcolor: "#F5F5F5", mr: 1, "&:hover": { bgcolor: "#e0e0e0" } }}
          >
            <ChevronLeftIcon sx={{ color: THEME.primary }} />
          </IconButton>

          <Typography 
            variant="h5" 
            sx={{ fontWeight: 800, color: THEME.primary, cursor: 'pointer' }}
            onClick={() => {
              if (view === "details") setView("list");
              else if (view === "list" || view === "empty") setView("search");
              else if (view === "search") navigate("/");
            }}
          >
            {view === "details" ? "Order Details" : "Previous Orders"}
          </Typography>
        </Box>

        {/* 2. قسم البحث - يظهر فقط في حال لم نكن في وضع التفاصيل */}
        {view !== "details" && (
          <Box sx={{ p: { xs: 0, md: 4 },overflow: 'hidden', width: '100%' ,mb: 0}}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700, color: '#333' }}>
              Monitor the status of orders by using
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              {/* حقل رقم الهاتف */}
              <Box sx={{ width: '100%', maxWidth: '900px'  }}>
                <TextField
                  fullWidth
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{
                        display: 'flex', alignItems: 'center', bgcolor: COLORS.lightGray,
                        height: '56px', width: '180px', px: 3, mr: 2,
                        borderRight: `1px solid ${COLORS.border}`,
                        borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px',
                      }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                          Phone Number
                        </Typography>
                      </Box>
                    ),
                    endAdornment: (
                      <InputAdornment position="end" sx={{ pr: 1 }}>
                        <CheckCircleIcon sx={{ color: COLORS.primary, opacity: phone ? 1 : 0.3 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& .MuiOutlinedInput-root": { height: 56, paddingLeft: 0, borderRadius: '8px', "& fieldset": { borderColor: phone ? COLORS.primary : COLORS.border } } }}
                />
              </Box>

              {/* حقل رقم الطلب + زر البحث */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Box sx={{ width: '100%', maxWidth: '900px' }}>
                  <TextField
                    fullWidth
                    placeholder="Enter order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Box sx={{
                          display: 'flex', alignItems: 'center', bgcolor: COLORS.lightGray,
                          height: '56px', width: '180px', px: 3, mr: 2,
                          borderRight: `1px solid ${COLORS.border}`,
                          borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px',
                        }}>
                          <Typography sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                            Order Number
                          </Typography>
                        </Box>
                      ),
                      endAdornment: (
                        <InputAdornment position="end" sx={{ pr: 1 }}>
                          <CheckCircleIcon sx={{ color: COLORS.primary, opacity: orderNumber ? 1 : 0.3 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { height: 56, paddingLeft: 0, borderRadius: '8px', "& fieldset": { borderColor: orderNumber ? COLORS.primary : COLORS.border } } }}
                  />
                </Box>

                <Button 
                  variant="contained" 
                  onClick={handleFindOrders}
                  sx={{ 
                    bgcolor: COLORS.blue, height: '56px', px: 4, borderRadius: '8px', 
                    textTransform: 'none',
                    fontWeight: 'bold',
                    width: { xs: '100%', md: 'auto' },
                     boxShadow: 'none',
                    whiteSpace: 'nowrap', '&:hover': { bgcolor: '#0052cc' },
                    mb:{xs: 0},
                  }}
                >
                  Find Orders
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        {/* 3. حالة عدم وجود نتائج */}
        {view === "empty" && (
          <Box sx={{ mt: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ 
              width: { xs: "95%", md: "100%" }, 
              background: THEME.primaryGradient, 
              p: 2, 
              pb: 8, 
              borderRadius: '32px 32px 0 0', 
              color: 'white' 
            }}>
              <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>Orders List</Typography>
            </Box>
            <Paper elevation={0} sx={{ 
              width: { xs: "95%", md: "100%" },
              border: `1px solid ${THEME.lightGray}`, 
              borderRadius: 4, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              py: 8,
              mt: -5,
              position: 'relative',
              zIndex: 10,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              bgcolor: '#fff'
            }}>
              <Box sx={{ position: 'relative', mb: 2 }}>
                <Avatar src="/src/assets/images/error.png" sx={{ width: 150, height: 150, bgcolor: 'transparent' }} />
                <Box sx={{ 
                  position: 'absolute', bottom: 10, right: 10, bgcolor: 'red', 
                  color: 'white', borderRadius: '50%', width: 30, height: 30,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                }}>!</Box>
              </Box>
              <Typography 
                onClick={() => setView("search")}
                sx={{ color: THEME.errorRed, fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Try Again
              </Typography>
            </Paper>
          </Box>
        )}

       {/* 4. عرض قائمة الطلبات بتصميم مطابق لنموذج Request Quote */}
{view === "list" && (
  <Box sx={{ 
    width: "100%", 
    display: "flex", 
    flexDirection: "column",
    alignItems: "center", 
    py: 0,
    mt: 2
  }}>
    {/* 1. رأس القائمة (Header) */}
    <Box sx={{
      width: { xs: "95%", md: "100%" },
      background: THEME.primaryGradient,
      p: { xs: 3, md: 5 },
      pb: { xs: 8, md: 12 }, // مساحة إضافية للسماح للجسم بالتداخل
      borderRadius: "32px 32px 0 0",
      color: 'white',
    }}>
      <Typography variant="h5" sx={{ 
        ml: { md: 2 }, 
        fontWeight: 800,
        fontSize: { xs: "1.2rem", md: "1.8rem" }
      }}>
        Orders List
      </Typography>
    </Box>

    {/* 2. جسم القائمة (Body) - متداخل مع الهيدر */}
    <Box sx={{ 
      width: { xs: "95%", md: "100%" }, 
      p: { xs: 3, md: 5}, 
      bgcolor: "#fff",
      borderRadius: 4, 
      border: "1px solid #e0e0e0", 
      mt: { xs: -5, md: -8 }, 
      position: "relative", 
      zIndex: 10,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
      overflow: 'hidden'
    }}>
      
      {mockOrders.map((order, index) => (
        <Box 
          key={order.id} 
          onClick={() => setView("details")}
          sx={{ 
            p: 3, 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            cursor: 'pointer', 
            borderBottom: index !== mockOrders.length - 1 ? `1px solid #eee` : 'none',
            transition: '0.3s',
            '&:hover': { bgcolor: '#F8F9FF', transform: 'translateX(5px)' }
          }}
        >
          <Box>
            <Typography sx={{ mb: 1, fontSize: '1rem' }}>
              <strong>Order Number:</strong> 
              <span style={{ color: THEME.secondary, marginLeft: '12px', fontWeight: 'bold' }}>#{order.id}</span>
            </Typography>
            <Typography sx={{ fontSize: '1rem' }}>
              <strong>Total Cost:</strong> 
              <span style={{ color: THEME.secondary, marginLeft: '28px', fontWeight: 'bold' }}>{order.total}</span>
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: { xs: 'left', sm: 'center' }, width: { xs: '100%', sm: 'auto' } }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: THEME.primary, 
                borderRadius: 5, 
                px: 4, 
                mb: 1, 
                textTransform: 'none',
                fontWeight: 'bold',
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              {order.status}
            </Button>
            <Typography variant="body2" color="text.secondary">{order.date}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)}

        {/* 5. تفاصيل الطلب */}
        {view === "details" && (
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <Grid item xs={12} md={6} key={item.id}>
                    <Card sx={{ display: 'flex', p: 1.5, borderRadius: 4, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eee' ,width:'150%' }}>
                      <Avatar variant="rounded" src={item.image} sx={{ width: 100, height: 100, borderRadius: 3, mr: 2 }} />
                      <Box sx={{ flex: 1 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                          <Typography fontWeight="800" variant="body1">{item.name}</Typography>
                          <Typography fontWeight="800" sx={{ color: THEME.secondary }}>{item.price} QAR</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={3}>
                          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: THEME.blue, borderRadius: 1.5, color: '#fff', px: 2, py: 0.5 }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Qty: {item.qty}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography sx={{ p: 3 }}>No items in the latest order.</Typography>
                </Grid>
              )}
            </Grid>

<Box sx={{ mb: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Box sx={{ 
    width: { xs: "95%", md: "100%" },
    background: THEME.primaryGradient, 
    color: 'white', 
    p: { xs: 3, md: 5 }, 
    pb: { xs: 8, md: 10 },
    borderRadius: '32px 32px 0 0' 
  }}>
    <Typography variant="h6" sx={{ ml: 2 }} fontWeight="bold">User Information</Typography>
  </Box>
  
  <Paper variant="outlined" sx={{ 
    width: { xs: "95%", md: "100%" },
    p: { xs: 3, md: 5 }, 
    borderRadius: 4, 
    borderColor: THEME.lightGray,
    mt: -6,
    position: 'relative',
    zIndex: 10,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    bgcolor: '#fff'
  }}>
    <Box sx={{ 
  display: 'flex', 
  flexDirection:  " row", 
  flexWrap: 'wrap',// القسم الثاني يظهر أسفل الأول في الجوال
  gap: { xs: 4, md: 10 },
}}>
  
  {/* القسم الأول: المعلومات الشخصية */}
  <Box sx={{ flex: 1 }}>
    <Box sx={{ display: 'flex', flexDirection:  'row' , mb: 1.5 }}>
      <Typography sx={{ fontWeight: 'bold', width: 120, fontSize: '0.95rem' }}>User Name</Typography>
      <Typography sx={{ color: '#7E69AB', fontSize: '0.95rem' }}>{userData.name || "Someone one"}</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection:  'row' , mb: 1.5 }}>
      <Typography sx={{ fontWeight: 'bold', width: 120, fontSize: '0.95rem' }}>Phone</Typography>
      <Typography sx={{ color: '#7E69AB', fontSize: '0.95rem' }}>{userData.phone || "+963 322626262"}</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection:  'row'  }}>
      <Typography sx={{ fontWeight: 'bold', width: 120, fontSize: '0.95rem' }}>Email</Typography>
      <Typography sx={{ color: '#7E69AB', fontSize: '0.95rem' }}>{userData.email || "Some.one@gmail.com"}</Typography>
    </Box>
  </Box>

  <Box sx={{ flex: 1 }}>
    {/* التوصيل */}
    <Box sx={{ display: 'flex',  flexWrap: 'wrap', mb: 1.5 }}>
      <Typography sx={{ fontWeight: 'bold', width: 100, fontSize: '0.95rem' }}>Delivery</Typography>
      <Typography sx={{ color: '#7E69AB', fontSize: '0.95rem' ,ml: { xs: 3, sm: 0 }}}>
        {userData.deliveryMethod === "delivery" ? "Yes" : "No"}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex',  alignItems: 'flex-start' ,gap:'8'}}>
      <Typography sx={{ fontWeight: 'bold', width: 100, fontSize: '0.95rem' }}>Address</Typography>
      <Typography sx={{ 
        color: '#7E69AB', 
        flex: 1, 
        lineHeight: 1.6, 
        fontSize: '0.9rem',
        ml: { xs: 3, sm: 0 } 
      }}>
        {userData.country || userData.city 
          ? `${userData.country}, ${userData.city}, ${userData.region}, ${userData.streetName}, ${userData.buildingNumber}, ${userData.addressDetailed || ""}`
          : "Country, City, Region, Street Name, Building Number, Adress Detailed"}
      </Typography>
    </Box>
  </Box>
</Box>
  </Paper>
</Box>

    {/* قسم معلومات الدفع بنمط التصميم المتداخل */}
    <Box sx={{ mt: 1, mb: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Box sx={{ 
    width: { xs: "95%", md: "100%" },
    background: THEME.primaryGradient, 
    color: 'white', 
    p: { xs: 3, md: 5 }, 
    pb: { xs: 8, md: 10 },
    borderRadius: '32px 32px 0 0' 
  }}>
    <Typography variant="h6" sx={{ ml: 2 }} fontWeight="bold">Payment Information</Typography>
  </Box>

  <Paper 
    elevation={0} 
    variant="outlined" 
    sx={{ 
      width: { xs: "95%", md: "100%" },
      p: { xs: 3, md: 5 }, 
      borderRadius: 4, 
      borderColor: THEME.lightGray,
      bgcolor: '#fff',
      mt: -6,
      position: 'relative',
      zIndex: 10,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
    }}
  >
    {/* 1. تكلفة المنتجات */}
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
      <Typography sx={{ color: '#333', fontSize: '0.95rem' }}>
        Products Cost ({cartItems.reduce((sum, item) => sum + item.qty, 0)})
      </Typography>
      <Typography sx={{ color: '#666', fontSize: '0.95rem' }}>
        {cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)} QAR
      </Typography>
    </Box>

    {/* 2. التوصيل */}
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
      <Typography sx={{ color: '#333', fontSize: '0.95rem' }}>Delivery</Typography>
      <Typography sx={{ color: '#666', fontSize: '0.95rem' }}>
        {userData.deliveryMethod === "delivery" ? DELIVERY_PRICE : 0} QAR
      </Typography>
    </Box>

    {/* 3. الخصم */}
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography sx={{ color: '#333', fontSize: '0.95rem' }}>Discount (Coupon Code)</Typography>
      <Typography sx={{ color: '#666', fontSize: '0.95rem' }}>
        {DISCOUNT} QAR
      </Typography>
    </Box>

    {/* الفاصل الخفيف جداً */}
    <Divider sx={{ my: 2, borderColor: '#f0f0f0' }} />

    {/* 4. الإجمالي النهائي */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1 }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#000' }}>
        Total Cost
      </Typography>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#4A329A' }}>
        {cartItems.reduce((sum, item) => sum + item.price * item.qty, 0) + 
         (userData.deliveryMethod === "delivery" ? DELIVERY_PRICE : 0) - DISCOUNT} QAR
      </Typography>
    </Box>
  </Paper>
</Box>
  </Box>
)}
        
      </Container>
    </Box>
  );
};

export default PreviousOrders;