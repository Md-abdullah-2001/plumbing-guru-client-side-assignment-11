import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Shared/Auth/AuthProvider";
import RrvTable from "./RrvTable";
import "react-toastify/dist/ReactToastify.css";
const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);

  const notify = () => toast("Deleted successfully!");

  useEffect(() => {
    fetch(`https://y-snowy-ten.vercel.app/reviews-email?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyreviews(data);
      });
  }, [user.email]);

  const deleteReview = (id) => {
    const process = window.confirm("You want to delete??");
    if (process) {
      fetch(`https://y-snowy-ten.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          notify();

          if (data.deletedCount > 0) {
            const remains = myreviews.filter((rvs) => rvs._id !== id);
            setMyreviews(remains);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full container mx-auto">
      {/* <h1>{myreviews.length}</h1> */}

      {myreviews.map((mrev) => (
        <RrvTable
          deleteReview={deleteReview}
          mrev={mrev}
          key={mrev._id}
        ></RrvTable>
      ))}
    </div>
  );
};

export default MyReview;
