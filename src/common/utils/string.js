export default {
  ucfirst: str => {
    return String(str)
      .toLowerCase()
      .replace(/^[a-zA-Z]/, $1 => $1.toUpperCase())
  }
}
