import React, { useState, useEffect } from "react";
import "../firebase/firebass-css/Comments.css";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
export const Comments = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fireDb.child("zfwork").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
          <section className="comments">
           <h1 className="comment-h1">Comments Section</h1>
          {Object.keys(data).map((id, index) => {
              return (
                <div key={id}>
                  <div className="box" scope="row">{}</div>
                  <>Sno: {index +1}</>
                      
                <div id="commentsbox" className="container mx-auto" style={{minHeight:"70px", maxWidth:"90%"}}>
                <div className="comment-profile">{data[id].name.charAt(0) }</div>
                <div id="commentsbox-content" className=" mx-auto" style={{minHeight:"100%",minWidth:"70%", maxWidth:"40%"}}>
                 <div className="comment-arrow"></div>
                 <h4 className="mt-2 fs-4 "><span>User </span>: {data[id].name}</h4>
                 <p><span>Comments </span></p>
                 <p className="mt-5"> {data[id].comment}</p>
                </div>

                </div>
                  
                  </div>
                  );
                })}
          </section>
      </div>
    </>
  );
};

export default Comments;


// note
/*
 <table className="style-table">
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].comment}</td>

                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>

                  { <h1>{data[id].name}</h1> }
                  </tr>
                  );
                })}
              </tbody>
            </table>
*/