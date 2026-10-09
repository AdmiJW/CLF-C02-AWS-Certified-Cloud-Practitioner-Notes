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

# 5 - \[Exercise] - Launch Windows EC2 Instance

# 6 - EC2 Instance Types and Family

# 7 - Storage for EC2 - EBS and Instance Store

# 8 - Amazon Machine Image (AMI)

# 9 - \[Exercise] - Create a Webserver AMI

# 10 - Security Group

# 11 - EC2 Userdata

# 12 - EC2 SSH Key Pair

# 13 - \[Exercise] - Launch a Webserver using EC2 Userdata

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