import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Shared/Auth/AuthProvider";
import RrvTable from "./RrvTable";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews-email?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyreviews(data);
      });
  }, [user.email]);

  return (
    <div className="overflow-x-auto w-full container mx-auto">
      {/* <h1>{myreviews.length}</h1> */}
      <thead>
        <tr>
          <th></th>
          <th>Service</th>
          <th>Review</th>

          <th></th>
        </tr>
      </thead>
      {myreviews.map((mrev) => (
        <RrvTable mrev={mrev} key={mrev._id}></RrvTable>
      ))}
    </div>
  );
};

export default MyReview;
