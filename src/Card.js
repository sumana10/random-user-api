import React from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"


export default function MyCard({details, fetchDetails}) {
  return (
    <>
    <Card>
    <CardBody className="text-center">
      <img height="150" width="150" src={details.picture?.large} alt="user-image" className="rounded-circle img-thumbnail border-info" />
      <CardTitle className="text-primary">
        <h3>
          <span className="pe-2">{details.name?.title}</span>
          <span className="pe-2">{details.name?.first}</span>
          <span className="pe-2">{details.name?.last}</span>
        </h3>
      </CardTitle>
      <CardText>
          <p>
          <FaMapMarkedAlt/>
          {details.location?.city}
          </p>
          <p>
          <FaPhone/>
          {details.phone}
          </p>
          <p className="h6">
          <FaEnvelope/>
          {details.email}
          </p>
          
      </CardText>
    </CardBody>
    </Card>
    <button className="myButton" onClick={()=>{fetchDetails()}}> Get Random User </button>
   </>
  )
}
