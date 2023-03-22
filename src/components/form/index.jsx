export default function Form({ props, children }) {
  return (
    <form {...props}>
      {children}
    </form>
  )
}
