---
layout: blog

name: mindcuber-python
links:
  - https://github.com/Pedro-Beirao/mindcuber-python

date-created: 2026-05-04
date-edited: 2026-05-05
---

I had to make a project for my physics class in 12th grade, and since I had seen a [MindCuber](https://mindcuber.com/) in a video recently, I decided to build it for this class. So I started looking into it and it turns out the software that is used to code the motors only runs on Windows, which I wasn't able to run at the time, this made this project much more interesting.

The solution was to use [ev3_dc](https://github.com/ChristophGaukel/ev3-python3), python bindings for ev3. Well yet another problem with using macOS, the USB communication to ev3 was using a library which didn't work on macOS, so I made a pull request to use a different approach instead. This was my first PR, before knowing anything about git... and it shows.

I followed the build instructions, but made some modifications that from testing made moves more consistent. Even thought the original plan was to follow the official MindCuber program steps, I decided to write it all from my ideas. Firstly I decided to use the camera of my laptop to read the colors of the faces of the cube. They are be saved as a string of 54 characters, each describing a color in a cell in a specific location.

> DRLUUBFBRBLURRLRUBLRDDFDLFUFUFFDBRDUBRUFLLFDDBFLUBLRBD

D would be the color of the Down face (normally yellow). R would be the color of the Right face.

Next I feed it into the [kociemba](https://kociemba.org/) algorithm which returns a list of the optimal moves to solve the cube.

> R' D2 R' U2 R F2 D B2 U' R F' U R2 D L2 D' B2 R2 B2 U' B2

So feed it into the program and [it works](https://www.youtube.com/watch?v=Iczwq0FZBBg)! But I need to manually rotate the cube while detecting the colors and it takes over 2 minutes to solve the cube. Let's tackle these two problems.

First, I built structure that held a phone over the cube, which the camera pointing to it. The phone transmitted the camera to the pc over streaming in the local wifi network. This way I was able to setup automatic color detection, the script rotated the cube while getting the colors from the phone.

Next, in order to improve solve times I identified that resetting the cube orientation to the original position after making a move is wasteful. Instead I can define transitions, the optimal way to do them. This drastically improved solve times, bringing them down to around 40 seconds.

Sadly these two improvements are not present in the repository (as I said before, I barely knew how to operate git at the time), nor in the video that I posted on youtube and sometimes show people. This really annoys me as I am really proud of this project.
