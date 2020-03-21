import Form from 'react-bootstrap/Form';
import { Row, Col, Grid } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// const UserInfo = [
//     {link: "/", name: "Program"},
//     {link: "/info", name: "Info"},
//     {link: "/booking", name: "Booking"},
//     {link: "/FAQ", name: "FAQ"},
//     {link: "/contact", name: "Contact"},
//   ]

//   const UILink = ({link, name}) => 
//     <LI_list>
//       <Alink to={link} onClick={this.toggleExpandedMenu}> {name} </Alink> <Span />
//     </LI_list>

//   const UILinkContainer = () => routes.map(UILink)

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '',
            phone_number: '',
            company_name: '',
            effective_date: 'string',
            status: 'pending',
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
            <div>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name"  name="first_name" onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Last name" name="last_name" onChange={this.onChange} />
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email_address" onChange={this.onChange}/>
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
{/* 
                    <Form.Group controlId="formGridCompanyName">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group> */}
{/* 
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row> */}

                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        label="primary_al" 
                        name="primary_al" 
                        checked={this.state.primary_al}
                        onChange={this.onChange}
                         />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="primary_gl" 
                        name="primary_gl" 
                        checked={this.state.primary_gl}
                        onChange={this.onChange}
                         />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="primary_el" 
                        name="primary_el" 
                        checked={this.state.primary_el}
                        onChange={this.onChange}
                         />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UserForm;