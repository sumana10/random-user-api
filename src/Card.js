import React from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"


export default function MyCard({details}) {
  return (
    <Card>
    <CardBody className="text-center">
      <img height="150" width="150" src={details.picture?.large} alt="user-image" className="rounded-circle img-thumbnail border-danger" />
      <CardTitle className="text-primary">
        <h1>
          <span className="pe-2">{details.name?.title }
          </span>
          <span className="pe-2">{details.name?.first}
          </span>
          <span className="pe-2">{details.name?.last}
          </span>
        </h1>
      </CardTitle>
      <CardText>
        <FaMapMarkedAlt/>
        <p>
        {details.location?.city}
        </p>
        <p>
        {details.phone}
        </p>
        <p className="h6">
        {details.email}
        </p>
        
      </CardText>

    </CardBody>
    </Card>
  )
}
