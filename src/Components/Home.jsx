import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [page, setPage] = useState(0);
  const [summary, setSummary] = useState({});
  useEffect(() => {
    axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(res => {
      setSummary(res.data.data.summary);
      setData(res.data.data.regional);
      let temp = res.data.data.regional;
      temp = temp.slice(0, 10);
      setPerPage(temp);
    });
  }, []);

  return (
    <div className="text-center container">
      <h2>Home Page</h2>
      <h4>Covid 19</h4>
      <p>{`The Total cases as of now is ${summary.total} and confirmed cases are ${summary.confirmedCasesIndian}
      foreign cases are ${summary.confirmedCasesForeign} discharged ${summary.discharged} and death is ${summary.deaths}
      `}</p>
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
                <li className="list-group-item">discharged {ele.deaths}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
}

export default Home;
