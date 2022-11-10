import React from "react";
import { ToastContainer } from "react-toastify";

const RrvTable = ({ mrev, deleteReview }) => {
  const { service_Name, reviewText, _id } = mrev;
  console.log(_id);

  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr>
            <th>
              <label>
                <button onClick={() => deleteReview(_id)}>
                  X
                  <ToastContainer />
                </button>
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
