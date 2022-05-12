import React from "react";
import { Link } from "react-router-dom";
const CartItem = ({ volunteering }: any) => {
  return (
    <tr>
      <td>
        <Link to={`/volunteeringPage/${volunteering.name}`}>
          <img src={volunteering.mobileImg} alt="volunteering" className="volunteering" />
        </Link>
      </td>
      <td>{volunteering.association}</td>
      <td>{volunteering.name}</td>
      <td>{volunteering.side}</td>
      <td>{volunteering.changes}</td>
      <td>{volunteering.quantity}</td>
      <td>{volunteering.price}</td>
      <td>delete</td>
    </tr>
  );
};

export default CartItem;
