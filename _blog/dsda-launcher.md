---
layout: blog
name: dsda-launcher
links:
  - https://github.com/Pedro-Beirao/dsda-launcher
---

In June 2021 I grew frustrated with the old prboom macOS launcher that was still in use in dsda-doom.

> PBeGood - 04/06/2021: The macos launcher for dsda-doom was written in ObjC and with a really old version of xcode.
I was trying to add a -record feature and a parameter editor to the launcher, but ObjC sucks. and I couldnt open the project in xcode

![PrBoom Launcher](/assets/images/blog/dsda/prboom-launcher.jpg)

So I started work on a new macOS launcher for dsda-doom written in Swift. It was just a proof of concept, but started a conversation when I showed it off on the dsda discord.

![Swift Launcher](/assets/images/blog/dsda/swift-launcher.jpg)

Seeing this, kraflab asked me if I could instead work on a crossplatform launcher, as the old windows launcher also needed a rewrite.

> kraflab — 05/06/2021: if you're going to invest in improving the launcher stuff, I'd personally love a cross-platform solution so we can replace the windows one too (and then any features you add could apply to both)

A few days later I released the first version of dsda-launcher, and have iterated on it ever since.
