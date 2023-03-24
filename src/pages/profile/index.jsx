import { useDispatch } from "react-redux"
import { usePageContent } from "../../hooks/page"

export default function Profile() {
  const { setPageContent } = usePageContent()
  const dispatch = useDispatch()

  return(
    <>
      <h1>Profile</h1>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(setPageContent({ pageContent: 'product'}))}
      >Product</button>
    </>
  )
}
