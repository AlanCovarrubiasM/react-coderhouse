import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer text="Este ese el componente de ItemListContainer"></ItemListContainer>
    </>
  )
}

export default App
