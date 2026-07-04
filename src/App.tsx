import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <section id="center">
        <Button label='Connexion' />
        <Button variant="primary" label='Sauvegarder' />
        <Button variant='secondary' label='Retour' />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
