function ProductTable({ produto }) {
  return (
    <tr>
      <td>{produto.name}</td>
      <td>{produto.price}</td>
      <td>{produto.category}</td>
      <td>{produto.inStock ? 'em estoque' : 'fora de estoque'}</td>
    </tr>
  );
}

export default ProductTable;
