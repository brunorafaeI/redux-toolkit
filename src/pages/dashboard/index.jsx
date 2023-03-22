import { useDispatch } from "react-redux"
import { usePageContent } from "../../hooks/page"

export function Dashboard() {
  const { setPageContent } = usePageContent()
  const dispatch = useDispatch()

  return(
    <>
      <h1>Dashboard</h1>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(setPageContent({ pageContent: 'profile'}))}
      >Profile</button>
    </>
  )
}
