import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  // const [images,setimages]=useState([]);

  //    console.log(data)

  return (
    <table>
      <tr>
        <th>S.No</th>
        <th>Image</th>
        <th>Full-Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>City</th>
        <th>Country</th>
      </tr>
      {data &&
        data.map((itr) => {
          return <tr>
            <td>{itr.id}</td>
            <Link to={`/${itr.id}`}><img src={`https://randomuser.me/api/portraits/${itr.women?'women':'men'}/${itr.id}.jpg`} alt='an iteration'/></Link>
            <td>{itr.name}</td>
            <td>{itr.zipCode}</td>
            <td>{itr.email}</td>
            <td>{itr.city}</td>
            <td>{itr.country}</td>
          </tr>;
        })}
    </table>
  );
}

export default Card;
