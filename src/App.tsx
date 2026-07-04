import './App.css'
import Button from './components/Button'
function App() {

  return (
    <>
      <section id="center">
        <Button label="Enregistrer" />
        <Button label="Annuler" />
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
