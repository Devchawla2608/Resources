// CI/CD workflow With Github
// Actions and CI 
// Actions , CD and release management 

//  This workflow will do a clean install of
//  For more information see: https://help.g

name: Node CI

on: [push]

jobs:
    build:
        runs-on: ubuntu-latest
        strategy:
        matrix:
            node-version: [10.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node. js $1 matrix. node-version }}
    uses: actions/setup-node@v1
    with:
        node-version: ${{ matrix.node-version }}

- name: npm install, and test
run:
    npm ci
    npm run build --if-present
    nom test -- -u
env:
    CI: true
- uses: actions/upload-artifact@master
with:
    name: webpack artifacts
    path:public/

Github Actions are fully fledged cd engine 
// Few Months before cd was not good in github actions but now . Github Actions is very good in cd as well and many of enterprises are using github action for cd 

// ! Sample CD Workflow 



Environment for github actions are basically 
// a logical representation of you env the classic production 

// Dev -> Test -> Quality -> PreProduction -> Production 








this example we have a cr workflow
 
with a single job with four steps
 
you may have multiple jobs maybe for
 
testing etc but
 
all is contained within the ci context
 
right
 
in this case even though we have one one
 
single job we have a matrix as you can
 
see in blue
 
in the blue we may have multiple jobs
 
running
 
uh from from an execution point of view
 
to make sure that our application
 
works against different version of node
 
like in this case or other other
 
parameters
 
and all the actions are you know chained
 
and composed
 
separately as steps of that job this
 
example
 
is just node.js application as you can
 
see if you're familiar with node
 
just installing the dependencies running
 
the ci making sure the tests
 
are executed and uploading the
 
result as an artifact i don't remember
 
if i have a
 
slight layer about this but i want to
 
take a second here talking about
 
uploading artifacts
 
because there's uh once again one one
 
main difference
 
or one substantial difference with at
 
least some of the other
 
ci and cd systems we have on them on the
 
market
 
and it's that the built-in or the
 
building the first party action for
 
up downloading artifacts can download
 
artifacts only
 
from the current workflow and it's
 
useful to
 
you know you have a build job you have a
 
deploy job and then you consume that
 
artifact if you want to use
 
an artifact from another um workflow you
 
need to use
 
uh a community action if we analyze
 
the the actions here remember that the
 
checkout action
 
especially for ci is basically you know
 
it has to be there because you want to
 
use
 
the files on your on your repo you need
 
to download them and this is the way
 
to do so it basically just clone the
 
ripple in the current runner and let you
 
work on those files
 
the most likely for a ci setup
 
or ci workflow you want to set up your

language we have the use node.js

here that is the one i explained before

we've seen before the other one for

net core and basically um for

most languages as the slide says we have

an action that allow you to

make sure the the right version of your

framework or language is present on the

runner to be able to use it

in the subsequent steps most of the time

the language and framework
is already installed on the runner and
this action
will just pass in a very few seconds
just to make sure
it's there and possibly set some
environment variables other times
with other languages you may use the
same action and the action will
also download the you know the specific
version of that
language or framework and install it on

the on the runner

and then you have you know all the steps

you you want to use for

building your application in this case

it's just um

command line for npm as i mentioned

before

and finally usually you want to upload

the artifacts to uh to github

if you don't plan to use it as a input

for for a cd or for a deployment um it's

advisable to

uh to upload the artifacts of your build

the result of your build or yours of

your ci

into github because you will always be

able to download

those files uh it's a basically zip zip

file to to see by yourself

you know that all the files are there

and so on so forth

and once again this is done separately

with a specific action which is the

upload

artifact action is make use of the graph

provided

artifact store which is stored on the

same

infrastructure as grab itself of course

if you're using these

on a github enterprise server this

action will save it

uh inside the github enterprise server

the vm or or the machine you're using

for
for hosting that server one thing that
we
advise most of the time to use is if you
don't have any other linter and
to use the github super linter if you
don't know what a linter is is a
is a piece of code that make sure the
code you write whether it's programming
languages whether it's scripting and so
on so forth
is correct from the from some sort of
rule standpoint so there are some rules
for each specific language
and a linter make sure that those rules
are respected
by its own nature linter is normally
developed for
a single specific language there's a
linter for for javascript there's a link
there for c shards linder for java and
so on so forth
the power of github super linter is that
with only one component and with only
you know as you can see on the script on
the screen
only five lines of yaml you'll be able
to use
these on basically any code you may have
whether it's yaml arm c sharp you know
any code
whether it's scripting code or
infrastructures code even like
you know ansible or arm everything is
covered
this action of course will uh scan
the content of your repo after doing
checkout and identify the different kind
of
files you have and use the specific
linter for that
specific type of scripting language or
programming language or framework
against those files there's a ton of
customization i'm not spending time on
this right now
um go and check the the repo it's if you
haven't
used this it's one of the most powerful
tools you can use
on from the linting perspective
regardless if you want to use it to
deploy to dev to qa
test production or or whatever it's
important to know that first of all
github actions is a fully fledged cd
00:51:53.119
engine as well and until few months ago
00:51:57.119
we could have said that on the ci part
00:51:59.119
github actions was really good
00:52:01.280
on the deployment part github action was
00:52:05.119
not not so good uh or let's say it to
00:52:07.760
mature more
00:52:08.960
uh right now we can confidently say that
00:52:11.440
even for enterprise client
00:52:12.960
um we have a ton of enterprise clients
00:52:15.200
using this for deployment
this is a is a sample cd workflow
um and it's about storing sorry it's
about
um container images this is the last
step of um of a ci
job in which we just store the the image
um into packages we will talk about
packages in a moment but
just say we store the docker image
somewhere and then
we have this other job the deploy
deployed to azure job
um which once again uses the needs close
over here and this is the name of the
the previous job
we have on over here as steps that just
does
deployment to uh in this case web app
for container so we're just logging into
azure
we're logging into the docker repo and
we
deployed the container so very very
straightforward
we can do of course everything also on
other cloud providers like
aws or google cloud or you know alibaba
as we've seen before
um this is a different example though
because it's not about
docker containers normal applications if
you will and in fact
we do have the upload artifact action
here which
takes all we have in this public folder
zip it and make it available to any
other job
inside the same workflow so in the other
job the deploy job we would have this
download build artifact step which use
the download artifact
and downloads the artifact which
has the same name of the artifact we
created
and then it makes it available in this
case in this public folder