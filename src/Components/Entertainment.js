
import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function Entertainment() {

  const linkStyle = {
    textDecoration: 'none', // Remove underlines from links
    color: 'gray', // Change the text color
    fontWeight: 'bold', // Apply bold font-weight
    margin: "10px",
  };

      const [mydata, setData] = useState([]);
    const fetapi =() =>{
      fetch('https://inshorts.me/news/topics/entertainment')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.articles)
        // console.log( setData(json.data))
      }
      );
    };
    useEffect(()=>{
      fetapi();
      const interval = setInterval(()=>{
        fetapi();
      },500000)
      return ()=> clearInterval(interval);
    },[]);
      return (
      <>
      <Container fluid>
     
        
        <Row xs={1} md={3} className="g-4">{
           mydata.map((value) =>{
            return(
              <>
              <Col className="container-fluid mt-4">
            <Card >
            <Card.Img variant="top" src={value.imageUrl}  style={{width:'auto',height:'250px'}} />
        <Card.Body>
          <Card.Title>{value.title}</Card.Title>
          <Card.Text style={{height:'180px'}}>
            {value.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><Link to={value.sourceUrl}  style={linkStyle}>Read more</Link></small>
        </Card.Footer>
            </Card>
            </Col>
              </>
            )
          })
        }
        </Row>
      </Container>
      </>  
    );
}

export default Entertainment

