hi everybody welcome back to coder dave
00:00:02.000
where we talk about devops especially
00:00:03.760
with github and azure devops
00:00:05.520
today i have for you a special video in
00:00:07.680
fact in this full-length course we will
00:00:09.679
go through
00:00:10.400
everything you need to know about github
00:00:12.240
actions we will start from the very
00:00:13.759
beginning checking all the things that
00:00:15.519
compose github actions like triggers
00:00:17.760
workflows and so on so forth we will
00:00:19.920
talk about the differences of the
00:00:21.279
different actions you can find
00:00:23.119
how to create a workflow and so on and
00:00:25.279
so forth and then we will talk about all
00:00:27.119
the advanced features like secrets
00:00:28.880
managements
00:00:29.760
environments and so on and so forth this
00:00:32.399
is my first
00:00:33.360
full length video full length course so
00:00:35.680
let me know in the comment section below
00:00:37.120
if you like this kind of format or if
00:00:38.879
you prefer the shorted videos
00:00:40.480
and remember to like this video if you
00:00:42.399
like it or if you find it insightful so
00:00:44.320
more people can benefit from it and if
00:00:46.399
you want subscribe to this channel to
00:00:48.160
have more and more content like this
00:00:50.399
but enough talking let's go into it
00:00:58.640
just to give you an overview uh we will
00:01:01.359
see
00:01:01.840
in general what github actions are and
00:01:04.400
how they work
00:01:05.680
um how they apply to ci cd and to
00:01:08.799
release management
00:01:10.240
and then we will go in some more
00:01:12.320
in-depth topics like
00:01:13.840
self-false runners build management
00:01:15.759
package management and
00:01:17.040
at the end secret management
00:01:20.479
let's start so first of all you may know
00:01:23.360
that
00:01:23.840
there are plenty of ci cd systems right
00:01:27.759
starting from you know circle ci travis
00:01:30.000
ci
00:01:30.880
pipelines and so on so forth and actions
00:01:33.439
of course
00:01:34.000
is one of those but the main advantage
00:01:37.040
or main advantages of actions mainly
00:01:40.320
rely on the fact that they are
00:01:42.079
fully fully github and what i mean by
00:01:44.479
that is that first of all they are fully
00:01:46.240
integrated with github so
00:01:48.000
there's no no no integration to make no
00:01:51.200
workaround to follow to make
00:01:53.040
things work together they just they just
00:01:55.439
work on on github
00:01:57.040
with github and with all github offers
00:02:00.079
they respond to any github event you may
00:02:03.360
have now most
00:02:04.479
of the ci systems you can find they
00:02:07.280
normally
00:02:08.080
are used just for ci so they reply to
00:02:10.399
they respond to
00:02:11.599
you know the fact that you push your
00:02:12.959
code to your ripple
00:02:14.879
or the you know a package is ready and
00:02:17.520
you can deploy it and
00:02:18.879
things like that but for github actions
00:02:20.879
it's basically a
00:02:22.160
full automation engine what i always say
00:02:25.520
is that if you think you can automate
00:02:27.520
something then 99 you can do that with
00:02:31.200
github actions
00:02:32.480
when i said that it responds to any
00:02:34.160
github event we'll see this later in
00:02:36.239
more details but
00:02:37.440
what i mean is that you can trigger uh
00:02:39.920
an actions
00:02:40.879
job based on things like as i mentioned
00:02:43.680
before
00:02:44.239
you're pushing code to a repo creating a
00:02:46.720
new branch but also for example
00:02:49.200
if you create a new issue on a repo and
00:02:51.519
you want to
00:02:52.400
automate some behavior um to respond to
00:02:55.200
that issue or
00:02:56.319
a new comment a new request or even
00:02:59.760
api calls and so on so forth so really
00:03:03.120
the the possibilities
00:03:04.560
are unlimited and in fact because of
00:03:07.200
that
00:03:07.840
and also because as i mentioned before
00:03:09.599
they are fully github
00:03:11.040
they are also community powered and in
00:03:13.519
fact
00:03:14.080
we have thousands and thousands of
00:03:16.959
pre-built actions
00:03:18.400
that come of course from first-party
00:03:20.640
companies like
00:03:21.519
github and microsoft and third-party
00:03:24.400
companies like you know
00:03:25.680
all the major player in the industry but
00:03:27.920
the majority of those
00:03:29.360
come from the community meaning that
00:03:32.000
there's someone like me or like you
00:03:34.159
that decide one day to say okay i want
00:03:36.720
to automate that specific task i want to
00:03:39.040
make
00:03:39.760
you know some github action for that
00:03:42.080
specific operation
00:03:43.599
they make it and they make that
00:03:45.440
available to
00:03:46.640
to everyone it's fully open source all
00:03:49.920
the actions are created in in the open
00:03:53.280
uh you can see the code at any moment
00:03:55.519
and they work
00:03:56.720
basically on any platform using any
00:03:59.200
language and
00:04:00.319
in any cloud and we will see these in
00:04:02.799
the next slide
00:04:03.760
first of all you can run your action
00:04:05.920
workflows
00:04:07.280
in many operating systems you can run it
00:04:09.200
on linux you can run on mac
00:04:10.959
on windows and on containers you have
00:04:14.080
something like
00:04:15.040
matrix builds and again i have more
00:04:17.600
details of this later but basically
00:04:19.358
means that you can
00:04:20.560
write the job like once and then
00:04:23.600
having that job having the same
00:04:25.440
operations and tasks
00:04:26.840
executing n times or multiple times
00:04:30.000
based on the parameters you pass to the
00:04:32.000
matrix
00:04:33.520
again we will see an example later we
00:04:35.680
have a very
00:04:37.040
powerful logging mechanism which allows
00:04:39.840
you not only to see the logs
00:04:41.680
in real time of what's happening in your
00:04:44.560
github actions
00:04:45.759
workflows but also you can search
00:04:49.040
through the logs you can download the
00:04:50.800
logs and you can also link to a specific
00:04:53.360
or you can create a link to a specific
00:04:55.120
role in the
00:04:56.560
logs and reference that in in your
00:04:59.199
issues in your documentations
00:05:00.800
and whatnot there is a built-in secret
00:05:03.520
store and which
00:05:04.400
will be the topic of our last module and
00:05:07.199
more importantly
00:05:08.320
they are quite easy to write and very
00:05:11.520
easy to share
00:05:12.639
they are all based on the the the github
00:05:15.280
workflows are
00:05:16.320
sorry the actions workflows are based on
00:05:18.800
yaml
00:05:19.919
the actions themselves are uh basically
00:05:23.360
based on
00:05:24.240
javascript or you can use any sort of
00:05:27.280
language that
00:05:28.400
somehow compiles to javascript and as i
00:05:31.039
mentioned they are easy to share because
00:05:32.479
they are developed in the open so as
00:05:34.080
long as you have a link to the market
00:05:36.240
to the marketplace or uh linked to the
00:05:39.280
repo that hosts that action
00:05:41.280
you can just share that and anyone can
00:05:44.160
can use it
00:05:45.199
we will see this in more details later
00:05:47.680
but basically
00:05:48.800
this is just to show that you can do
00:05:51.199
anything and everything
00:05:52.560
with github actions if we talk about you
00:05:54.960
know ci
00:05:55.680
if we talk about building application if
00:05:57.360
we talk about deployments if we talk
00:05:59.039
about
00:05:59.919
containers or all the other automations
00:06:02.319
i mentioned