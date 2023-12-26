import Router from './router/Router'
import css from './styles/global/App.module.scss'

function App() {

  return (
    <div className={` ${css.container}`}>
      <Router/>
    </div>
  )
}

export default App
