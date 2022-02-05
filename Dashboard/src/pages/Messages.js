import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic_1 from '../assets/1.png';
import pic_2 from '../assets/2.png';
import pic_3 from '../assets/3.png';
import pic_4 from '../assets/4.png';
import pic_5 from '../assets/5.png';
import pic_6 from '../assets/6.png';
import pic_7 from '../assets/7.png';
import pic_8 from '../assets/8.png';
import pic_9 from '../assets/9.png';
import pic_10 from '../assets/10.png';
import { Card } from "react-bootstrap";


function Message() {
    return (
        <div className="row" style={{ height: "80vh" }} >
            <div className="col-sm-4" >
                <Card style={{ height: "80vh" }}>
                    <Card.Header style={{ textAlign: "left" }}><FontAwesomeIcon icon="search" />Find contact</Card.Header>
                    <Card.Body>
                        <table style={{ textAlign: "left" }}>
                            <tr>
                                <td><img src={pic_1} alt="pic_1"></img></td>
                                <td className="content1">Francesca Metts<span className="badge bg-secondary rounded-pill num">3</span></td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_2} alt="pic_2"></img></td>
                                <td className="content1">Malcolm Quaday<span className="badge bg-secondary rounded-pill num">5</span></td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_3} alt="pic_3"></img></td>
                                <td>Lindsey Rivard</td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_4} alt="pic_4"></img></td>
                                <td className="content">Elizabeth Hurton<span className="badge bg-secondary rounded-pill num">1</span></td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_5} alt="pic_5"></img></td>
                                <td className="content">Albert Pollock</td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_6} alt="pic_6"></img></td>
                                <td className="content">Francesca Metts<span className="badge bg-secondary rounded-pill num">2</span></td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_7} alt="pic_7"></img></td>
                                <td className="content">Malcolm Quaday</td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_8} alt="pic_8"></img></td>
                                <td className="content">Lindsey Rivard</td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_9} alt="pic_9"></img></td>
                                <td className="content">Elizabeth Hurton</td>
                            </tr><br />
                            <tr>
                                <td><img src={pic_10} alt="pic_10"></img></td>
                                <td className="content">Albert Pollock</td>
                            </tr><br />
                        </table>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-8" >
                <Card style={{ height: "80vh" }}>
                    <Card.Body>
                        <table className="table" responsive="sm">
                            <tbody>
                                <tr className="pic1 ">
                                    <img src={pic_1} alt="pic_1"></img><span>FRANCESCA METTS</span><span className="order"><i>10.24</i></span>
                                </tr>
                                <tr className="pic1 ">
                                    <p className="color1">it is a long established fact that a reader will be distracted</p>
                                </tr>
                                <tr className="pic2">
                                    <span>Albert Pollock </span><span className="order"><i>7 minutes ago</i></span><img src={pic_10} alt="pic_10"></img>
                                </tr>
                                <tr className="pic1">
                                    <p className="color2">The point of using Lorem Ipsum is that it has a more-or-less</p>
                                </tr>
                                <tr className="pic1">
                                    <img src={pic_1} alt="pic_1"></img><span>FRANCESCA METTS</span><span className="order"><i>10.24</i></span>
                                </tr>
                                <tr className="pic1">
                                    <p className="color1">Content here, content here', making it look like readable</p>
                                </tr>
                                <tr className="pic2">
                                    <span>Albert Pollock </span><span className="order"><i>7 minutes ago</i></span><img src={pic_10} alt="pic_10"></img>
                                </tr>
                                <tr className="pic1">
                                    <p className=" color2">Anyone have vista and can tell me where the chat.log file is located?</p>
                                </tr>
                                <tr className="pic1">
                                    <img src={pic_1} alt="pic_1"></img><span>FRANCESCA METTS</span><span className="order"><i>10.24</i></span>
                                </tr>
                                <tr className="pic1">
                                    <p className=" color1">Various versions have evolved over the years</p>
                                </tr>
                                <tr>
                                    <i className="unread">UNREAD</i><hr className="line"></hr>
                                </tr>
                                <tr className="pic1">
                                    <img src={pic_1} alt="pic_1"></img><span>FRANCESCA METTS</span><span className="order"><i>10.24</i></span>
                                </tr>
                                <tr className="pic1">
                                    <p className="color1">It is a long established fact that a reader will be distracted by</p>
                                    <p className="color1">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                    <Card.Footer><div ><input type="text" style={{ width: '45vw' }} placeholder="Start typing here................." /></div></Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Message