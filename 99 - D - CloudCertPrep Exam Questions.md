## **1. Practice Question**

### **Question**

What should you consider when storing data in Amazon S3 Glacier?

### **Choices**

A. Amazon S3 Glacier only accepts data in a compressed format  
B. Amazon S3 Glacier does not provide immediate retrieval of data  
C. Amazon S3 Glacier can only be used to store frequently accessed data and data archives  
D. Attach Amazon S3 Glacier to an EC2 instance to be able to store data

### **Answers**

**B. Amazon S3 Glacier does not provide immediate retrieval of data**

### **Why**

**Amazon S3 Glacier** is designed for long-term archival storage of infrequently accessed data. Depending on the storage class and retrieval option, data retrieval can take minutes to hours, making it unsuitable for workloads requiring immediate access.

Other options:
- **A. Compressed format** - Amazon S3 Glacier does not require data to be compressed before storage.
- **C. Frequently accessed data** - Glacier is designed primarily for infrequently accessed archival data.
- **D. Attach to EC2** - Glacier is an object storage solution that does not require attachment to an EC2 instance.

### **Exam Focus**

- **Long-term archival storage - Amazon S3 Glacier**
- **Infrequently accessed data - Glacier storage classes**
- **Delayed data retrieval - S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive**

**Important distinction:** S3 Glacier Instant Retrieval is an exception that provides millisecond retrieval. The question refers to traditional Glacier archival storage with delayed retrieval.

## **2. Practice Question**

### **Question**

Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?

### **Choices**

A. Elasticity  
B. Security  
C. Reliability  
D. High availability

### **Answers**

**A. Elasticity**

### **Why**

**Elasticity** is the ability to dynamically scale resources up or down according to workload demand.

It ensures that sufficient resources are available without unnecessary **over-provisioning** or **under-provisioning**.

Other options:
- **B. Security** - Protects data, systems, and resources against threats and unauthorized access.
- **C. Reliability** - Ensures a workload performs its intended function and recovers from failures.
- **D. High availability** - Keeps applications operational during failures through redundancy.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Elasticity**|Match resource capacity to changing demand|
|**Scalability**|Handle increasing workload capacity|
|**Security**|Protect data and resources|
|**Reliability**|Perform consistently and recover from failures|
|**High availability**|Minimize downtime|

**Automatically increase or decrease resources based on demand - Elasticity**

## **3. Practice Question**

### **Question**

Which of the following steps should be taken by a customer when conducting penetration testing on AWS?

### **Choices**

A. Request and wait for approval from AWS Support, and then conduct testing  
B. Conduct penetration testing using Amazon Inspector, and then notify AWS Support  
C. Notify AWS Support, and then conduct testing immediately  
D. Request and wait for approval from the customer's internal security team, and then conduct testing

### **Answers**

**D. Request and wait for approval from the customer's internal security team, and then conduct testing**

### **Why**

AWS allows customers to perform **penetration testing on permitted AWS services without prior AWS approval**.

Customers should follow their own internal security review and authorization processes before conducting penetration testing.

Examples of permitted services include Amazon EC2, Amazon RDS, Amazon CloudFront, and Amazon API Gateway.

Other options:
- **A. Request AWS Support approval** - Prior AWS approval is not required for penetration testing on permitted services.
- **B. Amazon Inspector** - An automated vulnerability assessment service, not a penetration testing tool.
- **C. Notify AWS Support** - Prior notification is not required for penetration testing on permitted services.

### **Exam Focus**

- **Penetration testing on permitted AWS services - No prior AWS approval required**
- **Authorize penetration testing internally - Customer's responsibility**
- **Automated vulnerability assessment - Amazon Inspector**

Customers must comply with the AWS penetration testing policy and its restrictions.

## **4. Practice Question**

### **Question**

Which of the following is a correct relationship between Regions, Availability Zones, and edge locations?

### **Choices**

A. Edge locations contain Regions  
B. Availability Zones contain edge locations  
C. Regions contain Availability Zones  
D. Data centers contain Regions

### **Answers**

**C. Regions contain Availability Zones**

### **Why**

An **AWS Region** is a geographic area containing multiple **Availability Zones (AZs)**. Each Availability Zone consists of one or more physical data centers.

Edge locations are separate points of presence used for delivering content closer to end users.

Other options:
- **A. Edge locations contain Regions** - Edge locations are separate points of presence and do not contain Regions.
- **B. Availability Zones contain edge locations** - Edge locations are independent of Availability Zones.
- **D. Data centers contain Regions** - This reverses the AWS infrastructure hierarchy. Data centers are contained within Availability Zones.

### **Exam Focus**

Separate points of presence closer to end users

|Infrastructure|Description|
|---|---|
|**Region**|Geographic area containing multiple AZs|
|**Availability Zone**|One or more physical data centers|
|**Data center**|Physical facility hosting AWS infrastructure|
|**Edge location**|Point of presence for low-latency content delivery|

- **Regions contain Availability Zones.**
- **Availability Zones contain data centers.**
- **Edge locations are separate from the Region-AZ hierarchy.**

## **5. Practice Question**

### **Question**

Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long-term credentials?

### **Choices**

A. AWS IAM role  
B. AWS Shield  
C. AWS IAM user access key  
D. Amazon Cognito

### **Answers**

**A. AWS IAM role**

### **Why**

An **IAM role** assigned to an EC2 instance provides applications running on that instance with **temporary security credentials**.

The application can securely access Amazon S3 through authenticated AWS API calls without storing or hardcoding long-term access keys.

Other options:
- **B. AWS Shield** - Provides protection against Distributed Denial-of-Service (DDoS) attacks, not application access permissions.
- **C. AWS IAM user access key** - Uses long-term credentials that must be managed securely. IAM roles eliminate the need to store these credentials on EC2.
- **D. Amazon Cognito** - Provides authentication and identity management for web and mobile application users, rather than assigning AWS service permissions directly to EC2 instances.

### **Exam Focus**

|Service or Feature|Exam Clue|
|---|---|
|**IAM role**|Temporary credentials for AWS resources|
|**IAM user access key**|Long-term programmatic credentials|
|**AWS Shield**|DDoS protection|
|**Amazon Cognito**|Web and mobile user authentication|

- **EC2 application accessing S3 securely - IAM role**
- **Access AWS services without hardcoded credentials - IAM role**
- **Grant only necessary permissions - Principle of least privilege**

## **6. Practice Question**

### **Question**

A company wants to use Kubernetes to orchestrate containerized applications on AWS. Which AWS service provides a managed Kubernetes experience?

### **Choices**

A. Amazon EKS  
B. Amazon ECS  
C. AWS Elastic Beanstalk  
D. AWS Fargate

### **Answers**

**A. Amazon EKS**

### **Why**

**Amazon Elastic Kubernetes Service (Amazon EKS)** is a managed Kubernetes service for running and orchestrating containerized applications on AWS.

AWS manages the Kubernetes control plane, removing the need for customers to install, operate, and maintain it themselves.

Other options:
- **B. Amazon ECS** - AWS-native container orchestration service that does not use Kubernetes as its orchestration platform.
- **C. AWS Elastic Beanstalk** - Simplifies application deployment by managing the underlying infrastructure. It is not a managed Kubernetes service.
- **D. AWS Fargate** - Serverless compute engine for containers that eliminates server management. It provides compute capacity rather than container orchestration.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon EKS**|Managed Kubernetes orchestration|
|**Amazon ECS**|AWS-native container orchestration|
|**AWS Fargate**|Run containers without managing servers|
|**AWS Elastic Beanstalk**|Simplified application deployment|

- **Kubernetes - Amazon EKS**
- **AWS-native container orchestration - Amazon ECS**
- **Serverless container compute - AWS Fargate**

Amazon ECS and Amazon EKS provide **container orchestration**, whereas AWS Fargate provides **container compute capacity**.

## **7. Practice Question**

### **Question**

Which of the following can be used to enable Virtual Multi-Factor Authentication (MFA)? (Select TWO.)

### **Choices**

A. Amazon Connect  
B. AWS Identity and Access Management (IAM)  
C. Amazon Virtual Private Cloud  
D. Amazon SNS  
E. AWS CLI

### **Answers**

**B. AWS Identity and Access Management (IAM)**
**E. AWS CLI**

### **Why**

**Virtual Multi-Factor Authentication (MFA)** adds an additional layer of security to user authentication.

Virtual MFA can be enabled through:
- **AWS IAM** - Configure and assign virtual MFA devices through the AWS Management Console.
- **AWS Command Line Interface (AWS CLI)** - Configure and manage MFA programmatically using commands.

Other options:

- **A. Amazon Connect** - A cloud-based contact center service for managing customer communications.
- **C. Amazon VPC** - Provides logically isolated virtual networking environments within AWS.
- **D. Amazon SNS** - A messaging and notification service for delivering messages to subscribers.

These services are not used to configure MFA for IAM users.

### **Exam Focus**

- **Manage identities and authentication - AWS IAM**
- **Additional authentication layer - MFA**
- **Configure virtual MFA through a graphical interface - IAM console**
- **Configure virtual MFA programmatically - AWS CLI**
- **Publish messages and notifications - Amazon SNS**

## **8. Practice Question**

### **Question**

A company needs to track and manage its Microsoft and Oracle software licenses as it migrates workloads to AWS. Which AWS service helps manage software license compliance?

### **Choices**

A. AWS License Manager  
B. AWS Service Catalog  
C. AWS Systems Manager  
D. AWS Config

### **Answers**

**A. AWS License Manager**

### **Why**

**AWS License Manager** helps customers centrally track and manage software licenses from vendors such as Microsoft, Oracle, and SAP across AWS and on-premises environments.

It helps enforce software licensing rules and prevent license compliance violations.

Other options:
- **B. AWS Service Catalog** - Creates and manages catalogs of approved IT products and services that users can deploy.
- **C. AWS Systems Manager** - Provides operational management capabilities such as patching, automation, and parameter storage.
- **D. AWS Config** - Records and evaluates AWS resource configurations against compliance rules, rather than managing software license entitlements.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS License Manager**|Software licensing and license compliance|
|**AWS Service Catalog**|Approved IT products and services|
|**AWS Systems Manager**|Operational management and patching|
|**AWS Config**|Resource configuration and compliance|

- **Microsoft, Oracle, and SAP license management - AWS License Manager**
- **Prevent software licensing violations - AWS License Manager**
- **Evaluate AWS resource configuration compliance - AWS Config**

## **9. Practice Question**

### **Question**

Which of the following can be described as a global content delivery network (CDN) service?

### **Choices**

A. AWS VPN  
B. AWS Regions  
C. AWS Direct Connect  
D. Amazon CloudFront

### **Answers**

**D. Amazon CloudFront**

### **Why**

**Amazon CloudFront** is AWS's global **Content Delivery Network (CDN)** service.

It caches and delivers content through edge locations worldwide, bringing content closer to end users and reducing latency.

Other options:
- **A. AWS VPN** - Establishes encrypted network connections between on-premises infrastructure and AWS over the public internet.
- **B. AWS Regions** - Geographic areas containing multiple Availability Zones where AWS infrastructure is hosted.
- **C. AWS Direct Connect** - Provides a dedicated private network connection between on-premises infrastructure and AWS.

AWS VPN and AWS Direct Connect provide network connectivity rather than content caching and delivery.

### **Exam Focus**

|Service or Concept|Exam Clue|
|---|---|
|**Amazon CloudFront**|Global CDN and content caching|
|**AWS VPN**|Encrypted connection over the internet|
|**AWS Direct Connect**|Dedicated private network connection|
|**AWS Regions**|Geographic areas hosting AWS infrastructure|

- **Global content delivery network - Amazon CloudFront**
- **Cache content closer to users - Amazon CloudFront**
- **Reduce content delivery latency - Edge locations**
- **Dedicated connection to AWS - AWS Direct Connect**

## **10. Practice Question**

### **Question**

For which auditing process does AWS have sole responsibility?

### **Choices**

A. AWS CloudTrail Logs  
B. Amazon S3 bucket policies  
C. Physical security  
D. AWS IAM policies

### **Answers**

**C. Physical security**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS is responsible for **security of the cloud**, including the physical security of its data centers.

This includes perimeter security, surveillance, physical access controls, and hardware disposal.

Customers are responsible for **security in the cloud**, including managing their data, permissions, and resource configurations.

Other options:
- **A. AWS CloudTrail Logs** - Customers are responsible for configuring their logging requirements, log retention, and auditing recorded account activity.
- **B. Amazon S3 bucket policies** - Customers are responsible for configuring and auditing policies that control access to their S3 buckets and objects.
- **D. AWS IAM policies** - Customers are responsible for defining, managing, and auditing permissions assigned to users, groups, and roles.

### **Exam Focus**

- **Physical security of AWS data centers - AWS responsibility**
- **Identity and access management - Customer responsibility**
- **S3 bucket access permissions - Customer responsibility**
- **Auditing AWS account activity - Customer responsibility**
- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**

## **11. Practice Question**

### **Question**

Which activity is a customer responsibility in the AWS Cloud according to the AWS Shared Responsibility Model?

### **Choices**

A. Ensuring the physical security of cloud data centers  
B. Ensuring Amazon EBS volumes are backed up  
C. Patching and fixing flaws within the AWS Cloud infrastructure  
D. Ensuring network connectivity from AWS to the internet

### **Answers**

**B. Ensuring Amazon EBS volumes are backed up**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for backing up their Amazon Elastic Block Store (Amazon EBS) volumes.

Customers must configure and manage **EBS snapshots** to protect their data against data loss.

Other options:
- **A. Physical security** - AWS is responsible for protecting the physical facilities that house its infrastructure.
- **C. Patching AWS infrastructure** - AWS maintains and patches the underlying hardware, hypervisors, and physical networking infrastructure.
- **D. AWS internet connectivity** - AWS manages the underlying network infrastructure that connects its services to the internet.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Physical data center security|EBS volume backups|
|Underlying infrastructure patching|Guest operating system patching on EC2|
|Physical network infrastructure|Customer data protection|
|Hypervisor maintenance|Resource security configurations|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **Back up Amazon EBS volumes - EBS snapshots**

## **12. Practice Question**

### **Question**

A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?

### **Choices**

A. Moving from upfront capital expense (CapEx) to variable capital expense (CapEx)  
B. Elimination of upfront capital expense (CapEx) and elimination of variable operational expense (OpEx)  
C. Moving from variable operational expense (OpEx) to upfront capital expense (CapEx)  
D. Moving from upfront capital expense (CapEx) to variable operational expense (OpEx)

### **Answers**

**D. Moving from upfront capital expense (CapEx) to variable operational expense (OpEx)**

### **Why**

Traditional on-premises infrastructure requires significant upfront investment in servers, networking equipment, and physical facilities.

AWS allows companies to replace these upfront infrastructure investments with **variable operational expenses**, paying for resources according to their usage.

Other options:
- **A. CapEx to variable CapEx** - Cloud usage generally represents operational expenditure rather than capital expenditure.
- **B. Eliminate both CapEx and OpEx** - Moving to AWS reduces upfront infrastructure expenses but does not eliminate ongoing operational expenses.
- **C. OpEx to CapEx** - This reverses the financial transition associated with cloud adoption.

### **Exam Focus**

|Concept|CapEx|OpEx|
|---|---|---|
|Full name|Capital expenditure|Operational expenditure|
|Payment model|Upfront investment|Ongoing usage expenses|
|Common environment|On-premises|Cloud computing|
|Example|Purchasing physical servers|Paying for EC2 usage|

- **Trade fixed expense for variable expense - Cloud computing benefit**
- **Purchase physical infrastructure upfront - CapEx**
- **Pay for resources as consumed - OpEx**

## **13. Practice Question**

### **Question**

Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO.)

### **Choices**

A. AWS Trusted Advisor  
B. AWS WAF  
C. AWS Organizations  
D. Network ACLs  
E. AWS Direct Connect

### **Answers**

**B. AWS WAF**
**D. Network ACLs**

### **Why**

Both AWS WAF and Network ACLs can block traffic originating from specific IP addresses or network ranges.
- **AWS WAF (Web Application Firewall)** - Filters web requests at the application layer using configurable rules, including IP-based blocking.
- **Network Access Control Lists (Network ACLs)** - Stateless subnet-level firewalls that support explicit allow and deny rules for network traffic.

Other options:

- **A. AWS Trusted Advisor** - Provides recommendations for improving security, cost, performance, and fault tolerance but does not actively block traffic.
- **C. AWS Organizations** - Provides centralized management, governance, and consolidated billing across multiple AWS accounts.
- **E. AWS Direct Connect** - Provides a dedicated private network connection between on-premises infrastructure and AWS.

### **Exam Focus**

|Feature|AWS WAF|Network ACLs|
|---|---|---|
|Protection level|Application layer|Subnet level|
|Traffic type|HTTP/HTTPS requests|Network traffic|
|IP-based blocking|Supported|Supported|
|Primary purpose|Protect web applications|Control subnet traffic|

- **Block malicious web requests - AWS WAF**
- **Block specific IP ranges at the subnet level - Network ACLs**
- **Stateless firewall with allow and deny rules - Network ACLs**
- **Security recommendations rather than enforcement - AWS Trusted Advisor**

## **14. Practice Question**

### **Question**

Which mechanism allows developers to access AWS services from application code?

### **Choices**

A. AWS Config  
B. AWS Software Development Kit  
C. AWS Management Console  
D. AWS CodePipeline

### **Answers**

**B. AWS Software Development Kit (AWS SDK)**

### **Why**

The **AWS Software Development Kit (SDK)** provides language-specific libraries that allow developers to interact with AWS services directly from application code.

AWS SDKs support programming languages such as Python, Java, JavaScript, and Go.

Other options:
- **A. AWS Config** - Records AWS resource configurations and evaluates them against compliance rules.
- **C. AWS Management Console** - Provides a web-based graphical interface for interacting with AWS services.
- **D. AWS CodePipeline** - Automates application build, test, and deployment stages through a continuous delivery pipeline.

### **Exam Focus**

|Mechanism|Exam Clue|
|---|---|
|**AWS SDK**|Access AWS services from application code|
|**AWS CLI**|Access AWS services through terminal commands|
|**AWS Management Console**|Access AWS services through a graphical interface|
|**AWS CodePipeline**|Automate software release pipelines|
|**AWS Config**|Track resource configurations and compliance|

**Programmatic access to AWS services using application code - AWS SDK**

## **15. Practice Question**

### **Question**

Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?

### **Choices**

A. Amazon CloudFront  
B. AWS Config  
C. AWS Elastic Beanstalk  
D. Amazon Route 53

### **Answers**

**C. AWS Elastic Beanstalk**

### **Why**

**AWS Elastic Beanstalk** simplifies application deployment by automatically managing the underlying deployment infrastructure.

It handles:
- Capacity provisioning
- Load balancing
- Auto Scaling
- Application health monitoring

This allows developers to focus on application development rather than infrastructure management.

Other options:
- **A. Amazon CloudFront** - A global content delivery network (CDN) that caches and distributes content closer to end users.
- **B. AWS Config** - Tracks resource configuration changes and evaluates compliance.
- **D. Amazon Route 53** - Provides DNS, traffic routing, and health-check capabilities but does not manage the overall application deployment infrastructure.

### **Exam Focus**

- **Deploy applications without manually managing infrastructure - AWS Elastic Beanstalk**
- **Automatically handle application deployment, scaling, and load balancing - AWS Elastic Beanstalk**
- **Global content delivery - Amazon CloudFront**
- **Resource configuration compliance - AWS Config**
- **DNS and domain routing - Amazon Route 53**

## **16. Practice Question**

### **Question**

Which AWS Cloud best practice uses the elasticity and agility of cloud computing?

### **Choices**

A. Provision capacity based on past usage and theoretical peaks  
B. Break apart the application into loosely coupled components  
C. Build the application and infrastructure in a data center that grants physical access  
D. Dynamically and predictively scale to meet usage demands

### **Answers**

**D. Dynamically and predictively scale to meet usage demands**

### **Why**

Dynamically and predictively scaling resources allows applications to take advantage of two important cloud computing benefits:
- **Elasticity** - Automatically adjust resource capacity to match changing workload demands.
- **Agility** - Rapidly provision resources and adapt to changing requirements.

This minimizes unnecessary resource provisioning while maintaining sufficient capacity.

Other options:
- **A. Provision capacity based on theoretical peaks** - Fixed capacity planning can result in over-provisioning and idle resources.
- **B. Loosely coupled components** - Improves application resilience, flexibility, and maintainability but does not directly describe elasticity.
- **C. Physical data center access** - Describes an on-premises or colocation environment rather than a cloud computing benefit.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Elasticity**|Dynamically adjust capacity to match demand|
|**Agility**|Quickly provision resources and adapt to changes|
|**Scalability**|Handle increasing workloads|
|**Loose coupling**|Reduce dependencies between application components|

- **Scale resources according to demand - Elasticity**
- **Rapidly adapt to changing requirements - Agility**
- **Avoid provisioning for peak capacity - Dynamic scaling**

## **17. Practice Question**

### **Question**

Which of the following BEST describes the difference between rehosting and replatforming as migration strategies?

### **Choices**

A. Rehosting changes the application code while replatforming does not  
B. Rehosting moves the application as-is while replatforming makes targeted optimizations  
C. Rehosting replaces the application with SaaS while replatforming keeps the original  
D. Rehosting is slower than replatforming because it requires more testing

### **Answers**

**B. Rehosting moves the application as-is while replatforming makes targeted optimizations**

### **Why**

**Rehosting (Lift and Shift)** involves migrating an existing application to the cloud without significantly modifying its code or architecture.

**Replatforming (Lift, Tinker, and Shift)** involves making targeted optimizations during migration to benefit from cloud capabilities without fundamentally redesigning the application.

For example, migrating a self-managed database to Amazon RDS is a form of replatforming.

Other options:
- **A. Rehosting changes application code** - Reverses the distinction between rehosting and replatforming.
- **C. Rehosting replaces applications with SaaS** - Replacing an existing application with a SaaS solution describes the repurchase migration strategy.
- **D. Rehosting is slower** - Rehosting is generally faster because it requires fewer application changes and less testing.

### **Exam Focus**

|Migration Strategy|Common Name|Description|
|---|---|---|
|**Rehost**|Lift and Shift|Migrate an application as-is|
|**Replatform**|Lift, Tinker, and Shift|Make targeted cloud optimizations|
|**Repurchase**|Drop and Shop|Replace an existing application with another product or SaaS|

- **Migrate without application modifications - Rehost**
- **Migrate with minor cloud optimizations - Replatform**
- **Move a self-managed database to a managed database - Replatform**
- **Replace existing software with SaaS - Repurchase**

## **18. Practice Question**

### **Question**

A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Select TWO.)

### **Choices**

A. Running a virus scan on EC2 instances  
B. Protecting against IP spoofing and packet sniffing  
C. Encrypting communication between the EC2 instances and the Elastic Load Balancer  
D. Installing the latest security patches on the RDS instance  
E. Configuring a security group and a network access control list (NACL) for EC2

### **Answers**

**B. Protecting against IP spoofing and packet sniffing**
**D. Installing the latest security patches on the RDS instance**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS is responsible for securing the underlying cloud infrastructure and maintaining the underlying components of managed services.
- **IP spoofing and packet sniffing protection** - AWS implements network-level security controls to protect its underlying infrastructure.
- **Amazon RDS security patching** - As a managed database service, Amazon RDS handles underlying operating system maintenance and database software patching.

Other options:

- **A. EC2 virus scanning** - Customers are responsible for securing the EC2 guest operating system and installed software.
- **C. Encrypting communication between EC2 and ELB** - Customers are responsible for configuring encryption and SSL/TLS settings for their applications.
- **E. Configuring security groups and NACLs** - Customers are responsible for defining network access rules for their resources.

### **Exam Focus**

|Security Activity|Responsibility|
|---|---|
|Underlying infrastructure security|**AWS**|
|Protection against infrastructure-level IP spoofing and packet sniffing|**AWS**|
|RDS underlying operating system patching|**AWS**|
|EC2 guest operating system patching|**Customer**|
|EC2 antivirus software|**Customer**|
|Application communication encryption|**Customer**|
|Security group configuration|**Customer**|
|Network ACL configuration|**Customer**|

**Important distinction:** Customer responsibilities vary depending on the service being used. Managed services such as Amazon RDS reduce the customer's infrastructure management responsibilities compared with Amazon EC2.
- **EC2 guest OS patching - Customer**
- **RDS underlying OS patching - AWS**
- **Configure resource access and encryption - Customer**

## **19. Practice Question**

### **Question**

A company is using the AWS Cloud Adoption Framework (AWS CAF) and wants to establish a Cloud Center of Excellence (CCoE). Which phase of the CAF transformation journey typically involves this activity?

### **Choices**

A. Scale  
B. Launch  
C. Align  
D. Envision

### **Answers**

**B. Launch**

### **Why**

According to the supplied practice question, the **Launch phase** of the AWS Cloud Adoption Framework (AWS CAF) involves delivering pilot initiatives, establishing cloud operational practices, and demonstrating incremental business value.

A **Cloud Center of Excellence (CCoE)** provides centralized cloud expertise, guidance, and best practices to support broader cloud adoption across an organization.

Other options:
- **A. Scale** - Expands cloud adoption across the organization and scales successful pilot initiatives.
- **C. Align** - Assesses organizational readiness, identifies capability gaps, and develops transformation action plans.
- **D. Envision** - Establishes a shared transformation vision and identifies how cloud adoption can achieve business outcomes.

### **Exam Focus**

|AWS CAF Phase|Main Purpose|Exam Clue|
|---|---|---|
|**Envision**|Identify transformation opportunities|Business vision and outcomes|
|**Align**|Assess readiness and identify gaps|Capability gaps and action plans|
|**Launch**|Deliver pilot initiatives|Initial deployments and business value|
|**Scale**|Expand successful initiatives|Organization-wide cloud adoption|

**AWS CAF transformation journey:**

1. **Envision** - Identify the vision.
2. **Align** - Assess readiness.
3. **Launch** - Deliver pilot initiatives.
4. **Scale** - Expand cloud adoption.
- **Identify organizational readiness gaps - Align**
- **Demonstrate incremental business value through pilots - Launch**
- **Establish a CCoE - Launch (according to this practice question)**
- **Expand cloud adoption across the organization - Scale**

## **20. Practice Question**

### **Question**

A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?

### **Choices**

A. AWS Step Functions  
B. Amazon Simple Queue Service (Amazon SQS)  
C. Amazon Kinesis Data Streams  
D. Amazon Simple Notification Service (Amazon SNS)

### **Answers**

**B. Amazon Simple Queue Service (Amazon SQS)**

### **Why**

**Amazon SQS** is a fully managed message queuing service that allows distributed application components to send, store, and receive messages independently.

Amazon SQS supports **FIFO (First-In, First-Out) queues**, which preserve message ordering and provide message deduplication capabilities.

The key clues are **message queuing**, **storing messages**, and **FIFO ordering**.

Other options:
- **A. AWS Step Functions** - Coordinates distributed application components through workflows and state machines. It is not a message queuing service.
- **C. Amazon Kinesis Data Streams** - Processes real-time streaming data and preserves ordering within a shard. It is designed for streaming workloads rather than traditional application message queuing.
- **D. Amazon SNS** - Provides publish/subscribe messaging that distributes messages to subscribers rather than acting as a message queue from which consumers retrieve stored messages.

### **Exam Focus**

|Service|Main Purpose|Exam Clue|
|---|---|---|
|**Amazon SQS**|Message queuing|Send, store, and receive messages|
|**Amazon SNS**|Publish/subscribe messaging|Fan-out and notifications|
|**Amazon Kinesis Data Streams**|Real-time data streaming|Continuous streaming data|
|**AWS Step Functions**|Workflow orchestration|Coordinate application steps|

#### **Amazon SQS Standard vs FIFO Queues**

|Feature|Standard Queue|FIFO Queue|
|---|---|---|
|Message ordering|Best-effort ordering|Strict ordering within a message group|
|Delivery|At-least-once delivery|Supports message deduplication|
|Primary use case|High-throughput message processing|Order-sensitive message processing|

- **Decouple application components using message queues - Amazon SQS**
- **Preserve message processing order - Amazon SQS FIFO**
- **Broadcast messages to multiple subscribers - Amazon SNS**
- **Process real-time streaming data - Amazon Kinesis Data Streams**
- **Coordinate multi-step workflows - AWS Step Functions**

**Important clarification:** The supplied explanation incorrectly states that Amazon SNS does not support FIFO. Amazon SNS also supports FIFO topics. However, Amazon SQS FIFO is the correct answer because the scenario specifically requires a message queue that sends, stores, and receives messages. SQS FIFO deduplication also does not eliminate the need for applications to handle potential message reprocessing.

## **21. Practice Question**

### **Question**

Which AWS cloud architecture principle states that systems should reduce interdependencies?

### **Choices**

A. Services, not servers  
B. Loose coupling  
C. Scalability  
D. Removing single points of failure

### **Answers**

**B. Loose coupling**

### **Why**

**Loose coupling** is an architectural principle that reduces dependencies between application components.

It allows components to operate independently, minimizing the impact of changes or failures in one component on other components.

Other options:
- **A. Services, not servers** - Encourages using managed AWS services instead of managing the underlying server infrastructure.
- **C. Scalability** - The ability of a system to handle increasing workloads by adjusting resource capacity.
- **D. Removing single points of failure** - Focuses on redundancy and ensuring continued operation when individual components fail.

### **Exam Focus**

|Design Principle|Exam Clue|
|---|---|
|**Loose coupling**|Reduce dependencies between components|
|**Services, not servers**|Use managed services|
|**Scalability**|Handle increasing workloads|
|**Remove single points of failure**|Improve reliability through redundancy|

- **Reduce component interdependencies - Loose coupling**
- **Prevent failures from cascading between components - Loose coupling**
- **Avoid dependency on a single resource - Remove single points of failure**

## **22. Practice Question**

### **Question**

A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS service should be used to troubleshoot these issues?

### **Choices**

A. AWS X-Ray  
B. Amazon Inspector  
C. AWS CodePipeline  
D. AWS CloudTrail

### **Answers**

**A. AWS X-Ray**

### **Why**

**AWS X-Ray** provides distributed tracing for applications, particularly those built using microservices architectures.

It allows developers to:
- Trace requests across application components.
- Identify performance bottlenecks.
- Diagnose application latency issues.
- Identify the root cause of application errors.

Other options:

- **B. Amazon Inspector** - Automatically scans workloads for software vulnerabilities and unintended network exposure.
- **C. AWS CodePipeline** - Automates application build, test, and deployment stages through a continuous delivery pipeline.
- **D. AWS CloudTrail** - Records AWS API calls and account activity for auditing and compliance, rather than tracing requests between application components.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS X-Ray**|Distributed tracing and application latency|
|**Amazon Inspector**|Automated vulnerability assessment|
|**AWS CodePipeline**|Continuous delivery automation|
|**AWS CloudTrail**|API activity auditing|

- **Troubleshoot microservices performance - AWS X-Ray**
- **Identify application latency bottlenecks - AWS X-Ray**
- **Trace requests across distributed application components - AWS X-Ray**

## **23. Practice Question**

### **Question**

Which of the following are important design principles you should adopt when designing systems on AWS? (Select TWO.)

### **Choices**

A. Always use Global Services in your architecture rather than Regional Services  
B. Always choose to pay as you go  
C. Treat servers as fixed resources  
D. Automate wherever possible  
E. Remove single points of failure

### **Answers**

**D. Automate wherever possible**
**E. Remove single points of failure**

### **Why**

Two important AWS cloud architecture design principles are:
- **Automate wherever possible** - Reduces manual intervention, minimizes human errors, and improves operational efficiency and recovery.
- **Remove single points of failure** - Uses redundancy to ensure systems remain operational when individual components fail.    

Other options:
- **A. Always use Global Services** - The choice between global and Regional services depends on workload requirements. Neither is universally preferred.
- **B. Always choose to pay as you go** - Pay-as-you-go is a cloud pricing characteristic rather than a system architecture design principle. Pricing models should be selected according to workload requirements.
- **C. Treat servers as fixed resources** - Contradicts cloud design principles that encourage infrastructure to be replaceable and dynamically scalable.

### **Exam Focus**

|Recommended Design Principle|Benefit|
|---|---|
|**Automate wherever possible**|Reduce human errors and manual effort|
|**Remove single points of failure**|Improve availability and reliability|
|**Treat resources as replaceable**|Improve flexibility and elasticity|
|**Loose coupling**|Reduce component dependencies|

- **Reduce manual operational tasks - Automation**
- **Continue operating when a component fails - Redundancy**
- **Avoid treating servers as permanent resources - Cloud architecture principle**

## **24. Practice Question**

### **Question**

Which of the following is an AWS Well-Architected Framework design principle related to reliability?

### **Choices**

A. Deployment to a single Availability Zone  
B. Ability to recover from failure  
C. Design for cost optimization  
D. Perform operations as code

### **Answers**

**B. Ability to recover from failure**

### **Why**

The **Reliability pillar** of the AWS Well-Architected Framework focuses on ensuring workloads perform their intended functions correctly and consistently.

An important reliability design principle is the ability to **automatically recover from failure**, allowing workloads to maintain or restore operation when components fail.

Other options:
- **A. Deployment to a single Availability Zone** - Creates a dependency on one Availability Zone and reduces resilience against AZ-level failures.
- **C. Design for cost optimization** - Relates to the Cost Optimization pillar, which focuses on avoiding unnecessary expenses.
- **D. Perform operations as code** - A design principle of the Operational Excellence pillar that focuses on automating operational activities.

### **Exam Focus**

|Well-Architected Pillar|Exam Clue|
|---|---|
|**Reliability**|Recover from failures and maintain operation|
|**Operational Excellence**|Perform operations as code|
|**Cost Optimization**|Avoid unnecessary costs|

- **Automatically recover from failure - Reliability**
- **Deploy across multiple Availability Zones - Improve reliability**
- **Perform operations as code - Operational Excellence**
- **Avoid unnecessary expenditure - Cost Optimization**

## **25. Practice Question**

### **Question**

Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)

### **Choices**

A. Security Groups  
B. Amazon CloudFront distributions  
C. Amazon Route 53  
D. Elastic Load Balancing  
E. Subnets

### **Answers**

**A. Security Groups**
**E. Subnets**

### **Why**

**Amazon Virtual Private Cloud (Amazon VPC)** provides a logically isolated virtual networking environment within AWS.

Two native VPC features are:
- **Security Groups** - Stateful virtual firewalls that control inbound and outbound traffic at the resource level, such as EC2 instances.
- **Subnets** - Divide a VPC into smaller network segments with defined IP address ranges.

Other options:
- **B. Amazon CloudFront distributions** - Configured through Amazon CloudFront, a separate content delivery network (CDN) service.
- **C. Amazon Route 53** - A separate DNS and traffic routing service.
- **D. Elastic Load Balancing** - Distributes incoming traffic across multiple targets and is configured separately through the EC2 console.

### **Exam Focus**

|Feature or Service|Main Purpose|
|---|---|
|**Amazon VPC**|Logically isolated virtual network|
|**Security Group**|Resource-level traffic control|
|**Subnet**|Network segmentation within a VPC|
|**Network ACL**|Subnet-level traffic control|
|**Amazon CloudFront**|Global content delivery|
|**Amazon Route 53**|DNS and traffic routing|
|**Elastic Load Balancing**|Distribute incoming application traffic|

- **Configure virtual networking - Amazon VPC**
- **Control traffic at the resource level - Security Groups**
- **Divide a VPC into network segments - Subnets**
- **Control traffic at the subnet level - Network ACLs**

## **26. Practice Question**

### **Question**

A company needs to migrate a 100 TB on-premises database to AWS but has limited network bandwidth. Which AWS service is MOST appropriate for this data transfer?

### **Choices**

A. AWS DataSync  
B. AWS Snowball Edge  
C. AWS Direct Connect  
D. Amazon S3 Transfer Acceleration

### **Answers**

**B. AWS Snowball Edge**

### **Why**

**AWS Snowball Edge** is a physical data transfer device designed for large-scale data migrations and edge computing.

Instead of transferring large amounts of data over a network, customers can transfer data onto physical devices and ship them to AWS.

The key clues are **100 TB of data** and **limited network bandwidth**, making physical, offline data transfer the most appropriate solution in this scenario.

Other options:
- **A. AWS DataSync** - Automates data transfers between on-premises storage and AWS over a network. Limited bandwidth would significantly increase transfer time.
- **C. AWS Direct Connect** - Provides a dedicated private network connection to AWS but requires establishing network connectivity before transferring data.
- **D. Amazon S3 Transfer Acceleration** - Accelerates data transfers to Amazon S3 using AWS edge locations but still depends on available network bandwidth.

### **Exam Focus**

|Service|Main Purpose|Exam Clue|
|---|---|---|
|**AWS Snowball Edge**|Physical data transfer and edge computing|Large datasets with limited bandwidth|
|**AWS DataSync**|Automated online data transfer|Transfer data over a network|
|**AWS Direct Connect**|Dedicated private connectivity|Consistent network connection to AWS|
|**S3 Transfer Acceleration**|Accelerated S3 data transfers|Long-distance transfers over the internet|

- **Large-scale data migration with limited bandwidth - AWS Snowball Edge**
- **Automated online data migration - AWS DataSync**
- **Dedicated private network connection - AWS Direct Connect**
- **Accelerate uploads to Amazon S3 - S3 Transfer Acceleration**

**Key distinction:** Snowball Edge uses physical data transfer, whereas DataSync uses network-based data transfer.

## **27. Practice Question**

### **Question**

Which of the following strategies help analyze costs in AWS?

### **Choices**

A. Configuring Amazon Inspector to automatically analyze costs and email reports  
B. Using tags to group resources  
C. Using AWS CloudFormation to automate the deployment of resources  
D. Deploying resources of the same type in different Regions

### **Answers**

**B. Using tags to group resources**

### **Why**

**Tags** are key-value pairs used to identify, organize, and categorize AWS resources.

Cost allocation tags allow organizations to group resources according to:
- Department
- Project
- Environment
- Cost center

These tags can be activated as **cost allocation tags** and used with AWS Cost Explorer and AWS Cost and Usage Reports to analyze spending.

Other options:
- **A. Amazon Inspector** - An automated vulnerability assessment service, not a cost analysis or billing service.
- **C. AWS CloudFormation** - Automates infrastructure deployment using Infrastructure as Code (IaC), rather than analyzing spending.
- **D. Deploying resources in different Regions** - May support latency or compliance requirements but does not directly categorize costs by project, department, or resource ownership.

### **Exam Focus**

|Feature or Service|Exam Clue|
|---|---|
|**Cost allocation tags**|Categorize and allocate resource costs|
|**AWS Cost Explorer**|Analyze and visualize AWS spending|
|**AWS Cost and Usage Reports**|Detailed usage and billing information|
|**AWS CloudFormation**|Infrastructure as Code|
|**Amazon Inspector**|Vulnerability assessment|

- **Group AWS costs by department or project - Cost allocation tags**
- **Identify which teams are responsible for resource spending - Cost allocation tags**
- **Visualize and analyze spending patterns - AWS Cost Explorer**

## **28. Practice Question**

### **Question**

Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?

### **Choices**

A. AWS Trusted Advisor  
B. Consolidated billing  
C. Detailed billing  
D. AWS Cost Explorer

### **Answers**

**A. AWS Trusted Advisor**

### **Why**

**AWS Trusted Advisor** evaluates AWS environments and provides recommendations based on AWS best practices.

Its recommendations cover areas such as:
- Cost optimization
- Performance
- Security
- Fault tolerance
- Service limits

Trusted Advisor helps customers identify opportunities to reduce unnecessary spending, improve resource utilization, and optimize their AWS environments.

Other options:
- **B. Consolidated billing** - Combines charges from multiple AWS accounts into a single bill through AWS Organizations.
- **C. Detailed billing** - Provides granular information about AWS usage and charges but does not inspect infrastructure or provide architectural recommendations.
- **D. AWS Cost Explorer** - Analyzes, visualizes, and forecasts AWS spending but does not evaluate workloads for system performance improvements.

### **Exam Focus**

|Service or Feature|Exam Clue|
|---|---|
|**AWS Trusted Advisor**|Best-practice checks and optimization recommendations|
|**AWS Cost Explorer**|Historical spending analysis and forecasting|
|**Consolidated billing**|Combined billing across multiple AWS accounts|
|**Detailed billing**|Granular usage and cost information|

- **Inspect AWS environments for optimization opportunities - AWS Trusted Advisor**
- **Identify opportunities to save money and improve performance - AWS Trusted Advisor**
- **Analyze historical and forecasted spending - AWS Cost Explorer**

**Key distinction:** Trusted Advisor recommends improvements to AWS environments, whereas Cost Explorer analyzes AWS spending.

## **29. Practice Question**

### **Question**

Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?

### **Choices**

A. Partner network  
B. Cloud-native  
C. Infrastructure as a Service  
D. Hybrid architecture

### **Answers**

**D. Hybrid architecture**

### **Why**

A **hybrid architecture** combines cloud-based resources with on-premises infrastructure within a single solution.

In this scenario:
- Web servers are hosted on Amazon EC2 in the AWS Cloud.
- A legacy application remains in the corporate on-premises data center.
- Both environments communicate and operate together.

This combination of cloud and on-premises resources represents a hybrid architecture.

Other options:
- **A. Partner network** - The AWS Partner Network (APN) is a program for technology and consulting companies that provide AWS-related solutions and services.
- **B. Cloud-native** - Describes applications designed to take advantage of cloud computing capabilities rather than specifically describing a combination of cloud and on-premises infrastructure.
- **C. Infrastructure as a Service (IaaS)** - A cloud service model that provides virtualized compute, storage, and networking resources, rather than a deployment model.

### **Exam Focus**

|Concept|Description|
|---|---|
|**Cloud deployment**|Resources hosted in the cloud|
|**On-premises deployment**|Resources hosted in an organization's own infrastructure|
|**Hybrid architecture**|Integration of cloud and on-premises resources|
|**Cloud-native**|Applications designed to leverage cloud capabilities|
|**IaaS**|Provision of virtualized infrastructure resources|

- **AWS resources communicating with on-premises applications - Hybrid architecture**
- **Combine cloud and corporate data center infrastructure - Hybrid architecture**
- **Virtualized compute, storage, and networking - IaaS**

**Key distinction:** Hybrid architecture is a deployment model, whereas IaaS is a cloud service model.

## **30. Practice Question**

### **Question**

Which AWS service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?

### **Choices**

A. AWS Transfer Family  
B. AWS Storage Gateway  
C. Amazon Aurora  
D. Amazon EFS

### **Answers**

**B. AWS Storage Gateway**

### **Why**

**AWS Storage Gateway** is a hybrid cloud storage service that connects on-premises environments to AWS cloud storage.

It allows organizations to extend their existing storage infrastructure to AWS without replacing their entire on-premises storage environment.

It also helps reduce storage costs by moving appropriate data to cloud storage while supporting existing on-premises applications.

Other options:
- **A. AWS Transfer Family** - Provides managed file transfers using protocols such as SFTP, FTPS, and FTP to transfer files into and out of Amazon S3 or Amazon EFS. It is not a hybrid storage gateway.
- **C. Amazon Aurora** - A fully managed relational database engine compatible with MySQL and PostgreSQL, rather than a storage extension service.
- **D. Amazon Elastic File System (Amazon EFS)** - A managed, scalable NFS file storage service. It provides shared file storage rather than acting as a gateway between existing on-premises storage and AWS.

### **Exam Focus**

|Service|Main Purpose|Exam Clue|
|---|---|---|
|**AWS Storage Gateway**|Hybrid cloud storage|Extend on-premises storage to AWS|
|**AWS Transfer Family**|Managed file transfer|SFTP, FTPS, and FTP|
|**AWS DataSync**|Automated data transfer|Migrate or synchronize data over a network|
|**Amazon Aurora**|Managed relational database|MySQL and PostgreSQL compatibility|
|**Amazon EFS**|Managed shared file storage|Scalable NFS file system|

- **Extend existing on-premises storage to AWS - AWS Storage Gateway**
- **Integrate on-premises applications with cloud storage - AWS Storage Gateway**
- **Transfer files using SFTP, FTPS, or FTP - AWS Transfer Family**
- **Automate data migration and synchronization - AWS DataSync**
- **Shared file storage for multiple compute resources - Amazon EFS**

**Key distinction:** Storage Gateway extends and integrates existing storage, DataSync transfers and synchronizes data, and Transfer Family provides managed file transfer protocols.

## **31. Practice Question**

### **Question**

Which AWS service can be used to generate alerts based on an estimated monthly bill?

### **Choices**

A. AWS CloudTrail  
B. AWS X-Ray  
C. AWS Config  
D. Amazon CloudWatch

### **Answers**

**D. Amazon CloudWatch**

### **Why**

**Amazon CloudWatch** can monitor estimated AWS charges and trigger **billing alarms** when costs exceed a predefined threshold.

These alarms can use Amazon SNS to send notifications, helping customers identify unexpected increases in AWS spending.

Other options:
- **A. AWS CloudTrail** - Records AWS API calls and account activity for auditing and compliance, rather than monitoring estimated billing amounts.
- **B. AWS X-Ray** - Provides distributed tracing to troubleshoot application performance and latency.
- **C. AWS Config** - Records resource configuration changes and evaluates resources against compliance rules.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon CloudWatch**|Metrics, monitoring, and billing alarms|
|**AWS Budgets**|Budget thresholds and spending alerts|
|**AWS Cost Explorer**|Analyze and forecast spending|
|**AWS CloudTrail**|API activity auditing|
|**AWS Config**|Resource configuration compliance|
|**AWS X-Ray**|Distributed application tracing|

- **Create alarms based on estimated AWS charges - Amazon CloudWatch**
- **Send alarm notifications - Amazon SNS**
- **Monitor spending against a defined budget - AWS Budgets**

## **32. Practice Question**

### **Question**

Where can users find a catalog of AWS-recognized providers of third-party security solutions?

### **Choices**

A. AWS Marketplace  
B. AWS Service Catalog  
C. AWS Quick Start  
D. AWS CodeDeploy

### **Answers**

**A. AWS Marketplace**

### **Why**

**AWS Marketplace** is a digital catalog where customers can discover, purchase, and deploy third-party software and services.

It includes security solutions from independent software vendors, such as firewalls, intrusion detection systems, and compliance tools.

Other options:
- **B. AWS Service Catalog** - Allows organizations to create and manage catalogs of approved IT products and services for internal deployment.
- **C. AWS Quick Start** - Provides prebuilt automated deployment solutions using AWS CloudFormation templates.
- **D. AWS CodeDeploy** - Automates application code deployments to compute resources such as EC2 instances and Lambda functions.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS Marketplace**|Discover and purchase third-party solutions|
|**AWS Service Catalog**|Internally approved IT products and services|
|**AWS Quick Start**|Prebuilt automated deployments|
|**AWS CodeDeploy**|Automated application code deployment|

- **Find third-party security software - AWS Marketplace**
- **Purchase software from independent vendors - AWS Marketplace**
- **Control which IT products employees can deploy - AWS Service Catalog**

**Key distinction:** AWS Marketplace is a commercial catalog of third-party solutions, whereas AWS Service Catalog manages an organization's internally approved products.

## **33. Practice Question**

### **Question**

A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Select TWO.)

### **Choices**

A. Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account  
B. Contact AWS Support and open a case for assistance  
C. Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud  
D. Select a partner from the AWS Partner Network (APN) to assist with the migration  
E. Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account

### **Answers**

**A. Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account**
**D. Select a partner from the AWS Partner Network (APN) to assist with the migration**

### **Why**

Both AWS Professional Services and AWS Partner Network partners provide hands-on assistance with cloud adoption and migration projects.
- **AWS Professional Services** - Provides cloud expertise, migration guidance, and implementation assistance, including establishing an AWS Landing Zone.
- **AWS Partner Network (APN)** - A global network of partners that provide specialized consulting, migration, and implementation services.

Other options:
- **B. AWS Support** - Provides technical guidance and troubleshooting but is not the primary service for hands-on migration project delivery.
- **C. Amazon Connect** - A cloud-based contact center service, not a platform for requesting migration consultants.
- **E. AWS Marketplace** - Provides a platform for discovering and purchasing third-party solutions and professional services. The Marketplace team does not directly perform customer migrations.

### **Exam Focus**

|Service or Program|Exam Clue|
|---|---|
|**AWS Professional Services**|Hands-on assistance from AWS experts|
|**AWS Partner Network**|Consulting and implementation from AWS partners|
|**AWS Support**|Technical support and troubleshooting|
|**AWS Marketplace**|Purchase third-party software and services|
|**Amazon Connect**|Cloud-based contact center|

- **Hands-on migration assistance - AWS Professional Services and APN**
- **Cloud migration consulting - AWS Partner Network**
- **Resolve AWS technical issues - AWS Support**

## **34. Practice Question**

### **Question**

Which of the following is equivalent to a username and password and is used to authenticate your programmatic access to AWS services and APIs?

### **Choices**

A. Key pairs  
B. MFA  
C. Access Keys  
D. Instance Password

### **Answers**

**C. Access Keys**

### **Why**

**AWS access keys** are security credentials used to authenticate programmatic requests to AWS services.

An access key consists of:
- **Access key ID** - Identifies the credential.
- **Secret access key** - Used to authenticate signed API requests.

Access keys can be used with the AWS CLI, AWS SDKs, and AWS APIs.

Other options:
- **A. Key pairs** - Public and private keys used primarily for authenticating access to EC2 instances, rather than AWS service APIs.
- **B. MFA** - Provides an additional authentication factor rather than serving as a standalone programmatic credential pair.
- **D. Instance Password** - Used to authenticate access to an instance, such as a Windows EC2 instance through Remote Desktop Protocol (RDP).

### **Exam Focus**

|Credential|Exam Clue|
|---|---|
|**Username and password**|Console sign-in|
|**Access keys**|Programmatic AWS API access|
|**Key pairs**|EC2 instance authentication|
|**Instance password**|Operating system login|
|**MFA**|Additional authentication factor|
|**IAM role**|Temporary security credentials|

- **Access key ID and secret access key - Programmatic authentication**
- **AWS CLI and SDK authentication - Access keys or temporary credentials**
- **Avoid storing long-term credentials in applications - IAM roles**

## **35. Practice Question**

### **Question**

An application designed to span multiple Availability Zones is described as:

### **Choices**

A. Using an economy of scale  
B. Being highly available  
C. Having global reach  
D. Having elasticity

### **Answers**

**B. Being highly available**

### **Why**

**High availability** refers to designing applications to remain operational when individual resources or infrastructure components fail.

Deploying an application across multiple Availability Zones provides redundancy, allowing properly configured resources in another AZ to continue serving requests if one AZ experiences an outage.

Other options:
- **A. Economy of scale** - Refers to cost advantages achieved through AWS's large-scale infrastructure and purchasing power.
- **C. Global reach** - Refers to serving users worldwide through AWS global infrastructure, such as multiple Regions and edge locations.
- **D. Elasticity** - Refers to dynamically increasing or decreasing resource capacity according to workload demand.

### **Exam Focus**

|Cloud Concept|Exam Clue|
|---|---|
|**High availability**|Minimize downtime through redundancy|
|**Economies of scale**|Lower costs through aggregated demand|
|**Global reach**|Serve users worldwide|
|**Elasticity**|Adjust resource capacity according to demand|

- **Deploy across multiple Availability Zones - High availability**
- **Reduce the impact of an Availability Zone failure - Multi-AZ deployment**
- **Dynamically scale resources according to demand - Elasticity**
- **Deploy applications closer to users worldwide - Global reach**

## **36. Practice Question**

### **Question**

What is the customer's responsibility when using AWS Lambda?

### **Choices**

A. Operating system configuration  
B. Application management  
C. Platform management  
D. Code encryption

### **Answers**

**B. Application management**

### **Why**

**AWS Lambda** is a serverless compute service where AWS manages the underlying infrastructure and execution platform.

Customers remain responsible for managing their application, including writing, deploying, securing, and maintaining their Lambda function code.

Other options:
- **A. Operating system configuration** - AWS manages the underlying operating system used by Lambda.
- **C. Platform management** - AWS manages the serverless platform, including infrastructure maintenance, scaling, and availability.
- **D. Code encryption** - Lambda automatically encrypts function code at rest by default. Customers can optionally configure their own encryption keys.

### **Exam Focus**

|Responsibility|AWS|Customer|
|---|---|---|
|Physical infrastructure|Yes|No|
|Underlying operating system|Yes|No|
|Serverless platform management|Yes|No|
|Infrastructure scaling|Yes|No|
|Application code management|No|Yes|
|Application permissions|No|Yes|

- **Run code without managing servers - AWS Lambda**
- **Lambda application code management - Customer responsibility**
- **Lambda operating system and platform management - AWS responsibility**

**Key distinction:** Serverless computing removes infrastructure management responsibilities but does not remove customer responsibilities for application security and management.

## **37. Practice Question**

### **Question**

Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?

### **Choices**

A. Performance efficiency  
B. Operational excellence  
C. Security  
D. Reliability

### **Answers**

**B. Operational excellence**

### **Why**

**Perform operations as code** is a design principle of the **Operational Excellence pillar** of the AWS Well-Architected Framework.

It encourages organizations to define and automate operational processes using code, reducing manual intervention, minimizing human errors, and improving operational consistency.

Other options:
- **A. Performance Efficiency** - Focuses on using computing resources efficiently to meet workload requirements.
- **C. Security** - Focuses on protecting data, systems, and assets through appropriate security controls.
- **D. Reliability** - Focuses on ensuring workloads perform their intended functions and recover from failures.

### **Exam Focus**

|Well-Architected Pillar|Exam Clue|
|---|---|
|**Operational Excellence**|Automation and continuous operational improvement|
|**Security**|Protect data, systems, and assets|
|**Reliability**|Recover from failures|
|**Performance Efficiency**|Efficient use of computing resources|
|**Cost Optimization**|Avoid unnecessary costs|
|**Sustainability**|Minimize environmental impact|

- **Perform operations as code - Operational Excellence**
- **Automate operational processes - Operational Excellence**
- **Automatically recover from failure - Reliability**
- **Use computing resources efficiently - Performance Efficiency**

## **38. Practice Question**

### **Question**

Which of the following strategies helps protect your AWS root account?

### **Choices**

A. Delete root user access keys if you do not need them  
B. Access the root account only from your personal Mobile Phone  
C. Only share your AWS account password or access keys with trusted persons  
D. Apply MFA for the root account and use it for all of your work

### **Answers**

**A. Delete root user access keys if you do not need them**

### **Why**

The **AWS account root user** has unrestricted access to the AWS account's services and resources.

Deleting unnecessary root user access keys reduces the risk of credential exposure and unauthorized programmatic access.

AWS recommends protecting the root user with MFA and using it only for tasks that specifically require root user access.

Other options:
- **B. Access only from a personal mobile phone** - Restricting root user access to a personal mobile device is not a recognized AWS security best practice.
- **C. Share credentials with trusted persons** - AWS credentials should never be shared because doing so increases security risks and reduces individual accountability.
- **D. Enable MFA and use root for all work** - Enabling MFA is recommended, but using the root user for everyday tasks violates AWS security best practices.

### **Exam Focus**

#### **Root User Security Best Practices**
- **Enable MFA for the root user.**
- **Avoid creating root user access keys.**
- **Delete unnecessary root user access keys.**
- **Never share root user credentials.**
- **Do not use the root user for everyday tasks.**
- **Use identities with appropriate permissions for daily activities.**

|Identity|Recommended Usage|
|---|---|
|**Root user**|Tasks specifically requiring root access|
|**IAM user**|Individual identity with assigned permissions|
|**IAM role**|Temporary credentials and delegated access|

**Exam trap:** An answer may contain a valid security practice, such as enabling MFA, combined with an incorrect practice, such as using the root user for everyday work. Evaluate the entire answer.

## **39. Practice Question**

### **Question**

Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?

### **Choices**

A. Amazon VPC endpoints  
B. Amazon VPC peering  
C. Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink  
D. AWS Direct Connect

### **Answers**

**B. Amazon VPC peering**

### **Why**

**Amazon VPC peering** creates a private networking connection between two VPCs.

It allows resources in both VPCs to communicate using private IP addresses without requiring traffic to traverse the public internet.

Other options:
- **A. Amazon VPC endpoints** - Provide private connectivity between a VPC and supported AWS services without requiring public internet access.
- **C. Amazon EC2 ClassicLink** - A legacy feature that allowed EC2-Classic instances to communicate with resources inside a VPC, rather than connecting two VPCs.
- **D. AWS Direct Connect** - Provides a dedicated private network connection between on-premises infrastructure and AWS.

### **Exam Focus**

|Networking Feature|Exam Clue|
|---|---|
|**VPC peering**|Privately connect two VPCs|
|**VPC endpoints**|Privately access supported AWS services|
|**AWS Direct Connect**|Dedicated connection between on-premises and AWS|
|**AWS Site-to-Site VPN**|Encrypted connection between on-premises and AWS|
|**EC2 ClassicLink**|Legacy EC2-Classic connectivity|

- **Connect two VPCs using private IP addresses - VPC peering**
- **Access AWS services without traversing the public internet - VPC endpoints**
- **Dedicated private connection from a corporate data center to AWS - AWS Direct Connect**
- **Encrypted connection over the public internet - AWS Site-to-Site VPN**

## **40. Practice Question**

### **Question**

Which of the following is a component of the shared responsibility model managed entirely by AWS?

### **Choices**

A. Encrypting data  
B. Patching operating system software  
C. Enforcing multi-factor authentication  
D. Auditing physical data center assets

### **Answers**

**D. Auditing physical data center assets**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS is responsible for **security of the cloud**, including protecting, maintaining, and auditing its physical infrastructure.

This includes:
- Physical hardware inventory
- Data center facility inspections
- Physical access logs
- Physical infrastructure security

Customers do not manage or audit the underlying physical infrastructure directly.

Other options:
- **A. Encrypting data** - Customers are responsible for ensuring their data meets encryption requirements. AWS provides encryption capabilities and managed services to support this responsibility.
- **B. Patching operating system software** - Customers are responsible for patching guest operating systems on EC2 instances. AWS manages the underlying operating system for managed services such as Amazon RDS and AWS Lambda.
- **C. Enforcing multi-factor authentication** - AWS provides MFA capabilities, while customers are responsible for configuring and enforcing MFA for their identities.

### **Exam Focus**

|Security Activity|Responsibility|
|---|---|
|Physical data center security|**AWS**|
|Auditing physical data center assets|**AWS**|
|Physical hardware maintenance|**AWS**|
|Hypervisor patching|**AWS**|
|EC2 guest operating system patching|**Customer**|
|RDS underlying operating system patching|**AWS**|
|IAM permissions management|**Customer**|
|MFA configuration and enforcement|**Customer**|
|Customer data protection|**Customer**|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **Physical infrastructure auditing - AWS responsibility**
- **Identity and access management - Customer responsibility**

**Key distinction:** Physical infrastructure security is always AWS's responsibility, whereas responsibilities such as operating system patching depend on whether the customer uses an infrastructure service or a managed service.

## **41. Practice Question**

### **Question**

Which of the following AWS services can be used as a compute resource? (Select TWO.)

### **Choices**

A. Amazon S3  
B. AWS Lambda  
C. Amazon CloudWatch  
D. Amazon EC2  
E. Amazon VPC

### **Answers**

**B. AWS Lambda**
**D. Amazon EC2**

### **Why**

Both Amazon EC2 and AWS Lambda provide compute capabilities for executing application code.
- **Amazon Elastic Compute Cloud (Amazon EC2)** - Provides resizable virtual servers for running applications and workloads.
- **AWS Lambda** - Provides serverless compute that executes code in response to events without requiring customers to manage servers.

Other options:
- **A. Amazon S3** - An object storage service for storing and retrieving data.
- **C. Amazon CloudWatch** - A monitoring and observability service that collects metrics, logs, and events.
- **E. Amazon VPC** - A networking service that provides logically isolated virtual network environments.

### **Exam Focus**

|Service|Category|Main Purpose|
|---|---|---|
|**Amazon EC2**|Compute|Virtual servers|
|**AWS Lambda**|Compute|Serverless code execution|
|**Amazon S3**|Storage|Object storage|
|**Amazon CloudWatch**|Monitoring|Metrics, logs, and alarms|
|**Amazon VPC**|Networking|Isolated virtual networks|

- **Run applications on virtual servers - Amazon EC2**
- **Execute code without managing servers - AWS Lambda**
- **Event-driven serverless computing - AWS Lambda**

## **42. Practice Question**

### **Question**

Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?

### **Choices**

A. Create private connection to your data center  
B. Automate the process of provisioning new compute resources  
C. Make synchronous replication of your data possible  
D. Achieve global high availability

### **Answers**

**C. Make synchronous replication of your data possible**

### **Why**

Availability Zones within an AWS Region are interconnected through **high-bandwidth, low-latency networking**.

This enables **synchronous data replication** between Availability Zones, where a write operation is confirmed by the replicated destination before the operation completes.

Synchronous replication helps maintain data consistency and supports high availability within a Region.

Other options:
- **A. Private connection to your data center** - Describes AWS Direct Connect rather than internal connectivity between Availability Zones.
- **B. Automate compute resource provisioning** - Describes capabilities provided by services such as Amazon EC2 Auto Scaling.
- **D. Global high availability** - Requires a multi-Region architecture rather than connectivity between Availability Zones within a single Region.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Low-latency AZ connectivity**|Synchronous data replication|
|**Multi-AZ deployment**|Regional high availability|
|**Multi-Region deployment**|Geographic redundancy|
|**AWS Direct Connect**|Dedicated private connection to AWS|
|**EC2 Auto Scaling**|Automatic compute capacity adjustment|

- **Low-latency connections between Availability Zones - Synchronous replication**
- **Protect against AZ-level failures - Multi-AZ deployment**
- **Protect against Region-level failures - Multi-Region deployment**

## **43. Practice Question**

### **Question**

You want to create a backup of your data in another geographical location. Where should you create this backup?

### **Choices**

A. In another Availability Zone  
B. In another Region  
C. In another Edge location  
D. In another VPC

### **Answers**

**B. In another Region**

### **Why**

An **AWS Region** represents a separate geographic area containing multiple Availability Zones.

Storing backups in another Region provides **geographic redundancy** and helps protect data against Region-level disasters and widespread outages.

Other options:
- **A. Another Availability Zone** - Provides physical separation and protection against localized failures but remains within the same geographic Region.
- **C. Another Edge location** - Edge locations are primarily used for low-latency content delivery, rather than customer-managed backup storage.
- **D. Another VPC** - Provides logical network isolation but does not inherently provide geographic separation.

### **Exam Focus**

|Infrastructure|Purpose|
|---|---|
|**Region**|Separate geographic area|
|**Availability Zone**|Physically isolated infrastructure within a Region|
|**Edge location**|Deliver content closer to end users|
|**VPC**|Logical network isolation|

- **Backup data in another geographic location - Another AWS Region**
- **Disaster recovery against Regional outages - Multi-Region architecture**
- **Protection against localized infrastructure failures - Multi-AZ architecture**
- **Network isolation - Amazon VPC**

## **44. Practice Question**

### **Question**

What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?

### **Choices**

A. Amazon EBS  
B. Amazon EC2 Instance Store  
C. Amazon S3  
D. Amazon S3 Glacier Flexible Retrieval

### **Answers**

**C. Amazon S3**

### **Why**

**Amazon S3** provides durable object storage that is suitable for storing database backups.

Amazon S3 Standard provides immediate, millisecond data retrieval and is generally more cost-effective than Amazon EBS for retaining backup files.

The key requirements are **low cost**, **durability**, and **immediate retrieval**.

Other options:
- **A. Amazon EBS** - Persistent block storage designed primarily for disk access by EC2 instances. It is generally less cost-effective for retaining backup files.
- **B. Amazon EC2 Instance Store** - Temporary block storage whose data is lost when an instance stops or terminates. It is unsuitable for durable backups.
- **D. Amazon S3 Glacier Flexible Retrieval** - Low-cost archival storage with retrieval times ranging from minutes to hours, which does not meet the immediate retrieval requirement.

### **Exam Focus**

|Storage Service|Storage Type|Immediate Retrieval|Suitable for Backups|
|---|---|---|---|
|**Amazon S3 Standard**|Object|Yes|Yes|
|**Amazon EBS**|Persistent block|Yes|Possible, but generally less cost-effective|
|**EC2 Instance Store**|Ephemeral block|Yes|No|
|**S3 Glacier Flexible Retrieval**|Archival object|No|Yes, if delayed retrieval is acceptable|

- **Durable and cost-effective backup storage - Amazon S3**
- **Immediate access to backup data - S3 storage classes with millisecond retrieval**
- **Low-cost archival storage with delayed retrieval - S3 Glacier Flexible Retrieval**
- **Temporary storage - EC2 Instance Store**

**Exam trap:** The cheapest storage option is not necessarily the correct answer. It must also satisfy the retrieval time and durability requirements.

## **45. Practice Question**

### **Question**

Which AWS service is designed specifically to migrate databases from on-premises to AWS, supporting both same-engine and cross-engine migrations?

### **Choices**

A. AWS Database Migration Service (AWS DMS)  
B. AWS DataSync  
C. AWS Application Migration Service  
D. AWS Schema Conversion Tool

### **Answers**

**A. AWS Database Migration Service (AWS DMS)**

### **Why**

**AWS Database Migration Service (AWS DMS)** helps migrate databases to AWS with minimal downtime through data replication.

It supports:
- **Homogeneous migrations** - Source and target databases use the same database engine.
- **Heterogeneous migrations** - Source and target databases use different database engines.

Other options:

- **B. AWS DataSync** - Automates data transfers between storage systems and AWS storage services rather than performing database-specific migrations.
- **C. AWS Application Migration Service** - Migrates entire servers, including operating systems and applications, to AWS.
- **D. AWS Schema Conversion Tool (AWS SCT)** - Converts database schemas and database code between different database engines. It supports heterogeneous migrations but is not the primary database replication service.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS DMS**|Migrate databases with minimal downtime|
|**AWS SCT**|Convert database schemas between engines|
|**AWS DataSync**|Transfer and synchronize storage data|
|**AWS Application Migration Service**|Lift-and-shift server migration|

|Migration Type|Example|
|---|---|
|**Homogeneous**|MySQL to MySQL|
|**Heterogeneous**|Oracle to PostgreSQL|

- **Migrate database data - AWS DMS**
- **Convert database schemas - AWS SCT**
- **Migrate entire servers - AWS Application Migration Service**
- **Transfer files and storage data - AWS DataSync**

**Key distinction:** AWS DMS migrates database data, while AWS SCT helps convert database schemas when migrating between different database engines.

## **46. Practice Question**

### **Question**

What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?

### **Choices**

A. AWS Network Access Control Lists  
B. Amazon Kinesis  
C. Security groups  
D. Amazon Inspector

### **Answers**

**D. Amazon Inspector**

### **Why**

**Amazon Inspector** is an automated vulnerability management service that assesses workloads for security vulnerabilities.

For Amazon EC2 instances, it identifies:
- Known software vulnerabilities.
- Unintended network exposure.
- Vulnerable installed software packages.

It generates prioritized security findings to help customers identify and remediate vulnerabilities.

Other options:
- **A. Network Access Control Lists (Network ACLs)** - Stateless subnet-level firewalls that control inbound and outbound network traffic rather than identifying vulnerabilities.
- **B. Amazon Kinesis** - A real-time data streaming service for ingesting and processing streaming data.
- **C. Security groups** - Stateful resource-level firewalls that control permitted network traffic but do not perform automated vulnerability assessments.

### **Exam Focus**

|Service or Feature|Exam Clue|
|---|---|
|**Amazon Inspector**|Automated vulnerability assessments|
|**Security groups**|Stateful resource-level traffic filtering|
|**Network ACLs**|Stateless subnet-level traffic filtering|
|**Amazon Kinesis**|Real-time data streaming|

- **Automatically identify EC2 software vulnerabilities - Amazon Inspector**
- **Identify unintended network exposure - Amazon Inspector**
- **Control permitted network traffic - Security groups and Network ACLs**

**Key distinction:** Amazon Inspector identifies security vulnerabilities, whereas security groups and Network ACLs enforce network traffic rules.

## **47. Practice Question**

### **Question**

To protect against data loss, you need to back up your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?

### **Choices**

A. Amazon S3 Glacier Deep Archive  
B. Amazon S3 Glacier  
C. Instance Store  
D. Amazon S3 Standard-Infrequent Access

### **Answers**

**D. Amazon S3 Standard-Infrequent Access**

### **Why**

**Amazon S3 Standard-Infrequent Access (S3 Standard-IA)** is designed for data that is accessed infrequently but requires immediate retrieval when needed.

It provides:
- Lower storage costs than S3 Standard.
- Millisecond data retrieval.
- Durable object storage.
- Retrieval charges when data is accessed.

These characteristics make it suitable for database backups that are stored regularly but retrieved infrequently.

Other options:
- **A. Amazon S3 Glacier Deep Archive** - Low-cost long-term archival storage with retrieval times starting at approximately 12 hours.
- **B. Amazon S3 Glacier** - Traditional Glacier archival storage requires minutes to hours for retrieval, which does not satisfy the immediate access requirement.
- **C. Instance Store** - Ephemeral block storage that does not provide persistent storage when an EC2 instance stops or terminates.

### **Exam Focus**

|S3 Storage Class|Access Pattern|Retrieval Time|
|---|---|---|
|**S3 Standard**|Frequently accessed data|Milliseconds|
|**S3 Standard-IA**|Infrequently accessed data|Milliseconds|
|**S3 Glacier Instant Retrieval**|Rarely accessed archival data|Milliseconds|
|**S3 Glacier Flexible Retrieval**|Long-term archival data|Minutes to hours|
|**S3 Glacier Deep Archive**|Very rarely accessed archival data|Hours|

- **Frequently accessed data with immediate retrieval - S3 Standard**
- **Infrequently accessed backups with immediate retrieval - S3 Standard-IA**
- **Rarely accessed archives with immediate retrieval - S3 Glacier Instant Retrieval**
- **Archival storage with delayed retrieval - S3 Glacier Flexible Retrieval**
- **Lowest-cost long-term archival storage - S3 Glacier Deep Archive**

**Exam trap:** Pay attention to both access frequency and retrieval time. Infrequently accessed data does not necessarily mean delayed retrieval is acceptable.

**Important clarification:** The question uses Amazon S3 Glacier to refer to traditional archival storage with delayed retrieval. S3 Glacier Instant Retrieval is an exception that supports immediate access.

## **48. Practice Question**

### **Question**

Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?

### **Choices**

A. Amazon EMR  
B. Amazon Athena  
C. AWS Glue  
D. Amazon CloudSearch

### **Answers**

**B. Amazon Athena**

### **Why**

**Amazon Athena** is a serverless interactive query service that allows customers to analyze data stored directly in Amazon S3 using standard SQL.

It eliminates the need to load data into a separate database or manage dedicated query infrastructure.

The key clues are **standard SQL**, **stored datasets**, and **query directly from Amazon S3**.

Other options:
- **A. Amazon EMR** - A managed big data processing service that uses frameworks such as Apache Spark and Hadoop.
- **C. AWS Glue** - A serverless data integration and Extract, Transform, Load (ETL) service used to discover, prepare, and transform data for analytics.
- **D. Amazon CloudSearch** - A managed search service for adding full-text search functionality to applications rather than analyzing datasets using SQL.

### **Exam Focus**

|Service|Main Purpose|Exam Clue|
|---|---|---|
|**Amazon Athena**|Serverless data querying|SQL queries directly against S3|
|**Amazon EMR**|Big data processing|Apache Spark and Hadoop|
|**AWS Glue**|Data integration and ETL|Discover, prepare, and transform data|
|**Amazon CloudSearch**|Application search|Full-text search functionality|

- **Query S3 data directly using standard SQL - Amazon Athena**
- **Serverless interactive data analytics - Amazon Athena**
- **Big data processing using Spark or Hadoop - Amazon EMR**
- **Extract, Transform, Load (ETL) - AWS Glue**

**Key distinction:** Athena queries data, Glue prepares and transforms data, and EMR processes large datasets using big data frameworks.

## **49. Practice Question**

### **Question**

Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?

### **Choices**

A. Secret token  
B. User name and password  
C. UserID  
D. Access keys

### **Answers**

**D. Access keys**

### **Why**

**AWS access keys** authenticate programmatic requests to AWS services through the AWS CLI, AWS SDKs, and AWS APIs.

An IAM user's access key consists of:
- **Access key ID** - Identifies the credential.
- **Secret access key** - Used to authenticate signed API requests.

Other options:
- **A. Secret token** - Temporary security credentials include a session token alongside an access key ID and secret access key. A token alone is insufficient for authentication.
- **B. User name and password** - Used for interactive sign-in to the AWS Management Console rather than directly authenticating AWS API requests.
- **C. UserID** - An internal identifier assigned to an IAM user, not an authentication credential.

### **Exam Focus**

|Credential|Usage|
|---|---|
|**Username and password**|AWS Management Console sign-in|
|**Access key ID and secret access key**|Programmatic AWS access|
|**Access key ID, secret access key, and session token**|Temporary security credentials|
|**EC2 key pair**|EC2 instance authentication|
|**UserID**|Internal identity identifier|

- **Programmatic access to AWS services - Access keys**
- **Interactive console access - Username and password**
- **Temporary security credentials - IAM roles and AWS STS**
- **Access AWS services through terminal commands - AWS CLI**

**Important distinction:** The AWS CLI does not exclusively require long-term IAM user access keys. It can also use temporary credentials, which are preferred for security.

## **50. Practice Question**

### **Question**

Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)

### **Choices**

A. Creating database schema  
B. Patching database software  
C. Running penetration tests  
D. Testing application releases  
E. Backing up databases

### **Answers**

**B. Patching database software**
**E. Backing up databases**

### **Why**

Managed AWS services such as **Amazon Relational Database Service (Amazon RDS)** reduce operational overhead by handling common database administration tasks.

These include:
- **Database software patching** - AWS manages database software maintenance and patching.
- **Database backups** - Amazon RDS supports automated database backups based on configured backup settings.

This allows IT teams to focus more on application development and business requirements rather than routine infrastructure maintenance.

Other options:
- **A. Creating database schema** - Requires knowledge of the application's data model and business requirements, which remains the customer's responsibility.
- **C. Running penetration tests** - Customers are responsible for security testing of their own applications and resources in accordance with AWS policies.
- **D. Testing application releases** - Customers are responsible for validating application functionality, business logic, and release quality.

### **Exam Focus**

|Database Management Task|Amazon RDS Responsibility|
|---|---|
|Physical infrastructure maintenance|**AWS**|
|Underlying operating system maintenance|**AWS**|
|Database software patching|**AWS**|
|Automated backup execution|**AWS**|
|Backup retention configuration|**Customer**|
|Database schema design|**Customer**|
|Application testing|**Customer**|
|Application security testing|**Customer**|

#### **Self-Managed Database on EC2 vs Amazon RDS**

|Task|Database on EC2|Amazon RDS|
|---|---|---|
|Operating system patching|Customer|AWS|
|Database software patching|Customer|AWS managed|
|Database backups|Customer managed|AWS automated, customer configured|
|Database schema design|Customer|Customer|
|Physical infrastructure|AWS|AWS|

- **Reduce routine database administration - Amazon RDS**
- **Managed database software patching - Amazon RDS**
- **Automated database backups - Amazon RDS**
- **Database schema and application logic - Customer responsibility**
- **Reduce operational overhead - Use managed services**

**Key distinction:** Managed services transfer routine infrastructure maintenance tasks to AWS, allowing customers to focus on application development and business value. Customers remain responsible for their data, application logic, access permissions, and appropriate service configurations.

## **51. Practice Question**

### **Question**

Fault tolerance refers to:

### **Choices**

A. The ability of an application to accommodate growth without changing design  
B. The built-in redundancy of an application's components  
C. How secure your application is  
D. How well and how quickly an application's environment can have lost data restored

### **Answers**

**B. The built-in redundancy of an application's components**

### **Why**

**Fault tolerance** is the ability of a system to continue operating correctly even when individual components fail.

It relies on built-in redundancy to eliminate single points of failure and minimize service disruption.

Other options:
- **A. Accommodate growth without changing design** - Describes scalability, which focuses on handling increasing workloads.
- **C. Application security** - Focuses on protecting applications, systems, and data against threats.
- **D. Restore lost data** - Describes recoverability, which focuses on restoring data and services following a failure.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Fault tolerance**|Continue operating despite component failures|
|**High availability**|Minimize service downtime|
|**Scalability**|Accommodate increasing workloads|
|**Elasticity**|Adjust resource capacity according to demand|
|**Recoverability**|Restore data and services after failures|

- **Built-in redundancy - Fault tolerance**
- **Continue operating despite component failures - Fault tolerance**
- **Restore lost data following a disaster - Recoverability**

**Key distinction:** Fault tolerance focuses on continued operation during a failure, whereas recoverability focuses on restoring operation after a failure.

## **52. Practice Question**

### **Question**

Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Select TWO.)

### **Choices**

A. Amazon CloudFront  
B. AWS Global Accelerator  
C. AWS KMS  
D. AWS Glue  
E. AWS Direct Connect

### **Answers**

**A. Amazon CloudFront**
**B. AWS Global Accelerator**

### **Why**

Both Amazon CloudFront and AWS Global Accelerator improve application performance and reduce latency for geographically distributed users.
- **Amazon CloudFront** - A global Content Delivery Network (CDN) that caches and delivers content from edge locations closer to end users.
- **AWS Global Accelerator** - Routes application traffic through the AWS global backbone network to optimal healthy application endpoints, improving network performance and availability.

Other options:
- **C. AWS Key Management Service (AWS KMS)** - Creates and manages cryptographic keys used to protect data.
- **D. AWS Glue** - A serverless data integration and ETL service for discovering, preparing, and transforming data.
- **E. AWS Direct Connect** - Provides dedicated private network connectivity between on-premises infrastructure and AWS rather than optimizing application traffic for global end users.

### **Exam Focus**

|Feature|Amazon CloudFront|AWS Global Accelerator|
|---|---|---|
|Primary purpose|Content delivery|Network traffic acceleration|
|Uses edge locations|Yes|Yes|
|Content caching|Yes|No|
|Reduces latency|Yes|Yes|
|Main use case|Deliver web content globally|Improve global application network performance|

- **Cache content closer to end users - Amazon CloudFront**
- **Global CDN - Amazon CloudFront**
- **Accelerate application traffic through the AWS global network - AWS Global Accelerator**
- **Dedicated private connectivity to AWS - AWS Direct Connect**

**Key distinction:** CloudFront accelerates content delivery through edge caching, whereas Global Accelerator optimizes network routing to application endpoints.

## **53. Practice Question**

### **Question**

Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Select TWO.)

### **Choices**

A. Closing an AWS account  
B. Changing AWS Support plans  
C. Generating access keys for IAM users  
D. Creating a new IAM policy  
E. Attaching a role to an Amazon EC2 instance

### **Answers**

**A. Closing an AWS account**
**B. Changing AWS Support plans**

### **Why**

The **AWS account root user** has full account ownership privileges and is required for certain sensitive account-level operations.

The practice question identifies closing an AWS account and changing AWS Support plans as root-level activities.

Other options:
- **C. Generating access keys for IAM users** - Can be performed by identities with appropriate IAM permissions.
- **D. Creating a new IAM policy** - Can be performed by authorized IAM administrators.
- **E. Attaching a role to an EC2 instance** - Can be performed by identities with the appropriate EC2 and IAM permissions.

### **Exam Focus**

|Task|Requires Root User|
|---|---|
|Close a standalone AWS account|Yes|
|Change root user password|Yes|
|Manage root user access keys|Yes|
|Change AWS Support plan|No, with appropriate IAM permissions|
|Create IAM policies|No|
|Generate IAM user access keys|No|
|Assign IAM roles to EC2|No|

- **Account ownership and root-specific tasks - Root user**
- **Daily administrative activities - Authorized IAM identities**
- **Protect the root user - Enable MFA**
- **Avoid using root credentials for routine tasks**

**Verified clarification:** Current AWS documentation confirms that authorized IAM identities can change AWS Support plans. Additionally, authorized administrators can close AWS Organizations member accounts without signing in as the member account's root user. Closing a standalone AWS account still requires root credentials.

## **54. Practice Question**

### **Question**

What does the Amazon CloudFront service provide? (Select TWO.)

### **Choices**

A. Stores archived data at very low costs  
B. Delivers content to end users with low latency  
C. Increases application availability by caching at the edge  
D. Tracks user activity and API usage  
E. Enables faster disaster recovery

### **Answers**

**B. Delivers content to end users with low latency**
**C. Increases application availability by caching at the edge**

### **Why**

**Amazon CloudFront** is a global Content Delivery Network (CDN) that caches and distributes content through edge locations worldwide.

It provides two important benefits:
- **Reduced latency** - Delivers content from locations closer to end users.
- **Improved availability** - Cached content reduces dependency on origin servers and helps reduce their workload.

Other options:
- **A. Low-cost archival storage** - Describes Amazon S3 Glacier storage classes rather than content delivery.
- **D. Track user activity and API usage** - Describes AWS CloudTrail, which records account activity for auditing.
- **E. Faster disaster recovery** - Associated with backup, replication, and disaster recovery architectures rather than the primary purpose of a CDN.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon CloudFront**|Global content delivery and edge caching|
|**Amazon S3 Glacier**|Low-cost archival storage|
|**AWS CloudTrail**|User activity and API auditing|
|**AWS Backup**|Centralized backup management|

- **Deliver content with low latency - Amazon CloudFront**
- **Cache content closer to end users - Edge locations**
- **Reduce workload on origin servers - Amazon CloudFront**
- **Improve content availability through caching - Amazon CloudFront**

## **55. Practice Question**

### **Question**

How does AWS MOST effectively reduce computing costs for a growing start-up company?

### **Choices**

A. It automates customer relationship management  
B. It provides on-demand resources for peak usage  
C. It implements a fixed monthly computing budget  
D. It automates the provisioning of individual developer environments

### **Answers**

**B. It provides on-demand resources for peak usage**

### **Why**

AWS provides **on-demand computing resources** that can be provisioned when needed and released when demand decreases.

Instead of purchasing physical infrastructure sized for maximum anticipated workloads, companies can dynamically adjust their resource capacity and pay for actual usage.

This reduces unnecessary upfront investments and the costs associated with idle resources.

Other options:
- **A. Automate customer relationship management** - Describes CRM software functionality rather than cloud infrastructure cost optimization.
- **C. Fixed monthly computing budget** - Helps manage spending but does not directly reduce computing costs.
- **D. Automate developer environments** - Improves developer productivity and deployment efficiency but is not the primary cost-saving mechanism in this scenario.

### **Exam Focus**

|Cloud Benefit|Exam Clue|
|---|---|
|**On-demand resources**|Provision resources only when needed|
|**Elasticity**|Adjust capacity according to demand|
|**Pay-as-you-go**|Pay for resource consumption|
|**Agility**|Quickly provision new resources|
|**Economies of scale**|Benefit from AWS's large-scale operations|

- **Avoid purchasing infrastructure for peak demand - On-demand resources**
- **Reduce idle resource costs - Elasticity**
- **Pay only for resources consumed - Pay-as-you-go**
- **Replace upfront infrastructure investment with variable expenses - Cloud adoption**

## **56. Practice Question**

### **Question**

Which of the following factors affect Amazon CloudFront cost? (Select TWO.)

### **Choices**

A. Storage Class  
B. Instance type  
C. Number of Requests  
D. Number of Volumes  
E. Traffic Distribution

### **Answers**

**C. Number of Requests**
**E. Traffic Distribution**

### **Why**

Under Amazon CloudFront's **pay-as-you-go pricing model**, charges are influenced by factors related to content delivery.

These include:
- **Number of requests** - The number of HTTP and HTTPS requests processed by CloudFront.
- **Traffic distribution** - The geographic locations from which CloudFront delivers content, as pricing varies between geographic areas.
- **Data transfer out** - The amount of data delivered to end users.

Other options:
- **A. Storage Class** - Affects Amazon S3 storage pricing rather than CloudFront content delivery pricing.
- **B. Instance type** - Affects Amazon EC2 compute pricing rather than CloudFront pricing.
- **D. Number of Volumes** - Relates to Amazon EBS storage resources rather than CDN usage.

### **Exam Focus**

|AWS Service|Common Pricing Factors|
|---|---|
|**Amazon CloudFront**|Requests, data transfer out, geographic traffic distribution|
|**Amazon EC2**|Instance type, usage duration, pricing model|
|**Amazon S3**|Storage class, storage capacity, requests, data retrieval|
|**Amazon EBS**|Provisioned storage capacity, volume type, IOPS and throughput where applicable|

- **Number of HTTP/HTTPS requests - CloudFront pricing factor**
- **Geographic distribution of content delivery - CloudFront pricing factor**
- **Data transferred to end users - CloudFront pricing factor**
- **Storage class - Amazon S3 pricing factor**
- **Instance type - Amazon EC2 pricing factor**

**Verified clarification:** AWS now also offers CloudFront flat-rate pricing plans alongside pay-as-you-go pricing. This question specifically tests the traditional usage-based pricing model.

## **57. Practice Question**

### **Question**

How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO.)

### **Choices**

A. It automatically corrects potential security issues caused by permissions settings on account resources  
B. It provides proactive alerting whenever an Amazon EC2 instance has been compromised  
C. It provides a list of cost optimization recommendations based on current AWS usage  
D. It detects potential security vulnerabilities caused by permissions settings on account resources  
E. It identifies software vulnerabilities in applications running on AWS

### **Answers**

**C. It provides a list of cost optimization recommendations based on current AWS usage**
**D. It detects potential security vulnerabilities caused by permissions settings on account resources**

### **Why**

**AWS Trusted Advisor** evaluates AWS environments against AWS best practices and provides recommendations for improving resource usage, security, and architecture.

Its capabilities include:
- **Cost optimization recommendations** - Identifies opportunities to reduce unnecessary AWS spending.
- **Security checks** - Identifies potentially insecure configurations and overly permissive resource settings.

Trusted Advisor provides recommendations and identifies concerns rather than automatically correcting them.

Other options:
- **A. Automatically correct security issues** - Trusted Advisor identifies issues and recommends remediation but does not automatically modify resources.
- **B. Alert when an EC2 instance is compromised** - Describes Amazon GuardDuty, which detects suspicious activity and potential security threats.
- **E. Identify software vulnerabilities** - Describes Amazon Inspector, which automatically assesses workloads for known software vulnerabilities.

### **Exam Focus**

|Security Service|Exam Clue|
|---|---|
|**AWS Trusted Advisor**|Best-practice checks and optimization recommendations|
|**Amazon GuardDuty**|Threat detection and suspicious activity|
|**Amazon Inspector**|Automated software vulnerability assessments|
|**AWS Config**|Resource configuration compliance|
|**AWS CloudTrail**|API activity auditing|

#### **AWS Trusted Advisor Check Categories**
- Cost optimization
- Performance
- Security
- Fault tolerance
- Service limits

#### **Important Distinctions**

- **Identify insecure configurations and recommend improvements - AWS Trusted Advisor**
- **Detect suspicious activity and compromised resources - Amazon GuardDuty**
- **Identify known software vulnerabilities - Amazon Inspector**
- **Analyze AWS spending patterns - AWS Cost Explorer**

**Exam trap:** Trusted Advisor provides guidance and recommendations. It is not an automated remediation or threat detection service.

## **58. Practice Question**

### **Question**

Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email and phone? (Select TWO.)

### **Choices**

A. Premium  
B. Enterprise  
C. Developer  
D. Business  
E. Standard

### **Answers**

**B. Enterprise**
**D. Business**

### **Why**

Under the AWS Support plan structure tested by this practice question, both **Business Support** and **Enterprise Support** provide 24/7 access to Cloud Support Engineers through phone, email, and chat.

Enterprise Support provides additional benefits, including a designated Technical Account Manager (TAM).

Other options:
- **A. Premium** - A general description of paid AWS Support offerings, not a specific support plan under the structure being tested.
- **C. Developer** - Provides technical support through email during business hours rather than 24/7 phone and chat access.
- **E. Standard** - Not an AWS Support plan name under the structure being tested.

### **Exam Focus**

#### **Traditional AWS Support Plans**

|Support Plan|Technical Support Access|Designated TAM|
|---|---|---|
|**Basic**|No technical support cases|No|
|**Developer**|Business-hours email|No|
|**Business**|24/7 phone, email, and chat|No|
|**Enterprise On-Ramp**|24/7 phone, email, and chat|Pool of TAMs|
|**Enterprise**|24/7 phone, email, and chat|Yes|

- **Business-hours email support - Developer Support**
- **24/7 technical support - Business Support and above**
- **Designated Technical Account Manager - Enterprise Support**

#### **Current AWS Support Plans**

AWS has introduced a revised support plan structure.

|Current Support Plan|Exam Clue|
|---|---|
|**Basic**|Account and billing support|
|**Business Support+**|24/7 technical support|
|**Enterprise Support**|Designated TAM and enhanced support|
|**AWS Unified Operations**|Advanced operational support|

**Verified clarification (November 2026):** Developer and Business Support stopped accepting new subscriptions on December 2, 2025. AWS will discontinue Developer, Business, and Enterprise On-Ramp on January 1, 2027, except in AWS GovCloud (US).

Business Support+ replaces the traditional Developer and Business plans. Remember the distinction between the legacy support plans tested by this question and the current AWS Support offerings.

## **59. Practice Question**

### **Question**

Which service provides a user the ability to warehouse data in the AWS Cloud?

### **Choices**

A. Amazon Redshift  
B. Amazon VPC  
C. Amazon EFS  
D. Amazon RDS

### **Answers**

**A. Amazon Redshift**

### **Why**

**Amazon Redshift** is a fully managed cloud data warehouse service designed for large-scale data analytics.

It allows organizations to store and analyze large datasets using SQL and perform complex analytical queries for business intelligence and reporting.

Other options:
- **B. Amazon VPC** - Provides logically isolated virtual networking environments rather than data warehousing.
- **C. Amazon Elastic File System (Amazon EFS)** - Provides scalable shared file storage for compute resources.
- **D. Amazon Relational Database Service (Amazon RDS)** - Provides managed relational databases primarily designed for transactional application workloads rather than large-scale data warehousing.

### **Exam Focus**

|Service|Main Purpose|Exam Clue|
|---|---|---|
|**Amazon Redshift**|Data warehousing|Large-scale analytics and business intelligence|
|**Amazon RDS**|Managed relational databases|Transactional application workloads|
|**Amazon Athena**|Serverless data querying|SQL queries directly against S3|
|**Amazon EFS**|Shared file storage|Scalable NFS file system|
|**Amazon VPC**|Networking|Isolated virtual network|

- **Cloud data warehouse - Amazon Redshift**
- **Large-scale analytical SQL queries - Amazon Redshift**
- **Business intelligence and reporting - Amazon Redshift**
- **Managed transactional relational database - Amazon RDS**
- **Query datasets directly from Amazon S3 - Amazon Athena**

**Key distinction:** Amazon Redshift is optimized for analytical workloads (OLAP), whereas Amazon RDS is commonly used for transactional workloads (OLTP).

## **60. Practice Question**

### **Question**

Which statement is true in relation to security in AWS?

### **Choices**

A. Server side encryption is the responsibility of AWS  
B. AWS manages everything related to EC2 operating systems  
C. AWS customers are responsible for patching any database software running on Amazon EC2  
D. AWS is responsible for the security of your application

### **Answers**

**C. AWS customers are responsible for patching any database software running on Amazon EC2**

### **Why**

Under the **AWS Shared Responsibility Model**, customers using Amazon EC2 are responsible for managing and securing software running inside their instances.

This includes:
- Guest operating system configuration.
- Operating system patching.
- Database software installation and patching.
- Application security.
- Installed software maintenance.

AWS manages the underlying physical infrastructure, including hardware, networking equipment, and the hypervisor.

Other options:
- **A. Server-side encryption is AWS's responsibility** - AWS provides and operates encryption capabilities, but customers remain responsible for ensuring that their encryption configurations and key management meet their security requirements.
- **B. AWS manages everything related to EC2 operating systems** - Customers manage and patch the guest operating system running on their EC2 instances.
- **D. AWS is responsible for application security** - Customers are responsible for securing their application code, permissions, configurations, and data.

### **Exam Focus**

#### **Amazon EC2 Shared Responsibilities**

|Security Activity|Responsibility|
|---|---|
|Physical data center security|**AWS**|
|Physical hardware maintenance|**AWS**|
|Hypervisor patching|**AWS**|
|Guest operating system configuration|**Customer**|
|Guest operating system patching|**Customer**|
|Database software patching|**Customer**|
|Application security|**Customer**|
|Security group configuration|**Customer**|
|Data protection requirements|**Customer**|

#### **Database on EC2 vs Amazon RDS**

|Responsibility|Database on EC2|Amazon RDS|
|---|---|---|
|Physical infrastructure|AWS|AWS|
|Operating system maintenance|Customer|AWS|
|Database software patching|Customer|AWS managed|
|Database backups|Customer managed|AWS automated, customer configured|
|Database schema|Customer|Customer|
|Application security|Customer|Customer|

- **Security OF the cloud - AWS**
- **Security IN the cloud - Customer**
- **Patch database software installed on EC2 - Customer responsibility**
- **Managed database software patching - Amazon RDS**
- **Secure application code and customer data - Customer responsibility**

**Key distinction:** The more infrastructure a customer manages, the greater their operational and security responsibilities. Managed services such as Amazon RDS transfer more routine maintenance responsibilities to AWS than self-managed databases running on Amazon EC2.

## **61. Practice Question**

### **Question**

Which of the following benefits does the AWS Compliance program provide to AWS customers? (Select TWO.)

### **Choices**

A. It will adopt new compliance frameworks as they become relevant to customer workloads  
B. AWS is responsible for the maintenance of common compliance framework documentation  
C. It assures customers that AWS is maintaining physical security and data protection  
D. It allows customers to inherit AWS compliance certifications and reduces the scope of their own compliance audits  
E. It ensures the use of compliance frameworks that are being used by other cloud providers

### **Answers**

**C. It assures customers that AWS is maintaining physical security and data protection**
**D. It allows customers to inherit AWS compliance certifications and reduces the scope of their own compliance audits**

### **Why**

The **AWS Compliance program** helps customers meet security, regulatory, and compliance requirements through independently audited infrastructure and security controls.

It provides two important benefits:
- **Security assurance** - Provides assurance that AWS maintains appropriate physical security and infrastructure-level data protection controls.
- **Inherited compliance controls** - Customers can leverage existing AWS certifications and third-party audit reports, reducing the scope, time, and cost of their own compliance audits.

Other options:
- **A. Automatically adopt new compliance frameworks** - AWS does not guarantee that it will adopt every new compliance framework relevant to customer workloads.
- **B. Maintain common compliance framework documentation** - Compliance is a shared responsibility. Customers remain responsible for documenting and demonstrating the compliance of their workloads.
- **E. Use frameworks adopted by other cloud providers** - AWS compliance programs are based on applicable regulatory requirements and industry standards, rather than the practices of competing cloud providers.

### **Exam Focus**

|AWS Responsibility|Customer Responsibility|
|---|---|
|Physical infrastructure compliance|Application compliance|
|Data center security controls|Customer data protection|
|Infrastructure audit reports|Workload-specific compliance documentation|
|Infrastructure-level certifications|Meeting applicable regulatory requirements|

- **Reduce the scope of customer compliance audits - AWS Compliance program**
- **Leverage existing AWS compliance controls - Inherited controls**
- **Access AWS compliance reports and documentation - AWS Artifact**
- **Ensure customer workloads meet regulatory requirements - Customer responsibility**

**Important distinction:** Customers can inherit applicable AWS compliance controls and leverage AWS certifications as evidence. This does not automatically make their applications compliant or certified.

## **62. Practice Question**

### **Question**

Why does every AWS Region contain multiple Availability Zones?

### **Choices**

A. Multiple Availability Zones within a Region increases the storage capacity available in that Region  
B. Multiple Availability Zones allows you to build resilient and highly available architectures  
C. Multiple Availability Zones allows for data replication and global reach  
D. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone

### **Answers**

**B. Multiple Availability Zones allows you to build resilient and highly available architectures**

### **Why**

Each AWS Region contains multiple **Availability Zones (AZs)** that are physically separated and designed with independent power, cooling, and networking infrastructure.

Deploying resources across multiple Availability Zones allows applications to continue operating if one Availability Zone experiences a failure, provided the application is designed appropriately.

This supports:
- High availability.
- Fault tolerance.
- Resilience.
- Redundancy.
- Data replication within a Region.

Other options:
- **A. Increased storage capacity** - Storage capacity depends on the selected AWS services and resource configurations, rather than simply the number of Availability Zones.
- **C. Data replication and global reach** - Multiple AZs support regional data replication, but global reach involves serving users across geographic locations through global infrastructure.
- **D. Lower total cost** - Multi-AZ deployments can increase costs because additional resources and data replication may be required.

### **Exam Focus**

|Architecture|Primary Benefit|
|---|---|
|**Single-AZ**|Simpler deployment with limited redundancy|
|**Multi-AZ**|Regional high availability and resilience|
|**Multi-Region**|Geographic redundancy and disaster recovery|
|**Edge locations**|Low-latency global content delivery|

- **Protect against Availability Zone failures - Multi-AZ deployment**
- **Build resilient and highly available applications - Multiple Availability Zones**
- **Protect against Region-level disasters - Multi-Region deployment**
- **Synchronous replication within a Region - Low-latency AZ connections**

**Exam trap:** Multiple Availability Zones provide regional redundancy, not global reach.

## **63. Practice Question**

### **Question**

Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?

### **Choices**

A. AWS Secrets Manager  
B. Amazon Cognito  
C. AWS Trusted Advisor  
D. Amazon Macie

### **Answers**

**C. AWS Trusted Advisor**

### **Why**

**AWS Trusted Advisor** evaluates AWS environments against AWS best practices and identifies potential security weaknesses caused by insecure account and resource configurations.

Examples of security checks include:
- Unrestricted security group access.
- Missing MFA on the root user.
- Publicly accessible S3 buckets.
- Potentially insecure resource permissions.

Trusted Advisor provides recommendations to help customers improve their security posture.

Other options:
- **A. AWS Secrets Manager** - Securely stores, retrieves, and rotates secrets such as database credentials and API keys. It does not assess account-wide security configurations.
- **B. Amazon Cognito** - Provides authentication, authorization, and user management for web and mobile applications.
- **D. Amazon Macie** - Uses machine learning to discover and classify sensitive data stored in Amazon S3, rather than evaluating general AWS account security configurations.

### **Exam Focus**

|Security Service|Exam Clue|
|---|---|
|**AWS Trusted Advisor**|Account security checks and best-practice recommendations|
|**Amazon Inspector**|Automated software vulnerability assessments|
|**Amazon GuardDuty**|Threat detection and suspicious activity|
|**Amazon Macie**|Sensitive data discovery in S3|
|**AWS Secrets Manager**|Store and rotate secrets|
|**Amazon Cognito**|Web and mobile user authentication|
|**Amazon Detective**|Security incident investigation|
|**AWS Shield**|DDoS protection|

- **Identify insecure AWS account configurations - AWS Trusted Advisor**
- **Identify known software vulnerabilities - Amazon Inspector**
- **Detect potentially compromised resources - Amazon GuardDuty**
- **Discover sensitive data in S3 - Amazon Macie**
- **Securely store and rotate database credentials - AWS Secrets Manager**

**Key distinction:** The word **vulnerability** alone does not necessarily indicate Amazon Inspector. Determine whether the question refers to account configurations, software vulnerabilities, or security threats.

## **64. Practice Question**

### **Question**

Which AWS service helps automate the lift-and-shift migration of servers from on-premises or other clouds to AWS?

### **Choices**

A. AWS Application Migration Service  
B. AWS Database Migration Service  
C. AWS Snow Family  
D. AWS Migration Hub

### **Answers**

**A. AWS Application Migration Service**

### **Why**

**AWS Application Migration Service (AWS MGN)** automates the **lift-and-shift (rehosting)** migration of servers and applications from on-premises environments or other cloud providers to AWS.

It supports:
- Continuous replication of source servers.
- Automated machine conversion.
- Launching migrated servers as AWS instances.
- Migration with minimal downtime.
- Migration without fundamentally redesigning applications.

Other options:
- **B. AWS Database Migration Service (AWS DMS)** - Migrates databases to AWS, supporting same-engine and cross-engine migrations rather than entire server migrations.
- **C. AWS Snow Family** - Provides physical devices for transferring large volumes of data when network connectivity or bandwidth is limited.
- **D. AWS Migration Hub** - Provides centralized visibility and tracking of migration progress across multiple migration tools, rather than performing server migrations directly.

### **Exam Focus**

|Migration Service|Main Purpose|Exam Clue|
|---|---|---|
|**AWS Application Migration Service (MGN)**|Server and application migration|Automated lift-and-shift|
|**AWS Database Migration Service (DMS)**|Database migration|Minimal downtime database replication|
|**AWS Schema Conversion Tool (SCT)**|Database schema conversion|Different database engines|
|**AWS Snow Family**|Physical data transfer|Large datasets and limited bandwidth|
|**AWS DataSync**|Online data transfer|Transfer and synchronize storage data|
|**AWS Migration Hub**|Migration tracking|Centralized migration visibility|

- **Automate lift-and-shift server migration - AWS MGN**
- **Migrate databases with minimal downtime - AWS DMS**
- **Transfer large datasets using physical devices - AWS Snow Family**
- **Track migration progress across multiple tools - AWS Migration Hub**
- **Migrate an application without redesigning it - Rehosting**

**Key distinction:** AWS MGN migrates servers and applications, AWS DMS migrates databases, and AWS Migration Hub tracks migration activities.

## **65. Practice Question**

### **Question**

Which of the following is used to control network traffic in AWS? (Select TWO.)

### **Choices**

A. Access Keys  
B. Key Pairs  
C. Network Access Control Lists (NACLs)  
D. Security Groups  
E. IAM Policies

### **Answers**

**C. Network Access Control Lists (NACLs)**
**D. Security Groups**

### **Why**

Both Network ACLs and security groups are network security features within Amazon VPC that control inbound and outbound network traffic.
- **Network Access Control Lists (NACLs)** - Stateless virtual firewalls that operate at the subnet level. They support explicit allow and deny rules and evaluate rules in numerical order.
- **Security Groups** - Stateful virtual firewalls that operate at the resource level, such as EC2 instances. They support allow rules, and response traffic for permitted connections is automatically allowed.

Other options:
- **A. Access Keys** - Authenticate programmatic requests to AWS services through the AWS CLI, SDKs, and APIs.
- **B. Key Pairs** - Public and private keys used to authenticate access to EC2 instances, rather than controlling network traffic.
- **E. IAM Policies** - Define permissions for identities to perform actions on AWS resources. They control authorization rather than IP-level network traffic.

### **Exam Focus**

#### **Security Groups vs Network ACLs**

|Feature|Security Groups|Network ACLs|
|---|---|---|
|Protection level|Resource or instance level|Subnet level|
|Connection tracking|**Stateful**|**Stateless**|
|Supported rules|Allow only|Allow and deny|
|Rule evaluation|Evaluate all rules|Numerical order|
|Return traffic|Automatically allowed for permitted connections|Must be explicitly allowed|
|Primary purpose|Protect individual resources|Protect network subnets|

#### **Network Security vs Identity and Access Management**

|Feature|Main Purpose|
|---|---|
|**Security Groups**|Resource-level network traffic control|
|**Network ACLs**|Subnet-level network traffic control|
|**AWS WAF**|Filter HTTP/HTTPS web requests|
|**IAM Policies**|Authorize actions on AWS resources|
|**Access Keys**|Authenticate programmatic AWS access|
|**Key Pairs**|Authenticate EC2 instance access|

- **Stateful resource-level firewall - Security Groups**
- **Stateless subnet-level firewall - Network ACLs**
- **Explicit allow and deny network traffic rules - Network ACLs**
- **Automatically allow response traffic - Security Groups**
- **Control AWS service and resource permissions - IAM Policies**
- **Authenticate AWS API requests - Access Keys**

**Key distinction:** Security groups and Network ACLs control which network traffic can reach resources, whereas IAM policies control which actions an identity is authorized to perform.