import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';            
import GlobalStyles from './Styles/global'; 
import Container from './containers/container';
import ListaVagas from './components/ListaVagas';

function App() {
  return (
    <>
      <GlobalStyles />
        <Cabecalho />
        <Hero />  
        <Container>        
          <ListaVagas />
        </Container>
    </>
  );
}

export default App;
