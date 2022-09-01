import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <div className='container'>
        <NavBar/>
        <ItemListContainer gretting={'Aca va la lista de productos'}/>
    </div>
  )
}

export default App 


