import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'

import StringUtil from '../common/utils/string'
import Loading from './loading'

const Login = lazy(() => import('./login'))
const Dashboard = lazy(() => import('./dashboard'))
const Profile = lazy(() => import('./profile'))
const Product = lazy(() => import('./product'))

export default function PageContent() {
  const { pageContent } = useSelector(state => state.pageReducer)
  const Component = eval(StringUtil.ucfirst(pageContent))

  return(
    <Suspense fallback={<Loading />} >
      <Component />
    </Suspense>
  )
}
