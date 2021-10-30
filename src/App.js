import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

import './App.css';
import MyCard from "./Card";


function App() {
  
  const [details, setDetails] = useState({});

  const fetchDetails = async () =>{

   // const response = await Axios.get('https://randomuser.me/api/');
   //console.log("RESPONSE:",response);

    const {data} = await Axios.get('https://randomuser.me/api/')
    console.log(data);
    const details = data.results[0];
   
    //update state
    setDetails(details);

  }
  
  //fetch data before page load
  useEffect(()=>{
    fetchDetails()
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
        <MyCard details = {details}/>
        </Col>
      </Row>
   </Container>
  );
}

export default App;
