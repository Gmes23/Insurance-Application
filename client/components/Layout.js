import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";
import { Container, Row, Col } from 'react-bootstrap';

const formStyle ={
    padding: '15%'
}

const Layout = props => (
    <div>
        <Head>
            <title> Commercial Auto Insurance</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="../static/public/css/primereact/resources/themes/nova-light/theme.css"/>
            <link rel="stylesheet" href="../static/public/css/primereact/resources/primereact.min.css"/>
            <link rel="stylesheet" href="../static/public/css/primeicons/primeicons.css"/>

        </Head>
        {/* <Header /> */}
        <NavBar />

        <Container fluid="md">
        <Row>
            <Col>
                <div>{props.children}</div>
            </Col>
        </Row>
        </Container>
    </div>
);

export default Layout;