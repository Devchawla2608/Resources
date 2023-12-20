// ! How to Replace Within An index
// To Replace We will use put request with changed data . It is same as putting new document in index 

PUT /ecommerce/product/1001
{
    "name":"Zend FrameWork",
    "price":40.00,
    "description":"Learn Zend Framework",
    "status","active",
    "quantity":1,
    "categories":[
        {"name":"Software"}
    ],
    "tags":["zend Framework" , "zf2" , "php" , "programming"]
}

// We put the document with same id means we want to replace the existing document. If the document with id is not present it will just add new document

