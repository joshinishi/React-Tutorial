import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'General',
  }

  static propTypes = { 
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalfirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello Nishuu!");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title = `${this.capitalfirstletter(this.props.category)} - NewsApp`;
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbab244387a84e1aba4874b929d50703&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults,loading:false })
  }

  handlePreClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbab244387a84e1aba4874b929d50703&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ })
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbab244387a84e1aba4874b929d50703&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>News APP - Top Headlines | {this.capitalfirstletter(this.props.category)}</h2>
        { this.state.loading && <Spinner /> }
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => (
            <div key={element.url} className="col-md-4">
              <NewsItem
                title={element.title?element.title.slice(0, 45):""}
                description={element.description?element.description.slice(0, 88):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
