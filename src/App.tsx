import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const user ={
    id:9,
    name:"Claude",
    email:"claude@gmail.com",
    isAdmin:true
  }
  return (
    <>
      <section id="center" >
        <UserProfile user={user} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
