// ! Adding Documents into index 
// When we are adding document into index . It is optional to provide an ID to document. If we do not pass id . It will generate a random ID
// In this case we should use POST instead of PUT

// Req /IndexName/DocumentName/DocumentId

PUT /ecommerce/product/1001
{
    "name":"Zend FrameWork",
    "price":30.00,
    "description":"Learn Zend Framework",
    "status","active",
    "quantity":1,
    "categories":[
        {"name":"Software"}
    ],
    "tags":["zend Framework" , "zf2" , "php" , "programming"]
}
// In mapping we mapped this as an string but elastic search will take it as array

// To confirm