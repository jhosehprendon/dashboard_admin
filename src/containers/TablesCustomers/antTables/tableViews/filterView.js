import React, { Component } from 'react';
import { Icon } from 'antd';
import { FilterDropdown } from '../../../../components/tables/helperCells';
import TableWrapper from '../antTable.style';

export default class extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this); //sort
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      dataList: this.props.dataList.getAll(),
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    };
  }
  onSearch() {
    let { searchText } = this.state;
    searchText = searchText.toUpperCase();
    const dataList = this.props.dataList
      .getAll()
      .filter(data => data['companyName'].toUpperCase().includes(searchText));
    this.setState({
      dataList,
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    });
  }
  onInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onChange(pagination, filters, sorter) {
    const { dataList } = this.props;
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      this.setState({ dataList: dataList.getAll() });
    }
  }

  render() {
    let { searchText } = this.state;
    let columns = this.props.tableInfo.columns;
    let filterDropdown = (
      <FilterDropdown
        searchText={searchText}
        onInputChange={this.onInputChange}
        onSearch={this.onSearch}
        placeholder="Search Company Name"
      />
    );
    columns[2] = {
      ...columns[2],
      filterDropdown,
      filterIcon: (
        <Icon
          type="search"
          style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }}
        />
      ),
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: visible =>
        this.setState({ filterDropdownVisible: visible }, () =>
          document.getElementById('tableFilterInput').focus()
        )
    };
    
    return (
      <TableWrapper
        columns={columns}
        onChange={this.onChange}
        dataSource={this.state.dataList}
        className="isoSearchableTable"
      />
      
    );
  }
}
