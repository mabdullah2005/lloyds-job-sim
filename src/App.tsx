import "./App.css"
import Header from "./components/header/Header"
import Calculator from "./components/calculator/Calculator"
import Footer from "./components/footer/Footer"

function App(){
  return(
    <body>
      <header>
        <Header></Header>
      </header>
      <main>
        <Calculator></Calculator>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </body>
  )
}

export default App;