import { useState, useMemo } from 'react'

export function Setup({ pageContent, children }) {
  const [module, setModule] = useState(null)
  const lazyLoad = import('../pages/' + pageContent.toLowerCase())
  const Component = module && module[pageContent]

  useMemo(() => {
    lazyLoad.then(data => setModule(data))
  }, [pageContent])

  return (
    <>
      { !Component ? children : <Component /> }
    </>
  )

}
