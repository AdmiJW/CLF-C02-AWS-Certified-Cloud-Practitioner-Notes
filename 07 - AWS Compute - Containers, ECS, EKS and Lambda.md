# 1 - Container Basics

## 1.1 - Introduction to Containers

A **container** is a lightweight, portable, and isolated environment that packages an application together with everything it needs to run.

A container image typically includes:
- **Application code and binaries**
- **Libraries and dependencies**
- **Runtime environment**
- **Configuration files** and other required components

### Why Do We Need Containers?

Traditional application deployment can cause **environment inconsistencies**.

For example:
1. A developer builds an application on their local machine
2. The application depends on specific libraries, dependencies, and configurations
3. The application is deployed to another server
4. It fails because the server has different dependencies or configurations

This leads to the common problem: **"It works on my machine."**

### How Containers Solve This Problem:

- Package the application and its dependencies into a **container image**.
- Deploy the same image across different environments
- Run the image using a compatible **container runtime**
- Reduce differences between development, testing, and production environments

**Key Concept:** Containers provide a **consistent application environment**, making deployments more reliable and predictable

## 1.2 - Container Architecture

Containers use **operating system-level virtualization**, meaning multiple containers share the underlying host operating system kernel.

### Container Architecture Components

1. **Hardware** - Physical or virtual infrastructure providing computing resources
2. **Host Operating System** - Provides the shared OS kernel
3. **Container Runtime Engine** - Software responsible for running containers
4. **Containers** - Isolated environments containing applications and their dependencies

### Containers vs. Virtual Machines (VMs)

| **Feature**          | **Containers**                                    | **Virtual Machines**                              |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |
| **Virtualization**   | Operating system-level                            | Hardware-level                                    |
| **Operating System** | Share the host OS kernel                          | Each VM runs its own guest OS                     |
| **Resource Usage**   | Lightweight                                       | Higher overhead                                   |
| **Startup Time**     | Typically seconds                                 | Generally slower                                  |
| **Isolation**        | Isolated processes and environments               | Separate guest operating systems                  |
| **Portability**      | Portable across compatible container environments | Requires compatible virtualization infrastructure |

**Key Distinction:**
- **Containers** share the host OS kernel, reducing overhead
- **Virtual Machines** run separate guest operating systems, requiring more resources

## 1.3 - Key Benefits of Containers

### 1. Isolation

Containers provide isolated execution environments.

Each container can have its own:
- **Process space**
- **File system**
- **Network environment**
- **Environment configuration**

Applications run independently, similar to separate virtual machines, while sharing the host OS kernel.

### 2. Lightweight

- Containers do not require a separate guest operating system
- Have lower resource overhead compared to traditional VMs
- Can run efficiently on shared infrastructure

### 3. Fast Startup

- Containers can typically start **within seconds**
- Their lightweight architecture enables rapid application deployment

### 4. Consistency

- Applications are packaged into **container images**
- Images are **immutable**, meaning an existing image is not modified when a container runs
- The same image provides a consistent application environment across deployments

### 5. Portability

Container images can be deployed across compatible environments, including:
- Local development machines
- On-premises data centers
- Cloud infrastructure

**Key Concept:** Containers make applications easier to **package, deploy, and move between environments**

## 1.4 - Container Technology and Docker

### Technologies Behind Containers

Containers rely on operating system features, particularly in Linux.

| **Technology**               | **Purpose**                                                |
| ---------------------------- | ---------------------------------------------------------- |
| **Namespaces**               | Provide isolation for processes and other system resources |
| **Control Groups (cgroups)** | Manage and limit container resource usage                  |
| **Union File Systems**       | Support layered container file systems                     |

These technologies enable containers to remain **isolated, lightweight, and efficient**

### What is Docker?

**Docker** is a popular container technology used to build, package, and run applications in containers

Important concepts:
- **Container Image** - A packaged application containing its dependencies and required runtime components
- **Container** - A running instance of a container image
- **Container Runtime** - Software responsible for executing an managing containers.

Other container technologies mentioned include **containerd, CRI-O,** and **Podman**

**Important Distinction:**
- **Container Image** - The packaged application
- **Container** - The running instance of that image
- **Docker** - A popular technology for working with container images and containers

## 1.5 - Exam Focus

- **Container** - Lightweight, isolated environment for running applications
- **Container Image** - Packages application code, dependencies, libraries, and runtime components
- **Container Runtime** - Software that runs containers
- **Docker** - Popular container technology
- **Operating System-Level Virtualization** - Containers share the host OS kernel
- **Containers vs VMs** - Containers do not require a separate guest OS, making them more lightweight
- **Isolation** - Containers have separate process, file system, and network environments
- **Portability** - Same container image can run across compatible environments
- **Consistency** - Immutable images help reduce environment differences
- **Fast Startup** - Containers can typically start within seconds

### Exam Scenario Associations

- **Application works locally but fails on another server - Containers help ensure consistent dependencies**
- **Need lightweight application isolation - Containers**
- **Need fast application startup - Containers**
- **Need to package application dependencies together - Container Image**
- **Need to run the same application across different environments - Container Portability**
- **Need a popular container technology - Docker**

# 2 - Docker Basics

## 2.1 - What is Docker?

**Docker** is an **open-source container platform** used to develop, package, ship, and run applications as containers

Docker provides three main capabilities:
- **Build** - Package application code, libraries, and dependencies into a container image
- **Ship** - Store and distribute container images through repositories
- **Run** - Launch containers from images on compatible environments

A Docker container can run on:
- Local development machines
- Physical servers in on-premises data centers
- Virtual machines in the cloud, such as **Amazon EC2 instances**

**Key Concept:** Docker enables applications to run consistently across different environments by packaging them into **portable container images**

## 2.2 - Docker Container Lifecycle

Docker follows a simple process to build, distribute, and run containers

### Step 1 - Create a Dockerfile

A **Dockerfile** is a text file containing instructions for building a Docker container image.

It defines:
- **Base Image** - The starting environment, such as Ubuntu
- **Application Code** - The source code to include
- **Dependencies** - Required libraries, binaries, and runtime components
- **Startup Instructions** - How the application should start when the container runs

### Step 2 - Build a Container Image

Docker uses the instructions in the Dockerfile to create a **container image**
- The `docker build` command builds an image from a Dockerfile
- The resulting image contains the application and its required dependencies
- The image can be reused to launch multiple containers

### Step 3 - Store or Distribute the Image

After building the image, it can be:
- **Stored locally** - Used to launch containers on the same machine
- **Pushed to an image repository** - Stored for distribution and deployment on other machines

**Docker Hub** is an example of a container image repository.

### Step 4 - Run the Container

- The `docker run` command creates and starts a container from an image
- The container executes the packaged application
- The same image can be used to launch containers across compatible environments

### Container Workflow

`Dockerfile` - `docker build` - Container Image - Image Repository (Optional) - `docker run` - Running Container

## 2.3 - Docker Image Layers

Docker images are built using multiple **layers**

Each layer represents part of the container image, such as:
1. **Base Image** - For example, Ubuntu
2. **Application Source Code** - Application files
3. **Application Binaries and Libraries** - Required dependencies and executable components

When a container is launched from an image, Docker adds a **writable container layer** on top of the image's read-only layers

This writable layer allows the running container to create or modify files, such as logs.

### Important Docker Components

| **Component**        | **Purpose**                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **Dockerfile**       | Defines instructions for building a container image                       |
| **Docker Image**     | Read-only, layered package containing an application and its dependencies |
| **Docker Container** | Running instance of a Docker image                                        |
| **Docker Hub**       | Repository for storing and distributing Docker images                     |
| **Docker Engine**    | Software used to build and run Docker containers                          |

**Key Distinction:**
- **Dockerfile** - Instructions to build an imaghe
- **Docker Image** - Packaged application used to create containers
- **Docker Container** - Running instance created from an image
- **Docker Hub** - Repository used to store and share images

## 2.4 - Running Docker on Amazon EC2

**Amazon Elastic Compute Cloud (Amazon EC2)** provides virtual servers in AWS that can be used to run Docker containers.

For example:
- Launch a Linux-based **Amazon EC2 instance**
- Install and use Docker on the instance
- Build or retrieve a Docker container image
- Run the image as a container using Docker

**Key Concept:** Amazon EC2 provides the **compute infrastructure**, while Docker provides the **container platform** used to run applications

## 2.5 - Exam Focus

- **Docker** - Open-source platform for building, shipping, and running containers
- **Dockerfile** - Instructions for building a container image
- **Docker Image** - Packaged application with its dependencies
- **Docker Container** - Running instance of a Docker image
- **Docker Hub** - Container image repository
- **Docker Engine** - Software that builds and runs Docker containers
- `docker build` - Builds a container image from a Dockerfile
- `docker run` - Creates and starts a container from an image
- **Image Layers** - Read-only layers containing application components; running containers add a writable layer
- **Amazon EC2** - AWS compute service that can host Docker containers

**Exam Scenario Associations:**

- **Need to package an application and its dependencies - Docker Image**
- **Need instructions to build a container image - Dockerfile**
- **Need to store and distribute Docker images - Docker Hub**
- **Need to execute an application packaged as an image - Docker Container**
- **Need to run Docker containers on a virtual server in AWS - Amazon EC2**

# 3 - \[Exercise] - Run Docker Containers on EC2

## 3.1 - Running Docker Containers on Amazon EC2

**Amazon Elastic Compute Cloud (Amazon EC2)** provides virtual servers that can be used to host and run Docker containers

In this exercise, a simple web server is deployed inside a Docker container running on a Linux-based **Amazon EC2 Instance**.

### Key Components

- **Amazon EC2** - Provides the compute infrastructure (CPU, memory, and operating system)
- **Docker Engine** - Runs and manages containers on the EC2 instance
- **Docker Image** - Packages the web server application and its dependencies
- **Docker Container** - Executes the web server application
- **EC2 Security Group** - Controls which inbound network traffic can reach the instance

**Key Concept**: Amazon EC2 provides the underlying infrastructure, while Docker manages the containerized application.

## 3.2 - Building and Running a Docker Container

### Step 1: Install Docker Engine

Docker Engine must be installed and running on the EC2 instance before containers can be launched

### Step 2: Create a Dockerfile

A **Dockerfile** defines how the container image should be built.

For this exercise:
- **Base Image** - `httpd`, an Apache HTTP web server image from Docker Hub
- **Application File** - `index.html`, containing the web page
- **Destination Directory** - `/usr/local/apache2/htdocs/`, where Apache serves web content

Example:
```dockerfile
FROM httpd 
COPY index.html /usr/local/apache2/htdocs/
```

### Step 3: Build the Docker Image

The `docker build` command creates an image using the Dockerfile

```bash
sudo docker build -t my-web-server .
```

- `-t` - Assigns a name or tag to the image
- `.` - Specifies the current directory as the build context

### Step 4: Run the Docker Container

The `docker run` command creates and starts a container from the image

```bash
sudo docker run --name container1 -p 80:80 my-web-server
```

- `--name` - Assigns a name to the container
- `-p 80:80` - Maps EC2 host port 80 to container port 80
- `my-web-server` - Specifies the image to run

Running containers can be listed using:
```bash
sudo docker ps
```

**Key Concept:** A Docker image is used to launch a running container. Multiple containers can be created from the same image.

## 3.3 - Container Networking and Port Mapping

Containers have their own network environments

To access a containerized web application from outside the EC2 instance, Docker uses **port mapping**

### How Port Mapping Works

Docker maps a port on the EC2 host to a port inside the container

Example:
```bash
-p 8080:80
```

| **Port** | **Purpose**                                      |
| -------- | ------------------------------------------------ |
| **8080** | Port exposed on the EC2 host                     |
| **80**   | Port used by the web server inside the container |

External traffic reaching the EC2 instance on port 8080 is forwarded to port 80 inside the container.

### EC2 Security Groups

An EC2 Security Group acts as a virtual firewall controlling inbound and outbound traffic for the instance.

To access the containerized web server:
- **Port 22 (SSH)** - Allows remote administration, preferably restricted to a trusted IP address.
- **Port 80 (HTTP)** - Allows access to the first web server container.
- **Port 8080 (Custom TCP)** - Allows access to the second web server container.

**Important Distinction:**
- **Docker Port Mapping** - Connects an EC2 host port to a container port.
- **EC2 Security Group** - Determines whether network traffic is permitted to reach the EC2 instance.

**Key Concept:** Configuring Docker port mapping alone does not guarantee external access. The corresponding inbound traffic must also be allowed by the EC2 security group.

## 3.4 Running Multiple Containers on a Single EC2 Instance

A single Amazon EC2 instance can run multiple Docker containers simultaneously.

For example:

| Container   | EC2 Host Port | Container Port |
| ----------- | ------------- | -------------- |
| Container 1 | 80            | 80             |
| Container 2 | 8080          | 80             |

Both containers run the same web server application but use different host ports.

### Important Characteristics

- Multiple containers can run on the **same EC2 instance**.    
- Different containers can use the **same internal port**.
- Containers must use **different host ports** when binding to the same host IP address.
- The number of containers that can run depends on available **CPU, memory, and other system resources**.

**Key Concept**: Containers allow multiple isolated applications to share the same underlying compute infrastructure efficiently.

## 3.5 Exam Focus

- **Amazon EC2** - Provides virtual servers capable of hosting Docker containers.
- **Docker Engine** - Runs and manages containers on an EC2 instance.
- **Dockerfile** - Defines how a container image is built.
- **Docker Image** - Packages an application and its dependencies.
- **Docker Container** - Running instance of a Docker image.
- **Docker Hub** - Repository for storing and distributing container images.
- **Port Mapping** - Connects an EC2 host port to a container port.
- **EC2 Security Group** - Controls permitted network traffic to the instance.
- **Multiple Containers** - Can share one EC2 instance, subject to available resources.

**Exam Scenario Associations:**

- **Need to run containers on a virtual server in AWS - Amazon EC2**
- **Need to build a reusable application package - Docker Image**
- **Need to expose a containerized application - Docker Port Mapping**
- **Need to allow inbound HTTP traffic - EC2 Security Group**
- **Need to run multiple isolated applications on one server - Docker Containers**

**Exam Tip**: The CLF-C02 exam focuses on understanding container concepts and AWS compute services, rather than memorizing Docker commands or performing manual container setup.

# 4 - Microservices and Container Orchestration

## 4.1 Monolithic vs Microservices Architecture

Applications can be designed using different architectural approaches, including **Monolithic Architecture** and **Microservices Architecture**.

### Monolithic Architecture

A **Monolithic Architecture** combines multiple application components and functionalities into a single application.

Characteristics:
- Application components are tightly integrated.
- The application is typically deployed as a single unit.
- Scaling individual components independently can be difficult.
- Can become challenging to manage as application complexity and traffic increase.

### Microservices Architecture

A **Microservices Architecture** breaks a large application into smaller, independent services that communicate with one another.

Each microservice typically handles a specific application functionality.

**Key Benefits:**
- Independent Scaling - Scale individual services based on demand.
- Loose Coupling - Services operate independently with fewer dependencies.
- Independent Monitoring and Logging - Monitor and troubleshoot individual services.
- Flexibility - Develop, update, and deploy individual services independently.

### Monolithic vs Microservices

| Feature        | Monolithic Architecture                | Microservices Architecture             |
| -------------- | -------------------------------------- | -------------------------------------- |
| **Structure**  | Single large application               | Multiple smaller services              |
| **Coupling**   | Tightly coupled                        | Loosely coupled                        |
| **Scaling**    | Typically scale the entire application | Scale individual services              |
| **Deployment** | Typically deployed as one unit         | Services can be deployed independently |
| **Management** | Simpler initially                      | Requires coordination between services |

**Key Concept**: Microservices support **independent scaling and loose coupling**, making them useful for modern applications with complex requirements and changing workloads.

## 4.2 Containers and Microservices

**Containers** provide a lightweight and portable way to package and run microservices.
- Individual microservices can run inside separate containers.
- Each container packages the service with its required dependencies.
- Containers provide isolated execution environments.
- Individual microservices can be scaled by running additional containers.

### Challenges of Managing Containers at Scale

Running a few containers is relatively straightforward. However, managing hundreds or thousands of containers introduces operational challenges.

These include:
- **Container Scheduling and Placement** - Deciding which host should run each container.
- **Resource Management** - Allocating CPU and memory resources.
- **Health Checks and Recovery** - Detecting failures and restarting unhealthy containers.
- **Service Exposure** - Making containerized applications accessible.
- **Container Networking** - Enabling communication between containers.
- **Monitoring and Logging** - Tracking container health and application activity.
- **Authentication and Security** - Managing secure access to services.

**Key Concept**: Containers simplify application deployment, but managing large numbers of containers requires container orchestration.

## 4.3 Container Orchestration

**Container Orchestration** is the automated management, deployment, scaling, and operation of containers across computing infrastructure.

A container orchestration platform coordinates containers and manages their lifecycle.

### Key Responsibilities
- Automatically schedule and place containers on available hosts.
- Manage container resource requirements.
- Perform health checks and restart failed containers.
- Scale containers based on application requirements.
- Manage container networking and communication.
- Support monitoring, logging, and security.

### Control Plane vs Data Plane

Container orchestration platforms typically consist of two main components.

| Component     | Responsibility                                                                         |
| ------------- | -------------------------------------------------------------------------------------- |
| **Control Plane** | Manages and coordinates containers, including scheduling, placement, and desired state |
| **Data Plane**    | Provides the compute resources where containers actually run                           |

**Key Distinction:**
- **Control Plane** - Decides how and where containers should run.
- **Data Plane** - Provides the infrastructure that executes containers.

## 4.4 Container Orchestration Platforms

Several platforms are available for managing containers at scale.

Examples include:
- **Kubernetes** - Widely used open-source container orchestration platform.
- **Docker Swarm** - Container orchestration technology associated with Docker.
- **Apache Mesos** - Platform for managing computing resources and workloads
- **Red Hat OpenShift** - Container application platform based on Kubernetes.

### Kubernetes

Kubernetes is a widely adopted open-source container orchestration platform.

It automates the deployment, scaling, and management of containerized applications.

Major cloud providers offer managed Kubernetes services, reducing the operational effort required to manage Kubernetes infrastructure.

**Key Concept**: Kubernetes is a **container orchestration platform**, not a container runtime like Docker.

## 4.5 AWS Container Management Services

AWS provides two primary container orchestration services:

1. **Amazon Elastic Container Service (Amazon ECS)**
2. **Amazon Elastic Kubernetes Service (Amazon EKS)**

Both services help manage containerized applications at scale.

### Amazon Elastic Container Service (Amazon ECS)

**Amazon ECS** is an AWS-native, fully managed container orchestration service.

- Designed specifically for managing containers on AWS.
- Supports container deployment, management, and scaling.
- Uses AWS's native container orchestration technology.

### Amazon Elastic Kubernetes Service (Amazon EKS)

**Amazon EKS** is a managed Kubernetes service provided by AWS.

- Runs containerized applications using **Kubernetes**.
- AWS manages the Kubernetes control plane.
- Suitable for applications that use the Kubernetes ecosystem.

### Amazon ECS vs Amazon EKS

| Feature                  | Amazon ECS                                       | Amazon EKS                      |
| ------------------------ | ------------------------------------------------ | ------------------------------- |
| **Service Type**             | Container orchestration                          | Managed Kubernetes              |
| **Orchestration Technology** | AWS-native                                       | Kubernetes                      |
| **Primary Purpose**          | Manage containers using AWS-native orchestration | Run Kubernetes workloads on AWS |
| **Compute Options**          | Amazon EC2 or AWS Fargate                        | Amazon EC2 or AWS Fargate       |

**Important Exam Distinction:**
- **Amazon ECS** - AWS-native container orchestration.
- **Amazon EKS** - Managed Kubernetes on AWS.

## 4.6 Container Compute Options: Amazon EC2 vs AWS Fargate

Amazon ECS and Amazon EKS can run containerized workloads using different compute options.

### Amazon Elastic Compute Cloud (Amazon EC2)

**Amazon EC2** provides virtual machines that host containers.

- Containers run on EC2 instances.
- Customers manage the underlying EC2 instances.
- Customers are responsible for instance provisioning, maintenance, and capacity management.

### AWS Fargate

**AWS Fargate** is a **serverless compute engine for containers**.

- Runs containers without requiring customers to provision or manage servers.
- AWS manages the underlying compute infrastructure.
- Supports both **Amazon ECS** and **Amazon EKS**.

### Amazon EC2 vs AWS Fargate

| Feature                     | Amazon EC2                                  | AWS Fargate                                  |
| --------------------------- | ------------------------------------------- | -------------------------------------------- |
| **Compute Model**               | Virtual machines                            | Serverless containers                        |
| **Server Management**           | Customer manages EC2 instances              | AWS manages underlying servers               |
| **Infrastructure Provisioning** | Customer provisions instances               | No server provisioning required              |
| **Container Hosting**           | Containers run on EC2 instances             | Containers run on AWS-managed infrastructure |
| **Primary Benefit**             | Greater control over compute infrastructure | Reduced infrastructure management            |

**Key Distinction:**

- **Amazon ECS / Amazon EKS** - Container orchestration services that manage container workloads.
- **Amazon EC2 / AWS Fargate** - Compute options that provide the resources to run containers.

**Exam Scenario Associations:**

- **Need AWS-native container orchestration - Amazon ECS**
- **Need managed Kubernetes - Amazon EKS**
- **Need to run containers on customer-managed virtual machines - Amazon EC2**
- **Need to run containers without managing servers - AWS Fargate**

## 4.7 Exam Focus

- **Monolithic Architecture** - Application components combined into a single deployable unit.
- **Microservices Architecture** - Smaller, loosely coupled services that can scale independently.
- **Containers** - Lightweight environments commonly used to host microservices.
- **Container Orchestration** - Automates container deployment, scheduling, scaling, and management.
- **Control Plane** - Coordinates and manages container workloads.
- **Data Plane** - Provides compute resources that run containers.
- **Kubernetes** - Popular open-source container orchestration platform.
- **Amazon ECS** - AWS-native, fully managed container orchestration service.
- **Amazon EKS** - Managed Kubernetes service on AWS.
- **Amazon EC2** - Virtual machines that can host containers.
- **AWS Fargate** - Serverless compute engine for containers, supported by ECS and EKS.

**Exam Scenario Associations:**

- **Need independently scalable application services - Microservices Architecture**
- **Need automated management of hundreds of containers - Container Orchestration**
- **Need to deploy containers using AWS-native orchestration - Amazon ECS**
- **Need to run Kubernetes applications on AWS - Amazon EKS**
- **Need container hosting with control over virtual machines - Amazon EC2**
- **Need serverless container hosting without managing EC2 instances - AWS Fargate**

**Exam Tip**: Remember the distinction between **container orchestration (ECS/EKS)** and **container compute (EC2/Fargate)**. This is a key concept for AWS Cloud Practitioner exam scenarios.

# 5 - Amazon ECS

## 5.1 What Is Amazon ECS?

**Amazon Elastic Container Service (Amazon ECS)** is a **fully managed container orchestration service** provided by AWS.

It is used to **deploy, run, manage, and scale containerized applications** using Docker-compatible container images.

### Key Features

- **AWS-Native Service** - Built by AWS for container orchestration.
- **Container Management** - Simplifies deploying and managing containers at scale.
- **Managed Orchestration** - AWS manages the container orchestration control plane.
- **Flexible Compute Options** - Supports Amazon EC2 and AWS Fargate.
- **Native AWS Integrations** - Integrates with other AWS services for networking, monitoring, and deployment.

**Key Concept**: Amazon ECS simplifies running containers at scale without requiring customers to manage Kubernetes.

## 5.2 Amazon ECS Compute Options

Amazon ECS supports two compute options for running containers:
1. **Amazon Elastic Compute Cloud (Amazon EC2)**
2. **AWS Fargate**

### Amazon ECS with Amazon EC2

With the **EC2 launch type**, containers run on EC2 instances managed by the customer.

- Customers provision and manage the EC2 instances.
- Customers are responsible for managing the underlying virtual machines.
- Provides greater control over the compute infrastructure.

### Amazon ECS with AWS Fargate

**AWS Fargate** is a **serverless compute engine for containers**.

- AWS manages the underlying compute infrastructure.
- Customers do not need to provision or maintain EC2 instances.
- Compute resources are provisioned based on the **CPU and memory requirements** of an ECS task.

### What Is an ECS Task?

An **ECS Task** is a running instance of an ECS task definition, which specifies how one or more containers should run.

With AWS Fargate:

- Define the required **vCPU** and **RAM** for the task.
- Fargate provisions the necessary compute resources.
- AWS manages the underlying infrastructure.

### Amazon EC2 vs AWS Fargate

| Feature                       | Amazon EC2                     | AWS Fargate                           |
| ----------------------------- | ------------------------------ | ------------------------------------- |
| **Compute Model**             | Virtual machines               | Serverless containers                 |
| **Infrastructure Management** | Customer manages EC2 instances | AWS manages underlying infrastructure |
| **Resource Provisioning**     | Customer provisions instances  | Based on ECS task requirements        |
| **Server Maintenance**        | Customer responsibility        | AWS responsibility                    |
| **Primary Benefit**           | Greater infrastructure control | Reduced operational overhead          |

**Key Distinction:**

- **Amazon ECS** - Manages container orchestration.
- **Amazon EC2** - Provides customer-managed compute infrastructure.
- **AWS Fargate** - Provides serverless compute infrastructure for containers.

## 5.3 Amazon ECS Integration with AWS Services

Amazon ECS provides native integration with various AWS services.

| AWS Service                         | Integration Purpose                                            |
| ----------------------------------- | -------------------------------------------------------------- |
| **Application Load Balancer (ALB)** | Distributes incoming traffic across containerized applications |
| **Amazon CloudWatch**               | Monitors container metrics and logs                            |
| **AWS CodeBuild**                   | Builds and tests application code                              |
| **AWS CodeDeploy**                  | Automates application deployments                              |
| **Amazon API Gateway**              | Provides API access to backend applications                    |

These integrations simplify deploying, monitoring, and managing containerized applications on AWS.

### Amazon ECS vs Amazon EKS

Both services provide container orchestration, but they use different technologies.

| Feature                  | Amazon ECS                                        | Amazon EKS                          |
| ------------------------ | ------------------------------------------------- | ----------------------------------- |
| **Full Name**                | Amazon Elastic Container Service                  | Amazon Elastic Kubernetes Service   |
| **Orchestration Technology** | AWS-native                                        | Kubernetes                          |
| **Complexity**               | Generally simpler to get started                  | Requires Kubernetes knowledge       |
| **Primary Use Case**         | Running containers using AWS-native orchestration | Running Kubernetes workloads on AWS |
| **Compute Options**          | Amazon EC2 and AWS Fargate                        | Amazon EC2 and AWS Fargate          |

**Key Distinction:**

- **Amazon ECS** - Suitable for AWS-native container management without Kubernetes complexity.
- **Amazon EKS** - Suitable when applications require Kubernetes orchestration.

## 5.4 Exam Focus

- **Amazon ECS** - Fully managed, AWS-native container orchestration service.
- **Container Management** - Deploys, manages, and scales containerized applications.
- **ECS Task** - Running instance of a task definition containing one or more containers.
- **Amazon EC2** - Customer-managed compute option for ECS containers.
- **AWS Fargate** - Serverless compute option for ECS containers.
- **Fargate Resource Allocation** - Based on task vCPU and memory requirements.
- **Application Load Balancer** - Distributes traffic to containerized applications.
- **Amazon CloudWatch** - Monitors container metrics and logs.
- **Amazon ECS vs Amazon EKS** - AWS-native orchestration vs managed Kubernetes.

**Exam Scenario Associations:**

- **Need AWS-native container orchestration - Amazon ECS**
- **Need to run containers without managing servers - AWS Fargate**
- **Need greater control over container host infrastructure - Amazon EC2**
- **Need to allocate CPU and memory for serverless containers - ECS Task with Fargate**
- **Need to distribute traffic across ECS containers - Application Load Balancer**
- **Need to monitor ECS applications - Amazon CloudWatch**
- **Need managed Kubernetes instead of AWS-native orchestration - Amazon EKS**

**Exam Tip**: Remember that **Amazon ECS manages container orchestration**, while **Amazon EC2 and AWS Fargate provide the compute resources** where containers run.

# 6 - Amazon ECS - How it Works?

## 6.1 Amazon ECS Architecture Overview

**Amazon Elastic Container Service (Amazon ECS)** is a fully managed container orchestration service that simplifies deploying, running, and managing containerized applications.

A typical ECS architecture involves three main roles:

- **Developer** - Develops applications, builds container images, and stores them in a container registry.
- **Cluster Administrator** - Configures ECS clusters and deploys containerized applications.
- **End User** - Accesses applications running inside containers, typically through a load balancer.

### Key AWS Services

| AWS Service                                        | Purpose                                                        |
| -------------------------------------------------- | -------------------------------------------------------------- |
| **Amazon ECS**                                     | Orchestrates and manages containerized applications            |
| **Amazon Elastic Container Registry (Amazon ECR)** | Stores and manages container images                            |
| **Amazon EC2**                                     | Provides virtual machines for running containers               |
| **AWS Fargate**                                    | Provides serverless compute for running containers             |
| **Elastic Load Balancing (ELB)**                   | Distributes incoming traffic across containerized applications |

**Key Concept**: Amazon ECS manages **container orchestration**, Amazon ECR stores **container images**, and EC2 or Fargate provides the **compute resources**.

## 6.2 Amazon ECS Deployment Workflow

### Step 1: Developer Builds and Stores Container Images

The developer:
1. Writes application code.
2. Builds a **Docker container image** containing the application and its dependencies.
3. Pushes the container image to **Amazon ECR**.

### What Is Amazon ECR?

**Amazon Elastic Container Registry (Amazon ECR)** is a fully managed AWS container image registry.

- Stores and manages container images.
- Allows container images to be retrieved for deployment.
- Serves a similar purpose to **Docker Hub**, but is managed by AWS.

**Important Distinction:**

- **Amazon ECR** - Stores container images.
- **Amazon ECS** - Deploys and manages containers.

### Step 2: Administrator Configures ECS

The administrator:
1. Creates an **Amazon ECS Cluster**.
2. Defines the application requirements using an **ECS Task Definition**.
3. Starts tasks using Amazon ECS.

An **ECS Task Definition** specifies how containers should run, including:
- **Container Image** - Which image to use.
- **CPU Requirements** - Required processing resources.
- **Memory Requirements** - Required RAM.
- **Port Configuration** - Network ports used by the application.

An **ECS Task** is a running instance of an ECS task definition.

### Step 3: ECS Runs Containers

Amazon ECS schedules tasks on the selected compute infrastructure:
- **Amazon EC2** - Containers run on EC2 instances.
- **AWS Fargate** - Containers run on AWS-managed serverless infrastructure.

When using EC2, the ECS agent communicates with the ECS control plane to help manage container execution.

### Step 4: Container Image Is Retrieved and Launched

For ECS running on EC2:
1. The **ECS control plane** communicates task instructions to the ECS Agent.
2. The ECS Agent coordinates with the container runtime.
3. The runtime retrieves the container image from **Amazon ECR**.
4. The container is launched using the specified configuration.

Multiple containers can run across the available compute infrastructure.

**Key Concept**: Amazon ECS coordinates container deployment, while the underlying compute environment executes the containers.

## 6.3 ECS Control Plane and Data Plane

Amazon ECS separates container management from container execution.

### Control Plane

**Amazon ECS** provides the managed control plane responsible for:
- Scheduling container tasks.
- Managing container deployments.
- Coordinating task placement.
- Communicating with ECS Agents on EC2 instances.

### Data Plane

The **data plane** provides the compute resources where containers run.

ECS supports:
- **Amazon EC2** - Customer-managed virtual machines.
- **AWS Fargate** - AWS-managed serverless compute.

### ECS Agent

The **ECS Agent** is software that runs on EC2 container instances and communicates with Amazon ECS.
- Receives instructions from the ECS control plane.
- Helps coordinate container execution.
- Works with the container runtime to manage containers.

ECS-optimized EC2 images include the required ECS software.

| Component         | Responsibility                                            |
| ----------------- | --------------------------------------------------------- |
| **ECS Control Plane** | Coordinates and manages container tasks                   |
| **ECS Agent**         | Communicates task instructions to EC2 container instances |
| **Container Runtime** | Executes containers                                       |
| **EC2 / Fargate**     | Provides compute resources to run containers              |

**Key Distinction**: The ECS Agent is relevant to the **EC2-based deployment architecture**. With Fargate, AWS manages the underlying infrastructure.

## 6.4 Exposing ECS Applications Using Load Balancers

Applications running inside ECS containers can be exposed to end users through **Elastic Load Balancing (ELB)**.

Amazon ECS can integrate with:
- **Application Load Balancer (ALB)** - Distributes application traffic, typically HTTP/HTTPS.
- **Network Load Balancer (NLB)** - Distributes network traffic, including TCP/UDP.

### How Users Access ECS Applications

1. Containers run on **Amazon EC2** or **AWS Fargate**.
2. An **Application Load Balancer** or **Network Load Balancer** distributes incoming traffic to the application.
3. End users access the application using the load balancer's **DNS name** or a mapped custom domain name.

**Key Concept**: Load balancers provide a common endpoint for users to access applications running across multiple ECS containers.

## 6.5 Exam Focus

- **Amazon ECS** - Fully managed, AWS-native container orchestration service.
- **Amazon ECR** - Fully managed container image registry.
- **ECS Cluster** - Logical grouping of ECS tasks and related compute capacity.
- **ECS Task Definition** - Specifies container configuration, including image, CPU, memory, and ports.
- **ECS Task** - Running instance of an ECS task definition.
- **ECS Agent** - Communicates between ECS and EC2 container instances.
- **Amazon EC2** - Customer-managed compute infrastructure for ECS containers.
- **AWS Fargate** - Serverless compute infrastructure for ECS containers.
- **Application Load Balancer / Network Load Balancer** - Distributes network traffic to containerized applications.

**Exam Scenario Associations:**

- **Need to store Docker container images on AWS - Amazon ECR**
- **Need to orchestrate and manage containers - Amazon ECS**
- **Need to define container CPU, memory, and image configuration - ECS Task Definition**
- **Need to run a configured container workload - ECS Task**
- **Need to run ECS containers without managing servers - AWS Fargate**
- **Need to run ECS containers on customer-managed instances - Amazon EC2**
- **Need to distribute traffic across ECS applications - Elastic Load Balancing**

**Exam Tip**: Do not confuse **Amazon ECR (container image storage)** with **Amazon ECS (container orchestration).** Also remember that ECS manages the workloads, while **EC2 or Fargate provides the compute resources**.

# 7 - Amazon EKS

## 7.1 What Is Amazon EKS?

**Amazon Elastic Kubernetes Service (Amazon EKS)** is a **fully managed Kubernetes service** provided by AWS.

It allows customers to deploy, run, and manage **Kubernetes-based containerized applications** without managing the Kubernetes control plane.

### Key Features

- **Managed Kubernetes** - AWS manages the Kubernetes control plane.
- **Open-Source Compatibility** - Runs an upstream-certified, Kubernetes-conformant version of Kubernetes.
- **Container Orchestration** - Automates container deployment, scheduling, and scaling.
- **Flexible Compute Options** - Supports **Amazon EC2** and **AWS Fargate**.
- **Kubernetes Ecosystem** - Supports standard Kubernetes tools and configurations.

### What Is Kubernetes?

**Kubernetes** is a widely adopted, open-source **container orchestration platform**.

It automates:
- Deployment of containerized applications.
- Container scheduling and placement.
- Application scaling.
- Management of containerized workloads.

**Key Concept**: Amazon EKS provides **managed Kubernetes on AWS**, allowing organizations to use familiar Kubernetes technologies while AWS manages the control plane.

## 7.2 Kubernetes Pods

In Kubernetes, applications are deployed using **Pods**.

A **Pod** is the smallest deployable computing unit in Kubernetes and contains **one or more containers**.

### Key Characteristics

- A Pod can contain a single container or multiple closely related containers.
- Containers within a Pod share networking and certain resources.
- Kubernetes schedules and manages Pods rather than directly scheduling individual containers.

### ECS Tasks vs EKS Pods

| Amazon ECS                           | Amazon EKS                              |
| ------------------------------------ | --------------------------------------- |
| **ECS Task**                         | **Kubernetes Pod**                      |
| Runs one or more containers          | Runs one or more containers             |
| Defined using an ECS Task Definition | Defined using Kubernetes configurations |
| Managed by Amazon ECS                | Managed by Kubernetes                   |

**Key Distinction**:
- **Amazon ECS** - Uses **Tasks** to run containers.
- **Amazon EKS** - Uses Kubernetes **Pods** to run containers.

## 7.3 Amazon EKS Compute Options

Amazon EKS supports two primary compute options for running Kubernetes Pods:
1. **Amazon Elastic Compute Cloud (Amazon EC2)**
2. **AWS Fargate**

### Amazon EKS with Amazon EC2

With EC2, Kubernetes Pods run on EC2 instances.

Amazon EKS supports **Managed Node Groups** to simplify managing the EC2 instances used by Kubernetes.
- Pods run on EC2 worker nodes.
- Managed Node Groups automate aspects of EC2 node provisioning and lifecycle management.
- Customers retain responsibility for managing relevant cluster configurations and workloads.

### Amazon EKS with AWS Fargate

**AWS Fargate** provides serverless compute for Kubernetes Pods.
- Pods run on AWS-managed infrastructure.
- Customers do not need to provision or manage EC2 worker nodes.
- AWS manages the underlying compute infrastructure.

### Amazon EC2 vs AWS Fargate for EKS

| Feature                       | Amazon EC2                                    | AWS Fargate                            |
| ----------------------------- | --------------------------------------------- | -------------------------------------- |
| **Compute Model**             | Virtual machines                              | Serverless containers                  |
| **Infrastructure Management** | Customer manages EC2-related responsibilities | AWS manages underlying servers         |
| **Node Management**           | Can use EKS Managed Node Groups               | No EC2 worker node management required |
| **Primary Benefit**           | Greater infrastructure control                | Reduced operational overhead           |

**Key Concept**: Amazon EKS manages **Kubernetes orchestration**, while EC2 or Fargate provides the **compute resources where Pods run**.

## 7.4 Kubernetes Version Management in Amazon EKS

Kubernetes is an open-source platform that receives regular updates, including:
- New features
- Bug fixes
- Security improvements

Amazon EKS supports specific Kubernetes versions and provides a defined support lifecycle.

### Kubernetes Version Support

The lecture describes the following version support lifecycle:

| Support Phase              | Duration             | Description                                                    |
| -------------------------- | -------------------- | -------------------------------------------------------------- |
| **Standard Support**       | 14 months            | Regular support for a Kubernetes minor version                 |
| **Extended Support**       | Additional 12 months | Continued support beyond the standard period                   |
| **After Extended Support** | Automatic upgrade    | AWS upgrades the EKS cluster to a supported Kubernetes version |

**Important**: These durations reflect the support model described in the lecture. Exact supported versions and lifecycle policies may change.

### Customer Responsibility

Although AWS manages the Kubernetes control plane, customers are responsible for planning and managing Kubernetes version upgrades for their clusters.
- Keep clusters on supported Kubernetes versions.
- Plan upgrades to maintain application compatibility.
- Avoid relying on automatic upgrades after support expiration.

**Key Distinction:**
- **AWS Responsibility** - Manages the EKS Kubernetes control plane.
- **Customer Responsibility** - Manages application workloads, cluster configurations, and upgrade planning.

## 7.5 Amazon ECS vs Amazon EKS

Both **Amazon ECS** and **Amazon EKS** are container orchestration services, but they use different orchestration technologies.

| Feature                     | Amazon ECS                         | Amazon EKS                                                        |
| --------------------------- | ---------------------------------- | ----------------------------------------------------------------- |
| **Full Name**               | Amazon Elastic Container Service   | Amazon Elastic Kubernetes Service                                 |
| **Orchestration Platform**  | AWS-native                         | Kubernetes                                                        |
| **Open-Source Kubernetes**  | No                                 | Yes                                                               |
| **Container Workload Unit** | ECS Task                           | Kubernetes Pod                                                    |
| **Learning Curve**          | Generally simpler                  | Requires Kubernetes knowledge                                     |
| **Compute Options**         | Amazon EC2 / AWS Fargate           | Amazon EC2 / AWS Fargate                                          |
| **Best Suited For**         | AWS-native container orchestration | Existing Kubernetes workloads or Kubernetes-specific requirements |

### When to Choose Amazon ECS

**Amazon ECS** is generally suitable when:
- An organization wants straightforward AWS-native container orchestration.
- There is no specific requirement for Kubernetes.
- The priority is reducing orchestration complexity.

### When to Choose Amazon EKS

**Amazon EKS** is generally suitable when:
- An organization already uses Kubernetes.
- Teams have experience managing Kubernetes workloads.
- Applications require the Kubernetes ecosystem or standard Kubernetes tooling.

**Key Concept**: Both ECS and EKS manage containers at scale. The main difference is that **ECS uses AWS-native orchestration**, while **EKS uses Kubernetes**.

## 7.6 Exam Focus

- **Amazon EKS** - Fully managed Kubernetes service on AWS.
- **Kubernetes** - Open-source container orchestration platform.
- **Upstream-Conformant Kubernetes** - Amazon EKS supports standard Kubernetes APIs and tooling.
- **Kubernetes Pod** - Smallest deployable unit, containing one or more containers.
- **EKS Managed Node Groups** - Simplify management of EC2 worker nodes.
- **Amazon EC2** - Virtual machine compute option for running EKS Pods.
- **AWS Fargate** - Serverless compute option for running EKS Pods.
- **Kubernetes Version Management** - Customers must plan upgrades and keep clusters on supported versions.
- **Amazon ECS vs Amazon EKS** - AWS-native container orchestration vs managed Kubernetes.

**Exam Scenario Associations:**

- **Need managed Kubernetes on AWS - Amazon EKS**
- **Need AWS-native container orchestration without Kubernetes - Amazon ECS**
- **Need to run existing Kubernetes workloads on AWS - Amazon EKS**
- **Need the smallest deployable unit in Kubernetes - Pod**
- **Need simplified management of Kubernetes EC2 worker nodes - EKS Managed Node Groups**
- **Need to run Kubernetes Pods without managing servers - AWS Fargate**
- **Need greater control over Kubernetes worker node infrastructure - Amazon EC2**

**Exam Tip**: Remember that **Amazon EKS** is **managed Kubernetes**, while **Amazon ECS** is **AWS-native container orchestration**. Both can use **Amazon EC2** or **AWS Fargate** for compute.

# 8 - Amazon EKS - How it Works?

## 8.1 Amazon EKS Architecture Overview

**Amazon Elastic Kubernetes Service (Amazon EKS)** is a fully managed Kubernetes service that simplifies deploying, running, and managing containerized applications on AWS.

Its architecture is similar to **Amazon ECS**, but it uses **Kubernetes** for container orchestration.

### Key Components

| Component                                          | Purpose                                                    |
| -------------------------------------------------- | ---------------------------------------------------------- |
| **Amazon EKS**                                     | Manages Kubernetes container orchestration                 |
| **Amazon Elastic Container Registry (Amazon ECR)** | Stores container images                                    |
| **Kubernetes Deployment Manifest**                 | Defines how Kubernetes applications should be deployed     |
| **Kubelet**                                        | Agent running on Kubernetes worker nodes that manages Pods |
| **Container Runtime**                              | Executes containers inside Pods                            |
| **Amazon EC2 / AWS Fargate**                       | Provides compute resources for running Pods                |
| **Elastic Load Balancing (ELB)**                   | Distributes incoming traffic to applications               |

**Key Concept**: Amazon EKS manages **Kubernetes orchestration**, Amazon ECR stores **container images**, and EC2 or Fargate provides the **compute infrastructure**.

## 8.2 Amazon EKS Deployment Workflow

### Step 1: Developer Builds and Stores Container Images

The developer:
1. Writes the application code.
2. Builds a container image containing the application and its dependencies.
3. Pushes the container image to **Amazon ECR**.

**Amazon ECR** acts as the container image repository from which Kubernetes workloads retrieve their images.

### Step 2: Administrator Configures Amazon EKS

The administrator:
1. Creates an **Amazon EKS Cluster**.
2. Prepares a **Kubernetes Deployment Manifest**.
3. Submits the deployment configuration to Kubernetes.

A deployment manifest defines how the application should run, including:
- **Container Images** - Images used by the application.
- **Pods** - The units in which containers are deployed.
- **Deployment Configuration** - Instructions for managing application workloads.

### Step 3: Kubernetes Deploys Pods

The **Kubernetes control plane** coordinates the deployment of Pods onto available compute resources.

For EC2-based worker nodes:
1. Kubernetes schedules Pods onto worker nodes.
2. The **Kubelet** receives the desired Pod configuration.
3. The container runtime retrieves the required image from **Amazon ECR**.
4. The containers are launched inside the Pod.

Multiple Pods can run across the Kubernetes cluster.

**Key Concept**: Amazon EKS coordinates container deployment using Kubernetes, while **Kubelet and the container runtime** manage container execution on EC2 worker nodes.

## 8.3 Kubelet and Container Runtime

### What Is Kubelet?

**Kubelet** is a Kubernetes agent that runs on worker nodes.

Its primary responsibilities include:
- Communicating with the Kubernetes control plane.
- Ensuring assigned Pods are running.
- Coordinating with the container runtime.
- Monitoring the state of containers.

### Container Runtime

Kubernetes uses a **container runtime** to execute containers inside Pods.

Unlike an orchestration platform tied to a single runtime, Kubernetes supports multiple compatible container runtimes.

### ECS Agent vs Kubernetes Kubelet

| Feature                    | Amazon ECS                     | Amazon EKS                          |
| -------------------------- | ------------------------------ | ----------------------------------- |
| **Node Agent**             | ECS Agent                      | Kubelet                             |
| **Orchestration Platform** | AWS-native ECS                 | Kubernetes                          |
| **Workload Unit**          | ECS Task                       | Kubernetes Pod                      |
| **Primary Responsibility** | Coordinates ECS task execution | Ensures Kubernetes Pods are running |

**Key Distinction:**
- **ECS Agent** - Supports container management on ECS EC2 instances.
- **Kubelet** - Supports Pod management on Kubernetes worker nodes.

## 8.4 Exposing EKS Applications

Kubernetes Pods can be exposed through **Kubernetes Services**.

A Kubernetes Service provides a way to make applications running in Pods accessible.

Common service types include:
- **ClusterIP** - Exposes applications within the Kubernetes cluster.
- **NodePort** - Exposes applications through a port on worker nodes.
- **LoadBalancer** - Exposes applications externally using a load balancer.

### Integration with Elastic Load Balancing

Amazon EKS applications can integrate with **Elastic Load Balancing (ELB).**

Supported load balancer options include:
- **Application Load Balancer (ALB)** - Routes application traffic, typically HTTP/HTTPS.
- **Network Load Balancer (NLB)** - Routes network traffic, such as TCP/UDP.

**Key Concept**: Kubernetes Services provide access to containerized applications, while AWS load balancers can distribute external traffic to those applications.

## 8.5 Exam Focus

- **Amazon EKS** - Fully managed Kubernetes service on AWS.
- **Amazon ECR** - Stores container images used by Kubernetes workloads.
- **Kubernetes Deployment Manifest** - Defines application deployment configuration.
- **Kubernetes Pod** - Smallest deployable unit containing one or more containers.
- **Kubelet** - Kubernetes worker node agent responsible for managing Pods.
- **Container Runtime** - Executes containers within Pods.
- **Kubernetes Service** - Exposes applications running inside Pods.
- **Elastic Load Balancing** - Distributes incoming traffic to containerized applications.
- **Amazon EC2 / AWS Fargate** - Compute options for running EKS workloads.

**Exam Scenario Associations:**

- **Need managed Kubernetes orchestration - Amazon EKS**
- **Need to store container images - Amazon ECR**
- **Need to define Kubernetes application deployments - Deployment Manifest**
- **Need to manage Pods on Kubernetes worker nodes - Kubelet**
- **Need to expose Kubernetes applications externally - Kubernetes Service / Elastic Load Balancing**
- **Need serverless compute for Kubernetes Pods - AWS Fargate**

**Exam Tip**: Focus on the distinction between **Amazon ECS (AWS-native container orchestration)** and **Amazon EKS (managed Kubernetes).** Detailed Kubernetes architecture and deployment configurations are generally beyond the CLF-C02 exam scope.

# 9 - AWS Fargate - Serverless Container Runtime

## 9.1 What Is AWS Fargate?

**AWS Fargate** is a **serverless compute engine for containers** that allows customers to run containerized applications without provisioning or managing servers.

It provides the **data plane (compute infrastructure)** for both:
- **Amazon Elastic Container Service (Amazon ECS)** - Runs ECS Tasks.
- **Amazon Elastic Kubernetes Service (Amazon EKS)** - Runs Kubernetes Pods.

### Key Features

- **Serverless Compute** - AWS manages the underlying infrastructure.    
- **No EC2 Instance Management** - Customers do not need to provision or maintain virtual machines.
- **Automatic Resource Provisioning** - Allocates compute resources based on defined CPU and memory requirements.
- **Pay-as-You-Go Pricing** - Charges based on allocated compute resources and running duration.
- **AWS Integration** - Supports monitoring through Amazon CloudWatch.

**Key Concept**: AWS Fargate removes the need to manage servers when running containers on Amazon ECS or Amazon EKS.

## 9.2 How AWS Fargate Works

AWS Fargate provides the compute infrastructure needed to run containerized workloads.

### Container Deployment Workflow
1. Choose **Amazon ECS** or **Amazon EKS** for container orchestration.
2. Specify the **container image** to deploy.
3. Define the required **vCPU** and **memory (RAM).**
4. AWS Fargate provisions the required compute resources.
5. The containerized application runs on AWS-managed infrastructure.

### Control Plane vs Data Plane

| Component                  | AWS Service             | Responsibility                             |
| -------------------------- | ----------------------- | ------------------------------------------ |
| **Control Plane**          | Amazon ECS / Amazon EKS | Manages container orchestration            |
| **Data Plane**             | AWS Fargate             | Provides serverless compute resources      |
| **Data Plane Alternative** | Amazon EC2              | Provides customer-managed virtual machines |

**Key Distinction**:

- **Amazon ECS / Amazon EKS** - Decide how containerized workloads are managed.
- **AWS Fargate** - Provides the infrastructure where containers run.

## 9.3 AWS Fargate vs Amazon EC2

Both **AWS Fargate** and **Amazon EC2** can provide compute capacity for containerized applications.

The main differences involve **infrastructure management** and **pricing**.

### Amazon EC2

- Customers provision and manage EC2 instances.    
- Containers share the resources of those instances.
- Customers pay for the EC2 instance capacity, even when some resources remain unused.

### AWS Fargate

- AWS manages the underlying compute infrastructure.
- Customers specify the vCPU and memory allocated to containerized workloads.
- Customers pay for the allocated resources during the workload's running duration.

### Comparison

| Feature                   | Amazon EC2                             | AWS Fargate                                  |
| ------------------------- | -------------------------------------- | -------------------------------------------- |
| **Compute Model**         | Virtual machines                       | Serverless containers                        |
| **Server Management**     | Customer-managed                       | AWS-managed                                  |
| **Resource Provisioning** | Provision EC2 instance capacity        | Specify container CPU and memory             |
| **Pricing Basis**         | EC2 instance capacity and running time | Allocated compute resources and running time |
| **Unused Capacity**       | May pay for unused instance capacity   | No need to provision an entire EC2 instance  |
| **Primary Benefit**       | Greater infrastructure control         | Reduced operational overhead                 |

### Pricing Example

Suppose an EC2 instance has **8 GB RAM**, but its containers require only **3-4 GB RAM**.
- **Amazon EC2** - Charges for the entire instance, including unused capacity.
- **AWS Fargate** - Charges based on the CPU and memory resources allocated to running container workloads.

**Important**: Fargate pricing is based on **provisioned vCPU and memory**, not the exact CPU or memory actively consumed at every moment.

**Key Concept**: Fargate provides **pay-as-you-go container compute** without requiring customers to manage or pay for an entire EC2 instance.

## 9.4 Monitoring AWS Fargate

AWS Fargate integrates with **Amazon CloudWatch** to provide visibility into containerized workloads.

### Amazon CloudWatch Container Insights

**Amazon CloudWatch Container Insights** provides monitoring and performance insights for containerized applications.

It allows customers to monitor metrics such as:
- **CPU Utilization** - Processing resources used by containers.
- **Memory Utilization** - Memory consumed by containers.
- **Running Task Count** - Number of active container tasks.
- **Network Performance** - Network activity associated with container workloads.

Container Insights provides performance metrics and visualizations to help monitor container health and resource usage.

**Key Concept**: Use **Amazon CloudWatch Container Insights** to monitor the performance and resource utilization of containerized applications.

## 9.5 Exam Focus

- **AWS Fargate** - Serverless compute engine for running containers.    
- **Amazon ECS / Amazon EKS** - Container orchestration services that support Fargate.
- **Serverless Containers** - Run containers without provisioning or managing servers.
- **Automatic Resource Provisioning** - Based on specified vCPU and memory requirements.
- **Pay-as-You-Go Pricing** - Pay for allocated compute resources and running duration.
- **Amazon EC2 vs AWS Fargate** - Customer-managed virtual machines vs AWS-managed serverless compute.
- **Amazon CloudWatch Container Insights** - Monitors container CPU, memory, task counts, and network performance.

**Exam Scenario Associations:**

- **Need to run containers without managing servers - AWS Fargate** 
- **Need serverless compute for ECS Tasks - AWS Fargate**
- **Need serverless compute for EKS Pods - AWS Fargate**
- **Need to avoid provisioning EC2 instances for containers - AWS Fargate**
- **Need pay-as-you-go compute for container workloads - AWS Fargate**
- **Need to monitor container resource utilization - Amazon CloudWatch Container Insights**

**Exam Tip**: Remember that **Amazon ECS and Amazon EKS provide container orchestration**, while **AWS Fargate provides serverless compute**. Fargate eliminates server management and charges based on allocated container resources rather than entire EC2 instances.

# 10 - AWS Serverless Compute

## 10.1 What Is AWS Serverless Compute?

**Serverless Computing** is a cloud computing model where AWS manages the underlying infrastructure, allowing customers to run applications without provisioning or managing servers.

With serverless compute, customers focus on **application code** and **business logic**, while AWS handles the underlying compute infrastructure.

### Key Benefits

- **No Server Management** - AWS manages the underlying compute infrastructure.
- **Automatic Scaling** - Compute resources scale based on application demand.
- **High Availability** - AWS-managed services provide built-in availability capabilities.
- **Pay-as-You-Go Pricing** - Pay based on actual usage rather than continuously running servers.
- **Cost Efficiency** - Reduces costs associated with idle compute capacity.

**AWS Lambda** is a serverless compute service that executes application code in response to events or requests.

**Key Concept**: Serverless does not mean there are no servers. It means **AWS manages the servers**, so customers do not need to provision or maintain them.

## 10.2 Traditional Compute vs Serverless Compute

Consider a simple weather application that:
1. Receives a request from a user for a city's temperature.
2. Executes application business logic.
3. Queries a database for weather information.
4. Returns the temperature to the user.

There are several ways to host this application on AWS.

### Option 1: Single Amazon EC2 Instance

The application runs on a single **Amazon Elastic Compute Cloud (Amazon EC2)** instance.
- **Amazon EC2** hosts the application and its business logic.
- A relational database stores weather information.
- Users send requests to the EC2-hosted application.

**Limitations**:
- Requires EC2 infrastructure management.
- Vertical scaling has practical limits. 
- EC2 incurs costs while the instance is running, even when there are no application requests.
- A single instance introduces availability limitations.

### Option 2: Multiple EC2 Instances with Auto Scaling

The application runs on multiple EC2 instances using:
- **Amazon EC2** - Hosts the application.
- **Amazon EC2 Auto Scaling** - Adjusts the number of EC2 instances based on demand.
- **Elastic Load Balancing (ELB)** - Distributes incoming requests across instances.

**Benefits**:
- Supports **horizontal scaling**.
- Improves application availability.
- Handles increased traffic by adding EC2 instances.

**Limitations**:
- Customers still manage EC2 infrastructure.
- Running instances incur ongoing costs.
- Maintaining baseline instance capacity for availability can result in costs even during periods of no traffic.

### Option 3: AWS Lambda for Serverless Compute

Instead of running the application on EC2 instances, the business logic executes using **AWS Lambda**.
- Lambda functions execute when requests invoke them.
- AWS automatically manages the underlying compute infrastructure.
- Customers do not need to provision EC2 instances.
- Lambda compute charges are usage-based rather than based on continuously running instances.

**Key Benefit**: When there are no function invocations, there are generally **no Lambda execution charges**.

However, other components such as load balancers and databases may still incur charges.

### Compute Architecture Comparison

| Feature               | Single EC2                   | EC2 with Auto Scaling            | AWS Lambda                    |
| --------------------- | ---------------------------- | -------------------------------- | ----------------------------- |
| **Compute Model**     | Virtual machine              | Multiple virtual machines        | Serverless functions          |
| **Scaling**           | Primarily manual or vertical | Automatic horizontal scaling     | Automatic scaling             |
| **Server Management** | Customer                     | Customer                         | AWS                           |
| **High Availability** | Limited with one instance    | Improved with multiple instances | Built into managed service    |
| **Compute Pricing**   | Running instance capacity    | Running instance capacity        | Usage-based executions        |
| **Idle Compute Cost** | Yes                          | Yes, for running instances       | No execution charge when idle |

**Key Distinction**:

- **Amazon EC2** - Provides virtual machines that customers manage.
- **Amazon EC2 Auto Scaling** - Automatically adjusts EC2 capacity.
- **AWS Lambda** - Runs application code without requiring customers to manage servers.

## 10.3 Building a Fully Serverless Application on AWS

A serverless application can combine multiple AWS-managed services to eliminate the need for customer-managed compute infrastructure.

For the weather application, the architecture can use:
1. **Amazon API Gateway**
2. **AWS Lambda**
3. **Amazon DynamoDB**

### Amazon API Gateway

**Amazon API Gateway** is a fully managed service for creating, publishing, and managing APIs.
- Receives API requests from users.
- Routes requests to backend services such as AWS Lambda.
- Supports usage-based pricing based on API requests.

### AWS Lambda

**AWS Lambda** executes the application business logic.
- Runs functions in response to requests.
- Automatically scales based on demand.
- Does not require EC2 instance management.
- Charges based on usage.

### Amazon DynamoDB

**Amazon DynamoDB** is a fully managed, serverless **NoSQL database** service.
- Stores application data.
- Supports automatic scaling.
- Offers on-demand capacity with usage-based request pricing.
- Eliminates database server management.

### Serverless Application Workflow

1. A user sends a weather request through a web or mobile application.    
2. **Amazon API Gateway** receives the API request.
3. **AWS Lambda** executes the weather application logic.
4. **Amazon DynamoDB** provides the requested weather data.
5. The response is returned to the user.

### Traditional vs Serverless Architecture

| Application Layer             | Traditional Architecture                   | Serverless Architecture                      |
| ----------------------------- | ------------------------------------------ | -------------------------------------------- |
| **API Layer**                 | Elastic Load Balancing                     | Amazon API Gateway                           |
| **Compute Layer**             | Amazon EC2                                 | AWS Lambda                                   |
| **Database Layer**            | Relational database                        | Amazon DynamoDB                              |
| **Infrastructure Management** | EC2 management required                    | AWS manages underlying server infrastructure |
| **Pricing Model**             | Includes continuously provisioned capacity | Primarily usage-based                        |

### Benefits of Serverless Architecture

- **Automatic Scaling** - Handles changing numbers of requests.
- **High Availability** - Uses AWS-managed services with built-in availability.
- **Reduced Operational Overhead** - No EC2 server management required.
- **Usage-Based Pricing** - Costs generally follow application activity.
- **Reduced Idle Compute Cost** - No continuously running application servers required.

**Important**: Serverless does not guarantee zero cost when there is no traffic. Other charges, such as database storage, may still apply.

**Key Concept**: Combining **API Gateway + Lambda + DynamoDB** enables a serverless application architecture without customer-managed servers.

## 10.4 Serverless Cost Efficiency

One of the major advantages of serverless computing is reducing costs associated with unused compute resources.

### Example: Weather Application

Assume the application receives **300,000 requests per month**.

The lecture provides the following illustrative comparison:

| Architecture                           | Approximate Monthly Cost |
| -------------------------------------- | ------------------------ |
| **Traditional: ELB + 2 EC2 Instances** | $165.00                  |
| **Serverless Architecture**            | $2.53                    |

These figures are examples from the lecture, not guaranteed current AWS prices. Actual costs depend on usage, configurations, AWS Region, and pricing assumptions.

### Why Can Serverless Be Cheaper?

**Traditional EC2 Architecture:**
- EC2 instances incur charges while running.
- Unused instance capacity may still generate costs.
- Additional infrastructure may be required for scaling and high availability.

**Serverless Architecture:**
- Lambda compute costs are based on usage.
- No need to maintain continuously running EC2 instances.
- Application compute capacity automatically adjusts to demand.

### When Is Serverless Beneficial?

Serverless is particularly useful when:
- Application traffic is **unpredictable** or **variable**.
- Workloads are **event-driven** or **request-driven**.
- Applications experience periods of low or no traffic.
- Organizations want to minimize infrastructure management.

**Important Distinction**: Serverless is not always the cheapest or most suitable architecture. The appropriate choice depends on workload requirements and usage patterns.

## 10.5 Exam Focus

- **Serverless Computing** - Run applications without provisioning or managing servers.    
- **AWS Lambda** - Serverless compute service that executes code in response to events.
- **Amazon EC2** - Virtual machine compute requiring instance management.
- **Amazon EC2 Auto Scaling** - Automatically adjusts EC2 instance capacity.
- **Elastic Load Balancing** - Distributes incoming traffic across compute resources.
- **Amazon API Gateway** - Fully managed service for creating and managing APIs.
- **Amazon DynamoDB** - Fully managed, serverless NoSQL database.
- **Automatic Scaling** - Serverless compute scales automatically with demand.
- **Pay-as-You-Go Pricing** - Charges based on usage rather than continuously running compute capacity.
- **Reduced Operational Overhead** - AWS manages the underlying server infrastructure.

**Exam Scenario Associations:**

- **Need to execute code without managing servers - AWS Lambda**
- **Need event-driven or request-driven compute - AWS Lambda**
- **Need to automatically scale EC2 instances - Amazon EC2 Auto Scaling**
- **Need to distribute traffic across EC2 instances - Elastic Load Balancing**
- **Need to expose application functionality through APIs - Amazon API Gateway**
- **Need a serverless NoSQL database - Amazon DynamoDB**
- **Need a fully serverless API-driven application - API Gateway + Lambda + DynamoDB**
- **Need to eliminate idle application server costs - AWS Lambda**

**Exam Tip**: Remember that **AWS Lambda** is serverless compute, **Amazon API Gateway manages APIs**, and **Amazon DynamoDB provides serverless NoSQL storage**. Together, they enable a highly scalable application architecture without managing servers.

# 11 - AWS Lambda

## 11.1 What Is AWS Lambda?

**AWS Lambda** is a **serverless compute service** that runs application code in response to events without requiring customers to provision or manage servers.

With AWS Lambda:

- **Event-Driven Execution** - Functions execute when triggered by an event or request.
- **Serverless Compute** - AWS manages the underlying compute infrastructure.
- **Automatic Scaling** - Functions scale automatically based on incoming requests or events.
- **Pay-as-You-Go Pricing** - Pay based on function invocations and execution duration.
- **Stateless Execution** - Functions do not inherently maintain application state between executions.
- **Multiple Programming Languages** - Supports languages such as Python, Node.js, Java, and Go.

### How AWS Lambda Works

1. A developer creates a **Lambda Function** containing application code.
2. An AWS service or external request triggers an event.
3. Lambda automatically allocates compute resources to execute the function.
4. The function processes the event and completes its execution.
5. AWS manages the underlying infrastructure throughout the process.

**Key Concept**: AWS Lambda allows developers to focus on **writing application code**, while AWS handles server provisioning, scaling, and infrastructure management.

## 11.2 AWS Lambda Key Features

### 1. Stateless Execution

AWS Lambda is designed for **stateless application execution**.
- Each function invocation processes its workload independently.
- Application state is not guaranteed to persist between invocations.
- Data that must persist across executions should be stored externally, such as in a database.

For example, **Amazon DynamoDB** can store application data that must be accessed across multiple Lambda executions.

**Key Distinction**:
- **Stateless Workload** - Executes independently without requiring persistent session information.
- **Stateful Workload** - Requires maintaining information across multiple executions.

**Key Concept**: AWS Lambda is best suited for stateless workloads, but stateful application requirements can be supported using external storage.

### 2. Automatic Scaling

AWS Lambda automatically scales based on the number of incoming events or requests.

For example:
- **10 API requests** - Lambda executes functions to process the requests.
- **Thousands of API requests** - Lambda can execute multiple function instances concurrently.
- No requests - No function executions are required.

Lambda scales automatically without customers manually provisioning additional servers.

### 3. Supported Programming Languages

AWS Lambda supports multiple programming languages and runtime environments.

Examples mentioned in the lecture include:
- **Python**
- **Node.js**
- **Java**
- **Go**
- **PowerShell**

Developers can provide application code and its dependencies using deployment packages, such as ZIP files.

### 4. Function Configuration

AWS Lambda provides several configuration options.

| Configuration     | Description                                          |
| ----------------- | ---------------------------------------------------- |
| **Runtime**       | Programming language and execution environment       |
| **Memory**        | Configurable from 128 MB to 10,240 MB (10 GB)        |
| **Timeout**       | Maximum execution duration of 15 minutes             |
| **IAM Role**      | Defines permissions for accessing other AWS services |
| **Event Trigger** | Determines which events invoke the function          |

### 5. Maximum Execution Duration

A single AWS Lambda function invocation can run for a maximum of **15 minutes**.
- Suitable for short-running, event-driven workloads.    
- Not suitable for workloads requiring uninterrupted execution beyond 15 minutes.
- Longer-running workloads may require **Amazon EC2** or container-based compute.

**Important Exam Distinction:**
- **Short-running, event-driven code - AWS Lambda**
- **Workloads requiring execution beyond 15 minutes - Amazon EC2 or Containers**

## 11.3 AWS Lambda Pricing and Monitoring

### AWS Lambda Pricing

AWS Lambda uses a **pay-as-you-go pricing model**.

The primary pricing factors are:
1. **Number of Requests** - Number of times the Lambda function is invoked.
2. **Execution Duration** - How long each function runs.
3. **Allocated Memory** - Memory configured for the function.

### GB-Second Pricing

Lambda execution duration is measured using **GB-seconds**, based on allocated memory and execution time.

$$ 
\text{GB-seconds} = \text{Memory (GB)} \times \text{Duration (seconds)} 
$$
Example:

A Lambda function configured with **1 GB of memory** that executes for **1 second** consumes:

$$
1 \text{ GB} \times 1 \text{ second} = 1 \text{ GB-second}
$$
**Key Concept**: Lambda charges are influenced by **allocated memory**, **execution duration**, and **invocation count**, rather than continuously running EC2 instance capacity.

### Monitoring with Amazon CloudWatch

**Amazon CloudWatch** monitors AWS Lambda function execution and performance.

Important monitoring information includes:
- **Invocations** - Number of function executions.
- **Errors** - Failed function executions.
- **Duration** - Execution time of functions.
- **Execution Metrics** - Information about function activity and performance.

**Key Concept**: Use **Amazon CloudWatch** to monitor Lambda function performance, execution activity, and failures.

## 11.4 AWS Lambda Event Sources and Use Cases

AWS Lambda is an **event-driven compute service** that integrates with various AWS services.

A Lambda function can be invoked by API requests, messages, file uploads, scheduled events, and other event sources.

### Common AWS Lambda Integrations

| AWS Service                                         | Lambda Use Case                                               | Exam Clue                       |
| --------------------------------------------------- | ------------------------------------------------------------- | ------------------------------- |
| **Amazon API Gateway**                              | Execute backend application logic for API requests            | Serverless API backend          |
| **Amazon Simple Queue Service (Amazon SQS)**        | Process messages received in a queue                          | Asynchronous message processing |
| **Amazon Kinesis**                                  | Process streaming data in near real time                      | Real-time data processing       |
| **Amazon S3**                                       | Process files after they are uploaded                         | File or image processing        |
| **Amazon EventBridge**                              | Trigger functions based on events or schedules                | Event-driven automation         |
| **Amazon CloudWatch**                               | Monitor functions and initiate automated actions using alarms | Monitoring and remediation      |
| **Amazon Simple Notification Service (Amazon SNS)** | Trigger functions from published notifications                | Notification-driven processing  |

### Common Lambda Scenarios

#### 1. Serverless API Backend

**Amazon API Gateway + AWS Lambda**
- API Gateway receives requests from users.
- Lambda executes the application business logic.
- The result is returned to the requesting application.

**Exam Clue: API-driven application without managing servers - API Gateway + Lambda**

#### 2. Message and Order Processing

**Amazon SQS + AWS Lambda**
- Applications send messages or orders to an SQS queue.
- Lambda processes messages retrieved from the queue.
- Supports asynchronous processing of application workloads.

**Exam Clue: Automatically process messages from a queue - Amazon SQS + Lambda**

#### 3. Real-Time Data Processing

**Amazon Kinesis + AWS Lambda**
- Kinesis receives streaming data.
- Lambda processes incoming data records.
- Suitable for event-driven streaming data processing.

**Exam Clue: Process streaming data in real time - Amazon Kinesis + Lambda**

#### 4. Automated File Processing

**Amazon S3 + AWS Lambda**
- A user uploads an image to an S3 bucket.
- The upload event triggers a Lambda function.
- Lambda processes the image, such as generating a thumbnail.

**Exam Clue: Automatically process files uploaded to S3 - Amazon S3 + Lambda**

#### 5. Scheduled and Event-Driven Automation

**Amazon EventBridge + AWS Lambda**
- EventBridge detects events or runs scheduled rules.
- Lambda executes the configured automation task.

Examples include scheduled cleanup or event-based processing.

**Exam Clue: Execute serverless code based on a schedule or AWS event - Amazon EventBridge + Lambda**

## 11.5 AWS Lambda Security and Permissions

AWS Lambda uses **AWS Identity and Access Management (IAM)** to control access to other AWS services.

### IAM Execution Role

A Lambda function can be assigned an **IAM Execution Role** that defines which AWS resources and actions it is permitted to access.

For example:
- **Amazon DynamoDB** - Read or write database records.
- **Amazon SQS** - Send or retrieve messages.
- **Amazon S3** - Access objects stored in S3 buckets.

The function receives permissions through its assigned IAM role rather than requiring credentials to be embedded in application code.

**Key Concept**: A Lambda function requires the appropriate **IAM permissions** to interact with other AWS services.

**Exam Scenario Association:**

**Lambda function needs permission to access DynamoDB, S3, or SQS - IAM Execution Role**

## 11.6 Exam Focus

- **AWS Lambda** - Serverless compute service for executing code in response to events.
- **Event-Driven Execution** - Functions execute when invoked by supported events or requests.
- **Stateless Execution** - Function state is not guaranteed to persist between invocations.
- **Automatic Scaling** - Lambda automatically scales concurrent executions based on demand.
- **Maximum Execution Time** - **15 minutes per invocation**.
- **Memory Allocation** - **128 MB** to **10,240 MB (10 GB).**
- **Lambda Pricing** - Based primarily on invocation count, allocated memory, and execution duration.
- **GB-Second** - Measurement of allocated memory multiplied by execution duration.
- **IAM Execution Role** - Grants Lambda permissions to access other AWS services.
- **Amazon CloudWatch** - Monitors Lambda invocations, errors, and execution duration.

**Exam Scenario Associations:**

- **Need serverless event-driven compute - AWS Lambda**
- **Need to execute code without managing servers - AWS Lambda**
- **Need to process API requests - API Gateway + Lambda**
- **Need to process SQS messages - Amazon SQS + Lambda**
- **Need to process real-time streaming data - Amazon Kinesis + Lambda**
- **Need to process files uploaded to S3 - Amazon S3 + Lambda**
- **Need scheduled serverless execution - Amazon EventBridge + Lambda**
- **Need to grant Lambda access to AWS resources - IAM Execution Role**
- **Need to monitor Lambda execution and errors - Amazon CloudWatch**
- **Need compute execution longer than 15 minutes - Amazon EC2 or Containers**

**Exam Tip**: Remember the three major AWS Lambda characteristics: **Serverless, Event-Driven, and Automatically Scalable**. Also remember the **15-minute maximum execution duration, usage-based pricing**, and **IAM Execution Roles** for accessing other AWS services.

# 12 - \[Exercise] - Build a Serverless Weather App with AWS Lambda

## 12.1 Serverless Weather Application Overview

A simple **serverless weather application** can be built using three AWS services:
1. **Amazon API Gateway** - Receives API requests from users.
2. **AWS Lambda** - Executes the application's business logic.
3. **Amazon DynamoDB** - Stores weather information for different cities.

The application allows users to select a city and retrieve its temperature without managing servers.

### Key AWS Services

| AWS Service                                  | Purpose                                                |
| -------------------------------------------- | ------------------------------------------------------ |
| **Amazon API Gateway**                       | Exposes an API endpoint for receiving weather requests |
| **AWS Lambda**                               | Processes requests and retrieves weather information   |
| **Amazon DynamoDB**                          | Stores city names and temperatures                     |
| **AWS Identity and Access Management (IAM)** | Grants Lambda permission to access DynamoDB            |
| **Amazon CloudWatch Logs**                   | Stores logs generated during Lambda execution          |

### Application Workflow
1. A user selects a city from a web application.
2. The web application sends an API request to **Amazon API Gateway**.
3. API Gateway invokes an **AWS Lambda function**.
4. Lambda retrieves the requested city's temperature from **Amazon DynamoDB**.
5. Lambda returns the result through API Gateway to the user.

Key Concept: Combining **API Gateway + Lambda + DynamoDB** creates a serverless application without requiring customer-managed servers.

## 12.2 Amazon DynamoDB - Data Storage

**Amazon DynamoDB** is a fully managed, serverless **NoSQL database** service.

In this application, DynamoDB stores weather information using a simple table.

### Table Structure

| Attribute       | Purpose                              |
| --------------- | ------------------------------------ |
| **city**        | Partition key identifying each city  |
| **temperature** | Temperature associated with the city |

Example records:

| City   | Temperature |
| ------ | ----------- |
| Delhi  | 40          |
| Pune   | 18          |
| Mumbai | 35          |

### Key Concepts

- **DynamoDB Table** - Stores application data.
- **Partition Key** - Identifies items in the table.
- **Read Operation** - Retrieves stored weather information.
- **Write Operation** - Adds or updates weather information.

The exercise uses manually populated data, but a real application could use IoT devices or another process to update temperatures.

**Key Concept**: DynamoDB provides serverless data storage that Lambda can access to retrieve application information.

## 12.3 AWS Lambda - Business Logic

**AWS Lambda** executes the application's business logic without requiring server management.

In this exercise, a Lambda function is created using **Python**.

### Lambda Function Responsibilities

- Receives the requested city from API Gateway.
- Connects to **Amazon DynamoDB**.
- Retrieves the temperature associated with the city.
- Returns the temperature to the requesting application.
- Handles cases where the requested city does not exist in the database.

### Lambda Configuration

| Configuration      | Example                                 |
| ------------------ | --------------------------------------- |
| **Runtime**        | Python 3.11                             |
| **Memory**         | 128 MB                                  |
| **Timeout**        | 1 minute                                |
| **Execution Role** | IAM role with DynamoDB read permissions |

The one-minute timeout is used for the exercise. AWS Lambda supports a maximum execution duration of **15 minutes** per invocation.

### IAM Execution Role

A Lambda function requires appropriate **IAM permissions** to access other AWS services.

The exercise uses two IAM managed policies:

| IAM Policy                       | Purpose                                                         |
| -------------------------------- | --------------------------------------------------------------- |
| **AWSLambdaBasicExecutionRole**  | Allows Lambda to write execution logs to Amazon CloudWatch Logs |
| **AmazonDynamoDBReadOnlyAccess** | Allows read-only access to DynamoDB                             |

The IAM role is assigned to the Lambda function.

**Key Concept**: AWS Lambda uses an **IAM Execution Role** to obtain permissions for accessing AWS resources.

## 12.4 Amazon API Gateway - API Integration

**Amazon API Gateway** is a fully managed service for creating, publishing, and managing APIs.

In this application, API Gateway exposes a **REST API** that invokes the Lambda function.

### Lambda Proxy Integration

The exercise uses **Lambda Proxy Integration**, where API Gateway forwards the incoming request information to Lambda.

- API Gateway receives the request.
- The request information is passed to Lambda.
- Lambda processes the request and generates a response.
- API Gateway returns the response to the client.

The exercise configures an **ANY** method to accept requests through the API endpoint.

### API Deployment Stages

An API must be deployed to a stage before clients can access its deployed endpoint.

Common stage names include:
- `dev` - Development
- `test` - Testing
- `prod` - Production

The exercise uses a `demo` stage.

Once deployed, API Gateway provides an **Invoke URL** that the web application uses to send requests.

### Query String Parameters

The application passes the selected city as a query string parameter.

For example:

`?city=Delhi`

The Lambda function uses the city parameter to retrieve the corresponding record from DynamoDB.

**Key Concept**: API Gateway provides the API endpoint, while AWS Lambda executes the backend business logic.

## 12.5 Monitoring, Security, and Cost Considerations

### Monitoring with Amazon CloudWatch Logs

**Amazon CloudWatch Logs** captures logs generated during Lambda execution.

The application can log information such as:
- Incoming request parameters.
- Function execution details.
- Returned responses.
- Errors encountered during execution.

**Key Concept**: Use **Amazon CloudWatch Logs** to inspect and troubleshoot Lambda execution.

### API Security

The exercise creates a **public API without authentication**.

This introduces potential risks:
- Anyone with the API endpoint can invoke it.
- Automated clients or bots could generate large numbers of requests.
- Each invocation can contribute to AWS Lambda usage charges.

### Resource Cleanup

Unused demonstration resources should be deleted after completing the exercise.

This includes:
- **Amazon API Gateway REST API**
- **AWS Lambda Function**
- **Amazon DynamoDB Table**

Important: Serverless services use usage-based pricing, but they are not automatically free. Unwanted API invocations or retained resources may still incur charges.

## 12.6 Exam Focus

- **Amazon API Gateway** - Fully managed service for creating and exposing APIs.
- **AWS Lambda** - Executes serverless application business logic.
- **Amazon DynamoDB** - Serverless NoSQL database for storing application data.
- **IAM Execution Role** - Grants Lambda permission to access AWS services.
- **AWSLambdaBasicExecutionRole** - Provides permissions for CloudWatch logging.
- **AmazonDynamoDBReadOnlyAccess** - Provides read-only access to DynamoDB.
- **Lambda Proxy Integration** - Forwards API request information to Lambda.
- **API Deployment Stage** - Provides a deployed API endpoint for client requests.
- **Amazon CloudWatch Logs** - Captures Lambda execution logs.
- **Serverless Architecture** - Eliminates the need to provision and manage application servers.

**Exam Scenario Associations**:

- **Need to expose serverless application APIs - Amazon API Gateway**
- **Need to execute backend business logic without servers - AWS Lambda**
- **Need a serverless NoSQL database - Amazon DynamoDB**
- **Need Lambda to read DynamoDB data - IAM Execution Role with appropriate permissions**
- **Need to monitor and troubleshoot Lambda execution - Amazon CloudWatch Logs**
- **Need to execute Lambda through an HTTP API - API Gateway + Lambda**
- **Need a fully serverless API-driven application - API Gateway + Lambda + DynamoDB**

**Exam Tip**: Focus on recognizing the responsibilities of **API Gateway (API Management), Lambda (Serverless Compute), and DynamoDB (Serverless Database).** Remember that Lambda requires an **IAM Execution Role** to access other AWS services and that public API endpoints can generate usage-based charges.

# 13 - Section Summary

## 13.1 AWS Compute Services Summary

AWS provides different compute services depending on application architecture, scalability, infrastructure management, and workload requirements.

| AWS Service     | Primary Purpose                    | Key Characteristics                                              |
| --------------- | ---------------------------------- | ---------------------------------------------------------------- |
| **Amazon EC2**  | Virtual machine compute            | Flexible, supports various workloads, customer manages instances |
| **Amazon ECS**  | AWS-native container orchestration | Manages and scales containerized applications                    |
| **Amazon EKS**  | Managed Kubernetes                 | Runs Kubernetes workloads on AWS                                 |
| **Amazon ECR**  | Container image registry           | Stores and manages container images for ECS and EKS              |
| **AWS Fargate** | Serverless container compute       | Runs containers without managing servers                         |
| **AWS Lambda**  | Serverless function execution      | Event-driven, stateless, automatic scaling                       |

### Key Distinctions

- **EC2 vs Containers** - EC2 provides virtual machines, while containers offer lightweight, portable, and consistent application environments.
- **ECS vs EKS** - ECS uses AWS-native orchestration; EKS uses Kubernetes.
- **ECR vs ECS** - ECR stores container images; ECS runs and manages containers.
- **EC2 vs Fargate** - EC2 requires instance management; Fargate provides serverless container compute.
- **Fargate vs Lambda** - Fargate runs container workloads; Lambda executes event-driven functions.

## 13.2 Choosing the Right AWS Compute Service

The appropriate service depends on the application's execution requirements, architecture, and infrastructure needs.

### Compute Selection Guide

| Requirement                                                         | Recommended Service      |
| ------------------------------------------------------------------- | ------------------------ |
| Need a virtual machine with operating system control                | **Amazon EC2**               |
| Need AWS-native container orchestration                             | **Amazon ECS**               |
| Need Kubernetes compatibility or existing Kubernetes expertise      | **Amazon EKS**               |
| Need to store container images                                      | **Amazon ECR**               |
| Need to run containers without managing servers                     | **AWS Fargate**              |
| Need short-lived, event-driven function execution                   | **AWS Lambda**               |
| Need compute workloads running longer than Lambda's 15-minute limit | **Amazon EC2 or Containers** |

### Important Selection Criteria

**Choose AWS Lambda when:**
- The workload is **event-driven** and generally stateless.
- Execution completes within **15 minutes**.
- Automatic scaling and minimal infrastructure management are priorities.

**Choose Amazon ECS or Amazon EKS when:**
- The application uses **containers** or **microservices**.
- Container orchestration and scaling are required.
- ECS is preferred for AWS-native orchestration; EKS is appropriate for Kubernetes requirements.

**Choose Amazon EC2 or AWS Fargate for container compute:**
- **Amazon EC2** - When specific instance types, hardware capabilities, or host-level customization are needed.
- **AWS Fargate** - When serverless container execution and reduced infrastructure management are priorities.

**Key Concept**: First select the **application compute model** (VMs, containers, or functions), then determine the required level of infrastructure control.

## 13.3 Exam Focus

- **Virtual machines and infrastructure control - Amazon EC2**
- **AWS-native container orchestration - Amazon ECS**
- **Managed Kubernetes - Amazon EKS**
- **Store container images - Amazon ECR**
- **Serverless container compute - AWS Fargate**
- **Serverless function execution - AWS Lambda**
- **ECS workload unit - ECS Task**
- **EKS workload unit - Kubernetes Pod**
- **ECS/EKS compute options - Amazon EC2 or AWS Fargate**
- **Maximum Lambda execution duration - 15 minutes**
- **Event-driven API backend - API Gateway + Lambda**
- **Process uploaded files automatically - Amazon S3 + Lambda**
- **Monitor compute metrics and logs - Amazon CloudWatch**

**Exam Tips:**

- **ECS and EKS are orchestration services; EC2 and Fargate provide compute resources.**
- **ECR stores container images; it does not execute containers.**
- **Lambda is ideal for short-running, event-driven workloads, while containers support more flexible execution requirements.**
- **Serverless does not mean free; it means AWS manages the underlying servers, with pricing generally based on usage.**

# 14 - Quiz

## 14.1 Practice Question

### Original Question

You want to host an API-based web service to convert user-provided video files from one format to another.

Each video takes up to 30 minutes to process. APIs are exposed through Amazon API Gateway, and developers have built a Python application to handle video conversion.

Which AWS service is most appropriate for hosting the backend application?

### Choices

- A. AWS Lambda 
- B. Amazon EC2 
- C. Amazon CloudFront 
- D. Amazon ECS with Fargate

### Correct Answer

**D. Amazon ECS with Fargate**

### Why?

**Amazon ECS** with **AWS Fargate** is suitable for running long-running containerized workloads without managing servers.

The key clue is the **30-minute processing time**.

- **AWS Lambda** - Incorrect because a Lambda invocation has a maximum execution duration of **15 minutes**.
- **Amazon EC2** - Can run the application but requires managing EC2 instances.
- **Amazon CloudFront** - A Content Delivery Network (CDN), not a service for executing video processing workloads.
- **Amazon ECS with Fargate** - Runs containerized workloads on serverless compute infrastructure without Lambda's 15-minute execution limit.

**Exam Clue: Long-running containerized workload without server management - Amazon ECS with AWS Fargate**

## 14.2 Practice Question

### Original Question

A company wants to deploy containerized workloads using AWS Fargate.

What advantage does this provide?

### Choices

- A. Full control of the underlying EC2 instances 
- B. Ability to run serverless containers without managing servers 
- C. Support for Kubernetes workloads only 
- D. Simplified deployment of Lambda functions

### Correct Answer

**B. Ability to run serverless containers without managing servers**

### Why?

**AWS Fargate** is a **serverless compute engine for containers**.
- AWS manages the underlying compute infrastructure.
- Customers do not need to provision or maintain EC2 instances.
- Supports containerized workloads through **Amazon ECS** and **Amazon EKS**.

**Why Other Options Are Incorrect:**
- **A** - Fargate does not provide full control over the underlying EC2 infrastructure.
- **C** - Fargate supports both ECS and EKS, not Kubernetes exclusively.
- **D** - AWS Lambda is a separate serverless compute service for executing functions.

**Exam Clue: Run containers without managing servers - AWS Fargate**

## 14.3 Practice Question

### Original Question

A team wants to process images as soon as they are uploaded to Amazon S3.

The service should resize the images automatically.

Which AWS service is the most cost-efficient option for building this solution?

### Choices

- A. Amazon ECS 
- B. AWS Lambda 
- C. Amazon EC2 
- D. Amazon EKS

### Correct Answer

**B. AWS Lambda**

### Why?

**AWS Lambda** is an **event-driven serverless compute service** that can automatically execute code when an object is uploaded to Amazon S3.

The key clues are **automatic execution after an S3 upload** and **short-running image processing**.

- **Amazon S3** generates an object-created event.
- **AWS Lambda** executes the image resizing function.
- Lambda charges are usage-based, avoiding the need for continuously running compute instances.

Why Other Options Are Less Suitable:

- **Amazon ECS / Amazon EKS** - Container orchestration services that introduce unnecessary complexity for this simple event-driven task.
- **Amazon EC2** - Requires provisioning and managing instances, potentially incurring idle compute costs.

**Exam Clue: Automatically process files uploaded to S3 - Amazon S3 + AWS Lambda**

## 14.4 Practice Question

### Original Question

A company wants to deploy a containerized web application on AWS using a simple and easy-to-use container platform.

Which AWS service should they use?

### Choices

- A. Amazon EC2 
- B. AWS Lambda 
- C. Amazon Elastic Kubernetes Service (EKS) 
- D. Amazon Elastic Container Service (ECS)

### Correct Answer

**D. Amazon Elastic Container Service (ECS)**

### Why?

**Amazon ECS** is an AWS-native, fully managed container orchestration service designed to simplify running and managing containerized applications.

The key clue is a **simple and easy-to-use container platform**.

- **Amazon ECS** - Provides AWS-native container orchestration without requiring Kubernetes expertise.
- **Amazon EKS** - Uses Kubernetes and typically requires additional Kubernetes knowledge.
- **Amazon EC2** - Provides virtual machines rather than a managed container orchestration platform.
- **AWS Lambda** - Primarily designed for serverless function execution rather than general-purpose container orchestration.

**Important Distinction**: ECS manages container orchestration. To avoid managing the underlying servers, use **ECS with AWS Fargate**.

**Exam Clue: Simple AWS-native container orchestration - Amazon ECS**

## 14.5 Practice Question

### Original Question

How does AWS charge for AWS Lambda usage once the Free Tier has been exceeded?

### Choices

- A. By the amount of memory allocated and time it takes for the Lambda function to run 
- B. By the number of versions of the Lambda function 
- C. By the number of requests made for a given Lambda function 
- D. By the programming language 
- E. By the total number of Lambda functions in the account

### Correct Answer

**A. By the amount of memory allocated and time it takes for the Lambda function to run**

### Why?

**AWS Lambda** uses a consumption-based pricing model.

The two major billing components are:
1. **Request Charges** - Based on the number of function invocations.
2. **Duration Charges** - Based on allocated memory and execution time.

### GB-Second Pricing

Lambda compute consumption is measured in **GB-seconds**.

$$
\text{GB-seconds} = \text{Memory (GB)} \times \text{Duration (seconds)}
$$

For example, a function allocated 1 GB memory running for 2 seconds consumes:

$$
1 \times 2 = 2 \text{ GB-seconds}
$$

**Important Exam Clarification:**

Although **Option A** is the quiz's expected answer, **Option C** is also technically correct because AWS Lambda charges for requests as well as compute duration.

Therefore, the question is ambiguous if it expects only one answer.
- **B** - Lambda versions are not a standard primary billing factor.
- **D** - Programming language does not directly determine Lambda pricing.
- **E** - The total number of Lambda functions does not determine execution charges.

**Exam Clue: Lambda pricing - Number of requests + Allocated memory + Execution duration**

## 14.6 Exam Focus

| Exam Scenario                                                      | AWS Service / Concept                 |
| ------------------------------------------------------------------ | ------------------------------------- |
| Run containers without managing servers                            | **AWS Fargate**                           |
| Simple AWS-native container orchestration                          | **Amazon ECS**                            |
| Managed Kubernetes container orchestration                         | **Amazon EKS**                            |
| Execute short-running, event-driven functions                      | **AWS Lambda**                            |
| Process S3 object uploads automatically                            | **Amazon S3 + AWS Lambda**                |
| Run a containerized video processing workload exceeding 15 minutes | **Amazon ECS with Fargate**               |
| Host workloads on customer-managed virtual machines                | **Amazon EC2**                            |
| Deliver cached content globally                                    | **Amazon CloudFront**                     |
| Calculate Lambda compute consumption                               | **Allocated memory × Execution duration** |
| Maximum Lambda execution duration                                  | **15 minutes**                            |

### Key Exam Distinctions

- **AWS Lambda vs AWS Fargate** - Lambda executes event-driven functions with a 15-minute limit; Fargate runs serverless containers without that limit.
- **Amazon ECS vs Amazon EKS** - AWS-native container orchestration vs managed Kubernetes.
- **Amazon ECS vs AWS Fargate** - ECS manages container orchestration; Fargate provides serverless compute.
- **Amazon EC2 vs AWS Fargate** - Customer-managed virtual machines vs AWS-managed container infrastructure.
- **AWS Lambda Pricing** - Charges include function requests and execution duration based on allocated memory.

**Exam Tips:**

- **Processing exceeds 15 minutes - Do not choose AWS Lambda for a single uninterrupted invocation.**
- **Event-driven image processing after S3 upload - AWS Lambda.**
- **Simple container management without Kubernetes - Amazon ECS.**
- **Containers without managing servers - AWS Fargate.**
- **Lambda billing - Remember both request charges and GB-second compute charges.**