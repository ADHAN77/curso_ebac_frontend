import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';            
import GlobalStyles from './Styles/global'; 
import Container from './containers/container';
import FormVagas from './components/FormVagas';
import ListaVagas from './components/ListaVagas';

function App() {
  return (
    <>
      <GlobalStyles />
        <Cabecalho />
        <Hero />  
        <Container>        
          <FormVagas aoPesquisar={(termo: string) => console.log(termo)} />
          <ListaVagas />
        </Container>
    </>
  );
}

export default App;
