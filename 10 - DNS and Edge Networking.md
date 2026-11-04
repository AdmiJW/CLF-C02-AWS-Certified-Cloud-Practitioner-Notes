# 1 - Introduction to DNS and Edge Networking

## 1.1 Introduction to DNS (Domain Name System)

**Domain Name System (DNS)** translates **domain names into IP addresses**, allowing users to access applications using readable names instead of IP addresses.

AWS applications can be deployed across one or multiple **AWS Regions** using services such as:
- **Amazon EC2** - Hosting applications on virtual servers.
- **Amazon S3** - Hosting static websites.
- **Elastic Load Balancing (ELB)** - Distributing application traffic across multiple targets.

### How DNS Works

1. A user accesses an application using a domain name, such as `us.myapp.com`.
2. The user's device performs a **DNS query** to resolve the domain name.
3. The DNS system returns the corresponding **IP address**.
4. The user's device uses that IP address to connect to the application endpoint.

**Key distinction:**

- **DNS Resolution** - Translates a domain name into an IP address.
- **Application Communication** - The user connects to the application endpoint using the resolved IP address.

DNS helps users locate application endpoints but does not carry the actual application traffic.

### Amazon Route 53

**Amazon Route 53** is AWS's **DNS web service**.
- Used to resolve domain names and direct users to application endpoints.
- Helps users access applications deployed in different AWS Regions.

**Exam clue: DNS and domain name resolution - Amazon Route 53**

## 1.2 Introduction to AWS Edge Networking

**AWS Edge Networking** helps optimize network connectivity between globally distributed users and applications hosted in AWS Regions.

### Network Latency

**Network latency** refers to the delay experienced when data travels between two locations.

For example:
- A user is located in India.
- The application is deployed in a US AWS Region.
- The geographic distance can result in higher network latency.

### AWS Edge Locations and Backbone Network

AWS uses **Edge Locations** and its **global backbone network** to help optimize network performance.
- **Edge Locations** - AWS infrastructure located closer to users for delivering networking and edge services.
- **AWS Backbone Network** - AWS's global network infrastructure used to carry traffic between AWS locations.
- **Network Optimization** - Helps reduce reliance on long-distance public internet paths and improve application performance.

**Key concept**: Edge networking helps improve connectivity for users accessing applications hosted in geographically distant AWS Regions.

## 1.3 AWS DNS and Edge Networking Services

| AWS Service                     | Primary Purpose                                                    | Exam Keyword                   |
| ------------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| **Amazon Route 53**                 | DNS and domain name resolution                                     | DNS, domain routing            |
| **Amazon CloudFront**               | Content delivery using AWS edge networking                         | Content delivery, low latency  |
| **AWS Global Accelerator**          | Optimizes network paths to applications using AWS's global network | Global application performance |
| **Amazon S3 Transfer Acceleration** | Accelerates file transfers to and from Amazon S3                   | Faster S3 transfers            |

### Key Service Distinction

- **Amazon Route 53** focuses on **DNS resolution and directing users to application endpoints**.
- **Amazon CloudFront, AWS Global Accelerator, and S3 Transfer Acceleration** use AWS edge networking capabilities to improve performance for their respective use cases.

## 1.4 Exam Focus

- **Translate domain names into IP addresses - DNS**
- **AWS managed DNS service - Amazon Route 53**
- **Reduce content delivery latency - Amazon CloudFront**
- **Optimize global application network performance - AWS Global Accelerator**
- **Accelerate file transfers to Amazon S3 - S3 Transfer Acceleration**
- **AWS infrastructure closer to users - Edge Locations**
- **Global AWS network infrastructure - AWS Backbone Network**
- **Geographic distance can increase network latency**
- **DNS resolves application addresses; application traffic is handled separately**

# 2 - DNS Basics

## 2.1 DNS (Domain Name System) Fundamentals

**Domain Name System (DNS)** translates human-readable domain names into machine-readable **IP addresses**.

For example:
- **Domain Name**: `www.example.com`
- **IP Address**: `192.0.2.1` (example)

DNS allows users to access websites without remembering their IP addresses.

### Basic DNS Resolution

1. A user enters `www.example.com` into a web browser.
2. The browser requests the corresponding IP address from a **DNS server**.
3. The DNS server returns the IP address associated with the domain name.
4. The browser uses the IP address to connect to the web server.

DNS is considered a fundamental component of the internet because it enables **domain name resolution**.

## 2.2 DNS Terminology

| Term                                   | Description                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------- |
| **Domain Registrar**                   | Organization that allows users to register and purchase domain names.               |
| **DNS Records**                        | Entries that define how domain names resolve to IP addresses or other domain names. |
| **Zone File**                          | Contains DNS records associated with a DNS zone.                                    |
| **Name Server**                        | DNS server responsible for answering DNS queries for domain names.                  |
| **Time to Live (TTL)**                 | Defines how long a DNS record can be cached before it must be refreshed.            |
| **Fully Qualified Domain Name (FQDN)** | Complete domain name identifying a specific location within the DNS hierarchy.      |

### Domain Registrar

A **Domain Registrar** allows users to register domain names, typically by paying an **annual registration fee**.

Examples include:
- **Amazon Route 53**
- GoDaddy
- Namecheap
- Domain.com

**Amazon Route 53** can function as both a **domain registrar** and a **DNS service**.

### DNS Record Types

DNS records define how domain names should be resolved.

| Record Type | Purpose                                                   | Example                                    |
| ----------- | --------------------------------------------------------- | ------------------------------------------ |
| **A**       | Maps a domain name to an IPv4 address.                    | `example.com` to `192.0.2.1`               |
| **AAAA**    | Maps a domain name to an IPv6 address.                    | `example.com` to `2001:db8::1`             |
| **CNAME**   | Maps one domain name to another domain name.              | `www.example.com` to `example.com`         |
| **NS**      | Identifies the authoritative name servers for a DNS zone. | Name servers responsible for `example.com` |

**Key distinction:**
- **A Record - IPv4 address**
- **AAAA Record - IPv6 address**
- **CNAME Record - Another domain name**
- **NS Record - Authoritative name servers**

## 2.3 DNS Domain Hierarchy

DNS uses a **hierarchical naming structure**, starting from the root domain.

### DNS Hierarchy Components

- **Root Domain (`.`)** - Highest level of the DNS hierarchy, represented by a trailing dot.
- **Top-Level Domain (TLD)** - Examples include `.com`, `.org`, `.net`, `.uk`, `.in`, and `.io`.
- **Second-Level Domain (SLD)** - The registered domain name, such as `example` in `example.com`.
- **Subdomain** - Additional name under a registered domain, such as `www` in `www.example.com`.

### FQDN vs URL

**Fully Qualified Domain Name (FQDN)** identifies a domain's complete location in the DNS hierarchy.

Example: `www.example.com.`

**Uniform Resource Locator (URL)** specifies the address used to access a resource.

Example: `https://www.example.com`
- `https://` - Protocol
- `www` - Subdomain
- `example` - Second-level domain
- `.com` - Top-level domain
- `.` - DNS root (typically omitted)

**Key distinction**: An **FQDN** identifies a domain name, while a **URL** specifies how to access a resource.

## 2.4 DNS Resolution Process

When a user accesses a website, DNS resolution involves several DNS servers.

### Step-by-Step Resolution

1. **Local DNS Server (DNS Resolver)**
	- The browser requests the IP address for `example.com`.
	- The local DNS resolver checks its cached records.
	- If a valid cached record exists, it immediately returns the IP address.

2. **Root DNS Server**
	- If the record is not cached, the resolver contacts a root DNS server.
	- The root server directs the resolver to the appropriate **TLD name servers**.

3. **TLD DNS Server**
	- The resolver queries the `.com` TLD name server.
	- The TLD name server identifies the **authoritative name servers** responsible for `example.com`.

4. **Authoritative DNS Server**
	- The resolver queries the authoritative name server.
	- The authoritative server retrieves the appropriate DNS record and returns the IP address.

5. **DNS Caching**
	- The local DNS resolver caches the response according to its **TTL**.
	- The response is returned to the client, which may also cache it.

6. **Application Connection**
	- The browser uses the resolved IP address to establish a connection with the web server.

### DNS Caching and TTL

**DNS Caching** improves DNS resolution performance by temporarily storing previously resolved domain names and IP addresses.

**Time to Live (TTL)** determines how long cached DNS records remain valid.
- **Cache Hit** - The DNS resolver already has a valid cached record and returns it without querying other DNS servers.
- **Cache Miss** - The resolver must perform DNS resolution to retrieve the record.
- **TTL Expiration** - Cached information must be refreshed before it can be reused.

**Key benefit**: DNS caching reduces repeated DNS lookups and improves response times.

## 2.5 Exam Focus

- **Translate domain names into IP addresses - DNS**
- **AWS DNS service and domain registrar - Amazon Route 53**
- **Register and purchase domain names - Domain Registrar**
- **Store DNS configuration records - Zone File**
- **IPv4 address mapping - A Record**
- **IPv6 address mapping - AAAA Record**
- **Domain name alias - CNAME Record**
- **Identify authoritative name servers - NS Record**
- **Control DNS cache duration - TTL**
- **Highest level of DNS hierarchy - Root Domain (`.`)**
- **Domain suffix such as `.com` or `.org` - TLD**
- **Complete domain name - FQDN**
- **DNS resolution hierarchy - Local Resolver, Root Server, TLD Server, Authoritative Server**
- **Reduce repeated DNS queries - DNS Caching**

# 3 - Amazon Route 53

## 3.1 Amazon Route 53 Overview

**Amazon Route 53** is a **highly available, scalable, and fully managed global DNS (Domain Name System) service** provided by AWS.

It allows users to access applications using **domain names** instead of IP addresses.

### Key Features

- **Fully Managed DNS** - AWS manages the DNS infrastructure.    
- **High Availability** - Designed to provide reliable DNS resolution.
- **Scalability** - Supports DNS queries for applications of different sizes.
- **Domain Registration** - Allows users to purchase and register domain names.
- **DNS Management** - Supports DNS records through hosted zones.
- **Health Checks** - Monitors application endpoint health and can direct users toward healthy resources.

### Service Level Agreement (SLA)

Amazon Route 53 provides a **100% availability SLA for its authoritative DNS service**.
- DNS is critical for users to locate and access applications.
- High DNS availability helps ensure applications remain accessible through their domain names.

**Exam clue: Highly available, fully managed global DNS service - Amazon Route 53**

## 3.2 Amazon Route 53 Hosted Zones and DNS Records

A **Hosted Zone** is a container for DNS records that define how Amazon Route 53 should respond to DNS queries for a domain.

### How Route 53 Works

1. Deploy an application using AWS services such as:
    - **Amazon EC2** - Application running on a virtual server.
    - **Elastic Load Balancing (ELB)** - Application accessed through a load balancer.
    - **Amazon S3** - Static website hosting.
2. Create a **Hosted Zone** in Amazon Route 53.
3. Configure **DNS records** that associate a domain name with the application endpoint.
4. When a user accesses the domain, Route 53 provides the appropriate DNS response.
5. The user connects to the application endpoint using the resolved address.

### Example

An application is deployed on an EC2 instance with a public IP address.

| Component             | Example                                       |
| --------------------- | --------------------------------------------- |
| **Domain Name**       | `example.com`                                 |
| **Application**       | Amazon EC2 instance                           |
| **Public IP Address** | `192.0.2.1`                                   |
| **DNS Service**       | Amazon Route 53                               |
| **DNS Configuration** | A record mapping `example.com` to `192.0.2.1` |

**Key concept**: Route 53 resolves the domain name to the application's IP address; it does not host the application itself.

## 3.3 Amazon Route 53 Health Checks

**Amazon Route 53 Health Checks** monitor the health and availability of application endpoints.
- Route 53 can periodically check whether an application endpoint is healthy.
- Health checks can help prevent DNS responses from directing users to unhealthy resources.
- When configured with appropriate DNS routing, Route 53 can direct users toward **healthy application endpoints**.

### Example Scenario

An application has multiple servers:
- **Server A** - Healthy
- **Server B** - Unhealthy

With **Route 53 health checks** and health-aware routing configured, Route 53 can direct users toward Server A instead of Server B.

**Exam clue: DNS-based routing to healthy application endpoints - Amazon Route 53 Health Checks**

## 3.4 Amazon Route 53 Key Facts

- **Global Service** - Route 53 provides DNS capabilities for applications accessed worldwide.
- **Domain Registrar** - Route 53 can register domain names.
- **Hosted Zones** - Store and manage DNS records for domains.
- **Health Checks** - Help detect unhealthy application endpoints.
- **DNS Port 53** - DNS commonly uses port 53, which is the origin of the Route 53 service name.

## 3.5 Exam Focus

- **Fully managed global DNS service - Amazon Route 53**
- **Highly available and scalable DNS - Amazon Route 53**
- **Register domain names - Amazon Route 53**
- **Manage domain DNS records - Route 53 Hosted Zones**
- **Translate domain names into IP addresses - DNS Resolution**
- **Monitor application endpoint health - Route 53 Health Checks**
- **Direct users toward healthy endpoints - Route 53 health-aware routing**
- **100% authoritative DNS availability SLA - Amazon Route 53**
- **Standard DNS port - Port 53**
- **DNS resolution, not application hosting - Amazon Route 53**

# 4 - Route 53 Hosted Zones

## 4.1 Amazon Route 53 Hosted Zones

A **Hosted Zone** in **Amazon Route 53** is a container for **DNS records** that define how domain names should be resolved.
- Similar to a traditional DNS zone file.
- Contains DNS records that map domain names to **IP addresses** or **other DNS names**.
- Supports DNS resolution for both public applications and private resources within an **Amazon VPC**.

There are two types of hosted zones:
1. **Public Hosted Zone**
2. **Private Hosted Zone**

## 4.2 Public vs Private Hosted Zones

### Public Hosted Zone

A **Public Hosted Zone** is used to manage DNS records for domain names that need to be resolved over the **public internet**.
- Supports DNS resolution for publicly accessible applications.
- Commonly used for websites and public application endpoints.
- Requires a domain name you own or control for normal public DNS usage.

**Example:**

An application is deployed on an **Amazon EC2 instance** with a public IP address.
- Domain: `www.example.com`
- Public IP: `192.0.2.1`
- Route 53 resolves the domain name to the public IP address.
- The client connects to the EC2 application over the internet.

**Exam clue: Resolve domain names for public websites and applications - Public Hosted Zone**

### Private Hosted Zone

A **Private Hosted Zone** is used for DNS resolution **within associated Amazon VPCs**.
- Allows private resources to communicate using DNS names.
- Must be associated with a **VPC**.
- DNS records can map domain names to **private IP addresses**.
- Does not require purchasing or owning a publicly registered domain name.

**Example:**

A VPC contains two EC2 instances:

| Resource           | Private DNS Name | Purpose               |
| ------------------ | ---------------- | --------------------- |
| Application Server | `app.myapp.com`  | Hosts the application |
| Database Server    | `db.myapp.com`   | Hosts the database    |

When the application server needs to connect to the database server:

1. The application server queries `db.myapp.com`.
2. Route 53 resolves the name using the **Private Hosted Zone** associated with the VPC.
3. The private IP address of the database server is returned.
4. The application server connects to the database server using that IP address.

**Key concept**: Private hosted zones allow internal resources to communicate using DNS names without requiring public DNS resolution.

### Public vs Private Hosted Zone Comparison

| Feature              | Public Hosted Zone                    | Private Hosted Zone                       |
| -------------------- | ------------------------------------- | ----------------------------------------- |
| **DNS Resolution**   | Public internet                       | Associated VPCs                           |
| **Typical Use Case** | Public websites and applications      | Internal application communication        |
| **Domain Ownership** | Requires control of the public domain | Public domain registration not required   |
| **VPC Association**  | Not required                          | Required                                  |
| **Example**          | Public EC2 website                    | Internal application and database servers |

**Important**: A private hosted zone can use a domain name that is not publicly registered. However, using domains owned by others, such as `google.com`, is generally not recommended because it can cause DNS conflicts within the VPC.

## 4.3 Route 53 DNS Record Types

After creating a hosted zone, you configure **DNS records** to define how domain names resolve.

### Common DNS Record Types

| Record Type | Purpose                                                                                                       | Typical Use Case                        |
| ----------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **A**       | Maps a domain name to an IPv4 address                                                                         | EC2 instance with IPv4                  |
| **AAAA**    | Maps a domain name to an IPv6 address                                                                         | EC2 instance with IPv6                  |
| **CNAME**   | Maps one domain name to another domain name                                                                   | Subdomain pointing to another DNS name  |
| **Alias**   | Route 53-specific record feature that maps a domain name to supported AWS resources or other Route 53 records | Domain pointing to an AWS load balancer |

### CNAME vs Alias Records

Many managed AWS services provide a **DNS name** rather than a fixed IP address.

For example:
- **Elastic Load Balancing (ELB)**
- **Amazon API Gateway**
- **Amazon S3 website endpoints**

When directing your domain name to supported AWS resources, you can use **CNAME** or **Alias** records, depending on the situation.

#### CNAME Record

- Maps one domain name to another DNS name.
- Commonly used for **subdomains**.
- Cannot be used at the **zone apex (root domain).**

**Example:**

`api.example.com` points to a load balancer's DNS name.

#### Alias Record

- An **Amazon Route 53-specific** DNS record feature.
- Can point domain names to supported AWS resources, such as load balancers.
- Supports the **zone apex (root domain).**
- Can also be used for subdomains.

**Example:**

`example.com` points to an AWS load balancer using an **Alias record**.

### CNAME vs Alias Comparison

| Feature                           | CNAME                                          | Alias                                        |
| --------------------------------- | ---------------------------------------------- | -------------------------------------------- |
| **Type**                          | Standard DNS record                            | Route 53-specific feature                    |
| **Points To**                     | Another DNS name                               | Supported AWS resources or Route 53 records  |
| **Root Domain (`example.com`)**   | Not supported                                  | Supported                                    |
| **Subdomain (`api.example.com`)** | Supported                                      | Supported                                    |
| **Typical AWS Use Case**          | Subdomain pointing to a load balancer DNS name | Root domain pointing to an AWS load balancer |

**Key distinction:**
- **Root domain pointing to a supported AWS resource - Alias Record**
- **Subdomain pointing to another DNS name - CNAME Record**
- **Domain pointing directly to an IPv4 address - A Record**
- **Domain pointing directly to an IPv6 address - AAAA Record**

## 4.4 Exam Focus

- **Container for DNS records - Route 53 Hosted Zone**
- **Public internet DNS resolution - Public Hosted Zone**
- **Internal VPC DNS resolution - Private Hosted Zone**
- **Private Hosted Zone must be associated with a VPC**
- **Private Hosted Zone does not require public domain registration**
- **Map domain to IPv4 - A Record**
- **Map domain to IPv6 - AAAA Record**
- **Map subdomain to another DNS name - CNAME Record**
- **Route 53-specific record feature - Alias**
- **Root domain pointing to an AWS load balancer - Alias Record**
- **CNAME cannot be used at the zone apex (root domain)**
- **Alias records support both root domains and subdomains**

# 5 - \[Exercise] - Website with Custom Domain Name

## 5.1 Hosting a Website with a Custom Domain Name

**Amazon Route 53** allows users to access applications hosted on AWS using a **custom domain name** instead of a public IP address.

### Example Architecture

- **Amazon EC2** - Hosts the website using an HTTP web server.
- **Public IP Address** - Allows users to access the website over the internet.
- **Amazon Route 53 Public Hosted Zone** - Manages DNS records for the custom domain.
- **A Record** - Maps the custom domain name to the EC2 instance's public IPv4 address.

### DNS Resolution Flow

1. A user enters `www.example.com` into a browser.
2. The DNS resolver queries **Amazon Route 53**.
3. Route 53 returns the **public IP address** of the EC2 instance.
4. The browser connects to the EC2 instance using **HTTP (Port 80).**
5. The website is displayed.

**Key concept**: Route 53 provides DNS resolution, while EC2 hosts and serves the actual website.

## 5.2 Configuring Route 53 for a Custom Domain

### Prerequisites

To use a custom domain with Route 53:
- Register a domain name using **Amazon Route 53** or another domain registrar.
- Create a **Public Hosted Zone** in Route 53.
- Configure the domain to use Route 53's **authoritative name servers**.

### Domain Registrar and Name Server Configuration

When a **Public Hosted Zone** is created, Route 53 automatically generates **four name servers (NS records).**

If the domain is registered with a third-party registrar such as GoDaddy:
1. Create a Public Hosted Zone for the registered domain.
2. Copy the four Route 53 name servers.
3. Update the domain's name server settings at the registrar.
4. Replace the existing name servers with the Route 53 name servers.

**DNS Propagation**: Name server changes may take up to **24–48 hours** to propagate, as described in the exercise.

**Key distinction:**
- **Domain Registrar** - Manages domain registration.
- **Amazon Route 53** - Can manage DNS resolution even when the domain is registered with another provider.

## 5.3 Connecting a Custom Domain to an EC2 Website

### EC2 Website Setup

The website is hosted on an **Amazon EC2 instance**.
- Install an HTTP web server, such as **Apache HTTP Server** (`httpd`).
- Deploy a sample `index.html` webpage.
- Allow inbound **HTTP traffic on Port 80** through the EC2 security group.
- Use the EC2 instance's **public IPv4 address** to verify website accessibility.

**EC2 User Data** can automate web server installation and website deployment during instance launch.

### Route 53 A Record Configuration

Create **A records** in the Public Hosted Zone that point to the EC2 instance's public IPv4 address.

| Domain Name       | Record Type | Target          |
| ----------------- | ----------- | --------------- |
| `example.com`     | **A**           | EC2 Public IPv4 |
| `www.example.com` | **A**           | EC2 Public IPv4 |

This allows users to access the same website using either the root domain or the **www subdomain**.

**Exam clue: Map a custom domain to an EC2 public IPv4 address - Route 53 A Record**

## 5.4 Resource Cleanup and Cost Considerations

AWS resources created for the exercise may continue to incur charges.
- **Amazon EC2** - Stop or terminate the instance when it is no longer needed.
- **Route 53 A Records** - Remove records that are no longer required.
- **Route 53 Public Hosted Zone** - Delete the hosted zone if it is no longer needed.

### Route 53 Hosted Zone Pricing

- **Public Hosted Zones** incur recurring charges.
- The lecture uses **$0.50 USD per hosted zone per month** as an example.
- Actual charges depend on current AWS pricing and usage.

**Key concept**: Stopping an EC2 instance does not automatically delete the Route 53 hosted zone or eliminate its charges.

## 5.5 Exam Focus

- **Host a website on a virtual server - Amazon EC2**
- **Access an EC2 website using a custom domain - Amazon Route 53**
- **Public domain name resolution - Public Hosted Zone**
- **Map a domain to an EC2 public IPv4 address - A Record**
- **Identify authoritative DNS servers - NS Records**
- **Use Route 53 DNS with a third-party domain registrar - Update registrar name servers**
- **Allow HTTP website access - Port 80**
- **Automate EC2 initialization - EC2 User Data**
- **Root domain and www subdomain can point to the same IP address**
- **Public Hosted Zones can incur recurring charges even when EC2 instances are stopped**

# 6 - Route 53 Routing Policies

## 6.1 Amazon Route 53 Routing Policies

**Amazon Route 53 Routing Policies** determine how DNS queries are answered and which application endpoints users are directed to.

Routing policies help manage:
- **Traffic Distribution** - Distribute traffic across multiple application endpoints.
- **High Availability** - Redirect users to healthy resources when failures occur.
- **Geographic Routing** - Direct users based on their geographic location.
- **Latency Optimization** - Direct users to endpoints with lower network latency.

Route 53 supports several routing policies, each designed for different application requirements.

## 6.2 Types of Route 53 Routing Policies

### Simple Routing Policy

**Simple Routing** is the basic routing policy used to direct users to an application endpoint.
- Commonly used when an application has a single endpoint.
- Can point to resources such as **Amazon EC2**, **Application Load Balancer (ALB),** **Amazon S3**, or **Amazon CloudFront**.
- Does not provide automatic failover based on endpoint health.

Example: `www.example.com` resolves to the public IP address of an EC2 instance.

**Exam clue: Basic DNS routing to a single application endpoint - Simple Routing**

### Failover Routing Policy

**Failover Routing** supports **high availability and disaster recovery** by redirecting users to a secondary endpoint when the primary endpoint becomes unhealthy.

- Configures two endpoints:
    - **Primary** - Receives traffic during normal operation.
    - **Secondary** - Receives traffic when the primary becomes unhealthy.
- Uses **Route 53 Health Checks** to detect endpoint failures.
- Can support **cross-region failover** between AWS Regions.

Example:
- Primary application - US Region
- Secondary application - Europe Region

If the primary application becomes unhealthy, Route 53 can return the secondary application's endpoint.

**Exam clue: Automatic DNS failover and disaster recovery - Failover Routing**

### Weighted Routing Policy

**Weighted Routing** distributes DNS responses across multiple application endpoints according to configured weights.
- Allows different proportions of traffic to be directed to different endpoints.
- Useful when testing new application versions or distributing traffic unevenly.
- Higher weights receive a larger proportion of DNS responses.

**Example:**
- **Endpoint A: 10%**
- **Endpoint B: 30%**
- **Endpoint C: 60%**

**Exam clue: Distribute traffic in specified proportions across endpoints - Weighted Routing**

### Geolocation Routing Policy

**Geolocation Routing** directs users to application endpoints based on their **geographic location**.
- Can route traffic according to the location associated with the DNS query.
- Useful for applications deployed across multiple geographic locations.
- Allows different countries or geographic areas to use different application endpoints.

**Example:**

| User Location | Application Endpoint         |
| ------------- | ---------------------------- |
| United States | Application in US Region     |
| India         | Application in Mumbai Region |

**Exam clue: Route users based on their country or geographic location - Geolocation Routing**

### Latency-Based Routing Policy

**Latency-Based Routing** directs users to the AWS Region that provides the **lowest network latency** among the configured endpoints.
- Useful for globally distributed applications.
- Optimizes application responsiveness.
- Selects endpoints based on network latency rather than country boundaries.

**Example:**

An application is deployed in both the **US** and **Canada**.

A user located in the US near the Canadian border might experience lower latency when connecting to the Canada deployment.

With latency-based routing, Route 53 can direct the user to the **Canada endpoint**, even though the user is located in the US.

**Exam clue: Route users to the AWS Region with the lowest latency - Latency-Based Routing**

## 6.3 Route 53 Routing Policy Comparison

| Routing Policy    | Primary Purpose                         | Exam Scenario                                                     |
| ----------------- | --------------------------------------- | ----------------------------------------------------------------- |
| **Simple**        | Basic DNS routing                       | Direct users to a single application endpoint                     |
| **Failover**      | High availability and disaster recovery | Switch to a secondary endpoint when the primary fails             |
| **Weighted**      | Traffic distribution by weights         | Send 10% of traffic to one application version and 90% to another |
| **Geolocation**   | Geographic routing                      | Direct Indian users to an application in Mumbai                   |
| **Latency-Based** | Network latency optimization            | Direct users to the AWS Region with the lowest latency            |

### Geolocation vs Latency-Based Routing

These two policies are commonly confused.

**Geolocation Routing:**
- Makes routing decisions based on the user's geographic location.
- Useful when different geographic areas should access specific application deployments.

**Latency-Based Routing:**
- Makes routing decisions based on network latency.
- Useful when the goal is to provide the fastest-performing regional endpoint.

**Important**: The geographically closest AWS Region is not necessarily the one with the lowest network latency.

## 6.4 Exam Focus

- **Basic DNS routing - Simple Routing**
- **Automatic failover to a secondary endpoint - Failover Routing**
- **High availability and disaster recovery - Failover Routing**
- **Distribute traffic using configured percentages or weights - Weighted Routing**
- **Route traffic based on user country or geographic location - Geolocation Routing**
- **Route users to the lowest-latency AWS Region - Latency-Based Routing**
- **Detect unhealthy endpoints - Route 53 Health Checks**
- **Geolocation uses geographic location; latency-based routing uses network latency**
- **Traffic splitting or application version testing - Weighted Routing**
- **Cross-region DNS failover - Failover Routing**

# 7 - Edge Networking in AWS

## 7.1 AWS Edge Networking Overview

**AWS Edge Networking** uses the **AWS global network infrastructure (AWS Backbone Network)** to optimize connectivity between users and applications deployed in AWS Regions.

Instead of relying entirely on the **public internet**, traffic can be routed through AWS-managed network infrastructure to improve network performance.

### Key Benefits

- **Lower Latency** - Reduces network delays when accessing applications in distant AWS Regions.
- **Optimized Network Paths** - Uses AWS-managed infrastructure instead of relying entirely on public internet routing.
- **Improved Performance** - Helps provide faster and more consistent connectivity for globally distributed users.
- **Global Reach** - Supports users accessing applications deployed across different AWS Regions.

**Key concept**: AWS Edge Networking helps optimize the network path between users and AWS-hosted applications.

## 7.2 How AWS Edge Networking Works

### Without AWS Edge Networking

When users access applications deployed in distant AWS Regions:
1. A user sends a request to an application hosted in an AWS Region.
2. The request travels across the **public internet**.
3. Traffic may pass through multiple intermediate networks **(network hops).**
4. The application processes the request and sends a response.

**Disadvantage**: Public internet routing may result in longer or less predictable network paths, increasing latency.

### With AWS Edge Networking

AWS uses **Edge Locations** and its **Backbone Network** to optimize traffic routing.
1. A user sends a request to an application hosted in an AWS Region.
2. Traffic is directed to a nearby **AWS Edge Location**.
3. From the Edge Location, traffic can travel through the **AWS Backbone Network**.
4. The request reaches the application hosted in the AWS Region.
5. The response is delivered back to the user.

**Key benefit**: Using AWS-managed network paths can reduce public internet exposure and improve latency and network performance.

### Public Internet vs AWS Edge Networking

| Feature                | Public Internet                            | AWS Edge Networking                                 |
| ---------------------- | ------------------------------------------ | --------------------------------------------------- |
| **Network Path**       | Through public internet networks           | Through AWS-managed network infrastructure          |
| **Routing**            | Depends on public internet routing         | Optimized through AWS networking                    |
| **Network Hops**       | May involve multiple intermediate networks | Can reduce reliance on intermediate public networks |
| **Latency**            | May be higher or less predictable          | Designed to improve latency                         |
| **Global Performance** | Depends on internet routing conditions     | Benefits from AWS global network infrastructure     |

## 7.3 AWS Services Using Edge Networking

Several AWS services use **Edge Locations** and the **AWS Backbone Network** to improve performance for different use cases.

| AWS Service                         | Primary Purpose                                           | Exam Keyword                    |
| ----------------------------------- | --------------------------------------------------------- | ------------------------------- |
| **Amazon CloudFront**               | Delivers content using AWS edge infrastructure            | Content delivery, low latency   |
| **AWS Global Accelerator**          | Optimizes network paths to globally deployed applications | Global application performance  |
| **Amazon S3 Transfer Acceleration** | Accelerates file transfers to and from Amazon S3          | Faster S3 uploads and downloads |

### Key Service Distinctions

- **Amazon CloudFront** - Focuses on delivering content efficiently to globally distributed users.
- **AWS Global Accelerator** - Focuses on improving network performance when accessing applications deployed in AWS Regions.
- **Amazon S3 Transfer Acceleration** - Focuses on accelerating data transfers to and from S3 buckets.

All three services leverage **AWS Edge Networking**, but they address different performance requirements.

## 7.4 Exam Focus

- **Optimize connectivity using AWS-managed infrastructure - AWS Edge Networking**
- **AWS global network infrastructure - AWS Backbone Network**
- **Infrastructure located closer to end users - AWS Edge Locations**
- **Reduce reliance on public internet routing - AWS Edge Networking**
- **Improve application connectivity and network latency - AWS Edge Networking**
- **Global content delivery - Amazon CloudFront**
- **Optimize global application network performance - AWS Global Accelerator**
- **Accelerate transfers to and from Amazon S3 - Amazon S3 Transfer Acceleration**
- **Edge Networking improves network paths but does not guarantee zero or always-lowest latency**

# 8 - Edge Networking - Amazon CloudFront

## 8.1 Amazon CloudFront Overview

**Amazon CloudFront** is a fully managed **Content Delivery Network (CDN)** that delivers content to users globally with **low latency and high performance**.

It uses AWS's global network of **Edge Locations (Points of Presence)** to deliver content closer to end users.

### Key Features

- **Content Delivery Network (CDN)** - Delivers content to users through globally distributed edge locations.
- **Low Latency** - Reduces the distance data travels between users and content delivery endpoints.
- **Content Caching** - Stores frequently accessed content at edge locations for faster delivery.
- **Static and Dynamic Content** - Supports delivery of images, videos, HTML pages, APIs, and other web content.
- **Origin Load Reduction** - Reduces the number of requests reaching origin servers by serving cached content.
- **DDoS Protection** - Integrates with **AWS Shield** for protection against Distributed Denial of Service attacks.
- **Encryption in Transit** - Supports HTTPS for secure content delivery.

**Exam clue: Deliver content globally with low latency using a CDN - Amazon CloudFront**

## 8.2 How Amazon CloudFront Works

CloudFront uses a **CloudFront Distribution** to define how content is delivered to users.

### CloudFront Components

| Component                   | Description                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| **CloudFront Distribution** | Configuration that defines how CloudFront delivers content.                              |
| **Origin**                  | Original location where the content is stored or hosted.                                 |
| **Edge Location**           | AWS infrastructure that delivers and caches content closer to end users.                 |
| **Regional Edge Cache**     | Larger caching layer that helps improve content availability and reduce origin requests. |

### Supported CloudFront Origins

CloudFront can retrieve content from various AWS services and HTTP endpoints.
- **Amazon S3** - Static content such as images, videos, and HTML files.
- **Amazon EC2** - Websites and applications running on virtual servers.
- **Elastic Load Balancing (ELB)** - Applications hosted behind load balancers.
- **Amazon API Gateway** - API endpoints.
- **Custom HTTP Origins** - Other supported HTTP-based application endpoints.

### Content Delivery and Caching Flow

1. A user requests content, such as an image or video.
2. The request is directed to a nearby **CloudFront Edge Location**.
3. CloudFront checks whether the requested content is cached.
4. If the content is cached **(Cache Hit):**
    - CloudFront delivers the content directly from the edge location.
    - The origin server does not need to process the request.
5. If the content is not cached **(Cache Miss):**
    - CloudFront retrieves the content from the configured **Origin**.
    - Cacheable content can be stored at the edge location.
    - CloudFront delivers the content to the user.
6. Subsequent requests can be served directly from the cache while the cached content remains valid.

### Example: Video Delivery Using Amazon S3

An application stores video files in an **Amazon S3 bucket**.

Without CloudFront:
- Users retrieve videos from the S3 bucket's AWS Region.
- Repeated requests require data to travel from the origin.

With CloudFront:
- Videos can be cached at nearby Edge Locations.
- Multiple users requesting the same video can receive cached content.
- The S3 origin receives fewer requests.
- Users experience faster content delivery.

**Key concept**: CloudFront caches content closer to users, reducing latency and the load on origin servers.

## 8.3 Benefits of Amazon CloudFront

### Performance and Caching

- Delivers **static and dynamic content** with low latency.
- Caches frequently requested static content, such as images, videos, and HTML files.
- Reduces repeated requests to origin servers.
- Improves performance for globally distributed users.

**Important**: CloudFront can deliver both static and dynamic content, but caching is primarily beneficial for content that can be reused across requests.

### Cost Optimization

CloudFront caching can help reduce costs by decreasing repeated data retrieval from origin servers.
- Fewer requests reach the origin when content is served from cache.
- Reduced origin traffic can lower origin-related data transfer and processing costs.
- CloudFront provides a **Free Tier allowance** for eligible usage.

**Pricing example from the lecture:**
- Standard AWS data transfer out: Approximately **$0.09 per GB**.
- CloudFront Free Tier: **1 TB of data transfer out per month**.

These are lecture figures; actual charges and free allowances depend on current AWS pricing and eligibility.

**Exam clue: Reduce origin load and improve global content delivery - Amazon CloudFront**

### Security Features

CloudFront provides security capabilities for applications and content delivery.

| Security Feature                 | Purpose                                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| **AWS Shield**                   | Provides built-in DDoS protection for CloudFront distributions.                                |
| **HTTPS/TLS**                    | Encrypts data in transit between users and CloudFront.                                         |
| **Origin Access Control (OAC)**  | Restricts access to supported Amazon S3 origins so content can be accessed through CloudFront. |
| **Origin Access Identity (OAI)** | Legacy mechanism for restricting direct access to Amazon S3 origins.                           |

### Restricting Direct Access to Amazon S3

By default, using CloudFront does not automatically prevent users from accessing a publicly accessible origin directly.

For example:
- An application stores images in an S3 bucket.
- CloudFront delivers the images to users.
- The requirement is to prevent users from bypassing CloudFront and accessing the bucket directly.

To address this, use **Origin Access Control (OAC)** or the older **Origin Access Identity (OAI)** mechanism with appropriate S3 permissions.

**Key distinction:**
- **CloudFront** - Delivers and caches content.
- **OAC / OAI** - Helps restrict direct access to S3 content.
- **AWS Shield** - Protects against DDoS attacks.

**Exam clue: Allow users to access private S3 content only through CloudFront - Origin Access Control (OAC)**

## 8.4 Amazon CloudFront vs Direct Origin Access

| Feature              | Direct Origin Access                 | Amazon CloudFront                           |
| -------------------- | ------------------------------------ | ------------------------------------------- |
| **Content Delivery** | Directly from the origin             | Through AWS Edge Locations                  |
| **Caching**          | No CloudFront edge caching           | Supports edge caching                       |
| **Latency**          | Depends on distance and network path | Optimized for global content delivery       |
| **Origin Load**      | Requests reach the origin            | Cached requests can be served from the edge |
| **DDoS Protection**  | Depends on origin protections        | Includes AWS Shield Standard protection     |
| **Best Use Case**    | Direct application access            | Global content delivery with low latency    |

**Important distinction**: CloudFront is an **optional service**. Applications hosted on EC2, S3, or other services can be accessed without CloudFront, but using CloudFront can improve global content delivery performance.

## 8.5 Exam Focus

- **Content Delivery Network (CDN) - Amazon CloudFront**
- **Deliver content globally with low latency - Amazon CloudFront**
- **Cache static content closer to users - CloudFront Edge Locations**
- **Original location of content - CloudFront Origin**
- **Configure content delivery - CloudFront Distribution**
- **Deliver images, videos, and HTML files efficiently - Amazon CloudFront**
- **Reduce repeated requests to origin servers - CloudFront Caching**
- **Content available in edge cache - Cache Hit**
- **Content must be retrieved from origin - Cache Miss**
- **Built-in DDoS protection - AWS Shield Standard**
- **Encrypt content delivery traffic - HTTPS/TLS**
- **Restrict direct S3 origin access - Origin Access Control (OAC)**
- **Legacy S3 origin access mechanism - Origin Access Identity (OAI)**
- **Optimize global content delivery and reduce origin load - Amazon CloudFront**
- **CloudFront is optional and supports both static and dynamic content**

# 9 - Edge Networking - AWS Global Accelerator

## 9.1 AWS Global Accelerator Overview

**AWS Global Accelerator** is a networking service that improves the **availability and performance of global applications** by optimizing network traffic through the **AWS Global Network (AWS Backbone Network).**

Similar to **Amazon CloudFront**, it uses **AWS Edge Locations** to improve network connectivity between users and applications hosted in AWS Regions.

### Key Features

- **Network Optimization** - Routes traffic through the AWS Backbone Network instead of relying entirely on the public internet.
- **Low Latency** - Improves network performance for globally distributed users.
- **Static Anycast IP Addresses** - Provides two static IP addresses for accessing applications globally.
- **TCP and UDP Support** - Supports application traffic beyond HTTP and HTTPS.
- **Multiple Application Endpoints** - Supports Application Load Balancers, Network Load Balancers, and EC2 instances.
- **DDoS Protection** - Integrates with AWS Shield for protection against Distributed Denial of Service attacks.

**Exam clue: Improve global application performance using static anycast IP addresses - AWS Global Accelerator**

## 9.2 How AWS Global Accelerator Works

AWS Global Accelerator uses **Edge Locations** and the **AWS Backbone Network** to optimize traffic routing.

### Traffic Routing Flow

1. An application is deployed in an AWS Region using supported endpoints, such as:
    - **Application Load Balancer (ALB)**
    - **Network Load Balancer (NLB)**
    - **Amazon EC2**
2. **AWS Global Accelerator** is configured to direct traffic to these application endpoints.
3. Global Accelerator provides **two static anycast IP addresses**.
4. Users connect to the application using these IP addresses.
5. Traffic enters the AWS global network through a nearby **Edge Location**.
6. AWS routes the traffic through its **Backbone Network** to the application endpoint.

**Key concept**: AWS Global Accelerator optimizes the network path between users and application endpoints using AWS-managed infrastructure.

### Static Anycast IP Addresses

**Anycast IP addresses** allow multiple geographically distributed network locations to advertise the same IP address.

With AWS Global Accelerator:
- Two **static anycast IPv4 addresses** are provided.
- The IP addresses remain the same regardless of the user's geographic location.
- Users are routed to nearby AWS Edge Locations.
- Traffic is forwarded through the AWS network toward configured application endpoints.

### Why Static IP Addresses Matter

Some organizations restrict outbound network connections using **IP allowlists (whitelisting).**

AWS Global Accelerator provides fixed IP addresses that organizations can allowlist.

**Example:**

A company wants its employees to access an AWS-hosted application but only permits connections to approved IP addresses.

The company can allowlist the **two static IP addresses** provided by AWS Global Accelerator.

**Exam clue: Global application access requiring fixed IP addresses for allowlisting - AWS Global Accelerator**

## 9.3 AWS Global Accelerator vs Amazon CloudFront

Both services use **AWS Edge Locations** and the **AWS Backbone Network**, but their primary purposes are different.

| Feature                    | Amazon CloudFront                         | AWS Global Accelerator                   |
| -------------------------- | ----------------------------------------- | ---------------------------------------- |
| **Primary Purpose**        | Content delivery network (CDN)            | Global application network optimization  |
| **Network Infrastructure** | AWS Edge Locations                        | AWS Edge Locations                       |
| **Static Anycast IPs**     | Uses DNS-based endpoints                  | Provides two static anycast IP addresses |
| **Supported Protocols**    | HTTP and HTTPS                            | TCP and UDP                              |
| **Content Caching**        | Supports edge caching                     | Does not cache application content       |
| **Application Endpoints**  | S3, EC2, ALB, API Gateway, HTTP origins   | ALB, NLB, EC2                            |
| **DDoS Protection**        | AWS Shield                                | AWS Shield                               |
| **Best Use Case**          | Deliver content globally with low latency | Optimize global application connectivity |

### Key Distinctions

**Amazon CloudFront**
- Primarily used for **content delivery**.
- Caches static content at **Edge Locations**.
- Supports **HTTP and HTTPS**.
- Commonly used for websites, images, videos, and other web content.

**AWS Global Accelerator**
- Primarily used for **network path optimization**.
- Does not cache application content.
- Supports **TCP and UDP** traffic.
- Provides **two static anycast IP addresses**.
- Commonly used when global applications require improved connectivity or fixed IP addresses.

**Important exam distinction:**
- **Deliver and cache content globally - Amazon CloudFront**
- **Optimize global application traffic with static IPs - AWS Global Accelerator**

## 9.4 AWS Global Accelerator Security

AWS Global Accelerator integrates with **AWS Shield** to provide protection against **Distributed Denial of Service (DDoS)** attacks.
- Helps protect application availability from network-based attacks.
- Uses AWS's global network infrastructure to route application traffic.
- Supports secure network access configurations through **static IP allowlisting**.

**Exam clue: DDoS protection for AWS Global Accelerator - AWS Shield**

## 9.5 Exam Focus

- **Optimize global application network performance - AWS Global Accelerator**
- **Route traffic through AWS-managed infrastructure - AWS Backbone Network**
- **Provide two static anycast IP addresses - AWS Global Accelerator**
- **Route users through nearby AWS Edge Locations - Anycast Routing**
- **Support TCP and UDP traffic - AWS Global Accelerator**
- **Supported endpoints - ALB, NLB, and EC2**
- **Fixed IP addresses for network allowlisting - AWS Global Accelerator**
- **Built-in DDoS protection - AWS Shield**
- **Content delivery and edge caching - Amazon CloudFront**
- **Network path optimization without content caching - AWS Global Accelerator**
- **CloudFront supports HTTP/HTTPS; Global Accelerator supports TCP/UDP**

# 10 - Edge Networking - S3 Transfer Accelerator

## 10.1 Amazon S3 Transfer Acceleration Overview

**Amazon S3 Transfer Acceleration** is an Amazon S3 feature that enables **faster uploads and downloads of objects** over long geographic distances.

It uses **AWS Edge Locations** and the **AWS Backbone Network** to optimize data transfers between users and S3 buckets.

### Key Features

- **Accelerated Data Transfer** - Improves upload and download performance for Amazon S3.
- **AWS Edge Locations** - Transfers data through nearby AWS Edge Locations.
- **AWS Backbone Network** - Uses AWS-managed infrastructure to optimize network paths.
- **Large Object Transfers** - Particularly useful for transferring large files measured in GB or TB.
- **Bucket-Level Configuration** - Can be enabled or disabled for individual S3 buckets.
- **Dedicated Endpoint** - Provides a separate endpoint for accelerated transfers.
- **Additional Charges** - Accelerated data transfers incur additional costs.

**Exam clue: Accelerate large file uploads to Amazon S3 over long geographic distances - S3 Transfer Acceleration**

## 10.2 How S3 Transfer Acceleration Works

### Without Transfer Acceleration

By default, users upload or download objects directly through the public internet to the S3 bucket's regional endpoint.
- Data travels over the public internet toward the AWS Region.
- Long geographic distances can increase transfer times.
- Large file transfers may experience slower performance.

### With Transfer Acceleration

1. Enable **S3 Transfer Acceleration** on an S3 bucket.
2. AWS provides a dedicated **accelerated endpoint**.
3. The user uploads or downloads objects using this endpoint.
4. Traffic enters the AWS network through a nearby **Edge Location**.
5. Data travels through the **AWS Backbone Network** to or from the S3 bucket.

**Key concept**: S3 Transfer Acceleration optimizes the network path for object transfers without caching the content at Edge Locations.

### Performance Benefits

S3 Transfer Acceleration is particularly useful when:
- Transferring **large objects** over long distances.
- Uploading files from geographically distant locations.
- Improving data transfer performance between global users and S3 buckets.

The lecture mentions potential transfer speed improvements of **50% to 500%,** depending on network conditions and distance. These are illustrative improvements, not guaranteed performance gains.

## 10.3 Configuration and Cost Considerations

### Enabling Transfer Acceleration

- Configured at the **individual S3 bucket level**.
- **Disabled by default**.
- Can be enabled or disabled when required.
- Provides a separate **S3 Transfer Acceleration endpoint** for transferring objects.

### Pricing

**S3 Transfer Acceleration incurs additional data transfer charges**.
- Charges depend on accelerated transfer usage.
- Performance improvements may vary depending on geographic distance and network conditions.
- AWS provides a **speed comparison tool** to compare direct transfers against accelerated transfers.

**Key consideration**: Evaluate whether the performance improvement justifies the additional transfer cost.

## 10.4 Amazon S3 Transfer Acceleration vs Amazon CloudFront

Both services use **AWS Edge Locations**, but they serve different purposes.

| Feature                  | S3 Transfer Acceleration                  | Amazon CloudFront                                       |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------- |
| **Primary Purpose**      | Accelerate S3 object transfers            | Content delivery network (CDN)                          |
| **Main Use Case**        | Large file uploads and downloads          | Deliver websites, images, videos, and streaming content |
| **Edge Locations**       | Yes                                       | Yes                                                     |
| **Content Caching**      | No                                        | Yes                                                     |
| **Network Optimization** | AWS Backbone Network                      | AWS Edge Networking                                     |
| **Best Scenario**        | Upload large files to a distant S3 bucket | Deliver frequently accessed content to global users     |

### Key Distinctions

**Amazon S3 Transfer Acceleration**

- Focuses on **fast object transfers**, particularly large uploads.
- Does not cache content.
- Optimizes transfers between users and S3 buckets.

**Amazon CloudFront**

- Focuses on **content delivery** to end users.
- Caches content at Edge Locations.
- Reduces repeated requests to origin servers.

**Important exam distinction:**
- **Accelerate large uploads to S3 - S3 Transfer Acceleration**
- **Deliver and cache S3 content globally - Amazon CloudFront**

## 10.5 Exam Focus

- **Accelerate long-distance S3 uploads and downloads - S3 Transfer Acceleration**
- **Optimize S3 object transfers using AWS Edge Locations - S3 Transfer Acceleration**
- **Use AWS-managed networking for faster transfers - AWS Backbone Network**
- **Large file transfers across geographic distances - S3 Transfer Acceleration**
- **Enable acceleration on individual S3 buckets - Bucket-Level Configuration**
- **Access accelerated transfers - Dedicated S3 Acceleration Endpoint**
- **S3 Transfer Acceleration does not cache content**
- **Additional transfer charges apply - S3 Transfer Acceleration**
- **Compare transfer performance - S3 Transfer Acceleration Speed Comparison Tool**
- **Global content delivery and caching - Amazon CloudFront**
- **Fast S3 uploads - S3 Transfer Acceleration; cached content delivery - Amazon CloudFront**

# 11 - Section Summary

## 11.1 Amazon Route 53 Summary

**Amazon Route 53** is a **highly available, scalable, and fully managed global DNS service** that also supports **domain registration**.

### Hosted Zones

| Hosted Zone             | Purpose                                 | Exam Clue                          |
| ----------------------- | --------------------------------------- | ---------------------------------- |
| **Public Hosted Zone**  | DNS resolution over the public internet | Public websites and applications   |
| **Private Hosted Zone** | DNS resolution within associated VPCs   | Internal application communication |

### DNS Record Types

| Record Type | Purpose                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------- |
| **A**       | Maps a domain name to an IPv4 address                                                           |
| **AAAA**    | Maps a domain name to an IPv6 address                                                           |
| **CNAME**   | Maps a domain name to another DNS name                                                          |
| **Alias**   | Route 53-specific feature for pointing to supported AWS resources, including at the root domain |

**Key distinction**: CNAME cannot be used at the root domain (`example.com`), but Alias records can.

### Route 53 Routing Policies

| Routing Policy    | Primary Purpose                                  | Exam Clue                              |
| ----------------- | ------------------------------------------------ | -------------------------------------- |
| **Simple**        | Basic DNS routing                                | Single application endpoint            |
| **Failover**      | Redirect traffic when the primary endpoint fails | High availability, disaster recovery   |
| **Weighted**      | Distribute traffic using configured weights      | Traffic splitting, application testing |
| **Geolocation**   | Route based on geographic location               | Country-specific application routing   |
| **Latency-Based** | Route to the lowest-latency AWS Region           | Global application performance         |

## 11.2 AWS Edge Networking Summary

**AWS Edge Networking** uses **AWS Edge Locations** and the **AWS Backbone Network** to optimize network connectivity between users and AWS-hosted applications.

### Edge Networking Services

| Service                             | Primary Purpose                         | Key Feature                                |
| ----------------------------------- | --------------------------------------- | ------------------------------------------ |
| **Amazon CloudFront**               | Global content delivery                 | CDN with edge caching                      |
| **AWS Global Accelerator**          | Global application network optimization | Two static anycast IP addresses            |
| **Amazon S3 Transfer Acceleration** | Accelerated S3 object transfers         | Faster long-distance uploads and downloads |

### Key Service Distinctions

**Amazon CloudFront**
- **Content Delivery Network (CDN).**
- Delivers static and dynamic content with low latency.
- Caches static content such as images, videos, and HTML files.
- Reduces repeated requests to origin servers.

**AWS Global Accelerator**
- Optimizes application traffic using AWS's global network.
- Provides **two static anycast IP addresses**.
- Supports **TCP and UDP** traffic.
- Supports endpoints such as **ALB, NLB, and EC2**.
- Useful when applications require fixed IP addresses for allowlisting.

**Amazon S3 Transfer Acceleration**
- Accelerates transfers to and from **Amazon S3**.
- Particularly useful for **large file uploads over long distances**.
- Uses AWS Edge Locations and optimized network paths.
- Does **not cache content**.
- Incurs additional transfer charges.

## 11.3 Exam Focus

- **Global DNS and domain registration - Amazon Route 53**
- **Public DNS resolution - Public Hosted Zone**
- **Private VPC DNS resolution - Private Hosted Zone**
- **IPv4 mapping - A Record**
- **IPv6 mapping - AAAA Record**
- **Domain name mapping - CNAME Record**
- **Root domain pointing to supported AWS resources - Alias Record**
- **High availability and disaster recovery - Failover Routing**
- **Traffic percentage distribution - Weighted Routing**
- **Country-based routing - Geolocation Routing**
- **Lowest-latency regional endpoint - Latency-Based Routing**
- **Global content delivery and caching - Amazon CloudFront**
- **Global network optimization with two static anycast IPs - AWS Global Accelerator**
- **Fast long-distance S3 uploads - S3 Transfer Acceleration**
- **CloudFront caches content; Global Accelerator and S3 Transfer Acceleration do not**

# 12 - Quiz

## 12.1 Practice Question 1

### Original Question

You are deploying a globally distributed application and want to provide users with static IP addresses so that they can whitelist these IP addresses in their company firewall.

Which AWS service should you use?

### Choices

A. Elastic Load Balancer  
B. Amazon CloudFront  
C. Amazon Route 53  
D. AWS Global Accelerator

### Correct Answer

**D. AWS Global Accelerator (Correct)**

### Why?

**AWS Global Accelerator** provides **two static anycast IP addresses** that can be allowlisted in company firewalls.
- Routes traffic through the **AWS Global Network** to optimal application endpoints.
- Supports globally distributed applications across multiple AWS Regions.
- Improves application performance and availability.

Why not the others?

- **Amazon CloudFront** - Primarily provides content delivery and caching, not two dedicated static anycast IPs by default.
- **Amazon Route 53** - Provides DNS resolution and routing policies, not static application entry-point IPs.
- **Elastic Load Balancer** - Distributes traffic across application targets but does not provide the same global static anycast IP functionality.

**Exam clue**: **Global application requiring static IP addresses for firewall allowlisting - AWS Global Accelerator**

## 12.2 Practice Question 2

### Original Question

Your organization needs to set up DNS resolution for internal services within a VPC. These records should not be accessible over the public internet.

What should you use to achieve this?

### Choices

A. Amazon Route 53 Public Hosted Zone  
B. Amazon Route 53 Private Hosted Zone  
C. AWS Global Accelerator  
D. Amazon CloudFront

### Correct Answer

**B. Amazon Route 53 Private Hosted Zone (Correct)**

### Why?

A **Route 53 Private Hosted Zone** provides DNS resolution for resources within associated **Amazon VPCs**.
- Supports private DNS records for internal applications.
- DNS records are resolved within associated VPCs rather than through public DNS.
- Commonly used for communication between internal application and database servers.

**Key distinction**:
- **Public Hosted Zone** - Public internet DNS resolution.
- **Private Hosted Zone** - Internal DNS resolution within associated VPCs.

**Exam clue: Private DNS resolution for internal VPC resources - Route 53 Private Hosted Zone**

## 12.3 Practice Question 3

### Original Question

You have hosted a website on an EC2 instance. You now want to publish this website so users on the internet can access it using your own domain name.

Which AWS service should you use?

### Choices

A. Amazon CloudFront  
B. Amazon Certificate Manager  
C. AWS Name Service  
D. Amazon Route 53

### Correct Answer

**D. Amazon Route 53 (Correct)**

### Why?

**Amazon Route 53** is a managed DNS service that allows you to associate a custom domain name with an application's public endpoint.
- Create a **Public Hosted Zone** for the domain.
- Configure an **A Record** pointing to the EC2 instance's public IPv4 address.
- Users can access the website through the custom domain name.

**Why not the others?**
- **Amazon CloudFront** - Content delivery and caching; not primarily responsible for managing custom-domain DNS records.
- **AWS Certificate Manager (ACM)** - Manages SSL/TLS certificates for HTTPS, not DNS resolution.
- **AWS Name Service** - Not the AWS service used for managing public DNS.

**Exam clue: Connect a custom domain name to an EC2-hosted website - Amazon Route 53**

## 12.4 Practice Question 4

### Original Question

When would you choose S3 Transfer Acceleration over a direct S3 upload?

### Choices

A. When uploading files from within the same region  
B. When uploading large files from a distant location  
C. When transferring files between S3 buckets  
D. When uploading small files from a local network

### Correct Answer

**B. When uploading large files from a distant location (Correct)**

### Why?

**Amazon S3 Transfer Acceleration** improves long-distance file transfer performance by using **AWS Edge Locations** and the **AWS Backbone Network**.
- Particularly useful for large files transferred over significant geographic distances.
- Helps improve upload performance to S3 buckets located in distant AWS Regions.
- Uses an accelerated S3 endpoint.

**Why not the others?**
- **Same-region or local transfers** - Typically do not benefit as much from acceleration.
- **Transfers between S3 buckets** - S3 Transfer Acceleration is not primarily designed for bucket-to-bucket transfers.

**Exam clue: Large file uploads over long geographic distances - S3 Transfer Acceleration**

## 12.5 Practice Question 5

### Original Question

You want to improve the load time of your web application by caching frequently accessed files closer to users.

Which AWS service should you use?

### Choices

A. AWS Cache service  
B. S3 Transfer Acceleration  
C. Elastic Load Balancer  
D. Amazon CloudFront

### Correct Answer

**D. Amazon CloudFront (Correct)**

### Why?

**Amazon CloudFront** is a **Content Delivery Network (CDN)** that caches content at AWS Edge Locations.
- Delivers frequently accessed content closer to users.
- Reduces latency and improves website loading performance.
- Reduces requests reaching the origin server.

**Key distinction:**
- **CloudFront** - Content caching and global delivery.
- **S3 Transfer Acceleration** - Accelerates S3 transfers without caching content.
- **Elastic Load Balancer** - Distributes incoming traffic across application targets.

**Exam clue: Cache website content closer to global users - Amazon CloudFront**

## 12.6 Practice Question 6

### Original Question

What is the primary purpose of AWS Edge Locations?

### Choices

A. Hosting EC2 instances closer to users  
B. Accelerating content delivery for Amazon CloudFront  
C. Hosting S3 buckets closer to users  
D. Providing a backup region for failover

### Correct Answer

**B. Accelerating content delivery for Amazon CloudFront (Correct)**

### Why?

**AWS Edge Locations** are globally distributed AWS infrastructure locations used by services such as **Amazon CloudFront**.
- Help deliver cached content closer to end users.
- Reduce content delivery latency.
- Improve performance for globally distributed applications.

**Important distinction:**
- **AWS Regions** - Host regional services and resources such as EC2 instances and S3 buckets.
- **Edge Locations** - Support edge networking, content delivery, and caching.

Edge Locations are also used by **AWS Global Accelerator** and **S3 Transfer Acceleration**, but the question specifically targets CloudFront content delivery.

**Exam clue: Global infrastructure for low-latency content delivery - AWS Edge Locations**

## 12.7 Practice Question 7

### Original Question

A customer in Asia uploads large files to an S3 bucket in the US. The uploads are slow due to high latency.

Which feature should you enable to improve upload speed?

### Choices

A. S3 Lifecycle Policies  
B. S3 Transfer Acceleration  
C. Cross-Region Replication  
D. AWS Direct Connect

### Correct Answer

**B. S3 Transfer Acceleration (Correct)**

### Why?

**Amazon S3 Transfer Acceleration** is designed to accelerate uploads and downloads between geographically distant clients and S3 buckets.
- Uses nearby AWS Edge Locations.
- Transfers data through optimized AWS network paths.
- Particularly useful for large files and long-distance transfers.

**Why not the others?**
- **S3 Lifecycle Policies** - Automate object transitions and expiration based on lifecycle rules.
- **Cross-Region Replication** - Replicates S3 objects between buckets in different AWS Regions.
- **AWS Direct Connect** - Provides dedicated network connectivity to AWS, not an S3-specific accelerated upload feature.

**Exam clue: Slow uploads from Asia to an S3 bucket in the US - S3 Transfer Acceleration**

## 12.8 Practice Question 8

### Original Question

Your company needs to serve static content, such as images and videos, to users worldwide with low latency.

Which AWS service should you use?

### Choices

A. S3 Transfer Acceleration  
B. Amazon Route 53  
C. AWS Global Accelerator  
D. Amazon CloudFront

### Correct Answer

**D. Amazon CloudFront (Correct)**

### Why?

**Amazon CloudFront** is AWS's **Content Delivery Network (CDN)** for delivering content to globally distributed users with low latency.
- Caches static content at AWS Edge Locations.
- Delivers images, videos, and HTML files efficiently.
- Reduces repeated requests to the origin.

**Why not the others?**
- **S3 Transfer Acceleration** - Optimizes data transfers to and from S3, especially long-distance uploads.
- **Amazon Route 53** - Provides DNS resolution and routing.
- **AWS Global Accelerator** - Optimizes global application network paths but does not cache content.

**Exam clue: Deliver static images and videos globally with low latency - Amazon CloudFront**

## 12.9 Practice Question 9

### Original Question

You have hosted your application on EC2 instances behind an Application Load Balancer.

You want to improve the performance and availability of a global application by routing users to the nearest healthy AWS endpoint for your application.

Which AWS service should you use?

### Choices

A. Amazon CloudFront  
B. AWS Global Accelerator  
C. S3 Transfer Acceleration  
D. Amazon Route 53

### Correct Answer

**B. AWS Global Accelerator (Correct)**

### Why?

**AWS Global Accelerator** improves the performance and availability of globally distributed applications by directing traffic to optimal healthy endpoints through the AWS global network.
- Supports **Application Load Balancers (ALB), Network Load Balancers (NLB),** and **EC2 instances**.
- Uses AWS Edge Locations and the AWS Backbone Network.
- Supports endpoint health checks and routing to healthy endpoints.

**Key distinction:**
- **AWS Global Accelerator** - Optimizes network paths to healthy application endpoints.
- **Amazon CloudFront** - Optimizes content delivery and caching.
- **Amazon Route 53** - Provides DNS-based routing policies, including health-aware failover and latency-based routing.

**Important**: Global Accelerator chooses optimal healthy endpoints based on routing and health conditions, not strictly geographic proximity.

**Exam clue: Improve global application performance and availability using ALB endpoints - AWS Global Accelerator**

## 12.10 Practice Question 10

### Original Question

You want to build a highly available web application and deploy it across different AWS Regions so that if the primary Region fails, users are directed to the website hosted in the secondary Region.

Which AWS service should you use?

### Choices

A. Amazon CloudFront  
B. Amazon S3  
C. Amazon Route 53  
D. Amazon SageMaker

### Correct Answer

**C. Amazon Route 53 (Correct)**

### Why?

**Amazon Route 53** supports a **Failover Routing Policy**, allowing DNS-based traffic redirection between primary and secondary application endpoints.
- Configure **Primary** and **Secondary** endpoints.
- Use **Route 53 Health Checks** to monitor endpoint health.
- When the primary endpoint becomes unhealthy, Route 53 can return the secondary endpoint's address.
- Supports **cross-region failover** for highly available applications.

**Why not the others?**
- **Amazon CloudFront** - Primarily provides content delivery and caching.
- **Amazon S3** - Provides object storage, not DNS-based regional failover.
- **Amazon SageMaker** - Provides machine learning capabilities.

**Exam clue: DNS-based failover from a primary AWS Region to a secondary Region - Route 53 Failover Routing Policy**

## 12.11 Exam Focus

### Key Service Associations

| Exam Scenario                                         | Correct AWS Service          |
| ----------------------------------------------------- | ---------------------------- |
| Global application requiring two static anycast IPs   | **AWS Global Accelerator**       |
| Private DNS resolution inside a VPC                   | **Route 53 Private Hosted Zone** |
| Access an EC2 website using a custom domain           | **Amazon Route 53**              |
| Upload large files over long distances                | **S3 Transfer Acceleration**     |
| Cache website files closer to users                   | **Amazon CloudFront**            |
| Low-latency content delivery through Edge Locations   | **Amazon CloudFront**            |
| Accelerate S3 uploads from distant locations          | **S3 Transfer Acceleration**     |
| Deliver static images and videos globally             | **Amazon CloudFront**            |
| Route global traffic to optimal healthy ALB endpoints | **AWS Global Accelerator**       |
| Automatic DNS failover between AWS Regions            | **Route 53 Failover Routing**    |

### Important Exam Distinctions

- **Amazon Route 53** - DNS resolution, hosted zones, and routing policies.
- **Amazon CloudFront** - Content delivery, caching, and low latency.
- **AWS Global Accelerator** - Global network optimization, static anycast IP addresses, and healthy endpoint routing.
- **Amazon S3 Transfer Acceleration** - Faster long-distance S3 uploads and downloads without caching.
- **Route 53 Failover Routing** - Redirects DNS queries to a secondary endpoint when the primary becomes unhealthy.
- **Public Hosted Zone vs Private Hosted Zone** - Internet DNS resolution versus internal VPC DNS resolution.
- **Edge Locations vs AWS Regions** - Edge Locations support content delivery and edge networking; AWS Regions host regional application resources.

**Most important distinction for the exam:**

- **DNS and regional failover - Amazon Route 53**
- **Static content delivery and caching - Amazon CloudFront**
- **Global application performance with static IPs - AWS Global Accelerator**
- **Large file transfers to distant S3 buckets - S3 Transfer Acceleration**