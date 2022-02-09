# ROS Cheatsheet

## Workspaces

### Create Workspece

```bash
mkdir catkin_ws && catkin_ws
wstool init src
catkin_make
source devel/setup.bash
```

## Package

### Create Package

```bash
catkin_create_pkg package_name [dependencies ...]
```

[Package dependencies external link.](https://wiki.ros.org/ROS/Tutorials/CreatingPackage#ROS.2FTutorials.2Fcatkin.2FCreatingPackage.package_dependencies)

### Package Folders

|Folder|Description|
|---|---|
|include/package_name | C++ header files |
|src|Source files. <br> Python libraries in subdirectories|
|scripts|Python nodes and scripts|
|msg|Message definitions|
|srv|Service definitions|
|action|Action definitions|

## Running System

```bash
roscore
```


```bash
roslaunch package_name launch_file_name.launch
```

### Nodes

```bash
rosnode list
```

### Topics

```bash
rostopic list
```

```bash
rostopic echo <topic>
```

```bash
rostopic hz <topic>
```

```bash
rostopic info <topic>
```

### Messages

### Services

## Remote Connection
