import React, { useEffect, useState } from "react";
import axios from "axios";

function Patient() {
  const [totalPatient, setTotalPatient] = useState(0);
  const [totalData, setTdata] = useState([]);
  const [perData, setPerData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org")
      .then(res => {
        setTotalPatient(res.data.data.summary.total);
        setTdata(res.data.data.rawPatientData);
        let temp = res.data.data.rawPatientData;
        temp = temp.slice(0, 10);
        setPerData(temp);
      });
  }, []);
  const nextPageHandler = () => {
    let temp = totalData;
    temp = temp.slice((page + 1) * 5, (page + 1) * 5 + 5);
    setPerData(temp, page);
    setPage(page + 1);
  };
  const prevPagehandler = () => {
    let temp = totalData;
    if (page == 1) {
      temp = temp.splice(0, 5);
    } else {
      temp = temp.slice((page - 1) * 5, (page - 1) * 5 + 5);
    }
    setPerData(temp);
    setPage(page - 1);
  };
  console.log(perData);
  return (
    <div>
      <h2>Total Patients Admitted {totalPatient}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">reported On</th>
            <th scope="col">age</th>
            <th scope="col">gender</th>
            <th scope="col">city</th>
            <th scope="col">state</th>
            <th scope="col">status</th>
            <th scope="col">sources</th>
            <th scope="col">note</th>
          </tr>
        </thead>
        <tbody>
          {perData.map(ele => {
            return (
              <tr key={ele.patientId}>
                <th scope="row">{ele.patientID}</th>
                <td scope="row">{ele.reportedOn}</td>
                <td scope="row">{ele.ageEstimate}</td>
                <td scope="row">{ele.gender}</td>
                <td scope="row">{ele.city}</td>
                <td scope="row">{ele.state}</td>
                <td scope="row">{ele.status}</td>
                <td scope="row">{ele.sources}</td>
                <td scope="row">{ele.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {page > 0 ? <button onClick={prevPagehandler}>Prev</button> : null}
      {perData.length > 0 ? (
        <button onClick={nextPageHandler}>Next</button>
      ) : null}
    </div>
  );
}

export default Patient;
