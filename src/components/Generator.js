import React from 'react'
import { Button } from 'primereact/button';
import { faker } from '@faker-js/faker';
// import FakerSchema, { generatorSchema } from './FakerSchema';
import Collection from './Collection';
const Generator = () => {

    return (
        <div>
            {/* <Button label="Submit" /> */}
            {JSON.stringify(users, null, 2)}
            {/* Keys:  {JSON.stringify(Object.keys(users[0]), null, 2)} */}
            Keys:  {JSON.stringify(Object.keys(generatorSchema), null, 2)}
            <Collection />

        </div>



    )
}

export default Generator

export const generatorSchema = {
    // userId: faker.string.uuid(),
    // username: faker.internet.userName(),
    // companyName: faker.company.name(),
    // birthdate: faker.date.birthdate(),
    // avatar: faker.image.avatar(),
    // password: faker.internet.password(),
    // registeredAt: faker.date.past(),
    // phone: faker.phone.number(),
    customerId: `C${faker.number.int({ min: 11111111, max: 999999999 })}`,
    customerName: faker.person.fullName(),
    phone: faker.phone.number('###-###-####'),
    email: faker.internet.email(),
    ssn: faker.number.int({ min: 100, max: 999 }) + "-" + faker.number.int({ min: 10, max: 99 }) + "-" + faker.number.int({ min: 100, max: 999 }),
    accountNumber: faker.finance.accountNumber({ length: 11 }),
    address: `${faker.location.streetAddress()} ${faker.location.city()} ${faker.location.state()} ${faker.location.zipCode()}`,
    accountType: faker.finance.accountName(),
    balance: `$${faker.string.numeric({ length: { min: 5, max: 10 } })}`,
    // openDate: `${new Date(faker.date.past()).getMonth()}/${new Date(faker.date.past()).getDate()}/${new Date(faker.date.past()).getFullYear()}`,
    openDate: `${new Date(faker.date.past()).toLocaleDateString("en-US", {
        year: "numeric", month: "2-digit",
        day: "2-digit"
    })}`,
}


export function createRandomUser() {
    
    // console.log({generatorSchema})
    return generatorSchema
    
}

export const users = faker.helpers.multiple(createRandomUser, {
    count: 5,
});

console.log(users)
