import React, { Component } from "react";
import Header from "./Header";
import ContainerCards from "./ContainerCards";

export class ContainerGeneral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "Animales",
      items: [],
    };

    this.api = `https://api.giphy.com/v1/gifs/search?api_key=S2hl5NsUHAODVNhfYdRK2go8lq7TNcUI&q=${this.state.keyword}&limit=25&offset=0&rating=r&lang=es&bundle=clips_grid_picker`;

    this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
    this.handleResetKeyword = this.handleResetKeyword.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await fetch(this.api).then((res) => res.json());
      const dataFormat = data.map(({title,images}) => {
        const {original: {webp}} = images
        return {
          title,
          gif: webp
        }
      });
      // console.log(dataFormat);

      this.setState({
        items: dataFormat
      })
    } catch (error) {}
  }

  handleChangeKeyword(event) {
    const valueInput = event.target.value;

    this.setState({
      keyword: valueInput,
    });

    console.log(this.state.keyword);
  }

  handleResetKeyword() {
    this.setState({
      keyword: "",
    });
  }

  handleClickSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Header
          keyword={this.state.keyword}
          handleChangeKeyword={this.handleChangeKeyword}
          handleResetKeyword={this.handleResetKeyword}
          
        />

        <ContainerCards items={this.state.items}/>
      </>
    );
  }
}

export default ContainerGeneral;
