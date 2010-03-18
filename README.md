Source Code for www.rug-b.de
============================

This is the collaborative effort of the RubyUserGroup::Berlin (RUG-B) to create a new public site featuring the group's various activities.

Get in touch if you want to help out!


Design Goals / Decisions
------------------------

We are using StaticMatic to generate the actual site to be pushed to [Github Pages](http://rug-b.github.com).

All content will be pulled live from various RSS feeds. Some of these feeds will be provided using Yahoo! pipes applying custom filters and post-processing. Should this turn out to be too limited, we will create our own aggregator/identiy mapper/feed emitter.


Instructions
------------

To view the site (work in progress) on your development machine do:

    $ git clone git://github.com/martinrehfeld/www.rug-b.de-src.git
    $ sudo gem install staticmatic # unless already installed
    $ staticmatic preview www.rug-b.de-src

To run the specs:

    $ sudo gem install jspec # unless already installed
    $ open www.rug-b.de-src/spec/dom.html

Resources
---------

* [Tracker](https://www.pivotaltracker.com/projects/63590)
* [RUG-B Maillinglist](http://groups.google.de/group/rug-b)
