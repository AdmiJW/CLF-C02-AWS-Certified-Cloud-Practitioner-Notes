# 1 - VPC Basics

## 1.1 Introduction to Amazon VPC

**Amazon Virtual Private Cloud (Amazon VPC)** is a **logically isolated virtual network** in the AWS Cloud that closely resembles a traditional on-premises network.
- Provides a private networking environment for AWS resources.
- Allows you to launch resources such as **Amazon EC2 instances** within your own virtual network.
- Enables control over **IP addressing, subnets, routing, and network security**.
- Can connect to the internet using an **Internet Gateway**.

### On-Premises Network vs Amazon VPC

| Traditional Network               | AWS Equivalent           |
| --------------------------------- | ------------------------ |
| Private physical network          | **Amazon VPC**           |
| Local Area Network (LAN)          | **Subnet**               |
| Physical servers                  | **Amazon EC2 instances** |
| Router connecting to the internet | **Internet Gateway**     |
| Network routing configuration     | **Route Tables**         |

**Key concept**: Amazon VPC provides networking capabilities similar to an on-premises network, without requiring physical networking infrastructure.

## 1.2 VPC IP Addressing and CIDR

When creating a VPC, you assign it an **IP address range** using **Classless Inter-Domain Routing (CIDR)** notation.

Example: `10.0.0.0/16`

- A VPC belongs to a specific **AWS Region**.
- Its CIDR block defines the range of private IP addresses available within the VPC.
- A VPC supports **IPv4** and can also support **IPv6**.
- **RFC 1918** defines private IPv4 address ranges commonly used for VPC networking.

### Private vs Public IP Addresses

| IP Address     | Purpose                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------- |
| **Private IP** | Communication within private networks; allocated from the VPC's CIDR range                         |
| **Public IP**  | Enables communication with the internet when appropriate network routing and access are configured |

Public IPv4 addresses can be allocated from AWS-managed public IP address pools.

## 1.3 Core Components of Amazon VPC

| Component                  | Purpose                                                    | Exam Clue                            |
| -------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| **VPC CIDR Block**         | Defines the VPC's IP address range                         | Private network addressing           |
| **Subnet**                 | Smaller network within a VPC                               | Divide a VPC into smaller networks   |
| **Route Table**            | Controls where network traffic is directed                 | Network traffic routing              |
| **Internet Gateway (IGW)** | Enables connectivity between a VPC and the internet        | Internet connectivity                |
| **NAT Gateway**            | Allows instances in private subnets to access the internet | Internet access from private subnets |
| **Security Group**         | Controls traffic at the EC2 instance level                 | Instance-level firewall              |
| **Network ACL (NACL)**     | Controls traffic at the subnet level                       | Subnet-level firewall                |

### Subnets and Availability Zones

- A **Subnet** is a smaller network created within a VPC.    
- Each subnet resides within **one Availability Zone (AZ).**
- A VPC can contain multiple subnets across different Availability Zones.
- **Route Tables** determine how traffic is routed from subnets to other destinations.

### Internet Gateway vs NAT Gateway

**Internet Gateway (IGW)**
- Connects a VPC to the internet.
- Must be attached to the VPC for internet gateway connectivity.
- Internet connectivity is optional.

**NAT Gateway**
- Provides internet access for resources in **private subnets**.
- Commonly used when private instances require outbound internet access without being directly accessible from the internet.

**Exam distinction:**
- **Internet connectivity for a public subnet - Internet Gateway**
- **Outbound internet access for a private subnet - NAT Gateway**

## 1.4 VPC Network Security

Amazon VPC provides two important network security controls.

| Feature            | Security Group                                             | Network ACL (NACL)                                    |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------- |
| **Security Level** | EC2 instance level                                         | Subnet level                                          |
| **Purpose**        | Controls network traffic to and from instances             | Controls network traffic entering and leaving subnets |
| **Scope**          | Associated with instances through their network interfaces | Associated with subnets                               |

**Key distinction**: Security Groups provide **instance-level protection**, while Network ACLs provide **subnet-level protection**.

## 1.5 Exam Focus

- **Logically isolated virtual network - Amazon VPC**
- **Private IP address range - VPC CIDR Block**
- **Private IPv4 addressing standard - RFC 1918**
- **Smaller network within a VPC - Subnet**
- **Subnet location - Single Availability Zone**
- **Control network traffic routing - Route Table**
- **Connect a VPC to the internet - Internet Gateway**
- **Provide outbound internet access to private instances - NAT Gateway**
- **Instance-level firewall - Security Group**
- **Subnet-level firewall - Network ACL**
- **VPC scope - AWS Region**
- **Supported IP address versions - IPv4 and IPv6**

# 2 - VPC CIDR - How To Address VPC

## 2.1 VPC CIDR (Classless Inter-Domain Routing)

**Classless Inter-Domain Routing (CIDR)** is a method of defining an IP address range using an **IP address and a network prefix**.
- Replaces traditional class-based IP addressing (Class A, B, and C).
- Determines how many IP addresses are available within a network.
- Used when assigning an **IP address range to an Amazon VPC**.

Example: `192.168.0.0/16`

### Understanding CIDR Notation

An **IPv4 address** consists of **32 bits**, divided into four octets (8 bits each).

For `192.168.0.0/16`:
- **Network Prefix** (`/16`) - First 16 bits identify the network.
- **Host Portion** - Remaining 16 bits are available for IP addressing.
- **Network Address** - `192.168` remains fixed.
- **Host Addresses** - Last two octets can vary from `0` to `255`.

The number of total IP addresses is calculated as:

$$
2^{(32-\text{CIDR Prefix})}
$$

### CIDR Examples

| CIDR Block       | Network Bits | Host Bits | Total IP Addresses |
| ---------------- | ------------ | --------- | ------------------ |
| `192.168.0.0/16` | 16           | 16        | 65,536             |
| `192.168.0.0/24` | 24           | 8         | 256                |

Example: `/16`

- Address range: `192.168.0.0` to `192.168.255.255`
- Total addresses: $2^{16} = 65,536$

Example: `/24`

- Address range: `192.168.0.0` to `192.168.0.255`
- Total addresses: $2^8 = 256$

**Key distinction**: A **smaller CIDR** prefix provides a **larger IP address range**, while a larger prefix provides a smaller range.

## 2.2 VPC IPv4 Addressing

When creating an Amazon VPC, you assign an **IPv4 CIDR block** that defines its private IP address range.
- AWS supports IPv4 VPC CIDR block sizes between `/16` and `/28`.
- Private IPv4 ranges are defined by **RFC 1918**.
- Resources within a VPC receive private IP addresses from the VPC's address range.

### RFC 1918 Private IPv4 Ranges

| Private CIDR Block | IP Address Range                  |
| ------------------ | --------------------------------- |
| `10.0.0.0/8`       | `10.0.0.0` - `10.255.255.255`     |
| `172.16.0.0/12`    | `172.16.0.0` - `172.31.255.255`   |
| `192.168.0.0/16`   | `192.168.0.0` - `192.168.255.255` |

These are **private IP address ranges**, not public internet addresses.

**Exam tip**: Recognize that **RFC 1918** defines private IPv4 address ranges commonly used in VPCs. Memorizing every address boundary is not necessary for CLF-C02.

## 2.3 IPv4 vs IPv6 in Amazon VPC

Amazon VPC supports both **IPv4** and **IPv6 addressing**.

| Feature                | IPv4                                  | IPv6                                 |
| ---------------------- | ------------------------------------- | ------------------------------------ |
| **Address Length**     | 32 bits                               | 128 bits                             |
| **VPC CIDR Prefix**    | `/16` to `/28`                        | `/56` (AWS-provided range discussed) |
| **Address Allocation** | Private VPC CIDR selected by customer | IPv6 CIDR allocated by AWS           |
| **Address Type**       | Private and public addresses          | Globally unique IPv6 addresses       |
| **Address Capacity**   | Smaller address space                 | Much larger address space            |

### IPv6 Addressing

- An IPv6 address consists of **128 bits**.    
- AWS can allocate an IPv6 CIDR block to a VPC.
- A `/56` IPv6 CIDR leaves **72 bits** for addressing.
- The resulting address space contains $2^{72}$ addresses.
- AWS-provided IPv6 addresses are globally unique and use globally routable address space.

**Key concept**: IPv6 provides a significantly larger address space than IPv4.

## 2.4 Public and Private IP Addresses for EC2

**Amazon EC2 instances** can have both IPv4 and IPv6 addresses.

### Private IPv4 Addresses
- Allocated from the **VPC's private IPv4 CIDR range**.
- Used for communication within private networks.
- Not directly routable over the public internet.

### Public IPv4 Addresses
- Allocated from an **AWS-managed pool of public IPv4 addresses**.
- Can be associated with EC2 instances for internet communication.
- Technically assigned to an **Elastic Network Interface (ENI)** attached to the instance.

**Important distinction**: A VPC's private IPv4 CIDR range does not provide public IPv4 addresses. Public IPv4 addresses are allocated separately.

## 2.5 Exam Focus

- **Define VPC IP address ranges - CIDR**
- **CIDR notation - IP address and network prefix**
- **IPv4 address length - 32 bits**
- **IPv6 address length - 128 bits**
- **Private IPv4 addressing standard - RFC 1918**
- **AWS IPv4 VPC CIDR sizes - `/16` to `/28`**
- **Smaller CIDR prefix - Larger IP address range**
- **Larger CIDR prefix - Smaller IP address range**
- **`/16` IPv4 CIDR - 65,536 total IP addresses**
- **`/24` IPv4 CIDR - 256 total IP addresses**
- **AWS-provided IPv6 VPC CIDR - `/56`**
- **Private IPv4 addresses - Allocated from the VPC CIDR**
- **Public IPv4 addresses - Allocated from AWS public IP pools**
- **EC2 network interface - Elastic Network Interface (ENI)**

# 3 - \[Exercise] - Create a VPC

## 3.1 Default VPC vs Custom VPC

**Amazon VPC** allows you to create your own logically isolated virtual network within an AWS Region.
- **Default VPC** - Automatically created by AWS in each Region and available for launching resources such as EC2 instances.
- **Custom VPC** - Manually created by the customer with a chosen IP address range and networking configuration.

**Key distinction**: A default VPC is AWS-provided, while a custom VPC is created and configured by the customer.

## 3.2 Creating a Custom VPC

When creating a custom VPC, the following settings can be configured:

| Configuration       | Example        | Purpose                                                       |
| ------------------- | -------------- | ------------------------------------------------------------- |
| **VPC Name**        | `demo-vpc`     | Identifies the VPC                                            |
| **IPv4 CIDR Block** | `10.10.0.0/16` | Defines the private IPv4 address range                        |
| **IPv6 CIDR Block** | None           | Optional IPv6 addressing                                      |
| **Tenancy**         | Default        | Determines whether instances use shared or dedicated hardware |

### VPC Tenancy Options

- **Default Tenancy** - EC2 instances run on shared hardware.    
- **Dedicated Tenancy** - EC2 instances run on hardware dedicated to a single customer.

### VPC Cost

- Creating a **VPC itself does not incur charges**.
- Additional AWS resources and networking services deployed within or alongside the VPC may incur charges.

## 3.3 Exam Focus

- **AWS-provided VPC - Default VPC**
- **Customer-created virtual network - Custom VPC**
- **Define a VPC's private IP address range - IPv4 CIDR Block**
- **Optional VPC addressing - IPv6 CIDR Block**
- **Shared hardware - Default Tenancy**
- **Hardware dedicated to one customer - Dedicated Tenancy**
- **Cost of creating a VPC - No additional charge for the VPC itself**

# 4 - VPC Subnets and Route Tables

## 4.1 VPC Subnets

A **Subnet** is a smaller IP address range within an **Amazon VPC**, used to organize and isolate network resources.
- A **VPC** is created within an **AWS Region**.
- A **Subnet** is created within a specific **Availability Zone (AZ).**
- A VPC can contain multiple subnets across different Availability Zones.
- Multiple subnets can exist within the same Availability Zone.
- Each subnet has its own **CIDR block**, which is a subset of the VPC's CIDR range.

### Subnet CIDR Example

Suppose a VPC has the CIDR block `10.10.0.0/16`.

It can be divided into smaller subnets:

| Subnet   | CIDR Block     | Availability Zone | Total IP Addresses |
| -------- | -------------- | ----------------- | ------------------ |
| Subnet A | `10.10.1.0/24` | AZ-1              | 256                |
| Subnet B | `10.10.2.0/24` | AZ-2              | 256                |
| Subnet C | `10.10.3.0/24` | AZ-3              | 256                |

A `/24` subnet contains **256 total IP addresses**, although AWS reserves some addresses within each subnet.

Key distinction: A VPC spans an AWS Region, but an individual subnet belongs to **only one Availability Zone**.

## 4.2 VPC Route Tables

A **Route Table** defines the routing rules that determine where network traffic from a subnet is directed.
- Every VPC has a **Main Route Table** (default route table).
- The main route table initially contains a **local route** for communication within the VPC.
- You can create **Custom Route Tables** to control routing for specific subnets.
- Each subnet must be associated with a route table.

### Main Route Table vs Custom Route Table

| Route Table            | Purpose                                                                          |
| ---------------------- | -------------------------------------------------------------------------------- |
| **Main Route Table**   | Provides default routing for subnets without an explicit route table association |
| **Custom Route Table** | Allows specific routing rules to be configured for selected subnets              |

**Important behavior:**
- If a subnet has no explicit route table association, it automatically uses the **Main Route Table**.
- If a custom route table is explicitly associated with a subnet, that subnet follows the custom routing rules.

### Local Route

Every VPC route table contains a **local route** that enables communication within the VPC.

Example:

| Destination    | Target  | Purpose                       |
| -------------- | ------- | ----------------------------- |
| `10.10.0.0/16` | `local` | Routes traffic within the VPC |

## 4.3 Internet Gateway (IGW)

An **Internet Gateway (IGW)** is a VPC component that enables communication between a VPC and the internet.

- Attached to a **VPC**.
- Provides a connection between the VPC and the internet.
- Works with **Route Tables** to enable internet routing.
- A subnet requires an appropriate route to the Internet Gateway to be classified as a public subnet.

**Key concept**: Attaching an Internet Gateway alone does not automatically provide internet access to every subnet. Appropriate routing is also required.

## 4.4 Public vs Private Subnets

The distinction between **Public Subnets** and **Private Subnets** depends on their **Route Table configuration**.

### Public Subnet

A **Public Subnet** has a route that directs internet-bound traffic through an **Internet Gateway**.

Example route table:

| Destination    | Target           | Purpose                     |
| -------------- | ---------------- | --------------------------- |
| `10.10.0.0/16` | `local`          | Internal VPC communication  |
| `0.0.0.0/0`    | Internet Gateway | Internet-bound IPv4 traffic |

- Can support resources requiring direct internet connectivity. 
- Internet access also depends on the resource's IP addressing and security configuration.

### Private Subnet

A **Private Subnet** does not have a direct route to an Internet Gateway.

Example route table:

| Destination    | Target  | Purpose                    |
| -------------- | ------- | -------------------------- |
| `10.10.0.0/16` | `local` | Internal VPC communication |

- Used for resources that should not be directly accessible from the internet.    
- Can communicate within the VPC through the local route.
- Does not have direct internet access through an Internet Gateway.

### Public vs Private Subnet Comparison

| Feature                          | Public Subnet             | Private Subnet     |
| -------------------------------- | ------------------------- | ------------------ |
| **Route to Internet Gateway**    | Yes                       | No                 |
| **Direct Internet Connectivity** | Possible                  | Not available      |
| **Local VPC Communication**      | Yes                       | Yes                |
| **Typical Purpose**              | Internet-facing resources | Internal resources |

**Exam distinction:**
- **Subnet with a route to an Internet Gateway - Public Subnet**
- **Subnet without a direct route to an Internet Gateway - Private Subnet**

## 4.5 Exam Focus

- **Smaller network within a VPC - Subnet**
- **VPC scope - AWS Region**
- **Subnet scope - Single Availability Zone**
- **Subnet IP address range - Subnet CIDR Block**
- **`/24` subnet - 256 total IP addresses**
- **Control network traffic routing - Route Table**
- **Default routing for subnets - Main Route Table**
- **Subnet-specific routing - Custom Route Table**
- **Communication within a VPC - Local Route**
- **Connect a VPC to the internet - Internet Gateway (IGW)**
- **Route to Internet Gateway - Public Subnet**
- **No direct Internet Gateway route - Private Subnet**
- **No explicit route table association - Uses Main Route Table**

# 5 - \[Exercise] - Create VPC Subnets and Route Tables

## 5.1 VPC Network Configuration

A custom **Amazon VPC** can contain both **Public Subnets** and **Private Subnets**, with internet connectivity controlled through **Internet Gateways** and **Route Tables**.

The exercise uses the previously created VPC with the CIDR block `10.10.0.0/16`.

### Network Components

| Component                  | Configuration                        | Purpose                                |
| -------------------------- | ------------------------------------ | -------------------------------------- |
| **VPC**                    | `10.10.0.0/16`                       | Main virtual network                   |
| **Internet Gateway (IGW)** | Attached to VPC                      | Enables internet connectivity          |
| **Public Subnet**          | `10.10.0.0/24`                       | Subnet with a route to the internet    |
| **Private Subnet**         | `10.10.1.0/24`                       | Subnet without a direct internet route |
| **Public Route Table**     | Local route + Internet Gateway route | Routes internet-bound traffic          |
| **Private Route Table**    | Local route only                     | Routes traffic within the VPC          |

- Public and private subnets are created in **different Availability Zones**.
- Each `/24` subnet contains **256 total IP addresses**.
- Subnet CIDR blocks must fall within the VPC CIDR range and must not overlap.

## 5.2 Configuring Route Tables

**Route Tables** determine whether a subnet has a route to the internet.

### Public Route Table

A **Public Route Table** contains a local route and an additional route through the **Internet Gateway**.

| Destination    | Target           | Purpose                     |
| -------------- | ---------------- | --------------------------- |
| `10.10.0.0/16` | `local`          | Internal VPC communication  |
| `0.0.0.0/0`    | Internet Gateway | Internet-bound IPv4 traffic |

- `0.0.0.0/0` represents **all IPv4 destinations**.    
- The Internet Gateway must be attached to the VPC.
- The route table must be explicitly associated with the **Public Subnet**.

### Private Route Table

A **Private Route Table** contains only the local route in this exercise.

| Destination   | Target  | Purpose                    |
| ------------- | ------- | -------------------------- |
| `10.1.0.0/16` | `local` | Internal VPC communication |

- No direct route to the Internet Gateway.    
- Associated with the **Private Subnet**.
- Allows routing within the VPC without providing direct internet connectivity.

## 5.3 Route Table Associations

Creating a custom route table does not automatically apply its routing rules to a subnet.
- Each custom route table must be **associated with the intended subnet**.
- Without an explicit association, the subnet uses the **Main Route Table**.
- A subnet becomes public when its associated route table contains a route to an **Internet Gateway**.

**Key distinction**: Subnet names do not determine whether a subnet is public or private. Its **routing configuration** determines the classification.

## 5.4 Exam Focus

- **Connect a VPC to the internet - Internet Gateway (IGW)**
- **Route all IPv4 destinations - `0.0.0.0/0`**
- **Route traffic within a VPC - Local Route**
- **Subnet with an Internet Gateway route - Public Subnet**
- **Subnet without a direct Internet Gateway route - Private Subnet**
- **Apply custom routing rules - Associate Route Table with Subnet**
- **No explicit route table association - Main Route Table**
- **Internet Gateway attached without an appropriate subnet route - No direct internet route for that subnet**
- **`/24` CIDR block - 256 total IP addresses**

# 6 - \[Exercise] - Launch EC2 in Public and Private Subnets

## 6.1 Launching EC2 Instances in Public and Private Subnets

**Amazon EC2 instances** can be launched in either **Public Subnets** or **Private Subnets** within a custom **Amazon VPC**.

In this exercise, two EC2 instances are launched inside the VPC (`10.10.0.0/16`).

| Configuration                | EC2 A                  | EC2 B           |
| ---------------------------- | ---------------------- | --------------- |
| **Subnet**                   | Public Subnet          | Private Subnet  |
| **IP Address**               | Private IP + Public IP | Private IP only |
| **Internet Gateway Route**   | Yes                    | No              |
| **Direct SSH from Internet** | Possible               | Not possible    |
| **SSH from Within VPC**      | Possible               | Possible        |
| **Direct Internet Access**   | Possible               | Not available   |

**Key concept**: EC2 instances in different subnets can communicate through the **VPC's local routing**, provided their security configurations allow the traffic.

## 6.2 Connecting to EC2 in a Public Subnet

An EC2 instance in a **Public Subnet** can be accessed from the internet using **SSH (Secure Shell)** when the necessary networking and security requirements are met.

### Requirements for SSH Connectivity

- **Public Subnet** - Route table contains a route to an Internet Gateway (IGW).
- **Public IPv4 Address** - Assigned to the EC2 instance.
- **Security Group** - Allows inbound SSH traffic on port 22 from the user's IP address.
- **SSH Key Pair** - Used to authenticate the connection.

### Auto-Assign Public IP

- Public IPv4 assignment can be configured at the **subnet level**.
- It can also be enabled or overridden when launching an EC2 instance.

**Exam distinction**: Launching an EC2 instance in a public subnet does not automatically guarantee internet connectivity. The instance also requires appropriate **IP addressing**, **routing**, **and security configuration**.

## 6.3 Connecting to EC2 in a Private Subnet

An EC2 instance in a **Private Subnet** cannot be accessed directly from the internet.

However, it can be accessed from another EC2 instance within the same VPC using its **Private IP Address**.

### Connectivity Flow

**User's Laptop**
Connects over SSH
↓
(Public Subnet)
**EC2 A**
Public IP + Private IP
↓
SSH using private IP via local VPC route
↓
(Private Subnet)
**EC2 B**
Private IP only

### Security Group Configuration

For **EC2 B**, inbound SSH traffic can be allowed from:
- The VPC CIDR Block (`10.10.0.0/16`).
- The Security Group **associated with EC2 A**.

The exercise connects to EC2 A first, then uses an SSH private key to connect to EC2 B through its private IP address.

**Key concept**: A private EC2 instance does not need a public IP address to communicate with other resources within its VPC.

## 6.4 Internet Connectivity for Private EC2 Instances

In the exercise, **EC2 B cannot directly access the internet** because:
- It resides in a **Private Subnet** without a direct route to an Internet Gateway.
- It does not have a **Public IP Address**.

Even if EC2 B were assigned a public IP, it would still lack direct internet connectivity without an appropriate Internet Gateway route.

### Solution: NAT Gateway

A **NAT Gateway (Network Address Translation Gateway)** enables resources in private subnets to initiate **outbound internet connections** without requiring direct inbound internet access.

Common use cases include:
- Application servers downloading software packages or updates.
- Backend services accessing external APIs.
- Private EC2 instances requiring outbound internet connectivity.

**Important distinction:**
- **Internet Gateway** - Enables direct internet connectivity for appropriately configured resources in public subnets.
- **NAT Gateway** - Enables outbound internet connectivity for resources in private subnets without exposing them to unsolicited inbound internet connections.

## 6.5 Exam Focus

- **Launch EC2 in a custom network - Select the Custom VPC and Subnet**
- **Direct internet connectivity - Public Subnet + Public IP + Internet Gateway route**
- **Secure remote access to Linux EC2 - SSH (Port 22)**
- **Control inbound SSH access - Security Group**
- **Connect to an EC2 instance within the VPC - Private IP Address**
- **Access private EC2 through public EC2 - SSH through an intermediate EC2 instance**
- **Internal VPC communication - Local Route**
- **Private EC2 without internet access - No direct Internet Gateway route**
- **Outbound internet access for private EC2 - NAT Gateway**
- **Keep backend servers private while allowing outbound connectivity - Private Subnet with NAT Gateway**

# 7 - NAT Gateway

## 7.1 NAT Gateway (Network Address Translation)

A **NAT Gateway** is an **AWS-managed networking service** that allows resources in a **Private Subnet** to access the internet without allowing external services to initiate connections to those resources.
- Provides **outbound internet connectivity** for private resources.  
- Prevents unsolicited **inbound connections** from the internet.
- Commonly used by application servers that need to download software packages or access external APIs.
- Fully managed by AWS, reducing administrative overhead.

**Key concept**: A NAT Gateway allows private instances to initiate internet connections without making them directly accessible from the internet.

## 7.2 How NAT Gateway Works

For outbound internet connectivity, a **Public NAT Gateway** must:
- Be deployed in a **Public Subnet**.
- Have an **Elastic IP Address (EIP),** which is a static public IPv4 address.
- Use an **Internet Gateway (IGW)** to communicate with the internet.
- Be configured as the target for internet-bound traffic in the **Private Subnet's Route Table**.

### Network Address Translation Process

1. An EC2 instance in a **Private Subnet** sends a request to the internet.
2. The traffic is routed to the **NAT Gateway** in a Public Subnet.
3. The NAT Gateway replaces the packet's source IP address with its own public IP address.
4. The request is forwarded to the internet through the **Internet Gateway**.
5. The response returns to the NAT Gateway, which forwards it back to the originating EC2 instance.

This process is called **Network Address Translation (NAT).**

**Important**: External services can respond to connections initiated by private instances but cannot initiate new connections to those instances through the NAT Gateway.

## 7.3 NAT Gateway Features and Pricing

| Feature                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| **Management**          | Fully managed by AWS                           |
| **Primary Purpose**     | Outbound internet access for private resources |
| **Deployment**          | Public NAT Gateway deployed in a Public Subnet |
| **Public IP**           | Uses an Elastic IP Address                     |
| **Availability**        | Deployed within a specific Availability Zone   |
| **Bandwidth**           | Starts at 5 Gbps and scales up to 100 Gbps     |
| **Supported Protocols** | TCP, UDP, ICMP                                 |
| **Security Groups**     | NAT Gateways do not support Security Groups    |
| **Pricing**             | Hourly charge + per-GB data processing charge  |

### NAT Gateway Pricing

NAT Gateway pricing includes:
- **Hourly Charge** - Charged for the time the NAT Gateway is provisioned.
- **Data Processing Charge** - Charged per GB of data processed by the NAT Gateway.

**Exam clue: NAT Gateway charges are based on hourly usage and data processed.**

## 7.4 NAT Gateway vs NAT Instance

AWS provides a managed NAT Gateway, but an **EC2 instance** can also be configured to perform network address translation.

| Feature             | NAT Gateway                    | NAT Instance                              |
| ------------------- | ------------------------------ | ----------------------------------------- |
| **Management**      | AWS-managed                    | Customer-managed                          |
| **Service Type**    | Managed networking service     | EC2 instance configured for NAT           |
| **Administration**  | Minimal administration         | Requires OS configuration and maintenance |
| **Scalability**     | Automatically scales bandwidth | Depends on instance capacity              |
| **Security Groups** | Not supported                  | Supported                                 |

**Key distinction**: A **NAT Gateway** is generally preferred when a fully managed NAT solution is required, while a **NAT Instance** requires customer administration.

## 7.5 NAT Gateway High Availability

A **NAT Gateway is associated with a specific Availability Zone (AZ).**
- If the Availability Zone experiences a failure, the NAT Gateway in that AZ may become unavailable.
- Private instances relying on that NAT Gateway may lose outbound internet connectivity.
- For higher availability, deploy **NAT Gateways across multiple Availability Zones.**
- Private subnets can route their outbound internet traffic through NAT Gateways in their respective Availability Zones.

**Exam distinction:**
- **Outbound internet access for private instances - NAT Gateway**
- **High availability for NAT connectivity - NAT Gateways in multiple Availability Zones**

## 7.6 Exam Focus

- **Outbound internet access for Private Subnets - NAT Gateway**
- **Prevent unsolicited inbound internet connections - NAT Gateway**
- **Static public IPv4 address - Elastic IP (EIP)**
- **Public NAT Gateway placement - Public Subnet**
- **Public NAT Gateway internet connectivity - Internet Gateway**
- **Translate source IP addresses - Network Address Translation (NAT)**
- **Fully managed NAT solution - NAT Gateway**
- **Customer-managed NAT solution - NAT Instance**
- **NAT Gateway pricing - Hourly charge + Per-GB data processing**
- **NAT Gateway Security Groups - Not supported**
- **NAT Gateway Availability Zone scope - Single AZ**
- **High availability for NAT Gateway - Deploy across multiple AZs**
- **Private application server accessing external APIs - NAT Gateway**

# 8 - \[Exercise] Create and use NAT-Gateway

## 8.1 NAT Gateway Configuration

A **NAT Gateway** enables EC2 instances in a **Private Subnet** to access the internet without allowing unsolicited inbound connections from the internet.

In this exercise, the existing VPC contains:
- **EC2 A** - Located in a Public Subnet.
- **EC2 B** - Located in a Private Subnet.
- **Internet Gateway (IGW)** - Attached to the VPC.
- **NAT Gateway** - Created in the Public Subnet to provide outbound internet connectivity for EC2 B.

### NAT Gateway Requirements

| Component               | Configuration                          | Purpose                                         |
| ----------------------- | -------------------------------------- | ----------------------------------------------- |
| **NAT Gateway**         | Deployed in Public Subnet              | Provides outbound internet access               |
| **Elastic IP (EIP)**    | Allocated to NAT Gateway               | Provides a static public IPv4 address           |
| **Internet Gateway**    | Attached to VPC                        | Enables internet connectivity                   |
| **Private Route Table** | Routes internet traffic to NAT Gateway | Directs outbound traffic from private instances |

**Key concept**: A public NAT Gateway must be placed in a **Public Subnet** and use an **Elastic IP Address** for internet connectivity.

## 8.2 Configuring Private Subnet Routing

After creating the NAT Gateway, the **Private Subnet's Route Table** must be updated to direct internet-bound traffic through it.

### Private Route Table

|Destination|Target|Purpose|
|---|---|---|
|`10.10.0.0/16`|`local`|Internal VPC communication|
|`0.0.0.0/0`|NAT Gateway|Outbound IPv4 internet traffic|

- `10.10.0.0/16` - Allows communication within the VPC.
- `0.0.0.0/0` - Represents all IPv4 destinations and directs internet-bound traffic to the NAT Gateway.

The NAT Gateway then forwards the traffic through the **Internet Gateway**.

**Important**: Adding a NAT Gateway route does not make the Private Subnet public. The subnet remains private because it has no direct route to an Internet Gateway.

## 8.3 Verifying Internet Connectivity

After configuring the NAT Gateway and route table, **EC2 B** can initiate outbound connections to the internet.

### Connectivity Flow

(Private Subnet)
**EC2 B**
Initiates outbound internet traffic
⇕
(Public Subnet)
**NAT Gateway**
Elastic IP assigned
⇕
**Internet Gateway**
Connects VPC to internet
⇕
**Internet**

### Connectivity Test

The exercise verifies outbound connectivity from EC2 B using:

```
ping google.com
```

A successful response confirms that EC2 B can access the internet through the NAT Gateway.

**Key distinction:**
- **Outbound internet traffic from Private Subnet - Allowed through NAT Gateway**
- **Unsolicited inbound internet traffic to Private Subnet - Not allowed through NAT Gateway**

## 8.4 NAT Gateway Costs and Resource Cleanup

**NAT Gateways are not free** and incur charges while provisioned, including data processing charges.

After completing the exercise:
1. **Delete the NAT Gateway** to stop unnecessary NAT Gateway usage charges.
2. **Terminate EC2 A and EC2 B** to avoid unnecessary EC2 compute charges.
3. **Delete the VPC** if it is no longer needed.

The **VPC itself does not incur charges**, but associated resources may.

**Exam tip**: NAT Gateway pricing includes **hourly charges and per-GB data processing charges**.

## 8.5 Exam Focus

- **Outbound internet access for private EC2 - NAT Gateway**
- **NAT Gateway placement - Public Subnet**
- **Static public IPv4 address for NAT Gateway - Elastic IP**
- **Private Subnet internet route - `0.0.0.0/0` targeting NAT Gateway**
- **Internal VPC communication - Local Route**
- **Internet connectivity from NAT Gateway - Internet Gateway**
- **Private Subnet with NAT Gateway route - Remains private**
- **Block unsolicited inbound connections - NAT Gateway**
- **NAT Gateway pricing - Hourly usage + Data processing charges**
- **Avoid unnecessary NAT Gateway costs - Delete unused NAT Gateways**

# 9 - Regional NAT Gateway

## 9.1 Regional NAT Gateway

**Regional NAT Gateway** is an AWS-managed networking service introduced at **AWS re:Invent 2025** that simplifies outbound internet connectivity for resources in private subnets across multiple Availability Zones (AZs).

Unlike traditional NAT Gateways, which operate within a single AZ, **Regional NAT Gateways operate at the VPC level** and can span multiple AZs.

### Traditional NAT Gateway vs Regional NAT Gateway

| Feature                   | Traditional NAT Gateway                    | Regional NAT Gateway                    |
| ------------------------- | ------------------------------------------ | --------------------------------------- |
| **Scope**                 | Single Availability Zone                   | VPC level, across multiple AZs          |
| **High Availability**     | Deploy NAT Gateways manually across AZs    | Managed across multiple AZs             |
| **Public Subnet**         | Customer must create                       | AWS-managed; not required from customer |
| **Routing Configuration** | Configure public and private subnet routes | Configure private subnet routes         |
| **AZ Expansion**          | Manual deployment                          | Automatic or manual                     |
| **Operational Overhead**  | Higher                                     | Lower                                   |

**Key distinction**: Regional NAT Gateway simplifies multi-AZ connectivity by reducing the need to deploy and manage separate NAT Gateways in each Availability Zone.

## 9.2 Regional NAT Gateway Features

### Automatic and Manual AZ Expansion

Regional NAT Gateway supports two deployment modes:
- **Automatic Mode** - AWS automatically expands NAT Gateway availability into additional AZs where workloads are deployed.
- **Manual Mode** - Customers specify which Availability Zones should support the NAT Gateway.

### Zonal Affinity

**Zonal Affinity** keeps outbound traffic within the same Availability Zone whenever possible.
- Traffic from an application server in AZ-1 is routed through NAT capacity in AZ-1.
- Helps avoid unnecessary **cross-AZ data transfer charges**.

### Simplified Network Configuration

- No need to create a dedicated **Public Subnet** for the Regional NAT Gateway.
- AWS manages the required underlying networking and routing components.
- Customers configure their **Private Subnet Route Tables** to direct internet-bound traffic through the Regional NAT Gateway.

## 9.3 Exam Focus

The instructor indicates Regional NAT Gateway is informational and is not expected to be tested in CLF-C02 through the end of 2026.

Prioritize these existing NAT Gateway concepts:
- **Outbound internet access for Private Subnets - NAT Gateway**
- **Traditional NAT Gateway scope - Single Availability Zone**
- **High availability for traditional NAT Gateways - Deploy across multiple AZs**
- **Regional NAT Gateway scope - Multiple Availability Zones**
- **Automatic multi-AZ expansion - Regional NAT Gateway**
- **Reduce cross-AZ data transfer - Zonal Affinity**
- **Simplified NAT management across AZs - Regional NAT Gateway**

# 10 - Default VPC

## 10.1 Default VPC

A **Default VPC** is an AWS-provided virtual network that allows users to launch **Amazon EC2 instances** without manually configuring the underlying network infrastructure.
- AWS automatically provides a **Default VPC** in each AWS Region.
- Designed to simplify launching EC2 instances and other AWS resources.
- Uses the default IPv4 CIDR block `172.31.0.0/16`.
- Comes preconfigured with subnets, an Internet Gateway, and routing for internet connectivity.

**Key concept**: A Default VPC provides a ready-to-use networking environment, reducing the need for manual VPC configuration.

## 10.2 Default VPC Components

A Default VPC includes several preconfigured networking components.

| Component                  | Default Configuration                    | Purpose                                                               |
| -------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| **VPC CIDR Block**         | `172.31.0.0/16`                          | Defines the private IPv4 address range                                |
| **Subnets**                | One default subnet per Availability Zone | Provides network environments for AWS resources                       |
| **Subnet Type**            | Public Subnets                           | Supports direct internet connectivity                                 |
| **Internet Gateway (IGW)** | Created and attached automatically       | Connects the VPC to the internet                                      |
| **Main Route Table**       | Local route + Internet Gateway route     | Enables internal and internet routing                                 |
| **Public IP Assignment**   | Enabled by default for default subnets   | Automatically assigns public IPv4 addresses to launched EC2 instances |

### Default Subnets and Availability Zones

- Each Availability Zone in the Region has a **Default Subnet**.
- Every default subnet is configured as a **Public Subnet**.
- The number of default subnets depends on the number of Availability Zones in the Region.

### Default Route Table

The **Main Route Table** contains routing rules that allow communication within the VPC and access to the internet.

| Destination     | Target           | Purpose                     |
| --------------- | ---------------- | --------------------------- |
| `172.31.0.0/16` | `local`          | Internal VPC communication  |
| `0.0.0.0/0`     | Internet Gateway | Internet-bound IPv4 traffic |

**Key distinction**: Default subnets are public because their route table includes a route to the Internet Gateway.

## 10.3 Default VPC vs Custom VPC

| Feature               | Default VPC                    | Custom VPC                      |
| --------------------- | ------------------------------ | ------------------------------- |
| **Creation**          | Automatically provided by AWS  | Manually created by customer    |
| **Default IPv4 CIDR** | `172.31.0.0/16`                | Customer-defined                |
| **Subnets**           | Automatically created          | Customer creates                |
| **Internet Gateway**  | Automatically attached         | Customer configures             |
| **Internet Routing**  | Preconfigured                  | Customer configures             |
| **Primary Purpose**   | Simplified resource deployment | Customized network architecture |

**Exam distinction:**
- **Launch EC2 without manually configuring networking - Default VPC**
- **Create a customized private network - Custom VPC**

## 10.4 Default VPC Management

A **Default VPC** is not a special type of network with unique capabilities. It is a regular VPC with predefined networking configurations.
- Can be **deleted** if no longer required.
- Can be **recreated** using the AWS Management Console.
- A recreated Default VPC includes the standard default networking configuration.

## 10.5 Exam Focus

- **AWS-provided ready-to-use network - Default VPC**
- **Default VPC IPv4 CIDR - `172.31.0.0/16`**
- **Default Subnets - One per Availability Zone**
- **Default Subnet Type - Public Subnet**
- **Default VPC Internet Connectivity - Internet Gateway**
- **Default Subnet Routing - Main Route Table**
- **Default Internet Route - `0.0.0.0/0` through Internet Gateway**
- **Automatic public IPv4 assignment - Enabled in Default Subnets**
- **Simplified EC2 deployment - Default VPC**
- **Default VPC deletion and recreation - Supported**

# 11 - VPC Firewalls - NACL

## 11.1 Network Access Control List (NACL)

A **Network Access Control List (NACL)** is a VPC firewall that controls **inbound and outbound network traffic at the subnet level**.
- Operates at the **Subnet Boundary**.
- Rules automatically apply to all **EC2 instances within the associated subnet**.
- Supports both **Allow** and **Deny** rules.
- Is **Stateless**, meaning return traffic must be explicitly allowed.
- Evaluates rules in **ascending rule number order**, applying the first matching rule.

**Key concept**: NACLs provide **subnet-level network security**, while Security Groups provide **instance-level network security**.

## 11.2 NACL Rules and Evaluation

NACL rules determine which network traffic is permitted or denied.

### Rule Evaluation

- Each rule has a **Rule Number**, which determines its evaluation priority.
- Rules are evaluated from the **lowest number to the highest**.
- The **first matching rule** determines whether traffic is allowed or denied.
- A final default rule (`*`) denies traffic that does not match any earlier rule.

### Example: Blocking a Specific IP Address

Suppose an external IP address is identified as malicious.

| Rule Number | Source                | Action |
| ----------- | --------------------- | ------ |
| 50          | Malicious IP Address  | DENY   |
| 100         | `0.0.0.0/0`           | ALLOW  |
| *           | All remaining traffic | DENY   |

- Rule 50 blocks traffic from the malicious IP address.    
- Rule 100 permits other IPv4 traffic.
- Rule `*` denies traffic that does not match an earlier rule.

**Important**: A DENY rule must have a **lower rule number** than a broader ALLOW rule to block the matching traffic.

**Exam clue: Block traffic from a specific malicious IP address - Network ACL**

## 11.3 Stateless vs Stateful Firewalls

**Network ACLs are Stateless**, meaning inbound and outbound traffic are evaluated independently.

Unlike Security Groups, NACLs do not automatically allow response traffic.

### Example: HTTP Communication

An external client sends an HTTP request to an EC2 instance on **port 80**.
1. The NACL **Inbound Rule** allows traffic to port 80.
2. The EC2 instance receives and processes the request.
3. The EC2 instance sends a response to the client's **Ephemeral Port**.
4. The NACL **Outbound Rule** must explicitly allow the return traffic.

**Ephemeral Ports** are temporary ports used by clients for network communication. Their ranges depend on the operating system.

### Stateful vs Stateless

| Behavior                    | Stateful                                        | Stateless                  |
| --------------------------- | ----------------------------------------------- | -------------------------- |
| **Tracks Connection State** | Yes                                             | No                         |
| **Return Traffic**          | Automatically allowed for permitted connections | Must be explicitly allowed |
| **AWS Firewall**            | Security Group                                  | Network ACL                |

**Key distinction:**
- **Stateful Firewall - Security Group**
- **Stateless Firewall - Network ACL**

## 11.4 Default Network ACL

When creating a VPC, AWS automatically creates a **Default Network ACL**.

By default, it allows all inbound and outbound traffic.

### Default NACL Rules

| Direction | Rule Number | Traffic               | Action |
| --------- | ----------- | --------------------- | ------ |
| Inbound   | 100         | All IPv4 traffic      | ALLOW  |
| Inbound   | *           | All remaining traffic | DENY   |
| Outbound  | 100         | All IPv4 traffic      | ALLOW  |
| Outbound  | *           | All remaining traffic | DENY   |

- **Rule 100** allows all IPv4 traffic.    
- Rule `*` denies any traffic not matched by earlier rules.
- When IPv6 is enabled, corresponding IPv6 rules can also be present.
- You can modify the default NACL or create a **Custom Network ACL** and associate it with subnets.

**Key concept**: The Default NACL allows all traffic unless its rules are modified.

## 11.5 Security Groups vs Network ACLs

Both **Security Groups** and **Network ACLs** control network traffic, but they operate differently.

| Feature             | Security Group (SG)               | Network ACL (NACL)                           |
| ------------------- | --------------------------------- | -------------------------------------------- |
| **Security Level**      | Instance level                    | Subnet level                                 |
| **Rule Types**          | Allow rules only                  | Allow and Deny rules                         |
| **Connection Tracking** | Stateful                          | Stateless                                    |
| **Return Traffic**      | Automatically allowed             | Must be explicitly allowed                   |
| **Rule Evaluation**     | All rules are evaluated together  | Rules evaluated in numerical order           |
| **Rule Priority**       | No numbered priority              | Lowest matching rule number takes precedence |
| **Block Specific IP**   | Cannot create explicit DENY rules | Can explicitly deny an IP address            |

### When to Use Each Firewall

**Security Group**
- Control traffic to and from individual EC2 instances.
- Allow specific inbound ports such as SSH (22) or HTTP (80).
- Automatically permit response traffic for allowed connections.

**Network ACL**
- Control traffic entering and leaving an entire subnet.
- Explicitly deny traffic from malicious IP addresses.
- Apply subnet-wide security rules.

**Exam distinction**: Use **Security Groups** for instance-level access control and **NACLs** for subnet-level filtering or explicit DENY rules.

## 11.6 Exam Focus

- **Instance-level firewall - Security Group**
- **Subnet-level firewall - Network ACL (NACL)**
- **Allow rules only - Security Group**
- **Allow and Deny rules - Network ACL**
- **Stateful firewall - Security Group**
- **Stateless firewall - Network ACL**
- **Automatically allow return traffic - Security Group**
- **Explicitly allow return traffic - Network ACL**
- **Evaluate all rules together - Security Group**
- **Evaluate rules from lowest number to highest - Network ACL**
- **First matching rule determines action - Network ACL**
- **Block a specific malicious IP address - Network ACL**
- **Default NACL - Allows all inbound and outbound traffic**
- **Unmatched NACL traffic - Denied by the final `*` rule**
- **Return traffic through NACL - Requires appropriate ephemeral port rules**

# 12 - VPC Design for a Web Application

## 12.1 VPC Architecture for a Web Application

A **highly available web application** on AWS can be designed using **Amazon VPC**, multiple **Availability Zones (AZs),** **Elastic Load Balancing**, **EC2 instances**, and a replicated database.

The architecture should provide:
- **High Availability** - Application remains available if an Availability Zone fails.
- **Scalability** - Multiple application servers handle incoming traffic.
- **Network Isolation** - Application servers and databases reside in private subnets.
- **Internet Connectivity** - Users access the application through a public load balancer.
- **Security** - Security Groups restrict communication between components.

### Core Network Components

| Component                       | Purpose                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| **VPC**                         | Provides an isolated virtual network within an AWS Region        |
| **Public Subnets**              | Host internet-facing load balancer and NAT Gateways              |
| **Private Application Subnets** | Host EC2 application servers                                     |
| **Private Database Subnets**    | Host primary and secondary databases                             |
| **Internet Gateway (IGW)**      | Provides connectivity between the VPC and internet               |
| **Load Balancer**               | Distributes incoming traffic across application servers          |
| **NAT Gateway**                 | Provides outbound internet access to private application servers |
| **Security Groups**             | Control permitted traffic between application components         |

## 12.2 Multi-Tier VPC Architecture

A typical web application can be separated into **three tiers**.

| Tier             | Subnet Type | Components                      | Purpose                            |
| ---------------- | ----------- | ------------------------------- | ---------------------------------- |
| **Web Tier**         | Public      | Load Balancer                   | Receives incoming internet traffic |
| **Application Tier** | Private     | EC2 Application Servers         | Processes application requests     |
| **Database Tier**    | Private     | Primary and Secondary Databases | Stores application data            |

### Web Tier

- An **internet-facing Load Balancer** is deployed across public subnets in multiple AZs.
- Users connect to the application through the **Load Balancer's DNS name**.
- The load balancer distributes requests to application servers.
- **Amazon Route 53** can provide domain name-based access to the application.

### Application Tier

- **EC2 Application Servers** are deployed in private subnets across multiple AZs.
- Instances use **Private IP Addresses**.
- Application servers receive requests through the load balancer rather than directly from the internet.
- Multiple application servers improve availability and support scalability.

### Database Tier

- Databases are deployed in **dedicated Private Subnets**, separate from the application tier.
- A **Primary Database** handles database operations.
- A **Secondary Database** in another AZ maintains a continuously replicated copy.
- With appropriate replication and failover configuration, the secondary database can take over if the primary becomes unavailable.    

**Key concept**: Separating application components into public and private subnets improves network security and isolation.

## 12.3 High Availability Across Multiple AZs

Deploying application components across **multiple Availability Zones** reduces the risk of a single AZ failure causing an application outage.

### Multi-AZ Design

| Component              | AZ-1             | AZ-2               |
| ---------------------- | ---------------- | ------------------ |
| **Load Balancer**      | Public Subnet    | Public Subnet      |
| **Application Server** | EC2 Instance A   | EC2 Instance B     |
| **Database**           | Primary Database | Secondary Database |
| **NAT Gateway**        | NAT Gateway A    | NAT Gateway B      |

### Availability Zone Failure

If AZ-1 becomes unavailable:
- The load balancer can continue routing traffic to the healthy application server in AZ-2.
- The secondary database can take over, provided database failover is configured.
- The NAT Gateway in AZ-2 continues providing outbound internet connectivity.

**Exam distinction:**
- **Distribute application traffic - Elastic Load Balancing**
- **Improve availability during AZ failure - Multi-AZ Deployment**
- **Maintain a replicated database in another AZ - Database Replication**
- **Highly available outbound internet access - NAT Gateways across multiple AZs**

## 12.4 NAT Gateway for Private Application Servers

Application servers in private subnets may require **outbound internet access** to download packages or communicate with external APIs.

A **NAT Gateway** provides this connectivity without allowing unsolicited inbound internet connections.
- Traditional NAT Gateways are deployed in **Public Subnets**.
- Each NAT Gateway uses an **Elastic IP Address**.
- Private subnet route tables direct outbound internet traffic through the NAT Gateway.
- Deploying NAT Gateways across multiple AZs improves availability.

NAT Gateways can share public subnets with the load balancer or use dedicated public subnets.

**Key concept**: Application servers can remain private while accessing external internet services through a NAT Gateway.

## 12.5 Security Groups for Multi-Tier Applications

**Security Groups** control which components can communicate with each other.

Each application tier should allow only the network traffic required for its function.

### Security Group Configuration

| Component               | Inbound Port      | Allowed Source                    | Purpose                                              |
| ----------------------- | ----------------- | --------------------------------- | ---------------------------------------------------- |
| **Load Balancer**       | HTTPS (443)       | `0.0.0.0/0`                       | Accept HTTPS requests from internet users            |
| **Application Servers** | HTTP (80) or 8080 | Load Balancer Security Group      | Accept requests from the load balancer               |
| **Database**            | MySQL (3306)      | Application Server Security Group | Accept database connections from application servers |

### Security Group Referencing

Instead of allowing traffic from the entire VPC CIDR (`10.10.0.0/16`), Security Groups can reference other Security Groups as their allowed source.

For example:
- **Application Server SG** allows inbound requests only from the **Load Balancer SG**.
- **Database SG** allows inbound database connections only from the **Application Server SG**.

This provides more precise access control than allowing traffic from every resource in the VPC.

**Exam clue: Restrict communication between application tiers - Security Group Referencing**

### Network ACLs
- **Network ACLs (NACLs)** operate at the subnet level.
- The default NACL allows inbound and outbound traffic.
- This architecture primarily uses **Security Groups** for traffic filtering between application tiers.

## 12.6 Exam Focus

- **Isolated application network - Amazon VPC**
- **Internet-facing entry point - Public Load Balancer**
- **Distribute requests across EC2 instances - Elastic Load Balancing**
- **Host application servers securely - Private Subnets**
- **Isolate databases from direct internet access - Private Database Subnets**
- **Improve application availability - Multiple Availability Zones**
- **Database availability across AZs - Primary and Secondary Database Replication**
- **Outbound internet access for private servers - NAT Gateway**
- **Highly available traditional NAT connectivity - NAT Gateways in multiple AZs**
- **Public HTTPS traffic - Port 443**
- **Application HTTP traffic - Port 80 or 8080**
- **MySQL database traffic - Port 3306**
- **Allow traffic only from the load balancer - Reference Load Balancer Security Group**
- **Allow database traffic only from application servers - Reference Application Server Security Group**
- **Domain name routing - Amazon Route 53**

# 13 - VPC Endpoints and PrivateLink

## 13.1 VPC Endpoints

A **VPC Endpoint** enables private connectivity between resources inside an **Amazon VPC** and supported AWS services without requiring an **Internet Gateway** or **NAT Gateway**.
- Allows EC2 instances in private subnets to access AWS services privately.
- Traffic does not need to traverse the public internet.
- Commonly used to access services such as **Amazon S3**, **Amazon DynamoDB, Amazon SQS, and Amazon SNS**.
- Can reduce networking costs by avoiding NAT Gateway data processing charges.

### Why Use VPC Endpoints?

Consider an EC2 application server in a private subnet that needs to upload or download files from **Amazon S3**.

**Without a VPC Endpoint:**
- The EC2 instance sends requests through a **NAT Gateway**.
- Traffic reaches Amazon S3 through the configured internet-facing route.
- NAT Gateway data processing charges apply.

**With a VPC Endpoint:**
- The EC2 instance accesses Amazon S3 through a **VPC Endpoint**.
- Traffic remains on the AWS network without requiring an internet-facing route.
- NAT Gateway data processing charges can be avoided for this traffic.

**Key concept**: VPC Endpoints provide **private access to supported AWS services** and can help reduce networking costs.

## 13.2 Types of VPC Endpoints

There are two important VPC Endpoint types covered in this lesson.

| Feature                   | Gateway Endpoint                  | Interface Endpoint                                  |
| ------------------------- | --------------------------------- | --------------------------------------------------- |
| **Purpose**               | Private access to S3 and DynamoDB | Private access to supported AWS services            |
| **Supported Services**    | Amazon S3, Amazon DynamoDB        | Amazon SQS, Amazon SNS, AWS Lambda, and others      |
| **Connectivity**          | Uses VPC route tables             | Uses private network interfaces                     |
| **Underlying Technology** | Gateway VPC Endpoint              | AWS PrivateLink                                     |
| **Pricing**               | No additional endpoint charge     | Hourly endpoint charges and data processing charges |

### Gateway VPC Endpoint

A **Gateway VPC Endpoint** provides private connectivity to:
- **Amazon Simple Storage Service (Amazon S3)**
- **Amazon DynamoDB**

Key characteristics:
- Uses **Route Tables** to direct traffic to supported AWS services.
- Does not require a NAT Gateway or Internet Gateway.
- Has **no additional hourly or data processing charges** for the gateway endpoint itself.

**Exam clue: Free private connectivity from a VPC to Amazon S3 or DynamoDB - Gateway VPC Endpoint**

### Interface VPC Endpoint

An **Interface VPC Endpoint** enables private connectivity to supported AWS services through **AWS PrivateLink**.

Examples include:
- **Amazon Simple Queue Service (Amazon SQS)**
- **Amazon Simple Notification Service (Amazon SNS)**
- **AWS Lambda**

Key characteristics:
- Provides private access through network interfaces with private IP addresses in the VPC.
- Does not require a NAT Gateway or Internet Gateway.
- Incurs endpoint usage charges.

**Exam clue: Private connectivity to supported AWS services such as SQS, SNS, or Lambda - Interface VPC Endpoint**

## 13.3 AWS PrivateLink

**AWS PrivateLink** enables private connectivity between a VPC and supported services, including services hosted in another customer's VPC.
- Allows service providers to expose their services privately to other VPCs.
- Consumers can access these services without requiring public internet connectivity.
- Uses **Interface VPC Endpoints** for private service access.
- Reduces the need to expose services through public IP addresses.

### Example Use Case

A company hosts an application in its own VPC and needs to access a service hosted by another AWS customer.

Using **AWS PrivateLink**, the company can access that service privately without routing requests over the public internet.

**Key distinction:**
- **VPC Endpoint** - Provides a private connection from a VPC to a supported service.
- **AWS PrivateLink** - Enables private connectivity to supported services, including services provided by other AWS customers.

The lesson focuses on services within the **same AWS Region**.

## 13.4 VPC Endpoint Cost Optimization

VPC Endpoints can help reduce costs when applications frequently access supported AWS services.

| Connectivity Option        | Pricing Consideration                           |
| -------------------------- | ----------------------------------------------- |
| **NAT Gateway**            | Hourly charge and per-GB data processing charge |
| **Gateway VPC Endpoint**   | No additional endpoint usage charge             |
| **Interface VPC Endpoint** | Hourly and data processing charges              |

For data-intensive applications accessing Amazon S3 or DynamoDB, a **Gateway VPC Endpoint** can be particularly cost-effective because it avoids NAT Gateway data processing charges for that traffic.

**Exam distinction:**
- **Private access to S3 or DynamoDB without endpoint charges - Gateway VPC Endpoint**
- **Private access to supported AWS services through PrivateLink - Interface VPC Endpoint**
- **Private access to another customer's supported service - AWS PrivateLink**

## 13.5 Exam Focus

- **Private connectivity to supported AWS services - VPC Endpoint**
- **Avoid public internet routing to supported services - VPC Endpoint**
- **Private access to Amazon S3 - Gateway VPC Endpoint**
- **Private access to Amazon DynamoDB - Gateway VPC Endpoint**
- **Gateway VPC Endpoint pricing - No additional endpoint charge**
- **Private access to SQS, SNS, or Lambda - Interface VPC Endpoint**
- **Interface VPC Endpoint technology - AWS PrivateLink**
- **Interface VPC Endpoint pricing - Hourly and data processing charges**
- **Private access to another customer's service - AWS PrivateLink**
- **Reduce NAT Gateway processing costs for S3 traffic - Gateway VPC Endpoint**
- **Access AWS services privately without NAT Gateway or Internet Gateway - VPC Endpoint**

# 14 - VPC Peering

## 14.1 VPC Peering Connection

**VPC Peering** is an AWS networking feature that allows **two Amazon VPCs to communicate privately** using their private IP addresses.
- Establishes a **one-to-one connection** between two VPCs.
- Enables EC2 instances and databases in different VPCs to communicate privately.
- Traffic does not need to pass through an **Internet Gateway** or the public internet.
- Supports VPCs within the **same AWS Region** or across **different AWS Regions**.
- Commonly used for simple architectures with a limited number of VPCs.

### Example Use Case

Suppose an application and its database are hosted in private subnets within **VPC A**, while administrators operate from **VPC B**.

Using **VPC Peering**, administrators in VPC B can privately connect to resources in VPC A using their **Private IP Addresses**, without exposing those resources to the internet.

**Key concept**: VPC Peering provides **direct private connectivity between two VPCs**.

## 14.2 VPC Peering Characteristics and Limitations

### One-to-One Connectivity

A **VPC Peering Connection** connects exactly two VPCs.
- VPC A can be connected to VPC B.
- VPC B can be connected to VPC C.
- Each connection is established independently.

### Non-Overlapping CIDR Blocks

VPCs connected through peering must have **non-overlapping CIDR ranges**.

For example:

| VPC   | CIDR Block     | Peering Compatibility  |
| ----- | -------------- | ---------------------- |
| VPC A | `10.10.0.0/16` | Compatible with VPC B  |
| VPC B | `10.20.0.0/16` | Compatible with VPC A  |
| VPC C | `10.10.0.0/16` | Cannot peer with VPC A |

Overlapping CIDR ranges create routing ambiguity because the network cannot reliably distinguish between local and remote destinations.

**Exam clue: VPC Peering requires non-overlapping CIDR blocks.**

### Non-Transitive Routing

VPC Peering does not support **transitive routing**.

Suppose:
- VPC A is peered with VPC B.
- VPC B is peered with VPC C.

This does **not** mean VPC A can communicate with VPC C through VPC B. A separate VPC A–C peering connection is required for direct private communication.

**Key distinction**: A separate **VPC Peering Connection** must be established between VPC A and VPC C if they need to communicate directly.

## 14.3 Intra-Region vs Inter-Region VPC Peering

VPC Peering supports private connectivity both within and across AWS Regions.

| Peering Type                 | Description                                |
| ---------------------------- | ------------------------------------------ |
| **Intra-Region VPC Peering** | Connects two VPCs in the same AWS Region   |
| **Inter-Region VPC Peering** | Connects two VPCs in different AWS Regions |

Both options provide private communication between VPCs without requiring traffic to traverse the public internet.

**Key concept**: VPC Peering is **not limited to a single AWS Region**.

## 14.4 Exam Focus

- **Private connectivity between two VPCs - VPC Peering**
- **VPC Peering connection type - One-to-One**
- **Communication between peered VPCs - Private IP Addresses**
- **Public internet required for VPC Peering - No**
- **VPC Peering CIDR requirement - Non-overlapping CIDR Blocks**
- **Transitive routing supported - No**
- **A peered with B, B peered with C - A cannot communicate with C through B**
- **Direct connectivity between A and C - Separate VPC Peering Connection**
- **Connect VPCs in the same Region - Intra-Region Peering**
- **Connect VPCs across different Regions - Inter-Region Peering**
- **Simple private connectivity between a limited number of VPCs - VPC Peering**

# 15 - AWS Transit Gateway

## 15.1 AWS Transit Gateway

**AWS Transit Gateway** is a **regional network transit hub** that allows multiple Amazon VPCs and on-premises networks to communicate privately through a centralized router.
- Acts as a **centralized router** for connecting multiple networks.
- Supports connectivity between **thousands of VPCs** and on-premises networks.
- Uses a **Hub-and-Spoke Architecture** to simplify network management.
- Eliminates the need to establish individual VPC Peering connections between every pair of VPCs.
- Supports connectivity to on-premises networks through **AWS Site-to-Site VPN** and **AWS Direct Connect**.

**Key concept**: AWS Transit Gateway simplifies large-scale network connectivity by providing a **centralized routing hub** for multiple VPCs and on-premises networks.

## 15.2 VPC Peering vs AWS Transit Gateway

**VPC Peering** works well for connecting a small number of VPCs, but becomes difficult to manage as the number of VPCs increases.

### Limitations of VPC Peering

VPC Peering uses **one-to-one connections**, meaning each pair of VPCs requires its own connection.

| Number of VPCs | Peering Connections Required for Full Connectivity |
| -------------- | -------------------------------------------------- |
| 4              | 6                                                  |
| 10             | 45                                                 |

As more VPCs are added, the number of required connections increases significantly.

### VPC Peering vs Transit Gateway

| Feature                   | VPC Peering                           | AWS Transit Gateway                            |
| ------------------------- | ------------------------------------- | ---------------------------------------------- |
| **Architecture**              | One-to-One                            | Hub-and-Spoke                                  |
| **Connectivity**              | Direct connection between two VPCs    | Centralized connectivity between multiple VPCs |
| **Scalability**               | Suitable for a limited number of VPCs | Supports thousands of VPCs                     |
| **Routing**                   | Non-transitive                        | Centralized routing between connected networks |
| **Inter-Region Connectivity** | Supports Inter-Region VPC Peering     | Supports Inter-Region Transit Gateway Peering  |
| **On-Premises Connectivity**  | Not a direct connectivity solution    | Supports VPN and Direct Connect connectivity   |
| **Typical Use Case**          | Simple VPC-to-VPC communication       | Large-scale network interconnection            |

**Exam distinction:**
- **Connect two VPCs privately - VPC Peering**
- **Connect hundreds or thousands of VPCs - AWS Transit Gateway**
- **Centralized routing across multiple networks - AWS Transit Gateway**

## 15.3 Hub-and-Spoke Architecture

AWS Transit Gateway follows a **Hub-and-Spoke Architecture**.
- **Hub** - AWS Transit Gateway acts as the central router.
- **Spokes** - Connected networks, such as VPCs and on-premises networks.
- Traffic between connected networks is routed through the Transit Gateway.

### Regional and Inter-Region Connectivity

**AWS Transit Gateway is a Regional Service.**

- A Transit Gateway connects VPCs within its AWS Region.
- To connect VPCs across different AWS Regions, separate Transit Gateways can be created in each Region.
- These Transit Gateways can communicate using **Inter-Region Transit Gateway Peering**.

**Key distinction**: Transit Gateway is regional, but **Transit Gateway Peering** enables connectivity across AWS Regions.

## 15.4 AWS Transit Gateway Use Cases

### Centralized Network Traffic Inspection

AWS Transit Gateway can route network traffic through a **Centralized Security VPC**.
- Multiple VPCs connect to a Transit Gateway.
- Traffic can be directed through a centralized VPC for security inspection.
- Security systems such as **Intrusion Detection Systems (IDS)** and **Intrusion Prevention Systems (IPS)** can inspect network traffic.

This can support inspection of:
- **North-South Traffic** - Traffic entering or leaving a network.
- **East-West Traffic** - Traffic between internal networks or VPCs.

**Exam clue: Centralized traffic inspection across multiple VPCs - AWS Transit Gateway**

### Connecting On-Premises Networks to AWS

AWS Transit Gateway can connect corporate data centers and branch offices to multiple AWS VPCs.

Supported connectivity options include:
- **AWS Site-to-Site VPN** - Connects on-premises networks to AWS through VPN connections.
- **AWS Direct Connect** - Provides dedicated network connectivity between on-premises environments and AWS.

This allows organizations with multiple offices and VPCs to use a **centralized network hub** rather than managing numerous individual connections.

**Exam clue: Connect multiple branch offices and AWS VPCs through a centralized network - AWS Transit Gateway**

## 15.5 Exam Focus

- **Centralized network router - AWS Transit Gateway**
- **Connect thousands of VPCs - AWS Transit Gateway**
- **Network architecture - Hub-and-Spoke**
- **Transit Gateway scope - AWS Region**
- **Connect Transit Gateways across Regions - Inter-Region Transit Gateway Peering**
- **Simple one-to-one VPC connectivity - VPC Peering**
- **Large-scale VPC connectivity - AWS Transit Gateway**
- **Centralized routing between multiple VPCs - AWS Transit Gateway**
- **Connect on-premises networks to multiple VPCs - AWS Transit Gateway**
- **On-premises connectivity options - AWS Site-to-Site VPN and AWS Direct Connect**
- **Centralized network traffic inspection - Transit Gateway with a Security VPC**
- **Inspect network traffic for threats - IDS/IPS**

# 16 - AWS Site-to-Site VPN

## 16.1 AWS Site-to-Site VPN

**AWS Site-to-Site VPN** is a managed networking service that establishes a **secure, encrypted connection** between an **on-premises network** and an **Amazon VPC** over the public internet.
- Connects corporate data centers or branch offices to AWS.
- Uses **IPsec (Internet Protocol Security)** to encrypt network traffic.
- Enables on-premises resources to access EC2 instances and databases in a VPC using their **Private IP Addresses**.
- Allows two separate networks to communicate securely as though they were part of a private network.

**Key concept**: AWS Site-to-Site VPN provides **encrypted network-to-network connectivity over the public internet**.

## 16.2 Site-to-Site VPN Components

A Site-to-Site VPN connection requires gateway components on both the AWS and customer sides.

| Component                         | Location              | Purpose                                        |
| --------------------------------- | --------------------- | ---------------------------------------------- |
| **Virtual Private Gateway (VGW)** | AWS side              | VPN gateway attached to the VPC                |
| **Customer Gateway (CGW)**        | On-premises side      | Represents the customer's router or VPN device |
| **IPsec VPN Tunnels**             | Between both gateways | Provide encrypted network communication        |

### How Site-to-Site VPN Works

1. A **Customer Gateway** is configured for the on-premises network.    
2. A **Virtual Private Gateway** is attached to the AWS VPC.
3. An **IPsec VPN connection** is established between the gateways.
4. Traffic travels over the public internet through encrypted VPN tunnels.
5. On-premises resources can communicate with AWS resources using their **Private IP Addresses**, subject to routing and security rules.

**Important**: Site-to-Site VPN uses the **public internet as its underlying transport**, but traffic inside the VPN tunnels is encrypted.

## 16.3 IPsec Encryption and High Availability

### IPsec Encryption

**IPsec (Internet Protocol Security)** protects network communication by encrypting traffic at **Layer 3 (Network Layer).**
- Protects data transmitted between the on-premises network and AWS.
- Provides a secure communication channel over the internet.
- Enables private network communication without requiring a dedicated physical connection.

### VPN Tunnel Redundancy

An AWS Site-to-Site VPN connection provides **two VPN tunnels** for high availability.
- Each tunnel has an AWS-side endpoint in a different Availability Zone.
- If one VPN tunnel becomes unavailable, traffic can continue through the other tunnel when failover is correctly configured.
- Improves connectivity resilience between the on-premises network and AWS.

**Exam clue: Two VPN tunnels for redundancy - AWS Site-to-Site VPN**

## 16.4 Exam Focus

- **Securely connect an on-premises network to AWS - AWS Site-to-Site VPN**
- **Site-to-Site VPN underlying network - Public Internet**
- **Encrypt network traffic - IPsec**
- **IPsec encryption layer - Layer 3 (Network Layer)**
- **AWS-side VPN gateway - Virtual Private Gateway (VGW)**
- **Customer-side VPN device - Customer Gateway (CGW)**
- **Access private AWS resources from on-premises - Site-to-Site VPN**
- **Site-to-Site VPN high availability - Two VPN Tunnels**
- **VPN tunnel redundancy - Separate AWS-side tunnel endpoints**
- **Encrypted network-to-network connectivity - AWS Site-to-Site VPN**

# 17 - AWS Client VPN

## 17.1 AWS Client VPN

**AWS Client VPN** is an AWS-managed VPN service that allows individual users to **securely connect to AWS VPC resources from remote locations** over the public internet.
- Provides **client-to-network connectivity** for remote users.
- Enables users to access private AWS resources, such as **EC2 instances and databases**, using their **Private IP Addresses**.
- Uses **OpenVPN-based client software** to establish secure connections.
- Encrypts network traffic transmitted over the public internet.
- Commonly used by employees working remotely who need secure access to company resources hosted in AWS.

**Key concept**: AWS Client VPN allows an **individual workstation or device** to securely access private resources inside an AWS VPC.

## 17.2 How AWS Client VPN Works

AWS Client VPN establishes an encrypted connection between a remote user's device and an **AWS Client VPN Endpoint**.

### Connection Process

1. A remote user installs an **OpenVPN-compatible VPN client** on their workstation.
2. The client connects to an **AWS Client VPN Endpoint**.    
3. The user authenticates using a supported authentication mechanism.
4. Once authenticated and authorized, the user can securely access permitted VPC resources using their **Private IP Addresses**.

### Authentication Methods

AWS Client VPN supports authentication mechanisms such as:
- **Active Directory Authentication** - Authenticates users through directory-based credentials.
- **Certificate-Based Authentication** - Uses digital certificates to authenticate connections.

### Security and Connectivity

- VPN traffic travels over the **Public Internet**.
- Communication is **encrypted**, providing secure remote access.
- Users can access private resources without requiring those resources to have public IP addresses.

**Exam clue: Secure remote access to private AWS resources for individual employees - AWS Client VPN**

## 17.3 AWS Client VPN vs AWS Site-to-Site VPN

Both services establish secure VPN connections over the public internet, but they serve different connectivity requirements.

| Feature                     | AWS Client VPN                           | AWS Site-to-Site VPN                       |
| --------------------------- | ---------------------------------------- | ------------------------------------------ |
| **Purpose**                 | Connect individual users to AWS networks | Connect entire on-premises networks to AWS |
| **Connection Type**         | Client-to-Network                        | Network-to-Network                         |
| **Typical User**            | Remote employees                         | Corporate offices and data centers         |
| **Connectivity**            | User workstation to AWS VPC              | On-premises network to AWS VPC             |
| **VPN Technology**          | OpenVPN-based                            | IPsec                                      |
| **Underlying Network**      | Public Internet                          | Public Internet                            |
| **Encryption**              | Yes                                      | Yes                                        |
| **Private Resource Access** | Yes                                      | Yes                                        |

### When to Use Each Service

**AWS Client VPN**
- Employees working from home need access to private EC2 instances.
- Individual developers or administrators need secure remote access to AWS resources.

**AWS Site-to-Site VPN**
- A corporate data center needs secure connectivity to AWS.
- An entire branch office network needs access to private AWS resources.

**Key distinction:**
- **Connect an individual remote user to AWS - AWS Client VPN**
- **Connect an entire on-premises network to AWS - AWS Site-to-Site VPN**

## 17.4 Exam Focus

- **Secure remote access for individual users - AWS Client VPN**
- **Client-to-network VPN connectivity - AWS Client VPN**
- **Network-to-network VPN connectivity - AWS Site-to-Site VPN**
- **AWS Client VPN technology - OpenVPN-based**
- **AWS Site-to-Site VPN encryption protocol - IPsec**
- **Client VPN connection destination - AWS Client VPN Endpoint**
- **Client VPN authentication - Active Directory or Certificates**
- **VPN underlying network - Public Internet**
- **VPN traffic security - Encrypted Communication**
- **Access private EC2 instances remotely - AWS Client VPN**
- **Connect a corporate data center to AWS - AWS Site-to-Site VPN**

# 18 - AWS Direct Connect

## 18.1 AWS Direct Connect

**AWS Direct Connect** is an AWS networking service that provides a **dedicated physical network connection** between an **on-premises data center** and AWS, without routing traffic over the public internet.
- Provides **dedicated and consistent network connectivity** to AWS.
- Offers more predictable **bandwidth and latency** compared to internet-based VPN connections.
- Uses physical network connectivity rather than the public internet.
- Suitable for **business-critical applications** requiring reliable network performance.
- Can reduce **data transfer costs** for large volumes of data.

**Key concept**: AWS Direct Connect provides **dedicated private connectivity** between on-premises infrastructure and AWS.

## 18.2 How AWS Direct Connect Works

AWS provides **Direct Connect Locations** in various cities worldwide.

### Connection Architecture

1. The customer selects a nearby **AWS Direct Connect Location**.
2. A physical network connection is established between the **On-Premises Data Center** and the Direct Connect Location.
3. The Direct Connect Location connects to AWS through the **AWS Backbone Network**.
4. The customer can access AWS resources through the dedicated connection.

### AWS Direct Connect Partners

- Customers can work with **AWS Direct Connect Partners** to establish physical connectivity.
- Partners help connect customer data centers to AWS Direct Connect Locations.
- AWS manages the connectivity from the Direct Connect Location into its backbone network.

**Key concept**: Customers arrange connectivity to a Direct Connect Location, while AWS provides the network infrastructure connecting that location to AWS.

## 18.3 AWS Direct Connect Benefits

| Benefit                       | Description                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| **Dedicated Connectivity**    | Uses a dedicated network connection instead of the public internet                 |
| **Consistent Performance**    | Provides more predictable bandwidth and latency                                    |
| **High Bandwidth**            | Supports bandwidth options from 50 Mbps up to 100 Gbps, as discussed in the lesson |
| **Lower Data Transfer Costs** | Can reduce data transfer charges compared to internet-based connectivity           |
| **Hybrid Cloud Connectivity** | Connects on-premises applications with AWS resources                               |

### Common Use Cases

- **Hybrid Applications** - Applications running across on-premises infrastructure and AWS that require consistent connectivity.    
- **Large Data Transfers** - Transferring terabytes or petabytes of data between on-premises environments and AWS.
- **Business-Critical Workloads** - Applications requiring predictable network performance and lower latency variation.

**Exam clue: Dedicated connectivity with consistent bandwidth and predictable latency - AWS Direct Connect**

## 18.4 AWS Direct Connect Pricing and Provisioning

### Pricing

AWS Direct Connect has two important pricing considerations:
- **Port-Hour Charges** - Charged based on the provisioned connection capacity, even when no data is transferred.
- **Data Transfer Charges** - Data transfer out through Direct Connect can have lower per-GB charges than internet-based data transfer.

**Important**: AWS Direct Connect incurs ongoing port charges even when the connection is idle.

### Provisioning Time

Establishing AWS Direct Connect requires physical network provisioning and coordination.
- Can take approximately **1–3 months**, depending on the connection requirements.
- Requires physical connectivity and coordination with AWS or a Direct Connect Partner.
- Not suitable when immediate connectivity is required.

In comparison, **AWS Site-to-Site VPN** can generally be established much faster because it uses existing internet connectivity.

## 18.5 AWS Direct Connect vs AWS Site-to-Site VPN

Both services connect on-premises networks to AWS, but they use different connectivity methods.

| Feature            | AWS Direct Connect                                             | AWS Site-to-Site VPN                                |
| ------------------ | -------------------------------------------------------------- | --------------------------------------------------- |
| **Connection Type**    | Dedicated physical connection                                  | Encrypted VPN connection                            |
| **Underlying Network** | Dedicated connectivity through Direct Connect Location         | Public Internet                                     |
| **Encryption**         | Not encrypted by default                                       | IPsec encryption                                    |
| **Bandwidth**          | More predictable and consistent                                | Depends on internet conditions                      |
| **Latency**            | More predictable                                               | Can vary due to internet routing                    |
| **Setup Time**         | Longer; physical provisioning required                         | Faster; software-based configuration                |
| **Pricing**            | Port-hour and data transfer charges                            | VPN connection and applicable data transfer charges |
| **Typical Use Case**   | Business-critical hybrid connectivity and large data transfers | Secure on-premises connectivity with faster setup   |

### When to Use Each Service

**AWS Direct Connect**

- Requires **dedicated network connectivity**.
- Needs consistent bandwidth and predictable latency.
- Transfers large amounts of data between on-premises infrastructure and AWS.

**AWS Site-to-Site VPN**

- Requires **encrypted connectivity over the internet**.
- Needs connectivity established quickly.
- Does not require dedicated physical network infrastructure.

**Exam distinction:**

- **Dedicated private network connection - AWS Direct Connect**
- **Encrypted connection over the public internet - AWS Site-to-Site VPN**
- **Quickly establish secure hybrid connectivity - AWS Site-to-Site VPN**
- **Predictable bandwidth and lower latency variation - AWS Direct Connect**

## 18.6 Exam Focus

- **Dedicated physical connectivity to AWS - AWS Direct Connect**
- **Encrypted on-premises connectivity over public internet - AWS Site-to-Site VPN**
- **Direct Connect underlying network - Dedicated connection and AWS Backbone Network**
- **Physical connection entry point - AWS Direct Connect Location**
- **Assistance establishing physical connectivity - AWS Direct Connect Partner**
- **Consistent bandwidth and predictable latency - AWS Direct Connect**
- **Large-scale data transfer cost optimization - AWS Direct Connect**
- **Direct Connect pricing - Port-Hour Charges + Data Transfer Charges**
- **Port charges when idle - Still applicable**
- **Direct Connect setup - Requires physical provisioning**
- **Urgent hybrid network connectivity - AWS Site-to-Site VPN**
- **Business-critical hybrid applications - AWS Direct Connect**
- **Direct Connect encryption - Not encrypted by default**

# 19 - Section Summary

## 19.1 Amazon VPC and Network Architecture

**Amazon Virtual Private Cloud (Amazon VPC)** provides a **logically isolated virtual network** within an AWS Region.

### Core VPC Components

| Component                  | Purpose                                                           |
| -------------------------- | ----------------------------------------------------------------- |
| **Amazon VPC**             | Creates an isolated virtual network within an AWS Region          |
| **CIDR Block**             | Defines the private IP address range of a VPC or subnet           |
| **Subnet**                 | Smaller network within a VPC, bound to a single Availability Zone |
| **Route Table**            | Controls where network traffic is directed                        |
| **Internet Gateway (IGW)** | Enables connectivity between a VPC and the internet               |
| **NAT Gateway**            | Provides outbound internet access for private resources           |

### Public vs Private Subnets

- **Public Subnet** - Has a route to an Internet Gateway.
- **Private Subnet** - Does not have a direct route to an Internet Gateway.
- **NAT Gateway** - Allows private resources to initiate outbound internet connections.

### Highly Available Web Application

A typical multi-AZ architecture includes:
- **Public Subnets** - Application Load Balancer and NAT Gateways.
- **Private Application Subnets** - EC2 application servers.
- **Private Database Subnets** - Primary and secondary databases.
- **Multiple Availability Zones** - Improve availability and fault tolerance.
- **NAT Gateways across AZs** - Provide highly available outbound internet connectivity.

## 19.2 AWS Private Connectivity Options

### Connectivity to AWS Services

| Service                    | Purpose                                                                        | Exam Clue                                         |
| -------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| **Gateway VPC Endpoint**   | Private access to Amazon S3 and DynamoDB                                       | S3/DynamoDB connectivity without endpoint charges |
| **Interface VPC Endpoint** | Private access to supported AWS services                                       | Private access to SQS, SNS, Lambda, etc.          |
| **AWS PrivateLink**        | Private connectivity to supported services, including customer-hosted services | Access another customer's service privately       |

**Key distinction**: VPC Endpoints enable private access to supported AWS services without requiring a NAT Gateway or Internet Gateway.

### Network-to-Network Connectivity

| Service                  | Purpose                                                                            | Exam Clue                                      |
| ------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| **VPC Peering**          | Direct private connection between two VPCs                                         | One-to-one VPC connectivity                    |
| **AWS Transit Gateway**  | Centralized routing between thousands of VPCs and on-premises networks             | Hub-and-Spoke architecture                     |
| **AWS Site-to-Site VPN** | Encrypted connectivity between on-premises networks and AWS                        | IPsec VPN over public internet                 |
| **AWS Client VPN**       | Secure remote access for individual users                                          | Work-from-home access to private AWS resources |
| **AWS Direct Connect**   | Dedicated physical network connectivity between on-premises infrastructure and AWS | Predictable bandwidth and latency              |

### Important Connectivity Distinctions

- **VPC Peering** - Requires non-overlapping CIDR blocks and does not support transitive routing.
- **AWS Transit Gateway** - Regional networking hub that supports connectivity across multiple VPCs and on-premises networks.
- **AWS Site-to-Site VPN** - Uses two encrypted IPsec tunnels for high availability.
- **AWS Client VPN** - Connects individual remote devices to private AWS resources.
- **AWS Direct Connect** - Uses dedicated physical connectivity instead of the public internet.

## 19.3 Exam Focus

- **Isolated virtual network - Amazon VPC**
- **Public internet connectivity - Internet Gateway**
- **Outbound internet access for private subnets - NAT Gateway**
- **High availability - Multiple Availability Zones**
- **Distribute web application traffic - Application Load Balancer**
- **Private connectivity to S3 and DynamoDB - Gateway VPC Endpoint**
- **Private connectivity to supported AWS services - Interface VPC Endpoint**
- **Private access to customer-hosted services - AWS PrivateLink**
- **Connect two VPCs privately - VPC Peering**
- **VPC Peering limitations - Non-overlapping CIDRs and non-transitive routing**
- **Connect thousands of VPCs - AWS Transit Gateway**
- **Hub-and-Spoke networking - AWS Transit Gateway**
- **Connect on-premises networks securely over the internet - AWS Site-to-Site VPN**
- **Site-to-Site VPN encryption - IPsec**
- **Remote employee access to private AWS resources - AWS Client VPN**
- **Dedicated connectivity with predictable network performance - AWS Direct Connect**
- **Large data transfers between on-premises and AWS - AWS Direct Connect**

# 20 - Quiz

## 20.1 Practice Question

### Original Question

You have built a solution where your application server is deployed on an EC2 instance. This instance is inside a **Private Subnet** and accesses an **Amazon S3 bucket** in the same Region over the internet via a **NAT Gateway**.

There is huge data upload and download activity, increasing your monthly costs, mostly due to NAT Gateway data processing charges.

What change would you make to **decrease costs while maintaining application security**?

### Choices

A. Move the EC2 instance to the Public Subnet so it can access S3 directly, avoiding NAT Gateway data processing costs.
B. Set up a VPN connection between the VPC and S3 to access the bucket privately.
C. Create a VPC Endpoint for S3 and use it to connect to S3 from the EC2 instance.
D. Set up Amazon CloudFront and access the S3 bucket through CloudFront.

### Correct Answer

**C. Create a VPC Endpoint for S3 and use it to connect to S3 from the EC2 instance.**

### Why?

**A Gateway VPC Endpoint** enables private connectivity between resources in a VPC and **Amazon S3** without using a NAT Gateway or Internet Gateway.
- Avoids **NAT Gateway data processing charges** for S3 traffic.
- Keeps the EC2 instance in a **Private Subnet**.
- Gateway VPC Endpoints for S3 have **no additional endpoint usage charges**.

- **Why not A**? Moving EC2 to a public subnet unnecessarily increases exposure to the internet.
- **Why not B**? A VPN is not required for private access to S3 from a VPC.
- **Why not D**? CloudFront is primarily a content delivery service, not the appropriate solution for this private connectivity requirement.

## 20.2 Practice Question

### Original Question

Your company requires a **dedicated, high-bandwidth connection** between your on-premises data center and AWS.

You also want to ensure the connection is private and does not traverse the public internet.

Which AWS service would you use?

### Choices

A. VPC Peering
B. AWS Direct Connect
C. AWS Site-to-Site VPN
D. Elastic Load Balancer

### Correct Answer

**B. AWS Direct Connect**

### Why?

**AWS Direct Connect** provides dedicated network connectivity between on-premises infrastructure and AWS without traversing the public internet.
- Provides more **consistent bandwidth and predictable latency**.
- Uses dedicated physical connectivity.
- Suitable for business-critical hybrid applications and high-volume data transfers.

- **Why not AWS Site-to-Site VPN**? It provides encrypted connectivity but uses the **public internet**.
- **Why not VPC Peering**? It connects two VPCs, not an on-premises data center directly to AWS.

## 20.3 Practice Question

### Original Question

Your organization operates multiple VPCs in different Regions, and you need to create a **Hub-and-Spoke Model** for secure and efficient inter-VPC communication.

You also need to connect your on-premises network to AWS.

Which AWS service would simplify connectivity between multiple VPCs and your on-premises network?

### Choices

A. VPC Peering
B. AWS Direct Connect
C. Transit Gateway
D. VPN Gateway

### Correct Answer

**C. Transit Gateway**

### Why?

**AWS Transit Gateway** acts as a **centralized network router** that connects multiple VPCs and on-premises networks.
- Supports **Hub-and-Spoke Architecture**.
- Simplifies large-scale VPC connectivity.
- Supports on-premises connectivity through VPN or Direct Connect.
- Supports cross-Region networking through **Inter-Region Transit Gateway Peering**.

- **Why not VPC Peering**? It uses one-to-one connections and is less suitable for large-scale networking.
- **Why not Direct Connect**? It provides dedicated hybrid connectivity but does not independently provide the centralized VPC routing architecture.

## 20.4 Practice Question

### Original Question

There are two VPCs in the same AWS Region: **VPC-A** and **VPC-B**.

VPC-A has an application that needs to access a database in VPC-B. Both VPCs use **non-overlapping IP address ranges**.

You want to enable communication between VPC-A and VPC-B.

Which option is the simplest and most cost-efficient solution?

### Choices

A. Set up an AWS Direct Connect connection between both VPCs.
B. Create a Transit Gateway and connect both VPCs to the same Transit Gateway.
C. Set up a VPC Peering connection between both VPCs.
D. Set up an AWS Site-to-Site VPN connection between both VPCs.

### Correct Answer

**C. Set up a VPC Peering connection between both VPCs.**

### Why?

**VPC Peering** provides direct private connectivity between two VPCs using their private IP addresses.
- Supports VPCs within the same Region.
- Requires **non-overlapping CIDR blocks**.
- Provides **simple one-to-one connectivity**.

- **Why not Transit Gateway**? It is more appropriate when connecting many VPCs through a centralized network hub, adding unnecessary complexity and costs for just two VPCs.

**Exam clue: Simple private communication between two VPCs - VPC Peering**

## 20.5 Practice Question

### Original Question

You have launched an EC2 instance in a VPC.

You ensured that the instance has a **Public IP Address**, but you still cannot connect to the instance over the internet.

What could be a potential reason?

### Choices

A. The instance is launched in a Public Subnet; it should be in a Private Subnet.
B. The Security Group allows source `0.0.0.0/0`, but it should be `0.0.0.0/32`.
C. The instance has a Public IP; it should have only a Private IP.
D. The instance is launched in a Private Subnet; it should be in a Public Subnet.

### Correct Answer

**D. The instance is launched in a Private Subnet; it should be in a Public Subnet.**

### Why?

For an EC2 instance to be directly accessible from the internet, it generally requires:
- A **Public IPv4 Address**.
- A **Public Subnet** with a route to an **Internet Gateway**.
- Appropriate **Security Group and Network ACL rules**.

A Public IP alone does not provide internet connectivity if the subnet's route table lacks an Internet Gateway route.

- **Why not B**? `0.0.0.0/0` allows traffic from all IPv4 addresses, while `0.0.0.0/32` refers to only one address.

**Exam clue: EC2 has a Public IP but is unreachable from the internet - Check subnet routing and security configuration.**

## 20.6 Practice Question

### Original Question

What is the purpose of a **NAT Gateway** in a VPC?

### Choices

A. Allow resources in private subnets to access the internet.
B. Allow resources in public subnets to access the internet.
C. Provide an internal DNS service for the VPC.
D. Encrypt data between private and public subnets.

### Correct Answer

**A. Allow resources in private subnets to access the internet.**

### Why?

A **NAT Gateway** enables resources in **Private Subnets** to initiate outbound internet connections while preventing unsolicited inbound connections from the internet.

Common use cases include:
- Downloading software packages and updates.
- Accessing external APIs from private application servers.

- **Why not B**? Public subnet resources can use an **Internet Gateway** for direct internet connectivity.
- **Why not C**? NAT Gateway does not provide DNS services.
- **Why not D**? NAT Gateway performs network address translation, not encryption.

## 20.7 Practice Question

### Original Question

You are required to secure traffic between your **AWS VPC** and your **on-premises network**.

It has been advised that the traffic should be **encrypted (data in transit).**

Which AWS service would you recommend?

### Choices

A. AWS Direct Connect
B. AWS Site-to-Site VPN
C. AWS Client-to-Site VPN
D. Amazon Route 53

### Correct Answer

**B. AWS Site-to-Site VPN**

### Why?

**AWS Site-to-Site VPN** provides an encrypted connection between an on-premises network and an AWS VPC.
- Uses **IPsec encryption**.
- Traffic travels over the **public internet** but remains encrypted.
- Provides **two VPN tunnels** for high availability.

- **Why not Direct Connect**? It provides dedicated physical connectivity but is **not encrypted by default**.
- **Why not Client VPN**? AWS Client VPN is designed for individual remote users rather than connecting entire networks.

**Exam clue: Encrypted network-to-network connectivity - AWS Site-to-Site VPN**

## 20.8 Practice Question

### Original Question

Which of the following private IPv4 ranges (CIDR) can you use for an **Amazon VPC**?

### Choices

A. `10.0.0.0/8`
B. `172.16.0.0/14`
C. `192.168.0.0/16`
D. `10.10.0.0/12`

### Correct Answer

**C. `192.168.0.0/16`**

### Why?

Amazon VPC supports IPv4 CIDR block sizes from `/16` to `/28`.
- `/16` is the largest supported IPv4 VPC CIDR block size.
- A `/16` block contains **65,536 total IP addresses**.
- Options A, B, and D have prefixes smaller than `/16`, so their CIDR blocks are too large for an AWS VPC.

### RFC 1918 Private IPv4 Ranges

| Private CIDR Range | Description                |
| ------------------ | -------------------------- |
| `10.0.0.0/8`       | Private IPv4 address space |
| `172.16.0.0/12`    | Private IPv4 address space |
| `192.168.0.0/16`   | Private IPv4 address space |

**Important distinction**: RFC 1918 defines the overall private IPv4 ranges, but an AWS VPC's IPv4 CIDR block must satisfy AWS's supported prefix limits.

## 20.9 Practice Question

### Original Question

What is the primary purpose of a **Route Table** in a VPC?

### Choices

A. Host the DNS service for the VPC.
B. Specify the firewall rules for inbound and outbound traffic.
C. Connect the VPC to the on-premises network.
D. Control the traffic between subnets and other networks.

### Correct Answer

**D. Control the traffic between subnets and other networks.**

### Why?

A **Route Table** contains routing rules that determine where network traffic is directed.
- **Local Route** - Enables routing within the VPC.
- **Internet Gateway Route** - Directs traffic toward the internet.
- **NAT Gateway Route** - Directs outbound internet traffic from private subnets through a NAT Gateway.

- **Why not B**? Firewall rules are configured using **Security Groups** and **Network ACLs**, not Route Tables.
- **Why not C**? Route Tables help direct traffic, but connecting an on-premises network requires additional networking services such as VPN or Direct Connect.

**Exam clue: Determine where network packets are routed - VPC Route Table**

## 20.10 Practice Question

### Original Question

What is the primary purpose of using the **Amazon VPC** service?

### Choices

A. Provide a secure, isolated private network in the cloud.
B. Distribute content globally with low latency.
C. Launch virtual servers on physical hardware.
D. Store large-scale unstructured data.

### Correct Answer

**A. Provide a secure, isolated private network in the cloud.**

### Why?

**Amazon Virtual Private Cloud (Amazon VPC)** provides a logically isolated virtual network within the AWS Cloud.

It allows customers to configure:
- **Private IP Address Ranges (CIDR)**
- **Subnets**
- **Route Tables**
- **Internet Gateways**
- **Network Security Controls**

### Understanding the Other Options

| Option | Corresponding AWS Service | Purpose                                  |
| ------ | ------------------------- | ---------------------------------------- |
| B      | **Amazon CloudFront**     | Global content delivery with low latency |
| C      | **Amazon EC2**            | Virtual compute instances                |
| D      | **Amazon S3**             | Scalable object storage                  |

**Exam clue: Create a logically isolated virtual network in AWS - Amazon VPC**

## 20.11 Exam Focus

### Key Service Associations

| Exam Scenario                                      | Correct AWS Service                          |
| -------------------------------------------------- | -------------------------------------------- |
| Private S3 access without NAT processing charges   | **Gateway VPC Endpoint**                         |
| Dedicated, high-bandwidth on-premises connectivity | **AWS Direct Connect**                           |
| Centralized Hub-and-Spoke networking               | **AWS Transit Gateway**                          |
| Private connectivity between two VPCs              | **VPC Peering**                                  |
| Direct internet access for EC2                     | **Public Subnet + Public IP + Internet Gateway** |
| Outbound internet access for private EC2           | **NAT Gateway**                                  |
| Encrypted on-premises network connectivity         | **AWS Site-to-Site VPN**                         |
| Define a VPC's IPv4 address range                  | **CIDR Block**                                   |
| Control network traffic routing                    | **Route Table**                                  |
| Create an isolated virtual network                 | **Amazon VPC**                                   |

### Important Exam Distinctions

- **Gateway VPC Endpoint vs NAT Gateway** - Private S3/DynamoDB access vs outbound internet access.
- **VPC Peering vs Transit Gateway** - One-to-one connectivity vs centralized multi-VPC connectivity.
- **Direct Connect vs Site-to-Site VPN** - Dedicated physical connection vs encrypted connection over the public internet.
- **Public vs Private Subnet** - Internet Gateway route vs no direct Internet Gateway route.
- **Route Table vs Security Group** - Routing decisions vs traffic permission rules.
- **Private IPv4 addressing** - RFC 1918
- **AWS VPC IPv4 CIDR size** - `/16` to `/28`