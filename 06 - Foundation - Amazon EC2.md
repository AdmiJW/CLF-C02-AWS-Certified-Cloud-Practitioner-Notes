# 1 - Introduction to AWS Compute Services

## 1.1 - Overview of AWS Compute Services

**AWS Compute Services** provide different ways to run applications depending on whether you need **virtual machines**, **containers**, or **serverless execution**.

| **Compute Type**              | **AWS Service** | **Main Purpose**                                   |
| ----------------------------- | --------------- | -------------------------------------------------- |
| **Virtual Machines**          | **Amazon EC2**  | Run virtual servers in AWS                         |
| **Containers**                | **Amazon ECS**  | AWS-native container orchestration                 |
| **Containers (Kubernetes)**   | **Amazon EKS**  | Run and manage containers using Kubernetes         |
| **Serverless Containers**     | **AWS Fargate** | Run containers without managing underlying servers |
| **Serverless Code Execution** | **AWS Lambda**  | Execute code in response to events                 |

### Key Compute Services

#### Amazon Elastic Compute Cloud (Amazon EC2)
- Provides virtual machines (EC2 instances) in AWS.
- Used when applications require virtual servers

#### Amazon Elastic Container Service (ECS)
- AWS-native **container orchestration** service
- Manages and coordinates containerized applications

#### Amazon Elastic Kubernetes Service (Amazon EKS)
- Managed service for running **Kubernetes** in AWS
- Uses Kubernetes for container orchestration

#### AWS Fargate
- **Serverless compute** for containers
- Works with **Amazon ECS** and **Amazon EKS**
- Eliminates the need to manage underlying servers

#### AWS Lambda
- **Serverless compute** for executing application code
- Commonly used for **event-driven applications**
- Runs code when an event occurs without requiring server management

## 1.2 - Container Orchestration: Control Plane vs. Data Plane

Containerized applications require two main components:

| **Component**     | **Responsibility**                                           | **AWS Services**        |
| ----------------- | ------------------------------------------------------------ | ----------------------- |
| **Control Plane** | Manages and orchestrates containers                          | Amazon ECS, Amazon EKS  |
| **Data Plane**    | Provides the compute resources where containers actually run | Amazon EC2, AWS Fargate |

Key Distinction:
- **Amazon ECS / Amazon EKS** - Manage container orchestration
- **Amazon EC2** - Provides virtual servers that can run containers
- **AWS Fargate** - Runs containers without requiring you to manage servers

**Important:** ECS and EKS handle container orchestration, while EC2 and Fargate provide the compute environment for running containers

### Serverless Containers vs. Serverless Code

- **AWS Fargate** - Run containers without managing servers
- **AWS Lambda** - Execute event-driven code without managing servers

Both are **serverless compute options**, but they serve different application requirements.

## 1.3 - Exam Focus

- **Need virtual machines - Amazon EC2**
- **Need AWS-native container orchestration - Amazon ECS**
- **Need Kubernetes-based container orchestration - Amazon EKS**
- **Need to run containers without managing servers - AWS Fargate**
- **Need event-driven serverless code execution - AWS Lambda**
- **Container control plane - Amazon ECS / Amazon EKS**
- **Container data plane - Amazon EC2 / AWS Fargate**

### Key Exam Distinction:

- **EC2** - virtual machines
- **ECS / EKS** - Container orchestration
- **Fargate** - Serverless container compute
- **Lambda** - Serverless code execution

# 2 - Amazon EC2

## 2.1 - Amazon Elastic Compute Cloud (Amazon EC2)

**Amazon Elastic Compute Cloud (Amazon EC2)** is a fundamental AWS compute service that provides **virtual machines (VMs)** in the AWS Cloud.

- An EC2 virtual machine is called an **EC2 instance**
- Customers can launch and terminate EC2 instances as needed
- AWS owns and manages the underlying physical hardware
- Customers rent virtual computing resources instead of purchasing and maintaining physical servers

### How Amazon EC2 Works

AWS operates physical servers in its data centers and uses **hypervisors** to create and manage virtual machines.

When launching an EC2 instance, customers can:
1. **Choose an operating system (OS)** for the virtual machine
2. **Configure the instance** based on application requirements
3. **Connect to the instance** remotely
4. **Install and run applications** that end users can access

**Key Concept**: Amazon EC2 provides access to a virtual server, not the underlying physical hardware

## 2.2 - Where Amazon EC2 Instances Are Hosted

EC2 instances are deployed within the **AWS Global Infrastructure**

### Infrastructure Hierarchy

1. **AWS Region** - A geographic location containing multiple Availability Zones
2. **Availability Zone (AZ)** - An isolated infrastructure location within an AWS Region
3. **EC2 Instance** - A virtual machine launched within a specific Availability Zone

**Important:**

- An AWS Region contains multiple Availability Zones
- EC2 instances are launched in a specific **Availability Zone**
- Customers can connect to their EC2 instances remotely, including over the internet when appropriate network access is configured.

## 2.3 - Amazon EC2 and the AWS Shared Responsibility Model

Amazon EC2 follows the **AWS Shared Responsibility Model**, which divides responsibilities between AWS and the customer.

| **Responsibility**                      | **AWS**                    | **Customer**    |
| --------------------------------------- | -------------------------- | --------------- |
| Physical servers and hardware           | **Responsible**            | Not responsible |
| Underlying physical infrastructure      | **Responsible**            | Not responsible |
| EC2 instance operating system selection | Provides available options | **Responsible** |
| EC2 instance configuration              | Provides compute resources | **Responsible** |
| Installing and running applications     | Not responsible            | **Responsible** |

### Key Distinction

#### AWS Responsibilities

- Owns and manages the physical servers
- Maintains the underlying hardware and infrastructure

#### Customer Responsibilities

- Chooses the operating system and instance configuration
- Connects to and uses the virtual machine
- Installs and manages applications running on the instance

**Important**: Customers have access to their **EC2 instances**, but do not have direct access to the **underlying physical servers**.

## 2.4 - Exam Focus

- **Amazon EC2 - Virtual machines in the AWS Cloud**
- **EC2 Instance - A virtual server**
- **EC2 Deployment - Within an Availability Zone in an AWS Region**
- **Physical hardware management - AWS responsibility**
- **Instance configuration and applications - Customer responsibility**
- **Access to the virtual machine - Customer**
- **Access to the underlying physical hardware - AWS only**

**Key Exam Distinction:**

- **AWS manages the underlying physical infrastructure**
- **Customers manage their EC2 instances and the applications they run**

# 3 - EC2 Configuration Options

## 3.1 - Core Amazon EC2 Configuration Options

When launching an **Amazon EC2 instance**, customers can configure its computing resources, operating system, storage, networking, and security.

| **Configuration**    | **AWS Feature**             | **Purpose**                                           |
| -------------------- | --------------------------- | ----------------------------------------------------- |
| **CPU & Memory**     | EC2 Instance Type & Size    | Determines processor family, CPU, and memory          |
| **Storage**          | Amazon EBS / Instance Store | Determines storage type and capacity                  |
| **Operating System** | Amazon Machine Image (AMI)  | Defines the operating system used by the instance     |
| **Networking**       | Amazon VPC                  | Provides private networking and IP addressing         |
| **Firewall**         | Security Groups             | Controls allowed inbound and outbound network traffic |
| **Authentication**   | EC2 Key Pairs               | Provides credentials for secure instance access       |

### Compute: Instance Types and Sizes

**EC2 Instance Types and Sizes** determine the computing resources allocated to an instance.

- **Processor Family** - Intel, AMD, or AWS Graviton
- **CPU** - Amount of processing power
- **Memory (RAM)** - Amount of memory available

### Storage Options

EC2 supports two primary storage options:

| **Storage**                                 | **Characteristics**                                   |
| ------------------------------------------- | ----------------------------------------------------- |
| **Amazon Elastic Block Store (Amazon EBS)** | Persistent block storage for EC2 instances            |
| **EC2 Instance Store**                      | Temporary storage associated with the underlying host |

**Key Distinction:**
- **Amazon EBS** - Persistent storage
- **Instance Store** - Temporary storage

### Operating System: Amazon Machine Image (AMI)

An **Amazon Machine Image (AMI)** provides the information needed to launch an EC2 instance, including its operating system.

Common operating system options include:
- Amazon Linux
- Ubuntu
- Windows
- Red Hat Enterprise Linux

**Important:** The AMI determines the operating system environment used when launching an EC2 instance

### Networking: Amazon VPC

**Amazon Virtual Private Cloud (Amazon VPC)** provides a logically isolated virtual network for EC2 instances.

- EC2 instances are launched within a **VPC subnet** in an Availability Zone
- Instances receive **private IP addresses** for communication within the network
- Instances can also receive **public IP addresses** when configured for public connectivity

### Firewall: Security Groups

A **Security Group** acts as a virtual firewall for an EC2 instance.

- Controls which network traffic is allowed.
- Determines which ports can be accessed.
- Can allow remote connections such as **SSH (Port 22)**

**Exam clue: Control network access to an EC2 instance - Security Group**

### Authentication: EC2 Key Pairs

**EC2 Key Pairs** are used for secure authentication when connecting to EC2 instances.

A key pair consists of:
- **Public Key** - Stored by AWS and placed on the instance for SSH authentication
- **Private Key** - Kept securely by the customer

Common remote access methods:
- **SSH (Secure Shell)** - Command-line remote access
- **RDP (Remote Desktop Protocol)** - Graphical remote desktop access

**Important**: The private key must be kept secure because it is used to authenticate SSH connections.

## 3.2 - Additional Amazon EC2 Configuration Options

Beyond the core configuration, EC2 provides options for automation, permissions, pricing, hardware tenancy, and resource organization.

| **Configuration**           | **AWS Feature**        | **Purpose**                                                      |
| --------------------------- | ---------------------- | ---------------------------------------------------------------- |
| **Initialization**          | EC2 User Data          | Automatically runs initialization scripts at launch              |
| **Permissions**             | IAM Role               | Grants EC2 applications permissions to access AWS services       |
| **Pricing**                 | EC2 Purchasing Options | Provides different pricing models based on workload requirements |
| **Tenancy**                 | Shared / Dedicated     | Determines whether underlying hardware is shared or dedicated    |
| **Resource Identification** | EC2 Tags               | Organizes and identifies instances using metadata                |

### EC2 User Data

**EC2 User Data** allows initialization scripts to run automatically when an instance is launched.

Common use cases:
- Installing software automatically
- Performing initial system configuration
- Running startup initialization tasks

**Exam clue: Automatically configure an EC2 instance at launch - EC2 User Data**

### IAM Roles for EC2

An **AWS Identity and Access Management (IAM) Role** grants permissions to applications running on EC2 instances.

**Example:**
- An application running on EC2 needs to upload or download files from **Amazon S3**
- The EC2 instance requires appropriate permissions
- An **IAM Role** can grant those permissions

**Key Distinction:**
- **Security Group** - Controls network traffic to and from the instance
- **IAM Role** - Controls which AWS service actions the application can perform

### EC2 Purchasing Options

EC2 provides different purchasing options depending on **workload requirements, usage patterns, and cost optimization needs**.

| **Purchasing Option**   | **Key Concept**                                     |
| ----------------------- | --------------------------------------------------- |
| **On-Demand Instances** | Pay for compute usage without long-term commitments |
| **Spot Instances**      | Use spare EC2 capacity at discounted prices         |
| **Reserved Instances**  | Pricing discounts in exchange for a commitment      |
| **Savings Plans**       | Reduced compute pricing through a usage commitment  |

**Important**: Purchasing options affect the **cost of running EC2 instances**, rather than determining their operating system or hardware configuration.

### EC2 Tenancy Options

**EC2 Tenancy** determines whether an instance runs on shared or dedicated physical hardware.

| **Tenancy**           | **Description**                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Shared Tenancy**    | Instances can share underlying physical hardware with other AWS customers. This is the default |
| **Dedicated Tenancy** | Instances run on hardware dedicated to a single AWS customer                                   |

**Exam clue: Need dedicated underlying hardware - Dedicated Tenancy**

### EC2 Tags

**EC2 Tags** are key-value pairs used to identify and organize AWS resources.

An EC2 instance receives a unique **Instance ID**, but additional tags provide meaningful context.

Common examples:

| **Tag Key** | **Example Value** |
| ----------- | ----------------- |
| `Name`      | `WebServer`       |
| `Owner`     | `DevelopmentTeam` |
| `Project`   | `ECommerceApp`    |

Tags help organize and distinguish instances, particularly when multiple users and projects share an AWS account.

## 3.3 - EC2 Instance Launch and Access Overview

The high-level process of launching and accessing an EC2 instance involves:
1. **Select an AWS Region** - Choose where the EC2 instance will run
2. **Choose an AMI** - Select the operating system
3. **Select an Instance Type** - Define CPU, memory, and processor requirements
4. **Configure Storage** - Choose the required storage type and capacity
5. **Configure Networking** - Select the VPC and subnet
6. **Configure Security Groups** - Allow the necessary network traffic
7. **Configure a Key Pair** - Set up credentials for secure SSH authentication
8. **Launch and Connect** - Start the instance and connect using the appropriate remote access method

### Example: Connecting to an EC2 Instance using SSH

For an EC2 instance configured for SSH access:
- The **public key** is placed on the EC2 instance
- The customer retains the corresponding **private key**
- The **Security Group** must allow SSH traffic on **TCP Port 22** from the intended source
- The customer uses the private key to authenticate and connect to the instance

Once connected, the customer can install and run applications.

## 3.4 - Exam Focus

- **CPU, memory, and processor selection - EC2 Instance Type & Size**
- **Persistent block storage - Amazon EBS**
- **Temporary instance storage - EC2 Instance Store**
- **Operating system selection - Amazon Machine Image (AMI)**
- **Private networking - Amazon VPC**
- **EC2 virtual firewall - Security Group**
- **Secure SSH authentication - EC2 Key Pair**
- **SSH network port - TCP 22**
- **Automatic instance initialization - EC2 User Data**
- **Grant EC2 access to Amazon S3 - IAM Role**
- **EC2 cost optimization - Purchasing Options**
- **Dedicated physical hardware - Dedicated Tenancy**
- **Organize and identify instances - EC2 Tags**

**Key Exam Distinctions:**
- **AMI vs. Instance Type** - AMI defines the operating system; Instance Type defines compute resources
- **EBS vs. Instance Store** - Persistent vs. temporary storage
- **Security Group vs. IAM Role** - Network access vs. AWS service permissions
- **EC2 User Data vs. IAM Role** - Instance initialization vs. AWS access permissions
- **Shared vs. Dedicated Tenancy** - Shared underlying hardware vs. dedicated hardware

# 4 - \[Exercise] - Launch Linux EC2 Instance

## 4.1 - Launching a Linux EC2 Instance

An **Amazon EC2 instance** can be launched with a selected operating system, compute capacity, storage, networking, and security configuration.

### Example EC2 Configuration

| **Configuration**  | **Selected Option**          | **Purpose**                                 |
| ------------------ | ---------------------------- | ------------------------------------------- |
| **AWS Region**     | Mumbai                       | Geographic location where the instance runs |
| **AMI**            | Amazon Linux                 | Defines the instance operating system       |
| **Instance Type**  | `t2.micro`                   | Provides 1 vCPU and 1 GiB memory            |
| **Key Pair**       | Existing SSH Key Pair        | Authenticates remote SSH connections        |
| **Networking**     | Default VPC                  | Provides the instance's virtual network     |
| **Security Group** | SSH from My IP, HTTP enabled | Controls network access                     |
| **Storage**        | 8 GiB Amazon EBS             | Provides persistent block storage           |

### Important Configuration Concepts

- **Amazon Machine Image (AMI)** - Determines the operating system installed on the instance
- **Instance Type** - Determines the instance's CPU and memory resources
- **Amazon EBS** - Provides persistent storage for the instance
- **Default VPC** - Provides the networking environment for the instance
- **Security Group** - Controls which network traffic is allowed
- **Key Pair** - Enables secure SSH authentication

## 4.2 - Connecting to a Linux EC2 Instance

Linux EC2 instances can be accessed remotely using **SSH (Secure Shell)**

### SSH Connection Requirements

To connect to a Linux EC2 instance over the internet, the following are required:
1. **Public IP Address** - Identifies the instance for internet-based connectivity
2. **SSH Client** - Software such as PuTTY used to establish an SSH connection
3. **Private Key** - Authenticates the connection using the corresponding public key
4. **Security Group Rule** - Allows inbound SSH traffic on **TCP Port 22**
5. **Username** - Depends on the operating system

### Default Operating System Usernames

| **Operating System** | **Default Username**                           |
| -------------------- | ---------------------------------------------- |
| **Amazon Linux**     | `ec2-user`                                     |
| **Ubuntu**           | `ubuntu`                                       |
| **Windows**          | `Administrator` (typically accessed using RDP) |

### EC2 Public IP vs. Private IP

- **Public IP Address** - Used to access an appropriately configured EC2 instance over the internet
- **Private IP Address** - Assigned within the VPC for private network communication

### Security Group Rules

| **Protocol** | **Port** | **Purpose**                           |
| ------------ | -------- | ------------------------------------- |
| **SSH**      | TCP 22   | Remote command-line access            |
| **HTTP**     | TCP 80   | Access a web server through a browser |

**Important**: Restricting SSH access to **My IP** allows connections only from the specified public IP address, reducing unnecessary exposure.

## 4.3 - Running a Web Server on EC2

After connecting to a Linux EC2 instance, applications and services can be installed and executed.

### Example: HTTP Web Server

The exercise demonstrates hosting a simple website using the **Apache HTTP Server** (`httpd`)

The process involves:
1. Installing the `httpd` package
2. Starting the Apache service
3. Creating a webpage at `/var/www/html/index.html`
4. Accessing the webpage through the instance's public IP address

**Key Concept**: Amazon EC2 provides the virtual server, while the customer installs, configures, and manages the applications running on it.

To access the website over the internet, the **Security Group must allow inbound HTTP traffic on TCP Port 80**, and the instance must have the required public connectivity.

## 4.4 - Terminating EC2 Instances

When an EC2 instance is no longer needed, it should be **terminated** to avoid unnecessary compute charges.

- **Running Instance** - Continues consuming compute resources
- **Terminated Instance** - Permanently stops the instance and releases its compute resources.

**Important:** Terminating an EC2 instance is different from stopping it. Termination is permanent, and some associated resources may have separate billing or deletion behavior.

## 4.5 - Exam Focus

- **Launch a Linux virtual machine - Amazon EC2**
- **Select the operating system - Amazon Machine Image (AMI)**
- **Define CPU and memory - EC2 Instance Type**
- **Persistent block storage - Amazon EBS**
- **Remote Linux access - SSH**
- **SSH authentication - EC2 Key Pair**
- **SSH access port - TCP 22**
- **HTTP web traffic port - TCP 80**
- **Control inbound network access - Security Group**
- **Amazon Linux default username - `ec2-user`**
- **Ubuntu default username - `ubuntu`**
- **Connect over the internet - Public IP with appropriate network access**
- **Avoid unnecessary EC2 compute charges - Terminate unused instances**

### Key Exam Distinctions:

- **SSH vs. HTTP** - SSH provides remote server access; HTTP serves web content
- **Public IP vs. Private IP** - Internet-based connectivity vs. private VPC communication
- **Stop vs. Terminate** - Stop preserves the instance for later use; terminate permanently removes it

# 5 - \[Exercise] - Launch Windows EC2 Instance

## 5.1 - Launching a Windows EC2 Instance

**Amazon EC2** supports Windows virtual machines, allowing customers to run Windows-based applications in the AWS Cloud.

The launch process is similar to a Linux EC2 instance, but Windows uses **Remote Desktop Protocol (RDP)** for remote access instead of SSH.

### Example Windows EC2 Configuration

| **Configuration**  | **Selected Option**   | **Purpose**                                          |
| ------------------ | --------------------- | ---------------------------------------------------- |
| **AMI**            | Microsoft Windows     | Defines the Windows operating system                 |
| **Key Pair**       | Existing EC2 Key Pair | Used to decrypt the Windows Administrator password   |
| **Networking**     | Default VPC           | Provide the instance's virtual network               |
| **Security Group** | RDP from My IP        | Restricts remote desktop access                      |
| **Storage**        | 30 GiB Amazon EBS     | Provides persistent storage for the Windows instance |

**Important:** The exercise uses a 30 GiB EBS volume for the selected Windows AMI. Storage requirements depend on the AMI.

## 5.2 - Connecting to a Windows EC2 Instance

Windows EC2 instances can be accessed remotely using **Remote Desktop Protocol (RDP)**, which provides a graphical desktop interface.

### RDP Connection Requirements

1. **Public IP Address** - Identifies the instance for internet-based connectivity.
2. **RDP Client** - Software such as Windows Remote Desktop Connection (`mstsc`)
3. **Administrator Username** - The default Windows administrator account.
4. **Administrator Password** - Retrieved by decrypting the initial password using the EC2 private key.
5. **Security Group Rule** - Allows inbound RDP traffic on **TCP Port 3389**

### Retrieving the Windows Administrator Password

For the Windows AMI used in this exercise, AWS provides an encrypted initial Administrator password.

- The customer selects **Get Windows Password** in the EC2 console.
- The corresponding **private key** (`.pem` **file**) is used to decrypt the password
- The decrypted password is used with the **Administrator** username to establish an RDP connection.

**Important**: Unlike Linux SSH authentication, the Windows key pair is used here to **decrypt the Administrator password**, rather than directly authenticate the RDP session.

## 5.3 - Linux EC2 vs. Windows EC2

| **Feature**                | **Linux EC2**             | **Windows EC2**                        |
| -------------------------- | ------------------------- | -------------------------------------- |
| **Remote Access**          | SSH                       | RDP                                    |
| **Default Port**           | TCP 22                    | TCP 3389                               |
| **Default Username**       | `ec2-user` (Amazon Linux) | `Administrator`                        |
| **Authentication**         | SSH private key           | Administrator password                 |
| **Key Pair Purpose**       | SSH authentication        | Decrypt initial Administrator password |
| **Interface**              | Command-line              | Graphical desktop                      |
| **Example SSH/RDP Client** | PuTTY                     | Remote Desktop Connection              |

### Security Considerations

- **Security Groups** control which IP addresses can connect to an instance.
- **My IP** - Restricts RDP access to the specified public IP address
- **Anywhere** - Allows connection attempts from any IP address and increases security exposure
- Restricting remote administration access to trusted IP addresses is recommended.

**Important**: After completing the exercise, terminate the unused EC2 instance to avoid unnecessary compute charges

## 5.4 - Exam Focus

- **Launch a Windows virtual machine - Amazon EC2 with Windows AMI**
- **Remote Windows access - RDP**
- **Default RDP port - TCP 3389**
- **Windows default administrator username** - `Administrator`
- **Decrypt initial Windows password - EC2 Private Key**
- **Windows remote desktop client - RDP Client**
- **Control RDP access - Security Group**
- **Restrict remote access to trusted IP - My IP**
- **Windows persistent block storage - Amazon EBS**
- **Avoid unnecessary EC2 compute charges - Terminate unused instances**

**Key Exam Distinctions:**

- **Linux vs. Windows** - SSH for Linux; RDP for Windows
- **SSH vs. RDP Ports** - TCP 22 for SSH; TCP 3389 for RDP
- **EC2 Key Pair Usage** - SSH authentication for Linux; initial Administrator password decryption for Windows.
- **Security Group vs. Key Pair** - Security Group controls network access; Key Pair supports authentication or password decryption.

# 6 - EC2 Instance Types and Family

## 6.1 - Amazon EC2 Instance Types

**Amazon EC2 Instance Types** determine the hardware resources allocated to an EC2 instance, including:
- **Processor Family** - Intel, AMD, or AWS Graviton
- **vCPU (Virtual CPU)** - Processing capacity available to the instance
- **Memory (RAM)** - Amount of memory available to the instance

AWS provides hundreds of instance types designed for different workload requirements.

**Key Concept**: Choosing the appropriate instance type helps match compute resources to application requirements.

## 6.2 - EC2 Instance Families

EC2 instances are grouped into different **instance families** based on the type of workload they are optimized to run.

| **Instance Family**                  | **Characteristics**                             | **Common Use Cases**                                    |
| ------------------------------------ | ----------------------------------------------- | ------------------------------------------------------- |
| **General Purpose**                  | Balanced CPU and memory                         | General applications and workloads                      |
| **Compute Optimized**                | Higher processing capacity                      | CPU-intensive applications                              |
| **Memory Optimized**                 | Higher memory capacity                          | Memory-intensive applications                           |
| **Storage Optimized**                | Optimized for storage-intensive workloads       | Applications requiring high storage performance         |
| **Accelerated Computing**            | Uses specialized hardware accelerators          | Workloads requiring hardware acceleration               |
| **High Performance Computing (HPC)** | Optimized for demanding computational workloads | High-performance scientific and computational workloads |

### General Purpose Instances

- Provide a **balance of CPU and memory**.
- Suitable when there are no specific compute or memory requirements
- Common examples include the **T2 and T3 instance families**

### Specialized Instance Families

Choose an optimized instance family when the workload has specific resource requirements.

- **CPU-intensive workload** - Compute Optimized
- **Memory-intensive workload** - Memory Optimized
- **Storage-intensive workload** - Storage Optimized
- **Hardware acceleration requirement** - Accelerated Computing
- **High-performance computational workload** - HPC

**Important**: Start with **General Purpose** instances when workload requirements are unknown. Consider specialized families when specific resource needs or performance bottlenecks are identified.

## 6.3 - EC2 Instance Type Naming Convention

EC2 instance types follow a naming convention that identifies the **instance family, generation, processor characteristics, and instance size.**

**Example**: `c7g.xlarge`

| **Component**            | **Example** | **Meaning**                                 |
| ------------------------ | ----------- | ------------------------------------------- |
| **Instance Family**      | `c`         | Compute Optimized                           |
| **Generation**           | `7`         | Seventh Generation                          |
| **Processor Identifier** | `g`         | AWS Graviton processor                      |
| **Instance Size**        | `xlarge`    | Determines the instance's resource capacity |

### Processor Families

EC2 supports different processor families, including:
- **Intel** - Common processor option
- **AMD** - Typically identified by the suffix `a`
- **AWS Graviton** - Typically identified by the suffix `g`

Some instance types also include additional identifiers for specialized capabilities, such as storage or networking optimizations.

### Instance Sizes

Each instance family offers multiple sizes with different CPU and memory capacities.

Common sizes include:
- `micro`
- `small`
- `medium`
- `large`
- `xlarge`

Larger sizes generally provide more **vCPU and memory resources** within the same instance family.

**Key Distinction:**
- **Instance Family** - Identifies the workload optimization category
- **Instance Generation** - Identifies the hardware generation.
- **Instance Size** - Determines the amount of allocated compute resources

## 6.4 - Choosing the Right EC2 Instance Type

The appropriate EC2 instance type depends on the application's resource requirements.

1. **Identify the workload requirements** - Determine whether the application is CPU, memory, or storage intensive.
2. **Choose an instance family** - Select General Purpose or a specialized family
3. **Select an instance size** - Allocate sufficient CPU and memory
4. **Evaluate performance** - Benchmark workloads when necessary to identify the most suitable option

**Important**: There is no need to memorize individual EC2 instance types for the Cloud Practitioner exam. Focus on understanding **which instance family matches a particular workload**.

## 6.5 - Exam Focus

- **Balanced CPU and memory - General Purpose**
- **CPU-intensive workloads - Compute Optimized**
- **Memory-intensive workloads - Memory Optimized**
- **Storage-intensive workloads - Storage Optimized**
- **Specialized hardware acceleration - Accelerated Computing**
- **High-performance computational workloads - HPC**
- **Determine CPU and memory resources - EC2 Instance Type**
- **Processor family examples - Intel, AMD, AWS Graviton**
- **AWS Graviton processor identifier - `g`**
- **AMD processor identifier - `a`**
- **Instance resource capacity - Instance Size**

**Key Exam Distinctions**:

- **General Purpose vs. Compute Optimized** - Balanced resources vs. CPU-focused performance
- **Compute Optimized vs. Memory Optimized** - CPU-intensive vs. RAM-intensive workloads
- **Instance Family vs. Instance Size** - Workload optimization vs. resource capacity
- **Instance Generation vs. Instance Size** - Hardware generation vs. allocated compute resources

# 7 - Storage for EC2 - EBS and Instance Store

## 7.1 - Amazon Elastic Block Store (Amazon EBS)

**Amazon Elastic Block Store (Amazon EBS)** provides **persistent block storage** for Amazon EC2 instances.
- EBS volumes act like virtual hard disks attached to EC2 instances
- Storage is **independent of the EC2 instance lifecycle**
- An EC2 instance can have one or more EBS volumes attached
- EBS volumes are network-attached storage rather than disks located directly on the EC2 physical host

### Key Characteristics

#### Persistent Storage
- EBS data can persist even after an EC2 instance is terminated
- When terminating an instance, EBS volumes can be configured to be **retained or deleted**
- This allows storage and compute resources to have separate lifecycles.

#### Root and Data Volumes
- **Root Volume** - Contains the operating system
- **Data Volume** - Stores additional application data and files

#### Elastic Storage Capacity
- EBS volumes can be expanded when additional storage is required
- Example: Increase an EBS volume from **100GB** to **200GB**
- EBS volumes **cannot be directly reduced in size**
- After increasing a volume, the operating system's file system may need to be extended.

#### EBS Snapshots
- **EBS Snapshots** provide backups of EBS volume data
- Used to preserve and recover stored information

#### Storage Pricing
- EBS storage is billed separately from EC2 compute resources
- Storage charges depend on the provisioned volume capacity and other storage characteristics

**Exam Clue: Persistent block storage for EC2 - Amazon EBS**

## 7.2 - EC2 Instance Store

**EC2 Instance Store** provides **temporary block storage** using disks physically attached to the host running the EC2 instance.

Unlike EBS, instance store storage is tied to the underlying physical host.

### Key Characteristics

#### Temporary (Ephemeral) Storage
- Instance Store data **does not persist when an EC2 instance is stopped or terminated**
- When an instance is stopped and started again, it may run on a different physical host
- Data previously stored on the original host's instance store is no longer available

#### Local Storage
- Uses disks physically attached to the EC2 host
- Unlike EBS, it is not network-attached storage

#### Fixed Storage Capacity
- Instance Store capacity depends on the selected **EC2 Instance Type**
- Customers cannot independently increase or decrease the provisioned instance store capacity
- Available storage is determined by the instance's hardware configuration

#### Storage Pricing
- Instance Store does **not have a separate per-GB storage charge**
- Its cost is included in the EC2 instance pricing

### Common Use Cases

Instance Store is suitable for **temporary data that does not need to survive an instance stop or termination**

Examples include:
- Temporary files and directories
- Application buffers
- Cache data
- Temporary file systems

**Exam clue: Temporary storage using local EC2 host disks - Instance Store**

## 7.3 - Amazon EBS vs. EC2 Instance Store

| **Feature**            | **Amazon EBS**                                           | **EC2 Instance Store**           |
| ---------------------- | -------------------------------------------------------- | -------------------------------- |
| **Storage Type**       | Persistent block storage                                 | Temporary block storage          |
| **Storage Location**   | Network-attached storage                                 | Physical host's local disks      |
| **Data Persistence**   | Persists independently of the EC2 instance when retained | Data lost on stop or termination |
| **Lifecycle**          | Can be independent of EC2                                | Tied to the EC2 host             |
| **Storage Capacity**   | Customer-configurable and expandable                     | Fixed by instance type           |
| **Capacity Reduction** | Cannot directly shrink an EBS volume                     | Not independently configurable   |
| **Backup**             | Supports EBS Snapshots                                   | No EBS Snapshot support          |
| **Pricing**            | Separate storage charges                                 | Included in instance pricing     |
| **Common Use Cases**   | Operating systems, applications, persistent data         | Cache, buffers, temporary files  |

### Choosing the Right Storage

#### Amazon EBS
- Choose when data must persist beyond the lifecycle of an EC2 instance
- Suitable for operating systems, application files, and persistent data

#### EC2 Instance Store
- Choose when data is temporary and can be recreated
- Suitable for caches, buffers, and temporary storage workloads

**Important:** Instance Store should not be used as the only location for data that must be retained after an instance is stopped or terminated

## 7.4 - Exam Focus

- **Persistent block storage for EC2 - Amazon EBS**
- **Temporary block storage for EC2 - Instance Store**
- **Storage independent of EC2 lifecycle - Amazon EBS**
- **Local physical host storage - Instance Store**
- **Expand storage capacity - Amazon EBS**
- **Fixed storage capacity based on instance type - Instance Store**
- **Back up EBS volumes - EBS Snapshots**
- **Temporary cache or buffer storage - Instance Store**
- **Separate storage charges - Amazon EBS**
- **Storage included in instance pricing - Instance Store**

**Key Exam Distinctions:**
- **EBS vs. Instance Store** - Persistent storage vs. temporary storage
- **EC2 Stop/Start** - EBS data persists; Instance Store data is lost
- **EC2 Termination** - EBS volumes can be retained or deleted based on configuration; Instance Store data is lost
- **Storage Location** - EBS is network-attached; Instance Store uses local physical host disks
- **Storage Capacity** - EBS can be expanded; Instance Store capacity is determined by the instance type

# 8 - Amazon Machine Image (AMI)

## 8.1 - Amazon Machine Image (AMI)

An **Amazon Machine Image (AMI)** is a preconfigured template that provides the information required to launch an **Amazon EC2 instance**.

- Defines the **operating system (OS)** and initial configuration of an EC2 instance
- Can include preinstalled software packages and applications
- Contains a template for the **root volume**, where the operating system resides
- Can optionally include additional **data volumes**
- A single AMI can be used to launch multiple EC2 instances with the same initial configuration

### AMI and EC2 Relationship
- **AMI** - Defines the initial operating system and software configuration
- **EC2 Instance** - The running virtual machine launched from an AMI

**Key Concept:** An AMI acts as a reusable template for creating EC2 instances

## 8.2 - Creating Custom AMIs

AWS allows customers to create their own **Custom AMIs** from existing EC2 instances

A custom AMI captures the configured state of an instance, allowing that configuration to be reused

### How Custom AMIs Work

1. Launch an EC2 instance using an existing **Base AMI**
2. Install additional software packages and applications
3. Configure the instance and store any required data
4. Create a **Custom AMI** from the configured EC2 instance
5. Launch additional EC2 instances using the new AMI

### Benefits of Custom AMIs

- **Consistency** - Launch multiple instances with the same initial configuration
- **Reusability** - Avoid repeatedly installing and configuring the same software
- **Standardization** - Deploy instances using a predefined operating system and application setup.

**Example:** A company configures an EC2 instance with its application and required software. It creates a custom AMI so additional instances can be launched with that configuration already included.

**Exam clue: Launch multiple EC2 instances with the same preinstalled software - Custom AMI**

## 8.3 - AMI Sources and Sharing

AWS provides multiple ways to obtain AMIs, including community images, AWS Marketplace images, and customer-created images

| **AMI Source**           | **Description**                                         | **Common Use Case**                        |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------ |
| **Community AMIs**       | AMIs made available for public use                      | Launch instances using available images    |
| **AWS Marketplace AMIs** | AMIs containing software offered by third-party vendors | Deploy prepackaged commercial applications |
| **Custom AMIs**          | AMIs created from existing EC2 instances                | Reuse customized configurations            |

### AWS Marketplace AMIs

**AWS Marketplace** allows software vendors to distribute applications packaged as AMIs

- Customers can launch EC2 instances using Marketplace AMIs
- Some Marketplace AMIs include additional **software licensing fees**
- Vendors can distribute and monetize preconfigured software

### AMI Launch Permissions

**AMI Launch Permissions** control which AWS accounts can use an AMI to launch instances

- AMIs can be shared with other AWS accounts
- Customers can control access to their custom AMIs
- Sharing AMIs enables reuse of predefined configurations across accounts

**Important:** AMIs can be private, shared with selected accounts, or made publicly available

## 8.4 - AMIs Are Regional Resources

**Amazon Machine Images are regional resources**, meaning an AMI exists within a specific AWS Region

- An AMI created in one Region cannot be used directly to launch EC2 instances in another Region
- The AMI must first be **copied to the destination Region**
- After copying, EC2 instances can be launched from the AMI in that Region

### Example: Mumbai to Singapore

1. Create an AMI in the **Mumbai Region**
2. Copy the AMI to the **Singapore Region**
3. Launch an EC2 instance in Singapore using the copied AMI

**Exam Clue**: **Launch an EC2 instance in another AWS Region using an existing AMI - Copy the AMI to the destination Region**

## 8.5 - Exam Focus

- **EC2 launch template - Amazon Machine Image (AMI)**
- **Operating system and initial software configuration - AMI**
- **Launch multiple similarly configured instances - Same AMI**
- **Capture and reuse a configured EC2 instance - Custom AMI**
- **Prepackaged third-party software - AWS Marketplace AMI**
- **Control which AWS accounts can use an AMI - AMI Launch Permissions**
- **AMI geographic scope - Regional**
- **Launch instances from an AMI in another Region - Copy the AMI**

**Key Exam Distinctions:**

- **AMI vs. EC2 Instance** - AMI is a template; EC2 is the virtual machine launched from it
- **Base AMI vs. Custom AMI** - Starting operating system image vs. reusable customized configuration
- **Community AMI vs. Marketplace AMI** - Publicly shared image vs. software distributed through AWS Marketplace, potentially with licensing fees
- **AMI Sharing vs. AMI Copying** - Sharing grants other accounts access; copying makes an AMI available in another Region

# 9 - \[Exercise] - Create a Webserver AMI

## 9.1 - Creating a Custom Web Server AMI

A **Custom Amazon Machine Image (AMI)** allows an EC2 instance's operating system, installed applications, and configurations to be reused when launching additional instances.

**Example: Web Server AMI**

The exercise demonstrates creating a custom AMI containing a preconfigured **Apache HTTP Web Server** (`httpd`)

The process involves:
1. Launching an **Amazon Linux EC2 instance**
2. Installing and configuring the Apache HTTP Server
3. Creating a **Custom AMI** from the configured instance
4. Launching a new EC2 instance using the custom AMI
5. Verifying that the web server works without reinstalling or reconfiguring Apache

**Key Concept**: A custom AMI enables multiple EC2 instances to be launched with the same initial operating system and application configuration.

## 9.2 - Preparing the Source EC2 Instance

### Example Configuration

| **Configuration** | **Selected Option** |
| ----------------- | ------------------- |
| **AMI**           | Amazon Linux        |
| **Instance Type** | `t2.micro`          |
| **Remote Access** | SSH (TCP 22)        |
| **Web Traffic**   | HTTP (TCP 80)       |
| **Storage**       | Amazon EBS          |

### Installing and Configuring the Web Server

After connecting through SSH, Apache HTTP Server is installed and configured

| **Command**                           | **Purpose**                                                     |
| ------------------------------------- | --------------------------------------------------------------- |
| `sudo yum install httpd`              | Install Apache HTTP Server                                      |
| `sudo systemctl start httpd.service`  | Start the Apache service                                        |
| `sudo systemctl enable httpd.service` | Configure Apache to start automatically when the instance boots |

The webpage is stored at `/var/www/html/index.html`

### Important: Start vs. Enable

- `systemctl start` - Starts the service immediately
- `systemctl enable` - Configures the service to start automatically during system boot

**Why is `enable` important?**

When a new EC2 instance is launched from the custom AMI, the Apache service should automatically start without manual intervention

**Exam clue: Ensure an installed application service starts automatically when an EC2 instance boots - Enable the service in the operating system configuration**

## 9.3 - Creating and Reusing a Custom AMI

### Creating the AMI

Once the web server is configured, an AMI can be created from the existing EC2 instance.
- The source instance can be **stopped before AMI creation** to help ensure data consistency.
- An AMI can also be created while the instance is running
- The AMI captures the configured operating system and associated EBS volume contents included in the image.
- The AMI receives a unique **AMI ID**

### Launching a New Instance from the AMI

When launching another EC2 instance using the custom AMI:
- The operating system is already configured
- Apache HTTP Server is already installed
- The existing webpage is included
- The Apache service starts automatically because it was previously enabled

**Important**: The new instance does not require the same manual application installation and configuration steps

### Security Group Requirements

To access the web server from a browser:
- Allow inbound **HTTP traffic on TCP Port 80**
- Ensure the instance has a **public IP address** and appropriate network connectivity
- Use `http://` when accessing the server if HTTPS has not been configured

**Key Distinction**: An AMI preserves the initial software configuration, while **Security Groups** determine whether the new instance accepts the required network traffic

## 9.4 - Copying AMIs Across AWS Regions

**AMIs are regional resources**

An AMI created in one AWS Region cannot be used directly to launch EC2 instances in another Region

**Example: Deploying a Web Server in Another Region**

1. Create a custom web server AMI in the **Mumbai Region**
2. Copy the AMI to another AWS Region
3. Launch an EC2 instance using the copied AMI
4. Configure the required networking and Security Group rules
5. Verify that the web server is accessible

**Important:** After completing the exercise, terminate unused EC2 instances to avoid unnecessary compute charges. The custom AMI can be retained for future use, although its associated snapshot storage may incur charges.

## 9.5 - Exam Focus

- **Create reusable EC2 configurations - Custom AMI**
- **Launch instances with preinstalled applications - Custom AMI**
- **Capture an EC2 instance's configured software environment - Create AMI**
- **Improve consistency across multiple EC2 instances - Same AMI**
- **Automatically start a service at boot - `systemctl enable`**
- **Allow web server access - Security Group (TCP 80)**
- **Improve AMI creation consistency - Stop the source instance before creating the AMI**
- **Deploy an AMI in another AWS Region - Copy the AMI**

**Key Exam Distinctions:**
- **Base AMI vs. Custom AMI** - Standard operating system image vs. customized image with preinstalled applications
- **Start vs. Enable Service** - Run immediately vs. configure automatic startup
- **Custom AMI vs. Security Group** - Reusable application configuration vs. network traffic permissions.
- **AMI Regional Scope** - AMIs must be copied before use in another AWS Region

# 10 - Security Group

## 10.1 - Amazon EC2 Security Groups

A **Security Group** is a virtual firewall that controls **inbound and outbound network traffic** for Amazon EC2 instances.

- Controls which traffic is allowed to enter or leave an EC2 instance.
- Uses **inbound rules** and **outbound rules** to filter network traffic
- Filters traffic based on **protocol, port number, and source/destination**.
- Supports both **IPv4 and IPv6** traffic
- Operates within an **Amazon VPC**

### Inbound vs. Outbound Rules

| **Rule Type**      | **Purpose**                              | **Example**                                    |
| ------------------ | ---------------------------------------- | ---------------------------------------------- |
| **Inbound Rules**  | Control traffic entering an EC2 instance | Allow HTTP traffic on Port 80                  |
| **Outbound Rules** | Control traffic leaving an EC2 instance  | Allow the instance to access external websites |

**Key Concept**: Security Groups determine which network connections are permitted to and from EC2 instances.

## 10.2 - Key Characteristics of Security Groups

### Allow Rules Only

Security Groups support **ALLOW rules only**, meaning:
- Traffic can be explicitly allowed based on configured rules
- Traffic that does not match an allow rule is implicitly denied
- Security Groups do **not support explicit DENY rules**.

**Example**: If you want to block a specific IP address while allowing all other IP addresses, a Security Group alone cannot accomplish this using a deny rule.

For explicit deny rules, **Network Access Control Lists (NACLs)** can be used.

### Default Security Group Behavior

Each VPC comes with a **Default Security Group**

- **Inbound**: Blocks unsolicited inbound internet traffic by default. The VPC's default Security Group also allows traffic from resources associated with that same group.
- **Outbound:** Allows all outbound traffic by default

Newly created custom Security Groups also start with no inbound allow rules and typically allow all outbound traffic.

### Stateful Firewall

Security Groups are **stateful**, meaning return traffic for an allowed connection is automatically permitted.

**Example:**
1. An inbound rule allows HTTP traffic on Port 80
2. A client sends an HTTP request to the EC2 instance
3. The EC2 instance sends a response
4. The response traffic is **automatically allowed**, without requiring a separate outbound rule

**Important**: Stateful behavior applies to both inbound and outbound connections.

**Exam clue: Stateful EC2 firewall with allow-only rules - Security Group**

## 10.3 - Common Network Ports

Security Groups use protocols and port numbers to control network access

| **Protocol** | **Port**        | **Purpose**                       |
| ------------ | --------------- | --------------------------------- |
| **SSH**      | TCP 22          | Secure remote Linux access        |
| **RDP**      | TCP 3389        | Remote Windows desktop access     |
| **FTP**      | TCP 21          | File Transfer Protocol            |
| **SFTP**     | TCP 22          | Secure file transfer over SSH     |
| **HTTP**     | TCP 80          | Unencrypted web traffic           |
| **HTTPS**    | TCP 443         | Encrypted web traffic             |
| **ICMP**     | No TCP/UDP Port | Network diagnostics, such as ping |

### IP Address Ranges (CIDR)

Security Group rules can specify which IP addresses are permitted to communicate with an EC2 instance.

| **Source Option** | **Description**                                            |
| ----------------- | ---------------------------------------------------------- |
| **Anywhere IPv4** | `0.0.0.0/0`  - All IPv4 addresses                          |
| **Anywhere IPv6** | `::/0` - All IPv6 addresses                                |
| **My IP**         | Current public IP address detected from the user's network |
| **Custom CIDR**   | Specific IP address or network range                       |

### Example: Web Server Security Group

An EC2 instance hosting a public website might use these inbound rules:

| **Protocol** | **Port** | **Source**  |
| ------------ | -------- | ----------- |
| **HTTP**     | TCP 80   | `0.0.0.0/0` |
| **HTTPS**    | TCP 443  | `0.0.0.0/0` |
| **SSH**      | TCP 22   | My IP       |

- **HTTP/HTTPS** - Allow public access to the website
- **SSH** - Restricts administrative access to a trusted public IP address

**Important:** If your public IP address changes, an SSH rule restricted to your previous IP may prevent you from connecting. The rule must be updated to allow the new IP address.

## 10.4 - Security Group Associations

Security Groups are associated with EC2 instances through their network interfaces

### Multiple EC2 Instances Using One Security Group

A single Security Group can be associated with **multiple EC2 instances**

**Example:** Multiple web servers can share one Security Group that allows HTTP and HTTPS traffic.

This helps maintain consistent network access rules across multiple instances

### Multiple Security Groups on One EC2 Instance

An EC2 instance can also have **multiple Security Groups** associated with it.

- AWS evaluates the combined allow rules from all associated Security Groups
- Traffic is allowed if it matches an applicable allow rule in any associated Security Group
- Security Group rules are **additive**, meaning one Security Group cannot override another with an explicit deny rule.

**Key Concept**: Security Groups support both one-to-many and many-to-one associations with EC2 instances.

## 10.5 - Security Groups vs. Network ACLs

AWS provides two important network traffic filtering mechanisms within a VPC.

| **Feature**              | **Security Group**                                | **Network ACL (NACL)**                       |
| ------------------------ | ------------------------------------------------- | -------------------------------------------- |
| **Protection Level**     | Instance/network interface level                  | Subnet level                                 |
| **Rules**                | Allow only                                        | Allow and Deny                               |
| **Stateful / Stateless** | **Stateful**                                      | **Stateless**                                |
| **Return Traffic**       | Automatically allowed for established connections | Must be explicitly permitted                 |
| **Primary Use**          | Control traffic for EC2 instances                 | Control traffic entering and leaving subnets |

### Key Distinction

#### Security group
- Instance-level virtual firewall
- Supports **allow-only rules**
- **Stateful** - Automatically permits return traffic

#### Network ACL
- Subnet-level traffic filter
- Supports **allow and deny rules**
- **Stateless** - Requires rules for traffic in both directions

**Exam clue: Explicitly deny traffic from a specific IP address - Network ACL** 

## 10.6 - Exam Focus

- **EC2 virtual firewall - Security Group**
- **Control incoming traffic - Inbound Rules**
- **Control outgoing traffic - Outbound Rules**
- **Allow-only firewall - Security Group**
- **Explicit allow and deny rules - Network ACL**
- **Stateful firewall - Security Group**
- **Stateless firewall - Network ACL**
- **Instance-level traffic filtering - Security Group**
- **Subnet-level traffic filtering - Network ACL**
- **Allow all IPv4 addresses - `0.0.0.0/0**
- **Allow all IPv6 addresses - `::/0`**
- **Secure Linux access - SSH, Port 22**
- **Windows Remote Desktop - RDP, Port 3389**
- **HTTP traffic - Port 80**
- **HTTPS traffic - Port 443**
- **Ping traffic - ICMP**

**Key Exam Distinctions:**

- **Security Group vs. NACL** - Instance-level vs. subnet-level protection
- **Allow vs. Deny Rules** - Security Groups support only allow rules; NACLs support both
- **Stateful vs. Stateless** - Security Groups automatically allow return traffic; NACLs require explicit rules
- **One vs. Multiple Security Groups** - Multiple Security Groups can be associated with one EC2 instance, and their allow rules are combined.

# 11 - EC2 User Data

## 11.1 - EC2 User Data

**EC2 User Data** allows customers to automatically execute initialization scripts when an EC2 instance is launched.

- Used to **bootstrap (initialize)** EC2 instances during their first startup.
- Automatically performs configuration tasks without requiring manual access to the instance
- Scripts are provided during the **EC2 instance launch process**
- Commonly used to install software, update packages, and configure applications

**Key Concept**: EC2 User Data automates the initial setup of an EC2 instance using a **bootstrap script**.

### Common Use Cases

EC2 User Data can automate tasks such as:
- Installing software packages
- Updating existing packages
- Configuring operating system settings
- Downloading required files from the internet
- Installing and configuring a web server

**Exam clue: Automatically install software when an EC2 instance is launched - EC2 User Data**

## 11.2 - Key Characteristics of EC2 User Data

### Executes During the First Boot

By default, **EC2 User Data scripts execute only once**, when an instance boots for the first time.
- **First Launch** - User Data script executes automatically
- **Stop and Start** - Script does not execute again by default
- **Reboot** - Script does not execute again by default

This prevents initialization tasks, such as software installation, from being repeated unnecessarily.

### Executes with Root Privileges

On Linux EC2 instances, User Data shell scripts execute as the **root user**.
- Commands run with administrative privileges
- The `sudo` command is not required inside the script

### Non-Interactive Execution

Initialization scripts should execute automatically without requiring user input

**Example:**
`yum install -y httpd`

- `yum install` - Installs a software package
- `-y` - Automatically answers yes to installation prompts
- `httpd` - Apache HTTP Server package

**Important**: The `-y` option allows package installation to complete without manual confirmation

## 11.3 - EC2 User Data vs. Custom AMI vs. Manual Configuration

AWS provides different approaches for configuring applications on EC2 instances.

| **Method**               | **How It Works**                                           | **Key Characteristic**                           |
| ------------------------ | ---------------------------------------------------------- | ------------------------------------------------ |
| **Manual Configuration** | Connect to the instance and execute commands manually      | Requires manual setup                            |
| **Custom AMI**           | Launch an instance using a preconfigured image             | Software and configurations are already included |
| **EC2 User Data**        | Execute initialization scripts automatically at first boot | Automates configuration during instance launch   |

### Key Distinctions

#### Manual Configuration
- Requires connecting to the EC2 instance
- Software installation and configuration are performed manually

#### Custom AMI
- Contains preinstalled software and predefined configurations
- New instances inherit the configuration from the AMI

#### EC2 User Data
- Uses a script to perform configuration automatically
- Software installation and other initialization tasks occur during the instance's first boot

**Important:** Custom AMIs provide **preconfigured environments**, while EC2 User Data provides **automated initialization at launch**.

## 11.4 - Exam Focus

- **Automatically initialize EC2 instances - EC2 User Data**
- **Execute a script during instance launch - EC2 User Data**
- **Automate software installation - EC2 User Data**
- **EC2 initialization script - Bootstrap Script**
- **Default execution frequency - First boot only**
- **Linux User Data execution privileges - Root User**
- **Avoid interactive installation prompts - `y` option**
- **Launch instances with preinstalled software - Custom AMI**

**Key Exam Distinctions:**

- **EC2 User Data vs. Custom AMI** - Automated configuration at first boot vs. preconfigured instance image
- **User Data vs. Manual Configuration** - Automatic initialization vs. manually executing commands
- **First Boot vs. Restart** - User Data executes on the first boot by default, not on subsequent restarts
- **Root vs. Regular User** - Linux User Data shell scripts execute with root privileges.

# 12 - EC2 SSH Key Pair

## 12.1 - Amazon EC2 SSH Key Pairs

An **EC2 Key Pair** is a security mechanism used to authenticate access to Amazon EC2 instances.

A key pair consists of two **cryptographically related keys:**
- **Public Key** - Stored by AWS and used by the EC2 instance for authentication
- **Private Key** - Downloaded and securely stored by the customer

### Key Pair Usage

| **Operating System** | **Purpose of Private Key**                                      |
| -------------------- | --------------------------------------------------------------- |
| **Linux EC2**        | Authenticates secure SSH connections to the instance            |
| **Windows EC2**      | Decrypts the initial Administrator password used for RDP access |

### Linux vs. Windows Authentication

#### Linux EC2
- Uses **SSH (Secure Shell)** for remote access
- The customer authenticates using the private key
- The corresponding public key is installed on the EC2 instance

#### Windows EC2
- Uses **RDP (Remote Desktop Protocol)** for remote access
- The private key is used to decrypt the initial **Administrator password**
- The decrypted password is used to log in through RDP

**Important:** The private key must be securely stored because it provides access to authentication credentials

## 12.2 - Key Pair Regional Scope and Reusability

### Key Pairs Are Regional

**EC2 Key Pairs are regional resources**, meaning they belong to a specific AWS Region.
- A key pair created in the **Mumbai Region** is not automatically available in another Region.
- To use a key pair in another Region, an appropriate key pair must be created or imported there
- Customers can also generate their own key pairs using tools such as **OpenSSL** and import the public key into AWS

**Exam Clue: EC2 key pair created in one AWS Region - Not automatically available in another Region**

### Reusing Key Pairs Across Instances

A single EC2 Key Pair can be used for **multiple EC2 isntances** within the same Region.
- A separate key pair is **not required for every EC2 instance**
- Multiple instances can use the same public key for SSH authentication
- The corresponding private key can authenticate connections to those instances

### Environment-Based Key Pairs

Different key pairs can be used for separate environments to improve access management

Examples:
- **Development** - Development key pair
- **Testing** - Testing key pair
- **Production** - Separate production key pair

**Important**: Reusing key pairs is supported, but separating them across environments can help enforce security policies and reduce shared access

## 12.3 - EC2 Private Key File Formats

When creating an EC2 Key Pair, AWS provides different private key file formats.

| **Format**       | **Description**                  | **Common Use**                |
| ---------------- | -------------------------------- | ----------------------------- |
| **PEM** (`.pem`) | Standard private key file format | Linux, macOS, and SSH clients |
| **PPK** (`.ppk`) | PuTTY Private Key format         | PuTTY SSH client on Windows   |

### Key Differences

#### PEM Format
- Commonly used with SSH clients on Linux and macOS
- Can be converted into PPK format using tools such as **PuTTYgen**

#### PPK Format
- Designed for use with the **PuTTY SSH client**
- Commonly used when accessing Linux EC2 instances through PuTTY on Windows

**Key Concept:** PEM and PPK are different private key file formats used by SSH clients.

## 12.4 - Exam Focus

- **Secure EC2 authentication - EC2 Key Pair**
- **Key Pair Components - Public Key and Private Key**
- **Linux EC2 authentication - SSH Private Key**
- **Windows Administrator password decryption - EC2 Private Key**
- **EC2 Key Pair scope - Regional**
- **Reuse one key pair across multiple EC2 instances - Supported**
- **Import externally generated public keys - EC2 Key Pair Import**
- **Common Linux/macOS SSH key format - PEM**
- **PuTTY private key format - PPK**
- **Convert PEM to PPK - PuTTYgen**

**Key Exam Distinctions:**

- **Public Key vs. Private Key** - Public key is used by the instance; private key is securely retained by the customer
- **Linux vs. Windows** - Linux uses the private key for SSH authentication; Windows uses it to decrypt the initial Administrator password
- **Regional Scope vs. Reusability** - Key pairs are regional but can be reused across multiple instances within the same Region
- **PEM vs. PPK** - Standard SSH private key format vs. PuTTY-specific private key format

# 13 - \[Exercise] - Launch a Webserver using EC2 User Data

## 13.1 - Launching a Web Server Using EC2 User Data

**EC2 User Data** allows customers to automatically install and configure applications when an EC2 instance is launched.

This exercise demonstrates using a **User Data bootstrap script** to deploy an Apache HTTP web server without manually connecting to the instance

### Example EC2 Configuration

| **Configuration**  | **Selected Option**         |
| ------------------ | --------------------------- |
| **AWS Region**     | Mumbai                      |
| **AMI**            | Amazon Linux                |
| **Instance Type**  | `t2.micro`                  |
| **Networking**     | Default VPC                 |
| **Security Group** | HTTP (TCP 80) from Anywhere |
| **Initialization** | EC2 User Data Script        |

**Key Concept:** EC2 User Data automates software installation and initial configuration during the instance's first boot.

## 13.2 - Automating Web Server Installation

The **User Data script** performs the following initialization tasks:

1. **Update Packages** - Update the system's existing software packages
2. **Install Apache** - Install the `httpd` web server package
3. **Start Apache** - Start the `httpd` service
4. **Enable Apache** - Configure the service to start automatically after a reboot
5. **Create Webpage** - Generate an `index.html` file containing the website content

### Important Commands

| **Command**              | **Purpose**                             |
| ------------------------ | --------------------------------------- |
| `yum update -y`          | Update installed packages automatically |
| `yum install -y httpd`   | Install Apache HTTP Server              |
| `systemctl start httpd`  | Start Apache immediately                |
| `systemctl enable httpd` | Enable automatic startup on reboot      |
| `echo`                   | Write webpage content to a file         |

### Key Concepts

#### Non-Interactive Execution
- User Data scripts execute automatically without manual input
- The `-y` option automatically confirms package installation prompts
- The `echo` command can create webpage content without an interactive text editor

#### Automatic Service Startup
- `systemctl start` starts Apache immediately
- `systemctl enable` ensures Apache starts automatically when the instance boots

**Important:** EC2 User Data executes during the first boot by default, but enabling Apache allows the web server service to start on subsequent reboots.

## 13.3 - Verifying the Web Server

Once the EC2 instance is launched, AWS executes the **User Data script** during initialization

#### Expected Result
- Apache HTTP Server is installed and running
- The website's `index.html` file is created automatically
- The website is accessible through the instance's **Public IP Address** using HTTP
- No manual SSH connection is required for installation or configuration

#### Network Requirements

The **Security Group** must allow inbound **HTTP traffic on TCP Port 80** for users to access the website

**Important:** EC2 User Data configures the application, while the Security Group controls whether network traffic can reach it

After completing the exercise, terminate the unused EC2 instance to avoid unnecessary compute charges

## 13.4 - Exam Focus

- **Automate EC2 initialization - EC2 User Data**
- **Execute initialization commands at first boot - Bootstrap Script**
- **Automatically install Apache HTTP Server - User Data Script**
- **Avoid interactive installation prompts - `-y` option**
- **Start a Linux service immediately - `systemctl start`**
- **Enable automatic service startup - `systemctl enable`**
- **Allow public HTTP access - Security Group (TCP 80)**
- **Deploy applications without manual SSH configuration - EC2 User Data**

**Key Exam distinctions:**

- **User Data vs. Manual Installation** - Automated initialization vs. manually connecting and running commands
- **User Data vs. Custom AMI** - Install and configure software at first boot vs. launch with software already installed
- `systemctl start` vs. `systemctl enable` - Start a service immediately vs. automatically start it on boot
- **User Data vs. Security Group** - Application initialization vs. network access control

# 14 - IAM Role for EC2

## 14.1 - IAM Roles for Amazon EC2

An **AWS Identity and Access Management (IAM) Role** grants permissions to EC2 instances so applications running on them can securely access other AWS services.

- Allows applications on EC2 to interact with AWS services
- Permissions are defined through **IAM Policies**
- Provides **temporary security credentials** instead of requiring long-term credentials
- Permissions can be modified without recreating the EC2 instance

### Common Use Cases

An application running on EC2 may need access to:
- **Amazon S3** - Upload or download files
- **Amazon DynamoDB** - Read or write database data
- **Amazon SQS** - Send or receive messages
- **Amazon API Gateway** - Access APIs

### Example: EC2 Accessing Amazon S3

Suppose an application running on EC2 needs to upload images to an S3 bucket.
1. Create an **IAM Role** with the required S3 permission
2. Associate the IAM Role with the EC2 instance
3. The application uses the role's temporary credentials to access Amazon S3
4. AWS authorizes requests based on the permissions defined in the role's **IAM Policies**

**Key Concept**: IAM Roles allow EC2 applications to access AWS services without storing long-term AWS credentials on the instance

## 14.2 - Key Characteristics of IAM Roles for EC2

### Permissions Through IAM Policies

**IAM Policies** define which AWS services and actions an IAM Role is permitted to access
- Permissions can be added or modified as application requirements change
- Changes can be made to the existing IAM Role
- The EC2 instance does not need to be recreated when permissions change

**Example:**
- Initially, an EC2 application requires access to **Amazon S3**
- Later, it also requires access to **Amazon DynamoDB**
- Additional permissions can be granted by updating the role's IAM Policies

### Temporary Security Credentials

IAM Roles provide **temporary credentials** that are automatically rotated

| **Feature**                          | **IAM Role** | **Long-Term IAM Credentials**              |
| ------------------------------------ | ------------ | ------------------------------------------ |
| **Credential Type**                  | Temporary    | Long-term                                  |
| **Credential Rotation**              | Automatic    | Requires credential management             |
| **Hardcoded Credentials**            | Not required | May be stored in application configuration |
| **Recommended for EC2 Applications** | Yes          | No                                         |

**Important:** Using IAM Roles is a security best practice because applications do not need to store long-term access keys on EC2 instances

### IAM Roles Are Not Assigned by Default

- Newly launched EC2 instances do **not automatically receive an IAM Role**
- An IAM Role must be explicitly created and associated with the instance
- An existing IAM Role can be changed or its permissions updated as required

## 14.3 - IAM Role vs. Security Group

Both **IAM Roles** and **Security Groups** provide security controls for EC2, but they serve different purposes.

| **Feature**       | **IAM Role**                                | **Security Group**                       |
| ----------------- | ------------------------------------------- | ---------------------------------------- |
| **Purpose**       | Controls permissions to access AWS services | Controls network traffic                 |
| **Security Type** | Identity and access managemen               | Network firewall                         |
| **Controls**      | Allowed AWS service actions                 | Allowed inbound and outbound connections |
| **Example**       | Allow EC2 to upload files to S3             | Allow HTTP traffic on TCP 80             |

**Key Distinction:**

- **IAM Role** - Determines what AWS service actions an application is authorized to perform
- **Security Group** - Determines which network traffic can reach or leave an EC2 instance.

**Exam clue: Grant an EC2 application permission to access Amazon S3 securely - IAM Role**

## 14.4 - Exam Focus

- **Grant EC2 access to other AWS services - IAM Role**
- **Define AWS service permissions - IAM Policies**
- **Allow EC2 to upload/download S3 files - IAM Role with S3 permissions**
- **Avoid storing long-term AWS credentials on EC2 - IAM Role**
- **Automatically rotated temporary credentials - IAM Role**
- **Modify EC2 permissions - Update IAM Policies**
- **Default IAM Role for EC2 - None**
- **Control network traffic - Security Group**

**Key Exam Distinctions:**

- **IAM Role vs. IAM Policy** - Role provides an identity for accessing AWS services; Policy defines the permissions
- **IAM Role vs. Long-Term Credentials** - Automatically rotated temporary credentials vs. credentials requiring long-term management
- **IAM Role vs. Security Group** - AWS service permissions vs. network access control
- **EC2 Without IAM Role vs. EC2 With IAM Role** - No role-based AWS service permissions vs. permissions explicitly granted through the associated role.

# 15 - \[Exercise] - Create and Use IAM Role for EC2

## 15.1 - Using an IAM Role to Access Amazon S3 From EC2

An **IAM Roles** allows applications running on Amazon EC2 instances to securely access other AWS services without storing long-term credentials

This exercise demonstrates how an EC2 instance can access an **Amazon S3 bucket** using an IAM Role with the appropriate permissions

**Exercise Overview**

1. Launch an **EC2 instance**
2. Create an **Amazon S3 bucket** and upload a sample file
3. Attempt to download the file from EC2 using the **AWS CLI**
4. Observe the authentication failure because no credentials are available
5. Create an **IAM Role** with S3 read permissions
6. Attach the IAM Role to the EC2 instance
7. Retry the download and verify that it succeeds
8. Remove the S3 permissions and verify that access is denied

**Key Concept**: An EC2 instance requires both valid AWS credentials and appropriate IAM permissions to access AWS services

## 15.2 - Accessing Amazon S3 Without an IAM Role

### Initial Configuration

| **Resource**     | **Configuration**              |
| ---------------- | ------------------------------ |
| **EC2 Instance** | Linux instance with SSH access |
| **S3 Bucket**    | Bucket containing `sample.txt` |
| **IAM Role**     | Not attached initially         |
| **AWS CLI**      | Used to download the S3 object |

### AWS CLI Command

The **AWS Command Line Interface (AWS CLI)** allows users and applications to interact with AWS services using commands.

Example:
```bash
aws s3 cp s3://my-example-bucket/sample.txt .
```

| **Component**                       | **Purpose**                                        |
| ----------------------------------- | -------------------------------------------------- |
| `aws s3`                            | Interacts with Amazon S3                           |
| `cp`                                | Copies a file                                      |
| `s3://my-example-bucket/sample.txt` | Source S3 object                                   |
| `.`                                 | Destination: current directory on the EC2 instance |

### Expected Result Without Credentials

If the EC2 instance has no IAM Role or other configured AWS credentials, the command fails with:
```
Unable to locate credentials
```

This occurs because the AWS CLI cannot find valid credentials to authenticate the request.

**Important Distinction:**
- **Unable to locate credentials** - No AWS credentials are available
- **Access Denied / Forbidden** - Credentials are available, but the request is not authorized

## 15.3 - Granting S3 Access Using an IAM Role

### Creating the IAM Role

An IAM Role can be created to grant EC2 permission to read objects from Amazon S3

| **Configuration**  | **Selected Option**          |
| ------------------ | ---------------------------- |
| **Trusted Entity** | AWS Service                  |
| **Service**        | Amazon EC2                   |
| **IAM Policy**     | `AmazonS3ReadOnlyAccess`     |
| **Role Name**      | `EC2RoleForS3Read` (example) |

### IAM Role and IAM Policy

#### IAM Role
- Provides an AWS identity that the EC2 instance can use
- Supplies **temporary security credentials** automatically
- Can be attached to an existing EC2 instance

#### IAM Policy
- Defines the AWS actions and resources that are permitted
- Determines whether the EC2 application can read, write, or perform other operations on AWS services

### AmazonS3ReadOnlyAccess Policy

The AWS-managed policy `AmazonS3ReadOnlyAccess` grants read-only permissions for Amazon S3 resources

- Allows reading S3 objects
- Does not grant permission to upload, modify, or delete objects
- Can be attached to an IAM Role used by EC2

### Associating the IAM Role with EC2

After creating the IAM Role:
1. Select the existing EC2 instance
2. Choose **Security - Modify IAM Role**
3. Select the IAM Role with S3 read permissions
4. Update the instances' IAM Role association

The instance can then obtain temporary credentials associated with that role.

### Verifying Access

Running the same command again:
```bash
aws s3 cp s3://my-example-bucket/sample.txt .
```

The download succeeds because:
- The EC2 instance now has valid temporary credentials
- The IAM Role has permission to read the S3 object.

**Exam clue: Allow an EC2 application to securely download files from S3 without storing AWS access keys - Attach an IAM Role with S3 read permissions**

## 15.4 - Removing IAM Permissions and Verifying Access

IAM permissions can be modified without terminating or recreating the EC2 instance

### Removing S3 Read Permissions

The exercise removes the `AmazonS3ReadOnlyAccess` policy from the existing IAM Role.

After the permission change takes effect:
- The EC2 instance can still obtain credentials from its IAM Role
- However, the role no longer grants the required S3 read permission
- Attempting to download the S3 object fails with a **Forbidden / Access Denied** error

### Authentication vs. Authorization

| **Scenario**                             | **Result**                   | **Reason**                                  |
| ---------------------------------------- | ---------------------------- | ------------------------------------------- |
| **No IAM Role or credentials**           | Unable to locate credentials | No credentials available for authentication |
| **IAM Role with S3 read permissions**    | Download successful          | Request is authenticated and authorized     |
| **IAM Role without S3 read permissions** | Access Denied / Forbidden    | Required permissions are missing            |

**Key Concept**: Having valid AWS credentials does not automatically grant access to AWS services. The IAM identity must also have the required permissions

### Resource Cleanup

After completing the exercise:
- **Terminate the EC2 instance** to avoid unnecessary compute charges
- Delete the S3 bucket and its objects if they are no longer required
- S3 storage may incur charges while objects remain stored

## 15.5 - Exam Focus

- **Grant EC2 access to Amazon S3 - IAM Role**
- **Define permitted AWS actions - IAM Policy**
- **Allow read-only S3 access - `AmazonS3ReadOnlyAccess`**
- **Provide temporary AWS credentials - IAM Role**
- **Download an S3 object using AWS CLI - `aws s3 cp`**
- **No credentials available - Unable to locate credentials**
- **Insufficient IAM permissions - Access Denied / Forbidden**
- **Change EC2 permissions - Modify the attached IAM Role's policies**
- **Avoid hardcoded AWS credentials - Use IAM Roles**

**Key Exam Distinctions:**

- **IAM Role vs. IAM Policy** - Role provides an identity and temporary credentials; Policy defines the permissions
- **Authentication vs. Authorization** - Authentication establishes identity; Authorization determines permitted actions
- **Missing Credentials vs. Missing Permissions** - Unable to locate credentials vs. Access Denied
- **IAM Role with vs. without S3 Permissions** - Successful S3 access vs. unauthorized access
- **IAM Role vs. Hardcoded Credentials** - Automatically managed temporary credentials vs. manually stored long-term credentials

# 16 - EC2 Pricing Plans - What is it?

## 16.1 - Amazon EC2 Pricing Options

**Amazon EC2 Pricing Options** determine how customers pay for EC2 compute capacity based on their **workload requirements, usage patterns, and commitment levels**.

- Pricing options affect the **cost of running EC2 instances**, not the underlying hardware configuration
- Different pricing models provide opportunities to **optimize costs** based on how EC2 instances are used.
- Choosing the appropriate pricing option depends on workload predictability, flexibility, and tolerance for interruptions.

### Four Main EC2 Pricing Options

| **Pricing Option**      | **Key Characteristic**                                               | **Best Suited For**                       |
| ----------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| **On-Demand Instances** | Pay for usage without long-term commitments                          | Short-term or unpredictable workloads     |
| **Spot Instances**      | Deep discounts using spare EC2 capacity; with possible interruptions | Flexible, interruption-tolerant workloads |
| **Savings Plans**       | Discounted pricing in exchange for a usage commitment                | Predictable, ongoing compute usage        |
| **Reserved Instances**  | Discounted pricing in exchange for a commitment                      | Predictable, long-term EC2 usage          |

**Important: On-Demand** is the default pricing option for EC2 instances

## 16.2 - Understanding EC2 Pricing Models

### On-Demand Instances

**On-Demand Instances** allow customers to pay for EC2 compute resources based on actual usage without long-term commitments

- No upfront commitment required
- Pay only for the compute capacity consumed
- Suitable for workloads with unpredictable usage patterns
- Provides flexibility without requiring long-term planning

**Exam clue: Short-term or unpredictable workload without long-term commitment - On-Demand Instances**

### Spot Instances

**Spot Instances** allows customers to use AWS's unused EC2 compute capacity at significantly discounted prices.

- Can provide discounts of **up to 90% compared to On-Demand Pricing**
- Use spare AWS compute capacity
- AWS can **interrupt Spot Instances** when the capacity is needed
- Suitable for workloads that can tolerate interruptions

**Key Trade-off:** Lower compute costs in exchange for the possibility of interruptions

**Exam clue: Lowest-cost EC2 capacity for interruption-tolerant workloads - Spot Instances**

### Savings Plans

**Savings Plans** provide discounted compute pricing in exchange for a commitment to a consistent level of usage.

- Customers commit to compute usage for a specified period
- AWS provides discounted pricing compared to On-Demand
- Suitable for workloads with predictable, ongoing compute requirements

**Exam clue: Reduce compute costs through a usage commitment - Savings Plans**

### Reserved Instances

**Reserved Instances (RIs)** provide discounted EC2 pricing in exchange for a commitment

- Designed for predictable, long-term EC2 usage
- Provide discounts compared to On-Demand pricing
- Suitable when EC2 usage requirements are relatively stable

**Exam clue: Predictable long-term EC2 usage with discounted pricing - Reserved Instances**

**Important:** Savings Plans and Reserved Instances both offer commitment-based discounts. Their differences will be covered in later lessons.

## 16.3 - EC2 Billing Granularity

EC2 compute billing depends on the instance's operating system and applicable pricing conditions

### Per-Second vs. Per-Hour Billing

- **Per-Second Billing** - Common for EC2 instances running Amazon Linux, Windows, and Ubuntu Pro, as described in the lesson
- **Per-Hour Billing** - Applies to certain other operating systems or configurations

### Example: Per-Second Billing

Suppose an EC2 instance runs for only **10 minutes**
- Under per-second billing, the customers pays for the actual usage duration, subject to applicable billing minimums
- Customers do not necessarily need to pay for a full hour.

**Key Concept**: Granular billing supports **pay-as-you-go pricing**, allowing customers to better align compute costs with actual usage

## 16.4 - Exam Focus

- **Default EC2 pricing option - On-Demand**
- **No long-term commitment - On-Demand Instances**
- **Short-term or unpredictable workloads - On-Demand Instances**
- **Spare EC2 capacity at deep discounts - Spot Instances**
- **Up to 90% discount - Spot Instances**
- **AWS can interrupt instances - Spot Instances**
- **Interruption-tolerant workloads - Spot Instances**
- **Discounts through committed compute usage - Savings Plans**
- **Predictable long-term EC2 usage - Reserved Instances**
- **Pay based on actual compute usage - Pay-as-you-go pricing**

**Key Exam Distinctions:**

- **On-Demand vs Spot** - Flexible, non-interruptible capacity under normal operation vs. discounted, interruptible capacity
- **On-Demand vs. Savings Plans** - No usage commitment vs. commitment-based discounts
- **On-Demand vs. Reserved Instances** - Pay without a long-term commitment vs. discounted pricing through a commitment
- **Spot vs. Commitment-Based Pricing** - Discounts from spare capacity with interruption risk vs. discounts from usage commitments.
- **EC2 Instance Type vs. Pricing Option** - Determines compute resources vs. determines how compute usage is priced

# 17 - EC2 Pricing - On-demand and Spot

## 17.1 - EC2 On-Demand Instances

**On-Demand Instances** are the default EC2 pricing option, allowing customers to pay for compute capacity based on actual usage without long-term commitments.

### Key Characteristics

- **Default EC2 pricing option**
- **No long-term commitment** required
- **No commitment-based discount** - Uses standard On-Demand pricing
- **Flexible Usage** - Instances can be launched, stopped, or terminated as needed
- **Usage-Based Billing** - Pay for the compute capacity consumed, based on applicable billing increments
- Supports different instance types, AWS Regions, and Availability Zones

### Common Use Cases

On-Demand Instances are suitable for **short-term, unpredictable, or variable workloads**

Examples include:

- **Development and Testing** - Environments that do not need to run continuously
- **Staging Environments** - Temporary application testing before production
- **Proof of Concept (PoC)** - Short-term experimentation
- **Performance Benchmarking** - Testing different EC2 instance types before making long-term commitments
- **Unpredictable Workloads** - Applications with irregular or sudden increases in demand
- **Stateful Applications** - Workloads requiring uninterrupted processing and preservation of application state

### When to Avoid On-Demand

On-Demand may not be the most cost-effective choice when:

- **Usage is predictable and long-term** - Consider Savings Plans or Reserved Instances
- **Workloads tolerate interruptions** - Consider Spot Instances for lower costs

**Exam clue: Short-term or unpredictable workload without long-term commitment - On-Demand Instances**

## 17.2 - EC2 Spot Instances

**Spot Instances** allow customers to use AWS's **spare EC2 compute capacity** at significantly discounted prices

### Key Characteristics

- **Up to 90% discount** compared to On-Demand pricing
- Uses AWS's available spare compute capacity
- **Capacity is not guaranteed** and may not be immediately available
- AWS can **interrupt Spot Instances** when it needs to reclaim capacity
- Typically provides a **two-minute interruption notice** before reclaiming an instance
- Suitable for workloads that can tolerate interruptions, delays, or restarts

### Spot Instance Lifecycle

1. **Request Capacity** - Customer requests Spot compute capacity
2. **Capacity Availability** - AWS launches the instance when suitable spare capacity is available
3. **Instance Running** - The application executes on the Spot Instance
4. **Interruption Notice** - AWS may provide a two-minute warning when reclaiming capacity
5. **Interruption** - AWS interrupts the instance, commonly through termination
6. **Workload Recovery** - The application can restart or continue processing when replacement capacity becomes available

**Important**: Spot Instances offer substantial cost savings but require workloads to handle potential interruptions

### Suitable Workloads

Spot Instances are ideal for **fault-tolerant, stateless, and time-insensitive workloads**

| **Workload**               | **Why Spot Is Suitable**                                             |
| -------------------------- | -------------------------------------------------------------------- |
| **Batch Processing**       | Jobs can restart if interrupted                                      |
| **Big Data Processing**    | Data processing tasks can be retried                                 |
| **Graphics Rendering**     | Rendering tasks can be distributed and restarted                     |
| **CI/CD Pipelines**        | Non-urgent build jobs can tolerate delays                            |
| **Stateless Applications** | Instances can be replaced without losing important application state |

### Fault-Tolerant vs. Stateless Workloads

#### Fault-Tolerant Workload

- Can recover from instance failures or interruptions
- Supports retrying or restarting unfinished tasks

#### Stateless Workload

- Does not depend on important application state stored locally on an individual instance
- Can be restarted or replaced more easily

**Example:** A batch-processing application reads files, processes them, and saves results to another location. If its Spot Instance is interrupted, another instance can retry unfinished work

### When to Avoid Spot Instances

Spot Instances are generally unsuitable for:

- **Mission-critical applications** that cannot tolerate interruptions
- **Time-sensitive workloads** requiring immediate and predictable execution
- **Stateful transactional workloads** that cannot safely recover from interruptions

**Exam clue: Lowest-cost EC2 option for fault-tolerant or interruption-tolerant workloads - Spot Instances**

## 17.3 - Optimizing Spot Instance Usage

Because Spot capacity depends on available AWS infrastructure, customers can improve capacity availability by remaining flexible.

### Spot Optimization Strategies

| **Strategy**                    | **Description**                                     |
| ------------------------------- | --------------------------------------------------- |
| **Flexible Execution Time**     | Run workloads when spare capacity becomes available |
| **Flexible Instance Types**     | Use alternative instance families or sizes          |
| **Flexible Availability Zones** | Request Spot capacity across different AZs          |
| **Flexible AWS Regions**        | Use another Region when the workload permits        |

### Combining On-Demand and Spot Instances

AWS allows applications to use a combination of **On-Demand and Spot Instances** through mechanisms such as:
- **EC2 Auto Scaling Groups**
- **Spot Fleets**

**Example:**

An application requires a reliable baseline of compute capacity but occasionally needs additional processing power.

- **On-Demand Instances** - Provide stable baseline compute capacity
- **Spot Instances** - Provide lower-cost additional capacity for interruption-tolerant work

**Key Concept**: Combining On-Demand and Spot Instances can help balance **application reliability** and **cost optimization**

## 17.4 - On-Demand vs. Spot Instances

| **Feature**                    | **On-Demand Instances**                           | **Spot Instances**                           |
| ------------------------------ | ------------------------------------------------- | -------------------------------------------- |
| **Pricing**                    | Standard pricing                                  | Up to 90% discount                           |
| **Capacity Source**            | Regular EC2 capacity                              | Spare AWS compute capacity                   |
| **Long-Term Commitment**       | Not required                                      | Not required                                 |
| **AWS-Initiated Interruption** | Not subject to Spot capacity reclamation          | Depends on spare capacity                    |
| **Capacity Availability**      | Subject to normal capacity availability           | Depends on spare capacity                    |
| **Workload Type**              | Unpredictable, short-term, interruption-sensitive | Fault-tolerant, stateless, time-insensitive  |
| **Common Use Cases**           | Development, testing, PoCs, variable workloads    | Batch processing, big data, rendering, CI/CD |
| **Main Advantage**             | Flexibility and continuity                        | Significant cost savings                     |
| **Main Trade-off**             | Higher cost                                       | Possible interruptions                       |

### Choosing the Right Pricing Option

- **Need flexible compute without long-term commitments - On-Demand**
- **Need the lowest cost and can tolerate interruptions - Spot**
- **Need predictable long-term compute usage - Consider Savings Plans or Reserved Instances**
- **Need reliable baseline capacity with cheaper additional compute - Combine On-Demand and Spot**

## 17.5 - Exam Focus

- **Default EC2 pricing option - On-Demand**
- **No long-term commitment - On-Demand**
- **Short-term or unpredictable workloads - On-Demand**
- **Development, testing, and PoC workloads - On-Demand**
- **Standard EC2 pricing without commitment discounts - On-Demand**
- **Spare EC2 compute capacity - Spot Instances**
- **Up to 90% discount - Spot Instances**
- **Two-minute interruption warning - Spot Instances**
- **AWS can reclaim capacity - Spot Instances**
- **Capacity availability not guaranteed - Spot Instances**
- **Batch processing and big data workloads - Spot Instances**
- **Fault-tolerant and stateless workloads - Spot Instances**
- **Mix On-Demand and Spot capacity - EC2 Auto Scaling Groups / Spot Fleets**
- **Improve Spot availability - Flexibility in instance types, AZs, Regions, and execution time**

**Key Exam Distinctions:**

- **On-Demand vs. Spot** - Standard pricing with no Spot reclamation risk vs. deep discounts with interruption risk
- **Unpredictable vs. Interruptible Workloads** - On-Demand for unpredictable workloads; Spot for workloads that tolerate interruptions
- **Stateful vs. Stateless** - Interruption-sensitive stateful applications generally favor On-Demand; replaceable stateless workloads are well suited to Spot
- **On-Demand vs. Savings Plans / Reserved Instances** - No long-term commitment vs. discounts through commitments
- **Spot Cost vs. Reliability** - Lower cost comes with reduced capacity predictability and possible interruptions

# 18 - Demo: Spot Instances

## 18.1 - Requesting Amazon EC2 Spot Instances

**EC2 Spot Instances** allow customers to use AWS's spare capacity at significantly discounted prices compared to On-Demand Instances

When requesting Spot Instances, customers can configure parameters to control **compute capacity, pricing, and instance selection**

### Key Spot Request Configuration Options

| **Configuration**           | **Purpose**                                                                   |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Launch Parameters**       | Defines the AMI, EC2 Key Pair, and other instance settings                    |
| **Target Capacity**         | Specifies the amount of compute capacity required                             |
| **Maximum Spot Price**      | Sets the maximum price the customer is willing to pay                         |
| **Instance Type Selection** | Specifies particular EC2 instance types                                       |
| **Resource Requirements**   | Defines required CPU and memory instead of selecting a specific instance type |

### Maximum Spot Price

Customers can set a **maximum Spot price** to control their compute spending

- Spot pricing depends on available AWS spare capacity
- Customers can define the maximum price they are willing to pay
- Spot capacity is only fulfilled when the request's pricing and capacity requirements can be satisfied

**Important:** Spot Instances can provide discounts of **up to 90% compared to On-Demand**, but availability is not guaranteed.

## 18.2 - Spot Instance Selection Strategies

AWS provides flexibility when choosing which EC2 instance types can fulfill a Spot request

### Specific Instance Type vs. Resource Requirements

| **Strategy**               | **Description**                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| **Specific Instance Type** | Request a particular EC2 instance type, such as an M5 instance                              |
| **Resource Requirements**  | Specify required CPU and memory resources, allowing AWS to select compatible instance types |

### Example: Flexible Instance Selection

Suppose an application requires at least **2 vCPUs** but does not depend on a particular instance family

- If Spot capacity is unavailable in the **M5 family**, AWS may select compatible capacity from the **C5 family**.
- This flexibility improves the changes of obtaining available Spot capacity

### Benefits of Flexible Spot Requests

- **Improve Capacity Availability** - More instance types can satisfy the request
- **Cost Optimization** - More opportunities to use discounted Spot capacity
- **Reduced Instance Type Dependency** - Applications are not restricted to one specific EC2 instance type

**Key Concept:** Specifying resource requirements instead of a fixed instance type can improve Spot capacity availability

## 18.3 - Exam Focus

- **Request discounted spare EC2 capacity - Spot Instances**
- **Specify required compute capacity - Target Capacity**
- **Control maximum acceptable Spot pricing - Maximum Spot Price**
- **Choose a particular instance type - Specific Instance Type Selection**
- **Allow AWS to select compatible instance types - Resource Requirements**
- **Improve Spot capacity availability - Flexible Instance Selection**
- **Lowest-cost EC2 pricing option for interruption-tolerant workloads - Spot Instances**

**Key Exam Distinctions:**

- **Specific Instance Type vs. Resource Requirements** - Fixed instance selection vs. flexible selection based on CPU and memory needs
- **Maximum Spot Price vs. Target Capacity** - Controls acceptable pricing vs. required compute capacity
- **Spot Availability vs. On-Demand** - Spot capacity depends on spare AWS resources and is not guaranteed
- **Spot Cost Optimization** - Flexibility in instance types increases opportunities to obtain discounted capacity

# 19 - EC2 Pricing - Savings Plan and Reserved Instances

## 19.1 - AWS Savings Plans

**AWS Savings Plans** provide discounted compute pricing in exchange for a commitment to a consistent amount of compute usage over a specified period.

- Provide discounts of **up to 72% compared to On-Demand pricing**
- Require a **1-year or 3-year commitment**
- Customers commit to a specific amount of **compute spending per hour (USD/hour)**
- The committed amount is charged regardless of whether the compute resources are fully utilized
- Best suited for **steady-state, predictable, and long-term workloads**

**Important:** Savings Plans are pricing commitments, not physical capacity reservations. Customers commit to an hourly spending amount rather than a specific number of vCPUs

### Types of Savings Plans

AWS provides two main types of Savings Plans

| **Feature**            | **EC2 Instance Savings Plans**                           | **Compute Savings Plans**                                          |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| **Supported Services** | Amazon EC2 only                                          | Amazon EC2, AWS Lambda, AWS Fargate                                |
| **Commitment**         | Specific EC2 instance family in a Region                 | Compute spending across supported services                         |
| **Flexibility**        | Flexible within the committed instance family and Region | Flexible across instance families, Regions, and supported services |
| **Discount**           | Higher potential discounts                               | Slightly lower potential discounts                                 |
| **Best For**           | Predictable EC2 workloads                                | Compute workloads requiring greater flexibility                    |

### EC2 Instance Savings Plans

**EC2 Instance Savings Plans** provide discounted pricing for EC2 usage within a selected instance family and AWS Region.

- Applies specifically to **Amazon EC2**
- Offers higher potential discounts than Compute Savings Plans
- Suitable for predictable EC2 usage where the instance family and Region are expected to remain consistent

### Compute Savings Plans

**Compute Savings Plans** provide greater flexibility across different AWS compute services.

Supported services include:
- **Amazon EC2** - Virtual machines
- **AWS Lambda** - Serverless code execution
- **AWS Fargate** - Serverless container compute

**Example**: A company uses EC2 for application hosting, Lambda for event-driven functions, and Fargate for containerized workloads. Compute Savings Plans can apply discounted pricing across these services.

**Key Distinction:**
- **EC2 Instance Savings Plans** - Higher potential discounts with less flexibility
- **Compute Savings Plans** - Greater flexibility across compute services

## 19.2 - Savings Plans Commitment and Payment Options

Savings Plans offer different commitment periods and payment options

### Commitment Terms

| **Commitment**  | **Description**                                   |
| --------------- | ------------------------------------------------- |
| **1-Year Term** | Shorter commitment with discounted pricing        |
| **3-Year Term** | Longer commitment with higher potential discounts |

Generally, longer commitments provide greater savings.

### Payment Options

| **Payment Option**  | **Description**                                                    | **Discount**               |
| ------------------- | ------------------------------------------------------------------ | -------------------------- |
| **All Upfront**     | Pay the entire commitment cost at the beginning                    | Highest potential discount |
| **Partial Upfront** | Pay a portion upfront and the remainder over the commitment period | Moderate discount          |
| **No Upfront**      | No initial payment; pay through periodic billing                   | Lower discount             |

### Maximum Savings

The combination generally offering the highest Savings Plans discounts is:
- **EC2 Instance Savings Plans**
- **3-Year Commitment**
- **All Upfront Payment**

This combination can provide **up to 72% savings compared to On-Demand pricing**.

### Suitable Workloads

Savings Plans are most appropriate for workloads with consistent compute usage.

Examples include:
- **Steady-State Applications** - Applications running continuously
- **Predictable Production Workloads** - Applications with relatively stable demand
- **Long-Running Database Workloads** - Databases requiring ongoing compute capacity

### When to Avoid Savings Plans

Savings Plans may be less suitable for:
- **Short-Term Workloads** - On-Demand may provide better flexibility
- **Unpredictable or Infrequent Usage** - Committed spending may not be fully utilized
- **Fault-Tolerant Batch Processing** - Spot Instances may provide greater savings

**Exam clue: Predictable compute usage with a 1-year or 3-year spending commitment - Savings Plans**

## 19.3 - Amazon EC2 Reserved Instances (RIs)

**Amazon EC2 Reserved Instances (RIs)** provide discounted EC2 pricing in exchange for a long-term commitment.

- Apply specifically to **Amazon EC2**
- Offer discounts compared to On-Demand pricing
- Suitable for **predictable, long-term EC2 workloads**
- Support **1-year and 3-year commitment terms**
- Offer different levels of flexibility depending on the RI type.

### Type of Reserved Instances

| **Feature**                | **Standard Reserved Instances**      | **Convertible Reserved Instances**                                            |
| -------------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| **Discount**               | Higher discounts                     | Lower discounts                                                               |
| **Flexibility**            | More limited                         | Greater flexibility                                                           |
| **Instance Configuration** | Best when requirements remain stable | Can exchange reservations for different configurations, subject to conditions |
| **Best For**               | Stable, predictable EC2 workloads    | Long-term workloads with potentially changing requirements                    |

### Standard Reserved Instances

**Standard Reserved Instances** provide higher discounts for workloads with stable EC2 requirements.
- Suitable when the required EC2 configuration is predictable
- Offer less flexibility compared to Convertible RIs
- Best for long-term workloads that are unlikely to change significantly

### Convertible Reserved Instances

**Convertible Reserved Instances** provide additional flexibility when EC2 requirements change.
- Allow reservations to be exchanged for different eligible instance configurations
- Provide lower discounts than Standard RIs in exchange for greater flexibility
- Suitable for long-term workloads where computing requirements may evolve

**Important**: Reserved Instances do not automatically guarantee physical capacity. Capacity reservation depends on whether the RI is regional or zonal.

### Savings Plans vs. Reserved Instances

| **Feature**                    | **Savings Plans**                                      | **Reserved Instances**                       |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------- |
| **Commitment Basis**           | Hourly compute spending                                | EC2 reservation attributes                   |
| **Term**                       | 1 or 3 years                                           | 1 or 3 years                                 |
| **EC2 Support**                | Yes                                                    | Yes                                          |
| **Lambda and Fargate Support** | Compute Savings Plans only                             | No                                           |
| **Flexibility**                | Depends on Savings Plan type                           | Depends on RI type                           |
| **Main Benefit**               | Commitment-based discounts with flexible usage options | Discounted EC2 pricing for predictable usage |

**Key Distinction:** Savings Plans provide commitment-based pricing flexibility, while Reserved Instances are specifically associated with EC2 usage.

## 19.4 - Comparing All EC2 Pricing Options

| **Pricing Option**                 | **Commitment** | **Main Benefit**                | **Best Use Case**                               |
| ---------------------------------- | -------------- | ------------------------------- | ----------------------------------------------- |
| **On-Demand**                      | None           | Maximum usage flexibility       | Short-term, unpredictable workloads             |
| **Spot Instances**                 | None           | Up to 90% discount              | Fault-tolerant, interruption-tolerant workloads |
| **EC2 Instance Savings Plans**     | 1 or 3 years   | Up to 72% discount              | Predictable EC2 usage                           |
| **Compute Savings Plans**          | 1 or 3 years   | Flexible compute discounts      | EC2, Lambda, and Fargate usage                  |
| **Standard Reserved Instances**    | 1 or 3 years   | Higher RI discounts             | Stable EC2 requirements                         |
| **Convertible Reserved Instances** | 1 or 3 years   | More flexible RI configurations | Long-term EC2 usage with changing requirements  |

### AWS Pricing Calculator

**AWS Pricing Calculator** helps estimate and compare AWS infrastructure costs.

For Amazon EC2, customers can configure:
- Operating system and instance type
- Number of EC2 instances
- Required compute capacity
- Pricing models and commitment terms
- Payment options

The calculator provides estimated costs for the selected configurations, helping customers compare pricing options

**Important:** Spot pricing is dynamic, so actual Spot costs can vary with available capacity and market conditions

**Exam clue: Estimate and compare EC2 costs under different pricing models - AWS Pricing Calculator**

## 19.5 - Exam Focus

- **Short-term or unpredictable workloads - On-Demand**
- **Fault-tolerant workloads with maximum discounts - Spot Instances**
- **Predictable long-term compute usage - Savings Plans**
- **Savings Plans commitment - USD/hour for 1 or 3 years**
- **Maximum Savings Plans discount - Up to 72%**
- **EC2-specific commitment - EC2 Instance Savings Plans**
- **Flexible pricing across EC2, Lambda, and Fargate - Compute Savings Plans**
- **Highest potential Savings Plans discount - EC2 Instance Savings Plans, 3-year term, All Upfront**
- **Stable EC2 requirements - Standard Reserved Instances**
- **Changing EC2 requirements - Convertible Reserved Instances**
- **Highest potential discount among RI types - Standard Reserved Instances**
- **Greater flexibility among RI types - Convertible Reserved Instances**
- **Estimate and compare AWS costs - AWS Pricing Calculator**

**Key Exam Distinctions:**

- **Savings Plans vs. Reserved Instances** - Hourly compute spending commitment vs. EC2-specific reservation-based pricing
- **EC2 Instance vs. Compute Savings Plans** - Higher potential EC2 discounts vs. greater flexibility across compute services
- **Standard vs. Convertible RIs** - Higher discounts with less flexibility vs. lower discounts with greater flexibility
- **1-Year vs. 3-Year Commitment** - Shorter commitment vs. higher potential savings
- **All Upfront vs. No Upfront** - Higher potential discounts vs. no initial payment
- **Savings Plans vs. Spot Instances** - Commitment-based discounts vs. spare-capacity discounts with interruption risk.

# 20 - EC2 Tenancy - Shared and Dedicated

## 20.1 - Amazon EC2 Tenancy Options

**Amazon EC2 Tenancy** determines whether the underlying physical hardware hosting an EC2 instance is **shared with other AWS customers or dedicated to a specific customer**.

AWS provides two main tenancy options:

| **Tenancy Option**    | **Description**                                           | **Key Characteristic**                         |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------- |
| **Shared Tenancy**    | Physical hardware is shared across multiple AWS customers | Default tenancy option                         |
| **Dedicated Tenancy** | Physical hardware is dedicated to a particular customer   | Used for compliance and licensing requirements |

### Shared Tenancy

**Shared Tenancy** is the default tenancy option for Amazon EC2 instances.
- Multiple AWS customers can run EC2 instances on the **same physical server**.
- Instances are isolated from one another using **hypervisor-based virtualization**
- Customers do not control the underlying physical host
- Generally more cost-effective than dedicated tenancy

**Important:** Sharing physical hardware does not mean customers can access each other's EC2 instances

### Dedicated Tenancy

**Dedicated Tenancy** provides physical hardware that is not shared with unrelated AWS customers.
- Provides **physical host isolation**
- Commonly required for **regulatory, compliance, or software licensing requirements**
- Generally more expensive than shared tenancy
- Available through two options:
	- **Dedicated Instances**
	- **Dedicated Hosts**

**Exam clue: EC2 workloads requiring dedicated physical hardware - Dedicated Tenancy**

## 20.2 - Dedicated Instances vs. Dedicated Hosts

AWS provides two dedicated tenancy options with different levels of control over the underlying hardware

### Dedicated Instances

**EC2 Dedicated Instances** run on physical hardware dedicated to a single AWS customer account.
- The underlying physical host is **not shared with other AWS customers**
- Multiple instances belonging to the same account can use dedicated hardware
- AWS manages the physical host and instance placement
- Customers **cannot select or control the specific physical host**
- If a Dedicated Instance is stopped and restarted, AWS may place it on a different dedicated physical host

**Key Concept**: Dedicated Instances provide physical hardware isolation without giving customers control over specific host placement

### Dedicated Hosts

**Amazon EC2 Dedicated Hosts** provide physical servers dedicated to customer use, with additional control over instance placement.
- Customers can identify and select **specific physical hosts** for their EC2 instances
- Support **Host Affinity**, allowing instances to remain associated with a particular host
- Support software licensing requirements based on:
	- **Physical CPU sockets**
	- **Physical CPU cores**
	- **Virtual machines**
- Can be shared with other AWS accounts when explicitly configured
- Billing is based on the **dedicated physical host**

**Key Concept**: Dedicated Hosts provide both physical hardware isolation and control over instance placement, making them suitable for specialized software licensing requirements.

### Dedicated Instances vs. Dedicated Hosts Comparison

| **Feature**                             | **Dedicated Instances**                                         | **Dedicated Hosts**                             |
| --------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| **Physical Hardware**                   | Dedicated to one AWS account                                    | Dedicated physical host                         |
| **Shared with Unrelated AWS Customers** | No                                                              | No                                              |
| **Control Over Host Placement**         | No                                                              | Yes                                             |
| **Host Affinity**                       | No                                                              | Yes                                             |
| **Physical Socket / Core Visibility**   | No                                                              | Yes                                             |
| **Software Licensing**                  | Dedicated hardware requirements                                 | Socket-based, core-based, or VM-based licensing |
| **Billing Model**                       | Instance-based charges with appliable dedicated tenancy charges | Host-based billing                              |
| **Host After Stop/Start**               | May change                                                      | Can remain associated through Host Affinity     |
| **Cross-Account Host Sharing**          | No                                                              | Supported when configured                       |

**Important:** The primary difference is **control over the physical host**. Dedicated Instances provide isolation, while Dedicated Hosts additionally provide host-level visibility and placement control.

## 20.3 - EC2 Tenancy Pricing and Use Cases

### Pricing Considerations

- **Shared Tenancy** - Default and generally the most cost-effective option
- **Dedicated Instances** - Higher costs due to dedicated physical hardware
- **Dedicated Hosts** - Charged based on the allocated physical host rather than only individual running instances

Dedicated tenancy is generally more expensive because the underlying physical hardware is reserved for dedicated customer use rather than shared across unrelated customers.

### Choosing the Right Tenancy Option

| **Requirement**                                     | **Recommended Tenancy** |
| --------------------------------------------------- | ----------------------- |
| General-purpose EC2 workloads                       | **Shared Tenancy**      |
| Lowest-cost standard EC2 hosting                    | **Shared Tenancy**      |
| Physical hardware isolation for compliance          | **Dedicated Instances** |
| Dedicated physical server with placement control    | **Dedicated Hosts**     |
| Software licenses tied to physical sockets or cores | **Dedicated Hosts**     |
| Control over which physical host runs an instance   | **Dedicated Hosts**     |

### Tenancy vs. Pricing Options

**EC2 Tenancy** and **EC2 Purchasing Options** address different requirements.
- **Tenancy** - Determines whether physical hardware is shared or dedicated
- **Purchasing Options** - Determine how customers pay for EC2 compute capacity

Examples of purchasing options include:
- On-Demand
- Spot Instances
- Reserved Instances
- Savings Plans

**Important:** Dedicated tenancy affects hardware isolation and cost, while purchasing options focus on billing commitments, discounts, and capacity availability.

## 20.4 - Exam Focus

- **Default EC2 tenancy - Shared Tenancy**
- **Multiple customers sharing physical hardware - Shared Tenancy**
- **Instance isolation on shared hardware - Hypervisor**
- **Physical hardware isolation - Dedicated Tenancy**
- **Dedicated hardware without host placement control - Dedicated Instances**
- **Control over specific physical servers - Dedicated Hosts**
- **Host Affinity - Dedicated Hosts**
- **Physical socket/core-based software licensing - Dedicated Hosts**
- **Share dedicated physical hosts across AWS accounts - Dedicated Hosts**
- **Lowest-cost standard tenancy option - Shared Tenancy**
- **Compliance requiring physical hardware isolation - Dedicated Tenancy**

**Key Exam Distinctions:**

- **Shared vs. Dedicated Tenancy** - Shared physical hardware vs. dedicated physical hardware
- **Dedicated Instances vs. Dedicated Hosts** - Physical hardware isolation vs. isolation with host placement control
- **Dedicated Instance Stop/Start** - May restart on a different dedicated physical host
- **Dedicated Host Affinity** - Allows an instance to remain associated with a specific physical host
- **Dedicated Hosts vs. Shared Tenancy** - Specialized compliance and licensing requirements vs. standard cost-effective hosting
- **Tenancy vs. Pricing Options** - Physical hardware allocation vs. compute billing model

# 21 - EC2 Tags

## 21.1 - Amazon EC2 Tags

**AWS Resource Tags** are labels used to identify, organize, and manage AWS resources, including Amazon EC2 instances.
- Tags are defined as **key-value pairs**
- Each tag requires a **key**, while the value is optional
- Customers can define custom tag keys and values
- Tags can be added or modified after a resource is created
- Tags are supported by many AWS services, not just Amazon EC2

### Tag Structure Example

| **Tag Key**   | **Tag Value**     | **Purpose**                           |
| ------------- | ----------------- | ------------------------------------- |
| `Name`        | `WebServer`       | Identifies the EC2 instance           |
| `Environment` | `Production`      | Identifies the deployment environment |
| `Owner`       | `DevelopmentTeam` | Identifies the responsible team       |
| `Project`     | `ECommerceApp`    | Identifies the associated project     |
| `Version`     | `2`               | Identifies an application version     |

**Important:** The name displayed for an EC2 instance is stored as a tag with the key `Name`

### Reserved Tag Prefix

AWS reserves tag keys beginning with `aws:` for AWS-defined tags.
- Customers typically use their own custom tag keys
- The `aws:` prefix is reserved for AWS use

## 21.2 - Common Use Cases for EC2 Tags

Tags are useful for **resource organization, automation, access control, and cost allocation**

| **Use Case**              | **Purpose**                                    | **Example**                                         |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **Resource Organization** | Identify and categorize AWS resources          | `Environment = Production`                          |
| **Resource Filtering**    | Find resources with specific tags              | Filter all production EC2 instances                 |
| **Deployment Automation** | Target resources for automated operations      | Deploy applications to instances with `Version = 2` |
| **IAM Access Control**    | Control access based on resource tags          | Allow users to manage development instances         |
| **Cost Allocation**       | Categorize AWS costs by project or environment | Separate production and development costs           |

### Resource Organization and Filtering

Tags make it easier to manage large numbers of AWS resources

**Example:**

A company has thousands of EC2 instances across different environments

By assigning the tag `Environment = Production`, administrators can filter and identify only production instances

**Exam clue: Identify and filter EC2 instances by environment, owner, or project - Resource Tags**

### Deployment Automation

AWS services such as **AWS CodeDeploy** can use tags to identify deployment targets

**Example:**
- EC2 instances are tagged with `Version = 2`
- A deployment targets instances matching that tag
- This allows applications to be deployed to selected instances

### IAM Access Control

**AWS Identity and Access Management (IAM)** policies can use resource tags to control permissions.

**Example:**

An IAM policy can allow developers to perform certain operations only on EC2 instances tagged with `Environment = Development`

- Supports **tag-based access control**
- Helps restrict access to specific groups of resources
- Permissions are enforced through **IAM Policies**, not tags alone

**Important:** Tags identify resources, while IAM Policies determine whether access is allowed

### Cost Allocation

**Cost Allocation Tags** help categorize AWS spending across different projects, teams, or environments

**Example:**

A company uses one AWS account for multiple environments
- `Environment = Production`
- `Environment = Development`
- `Project = ECommerceApp`

By using cost allocation tags, the company can analyze spending associated with different environments or projects

**Important:** User-defined cost allocation tags must be activated for cost allocation reporting in AWS Billing and Cost Management

**Exam clue: Track AWS resource costs by project or environment - Cost Allocation Tags**

## 21.3 - Managing EC2 Tags

Tags can be assigned when launching an EC2 instance or modified afterward

### Key Characteristics

- **Customizable** - Customers can define meaningful key-value pairs
- **Editable** - Existing tags can be updated or additional tags can be created
- **Resource-Specific** - Different resources can have different tags
- **Reusable** - The same tag keys and values can be applied across multiple AWS resources

### Best Practice

Apply a consistent tagging strategy from the beginning to simplify:
- Resource identification
- Environment management
- Automated deployments
- IAM access control
- Cost tracking and allocation

**Key Concept:** Consistent tagging improves resource management, particularly in AWS accounts containing many resources, projects, or environments.

## 21.4 - Exam Focus

- **Organize and identify AWS resources - Tags**
- **Tag Format - Key-Value Pairs**
- **EC2 instance name - `Name` Tag**
- **Filter production EC2 instances - `Environment = Production`**
- **Automated deployment targeting - AWS CodeDeploy with Tags**
- **Control resource access using tags - IAM Policies**
- **Track AWS costs by project or environment - Cost Allocation Tags**
- **Reserved AWS tag key prefix - `aws:`**
- **Modify resource metadata - Add or Update Tags**

**Key Exam Distinctions:**

- **Tags vs. IAM Policies** - Tags identify and categorize resources; IAM Policies enforce access permissions
- **Resource Tags vs. Cost Allocation Tags** - General resource organization vs. tracking and categorizing AWS spending
- **Tag Key vs. Tag Value** - Key identifies the metadata category; value identifies its associated information
- **Resource Tags vs. Instance ID** - Tags provide meaningful resource labels; Instance IDs uniquely identify EC2 instances

# 22 - Amazon EC2 - Section Summary

## 22.1 - Amazon EC2 - Key Concepts

**Amazon Elastic Compute Cloud (Amazon EC2)** provides virtual machines (EC2 instances) in the AWS Cloud.

- EC2 instances are launched in a specific **Availability Zone (AZ)** within an AWS Region
- Customers configure the operating system, compute capacity, storage, networking, and security

### Core EC2 Configuration Options

| **Configuration**       | **AWS Feature**            | **Key Purpose**                                        |
| ----------------------- | -------------------------- | ------------------------------------------------------ |
| **Compute**             | EC2 Instance Types         | Select CPU, memory, and workload optimization          |
| **Operating System**    | Amazon Machine Image (AMI) | Define OS and initial software configuration           |
| **Persistent Storage**  | Amazon EBS                 | Store data independently of the EC2 instance lifecycle |
| **Temporary Storage**   | Instance Store             | Local storage for temporary data                       |
| **Networking**          | Amazon VPC                 | Provide isolated virtual networking                    |
| **Firewall**            | Security Group             | Control inbound and outbound traffic                   |
| **Authentication**      | EC2 Key Pair               | Secure instance authentication                         |
| **AWS Permissions**     | IAM Role                   | Grant EC2 access to other AWS services                 |
| **Initialization**      | EC2 User Data              | Automatically configure an instance at first boot      |
| **Resource Management** | Tags                       | Organize, identify, and track resources                |

### Important Security and Storage Distinctions

- **Amazon EBS vs. Instance Store** - Persistent storage vs. temporary storage
- **Security Group** - Stateful firewall with allow-only rules; return traffic is automatically allowed
- **IAM Role vs. Security Group** - AWS service permissions vs. network traffic permissions
- **EC2 User Data vs. Custom AMI** - Automated configuration at first boot vs. preconfigured instance image
- **SSH vs. RDP** - Linux remote access (Port 22) vs. Windows remote desktop access (Port 3389)

Other supported access options include **EC2 Instance Connect** and **AWS Systems Manager Session Manager**

## 22.2 - EC2 Purchasing Options and Tenancy

### EC2 Purchasing Options

| **Pricing Option**     | **Key Characteristic**                                   | **Best Use Case**                               |
| ---------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| **On-Demand**          | Default pricing; no long-term commitment                 | Short-term, unpredictable workloads             |
| **Spot Instances**     | Up to 90% discount; can be interrupted                   | Fault-tolerant, interruption-tolerant workloads |
| **Savings Plans**      | Up to 72% discount with a usage commitment               | Predictable long-term compute usage             |
| **Reserved Instances** | Discounted pricing through a 1-year or 3-year commitment | Stable, long-term EC2 workloads                 |

### On-Demand Capacity Reservations (ODCRs)

**On-Demand Capacity Reservations** allow customers to reserve EC2 compute capacity in a specific **Availability Zone** without a long-term commitment

**Key Distinction:**
- **Capacity Reservation** - Ensures EC2 capacity is reserved in an AZ
- **Savings Plans / Reserved Instances** - Provide commitment-based pricing discounts

### EC2 Tenancy Options

| **Tenancy**             | **Key Characteristic**                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Shared Tenancy**      | Default; physical hardware can be shared across AWS customers                                |
| **Dedicated Instances** | Dedicated physical hardware without specific host placement control                          |
| **Dedicated Hosts**     | Dedicated physical servers with host placement control and support for specialized licensing |

**Important**: Dedicated Hosts are particularly useful when software licensing depends on **physical CPU cores, sockets, or virtual machines**.

## 22.3 - EC2 Tags and Cost Allocation

**AWS Resource Tags** are key-value pairs used to organize and manage EC2 instances

Common uses include:
- **Resource Identification** - Identify instances by name, project, or environment
- **Resource Filtering** - Find instances with specific tags
- **Automation** - Target instances for deployments
- **IAM Access Control** - Restrict actions based on resource tags
- **Cost Allocation** - Categorize AWS spending by project, team, or environment

**Exam clue: Track AWS costs by project or environment - Cost Allocation Tags**

## 22.4 - Exam Focus

- **Virtual machines in AWS - Amazon EC2**
- **EC2 operating system template - AMI**
- **Persistent vs. temporary storage - EBS vs. Instance Store**
- **Stateful, allow-only firewall - Security Group**
- **Grant EC2 access to AWS services - IAM Role**
- **Automated initialization at first boot - EC2 User Data**
- **Short-term, unpredictable workloads - On-Demand**
- **Fault-tolerant workloads, up to 90% discount - Spot Instances**
- **Predictable long-term usage - Savings Plans / Reserved Instances**
- **Reserve capacity in a specific AZ - On-Demand Capacity Reservations**
- **Default physical hardware tenancy - Shared Tenancy**
- **Dedicated hardware without host placement control - Dedicated Instances**
- **Dedicated hardware with host placement control - Dedicated Hosts**
- **Organize resources and allocate costs - AWS Tags**

# 23 - Quiz

## 23.1 - Practice Question 1

### Original Question

A developer has launched an EC2 instance with a `t2.micro` instance type using an AMI. There have been manual changes that the developer keeps making to the application configuration to tweak the functionality.

After a few days of running the application, they realize that they need more CPU and memory for the instance to deploy and test additional features.

What should they do?

### Choices

A. Create a new instance with a larger size using the same AMI.
B. Modify the instance type while the instance is running.
C. Create a new AMI from the currently running instance and launch a large size instance using the new AMI.
D. Stop the instance and change the instance type to a larger size, then restart it.

### Correct Answer

**D. Stop the instance and change the instance type to a larger size, then restart it.**

### Why?

The developer needs **additional CPU and memory while preserving existing application configurations**
- An EBS-backed EC2 instance can be **stopped, resized, and restarted** using a compatible instance type
- Existing application configurations stored on persistent volumes remain available
- **Option A** is incorrect because launching from the original AMI would not include changes made after the original instance was launched
- **Option B** is incorrect because the instance must be stopped before changing its instance type
- **Option C** is technically possible but introduces unnecessary steps when the existing instance can simply be resized

**Exam clue: Increase EC2 CPU and memory while preserving existing configurations - Stop, change instance type, and restart**

## 23.2 - Practice Question 2

### Original Question

A company created a custom Amazon Machine Image (AMI) in the US East (N. Virginia) Region. They now need to launch an instance using this AMI in the Europe (Frankfurt) Region.

What should they do?

### Choices

A. Use the same AMI ID in the Frankfurt Region.
B. Copy the AMI from the US East (N. Virginia) Region to the Frankfurt Region.
C. Share the AMI publicly and use it in Frankfurt.
D. Recreate the AMI manually in the Frankfurt Region.

### Correct Answer

**B. Copy the AMI from the US East (N. Virginia) Region to the Frankfurt Region.**

### Why?

**Amazon Machine Images (AMIs) are regional resources**

- An AMI created in one AWS Region cannot be directly used in another Region
- Copying the AMI makes it available in the destination Region with a **new AMI ID**
- Sharing an AMI publicly does not make it available across Regions
- Recreating the AMI manually is unnecessarily when it can be copied

**Exam clue: Use an existing AMI in another AWS Region - Copy the AMI to the destination Region**

## 23.3 - Practice Question 3

### Original Question

A developer accidentally terminated an EC2 instance and lost important data. What feature could have been used to ensure that the root volume of the instance was preserved after termination?

### Choices

A. Enable multi-az option for the root volume.
B. Disable Delete on Termination for the root volume.
C. Use a Dedicated EBS volume.
D. Use EC2 instance store volume.

### Correct Answer

**B. Disable Delete on Termination for the root volume.**

### Why?

**Amazon EBS volumes** have a **Delete on Termination** attribute that controls whether the volume is deleted when its EC2 instance is terminated
- By default, the EBS root volume is generally configured to be deleted upon instance termination
- Setting **Delete on Termination = False** allows the root EBS volume to remain after termination
- **Instance Store** is temporary storage and cannot preserve data after termination
- Dedicated storage and Multi-AZ settings do not provide this specific protection

**Exam clue: Preserve an EC2 root EBS volume after termination - Disable Delete on Termination**

## 23.4 - Practice Question 4

### Original Question

A scientist needs a high-performance EC2 instance to run a compute-intensive simulation for a few hours.

What type of EC2 instance and pricing option should they choose?

### Choices

A. Compute optimized Spot instances.
B. Compute optimized On-demand instances.
C. Memory optimized Spot instances.
D. Storage optimized On-demand instances.

### Correct Answer

**B. Compute optimized On-demand instances.**

### Why?

The question provides two important clues:
- **Compute-intensive simulation** - Requires a **Compute Optimized** instance family
- **Runs for a few hours** - A short-term workload suited to **On-Demand pricing**

Although Spot Instances can provide significant discounts, AWS may interrupt them.

The question does **not specify that the simulation can tolerate interruptions**, so On-Demand is the more appropriate answer.

**Important Exam Technique:** Do not assume a workload is fault-tolerant unless the question explicitly indicates that interruptions are acceptable

**Exam clue: Short-term CPU-intensive workload without stated interruption tolerance - Compute Optimized On-Demand Instance**

## 23.5 - Practice Question 5

### Original Question

A company needs to label its EC2 instances with information such as department and environment (e.g., "HR" and "Production").

What feature should they use?

### Choices

A. Tags
B. Security Groups
C. IAM Policies
D. Elastic IP

### Correct Answer

**A. Tags**

### Why?

**AWS Tags** are key-value pairs used to organize and identify AWS resources

Examples:

| **Tag Key**   | **Tag Value** |
| ------------- | ------------- |
| `Department`  | `HR`          |
| `Environment` | `Production`  |

Other options serve different purposes:
- **Security Groups** - Control network traffic
- **IAM Policies** - Define access permissions
- **Elastic IP** - Provides a static public IPv4 address

**Exam clue: Label, categorize, or organize EC2 instances - AWS Tags**

## 23.6 - Practice Question 6

### Original Question

A company wants to save costs by purchasing EC2 instances for predictable workloads that run continuously for one year.

Which purchasing option is best for this use case?

### Choices

A. On-Demand
B. Reserved Instances
C. Spot Instances
D. Dedicated Hosts

### Correct Answer

**B. Reserved Instances**

### Why?

**Reserved Instances (RIs)** provide discounted EC2 pricing in exchange for a **1-year or 3-year commitment**

- Suitable for predictable, steady-state workloads
- Provide significant savings compared to On-Demand pricing
- **On-Demand** is more appropriate for unpredictable or short-term workloads
- **Spot Instances** can be interrupted and are better suited to fault-tolerant workloads
- **Dedicated Hosts** address physical hardware isolation and licensing requirements rather than general cost optimization

**Exam clue: Predictable EC2 usage for one or three years - Reserved Instances or Savings Plans**

## 23.7 - Practice Question 7

### Original Question

A company wants to run an EC2 instance on dedicated hardware for regulatory compliance.

What tenancy option should they choose?

### Choices

A. Shared Tenancy
B. Dedicated Instance
C. Spot Instance
D. Reserved Instance

### Correct Answer

**B. Dedicated Instance**

### Why?

**EC2 Dedicated Instances** run on physical hardware dedicated to a single AWS customer

- Provide **physical hardware isolation** from other AWS customers
- Suitable for regulatory and compliance requirements involving dedicated hardware
- **Shared Tenancy** allows different AWS customers to share physical hardware
- **Spot and Reserved Instances** are purchasing options, not tenancy options

**Important Distinction:**

- **Dedicated Instance** - Physical hardware isolation without specific host placement control
- **Dedicated Host** - Physical hardware isolation with host placement control, suitable for physical core/socket-based software licensing

**Exam clue: Regulatory compliance requiring dedicated physical hardware - Dedicated Instance**

## 23.8 - Practice Question 8

### Original Question

A company wants to control which IP addresses can access their EC2 instances over SSH.

What AWS feature should they use?

### Choices

A. SSH Key Pair
B. IAM Key
C. Security Group
D. ElasticIP

### Correct Answer

**C. Security Group**

### Why?

**Security Groups** act as virtual firewalls that control inbound and outbound network traffic for EC2 instances.

To restrict SSH access:
- Configure an **inbound rule** allowing **TCP Port 22**
- Specify which source IP addresses or CIDR ranges are permitted
- Connections from other IP addresses are not permitted unless another applicable rule allows them

**Key Distinction:**

- **Security Group** - Controls which IP addresses can connect
- **SSH Key Pair** - Authenticates the user connecting through SSH
- **IAM Key** - Used for AWS API authentication, not SSH traffic filtering
- **Elastic IP** - Provides a static public IPv4 address

**Exam clue: Restrict SSH access to specific IP addresses - Security Group Inbound Rules**

## 23.9 - Practice Question 9

### Original Question

A startup needs to launch multiple EC2 instances with the same pre-configured software and settings.

What should they use to create these instances consistently?

### Choices

A. Security Group
B. Amazon Machine Image (AMI)
C. SSH Key Pair
D. EC2 instance type

### Correct Answer

**B. Amazon Machine Image (AMI)**

### Why?

An **Amazon Machine Image (AMI)** provides a reusable template for launching EC2 instances

- Contains the operating system and initial software configuration
- **Custom AMIs** can include preinstalled applications and configurations
- Multiple EC2 instances launched from the same AMI can have consistent initial configurations

Other options serve different purposes:

- **Security Group** - Controls network access
- **SSH Key Pair** - Provides secure authentication
- **Instance Type** - Determines CPU, memory, and other compute resources

**Exam clue: Launch multiple EC2 instances with identical initial software configurations - Custom AMI**

## 23.10 - Practice Question 10

### Original Question

A developer wants to connect to an EC2 instance securely using an SSH client over the internet from his/her workstation.

What all things are required for this connection?

### Choices

A. Security Group outbound rules, Public/Elastic IP and PrivateKey of SSH key pair.
B. Security Group inbound rules, Public/Elastic IP and PrivateKey of SSH key pair.
C. Security Group inbound rules, Private IP and PrivateKey of SSH key pair.
D. Security Group inbound rules, Public/Elastic IP and PublicKey of SSH key pair.
E. Security Group outbound rules, Private IP and PublicKey of SSH key pair.

### Correct Answer

**B. Security Group inbound rules, Public/Elastic IP and PrivateKey of SSH key pair.**

### Why?

To establish an SSH connection to an EC2 instance over the internet, three key requirements must be satisfied:

| **Requirement**                 | **Purpose**                                                 |
| ------------------------------- | ----------------------------------------------------------- |
| **Security Group Inbound Rule** | Allows SSH traffic on TCP Port 22 from the workstation's IP |
| **Public IP / Elastic IP**      | Provides an internet-reachable destination address          |
| **SSH Private Key**             | Authenticates the SSH connection                            |

The instance must also have appropriate public network routing and connectivity

**Why Other Options Are Incorrect:**
- **A and E** - Outbound rules do not replace the inbound SSH rule
- **C** - A private IP alone is not directly reachable over the public internet
- **D and E** - The SSH client uses the **private key**, not the public key, to authenticate

**Exam clue: SSH into EC2 over the internet - Inbound TCP 22 + Public IP + Private Key**

## 23.11 - Exam Focus

| **Exam Scenario**                                         | **Correct AWS Concept**                      |
| --------------------------------------------------------- | -------------------------------------------- |
| Increase EC2 CPU and memory while retaining configuration | **Stop, Resize, Restart**                    |
| Launch an EC2 instance from an AMI in another Region      | **Copy AMI**                                 |
| Retain the root EBS volume after **termination**          | **Disable Delete on Termination**            |
| Short-term CPU-intensive workload                         | **Compute Optimized On-Demand**              |
| Organize instances using department or environment labels | **AWS Tags**                                 |
| Predictable continuous EC2 usage for one year             | **Reserved Instances**                       |
| Regulatory requirement for dedicated hardware             | **Dedicated Instance**                       |
| Restrict SSH access by source IP address                  | **Security Group**                           |
| Launch multiple identically configured EC2 instances      | **Custom AMI**                               |
| Connect to EC2 over the internet using SSH                | **Inbound TCP 22 + Public IP + Private Key** |

**Key Exam Distinctions**

- **AMI vs. Instance Type** - AMI determines the initial software configuration; instance type determines compute resources
- **EBS Persistence vs. Delete on Termination** - EBS supports persistent storage, but the termination setting determines whether an attached volume is deleted with the instance
- **On-Demand vs. Spot** - On-Demand is appropriate when interruptions cannot be assumed acceptable; Spot is for interruption-tolerant workloads
- **Reserved Instances vs. Dedicated Instances** - Reserved Instances provide pricing discounts; Dedicated Instances provide hardware isolation
- **Security Group vs. SSH Key Pair** - Network access permissions vs. authentication credentials
- **Public IP vs. Private IP** - Internet-accessible addressing vs. private VPC communication
- **Tags vs. IAM Policies** - Resource identification and organization vs. access authorization