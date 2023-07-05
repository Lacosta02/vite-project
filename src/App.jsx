import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'


function App() {
  let salario = 20000
  let nombre = 'Mariano'
  return (
    <>
      <ClassComponent/>
      <FuncComponent salario={salario}/>
      <FuncComponent salario={35000} name = {nombre}/>
    </>
  )
}

export default App
