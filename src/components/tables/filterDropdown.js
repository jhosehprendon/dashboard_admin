import React, { Component } from 'react';
import Input from '../uielements/input';
import Button from '../uielements/button';

export default class extends Component {
  state = {};
  render() {
    const { searchText, onInputChange, onSearch, placeholder } = this.props;
    return (
      <div className="isoTableSearchBox">
        <Input
          id="tableFilterInput"
          placeholder={placeholder}
          value={searchText}
          onChange={onInputChange}
          onPressEnter={onSearch}
        />
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
        <Button style={{ marginLeft: 8, backgroundColor: "#f50" }}  onClick={onSearch}>
          Reset
        </Button>
      </div>
    );
  }
}
