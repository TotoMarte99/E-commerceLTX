import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";


function Item(props) {
  function prueba(){
    alert('hola')
  }

  return (
    <div className="bg-color text-center">
      <div className="container-watches">
        <Card className="cards">
          <Card.Img onClick={prueba} className="img-class" variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
            <ItemCount stock={props.stock} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Item;
