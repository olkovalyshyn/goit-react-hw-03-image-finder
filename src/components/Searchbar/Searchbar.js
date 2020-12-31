import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue.trim() === "") {
      return toast.error("Please, input request for search.");
    }

    this.setState({ inputValue: "" });

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
