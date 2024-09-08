import Container from '@mui/material-pigment-css/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from './components/sign-in';
import { auth } from '@/auth';
export default async function Home() {
  const session = await auth()
  return (
    <main>
      <CssBaseline />
      <Container>
        <SignIn />
      </Container>
      <div className="flex flex-col rounded-md bg-gray-100">
        <div className="rounded-t-md bg-gray-200 p-4 font-bold">
          Current Session
        </div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </main>
  );
}
