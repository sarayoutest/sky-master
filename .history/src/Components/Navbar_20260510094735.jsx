import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Badge,
  Drawer,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Collapse,        
  List,            
  ListItemButton, 
  ListItemText     
} from "@mui/material";
import { useCart } from "../context/CartContext";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {  useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";

/* ===== Shared Styles ===== */
const navBtn = {
  color: "#6b5a86",
  fontSize: 15,
  fontWeight: 500,
  textTransform: "none",
  whiteSpace: "nowrap",
  "&:hover": { background: "rgba(217, 217, 217, 0.5)", color: "#3b216e" },
};

const glassIcon = {
  width: 46,
  height: 46,
  borderRadius: "50%",
  background: "rgba(217, 217, 217, 0.5)",
  border: "1px solid rgba(255, 255, 255, 1)",
  backdropFilter: "blur(10px)",
  display: "flex",
  fontSize:"15px",
  alignItems: "center",
 justifyContent:"center"
};

function Navbar() {
 const navigate = useNavigate();
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));
const { t, i18n } = useTranslation();

const [servicesAnchor, setServicesAnchor] = useState(null);
const [workAnchor, setWorkAnchor] = useState(null);
const [drawerOpen, setDrawerOpen] = useState(false);

const isAr = i18n.language === 'ar';

const toggleLang = () => {
  const newLang = isAr ? "en" : "ar";
  i18n.changeLanguage(newLang);
  document.body.dir = newLang === "ar" ? "rtl" : "ltr";
};

const go = (path) => {
  navigate(path);
  setDrawerOpen(false);
  setServicesAnchor(null);
  setWorkAnchor(null);
};

const { cartItems, totalQty } = useCart();

const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
const [mobileWorkOpen, setMobileWorkOpen] = useState(false);


  return (
    <>
    <Box
  sx={{
    position: "fixed",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 3000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: isMobile ? 2 : 4,
  }}
>
  <Box>
    <Link to="/">
      <img
        src="./src/assets/images/logo.svg"
        alt="logo"
        style={{ height: isMobile ? 38 : 50 }}
      />
    </Link>
  </Box>
 <AppBar
  elevation={0}
  sx={{
    position: "relative",
    transition: "all .3s ease",
    width: isMobile ? "auto" : "72%",
    maxWidth: "1300px",
    minWidth: isMobile ? "unset" : "900px",
    height: 58,
    background: "rgba(217, 217, 217, 0.5)",
    backdropFilter: "blur(15px)",
    borderRadius: "40px",
    border: "1px solid rgba(255,255,255,0.9)",
    justifyContent: "center",
    direction: "ltr",
    px: 1,
  }}
>
  <Toolbar
    sx={{
      px: isMobile ? "8px !important" : "16px !important",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      minHeight: "58px !important",
      gap: 2,
    }}
  >
    {!isMobile && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          flexWrap: "nowrap",
        }}
      >
        <Button
          sx={navBtn}
          onClick={() => go("/")}
        >
          {t("nav.home")}
        </Button>

        <Button
          sx={navBtn}
          onClick={() => go("/about")}
        >
          {t("nav.about")}
        </Button>

        {/* SERVICES */}
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onMouseEnter={(e) => setServicesAnchor(e.currentTarget)}
          onClick={(e) => setServicesAnchor(e.currentTarget)}
          sx={{
            ...navBtn,
            color: "#3b216e",
            fontWeight: 700,
            borderRadius: "14px",
            px: 2,
            transition: "all .25s ease",

            "&:hover": {
              background: "rgba(59,33,110,0.08)",
              color: "#ff6a00",
              transform: "translateY(-1px)",
            },
          }}
        >
          {t("nav.services")}
        </Button>

        <Button
          sx={navBtn}
          onClick={() => go("/store")}
        >
          {t("nav.store")}
        </Button>

        {/* OUR WORK */}
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onMouseEnter={(e) => setWorkAnchor(e.currentTarget)}
          onClick={(e) => setWorkAnchor(e.currentTarget)}
          sx={{
            ...navBtn,
            borderRadius: "14px",
            px: 2,
            transition: "all .25s ease",

            "&:hover": {
              background: "rgba(59,33,110,0.08)",
              color: "#ff6a00",
              transform: "translateY(-1px)",
            },
          }}
        >
          {t("nav.work")}
        </Button>

        <Button
          sx={navBtn}
          onClick={() => go("/contactX")}
        >
          {t("nav.contact")}
        </Button>
      </Box>
    )}

    {/* RIGHT SIDE */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        ml: isMobile ? "auto" : "0",
        flexShrink: 0,
      }}
    >
      {isMobile && (
        <IconButton
          sx={glassIcon}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon sx={{ fontSize: 20, color: "#3b216e" }} />
        </IconButton>
      )}

      {/* CART */}
      <IconButton
        onClick={() => navigate("/cart")}
        sx={glassIcon}
      >
        <Badge
          badgeContent={totalQty}
          color="error"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "0.6rem",
              height: 13,
              minWidth: 13,
              padding: "0 4px",
            },
          }}
        >
          <ShoppingCartIcon
            sx={{ fontSize: 24, color: "#fff" }}
          />
        </Badge>
      </IconButton>

      {/* LANGUAGE */}
      <Box
        onClick={() => {
          const newLang =
            i18n.language === "en" ? "ar" : "en";
          i18n.changeLanguage(newLang);
        }}
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 48,
          height: 38,
          px: 1.5,
          borderRadius: "14px",
          textTransform: "uppercase",
          fontWeight: 700,
          fontSize: "14px",
          color: "#fff",
          ...glassIcon,

          transition: "all .25s ease",

          "&:hover": {
            background: "rgba(255,255,255,0.15)",
            transform: "translateY(-1px)",
          },
        }}
      >
        {i18n.language}
      </Box>
    </Box>
  </Toolbar>
</AppBar>
      </Box>
      {/* ===== Logo Area ===== */}

      {/* ===== Services Dropdown (Corrected Path) ===== */}
      <Menu 
       anchorEl={servicesAnchor}
  open={Boolean(servicesAnchor)}
  onClose={() => setServicesAnchor(null)}
  MenuListProps={{
    onMouseLeave: () => setServicesAnchor(null),
  }}
        disableScrollLock PaperProps={{ sx: { mt: 2, borderRadius: "24px", minWidth: 550, p: 3, direction: isAr ? 'rtl' : 'ltr' } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          <Box>
            <Typography sx={{ color: "#ff6a00", fontWeight: 700, mb: 1 }}>{t('nav.indiv_services')}</Typography>
            <Divider sx={{ width: 40, mb: 2, borderWidth: 1.5, borderColor: "#3b216e" }} />
            {routes.filter(r => r.path.startsWith("/services") && ["paratrikeairtours","paramotortraining","otherservices"].some(p=>r.path.includes(p)))
              .map(r => {
                const key = r.path.split('/').pop();
                return <MenuItem key={r.path} sx={{ borderRadius: "8px" }} onClick={() => go(r.path)}>• {t(`nav.services_names.${key}`, r.name)}</MenuItem>
              })}
          </Box>
          <Box>
            <Typography sx={{ color: "#ff6a00", fontWeight: 700, mb: 1 }}>{t('nav.corp_services')}</Typography>
            <Divider sx={{ width: 40, mb: 2, borderWidth: 1.5, borderColor: "#3b216e" }} />
            {routes.filter(r => r.path.startsWith("/services") && ["paramotorairshow","aerialvideography","partnership"].some(p=>r.path.includes(p)))
              .map(r => {
                const key = r.path.split('/').pop();
                return <MenuItem key={r.path} sx={{ borderRadius: "8px" }} onClick={() => go(r.path)}>• {t(`nav.services_names.${key}`, r.name)}</MenuItem>
              })}
          </Box>
        </Box>
      </Menu>

     {/* ===== Our Work Dropdown ===== */}
<Menu
  anchorEl={workAnchor}
  open={Boolean(workAnchor)}
  onClose={() => setWorkAnchor(null)}
  disableScrollLock
  PaperProps={{ 
    sx: { 
      mt: 2, 
      borderRadius: "20px", 
      minWidth: 200, 
      p: 1, 
      direction: isAr ? 'rtl' : 'ltr' 
    } 
  }}
>
  <Typography sx={{ color: "#ff6a00", fontWeight: 700, mb: 1, px: 2 }}>
    {t('nav.work')}
  </Typography>
  <Divider sx={{ width: 40, mb: 2, borderWidth: 1.5, borderColor: "#3b216e", mx: 2 }} />
  
  {routes.filter(r => r.path.startsWith("/ourwork")).map(r => {
    const workKey = r.path.split('/').pop().toLowerCase().replace(/\s+/g, ''); 
    return (
      <MenuItem 
        key={r.path} 
        onClick={() => go(r.path)}
      >
        • {t(`nav.work_names.${workKey}`, r.name)}
      </MenuItem>
    );
  })}
</Menu>

<Drawer 
  anchor={isAr ? "left" : "right"} 
  open={drawerOpen} 
  onClose={() => setDrawerOpen(false)} 
  PaperProps={{ sx: { width: 280, p: 2, direction: isAr ? 'rtl' : 'ltr' } }}
>
  <Typography variant="h6" sx={{ mb: 2, p: 2, fontWeight: 700, color: "#3b216e" }}>
    {t('nav.menu')}
  </Typography>

  <List sx={{ width: '100%' }}>
    {/* الرئيسية */}
    <ListItemButton onClick={() => go("/")}>
      <ListItemText primary={t('nav.home')} sx={{ textAlign: 'start' }} />
    </ListItemButton>

    {/* من نحن */}
    <ListItemButton onClick={() => go("/about")}>
      <ListItemText primary={t('nav.about')} sx={{ textAlign: 'start' }} />
    </ListItemButton>

    {/* قسم الخدمات - مكدس */}
    <ListItemButton onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
      <ListItemText primary={t('nav.services')} sx={{ fontWeight: 700, textAlign: 'start' }} />
      {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    
    <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding sx={{ bg: "rgba(0,0,0,0.02)" }}>
        {routes.filter(r => r.path.startsWith("/services")).map(r => {
          const key = r.path.split('/').pop();
          return (
            <ListItemButton key={r.path} sx={{ pl: 4 }} onClick={() => go(r.path)}>
              <ListItemText secondary={`• ${t(`nav.services_names.${key}`, r.name)}`} sx={{ textAlign: 'start' }} />
            </ListItemButton>
          );
        })}
      </List>
    </Collapse>

    {/* المتجر */}
    <ListItemButton onClick={() => go("/store")}>
      <ListItemText primary={t('nav.store')} sx={{ textAlign: 'start' }} />
    </ListItemButton>

    {/* قسم أعمالنا - مكدس */}
    <ListItemButton onClick={() => setMobileWorkOpen(!mobileWorkOpen)}>
      <ListItemText primary={t('nav.work')} sx={{ textAlign: 'start' }} />
      {mobileWorkOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={mobileWorkOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {routes.filter(r => r.path.startsWith("/ourwork")).map(r => {
          const key = r.path.split('/').pop().toLowerCase().replace(/\s+/g, '');
          return (
            <ListItemButton key={r.path} sx={{ pl: 4 }} onClick={() => go(r.path)}>
              <ListItemText secondary={`• ${t(`nav.work_names.${key}`, r.name)}`} sx={{ textAlign: 'start' }} />
            </ListItemButton>
          );
        })}
      </List>
    </Collapse>

    {/* اتصل بنا */}
    <ListItemButton onClick={() => go("/contactX")}>
      <ListItemText primary={t('nav.contact')} sx={{ textAlign: 'start' }} />
    </ListItemButton>
  </List>
</Drawer>
    </>
  );
}

export default Navbar;