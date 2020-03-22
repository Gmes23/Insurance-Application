import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';

import Layout from '../components/Layout';


export class UserService {

    getAllUsers() {
        return fetch('http://localhost:4000/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => data);
        // .then((data) => {console.log(data)});
    }
}

class DataTableEditDemo2 extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };

        this.clonedUsers = {};
        this.userservice = new UserService();

        this.editorForRowEditing = this.editorForRowEditing.bind(this);
        this.onRowEditorValidator = this.onRowEditorValidator.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);

        //  Delete Method 
        this.actionTemplate = this.actionTemplate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        // Checks if what type of Liability User has
        this.checkPrimaryAL = this.checkPrimaryAL.bind(this);
        this.checkPrimaryEL = this.checkPrimaryEL.bind(this);
        this.checkPrimaryGL = this.checkPrimaryGL.bind(this);

    }

    componentDidMount() {
        this.userservice.getAllUsers().then(data => this.setState({ user: data }));
    }



    /* Row Editing */
    onEditorValueChangeForRowEditing(props, value) {
        let updatedUsers = [...props.value];
        updatedUsers[props.rowIndex][props.field] = value;
        this.setState({ users: updatedUsers });
    }

    editorForRowEditing(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChangeForRowEditing(props, e.target.value)} />;
    }

    onRowEditorValidator(rowData) {
        console.log(rowData, 'rowdataonroweditovalidto')
        let value = rowData['first_name'];
        return value.length > 0;
    }

    onRowEditInit(event) {
        this.clonedUsers[event.data.vin] = { ...event.data };
    }

    onRowEditSave(event) {
        if (this.onRowEditorValidator(event.data)) {
            console.log(event.data.id, ' this event data ')
            delete this.clonedUsers[event.data.vin];
            fetch('http://localhost:4000/user/' + event.data.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event.data)
            })
                .then(response => response.json())
                .then(data => this.setState({ users: data }));
            this.growl.show({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
        }
        else {
            this.growl.show({ severity: 'error', summary: 'Error', detail: 'Brand is required' });
        }
    }

    onRowEditCancel(event) {
        let users = [...this.state.users];
        users[event.index] = this.clonedUsers[event.data.vin];
        delete this.clonedUsers[event.data.vin];
        this.setState({
            users: users
        })
    }

    // These handle the Delete method 
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
        </div>;
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


    //  Ternary function for liabilities
    checkPrimaryAL(rowData, column) {
        console.log(rowData.primary_al, 'rowDAtaeqweq')
        return rowData.primary_al ? (<i className="pi pi-check" style={{ 'fontSize': '3em', 'color': 'green' }}></i>) : (<i className="pi pi-times" style={{ 'fontSize': '3em', 'color': 'crimson' }}></i>)
    }

    checkPrimaryEL(rowData, column) {
        return rowData.primary_el ? (<i className="pi pi-check" style={{ 'fontSize': '3em', 'color': 'green' }}></i>) : (<i className="pi pi-times" style={{ 'fontSize': '3em', 'color': 'crimson' }}></i>)

    }

    checkPrimaryGL(rowData, column) {
        return rowData.primary_gl ? (<i className="pi pi-check" style={{ 'fontSize': '3em', 'color': 'green' }}></i>) : (<i className="pi pi-times" style={{ 'fontSize': '3em', 'color': 'crimson' }}></i>)

    }

    render() {
        console.log(this.state, 'this state')
        return (
            <Layout>

                <div>
                    <div className="content-section introduction">
                        <div className="feature-intro">
                            <h1>DataTable - Edit</h1>
                            <p>User Data</p>
                        </div>
                    </div>

                    <div className="content-section implementation">
                        <Growl ref={(el) => this.growl = el} />

                        <h3>Applicant Table</h3>
                        <DataTable value={this.state.user} editMode="row" rowEditorValidator={this.onRowEditorValidator} onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}>
                            {/* <Column field="first_name" header="Vin" style={{height: '3.5em'}}/> */}
                            <Column field="first_name" header="First Name" editor={(props) => this.editorForRowEditing(props, 'first_name')} style={{ height: '3.5em' }} />
                            <Column field="last_name" header="Last Name" editor={(props) => this.editorForRowEditing(props, 'last_name')} style={{ height: '3.5em' }} />
                            <Column field="email_address" header="Email Address" editor={(props) => this.editorForRowEditing(props, 'email_address')} style={{ height: '3.5em' }} />
                            <Column field="phone_number" header="Phone Number" editor={(props) => this.editorForRowEditing(props, 'phone_number')} style={{ height: '3.5em' }} />
                            <Column field="effective_date" header="Effective Date" editor={(props) => this.editorForRowEditing(props, 'effective_date')} style={{ height: '3.5em' }} />
                            <Column field="status" header="Status" editor={(props) => this.editorForRowEditing(props, 'status')} style={{ height: '3.5em' }} />
                            <Column field="primary_al" header="Auto Liability" body={this.checkPrimaryAL} editor={(props) => this.editorForRowEditing(props, 'primary_al')} style={{ height: '3.5em' }} />
                            <Column field="primary_gl" header="General Liability" body={this.checkPrimaryEL} editor={(props) => this.editorForRowEditing(props, 'primary_gl')} style={{ height: '3.5em' }} />
                            <Column field="primary_el" header="Primary Liability" body={this.checkPrimaryGL} editor={(props) => this.editorForRowEditing(props, 'primary_el')} style={{ height: '3.5em' }} />
                            <Column header="Delete Applicant" body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />

                            <Column header="Edit" rowEditor={true} style={{ 'width': '70px', 'textAlign': 'center' }}></Column>
                        </DataTable>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default DataTableEditDemo2;