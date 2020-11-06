export function Product({ name, description, price, handleDeleteProduct }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button
        type="button"
        onClick={handleDeleteProduct}
      >
        Delete
      </button>
    </div>
  )
}
