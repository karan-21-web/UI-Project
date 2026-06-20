import Navbar from "./components/Section1/Navbar"
import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1689607809841-cbbc3595f3fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
        tag:'Satisfied'
    },
      {img:'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro:'',
       tag:'Underserved'},
    {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Underbanked'},
         {img:'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Innovative'},
  ]
  return (
    <div className=''>
      <Section1 users={users}/>
       <Section2/>
       
    </div>
  )
}

export default App
