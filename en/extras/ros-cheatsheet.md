# ROS Cheatsheet

## Package

### Create Package

```bash
catkin_create_pkg package_name [dependencies ...]
```

### Package Folders

|Folder|Description|
|---|---|
|src||
|scripts||
|msg||
|srv||
|action||

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