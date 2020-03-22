
# Insurance-Application

A simple insurance application for Commercial Auto that will capture First Name, Last Name, Email Address, Phone Number, Company Name, and Effective Date. Provide three check boxes for coverages such as Primary AL(Auto Liability), Primary GL(General Liability) and Primary EL(Employee Liability). The application will have an initial status of PENDING. Once it is submitted, it should have the status of SUBMITTED.


On the front end this project is using ``bootstrap``, and ``prime react`` [link](https://www.primefaces.org/primereact/#/datatable). 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

This uses Nest.js and Next.js with Postgresql as the database.
To get Postgress working npm install ``pg``, ``@nest.js/typeorm``, and ``typeorm``. Create a ormconfig.json file in the nest project folder and paste the following configs to get it working locally.

```sh
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "YOURUSERNAME",
    "password": "YOURPASSWORDCANBELEFTEMPTY",
    "database": "YOURDATABASENAME",
    "synchronize": true,
    "logging": true,
    "entities": ["dist/**/*.entity{.ts,.js}"]
}
```

## Usage

Replace the contents of `README.md` with your project's:

- Name
- Description
- Installation instructions
- Usage instructions
- Support instructions
- Contributing instructions
- Licence

Feel free to remove any sections that aren't applicable to your project.



## Licence

Free to use for anyone. [Github Flow](https://github.com/Gmes23). 