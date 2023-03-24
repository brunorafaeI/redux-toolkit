
import { useSelector } from 'react-redux'
import { Setup } from './components/Setup'

function App() {
  const { pageContent } = useSelector(state => state.pageReducer)

  return(
    <div data-theme="dark">
      <Setup pageContent={pageContent}>
        <div>Loading...</div>
      </Setup>
    </div>
  )
}

export default App
