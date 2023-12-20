// ! How to Create Index
// This command will translated into an HTTP request which use http web put .
// We have to use full url not relative url when we are connecting to curl or elastic search

// curl -XPUT "https://localhost:9200/ecommerence" -d{}'

PUT /ecommerce
{ }

// ! Information about cluster
// _cat's Api 
// Using this command we can find many information about our cluster in human readable format not in json

// Indeces

GET /_cat/indices?v // -  It will show alot of information about all the indexes in our cluster

// Information - No of primary charts , replicas , documents , deleted documents .

// Yellow - Some replica is not allocated reason elastic search created one replica for the indexes but because if there is an single node so we can not create replica becuase there is only one node but if we take two nodes then second node will contain the replica of the first node

// ! Delete Index
DELETE /ecommerce // - Index will delete 

// ! How to find details about all the indices
GET /_cat/indices?v 

// ! Adding Mapping in ecommerce 
// ? We can not apply the new mapping to existing data so if we have a index with data so we have to delete that to make new index with new mapping

PUT /ecommerce
{
    "mappings":{
        "product":{
            "properties":{
                "name":{
                    "type":"string"
                },
                "price":{
                    "type":"double"
                },
                "description":{
                    "type":"string"
                },
                "status":{
                    "type":"string"
                },
                "quantity":{
                    "type":"integer"
                },
                "categories":{
                    "type" :"nested"
                    "properties":{
                        "name":{
                            "type":"string"
                        }
                    }
                },
                "tags":{
                    "type":"string"
                }
            }
        }
    }
}
// Elastic search does not have array type
// This is how we create a index with mapping . In this index we generally store docuements and now we just mapped those documents