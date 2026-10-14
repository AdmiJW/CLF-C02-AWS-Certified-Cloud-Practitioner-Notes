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

# 15 - \[Exercise] - Create and Use IAM Role for EC2

# 16 - EC2 Pricing Plans - What is it?

# 17 - EC2 Pricing - On-demand and Spot

# 18 - Demo: Spot Instances

# 19 - EC2 Pricing - Savings Plan and Reserved Instances

# 20 - EC2 Tenancy - Shared and Dedicated

# 21 - EC2 Tags

# 22 - Amazon EC2 - Section Summary

# 23 - Quiz