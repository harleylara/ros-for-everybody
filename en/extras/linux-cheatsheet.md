# Linux Cheatsheet

## Files and Navigation

| Command                  | Description                                                                              |
|--------------------------|------------------------------------------------------------------------------------------|
| `ls`                     | list all files/folders on current dir                                                    |
| `ls -l`                  | formatted listing                                                                        |
| `ls -la`                 | formatted listing including hidden files                                                 |
| `cd <dir>`               | change directory to dir                                                                  |
| `cd ..`                  | change to parent directory                                                               |
| `cd ./<dir>`             | change to dir in parent directory                                                        |
| `cd`                     | change to home directory                                                                 |
| `pwd`                    | show current directory                                                                   |
| `mkdir <dir>`            | create a directory dir                                                                   |
| `rm <file>`              | remove file                                                                              |
| `rm -f  <dir>`           | force remove file                                                                        |
| `rm -r <dir>`            | remove directory dir                                                                     |
| `rm -rf <dir>`           | force remove directory dir                                                               |
| `rm -rf /`               | It's like exploding a nuclear bomb targeting your entire operating system. NEVER USE IT! |
| `cp <file1> <file2>`     | copy file1 to file2                                                                      |
| `mv <file1> <file2>`     | mv file1 to file2                                                                        |
| `mv <file1> <dir/file2>` | mv file1 to dir as file2                                                                 |
| `touch <file>`           | create or update file                                                                    |
| `cat <file>`             | output contents of file                                                                  |
| `cat > <file>`           | write standard input into file                                                           |
| `cat >> <file>`          | append standard input into file                                                          |
| `tail -f <file>`         | output contents of file as it grows                                                      |

## Processes

| Command        | Description                        |
|----------------|------------------------------------|
| `ps`           | display currently active processes |
| `ps aux`       | detailed outputs                   |
| `kill pid`     | kill process with process id (pid) |
| `killall proc` | kill all processes named proc      |

## System Info

| Command             | Description                  |
|---------------------|------------------------------|
| `date`              | show current date/time       |
| `uptime`            | show uptime                  |
| `whoami`            | show you are logged in as    |
| `w`                 | display who is online        |
| `cat /proc/cpuinfo` | display cpu info             |
| `cat /proc/meminfo` | display memory info          |
| `free`              | show memory and swap usage   |
| `du`                | show directory space usage   |
| `du -sh`            | display readable sizes in GB |
| `df`                | show disk usage              |
| `uname -a`          | show kernel config           |

## Networking

| Command                 | Description                        |
|-------------------------|------------------------------------|
| `ping host`             | ping host                          |
| `whois domain`          | get whois for domain               |
| `dig domain`            | get DNS for domain                 |
| `dig -x host`           | reserve lookup host                |
| `wget <file>`           | download file                      |
| `wget -c <file>`        | continue stopped download          |
| `wget -r <url>`         | recursively download file from url |
| `curl <url>`            | output the webpage from url        |
| `curl -o page.html url` | writes the page to page.html       |
| `ssh -p port user@host` | connect using port                 |
| `ssh -D user@host`      | connect and use bind port          |

## Permissions

| Command | Description               |
|---------|---------------------------|
| `chmod` | change permission of file |

* 4 - read(r)   
* 2 - write(w)
* 1 - execute(x)

**order**: owner/group/world -> `-rwxrwxrwx`

Example:

* `chmod 777` rwx for everyone
* `chmod 755` rwx for owner, rx for group and world

## Some others

