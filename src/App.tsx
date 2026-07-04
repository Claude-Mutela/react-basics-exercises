import './App.css'
import Button from './components/Buttton'

function App() {
  // const handleClick = () => alert('Bouton cliqué !')
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Coordonnée X du clic :", e.clientX);
  alert('Bouton cliqué !');
};
  return (
    <>
      <section id="center">
        <Button onClick={handleClick} label='Enregistrer' />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
