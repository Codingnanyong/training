### Docker Coommand

1.  Docker Settings

    > Check Docker Version : docker Version
    > Check Execution Environment : docker system info
    > Docker use Disk Status : docker sytem df

2.  Docker Image Manipulation

    > Image Download (use Docker Hub) : docker image pull \[option\] {docker-image}\[:tag\]
    > Check Image List : docker image ls \[option\] \[repositories\]
    >
    > > option

           *    --all, -a : all image
           *    --digests : Digests option
           *    --no-trunc : result all
           *    -- quiet, -q : only Docker Image ID

    > > b. result order

           *  REPOSITORY : image name
           *  TAG : image tag
           *  IMAGE ID : image ID
           *  CREATED : write date
           *  SIZE : image size

    > Image Detail : docker image inspect {docker-image}
    > Image Tag Set-up : docker image tag {docker-image} {tag-name}
    > Image Search : docker search \[option\] {keyword}
    >
    > > option

            *   --no-trunc : result all
            *   --linit : n search result
            *   --filter=start=n : Specify the number of favorites

    > > b. result order

            *   NAME : image Name
            *   DESCRIPTION : image description
            *   STARS : Number of favorites
            *   OFFICIAL : official image yes or not
            *   AUTOMATED : Created automated base \'Dockerfile\' yes or not

    > Image Remove : docker image rm \[option\] {docker-image}\[image-name\]
    >
    > > option

            *   --force, -f : force remove image
            *   --no-prune : Do not delete intermediate images

    > > docker image prune \[option\]

            *   --all, -a : Not use image all Remove
            *   --force, -f : force remove image

    > Login Docker Hub : docker login \[option\] \[Server\]
    >
    > > option

            *   --password, -p : password  \--username, -u : username

    > Image Upload : docker image push {docker-image} \[:tag\]
    > Logout Docker Hub : docker logout \[Server\]

3.  Container

    > Create Container and Start : docker container run \[option\] {docker-image}\[:tag\] \[para\]
    >
    > > option

            *   --attach, -a : attach STDIN,STDOUT,STDERR
            *   --cidfile : Output container ID to file
            *   --detach, -d : create container and run background
            *   --interactive, -i : standard input by container
            *   --tty, -t : Use a terminal device

    > Container Excution Background : docker container run \[option\]{docker-image}\[:tag\] \[para\]
    >
    > > option

            *   --detach, -d :run background
            *   --user, -u : specify user name
            *   --restart=\[no \|on-failure \| on-failure: {count} \| always \| unless-stopped\] : Option to restart based on command execution results  *   --rm : Automatically delete containers after command execution completes

    > > restart option

            *   no : do not restart
            *   on-failure : When the exit status is not 0
            *   on-failure:{count} : Restart n times when the termination status is not 0
            *   always : always
            *   unless-stopped : Always, unless the latest container is stoppe

    > Network set-up : docker container run \[network-option\] {docker-image}\[:tag\] \[para\]
    >
    > > option

        *   --add-host=\[host Name :IP\] : define hostname and address by container \'/etc/hosts\'
        *   --dns=\[IP\] : Specify IP address of DNS server for container
        *   --expose : Assigns a port number in the specified range
        *   --mac-address=\[MAC Address\] : Specifies the mac address of the container
        *   --net=\[bridge \| none \| container:\<name \| id \| host\| NETWORK \] : Specifies the container\'s network
        *   --hostname, -h : Specifies the container\'s own host name  \--publish, -p\[host port\]:\[container port\] : Port mapping of hosts and containers
        *   --publish-all, -P : Assign host and random port to container

    > Create and run containers by specifying resources : docker container run \[resource option\] {docker-image}\[:tag\] \[para\]
    >
    > > option

        *   --cpu-shares, -c : Distribution of CPU usage
        *   --memory, -m : Run with limited memory available
        *   --volume=\[directory by host\]:\[directory by container\], -v : Share directory between host and container

    > Create and Run container Environment : docker container run \[enviroment option\] {docker-image}\[:tag\] \[para\]
    >
    > > option

        *   --env=\[enviroment value\], -e : Set environment variables
        *   --env-file=\[FileName\] : Setting environment variables from files
        *   --read-only=\[true \| false\] : Makes the container\'s file system read-only.
        *   --workdir=\[path\], -w : Set the container\'s working directory
        *   -u, \--user=\[username\] : Specifies username or UID

    > Running Container List : docker container ls \[option\]
    >
    > > option

        *   --all, -a : Show all containers including running/stopped ones
        *   --filter, -f : Filter which containers to display
        *   --format : Specifies display format
        *   --last, -n : Show only the last n running containers
        *   --latest, -l : Show only the last launched container
        *   --no-trunc : Display information without omitting it
        *   --quiet, -q : Show only container id
        *   --size, -s : Show file size

    > Running Container Status : docker container stats {container}
    > Container Run : docker container start \[option\] {container}\[container\]
    >
    > > option

        *   --attach, -a : Opens standard output and standard error output.
        *   --interactive, -i : Opens the container\'s standard input

    > Stop Container : docker container stop \[option\] {container} \[container\]
    >
    > > option

        *   --time, -t : Specify container stop time (default : 10s)

    > Restart Container : docker container restart \[option\] {container} \[container\]
    >
    > > option

        *   -time, -t : Specify container stop time (default : 10s)

    > Remove Container : docker container rm \[option\] {container} \[container\]
    >
    > > option

        *   --force, -f : force remove running container
        *   --volumes, -v : Remove the allocated volume
        ❕ container puse / unpuse : docker container puse(unpuse) {container}

4.  Network

    > Network List : docker network ls \[option\]
    >
    > > option

        *   --f, \--filter=\[\] : filter the output
        *   --no-trunc : Print detailed information -q,
        *   --quiet : Show only network ID

    > Write Network : docker network create \[option\] network
    >
    > > option

        *   --driver, -d : Network bridge or overlay (default bridge)
        *   --ip-range : Specifies the range of IP addresses assigned to the container.
        *   --subnet : Specify subnet in CIDR format
        *   --ipv6 : Whether to enable IPv6 network or not (true/false)
        *   -label : Labels set on the network

    > Connection Network : docker network connect \[option\] network container
    >
    > > option

        *   --ip : IPv4 Address
        *   --ip6 : IPv6 Address
        *   --alias : Alias Name
        *   --link : Links to other containers

    > Network Detail Status : docker network inspect \[option\] network
    > Network Remove : docker network rm \[option\] network

5.  Manipulating a running Docker container

    > Movable container connection : docker container attach
    > Running processes in live containers : docker container exec \[option\] {container} {exec} \[para\]
    >
    > > option

        *   --detach, -d : Run command in background
        *   --interactive, -i : Opens the container\'s standard input
        *   --tty, -t : Use a terminal device
        *   --user, -u : Specify user name

    > Check the process of the live container : docker container top
    > Check port forwarding of running container : docker container port
    > Change Container Name : docker container rename
    > Copy files inside container : docker container cp {container}:{container path} {host directory path}
    > Differential verification of container operations : docker container diff {container}

6.  Create Docker Image (container - docker image)
    > Building an image from a container : docker container commit \[option\] {container} \[image\[:tag\]\]
    >
    > > option
        *   --author, -a : specify author
        *   --message, -m : specify message
        *   --change, -c : specify Dockerfile command when committing
        *   --pause, -p : Pause the container and commit
    > Output container as tar file : docker container export {container}
    > Create image from tar file : docker image import {file or URL} \| - \[image\[:tag\]\]
    > Save image : docker image save \[option\] {save fileName} \[image\]
    > Read image : docker image load \[option\]
    > Bulk deletion of unnecessary images/containers : docker system prune \[option\]
    >
    > > option
        *   --all, -a : Remove all unused resources
        *   --force, -f : Force Remove
