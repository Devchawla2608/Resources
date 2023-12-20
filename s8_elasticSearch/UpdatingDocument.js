// ! How to Update the document into index
// How replace and update are different becuase in replace . We generally pass all the feilds but in update we just want to send the updated data

// ! We will use post request

POST /ecommerce/product/1001/_update
{
    "doc":{
        "price":50.00
    }
}

// _update is the end point to update the document 