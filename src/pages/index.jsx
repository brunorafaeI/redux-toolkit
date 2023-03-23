import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import StringUtil from '../common/utils/string'
import Progress from './progress'

const Login = lazy(() => delayForDemo(import('./login')))
const Dashboard = lazy(() => delayForDemo(import('./dashboard')))
const Profile = lazy(() => import('./profile'))
const Product = lazy(() => import('./product'))

export default function PageContent() {
  const { pageContent } = useSelector(state => state.pageReducer)
  const Component = eval(StringUtil.ucfirst(pageContent))

  return(
    <Suspense fallback={<Progress />} >
      <Component />
    </Suspense>
  )
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}
