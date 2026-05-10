import { Container, Typography, Paper, TextField, Button, Box } from "@mui/material";
import PageHeader from "../PageHeader";

const HistoryView = ({ setView }) => {

   return(
  <Container maxWidth="md">
          <PageHeader title="Product Details" onBack={() => setView('store')} />

        <Paper sx={{ p: 3, mb: 4, display: 'flex', gap: 2 }}>
      <TextField placeholder="Phone Number" size="small" fullWidth />
      <TextField placeholder="Order Number" size="small" fullWidth />
      <Button variant="contained">Find Orders</Button>
    </Paper>
    <Typography variant="h6" sx={{ bgcolor: '#2E1065', color: 'white', p: 1, borderRadius: 1, mb: 2 }}>Orders List</Typography>
    {[1,2].map(i => (
      <Paper key={i} variant="outlined" sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="body2">Order Number: <span style={{color: 'orange'}}>#2236515</span></Typography>
          <Typography variant="body2">Total Cost: <span style={{color: 'orange'}}>4600 QAR</span></Typography>
        </Box>
        <Button variant="contained" size="small" onClick={() => setView('order_details')} sx={{ bgcolor: '#2E1065' }}>On Delivery</Button>
      </Paper>
    ))}
  </Container>
  
  );
};
export default HistoryView;
