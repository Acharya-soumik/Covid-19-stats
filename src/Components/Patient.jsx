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
    temp = temp.slice((page + 1) * 10, (page + 1) * 10 + 10);
    setPerData(temp, page);
    setPage(page + 1);
  };
  const prevPagehandler = () => {
    let temp = totalData;
    if (page == 1) {
      temp = temp.splice(0, 10);
    } else {
      temp = temp.slice((page - 10) * 10, (page - 1) * 10 + 10);
    }
    setPerData(temp);
    setPage(page - 1);
  };
  return (
    <div className="text-center">
      <h2>Total Patients Admitted {totalPatient}</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">date</th>
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
                  <th scope="row">{ele.patientId}</th>
                  <td scope="row">{ele.reportedOn}</td>
                  <td scope="row">{ele.ageEstimate}</td>
                  <td scope="row">{ele.gender}</td>
                  <td scope="row">{ele.city}</td>
                  <td scope="row">{ele.state}</td>
                  <td scope="row">{ele.status}</td>
                  <td scope="row">
                    <a target="_blank" href={ele.sources}>
                      source
                    </a>
                  </td>
                  <td scope="row">{ele.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {page > 0 ? (
        <button
          className="badge m-4 badge-pill badge-danger"
          onClick={prevPagehandler}
        >
          Prev
        </button>
      ) : null}
      {perData.length > 0 ? (
        <button
          className="badge m-4 badge-pill badge-danger"
          onClick={nextPageHandler}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Patient;
