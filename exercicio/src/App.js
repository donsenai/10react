import './App.css';
import Calculadora from './components/calculadora';
import Contador from './components/contador';
import { Item, Header } from './styled';

function App() {
  return (
    <>
      <Header>
        <Contador />
      </Header>
      <Item>Teste</Item>
      <Calculadora />
    </>
  );
}

export default App;
