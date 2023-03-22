import { useDispatch } from "react-redux"
import { usePageContent } from "../../hooks/page"

export default function Product() {
  const { setPageContent } = usePageContent()
  const dispatch = useDispatch()

  return(
    <>
      <h1>Product</h1>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(setPageContent({ pageContent: 'login'}))}
      >Login</button>
    </>
  )
}
