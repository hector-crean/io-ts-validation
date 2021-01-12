Data validation using io-ts from graphql endpoint.

Endpoint has been generared automatically by BaseQL from an airtable spreadsheet. The graphql schema BaseQL generated is fairly rudeimentary, as there are not that many options in airtable for specifying the tpye of data, other than 'string', 'number', etc. 

In src/types/index.ts, you will see some additional io-ts types defined, such as uuid, date, non-empty-string etc. which can be used at a later point. 
