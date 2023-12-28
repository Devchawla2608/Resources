
Welcome to the sessionon elastic Beanstalk

a web application hostingplatform offered by Amazon.

So without any delay,

let me give youa brief overview

of what we will bediscussing today firstly.

We will see what elasticBeanstalk exactly is,

and then we'll discuss certain.

In Salient featuresof elastic Beanstalk moving on.

We'll try to understand elasticBeanstalk a Little Deeper

by taking a lookat its components

and then atits architecture in finally,

we'll try to deploy anapplication on elastic Beanstalk

for practical understanding of the concept.

So let's get started.

// ! What is elastic Beanstalk?

If I have going to find elastic Beanstalk

and Amazon terminology,

then it is a platformas a service where you

can deploy your application,

which you might have developed

with programming languages like Java dotnet PHP node.js

and many others

on familiar servers such as Apache nginx passenger

and Tomcat the definition,

which I just mentioned seems to have a lot

of technical terms as ended.

Well, let's try to figureout what elastic Beanstalk is

and simple terms.

All right, let's say you Needto build a computer tonight.

Well, you have two waysto go at it first.

You can go to a computerWarehouse Computer Warehouse

is a place

where you have differentcomponents of computer laid out

in front of you

like you have CPU motherboards router disk drive models

and many other components you can choose

which have a component you needand assemble them

and form a brand new computer.

This is similar to situation

when you try todeploy an application

without using elastic Beanstalk

when you try to developApplication by yourself you

will have a list of taskswhich you need to do.

Like you might have to decide

on how powerful you wantyour ec2 instance to be

then you have to choosea suitable storage

and infrastructure stackfor your application.

You might have to installsubstrate surface for monitoring

and security purposes aswell moving on to option b,

you can always visitan electronic retail store

which has pre-configuredcomputers laid out

in front of you.

Let's say you area graphic designer

and you want a computer

which has a modern graphicaluser interface installed in it.

All you have to dois specify this requirement

to a salesperson and walk outwith a computer of your choice.

Well, I personallyprefer this option.

This is similar to the situationwhere you're trying

to deploy an applicationusing elastic Beanstalk

when you use elastic Beanstalkto develop your application.

All you haveto do is concentrate

on your code list of the tasks

like installing ec2 instances

auto-scaling groupsmaintaining security

and monitoring.

Etc is done byelastic Beanstalk.

That is the beautyof elastic Beanstalk.

So let's go back and take a lookat the definition again and see

if he'll understandit this time.

Well elastic Beanstalk asa platform as a service

where developers just haveto upload their application load

balancing auto-scalingan application Health monitoring

or all and it automaticallyby elastic Beanstalk.

Now, let's try to understand

how elastic Beanstalkas a platform as

a service is beneficial.

Vishal to app developer.

I'm sure most of you know,

what platform as a servicehas but let's try to refresh

what we know platform

as a service asa cloud computing service

which provides you a platform

where you can deployand host your application

elastic Beanstalkmakes the process

of app development much more fun

and less complex and Ihave five points to prove

that to you firstly itoffers quicker deployment

suppose you're developingan app by yourself.

Then you'll have to do a lotof tasks by yourself

like you might After decideon ec2 instance choose

a suitable storage

and infrastructure stock

as well as installauto-scaling groups as well.

And then you might haveto install substrate surface

for monitoring andsecurity purposes.

Well, this will takequite a lot of time but

if you have usedplatform-as-a-service to develop

your app then all you haveto do is develop a proper court

for your application rest

will be handled byplatform as a service

or elastic Beanstalkin this case,

which makes the entire process

of app developmentmuch more faster.

now secondly elastic

Beanstalk simplifies entire appdevelopment process like the set

or developers haveto do is concentrate

on developing a codefor their application rest,

like monitoring serversstorage networking Etc

and managing virtualizationoperating system databases

is done by elastic Beanstalk,

which simplifiesthe entire process

for a developer usingplatform as a service

to deploy our application makeCenter app development process

more cost-effective

if you're tryingto dip By yourself,

then you might have to installseparate surface for monitoring

and security purposesand I'm sure

for that you'll have to paya lot of money extra money.

But if you're usingan elastic Beanstalk

to deploy your application

it will provide you allthis additional software

such as a package

and you can avoid payingunnecessary operating costs

also elastic Beanstalk

offers multi-tenantarchitecture by that.

I mean, it makes it easy

for the users to sharetheir application

on different devices.

And that too with high security

when I say highsecurity platform as

a service will provideyou a detailed report

regarding your application usagedifferent people or users

who are trying to accessyour application as well.

But this informationyou can be sure

that your application isnot under any cyber threat

and finally platform

as a service provides youan option where you can know

if the user who is usingyour application is getting

a better experience out of it ornot with platform-as-a-service.

You can collect feedback

at Seven stagesof your app development

like during development stage

like testing Stageproduction stage design stage

by doing so you will havea report regarding

how your applicationis performing at every level

and you can makeimprovements if needed.

So this is how platform as

a service like a are an elasticBeanstalk makes it easy

for developers to developan all-around perfect up

guys will be ableto relate to this point

when we try to deployan application using

elastic Beanstalk in the laterpart of this session.

You'll understand.

How will a StickBeanstalk is beneficial

to app developer in Marquette.

There are quite a lotof application hosting platforms

which are providingplatform as a service.

Let's have a lookat few of that.

First.

We have somethingcalled openshift.

It is a web hosting platformoffered by Red Hat.

Then you have Google app engine

which we all know ask a lingoat is a platform as a service

where you can deploy yourapplication and just do minutes

apparently will provide youa production ready environment

where all you have to dois deploy your application code.

Then you have python anywhere.

It doesn't onlineintegrated development platform

and web hosting service as well.

But based on Python language,

then you have elastic Beanstalkoffered by Amazon moving on.

We have a sure app Servicesby Microsoft and many others.

But today our main focus will beon elastic Beanstalk,

which is a web hosting platformoffered by Amazon now

that you have basicunderstanding of elastic.

Stop, let's go ahead

and take a look at few of its features.
// ! Features 

Mostly all the featuresare similar to the ones

which we discussed earlier,

like elastic Beanstalk makesan app development process

more faster and simplerfor developer
 moreover.

All developer hasto do is concentrate

on developing code listof the configuration details

and managing and monitoring

details will be handledby elastic Beanstalk.

// 2.) elastic Beanstalkautomatically scales up

your abs resources,

which have beenassigned to your uh,

Occasion by elastic Beanstalkbased on your application

specific needs butthere is one feature

which is specificto elastic Beanstalk suppose.

You have deployed an applicationusing elastic Beanstalk,

but now you want to make changesto the configurations

which have been already assigned

to your application byelastic Beanstalk though.

Bienstock is a platformas a service.

It provides you with an option

where you can changethe pre-assigned configurations

like you do and infrastructureas a service.

Well if you remember Memberwhen if you're trying to use

infrastructure-as-a-service to deploy an application,

you will have full controlover AWS resources.

Similarly Beanstalk alsoprovides you with full control

over your AWS resources

and you can have access to the underlying resources

at any time.

Now, let's try to understand

elastic Beanstalka little deeper first.

We'll be discussing fewcomponents of elastic Beanstalk,

then we'll have a lookat its architecture.

What we have your first wehave something called

application suppose youhave decided to do a project.

So what you do you go ahead

and create a separate folderon your personal computer,

which is dedicatedto your project.

Let's say your project needsApache server SQL database

and a platformingsoftware like Eclipse.

So you installall the software's

and stole them in the folder

which is dedicatedto your project.

So that will be easy

for you to accesswhenever you need all

the software's similarly

when you try to dodeploy an application

on elastic Beanstalk Beanstalkwill create a separate folder

which is dedicatedto your application

and an aw storms.

This folder iswhat we call an application

if I have to Define folder orapplication in technical terms,

then it is a collectionof different components

like environmentsyour application versions

and environment configuration.

Let's try to understand eachof these components one by one.

We have something calledapplication version suppose you

have written a code stored.

In the file and deployedthis coat on elastic Beanstalk

and your applicationhas been successfully launched

but now you want to makecertain changes to the code.

So what you do you go ahead

and open the file makechanges to it save it

and then again deployed

on elastic Beanstalkelastic Beanstalk again,

successfully launchesyour application.

So you have two versionsof your application now,

it's just a copyof your application code,

but with different changes

and elastic Beanstalkwill provide you with an option

where you can uploaddifferent versions.

As of your application

without even deletingthe previous ones then we have

something called environmentenvironment is a place

where you actuallyrun your application

when you try to launch

and elastic Beanstalkenvironment Beanstalk starts

as ining various AWS resources,

like ec2 instancesauto-scaling groups load

balancer security groupsto your application the point

which you have to rememberis at a single point

of time environment can runonly a single version

of your application.

Elastic Beanstalk will provideyou with an option

where you can create

multiple environments foryour single application suppose.

I want and different environmentfor different stages of my app.

Like I want an environmentfor development stage

one for production stage and onefor testing stage.

I can go ahead and do

that create a differentenvironment for different stages

of my application

and suppose you have sameversion or different version

of your application installedon all these environments.

It's possible to run allthis application versions

at same time.

I hope that was clear.

Well, you'll understandthem practically when we

try to deploy an application inthe later part of the session.

Then we have somethingcalled environment Tire

when you try to launchan elastic Beanstalk environment

elastic Beanstalk asksyou to choose amount

to environment tires,

which are webserver environment.

And then you haveworker environment.

If you want your applicationto handle HTTP request,

then you chooseweb server environment.

And if you want your applicationto handle background task

that is where a work environmentcomes into picture.

Sure, which to chooseeither web server

or work environmentand how to work with them

when we'll try to deployan application in later part.

And lastly we havesomething called environment

Health based on

how your application is runningBeanstalk reports the health

of your web server environment

and it uses differentcolors to do.

So first gay indicates

that your environmentis currently being updated.

Let's say youhave installed one version

and now you're tryingto upload different version.

Well, it's taking a lot

of time so that timeit shows gray color.

It means your environment isstill under updating process.

Then you have green which means

that your environment has passedthe recent health check.

Then you have a low which means

that your environment has failedone or more checks and red

failed three or morechecks moving on.

Let's try to understand

the architecture ofelastic Beanstalk.

Like I said early onwhen you try to launch

an elastic Beanstalk environmentBeanstalk ask you to choose Was

among two different environmenttires firstly we have

web server environmentweb server environment

usually handles HTTPrequests from clients

and it has different componentsfirstly we have something

called environment.

You know, what environmentis it's a place where we

actually run your application

and Beanstalk provideyou with an option

where you can createmultiple environments and

the main point isat a point of time

this particular environmentcan run only one version

of your application movingon we have Something called

elastic load balancer.

Let's say your applicationis receiving a lot of requests.

So what elastic load balancerdoes is it distributes

all this requestamong different ec2 instances

so that all the requestsare handled and no request

is being delayed.

What actually happens is

when you launch an environmentor URL is created

and this URL in the formof C name is made to point

elastic load balancersenior is nothing

but alternate name for your url.

So when your applicationreceives requests all

these requests are forwardedto elastic load balancer

and this loadbalancer distributes.

These requests among ec2instances of Auto scaling group.

Then we have Autoscaling Group Well,

if your web server is tryingto handle a lot of traffic

and it's having a scarcityof ec2 instances,

then Auto scaling group

automatically installsfew easy to instances.

Similarly.

If traffic is very low,

then it automatically terminatesunder use ec2 instances then

we Have ec2 instance.

So whenever you tryto launch an elastic

Beanstalk environment Beanstalkwill assign your application

with a suitable ec2 instance,

but the software stack likethe operating system the servers

and different software's

which are supposedto be installed

on your instance are decided bya device called container type.

For example,

let's say my environmentas Apache Tomcat container.

So what it does it installs

Amazon Linux operatingsystem Apache web server

and Tomcat software.

Do you see two instancesimilarly depending

on your application requirementsit installs different software

stack on your ec2 instances.

Then we have a softwarecomponent called host manager

which runs on everyeasy to instance

that has been assignedto your application.

There is host managersresponsible for various tasks

firstly it will provideyour detailed report

regarding performanceof your application.

Then it providesinstant level events.

It monitors your applicationlog files as well

and it monitorsyour Datian server,

you can view allthese metrics log files

and create various alarms oncloudwatch monitoring dashboard.

Then you have securitygroups Security Group is

like a firewallto your instance.

Not anybody canaccess your instance.

It's just for security purposes.

So elastic Beanstalk hasa default Security Group,

which allows client to accessyour application using Port 80.

You can Definemore security groups

if you need and then

elastic Beanstalk alsoprovides you with an option

where you can definea security group.

All your databasefor security purposes moving on.

We have somethingcalled Walker environment.

First question that comesto our mind is what is worker.

Well suppose your web server hasreceived a request from client.

But on the way

while it's trying to process therequest it has come across tasks

which are consuminga lot of resources.

I'm taking a lot

of time because of whichit's quite possible

that your web servermight deny other request.

So what it does it forwardsthese requests to something

called Welcome these workerhandles all this stuff.

Us on behalf of web server.

So basically worker is a processthat handles background tasks

which are time intensiveand resource intensive.

And in addition.

If you want you can use walker

to send email notificationsto generate metric reports

and clean up databases

when needed let's try

to understand why we need Walkerwith the help of you skis,

so I have a client he has madea request to a web server

and the web serverhas accepted the request

and it startsprocessing the request

but While it's processingthe request it comes

across the switchare taking a lot of time.

Meanwhile, this client

has requested or sendanother request to a web server

since web server is stillprocessing the first request

it denies second request.

So what is the resultof this as the performance

and the number

of requests accepted bya web server will drastically

decrease alternatively let's saya client has made a request

and your web servers accepted it

and it starts processingthe request and again,

it comes across Stars

which are doing a lotof time this time.

What it does it transfers

or it passes all this taskto walk our environment

and this work environmentwill handle all these stars

and request oneis successfully completed.

Meanwhile, if itreceives a second request

since it has completedprocessing request one,

it will accept requests to Ihope the scenario was clear.

We'll all we are doingby installing work environment

is we are avoiding spending lotof time on single request here.

Now, you know whatweb server environment is

and work environment is and whydo we need work environment?

But there has to be some way sothat this web server environment

can pass on this taskto work environment.

Let's see how so you haveyour web server environment.

It has received a request

and while processingit as encounter tasks

which are taking a lot of time.

So what it does it creates andsqs message sqs is a simple

to service offered by Amazon

and this message is then putinto es que es que

and the differentrequests are arranged

based on priority in this qsq.

Meanwhile when you're tryingto install Walker.

Environment elasticBeanstalk has installed

something called demon.

What is demon does it pullssqs message from Askew

and then it sends the Starsto web application,

which is running

on vodka environment asa result or as a response

to spin start applicationhandles all the stars

and responds withan HTTP response option.

So this ishow the entire process

of handling tasks transferringand then handling does goes on

so you have a client he has madea request to a web server,

but the web serversencounter with tasks

which are I'm consumingand resource consuming.

So it passes thisrequest rescue is Cube.

And when you tryto install walking environment,

there's a demon which pullsout all this messages art us

from your rescue.

And then this demonsends all the stars to

our application applicationresults all the stars

and then it respondswith a HTTP response option.

So this is how your toapplication communicate I

can read was lot of 30.

Don't worry.

We have arrivedat the fun part of session

where we'll be tryingto deploy an application

using elastic Beanstalk hear you

by doing or by creating

an application onelastic Beanstalk practically,

you'll understand differentconcepts its architecture

and different environment tiresand all this.

So let's go ahead.

So this is my areaplus Management console.

And if you want to take a lookat all the services, then you

have all the services here,

but were mainlyconcerned with elastic.

Up, which have recently used.

So it shows that all recentlyused resources or Services here.

So I'm going to choosethat elastic Beanstalk and this

is my Beanstalk console.

If you're trying to deployan application for first time,

this is the page where you landwhen we scroll down it says

that I can deploy an applicationand three easy steps.

All you have to do is selecta platform of my choice then

upload our application code

if I have one or usea sample application code

and then run it.

Let's see if it'sas Easy as it says here,

so go ahead and click on createnew application option here.

It will ask you for applicationname and description.

I'm going to name my applicationas Tomcat app then description

as my new web app.

And then I'm going to clickon this create option C.

When I try tocreate an application.

It has created a separate folder

which is dedicatedto my application.

And in that folder,

we have different componentsas you can see here.

I have my environment then Ihave application versions and

if I've saved any configuration,

it will show allthe saved configurations here.

Now.

Let's go ahead

and create an environmenton the right side.

You see an actions optionand you click on

that you get different choices.

You can just selectthe create environment here.

So again, it's asking you

to choose among two differentweb environment tires.

You have web server environment

and work environmentin web server environment.

Your application handlesHTTP requests from clients.

Then you have work environment

where your applicationwill process background tasks

like time intensive

and resource consumingtask in this demo.

I'm going to work onlywith Observer environment.

You can go ahead exploreand create work environment.

Once you understand

how to deploy an applicationon elastic Beanstalk.

So I'm going to clickon the select option here.

It will take me to a It's badenough to give a domain name

or in technical terms are URLto my application.

You can give any URLof your choice and see

if it's available.

So let's say my Tom appand it see if it's available.

It says the domain name isavailable then description.

I'm going to giveit a same as before.

So my new web app then

when I scroll down it asked mefor a platform of my choice.

There are different options.

You have go then you have

dotnet Java Ruby PHPnode.js python Tomcat.

At and if you're tryingto deploy an application

on the platform,

which is not here,

you can configureyour own platform

and deploy turnelastic Beanstalk.

It provides an option here.

You can see there'sin custom platform here.

So I'm going to choose Tomcatplatform for my application.

And since I'm notany kind of developer,

I'm just going to go aheadand use the sample application

provided by Amazon.

But if you haveany application code

if you have created or developsome code you can store

that in a file and uploadyour it says you can upload

your code then you have a zip.

You need to convertyour file to zip our war file

and then upload it here.

So I'm going to justselect sample application

and then click on createan environment here.

So it's going to take awhilefor elastic Beanstalk to launch

my environment though.

It's not as much time

as it would havetaken me to develop

entire application by myself

while elastic Beanstalkis trying to launch environment.

Let's discuss some points or inthe earlier part of the session

with discuss some benefits ofelastic Beanstalk firstly I said

that it fast ins your process.

Of developing an entire.

So it's true.

Doesn't it?

All I did wasselect the platform

of my choice dress is doneby elastic Beanstalk itself.

So thereby saving a lotof time similarly it

simplifies the processof app development again.

All I did was selecta platform of my choice

like installing easyto instances security groups

Auto scaling groups

and assigning IP addresses restis done by elastic Beanstalk.

I even mentioneda point where I said

that it will provide

elastic Beanstalk provides youwith an opportunity.

And now you can changethe present configuration.

We'll explore that.

Once the environment is created.

Let's go ahead and seewhat elastic Beanstalk is doing.

It says that it has createda storage for my environment.

Well S3 bucketsolar all my files

where I have my application codeare stored there then test

created a security group

as well and elastic

IP address then it saysit's launching an ec2 instance.

So you see it's as easy as that.

All you have to do is selecta platform of your choice rest

is Founded by elasticBeanstalk and later on

if you're not satisfied.

If you want to changesome configuration,

you can go aheadand do that here.

Look at this.

This is the IP addresswhich are domain name

which are assigned to my up.

It says new instance

has been added and in additionit showing each task

while it's doingIsn't that cool?

You'll know what yourenvironment is currently doing.

So it's still taking a while.

So it says it has installed

and added instanceto my application

and my environment has been We

launched it is finishedalmost all the tasks.

It should have takento environment page now.

So this is my environment page

or you can seeour dashboard first.

You have environment healthier.

It says green.

It means that my environmenthas successfully passed

the health check thenit shows the sample version

of your application

since I've used the sampleapplication and saying

sample application here

since I've chosenTomcat as my platform.

It has installedsuitable infrastructure stacked

like Amazon Linux

and you have Java8 aiming language.

Let's go aheadand explore this page first.

We have somethingcalled configuration here.

Like I said, though,it is a platform as a service.

It provides you with an optionvalue can change configuration.

So you will have full controlof your resources first.

We have somethingcalled instances here.

When I click on modify option,

you can see

that elastic Beanstalkhas assigned micro instance

to our application

if I want I can goahead and change it

to different instance based

on my applicationrequirement scrolling down.

I have cloudwatch monitoring.

If I want detailed monitoring,then I can go for one minute

if I want basicmonitoring or not.

So detailed monitoring then Ican choose five minutes here.

Then I have an optionof resigning storage

to my application aswell at says we have

magnetic storage general purpose

and provision.

Iops as well.

When we scroll down again.

We see differentsecurity groups.

I can just click on that

and the security groupwill be added to my application.

So once you've madethe changes you can click

on apply option or do Ihaven't made any changes.

I'm just going to click here.

So now elastic Beanstalk istrying to update my environment.

So it's showing gray color here.

If you recollect a mentionedduring the earlier part

that grey indicates.

My environment is being updated.

Okay, let's go backto configurations.

We did have a look at instances.

Then you have somethingcalled capacity apparently

elastic Beanstalk is

design a single instanceto my application.

If I want I can go ahead andchange to auto-scaling groups.

You have an optioncalled load balance

so you can click on that hereand you can set the minimum

and maximum number of instancesthat your auto scaling.

Group can install as well then

if you have chosena load balancer option earlier

than a load balancewould have been enabled here.

Then we have monitoring details

which provides you withtwo options enhanced monitoring

and basic monitoring

and when we scroll downyou can see a streaming

to cloudwatch logs option here.

So if you want your log files,

you can view themon cloudwatch dashboard as well.

You can set the retention periodaccording to your choice

and suppose you want

your application forsome private purpose.

Then you can create a generatea private VPC for you.

Your application similarly,

you can add or decreasethe amount of storage as well.

So by explaining all this

what I want to say is your handsare not tied you can make

changes to configurations.

If you want.

Then we have logs option.

If you want to have a lookat the last 10 lines

of your log files,then you have an option.

It says last hundred line.

Sorry lost a hundred lines thenif you want full log files,

then you click on thatdo provide you a file

and download format.

You can just download it.

Then we have health option herewhere it provides health.

You are a cc sources basicallyshows ec2 instance here.

It says it's been7 minutes or six minutes

since my ec2 instancehas been installed.

Then you have monitoring

where it showsdifferent monitoring details

like CPU utilization Networkin network out.

If you want you can go aheadand create an alarm

with alarm option here suppose

you want notificationsto be sent to you

when the CPU utilizationor when the number

of ec2 instances are scarcein your auto scaling group.

Then you have events here

events basically are nothingbut it's a list of things

which has happened

since you started launchingan environment when I go down

it says we have seen earlier

on the black screenthe same things are applied your

so it says createan environment starting

then we saw that AC to instance

has been installed securitygroups elastic IP address.

So basically itshows all the events

that has happened from the timeelastic Beanstalk has started

to launch our environment

and till the time youterminated the environment.

So that's it.

Then you have tag files.

You can assign differentkey values as well.

Let's go back.

This is a sample application,

which I've tried to use not letme try to upload and deploy

a new application version here.

Okay, I'm gonna goto documentation here.

I'm interested withelastic Beanstalk.

I'm going to select on that

and then develop a guide clickon getting started on

when you scroll down on deploy

a new application Virginia basedon your sample application.

You have different versionsof your application

since I've selecteda tomcat is my platform.

I have a tomcat zip file.

You're a boy.

Already downloaded

that so I'm gonna just goingto upload the file then

so let's go backand it says upload

and deploy but let's goback to our folder.

Then there's an applicationversions option here.

So it gives you deploy andupload option separately here.

I'm just going to uploadfirst then we'll deployed

version label new versionand upload the file.

I have it here zip file.

I'm just going to attachthe file and then click

on upload optional.

The new version ofmy application has been uploaded

but it's not been deployed yet.

So when I go Can you can see

that I can still seethe same version

which was there before now?

Let's go back and deploy it.

Okay.

I'm going to select thisand then I'm going to click

on deploy optionand select employer.

Let's go backto environment and check

so my environmentis being updated.

So again the gray color here

once it's updated as and showthe new version name here.

It is uploaded.

So as you can see it showing

the version name of my newversion application version.

Like I said all your bothmy application versions.

Are there have beendeleted any you don't.

Have to deleteyour application versions

when you createa new one similarly,

you can upload multiple versionsof your application going

back actions option.

Then you haveload configuration,

which will definitelyload your configuration.

Then you have saved we can savethis configuration suppose.

You want to createan application with

the same configurations again,

you don't have to startfrom the beginning

from creating applicationenvironment all that.

You can just savethe configuration and use

for the other application

or other environmentof your application.

Then you can cloneyour environment as well rebuild

and I environmentand terminate as well.

So here I havesaved configuration.

If you have saved thisconfiguration the configuration

of been listed hereand like that conversation.

I can use when I'm creatinga new environment.

Okay, just let's see

if have explored allthe options environment

how well I forgot to showyou one most important thing

when I click on this URL.

It takes me to a pagewhere it shows

but my applicationhas been successfully installed.

Well, that's it.

So now you know

how to deploy an applicationusing elastic Beanstalk.

Do I have usedthe sample application?

Are you can go aheadand upload a code of yours

if you have any and try it out.

Well, all the options hereseems to be user-friendly

so you will know what to do.

It seems to be easier process.

You'll understand it betterwhen you try to reply

an application by yourself.

So first and foremost,

I would start by talking aboutwhat cloud storage exactly is.

Then we would move furtherand understand some of the myths

that surround cloud storage

but also discuss certaincloud storage practices

and would understand

how different cloud storageservice providers work.

Finally, I would finishthings off with the demo part

where I would be talking abouthow cloud storage Services work

on Amazon web services.

So I hope this agendais clear to you guys.

So let's not waste any timeand quickly get started then.

So what exactly is cloud storagenow first and foremost,

let me tell you what promptedme to actually go ahead

and take this session.

Well recently.

I had been interviewingand where I asked people

what do what did the knowabout cloud computing

and they told me

that cloud computing is a place

or it is a place onlinewhere you actually store data.

I went to some extent I agree.

Yes cloud computinghelps you store data,

but that is not the definitionon the longer run.

So that is why I thoughtthat we should actually go ahead

and have this session

so that we can discusssome of the myths

that surround cloud computingand tout store is in particular.

So guys, let's startwith a basic definition first.

Storage.

Well, it is something

that is made availablein the form of service.

Which is connectedover a network.

So guys this isa very basic definition

and the throw some more light.

I would like to actually goahead and given certain examples

as well to specifywhat does this definition mean?

But to some pointthis definition is correct.

It says that it isnothing but a storage

which is available as a service

which is connectedover a network now again,

you might wonder asin this is what people told me

in the interview, right?

I mean it is a placewhere you store data.

So yes cloud storageto some extent.

Yes.

This is what it is.

But when you talk aboutcloud storage it is lot more

than this basic definition.

Let's try to understandwhat all this cloud storage

exactly has to offerto you people.

Well first and foremost

as I've already mentionedit is storage it can let

you store emails media.

Now when I saymedia you can store

in a different kind of media

whether it's your images

whether it's your videosor maybe other kind of files.

It also lets you holdServices as well.

Yes.

We are living in the worldof internet right now and there

are various Services websites

that are online

and this data can be storedby using Cloud platform.

and finally I'm sorry guys

finally it is nothingbut the backup now

when I say back up guys,

we are talkingabout large Enterprises

that let you back up the data

and the using Cloudplatform to do that.

But again, it's to stillholds the same point right?

I mean when I sayemails Media Services backup

for large organizations,

I mean it is stilla simple storage know now,

let me tell you what it does

when I say backupfor large organizations.

We are referring to a lotof pointers here data coming in

from different sources.

The weight is processed.

The weight is integrated andstored into a particular storage

how it is handledand what all can you do with it.

Now when you talkabout a cloud storage,

it actually takes careof all these things.

That means it's not redundantor a dead storage

where you just takeyour data and put in

your data you can thinkof it as smart data storage.

So to understand

that let's talk aboutcloud computing a little so

what cloud computing doesis it lets you have this data

on the platformand it is a platform

where it hasa number of services

that lets you compute

or process this data to suityour business needs now,

it can be using machinelearning Big Data finding

out certain patternsusing power bi tools

or not power bi tools bi tools.

And also do a lotof other things

like maybe use a cloud platform

where the data can be usedfor marketing purposes, Maybe.

I think I owe to Botsand stuff like that.

So this is whata cloud computing platform.

Does it basically lets you usedifferent sources and use

this particular data to domultiple or different

kinds of things.

So when I say a cloud storage

it basically ensuresthere is a mechanism

that in first place it storesdata and lets you perform some

of the actions

that you can actuallyperform on this data.

So as we move further,

I would be discussingquite a few pointers

that support this claim or this.

Definition of mine.

So let's just movefurther and try to understand

a little more pointersor some other pointers

that talk about cloud storagebut to keep it simple.

It is a storage

that lets you do a lot of thingswith the data primary reason

being storing the data

and the other reasonsbeing processing it

or managing it also so let'smove further and take a look

at the next pointer.

So what are the mythsthat surround a cloud storage?

Well when you talkabout the myths,

this is what some peopleThe same that cloud computing

is suitable only

for large scale organizationsknow this is not true.

Let me give youan example recently.

What happened was oneof my friends.

He actually happento format his mobile phone

and he lost all the imagesand other data

that was there on that phone.

So the problem was henever backed that data

on any Drive neitheron Google Drive

or anywhere so he lost the data

so he came to us and he told usthat this is what happened.

So we told him that Youshould have backed it up.

Maybe on Google Drive.

So next time he didthat and again,

he being usedto losing his data.

He lost his data again.

So he again comes up and he's

like I've lost the dataso we reminded him

that he had his data storedon Google Drive.

So when you talkabout Google drive,

it is nothing but an onlinestorage where you actually

make a copy of a data,

so he made a copy of his data

and he could actuallyget that data back.

So when I say cloud storage itgives you a simple application

or a simple.

That you can actually go aheadand just put in your data just

like Google River you can putin your data as well.

So it is not limited tolarge-scale organizations only

if even you area single individual

where you just needto store your data,

you can use cloud storage.

Now, there are there arevarious cloud service providers

that actually meet

or cater different cloudcomputing needs So based on

that the cloud storageis might get complicated

and might give youmore functionality.

But even if you need isas basic as storing data,

don't worry cloudcomputing or cloud.

Storage is for you as well.

Now if you talkabout small scale businesses,

yes these daysthe amount of data

that is generated is huge.

And that is why

what happens is evenfor small scale organizations.

You need a place

where you can store your dataand somebody can manage the data

for you so you can focuson your business goals.

So this iswhere cloud storage comes

into picture for even smallscale businesses as well.

So if you ask me,

yes last scaleorganizations are suitable

for cloud computing or onlylarge-scale organizations.

A suitable for cloud storage.

This is a myth.

Complexity with cloud guys.

Now.

What does this term symbolizepeople normally assume

that having that privateinfrastructure makes it easier

for them to actually goahead and put in your data

that is not true.

The fact that people are usedto certain methods

or methodologies.

They feel comfortable with it.

Whether cloud is complex or not.

I would say it is not why

because if you get usedto certain Services,

you would realize that storing

or moving a data to cloud isactually lot more easier

than Normal infrastructures are

your previous or traditionalinfrastructures is

what I would say,

so whether cloud is complex,

I would say no

as we move into the demo partprobably we would be talking

about this pointer

or once I give the demo

probably you would havea clearer picture

how easy it is to actuallymove your data to Cloud.

Not eco-friendly.

Now this might soundout of the blue.

I mean you might wonder this isnot a sociology session.

So where did thispoint coming from?

I mean not eco-friendly.

Yes what peopleassume is the fact

that a large amountof data is being stored

on these platforms.

So we have use amountsor use numbers of data centers

which are big in size

and they consumea lot of electricity.

So there is powerwastage electricity wastage.

Well, that is a myth again firstand foremost the fact

that Getting a centralizedstorage somewhere.

That means most of the datawould be stored there.

So yes, you areautomatically saving out

on your power consumption

when you talk about it froma global or an Eco perspective.

The other thing is Iwould not want to point

out a particularcloud service provider.

But when you talk about GCBthat is Google Cloud platform,

then Amelie provide

their cloud servicesat a very affordable price now,

why is that?

The reason for thatis they've actually put

in a lot of effortinto the research part.

Where the researched a lot on

how they can actuallyminimize the cost

and how did they do it?

They basically ensurethat the amount of power

that is consumedby the resources.

They tried and optimizethat amount to a minimum amount

so that they are charged less

and in a way youare charged less.

So if they're optimizingthat particular process,

obviously you're consumingless amount of electricity.

So whether it's eco-friendly

definitely it iseco friendly friendly.

Zero down time again.

There's no such thingas zero downtime.

Now the fact

that I'm talking aboutcloud storage does not mean

that I tell you

that it has zero downtime

and you're completely securedknow there is a possibility

that there might bea downtime the fact

that cloud ensuresthat this downtime is very less.

Now.

That is a plus Point

what loud alsodoes is it ensures

that there is disaster recovery

and there is always a backupof your data or your resources.

So even if something goes downfor a very little time

and we normally it happensfor a very less time

if it does happenand it happens very rarely,

but even if ithappens care is taken

that nothing harmsyour resources or your data.

So zero downtime.

No that is not true.

But definitely downtimeis taken care of when you talk

about Cloud storages.

There is no needof cloud storage.

Okay, this is oneof the biggest myths

whether people agree or not.

If you go back like 10 yearsfrom now probably people

did not know a lotabout cloud computing.

But with time peopleare actually moving to cloud

and if you take a lookat recent statistics,

they would agree as well.

I mean people would be wantingto switch to cloud

in near future.

And the reason for thatis the quite a few service

is quite a few facilitiesthat cloud gives you

and that is why peopleare moving to And

if you do move to Cloud,

you'll be usingcloud storage inevitably.

So yes that is going to happen.

And if you think

that there is no needfor cloud storage

definitely near future.

I would assure you

that even you wouldbe moving to Cloud.

So Guys, these are someof the major myths there are

some other myths as well as wemove further not worried.

We would be discussing that aswell in some other pointers.

So let's just go ahead and talkabout some of the benefits

of using a cloud storagefor data storage

or basically using Cloudfor data storage.

So what are the benefitsof the signal I purposely kept

this pointer for the later halfand I first discussed the myth

because these pointerswould definitely help

you understand someof those myths better.

Not a cloud platformis customer-friendly.

What do I mean by this?

Well, first and foremost

when you talkabout cloud storage,

what you're able to dois you're able to scale

up your storage scaledown your storage keep

it secure monitor it

and you can ensure

that there is constantbackup taken of your data.

So when you talk about itfrom a security perspective,

it is secure as well pluswhat cloud service providers do

is they've had so many services

that In the market you talk

about any popular cloudservice provider they

have lot of servicesthat are made available.

What do these servicesdo is they ensure

that you're functioningon cloud platform is

very smooth and same isfor cloud storage as well.

You can utilize variousServices which ensure

that you're functioning

or you're workingon cloud becomes easy again,

which I have beenreiterating for a while.

Now that I would be talkingabout these in future slides.

Don't worry as we getinto the demo part you would

and how user-friendlythese Cloud platforms

are Security now again,

this is an important point

when you talk aboutCloud platforms Cloud storages

are they secure or not?

Definitely they are very secure

and there was a timewhen people believed

that these platforms

when not secureto a greater extent

and that out was understandable.

I mean if there is something

that is new in the marketyou tend to doubt

that but if you talkabout Cloud platforms

these platforms are actuallymore secure than your on-premise

or your traditional.

Says which people are usedto using the reason for this is

if you talk aboutcloud service providers,

let's talk about AWS.

That is Amazon web servicesin this case.

What it does is it gives youa shared security model now,

what do I mean by this youhave service level agreements

where you and your customer

or maybe the customerand the AWS providers.

They basically come to a term

where the decide asin what kind of security

or what kind of principlesare to be implemented

on the architecture and youcan take control as a new.

You can decide what accesses doyou want to give to the vendor?

And what are the axis isyou want to keep to yourself?

So when you docombine this approach?

It ensures that security is isat the optimum and you get to be

or you get to take controlof your security as well.

So yes,

if you talk about cloud storagebeing secure or not.

Yes.

It is very secure to namesome we have S3 and AWS.

It is highly durableand it is highly reliable.

So when you talkabout disaster recovery

and T it is almost up to there

and as I've alreadymentioned not everything

is hundred percent

when I talked aboutthe downtime or yeah

the downtime part so yes,

not everything ishundred percent.

But when you talkabout security and durability

when you talk about S3

in particular it is99 point something

six or seven times nine that is99.999999 times durable.

So that does makea system very secure.

Another benefit guys.

It is pocket-friendly.

Now, if you talkabout cloud service providers,

whether it's storage,

whether it's compute servicedatabase Services all

these Services you can actuallygo ahead and use these services

for rental basis.

It's just likepaying for electricity.

I mean, if you're using

a particular service youwould be paying for that service

for the durationyou use that service

and you would be payingonly for the resources

that you've used.

So it is pay-as-you-gokind of a model

where The only for the resources

you use and only forthe time duration you use

so whether it'spocket friendly or not.

Yes.

It is pocket friendly.

And as you move further,

I mean if you are usingmore storage the cost again,

it comes downto a greater extent.

So it is already cheaper andif you decide to scale up,

it would be more cheaperor it would be cheaper is

what I should say.

So yeah, these are someof the benefits now

if you talk about cloudcomputing and storage again,

there are other benefitslike as I've already

mentioned durability.

Scalability and variousother benefits but these

are some core ones.

I would not want to getinto the details

because I wish to keep everyoneon the same page for people

who have been attending

this session for the firsttime and for people

who probably know a bit aboutcloud computing again guys,

if some of the termsthat I'm talking

about in this session you feel

that these terms arefairly new for you

and I'm probably goingat a faster Pace,

I would suggestthat you actually do go ahead

and check into the The sessions

that we haveon our YouTube channel

because we've talkedabout a lot of stuff there.

I mean other cloud services

what cloud computing iswhat cloud service providers are

what are differentservice models and

quite a few other videosand sessions to be honest.

So I would suggest

that you go throughthose sessions as well.

And I'm sure

that by now many of youmight have been wondering as

in whether this sessionwould be recorded

and a copy of itwould be available to you.

People are not not verymost of us sessions.

They go on you.

Boop so probably a copyof it would be there on YouTube.

And if not,

you can actually shareyour email IDs as well.

If it does not go on YouTube.

Somebody would share a copyof the session with you people.

So guys if I'm

if I'm happening to goa little faster than

what you're expecting

do not worry you'd be havinga copy of this as well.

But for now just try to keep upwith the pace that I am going

with and I'm sure

that by the end of the sessionwe all would be good.

So guys what are someof the cloud storage practices

that you should takecare of now?

These are the practicesthat should concern somebody

who is planning to moveto Cloud again.

If you are a newbie

and you're just here to practicewe are not talking about you

in particular but these pointers

are important for you asan individual as well.

But I'm talking

about it from morebusiness business perspective

or more industrial perspective.

So if your organizationis planning to move

to Cloud Definitely.

These are someof the practices or pointers

that you should take care of.

So first andforemost scrutinize SLA,

so as I've alreadymentioned you have SLS

where your service providers orvendors basically come to a term

where you actuallygo ahead and decide

on particular rules as a nugget.

These are the terms and theseare the services as a vendor.

I would be providingyou people and you as

a customer you agreeto certain terms as an okay.

This is what youwould be giving us.

And this is what wewould be paying you.

So there are certain pointersthat you should consider

while you are actuallysigning your essays.

That you need to understandis when they say

that you would be this is thebase charge try to understand

how the charges would be

when you decide to scale upand stuff like that other thing

that you need to consideras I've talked about downtime.

Right?

So normally you have SLS

where people talkabout the stuff

that there won't be an outagewhich is more than 10 minutes.

So yes, I mean thissounds fairly good right?

So in an hour's time,

this is a hypotheticalexample do not consider

that there would bea downtime of 10.

Minutes, this isfor your understanding.

Let's assume that there'sa downtime of maybe 10 minutes

in an hour's time,

which is too high for now,but let's assume

that so what serviceprovider would claim is

if there is a downtime

once probably this iswhat the charge would be.

But if it goes downafter that probably you get

some more consistent discountand those kind of things.

So if there is an SLAwhere you say

that it is 10 minutes,

What if they were to 