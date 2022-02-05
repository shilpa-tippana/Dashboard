import { Card } from "react-bootstrap";
import DonutWithText from './DonutWithText';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LineGraph from "./LineGraph";
import Refferals from "./Refferals";
import Traffic from './Traffic';
import Involvement from "./Involvement";
function Dashboard() {
  return (
    <div className='display-grid'>
      <div className='row gx-1 gy-1 mb-3' >
        <div className='col-sm-8' >
        <Card  >
            <Card.Header className="text-left"><b>Sales Statistics</b></Card.Header>
            <Card.Body>
              <LineGraph />
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-4' >
        <Card style={{height:'39.5vh'}}>
            <Card.Header className="text-left"><b>Refferals</b></Card.Header>
            <Card.Body>
           < Refferals/>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='row gx-1 gy-1'>
        <div className='col-sm-4'>
          <Card  >
            <Card.Header className="text-left"><b>Traffic</b></Card.Header>
            <Card.Body style={{position: "relative"}}>
              <Traffic />
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-4' >
          <Card  >
            <Card.Header className="text-left"><b>Involvement</b></Card.Header>
            <Card.Body>
                  <Involvement />
             </Card.Body>
          </Card>
        </div>
        <div className='col-sm-4' >
          <Card  >
            <Card.Header className="text-left"><b>Traffic Sources</b></Card.Header>
            <Card.Body>
              <DonutWithText />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Dashboard; 