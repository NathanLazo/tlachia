// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        {
            name: 'users',
            title: 'Users',
            type: 'document',
            fields: [
                {
                    name: 'email',
                    title: 'User Email',
                    type: 'string',
                },
                {
                    name: 'name',
                    title: 'User Name',
                    type: 'string',
                },
                {
                    name: 'firstName',
                    title: 'First Name',
                    type: 'string',
                },
                {
                    name: 'lastName',
                    title: 'Last Name',
                    type: 'string',
                },
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                },
                {
                    name: 'state',
                    title: 'State',
                    type: 'string',
                },
                {
                    name: 'birth_date',
                    title: 'User Birth Date',
                    type: 'string',
                },
                {
                    name: 'password',
                    title: 'User Password',
                    type: 'string',
                },
            ],
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'document',
            fields: [
                {
                    name: 'projectName',
                    title: 'Project Name',
                    type: 'string',
                },
                {
                    name: 'product',
                    title: 'Product',
                    type: 'reference',
                    to: { type: 'products' },
                },
                {
                    name: 'users',
                    title: 'Users',
                    type: 'array',
                    of: [
                        {
                            type: 'reference',
                            to: [{ type: 'users' }],
                        },
                    ],
                },
            ],
        },
        {
            name: 'products',
            title: 'Products',
            type: 'document',
            fields: [
                {
                    name: 'productName',
                    title: 'Product Name',
                    type: 'string',
                },
                {
                    name: 'productImage',
                    title: 'Product Image',
                    type: 'image',
                },
            ],
        },
        {
            name: 'newsletter',
            title: 'Newsletter',
            type: 'document',
            fields: [
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                },
            ],
        },
        {
            name: 'contact_info',
            title: 'Contact user information',
            type: 'document',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                },
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                },
                {
                    name: 'phone',
                    title: 'Phone',
                    type: 'string',
                },
                {
                    name: 'message',
                    title: 'Message',
                    type: 'string',
                },
                {
                    name: 'accepted_terms',
                    title: 'Accepted terms',
                    type: 'boolean',
                },
            ],
        },
    ]),
});
