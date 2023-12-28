
hey hey developers today we are gonna

look at testing inside view j/s I'm

gonna explain how you guys can get

started with it I don't explain how you

can use the wrapper and view test utils

and we're gonna go over some basic

examples and then a couple of examples

that are a little bit more difficult to

set up but we'll talk about it but

before we get too far let's have a word

from our sponsor hey guys when you're

building your own website whether it's

for yourself your business or a brand

one of the hardest things to do is to

find that awesome domain name that is

short relevant and shows the world what

you're all about

which is exactly why I went and got view

course tech which goes so seamlessly

with my brand I'm currently using it as

a really great website platform for my

new view course and it's absolutely

perfect join the likes of Viacom Intel

and CES and get your very own dot tech

at a whopping ninety percent off on one

five and ten-year domains using the link

go tech slash Eric it'll be in the

description below

only this Black Friday the sale starts

on the 26th of November so you can

pre-register now and get a further 10%

off on the same day sale so make sure

you go to go dot tech slash Eric in the

link in the description below

pre-register and you can get an

additional 10% off thanks hey if you

don't know my name is Eric I'm a

full-stack software developer

I'm also Manning author and I really

like view Jas so you know view Jas is

one of my favorite JavaScript frameworks

out there I also am a big fan of angular

and react as well so let's let's begin

here this is our app that we created a

few videos ago it's just a real simple

app app where you can log in you can

even register then log in and then you

have the secret secrets area and I want

to add a few tests to this and we're so

we're gonna add some basic tests but

first if you are completely new to

testing a really good place to start

with testing on view is to look at the

view test utils guide so if you go to

view - test - utils dot VJ s dot org you

will get

great introduction on how to start

testing and really this is where you

should start if you are beginning so

this view test utils is a part of your

app when you start and you create it

from scratch usually this is a utility

some you give you some utility functions

that work with gest which will be what

// !
you use typically he can use mocha to

inside your view apps to start testing

so if you click getting started it's you

can even download clone this repo the

view test utils getting started and it

kind of gives you some examples what the

way usually the the way it works inside

view tested utils is that you create a

file you don't have to but you can

create a file for each into each

individual component that you're testing

and then inside of it that file you do

these describes and you do these its

where basically you're describing what

your tests what what file you're in a

test and then you're you're doing

assertions of what you want to test and

you're you're doing setup code and then

assertions and the way you do that

inside using you test utils as you use

this wrapper so now mount the component

that you have the wrapper and there's

something called mount and then shallow

mount so this mount right here basically

crates mounts the component for you and

it also mounts any   a child

components as well while shallow mount

stubs out all your child components so

that's the difference between this mount

right here in chin and shallow mount and

we'll see that more as we move on and

then it kind of gives you example of

here of so once you have this component

you have access to a lot of different

things you have access to the HTML you

also have access to dot VM which is a

way you can access the data properties

you can set data you can do all sorts of

things and then there's this thing

called next tick which is something that

they recently became mandatory and it's

still it's necessary when you want to

advance the event loop so if you're

doing so if you want it to trigger

something and it's not working correctly

you might need

to use next tick we I'm not gonna get

into do this too much but this is just

really good to know that sometimes that

you have Dom updates that you need to

manually trigger the next tick in your

test for it to work correctly and I like

this it has a section on knowing what to

test I think when you first start

jumping the testing you see okay well I

// !

got it I got a test everything I got to

do 100% code coverage I really like this

that it says they don't recommend aiming

for complete line based coverage so

you're never going to have if you're new

testing there's something called code

coverage where it gauges what how many

lines of code that you're actually

testing like are you testing every

single conditional in there and then

some organizations have this 80% code

coverage that you have to to hit but

what happens is when you have these

really hide code coverage and you have

to keep it at a certain height you end

up doing a you end up creating a lot of

brittle tests it can really can create a

lot of brittle tests not always because

you're always yeah your is testing the

internal implementation detail so you're

always testing like what goes into this

method do I expect this method to return

this method but really what they

recommend and a lot of people I think

this movement for testing is going this

way is instead of testing every single

implementation detail every single

method is that you just assert the

components public interface and treat

its internals as a black box so you can

a good test would be like make sure that

when the component starts it horse

renders but maybe that way if you put

some items in a input then when you

click Submit that what you expect

happens actually happens and that might

be a better test than testing each

individual method inside your component

so keep that in mind

so for example for the counter component

which increments and displays a counter

by one each time a button is clicked

it's test case would simulate the click

and assert that the rendered output is

increased to one so that's that's kind

of a that's what I see a lot of people

testing nowadays instead of doing this

really fine grained testing another

really good utility to do this type of

// ! Cypress

thing is Cypress it's more of an

end-to-end test runner and you don't

have X and when you're using Cypress the

whole front end is basically a black box

you can't change any values you're not

going into the methods and setting

anything you're essentially just running

through the app from one end to the

other and doing different tests to make

sure it works

we're not getting into Cyprus in this in

this video there is I did some excellent

Cyprus videos in the past maybe I'll put

some links in the description below if

you guys are interested in that that's

another way to do testing and I know

some organizations prefer more the

end-to-end tests and some prefer more

these more granular unit tests I think

there's a place for both and as I

// !  shallow rendering -

it's essentially where it stubs out the

any child components of it and you can

do all sorts of things with emitted

events which I'm not gonna get into and

slots and and simulating props so that's

// ! End

the basics of getting started so let's

let's see if we can get our app just do

a couple of basic tests and we can see

what we can do now if you start an app

from scratch you will what typically

happens is is you are going to get the

option to adds tests so I'm going to

just show you guys real quickly if I do

view create I know Eric tests now I

won't actually create this did you mean

create yeah I forgot to e it's gonna

give you this command-line interface to

install to create your basic app right

here it's going to ask you some defaults

so I'm gonna menu select features and

one of the options here is unit testing

and end-to-end testing so let's say I

select both of those when I'm creating

my new view app and I hit enter now it's

gonna give me asking me what kind of

formatter I'm just say error prevention

only Natanz save and here is where it's

gonna ask you what your unit testing

solution is there's mocha plus chai or

just and it defaults if you just hit

enter it we go through mocha mocha plus

 
I'm gonna show you just in this tutorial
 
here maybe in the future I think I've
 
done some view tutorials for Moka in the