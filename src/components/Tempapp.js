import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () =>{

    const [city,setcity]= useState(null);
    const [search,searchcity]= useState("Bhagalpur");
    useEffect ( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d46a6c20ac8bcc19a01b2b01d9cca934`;
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main);
        };
        fetchApi();
    },[search])

    return(
        <>
        <div className="container">
            <div className="box">
                <div className="inputdata">
                    <input type="search"
                    value={search}
                    className="inputField"
                    onChange={(event) =>{
                        searchcity(event.target.value)
                    }}
                    />
                </div>
                    
        {!city ? (
            <p className="errormsg">No data </p>
        ) : (
            <div>
            <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="t">
                    {city.temp} °Cel
                    </h1>
                    <h3 className="tempmin_max">Min: {city.temp_min} °Cel | Max: {city.temp_max} °Cel</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div> 
            </div>   
        )}        
               
                
            
            </div>
        </div>
        </>
    )
}
export default Tempapp;
