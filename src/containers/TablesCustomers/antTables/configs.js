import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../components/tables/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="antTable.title.avatar" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar')
  },
  {
    title: <IntlMessages id="Date of app" />,
    key: 'date',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'date')
  },
  {
    title: <IntlMessages id="Contact Name" />,
    key: 'firstName',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'firstName')
  },
  {
    title: <IntlMessages id="Company Name" />,
    key: 'companyName',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'companyName')
  },
  {
    title: <IntlMessages id="Email" />,
    key: 'email',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'email')
  },
  {
    title: <IntlMessages id="Phone" />,
    key: 'phone',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'phone')
  },
  
  {
    title: <IntlMessages id="Ip" />,
    key: 'ip',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'ip')
  },
  
  {
    title: <IntlMessages id="Application pdf" />,
    key: 'file',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'file')
  }
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4], columns[5], columns[6], columns[7]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: false },
  { ...columns[3], sorter: false },
  { ...columns[4], sorter: false },
  { ...columns[5], sorter: false },
  { ...columns[6], sorter: false },
  { ...columns[7], sorter: false }
];
// const editColumns = [
//   { ...columns[1], width: 300 },
//   { ...columns[2], width: 300 },
//   columns[3],
//   columns[4]
// ];
// const groupColumns = [
//   columns[0],
//   {
//     title: 'Name',
//     children: [columns[1], columns[2]]
//   },
//   {
//     title: 'Address',
//     children: [columns[3], columns[4]]
//   }
// ];
const tableinfos = [
  // {
  //   title: 'Simple Table',
  //   value: 'simple',
  //   columns: clone(smallColumns)
  // },
  // {
  //   title: 'Sortable Table',
  //   value: 'sortView',
  //   columns: clone(sortColumns)
  // },
  {
    title: 'Customers',
    value: 'filterView',
    columns: clone(smallColumns) && clone(sortColumns)
  }
  // ,
  // {
  //   title: 'Editable View',
  //   value: 'editView',
  //   columns: clone(editColumns)
  // },
  // {
  //   title: 'Grouping View',
  //   value: 'groupView',
  //   columns: clone(groupColumns)
  // },
  // {
  //   title: 'Customized View',
  //   value: 'customizedView',
  //   columns: clone(columns)
  // }
];
export { columns, tableinfos };
