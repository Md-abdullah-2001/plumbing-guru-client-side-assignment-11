import React, { useContext } from "react";
import { AuthContext } from "../../../Shared/Auth/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="overflow-x-auto w-full container mx-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Review</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <button>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
          </tr>

          <tr>
            <th>
              <label>
                <button>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar"></div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                </div>
              </div>
            </td>
            <td>Carroll Group</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
          </tr>

          <tr>
            <th>
              <label>
                <button>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar"></div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                </div>
              </div>
            </td>
            <td>Rowe-Schoen</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
          </tr>

          <tr>
            <th>
              <label>
                <button>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar"></div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                </div>
              </div>
            </td>
            <td>Wyman-Ledner</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;
