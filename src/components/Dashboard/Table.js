import React from 'react';
import { Audio } from 'react-loader-spinner'

const Table = ({ employees, handleEdit, handleDelete }) => {
  

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });
  return (
    <div className="contain-table">
      {employees.length > 0 ? (
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 && (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) }
        </tbody>
      </table>
      ): (
        <>
        
        <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
}}>

  <Audio
    height="50"
    width="50"
    radius="9"
    color="blue"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
  />
</div>
        </>
      )}
    </div>
  );
};

export default Table;
