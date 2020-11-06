function Form({
  name,
  description,
  price,
  handleSubmit,
  handleChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={handleChange}
        value={description}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        onChange={handleChange}
        value={price}
      />
      <button>Create product</button>
    </form>
  )
}

export default Form;
