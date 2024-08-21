import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div className='text-slate-800 bg-gradient-to-b from-blue-50 to-orange-50 px-10 font-Coming'>
        
        <Navbar />

        <div className=''>
          <Hero />
        </div>
        
        
      </div>
    </>
  )
}

export default App
