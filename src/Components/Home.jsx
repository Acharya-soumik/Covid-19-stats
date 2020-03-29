import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [page, setPage] = useState(0);
  const [summary, setSummary] = useState({});
  const [test, setTest] = useState({});
  useEffect(() => {
    axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(res => {
      setSummary(res.data.data.summary);
      setData(res.data.data.regional);
      let temp = res.data.data.regional;
      temp = temp.slice(0, 5);
      setPerPage(temp);
    });
  }, []);

  const nextPageHandler = () => {
    let temp = data;
    temp = temp.slice((page + 1) * 5, (page + 1) * 5 + 5);
    setPerPage(temp, page);
    setPage(page + 1);
  };
  const prevPagehandler = () => {
    let temp = data;
    if (page == 1) {
      temp = temp.splice(0, 5);
    } else {
      temp = temp.slice((page - 1) * 5, (page - 1) * 5 + 5);
    }
    setPerPage(temp);
    setPage(page - 1);
  };

  return (
    <div className="text-center container">
      <h2>Home Page</h2>
      <h4>Covid 19</h4>
      <p>{` Day is ${Date(Date.now())} The Total cases as of now is ${
        summary.total
      } and confirmed cases are ${summary.confirmedCasesIndian}
      foreign cases are ${summary.confirmedCasesForeign} discharged ${
        summary.discharged
      } and death is ${summary.deaths}`}</p>
      <div className="row col-md-10">
        {perPage.map((ele, idx) => {
          return (
            <div key={idx} className="card col-md-3 m-4">
              <div className="card-header"> {ele.loc}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  confirmed indian cases {ele.confirmedCasesIndian}
                </li>
                <li className="list-group-item">
                  confirmed foreign cases {ele.confirmedCasesForeign}
                </li>
                <li className="list-group-item">discharged {ele.discharged}</li>
                <li className="list-group-item">deaths {ele.deaths}</li>
              </ul>
            </div>
          );
        })}
      </div>
      {page > 0 ? <button onClick={prevPagehandler}>Prev</button> : null}
      {perPage.length > 0 ? (
        <button onClick={nextPageHandler}>Next</button>
      ) : null}
    </div>
  );
}

export default Home;
