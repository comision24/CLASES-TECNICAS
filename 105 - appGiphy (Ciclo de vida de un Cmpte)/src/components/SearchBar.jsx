import { Component } from "react";

export class SearchBar extends Component {

  
  constructor(props) {  // { keyword, handleChangeKeyword, handleResetKeyword }
    super(props);
  }

  render() {
    return (
      <form className="d-flex position-relative" onSubmit={(e) => this.props.handleClickSubmit(e)}>
        <input
          className="form-control me-2 ps-4"
          type="search"
          placeholder="Buscar Giphy"
          aria-label="Search"
          name="keyword"
          value={this.props.keyword}
          onChange={(event) => this.props.handleChangeKeyword(event)}
        />
        <span
          onClick={() => this.props.handleResetKeyword()}
          className="position-absolute top-50 rounded-circle bg-danger p-2"
          style={{
            left: "5px",
            width: "10px",
            height: "15px",
            cursor: "pointer",
          }}
        >
          x
        </span>
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    );
  }
}

export default SearchBar;
