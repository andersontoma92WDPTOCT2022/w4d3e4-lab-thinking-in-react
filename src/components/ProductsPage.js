import { useState } from 'react';
import jsonData from '../../src/data.json';
import Table from 'react-bootstrap/Table';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import Form from 'react-bootstrap/Form';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [keyWord, setKeyWord] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  function handleStockOption(e) {
    console.log(e.target.checked, '<------');
    setOnlyInStock(e.target.checked);
  }

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar setKeyWord={setKeyWord} keyWord={keyWord} />
      <Form.Check
        label="Only show products in stock"
        onClick={handleStockOption}
      />
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
            .filter(
              (produto) =>
                produto.name
                  .toLocaleLowerCase()
                  .includes(keyWord.toLocaleLowerCase()) &&
                (produto.inStock || !onlyInStock)
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
