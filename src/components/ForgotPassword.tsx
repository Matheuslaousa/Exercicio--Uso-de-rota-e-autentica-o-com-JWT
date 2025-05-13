import { Container, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Simulação
    alert(`Instruções de redefinição de senha enviadas para ${email}`);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Recuperar Senha</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" onClick={handleSend}>Enviar</Button>
    </Container>
  );
}