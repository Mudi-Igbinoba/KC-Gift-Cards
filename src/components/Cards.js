import React from 'react'
import {Card, Col} from 'react-bootstrap'



const Cards = ({item}) => {
  return (
    <Col>
        <Card className='h-100 bg-secondary bg-gradient shadow'>
            <Card.Header className='fw-bolder text-dark'>Gift Card {item.id}</Card.Header>
            <Card.Body>
                <Card.Text className="text-white"><strong className='text-dark'>Name:</strong> <br/>{item.title}</Card.Text>
                <Card.Text className="text-white"><strong className='text-dark'>Currencies:</strong></Card.Text>
                <div>

                  {item.currencies.map(e => (
                    <p className='bg-light bg-gradient rounded py-1'>{e}</p>
                  ))}
              
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Cards