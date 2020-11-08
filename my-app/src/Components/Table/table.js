import React from 'react';


//JSX element pristine
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
            </tr>
        </thead> 
    )
};

//JSX element + data
const tableRow = (values) => {
    return (
        <tr>
            <td>{values.name}</td>
            <td>{values.height}</td>
            <td>{values.mass}</td>
        </tr>
    )
};


//JSX element + props data
const Table = ({ swapi }) => {
    return (
    <table>
         <TableHead />
         {tableRow(swapi)}
    </table>
    )
  };
  export default Table


  