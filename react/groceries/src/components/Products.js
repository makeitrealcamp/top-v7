import { Product } from './Product';

function Products({ products, handleDeleteProduct }) {
  return (
    <section className="products">
      <h1>Lista de Productos</h1>
      {!!products && products.length > 0 && products.map(({ id, name, description, price }) => {
        return (
          <Product
            key={id}
            name={name}
            description={description}
            price={price}
            handleDeleteProduct={handleDeleteProduct(id)}
          />
        )
      })}
    </section>
  )
}

export default Products;
