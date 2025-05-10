import { Container, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');

  const handleReset = () => {
    alert('Senha redefinida com sucesso!');
  };

  return (
    <Container>
      <Typography variant="h5">Redefinir Senha</Typography>
      <TextField label="Nova Senha" type="password" fullWidth margin="normal" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <Button variant="contained" onClick={handleReset}>Redefinir</Button>
    </Container>
  );
}