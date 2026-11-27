## **1. AWS Support Plans – Infrastructure Event Management**

### **Question**

Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?

### **Choices**

A. Business  
B. Basic  
C. Developer  
D. Enterprise

### **Answers**

**D. Enterprise**

### **Why**

**AWS Enterprise Support** includes Infrastructure Event Management (IEM) at no additional cost under the support plan structure tested in this question.

IEM provides architectural guidance and operational support during planned events, such as product launches and anticipated traffic spikes.

|Support Plan|Why Applicable / Not Applicable|
|---|---|
|**Business**|Provides access to IEM at an additional cost.|
|**Basic**|Provides documentation and limited Trusted Advisor checks. Does not include IEM.|
|**Developer**|Provides business-hours technical support. Does not include IEM.|
|**Enterprise**|Includes IEM at no additional cost under the support plan structure tested.|

### **Exam Focus**

- **Infrastructure Event Management at no additional cost - Enterprise Support**
- **Infrastructure Event Management at additional cost - Business Support**
- **Product launches and planned traffic spikes - Infrastructure Event Management**

## **2. Amazon EC2 Performance Monitoring**

### **Question**

A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?

### **Choices**

A. Amazon Simple Notification Service (Amazon SNS)  
B. AWS Cost and Usage Report  
C. Amazon CloudWatch  
D. AWS CloudTrail

### **Answers**

**C. Amazon CloudWatch**

### **Why**

**Amazon CloudWatch** collects and monitors resource performance metrics, including EC2 CPU utilization. It provides dashboards, alarms, and automated actions based on defined thresholds.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon SNS**|Sends notifications and messages. Can receive CloudWatch alarm notifications but does not collect performance metrics.|
|**AWS Cost and Usage Report**|Provides detailed billing and cost data, not resource performance metrics.|
|**Amazon CloudWatch**|Collects and monitors resource utilization and performance metrics.|
|**AWS CloudTrail**|Records API calls and account activity for auditing and governance.|

### **Exam Focus**

- **CPU utilization and resource performance - Amazon CloudWatch**
- **Metrics, dashboards, logs and alarms - Amazon CloudWatch**
- **Send notifications - Amazon SNS**
- **Audit API activity - AWS CloudTrail**
- **Detailed billing and usage data - AWS Cost and Usage Report**

## **3. Agility in the AWS Cloud**

### **Question**

What is an example of agility in the AWS Cloud?

### **Choices**

A. Access to multiple instance types  
B. Access to managed services  
C. Using Consolidated Billing to produce one bill  
D. Decreased acquisition time for new compute resources

### **Answers**

**D. Decreased acquisition time for new compute resources**

### **Why**

**Agility** refers to the ability to quickly acquire and provision resources, develop applications, experiment, and respond to changing business requirements.

AWS reduces resource provisioning time from weeks or months to minutes.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**Access to multiple instance types**|Represents flexibility in selecting resources that match workload requirements.|
|**Access to managed services**|Primarily reduces operational complexity and management overhead.|
|**Consolidated Billing**|Simplifies billing across multiple AWS accounts.|
|**Decreased acquisition time**|Directly demonstrates agility through faster resource provisioning.|

### **Exam Focus**

- **Rapid resource provisioning - Agility**
- **Faster experimentation and innovation - Agility**
- **Multiple resource options - Flexibility**
- **Reduced operational overhead - Managed services**
- **Single bill across multiple AWS accounts - Consolidated Billing**

## **4. VPC Network Traffic Monitoring**

### **Question**

Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?

### **Choices**

A. AWS CloudTrail  
B. AWS Config  
C. AWS Trusted Advisor  
D. VPC Flow Logs

### **Answers**

**D. VPC Flow Logs**

### **Why**

**VPC Flow Logs** capture information about IP traffic flowing to and from network interfaces within an Amazon VPC.

Captured information includes:
- Source and destination IP addresses
- Source and destination ports
- Network protocols
- Accepted or rejected traffic

VPC Flow Logs capture **network traffic metadata**, not the actual contents of network packets.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS CloudTrail**|Records API calls and account activity, not network traffic flows.|
|**AWS Config**|Records resource configurations and evaluates compliance with configuration rules.|
|**AWS Trusted Advisor**|Provides recommendations based on AWS best practices rather than recording network traffic.|
|**VPC Flow Logs**|Captures incoming and outgoing IP traffic information within a VPC.|

### **Exam Focus**

- **Incoming and outgoing VPC traffic - VPC Flow Logs**
- **Accepted and rejected network traffic - VPC Flow Logs**
- **API calls and account activity - AWS CloudTrail**
- **Resource configuration and compliance - AWS Config**
- **AWS best practice recommendations - AWS Trusted Advisor**

## **5. Encryption Key Management**

### **Question**

Which AWS service or feature is used to manage the keys used to encrypt customer data?

### **Choices**

A. Amazon Macie  
B. AWS KMS  
C. AWS Service Control Policies (SCPs)  
D. Multi-Factor Authentication (MFA)

### **Answers**

**B. AWS Key Management Service (AWS KMS)**

### **Why**

**AWS Key Management Service (AWS KMS)** enables customers to create, manage, and control cryptographic keys used to encrypt data across AWS services.

It provides centralized encryption key management and supports auditing of key usage through AWS CloudTrail.

|Service / Feature|Why Applicable / Not Applicable|
|---|---|
|**Amazon Macie**|Discovers and identifies sensitive data stored in Amazon S3. Does not manage encryption keys.|
|**AWS KMS**|Creates, manages, and controls cryptographic keys.|
|**Service Control Policies (SCPs)**|Define the maximum available permissions for accounts within AWS Organizations.|
|**Multi-Factor Authentication (MFA)**|Adds an additional authentication factor to improve account security.|

### **Exam Focus**

- **Create and manage encryption keys - AWS KMS**
- **Discover sensitive data in Amazon S3 - Amazon Macie**
- **Restrict maximum account permissions - SCPs**
- **Additional authentication factor - MFA**
- **Audit encryption key usage - AWS CloudTrail**

## **6. AWS Cloud Adoption Framework (AWS CAF)**

### **Question**

Which transformation domains are defined by the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO)

### **Choices**

A. Process  
B. Compliance  
C. Security  
D. Product  
E. Infrastructure

### **Answers**

**A. Process**
**D. Product**

### **Why**

The **AWS Cloud Adoption Framework (AWS CAF)** defines four transformation domains.

|Transformation Domain|Purpose|
|---|---|
|**Technology**|Modernize technology and infrastructure using cloud capabilities.|
|**Process**|Digitize, automate, and optimize business operations.|
|**Organization**|Transform organizational structures and ways of working.|
|**Product**|Reimagine business models and products using cloud capabilities.|

Why the other choices are not applicable:

- **Compliance** - An area addressed by the Governance perspective, not a transformation domain.
- **Security** - One of the six AWS CAF perspectives, not a transformation domain.
- **Infrastructure** - Related to the Technology transformation domain and Platform perspective, but not a transformation domain itself.

The six AWS CAF perspectives are:

|Business-Focused Perspectives|Technical Perspectives|
|---|---|
|Business|Platform|
|People|Security|
|Governance|Operations|

### **Exam Focus**

**Four AWS CAF transformation domains:**
- Technology
- Process
- Organization
- Product

**Six AWS CAF perspectives:**

- Business, People, Governance
- Platform, Security, Operations

**Memory aid:**

- Transformation domains - **TPOP**
- CAF perspectives - **BPG, PSO**
- **Security is a perspective, not a transformation domain.**

## **7. AWS Shared Responsibility Model**

### **Question**

Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS?

### **Choices**

A. Hardware maintenance  
B. Installing software on EC2 instances  
C. Creating hypervisors  
D. Configuring Access Control Lists (ACLs)  
E. Monitoring network performance

### **Answers**

**A. Hardware maintenance**
**C. Creating hypervisors**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS is responsible for **security of the cloud**, including the underlying physical infrastructure and virtualization layer.

Customers do not manage the physical hardware or hypervisors powering AWS services.

|Responsibility|Responsible Party|Reason|
|---|---|---|
|Hardware maintenance|**AWS**|AWS owns and maintains physical infrastructure.|
|Installing software on EC2|**Customer**|Customers manage applications and software installed on EC2 instances.|
|Creating hypervisors|**AWS**|AWS manages the underlying virtualization layer.|
|Configuring ACLs|**Customer**|Customers define network access rules within their VPCs.|
|Monitoring workload network performance|**Customer**|Customers monitor and respond to performance issues within their workloads.|

### **Exam Focus**

**AWS - Security of the cloud**

- Physical hardware
- Physical networking infrastructure
- Virtualization layer and hypervisors
- Data center facilities

**Customer - Security in the cloud (EC2)**

- Guest operating system
- Application installation and management
- Network ACL and security group configuration
- Workload performance monitoring

**Key distinction:** AWS manages the underlying infrastructure, while customers manage their resources and configurations running on that infrastructure.

## **8. AWS Data Protection Features**

### **Question**

What features does AWS offer to help protect your data in the Cloud?

### **Choices**

A. Physical MFA devices  
B. Data encryption  
C. Load balancing  
D. Access control  
E. Unlimited storage

### **Answers**

**B. Data encryption**
**D. Access control**

### **Why**

**Data encryption** and **access control** are fundamental mechanisms for protecting customer data against unauthorized access and exposure.

- **Data encryption** - Protects data at rest and in transit.
- **Access control** - Restricts who or what can access data through IAM policies, security groups, and network ACLs.

|Feature|Why Applicable / Not Applicable|
|---|---|
|**Physical MFA devices**|Strengthen authentication and indirectly protect data by securing account access, but are not the direct data protection mechanism being tested.|
|**Data encryption**|Protects data confidentiality through encryption.|
|**Load balancing**|Distributes traffic to improve application availability and performance.|
|**Access control**|Restricts unauthorized access to data and resources.|
|**Unlimited storage**|Represents storage scalability rather than data security.|

### **Exam Focus**

- **Protect stored data - Encryption at rest**
- **Protect transmitted data - Encryption in transit**
- **Restrict access to data and resources - Access control**
- **Strengthen user authentication - MFA**
- **Distribute traffic and improve availability - Load balancing**

## **9. AWS Database Migration Service (AWS DMS)**

### **Question**

A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?

### **Choices**

A. AWS OpsWorks  
B. AWS Application Discovery Service  
C. AWS Server Migration Service  
D. AWS Database Migration Service

### **Answers**

**D. AWS Database Migration Service (AWS DMS)**

### **Why**

**AWS Database Migration Service (AWS DMS)** is designed to migrate databases to AWS with **minimal downtime**.

The source database can remain operational throughout the migration process, minimizing disruption to existing applications.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS OpsWorks**|A legacy configuration management service used to automate server configuration with Chef and Puppet.|
|**AWS Application Discovery Service**|Collects information about on-premises servers and dependencies for migration planning. Does not perform the migration itself.|
|**AWS Server Migration Service**|Designed for migrating on-premises virtual machines rather than databases.|
|**AWS DMS**|Migrates databases while allowing the source database to remain operational.|

### **Exam Focus**

- **Database migration - AWS DMS**
- **Database migration with minimal downtime - AWS DMS**
- **Keep source database operational during migration - AWS DMS**
- **Discover on-premises servers and dependencies - AWS Application Discovery Service**
- **Server configuration management - AWS OpsWorks**

## **10. AWS X-Ray**

### **Question**

A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS service should be used to troubleshoot these issues?

### **Choices**

A. AWS CloudTrail  
B. AWS CodePipeline  
C. AWS X-Ray  
D. Amazon Inspector

### **Answers**

**C. AWS X-Ray**

### **Why**

**AWS X-Ray** provides distributed tracing for applications, particularly those using a microservices architecture.

It enables developers to:
- Trace requests across multiple application components.
- Visualize end-to-end request paths.
- Identify performance bottlenecks.
- Troubleshoot latency issues.
- Diagnose the root cause of application performance problems.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS CloudTrail**|Records API calls and account activity for auditing and compliance.|
|**AWS CodePipeline**|Automates application build, test, and deployment workflows through CI/CD pipelines.|
|**AWS X-Ray**|Traces application requests and identifies performance bottlenecks and latency issues.|
|**Amazon Inspector**|Automatically scans workloads for software vulnerabilities and unintended network exposure.|

### **Exam Focus**

- **Distributed application tracing - AWS X-Ray**
- **Microservices latency troubleshooting - AWS X-Ray**
- **Trace end-to-end application requests - AWS X-Ray**
- **Resource performance metrics - Amazon CloudWatch**
- **API activity auditing - AWS CloudTrail**
- **CI/CD pipeline automation - AWS CodePipeline**
- **Automated vulnerability assessment - Amazon Inspector**

## **11. Amazon EC2 Characteristics**

### **Question**

Which of the following is **NOT** a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?

### **Choices**

A. Amazon EC2 can launch as many or as few virtual servers as needed  
B. Amazon EC2 is considered a Serverless Web Service  
C. Amazon EC2 offers scalable computing  
D. Amazon EC2 eliminates the need to invest in hardware upfront

### **Answers**

**B. Amazon EC2 is considered a Serverless Web Service**

### **Why**

**Amazon Elastic Compute Cloud (Amazon EC2)** provides virtual servers in the AWS Cloud. Customers are responsible for managing the guest operating system, installed software, and applications.

Amazon EC2 is a **server-based compute service**, not a serverless compute service.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Launch as many or as few virtual servers as needed|A characteristic of EC2. Customers can adjust compute capacity based on requirements.|
|Serverless Web Service|Not a characteristic of EC2. Customers must manage their virtual servers.|
|Scalable computing|A characteristic of EC2. Compute capacity can increase or decrease based on workload demands.|
|Eliminates upfront hardware investment|A characteristic of EC2. Customers do not need to purchase physical servers.|

### **Exam Focus**

- **Virtual servers in the cloud - Amazon EC2**
- **Serverless compute - AWS Lambda**
- **Scalable compute capacity - Amazon EC2**
- **Avoid upfront physical hardware investment - Cloud computing**
- **EC2 customers manage the guest operating system and applications.**

## **12. High Availability**

### **Question**

A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?

### **Choices**

A. Elasticity  
B. Scalability  
C. Agility  
D. High Availability

### **Answers**

**D. High Availability**

### **Why**

**High availability** ensures that applications remain accessible even when individual components fail.

This is achieved through **redundancy** and **automatic failover mechanisms**, minimizing application downtime.

|Concept|Why Applicable / Not Applicable|
|---|---|
|**Elasticity**|Dynamically increases or decreases resources based on demand. Focuses on capacity management.|
|**Scalability**|Allows a system to accommodate increased workloads by adding resources.|
|**Agility**|Enables rapid resource provisioning, experimentation, and development.|
|**High Availability**|Maintains application availability despite component failures through redundancy and failover.|

### **Exam Focus**

- **Minimize downtime during component failures - High availability**
- **Automatically adjust capacity based on demand - Elasticity**
- **Accommodate increased workloads - Scalability**
- **Rapid resource provisioning - Agility**

**Important distinction:**

- **High availability** - Minimizes downtime and maintains accessibility.
- **Fault tolerance** - Enables continued operation despite component failures.

## **13. Amazon Rekognition**

### **Question**

A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS service should the company use for facial recognition?

### **Choices**

A. Amazon Textract  
B. Amazon Rekognition  
C. Amazon Polly  
D. Amazon Comprehend

### **Answers**

**B. Amazon Rekognition**

### **Why**

**Amazon Rekognition** uses deep learning to analyze images and videos.

Its capabilities include:
- Facial recognition
- Object detection
- Scene analysis
- Automated photo tagging

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon Textract**|Extracts printed text, handwriting, and structured data from documents. Does not perform facial recognition.|
|**Amazon Rekognition**|Analyzes images and videos, including facial recognition and object detection.|
|**Amazon Polly**|Converts written text into natural-sounding speech.|
|**Amazon Comprehend**|Uses natural language processing (NLP) to analyze and extract meaning from text.|

### **Exam Focus**

- **Facial recognition and photo tagging - Amazon Rekognition**
- **Image and video analysis - Amazon Rekognition**
- **Extract text and handwriting from documents - Amazon Textract**
- **Text-to-speech - Amazon Polly**
- **Natural language processing and text analysis - Amazon Comprehend**

## **14. Amazon Simple Queue Service (Amazon SQS)**

### **Question**

Which AWS service can be used to store and reliably deliver messages across distributed systems?

### **Choices**

A. AWS Storage Gateway  
B. Amazon Simple Email Service  
C. Amazon Simple Queue Service  
D. Amazon Simple Storage Service

### **Answers**

**C. Amazon Simple Queue Service (Amazon SQS)**

### **Why**

**Amazon Simple Queue Service (Amazon SQS)** is a fully managed message queuing service that enables reliable communication between distributed application components.

Messages are stored in a queue until they are processed, allowing components to operate independently even when another component is temporarily unavailable.

This helps **decouple application components** and improve application resilience.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS Storage Gateway**|Connects on-premises environments to AWS cloud storage for hybrid storage use cases.|
|**Amazon SES**|Provides email sending and receiving capabilities, such as transactional and marketing emails.|
|**Amazon SQS**|Stores messages in queues for reliable delivery and processing across distributed systems.|
|**Amazon S3**|Provides object storage for files and other data, not message queuing.|

### **Exam Focus**

- **Message queuing - Amazon SQS**
- **Reliable messaging between distributed systems - Amazon SQS**
- **Decouple application components - Amazon SQS**
- **Hybrid cloud storage - AWS Storage Gateway**
- **Send and receive emails - Amazon SES**
- **Object storage - Amazon S3**

## **15. Principle of Least Privilege**

### **Question**

Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:

### **Choices**

A. Least privilege access  
B. As-needed access  
C. Token access  
D. Restricted access

### **Answers**

**A. Least privilege access**

### **Why**

The **principle of least privilege** involves granting users, roles, and applications only the minimum permissions necessary to perform their required tasks.

This reduces security risks associated with excessive permissions, accidental misuse, and unauthorized access to AWS resources.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**Least privilege access**|Grants only the minimum permissions necessary to perform a specific task.|
|**As-needed access**|An informal description of access requirements, not the established security principle being tested.|
|**Token access**|Refers to authentication using security tokens, rather than limiting permissions.|
|**Restricted access**|A general description of limited access that does not specifically define minimum required permissions.|

### **Exam Focus**

- **Grant only the minimum required permissions - Least privilege**
- **Manage identities and permissions - AWS IAM**
- **Avoid unnecessary permissions - Least privilege**
- **Temporary security credentials - Security tokens**

**Exam keywords:** Minimum permissions, necessary permissions, only required resources, perform a specific task.

## **16. AWS Migration Strategies – Rehost**

### **Question**

A company wants to move its on-premises application to AWS as quickly as possible with minimal changes to the existing code. Which migration strategy does this describe?

### **Choices**

A. Refactor  
B. Rehost  
C. Repurchase  
D. Replatform

### **Answers**

**B. Rehost**

### **Why**

**Rehosting**, also known as **lift and shift**, involves moving an existing application to the cloud without significant changes to its application code or architecture.

It is generally one of the fastest migration strategies because it requires minimal development effort.

|Migration Strategy|Why Applicable / Not Applicable|
|---|---|
|**Refactor**|Redesigns the application to take advantage of cloud-native capabilities, requiring significant code or architectural changes.|
|**Rehost**|Migrates an existing application with minimal or no changes to its code and architecture.|
|**Repurchase**|Replaces an existing application with another product, typically a SaaS solution.|
|**Replatform**|Makes targeted cloud optimizations during migration without fundamentally redesigning the application.|

### **Exam Focus**

- **Lift and shift - Rehost**
- **Fast migration with minimal code changes - Rehost**
- **Lift, tinker and shift - Replatform**
- **Redesign applications using cloud-native capabilities - Refactor**
- **Replace existing software with a SaaS solution - Repurchase**

## **17. Amazon EC2 Auto Scaling and High Availability**

### **Question**

How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?

### **Choices**

A. They are able to distribute incoming requests across a tier of web server instances  
B. They enable the application's static content to reside closer to end users  
C. They automatically add more instances across multiple AWS Regions based on global demand of the application  
D. They automatically add or replace instances across multiple Availability Zones when the application needs it

### **Answers**

**D. They automatically add or replace instances across multiple Availability Zones when the application needs it**

### **Why**

**Amazon EC2 Auto Scaling** automatically adjusts the number of EC2 instances based on application requirements and replaces unhealthy instances to maintain the desired capacity.

An Auto Scaling group can span multiple **Availability Zones (AZs)** within a single AWS Region, improving high availability and resilience against component failures.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Distribute incoming requests|Describes **Elastic Load Balancing (ELB)**, which distributes traffic across multiple targets.|
|Store static content closer to users|Describes **Amazon CloudFront**, a content delivery network (CDN).|
|Add instances across multiple Regions|Auto Scaling groups operate within a single AWS Region, not across multiple Regions.|
|Add or replace instances across multiple AZs|Describes Amazon EC2 Auto Scaling, which maintains capacity and replaces unhealthy instances.|

### **Exam Focus**

- **Automatically add or remove EC2 instances - Amazon EC2 Auto Scaling**
- **Automatically replace unhealthy instances - Amazon EC2 Auto Scaling**
- **Distribute incoming application traffic - Elastic Load Balancing**
- **Deliver cached content closer to users - Amazon CloudFront**
- **Multiple Availability Zones - High availability**

**Important distinction:** An EC2 Auto Scaling group can span multiple Availability Zones but cannot span multiple AWS Regions.

## **18. AWS Access Keys**

### **Question**

Which of the following is equivalent to a username and password and is used to authenticate your programmatic access to AWS services and APIs?

### **Choices**

A. Access Keys  
B. Instance Password  
C. Key pairs  
D. MFA

### **Answers**

**A. Access Keys**

### **Why**

**AWS access keys** are credentials used to authenticate programmatic requests to AWS services and APIs through tools such as the AWS CLI and AWS SDKs.

An access key consists of two components:

|Component|Purpose|
|---|---|
|**Access key ID**|Identifies the access key, similar to a username.|
|**Secret access key**|Authenticates requests, similar to a password.|

Why the other choices are not applicable:

|Credential / Feature|Purpose|
|---|---|
|**Instance Password**|Used to authenticate access to an EC2 instance, such as Windows administrator access through RDP.|
|**Key pairs**|Public and private key combinations used to authenticate access to EC2 instances, such as SSH access to Linux instances.|
|**Multi-Factor Authentication (MFA)**|Provides an additional authentication factor rather than a standalone credential pair for programmatic access.|

### **Exam Focus**

- **Programmatic access to AWS services and APIs - Access keys**
- **AWS CLI and AWS SDK authentication - Access keys**
- **Access key ID + Secret access key - Access key credentials**
- **SSH access to Linux EC2 instances - Key pairs**
- **RDP access to Windows EC2 instances - Instance password**
- **Additional authentication factor - MFA**

## **19. AWS Billing Support**

### **Question**

A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage Report in the AWS Management Console. Which action can be taken to resolve this?

### **Choices**

A. Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information  
B. Open a detailed case related to billing and submit it to AWS Support for help  
C. Upload data describing the issue to a new object in a private Amazon S3 bucket  
D. Proceed with creating a new dashboard in Amazon QuickSight

### **Answers**

**B. Open a detailed case related to billing and submit it to AWS Support for help**

### **Why**

**AWS Support** helps customers investigate and resolve account and billing issues.

Submitting a billing support case allows AWS to investigate specific charges, clarify billing discrepancies, and apply corrections where appropriate.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Deploy a pricing application on EC2|Introduces unnecessary complexity and additional costs without directly resolving the billing issue.|
|Open a billing support case|Provides the appropriate support channel for investigating and resolving billing issues.|
|Upload issue details to Amazon S3|Stores information but does not notify AWS Support or initiate an investigation.|
|Create an Amazon QuickSight dashboard|Visualizes and analyzes billing data but does not resolve billing discrepancies.|

### **Exam Focus**

- **Resolve billing issues and discrepancies - AWS Support**
- **Detailed billing and usage information - AWS Cost and Usage Report**
- **Business intelligence and data visualization - Amazon QuickSight**
- **Store files and objects - Amazon S3**

**Key distinction:** Billing and analytics tools help identify cost-related issues, while AWS Support helps investigate and resolve billing disputes.

## **20. Fault Tolerance**

### **Question**

Fault tolerance refers to:

### **Choices**

A. How secure your application is  
B. How well and how quickly an application's environment can have lost data restored  
C. The ability of an application to accommodate growth without changing design  
D. The built-in redundancy of an application's components

### **Answers**

**D. The built-in redundancy of an application's components**

### **Why**

**Fault tolerance** is the ability of a system to continue operating correctly even when one or more of its components fail.

It relies on **built-in redundancy** to prevent individual component failures from interrupting system operations.

|Choice|Why Applicable / Not Applicable|
|---|---|
|How secure your application is|Describes the security posture of an application, not its ability to withstand failures.|
|How quickly lost data can be restored|Describes **recoverability**, which focuses on restoring data and systems after a failure.|
|Accommodate growth without changing design|Describes **scalability**, which focuses on handling increased workloads.|
|Built-in redundancy of application components|Describes **fault tolerance**, which enables continued operation despite component failures.|

#### **Comparison of Cloud Architecture Concepts**

|Concept|Main Purpose|Exam Keywords|
|---|---|---|
|**Fault tolerance**|Continue operating despite component failures|Redundancy, uninterrupted operation|
|**High availability**|Maintain accessibility and minimize downtime|Failover, availability|
|**Recoverability**|Restore data and systems after a failure|Backup, restoration, disaster recovery|
|**Scalability**|Accommodate increased workloads|Growth, increased capacity|
|**Elasticity**|Dynamically adjust resources based on demand|Scale up and down, fluctuating demand|
|**Agility**|Quickly provision resources and respond to changes|Speed, experimentation, innovation|

### **Exam Focus**

- **Built-in component redundancy - Fault tolerance**
- **Continued operation despite component failures - Fault tolerance**
- **Minimize application downtime - High availability**
- **Restore lost data and systems - Recoverability**
- **Accommodate workload growth - Scalability**
- **Dynamically match capacity to demand - Elasticity**
- **Rapid resource provisioning - Agility**

**Important distinction:**

- **Fault tolerance** - Continue operating during a failure.
- **High availability** - Minimize downtime caused by a failure.
- **Recoverability** - Restore operations or data after a failure.

## **21. AWS Security Bulletins**

### **Question**

How does AWS notify customers about security and privacy events pertaining to AWS services?

### **Choices**

A. Using Security Bulletins  
B. Using Compliance Resources  
C. Using the AWS Management Console  
D. Using the AWS ACM service

### **Answers**

**A. Using Security Bulletins**

### **Why**

**AWS Security Bulletins** notify customers about security and privacy events affecting AWS services, providing information about vulnerabilities and recommended actions.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**Security Bulletins**|Communicate security vulnerabilities, privacy events, and recommended actions to customers.|
|**Compliance Resources**|Provide compliance documentation, audit reports, and regulatory guidance rather than security event notifications.|
|**AWS Management Console**|Provides a web-based interface for accessing and managing AWS resources. It is not the primary channel for publishing security bulletins.|
|**AWS Certificate Manager (ACM)**|Provisions and manages SSL/TLS certificates rather than communicating security events.|

### **Exam Focus**

- **Security and privacy event notifications - AWS Security Bulletins**
- **Regulatory and compliance information - AWS Compliance Resources**
- **Manage AWS resources through a web interface - AWS Management Console**
- **Provision and manage SSL/TLS certificates - AWS Certificate Manager**

## **22. AWS Budgets**

### **Question**

Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?

### **Choices**

A. Cost Explorer  
B. AWS Budgets  
C. AWS CloudTrail  
D. AWS Cost and Usage Report

### **Answers**

**B. AWS Budgets**

### **Why**

**AWS Budgets** allows customers to define spending thresholds and receive notifications when **actual or forecasted costs** exceed those thresholds.

Notifications can be sent through email or Amazon SNS, allowing customers to manage spending proactively.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS Cost Explorer**|Visualizes historical spending and forecasts future costs. Primarily used for cost analysis rather than budget threshold alerts.|
|**AWS Budgets**|Creates customized budgets and sends alerts when actual or forecasted spending exceeds defined thresholds.|
|**AWS CloudTrail**|Records API calls and account activity for auditing and compliance, not cost monitoring.|
|**AWS Cost and Usage Report**|Provides granular billing and usage information rather than budget threshold notifications.|

### **Exam Focus**

- **Actual or forecasted cost threshold alerts - AWS Budgets**
- **Set spending limits and receive notifications - AWS Budgets**
- **Visualize spending trends and forecast costs - AWS Cost Explorer**
- **Granular billing and usage data - AWS Cost and Usage Report**
- **Audit API activity - AWS CloudTrail**

## **23. AWS AppSync**

### **Question**

A development team is building a collaborative mobile application where multiple users need to see real-time updates to shared data. The team wants to use GraphQL and have the backend automatically push data changes to all connected clients. Which AWS service provides managed GraphQL APIs with built-in real-time data synchronisation?

### **Choices**

A. Amazon Kinesis  
B. Amazon API Gateway  
C. AWS Amplify  
D. AWS AppSync

### **Answers**

**D. AWS AppSync**

### **Why**

**AWS AppSync** is a fully managed service for building GraphQL APIs for web and mobile applications.

It supports **GraphQL subscriptions**, enabling real-time data updates to connected clients subscribed to relevant changes.

This makes it suitable for collaborative applications that require shared data synchronization and live updates.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon Kinesis**|Ingests and processes real-time streaming data for data pipelines and analytics rather than providing managed GraphQL APIs.|
|**Amazon API Gateway**|Creates and manages REST, HTTP, and WebSocket APIs but does not natively provide managed GraphQL capabilities.|
|**AWS Amplify**|Provides full-stack application development tools and libraries that can integrate with AppSync APIs.|
|**AWS AppSync**|Provides managed GraphQL APIs with built-in real-time subscriptions and data synchronization.|

### **Exam Focus**

- **Managed GraphQL APIs - AWS AppSync**
- **Real-time data synchronization across application clients - AWS AppSync**
- **Collaborative and live-updating applications - AWS AppSync**
- **Real-time data streaming and processing - Amazon Kinesis**
- **REST, HTTP and WebSocket APIs - Amazon API Gateway**
- **Full-stack web and mobile application development - AWS Amplify**

## **24. AWS Shared Responsibility Model – Customer Responsibilities**

### **Question**

Under the AWS Shared Responsibility Model, the customer manages which of the following?

### **Choices**

A. Patch management of an Amazon EC2 instance operating system  
B. Security group and ACL configuration  
C. Patch management of an Amazon RDS instance operating system  
D. Controlling physical access to data centers  
E. Decommissioning of physical storage devices

### **Answers**

**A. Patch management of an Amazon EC2 instance operating system**
**B. Security group and ACL configuration**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for **security in the cloud**, including their guest operating systems, applications, data, and network access configurations.

For managed services such as Amazon RDS, AWS assumes additional responsibilities, including maintenance and patching of the underlying operating system.

|Responsibility|Responsible Party|Reason|
|---|---|---|
|Patching EC2 guest operating systems|**Customer**|Customers manage and maintain the guest operating system running on EC2.|
|Security group and ACL configuration|**Customer**|Customers define inbound and outbound network access rules.|
|Patching RDS operating systems|**AWS**|Amazon RDS is a managed database service where AWS maintains the underlying operating system.|
|Controlling physical access to data centers|**AWS**|AWS manages the physical security of its facilities.|
|Decommissioning physical storage devices|**AWS**|AWS manages the physical infrastructure, including secure disposal of storage devices.|

### **Exam Focus**

**Customer responsibilities:**
- EC2 guest operating system patching
- Security group configuration
- Network ACL configuration

**AWS responsibilities:**
- RDS underlying operating system patching
- Physical data center security
- Physical storage device disposal

**Important distinction:**

- **Amazon EC2 OS patching - Customer**
- **Amazon RDS OS patching - AWS**
- **Security of the cloud - AWS**
- **Security in the cloud - Customer**

## **25. AWS Cost Explorer**

### **Question**

What is the AWS tool that can help a company visualize their AWS spending in the last few months?

### **Choices**

A. AWS Organizations  
B. AWS Budgets  
C. AWS Cost Explorer  
D. AWS Pricing Calculator

### **Answers**

**C. AWS Cost Explorer**

### **Why**

**AWS Cost Explorer** provides interactive visualizations and analysis of AWS costs and usage over time.

Customers can filter spending by service, account, tag, or time period to identify spending trends and anomalies.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS Organizations**|Centrally manages multiple AWS accounts and provides consolidated billing, rather than visualizing spending trends.|
|**AWS Budgets**|Defines cost and usage thresholds and sends notifications when those thresholds are exceeded.|
|**AWS Cost Explorer**|Visualizes and analyzes historical spending patterns and forecasts future costs.|
|**AWS Pricing Calculator**|Estimates the expected cost of AWS services before deployment rather than analyzing historical spending.|

### **Exam Focus**

|Exam Scenario|AWS Service|
|---|---|
|**Visualize historical spending**|AWS Cost Explorer|
|**Analyze spending trends**|AWS Cost Explorer|
|**Forecast future spending based on usage patterns**|AWS Cost Explorer|
|**Receive cost threshold alerts**|AWS Budgets|
|**Estimate costs before deployment**|AWS Pricing Calculator|
|**Consolidate billing across multiple accounts**|AWS Organizations|
|**Obtain granular billing and usage data**|AWS Cost and Usage Report|

**Key distinction:** Cost Explorer analyzes spending, Budgets monitors spending thresholds, and Pricing Calculator estimates planned expenses.

## **26. Cloud Computing Deployment Models**

### **Question**

Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?

### **Choices**

A. On-premises  
B. Cloud  
C. IaaS  
D. PaaS

### **Answers**

**B. Cloud**

### **Why**

The **cloud deployment model** eliminates the need for customers to operate and maintain their own physical data centers.

The cloud provider manages the underlying physical infrastructure, allowing customers to consume computing resources without purchasing or maintaining physical hardware.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**On-premises**|Requires organizations to operate and maintain their own physical infrastructure.|
|**Cloud**|Infrastructure is hosted and maintained by the cloud provider.|
|**Infrastructure as a Service (IaaS)**|A cloud service model that provides virtualized compute, storage, and networking resources, rather than a deployment model.|
|**Platform as a Service (PaaS)**|A cloud service model that provides a managed platform for application development and deployment, rather than a deployment model.|

### **Exam Focus**

- **Eliminate physical data center maintenance - Cloud deployment**
- **Maintain infrastructure within an organization's own facilities - On-premises deployment**
- **Virtualized compute, storage and networking resources - IaaS**
- **Managed application development platform - PaaS**

**Important distinction:**

- **Deployment models** describe where and how infrastructure is deployed.
- **Service models** describe the capabilities provided and the level of management responsibility.

## **27. AWS Compute Services**

### **Question**

Which of the following are AWS compute services?

### **Choices**

A. AWS CloudFormation  
B. Amazon Inspector  
C. AWS Batch  
D. Amazon Lightsail  
E. AWS Systems Manager

### **Answers**

**C. AWS Batch**
**D. Amazon Lightsail**

### **Why**

**AWS Batch** and **Amazon Lightsail** are compute services that enable customers to run applications and workloads in the AWS Cloud.
- **AWS Batch** - Manages and executes batch computing jobs using dynamically provisioned compute resources.
- **Amazon Lightsail** - Provides simplified virtual private servers for deploying applications and websites.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS CloudFormation**|An Infrastructure as Code (IaC) service that provisions and manages AWS resources using templates.|
|**Amazon Inspector**|An automated security assessment service that identifies software vulnerabilities.|
|**AWS Batch**|A compute service that manages and executes batch processing workloads.|
|**Amazon Lightsail**|A compute service that provides simplified virtual private servers.|
|**AWS Systems Manager**|An operations management service used for configuration, patching, inventory, and resource management.|

### **Exam Focus**

- **Run batch computing jobs - AWS Batch**
- **Simplified virtual private servers - Amazon Lightsail**
- **Provision infrastructure using templates - AWS CloudFormation**
- **Automated vulnerability assessment - Amazon Inspector**
- **Resource configuration, patching and operational management - AWS Systems Manager**

## **28. Multi-Region and Multi-AZ Deployment**

### **Question**

A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. Based on this situation, the Amazon EC2 instances should be deployed:

### **Choices**

A. With multiple Elastic Network Interfaces belonging to different subnets  
B. Across multiple Availability Zones in one AWS Region  
C. In a single Availability Zone in one AWS Region  
D. Across multiple Availability Zones in two AWS Regions

### **Answers**

**D. Across multiple Availability Zones in two AWS Regions**

### **Why**

Deploying EC2 instances across **multiple Availability Zones and multiple AWS Regions** provides the highest infrastructure redundancy among the available choices.

This deployment architecture provides the foundation for protecting applications against both:
- **Availability Zone failures** - Other Availability Zones within the Region can continue serving the application.
- **Regional failures** - Another AWS Region can continue serving the application when appropriate failover mechanisms are configured.

|Deployment Option|Why Applicable / Not Applicable|
|---|---|
|Multiple Elastic Network Interfaces (ENIs)|Provides network configuration flexibility but does not provide redundancy against instance or infrastructure failures.|
|Multiple AZs in one Region|Protects against AZ-level failures but remains vulnerable to a Regional outage.|
|Single AZ in one Region|Provides no AZ-level or Region-level redundancy.|
|Multiple AZs in two Regions|Provides infrastructure redundancy against both AZ-level and Region-level failures.|

### **Exam Focus**

|Deployment Architecture|Protection Against|
|---|---|
|**Single AZ**|No AZ-level or Region-level redundancy|
|**Multi-AZ**|Availability Zone failures|
|**Multi-Region**|Regional failures when failover is configured|
|**Multi-Region and Multi-AZ**|Both Availability Zone and Regional failures|

- **High availability within a Region - Multi-AZ deployment**
- **Protection against Regional outages - Multi-Region deployment**
- **Highest infrastructure redundancy among the choices - Multi-Region and Multi-AZ deployment**

**Important distinction:** Deploying across multiple Regions and Availability Zones provides redundancy, but the application must also be designed to handle failures and failover.

## **29. AWS Shared Responsibility Model – Service-Based Responsibilities**

### **Question**

Which statement is true regarding the AWS Shared Responsibility Model?

### **Choices**

A. Security of the managed services is the responsibility of the customer  
B. Patching the guest OS is always the responsibility of AWS  
C. Security of the IaaS services is the responsibility of AWS  
D. Responsibilities vary depending on the services used

### **Answers**

**D. Responsibilities vary depending on the services used**

### **Why**

Under the **AWS Shared Responsibility Model**, the division of responsibilities between AWS and the customer varies depending on the AWS service being used.

AWS assumes more operational and security responsibilities for managed services, while customers manage more of the technology stack when using Infrastructure as a Service (IaaS).

|Choice|Why Applicable / Not Applicable|
|---|---|
|Security of managed services is the customer's responsibility|Incorrect because AWS manages the underlying infrastructure and platform security, while customers retain responsibilities such as data and access management.|
|Guest OS patching is always AWS's responsibility|Incorrect because customers are responsible for guest operating system patching on Amazon EC2.|
|Security of IaaS services is AWS's responsibility|Incorrect because customers must also secure their guest operating systems, applications, data, and configurations.|
|Responsibilities vary depending on the services used|Correct because different AWS services have different levels of infrastructure and operational management.|

#### **Responsibility Comparison**

|Responsibility|Amazon EC2|Amazon RDS|
|---|---|---|
|Physical infrastructure|AWS|AWS|
|Virtualization layer|AWS|AWS|
|Operating system patching|Customer|AWS|
|Data management|Customer|Customer|
|Access permissions|Customer|Customer|

### **Exam Focus**

- **Security of the cloud - AWS**
- **Security in the cloud - Customer**
- **More customer management responsibility - IaaS**
- **More AWS management responsibility - Managed services**
- **EC2 guest OS patching - Customer**
- **RDS underlying OS patching - AWS**
- **Customer data and access permissions - Customer**

**Key distinction:** Managed services reduce customer responsibilities but do not eliminate them entirely.

## **30. Amazon Aurora**

### **Question**

What is the AWS service that provides five times the performance of a standard MySQL database?

### **Choices**

A. Amazon Neptune  
B. Amazon Aurora  
C. Amazon DynamoDB  
D. Amazon Redshift

### **Answers**

**B. Amazon Aurora**

### **Why**

**Amazon Aurora** is a managed relational database that is compatible with MySQL and PostgreSQL.

It delivers **up to five times the throughput of standard MySQL**, providing the performance, reliability, and availability of commercial databases at a fraction of the cost.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon Neptune**|A managed graph database designed for storing and querying highly connected data.|
|**Amazon Aurora**|A MySQL and PostgreSQL-compatible relational database designed for high performance and availability.|
|**Amazon DynamoDB**|A fully managed NoSQL database supporting key-value and document data models.|
|**Amazon Redshift**|A managed data warehouse optimized for analytical queries across large datasets rather than transactional database workloads.|

### **Exam Focus**

- **Up to five times standard MySQL throughput - Amazon Aurora**
- **MySQL and PostgreSQL-compatible relational database - Amazon Aurora**
- **Graph database and highly connected data - Amazon Neptune**
- **NoSQL key-value and document database - Amazon DynamoDB**
- **Data warehousing and large-scale analytics - Amazon Redshift**

**Database Service Comparison:**

|AWS Service|Database Type|Exam Clue|
|---|---|---|
|**Amazon Aurora**|Relational|High-performance MySQL and PostgreSQL compatibility|
|**Amazon Neptune**|Graph|Relationships and highly connected data|
|**Amazon DynamoDB**|NoSQL|Key-value and document data|
|**Amazon Redshift**|Data warehouse|Large-scale analytical queries|

## **31. Benefits of AWS for Startup Companies**

### **Question**

Why do many startup companies prefer AWS over traditional on-premises solutions?

### **Choices**

A. Using AWS allows companies to replace large capital expenditure with low variable costs  
B. AWS can build complete data centers faster than any other Cloud provider  
C. AWS removes the need to invest in operational expenditure  
D. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers  
E. AWS allows them to pay later when their business succeeds

### **Answers**

**A. Using AWS allows companies to replace large capital expenditure with low variable costs**
**D. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers**

### **Why**

AWS enables startups to avoid large upfront infrastructure investments and focus on developing products and growing their businesses.

The two key cloud computing benefits being tested are:
- **Trade capital expenditure (CapEx) for variable expenditure (OpEx)** - Pay for resources consumed instead of purchasing physical infrastructure upfront.
- **Increase speed and agility** - Focus on business activities and product development rather than managing data centers, reducing time-to-market.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Replace capital expenditure with variable costs|Reduces upfront investment through pay-as-you-go pricing.|
|Build data centers faster than other providers|Not an established AWS cloud computing benefit.|
|Eliminate operational expenditure|Operational expenses still exist. AWS replaces large upfront investments with ongoing variable costs.|
|Reduce time-to-market|Allows companies to focus on business innovation rather than infrastructure management.|
|Pay when the business succeeds|AWS charges customers based on applicable pricing and resource consumption, regardless of business profitability.|

### **Exam Focus**

- **Avoid large upfront infrastructure investments - Trade CapEx for variable expenditure**
- **Pay only for resources consumed - Pay-as-you-go pricing**
- **Reduce time-to-market - Increased speed and agility**
- **Focus on business activities - Stop spending money running and maintaining data centers**

**Key distinction:** Cloud computing shifts expenditure from CapEx to OpEx rather than eliminating expenses entirely.

## **32. AWS CLI Authentication**

### **Question**

Which AWS IAM feature allows developers to access AWS services through the AWS CLI?

### **Choices**

A. SSH keys  
B. API keys  
C. Access keys  
D. User names/Passwords

### **Answers**

**C. Access keys**

### **Why**

**AWS IAM access keys** are credentials used to authenticate programmatic requests to AWS services through the AWS Command Line Interface (AWS CLI) and AWS Software Development Kits (SDKs).

An access key consists of:
- **Access key ID** - Identifies the access key.
- **Secret access key** - Used to authenticate and sign programmatic requests.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**SSH keys**|Authenticate SSH connections to EC2 instances rather than AWS API requests.|
|**API keys**|Not the IAM credential type used to authenticate AWS CLI requests.|
|**Access keys**|Authenticate programmatic access to AWS services and APIs.|
|**User names/Passwords**|Used for interactive sign-in to the AWS Management Console rather than directly authenticating AWS API requests.|

### **Exam Focus**

- **Programmatic access to AWS - Access keys**
- **AWS CLI and SDK authentication - Access keys**
- **Access key ID + Secret access key - AWS access key credentials**
- **SSH access to EC2 instances - SSH keys**
- **Interactive AWS Management Console sign-in - Username and password**

## **33. Consolidated Billing and Reserved Instance Benefits**

### **Question**

Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?

### **Choices**

A. Amazon EC2 Instance Usage Report between AWS accounts  
B. Linked accounts and consolidated billing  
C. AWS Cost Explorer between AWS accounts  
D. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report

### **Answers**

**B. Linked accounts and consolidated billing**

### **Why**

**Consolidated billing** through **AWS Organizations** allows multiple AWS accounts to share the cost benefits of Reserved Instances (RIs) when discount sharing is enabled.

Unused Reserved Instance discounts in one member account can be applied to matching resource usage in another eligible member account.

This improves Reserved Instance utilization and reduces overall organizational costs.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**EC2 Instance Usage Report**|Provides historical EC2 usage information but does not enable discount sharing.|
|**Linked accounts and consolidated billing**|Enables eligible Reserved Instance pricing benefits to be shared across member accounts.|
|**AWS Cost Explorer**|Visualizes and analyzes spending across accounts but does not enable discount sharing.|
|**EC2 Reserved Instance Utilization Report**|Shows how effectively Reserved Instances are being utilized rather than enabling benefit sharing.|

### **Exam Focus**

- **Share Reserved Instance discounts across AWS accounts - Consolidated billing**
- **Centralized management of multiple AWS accounts - AWS Organizations**
- **Single consolidated bill for multiple accounts - Consolidated billing**
- **Analyze Reserved Instance utilization - Reserved Instance Utilization Report**
- **Visualize spending across accounts - AWS Cost Explorer**

**Key distinction:** Consolidated billing enables discount sharing, while billing reports and Cost Explorer provide visibility into costs and utilization.

## **34. Elastic Load Balancing (ELB)**

### **Question**

Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?

### **Choices**

A. Amazon Athena  
B. AWS PrivateLink  
C. NAT gateway  
D. Elastic Load Balancing

### **Answers**

**D. Elastic Load Balancing**

### **Why**

**Elastic Load Balancing (ELB)** automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances.

It improves application availability, scalability, and fault tolerance by distributing requests and avoiding dependence on a single instance.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon Athena**|An interactive query service used to analyze data stored in Amazon S3 using SQL.|
|**AWS PrivateLink**|Provides private connectivity between VPCs and services without exposing traffic to the public internet.|
|**NAT gateway**|Allows resources in private subnets to initiate outbound internet connections without accepting unsolicited inbound internet connections.|
|**Elastic Load Balancing**|Automatically distributes incoming application traffic across multiple targets.|

### **Exam Focus**

- **Distribute incoming traffic across EC2 instances - Elastic Load Balancing**
- **Improve application availability through traffic distribution - Elastic Load Balancing**
- **Query Amazon S3 data using SQL - Amazon Athena**
- **Private connectivity to services - AWS PrivateLink**
- **Outbound internet access for private subnets - NAT gateway**

## **35. Cloud Computing Best Practices – Elasticity and Agility**

### **Question**

Which AWS Cloud best practice uses the elasticity and agility of cloud computing?

### **Choices**

A. Build the application and infrastructure in a data center that grants physical access  
B. Dynamically and predictively scale to meet usage demands  
C. Break apart the application into loosely coupled components  
D. Provision capacity based on past usage and theoretical peaks

### **Answers**

**B. Dynamically and predictively scale to meet usage demands**

### **Why**

Dynamically and predictively scaling resources allows applications to adapt to changing workload requirements.

This leverages two fundamental cloud computing benefits:
- **Elasticity** - Automatically adjust resource capacity to match demand.
- **Agility** - Rapidly provision resources and adapt to changing requirements.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Build infrastructure in a data center that grants physical access|Describes an on-premises or colocation approach rather than leveraging cloud elasticity.|
|Dynamically and predictively scale|Adjusts resource capacity to meet actual or anticipated demand.|
|Loosely coupled components|Improves resilience and maintainability but describes a separate architectural best practice.|
|Provision capacity based on past usage and theoretical peaks|Traditional capacity planning can result in over-provisioning and unused resources.|

### **Exam Focus**

- **Dynamically adjust resources to match demand - Elasticity**
- **Rapidly provision resources and adapt to change - Agility**
- **Scale based on anticipated demand - Predictive scaling**
- **Reduce dependencies between application components - Loose coupling**
- **Avoid provisioning excessive capacity for theoretical peaks - Stop guessing capacity**

## **36. Virtual Multi-Factor Authentication (MFA)**

### **Question**

Which of the following can be used to enable Virtual Multi-Factor Authentication?

### **Choices**

A. AWS CLI  
B. Amazon Connect  
C. Amazon SNS  
D. Amazon Virtual Private Cloud  
E. AWS Identity and Access Management (IAM)

### **Answers**

**A. AWS CLI**
**E. AWS Identity and Access Management (IAM)**

### **Why**

**Multi-Factor Authentication (MFA)** provides an additional layer of security by requiring a second authentication factor beyond a password.

Virtual MFA devices can be configured using:
- **AWS IAM** - Configure and assign virtual MFA devices to IAM users.
- **AWS CLI** - Create, enable, and manage virtual MFA devices programmatically.

|Service / Tool|Why Applicable / Not Applicable|
|---|---|
|**AWS CLI**|Enables programmatic configuration and management of virtual MFA devices.|
|**Amazon Connect**|A cloud-based contact center service for managing customer communications.|
|**Amazon SNS**|A messaging and notification service, not an authentication management service.|
|**Amazon VPC**|Provides isolated virtual networking environments rather than managing user authentication.|
|**AWS IAM**|Manages identities, permissions, authentication settings, and MFA devices.|

### **Exam Focus**

- **Configure virtual MFA - AWS IAM and AWS CLI**
- **Additional authentication factor - MFA**
- **Manage identities and permissions - AWS IAM**
- **Cloud-based contact center - Amazon Connect**
- **Messaging and notifications - Amazon SNS**
- **Isolated virtual network - Amazon VPC**

## **37. AWS Support Plans – Trusted Advisor Checks**

### **Question**

Which AWS Support plan provides a full set of AWS Trusted Advisor checks?

### **Choices**

A. Enterprise and Developer Support  
B. Business and Developer Support  
C. Business and Basic Support  
D. Enterprise and Business Support

### **Answers**

**D. Enterprise and Business Support**

### **Why**

**AWS Trusted Advisor** provides recommendations to help customers optimize their AWS environments according to AWS best practices.

Under the support plan structure tested in this question, Business and Enterprise Support provide access to the full set of Trusted Advisor checks, while Basic and Developer Support provide limited core checks.

|Support Plan|Trusted Advisor Access|
|---|---|
|**Basic**|Seven core checks|
|**Developer**|Seven core checks|
|**Business**|Full set of checks|
|**Enterprise**|Full set of checks|

Why the other choices are not applicable:

|Choice|Reason|
|---|---|
|Enterprise and Developer|Enterprise provides full access, but Developer provides limited checks.|
|Business and Developer|Business provides full access, but Developer provides limited checks.|
|Business and Basic|Business provides full access, but Basic provides limited checks.|
|Enterprise and Business|Both provide access to the full set of checks under the support plan structure tested.|

### **Exam Focus**

- **Full Trusted Advisor checks - Business and Enterprise Support**
- **Seven core Trusted Advisor checks - Basic and Developer Support**
- **AWS best practice recommendations - AWS Trusted Advisor**
- **Minimum support plan for full Trusted Advisor checks among these choices - Business Support**

## **38. Application Load Balancer (ALB)**

### **Question**

A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?

### **Choices**

A. AWS Application Load Balancer  
B. AWS Network Load Balancer  
C. AWS EC2 Auto Recovery  
D. AWS Auto Scaling

### **Answers**

**A. AWS Application Load Balancer**

### **Why**

An **Application Load Balancer (ALB)** operates at **Layer 7 (Application Layer)** and distributes incoming HTTP and HTTPS traffic across multiple targets, such as EC2 instances.

It supports application-level routing based on request characteristics, including URL paths and host headers.

|Service / Feature|Why Applicable / Not Applicable|
|---|---|
|**Application Load Balancer (ALB)**|Distributes HTTP and HTTPS traffic across application instances and supports application-level routing.|
|**Network Load Balancer (NLB)**|Operates at Layer 4 and is optimized for high-performance TCP and UDP traffic.|
|**EC2 Auto Recovery**|Recovers individual EC2 instances from underlying infrastructure failures rather than distributing traffic.|
|**AWS Auto Scaling**|Adjusts resource capacity based on demand rather than distributing incoming requests.|

#### **ALB vs NLB**

|Characteristic|Application Load Balancer|Network Load Balancer|
|---|---|---|
|OSI layer|Layer 7|Layer 4|
|Traffic protocols|HTTP, HTTPS|TCP, UDP, TLS|
|Primary use case|Web applications|High-performance network traffic|
|Routing|Application-level routing|Transport-level routing|

### **Exam Focus**

- **HTTP and HTTPS traffic distribution - Application Load Balancer**
- **URL path and host-based routing - Application Load Balancer**
- **High-performance TCP and UDP traffic - Network Load Balancer**
- **Layer 7 - ALB**
- **Layer 4 - NLB**
- **Recover failed EC2 instances - EC2 Auto Recovery**
- **Automatically adjust resource capacity - Auto Scaling**

**Key distinction:** Load balancing distributes traffic, while Auto Scaling adjusts the number or capacity of available resources.

## **39. Amazon ElastiCache**

### **Question**

Which service is best for storing common database query results, which helps to alleviate database access load?

### **Choices**

A. Amazon ElastiCache  
B. Amazon EC2 Instance Store  
C. Amazon Machine Learning  
D. Amazon SQS

### **Answers**

**A. Amazon ElastiCache**

### **Why**

**Amazon ElastiCache** is a managed in-memory caching service that stores frequently accessed data and database query results.

Applications can retrieve cached results instead of repeatedly querying the underlying database.

Benefits include:
- Reduced database workload.
- Lower application latency.
- Faster data retrieval.
- Improved application performance.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon ElastiCache**|Provides in-memory caching for frequently accessed data and database query results.|
|**Amazon EC2 Instance Store**|Provides temporary block storage directly attached to an EC2 instance rather than managed database caching.|
|**Amazon Machine Learning**|Builds and trains machine learning models rather than caching database query results.|
|**Amazon SQS**|Provides message queuing for communication between distributed application components.|

### **Exam Focus**

- **In-memory caching - Amazon ElastiCache**
- **Cache frequently accessed database query results - Amazon ElastiCache**
- **Reduce database workload and application latency - Amazon ElastiCache**
- **Redis and Memcached caching - Amazon ElastiCache**
- **Temporary EC2 block storage - Instance Store**
- **Message queuing and application decoupling - Amazon SQS**

**Exam keywords:** Frequently accessed data, repeated database queries, in-memory storage, reduce database load, improve response times.

## **40. AWS Account Logon Security**

### **Question**

How can a customer increase security to AWS account logons?

### **Choices**

A. Use Amazon Cognito to manage access  
B. Configure a strong password policy  
C. Configure AWS Certificate Manager  
D. Enable AWS Organizations  
E. Enable Multi-Factor Authentication (MFA)

### **Answers**

**B. Configure a strong password policy**
**E. Enable Multi-Factor Authentication (MFA)**

### **Why**

A **strong password policy** and **Multi-Factor Authentication (MFA)** directly improve AWS account authentication security.
- **Strong password policy** - Enforces password requirements for IAM users, such as minimum length, complexity, and password reuse restrictions.
- **MFA** - Requires an additional authentication factor beyond the password, reducing the risk of unauthorized access even if a password is compromised.

|Service / Feature|Why Applicable / Not Applicable|
|---|---|
|**Amazon Cognito**|Manages authentication and access for users of customer-facing web and mobile applications rather than directly securing AWS account logons.|
|**Strong password policy**|Enforces password security requirements for IAM users.|
|**AWS Certificate Manager (ACM)**|Provisions and manages SSL/TLS certificates for securing data in transit rather than account authentication.|
|**AWS Organizations**|Provides centralized management and governance of multiple AWS accounts rather than directly securing individual account logons.|
|**Multi-Factor Authentication (MFA)**|Adds a second authentication factor to strengthen account sign-in security.|

### **Exam Focus**

- **Strengthen IAM user passwords - IAM password policy**
- **Additional authentication factor during sign-in - MFA**
- **Protect AWS account logons - Strong passwords and MFA**
- **Authentication for customer-facing applications - Amazon Cognito**
- **Manage SSL/TLS certificates - AWS Certificate Manager**
- **Centralized multi-account governance - AWS Organizations**

**Authentication and Security Comparison:**

|Requirement|AWS Service / Feature|
|---|---|
|Enforce password requirements|**IAM password policy**|
|Require an additional authentication factor|**MFA**|
|Authenticate programmatic AWS access|**Access keys**|
|Manage web and mobile application users|**Amazon Cognito**|
|Manage SSL/TLS certificates|**AWS Certificate Manager**|
|Govern multiple AWS accounts|**AWS Organizations**|

## **41. AWS License Manager**

### **Question**

A company needs to track and manage its Microsoft and Oracle software licenses as it migrates workloads to AWS. Which AWS service helps manage software license compliance?

### **Choices**

A. AWS Service Catalog  
B. AWS Systems Manager  
C. AWS License Manager  
D. AWS Config

### **Answers**

**C. AWS License Manager**

### **Why**

**AWS License Manager** helps customers centrally manage and track software licenses from vendors such as Microsoft, Oracle, and SAP across AWS and on-premises environments.

It allows customers to establish licensing rules, track license usage, and reduce the risk of licensing compliance violations.

|Service|Why Applicable / Not Applicable|
|---|---|
|**AWS Service Catalog**|Creates and manages catalogs of approved IT products and services rather than tracking software licenses.|
|**AWS Systems Manager**|Provides operational management capabilities, including patching, automation, and inventory management.|
|**AWS License Manager**|Centrally tracks software license usage and enforces licensing rules.|
|**AWS Config**|Records resource configurations and evaluates configuration compliance rather than software license entitlements.|

### **Exam Focus**

- **Track and manage software licenses - AWS License Manager**
- **Microsoft, Oracle and SAP licensing compliance - AWS License Manager**
- **Manage approved IT products - AWS Service Catalog**
- **Operational management and patching - AWS Systems Manager**
- **Resource configuration compliance - AWS Config**

## **42. AWS Shared Responsibility Model – Data Encryption**

### **Question**

What is the AWS customer responsible for according to the AWS Shared Responsibility Model?

### **Choices**

A. Data encryption  
B. Physical access controls  
C. Environmental risk management  
D. Secure disposal of storage devices

### **Answers**

**A. Data encryption**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for protecting their data as part of **security in the cloud**.

AWS provides encryption capabilities through services such as AWS Key Management Service (AWS KMS), but customers are responsible for ensuring that their data protection requirements are met and managing applicable encryption configurations, keys, and access policies.

|Responsibility|Responsible Party|Reason|
|---|---|---|
|Data encryption|**Customer**|Customers are responsible for protecting their data using appropriate encryption controls.|
|Physical access controls|**AWS**|AWS controls physical access to its data centers.|
|Environmental risk management|**AWS**|AWS manages temperature, humidity, fire suppression, and other environmental controls within its facilities.|
|Secure disposal of storage devices|**AWS**|AWS manages the secure decommissioning and disposal of physical storage hardware.|

### **Exam Focus**

**Customer - Security in the cloud**
- Data protection and encryption
- Encryption configurations
- Data access permissions

**AWS - Security of the cloud**
- Physical access controls
- Environmental risk management
- Secure disposal of physical hardware

**Key distinction:** AWS provides encryption capabilities, while customers remain responsible for meeting their data protection requirements.

## **43. Amazon RDS Reserved Instance Pricing**

### **Question**

A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?

### **Choices**

A. Spot Instances  
B. On-Demand Instances  
C. Reserved Instances - Partial Upfront  
D. Reserved Instances - No Upfront

### **Answers**

**C. Reserved Instances - Partial Upfront**

### **Why**

**Amazon RDS Reserved Instances** provide discounted pricing in exchange for a one-year or three-year commitment.

For a predictable database workload running for at least three years, the **Partial Upfront** payment option generally provides a greater discount than the No Upfront option.

|Pricing Option|Why Applicable / Not Applicable|
|---|---|
|**Spot Instances**|Uses spare compute capacity at discounted prices. This purchasing model is not available for Amazon RDS.|
|**On-Demand Instances**|Requires no long-term commitment but generally costs more for predictable, long-running workloads.|
|**Reserved Instances - Partial Upfront**|Provides discounted pricing with an initial partial payment and remaining payments throughout the term.|
|**Reserved Instances - No Upfront**|Provides discounted pricing without an initial payment but generally offers a smaller discount than Partial Upfront.|

#### **Reserved Instance Payment Options**

|Payment Option|Upfront Payment|Relative Discount|
|---|---|---|
|**No Upfront**|None|Generally lowest|
|**Partial Upfront**|Partial payment|Generally higher|
|**All Upfront**|Full payment|Generally highest|

### **Exam Focus**

- **Predictable long-term database workloads - Amazon RDS Reserved Instances**
- **One-year or three-year commitment - Reserved Instances**
- **No long-term commitment - On-Demand pricing**
- **Highest discount among the available choices - Partial Upfront**
- **Spot purchasing model - Not available for Amazon RDS**

**Important distinction:** All Upfront generally provides the greatest discount, but it is not an available choice in this question.

## **44. Cloud Architecture Principles – Elasticity**

### **Question**

A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?

### **Choices**

A. Decouple your components  
B. Design for failure  
C. Implement elasticity  
D. Think parallel

### **Answers**

**C. Implement elasticity**

### **Why**

**Elasticity** allows a system to dynamically increase or decrease resource capacity in response to changing workload demands.

By adjusting capacity as demand changes, applications can accommodate increases in users, traffic, and data while maintaining performance and avoiding unnecessary resource costs.

|Architecture Principle|Why Applicable / Not Applicable|
|---|---|
|**Decouple your components**|Reduces dependencies between application components, improving resilience and maintainability.|
|**Design for failure**|Anticipates component failures and enables applications to recover or continue operating.|
|**Implement elasticity**|Dynamically adjusts resource capacity to accommodate changing workload demands.|
|**Think parallel**|Distributes tasks across multiple resources for simultaneous processing, improving throughput and processing speed.|

### **Exam Focus**

- **Dynamically increase or decrease resources based on demand - Elasticity**
- **Reduce dependencies between components - Loose coupling**
- **Anticipate and withstand component failures - Design for failure**
- **Execute tasks simultaneously - Parallel processing**

**Important distinction:**

- **Scalability** - Ability to accommodate growth without degrading performance.
- **Elasticity** - Dynamically adjust resource capacity to match changing demand.

The question's wording also describes scalability, but elasticity is the best answer among the available choices.

## **45. Amazon Route 53 Health Checks and DNS Failover**

### **Question**

Which AWS service monitors the availability of endpoints and automatically routes traffic away from unhealthy resources?

### **Choices**

A. Amazon CloudWatch  
B. AWS CloudFormation  
C. Amazon Route 53  
D. Amazon Aurora

### **Answers**

**C. Amazon Route 53**

### **Why**

**Amazon Route 53** is a DNS and domain routing service that supports endpoint health checks and DNS failover.

Route 53 can monitor endpoint availability and, when configured with appropriate failover routing, direct traffic away from unhealthy resources toward healthy resources.

This helps improve application availability and resilience.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon CloudWatch**|Monitors resource metrics, logs, and alarms but does not perform DNS-based traffic routing.|
|**AWS CloudFormation**|Provisions and manages AWS infrastructure using Infrastructure as Code (IaC) templates.|
|**Amazon Route 53**|Performs endpoint health checks and supports DNS failover routing.|
|**Amazon Aurora**|A managed relational database service rather than a DNS routing or endpoint health monitoring service.|

### **Exam Focus**

- **Domain Name System (DNS) - Amazon Route 53**
- **Endpoint health checks - Amazon Route 53**
- **DNS failover and routing away from unhealthy endpoints - Amazon Route 53**
- **Resource metrics, logs and alarms - Amazon CloudWatch**
- **Infrastructure provisioning using templates - AWS CloudFormation**

**Key distinction:** CloudWatch monitors resource health and performance, while Route 53 can use endpoint health information to make DNS routing decisions.

## **46. Amazon EC2 Auto Scaling**

### **Question**

A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?

### **Choices**

A. Amazon CloudFront  
B. Amazon Route 53  
C. Elastic Load Balancer  
D. Amazon EC2 Auto Scaling

### **Answers**

**D. Amazon EC2 Auto Scaling**

### **Why**

**Amazon EC2 Auto Scaling** automatically adjusts the number of EC2 instances based on workload demand.

It helps maintain application performance while minimizing unnecessary costs by reducing the need for manual capacity management.
- **Scale out** - Add EC2 instances when demand increases.
- **Scale in** - Remove EC2 instances when demand decreases.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon CloudFront**|A content delivery network that caches and delivers content from edge locations closer to users.|
|**Amazon Route 53**|A DNS service that routes users to application endpoints rather than managing compute capacity.|
|**Elastic Load Balancing**|Distributes incoming traffic across existing instances but does not add or remove instances.|
|**Amazon EC2 Auto Scaling**|Automatically adds or removes EC2 instances based on demand.|

### **Exam Focus**

- **Automatically add or remove EC2 instances - Amazon EC2 Auto Scaling**
- **Add instances - Scale out**
- **Remove instances - Scale in**
- **Automatically match compute capacity to demand - Elasticity**
- **Distribute incoming traffic - Elastic Load Balancing**
- **DNS and endpoint routing - Amazon Route 53**
- **Deliver content closer to users - Amazon CloudFront**

**Key distinction:** Auto Scaling manages compute capacity, while Elastic Load Balancing distributes traffic across that capacity.

## **47. AWS Cloud Adoption Framework – Technical Perspectives**

### **Question**

Which perspectives of the AWS Cloud Adoption Framework (AWS CAF) are categorized as technical capabilities? (Select TWO)

### **Choices**

A. Business  
B. People  
C. Platform  
D. Operations  
E. Governance

### **Answers**

**C. Platform**
**D. Operations**

### **Why**

The **AWS Cloud Adoption Framework (AWS CAF)** organizes its six perspectives into two categories: **business capabilities** and **technical capabilities**.

Platform and Operations are both technical capability perspectives.

|Perspective|Category|Purpose|
|---|---|---|
|**Business**|Business|Aligns cloud investments with business objectives and outcomes.|
|**People**|Business|Focuses on organizational readiness, culture, and workforce skills.|
|**Platform**|Technical|Focuses on building and modernizing cloud infrastructure and workloads.|
|**Operations**|Technical|Focuses on operating and maintaining cloud workloads effectively.|
|**Governance**|Business|Focuses on managing cloud initiatives, maximizing benefits, and minimizing transformation risks.|

#### **Six AWS CAF Perspectives**

|Business Capabilities|Technical Capabilities|
|---|---|
|Business|Platform|
|People|Security|
|Governance|Operations|

### **Exam Focus**

**Business capabilities:**
- Business
- People
- Governance

**Technical capabilities:**
- Platform
- Security
- Operations

**Four transformation domains:**
- Technology
- Process
- Organization
- Product

**Memory aid:**
- Business capabilities - **BPG**
- Technical capabilities - **PSO**
- Transformation domains - **TPOP**

**Important distinction:** AWS CAF defines six perspectives and four transformation domains. Do not confuse the two categories.

## **48. Amazon ElastiCache – Application Performance**

### **Question**

A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?

### **Choices**

A. Amazon EBS volume  
B. Amazon ElastiCache  
C. AWS Storage Gateway  
D. AWS OpsWorks

### **Answers**

**B. Amazon ElastiCache**

### **Why**

**Amazon ElastiCache** is a managed in-memory caching service that provides sub-millisecond response times for frequently accessed data.

By storing frequently accessed data in memory, applications can retrieve information without repeatedly accessing the underlying database.

This reduces database load, improves response times, and enhances application performance.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon EBS**|Provides persistent block storage for EC2 instances rather than a purpose-built in-memory caching layer.|
|**Amazon ElastiCache**|Provides fast in-memory caching for frequently accessed application data.|
|**AWS Storage Gateway**|Connects on-premises environments to AWS cloud storage for hybrid storage use cases.|
|**AWS OpsWorks**|A legacy configuration management service used to automate server configuration and maintenance rather than caching data.|

### **Exam Focus**

- **Frequently accessed application data - Amazon ElastiCache**
- **Sub-millisecond response times - Amazon ElastiCache**
- **In-memory caching - Amazon ElastiCache**
- **Reduce database load and improve application response times - Amazon ElastiCache**
- **Persistent block storage for EC2 - Amazon EBS**
- **Hybrid cloud storage - AWS Storage Gateway**
- **Server configuration management - AWS OpsWorks**

**Exam keywords:** Frequently accessed data, caching, low latency, optimal response time, reduce database load.

## **49. AWS Key Management Service (AWS KMS)**

### **Question**

Which functions can users perform using AWS KMS?

### **Choices**

A. Create and manage AWS access keys for an AWS account IAM user  
B. Create and manage AWS access keys for the AWS account root user  
C. Create and manage keys for multi-factor authentication  
D. Create and manage keys for encryption and decryption of data

### **Answers**

**D. Create and manage keys for encryption and decryption of data**

### **Why**

**AWS Key Management Service (AWS KMS)** enables customers to create, manage, and control cryptographic keys used for encrypting and decrypting data across AWS services.

It provides centralized encryption key management and supports auditing of key usage through AWS CloudTrail.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Manage IAM user access keys|Access keys are programmatic authentication credentials managed through IAM, not encryption keys managed by KMS.|
|Manage root user access keys|Root user access keys are account security credentials, not KMS encryption keys.|
|Manage MFA keys|MFA devices and tokens provide additional authentication factors rather than data encryption capabilities.|
|Manage encryption and decryption keys|Describes the primary purpose of AWS KMS, which manages cryptographic keys used to protect data.|

### **Exam Focus**

- **Create and manage cryptographic keys - AWS KMS**
- **Data encryption and decryption - AWS KMS**
- **Centralized encryption key management - AWS KMS**
- **Audit encryption key usage - AWS CloudTrail**
- **Manage programmatic access credentials - AWS IAM**
- **Additional authentication factor - MFA**

#### **AWS Key and Credential Comparison**

|Key / Credential|Purpose|
|---|---|
|**AWS KMS keys**|Encrypt and decrypt data.|
|**AWS access keys**|Authenticate programmatic requests to AWS services and APIs.|
|**EC2 key pairs**|Authenticate access to EC2 instances.|
|**MFA tokens**|Provide an additional authentication factor.|
|**SSL/TLS certificates**|Secure network communications and establish identity.|

**Key distinction:** Encryption keys protect data, while authentication credentials verify identity.

## **50. AWS Lambda – Shared Responsibility Model**

### **Question**

What is the customer's responsibility when using AWS Lambda?

### **Choices**

A. Platform management  
B. Application management  
C. Code encryption  
D. Operating system configuration

### **Answers**

**B. Application management**

### **Why**

**AWS Lambda** is a serverless compute service where AWS manages the underlying infrastructure, operating system, scaling, and platform maintenance.

Customers are responsible for managing their application code, including writing, deploying, maintaining, and securing their Lambda functions.

|Responsibility|Responsible Party|Reason|
|---|---|---|
|Platform management|**AWS**|AWS manages the underlying serverless platform and infrastructure.|
|Application management|**Customer**|Customers develop, deploy, and maintain their application code.|
|Code encryption|**AWS by default**|Lambda automatically encrypts function code at rest. Customers can configure customer-managed encryption keys when required.|
|Operating system configuration|**AWS**|AWS manages the underlying operating system, which is abstracted from customers.|

### **Exam Focus**

- **Serverless compute - AWS Lambda**
- **Application code and function management - Customer**
- **Underlying infrastructure and operating system - AWS**
- **Automatic scaling and platform maintenance - AWS Lambda**

**Key distinction:** Serverless computing eliminates the need to manage servers, not the responsibility to manage and secure applications.

## **51. AWS Migration Strategies – Retire**

### **Question**

During a cloud migration assessment, a company identifies several legacy applications that are no longer in use. Which migration strategy should they apply to these applications?

### **Choices**

A. Rehost  
B. Retire  
C. Retain  
D. Relocate

### **Answers**

**B. Retire**

### **Why**

**Retire** involves decommissioning applications that are no longer needed or provide no business value.

Retiring unused applications reduces migration scope, operational costs, and unnecessary maintenance effort.

|Migration Strategy|Why Applicable / Not Applicable|
|---|---|
|**Rehost**|Migrates existing applications to AWS without significant changes. Migrating unused applications wastes resources.|
|**Retire**|Decommissions applications that are no longer required.|
|**Retain**|Keeps applications in their current environment because they are not ready or suitable for migration.|
|**Relocate**|Moves infrastructure to AWS with minimal changes without fundamentally redesigning applications.|

### **Exam Focus**

- **Decommission unused applications - Retire**
- **Keep applications in their existing environment - Retain**
- **Lift and shift existing applications - Rehost**
- **Move infrastructure with minimal changes - Relocate**

**Seven AWS migration strategies (7 Rs):**

- Rehost
- Replatform
- Refactor
- Repurchase
- Relocate
- Retain
- Retire

**Key distinction:** Retain means keep the application, while Retire means remove the application.

## **52. Amazon EC2 – Infrastructure Control**

### **Question**

What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?

### **Choices**

A. Amazon DynamoDB  
B. Amazon EC2  
C. Amazon Redshift  
D. Amazon RDS

### **Answers**

**B. Amazon EC2**

### **Why**

**Amazon Elastic Compute Cloud (Amazon EC2)** provides customers with extensive control over their virtual computing environment.

Customers can configure:
- Operating systems
- Instance types
- Networking
- Storage
- Installed applications and software

Unlike managed database services, EC2 allows customers to manage the guest operating system and software stack directly.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon DynamoDB**|A fully managed NoSQL database where AWS manages the underlying infrastructure.|
|**Amazon EC2**|Provides virtual servers with extensive customer control over operating systems, software, and resource configurations.|
|**Amazon Redshift**|A managed data warehouse that abstracts underlying infrastructure management.|
|**Amazon RDS**|A managed relational database service where AWS manages the underlying infrastructure and operating system.|

### **Exam Focus**

- **Highest control over virtual infrastructure among these choices - Amazon EC2**
- **Customize operating systems and installed software - Amazon EC2**
- **Infrastructure as a Service (IaaS) - Amazon EC2**
- **Managed NoSQL database - Amazon DynamoDB**
- **Managed relational database - Amazon RDS**
- **Managed data warehouse - Amazon Redshift**

**Key distinction:** Greater infrastructure control also means greater customer management responsibility.

## **53. Cloud Architecture Best Practices – Loose Coupling**

### **Question**

According to best practices, how should an application be designed to run in the AWS Cloud?

### **Choices**

A. Use monolithic components  
B. Use stateful components  
C. Use loosely coupled components  
D. Use tightly coupled components

### **Answers**

**C. Use loosely coupled components**

### **Why**

**Loose coupling** is a cloud architecture principle that minimizes dependencies between application components.

Loosely coupled components can:
- Scale independently.
- Be updated independently.
- Reduce the impact of individual component failures.
- Improve application resilience and maintainability.

|Architecture Approach|Why Applicable / Not Applicable|
|---|---|
|**Monolithic components**|Combine application components into a single unit, making independent scaling and updates more difficult.|
|**Stateful components**|Maintain application or session state, which can complicate horizontal scaling when state is stored locally.|
|**Loosely coupled components**|Reduce dependencies and allow components to operate, scale, and fail independently.|
|**Tightly coupled components**|Create strong dependencies between components, increasing the risk of cascading failures.|

### **Exam Focus**

- **Reduce dependencies between application components - Loose coupling**
- **Independent component scaling and deployment - Loose coupling**
- **Reduce cascading failures - Loose coupling**
- **Decouple application components using message queues - Amazon SQS**
- **Strong dependencies between components - Tight coupling**

**Key distinction:** Loose coupling improves resilience by reducing the impact of failures in individual application components.

## **54. Cloud Economics – Elasticity and Pay-as-you-go Pricing**

### **Question**

The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?

### **Choices**

A. AWS allows customers to pay upfront to get bigger discounts  
B. AWS allows customers to launch powerful EC2 instances to handle spikes in load  
C. AWS allows customers to launch and terminate EC2 instances based on demand  
D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs

### **Answers**

**C. AWS allows customers to launch and terminate EC2 instances based on demand**

### **Why**

**Elasticity** combined with **pay-as-you-go pricing** allows customers to adjust compute capacity according to actual workload demand.

During periods of high demand, additional EC2 instances can be launched. During periods of low demand, unnecessary instances can be terminated to avoid ongoing compute charges.

Traditional data centers require companies to purchase enough hardware to accommodate anticipated peak demand, potentially resulting in unused capacity.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Pay upfront for bigger discounts|Describes commitment-based pricing, which reduces unit costs but does not directly address fluctuating capacity requirements.|
|Launch powerful EC2 instances|Can handle increased workloads but does not necessarily reduce unused capacity during low-demand periods.|
|Launch and terminate EC2 instances based on demand|Matches compute capacity to actual demand and reduces unnecessary compute costs.|
|Choose cheaper EC2 instance types|Describes right-sizing or reducing unit costs rather than dynamically adjusting capacity.|

### **Exam Focus**

- **Fluctuating workload demand - Elasticity**
- **Pay for consumed compute resources - Pay-as-you-go pricing**
- **Automatically add and remove EC2 instances - Amazon EC2 Auto Scaling**
- **Match resource specifications to workload requirements - Right-sizing**
- **Avoid purchasing capacity for anticipated peaks - Stop guessing capacity**
- **Reduce unnecessary idle compute costs - Dynamic scaling**

**Key distinction:** Right-sizing optimizes the size of resources, while elasticity adjusts resource capacity as demand changes.

## **55. AWS WAF – SQL Injection Protection**

### **Question**

Which AWS service or feature can be used to prevent SQL injection attacks?

### **Choices**

A. AWS WAF  
B. Network ACLs  
C. IAM policy  
D. Security groups

### **Answers**

**A. AWS WAF**

### **Why**

**AWS WAF (Web Application Firewall)** protects web applications by inspecting HTTP and HTTPS requests and applying security rules to detect and block malicious traffic.

It can be configured to protect against common web application attacks, including **SQL injection**.

|Service / Feature|Why Applicable / Not Applicable|
|---|---|
|**AWS WAF**|Inspects application-layer web requests and blocks malicious traffic, including SQL injection attempts.|
|**Network ACLs**|Control inbound and outbound traffic at the subnet level based on IP addresses, ports, and protocols. They do not inspect SQL injection patterns.|
|**IAM policy**|Defines permissions to access AWS resources rather than inspecting web application requests.|
|**Security groups**|Control inbound and outbound network traffic at the resource level but do not inspect application-layer request content.|

_Note: The supplied explanation discusses AWS Shield and AWS CloudTrail instead of some of the actual answer choices. The comparison above follows the actual choices._

### **Exam Focus**

- **SQL injection protection - AWS WAF**
- **Filter malicious HTTP and HTTPS requests - AWS WAF**
- **Application-layer web traffic protection - AWS WAF**
- **Subnet-level network access control - Network ACLs**
- **Resource-level network access control - Security groups**
- **AWS resource access permissions - IAM policies**
- **DDoS protection - AWS Shield**

**Key distinction:** Security groups and network ACLs filter network traffic, while AWS WAF inspects web application requests for malicious content.

## **56. AWS Elastic Beanstalk**

### **Question**

Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?

### **Choices**

A. Amazon Route 53  
B. Amazon CloudFront  
C. AWS Config  
D. AWS Elastic Beanstalk

### **Answers**

**D. AWS Elastic Beanstalk**

### **Why**

**AWS Elastic Beanstalk** simplifies application deployment and management by automatically handling infrastructure provisioning and operational tasks.

It handles:
- Capacity provisioning
- Load balancing
- Auto Scaling
- Application health monitoring

Developers can focus on writing and deploying application code instead of manually configuring the underlying infrastructure.

|Service|Why Applicable / Not Applicable|
|---|---|
|**Amazon Route 53**|Provides DNS, domain routing, and endpoint health checks rather than application deployment management.|
|**Amazon CloudFront**|A content delivery network that caches and distributes content closer to end users.|
|**AWS Config**|Records resource configurations and evaluates compliance against configuration rules.|
|**AWS Elastic Beanstalk**|Automates application deployment and manages associated infrastructure provisioning, scaling, load balancing, and health monitoring.|

### **Exam Focus**

- **Deploy applications without manually provisioning infrastructure - AWS Elastic Beanstalk**
- **Automatic capacity provisioning, load balancing and scaling - AWS Elastic Beanstalk**
- **Application deployment and health monitoring - AWS Elastic Beanstalk**
- **DNS and domain routing - Amazon Route 53**
- **Global content delivery - Amazon CloudFront**
- **Resource configuration tracking and compliance - AWS Config**

**Exam keywords:** Upload application code, automatic deployment, capacity provisioning, load balancing, Auto Scaling, application health monitoring.

## **57. Multi-Region Deployment and Disaster Recovery**

### **Question**

How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?

### **Choices**

A. Deploy applications across multiple AWS Regions  
B. Use a hybrid cloud computing deployment model within the geographic area  
C. Deploy applications across multiple Availability Zones within an AWS Region  
D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions

### **Answers**

**A. Deploy applications across multiple AWS Regions**

### **Why**

Deploying applications across **multiple AWS Regions** in geographically separated locations provides protection against Region-wide disruptions.

If a natural disaster affects an entire Region, applications designed with appropriate cross-Region replication and failover mechanisms can continue operating or recover in another Region.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Deploy across multiple AWS Regions|Provides geographic redundancy and protection against Regional disruptions when properly configured.|
|Hybrid cloud within the same geographic area|Both cloud and on-premises infrastructure could be affected by the same natural disaster.|
|Deploy across multiple AZs within one Region|Protects against isolated Availability Zone failures but does not fully protect against Region-wide disruptions.|
|Store and replicate artifacts using AWS Artifact|AWS Artifact provides access to compliance reports and agreements. It is not an application storage or replication service.|

#### **Multi-AZ vs Multi-Region**

|Deployment|Primary Purpose|Protection Against|
|---|---|---|
|**Multi-AZ**|High availability within a Region|Availability Zone failures|
|**Multi-Region**|Geographic redundancy and disaster recovery|Regional outages|
|**Hybrid cloud**|Integration of cloud and on-premises environments|Depends on geographic distribution and architecture|

### **Exam Focus**

- **Natural disaster affecting an entire geographic area - Multi-Region deployment**
- **Protection against Regional outages - Multi-Region deployment**
- **Protection against isolated Availability Zone failures - Multi-AZ deployment**
- **Geographic redundancy and disaster recovery - Multiple AWS Regions**
- **Access AWS compliance reports and agreements - AWS Artifact**

**Key distinction:** Multiple Availability Zones protect against localized infrastructure failures, while multiple Regions provide geographic separation against larger-scale disasters.

## **58. AWS Trusted Advisor – Unrestricted Security Group Access**

### **Question**

A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the **SIMPLEST** way to do this?

### **Choices**

A. Open the AWS IAM console and check the inbound rule filters for open access  
B. Run AWS Trusted Advisor and review the findings  
C. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access  
D. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0

### **Answers**

**B. Run AWS Trusted Advisor and review the findings**

### **Why**

**AWS Trusted Advisor** provides automated recommendations based on AWS best practices.

Its security checks can identify security groups that allow unrestricted access to specific ports, helping customers detect potentially insecure network configurations without manually reviewing every security group.

The key requirement in this question is the **simplest approach**, making an existing automated Trusted Advisor check preferable to manual reviews or custom automation.

|Choice|Why Applicable / Not Applicable|
|---|---|
|**AWS IAM console**|Manages identities and permissions rather than security group inbound rules.|
|**AWS Trusted Advisor**|Provides existing automated security checks that identify unrestricted access to specific ports.|
|**AWS Config with a custom Lambda function**|Can automate configuration compliance checks but requires additional configuration and development effort.|
|**Manually review EC2 security groups**|Can identify unrestricted access but is time-consuming and potentially error-prone across many resources.|

`0.0.0.0/0` represents all IPv4 addresses. Allowing inbound traffic from this source on a specific port permits connections from any IPv4 address, subject to other network controls.

### **Exam Focus**

- **Identify unrestricted security group access - AWS Trusted Advisor**
- **Automated AWS best practice recommendations - AWS Trusted Advisor**
- **Resource configuration tracking and compliance evaluation - AWS Config**
- **Manage identities and permissions - AWS IAM**
- **All IPv4 addresses -** `0.0.0.0/0`

**Important distinction:**

- **AWS Trusted Advisor** - Identifies potential security issues and provides best practice recommendations.
- **AWS Config** - Records resource configurations and evaluates them against compliance rules.

**Exam clue:** When the question asks for the simplest way to identify common security misconfigurations, consider existing Trusted Advisor checks before custom solutions.

## **59. PCI DSS Compliance and Shared Responsibility Model**

### **Question**

A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company's responsibility when building a PCI-compliant environment in AWS?

### **Choices**

A. Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements  
B. Ensure that AWS services are configured properly to meet all PCI DSS standards  
C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel  
D. Start the migration process immediately as all AWS services are PCI compliant  
E. Ensure that all PCI DSS physical security requirements are met

### **Answers**

**B. Ensure that AWS services are configured properly to meet all PCI DSS standards**
**C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel**

### **Why**

**Payment Card Industry Data Security Standard (PCI DSS)** defines security requirements for protecting cardholder data.

Under the **AWS Shared Responsibility Model**, AWS manages the security and compliance of its underlying infrastructure, while customers are responsible for configuring AWS services and protecting their applications and data according to applicable compliance requirements.

Using AWS services that are within the scope of PCI DSS compliance does not automatically make a customer's application PCI compliant.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Configure underlying AWS infrastructure|**AWS responsibility.** AWS manages the underlying physical infrastructure, hardware, and networking.|
|Configure AWS services to meet PCI DSS standards|**Customer responsibility.** Customers must configure their resources according to applicable compliance requirements.|
|Restrict cardholder data access and establish security policies|**Customer responsibility.** Customers must protect sensitive data, enforce access controls, and establish organizational security policies.|
|Assume all AWS services are PCI compliant|Not all AWS services are within the scope of PCI DSS compliance. Customers must verify service eligibility and configure services appropriately.|
|Meet physical security requirements|**AWS responsibility** for AWS-managed data centers and physical infrastructure. Customers remain responsible for any physical environments they manage themselves.|

#### **PCI DSS Responsibility Comparison**

|AWS Responsibilities|Customer Responsibilities|
|---|---|
|Physical data center security|Proper AWS resource configuration|
|Underlying infrastructure security|Cardholder data protection|
|Physical hardware maintenance|Data access controls|
|Physical storage device management|Organizational information security policies|
|Compliance of AWS-managed infrastructure|Compliance of customer applications and workloads|

### **Exam Focus**

- **Payment card and cardholder data security - PCI DSS**
- **Proper AWS service configuration - Customer**
- **Restrict access to sensitive customer data - Customer**
- **Organizational information security policies - Customer**
- **Physical data center security - AWS**
- **Underlying infrastructure compliance - AWS**
- **Access AWS compliance reports - AWS Artifact**
- **Verify compliance eligibility - AWS services in scope**

**Important distinction:**

- **Security and compliance of the cloud - AWS**
- **Security and compliance in the cloud - Customer**

Using a PCI DSS-compliant AWS service does not automatically make the customer's application compliant. Customers must ensure that their workloads, configurations, and operational practices satisfy applicable PCI DSS requirements.

## **60. Amazon EBS – Data Durability**

### **Question**

What is the benefit of Amazon EBS volumes being automatically replicated within the same Availability Zone?

### **Choices**

A. Accessibility  
B. Durability  
C. Traceability  
D. Elasticity

### **Answers**

**B. Durability**

### **Why**

**Amazon Elastic Block Store (Amazon EBS)** automatically replicates volume data within the same Availability Zone to protect against hardware component failures.

This improves **data durability** by reducing the risk of data loss when an underlying physical storage component fails.

|Concept|Why Applicable / Not Applicable|
|---|---|
|**Accessibility**|Describes the ability to access resources or data rather than protection against data loss.|
|**Durability**|Protects stored data against loss through redundancy and replication.|
|**Traceability**|Refers to tracking and auditing resource changes and activities.|
|**Elasticity**|Refers to dynamically adjusting resource capacity based on demand.|

### **Exam Focus**

- **Automatic EBS replication within an Availability Zone - Durability**
- **Persistent block storage - Amazon EBS**
- **Protection against storage hardware failures - Data replication**
- **Track and audit resource activities - Traceability**
- **Dynamically adjust resource capacity - Elasticity**

**Important distinction:** EBS volumes are automatically replicated within a single Availability Zone, not across multiple Availability Zones.

## **61. AWS Shared Responsibility Model – Security in the Cloud**

### **Question**

Under the AWS Shared Responsibility Model, which of the following is an example of security in the AWS Cloud?

### **Choices**

A. Physical security  
B. Global infrastructure  
C. Managing edge locations  
D. Firewall configuration

### **Answers**

**D. Firewall configuration**

### **Why**

Under the **AWS Shared Responsibility Model**, customers are responsible for **security in the cloud**, including configuring firewalls to control network access to their resources.

Customers configure security groups and network ACLs to define permitted inbound and outbound traffic.

|Responsibility|Responsible Party|Reason|
|---|---|---|
|Physical security|**AWS**|AWS secures its physical data centers and hardware.|
|Global infrastructure|**AWS**|AWS builds, operates, and maintains Regions, Availability Zones, and physical infrastructure.|
|Managing edge locations|**AWS**|AWS operates and maintains its global network of edge locations.|
|Firewall configuration|**Customer**|Customers define network access rules for their AWS resources.|

### **Exam Focus**

**Security of the cloud - AWS**
- Physical data center security
- Global infrastructure
- Regions and Availability Zones
- Edge locations

**Security in the cloud - Customer**
- Firewall configuration
- Security group configuration
- Network ACL configuration
- Resource access permissions

**Key distinction:** AWS manages the underlying network infrastructure, while customers configure network security controls for their resources.

## **62. Cloud Architecture Design Principles – Elasticity**

### **Question**

When architecting cloud applications, which of the following are a key design principle?

### **Choices**

A. Provision capacity for peak load  
B. Implement elasticity  
C. Use the largest instance possible  
D. Use the Scrum development process

### **Answers**

**B. Implement elasticity**

### **Why**

**Elasticity** is a fundamental cloud architecture design principle that enables resources to scale up or down dynamically according to actual workload demand.

It helps maintain application performance while avoiding over-provisioning, unnecessary costs, and unused capacity.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Provision capacity for peak load|A traditional infrastructure approach that can result in excessive idle capacity during normal demand.|
|Implement elasticity|Dynamically adjusts resource capacity to match actual demand, improving efficiency and cost optimization.|
|Use the largest instance possible|Leads to unnecessary costs and over-provisioning. Resources should be right-sized according to workload requirements.|
|Use the Scrum development process|A software development methodology rather than a cloud architecture design principle.|

### **Exam Focus**

- **Dynamically adjust capacity based on demand - Elasticity**
- **Automatically add or remove EC2 instances - Amazon EC2 Auto Scaling**
- **Match resource specifications to workload requirements - Right-sizing**
- **Avoid unnecessary idle capacity - Elasticity**
- **Avoid provisioning infrastructure for theoretical peak demand - Stop guessing capacity**

**Key distinction:** Cloud architecture should adapt resource capacity to demand rather than permanently provisioning resources for peak workloads.

## **63. Amazon EBS vs EC2 Instance Store – Data Persistence**

### **Question**

A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?

### **Choices**

A. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)  
B. Amazon Redshift  
C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store  
D. Amazon DynamoDB

### **Answers**

**A. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)**

### **Why**

**Amazon EBS** provides persistent block storage that exists independently of the running state of an EC2 instance.

When an EC2 instance is stopped, its EBS volume data is retained. This allows the company to stop its database server nightly and restart it without losing stored data.

The company can also avoid EC2 compute charges while the instance is stopped, although EBS storage charges continue.

|Service / Configuration|Why Applicable / Not Applicable|
|---|---|
|**Amazon EC2 with Amazon EBS**|Provides a self-managed database environment with persistent storage that retains data when the instance is stopped.|
|**Amazon Redshift**|A managed data warehouse designed for analytical workloads rather than hosting a self-managed database on EC2.|
|**Amazon EC2 with Instance Store**|Provides temporary block storage whose data is lost when the EC2 instance is stopped or terminated.|
|**Amazon DynamoDB**|A fully managed NoSQL database that does not provide a self-hosted database environment or customer-controlled server shutdowns.|

#### **Amazon EBS vs EC2 Instance Store**

|Characteristic|Amazon EBS|EC2 Instance Store|
|---|---|---|
|Storage type|Persistent block storage|Temporary block storage|
|Data retained after instance reboot|Yes|Yes|
|Data retained after instance stop|Yes|No|
|Data retained after instance termination|Depends on volume configuration|No|
|Suitable for persistent database storage|Yes|No|
|Common use case|Databases and operating system volumes|Temporary files and caches|

### **Exam Focus**

- **Persistent block storage for EC2 - Amazon EBS**
- **Retain data when an EC2 instance is stopped - Amazon EBS**
- **Temporary or ephemeral block storage - EC2 Instance Store**
- **Data lost when an instance is stopped or terminated - Instance Store**
- **Self-managed database with operating system control - Amazon EC2**
- **Managed data warehouse - Amazon Redshift**
- **Managed NoSQL database - Amazon DynamoDB**

**Important distinction:**

- **Stopping an EC2 instance** - EBS data persists, but Instance Store data is lost.
- **Rebooting an EC2 instance** - Both EBS and Instance Store data persist.
- **Terminating an EC2 instance** - Instance Store data is lost. EBS volume retention depends on its configuration.

**Exam keywords:** Persistent storage, nightly shutdown, retain database data, stop and restart instances.

## **64. AWS IAM Security Best Practices**

### **Question**

Which of the following describes a security best practice that can be implemented using AWS IAM?

### **Choices**

A. Grant permissions to users who are required to perform a given task only  
B. Generate secret keys for every IAM user  
C. Disable AWS Management Console access for all users  
D. Store AWS credentials within Amazon EC2 instances

### **Answers**

**A. Grant permissions to users who are required to perform a given task only**

### **Why**

The **principle of least privilege** is an IAM security best practice that involves granting users only the minimum permissions necessary to perform their assigned tasks.

This reduces the risk of unauthorized access, accidental misuse, and excessive permissions.

|Choice|Why Applicable / Not Applicable|
|---|---|
|Grant permissions only to users who require them|Implements the principle of least privilege by limiting access according to task requirements.|
|Generate secret keys for every IAM user|Creates unnecessary long-term credentials and increases the risk of credential exposure.|
|Disable Management Console access for all users|Unnecessarily restricts legitimate access. Console access should be granted according to user requirements.|
|Store AWS credentials within EC2 instances|Risks exposing long-term credentials. IAM roles should be used to provide temporary credentials to applications running on EC2.|

#### **IAM Security Best Practices**

- Grant **least privilege permissions**.
- Enable **Multi-Factor Authentication (MFA)**.
- Remove unnecessary or unused credentials.
- Avoid creating access keys unless required.
- Use individual identities rather than shared IAM credentials.
- Use IAM roles and temporary credentials for applications running on EC2 instances.

### **Exam Focus**

- **Grant only the minimum necessary permissions - Least privilege**
- **Manage identities and access permissions - AWS IAM**
- **Additional authentication factor - MFA**
- **Temporary credentials for EC2 applications - IAM roles**
- **Avoid hardcoding AWS credentials - IAM security best practice**
- **Reduce credential exposure - Remove unused access keys**
- **Maintain individual accountability - Individual identities**

**Important distinction:**

|Authentication Requirement|Recommended Feature|
|---|---|
|Limit permissions to required tasks|**Least privilege**|
|Strengthen user authentication|**MFA**|
|Allow EC2 applications to access AWS services|**IAM roles**|
|Authenticate programmatic requests|**Temporary security credentials preferred**|

**Exam clue:** When a question asks how to securely grant AWS permissions, prioritize least privilege. When an application running on EC2 needs access to other AWS services, prioritize IAM roles over stored access keys.