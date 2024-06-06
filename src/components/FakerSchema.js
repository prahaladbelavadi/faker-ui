import React from 'react'
import { faker } from '@faker-js/faker';

const FakerSchema = () => {
    return {
        label:"Company Name",
        identifier:"companyName",
        description:"",
        art: faker.company.name(),
    }
}

export default FakerSchema

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