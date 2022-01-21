# Introduction

## What is ROS?

Robot Operating System (ROS) is an open source middleware suit, and although ROS is not an operating system it has hardware abstraction functions, low-level device control, inter-process communication, package management, network communication and a wide range of macros, making it a flexible framework for robot software development, with a collection of tools, libraries and conventions that adapt to a wide variety of robotic platforms, with the aim of simplifying the task of creating complex and robust robotic systems.

## History

The first pieces of software that would later become ROS were being developed at Stanford University by two master's students Eric Berger and Keenan Wyrobek in the [Personal Robotics Program](http://personalrobotics.stanford.edu/). The first steps in creating this unified system began with building [PR1](http://personalrobotics.stanford.edu/ICRA-2008-kaw-v17.pdf) as a prototyping hardware to start working on the software from, borrowing best practices from other macros and open source software such as switchyard from Morgan Quigley another PhD student who had been working on STAIR (Stanford Artificial Intelligence Robot) at the Stanford Artificial Intelligence Lab. Eric Berger and Keenan Wyrobek in search of funding to continue the development of PR1 met Scott Hassan founder of Willow Garage a technology incubator. Hassan shared Berger and Keenan's vision of creating a unified system for robotics and invited them to work at Willow Garage, making the first ROS code commit on November 7, 2007.

Willow Garage began developing PR2 using ROS as runtime software. Soon after ROS was released (0.4 Mango Tango) followed by a paper showing RVIZ and the first article about ROS ([ROS: an open-source Robot Operating System](http://www.robotics.stanford.edu/~ang/papers/icraoss09-ROS.pdf)).

In 2010 Willow Garage started the creation of Open Source Robotics Foundation (OSRF) and then in 2013 OSRF became the main maintainer of ROS as Willow Garage would be absorbed by its founders. Then Clearpath Robotics takes over the support responsibilities for PR2 in early 2014. Since then OSRF has taken over the primary development of ROS, releasing a new version every year.

## ROS Distributions

A ROS distribution is a versioned set of ROS packages. They are similar to Linux distributions (e.g. Ubuntu). The purpose of ROS distributions is to allow developers to work with a relatively stable code base until they are ready to move everything forward.

The two active ROS distributions are ROS Noetic Ninjemys which targets Ubuntu Focal Fossa (20.04) and ROS Melodic Morenia for Ubuntu Bionic (18.04). All ROS distributions are discontinued when the target platform reaches end of life (EOL), for example ROS Kinetic Kame for Ubuntu Xenial (16.04) end support in April 2021 as well as Ubuntu Xenial EOL.

If a specific platform is required, see [REP 03](https://www.ros.org/reps/rep-0003.html) for details of each supported platform.

### Which distribution to use?

It depends a lot on the needs of each project. An arbitrary list of recommendations based on use cases.

|Use Case|Recommendation|
|---|---|
|Latest version of Gazebo| Noetic for Gazebo 11|
|Using OpenCV3| Noetic or Melodic|
|Using OpenCV4| Noetic|
|Jetson Computers| Melodic for L4T and NVIDIA JetPack SDK|
|Platform specific| See [REP 03](https://www.ros.org/reps/rep-0003.html)|

## Advantages of ROS

Some of the advantages of ROS as a robotics development platform compared to others such as [Player](http://playerstage.sourceforge.net/), [YARP](https://www.yarp.it/), [Orocos](https://www.orocos.org/), [MRPT](https://www.mrpt.org/), [SimSpark](http://simspark.sourceforge.net/) among others are:

* **Highly configurable high-level capabilities**: ROS comes with out-of-the-box capabilities, e.g. SLAM (simultaneous localization and mapping) and AMCL (adaptive localization Monte Carlo). Packages in ROS can be used to perform autonomous navigation on mobile robots and the MoveIt package for motion planning of robotic manipulators. These capabilities can be used directly in our software without any problems. These capabilities are their best form of implementation, so writing new code for existing capabilities is like reinventing wheels. In addition, these capabilities are highly configurable; we can adjust each capability using various parameters.
* **Debugging, visualization and simulation tools**: ROS is packed with tons of tools for debugging, visualization and simulation. Tools like rqt_gui RViz and Gazebo are some of the robust open source tools for debugging, visualization and simulation. The software framework that has these many tools is very rare.
* **Drivers for sensors and actuators**: ROS is packed with device drivers and interface packages for various sensors and actuators in robotics. High-end sensors include Velodyne-LIDAR, laser scanners, Kinect, etc. and actuators such as Dynamixel servos. We can connect these components to ROS without any problems.
* **Interoperability**: ROS message passing middleware allows communication between different nodes. These nodes can be programmed in any language that has a [ROS API](http://wiki.ros.org/APIs). We can write high-performance nodes in C++ and other nodes in Python. This kind of flexibility is not available on other platforms.
* **Modularity**: One of the problems that can occur in most standalone robotic applications is, if any of the main code threads fail, the whole robot application may stop. In ROS, the situation is different, we are writing different nodes for each process and if one node fails, the system can still run. In addition, ROS provides robust methods to resume operation even if any sensor or motor is dead.
* **Multi-processing**: Handling a hardware resource by more than two processes is always a headache. Imagine, we want to process a camera image for face detection and motion detection, we can write the code as a single entity that can do both, or we can write a single-threaded code for concurrency. If we want to add more than two features in threads, the application behavior will become complex and difficult to debug. But in ROS, we can access devices using ROS topics from ROS drivers. Any number of ROS nodes can subscribe to the ROS camera driver image message and each node can perform different functionalities. It can reduce the complexity in computation and also increase the debugging capability of the whole system.

## Disadvantages of ROS

* **Difficult to learn**: ROS is a difficult development platform to learn using only the resources of the official wiki, especially for people who do not have much experience in the world of programming and robotics.
* **Complexity to configure simulation environments**: The main simulation environment of ROS is Gazebo, although it can be integrated with others such as [CoppeliaSim](https://www.coppeliarobotics.com/) (from the creators of V-REP), [Webots](https://www.cyberbotics.com/), [Unity Robotics](https://github.com/Unity-Technologies/Unity-Robotics-Hub). In Gazebo the process of configuring the simulation environment is done by code, it also contains a set of GUI tools that facilitate the process of building the environment, but it is necessary to define in code the physical characteristics, controllers, sensors, inertia matrices and other things that make the use of Gazebo complex.
* **Code-based robot modeling**: Robot modeling in ROS uses [URDF](http://wiki.ros.org/urdf), which is an XML-based robot description, so it is necessary to write the robot model as a description using URDF tags. There is a SolidWorks add-on to convert a SolidWorks 3D model to URDF. There are some add-ons for other CAD software such as this one for Fusion 360. Learning to model a robot in ROS will take a lot of time and building with URDF tags also takes a lot of time compared to other simulators.
* **Need for a computer**: You need a computer to run ROS on. For small robots running entirely on microcontrollers, ROS is not required, unless you want to perform high-level functionalities such as autonomous navigation and motion planning.

## Some ROS-base robots

## References

- [About ROS](https://www.ros.org/about-ros/)
- [History](https://www.ros.org/history/)
- [The Origin Story of ROS, the Linux of Robotics](https://spectrum.ieee.org/automaton/robotics/robotics-software/the-origin-story-of-ros-the-linux-of-robotics)
- [ROS Distributions](http://wiki.ros.org/Distributions)