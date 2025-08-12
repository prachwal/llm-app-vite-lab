import { render } from 'preact'
// import './index.css' // Commented out to fix build error
import { App } from './app.tsx'
import './index.css' // Ensure this is included for styles

render(<App />, document.getElementById('app')!)
