import React, { useState } from "react";
import Header from "./components/Header";
import ContainerCards from "./components/ContainerCards";
import { Spinner } from "./components/Spinner";

export const App = () => {
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleChangeKeyword = ({ target: { value } }) => setKeyword(value);

  const handleResetKeyword = () => {
    setKeyword("");
    setItems([]);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();

    if(!loading){
      setLoading(true)
    }

    try {
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=S2hl5NsUHAODVNhfYdRK2go8lq7TNcUI&q=${keyword}&limit=25&offset=0&rating=r&lang=es&bundle=clips_grid_picker`;
      const { data } = await fetch(endpoint).then((res) => res.json());
      const dataFormat = data.map(({ title, images }) => {
        const {
          original: { webp },
        } = images;
        return {
          title,
          gif: webp,
        };
      });
      setLoading(false)
      setItems(dataFormat)

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Header
        keyword={keyword}
        handleChangeKeyword={handleChangeKeyword}
        handleResetKeyword={handleResetKeyword}
        handleSubmitSearch={handleSubmitSearch}
      />

      {
        loading ? <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><Spinner/></div> : <ContainerCards items={items} />
      }
     
    </>
  );

};

export default App;
