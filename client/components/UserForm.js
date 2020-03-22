import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Grid } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '',
            phone_number: '',
            company_name: '',
            effective_date: '',
            status: 'PENDING',
            primary_al: false,
            primary_gl: false,
            primary_el: false,
            isDeleted: false
        }
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }


    onChange(e) {
        const booleanTargetNames = ["primary_al", "primary_gl", "primary_el"];
        const target = e.target;
        // If this a boolean target (checkbox toggle) return it's "checked" property
        // Else it's a regular input so we should read the "value" property
        const value = booleanTargetNames.includes(target.name)
            ? target.checked
            : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state, 'state of user form');
    }


    handleFormSubmit(e) {
        e.preventDefault();
        // This uses RegExr to get the current date 
        let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this.setState({ 
            effective_date: today,
            status: 'SUBMITTED'
        })
        const data = this.state;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:4000/user', requestOptions)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('succes', response));

        console.log(data, "handleFormSubmit")
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="First Name" name="first_name" onChange={this.onChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="lastName" placeholder="Last name" name="last_name" onChange={this.onChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email_address" onChange={this.onChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="phone_number"
                                        placeholder="Phone number"
                                        name="phone_number"
                                        onChange={this.onChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    placeholder="Company Name"
                                    name="company_name"
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Auto Liability"
                                    name="primary_al"
                                    checked={this.state.primary_al}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="General Liability"
                                    name="primary_gl"
                                    checked={this.state.primary_gl}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Employee Liability"
                                    name="primary_el"
                                    checked={this.state.primary_el}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserForm;