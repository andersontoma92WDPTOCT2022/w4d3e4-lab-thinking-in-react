import { useState } from 'react';
import jsonData from '../../src/data.json';
import Table from 'react-bootstrap/Table';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [keyWord, setKeyWord] = useState('');

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar setKeyWord={setKeyWord} keyWord={keyWord} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>inStock</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((produto) =>
              produto.name
                .toLocaleLowerCase()
                .includes(keyWord.toLocaleLowerCase())
            )
            .map((produto) => (
              <ProductTable produto={produto} key={produto.id} />
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductsPage;
