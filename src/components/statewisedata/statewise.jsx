import React, { useEffect, useState } from 'react';
import styles from './statewise.module.css'

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualStateData = await res.json();
        console.log(actualStateData.statewise);
        setData(actualStateData.statewise);
    }


    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h2 className="mb-5 text-center"><span className="font-weight-bold">India</span> Covid19 Dashboard</h2>

                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recoverd</th>
                                <th>Deceased</th>
                                <th>Migrated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curElem.state}</th>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.migratedother}</td>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Statewise;