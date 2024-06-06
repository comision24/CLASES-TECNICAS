import { useEffect } from "react";

export const SearchBar = ({
  keyword,
  handleChangeKeyword,
  handleResetKeyword,
  handleSubmitSearch,
  isClick,
}) => {

  // useEffect(() => {
  //   // cuando se monta el componente
  // }, []);

  // useEffect(() => {
  //   // cuando alguna dependencia cambie es código se ejecutara
  // }, [keyword]);

  // useEffect(() => {
  //   // cuando se desmonta el componente se ejecutara el código retornado

  //   return () => {};
  // }, []);

  useEffect(() => {  // componentDidUpdate y componentWillUnmount
    if (keyword === "Animales" || keyword === "dragon ball") {
      console.log("Buscando animales o dragon ball");
    }

    
  }, [keyword]);

useEffect(() => {
  
  return () => {
    console.log("componente desmontado")
  }

}, []);



  useEffect(() => {  // cuando cambie el dato de la prop isClick se ejecutara el código
    console.log("Se click en el link y el valor es " + isClick);
  }, [isClick]);


  return ( isClick &&
    <form
      className="d-flex position-relative"
      onSubmit={(e) => handleSubmitSearch(e)}
    >
      <input
        className="form-control me-2 ps-4"
        type="search"
        placeholder="Buscar Giphy"
        aria-label="Search"
        name="keyword"
        value={keyword}
        onChange={(event) => handleChangeKeyword(event)}
      />
      <span
        onClick={() => handleResetKeyword()}
        className="rounded-circle bg-danger p-2"
        style={{
          width: "10px",
          height: "15px",
          cursor: "pointer",
        }}
      >
        
      </span>
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};


export default SearchBar;
