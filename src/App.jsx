
import { useSelector } from 'react-redux'
import Loading from './components/Loading'
import { Setup } from './components/Setup'

function App() {
  const { pageContent } = useSelector(state => state.pageReducer)

  return(
    <div data-theme="dark">
      <Setup pageContent={pageContent}>
        <Loading />
      </Setup>
    </div>
  )
}

export default App
