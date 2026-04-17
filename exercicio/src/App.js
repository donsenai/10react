import './App.css';
import Calculadora from './components/calculadora';
import { Item, Header } from './styled';

function App() {
  return (
    <>
      <Header><h1>Exercício</h1></Header>
      <Item>Teste</Item>
      <Calculadora />
    </>
  );
}

export default App;
