import { useState } from 'react';
import jsonData from '../../src/data.json';
import Table from 'react-bootstrap/Table';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Row>
          <Col sm={8}>
            <SearchBar setKeyWord={setKeyWord} keyWord={keyWord} />
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3">
              <Form.Check
                label="Only show products in stock"
                onClick={handleStockOption}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>

      <Table striped bordered hover size="sm" variant="dark">
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
