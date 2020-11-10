export function About(props) {
  console.log(props)
  function handleClick() {
    props.history.goBack();
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>ir atras</button>
      <p>About</p>
    </div>
  )
}
