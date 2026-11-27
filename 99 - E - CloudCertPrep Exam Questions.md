## **1. Practice Question**

### **Question**

Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?

### **Choices**

A. AWS CloudTrail  
B. AWS Auto Scaling  
C. Amazon Redshift  
D. AWS Lambda

### **Answers**

**B. AWS Auto Scaling**

### **Why**

**AWS Auto Scaling** automatically adjusts resource capacity based on application demand and defined scaling policies. It eliminates the need for manual capacity planning while maintaining sufficient application capacity.

Other options:
- **AWS CloudTrail** - Records API calls and account activity for auditing and governance. Does not manage resource capacity.
- **Amazon Redshift** - Fully managed data warehouse service for analytical queries across large datasets.
- **AWS Lambda** - Serverless compute service that executes code in response to events. Although it scales automatically for its own workloads, it does not manage the scaling of existing application infrastructure.

### **Exam Focus**

- **Automatically adjust application capacity - AWS Auto Scaling**
- **Scale resources according to demand - Elasticity**
- **Audit API activity - AWS CloudTrail**
- **Data warehousing and analytics - Amazon Redshift**
- **Serverless event-driven compute - AWS Lambda**

## **2. Practice Question**

### **Question**

What best describes penetration testing?

### **Choices**

A. Testing your application's response time from different locations  
B. Testing your software for bugs and errors  
C. Testing your instances to check for the unhealthy ones  
D. Testing your network to find security vulnerabilities that an attacker could exploit

### **Answers**

**D. Testing your network to find security vulnerabilities that an attacker could exploit**

### **Why**

**Penetration testing** involves simulating cyberattacks against systems, applications, or networks to identify exploitable security vulnerabilities before malicious attackers can exploit them.

Other options:
- **Testing application response time** - Performance and latency testing.
- **Testing software for bugs and errors** - Functional or quality assurance testing.
- **Testing instances for unhealthy ones** - Health checks and resource monitoring.

### **Exam Focus**

|Testing Type|Purpose|
|---|---|
|**Penetration testing**|Identify exploitable security vulnerabilities|
|Performance testing|Evaluate application performance and latency|
|Functional testing|Identify software bugs and errors|
|Health checks|Determine resource availability and health|

## **3. Practice Question**

### **Question**

A company wants to migrate its on-premises MySQL database to Amazon RDS for MySQL to take advantage of managed patching and backups, without changing the application code. Which migration strategy does this describe?

### **Choices**

A. Replatform  
B. Retain  
C. Rehost  
D. Refactor

### **Answers**

**A. Replatform**

### **Why**

**Replatforming (lift, tinker, and shift)** involves making targeted optimizations during migration without significantly changing the application's core architecture.

Moving a self-managed MySQL database to **Amazon RDS for MySQL** allows the company to benefit from managed patching and backups without changing the application code.

Other options:
- **Retain** - Keep the workload in its existing on-premises environment.
- **Rehost** - Move the database to Amazon EC2 without significant changes and continue managing it manually.
- **Refactor** - Redesign the application architecture, such as replacing a relational database with Amazon DynamoDB.

### **Exam Focus**

|Migration Strategy|Exam Clue|
|---|---|
|**Replatform**|Lift, tinker, and shift; minor cloud optimizations|
|**Rehost**|Lift and shift; minimal changes|
|**Refactor**|Redesign application architecture|
|**Retain**|Keep workloads in the existing environment|

- **Self-managed MySQL to Amazon RDS - Replatform**
- **Self-managed MySQL to Amazon EC2 without modifications - Rehost** 

## **4. Practice Question**

### **Question**

Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low-latency links?

### **Choices**

A. Private networking  
B. Availability Zone  
C. Region  
D. Edge location

### **Answers**

**B. Availability Zone**

### **Why**

An **Availability Zone (AZ)** consists of one or more discrete data centers with independent power and networking infrastructure.

Availability Zones within the same AWS Region are interconnected through high-speed, low-latency network connections.

Other options:
- **Private networking** - A networking concept rather than a component of the AWS Global Infrastructure hierarchy.
- **Region** - A geographical area containing multiple Availability Zones.
- **Edge location** - A point of presence primarily used for content delivery and caching closer to users.

### **Exam Focus**

|Infrastructure Component|Description|
|---|---|
|**Region**|Geographical area containing multiple AZs|
|**Availability Zone**|One or more discrete data centers|
|**Edge location**|Content delivery and caching closer to users|

- **One or more discrete data centers - Availability Zone**
- **Multiple Availability Zones - Region**
- **Low-latency content delivery to users - Edge location**

## **5. Practice Question**

### **Question**

What are the benefits of using DynamoDB?

### **Choices**

A. Supports both relational and non-relational data models  
B. Provides resizable instances to match the current demand  
C. Offers extremely low (single-digit millisecond) latency  
D. Supports the most popular NoSQL database engines such as CouchDB and MongoDB  
E. Automatically scales to meet required throughput capacity

### **Answers**

**C. Offers extremely low (single-digit millisecond) latency**
**E. Automatically scales to meet required throughput capacity**

### **Why**

**Amazon DynamoDB** is a fully managed, serverless NoSQL database service that supports:
- Consistent **single-digit millisecond latency** at any scale.
- Automatic scaling of throughput capacity to accommodate changing application demand.

Other options:
- **Relational and non-relational data models** - DynamoDB only supports NoSQL key-value and document data models.
- **Resizable instances** - DynamoDB is serverless and does not require customers to provision or resize database instances.
- **Third-party NoSQL database engines** - DynamoDB is an AWS database service that does not run MongoDB or CouchDB engines.

### **Exam Focus**

- **Serverless NoSQL database - Amazon DynamoDB**
- **Key-value and document data models**
- **Single-digit millisecond latency**
- **Automatic throughput scaling**
- **No database instances to manage**

## **6. Practice Question**

### **Question**

Which pillar of the AWS Well-Architected Framework focuses on avoiding unnecessary costs and using the most cost-effective resources?

### **Choices**

A. Operational Excellence  
B. Cost Optimization  
C. Sustainability  
D. Performance Efficiency

### **Answers**

**B. Cost Optimization**

### **Why**

The **Cost Optimization** pillar focuses on avoiding unnecessary expenses, selecting cost-effective resources, and meeting business requirements without overspending.

Other options:
- **Operational Excellence** - Running and monitoring systems to deliver business value and continuously improve operational processes.
- **Sustainability** - Minimizing the environmental impact of cloud workloads.
- **Performance Efficiency** - Efficiently using computing resources to meet performance requirements.

### **Exam Focus**

|Pillar|Exam Clue|
|---|---|
|**Cost Optimization**|Avoid unnecessary costs and overspending|
|**Operational Excellence**|Improve operations and processes|
|**Sustainability**|Reduce environmental impact|
|**Performance Efficiency**|Efficient resource usage to meet performance requirements|

- **Cost-effective resources - Cost Optimization**
- **Performance requirements - Performance Efficiency**

## **7. Practice Question**

### **Question**

Which of the following are examples of the customer's responsibility to implement security IN the cloud?

### **Choices**

A. Creating a new hypervisor  
B. File system encryption  
C. Patch management of the underlying infrastructure  
D. Replacing physical hardware  
E. Building a schema for an application

### **Answers**

**B. File system encryption**
**E. Building a schema for an application**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for **security IN the cloud**, including managing their applications, configurations, and data.
- **File system encryption** - Customers are responsible for protecting their data at rest on EC2 instances.
- **Building an application schema** - Customers are responsible for developing and managing their application and its data structures.

Other options:
- **Creating a new hypervisor** - AWS manages the underlying virtualization layer.
- **Patch management of the underlying infrastructure** - AWS patches and maintains the underlying infrastructure. Customers patch their EC2 guest operating systems.
- **Replacing physical hardware** - AWS manages and maintains physical servers, storage, and networking equipment.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Physical hardware maintenance|File system encryption|
|Hypervisor management|Application development and configuration|
|Underlying infrastructure patching|EC2 guest OS patching|
|Physical infrastructure security|Customer data protection|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **Host operating system patching - AWS**
- **EC2 guest operating system patching - Customer**

## **8. Practice Question**

### **Question**

One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?

### **Choices**

A. Low instance start-up fees  
B. Low-cost instance tagging  
C. Per-second instance billing  
D. Low monthly instance maintenance costs

### **Answers**

**C. Per-second instance billing**

### **Why**

**Amazon EC2 per-second billing** allows customers to pay for the actual compute time consumed, subject to a **60-second minimum** for eligible instances.

This avoids paying for unused portions of an hour and supports the AWS **pay-as-you-go pricing model**.

Other options:
- **Low instance start-up fees** - EC2 On-Demand instances do not have a start-up fee.
- **Low-cost instance tagging** - Tags help with resource organization and cost allocation but do not directly reduce instance prices.
- **Low monthly instance maintenance costs** - AWS maintains the underlying physical infrastructure as part of its service. There is no separate monthly physical maintenance fee.

### **Exam Focus**

- **Pay for actual compute usage - Per-second billing**
- **Minimum billing duration - 60 seconds for eligible instances**
- **No upfront commitment - On-Demand pricing**
- **Track and allocate resource costs - Cost allocation tags**
- **Physical infrastructure maintenance - AWS responsibility**

## **9. Practice Question**

### **Question**

Under the AWS shared responsibility model, AWS is responsible for which security-related task?

### **Choices**

A. Physical security of global infrastructure  
B. Lifecycle management of IAM credentials  
C. Encryption of Amazon EBS volumes  
D. Firewall configuration

### **Answers**

**A. Physical security of global infrastructure**

### **Why**

AWS is responsible for **security OF the cloud**, including the physical security of data centers, facilities, servers, and networking hardware.

Customers do not have access to or control over the underlying physical infrastructure.

Other options:
- **Lifecycle management of IAM credentials** - Customers are responsible for creating, rotating, and deleting their IAM credentials.
- **Encryption of Amazon EBS volumes** - Customers are responsible for configuring their encryption requirements and appropriate encryption keys.
- **Firewall configuration** - Customers are responsible for configuring security groups and network ACLs to control network access.

### **Exam Focus**

|Security Task|Responsibility|
|---|---|
|Physical data center security|**AWS**|
|Physical hardware security|**AWS**|
|IAM credential management|**Customer**|
|EBS encryption configuration|**Customer**|
|Security group configuration|**Customer**|
|Network ACL configuration|**Customer**|

- **AWS provides security capabilities; customers configure them according to their requirements.**

## **10. Practice Question**

### **Question**

Which of the following services is used when encrypting EBS volumes?

### **Choices**

A. AWS KMS  
B. Amazon GuardDuty  
C. Amazon Macie  
D. AWS WAF

### **Answers**

**A. AWS KMS**

### **Why**

**AWS Key Management Service (AWS KMS)** manages cryptographic keys used to encrypt data.

It integrates with **Amazon Elastic Block Store (Amazon EBS)** to support encryption of data at rest, including encryption key creation, management, rotation, and access control.

Other options:
- **Amazon GuardDuty** - Threat detection service that identifies suspicious and potentially malicious activity in AWS environments.
- **Amazon Macie** - Discovers and classifies sensitive data stored in Amazon S3 using machine learning.
- **AWS WAF** - Web application firewall that filters HTTP and HTTPS traffic and protects against common web exploits such as SQL injection and cross-site scripting (XSS).

### **Exam Focus**

|Service|Primary Purpose|Exam Keywords|
|---|---|---|
|**AWS KMS**|Encryption key management|Encryption, cryptographic keys, EBS encryption|
|**Amazon GuardDuty**|Threat detection|Suspicious activity, malicious activity|
|**Amazon Macie**|Sensitive data discovery|Amazon S3, sensitive data, PII|
|**AWS WAF**|Web application protection|HTTP/HTTPS filtering, SQL injection, XSS|

- **Manage encryption keys - AWS KMS**
- **Detect malicious activity - Amazon GuardDuty**
- **Discover sensitive data in Amazon S3 - Amazon Macie**
- **Protect applications against web exploits - AWS WAF**

## **11. Practice Question**

### **Question**

What can assist in evaluating an application for migration to the cloud?

### **Choices**

A. AWS Secrets Manager  
B. AWS Trusted Advisor  
C. AWS Professional Services  
D. AWS Partner Network (APN)  
E. AWS Systems Manager

### **Answers**

**C. AWS Professional Services**
**D. AWS Partner Network (APN)**

### **Why**

**AWS Professional Services** provides expert consulting services to help organizations evaluate applications, develop migration strategies, and plan cloud migrations.

**AWS Partner Network (APN)** provides access to consulting and technology partners with specialized expertise in cloud adoption and migration.

Other options:
- **AWS Secrets Manager** - Stores, manages, and rotates sensitive credentials such as database passwords and API keys.
- **AWS Trusted Advisor** - Provides best practice recommendations for existing AWS environments, rather than evaluating applications for migration.
- **AWS Systems Manager** - Provides operational management capabilities, including resource configuration and patch management.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS Professional Services**|Expert consulting and migration assistance from AWS|
|**AWS Partner Network (APN)**|Access to specialized AWS partners|
|AWS Trusted Advisor|AWS best practice recommendations|
|AWS Systems Manager|Resource and operational management|
|AWS Secrets Manager|Secrets management and rotation|

## **12. Practice Question**

### **Question**

What does Amazon ElastiCache provide?

### **Choices**

A. In-memory caching for read-heavy applications  
B. An online software store that allows customers to launch pre-configured software with just a few clicks  
C. A domain name system in the cloud  
D. A managed relational database service

### **Answers**

**A. In-memory caching for read-heavy applications**

### **Why**

**Amazon ElastiCache** is a managed in-memory caching service that stores frequently accessed data in RAM to provide **sub-millisecond latency**.

It improves application performance and reduces the workload on underlying databases, making it suitable for read-heavy applications. It supports caching engines such as Redis OSS and Memcached.

Other options:
- **Online software store** - Describes AWS Marketplace, which allows customers to discover, purchase, and deploy software.
- **Domain name system** - Describes Amazon Route 53, which provides DNS and traffic routing.
- **Managed relational database** - Describes Amazon RDS, which manages relational databases.

### **Exam Focus**

- **In-memory caching - Amazon ElastiCache**
- **Sub-millisecond latency - Amazon ElastiCache**
- **Read-heavy applications and reduced database load - Amazon ElastiCache**
- **Discover and purchase third-party software - AWS Marketplace**
- **DNS and domain routing - Amazon Route 53**
- **Managed relational databases - Amazon RDS**

## **13. Practice Question**

### **Question**

Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?

### **Choices**

A. She has properly built an encrypted system  
B. She has properly built a scalable system  
C. She has properly built a fault tolerant system  
D. She has properly built an elastic system

### **Answers**

**C. She has properly built a fault tolerant system**

### **Why**

**Fault tolerance** is the ability of a system to continue operating without interruption when some of its components fail.

Despite losing three EC2 instances, the application continued serving customers without interruption. This demonstrates fault tolerance.

Other options:
- **Encrypted system** - Protects data against unauthorized access using cryptographic controls, rather than preventing service interruptions.
- **Scalable system** - Can handle increasing workloads by adding resources but does not necessarily continue operating during component failures.
- **Elastic system** - Automatically increases or decreases resource capacity according to demand, rather than specifically addressing component failures.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Fault tolerance**|Continue operating despite component failures|
|**Scalability**|Handle increasing workloads|
|**Elasticity**|Adjust resource capacity according to demand|
|**Encryption**|Protect data against unauthorized access|

- **Component failure without service interruption - Fault tolerance**
- **Capacity increases and decreases with demand - Elasticity**

## **14. Practice Question**

### **Question**

Why would an organization decide to use AWS over an on-premises data center?

### **Choices**

A. Elastic resources  
B. Free commercial software licenses  
C. Free technical support  
D. Cost Savings  
E. On-site visits for auditing

### **Answers**

**A. Elastic resources**
**D. Cost Savings**

### **Why**

AWS provides several advantages over traditional on-premises data centers:
- **Elastic resources** - Resources can scale up and down according to demand, avoiding unnecessary over-provisioning.
- **Cost savings** - Pay-as-you-go pricing reduces the need for large upfront capital investments in physical infrastructure.

Other options:
- **Free commercial software licenses** - Commercial software may require separate licensing fees. AWS does not automatically provide free licenses.
- **Free technical support** - AWS Basic Support provides account and billing assistance, but technical support from AWS support engineers requires an appropriate paid support plan.
- **On-site visits for auditing** - Customers obtain compliance evidence through AWS audit reports and certifications using AWS Artifact rather than physically inspecting AWS data centers.

### **Exam Focus**

- **Scale resources according to demand - Elasticity**
- **Avoid over-provisioning - Elastic resources**
- **Trade upfront capital expenses for variable expenses**
- **Pay only for resources consumed - Pay-as-you-go pricing**
- **Access AWS compliance reports - AWS Artifact**

## **15. Practice Question**

### **Question**

Which AWS Cloud Adoption Framework (AWS CAF) perspective helps ensure that cloud workloads achieve the confidentiality, integrity, and availability of data?

### **Choices**

A. Governance  
B. Security  
C. Platform  
D. Operations

### **Answers**

**B. Security**

### **Why**

The **Security perspective** of the AWS Cloud Adoption Framework (AWS CAF) helps organizations achieve the **confidentiality, integrity, and availability (CIA)** of their data and cloud workloads.

It includes capabilities such as identity management, threat detection, infrastructure protection, and incident response.

Other options:
- **Governance** - Manages cloud transformation initiatives, business alignment, and transformation risks.
- **Platform** - Focuses on designing and building scalable cloud environments, including infrastructure and networking.
- **Operations** - Focuses on delivering and maintaining cloud services through monitoring, incident management, and continuous improvement.

### **Exam Focus**

|AWS CAF Perspective|Primary Focus|
|---|---|
|**Security**|Confidentiality, integrity, and availability|
|Governance|Manage transformation initiatives and risks|
|Platform|Design and build cloud infrastructure|
|Operations|Operate and maintain cloud workloads|

**CIA Triad:**
- **Confidentiality** - Prevent unauthorized access to data.
- **Integrity** - Protect data against unauthorized modification.
- **Availability** - Ensure data and systems remain accessible when needed.

**Confidentiality, integrity, and availability - AWS CAF Security perspective**

## **16. Practice Question**

### **Question**

Which AWS networking service enables a company to create a virtual network within AWS?

### **Choices**

A. Amazon Virtual Private Cloud (Amazon VPC)  
B. AWS Config  
C. AWS Direct Connect  
D. Amazon Route 53

### **Answers**

**A. Amazon Virtual Private Cloud (Amazon VPC)**

### **Why**

**Amazon Virtual Private Cloud (Amazon VPC)** enables customers to create logically isolated virtual networks within AWS.

Customers have control over their virtual networking environment, including IP address ranges, subnets, route tables, and network gateways.

Other options:
- **AWS Config** - Records AWS resource configurations, tracks configuration changes, and assesses compliance.
- **AWS Direct Connect** - Establishes a dedicated private network connection between on-premises infrastructure and AWS.
- **Amazon Route 53** - Provides DNS, domain registration, and traffic routing services.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon VPC**|Create isolated virtual networks within AWS|
|AWS Config|Resource configuration tracking and compliance|
|AWS Direct Connect|Dedicated network connection to AWS|
|Amazon Route 53|DNS and traffic routing|

- **Create a virtual network within AWS - Amazon VPC**
- **Dedicated connection from on-premises to AWS - AWS Direct Connect**

## **17. Practice Question**

### **Question**

Which of the below are responsibilities of the customer when using Amazon EC2?

### **Choices**

A. Maintaining consistent hardware components  
B. Installing and configuring third-party software  
C. Patching of the underlying infrastructure  
D. Protecting sensitive data  
E. Setup and operation of managed databases

### **Answers**

**B. Installing and configuring third-party software**
**D. Protecting sensitive data**

### **Why**

Under the **AWS Shared Responsibility Model**, customers using Amazon EC2 are responsible for managing their guest operating systems, applications, and data.
- **Installing and configuring third-party software** - Customers manage the software and applications running on their EC2 instances.
- **Protecting sensitive data** - Customers are responsible for protecting their data at rest and in transit through encryption and access controls.

Other options:
- **Maintaining consistent hardware components** - AWS maintains the physical hardware supporting EC2 instances.
- **Patching of the underlying infrastructure** - AWS patches the underlying infrastructure and virtualization layer. Customers patch their EC2 guest operating systems.
- **Setup and operation of managed databases** - AWS manages the underlying infrastructure and routine database operations for managed database services. Customers still configure their databases and manage their data. This is not a general EC2 responsibility.

### **Exam Focus**

|AWS Responsibility|EC2 Customer Responsibility|
|---|---|
|Physical hardware maintenance|Third-party software installation|
|Underlying infrastructure patching|Guest OS patching|
|Hypervisor management|Application configuration|
|Physical infrastructure security|Sensitive data protection|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **EC2 guest operating system and applications - Customer responsibility**

## **18. Practice Question**

### **Question**

Which of the following factors should be considered when determining the region in which AWS Resources will be deployed?

### **Choices**

A. Data sovereignty  
B. The AWS Region's security level  
C. Cost  
D. Geographic proximity to the company's location  
E. The planned number of VPCs

### **Answers**

**A. Data sovereignty**
**C. Cost**

### **Why**

When selecting an AWS Region, organizations should consider:
- **Data sovereignty** - Legal and regulatory requirements may require data to be stored or processed within specific geographic locations.
- **Cost** - AWS resource pricing can vary between Regions, affecting the overall cost of running workloads.

Other options:
- **The AWS Region's security level** - AWS Regions follow common AWS security standards. A Region's general security level is not a standard differentiating factor.
- **Geographic proximity to the company's location** - Latency considerations primarily depend on proximity to end users rather than the company's physical location.
- **The planned number of VPCs** - This is a network architecture consideration rather than a primary factor in Region selection.

### **Exam Focus**

Important AWS Region selection factors:

|Factor|Purpose|
|---|---|
|**Data sovereignty and compliance**|Meet legal and regulatory requirements|
|**Pricing**|Optimize workload costs|
|**Proximity to end users**|Minimize application latency|

- **Data must remain within a specific country - Data sovereignty**
- **Resource prices differ between Regions - Cost**
- **Proximity to end users, not necessarily company headquarters - Latency**

## **19. Practice Question**

### **Question**

A software company wants to deliver its desktop application to customers through a web browser without requiring customers to download or install anything locally. The application should run on AWS infrastructure and stream its interface to the browser. Which AWS service should the company use?

### **Choices**

A. Amazon WorkSpaces  
B. Amazon AppStream 2.0  
C. AWS Amplify  
D. Amazon WorkSpaces Web

### **Answers**

**B. Amazon AppStream 2.0**

### **Why**

**Amazon AppStream 2.0** is a fully managed application streaming service that runs desktop applications on AWS infrastructure and streams their interfaces to users through a web browser.

Users can access desktop applications without downloading or installing software on their local devices.

The key distinction is that the company wants to deliver a **desktop application**, rather than a complete virtual desktop or access to existing websites.

Other options:
- **Amazon WorkSpaces** - Provides users with complete cloud-based virtual desktop environments rather than focusing on individual application streaming.
- **AWS Amplify** - Provides development and hosting capabilities for full-stack web and mobile applications. It does not stream existing desktop applications.
- **Amazon WorkSpaces Web** - Provides secure browser-based access to internal websites and SaaS applications rather than streaming desktop applications running on AWS infrastructure.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon AppStream 2.0**|Desktop application streaming|Access desktop applications through a browser|
|**Amazon WorkSpaces**|Virtual desktops|Complete cloud-based desktop environment|
|**Amazon WorkSpaces Web**|Secure web access|Internal websites and SaaS applications|
|**AWS Amplify**|Application development and hosting|Build and deploy web and mobile applications|

- **Stream a desktop application through a browser - Amazon AppStream 2.0**
- **Provide a complete virtual desktop - Amazon WorkSpaces**
- **Provide secure access to internal websites - Amazon WorkSpaces Web**
- **Develop and host web and mobile applications - AWS Amplify**

## **20. Practice Question**

### **Question**

Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?

### **Choices**

A. Access keys  
B. Security groups  
C. Access Control Lists (ACL)  
D. Virtual private gateways

### **Answers**

**B. Security groups**

### **Why**

**Security groups** act as stateful virtual firewalls at the EC2 instance level, controlling inbound and outbound network traffic.

Security group rules determine which traffic is permitted based on protocols, ports, sources, and destinations.

Other options:
- **Access keys** - Credentials used for programmatic access to AWS through the AWS CLI or APIs. They provide authentication rather than network traffic filtering.
- **Access Control Lists (ACL)** - Network ACLs act as stateless firewalls at the subnet level rather than the instance level.
- **Virtual private gateways** - Provide an AWS-side endpoint for Site-to-Site VPN connections between a VPC and an on-premises network.

### **Exam Focus**

|Feature|Security Groups|Network ACLs|
|---|---|---|
|Scope|**Instance level**|**Subnet level**|
|Connection tracking|**Stateful**|**Stateless**|
|Return traffic|Automatically permitted for allowed connections|Requires appropriate rules|
|Purpose|Control traffic to and from instances|Control traffic entering and leaving subnets|

- **Instance-level virtual firewall - Security group**
- **Subnet-level virtual firewall - Network ACL**
- **Programmatic AWS authentication - Access keys**
- **AWS-side VPN endpoint - Virtual private gateway**

## **21. Practice Question**

### **Question**

Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?

### **Choices**

A. AWS Trusted Advisor  
B. Amazon Cognito  
C. Amazon Macie  
D. AWS Secrets Manager

### **Answers**

**A. AWS Trusted Advisor**

### **Why**

**AWS Trusted Advisor** provides best practice recommendations and identifies potential security vulnerabilities caused by common AWS account and resource misconfigurations.

Examples include:
- Unrestricted security group access.
- Missing MFA on the root account.
- Publicly accessible Amazon S3 buckets.

Other options:
- **Amazon Cognito** - Provides user authentication, authorization, and identity management for web and mobile applications.
- **Amazon Macie** - Discovers and classifies sensitive data stored in Amazon S3 rather than evaluating account-wide security configurations.
- **AWS Secrets Manager** - Stores, manages, and rotates sensitive credentials rather than identifying security vulnerabilities.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS Trusted Advisor**|Best practice recommendations and security configuration checks|
|Amazon Cognito|Application user authentication and authorization|
|Amazon Macie|Sensitive data discovery in Amazon S3|
|AWS Secrets Manager|Secrets storage and rotation|

- **Identify common AWS account security misconfigurations - AWS Trusted Advisor**
- **Identify sensitive data exposure in Amazon S3 - Amazon Macie**

## **22. Practice Question**

### **Question**

Which AWS service can automatically move data between on-premises storage and Amazon EFS or Amazon S3 up to 10 times faster than open-source tools?

### **Choices**

A. AWS Migration Hub  
B. AWS Transfer Family  
C. AWS DataSync  
D. Amazon Kinesis Data Firehose

### **Answers**

**C. AWS DataSync**

### **Why**

**AWS DataSync** is a managed data transfer service that automates and accelerates data movement between on-premises storage and AWS storage services such as Amazon S3 and Amazon EFS.

It provides built-in capabilities such as:
- High-speed data transfers.
- Data encryption.
- Data integrity validation.
- Network optimization.

Other options:
- **AWS Migration Hub** - Provides a centralized location for tracking and coordinating application migrations rather than transferring data.
- **AWS Transfer Family** - Provides managed file transfers using protocols such as SFTP, FTPS, and FTP. It focuses on protocol-based file transfer workflows rather than accelerated storage migration.
- **Amazon Kinesis Data Firehose** - Delivers real-time streaming data to destinations such as Amazon S3, Amazon Redshift, and Amazon OpenSearch Service rather than migrating existing files.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS DataSync**|Automated, accelerated data transfer|On-premises storage to S3 or EFS|
|**AWS Transfer Family**|Managed file transfer protocols|SFTP, FTPS, FTP|
|**AWS Migration Hub**|Migration tracking|Centralized migration progress|
|**Amazon Kinesis Data Firehose**|Streaming data delivery|Real-time data ingestion|

- **Accelerated storage migration - AWS DataSync**
- **Transfer files using SFTP, FTPS, or FTP - AWS Transfer Family**
- **Track migration progress - AWS Migration Hub**
- **Deliver streaming data to storage destinations - Amazon Kinesis Data Firehose**

## **23. Practice Question**

### **Question**

Which AWS Service can be used to register a new domain name?

### **Choices**

A. AWS Config  
B. Amazon Route 53  
C. AWS KMS  
D. Amazon Personalize

### **Answers**

**B. Amazon Route 53**

### **Why**

**Amazon Route 53** is a managed DNS service that provides domain name registration, DNS resolution, health checks, and traffic routing.

Customers can register new domain names and route users to their application endpoints.

Other options:
- **AWS Config** - Tracks AWS resource configurations and evaluates compliance.
- **AWS KMS** - Creates and manages cryptographic keys used for data encryption.
- **Amazon Personalize** - Uses machine learning to provide personalized product and content recommendations.

### **Exam Focus**

- **Domain name registration - Amazon Route 53**
- **DNS resolution and traffic routing - Amazon Route 53**
- **Resource configuration and compliance tracking - AWS Config**
- **Encryption key management - AWS KMS**
- **Personalized recommendations using machine learning - Amazon Personalize**

## **24. Practice Question**

### **Question**

Under the AWS shared responsibility model, what are the customer's responsibilities?

### **Choices**

A. Security of data in transit  
B. Physical network devices including firewalls  
C. Data integrity authentication  
D. Storage device decommissioning  
E. Physical and environmental security

### **Answers**

**A. Security of data in transit**
**C. Data integrity authentication**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for protecting their data and ensuring its confidentiality and integrity.
- **Security of data in transit** - Customers implement encryption protocols such as TLS to protect data as it moves between systems.
- **Data integrity authentication** - Customers implement mechanisms to verify that data has not been tampered with or modified without authorization.

Other options:
- **Physical network devices including firewalls** - AWS manages the underlying physical networking infrastructure. Customers configure virtual security controls such as security groups and network ACLs.
- **Storage device decommissioning** - AWS is responsible for securely disposing of physical storage devices when they reach the end of their useful life.
- **Physical and environmental security** - AWS manages data center facilities, physical access controls, power, and cooling systems.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Physical network devices|Virtual network security configuration|
|Physical storage device disposal|Data protection|
|Physical and environmental security|Encryption of data in transit|
|Data center access controls|Data integrity authentication|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **Physical firewalls - AWS responsibility**
- **Virtual firewall configuration - Customer responsibility**
- **Secure disposal of physical storage media - AWS responsibility**

## **25. Practice Question**

### **Question**

Which of the following tasks is required to deploy a PCI-compliant workload on AWS?

### **Choices**

A. Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer  
B. Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer  
C. Use any AWS service and implement PCI controls at the application layer  
D. Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service

### **Answers**

**B. Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer**

### **Why**

The **Payment Card Industry Data Security Standard (PCI DSS)** establishes security requirements for protecting payment card data.

Under the **AWS Shared Responsibility Model**, customers must select appropriate AWS services that are in scope for PCI DSS compliance and implement the applicable security controls at the application layer.

AWS maintains compliance for its underlying infrastructure, but using PCI-compliant AWS services does not automatically make a customer's application compliant.

Other options:
- **A. In-scope service and support ticket** - Selecting an eligible service is appropriate, but opening a support ticket does not enable application-level PCI compliance.
- **C. Any AWS service and application-level controls** - Application-level controls alone are insufficient. Customers must also ensure that the AWS services used for the PCI workload are within the applicable compliance scope.
- **D. Any AWS service and support ticket** - Opening a support ticket does not make an AWS service or customer workload PCI-compliant.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Maintain applicable infrastructure compliance|Select appropriate PCI in-scope services|
|Provide compliance documentation|Implement application-level PCI controls|
|Protect underlying infrastructure|Configure and secure customer workloads|

- **Payment card data security - PCI DSS**
- **Access AWS compliance reports and certifications - AWS Artifact**
- **AWS infrastructure compliance does not automatically guarantee customer workload compliance.**
- **Customers are responsible for implementing applicable application-level compliance controls.**

## **26. Practice Question**

### **Question**

Which principles are used to architect applications for reliability on the AWS Cloud?

### **Choices**

A. Manage changes via documented processes  
B. Backup recovery to an on-premises environment  
C. Use multiple Availability Zones  
D. Design for automated failure recovery  
E. Test for moderate demand to ensure reliability

### **Answers**

**C. Use multiple Availability Zones**
**D. Design for automated failure recovery**

### **Why**

The **Reliability** pillar of the AWS Well-Architected Framework focuses on ensuring workloads perform their intended functions and recover from failures.
- **Use multiple Availability Zones** - Distributes workloads across isolated locations, reducing the impact of an Availability Zone failure.
- **Design for automated failure recovery** - Enables systems to detect failures and recover automatically without requiring manual intervention.

Other options:

- **Manage changes via documented processes** - Supports controlled change management and Operational Excellence but is not the most direct reliability principle among these choices.
- **Backup recovery to an on-premises environment** - May be part of a disaster recovery strategy, but recovery does not specifically need to occur on-premises to achieve cloud reliability.
- **Test for moderate demand** - Testing only moderate workloads is insufficient. Reliability requires testing recovery procedures and the system's ability to handle changing demand and failures.

### **Exam Focus**

- **Recover automatically from failures - Reliability**
- **Distribute workloads across multiple AZs - High availability and reliability**
- **Continue operating despite component failures - Fault tolerance**
- **Test failure recovery procedures - Reliability**
- **Avoid single points of failure - Reliability**

## **27. Practice Question**

### **Question**

An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?

### **Choices**

A. AWS Identity and Access Management  
B. Amazon EMR  
C. Network Access Control Lists  
D. Amazon RDS

### **Answers**

**A. AWS Identity and Access Management**

### **Why**

**AWS Identity and Access Management (IAM)** enables administrators to securely control access to AWS services and resources.

IAM uses users, groups, roles, and permission policies to determine which AWS resources developers can access and which actions they are allowed to perform.

Other options:
- **Amazon EMR** - Managed big data processing service that supports distributed data processing frameworks such as Apache Spark and Hadoop.
- **Network Access Control Lists (NACLs)** - Stateless subnet-level firewalls that control inbound and outbound network traffic rather than user permissions.
- **Amazon RDS** - Managed relational database service rather than an AWS identity and access management service.

### **Exam Focus**

|Service or Feature|Primary Purpose|
|---|---|
|**AWS IAM**|Manage identities and permissions|
|Amazon EMR|Large-scale data processing|
|Network ACL|Subnet-level network traffic control|
|Amazon RDS|Managed relational databases|

- **Control who can access AWS resources and what actions they can perform - AWS IAM**
- **Define allowed and denied actions - IAM policies**
- **Control network traffic rather than user permissions - Network ACLs**

## **28. Practice Question**

### **Question**

Why should a company choose AWS instead of a traditional data center?

### **Choices**

A. AWS does not require long-term contracts and provides a pay-as-you-go model  
B. AWS provides users with full control over the underlying resources  
C. AWS offers edge locations in every country, supporting global reach  
D. AWS has no limits on the number of resources that can be created

### **Answers**

**A. AWS does not require long-term contracts and provides a pay-as-you-go model**

### **Why**

AWS provides a **pay-as-you-go pricing model**, allowing customers to pay for the resources they consume without requiring long-term commitments for most services.

This eliminates the need for large upfront capital investments in physical infrastructure and allows companies to adjust spending according to actual demand.

Other options:
- **Full control over underlying resources** - AWS manages the physical hardware, hypervisor, and underlying infrastructure. Customers manage their workloads and data.
- **Edge locations in every country** - AWS provides global reach through its infrastructure, but edge locations are not available in every country.
- **No resource limits** - AWS services have service quotas that limit the number of resources customers can create. Increases can be requested for adjustable quotas.

### **Exam Focus**

- **Pay only for resources consumed - Pay-as-you-go pricing**
- **No long-term commitment required - On-Demand pricing**
- **Trade capital expenses (CapEx) for variable expenses (OpEx)**
- **Underlying physical infrastructure - AWS responsibility**
- **Resource limits - AWS Service Quotas**
- **Global reach does not mean AWS has infrastructure in every country.**

## **29. Practice Question**

### **Question**

Which AWS service is a fully managed container orchestration service that supports Docker containers and allows scheduling containers on a managed cluster of Amazon EC2 instances?

### **Choices**

A. Amazon ECS  
B. AWS Batch  
C. AWS Lambda  
D. Amazon EKS

### **Answers**

**A. Amazon ECS**

### **Why**

**Amazon Elastic Container Service (Amazon ECS)** is a fully managed container orchestration service that supports Docker containers.

It allows customers to schedule, deploy, manage, and scale containerized applications on clusters of Amazon EC2 instances using AWS-native container orchestration.

Other options:
- **AWS Batch** - Runs and manages large-scale batch computing jobs rather than providing general-purpose container orchestration.
- **AWS Lambda** - Serverless compute service that executes code in response to events without requiring customers to manage servers.
- **Amazon EKS** - Managed Kubernetes service for orchestrating containerized applications using Kubernetes rather than ECS's native orchestration capabilities.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon ECS**|AWS-native container orchestration|Docker containers, ECS clusters|
|**Amazon EKS**|Managed Kubernetes orchestration|Kubernetes|
|**AWS Batch**|Managed batch computing|Large-scale batch jobs|
|**AWS Lambda**|Serverless code execution|Event-driven functions|

- **AWS-native container orchestration - Amazon ECS**
- **Managed Kubernetes - Amazon EKS**
- **Run large-scale batch computing jobs - AWS Batch**
- **Execute code in response to events - AWS Lambda**

## **30. Practice Question**

### **Question**

A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. Which AWS service can be used to meet these requirements?

### **Choices**

A. AWS Config  
B. AWS Systems Manager  
C. AWS Resource Access Manager  
D. AWS Trusted Advisor

### **Answers**

**A. AWS Config**

### **Why**

**AWS Config** continuously records and evaluates AWS resource configurations, allowing customers to audit resources and assess compliance against defined rules.

It provides capabilities such as:
- Tracking resource configuration changes.
- Maintaining configuration history.
- Evaluating resources against compliance rules.
- Identifying non-compliant resources.
- Providing notifications when resource configurations or compliance statuses change.

Other options:
- **AWS Systems Manager** - Provides operational management capabilities such as patch management, automation, parameter storage, and remote command execution. Its primary purpose is not continuous resource configuration auditing.
- **AWS Resource Access Manager (AWS RAM)** - Enables customers to share supported AWS resources across AWS accounts rather than evaluate compliance.
- **AWS Trusted Advisor** - Provides best practice recommendations across areas such as security, cost, performance, and fault tolerance. It does not maintain detailed resource configuration history or continuously evaluate configurations against customer-defined compliance rules.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Config**|Configuration tracking and compliance|Configuration history, compliance rules, resource changes|
|**AWS Systems Manager**|Operational management|Patching, automation, remote commands|
|**AWS Resource Access Manager**|Cross-account resource sharing|Share subnets and other supported resources|
|**AWS Trusted Advisor**|Best practice recommendations|Cost savings, security recommendations, optimization|

#### **AWS Config vs AWS Trusted Advisor**

|AWS Config|AWS Trusted Advisor|
|---|---|
|Tracks resource configurations|Provides best practice recommendations|
|Maintains configuration history|Identifies optimization opportunities|
|Evaluates resources against compliance rules|Identifies common security misconfigurations|
|Notifies customers of configuration changes|Highlights potential improvements|

- **Audit resource configurations and evaluate compliance - AWS Config**
- **Identify common security weaknesses and optimization opportunities - AWS Trusted Advisor**
- **Manage and patch AWS resources - AWS Systems Manager**
- **Share resources across AWS accounts - AWS Resource Access Manager**

## **31. Practice Question**

### **Question**

A company needs to define how it will manage and monitor cloud workloads on a day-to-day basis after migration. Which AWS Cloud Adoption Framework (AWS CAF) perspective addresses this?

### **Choices**

A. Governance  
B. Business  
C. Platform  
D. Operations

### **Answers**

**D. Operations**

### **Why**

The **Operations perspective** of the AWS Cloud Adoption Framework (AWS CAF) focuses on ensuring cloud services are delivered and managed to meet ongoing business needs.

It covers monitoring, incident management, event management, and continuous improvement of operational processes.

Other options:
- **Governance** - Focuses on strategic alignment, risk management, and compliance rather than daily operational activities.
- **Business** - Focuses on aligning cloud investments with business outcomes and measuring return on investment (ROI).
- **Platform** - Focuses on designing, building, and maintaining cloud architecture and infrastructure rather than day-to-day workload operations.

### **Exam Focus**

|AWS CAF Perspective|Primary Focus|
|---|---|
|**Operations**|Day-to-day workload management and monitoring|
|Governance|Risk management and governance|
|Business|Business outcomes and return on investment|
|Platform|Cloud architecture and infrastructure|

- **Day-to-day cloud workload management - Operations perspective**
- **Monitoring and incident management - Operations perspective**

## **32. Practice Question**

### **Question**

Which of the following are advantages of the AWS Cloud?

### **Choices**

A. AWS manages cost planning for virtual servers  
B. AWS manages capacity planning for physical servers  
C. AWS manages the maintenance of the cloud infrastructure  
D. AWS manages the development of applications on AWS  
E. AWS manages the security of applications built on AWS

### **Answers**

**B. AWS manages capacity planning for physical servers**
**C. AWS manages the maintenance of the cloud infrastructure**

### **Why**

AWS removes the burden of managing physical infrastructure, allowing customers to focus on their applications and business objectives.
- **Capacity planning for physical servers** - AWS manages the underlying physical computing capacity required to support customer workloads.
- **Cloud infrastructure maintenance** - AWS maintains physical hardware, networking equipment, and data center facilities.

Other options:
- **Cost planning for virtual servers** - Customers are responsible for selecting appropriate instance types, monitoring usage, and optimizing costs using tools such as AWS Cost Explorer and AWS Budgets.
- **Application development** - Customers are responsible for designing, developing, and maintaining their applications.
- **Application security** - Customers are responsible for securing application code, access controls, and customer data under the Shared Responsibility Model.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Physical server capacity planning|Virtual resource capacity and cost planning|
|Physical infrastructure maintenance|Application development|
|Physical infrastructure security|Application security|
|Data center management|Resource usage and cost optimization|

- **Stop spending money running and maintaining data centers.**
- **Physical infrastructure management - AWS responsibility**
- **Application management and security - Customer responsibility**

## **33. Practice Question**

### **Question**

Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?

### **Choices**

A. S3 Intelligent-Tiering  
B. S3 Standard  
C. S3 Standard-IA  
D. S3 Glacier Deep Archive

### **Answers**

**B. S3 Standard**

### **Why**

**S3 Standard** is designed for frequently accessed data that requires low latency, high throughput, and immediate retrieval.

A popular e-commerce website with stable access patterns frequently serves static assets such as images and other website files, making S3 Standard the most appropriate storage class.

Other options:
- **S3 Intelligent-Tiering** - Automatically moves objects between access tiers based on access patterns. Best suited for unknown or changing access frequency.
- **S3 Standard-IA** - Designed for infrequently accessed data that requires immediate retrieval. Retrieval charges make it less suitable for consistently accessed website assets.
- **S3 Glacier Deep Archive** - Designed for long-term archival of rarely accessed data. Does not provide immediate retrieval suitable for live website content.

### **Exam Focus**

|S3 Storage Class|Exam Clue|
|---|---|
|**S3 Standard**|Frequently accessed data with predictable demand|
|**S3 Intelligent-Tiering**|Unknown or changing access patterns|
|**S3 Standard-IA**|Infrequently accessed data requiring immediate retrieval|
|**S3 Glacier Deep Archive**|Long-term archival and lowest storage cost|

- **Frequently accessed website assets - S3 Standard**
- **Unpredictable access patterns - S3 Intelligent-Tiering**
- **Infrequent access with retrieval charges - S3 Standard-IA**

## **34. Practice Question**

### **Question**

What are the immediate benefits of using the AWS Cloud?

### **Choices**

A. User control of infrastructure  
B. Increased IT staff  
C. AWS holds responsibility for security in the cloud  
D. Capital expenses are replaced with variable expenses  
E. Increased agility

### **Answers**

**D. Capital expenses are replaced with variable expenses**
**E. Increased agility**

### **Why**

AWS provides immediate financial and operational benefits through its cloud computing model.
- **Capital expenses are replaced with variable expenses** - Organizations avoid large upfront investments in physical infrastructure and pay for resources based on consumption.
- **Increased agility** - Resources can be provisioned within minutes instead of waiting weeks for physical hardware procurement and installation.

Other options:
- **User control of infrastructure** - AWS manages the underlying physical infrastructure. Customers do not gain greater control over physical hardware.
- **Increased IT staff** - Cloud computing reduces infrastructure management responsibilities rather than requiring an increase in IT staff.
- **AWS holds responsibility for security in the cloud** - AWS is responsible for security **OF** the cloud, while customers are responsible for security **IN** the cloud.

### **Exam Focus**

|Cloud Benefit|Description|
|---|---|
|**Variable expenses (OpEx)**|Pay based on actual resource consumption|
|**Reduced capital expenses (CapEx)**|Avoid large upfront infrastructure investments|
|**Agility**|Rapidly provision resources and deploy applications|

- **Trade fixed expenses for variable expenses.**
- **Provision resources in minutes instead of weeks - Agility**
- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**

## **35. Practice Question**

### **Question**

A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?

### **Choices**

A. Amazon Elastic Container Service  
B. AWS Storage Gateway  
C. Amazon Elastic Block Store  
D. Amazon Simple Storage Service

### **Answers**

**D. Amazon Simple Storage Service**

### **Why**

**Amazon Simple Storage Service (Amazon S3)** provides virtually unlimited object storage that automatically scales according to usage without requiring customers to provision storage capacity.

Its pay-as-you-go pricing model allows customers to pay for actual storage consumption, making it suitable for cost-effective cloud storage platforms.

Other options:
- **Amazon Elastic Container Service (Amazon ECS)** - Container orchestration service used to deploy, manage, and scale containerized applications rather than store objects.
- **AWS Storage Gateway** - Connects on-premises infrastructure to AWS cloud storage for hybrid storage use cases.
- **Amazon Elastic Block Store (Amazon EBS)** - Provides persistent block storage volumes for EC2 instances. Customers provision volume capacity and pay for the allocated storage rather than the amount of data stored.

### **Exam Focus**

|Service|Storage Type or Purpose|Exam Clue|
|---|---|---|
|**Amazon S3**|Object storage|Virtually unlimited, automatically scaling storage|
|**Amazon EBS**|Block storage|Persistent disk volumes for EC2|
|**AWS Storage Gateway**|Hybrid storage|Connect on-premises storage to AWS|
|**Amazon ECS**|Container orchestration|Deploy and manage containers|

#### **Amazon S3 vs Amazon EBS**

|Feature|Amazon S3|Amazon EBS|
|---|---|---|
|Storage type|Object|Block|
|Capacity|Automatically scales|Provisioned volume capacity|
|Storage capacity pricing|Actual data stored|Provisioned storage|
|Common use case|Files, images, backups|EC2 disks and databases|

- **Automatically scaling object storage - Amazon S3**
- **Persistent block storage for EC2 - Amazon EBS**

## **36. Practice Question**

### **Question**

A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?

### **Choices**

A. Amazon ElastiCache  
B. Amazon Elastic Block Store (Amazon EBS)  
C. Amazon CloudFront  
D. Amazon Elastic File System (Amazon EFS)

### **Answers**

**C. Amazon CloudFront**

### **Why**

**Amazon CloudFront** is a content delivery network (CDN) that caches content at globally distributed edge locations.

By serving frequently accessed static content from edge locations closer to users, CloudFront reduces latency and improves application performance for geographically distributed audiences.

Other options:
- **Amazon ElastiCache** - Provides in-memory caching to reduce database load and application response times. It does not distribute website content through global edge locations.
- **Amazon EBS** - Provides persistent block storage volumes for EC2 instances rather than global content delivery.
- **Amazon EFS** - Provides shared file storage for compute resources rather than caching content closer to geographically distributed users.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon CloudFront**|Global content delivery and edge caching|
|**Amazon ElastiCache**|In-memory application and database caching|
|Amazon EBS|Persistent block storage|
|Amazon EFS|Shared file storage|

#### **CloudFront vs ElastiCache**

|Feature|Amazon CloudFront|Amazon ElastiCache|
|---|---|---|
|Caching location|Global edge locations|In-memory caching layer|
|Primary objective|Reduce latency for global users|Reduce application and database response times|
|Cached data|Website content, images, videos|Frequently accessed application data and query results|

- **Cache content closer to global users - Amazon CloudFront**
- **Cache frequently accessed database data - Amazon ElastiCache**

## **37. Practice Question**

### **Question**

Which support plan includes AWS Support Concierge Service?

### **Choices**

A. Business Support  
B. Basic Support  
C. Developer Support  
D. Enterprise Support

### **Answers**

**D. Enterprise Support**

### **Why**

The **AWS Support Concierge Service** provides dedicated billing and account assistance to Enterprise Support customers.

The Concierge team helps customers with billing inquiries, account management, and billing best practices.

Other options:
- **Business Support** - Provides 24/7 access to Cloud Support Engineers for technical assistance but does not include the dedicated Concierge Service described in this question.
- **Basic Support** - Provides account and billing assistance, documentation, whitepapers, and core Trusted Advisor checks without dedicated technical support personnel.
- **Developer Support** - Provides business-hours technical support through email rather than dedicated billing and account specialists.

### **Exam Focus**

|Support Plan|Key Feature|
|---|---|
|Basic Support|Account and billing assistance, documentation|
|Developer Support|Business-hours technical support|
|Business Support|24/7 technical support|
|**Enterprise Support**|Dedicated Support Concierge Service|

- **Dedicated billing and account experts - AWS Support Concierge**
- **AWS Support Concierge Service - Enterprise Support**

## **38. Practice Question**

### **Question**

Which of the following steps should be taken by a customer when conducting penetration testing on AWS?

### **Choices**

A. Request and wait for approval from AWS support, and then conduct testing  
B. Notify AWS support, and then conduct testing immediately  
C. Request and wait for approval from the customer's internal security team, and then conduct testing  
D. Conduct penetration testing using Amazon Inspector, and then notify AWS support

### **Answers**

**C. Request and wait for approval from the customer's internal security team, and then conduct testing**

### **Why**

AWS allows customers to perform penetration testing against their own resources on permitted AWS services without prior AWS approval.

Customers should follow their organization's internal security review and authorization processes before conducting penetration testing.

Examples of permitted services mentioned in the question's explanation include Amazon EC2, Amazon RDS, Amazon CloudFront, and Amazon API Gateway.

Other options:
- **Request and wait for AWS Support approval** - Prior AWS approval is not required for penetration testing on permitted services.
- **Notify AWS Support before testing** - Prior notification is not required for permitted penetration testing activities.
- **Conduct penetration testing using Amazon Inspector** - Amazon Inspector is an automated vulnerability management service that identifies known vulnerabilities and unintended network exposure. It is not a substitute for penetration testing.

### **Exam Focus**

|Concept|Description|
|---|---|
|**Penetration testing**|Simulate attacks to identify exploitable vulnerabilities|
|**Amazon Inspector**|Automated vulnerability assessment|
|AWS approval|Not required for permitted penetration testing|
|Internal authorization|Follow the organization's security policies|

- **Penetration testing on permitted AWS services - No prior AWS approval required**
- **Automated vulnerability scanning - Amazon Inspector**
- **Customers must follow AWS penetration testing policies.**

## **39. Practice Question**

### **Question**

A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?

### **Choices**

A. Amazon ElastiCache  
B. Amazon EBS volume  
C. AWS Storage Gateway  
D. AWS OpsWorks

### **Answers**

**A. Amazon ElastiCache**

### **Why**

**Amazon ElastiCache** provides in-memory caching with sub-millisecond latency.

By storing frequently accessed data in memory, applications can retrieve data without repeatedly querying the underlying database, improving response times and reducing database load.

Other options:
- **Amazon EBS volume** - Provides persistent block storage for EC2 instances rather than a purpose-built in-memory caching layer.
- **AWS Storage Gateway** - Provides hybrid storage integration between on-premises environments and AWS cloud storage.
- **AWS OpsWorks** - A legacy configuration management service that automates server configuration and maintenance using Chef and Puppet. It does not provide application data caching.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon ElastiCache**|High-performance in-memory caching|
|Amazon EBS|Persistent block storage|
|AWS Storage Gateway|Hybrid cloud storage integration|
|AWS OpsWorks|Server configuration management (legacy service)|

- **Frequently accessed application data - Amazon ElastiCache**
- **Sub-millisecond response times - Amazon ElastiCache**
- **Reduce repeated database queries - In-memory caching**
- **Reduce latency for geographically distributed users - Amazon CloudFront**

## **40. Practice Question**

### **Question**

What does Amazon GuardDuty do to protect AWS accounts and workloads?

### **Choices**

A. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise  
B. Helps AWS customers identify the root cause of potential security issues  
C. Notifies AWS customers about abuse events once they are reported  
D. Checks security groups for rules that allow unrestricted access to AWS resources

### **Answers**

**A. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise**

### **Why**

**Amazon GuardDuty** is an intelligent threat detection service that continuously monitors AWS accounts and workloads for suspicious and potentially malicious activity.

It uses machine learning and threat intelligence to detect security threats such as:
- Attacker reconnaissance.
- Compromised AWS accounts and instances.
- Unusual API activity.
- Potentially malicious behavior.

Other options:
- **Identify the root cause of potential security issues** - Describes Amazon Detective, which analyzes security data to investigate suspicious activities and determine their root causes.
- **Notify customers about reported abuse events** - Describes the function of the AWS Abuse Team, which handles reports of AWS resources being used for abusive or malicious activities.
- **Check for unrestricted security group access** - Describes AWS Trusted Advisor, which identifies common security misconfigurations and provides best practice recommendations.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon GuardDuty**|Intelligent threat detection|Suspicious activity, compromised accounts, malicious behavior|
|**Amazon Detective**|Security investigation|Root cause analysis, investigate security findings|
|**AWS Trusted Advisor**|Best practice recommendations|Unrestricted security groups, security misconfigurations|
|**AWS Abuse Team**|Handle reported abuse|Abuse reports and notifications|

#### **Important AWS Security Service Distinctions**

|Service|Exam Association|
|---|---|
|**Amazon GuardDuty**|Detect security threats|
|**Amazon Detective**|Investigate security threats|
|**Amazon Inspector**|Identify software vulnerabilities|
|**Amazon Macie**|Discover sensitive data in Amazon S3|
|**AWS Trusted Advisor**|Identify common security misconfigurations|

- **Detect suspicious or malicious activity - Amazon GuardDuty**
- **Investigate the root cause of suspicious activity - Amazon Detective**
- **Identify known software vulnerabilities - Amazon Inspector**
- **Identify overly permissive security groups - AWS Trusted Advisor**

## **41. Practice Question**

### **Question**

What is the customer's responsibility when using AWS Lambda?

### **Choices**

A. Operating system configuration  
B. Code encryption  
C. Platform management  
D. Application management

### **Answers**

**D. Application management**

### **Why**

**AWS Lambda** is a serverless compute service where AWS manages the underlying infrastructure and execution platform.

Customers remain responsible for managing their applications, including writing, deploying, securing, and maintaining Lambda function code.

Other options:
- **Operating system configuration** - AWS manages the underlying operating system. Customers do not configure it directly.
- **Code encryption** - AWS Lambda automatically encrypts function code at rest by default. Customers can optionally configure customer-managed encryption keys.
- **Platform management** - AWS manages the underlying execution platform, infrastructure maintenance, scaling, and availability.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Operating system management|Application code|
|Infrastructure maintenance|Application configuration|
|Execution platform management|Application security|
|Automatic infrastructure scaling|Function permissions|

- **Serverless compute - AWS Lambda**
- **Underlying infrastructure and platform management - AWS**
- **Application code and configuration - Customer**
- **Serverless does not eliminate customer security responsibilities.**

## **42. Practice Question**

### **Question**

A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include the status of Amazon S3 bucket permissions, whether multi-factor authentication is enabled for the AWS account root user, if any security groups are configured to allow unrestricted access. Where can all this information be found in one location?

### **Choices**

A. AWS Trusted Advisor report  
B. Amazon QuickSight dashboard  
C. AWS CloudTrail trails  
D. IAM credential report

### **Answers**

**A. AWS Trusted Advisor report**

### **Why**

**AWS Trusted Advisor** provides centralized best practice recommendations and check results across areas such as security, cost optimization, performance, fault tolerance, and service limits.

Its security checks include:
- Amazon S3 bucket permissions.
- Root user MFA enablement.
- Unrestricted security group access.
- Exposed access keys.

Other options:
- **Amazon QuickSight** - Business intelligence and data visualization service for creating dashboards and reports. Does not automatically perform AWS security checks.
- **AWS CloudTrail** - Records API calls and account activity for auditing rather than providing summarized security check results.
- **IAM credential report** - Reports credential status, including passwords, access keys, and MFA. Its scope is limited to IAM credentials rather than broader resource security configurations.

### **Exam Focus**

|Service or Feature|Exam Clue|
|---|---|
|**AWS Trusted Advisor**|Centralized security checks and best practice recommendations|
|Amazon QuickSight|Business intelligence dashboards|
|AWS CloudTrail|API activity and account auditing|
|IAM credential report|Password, access key, and MFA status|

- **Check S3 permissions, root MFA, and unrestricted security groups - AWS Trusted Advisor**
- **Review IAM credential status - IAM credential report**
- **Determine who performed an API action - AWS CloudTrail**

## **43. Practice Question**

### **Question**

A company wants to replace its physical desktop computers with cloud-hosted virtual desktops that employees can access from any device anywhere, with each employee having their own persistent personalized desktop environment. Which AWS service provides this capability?

### **Choices**

A. Amazon EC2  
B. Amazon AppStream 2.0  
C. Amazon WorkSpaces Web  
D. Amazon WorkSpaces

### **Answers**

**D. Amazon WorkSpaces**

### **Why**

**Amazon WorkSpaces** is a fully managed virtual desktop infrastructure (VDI) service that provides users with secure, cloud-hosted desktop environments.

Employees can access their own persistent, personalized desktops from supported devices without requiring dedicated physical desktop computers.

The key clues are **persistent personalized desktop** and **replacing physical desktop computers**.

Other options:
- **Amazon EC2** - Provides virtual servers that could be configured as desktops, but customers would need to manage the operating systems and desktop infrastructure themselves.
- **Amazon AppStream 2.0** - Streams desktop applications to users through a web browser. Its primary use case is application delivery rather than replacing each employee's personal desktop.
- **Amazon WorkSpaces Web** - Provides secure browser-based access to internal websites and SaaS applications rather than complete persistent virtual desktops.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon WorkSpaces**|Managed virtual desktops|Persistent, personalized cloud desktops|
|**Amazon AppStream 2.0**|Application streaming|Access desktop applications through a browser|
|**Amazon WorkSpaces Web**|Secure web access|Access internal websites and SaaS applications|
|Amazon EC2|Virtual servers|Customer-managed compute environments|

- **Replace physical employee desktops - Amazon WorkSpaces**
- **Stream individual desktop applications - Amazon AppStream 2.0**
- **Secure browser access to internal websites - Amazon WorkSpaces Web**

## **44. Practice Question**

### **Question**

Which of the following is a cloud architectural design principle?

### **Choices**

A. Build monolithic systems  
B. Loosely couple components  
C. Scale up not out  
D. Use commercial database software

### **Answers**

**B. Loosely couple components**

### **Why**

**Loose coupling** involves designing application components to operate independently and communicate through well-defined interfaces such as APIs or message queues.

This reduces dependencies between components, allowing them to scale, change, or fail independently without directly affecting the entire application.

Other options:
- **Build monolithic systems** - Monolithic systems often contain tightly coupled components, making independent scaling and maintenance more difficult.
- **Scale up not out** - Scaling up increases the capacity of an existing resource. Cloud architectures generally favor horizontal scaling where appropriate to improve scalability and reliability.
- **Use commercial database software** - A software selection decision rather than a cloud architectural design principle.

### **Exam Focus**

|Concept|Description|
|---|---|
|**Loose coupling**|Minimize dependencies between components|
|Tight coupling|Components depend heavily on one another|
|**Horizontal scaling (scale out)**|Add more resource instances|
|Vertical scaling (scale up)|Increase the capacity of existing resources|

- **Components operate independently - Loose coupling**
- **Prevent failures from cascading across components - Loose coupling**
- **Decouple application components using message queues - Amazon SQS**
- **Add more instances to handle demand - Horizontal scaling**

## **45. Practice Question**

### **Question**

Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?

### **Choices**

A. AWS Cost and Usage Report  
B. AWS Pricing Calculator  
C. AWS Trusted Advisor  
D. AWS Cost Explorer

### **Answers**

**B. AWS Pricing Calculator**

### **Why**

**AWS Pricing Calculator** estimates the projected cost of running workloads on AWS based on selected services, resource configurations, and expected usage.

Organizations can use these estimates to compare projected AWS costs against their existing on-premises expenses before migrating.

Other options:
- **AWS Cost and Usage Report (CUR)** - Provides detailed records of actual AWS costs and resource usage rather than estimating migration costs.
- **AWS Trusted Advisor** - Provides cost optimization and other best practice recommendations for AWS environments.
- **AWS Cost Explorer** - Visualizes and analyzes AWS spending and usage patterns, including forecasting future spending based on usage data.

### **Exam Focus**

|AWS Tool|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Pricing Calculator**|Estimate projected AWS costs|Before deployment or migration|
|**AWS Cost Explorer**|Analyze and forecast AWS spending|Historical spending, usage trends|
|**AWS Cost and Usage Report**|Detailed cost and usage records|Granular billing information|
|**AWS Trusted Advisor**|Best practice recommendations|Identify cost optimization opportunities|

- **Estimate costs before deploying resources - AWS Pricing Calculator**
- **Compare projected AWS costs against on-premises expenses - AWS Pricing Calculator**
- **Visualize existing AWS spending - AWS Cost Explorer**
- **Obtain detailed billing records - AWS Cost and Usage Report**

## **46. Practice Question**

### **Question**

Which of the following is a benefit of running an application in multiple Availability Zones?

### **Choices**

A. Allows you to exceed AWS service limits  
B. Increases available compute capacity  
C. Increases the availability of your application  
D. Reduces application response time between servers and global users

### **Answers**

**C. Increases the availability of your application**

### **Why**

Deploying an application across multiple **Availability Zones (AZs)** improves availability by distributing resources across isolated locations within an AWS Region.

If one Availability Zone experiences an outage, resources in the remaining Availability Zones can continue serving customers, provided the application is designed appropriately.

Other options:
- **Exceed AWS service limits** - Service quotas are independent of how many Availability Zones an application uses. Adjustable quotas can be increased through AWS Service Quotas.
- **Increases available compute capacity** - Distributing existing resources across multiple AZs does not automatically increase capacity. Additional resources must be provisioned.
- **Reduces response time for global users** - Serving geographically distributed users with lower latency requires solutions such as multiple AWS Regions or Amazon CloudFront.

### **Exam Focus**

|Requirement|Appropriate Solution|
|---|---|
|**Increase application availability**|Deploy across multiple AZs|
|Increase compute capacity|Provision additional resources or use Auto Scaling|
|Reduce latency for global users|Amazon CloudFront or geographically distributed Regions|
|Increase adjustable service limits|AWS Service Quotas|

- **Protect against Availability Zone failures - Multi-AZ deployment**
- **Multiple AZs - High availability and fault tolerance**
- **Multiple Regions - Geographic distribution**
- **Content delivery closer to global users - Amazon CloudFront**

## **47. Practice Question**

### **Question**

A company wants to build an event-driven architecture where multiple AWS services and SaaS applications can react to events in real time. Which AWS service provides a serverless event bus for this purpose?

### **Choices**

A. Amazon SNS  
B. AWS Step Functions  
C. Amazon EventBridge  
D. Amazon SQS

### **Answers**

**C. Amazon EventBridge**

### **Why**

**Amazon EventBridge** is a serverless event bus that connects applications, AWS services, and third-party SaaS applications through events.

It receives events from multiple sources and uses filtering and routing rules to deliver relevant events to appropriate targets, making it suitable for building **event-driven architectures**.

Other options:
- **Amazon Simple Notification Service (Amazon SNS)** - Managed publish/subscribe messaging service that pushes messages and notifications to subscribers rather than providing a general-purpose event bus.
- **AWS Step Functions** - Serverless workflow orchestration service that coordinates application components and tasks through state machines.
- **Amazon Simple Queue Service (Amazon SQS)** - Managed message queuing service that stores messages until consumers retrieve and process them, allowing application components to operate independently.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon EventBridge**|Serverless event bus|Event routing, SaaS integration, event-driven architecture|
|**Amazon SNS**|Publish/subscribe messaging|Push notifications, multiple subscribers|
|**Amazon SQS**|Message queuing|Decoupling, asynchronous processing|
|**AWS Step Functions**|Workflow orchestration|Coordinate tasks, state machines|

- **Route events between AWS services and SaaS applications - Amazon EventBridge**
- **Push messages to multiple subscribers - Amazon SNS**
- **Queue messages for asynchronous processing - Amazon SQS**
- **Coordinate multiple application tasks into workflows - AWS Step Functions**

## **48. Practice Question**

### **Question**

Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?

### **Choices**

A. AWS Glue  
B. Amazon EMR  
C. Amazon Athena  
D. Amazon CloudSearch

### **Answers**

**C. Amazon Athena**

### **Why**

**Amazon Athena** is a serverless interactive query service that allows customers to analyze data stored directly in Amazon S3 using standard SQL.

Customers do not need to provision database servers or load the data into a separate database before querying it.

Other options:
- **AWS Glue** - Serverless extract, transform, and load (ETL) service used to discover, prepare, and transform data for analytics rather than primarily executing interactive SQL queries.
- **Amazon EMR** - Managed big data processing service that supports frameworks such as Apache Spark and Hadoop. It is designed for distributed data processing rather than simple serverless SQL queries against S3.
- **Amazon CloudSearch** - Managed search service used to provide full-text search capabilities within applications rather than SQL-based analytics.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon Athena**|Serverless interactive queries|Standard SQL directly against S3|
|**AWS Glue**|Data integration and ETL|Discover, prepare, and transform data|
|**Amazon EMR**|Big data processing|Apache Spark, Hadoop|
|**Amazon CloudSearch**|Managed search|Full-text application search|

- **Query data directly from Amazon S3 using SQL - Amazon Athena**
- **Extract, transform, and load data - AWS Glue**
- **Process large datasets using Spark or Hadoop - Amazon EMR**
- **Add full-text search to applications - Amazon CloudSearch**

## **49. Practice Question**

### **Question**

How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?

### **Choices**

A. Users do not have to wait for infrastructure provisioning  
B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure  
C. Users do not need to address security and compliance issues  
D. AWS takes over application configuration management on behalf of users

### **Answers**

**A. Users do not have to wait for infrastructure provisioning**

### **Why**

AWS enables developers and engineers to provision infrastructure on demand within minutes using the AWS Management Console or APIs.

This eliminates lengthy hardware procurement, installation, and configuration processes associated with traditional data centers.

Reduced provisioning time increases **agility and workforce productivity**, allowing employees to focus on application development and business innovation.

Other options:
- **AWS infrastructure is much faster** - AWS does not guarantee that its infrastructure is always faster than on-premises infrastructure. The productivity benefit comes from eliminating provisioning delays.
- **Users do not need to address security and compliance** - Customers remain responsible for securing their applications, data, and access controls and meeting applicable compliance requirements.
- **AWS takes over application configuration management** - Customers remain responsible for managing and configuring their applications under the Shared Responsibility Model.

### **Exam Focus**

- **Rapid resource provisioning - Agility**
- **Eliminate lengthy hardware procurement processes - Cloud computing benefit**
- **Focus on application development instead of physical infrastructure management - Increased workforce productivity**
- **Stop spending money running and maintaining data centers.**
- **Application configuration, security, and applicable compliance requirements - Customer responsibility**

## **50. Practice Question**

### **Question**

A company wants to allow full access to an Amazon S3 bucket for a particular user. Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?

### **Choices**

A. Action  
B. Principal  
C. Resource  
D. Statement

### **Answers**

**B. Principal**

### **Why**

The **Principal** element in an Amazon S3 bucket policy identifies the entity to which permissions apply.

A principal can represent an IAM user, IAM role, AWS account, or AWS service.

The key clue is **who needs access**, which refers to the identity rather than the permitted actions or target resources.

Other options:
- **Action** - Specifies which operations are allowed or denied, such as `s3:GetObject` or `s3:PutObject`.
- **Resource** - Identifies the AWS resources to which the policy applies, such as an S3 bucket or its objects.
- **Statement** - Contains individual policy statements, including elements such as Principal, Effect, Action, and Resource. It is the structural container rather than the identity element.

### **Exam Focus**

|Policy Element|Purpose|Memory Aid|
|---|---|---|
|**Principal**|Identifies the entity receiving permissions|**Who?**|
|**Action**|Specifies permitted or denied operations|**What action?**|
|**Resource**|Identifies the target AWS resources|**On what resource?**|
|**Effect**|Specifies whether access is allowed or denied|**Allow or Deny?**|
|Statement|Contains individual permission statements|Policy structure|

- **Who can access the S3 bucket - Principal**
- **What operations can be performed - Action**
- **Which bucket or objects can be accessed - Resource**
- **Whether access is permitted or denied - Effect**
- **S3 bucket policy - Resource-based policy**

## **51. Practice Question**

### **Question**

You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud. Which of the following can do the job in a cost-effective way?

### **Choices**

A. AWS Direct Connect  
B. AWS Snowball  
C. AWS DMS  
D. AWS Snowmobile

### **Answers**

**B. AWS Snowball**

### **Why**

**AWS Snowball** is a physical data transfer device designed to transfer large amounts of data between on-premises environments and AWS.

It provides a cost-effective alternative to transferring hundreds of terabytes of data over slow or expensive network connections.

Multiple Snowball devices can be used to transfer 200 TB of data.

Other options:
- **AWS Direct Connect** - Provides a dedicated private network connection between on-premises infrastructure and AWS. It requires network connectivity rather than physically transporting data.
- **AWS DMS** - AWS Database Migration Service is designed to migrate databases rather than large volumes of general-purpose data.
- **AWS Snowmobile** - Designed for extremely large, petabyte-scale to exabyte-scale data migrations. It is excessive for a 200 TB transfer.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Snowball**|Physical data transfer|Large, terabyte-scale migrations|
|AWS Snowmobile|Extremely large physical data transfers|Petabyte-scale to exabyte-scale migrations|
|AWS Direct Connect|Dedicated private network connection|Hybrid connectivity|
|AWS DMS|Database migration|Migrate databases to AWS|

- **Transfer hundreds of terabytes without relying on network bandwidth - AWS Snowball**
- **Migrate databases - AWS DMS**
- **Dedicated private connection to AWS - AWS Direct Connect**

## **52. Practice Question**

### **Question**

AWS Trusted Advisor provides recommendations on which of the following?

### **Choices**

A. Performance  
B. Serverless architecture  
C. Auditing  
D. Cost optimization  
E. Scalability

### **Answers**

**A. Performance**
**D. Cost optimization**

### **Why**

**AWS Trusted Advisor** evaluates AWS environments and provides recommendations based on AWS best practices.

Performance and Cost Optimization are official Trusted Advisor recommendation categories.

Other options:
- **Serverless architecture** - An architectural approach rather than a Trusted Advisor recommendation category.
- **Auditing** - Handled by services such as AWS CloudTrail and AWS Config rather than being a Trusted Advisor category.
- **Scalability** - Trusted Advisor can identify resource limits that affect scaling, but scalability is not a dedicated recommendation category.

### **Exam Focus**

Core AWS Trusted Advisor categories covered in the practice exam:

|Category|Purpose|
|---|---|
|**Cost Optimization**|Identify opportunities to reduce unnecessary spending|
|**Performance**|Improve resource and application performance|
|Security|Identify common security misconfigurations|
|Fault Tolerance|Improve application resilience|
|Service Limits|Identify resources approaching service quotas|

- **AWS best practice recommendations - AWS Trusted Advisor**
- **Audit API activity - AWS CloudTrail**
- **Audit resource configurations and compliance - AWS Config**

## **53. Practice Question**

### **Question**

According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS?

### **Choices**

A. Data center security controls  
B. Communications controls  
C. Environmental controls  
D. Resource Configuration Management  
E. Awareness and Training

### **Answers**

**A. Data center security controls**
**C. Environmental controls**

### **Why**

**Inherited controls** are security controls that customers fully inherit from AWS without needing to implement or manage those controls themselves.
- **Data center security controls** - AWS manages physical access controls and the physical security of its facilities.
- **Environmental controls** - AWS manages environmental conditions within its data centers, including power, cooling, and protection of physical equipment.

Other options:
- **Communications controls** - Shared between AWS and customers, with each party responsible for communications security within its respective environment.
- **Resource Configuration Management** - Customers remain responsible for configuring the AWS resources they deploy, including security groups, IAM policies, and application settings.
- **Awareness and Training** - A shared control. AWS and customers independently provide appropriate security training for their respective employees.

### **Exam Focus**

|Control Type|Description|Examples|
|---|---|---|
|**Inherited controls**|Fully inherited from AWS|Physical data center and environmental controls|
|**Shared controls**|AWS and customers implement controls within their respective environments|Awareness and training, communications controls|
|**Customer-specific controls**|Customers implement controls for their own workloads|Application and resource security configurations|

- **Physical and environmental controls - Fully inherited from AWS**
- **Awareness and Training - Shared control**
- **Customer resource configuration - Customer responsibility**

**Shared controls do not mean AWS performs the customer's portion of the responsibility.**

## **54. Practice Question**

### **Question**

Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?

### **Choices**

A. Implement automation  
B. Implement elasticity  
C. Design for failure  
D. Design for agility

### **Answers**

**C. Design for failure**

### **Why**

**Design for failure** involves anticipating that infrastructure components can fail and designing applications to continue operating or recover when failures occur.

Distributing workloads across multiple Availability Zones reduces dependence on a single AZ and allows appropriately designed applications to continue operating if one AZ becomes unavailable.

Other options:
- **Implement automation** - Reduces manual intervention by automating operational tasks.
- **Implement elasticity** - Automatically adjusts resource capacity according to changing demand.
- **Design for agility** - Enables rapid experimentation, resource provisioning, and application deployment.

### **Exam Focus**

|Design Principle|Exam Clue|
|---|---|
|**Design for failure**|Anticipate failures and eliminate single points of failure|
|Automation|Reduce manual intervention|
|Elasticity|Adjust capacity according to demand|
|Agility|Experiment and deploy rapidly|

- **Distribute workloads across multiple AZs - Design for failure**
- **Continue operating despite infrastructure failures - Fault tolerance**
- **Reduce downtime through redundant infrastructure - High availability**

## **55. Practice Question**

### **Question**

What tasks should a customer perform when that customer suspects an AWS account has been compromised?

### **Choices**

A. Delete AWS CloudTrail Resources  
B. Remove MFA tokens  
C. Rotate passwords and access keys  
D. Move resources to a different AWS Region  
E. Contact AWS Support

### **Answers**

**C. Rotate passwords and access keys**
**E. Contact AWS Support**

### **Why**

When an AWS account is suspected of being compromised, customers should take immediate action to secure the account and obtain assistance.
- **Rotate passwords and access keys** - Replace potentially compromised credentials and invalidate old credentials to prevent further unauthorized access.
- **Contact AWS Support** - Obtain assistance with investigating and remediating the suspected account compromise.

Other options:
- **Delete AWS CloudTrail resources** - Removes valuable audit information needed to investigate unauthorized account activity.
- **Remove MFA tokens** - Weakens account security by removing an additional layer of authentication.
- **Move resources to a different AWS Region** - Does not resolve compromised credentials or prevent unauthorized access to the account.

### **Exam Focus**

|Security Action|Purpose|
|---|---|
|**Rotate compromised credentials**|Prevent continued unauthorized access|
|**Contact AWS Support**|Obtain incident response assistance|
|Preserve CloudTrail logs|Investigate unauthorized activity|
|Maintain MFA|Provide additional authentication protection|

- **Suspected AWS account compromise - Rotate credentials and contact AWS Support**
- **Investigate unauthorized API activity - AWS CloudTrail**
- **Additional authentication protection - MFA**
- **Preserve audit logs during security investigations.**

## **56. Practice Question**

### **Question**

An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. What is the most appropriate purchasing option?

### **Choices**

A. Dedicated Instances  
B. Spot Instances  
C. On-Demand Instances  
D. Reserved Instances

### **Answers**

**C. On-Demand Instances**

### **Why**

**On-Demand Instances** allow customers to pay for compute capacity when needed without upfront payments or long-term commitments.

They are suitable for short-term or irregular workloads that cannot tolerate interruptions caused by AWS reclaiming spare compute capacity.

The key clues are **runs only when needed** and **must remain active for the duration of the process**.

Other options:
- **Dedicated Instances** - Run on hardware dedicated to a single customer. They are suitable for hardware isolation and certain compliance requirements rather than ordinary short-term workloads.
- **Spot Instances** - Provide discounted access to spare EC2 capacity but can be interrupted when AWS reclaims that capacity.
- **Reserved Instances** - Provide discounted pricing in exchange for a one-year or three-year commitment, making them more suitable for predictable, long-term workloads.

### **Exam Focus**

|EC2 Purchasing Option|Best Use Case|Exam Clue|
|---|---|---|
|**On-Demand Instances**|Short-term, irregular workloads|No commitment, cannot tolerate Spot interruptions|
|**Spot Instances**|Flexible, interruption-tolerant workloads|Spare capacity, significant discounts|
|**Reserved Instances**|Predictable, long-term workloads|One-year or three-year commitment|
|**Dedicated Instances**|Hardware isolation|Dedicated physical hardware|

- **Short-term workload without planned interruption - On-Demand Instances**
- **Flexible workload that can tolerate interruption - Spot Instances**
- **Predictable long-term usage - Reserved Instances**
- **Hardware isolation - Dedicated Instances**

## **57. Practice Question**

### **Question**

A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?

### **Choices**

A. AWS Billing and Cost Management console  
B. AWS Cost Explorer  
C. AWS Cost and Usage Report  
D. AWS Pricing Calculator

### **Answers**

**D. AWS Pricing Calculator**

### **Why**

**AWS Pricing Calculator** enables customers to estimate the projected costs of running workloads on AWS based on resource configurations and expected usage.

Organizations can compare these estimates against their existing on-premises expenses to evaluate the financial benefits of migrating to AWS.

Other options:
- **AWS Billing and Cost Management console** - Provides access to billing information, invoices, and cost management tools rather than being the primary tool for estimating migration costs.
- **AWS Cost Explorer** - Visualizes and analyzes existing AWS spending and usage patterns and forecasts future spending.
- **AWS Cost and Usage Report (CUR)** - Provides granular records of actual AWS charges and resource usage rather than estimating the cost of workloads before migration.

### **Exam Focus**

|AWS Tool|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Pricing Calculator**|Estimate projected AWS costs|Before deployment or migration|
|AWS Cost Explorer|Analyze and forecast spending|Historical costs and usage trends|
|AWS Cost and Usage Report|Detailed billing records|Granular cost and usage information|
|AWS Billing and Cost Management console|Manage billing and costs|Invoices and billing information|

- **Estimate AWS costs before migration - AWS Pricing Calculator**
- **Compare projected cloud costs against on-premises expenses - AWS Pricing Calculator**
- **Analyze historical spending and forecast future costs - AWS Cost Explorer**
- **Obtain granular billing data - AWS Cost and Usage Report**

## **58. Practice Question**

### **Question**

A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?

### **Choices**

A. Amazon QuickSight  
B. Amazon Redshift  
C. Amazon Athena  
D. Amazon DynamoDB

### **Answers**

**B. Amazon Redshift**

### **Why**

**Amazon Redshift** is a fully managed cloud data warehouse designed to consolidate large volumes of data from multiple sources and perform complex analytical queries.

It uses columnar storage and massively parallel processing to support large-scale data analytics.

The key clue is **consolidate data into one data warehouse**.

Other options:
- **Amazon QuickSight** - Business intelligence and data visualization service for creating interactive dashboards and reports rather than storing consolidated data.
- **Amazon Athena** - Serverless interactive query service that analyzes data directly in Amazon S3 using standard SQL. It does not require consolidating data into a separate data warehouse.
- **Amazon DynamoDB** - Serverless NoSQL key-value and document database optimized for high-performance transactional workloads rather than data warehousing.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon Redshift**|Cloud data warehousing|Consolidate data, large-scale analytical queries|
|**Amazon QuickSight**|Business intelligence|Interactive dashboards and reports|
|**Amazon Athena**|Serverless interactive queries|SQL directly against Amazon S3|
|**Amazon DynamoDB**|NoSQL database|Key-value, document, single-digit millisecond latency|

- **Consolidate data into a centralized data warehouse - Amazon Redshift**
- **Query data directly from S3 using SQL - Amazon Athena**
- **Visualize business data - Amazon QuickSight**
- **High-performance NoSQL database - Amazon DynamoDB**

## **59. Practice Question**

### **Question**

Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?

### **Choices**

A. Amazon Simple Notification Service (Amazon SNS)  
B. AWS CloudTrail  
C. VPC Flow Logs  
D. AWS CloudHSM

### **Answers**

**B. AWS CloudTrail**

### **Why**

**AWS CloudTrail** records AWS API activity and account activity performed through the AWS Management Console, AWS CLI, and SDKs.

It provides an audit trail that helps customers determine who performed an action, what action was performed, and when it occurred.

CloudTrail supports security investigations, governance, auditing, and compliance.

Other options:
- **Amazon SNS** - Managed publish/subscribe messaging service that delivers messages and notifications to subscribers rather than recording user activity.
- **VPC Flow Logs** - Captures information about IP traffic flowing to and from network interfaces within a VPC rather than recording user actions.
- **AWS CloudHSM** - Provides dedicated hardware security modules (HSMs) for generating and managing cryptographic keys rather than auditing account activity.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS CloudTrail**|API and account activity auditing|Who performed an action and when|
|Amazon SNS|Messaging and notifications|Publish/subscribe|
|VPC Flow Logs|Network traffic logging|IP traffic, network interfaces|
|AWS CloudHSM|Hardware-based cryptographic key management|Dedicated HSMs|

#### **CloudTrail vs CloudWatch vs AWS Config**

|Service|Exam Association|
|---|---|
|**AWS CloudTrail**|Who performed an action?|
|**Amazon CloudWatch**|How are resources performing?|
|**AWS Config**|How are resources configured, and are they compliant?|

- **Track user activity and API calls - AWS CloudTrail**
- **Monitor network traffic - VPC Flow Logs**
- **Audit resource configuration changes - AWS Config**

## **60. Practice Question**

### **Question**

A company wants to allow employees to use personal unmanaged devices to access internal web applications and approved SaaS tools securely, while ensuring that no corporate data can be downloaded or copied to those personal devices. Which AWS service is designed for this use case?

### **Choices**

A. AWS Client VPN  
B. Amazon AppStream 2.0  
C. Amazon WorkSpaces  
D. Amazon WorkSpaces Web

### **Answers**

**D. Amazon WorkSpaces Web**

### **Why**

**Amazon WorkSpaces Web** is a fully managed service that provides secure browser-based access to internal websites and approved SaaS applications.

It is designed to allow employees to access corporate web applications from unmanaged devices while protecting corporate data through controls that can restrict:
- File downloads.
- Copying and pasting data.
- Printing corporate information.
- Transferring data to local devices.

The key clues are **unmanaged personal devices**, **internal web applications**, and **preventing corporate data from being copied or downloaded**.

Other options:
- **AWS Client VPN** - Provides secure, encrypted network connectivity to AWS and on-premises resources. It does not provide an isolated, controlled browser environment that restricts data transfers to personal devices.
- **Amazon AppStream 2.0** - Streams desktop applications to users through a web browser. Its primary use case is delivering installed desktop software rather than secure access to web applications and SaaS tools.
- **Amazon WorkSpaces** - Provides complete cloud-hosted virtual desktops, including persistent personalized desktop environments. It offers more functionality than required for secure web application access alone.

### **Exam Focus**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon WorkSpaces Web**|Secure browser-based access|Unmanaged devices, internal websites, SaaS, data transfer restrictions|
|**Amazon WorkSpaces**|Managed virtual desktops|Persistent, personalized employee desktops|
|**Amazon AppStream 2.0**|Application streaming|Run desktop applications through a browser|
|**AWS Client VPN**|Secure remote network connectivity|Encrypted access to private networks|

#### **End-User Computing Service Distinctions**

|Scenario|Appropriate Service|
|---|---|
|Replace employees' physical desktop computers|**Amazon WorkSpaces**|
|Deliver desktop software without local installation|**Amazon AppStream 2.0**|
|Securely access internal websites from personal devices|**Amazon WorkSpaces Web**|
|Restrict downloading and copying corporate web content|**Amazon WorkSpaces Web**|
|Provide remote access to private network resources|**AWS Client VPN**|

- **Complete virtual desktop - Amazon WorkSpaces**
- **Desktop application streaming - Amazon AppStream 2.0**
- **Secure web browsing with data transfer restrictions - Amazon WorkSpaces Web**
- **Encrypted remote network access - AWS Client VPN**

## **61. Practice Question**

### **Question**

When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact of failures?

### **Choices**

A. AWS Auto Scaling for Amazon EC2 instances  
B. Amazon VPC subnet ACLs to check the health of a service  
C. Distributed resources across multiple Availability Zones  
D. Distributed resources across multiple AWS points of presence  
E. Amazon CloudWatch alarms to notify when an EC2 instance enters an unhealthy state

### **Answers**

**A. AWS Auto Scaling for Amazon EC2 instances**
**C. Distributed resources across multiple Availability Zones**

### **Why**

Both solutions improve application availability and reduce the impact of infrastructure failures.
- **AWS Auto Scaling** - Automatically replaces unhealthy EC2 instances and adjusts compute capacity according to demand.
- **Multiple Availability Zones** - Provide redundancy by distributing resources across isolated locations within an AWS Region. If one AZ fails, resources in other AZs can continue serving requests.

Other options:
- **Amazon VPC subnet ACLs** - Network ACLs are stateless firewalls that control subnet-level traffic. They do not perform health checks.
- **AWS points of presence** - Primarily support content delivery and caching closer to users rather than hosting redundant application tiers.
- **Amazon CloudWatch alarms** - Monitor metrics and provide notifications when thresholds are exceeded. Notifications alone do not automatically recover failed resources, although alarms can be configured to trigger automated actions.

### **Exam Focus**

|Service or Feature|Primary Purpose|
|---|---|
|**AWS Auto Scaling**|Maintain capacity and replace unhealthy instances|
|**Multiple Availability Zones**|Improve availability through infrastructure redundancy|
|Amazon CloudWatch alarms|Monitor metrics and trigger notifications or actions|
|Network ACLs|Subnet-level network traffic filtering|
|Points of presence|Content delivery and edge caching|

- **Automatically replace unhealthy EC2 instances - AWS Auto Scaling**
- **Protect against AZ-level failures - Multi-AZ deployment**
- **Monitor and detect unhealthy resources - Amazon CloudWatch**
- **Design for failure - Redundancy and automated recovery**

## **62. Practice Question**

### **Question**

A company is planning a cloud migration and needs to assess the readiness of its workforce and identify skill gaps. Which AWS Cloud Adoption Framework (AWS CAF) perspective addresses this need?

### **Choices**

A. Platform  
B. Business  
C. People  
D. Operations

### **Answers**

**C. People**

### **Why**

The **People perspective** of the AWS Cloud Adoption Framework (AWS CAF) focuses on preparing an organization's workforce for cloud adoption.

It addresses areas such as:
- Workforce readiness.
- Skills assessment and skill gaps.
- Employee training and development.
- Organizational structures and roles.
- Organizational change management.

Other options:
- **Platform** - Focuses on designing and building scalable cloud architecture, including compute, storage, and networking.
- **Business** - Focuses on aligning cloud investments with business objectives and achieving business outcomes.
- **Operations** - Focuses on day-to-day workload management, monitoring, and continuous operational improvement.

### **Exam Focus**

|AWS CAF Perspective|Exam Clue|
|---|---|
|**People**|Workforce readiness, skills, training, organizational change|
|Business|Business outcomes and cloud investments|
|Platform|Cloud architecture and infrastructure|
|Operations|Day-to-day workload management|

- **Assess workforce readiness and identify skill gaps - People perspective**
- **Prepare employees for cloud adoption - People perspective**
- **Align cloud investments with business goals - Business perspective**
- **Design cloud infrastructure - Platform perspective**
- **Manage and monitor cloud workloads - Operations perspective**

## **63. Practice Question**

### **Question**

A company has developed an eCommerce web application on AWS. What should they do to ensure that the application has the highest level of availability?

### **Choices**

A. Deploy the application across multiple Availability Zones and edge locations  
B. Deploy the application across multiple Regions and Availability Zones  
C. Deploy the application across multiple Availability Zones and subnets  
D. Deploy the application across multiple VPCs and subnets

### **Answers**

**B. Deploy the application across multiple Regions and Availability Zones**

### **Why**

Deploying an application across multiple **AWS Regions** and **Availability Zones (AZs)** provides the greatest geographic redundancy among the available options.
- **Multiple Availability Zones** - Protect against isolated AZ-level failures within a Region.
- **Multiple Regions** - Protect against broader Regional failures through geographically separated deployments.

An appropriately designed Multi-Region and Multi-AZ architecture can continue serving customers even if an entire Region becomes unavailable.

Other options:
- **Multiple Availability Zones and edge locations** - Improves availability within a Region and reduces content delivery latency. Edge locations do not provide equivalent redundancy for application infrastructure.
- **Multiple Availability Zones and subnets** - Protects against AZ-level failures but does not provide protection against an entire Regional outage.
- **Multiple VPCs and subnets** - Provides network isolation and segmentation. Multiple VPCs alone do not guarantee geographic redundancy.

### **Exam Focus**

|Deployment Strategy|Primary Benefit|
|---|---|
|**Multi-AZ**|Protection against Availability Zone failures|
|**Multi-Region**|Protection against Regional failures|
|**Multi-Region and Multi-AZ**|Greater geographic redundancy and availability|
|Edge locations|Reduced content delivery latency|
|Multiple VPCs|Network isolation|
|Multiple subnets|Network segmentation|

- **High availability within a Region - Multi-AZ**
- **Resilience against Regional outages - Multi-Region**
- **Highest availability among the listed choices - Multi-Region and Multi-AZ**
- **Deliver content closer to global users - Edge locations**

## **64. Practice Question**

### **Question**

Which of the following is an available option when purchasing Amazon EC2 instances?

### **Choices**

A. The ability to pay upfront to get lower hourly costs  
B. The ability to register EC2 instances to get volume discounts on every hour the instances are running  
C. The ability to bid to get the lowest possible prices  
D. The ability to buy Dedicated Instances for up to 90% discount

### **Answers**

**A. The ability to pay upfront to get lower hourly costs**

### **Why**

**Amazon EC2 Reserved Instances** provide discounted pricing in exchange for a one-year or three-year commitment.

Customers can choose upfront payment options to reduce the effective hourly cost of running EC2 instances, making Reserved Instances suitable for predictable, long-term workloads.

Other options:
- **Register EC2 instances for volume discounts** - Instance registration is not an EC2 purchasing option. Volume discounts are available through other AWS pricing mechanisms.
- **Bid to get the lowest possible prices** - Refers to the historical bidding model associated with Spot Instances. Spot Instances provide discounted spare EC2 capacity, but bidding does not guarantee the lowest possible price.
- **Dedicated Instances for up to 90% discount** - Dedicated Instances provide hardware isolation. Discounts of up to 90% compared with On-Demand pricing are associated with Spot Instances, not Dedicated Instances.

### **Exam Focus**

|EC2 Purchasing Option|Key Characteristic|Best Use Case|
|---|---|---|
|**On-Demand Instances**|No long-term commitment|Short-term, unpredictable workloads|
|**Reserved Instances**|One-year or three-year commitment|Predictable, long-term workloads|
|**Spot Instances**|Up to 90% discount, interruptible|Flexible, interruption-tolerant workloads|
|**Dedicated Instances**|Dedicated physical hardware|Hardware isolation and compliance requirements|

#### **Reserved Instance Payment Options**

|Payment Option|Description|
|---|---|
|All Upfront|Pay the entire commitment upfront|
|Partial Upfront|Pay part upfront and the remainder over the term|
|No Upfront|Pay throughout the commitment term|

- **Pay upfront for lower effective hourly costs - Reserved Instances**
- **No long-term commitment - On-Demand Instances**
- **Up to 90% discount using spare capacity - Spot Instances**
- **Physical hardware isolation - Dedicated Instances**

## **65. Practice Question**

### **Question**

Which AWS IAM feature is used to associate a set of permissions with multiple users?

### **Choices**

A. Multi-factor authentication  
B. Access keys  
C. Password policies  
D. Groups

### **Answers**

**D. Groups**

### **Why**

**IAM user groups** allow administrators to assign a common set of permissions to multiple IAM users.

Instead of attaching permission policies to each user individually, administrators attach policies to a group. All IAM users belonging to that group receive the permissions granted through its policies.

This simplifies permission management for users with similar job responsibilities.

Other options:
- **Multi-factor authentication (MFA)** - Adds an additional authentication factor to protect user accounts rather than assigning permissions.
- **Access keys** - Provide credentials for programmatic access to AWS through the AWS CLI and APIs rather than defining permissions for multiple users.
- **Password policies** - Define password requirements such as complexity, expiration, and reuse restrictions rather than assigning access permissions.

### **Exam Focus**

|IAM Feature|Primary Purpose|
|---|---|
|**IAM users**|Represent individual identities|
|**IAM groups**|Assign common permissions to multiple IAM users|
|**IAM roles**|Provide assumable identities and temporary credentials|
|**IAM policies**|Define allowed and denied actions|
|**MFA**|Provide additional authentication protection|
|**Access keys**|Enable programmatic access|
|**Password policies**|Enforce password requirements|

#### **Authentication vs Authorization**

|Concept|Purpose|Examples|
|---|---|---|
|**Authentication**|Verify who you are|Passwords, MFA, access keys|
|**Authorization**|Determine what you can do|IAM policies and group permissions|

- **Assign the same permissions to multiple IAM users - IAM groups**
- **Define permissions - IAM policies**
- **Temporary security credentials - IAM roles**
- **Additional authentication protection - MFA**
- **Programmatic AWS access - Access keys**
- **Enforce password complexity - IAM password policies**