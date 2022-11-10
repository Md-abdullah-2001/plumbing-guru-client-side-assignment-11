import React from "react";

const RrvTable = ({ mrev }) => {
  const { service_Name, reviewText, _id } = mrev;
  console.log(_id);
  const deleteReview = (id) => {
    const process = window.confirm("You want to delete??");
    if (process) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr>
            <th>
              <label>
                <button onClick={() => deleteReview(_id)}>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{service_Name}</div>
                </div>
              </div>
            </td>
            <td>{reviewText}</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RrvTable;
