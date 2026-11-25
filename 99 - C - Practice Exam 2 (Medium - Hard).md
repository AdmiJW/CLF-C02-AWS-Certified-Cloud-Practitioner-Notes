## **1. Practice Question**

### **Question**

Which of the following is an optional security layer attached to a subnet within a VPC for controlling inbound and outbound traffic?

### **Choices**

A. Web Application Firewall  
B. Security Group  
C. Network ACL  
D. VPC Flow Logs

### **Answers**

**C. Network ACL (NACL)**

### **Why**

A **Network Access Control List (Network ACL)** provides an additional layer of security at the **subnet level** within an Amazon VPC. It controls inbound and outbound network traffic.

|Choice|Explanation|
|---|---|
|AWS WAF|Protects web applications against common web security threats. It does not control traffic at the subnet level.|
|Security Group|Controls traffic at the instance or network interface level rather than the subnet level.|
|**Network ACL**|Controls inbound and outbound traffic at the subnet level.|
|VPC Flow Logs|Captures information about IP traffic within a VPC. It monitors traffic rather than controlling it.|

### **Exam Focus**

- **Subnet-level security - Network ACL**
- **Instance-level security - Security Group**
- **Web application protection - AWS WAF**
- **Capture network traffic information - VPC Flow Logs**

## **2. Practice Question**

### **Question**

A developer at a company is tasked with deploying a web application written in Python. The team wants to focus on writing code and not managing the underlying infrastructure, such as servers or scaling configurations.

They also need the solution to automatically handle provisioning, load balancing, and scaling.

Which AWS service should the developer use?

### **Choices**

A. AWS CodeDeploy  
B. AWS Elastic Beanstalk  
C. AWS CloudFormation  
D. AWS App Runner

### **Answers**

**B. AWS Elastic Beanstalk**

### **Why**

**AWS Elastic Beanstalk** is an application management service that allows developers to deploy applications without manually managing the underlying infrastructure.

It automatically handles infrastructure provisioning, application deployment, load balancing, scaling, and application management.

|Choice|Explanation|
|---|---|
|AWS CodeDeploy|Automates application deployments and updates but does not automatically manage infrastructure provisioning and scaling.|
|**AWS Elastic Beanstalk**|Automatically provisions and manages the infrastructure required to run web applications.|
|AWS CloudFormation|Provisions infrastructure using Infrastructure as Code (IaC) but requires infrastructure configurations to be defined.|
|AWS App Runner|Simplifies the deployment of web applications and APIs from source code or container images. Elastic Beanstalk is the intended answer based on the question's emphasis on traditional application infrastructure management.|

**Clarification:** AWS App Runner can also deploy applications directly from source code. It is not limited to containerized applications, as suggested by the practice exam explanation.

### **Exam Focus**

- **Focus on application code instead of infrastructure - AWS Elastic Beanstalk**
- **Automatic provisioning, load balancing and scaling - AWS Elastic Beanstalk**
- **Automate application deployments - AWS CodeDeploy**
- **Infrastructure as Code (IaC) - AWS CloudFormation**
- **Deploy web applications and APIs from source code or container images - AWS App Runner**

## **3. Practice Question**

### **Question**

There is an external audit being carried out on your company. The auditor needs to have a log of who made the requests to AWS resources from the company's account.

Which of the following services can assist in providing these details?

### **Choices**

A. AWS CloudTrail  
B. Amazon EC2  
C. Amazon CloudWatch  
D. Amazon SNS

### **Answers**

**A. AWS CloudTrail**

### **Why**

**AWS CloudTrail** records AWS account activity and API calls to support governance, compliance, security analysis, and operational auditing.

It provides an event history of actions performed through the AWS Management Console, AWS CLI, AWS SDKs, and other AWS services.

The key clue is **who made the requests to AWS resources**.

|Choice|Explanation|
|---|---|
|**AWS CloudTrail**|Records account activity and identifies who performed actions on AWS resources.|
|Amazon EC2|Provides virtual servers for running applications. It is not an account auditing service.|
|Amazon CloudWatch|Monitors resource metrics, logs and operational performance rather than primarily recording who performed API actions.|
|Amazon SNS|Provides messaging and notification capabilities rather than account activity auditing.|

### **Exam Focus**

- **Who performed an action - AWS CloudTrail**
- **AWS API activity and account auditing - AWS CloudTrail**
- **Metrics, logs and alarms - Amazon CloudWatch**
- **Messaging and notifications - Amazon SNS**

## **4. Practice Question**

### **Question**

A manufacturing firm has recently migrated its application servers to Amazon EC2 instances.

The IT manager is looking for details of upcoming scheduled maintenance activities that AWS will perform on AWS resources, which may impact the services running on these EC2 instances.

Which of the following services can alert you about changes that can affect resources in your account?

### **Choices**

A. Amazon GuardDuty  
B. AWS Trusted Advisor  
C. AWS Organizations  
D. AWS Health Dashboard

### **Answers**

**D. AWS Health Dashboard**

### **Why**

**AWS Health Dashboard** provides visibility into AWS service health and events that may affect resources within an AWS account.

It provides personalized information about service disruptions, scheduled maintenance and other AWS events that may impact an account or organization.

The key clue is **upcoming scheduled maintenance performed by AWS**.

|Choice|Explanation|
|---|---|
|Amazon GuardDuty|Detects malicious activity and potential security threats within AWS environments.|
|AWS Trusted Advisor|Provides recommendations for optimizing AWS resources across areas such as cost, security, performance, fault tolerance and service limits.|
|AWS Organizations|Centrally manages multiple AWS accounts. It does not monitor AWS service health.|
|**AWS Health Dashboard**|Provides information about AWS service health, scheduled maintenance and events affecting account resources.|

### **Exam Focus**

- **Scheduled AWS maintenance - AWS Health Dashboard**
- **AWS service disruptions affecting your resources - AWS Health Dashboard**
- **AWS resource optimization recommendations - AWS Trusted Advisor**
- **Malicious activity and threat detection - Amazon GuardDuty**
- **Centralized multi-account management - AWS Organizations**

## **5. Practice Question**

### **Question**

According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?

### **Choices**

A. Modify the S3 bucket policy so that any service can upload to it at any time.  
B. Hardcode an IAM user's secret key and access key directly in the application, and upload the file.  
C. Store the IAM user's secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.  
D. Have the EC2 instance assume an IAM role to obtain the privileges to upload the file.

### **Answers**

**D. Have the EC2 instance assume an IAM role to obtain the privileges to upload the file.**

### **Why**

**IAM roles** provide a secure and manageable way to grant permissions to AWS services and applications.

When an EC2 instance is assigned an IAM role, applications running on the instance can obtain **temporary security credentials** provided by the **AWS Security Token Service (AWS STS)**.

This eliminates the need to store long-term access keys directly on the instance or within the application.

|Choice|Explanation|
|---|---|
|Modify the S3 bucket policy to allow any service|Grants excessive permissions and violates the principle of least privilege.|
|Hardcode IAM credentials|Exposes credentials if the application or source code repository is compromised.|
|Store IAM credentials in a text file|Credentials may be exposed if unauthorized access to the EC2 instance is obtained.|
|**Assign an IAM role to EC2**|Provides temporary security credentials and permissions without storing long-term access keys.|

### **Exam Focus**

- **Grant EC2 access to other AWS services - IAM Role**
- **Temporary security credentials - AWS STS**
- **Grant only necessary permissions - Principle of Least Privilege**
- **Avoid hardcoding or storing long-term AWS credentials in applications.**

## **6. Practice Question**

### **Question**

What best describes the **Principle of Least Privilege**?

### **Choices**

A. Users should submit all access requests in written form so that there is a paper trail of who needs access to different AWS resources.  
B. Users should always have a little more permission than they need.  
C. All users should have the same baseline permissions granted to them to use basic AWS services.  
D. Users should be granted permission to access only resources they need to do their assigned job.

### **Answers**

**D. Users should be granted permission to access only resources they need to do their assigned job.**

### **Why**

The **Principle of Least Privilege** is a security best practice that grants users, applications and services only the minimum permissions necessary to perform their intended tasks.

For example, a user responsible for creating backups should only have the permissions required to perform backup-related activities.

|Choice|Explanation|
|---|---|
|Submit access requests in written form|Provides an audit trail but does not ensure that permissions are limited to what is necessary.|
|Grant slightly more permissions than needed|Introduces unnecessary privileges and security risks.|
|Grant all users the same baseline permissions|Different users have different responsibilities and may not require the same permissions.|
|**Grant only necessary permissions**|Directly follows the principle of least privilege.|

### **Exam Focus**

- **Minimum necessary permissions - Principle of Least Privilege**
- Permissions should be based on job responsibilities and requirements.
- Avoid unnecessary or excessive permissions.
- Applies to users, applications and AWS services.

## **7. Practice Question**

### **Question**

While making changes to AWS resources, such as adding a new Security Group ingress rule, an administrator wants to capture and record all these changes that will be helpful during an audit.

Which of the following AWS services can be used to achieve this?

### **Choices**

A. Amazon CloudWatch  
B. Amazon SQS  
C. AWS Trusted Advisor  
D. AWS Config

### **Answers**

**D. AWS Config**

### **Why**

**AWS Config** records configuration changes to supported AWS resources using a **configuration recorder**.

It allows organizations to track resource configuration history, assess compliance and review configuration changes during audits.

Configuration information can also be delivered to Amazon S3 for retention and future auditing.

The key clue is **recording changes to AWS resource configurations**.

|Choice|Explanation|
|---|---|
|Amazon CloudWatch|Monitors resource metrics, logs and operational performance rather than resource configuration history.|
|Amazon SQS|Provides message queues for decoupling application components and enabling asynchronous communication.|
|AWS Trusted Advisor|Provides resource optimization recommendations rather than recording configuration changes for auditing.|
|**AWS Config**|Records resource configurations, tracks configuration changes and helps assess compliance.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS Config**|What resource configuration changed?|
|**AWS CloudTrail**|Who performed the change?|
|**Amazon CloudWatch**|How is the resource performing?|
|**AWS Trusted Advisor**|How can the resource be optimized?|

**Resource configuration history and compliance - AWS Config**

## **8. Practice Question**

### **Question**

What is the purpose of having an Internet Gateway within a VPC?

### **Choices**

A. To load balance traffic from the internet across Amazon EC2 instances.  
B. To allow communication between the VPC and the internet.  
C. To create a VPN connection to the VPC.  
D. To impose bandwidth constraints on internet traffic.

### **Answers**

**B. To allow communication between the VPC and the internet.**

### **Why**

An **Internet Gateway (IGW)** is a VPC component that enables communication between resources within a VPC and the internet.

It supports inbound and outbound internet connectivity when the appropriate routing, addressing and security configurations are in place.

|Choice|Explanation|
|---|---|
|Load balance internet traffic|Elastic Load Balancing (ELB) distributes incoming traffic across multiple targets, such as EC2 instances.|
|**Allow communication between the VPC and the internet**|This is the primary purpose of an Internet Gateway.|
|Create a VPN connection|VPN connectivity can use a Virtual Private Gateway rather than an Internet Gateway.|
|Impose bandwidth constraints|An Internet Gateway is not designed to restrict internet traffic bandwidth.|

### **Exam Focus**

- **Connect a VPC to the internet - Internet Gateway (IGW)**
- **Distribute traffic across multiple EC2 instances - Elastic Load Balancing (ELB)**
- **VPN connectivity to a VPC - Virtual Private Gateway (VGW)**
- Attaching an Internet Gateway does not automatically make all VPC resources publicly accessible.

## **9. Practice Question**

### **Question**

An organization has a persistently high amount of throughput. It requires connectivity with no jitter and very low latency between its on-premises infrastructure and its AWS cloud to support live streaming and real-time services.

What is the MOST appropriate solution to meet this requirement?

### **Choices**

A. AWS Data Streams  
B. AWS Site-to-Site VPN  
C. AWS Direct Connect  
D. AWS Kinesis

### **Answers**

**C. AWS Direct Connect**

### **Why**

**AWS Direct Connect** establishes a dedicated network connection between an organization's on-premises infrastructure and AWS.

It provides more consistent network performance, high bandwidth and potentially lower latency compared to connections that travel over the public internet.

It is particularly suitable for workloads that require consistent network connectivity, high throughput and real-time communication.

|Choice|Explanation|
|---|---|
|Amazon Kinesis Data Streams|Collects and processes real-time streaming data. It does not establish dedicated network connectivity between on-premises infrastructure and AWS.|
|AWS Site-to-Site VPN|Provides encrypted connectivity between on-premises infrastructure and AWS, typically over the public internet, where network performance may fluctuate.|
|**AWS Direct Connect**|Provides dedicated network connectivity with more consistent bandwidth and network performance.|
|AWS Kinesis|Collects, processes and analyzes real-time streaming data rather than providing hybrid network connectivity.|

**Clarification:** AWS Direct Connect provides more consistent network performance but does not guarantee absolutely zero jitter or latency.

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS Direct Connect**|Dedicated network connection, high bandwidth, consistent network performance|
|**AWS Site-to-Site VPN**|Encrypted connectivity over the internet|
|**Amazon Kinesis**|Real-time streaming data collection and processing|

- **Dedicated connection between on-premises infrastructure and AWS - AWS Direct Connect**
- Distinguish **network connectivity** from **streaming data processing**.
- The mention of live streaming does not necessarily indicate Kinesis when the actual requirement is network connectivity.

## **10. Practice Question**

### **Question**

Which AWS service provides command-line access to AWS tools and resources directly from a web browser?

### **Choices**

A. Amazon WorkSpaces  
B. AWS Cloud Map  
C. AWS CloudShell  
D. AWS CloudHSM

### **Answers**

**C. AWS CloudShell**

### **Why**

**AWS CloudShell** is a browser-based, pre-authenticated shell accessible directly from the AWS Management Console.

It allows users to interact with AWS resources using command-line tools without installing or configuring those tools on their local machines.

AWS CloudShell comes preconfigured with commonly used tools such as the AWS CLI, Python and Git. It uses the user's existing AWS console authentication, eliminating the need to manually configure AWS credentials.

|Choice|Explanation|
|---|---|
|Amazon WorkSpaces|Provides fully managed virtual desktops rather than a dedicated browser-based AWS command-line environment.|
|AWS Cloud Map|Provides cloud resource and service discovery capabilities.|
|**AWS CloudShell**|Provides a browser-based, pre-authenticated command-line environment for interacting with AWS resources.|
|AWS CloudHSM|Provides hardware security modules for securely generating, storing and managing cryptographic keys.|

### **Exam Focus**

- **Browser-based command-line access - AWS CloudShell**
- **Pre-authenticated AWS CLI without local installation - AWS CloudShell**
- **Managed virtual desktops - Amazon WorkSpaces**
- **Cloud resource and service discovery - AWS Cloud Map**
- **Hardware-based cryptographic key management - AWS CloudHSM**

## **11. Practice Question**

### **Question**

What is a key advantage of a Multi-AZ deployment in AWS?

### **Choices**

A. Faster data retrieval for analytics  
B. Improved security of the application  
C. Reduced costs for storage  
D. Increased availability and fault tolerance

### **Answers**

**D. Increased availability and fault tolerance**

### **Why**

A **Multi-AZ deployment** distributes resources or replicates data across multiple Availability Zones within an AWS Region.

If one Availability Zone experiences a failure, resources in another Availability Zone can help maintain application availability.

|Choice|Explanation|
|---|---|
|Faster data retrieval for analytics|Multi-AZ primarily focuses on availability rather than analytics performance.|
|Improved security of the application|Security depends on application configuration, access permissions and infrastructure security controls.|
|Reduced costs for storage|Multi-AZ deployments typically increase costs due to additional resources and redundancy.|
|**Increased availability and fault tolerance**|Distributing resources across multiple Availability Zones reduces the impact of an Availability Zone failure.|

### **Exam Focus**

- **Multi-AZ deployment - High availability and fault tolerance**
- **Multiple Availability Zones - Protection against AZ failures**
- Redundancy reduces single points of failure. 
- Multi-AZ primarily improves availability rather than performance, security or cost.

## **12. Practice Question**

### **Question**

Which of the following AWS services is suitable to be used as a fully managed data warehouse?

### **Choices**

A. Amazon Redshift  
B. AWS Snowflake  
C. Amazon Athena  
D. Amazon S3

### **Answers**

**A. Amazon Redshift**

### **Why**

**Amazon Redshift** is a fully managed, petabyte-scale data warehouse service designed for large-scale data analytics.

It allows organizations to analyze large volumes of data and support business intelligence workloads.

|Choice|Explanation|
|---|---|
|**Amazon Redshift**|Fully managed data warehouse designed for large-scale analytics.|
|AWS Snowflake|Snowflake is a third-party data platform, not an AWS-native service called AWS Snowflake.|
|Amazon Athena|Serverless query service used to analyze data directly in Amazon S3 using SQL. It is not a data warehouse.|
|Amazon S3|Object storage service commonly used to build data lakes. It is not a data warehouse.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Fully managed data warehouse|**Amazon Redshift**|
|Petabyte-scale data analytics|**Amazon Redshift**|
|Query data directly in S3 using SQL|**Amazon Athena**|
|Object storage and data lakes|**Amazon S3**|

## **13. Practice Question**

### **Question**

Which of the following features of Amazon RDS allows for better availability of databases?

### **Choices**

A. Read Replicas  
B. Multi-AZ  
C. All-AZs  
D. One Zone database

### **Answers**

**B. Multi-AZ**

### **Why**

**Amazon RDS Multi-AZ** deployments use replication across multiple Availability Zones to improve database availability and protect against unplanned outages.

If the primary database becomes unavailable, Amazon RDS can automatically fail over to another database instance in a different Availability Zone.

|Choice|Explanation|
|---|---|
|Read Replicas|Primarily used to improve database read performance and scale read-intensive workloads.|
|**Multi-AZ**|Provides database redundancy, high availability and automatic failover.|
|All-AZs|There is no Amazon RDS deployment option called All-AZs.|
|One Zone database|A Single-AZ database does not provide protection against an Availability Zone failure through Multi-AZ redundancy.|

### **Exam Focus**

|Amazon RDS Feature|Primary Purpose|
|---|---|
|**Multi-AZ**|High availability and automatic failover|
|**Read Replicas**|Read scalability and improved read performance|
|**Single-AZ**|Database deployment within one Availability Zone|

- **Database availability and failover - RDS Multi-AZ**
- **Improve database read performance - RDS Read Replicas**

## **14. Practice Question**

### **Question**

Which support plan can be chosen to get an AWS Technical Account Manager to proactively monitor a business-critical application on AWS?

### **Choices**

A. Enterprise Plan  
B. Basic Plan  
C. Developer Plan  
D. Business Plan

### **Answers**

**A. Enterprise Plan**

### **Why**

**AWS Enterprise Support** provides access to a designated **Technical Account Manager (TAM)** who works proactively with customers to support their business-critical workloads.

A Technical Account Manager helps customers with application optimization, operational guidance, access to AWS programs and coordination of technical assistance from AWS experts.

|Choice|Explanation|
|---|---|
|**Enterprise Plan**|Provides a designated Technical Account Manager and proactive technical guidance for business-critical workloads.|
|Basic Plan|Free support plan that provides basic support, including account and billing assistance. It does not include a TAM.|
|Developer Plan|Designed for development, experimentation and testing workloads. It does not include a designated TAM.|
|Business Plan|Designed for production workloads requiring technical support. It does not include a designated TAM.|

### **Exam Focus**

|Support Plan|Exam Clue|
|---|---|
|**Basic**|Free account and billing support|
|**Developer**|Development and testing workloads|
|**Business**|Production workloads|
|**Enterprise**|Business-critical workloads and designated TAM|

**Designated Technical Account Manager (TAM) - AWS Enterprise Support**

## **15. Practice Question**

### **Question**

Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? **(Choose two.)**

### **Choices**

A. AWS Compute Optimizer  
B. Amazon CodeGuru  
C. AWS Cost Explorer  
D. Amazon SageMaker  
E. AWS Billing Conductor

### **Answers**

**A. AWS Compute Optimizer**
**C. AWS Cost Explorer**

### **Why**

**Rightsizing** involves selecting the appropriate resource type and size based on actual workload requirements to optimize performance and reduce unnecessary costs.

**AWS Compute Optimizer** analyzes resource configurations and historical utilization metrics using machine learning to recommend suitable AWS resources.

**AWS Cost Explorer** helps customers visualize and analyze AWS costs and usage, identify underutilized EC2 instances and discover cost-saving opportunities.

|Choice|Explanation|
|---|---|
|**AWS Compute Optimizer**|Analyzes resource utilization and recommends appropriate EC2 instance types and sizes.|
|Amazon CodeGuru|Provides recommendations for improving application code quality and identifying expensive code operations.|
|**AWS Cost Explorer**|Analyzes costs and usage to identify underutilized resources and rightsizing opportunities.|
|Amazon SageMaker|Provides capabilities for building, training and deploying machine learning models. It is not an EC2 rightsizing tool.|
|AWS Billing Conductor|Customizes billing data, cost allocation and reporting rather than analyzing resource utilization for rightsizing.|

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS Compute Optimizer**|Resource utilization analysis and rightsizing recommendations|
|**AWS Cost Explorer**|Cost and usage analysis|
|**Amazon CodeGuru**|Application code optimization|
|**Amazon SageMaker**|Machine learning|
|**AWS Billing Conductor**|Customized billing and cost allocation|

- **Recommend optimal EC2 instance types and sizes - AWS Compute Optimizer**
- **Identify cost-saving and underutilized resource opportunities - AWS Cost Explorer**
- **Match resource capacity to workload requirements - Rightsizing**

## **16. Practice Question**

### **Question**

A banking company runs its business-critical banking application from its on-premises data center.

Due to regulations requiring historical transaction data to be retained for 10 years, the company is looking to use the cloud for backing up its data. It is also considering moving some non-critical applications to the cloud.

Which of the following cloud computing models defines its deployment strategy?

### **Choices**

A. On-premises  
B. Public Cloud  
C. Hybrid Cloud  
D. Private Cloud

### **Answers**

**C. Hybrid Cloud**

### **Why**

A **Hybrid Cloud** combines on-premises infrastructure with cloud resources.

The company continues to operate its business-critical applications in its on-premises data center while using the cloud for backups and non-critical applications.

The key clue is the **combination of on-premises infrastructure and cloud resources**.

|Choice|Explanation|
|---|---|
|On-premises|Resources are hosted within the company's own infrastructure. This does not describe the combined use of on-premises and cloud resources.|
|Public Cloud|Resources are provided by a cloud service provider. This alone does not describe the company's combined deployment strategy.|
|**Hybrid Cloud**|Combines existing on-premises infrastructure with cloud resources.|
|Private Cloud|Cloud infrastructure dedicated to a single organization. It does not, by itself, describe the combined deployment strategy in this scenario.|

### **Exam Focus**

|Deployment Model|Description|
|---|---|
|**On-premises**|Infrastructure hosted and managed locally|
|**Public Cloud**|Resources provided by a cloud service provider|
|**Private Cloud**|Cloud infrastructure dedicated to one organization|
|**Hybrid Cloud**|Combination of on-premises infrastructure and cloud resources|

- **On-premises applications with cloud backups - Hybrid Cloud**
- **Retain existing infrastructure while migrating selected workloads to AWS - Hybrid Cloud**

## **17. Practice Question**

### **Question**

Your company operates an e-commerce website that was recently reported to have been attacked by hackers attempting to gain unauthorized access to company data.

As part of the security team, you have been asked to secure the website by adding protection against well-known web cyberattacks.

Which AWS service would you recommend?

### **Choices**

A. AWS Detective  
B. AWS Shield  
C. AWS Network Firewall  
D. AWS WAF (AWS Web Application Firewall)

### **Answers**

**D. AWS WAF (AWS Web Application Firewall)**

### **Why**

**AWS WAF** is a web application firewall that protects web applications against common web exploits and malicious HTTP and HTTPS requests.

It allows customers to monitor, filter and control access to web applications.

Common web attacks that AWS WAF can help protect against include:
- **SQL injection (SQLi)**
- **Cross-site scripting (XSS)**

AWS WAF can be deployed with services such as Amazon CloudFront and Application Load Balancer.

|Choice|Explanation|
|---|---|
|Amazon Detective|Investigates security findings and helps identify the root cause of suspicious activities rather than directly blocking web attacks.|
|AWS Shield|Protects applications and infrastructure against Distributed Denial of Service (DDoS) attacks.|
|AWS Network Firewall|Provides managed network firewall, intrusion detection and prevention capabilities for Amazon VPC. Its primary focus is network-level protection.|
|**AWS WAF**|Filters HTTP and HTTPS requests to protect web applications against common web exploits.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS WAF**|Web exploits, SQL injection, XSS, HTTP/HTTPS filtering|
|**AWS Shield**|DDoS protection|
|**AWS Network Firewall**|VPC network traffic inspection and protection|
|**Amazon Detective**|Security investigation and root cause analysis|

- **Protect web applications against common web attacks - AWS WAF**
- **Protect against DDoS attacks - AWS Shield**
- **Investigate detected security threats - Amazon Detective**
- **Inspect and protect VPC network traffic - AWS Network Firewall**

## **18. Practice Question**

### **Question**

A company is deploying a new two-tier web application in AWS. The company wants to store its most frequently used data to improve the response time of the application.

Which AWS service provides the caching solution for the company's requirements?

### **Choices**

A. Amazon RDS for MySQL with Multi-AZ  
B. MySQL installed on two Amazon EC2 instances in a single Availability Zone  
C. Amazon DynamoDB  
D. Amazon ElastiCache

### **Answers**

**D. Amazon ElastiCache**

### **Why**

**Amazon ElastiCache** is a managed in-memory data store and caching service that improves application performance by providing fast access to frequently accessed data.

Instead of repeatedly retrieving data from a disk-based database, applications can retrieve frequently accessed data from an **in-memory cache**, reducing latency and database workload.

The key clues are **frequently accessed data**, **improved response time** and **caching**.

|Choice|Explanation|
|---|---|
|Amazon RDS for MySQL with Multi-AZ|Provides a managed relational database with improved availability and redundancy. It is not a dedicated caching solution.|
|MySQL on two EC2 instances|Provides self-managed relational databases rather than a managed in-memory caching solution.|
|Amazon DynamoDB|Provides a low-latency NoSQL database but is not itself a dedicated caching service.|
|**Amazon ElastiCache**|Provides managed in-memory caching to improve application response times.|

**Amazon DynamoDB Accelerator (DAX)** is a caching service specifically designed for DynamoDB.

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon ElastiCache**|General-purpose in-memory caching|
|**Amazon DynamoDB Accelerator (DAX)**|In-memory caching specifically for DynamoDB|
|**Amazon DynamoDB**|Managed NoSQL database|
|**Amazon RDS Multi-AZ**|Relational database high availability|

- **Cache frequently accessed data - Amazon ElastiCache**
- **Reduce database workload and application latency - Amazon ElastiCache**
- **Caching specifically for DynamoDB - Amazon DAX**

## **19. Practice Question**

### **Question**

A file-sharing service uses Amazon S3 to store files uploaded by users. Files are accessed with random frequency. Popular files are downloaded every day, while others are accessed less often and some rarely.

What is the most cost-appropriate Amazon S3 object storage class for this requirement?

### **Choices**

A. Amazon S3 Glacier  
B. Amazon S3 One Zone-Infrequent Access  
C. Amazon S3 Intelligent-Tiering  
D. Amazon S3 Standard

### **Answers**

**C. Amazon S3 Intelligent-Tiering**

### **Why**

**Amazon S3 Intelligent-Tiering** is designed to automatically optimize storage costs when data access patterns are unknown, unpredictable or changing.

It monitors access patterns and automatically moves objects between appropriate access tiers.

Frequently accessed objects remain in a frequent access tier, while less frequently accessed objects can move to lower-cost storage tiers.

This reduces storage costs without requiring customers to manually determine the access frequency of individual objects.

|Choice|Explanation|
|---|---|
|Amazon S3 Glacier|Designed primarily for archival and infrequently accessed data. It is not ideal for a mixture of frequently and unpredictably accessed files.|
|Amazon S3 One Zone-IA|Designed for infrequently accessed data stored in a single Availability Zone. Retrieval charges make it less suitable for frequently accessed files.|
|**Amazon S3 Intelligent-Tiering**|Automatically optimizes storage costs based on changing or unknown access patterns.|
|Amazon S3 Standard|Designed for frequently accessed data. It may be unnecessarily expensive for objects that are rarely accessed.|

### **Exam Focus**

|S3 Storage Class|Exam Clue|
|---|---|
|**S3 Standard**|Frequently accessed data|
|**S3 One Zone-IA**|Infrequently accessed, reproducible data stored in one AZ|
|**S3 Intelligent-Tiering**|Unknown, unpredictable or changing access patterns|
|**S3 Glacier**|Archival and rarely accessed data|

- **Unknown access patterns - S3 Intelligent-Tiering**
- **Automatically optimize storage costs based on access frequency - S3 Intelligent-Tiering**
- **Frequently accessed data - S3 Standard**
- **Long-term archival - S3 Glacier**

**Clarification:** Not all S3 Glacier storage classes require delayed retrieval. S3 Glacier Instant Retrieval provides immediate access to archival data.

## **20. Practice Question**

### **Question**

An e-commerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud.

Which cost is the company's direct responsibility?

### **Choices**

A. Cost of the hardware infrastructure on AWS  
B. Cost of application software licenses  
C. Cost of physical security for the AWS data center  
D. Cost of support engineers for managing AWS servers

### **Answers**

**B. Cost of application software licenses**

### **Why**

When a company migrates to AWS, AWS assumes responsibility for owning, operating and maintaining the underlying cloud infrastructure.

The customer remains responsible for its applications and applicable software licensing costs.

Although customers pay for the consumption of AWS resources, they do not directly purchase or maintain the underlying physical infrastructure.

This distinction is related to the **AWS Shared Responsibility Model** and the cloud computing benefit of replacing upfront infrastructure expenses with variable expenses.

|Choice|Explanation|
|---|---|
|Cost of hardware infrastructure|AWS owns and maintains the underlying physical hardware. Customers pay for resource usage rather than directly purchasing the hardware.|
|**Cost of application software licenses**|Customers are responsible for applicable licensing costs associated with their applications.|
|Cost of physical data center security|AWS is responsible for maintaining the physical security of its data centers.|
|Cost of support engineers managing AWS servers|AWS is responsible for the personnel required to operate and maintain its underlying physical servers.|

### **Exam Focus**

|Responsibility|Responsible Party|
|---|---|
|Physical servers and hardware|**AWS**|
|Physical data center security|**AWS**|
|Underlying infrastructure maintenance|**AWS**|
|Application software licenses|**Customer**|
|Application management|**Customer**|
|AWS resource consumption charges|**Customer**|

- **Security of the cloud - AWS**
- **Security in the cloud - Customer**
- **Application software licensing costs - Customer**
- **Physical infrastructure ownership and maintenance - AWS**
- **Replace capital expenditure (CapEx) with variable expenditure - Cloud computing benefit**

**Important distinction:** AWS bears the direct cost of owning and maintaining its physical infrastructure, while customers pay for consuming AWS services. The Shared Responsibility Model primarily defines security and operational responsibilities rather than billing arrangements.

## **21. Practice Question**

### **Question**

Which of the following is a customer responsibility under the AWS Shared Responsibility Model?

### **Choices**

A. Physical security of the facilities.  
B. Patching of host OS deployed on Amazon S3.  
C. Logical access controls for underlying infrastructure.  
D. Patching of guest OS deployed on Amazon EC2 instance.

### **Answers**

**D. Patching of guest OS deployed on Amazon EC2 instance.**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS is responsible for the **security of the cloud**, while customers are responsible for **security in the cloud**.

When using Amazon EC2, customers are responsible for managing and patching the guest operating system, installed applications and security configurations.

|Choice|Explanation|
|---|---|
|Physical security of the facilities|AWS is responsible for securing its physical data centers.|
|Patching of host OS on Amazon S3|AWS manages and maintains the underlying infrastructure of Amazon S3.|
|Logical access controls for underlying infrastructure|AWS is responsible for securing access to its underlying cloud infrastructure.|
|**Patching of EC2 guest OS**|Customers are responsible for maintaining and patching the operating systems running on their EC2 instances.|

### **Exam Focus**

|Responsibility|Responsible Party|
|---|---|
|Physical data center security|**AWS**|
|Underlying hardware and networking|**AWS**|
|Host operating system|**AWS**|
|EC2 guest operating system|**Customer**|
|EC2 application patching|**Customer**|
|Customer data and access permissions|**Customer**|

- **Security of the cloud - AWS**
- **Security in the cloud - Customer**
- **EC2 guest OS patching - Customer responsibility**
- Customer responsibilities vary depending on the AWS service being used.

## **22. Practice Question**

### **Question**

Which of the following security services can be used to detect users' personal credit card numbers from data stored in Amazon S3?

### **Choices**

A. AWS Shield  
B. Amazon Macie  
C. Amazon GuardDuty  
D. Amazon Inspector

### **Answers**

**B. Amazon Macie**

### **Why**

**Amazon Macie** is a managed data security service that discovers sensitive data stored in Amazon S3.

It helps identify sensitive information such as:
- Personally Identifiable Information (PII)
- Credit card numbers
- Names
- Sensitive credentials

The key clue is **detecting sensitive personal information stored in Amazon S3**.

|Choice|Explanation|
|---|---|
|AWS Shield|Protects applications and infrastructure against Distributed Denial of Service (DDoS) attacks.|
|**Amazon Macie**|Discovers sensitive data and personally identifiable information stored in Amazon S3.|
|Amazon GuardDuty|Detects malicious activity and potential security threats by analyzing AWS activity and network data. It is not designed to classify sensitive data stored in S3 objects.|
|Amazon Inspector|Identifies software vulnerabilities and security exposures in workloads rather than discovering sensitive personal information in S3.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon Macie**|Sensitive data, PII, credit card numbers in S3|
|**Amazon GuardDuty**|Threat detection and malicious activity|
|**Amazon Inspector**|Software vulnerabilities and security exposures|
|**AWS Shield**|DDoS protection|

**Discover sensitive information stored in Amazon S3 - Amazon Macie**

## **23. Practice Question**

### **Question**

What is the primary benefit of AWS Auto Scaling?

### **Choices**

A. Scale the EC2 instances vertically as demand increases.  
B. Automatically adjusts capacity of resources (e.g. EC2 instances) to maintain required performance, thereby optimizing costs.  
C. Replaces faulty EC2 instances.  
D. Enables manual adjustment of resources (e.g. EC2 instances).

### **Answers**

**B. Automatically adjusts capacity of resources (e.g. EC2 instances) to maintain required performance, thereby optimizing costs.**

### **Why**

**AWS Auto Scaling** automatically adjusts resource capacity in response to changing workload demands.

For Amazon EC2, Auto Scaling can increase the number of instances when demand increases and decrease the number of instances when demand decreases.

This helps maintain application performance while avoiding unnecessary resource costs.

|Choice|Explanation|
|---|---|
|Scale EC2 instances vertically|EC2 Auto Scaling primarily performs horizontal scaling by adding or removing instances rather than resizing existing instances.|
|**Automatically adjust resource capacity**|Maintains application performance and optimizes costs by matching capacity to demand.|
|Replace faulty EC2 instances|EC2 Auto Scaling can replace unhealthy instances, but this is not the primary benefit being tested.|
|Enable manual resource adjustment|Auto Scaling is designed to automate capacity adjustments rather than rely on manual intervention.|

### **Exam Focus**

|Scaling Type|Description|
|---|---|
|**Horizontal Scaling (Scale Out/In)**|Increase or decrease the number of instances.|
|**Vertical Scaling (Scale Up/Down)**|Increase or decrease the capacity of an individual instance.|

- **Automatically adjust capacity based on demand - AWS Auto Scaling**
- **Add or remove EC2 instances - Amazon EC2 Auto Scaling**
- **Replace unhealthy EC2 instances - Amazon EC2 Auto Scaling**
- **Match resource capacity to fluctuating demand - Elasticity**

## **24. Practice Question**

### **Question**

Which of the following statements is **incorrect** for NoSQL databases like Amazon DynamoDB?

### **Choices**

A. They are not relational.  
B. They need to have a well-defined schema.  
C. Amazon DynamoDB is a NoSQL database that supports atomicity, consistency, isolation and durability (ACID) transactions.  
D. NoSQL databases are horizontally scalable.

### **Answers**

**B. They need to have a well-defined schema.**

### **Why**

**Amazon DynamoDB** is a NoSQL database that supports a flexible schema rather than requiring every item to have the same predefined set of attributes.

Unlike traditional relational databases, NoSQL databases such as DynamoDB allow records to contain different attributes.

|Choice|Explanation|
|---|---|
|They are not relational|True. NoSQL databases do not follow the traditional relational database model.|
|**They need to have a well-defined schema**|False. DynamoDB supports flexible item attributes without requiring a rigid schema for every item.|
|DynamoDB supports ACID transactions|True. DynamoDB supports ACID transactions for applications requiring transactional operations.|
|NoSQL databases are horizontally scalable|True as a general characteristic of distributed NoSQL databases such as DynamoDB.|

**Clarification:** DynamoDB still requires a defined primary key. A flexible schema does not mean that no database structure is required.

### **Exam Focus**

|Characteristic|Relational Database|DynamoDB (NoSQL)|
|---|---|---|
|Data model|Relational tables|Key-value and document|
|Schema|Generally predefined|Flexible attributes|
|Horizontal scaling|Depends on database architecture|Supported|
|ACID transactions|Supported|Supported|

- **Managed NoSQL database - Amazon DynamoDB**
- **Flexible schema - NoSQL**
- **Horizontal scalability - Amazon DynamoDB**
- DynamoDB supports **ACID transactions** despite being a NoSQL database.
- Pay attention to questions asking for the **incorrect** statement.

## **25. Practice Question**

### **Question**

What is the Amazon S3 feature that enables fast, easy and secure transfers of files over long distances between your client and your Amazon S3 bucket, and allows you to test the transfer speed using an AWS-provided website?

### **Choices**

A. Amazon S3 File Transfer  
B. Amazon S3 Quick Access  
C. Amazon S3 Transfer Acceleration  
D. Amazon S3 HTTP Transfer

### **Answers**

**C. Amazon S3 Transfer Acceleration**

### **Why**

**Amazon S3 Transfer Acceleration** enables fast and secure file transfers over long distances between clients and Amazon S3 buckets.

It uses Amazon CloudFront's globally distributed **edge locations**. When data reaches an edge location, it is routed to Amazon S3 through an optimized network path.

AWS also provides a transfer acceleration speed comparison tool to help evaluate potential performance improvements.

|Choice|Explanation|
|---|---|
|Amazon S3 File Transfer|Not the Amazon S3 feature used to accelerate long-distance file transfers.|
|Amazon S3 Quick Access|There is no Amazon S3 feature with this name.|
|**Amazon S3 Transfer Acceleration**|Uses globally distributed edge locations and optimized network paths to accelerate long-distance S3 transfers.|
|Amazon S3 HTTP Transfer|Represents regular HTTP-based transfers without the specific acceleration capabilities.|

### **Exam Focus**

- **Accelerate long-distance file transfers to S3 - S3 Transfer Acceleration**
- **Globally distributed edge locations - Amazon CloudFront**
- **Optimized network path for S3 transfers - S3 Transfer Acceleration**
- **Compare accelerated and regular transfer speeds - S3 Transfer Acceleration speed comparison tool**

## **26. Practice Question**

### **Question**

In the AWS Cloud Adoption Framework (CAF), which perspective focuses on managing user identities and setting up the right permissions for the right users?

### **Choices**

A. Security Perspective  
B. Governance Perspective  
C. Platform Perspective  
D. Business Perspective

### **Answers**

**A. Security Perspective**

### **Why**

The **Security Perspective** of the AWS Cloud Adoption Framework (AWS CAF) focuses on protecting an organization's data, systems and workloads in the cloud.

It includes managing user identities, controlling access and ensuring that users receive appropriate permissions.

The key clue is **identity and access management at scale**.

|Choice|Explanation|
|---|---|
|**Security Perspective**|Focuses on security controls, identity management and access permissions.|
|Governance Perspective|Focuses on managing risks, maintaining compliance and governing cloud adoption.|
|Platform Perspective|Focuses on designing, implementing and managing cloud infrastructure and platforms.|
|Business Perspective|Ensures cloud adoption aligns with organizational goals and delivers business value, such as improved ROI and customer experiences.|

### **Exam Focus**

|AWS CAF Perspective|Exam Clue|
|---|---|
|**Security**|Identity management, access permissions and security controls|
|**Governance**|Risk management, compliance and governance|
|**Platform**|Cloud architecture and infrastructure|
|**Business**|Business value, ROI and organizational objectives|

**Manage user identities and access permissions - AWS CAF Security Perspective**

## **27. Practice Question**

### **Question**

You need a flexible, customizable approach to define and deploy cloud infrastructure using your preferred programming language.

Which AWS service should you choose?

### **Choices**

A. AWS CDK  
B. AWS CloudFormation  
C. AWS Elastic Beanstalk  
D. Amazon Lightsail

### **Answers**

**A. AWS CDK**

### **Why**

The **AWS Cloud Development Kit (AWS CDK)** is an open-source software development framework that allows developers to define cloud infrastructure using familiar programming languages, such as:
- Python
- JavaScript
- Java

AWS CDK supports **Infrastructure as Code (IaC)** and generates AWS CloudFormation templates to provision and deploy infrastructure.

The key clue is **defining cloud infrastructure using programming languages**.

|Choice|Explanation|
|---|---|
|**AWS CDK**|Defines cloud infrastructure using familiar programming languages and deploys it through AWS CloudFormation.|
|AWS CloudFormation|Defines and provisions infrastructure using declarative templates, typically written in JSON or YAML.|
|AWS Elastic Beanstalk|Simplifies application deployment and automatically manages underlying infrastructure rather than providing a general-purpose infrastructure development framework.|
|Amazon Lightsail|Provides simplified cloud resources for websites and applications rather than advanced infrastructure customization through programming languages.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS CDK**|Infrastructure as Code using programming languages|
|**AWS CloudFormation**|Infrastructure as Code using JSON or YAML templates|
|**AWS Elastic Beanstalk**|Automated application deployment and infrastructure management|
|**Amazon Lightsail**|Simplified cloud hosting|

- **Define infrastructure using Python, JavaScript or Java - AWS CDK**
- **Define infrastructure using declarative templates - AWS CloudFormation**
- AWS CDK generates CloudFormation templates for infrastructure deployment.

## **28. Practice Question**

### **Question**

What is the ability of AWS products and services to recover from disruptions and mitigate disruptions known as?

### **Choices**

A. Resiliency  
B. Latency  
C. Durability  
D. Consistency

### **Answers**

**A. Resiliency**

### **Why**

**Resiliency** is the ability of a system or workload to recover from disruptions and minimize their impact.

A resilient cloud architecture is designed to handle failures and restore normal operations when unexpected disruptions occur.

|Choice|Explanation|
|---|---|
|**Resiliency**|Ability to recover from disruptions and mitigate their impact.|
|Latency|Measures the delay involved in processing a request or transferring data.|
|Durability|Refers to the ability to preserve data over time and protect it against loss.|
|Consistency|Refers to the correctness and visibility of data across operations or distributed systems.|

**Clarification:** Durability, particularly in AWS storage scenarios, refers to protection against data loss rather than the ability of an application to remain operational during disruptions.

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**Resiliency**|Recover from disruptions and failures|
|**High Availability**|Minimize downtime and maintain service availability|
|**Fault Tolerance**|Continue operating despite component failures|
|**Durability**|Protect data against loss|
|**Latency**|Time delay or response time|
|**Consistency**|Correctness and visibility of data|

- **Recover from disruptions - Resiliency**
- **Continue operating during component failures - Fault Tolerance**
- **Protect stored data against loss - Durability**

## **29. Practice Question**

### **Question**

What is elasticity in cloud computing?

### **Choices**

A. The ability to ensure data redundancy.  
B. The ability to automatically adjust resources to meet fluctuating demand.  
C. The ability to store data across multiple locations.  
D. The ability to reduce costs by purchasing upfront capacity.

### **Answers**

**B. The ability to automatically adjust resources to meet fluctuating demand.**

### **Why**

**Elasticity** is the ability to dynamically increase or decrease resource capacity to match changing workload demands.

For example, an e-commerce application can automatically add EC2 instances during a period of high customer demand and remove instances when demand decreases.

This helps maintain application performance while avoiding the cost of unused resources.

|Choice|Explanation|
|---|---|
|Ensure data redundancy|Relates to maintaining additional copies of data to improve durability and availability.|
|**Automatically adjust resources to meet fluctuating demand**|Directly describes elasticity.|
|Store data across multiple locations|Relates to data replication, redundancy and availability rather than elasticity.|
|Reduce costs by purchasing upfront capacity|Relates to commitment-based pricing options such as Reserved Instances rather than elasticity.|

### **Exam Focus**

|Concept|Description|
|---|---|
|**Elasticity**|Dynamically increase or decrease resources according to demand.|
|**Scalability**|Ability to handle changing workload requirements by adjusting resource capacity.|
|**Redundancy**|Maintain additional resources or copies to reduce the impact of failures.|
|**Replication**|Copy data across resources or locations.|
|**Durability**|Protect data against loss.|

- **Automatically match capacity to fluctuating demand - Elasticity**
- **Handle increasing workload requirements - Scalability**
- **Automatically add or remove EC2 instances - Amazon EC2 Auto Scaling**
- **Avoid overprovisioning and underprovisioning - Elasticity**

## **30. Practice Question**

### **Question**

A company is running a monolithic on-premises application that does not scale and is difficult to maintain.

The company plans to migrate the application to AWS and divide the application into microservices.

Which best practice of the AWS Well-Architected Framework is the company following with this plan?

### **Choices**

A. Use automation to deploy changes.  
B. Deploy the application to multiple locations.  
C. Implement loosely coupled dependencies.  
D. Integrate functional testing as part of AWS deployment.

### **Answers**

**C. Implement loosely coupled dependencies.**

### **Why**

**Loose coupling** is an architectural design principle that minimizes dependencies between application components.

By decomposing a monolithic application into **microservices**, individual components can operate more independently and communicate through well-defined APIs.

A loosely coupled microservices architecture allows individual components to be independently:

- Developed and maintained
- Updated and deployed
- Scaled according to demand
- Replaced with minimal impact on other components

This improves application scalability, maintainability and resiliency.

|Choice|Explanation|
|---|---|
|Use automation to deploy changes|Improves deployment efficiency and consistency but does not directly address the architectural limitations of a monolithic application.|
|Deploy the application to multiple locations|Improves availability and resiliency but does not reduce dependencies between application components.|
|**Implement loosely coupled dependencies**|Reduces dependencies between components and allows individual microservices to be maintained and scaled independently.|
|Integrate functional testing|Helps validate application functionality but does not directly resolve the scalability and maintainability limitations of a monolithic architecture.|

### **Exam Focus**

|Characteristic|Monolithic Architecture|Microservices Architecture|
|---|---|---|
|Application structure|Single integrated application|Multiple independent services|
|Dependencies|Generally tightly coupled|Designed to be loosely coupled|
|Scaling|Typically scale the entire application|Scale individual services|
|Deployment|Typically deploy the entire application|Independently deploy services|
|Maintenance|Changes may affect the entire application|Changes can be isolated to individual services|
|Failure impact|Failures may affect the entire application|Failures can be better isolated|

- **Reduce dependencies between application components - Loose Coupling**
- **Divide a monolithic application into independent services - Microservices**
- **Scale individual application components independently - Microservices**
- **Minimize the impact of component failures - Loose Coupling**
- Loose coupling is an important architectural best practice under the **AWS Well-Architected Framework**, particularly the **Reliability pillar**.

## **31. Practice Question**

### **Question**

Which of the following are benefits of using AWS Trusted Advisor? **(Choose two.)**

### **Choices**

A. Creating and rotating encryption keys  
B. Improving security by proactively monitoring the AWS environment  
C. Detecting underutilized resources to save costs  
D. Providing high-performance container orchestration  
E. Implementing enforced tagging across AWS resources

### **Answers**

**B. Improving security by proactively monitoring the AWS environment**
**C. Detecting underutilized resources to save costs**

### **Why**

**AWS Trusted Advisor** evaluates AWS environments and provides recommendations to help customers follow AWS best practices.

It helps customers improve security and optimize costs by identifying issues such as:
- Exposed access keys
- Overly permissive security groups
- Underutilized EC2 instances
- Underutilized EBS volumes

|Choice|Explanation|
|---|---|
|Creating and rotating encryption keys|Encryption key management is handled by services such as AWS Key Management Service (AWS KMS) and AWS CloudHSM.|
|**Improving security**|Trusted Advisor identifies potential security issues and recommends improvements.|
|**Detecting underutilized resources**|Trusted Advisor identifies cost-saving opportunities through resource utilization checks.|
|Container orchestration|Handled by Amazon ECS and Amazon EKS. AWS Fargate provides serverless compute for containers.|
|Enforcing resource tagging|Trusted Advisor provides checks and recommendations rather than enforcing tagging policies. Tag governance can be managed through AWS Organizations.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS Trusted Advisor**|AWS best practices and optimization recommendations|
|**AWS KMS**|Encryption key management|
|**AWS CloudHSM**|Hardware-based encryption key management|
|**Amazon ECS / EKS**|Container orchestration|
|**AWS Organizations**|Centralized account management and policy governance|

Common AWS Trusted Advisor recommendation categories include:
- **Cost Optimization**
- **Performance**
- **Security**
- **Fault Tolerance**
- **Service Limits**

**Important distinction:** Trusted Advisor identifies issues and recommends improvements rather than directly enforcing security or resource management policies.

## **32. Practice Question**

### **Question**

Which of the following services can be used to automate software deployments on a large number of Amazon EC2 instances and on-premises servers?

### **Choices**

A. AWS Config  
B. AWS CodePipeline  
C. AWS CloudFormation  
D. AWS CodeDeploy

### **Answers**

**D. AWS CodeDeploy**

### **Why**

**AWS CodeDeploy** is a managed deployment service that automates software deployments across compute resources, including Amazon EC2 instances and on-premises servers.

It reduces the manual effort required to deploy and update applications across large numbers of servers.

The key clue is **automating software deployments across EC2 instances and on-premises servers**.

|Choice|Explanation|
|---|---|
|AWS Config|Records AWS resource configurations and configuration changes for auditing and compliance.|
|AWS CodePipeline|Automates and orchestrates the application release pipeline, including build, testing and deployment stages.|
|AWS CloudFormation|Automates infrastructure provisioning and updates using Infrastructure as Code (IaC).|
|**AWS CodeDeploy**|Automates application and software deployments to compute resources.|

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS CodeDeploy**|Automated software deployment|
|**AWS CodePipeline**|Automated CI/CD release pipelines|
|**AWS CloudFormation**|Automated infrastructure provisioning|
|**AWS Config**|Resource configuration history and compliance|

- **Deploy software across EC2 and on-premises servers - AWS CodeDeploy**
- **Orchestrate the entire software release process - AWS CodePipeline**
- **Provision infrastructure using templates - AWS CloudFormation**

## **33. Practice Question**

### **Question**

Which of the following statements regarding billing, cost optimization and cost management in AWS is accurate?

### **Choices**

A. When using Savings Plans, 72% savings can be made on Amazon EC2, AWS Fargate and AWS Lambda usage.  
B. The AWS Pricing Calculator will work out a revised bill that can reduce the overall spend by 60% if you commit to a long-term usage plan.  
C. When considering migrating to the cloud, the AWS Total Cost of Ownership (TCO) calculator is guaranteed to save up to 80% of the cost of running on-premises infrastructure.  
D. In AWS Budgets, utilizing Cost and Usage budgets will optimize and reduce the overall spend by 79%.

### **Answers**

**A. When using Savings Plans, 72% savings can be made on Amazon EC2, AWS Fargate and AWS Lambda usage.**

### **Why**

**AWS Savings Plans** are flexible pricing models that provide discounted rates in exchange for committing to a consistent amount of usage, measured in dollars per hour, for a **one-year or three-year term**.

Savings Plans can reduce eligible compute costs compared to On-Demand pricing.

|Choice|Explanation|
|---|---|
|**AWS Savings Plans**|Provides discounted pricing in exchange for a consistent usage commitment.|
|AWS Pricing Calculator|Estimates AWS resource costs before they are incurred. It does not revise bills or guarantee a specific percentage of savings.|
|AWS TCO Calculator|Estimates and compares infrastructure costs. It does not guarantee migration savings.|
|AWS Budgets|Helps customers establish cost and usage budgets and receive alerts. It does not automatically guarantee a specific reduction in spending.|

**Clarification:** The question simplifies Savings Plans discounts. The maximum discount of up to 72% is associated with EC2 Instance Savings Plans, while Compute Savings Plans cover EC2, Fargate and Lambda with different potential savings. Savings are not guaranteed at a fixed percentage.

### **Exam Focus**

|Service or Pricing Model|Exam Clue|
|---|---|
|**AWS Savings Plans**|Discounted rates with a one-year or three-year usage commitment|
|**AWS Pricing Calculator**|Estimate costs before deploying resources|
|**AWS TCO Calculator**|Compare on-premises and cloud infrastructure costs|
|**AWS Budgets**|Set spending and usage thresholds and receive alerts|

- **Commit to consistent compute spending - AWS Savings Plans**
- **Estimate future AWS costs - AWS Pricing Calculator**
- **Monitor spending against a defined budget - AWS Budgets**
- Cost estimation and monitoring tools do not guarantee a fixed percentage of savings.

## **34. Practice Question**

### **Question**

What are the main benefits of cloud computing?

### **Choices**

A. Scalability, elasticity and reduced upfront capital expenses  
B. Dedicated hardware, low-latency connections and one-time fixed upfront cost  
C. Fixed infrastructure costs, security and agility  
D. Fixed pricing, local data centers and reliability

### **Answers**

**A. Scalability, elasticity and reduced upfront capital expenses**

### **Why**

Cloud computing allows organizations to provision resources on demand without purchasing and maintaining their own physical infrastructure.

Key benefits include:
- **Scalability** - Adjust resource capacity to handle changing workload requirements.
- **Elasticity** - Dynamically increase or decrease resource capacity according to demand.
- **Reduced upfront capital expenses** - Avoid large initial investments in physical infrastructure.
- **Pay-as-you-go pricing** - Pay for resources according to consumption.

|Choice|Explanation|
|---|---|
|**Scalability, elasticity and reduced upfront capital expenses**|Represents fundamental benefits of cloud computing.|
|Dedicated hardware, low latency and fixed upfront cost|Dedicated hardware is optional, and cloud computing generally reduces the need for large upfront infrastructure investments.|
|Fixed infrastructure costs, security and agility|Security and agility are benefits, but cloud infrastructure costs are generally variable based on usage.|
|Fixed pricing, local data centers and reliability|AWS provides global infrastructure and consumption-based pricing rather than being limited to local data centers and fixed costs.|

### **Exam Focus**

|Cloud Benefit|Description|
|---|---|
|**Scalability**|Handle changing workload requirements.|
|**Elasticity**|Dynamically match resource capacity to demand.|
|**Agility**|Quickly provision resources and experiment.|
|**Economies of Scale**|Benefit from lower variable costs due to large-scale cloud operations.|
|**Pay-as-you-go**|Pay based on resource consumption.|
|**Global Reach**|Deploy applications worldwide.|

- **Trade fixed expenses for variable expenses - Cloud computing**
- **Avoid large upfront infrastructure investments - Reduced CapEx**
- **Stop guessing capacity - Elasticity**
- **Increase speed and agility - On-demand resource provisioning**

## **35. Practice Question**

### **Question**

Which AWS service provides infrastructure security optimization recommendations?

### **Choices**

A. AWS Security Evaluator  
B. AWS Security Police  
C. Amazon GuardDuty  
D. AWS Trusted Advisor

### **Answers**

**D. AWS Trusted Advisor**

### **Why**

**AWS Trusted Advisor** evaluates AWS resources against AWS best practices and provides recommendations for improving an organization's cloud environment.

Its security checks help identify potential security weaknesses and recommend corrective actions.

The key clue is **infrastructure security optimization recommendations**, rather than detecting active security threats.

|Choice|Explanation|
|---|---|
|AWS Security Evaluator|Not an official AWS service under this name.|
|AWS Security Police|Not an official AWS service under this name.|
|Amazon GuardDuty|An intelligent threat detection service that identifies malicious activity and potential security threats. Its primary purpose is threat detection rather than general infrastructure optimization.|
|**AWS Trusted Advisor**|Provides recommendations to improve AWS infrastructure according to AWS best practices.|

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS Trusted Advisor**|Security and resource optimization recommendations|
|**Amazon GuardDuty**|Intelligent threat detection|
|**Amazon Inspector**|Software vulnerability management|
|**Amazon Macie**|Sensitive data discovery in Amazon S3|

- **Recommend improvements based on AWS best practices - AWS Trusted Advisor**
- **Identify suspicious or malicious activity - Amazon GuardDuty**
- **Identify software vulnerabilities - Amazon Inspector**
- **Discover sensitive data in S3 - Amazon Macie**

## **36. Practice Question**

### **Question**

A professional educational institution maintains an application that hosts an exam results portal for its students.

The resource is idle for most of the learning cycle and becomes excessively busy when exam results are released.

How can this architecture be improved to be cost-efficient?

### **Choices**

A. Configure RDS Multi-Availability Zone for performance optimization.  
B. Migrate the web servers onto Amazon EC2 Spot Instances.  
C. Configure serverless architecture leveraging AWS Lambda functions.  
D. Configure AWS Elastic Load Balancing between the web server and database cluster.

### **Answers**

**C. Configure serverless architecture leveraging AWS Lambda functions.**

### **Why**

**AWS Lambda** is a serverless compute service that allows customers to run code without provisioning or managing servers.

It is particularly suitable for workloads that have **intermittent, unpredictable or fluctuating demand**.

In this scenario, the exam results portal:
- Remains idle for extended periods.
- Experiences sudden traffic spikes when exam results are released.
- Requires automatic scaling during periods of high demand.

AWS Lambda automatically scales execution capacity according to incoming requests. With standard on-demand execution, customers pay for requests and compute duration rather than continuously maintaining idle servers.

|Choice|Explanation|
|---|---|
|Amazon RDS Multi-AZ|Improves database availability and failover capabilities but does not directly address the cost of maintaining idle web servers.|
|Amazon EC2 Spot Instances|Provides discounted access to unused EC2 capacity, but instances can be interrupted by AWS. This introduces availability risks during important traffic spikes.|
|**AWS Lambda**|Provides serverless compute, automatic scaling and usage-based pricing, making it suitable for intermittent workloads.|
|Elastic Load Balancing|Distributes traffic across targets but does not eliminate the cost of maintaining idle compute resources. It also introduces additional load balancing costs.|

### **Exam Focus**

|Compute Option|Suitable Workload|
|---|---|
|**AWS Lambda**|Event-driven, intermittent and unpredictable workloads|
|**EC2 On-Demand Instances**|Flexible workloads without long-term commitments|
|**EC2 Spot Instances**|Interruptible and fault-tolerant workloads|
|**Savings Plans / Reserved Instances**|Predictable, consistent workloads|
|**Elastic Load Balancing**|Distributing incoming application traffic|

- **Long idle periods with sudden traffic spikes - AWS Lambda**
- **Run code without provisioning servers - AWS Lambda**
- **Pay for code execution rather than continuously running servers - AWS Lambda**
- **Discounts of up to 90% with interruption risk - EC2 Spot Instances**
- Spot Instances are best suited to workloads that can tolerate interruptions.

## **37. Practice Question**

### **Question**

You are the architect of a custom application running inside your corporate data center. The application runs with some unresolved bugs that produce a large amount of data inside custom log files, generating time-consuming activities for the operations team responsible for analyzing them.

You want to move the application to AWS using EC2 instances. At the same time, you want to improve logging and monitoring capabilities without modifying the application code.

What AWS service should you use to satisfy the requirement?

### **Choices**

A. Amazon CloudWatch  
B. AWS CloudTrail  
C. Amazon Kinesis Data Firehose  
D. AWS Kinesis Data Streams

### **Answers**

**A. Amazon CloudWatch**

### **Why**

**Amazon CloudWatch** provides monitoring, logging and operational visibility for AWS resources and applications.

**Amazon CloudWatch Logs** can collect existing application log files from EC2 instances using the CloudWatch agent without requiring changes to the application source code.

Collected logs can be used for:
- Centralized log management
- Log analysis using CloudWatch Logs Insights
- Generating metrics from log data
- Creating alarms and alerts
- Application troubleshooting

The key clues are **existing application log files**, **logging and monitoring** and **without modifying application code**.

|Choice|Explanation|
|---|---|
|**Amazon CloudWatch**|Collects, monitors and analyzes application logs, metrics and operational data.|
|AWS CloudTrail|Records AWS API calls and account activity for auditing. It is not primarily used for collecting custom application logs.|
|Amazon Kinesis Data Firehose|Delivers streaming data to destinations such as Amazon S3 and Amazon Redshift rather than primarily providing application log monitoring and analysis.|
|Amazon Kinesis Data Streams|Collects and processes real-time streaming data. It would require additional data ingestion and processing arrangements rather than providing the direct log monitoring solution required.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon CloudWatch**|Resource monitoring, metrics, logs and alarms|
|**CloudWatch Logs**|Collect and store application logs|
|**CloudWatch Logs Insights**|Query and analyze log data|
|**AWS CloudTrail**|AWS API activity and account auditing|
|**Amazon Data Firehose**|Deliver streaming data to destinations|
|**Amazon Kinesis Data Streams**|Real-time streaming data ingestion and processing|

- **Collect existing application log files from EC2 - CloudWatch Logs**
- **Search and analyze application logs - CloudWatch Logs Insights**
- **Monitor resource performance and generate alarms - Amazon CloudWatch**
- **Identify who performed AWS API actions - AWS CloudTrail**

**Important distinction:** A large volume of application logs does not necessarily indicate a Kinesis use case. When the requirement is application monitoring, logging and troubleshooting, Amazon CloudWatch is the more appropriate service.

_Terminology note: Amazon Kinesis Data Firehose is now known as Amazon Data Firehose._

## **38. Practice Question**

### **Question**

Which service can be used to download AWS security and compliance documents?

### **Choices**

A. AWS Well-Architected Tool  
B. AWS Trusted Advisor  
C. AWS Audit Manager  
D. AWS Artifact

### **Answers**

**D. AWS Artifact**

### **Why**

**AWS Artifact** provides on-demand access to AWS security and compliance reports and selected agreements.

Organizations can download AWS compliance documentation to support regulatory requirements, security assessments and external audits.

Examples of documents include:
- **ISO certifications**
- **Payment Card Industry (PCI) compliance reports**
- **System and Organization Controls (SOC) reports**

|Choice|Explanation|
|---|---|
|AWS Well-Architected Tool|Reviews cloud workloads against architectural best practices and provides improvement guidance.|
|AWS Trusted Advisor|Provides recommendations for optimizing cost, performance, security, fault tolerance and service limits.|
|AWS Audit Manager|Helps customers collect audit evidence and prepare reports to assess their own AWS usage against compliance requirements.|
|**AWS Artifact**|Provides access to official AWS security reports, compliance documentation and agreements.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**AWS Artifact**|Download official AWS compliance reports and agreements|
|**AWS Audit Manager**|Collect audit evidence and prepare customer audit reports|
|**AWS Trusted Advisor**|AWS best practice recommendations|
|**AWS Well-Architected Tool**|Review workload architecture against best practices|
|**AWS Config**|Resource configuration history and compliance|

- **Download AWS ISO, PCI and SOC reports - AWS Artifact**
- **Automate audit evidence collection - AWS Audit Manager**
- **Review workload architecture - AWS Well-Architected Tool**

**Important distinction:**

**AWS Artifact** provides compliance documentation about AWS itself, while **AWS Audit Manager** helps customers assess and audit their own AWS environments.

## **39. Practice Question**

### **Question**

A company is deploying a three-tier, highly available web application to AWS. This application allows end users to upload and access photos and videos.

Which service provides durable storage for static content for the web tier?

### **Choices**

A. Amazon RDS instance  
B. Amazon S3  
C. Amazon EBS volume  
D. Amazon EC2 instance store

### **Answers**

**B. Amazon S3**

### **Why**

**Amazon Simple Storage Service (Amazon S3)** is an object storage service that provides highly scalable, durable and available storage.

It is suitable for storing static content such as:
- Photos
- Videos
- Documents
- User-uploaded files
- Static website assets

Storing static content in Amazon S3 instead of directly on EC2 instances allows the web servers to be independently scaled or replaced without losing uploaded files.

|Choice|Explanation|
|---|---|
|Amazon RDS instance|Provides managed relational databases rather than general-purpose object storage for photos, videos and static content.|
|**Amazon S3**|Provides scalable and durable object storage that is independent of individual EC2 instances.|
|Amazon EBS volume|Provides persistent block storage for EC2 instances. It is less appropriate than S3 for independently storing large collections of user-uploaded static content.|
|Amazon EC2 instance store|Provides temporary local block storage. Data can be lost when an instance stops, terminates or experiences an underlying hardware failure.|

### **Exam Focus**

|Storage Service|Storage Type|Exam Clue|
|---|---|---|
|**Amazon S3**|Object storage|Photos, videos, static files and backups|
|**Amazon EBS**|Persistent block storage|Storage volumes for EC2 instances|
|**Amazon EC2 Instance Store**|Temporary block storage|Temporary data, buffers and caches|
|**Amazon RDS**|Relational database|Structured relational data and SQL|

- **Durable storage for static web content - Amazon S3**
- **Store user-uploaded photos and videos - Amazon S3**
- **Persistent block storage for EC2 - Amazon EBS**
- **Temporary local storage for EC2 - Instance Store**
- Separate application servers from persistent data storage to support independent scaling and resource replacement.

## **40. Practice Question**

### **Question**

What can be termed as a user-defined label that has a key-value pair of variable character length and is assigned to AWS resources as metadata for administration and management?

### **Choices**

A. Resource Flag  
B. Resource Group  
C. Resource Name  
D. Resource Tag

### **Answers**

**D. Resource Tag**

### **Why**

An **AWS Resource Tag** is a user-defined metadata label consisting of a **key-value pair** that can be assigned to AWS resources.

Tags help organizations identify, classify, organize and manage their cloud resources.

Common examples:

|Tag Key|Tag Value|
|---|---|
|`Name`|`WebServer01`|
|`Environment`|`Production`|
|`Department`|`Finance`|
|`Project`|`Ecommerce`|

Tags are useful for resource organization, administration, cost allocation and access management.

|Choice|Explanation|
|---|---|
|Resource Flag|Not the standard AWS metadata mechanism for labeling resources using key-value pairs.|
|Resource Group|Organizes AWS resources into logical groups based on shared characteristics, such as tags, applications or environments.|
|Resource Name|Identifies a resource. A name may be represented using a `Name` tag, but it is not the general term for key-value metadata.|
|**Resource Tag**|A key-value metadata label assigned to AWS resources for identification, classification and management.|

### **Exam Focus**

|Concept|Primary Purpose|
|---|---|
|**Resource Tags**|Assign key-value metadata to resources|
|**AWS Resource Groups**|Organize resources into logical groups|
|**Cost Allocation Tags**|Categorize and track AWS costs|
|**Tag Policies**|Standardize resource tagging across AWS accounts|

- **User-defined key-value metadata - Resource Tag**
- **Identify resources by project, department or environment - Resource Tags**
- **Track AWS spending by department or project - Cost Allocation Tags**
- **Group resources based on common characteristics - AWS Resource Groups**
- **Standardize tagging across AWS accounts - Tag Policies**

**Important distinction:** Resource tags describe and classify individual resources, while resource groups organize multiple resources into logical collections.

## **41. Practice Question**

### **Question**

There is a requirement to host a database server for a minimum period of one year.

Which of the following would result in the least cost?

### **Choices**

A. No Upfront Reserved  
B. On-Demand  
C. Partial Upfront Reserved  
D. Spot

### **Answers**

**C. Partial Upfront Reserved**

### **Why**

**Reserved Instances (RIs)** provide discounted pricing in exchange for a commitment to a one-year or three-year term.

Since the database server is expected to run for at least one year, its usage is predictable, making Reserved Instances more cost-effective than On-Demand Instances.

Reserved Instances generally offer three payment options:

|Payment Option|Description|
|---|---|
|**All Upfront**|Pay the entire commitment upfront for the greatest discount.|
|**Partial Upfront**|Pay part of the commitment upfront and the remainder throughout the term.|
|**No Upfront**|No initial payment, but generally provides a smaller discount.|

|Choice|Explanation|
|---|---|
|No Upfront Reserved|Suitable for long-term workloads but generally provides a smaller discount than Partial Upfront Reserved.|
|On-Demand|Suitable for short-term or unpredictable workloads without long-term commitments.|
|**Partial Upfront Reserved**|Provides discounted pricing for predictable, long-term workloads without requiring full upfront payment.|
|Spot|Provides significant discounts on unused EC2 capacity but introduces interruption risks, making it unsuitable for a database that requires continuous availability unless designed to tolerate interruptions.|

### **Exam Focus**

|Pricing Model|Exam Clue|
|---|---|
|**On-Demand**|Short-term, unpredictable workloads|
|**Reserved Instances**|Predictable, long-term workloads|
|**Spot Instances**|Interruptible, fault-tolerant workloads|
|**Savings Plans**|Consistent usage commitment measured in dollars per hour|

- **Predictable workload for one or three years - Reserved Instances**
- **Highest RI payment discount - All Upfront**
- **Balance upfront payment and savings - Partial Upfront**
- **No long-term commitment - On-Demand**
- **Unused EC2 capacity with interruption risk - Spot Instances**

**Important distinction:** All Upfront Reserved would generally provide greater savings under equivalent terms, but it is not available among the answer choices.

## **42. Practice Question**

### **Question**

A company is running and managing its own Docker environment on Amazon EC2 instances.

The company wants an alternative to help manage cluster size, scheduling and environment maintenance.

Which AWS service meets these requirements?

### **Choices**

A. AWS Fargate  
B. AWS Lambda  
C. Amazon Athena  
D. Amazon Redshift

### **Answers**

**A. AWS Fargate**

### **Why**

**AWS Fargate** is a serverless compute engine for containers that works with:
- **Amazon Elastic Container Service (Amazon ECS)**
- **Amazon Elastic Kubernetes Service (Amazon EKS)**

AWS Fargate allows customers to run containers without provisioning, scaling or maintaining the underlying EC2 server infrastructure.

Customers can focus on their containerized applications while AWS manages the underlying compute infrastructure.

The key clues are **Docker containers** and **eliminating server and cluster capacity management**.

|Choice|Explanation|
|---|---|
|**AWS Fargate**|Provides serverless compute capacity for containers without requiring customers to manage underlying servers.|
|AWS Lambda|Executes event-driven functions. Although Lambda supports container images as a packaging format, it is not designed for managing long-running containerized applications.|
|Amazon Athena|Provides serverless SQL queries and data analysis, primarily against data stored in Amazon S3.|
|Amazon Redshift|Provides a fully managed data warehouse for large-scale analytics.|

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon ECS**|Managed container orchestration|
|**Amazon EKS**|Managed Kubernetes orchestration|
|**AWS Fargate**|Serverless compute for containers|
|**AWS Lambda**|Serverless, event-driven function execution|
|**Amazon EC2**|Virtual servers with greater infrastructure control|

- **Run containers without managing servers - AWS Fargate**
- **Manage Docker container workloads - Amazon ECS**
- **Run Kubernetes workloads - Amazon EKS**
- **Execute event-driven code without managing servers - AWS Lambda**

**Important distinction:** Amazon ECS and Amazon EKS provide container orchestration, while AWS Fargate provides the serverless compute infrastructure on which containers run.

## **43. Practice Question**

### **Question**

Which persona is most associated with the AWS Cloud Adoption Framework (AWS CAF) Platform Perspective who can make decisions?

### **Choices**

A. Cloud Engineer  
B. Chief Technology Officer (CTO)  
C. Compliance Officer  
D. Chief Financial Officer (CFO)

### **Answers**

**B. Chief Technology Officer (CTO)**

### **Why**

The **Platform Perspective** of the AWS Cloud Adoption Framework focuses on designing, implementing and optimizing cloud infrastructure to support organizational objectives.

The **Chief Technology Officer (CTO)** is typically responsible for technology strategy, architectural decisions and platform direction.

The key clue is the requirement for a **decision-maker responsible for cloud platform strategy**.

|Choice|Explanation|
|---|---|
|Cloud Engineer|Primarily responsible for implementing and maintaining cloud infrastructure rather than defining overall platform strategy.|
|**Chief Technology Officer (CTO)**|Responsible for technology strategy, architecture and cloud platform decisions.|
|Compliance Officer|More closely associated with Security and Governance perspectives, particularly regulatory compliance and risk management.|
|Chief Financial Officer (CFO)|Focuses on financial management, accountability and business value rather than technical platform decisions.|

### **Exam Focus**

|AWS CAF Perspective|Primary Focus|
|---|---|
|**Business**|Business value and organizational objectives|
|**People**|Organizational culture, skills and workforce transformation|
|**Governance**|Risk management, oversight and cloud governance|
|**Platform**|Cloud architecture, infrastructure and engineering|
|**Security**|Security controls, identity and access management|
|**Operations**|Operational management and workload performance|

- **Technology strategy and cloud infrastructure - Platform Perspective**
- **Chief Technology Officer (CTO) - Platform Perspective**
- **Regulatory compliance and risk management - Governance and Security perspectives**

## **44. Practice Question**

### **Question**

Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?

### **Choices**

A. Virtual Private Cloud (VPC)  
B. AWS Regions  
C. Availability Zones  
D. Edge Locations

### **Answers**

**D. Edge Locations**

### **Why**

**Amazon CloudFront** is a Content Delivery Network (CDN) that uses a globally distributed network of **edge locations** to deliver content to users with lower latency.

CloudFront caches content closer to end users, reducing the distance that requests and responses need to travel.

It uses a global network of points of presence, including edge locations and regional edge caches.

|Choice|Explanation|
|---|---|
|Virtual Private Cloud (VPC)|Provides a logically isolated network for deploying AWS resources rather than a global content delivery network.|
|AWS Regions|Geographic areas containing multiple Availability Zones where AWS resources can be deployed.|
|Availability Zones|Isolated locations within an AWS Region consisting of one or more data centers. They primarily support availability and fault tolerance.|
|**Edge Locations**|Deliver cached content closer to end users to reduce latency and improve content delivery performance.|

### **Exam Focus**

|Infrastructure Component|Primary Purpose|
|---|---|
|**AWS Region**|Geographic location for deploying AWS resources|
|**Availability Zone (AZ)**|Isolated infrastructure for high availability|
|**Edge Location**|Low-latency content delivery closer to users|
|**Amazon VPC**|Logically isolated virtual network|

- **Global Content Delivery Network (CDN) - Amazon CloudFront**
- **Deliver content closer to end users - Edge Locations**
- **Reduce content delivery latency - Amazon CloudFront**
- **High availability across isolated locations - Multiple Availability Zones**

## **45. Practice Question**

### **Question**

Where can a user find information about prohibited actions on the AWS infrastructure?

### **Choices**

A. AWS Acceptable Use Policy  
B. AWS Trusted Advisor  
C. AWS Identity and Access Management (IAM)  
D. AWS Billing Console

### **Answers**

**A. AWS Acceptable Use Policy**

### **Why**

The **AWS Acceptable Use Policy (AUP)** defines prohibited activities and restrictions regarding the use of AWS services and infrastructure.

It outlines activities that customers must not perform when using AWS.

The key clue is **prohibited actions on AWS infrastructure**.

|Choice|Explanation|
|---|---|
|**AWS Acceptable Use Policy**|Defines prohibited activities and unacceptable uses of AWS services.|
|AWS Trusted Advisor|Provides recommendations related to security, performance, cost optimization and other AWS best practices.|
|AWS IAM|Manages identities, access permissions and authorization for AWS resources.|
|AWS Billing Console|Provides visibility into AWS bills, spending and billing-related information.|

### **Exam Focus**

|Service or Policy|Exam Clue|
|---|---|
|**AWS Acceptable Use Policy (AUP)**|Prohibited activities on AWS|
|**AWS Trusted Advisor**|AWS best practice recommendations|
|**AWS IAM**|Identity and access permissions|
|**AWS Billing Console**|AWS bills and spending information|

**Find information about prohibited activities on AWS infrastructure - AWS Acceptable Use Policy**

## **46. Practice Question**

### **Question**

Which of the following activities should a customer perform to ensure the durability of EBS data while also keeping the cost low?

### **Choices**

A. Create EBS snapshots.  
B. Attach redundant volumes to EC2 instances and write to both volumes.  
C. Deploy EBS volume in Multi-AZ mode.  
D. Create a replica volume by setting up data replication between the source and target volumes.

### **Answers**

**A. Create EBS snapshots.**

### **Why**

**Amazon Elastic Block Store (Amazon EBS) snapshots** are point-in-time backups of EBS volumes.

EBS snapshots are stored incrementally, meaning that after the initial snapshot, only the data blocks that have changed since the previous snapshot need to be saved.

This reduces backup storage requirements and associated costs.

An EBS snapshot can also be used to create a new EBS volume containing the data captured at the time of the snapshot.

|Choice|Explanation|
|---|---|
|**Create EBS snapshots**|Provides durable, cost-efficient backups using incremental storage.|
|Attach redundant volumes and write to both|Requires additional EBS volumes and application-level management, increasing costs and complexity.|
|Deploy EBS volume in Multi-AZ mode|An EBS volume is associated with a single Availability Zone. There is no native Multi-AZ deployment mode for individual EBS volumes.|
|Create a replica volume using data replication|Requires additional storage capacity and replication management, making it less cost-efficient for the backup requirement.|

### **Exam Focus**

|EBS Concept|Description|
|---|---|
|**EBS Volume**|Persistent block storage for EC2 instances|
|**EBS Snapshot**|Point-in-time backup of an EBS volume|
|**Incremental Backup**|Stores only changed data blocks after the initial backup|

- **Cost-efficient EBS backups - EBS Snapshots**
- **Protect EBS data against loss - EBS Snapshots**
- **Back up only changed data blocks - Incremental Snapshots**
- **Restore a volume from a backup - EBS Snapshot**
- EBS volumes are associated with a **single Availability Zone**.
- EBS snapshots can be used to restore volumes in other Availability Zones within the same Region.

## **47. Practice Question**

### **Question**

Which service would be used to send alerts based on Amazon CloudWatch alarms?

### **Choices**

A. AWS CloudTrail  
B. Amazon Route 53  
C. AWS Trusted Advisor  
D. Amazon Simple Notification Service (Amazon SNS)

### **Answers**

**D. Amazon Simple Notification Service (Amazon SNS)**

### **Why**

**Amazon Simple Notification Service (Amazon SNS)** is a fully managed publish/subscribe messaging and notification service.

Amazon CloudWatch monitors resource metrics and can trigger alarms when predefined thresholds are reached.

CloudWatch alarms can publish notifications to an **SNS topic**, which then delivers notifications to subscribed recipients.

For example, when EC2 CPU utilization exceeds a defined threshold, a CloudWatch alarm can trigger an SNS notification to alert the operations team.

|Choice|Explanation|
|---|---|
|AWS CloudTrail|Records AWS API calls and account activity for auditing rather than delivering CloudWatch alarm notifications.|
|Amazon Route 53|Provides DNS, domain registration and traffic routing services.|
|AWS Trusted Advisor|Provides resource optimization recommendations rather than acting as a notification delivery service for CloudWatch alarms.|
|**Amazon SNS**|Delivers notifications to subscribers when triggered by CloudWatch alarms.|

_The screenshot does not include answer explanations for this question. The explanations above are based on the core purposes of the listed AWS services._

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**Amazon CloudWatch**|Monitor metrics, logs and alarms|
|**Amazon SNS**|Publish and deliver notifications|
|**AWS CloudTrail**|Record AWS API activity|
|**Amazon Route 53**|DNS and traffic routing|

- **Monitor CPU utilization and resource metrics - Amazon CloudWatch**
- **Trigger an alarm when a threshold is exceeded - CloudWatch Alarms**
- **Send email or SMS notifications - Amazon SNS**
- **Send notifications based on CloudWatch alarms - Amazon SNS**

**Important distinction:** CloudWatch detects the alarm condition, while SNS delivers the notification.

## **48. Practice Question**

### **Question**

Which pillar of the AWS Well-Architected Framework focuses on ensuring workloads run efficiently and can meet changing demand?

### **Choices**

A. Operational Excellence  
B. Performance Efficiency  
C. Reliability  
D. Cost Optimization

### **Answers**

**B. Performance Efficiency**

### **Why**

The **Performance Efficiency pillar** of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet workload requirements and maintain that efficiency as demand and technologies change.

It emphasizes:
- Selecting appropriate resources for workloads.
- Optimizing resource performance.
- Monitoring workload performance.
- Adapting to changing workload requirements.

The key clues are **efficient workload performance** and **meeting changing demand**.

|Choice|Explanation|
|---|---|
|Operational Excellence|Focuses on running and monitoring workloads effectively, improving operational processes and using automation.|
|**Performance Efficiency**|Focuses on selecting and efficiently using resources to meet workload performance requirements.|
|Reliability|Focuses on workloads performing their intended functions consistently and recovering from disruptions.|
|Cost Optimization|Focuses on avoiding unnecessary costs while meeting business and workload requirements.|

### **Exam Focus**

|Well-Architected Pillar|Exam Clue|
|---|---|
|**Operational Excellence**|Automation, operational processes and continuous improvement|
|**Security**|Protect data, systems and resources|
|**Reliability**|Recover from failures and maintain reliable operations|
|**Performance Efficiency**|Efficient resource utilization and workload performance|
|**Cost Optimization**|Avoid unnecessary costs and maximize business value|
|**Sustainability**|Minimize environmental impact|

- **Select appropriate resources to meet changing demand - Performance Efficiency**
- **Recover from disruptions - Reliability**
- **Improve operational processes - Operational Excellence**
- **Eliminate unnecessary spending - Cost Optimization**

## **49. Practice Question**

### **Question**

A development team is looking to improve the performance of its web servers by offloading some of the cryptographic processing for SSL/TLS.

Furthermore, to meet regulatory and compliance requirements, the team needs greater control over encryption keys and cryptographic processing.

Which AWS service can be used for this requirement?

### **Choices**

A. AWS KMS  
B. AWS CloudHSM  
C. AWS Secrets Manager  
D. AWS Certificate Manager

### **Answers**

**B. AWS CloudHSM**

### **Why**

**AWS CloudHSM (Cloud Hardware Security Module)** provides dedicated hardware security modules for generating, storing and managing cryptographic keys and performing cryptographic operations.

AWS CloudHSM is suitable for workloads that require greater control over encryption keys and cryptographic processing to meet strict security, regulatory and compliance requirements.

It can also be used to offload certain **SSL/TLS cryptographic operations**, such as private-key operations, from web servers to dedicated cryptographic hardware.

The key clues are:
- **SSL/TLS cryptographic processing offloading**
- **Greater control over encryption keys**
- **Strict regulatory and compliance requirements**
- **Dedicated cryptographic hardware**

|Choice|Explanation|
|---|---|
|AWS KMS|Provides managed encryption key creation, management and cryptographic operations. It is not designed for directly offloading web server SSL/TLS processing in this scenario.|
|**AWS CloudHSM**|Provides dedicated hardware security modules, greater control over cryptographic keys and support for cryptographic processing offloading.|
|AWS Secrets Manager|Securely stores, retrieves and rotates sensitive information such as database credentials, passwords and API keys.|
|AWS Certificate Manager (ACM)|Provisions, manages and renews SSL/TLS certificates. Its primary purpose is certificate management rather than providing dedicated hardware for cryptographic processing.|

### **Exam Focus**

|Security Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS KMS**|Managed encryption key management|Create and manage encryption keys|
|**AWS CloudHSM**|Dedicated hardware-based cryptography|Dedicated HSM, greater key control, cryptographic offloading|
|**AWS Secrets Manager**|Secrets and credential management|Passwords, API keys, credential rotation|
|**AWS Certificate Manager (ACM)**|SSL/TLS certificate management|Provision, manage and renew certificates|

- **Dedicated hardware security modules - AWS CloudHSM**
- **Greater control over cryptographic keys and operations - AWS CloudHSM**
- **Offload SSL/TLS cryptographic operations to dedicated hardware - AWS CloudHSM**
- **Managed encryption keys - AWS KMS**
- **Store and rotate application credentials - AWS Secrets Manager**
- **Provision and renew SSL/TLS certificates - AWS Certificate Manager**

**Important distinction:**

- **AWS Certificate Manager** manages SSL/TLS certificates.
- **AWS CloudHSM** performs hardware-based cryptographic operations and provides greater control over cryptographic keys.

The mention of SSL/TLS alone does not necessarily indicate AWS Certificate Manager. Determine whether the requirement is **certificate management** or **cryptographic processing**.

## **50. Practice Question**

### **Question**

What is the value of having AWS Cloud services accessible through an Application Programming Interface (API)?

### **Choices**

A. All application testing can be managed by AWS.  
B. It allows developers to work with AWS resources programmatically.  
C. Customer-owned on-premises infrastructure becomes programmable.  
D. AWS resources will always be cost-optimized.

### **Answers**

**B. It allows developers to work with AWS resources programmatically.**

### **Why**

An **Application Programming Interface (API)** allows applications and developers to interact with AWS services programmatically without needing to understand the internal implementation of those services.

AWS APIs enable developers to automate resource provisioning, configuration and management.

Examples of activities that can be performed through AWS APIs include:
- Launching Amazon EC2 instances.
- Creating Amazon S3 buckets.
- Uploading data to Amazon S3.
- Creating database backups.
- Managing AWS resources programmatically.

|Choice|Explanation|
|---|---|
|All application testing can be managed by AWS|APIs provide programmatic access to AWS services but do not automatically transfer application testing responsibilities to AWS.|
|**Work with AWS resources programmatically**|Allows developers to interact with AWS services and automate resource management using code.|
|Customer-owned on-premises infrastructure becomes programmable|Access to AWS APIs does not automatically make existing on-premises infrastructure programmable.|
|AWS resources will always be cost-optimized|APIs enable automation but do not guarantee that resources are configured or operated cost-efficiently.|

### **Exam Focus**

|AWS Access Method|Description|
|---|---|
|**AWS Management Console**|Browser-based graphical interface for managing AWS resources|
|**AWS CLI**|Command-line interface for interacting with AWS services|
|**AWS SDK**|Programming language libraries for interacting with AWS services|
|**AWS API**|Programmatic interface for accessing AWS service functionality|

- **Programmatic access to AWS resources - AWS API**
- **Manage AWS resources using programming languages - AWS SDK**
- **Manage AWS resources using terminal commands - AWS CLI**
- **Manage AWS resources using a graphical interface - AWS Management Console**
- **Automate infrastructure provisioning and resource management - AWS APIs**

**Important distinction:** AWS APIs enable automation and programmatic resource management, but they do not automatically ensure security, cost optimization or correct resource configuration.

## **51. Practice Question**

### **Question**

In serverless services such as AWS Lambda, what are the implications of the Shared Responsibility Model?

### **Choices**

A. The user is responsible for IAM roles and identities that can invoke the AWS Lambda functions.  
B. The user is responsible for the security and access to the instances that handle the underlying compute capacity.  
C. Amazon has overall responsibility for the infrastructure, including IAM roles and identities that can invoke functions.  
D. Amazon is responsible for any malicious code written in the IDE and can terminate any rogue activity.

### **Answers**

**A. The user is responsible for IAM roles and identities that can invoke the AWS Lambda functions.**

### **Why**

Under the **AWS Shared Responsibility Model**, AWS manages the underlying infrastructure required to run serverless services such as AWS Lambda.

However, customers remain responsible for securing their application code, data, identities and access permissions.

|Choice|Explanation|
|---|---|
|**Manage IAM roles and identities**|Customers are responsible for configuring who can invoke Lambda functions and what resources those functions can access.|
|Secure underlying compute instances|AWS manages and secures the underlying compute infrastructure in serverless services.|
|AWS manages infrastructure and IAM permissions|AWS manages the infrastructure, but customers remain responsible for configuring IAM permissions.|
|AWS is responsible for malicious application code|Customers are responsible for the security and behavior of their application code.|

### **Exam Focus**

|Responsibility|Responsible Party|
|---|---|
|Underlying physical infrastructure|**AWS**|
|Underlying compute instances|**AWS**|
|Underlying operating system maintenance|**AWS**|
|Application code security|**Customer**|
|IAM roles and permissions|**Customer**|
|Customer data security|**Customer**|

- **Security of the cloud - AWS**
- **Security in the cloud - Customer**
- **Lambda invocation permissions - Customer responsibility**
- Serverless computing reduces infrastructure management responsibilities but does not eliminate customer security responsibilities.

## **52. Practice Question**

### **Question**

In a complex AWS environment with multiple AWS accounts and resources, an organization needs a centralized solution to manage and enforce consistent firewall rules and policies.

This helps ensure a uniform security posture and compliance across the infrastructure.

Which AWS service provides the capability to achieve this?

### **Choices**

A. Amazon GuardDuty  
B. AWS Web Application Firewall  
C. AWS Firewall Manager  
D. Amazon Inspector

### **Answers**

**C. AWS Firewall Manager**

### **Why**

**AWS Firewall Manager** is a security management service that allows organizations to centrally configure, manage and enforce firewall rules and security policies across multiple AWS accounts and resources.

It helps ensure that security policies are consistently applied throughout an organization.

The key clues are **centralized firewall management**, **multiple AWS accounts** and **consistent policy enforcement**.

|Choice|Explanation|
|---|---|
|Amazon GuardDuty|Detects malicious activity and potential security threats rather than centrally managing firewall policies.|
|AWS WAF|Protects web applications against common web exploits by filtering HTTP and HTTPS requests. It is not the primary service for organization-wide firewall policy management.|
|**AWS Firewall Manager**|Centrally manages and enforces firewall rules and security policies across multiple AWS accounts and resources.|
|Amazon Inspector|Identifies software vulnerabilities and security exposures rather than enforcing firewall policies.|

### **Exam Focus**

|Security Service|Exam Clue|
|---|---|
|**AWS Firewall Manager**|Centralized firewall policy management across accounts|
|**AWS WAF**|Protection against common web exploits|
|**Amazon GuardDuty**|Intelligent threat detection|
|**Amazon Inspector**|Software vulnerability management|

- **Centrally manage firewall rules across multiple AWS accounts - AWS Firewall Manager**
- **Enforce consistent security policies across an organization - AWS Firewall Manager**
- **Filter malicious HTTP and HTTPS requests - AWS WAF**

**Important distinction:** AWS WAF provides web application protection, while AWS Firewall Manager centrally manages and enforces security policies across multiple accounts and resources.

## **53. Practice Question**

### **Question**

A company wants to utilize AWS storage. Low storage cost is paramount for the company.

The data is rarely retrieved, and a data retrieval time of up to 24–48 hours is acceptable.

What is the best storage option to use?

### **Choices**

A. Amazon EBS  
B. Amazon S3 Glacier Deep Archive  
C. Amazon S3 Infrequent Access (IA)  
D. Amazon S3 Glacier Instant Retrieval

### **Answers**

**B. Amazon S3 Glacier Deep Archive**

### **Why**

**Amazon S3 Glacier Deep Archive** is the lowest-cost Amazon S3 storage class, designed for long-term archival and data that is rarely accessed.

It is particularly suitable when minimizing storage costs is more important than immediate data retrieval.

The company can tolerate extended retrieval times, making Glacier Deep Archive the most appropriate storage class.

|Choice|Explanation|
|---|---|
|Amazon EBS|Provides persistent block storage for EC2 instances rather than low-cost archival storage.|
|**Amazon S3 Glacier Deep Archive**|Provides the lowest S3 storage cost for rarely accessed archival data when extended retrieval times are acceptable.|
|Amazon S3 Infrequent Access|Provides immediate access to infrequently accessed data but has higher storage costs than Glacier Deep Archive.|
|Amazon S3 Glacier Instant Retrieval|Provides millisecond retrieval for archival data but has higher storage costs than Glacier Deep Archive.|

### **Exam Focus**

|Storage Class|Exam Clue|
|---|---|
|**S3 Standard-IA**|Infrequently accessed data requiring immediate access|
|**S3 Glacier Instant Retrieval**|Rarely accessed archival data requiring millisecond retrieval|
|**S3 Glacier Flexible Retrieval**|Archival data that can tolerate delayed retrieval|
|**S3 Glacier Deep Archive**|Lowest storage cost and long-term archival|

- **Lowest-cost Amazon S3 storage class - S3 Glacier Deep Archive**
- **Long-term archival and rarely accessed data - S3 Glacier Deep Archive**
- **Can tolerate retrieval times of up to 48 hours - S3 Glacier Deep Archive**
- **Archival data requiring immediate access - S3 Glacier Instant Retrieval**

## **54. Practice Question**

### **Question**

An organization has decided to run an application uninterruptedly for the duration of a planned sporting event so that fans can create digital flyers and share them on social media to show their support.

The sporting event is three months long.

Which EC2 instance purchasing option will be best suited for this scenario?

### **Choices**

A. On-Demand Instances  
B. Reserved Instances  
C. Dedicated Instances  
D. Spot Instances

### **Answers**

**A. On-Demand Instances**

### **Why**

**Amazon EC2 On-Demand Instances** allow customers to use compute capacity without making long-term commitments.

The application has two important requirements:
- It must operate continuously without Spot-related interruptions.
- It is only required for three months.

On-Demand Instances provide the flexibility required for this short-term workload without requiring a one-year or three-year commitment.

|Choice|Explanation|
|---|---|
|**On-Demand Instances**|Suitable for short-term workloads that require compute capacity without long-term commitments or Spot-related interruptions.|
|Reserved Instances|Generally require a one-year or three-year commitment, which exceeds the three-month requirement.|
|Dedicated Instances|Provide physically isolated hardware dedicated to a customer's account. No hardware isolation or compliance requirement is specified.|
|Spot Instances|Can be interrupted when AWS needs to reclaim compute capacity, making them unsuitable for this workload's uninterrupted operation requirement.|

### **Exam Focus**

|EC2 Purchasing Option|Suitable Workload|
|---|---|
|**On-Demand**|Short-term or unpredictable workloads|
|**Reserved Instances**|Predictable workloads with one-year or three-year commitments|
|**Spot Instances**|Interruptible and fault-tolerant workloads|
|**Dedicated Instances**|Workloads requiring dedicated physical hardware|

- **Three-month workload without long-term commitment - On-Demand Instances**
- **Predictable long-term workload - Reserved Instances**
- **Workload that can tolerate interruptions - Spot Instances**
- **Physical hardware isolation - Dedicated Instances**

**Important distinction:** Predictable usage does not automatically mean Reserved Instances are the best option. Consider the workload's duration and whether it justifies a long-term commitment.

On-Demand Instances avoid Spot-related interruptions but do not guarantee that infrastructure failures will never occur.

## **55. Practice Question**

### **Question**

A business analyst would like to move away from creating complex database queries and static spreadsheets when generating regular reports for high-level management.

They would like to publish insightful, graphically appealing reports with interactive dashboards.

Which service can they use to accomplish this?

### **Choices**

A. Amazon Athena  
B. Amazon QuickSight  
C. Business intelligence on Amazon Redshift  
D. Amazon CloudWatch dashboards

### **Answers**

**B. Amazon QuickSight**

### **Why**

**Amazon QuickSight** is a fully managed business intelligence (BI) service that allows users to analyze data, create visualizations and publish interactive dashboards.

It helps organizations present business insights through graphical reports and uses machine learning capabilities to help identify trends and patterns in datasets.

The key clues are **business intelligence**, **interactive dashboards** and **graphical business reports**.

|Choice|Explanation|
|---|---|
|Amazon Athena|Provides SQL-based queries and data analysis, primarily against data stored in Amazon S3. It is not primarily a business intelligence visualization service.|
|**Amazon QuickSight**|Provides business intelligence reporting, data visualization and interactive dashboards.|
|Amazon Redshift|Provides a managed data warehouse for storing and analyzing large volumes of data rather than primarily creating interactive business dashboards.|
|Amazon CloudWatch dashboards|Visualizes operational metrics and AWS resource performance rather than business intelligence data.|

### **Exam Focus**

|Service|Exam Clue|
|---|---|
|**Amazon QuickSight**|Business intelligence, interactive dashboards and visual reports|
|**Amazon Athena**|SQL queries against data in Amazon S3|
|**Amazon Redshift**|Data warehousing and large-scale analytics|
|**Amazon CloudWatch**|Operational monitoring and infrastructure dashboards|

- **Create interactive business intelligence dashboards - Amazon QuickSight**
- **Visualize business data and identify trends - Amazon QuickSight**
- **Query data stored in S3 using SQL - Amazon Athena**
- **Monitor AWS infrastructure through dashboards - Amazon CloudWatch**

**Important distinction:** QuickSight dashboards visualize business data, while CloudWatch dashboards visualize operational and infrastructure monitoring data.

## **56. Practice Question**

### **Question**

What is a key characteristic of serverless computing?

### **Choices**

A. AWS manages the underlying infrastructure of the compute instances if the user enters into a long-term commitment to use those resources.  
B. Users are billed only for the exact duration their code is executed.  
C. It is an AWS proprietary technology where you get unlimited compute capacity for a fixed hourly cost.  
D. Users are billed based on the amount of time the user-provisioned EC2 instances are running.

### **Answers**

**B. Users are billed only for the exact duration their code is executed.**

### **Why**

**Serverless computing** allows customers to run applications without provisioning or managing the underlying server infrastructure.

With services such as **AWS Lambda**, customers pay based on code execution and resource consumption rather than continuously maintaining running servers.

Key characteristics of serverless computing include automatic scaling, reduced infrastructure management and usage-based pricing.

|Choice|Explanation|
|---|---|
|AWS manages infrastructure with a long-term commitment|Serverless computing does not require customers to enter into long-term usage commitments.|
|**Users are billed based on code execution duration**|Reflects the execution-based pricing model commonly associated with serverless compute services such as AWS Lambda.|
|Unlimited compute capacity for a fixed hourly cost|Serverless services have service quotas and usage-based pricing rather than unlimited capacity at a fixed price.|
|Billing based on running EC2 instances|Describes traditional EC2 compute billing under the Infrastructure as a Service (IaaS) model rather than serverless computing.|

**Clarification:** AWS Lambda standard on-demand pricing includes both the number of requests and execution duration. Other serverless services may use different billing models.

### **Exam Focus**

|Characteristic|Amazon EC2|AWS Lambda|
|---|---|---|
|Server provisioning|Customer manages|AWS manages|
|Operating system maintenance|Customer manages guest OS|AWS manages underlying OS|
|Scaling|Requires scaling configuration|Automatic|
|Standard compute billing|Instance running time|Requests and execution duration|
|Idle compute costs|Running instances incur charges|No standard execution charges when code is not running|

- **Run code without managing servers - Serverless Computing**
- **Event-driven function execution - AWS Lambda**
- **Pay for actual code execution - AWS Lambda**
- **Intermittent workloads with long idle periods - AWS Lambda**

## **57. Practice Question**

### **Question**

Which Amazon Route 53 routing policy can be implemented to route traffic to multiple resources based upon user location?

### **Choices**

A. Geolocation routing policy  
B. Geoproximity routing policy  
C. Latency routing policy  
D. Simple routing policy

### **Answers**

**A. Geolocation routing policy**

### **Why**

**Amazon Route 53 Geolocation Routing** routes traffic to resources based on the geographic location of users.

For example, a company with resources deployed in Europe and Japan can configure routing policies so that European users are directed to European resources, while Japanese users are directed to resources in Japan.

This is useful when organizations need to deliver region-specific content or direct users to resources according to geographic requirements.

The key clue is **routing based on user geographic location**.

|Choice|Explanation|
|---|---|
|**Geolocation routing**|Routes traffic according to the geographic location of users, such as their continent or country.|
|Geoproximity routing|Routes traffic based on the geographic proximity of users and resources, with the ability to adjust traffic distribution using a bias.|
|Latency routing|Routes traffic to the AWS Region that provides the lowest network latency for the user, rather than following geographic routing rules.|
|Simple routing|Provides basic DNS routing without geographic or latency-based routing decisions.|

### **Exam Focus**

|Route 53 Routing Policy|Exam Clue|
|---|---|
|**Simple**|Basic DNS routing|
|**Geolocation**|User's geographic location|
|**Geoproximity**|Geographic proximity and adjustable routing bias|
|**Latency**|Lowest network latency|

- **Route users according to their country or continent - Geolocation Routing**
- **Adjust geographic traffic distribution using a bias - Geoproximity Routing**
- **Route users to resources providing the lowest latency - Latency Routing**

**Important distinction:** Geolocation routing uses geographic rules based on user location, whereas latency routing selects destinations based on network performance. Geographically closer resources do not necessarily provide the lowest latency.

## **58. Practice Question**

### **Question**

Which is the correct statement for Spot Price with respect to Spot Instances?

### **Choices**

A. Spot Price is static and changes every six hours.  
B. Spot Price varies based upon demand.  
C. Spot Price is static and changes every 24 hours.  
D. Spot Price is always less than Spot Instance request.

### **Answers**

**B. Spot Price varies based upon demand.**

### **Why**

**Amazon EC2 Spot Instances** allow customers to use unused EC2 compute capacity at discounted prices compared to On-Demand Instances.

The **Spot Price** is determined by AWS and varies according to supply and demand for available EC2 capacity.

Spot pricing can differ depending on the instance type and Availability Zone.

|Choice|Explanation|
|---|---|
|Spot Price changes every six hours|Spot pricing is not based on a fixed six-hour schedule.|
|**Spot Price varies based upon demand**|Spot pricing fluctuates based on the supply and demand for unused EC2 capacity.|
|Spot Price changes every 24 hours|Spot pricing is not based on a fixed daily schedule.|
|Spot Price is always less than Spot Instance request|The Spot Price is not guaranteed to remain below the maximum price a customer is willing to pay.|

### **Exam Focus**

|Spot Instance Characteristic|Description|
|---|---|
|**Capacity**|Uses unused EC2 compute capacity|
|**Pricing**|Varies based on supply and demand|
|**Discount**|Up to 90% compared to On-Demand pricing|
|**Interruption**|AWS can reclaim capacity when needed|
|**Suitable Workloads**|Flexible, interruptible and fault-tolerant workloads|

- **Unused EC2 compute capacity at discounted prices - Spot Instances**
- **Variable pricing based on supply and demand - Spot Price**
- **Batch processing and fault-tolerant workloads - Spot Instances**
- **Workloads requiring uninterrupted operation - Avoid relying solely on Spot Instances**

**Important distinction:** Spot Instances use spare EC2 capacity, but that capacity is not free. AWS charges the applicable Spot Price.

## **59. Practice Question**

### **Question**

A company is using a central data platform to manage multiple types of data for its customers.

The company wants to use AWS services to discover, transform and visualize the data.

Which combination of AWS services should the company use to meet these requirements? **(Choose two.)**

### **Choices**

A. AWS Glue  
B. Amazon Quantum Ledger Database  
C. Amazon Redshift  
D. Amazon Elastic File System (Amazon EFS)  
E. Amazon QuickSight

### **Answers**

**A. AWS Glue**
**E. Amazon QuickSight**

### **Why**

The scenario requires two different capabilities:

#### **Data Discovery and Transformation**

**AWS Glue** is a serverless data integration service that allows customers to discover, prepare, transform and combine data for analytics.

It provides capabilities such as:
- Discovering data sources and schemas.
- Cataloging data and metadata.
- Performing **Extract, Transform, Load (ETL)** operations.
- Preparing data for analytics and machine learning.

#### **Data Visualization**

**Amazon QuickSight** is a managed business intelligence service that allows users to create interactive dashboards and visual reports.

Together, AWS Glue prepares and transforms the data, while Amazon QuickSight visualizes the processed data.

|Choice|Explanation|
|---|---|
|**AWS Glue**|Provides data discovery, cataloging, integration and transformation capabilities.|
|Amazon Quantum Ledger Database (QLDB)|Designed to maintain an immutable transaction history rather than discover, transform or visualize analytical data.|
|Amazon Redshift|Provides data warehousing and large-scale analytical queries rather than primarily providing data discovery, transformation and visualization.|
|Amazon EFS|Provides managed, elastic NFS file storage rather than data integration or visualization capabilities.|
|**Amazon QuickSight**|Provides business intelligence, data visualization and interactive dashboards.|

### **Exam Focus**

|Service|Primary Purpose|
|---|---|
|**AWS Glue**|Serverless data integration and ETL|
|**AWS Glue Data Catalog**|Discover and catalog data metadata|
|**Amazon QuickSight**|Business intelligence and data visualization|
|**Amazon Redshift**|Data warehousing and analytics|
|**Amazon Athena**|SQL queries against data in S3|
|**Amazon QLDB**|Immutable transaction ledger (historical service)|
|**Amazon EFS**|Shared file storage|

- **Discover, prepare and transform data - AWS Glue**
- **Extract, Transform, Load (ETL) - AWS Glue**
- **Catalog data sources and metadata - AWS Glue Data Catalog**
- **Visualize processed data using interactive dashboards - Amazon QuickSight**
- **Store and analyze large volumes of structured data - Amazon Redshift**

**Memory aid:**

- **Prepare the data - AWS Glue**
- **Store analytical data - Amazon Redshift**
- **Query the data - Amazon Athena**
- **Visualize the data - Amazon QuickSight**

## **60. Practice Question**

### **Question**

What role does AWS Security Hub play in helping organizations improve their security posture within an AWS environment?

### **Choices**

A. AWS Security Hub offers real-time traffic analysis and alerting, preventing unauthorized access to AWS resources.  
B. AWS Security Hub automatically generates and enforces IAM policies for access control. 
C. AWS Security Hub centralizes and analyzes security findings from various AWS services.

### **Answers**

**C. AWS Security Hub centralizes and analyzes security findings from various AWS services.**

### **Why**

**AWS Security Hub** provides centralized visibility into an organization's AWS security posture by aggregating and prioritizing security findings from multiple AWS services and supported third-party sources.

It helps organizations centrally view, manage and respond to security findings across multiple AWS accounts.

Security Hub can aggregate findings from services such as:
- **Amazon GuardDuty** - Threat detection findings.
- **Amazon Inspector** - Software vulnerability findings.
- **Amazon Macie** - Sensitive data discovery findings.

The key clues are **centralized security findings**, **security posture** and **multiple AWS services and accounts**.

|Choice|Explanation|
|---|---|
|Real-time traffic analysis and prevention of unauthorized access|Security Hub primarily aggregates and analyzes security findings rather than directly inspecting and blocking unauthorized network traffic.|
|Automatically generate and enforce IAM policies|IAM is responsible for access management. Security Hub does not primarily generate or enforce IAM access policies.|
|**Centralize and analyze security findings**|Provides a centralized view of security findings, helping organizations prioritize and respond to security issues.|

### **Exam Focus**

|Security Service|Exam Clue|
|---|---|
|**AWS Security Hub**|Centralized security findings and security posture management|
|**Amazon GuardDuty**|Intelligent threat detection|
|**Amazon Inspector**|Software vulnerability management|
|**Amazon Macie**|Sensitive data discovery in S3|
|**AWS Firewall Manager**|Centralized firewall policy management and enforcement|
|**AWS Trusted Advisor**|Security and resource optimization recommendations|
|**AWS IAM**|Identity and access management|

- **Aggregate security findings from multiple AWS services - AWS Security Hub**
- **Centralized view of organizational security posture - AWS Security Hub**
- **Detect malicious activity - Amazon GuardDuty**
- **Identify software vulnerabilities - Amazon Inspector**
- **Discover sensitive data - Amazon Macie**
- **Centrally enforce firewall policies - AWS Firewall Manager**

**Important distinction:**

Individual security services specialize in identifying different types of security issues, while **AWS Security Hub** consolidates their findings to provide centralized security visibility.

## **61. Practice Question**

### **Question**

In the AWS Billing and Cost Management service, which tool allows users to graphically visualize billing and usage over time and filter costs across different dimensions, such as Regions and usage types?

### **Choices**

A. AWS Budgets  
B. AWS Support  
C. AWS Cost Explorer  
D. AWS Bills

### **Answers**

**C. AWS Cost Explorer**

### **Why**

**AWS Cost Explorer** allows customers to visualize, understand and analyze their AWS costs and usage over time.

It provides graphical representations of spending and allows customers to filter and group costs across different dimensions, such as:
- AWS services
- AWS Regions
- Usage types
- Cost allocation tags
- Linked AWS accounts

The key clues are **graphical cost visualization**, **historical spending analysis** and **filtering across different dimensions**.

|Choice|Explanation|
|---|---|
|AWS Budgets|Allows customers to establish cost and usage budgets, monitor spending against budgets and receive alerts.|
|AWS Support|Provides assistance with billing enquiries and technical issues rather than graphical cost analysis.|
|**AWS Cost Explorer**|Provides graphical visualization, filtering and analysis of AWS costs and usage over time.|
|AWS Bills|Provides detailed monthly billing information and incurred charges rather than interactive historical cost analysis.|

### **Exam Focus**

|Billing and Cost Management Tool|Exam Clue|
|---|---|
|**AWS Cost Explorer**|Visualize, filter and analyze costs and usage over time|
|**AWS Budgets**|Set budgets and receive spending alerts|
|**AWS Pricing Calculator**|Estimate costs before deploying resources|
|**AWS Bills**|View monthly charges and billing breakdowns|
|**AWS Support**|Billing and technical assistance|

- **Graphical visualization of historical AWS spending - AWS Cost Explorer**
- **Filter costs by Region, service or usage type - AWS Cost Explorer**
- **Receive alerts when spending exceeds budget thresholds - AWS Budgets**
- **Estimate future infrastructure costs before deployment - AWS Pricing Calculator**

**Important distinction:** AWS Cost Explorer focuses on analyzing costs, while AWS Budgets focuses on monitoring spending against predefined budgets.

## **62. Practice Question**

### **Question**

A web administrator maintains several public and private web-based resources for an organization.

Which service can they use to keep track of the expiry dates of SSL/TLS certificates, as well as updating and renewing them?

### **Choices**

A. AWS Data Lifecycle Manager  
B. AWS Firewall Manager  
C. AWS License Manager  
D. AWS Certificate Manager

### **Answers**

**D. AWS Certificate Manager**

### **Why**

**AWS Certificate Manager (ACM)** allows customers to provision, manage and deploy public and private SSL/TLS certificates for use with supported AWS services.

It simplifies certificate lifecycle management, including:
- Certificate provisioning
- Certificate expiration monitoring
- Certificate deployment
- Managed renewal of eligible certificates

This reduces the administrative effort required to manage certificates manually and helps prevent service disruptions caused by expired certificates.

The key clues are **SSL/TLS certificates**, **certificate expiration** and **certificate renewal**.

|Choice|Explanation|
|---|---|
|Amazon Data Lifecycle Manager|Automates the creation, retention and deletion of EBS snapshots and EBS-backed Amazon Machine Images (AMIs).|
|AWS Firewall Manager|Centrally manages firewall rules and security policies across AWS accounts and resources.|
|AWS License Manager|Helps organizations manage software licenses and reduce licensing compliance risks.|
|**AWS Certificate Manager**|Provisions, manages and renews eligible SSL/TLS certificates.|

**Clarification:** ACM provides managed renewal for eligible ACM-issued certificates. Imported certificates generally require customers to manage renewal themselves.

### **Exam Focus**

|Security and Management Service|Exam Clue|
|---|---|
|**AWS Certificate Manager (ACM)**|SSL/TLS certificate provisioning, management and renewal|
|**AWS CloudHSM**|Dedicated cryptographic hardware and cryptographic processing|
|**AWS KMS**|Managed encryption keys|
|**AWS Secrets Manager**|Store and rotate credentials and secrets|
|**AWS License Manager**|Software license management|
|**Amazon Data Lifecycle Manager**|Automated EBS snapshot lifecycle management|

- **Manage SSL/TLS certificates - AWS Certificate Manager**
- **Automatically renew eligible SSL/TLS certificates - AWS Certificate Manager**
- **Offload SSL/TLS cryptographic processing to dedicated hardware - AWS CloudHSM**
- **Manage third-party software licenses - AWS License Manager**
- **Automate EBS snapshot creation and retention - Amazon Data Lifecycle Manager**

**Important distinction:** AWS Certificate Manager manages certificates, while AWS CloudHSM provides hardware-based cryptographic processing and greater control over cryptographic keys.

## **63. Practice Question**

### **Question**

What is the primary benefit of using Amazon S3?

### **Choices**

A. Unlimited data storage  
B. High-performance compute capacity  
C. Managed database capabilities  
D. Low-latency storage

### **Answers**

**A. Unlimited data storage**

### **Why**

**Amazon Simple Storage Service (Amazon S3)** is a fully managed object storage service that provides virtually unlimited storage capacity with scalability, durability and high availability.

Customers can store large amounts of data without provisioning or managing the underlying storage infrastructure.

Common use cases include:
- Backups and archives
- Static website content
- Photos and videos
- User-uploaded files
- Data lakes

|Choice|Explanation|
|---|---|
|**Unlimited data storage**|Amazon S3 provides virtually unlimited aggregate object storage capacity that scales with customer requirements.|
|High-performance compute capacity|Compute services such as Amazon EC2 provide processing capacity. Amazon S3 is a storage service.|
|Managed database capabilities|Amazon S3 stores objects rather than providing traditional managed database functionality. Amazon RDS and Amazon DynamoDB are database services.|
|Low-latency storage|Although S3 offers fast object retrieval through several storage classes, low-latency block storage for applications running on EC2 is more closely associated with Amazon EBS.|

**Clarification:** Virtually unlimited storage refers to aggregate storage capacity. Individual S3 objects are still subject to service limits.

### **Exam Focus**

|AWS Service|Primary Purpose|
|---|---|
|**Amazon S3**|Scalable and durable object storage|
|**Amazon EBS**|Persistent, low-latency block storage|
|**Amazon EFS**|Shared file storage|
|**Amazon EC2**|Virtual server compute capacity|
|**Amazon RDS**|Managed relational databases|
|**Amazon DynamoDB**|Managed NoSQL databases|

- **Virtually unlimited object storage capacity - Amazon S3**
- **Store files, backups, photos and videos - Amazon S3**
- **Store structured relational data - Amazon RDS**
- **Store key-value and document data - Amazon DynamoDB**
- **Low-latency block storage for EC2 instances - Amazon EBS**

**Important distinction:** Amazon S3 is a storage service, not a database service. Its primary purpose is storing and retrieving objects rather than managing database records and transactions.

## **64. Practice Question**

### **Question**

An administrator is looking to deploy Linux-based workloads requiring shared file access and up to petabytes of data storage.

What is the best-suited file storage option to use?

### **Choices**

A. Amazon EFS  
B. Amazon S3  
C. AWS Snowball  
D. Amazon EBS

### **Answers**

**A. Amazon EFS**

### **Why**

**Amazon Elastic File System (Amazon EFS)** is a fully managed, elastic file storage service designed to provide shared file access for Linux-based workloads.

It supports the **Network File System (NFS)** protocol, allowing multiple compute resources to access the same file system concurrently.

Amazon EFS automatically grows and shrinks as files are added or removed and can scale to petabytes of data.

The key clues are:
- **Linux-based workloads**
- **Shared file access**
- **Petabyte-scale storage**
- **Elastic file system**

|Choice|Explanation|
|---|---|
|**Amazon EFS**|Provides scalable, shared NFS file storage suitable for multiple Linux-based workloads.|
|Amazon S3|Provides object storage rather than a traditional shared NFS file system.|
|AWS Snowball|Provides data transport and migration capabilities rather than ongoing shared file storage.|
|Amazon EBS|Provides persistent block storage for EC2 instances rather than a managed shared file system.|

### **Exam Focus**

|Storage Service|Storage Type|Exam Clue|
|---|---|---|
|**Amazon S3**|Object storage|Files, backups, static content and data lakes|
|**Amazon EBS**|Block storage|Persistent storage volumes for EC2|
|**Amazon EFS**|File storage|Shared Linux file system using NFS|
|**Amazon FSx for Windows File Server**|File storage|Shared Windows file system using SMB|
|**AWS Snowball**|Data transport|Large-scale data migration|

- **Shared file access across multiple Linux instances - Amazon EFS**
- **Elastic NFS file system - Amazon EFS**
- **Automatically grow and shrink file storage capacity - Amazon EFS**
- **Persistent block storage for EC2 - Amazon EBS**
- **Large-scale offline data migration - AWS Snowball**

**Important distinction:** Amazon EFS provides shared file storage, Amazon EBS provides block storage, and Amazon S3 provides object storage.

## **65. Practice Question**

### **Question**

Which of the following are benefits of Amazon Relational Database Service (Amazon RDS)? **(Choose two.)**

### **Choices**

A. DB owner can resize the CPU and memory capacity as required.  
B. It allows you to store unstructured data.  
C. Automated patches and backups.  
D. It allows you to store NoSQL data.

### **Answers**

**A. DB owner can resize the CPU and memory capacity as required.**
**C. Automated patches and backups.**

### **Why**

**Amazon Relational Database Service (Amazon RDS)** is a managed database service that simplifies the setup, operation and scaling of relational databases in the cloud.

Amazon RDS provides resizable compute capacity and automates time-consuming database administration tasks, including:

- Hardware provisioning
- Database setup
- Database patching
- Automated backups

Customers can focus on application development rather than manually performing routine database infrastructure maintenance.

|Choice|Explanation|
|---|---|
|**Resize CPU and memory capacity**|Amazon RDS provides resizable database compute capacity to meet changing workload requirements.|
|Store unstructured data|Amazon RDS is primarily designed for structured relational data. Amazon S3 is more appropriate for general-purpose storage of unstructured files and objects.|
|**Automated patches and backups**|Amazon RDS automates routine database maintenance and backup operations, reducing administrative overhead.|
|Store NoSQL data|Amazon RDS is a relational database service. Amazon DynamoDB is the AWS service commonly associated with managed NoSQL databases.|

### **Exam Focus**

|AWS Service|Primary Purpose|
|---|---|
|**Amazon RDS**|Managed relational databases|
|**Amazon DynamoDB**|Managed NoSQL databases|
|**Amazon S3**|Object storage, including unstructured files|
|**Amazon Redshift**|Managed data warehouse|
|**Amazon ElastiCache**|Managed in-memory caching|

#### **Amazon RDS Benefits**

- **Resizable CPU and memory capacity**
- **Automated backups**
- **Automated database patching**
- **Reduced database administration overhead**
- **Managed infrastructure provisioning**
- **High availability through Multi-AZ deployments**
- **Read scalability through Read Replicas**

#### **Amazon RDS vs Self-Managed Database on EC2**

|Responsibility|Database on EC2|Amazon RDS|
|---|---|---|
|Physical infrastructure|AWS|AWS|
|Guest OS maintenance|Customer|AWS|
|Database software installation|Customer|AWS|
|Database patching|Customer|AWS-managed|
|Automated backup mechanism|Customer configures and manages|Built-in AWS capability|
|Database access permissions|Customer|Customer|
|Application data|Customer|Customer|

**Key exam associations:**

- **Managed relational database - Amazon RDS**
- **Automated database patching and backups - Amazon RDS**
- **Resize database compute capacity - Amazon RDS**
- **Database high availability and automatic failover - RDS Multi-AZ**
- **Improve database read performance - RDS Read Replicas**
- **Managed NoSQL database - Amazon DynamoDB**

**Important distinction:** Amazon RDS reduces database administration responsibilities, but customers remain responsible for their data, database access permissions and application-level security.