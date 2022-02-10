import { Container } from "react-bootstrap";
import Headers from "./components/Headers";
import Footers from "./components/Footers";

const App = () => {
  return (
    <>
      <Headers />
      <main className='py-3'>
        <Container>
         <h1>Welcome to IvoireShop</h1>
        </Container>
      </main>
      <Footers />
    </>
  );
}

export default App;
