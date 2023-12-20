// Open source search server based on Apache Lucene
// Written in Java
// Cross-platform
// Big focus on scalability - distributed from the ground up
// Designed to take data from any source, analyze it and search through it

// It uses lucine as core search engine and provides more functioncallity which are not present in lucine 
Usage

// ELASTICSEARCH
// Communication with the search server is done through a HTTP REST API

// ! Syntax
// curl-X<REST Verb> <Node>:<Port>/<Index>/<Type>/<ID>
//  E.g. curl -X GET http://localhost:9200/person/employee/123

// documents stored in elastic search in Schema-less JSON documents (like NoSQL databases)®

// It means we dont have to define the syntax or feilds or data types before adding data like relational data bases .It is open source but created by elastic search pv which is company that provides commercial solutions related to search engine
// Elasticsearch solutions are  Near real-time search .It we update data then changes will shown in all the cluster 
// It has distributed databases 

// It is easy to compared to its competitive like apache solr becuases of comprehensive features and it scales very well due to distributed system 

// Users of Elastic search 
// 1. Wikimedia 
// 2. stumbleUpon
// 3. Mozilla
// 4. Quora
// 5. Github
// 6. Netflix

// ? Terminologies for elastic search 

// ! 1.)  Why Elastic Search is real time search engine 
// If we change data at an index that change will propagate to whole database cluster within one second. unlike relational databases becuase they are hosted on single machine where changes avaliable instantly.

// This is due to distributed system that makes it very scalble

// ! 2.) What is elastic cluster
// A cluster is collection of one or more nodes(servers)
// It consists one or more nodex, depending on the scale 
// All the data present in cluster and cluster provides search ablity and indexing across all over nodes . We don't need to think where the data is stored which document is stored where

// ! 3.) What is Node
// Node is a single server part of cluster have searchable data . 
// Node contain subset of cluster's data 
// Node participate in seach capablities and indexing when operations are done 
// Node also recognized by names
// Starting a single node on a network will by defualt create a new single-node cluster named "elastic search" by default 

// ! 4.) What is index 
// A index is collection of documents(product , account , movie)
// In simple language a index is a data base in relational database system but not always true
// Each of the above would be a type
// Each index is defined by a name and these names must be lowercased
// name used when indexing , searching , updating and deleting documents within the index
// You can define as many index in the cluster depending on the size but in most of cases on cluster have one index

// ! 5.) Type
// Type represents a class or category of similar documents which could be a product or user 
// A type consist a name and a mapping .
// Mapping does not be explicitly defined 
// A index can have one or more types and each can have its own mapping 

// ? Lucine does not have concept of document type starts with an underscore type feild 
// It helps for searching it applies filter 

// ! 6.) Mapping
// Document type has a mapping which is simillar to the schema in a table in a relational database 
// It describes the feilds that a document of a given type may have along with the data types such as string , integer  , data 
This mapping is optional . If we do not define mapping while storing data . It will automatically 