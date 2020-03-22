import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import Layout from '../components/Layout';


class CarService {
    constructor() {
        this.car = this.car
    }

    getCarsMedium() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json);
    }

    getCarsLarge() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json);
    }
}

class DataTableTemplatingDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
        };
        this.carservice = new CarService();
        this.brandTemplate = this.brandTemplate.bind(this);
        this.colorTemplate = this.colorTemplate.bind(this);
        this.primaryEL = this.primaryEL.bind(this);

        this.actionTemplate = this.actionTemplate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(rowData, e) {
        e.preventDefault();
        const userId = rowData.id;
        fetch('http://localhost:4000/user/' + userId, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(this.setState({ users: rowData }));
    }

    handleEdit(rowData, e) {
        e.preventDefault();
        const userId = rowData.id;
        fetch('http://localhost:4000/user/' + userId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => this.setState({ users: data }));
    }

    //  Ternary function for liabilities
    colorTemplate(rowData, column) {
        console.log(rowData.primary_al, 'rowDAtaeqweq')
        return rowData.primary_al ? (<div>true</div>):( <div> false</div>)
        // return <span style={{ color: rowData['color'] }}>{rowData['color']}</span>;
    }

    primaryEL(rowData, column) {
        // var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        // return <img src={src} alt={rowData.brand} width="48px" />;
        return rowData.primary_el ? (<div>true</div>):( <div> false</div>)

    }

    brandTemplate(rowData, column) {
        // return <img src={src} alt={rowData.brand} width="48px" />;
        return rowData.primary_gl ? (<div>true</div>):( <div> false</div>)

    }

    actionTemplate(rowData, column) {
        return <div>
            <Button
                type="button"
                icon="pi pi-times"
                className="p-button-danger"
                style={{ marginRight: '.5em' }}
                onClick={(e) => this.handleDelete(rowData, e)}
            >
            </Button>
            <Button 
                type="button" 
                icon="pi pi-user-edit" 
                className="p-button-warning" 
                onClick={(e) => this.handleEdit(rowData, e)}
            ></Button>
        </div>;
    }

    componentDidMount() {
        fetch('http://localhost:4000/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => this.setState({ users: data }));
    }

    componentDidUpdate(prevProps, prevState) {
        //TODO this delete users but re renders the view infinetely
        console.log(prevState.users, 'prevState')
        // if (prevState.users !== this.state.users) {
             
        //     fetch('http://localhost:4000/user', {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' }
        //     })
        //     .then(response => response.json())
        //     .then(data => this.setState({ users: data }));
        // }
      }

    render() {
        var carCount = this.state.cars ? this.state.cars.length : 0;
        var header = <div className="p-clearfix" style={{ 'lineHeight': '1.87em' }}>List of Cars <Button icon="pi pi-refresh" style={{ 'float': 'right' }} /></div>;
        var footer = "There are " + carCount + ' cars';
        console.log(this.state.users, 'this is the state')



        return (
            <Layout>

                <div>
                    <div className="content-section introduction">
                        <div className="feature-intro">
                            <h1>Dashboard</h1>
                            <p>All users information</p>
                        </div>
                    </div>


                    <div className="content-section implementation">


                        <DataTable value={this.state.users} header={header} footer={footer}>
                            <Column field="first_name" header="First Name" />
                            {/* <InputText value={this.state.users} onChange={(e) => this.setState({value: e.target.value})} /> */}
                            <InputText value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                            <Column field="last_name" header="Last Name" />
                            <Column field="email_address" header="Email Address" />
                            <Column field="phone_number" header="Phone Number" />
                            {/* TODO: onCLick set date submit on user form */}
                            <Column field="effective_date" header="Effective Date" />
                            <Column field="primary_al" header="Auto Liability" body={this.colorTemplate} />
                            <Column field="primary_gl " header="General Liability"  body={this.brandTemplate} style={{ textAlign: 'center' }} />
                            <Column field="primary_el" header="Auto Liability" body={this.primaryEL} />
                            <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                        </DataTable>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default DataTableTemplatingDemo;