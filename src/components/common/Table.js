import React from 'react';
import PropTypes from 'prop-types';


const Table = ({columns, rows}) => {
    
    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((column, id) => {
                            return <th key={id}>{column}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>        
                {
                    rows.map((row, index) => {    
                        const keys = Object.keys(row);
                        return (
                            <tr key={index}>
                                {
                                    keys.map((key, index) => {
                                        return (
                                            <td key={index}>{row[key]}</td>
                                        )
                                    })
                                }     
                            </tr>
                        )                     
                    })
                }
            </tbody>
        </table>
    )
};

Table.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array
};

Table.defaultProps = {
    columns: [],
    rows: []
};

export {Table};
