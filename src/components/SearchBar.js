import Form from 'react-bootstrap/Form';

function SearchBar({ keyWord, setKeyWord }) {
  //
  function handleChange(e) {
    setKeyWord(e.target.value);
  }

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>search 🔍</Form.Label>
        <Form.Control
          placeholder="input"
          value={keyWord}
          onChange={handleChange}
        />
      </Form.Group>
    </div>
  );
}

export default SearchBar;
