// How to proform these operations in batches

We will use _ 
// Using patches or batches we very efficient which reduce the network overhead 

// When doing 20 operation it does in one operation

// _bulkyapiexpects a single line with the action ie create , delete update as well as metadata followed by an optional line for source of the action. Source line is optional because it is not needed for delete . This can be repeated as many time as you want

// _bulkapi uses new lines that is blackslashn to infer the semantics of a given line so JSON can not be pretify and spreaded to multiple line and the last character will be end with \n 

// Bulk Adding

POST /ecommerce/product/_bulk

{" index": {"_id": "1002" }} //Product One
{"name": "Why Elasticsearch is Awesome", "price": "50.00", "description": "This book is all about Elasticsearch!", "status": "active", "quantity" : 12, "categories" : [{"name"
: "Software"}], "tags": ["elasticsearch", "programming"]}

{"index": {"._id": "1003"}} // Product Two
{"name": "Peanuts", "price" : "3.00", "description": "Peanuts with salt."
, "status":"active", "quantity" :56, "categories": [{" name" : "Food"}], "tags" : ['"snacks"]}


// Delete and Update

POST /ecommerce/product/_bulk

{"delete":{"_id":"1"}}
{"update":{"_id":"1002"}}
{"doc":{"quantity":11}}

// No use of index name and type name
POST /ecommerce/product/_bulk
POST /ecommerce/_bulk
POST /_bulk

// Not specify name of index and type but we will specify the _index and _type property

POST /_bulk
{"update":{"_index":"ecommerce", "_type":"product" , "_id":"1002"}}

// All of the action in bulk request will run sequencially . If one the action fail then other will run not stop and the result of an bulk request contains the response of all the actions sequencially