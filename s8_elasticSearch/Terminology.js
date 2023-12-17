hello and welcome to this lecture where
I will be walking through the
terminology that you should be familiar
with when working with elastic search
first I will explain what is meant by
elastic search being a near real-time
search engine something that I briefly
mentioned in the previous lecture what
this means is that at the time one makes
the change to an index this change is
propagated throughout the elastic search
cluster within one second this is unlike
relational database systems that are
hosted on a single machine where changes
become instantly available this slight
delay is due to elastic searches
distributed architecture which makes the
search engine so scalable in fact for
large clusters a delay of one second is
really impressive now I will explain
what an elastic search cluster is a
cluster is a collection of one or more
notes or servers a cluster can consist
of as many notes as you want making it
extremely scalable the collection of
notes contain all of the data in the
cluster and the cluster provide
indexing and search capability across
all of the notes in practice this means
that when performing searches you don't
need to worry about which particular
note a given document is stored on
clusters are identified by a unique name
 
which defaults to elasticsearch I
 
briefly touched the concept of nodes on
 
the previous slide but let me elaborate
 
a bit a note is a single server that
 
stores searchable data and is part of a
 
cluster if a cluster only contains one
 
node then this node stores all of the
 
data otherwise a node contains a subset
 
of a cluster of data nodes participates
 
in the clusters indexing and search
 
capabilities meaning that when
 
operations are performed on the cluster
 
nodes collaborate on completing requests
 
just as well that Laster notes are also
 
identified by names the default being a
 
random Marvel character by default a
 
node will join a cluster named
 
elasticsearch unless configured
 
otherwise starting a single node on a
 
network will create a single node
 
cluster named elasticsearch by default
 
another key concept in elasticsearch is
 
an index an index is a collection of
 
documents which could be a product and
 
order or something like that these
 
examples would be a type within an index
 
I will explain what the type is in just
 
a moment the easiest way to understand
 
what an index is is to think of it like
 
a database within a relational database
 
system this might not always be true
 
because it depends on how you design
 
your cluster but it's a good starting
 
point nevertheless and will hold true
 
for most use cases indexes are also
 
identified by names that you choose and
 
these names must be lowercased the names
 
are used when indexing searching
 
updating and deleting documents within
 
indexes you can define as many indexes
 
as you want within the cluster depending
 
on the scale of your
 
but most people will have one or just a
 
few within an index are types of
 
documents a type represents a class or
 
category of similar documents which
 
could be a product or user a type
 
consists of a name and a mapping where
 
the mapping does not need to be
 
explicitly defined you can finger for
 
type being equivalent to a table with in
 
a relational database such as MySQL and
 
index can have one or more types and
 
each can have its own mapping which I
 
will discuss on the next slide because
 
leucine which elasticsearch is built on
 
has no concept of document types this is
stored within an underscore type field
what happens internally is that when
 
searching for a specific type of
 
document elasticsearch applies a filter
 
on this field a document type has a
 
mapping that is similar to the schema of
 
a table in a relational database
 
it describes the fields that a document
 
of a given type may have along with the
 
data types such as string integer date
 
etc also included is information on how
 
fields should be indexed and how this
 
should be stored by Lucene thanks to
 
dynamic mapping is optional so define a
 
mapping before adding documents to an
 
index if no mapping is defined it will
 
be inferred automatically when a
 
document is added based on its data the
 
next concept that I will explain is a
 
document a document is a basic unit of
 
information that can be indexed it
 
consists of fields which are key value
 
pairs where a value can be of various
 
types such as strings dates objects etc
 
a document corresponds to an object in
 
an object-oriented programming language
 
and a document type corresponds to a
 
class an example of a document could be
 
a single user or product documents are
 
expressed as JSON objects and you can
 
store as many documents within an index
 
as you want now that I have worked
 
through a few concepts let me complete
 
the analogy to relational databases
 
where an index corresponds to a database
 
and the type corresponds to a table a
 
document can be fall off as being the
 
equivalent of a row in a database table
 
the fields of a document correspond to
 
columns and the mapping corresponds to
 
the schema for a table I will now

discuss a term called charts which is
 
also a term that exists within
 
relational databases for instance
 
perhaps you have heard of the concept of
 
shouting a database but don't worry if
 
you haven't an index can be divided into
 
multiple pieces and each piece is called
 
as chart this is useful if an index
 
contains more data than the hardware of
 
a node can store an example could be
 
that an index contains 1 terabyte of

data but the note has a harddrive of
only 500 gigabytes as shard can then be
 
created and stored on another node which
 
has enough space for it
 
as chart is a fully functional and
 
independent index and can be stored on
 
any note within that lustre the number
 
of charts can be specified when creating
 
an index by the defaults to five shards
 
allow to scale horizontally by content
 
volume
 
ie index space also sharing allows to
 
distribute and parallelize operations
 
across charts which increases the
 
performance of a cluster while shards
 
improve the scalability and the content
 
volume for indexes replicas ensure high
 
availability a replica is a copy of a
 
shard which can take over in case a
 
shard or node fails a replica never
 
resides on the same note as the original

chart meaning that if a given node fails
    
the replicas will be available on

another node

replicas also allows for scaling search

volume because replicas can handle

search queries by default elasticsearch

adds 5 primary shards and one replica for

each index meaning that unless

configured otherwise there will be one

replica for each primary shard which is

 in total this was a walkthrough of the

 terminology that you will see

 working with lassic search thank

 for watching and see you in the .
lecture