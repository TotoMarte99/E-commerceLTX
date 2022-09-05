import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import ItemBoton from "./Item"
function Item(props) {
  return (
    <div className="bg-color text-center">
      <div className="container-watches">
        <Card className="cards">
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
            <ItemCount stock={props.stock} />
            <ItemBoton/>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Item;
