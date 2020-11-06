export function Paragraph({ children, color, style, primary }) {
  const styles = {
    container: {
      border: '1px solid #333',
      width: 300,
      height: '15vh',
      borderRadius: 15,
      borderColor: primary ? 'goldenrod' : '#333'
    },
    paragraph: {
      fontSize: 24,
      color,
      // ...style,
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>{children}</p>
    </div>
  )
}
