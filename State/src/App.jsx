import './App.css'
import Counter from './Counter'
import TryingToggler from './TryingToggler'
import Toggler from './Toggler'
import TogglerAndCounter from './TogglerAndCounter'
import TogglerRandom from './JustARandomFactAboutReactRe-Rendering'
function App() {
  return (
    <div>
      <Counter/>
      <TryingToggler/>
      <Toggler/>
      <TogglerAndCounter />
      {/* <TogglerRandom/> */}
    </div>
  )
}

export default App;