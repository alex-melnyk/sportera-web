import React from 'react';
import PropTypes from 'prop-types';

const Table = ({columns, rows}) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((column) => {
                            return <th>{column}</th>
                        })
                    }
                </tr>
            </thead>
                <tr>
                    {
                        rows.map((row) => {
                            return <td>{row}</td> 
                        })
                    }
                </tr>
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