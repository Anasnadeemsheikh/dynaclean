import React , {useState} from 'react';
import { useTable } from 'react-table';
import ReactTableContainer from "react-table-container";
import MOCK_DATA from './MOCK_DATA.json'
import bindata from './bindata.json'
function List(){


    const columns = React.useMemo(
        () => [
            {
                Header: 'Serial',
                accessor: 'serial'  
              },
              {
                Header: '%',
                accessor: 'percentage' 
              },
              {
                Header: 'Type',
                accessor: 'type'  
              },
              {
                Header: 'Street',
                accessor: 'address' 
              },
              {
                Header: 'Measured',
                accessor: 'measured'  
              },
        ],
        []
      )
      const data = React.useMemo(() => MOCK_DATA, [])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data      })
    return(
        <ReactTableContainer width= '100%' height='100%'>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )}
        )}
      </tbody>
    </table>
        </ReactTableContainer>
    )
}
export default List; 