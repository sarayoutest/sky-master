import { Box, Typography, IconButton, Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export const PageHeader = ({ title, onBack }) => (
  

   <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      {onBack && (
        <IconButton onClick={onBack} sx={{ mr: 2, border: '1px solid #eee', borderRadius: 2 }}>
          <ArrowBack fontSize="small" />
        </IconButton>
      )}
      <Typography variant="h5" fontWeight="900" color="#2E1065">{title}</Typography>
    </Box>
);

export default PageHeader;
