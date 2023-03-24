
import { useSelector } from 'react-redux'
import { DynamicLazyLoader } from './components/DynamicLazyLoader'
import Progress from './pages/progress'

function App() {
  const { pageContent } = useSelector(state => state.pageReducer)

  return(
    <div data-theme="dark">
      <DynamicLazyLoader pageContent={pageContent} fallback={<Progress />} />
    </div>
  )
}

export default App
