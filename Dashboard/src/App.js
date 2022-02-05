import './App.css';
import "./Fontawesomeicons"
import pic_10 from './assets/10.png';
import { Navbar, Card } from 'react-bootstrap';
import Dashboard from './pages/Dashboard';
import CalendarData from './pages/CalendarData';
import Message from './pages/Messages';
import Payments from './pages/Payments'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const SidebarLink = styled(Link)`
display: flex;
color: #52575D;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
	background: '#EAF2FF';
	border: 4px solid ##508FF4;
	cursor: pointer;
}
`;

  const SidebarLabel = styled.span`
margin-left: 16px;
`;



  const sideBarData = [
    {
      id: 0,
      to: "/dashboard",
      icon: "th-large",
      title: "Dashboard"
    },
    {
      id: 1,
      to: "/",
      icon: "project-diagram",
      title: "Tradeview"
    },
    {
      id: 2,
      to: "/",
      icon: "folder",
      title: "File Manager"
    },
    {
      id: 3,
      to: "/",
      icon: "chart-pie",
      title: "Traffic Analyzer"
    },
    {
      id: 4,
      to: "/",
      icon: "users",
      title: "Users Manager"
    },
    {
      id: 5,
      to: "/calendar",
      icon: "calendar-alt",
      title: "Calendar"
    }, {
      id: 6,
      to: "/messages",
      icon: "comments",
      title: "Messages"
    }, {
      id: 7,
      to: "/payments",
      icon: "credit-card",
      title: "Payments"
    }
  ]
  return (
    <div className="App">
      <Navbar style={{ height: "5vh" }}>
        <Navbar.Brand href="#home" className='nav'>miro</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='icon'><FontAwesomeIcon icon="search" style={{ width: "23px" }} /></span>
            <span className='icon'><FontAwesomeIcon icon="bell" style={{ width: "23px" }} /></span>
            <span className='icon'><FontAwesomeIcon icon="user" style={{ width: "23px" }} /></span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <div className='d-grid' style={{ height: "90vh" }}>
          <div className='row' >
            <div className='col-sm-3' style={{ height: "80vh" }} >
              <Card className=" card text-left" style={{ height: "80vh" }} >
                <Card.Header><img src={pic_10} alt="pic_10"></img><b>Albert Pollock</b></Card.Header>
                <Card.Body>
                  {
                    sideBarData.map((sideNavItem) =>
                      <SidebarLink to={sideNavItem.to}><SidebarLabel><FontAwesomeIcon icon={sideNavItem.icon} className='iconChange' />{sideNavItem.title}</SidebarLabel></SidebarLink>
                    )
                  }
                </Card.Body>
                <Card.Footer className="text-center"><FontAwesomeIcon icon="sign-out-alt" className='iconChange' />logout</Card.Footer>
              </Card>
            </div>
            <div id="right" className="col-sm-9" style={{height: '80vh' }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarData />} />
                <Route path="/messages" element={<Message />} />
                <Route path="/payments" element={<Payments />} />
              </Routes>
            </div>

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
