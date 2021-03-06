Source Code for www.rug-b.de
============================

This is the collaborative effort of the RubyUserGroup::Berlin (RUG-B) to create a new public site featuring the group's various activities.

Get in touch if you want to help out!


Design Goals / Decisions
------------------------

We are using StaticMatic to generate the actual site to be pushed to [Github Pages](http://rug-b.github.com).

All content will be pulled live from various RSS feeds. Some of these feeds will be provided using Yahoo! pipes applying custom filters and post-processing. Should this turn out to be too limited, we will create our own aggregator/identity mapper/feed emitter.


Instructions
------------

To view the site (work in progress) on your development machine do:

    install bundler for dependency managment "gem install bundler"
    Install necessary gems with "bundle install"

    Checkout site source and start preview server:
    $ git clone git://github.com/martinrehfeld/www.rug-b.de-src.git
    $ staticmatic preview www.rug-b.de-src
    
    Point your browser to http://localhost:3000/

To run the Javascript specs:

    $ open www.rug-b.de-src/spec/dom.html

To publish the site (build site with staticmatic and push the result to http://github.com/rug-b/rug-b.github.com):

    $ rake publish

Resources
---------

* [This project on Pivotal Tracker](https://www.pivotaltracker.com/projects/63590)
* [RUG-B Maillinglist](http://groups.google.de/group/rug-b)
