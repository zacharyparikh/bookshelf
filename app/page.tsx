import Container from '@mui/material-pigment-css/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './components/sign-in';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth()
  return (
    <main sx={{ minHeight: '100lvh', display: 'grid', placeItems: 'center' }}>
      <CssBaseline />
      <Container>
        <SignIn />
      </Container>
    </main>
  );
}
