import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      active: 'all'
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems(filter = null) {
    axios
      .get('http://localhost:8080/posts')
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
        this.setState({
            data: response.data.portfolio_items
        }) }
      })
      .catch( error => {
        console.log(error);
      });
  }

  handleFilter(filter) {
    var element = event.target;
    if (element.id !== this.state.active) {
        this.setState({
            active: element.id
        });
    }
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else { 
      this.getPortfolioItems(filter) 
    }
  }

  portfolioItems() {
    return this.state.data.map(item => {
        return (
            <PortfolioItem 
                key={item._id} 
                item={item}
            />
        );
    });
  }

  componentDidMount(){
      this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button id='all' className={`btn ${this.state.active === 'all' ? 'active' : null}`} onClick={() => this.handleFilter("CLEAR_FILTERS")}>
              All
          </button>
          <button id='front' className={`btn ${this.state.active === 'front' ? 'active' : null}`} onClick={() => this.handleFilter("Front-End")}>
              Front-End
          </button>
          <button id='back' className={`btn ${this.state.active === 'back' ? 'active' : null}`} onClick={() => this.handleFilter("Back-End")}>
              Back-End
          </button>
          <button id='full' className={`btn ${this.state.active === 'full' ? 'active' : null}`} onClick={() => this.handleFilter("Full-Stack")}>
              Full-Stack
          </button>
        </div>
        <div className="portfolio-items-wrapper">
            {this.portfolioItems()}
        </div>
      </div>
    );
  }
}