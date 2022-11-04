import gitlogo from "../assets/gitlogo.png";
import { Container } from "./styles";
import Input from "../components/Input";

function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="github logo" />
      <Input />
    </Container>
  );
}

export default App;
