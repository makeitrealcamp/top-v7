import './Button.css'

export function Button({ children, primary }) {
  const classes = ['Button']

  if(primary) {
    classes.push('Button-primary')
  }

  return (
    <button
      type="button"
      className={classes.join(' ')}
    >
      {children}
    </button>
  )
}
