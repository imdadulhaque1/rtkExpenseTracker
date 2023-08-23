import React from "react";
import EditImage from "../../assets/images/edit.svg";
import DeleteImage from "../../assets/images/delete.svg";

const Transaction = () => {
  return (
    <div>
      <li className="transaction income">
        <p>Earned this month</p>
        <div className="right">
          <p>৳ 100</p>
          <button className="link">
            <img className="icon" alt="edit" src={EditImage} />
          </button>
          <button className="link">
            <img className="icon" alt="delete" src={DeleteImage} />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Transaction;
