import initial from './initial.png'
import './App.css';
import {useState} from 'react';
import {Row, Col, Button,Container,} from 'react-bootstrap';
import i1 from './1.png'
import i2 from './2.png'
import i3 from './3.png'
import i4 from './4.png'
import i5 from './5.png'
import i6 from './6.png'
import i7 from './7.png'
import card from './Card.png'
function App() {
   
  const [image, setImage] = useState(initial);
  const [pressed, setPressed] = useState(false);
  const [score, setScore] = useState(false);
  const alert1 = () => {
    console.log("Button Pressed");
    setTimeout(() => {
        setScore(true);
    }, 3000);
  };
const render= () => {
  if(!score){ 
  if (!pressed) {
    return <div class="pumpkin" onClick={()=>{setPressed(!pressed); alert1()}}>
      <img src={image} alt="Lights" style={{width:300,height:300}} />
    </div>
  }else{
    return <div>
      <Container>
        <Row className='justify-content-md-center'>
          <Col className='piece-up-center'  md="auto" >
              <img src={i1} alt="Lights" style={{width:110,height:110}}/>
              <h1>T</h1>
          </Col>
        </Row>
        <Row>
          <Col className='piece-up-mid-left'>
            <img src={i2} alt="Lights" style={{width:110,height:110}}/>
            <h1>E</h1>
          </Col>
          <Col className='piece-mid-center'>
            <img src={i3} alt="Lights" style={{width:110,height:110}}/>
          </Col>
          <Col className='piece-up-mid-right'>
            <img src={i4} alt="Lights" style={{width:110,height:110}}/>
         
          </Col>
        </Row>
        <Row>
          <Col className='piece-down-left'>
            <img src={i5} alt="Lights" style={{width:110,height:110}}/>
            <Row>
              <Col>
            <h1>A</h1>
            </Col>
            <Col>
            <h1>D</h1>
            </Col>
            </Row>
          </Col>
          <Col className='piece-down-center'>
            <img src={i6} alt="Lights" style={{width:110,height:110}}/>
            <h1>O</h1>
          </Col>
          <Col className='piece-down-right'> 
            <img src={i7} alt="Lights" style={{width:110,height:110}}/>
            <h1>R</h1>
          </Col>
        </Row>
      </Container>
    </div>
  }
}else{
  return <div>
    <img src={card} alt="Lights" className="card-me" style={{width:800,height:500}}/>
  </div>
}
  }
    
  

  return (
    <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
      {render()}
    </div>
  );
}

export default App;
