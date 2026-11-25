## **1.1 Practice Question 1**

### **Original Question**

A company is moving its office and must establish an encrypted connection to AWS. Which AWS service will meet this requirement?

### **Choices**

A. Amazon Route 53  
B. AWS Direct Connect  
C. Amazon Connect  
D. AWS Site-to-Site VPN

### **Correct Answer**

**D. AWS Site-to-Site VPN**

### **Why?**

The key requirement is an **encrypted connection between an office network and AWS**.

**AWS Site-to-Site VPN** is a managed VPN service that establishes a secure, encrypted connection between AWS and an on-premises or branch-office network.

| Option                   | Explanation                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| Amazon Route 53          | Provides DNS, domain registration, routing and health checks.                                     |
| AWS Direct Connect       | Provides a dedicated, private network connection to AWS, but traffic is not encrypted by default. |
| Amazon Connect           | Provides a cloud-based contact center for customer service.                                       |
| **AWS Site-to-Site VPN** | Establishes an encrypted connection between two networks.                                         |

### **Exam Focus**

- **Encrypted office network connection - AWS Site-to-Site VPN**
- **Dedicated private network connection - AWS Direct Connect**
- **DNS and domain registration - Amazon Route 53**
- **Cloud-based contact center - Amazon Connect**
- A **private connection** does not necessarily mean an **encrypted connection**.

## **2.1 Practice Question 2**

### **Original Question**

Which option is an AWS Cloud Adoption Framework (AWS CAF) foundational capability for the operations perspective?

### **Choices**

A. Product management  
B. Performance and capacity management  
C. Identity and access management  
D. Application portfolio management

### **Correct Answer**

**B. Performance and capacity management**

### **Why?**

The **operations perspective** of the AWS Cloud Adoption Framework (AWS CAF) focuses on operating cloud workloads effectively and ensuring they meet business requirements.

**Performance and capacity management** involves ensuring that workloads have sufficient resources to meet performance demands.

| Option                                  | AWS CAF Perspective | Explanation                                                    |
| --------------------------------------- | ------------------- | -------------------------------------------------------------- |
| Product management                      | Business            | Focuses on delivering business value through products.         |
| **Performance and capacity management** | **Operations**      | Ensures sufficient capacity and workload performance.          |
| Identity and access management          | Security            | Manages identities, permissions and resource access.           |
| Application portfolio management        | Governance          | Oversees and manages the organization's application portfolio. |

### **Exam Focus**

|AWS CAF Capability|Perspective|
|---|---|
|Product management|**Business**|
|Performance and capacity management|**Operations**|
|Identity and access management|**Security**|
|Application portfolio management|**Governance**|

**Remember:** AWS CAF perspectives and AWS Well-Architected Framework pillars are different classifications.

## **3.1 Practice Question 3**

### **Original Question**

What is an IAM best practice for AWS account root user access keys?

### **Choices**

A. Use root user credentials to access production database instances.  
B. Delete all root user access keys, if possible.  
C. Allow the system administrator group to use the root user credentials for daily access.  
D. Use root user credentials to access sensitive information stored on AWS.

### **Correct Answer**

**B. Delete all root user access keys, if possible.**

### **Why?**

The **AWS account root user** has unrestricted access to the AWS account and its resources.

Creating root user access keys introduces unnecessary security risks. Root user credentials should only be used for tasks that specifically require the root user.

|Option|Explanation|
|---|---|
|A. Access production databases|Access should be granted through appropriate IAM permissions instead of root credentials.|
|**B. Delete root user access keys**|Reduces the security risk associated with unrestricted programmatic access.|
|C. Allow administrators to use root credentials|Administrators should use IAM identities with appropriate permissions for daily activities.|
|D. Access sensitive information|Sensitive information should be protected using restricted IAM permissions and least privilege.|

### **Exam Focus**

- **Avoid creating root user access keys.**
- Delete existing root user access keys if possible.
- Never use the root user for everyday tasks.
- Use the root user only for tasks that require root user access.
- **Restrict access to sensitive information - IAM policies**
- **Grant only required permissions - Principle of least privilege**

## **4.1 Practice Question 4**

### **Original Question**

Which AWS service offers the MOST cost-effective means of storing static images?

### **Choices**

A. Amazon Elastic Block Store (Amazon EBS)  
B. Amazon Elastic File System (Amazon EFS)  
C. Amazon S3  
D. Amazon DynamoDB

### **Correct Answer**

**C. Amazon S3**

### **Why?**

The key requirements are **static image storage** and **cost-effectiveness**.

**Amazon Simple Storage Service (Amazon S3)** provides scalable object storage and is designed for storing files, images, videos and other static content. Customers pay for the storage they consume.

|Service|Explanation|
|---|---|
|Amazon EBS|Block storage primarily used with EC2 instances. Pricing depends on provisioned storage and performance requirements.|
|Amazon EFS|Scalable shared file storage designed for file system workloads rather than cost-effective static content storage.|
|**Amazon S3**|Object storage that is well suited for cost-effective storage of static images and files.|
|Amazon DynamoDB|NoSQL database designed for key-value and document-based data rather than static image storage.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Object storage|**Amazon S3**|
|Static images, videos and files|**Amazon S3**|
|Persistent block storage for EC2|**Amazon EBS**|
|Shared file system|**Amazon EFS**|
|NoSQL key-value database|**Amazon DynamoDB**|

**Exam clue: Cost-effective static content storage - Amazon S3**

## **5.1 Practice Question 5**

### **Original Question**

A company is launching a new application in the AWS Cloud. The application will run on an Amazon EC2 instance. More EC2 instances will be needed when the workload increases.

Which AWS service or tool can the company use to launch the number of EC2 instances that will be needed to handle the workload?

### **Choices**

A. AWS Systems Manager  
B. AWS App2Container (A2C)  
C. Elastic Load Balancing (ELB)  
D. Amazon EC2 Auto Scaling

### **Correct Answer**

**D. Amazon EC2 Auto Scaling**

### **Why?**

The key requirement is to **automatically launch additional EC2 instances when workload demand increases**.

**Amazon EC2 Auto Scaling** automatically adjusts the number of EC2 instances to meet application demand.

|Service|Explanation|
|---|---|
|AWS Systems Manager|Provides operational visibility and management of resources across AWS, on-premises environments and other clouds.|
|AWS App2Container|Helps migrate existing applications into containers that can run on AWS.|
|Elastic Load Balancing|Distributes incoming traffic across multiple targets but does not launch additional EC2 instances.|
|**Amazon EC2 Auto Scaling**|Automatically adjusts the number of EC2 instances based on workload requirements.|

### **Exam Focus**

### **EC2 Auto Scaling vs Elastic Load Balancing**

|Service|Responsibility|
|---|---|
|**Amazon EC2 Auto Scaling**|Adds or removes EC2 instances.|
|**Elastic Load Balancing**|Distributes traffic across available targets.|

Additional associations:

- **Automatically adjust compute capacity - EC2 Auto Scaling**
- **Distribute incoming traffic - Elastic Load Balancing**
- **Manage infrastructure and resources - AWS Systems Manager**
- **Migrate applications into containers - AWS App2Container**

## **6.1 Practice Question 6**

### **Original Question**

Which of the following are security principles in the AWS Well-Architected Framework? (Select TWO)

### **Choices**

A. Monitor, alert, and audit actions and changes to AWS resources.  
B. Analyze and attribute expenditures.  
C. Perform operations as code.  
D. Protect data in transit and at rest.  
E. Deploy globally in minutes.

### **Correct Answer**

**A. Monitor, alert, and audit actions and changes to AWS resources.**
**D. Protect data in transit and at rest.**

### **Why?**

The **Security pillar** of the AWS Well-Architected Framework focuses on protecting information, systems and resources.

The two applicable security design principles are **enable traceability** and **protect data in transit and at rest**.

|Option|Well-Architected Pillar|Explanation|
|---|---|---|
|**Monitor, alert, and audit actions and changes**|**Security**|Enables traceability and visibility into resource activities.|
|Analyze and attribute expenditures|Cost Optimization|Understands and allocates cloud spending.|
|Perform operations as code|Operational Excellence|Automates operational activities using code.|
|**Protect data in transit and at rest**|**Security**|Protects data while it is being transmitted or stored.|
|Deploy globally in minutes|Performance Efficiency|Uses AWS global infrastructure to deploy workloads efficiently.|

### **Exam Focus**

|Design Principle|Well-Architected Pillar|
|---|---|
|Enable traceability|**Security**|
|Monitor, alert and audit actions|**Security**|
|Protect data in transit and at rest|**Security**|
|Analyze and attribute expenditures|**Cost Optimization**|
|Perform operations as code|**Operational Excellence**|
|Deploy globally in minutes|**Performance Efficiency**|

## **7.1 Practice Question 7**

### **Original Question**

Which of the following AWS compute services allows you to run applications without having to manage or provision servers?

### **Choices**

A. AWS Lambda  
B. Amazon EC2  
C. Amazon Elastic Container Service (Amazon ECS)  
D. Amazon RDS

### **Correct Answer**

**A. AWS Lambda**

### **Why?**

The key requirement is to **run application code without provisioning or managing servers**.

**AWS Lambda** is a serverless compute service that executes code in response to events. AWS manages the underlying infrastructure, patching, maintenance and capacity planning.

|Service|Explanation|
|---|---|
|**AWS Lambda**|Serverless compute service that runs code without requiring server management.|
|Amazon EC2|Provides virtual servers that customers must provision and manage, including operating system patching.|
|Amazon ECS|Container orchestration service. Server management depends on the underlying compute platform, such as EC2 or AWS Fargate.|
|Amazon RDS|Managed relational database service rather than a general-purpose serverless application compute service. Standard RDS instances require capacity selection.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Serverless, event-driven code execution|**AWS Lambda**|
|Virtual servers|**Amazon EC2**|
|Container orchestration|**Amazon ECS**|
|Serverless container compute|**AWS Fargate**|
|Managed relational database|**Amazon RDS**|

**Important distinction:** Amazon ECS manages container orchestration, while AWS Fargate allows containers to run without managing the underlying servers.

## **8.1 Practice Question 8**

### **Original Question**

Which AWS Cloud design and Well-Architected principles can help increase reliability? (Select TWO)

### **Choices**

A. Adopting a consumption model  
B. Testing recovery procedures  
C. Measuring overall efficiency  
D. Using monolithic architecture  
E. Automatically recovering from failure

### **Correct Answer**

**B. Testing recovery procedures**
**E. Automatically recovering from failure**

### **Why?**

The **Reliability pillar** of the AWS Well-Architected Framework focuses on ensuring workloads perform their intended functions consistently and recover from failures.

**Testing recovery procedures** validates that recovery processes work as expected, while **automatically recovering from failure** reduces the need for manual intervention.

| Option                                    | Explanation                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Adopting a consumption model              | Cost Optimization principle that focuses on paying only for consumed resources.                   |
| **Testing recovery procedures**           | Reliability principle that validates the ability to recover from failures.                        |
| Measuring overall efficiency              | Cost Optimization principle that focuses on achieving required outputs at the best possible cost. |
| Using monolithic architecture             | Creates tightly coupled components. Loosely coupled architectures help isolate failures.          |
| **Automatically recovering from failure** | Reliability principle that enables recovery without manual intervention.                          |

### **Exam Focus**

|Design Principle|Well-Architected Pillar|
|---|---|
|Test recovery procedures|**Reliability**|
|Automatically recover from failure|**Reliability**|
|Adopt a consumption model|**Cost Optimization**|
|Measure overall efficiency|**Cost Optimization**|

Important distinctions:

- **Recover from failures - Reliability**
- **Reduce unnecessary spending - Cost Optimization**
- **Reduce dependencies between components - Loose coupling**

## **9.1 Practice Question 9**

### **Original Question**

A company does not own a physical data center but needs a network solution that connects employee laptops directly to the AWS Cloud.

Which AWS service will meet this requirement?

### **Choices**

A. AWS Client VPN  
B. Amazon CloudFront  
C. Amazon Connect  
D. AWS Outposts

### **Correct Answer**

**A. AWS Client VPN**

### **Why?**

The key requirement is to securely connect **individual employee laptops** to AWS rather than connecting an entire on-premises network.

**AWS Client VPN** is a managed, client-based VPN service that allows individual users to securely access AWS and on-premises resources from any location using an OpenVPN-based client.

| Service            | Explanation                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **AWS Client VPN** | Provides secure remote access to AWS resources for individual devices and users.                             |
| Amazon CloudFront  | Content delivery network (CDN) that accelerates static and dynamic content delivery through edge locations.  |
| Amazon Connect     | Cloud-based contact center service for customer support.                                                     |
| AWS Outposts       | Extends AWS infrastructure and services to customer premises for local processing and low-latency workloads. |

### **Exam Focus**

### **AWS Client VPN vs AWS Site-to-Site VPN vs AWS Direct Connect**

|Service|Connection Type|Exam Clue|
|---|---|---|
|**AWS Client VPN**|Individual device to network|Remote employees, laptops|
|**AWS Site-to-Site VPN**|Network to network|Encrypted office or data center connection|
|**AWS Direct Connect**|Dedicated private network connection|Dedicated connectivity to AWS|

Additional associations:

- **Remote employee access - AWS Client VPN**
- **Global content delivery - Amazon CloudFront**
- **AWS infrastructure on customer premises - AWS Outposts**
- **Cloud contact center - Amazon Connect**

## **10.1 Practice Question 10**

### **Original Question**

An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season.

Which advantages of moving to the AWS Cloud would MOST benefit the company? (Select TWO)

### **Choices**

A. AWS service quotas  
B. Elasticity  
C. Global footprint  
D. AWS shared responsibility model  
E. Pay-as-you-go pricing

### **Correct Answer**

**B. Elasticity**
**E. Pay-as-you-go pricing**

### **Why?**

The key requirements are to handle **unpredictable seasonal demand** and avoid paying for unnecessary infrastructure during periods of low demand.

**Elasticity** allows the company to increase or decrease resource capacity according to demand without having to predict infrastructure requirements in advance.

**Pay-as-you-go pricing** allows the company to pay only for the resources consumed rather than maintaining infrastructure for peak demand throughout the year.

| Option                          | Explanation                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| AWS service quotas              | Define limits on the number of AWS resources that can be created or used.                                  |
| **Elasticity**                  | Allows resource capacity to increase and decrease according to changing demand.                            |
| Global footprint                | Enables worldwide deployment and global reach but does not directly address seasonal demand fluctuations.  |
| AWS shared responsibility model | Defines security responsibilities between AWS and the customer rather than addressing capacity or pricing. |
| **Pay-as-you-go pricing**       | Allows the company to pay for consumed resources instead of maintaining unused infrastructure.             |

### **Exam Focus**

| Concept                         | Exam Clue                                           |
| ------------------------------- | --------------------------------------------------- |
| **Elasticity**                  | Increase and decrease capacity according to demand. |
| **Scalability**                 | Ability to handle growing workloads.                |
| **Pay-as-you-go pricing**       | Pay only for resources consumed.                    |
| **Global footprint**            | Deploy workloads and reach customers worldwide.     |
| **Service quotas**              | AWS service resource limits.                        |
| **Shared Responsibility Model** | Security of the cloud vs security in the cloud.     |

**Common scenario associations:**

- **Unpredictable or seasonal workloads - Elasticity**
- **Stop guessing infrastructure capacity - Elasticity**
- **Avoid paying for unused capacity - Pay-as-you-go pricing**
- **Avoid large upfront infrastructure investments - Pay-as-you-go pricing**

## **11.1 Practice Question 11**

### **Original Question**

A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service.

Which migration strategy should the company use?

### **Choices**

A. Rehost  
B. Repurchase  
C. Refactor  
D. Replatform

### **Correct Answer**

**D. Replatform**

### **Why?**

The key requirement is to migrate from a **self-managed database to an AWS managed database service** without significantly changing the core architecture.

**Replatform**, also known as **lift and reshape**, involves making targeted optimizations during migration. Moving a self-managed MySQL database to Amazon RDS for MySQL maintains the same database engine while reducing operational overhead.

| Migration Strategy | Explanation                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Rehost             | Also known as lift and shift. Moves workloads to AWS without architectural changes. The database would remain self-managed.      |
| Repurchase         | Also known as drop and shop. Replaces an existing product with a different product, potentially requiring new software licenses. |
| Refactor           | Re-architects and modifies application code to benefit from cloud-native features. This level of change is unnecessary.          |
| **Replatform**     | Makes targeted optimizations, such as moving to a managed database service, without changing the core architecture.              |

### **Exam Focus**

|Migration Strategy|Exam Clue|
|---|---|
|**Rehost**|Lift and shift|
|**Replatform**|Lift and reshape|
|**Repurchase**|Drop and shop|
|**Refactor**|Re-architect and modify application code|

**Exam clue: Migrate a self-managed MySQL database to Amazon RDS - Replatform**

## **12.1 Practice Question 12**

### **Original Question**

A company wants to recover objects that were accidentally overwritten or deleted in an Amazon S3 bucket.

Which S3 feature should the company enable?

### **Choices**

A. S3 Server-side encryption  
B. S3 Access points  
C. S3 Bucket versioning  
D. S3 Lifecycle policies

### **Correct Answer**

**C. S3 Bucket versioning**

### **Why?**

The key requirement is to **recover accidentally overwritten or deleted objects**.

**S3 Versioning** maintains multiple versions of an object within an S3 bucket.

When an object is overwritten, Amazon S3 retains its previous version. When an object is deleted normally in a versioning-enabled bucket, Amazon S3 inserts a **delete marker** instead of permanently removing the previous versions.

This allows previous object versions to be recovered.

| S3 Feature                | Explanation                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| S3 Server-side encryption | Protects stored data through encryption but does not provide recovery from accidental overwrites or deletions. |
| S3 Access Points          | Simplifies access management for objects in S3 buckets but does not maintain previous object versions.         |
| **S3 Bucket versioning**  | Maintains multiple object versions and enables recovery from accidental deletion or overwriting.               |
| S3 Lifecycle policies     | Automates transitions between storage classes and object expiration rather than recovering previous versions.  |

### **Exam Focus**

|Requirement|S3 Feature|
|---|---|
|Recover accidentally deleted objects|**S3 Versioning**|
|Recover overwritten objects|**S3 Versioning**|
|Encrypt stored objects|**S3 Server-side encryption**|
|Simplify object access management|**S3 Access Points**|
|Automatically transition storage classes|**S3 Lifecycle policies**|

**Exam clue: Accidental deletion or overwriting - S3 Versioning**

## **13.1 Practice Question 13**

### **Original Question**

A company needs to generate reports for business intelligence and operational analytics on petabytes of semi-structured and structured data. These reports are produced from standard SQL queries on data that is in an Amazon S3 data lake.

Which AWS service provides the ability to analyze this data?

### **Choices**

A. Amazon Neptune  
B. Amazon RDS  
C. Amazon DynamoDB  
D. Amazon Redshift

### **Correct Answer**

**D. Amazon Redshift**

### **Why?**

The key requirements are **petabyte-scale data analytics**, **business intelligence** and **standard SQL queries**.

**Amazon Redshift** is a fully managed data warehouse service designed for large-scale analytics.

**Amazon Redshift Spectrum** allows Amazon Redshift to query data directly from an Amazon S3 data lake.

|Service|Explanation|
|---|---|
|Amazon Neptune|Managed graph database designed for storing and querying relationships rather than large-scale SQL analytics.|
|Amazon RDS|Managed relational database optimized for transactional processing and day-to-day database operations rather than petabyte-scale data warehouse analytics.|
|Amazon DynamoDB|Managed NoSQL database optimized for high-performance applications with single-digit millisecond latency. It is not designed for large-scale standard SQL analytics.|
|**Amazon Redshift**|Managed data warehouse designed for petabyte-scale analytics, reporting and business intelligence using SQL.|

### **Exam Focus**

|Database Service|Exam Clue|
|---|---|
|**Amazon Neptune**|Graph databases and relationships|
|**Amazon RDS**|Relational databases and transactional workloads|
|**Amazon DynamoDB**|NoSQL and low-latency application workloads|
|**Amazon Redshift**|Data warehousing, analytics and business intelligence|
|**Amazon Redshift Spectrum**|Query data directly from Amazon S3|

**Exam clue: Petabyte-scale SQL analytics and business intelligence - Amazon Redshift**

## **14.1 Practice Question 14**

### **Original Question**

A company is building a mobile application that needs a database capable of handling millions of requests with low latency. The application requires a fully managed NoSQL database that can automatically scale to accommodate changing workloads.

Which AWS service should the company use?

### **Choices**

A. Amazon ElastiCache  
B. Amazon Redshift  
C. Amazon RDS  
D. Amazon DynamoDB

### **Correct Answer**

**D. Amazon DynamoDB**

### **Why?**

The key requirements are a **fully managed NoSQL database**, **low latency** and **automatic scaling**.

**Amazon DynamoDB** is a fully managed NoSQL database service designed to provide fast, predictable performance and seamless scalability.

| Service             | Explanation                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon ElastiCache  | Provides in-memory caching to improve application performance rather than serving as the primary persistent database in this scenario. |
| Amazon Redshift     | Data warehouse designed for large-scale analytics and business intelligence.                                                           |
| Amazon RDS          | Managed relational database service designed for SQL-based workloads.                                                                  |
| **Amazon DynamoDB** | Fully managed NoSQL database that provides low latency and supports changing workload demands.                                         |

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|In-memory caching|**Amazon ElastiCache**|
|Data warehousing|**Amazon Redshift**|
|Managed relational database|**Amazon RDS**|
|Managed NoSQL database|**Amazon DynamoDB**|
|Single-digit millisecond database performance|**Amazon DynamoDB**|

**Exam clue: NoSQL, low latency and automatic scaling - Amazon DynamoDB**

## **15.1 Practice Question 15**

### **Original Question**

A company is building a web application using AWS. Which AWS service will help prevent network layer DDoS attacks against the web application?

### **Choices**

A. Amazon GuardDuty  
B. AWS Web Application Firewall (WAF)  
C. AWS Shield  
D. AWS Firewall Manager

### **Correct Answer**

**C. AWS Shield**

### **Why?**

The key requirement is protection against **network-layer Distributed Denial-of-Service (DDoS) attacks**.

**AWS Shield** is a managed DDoS protection service that helps protect applications running on AWS against common network-layer and transport-layer DDoS attacks.

| Service              | Explanation                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon GuardDuty     | Threat detection service that monitors AWS accounts and workloads for malicious activity and unauthorized behavior. It primarily detects threats rather than mitigating active DDoS attacks. |
| AWS WAF              | Protects web applications against application-layer attacks such as SQL injection and cross-site scripting (XSS). It does not address network-layer DDoS attacks.                            |
| **AWS Shield**       | Provides managed protection against DDoS attacks, including network-layer and transport-layer attacks.                                                                                       |
| AWS Firewall Manager | Centrally configures and manages firewall rules and security policies across AWS accounts. It does not independently provide DDoS protection.                                                |

### **Exam Focus**

|Security Service|Exam Clue|
|---|---|
|**Amazon GuardDuty**|Threat detection and suspicious activity|
|**AWS WAF**|SQL injection, XSS and application-layer protection|
|**AWS Shield**|DDoS protection|
|**AWS Firewall Manager**|Centralized firewall and security policy management|

### **AWS Shield vs AWS WAF**

|Service|Protection Layer|
|---|---|
|**AWS Shield**|Network layer (Layer 3) and transport layer (Layer 4) DDoS protection|
|**AWS WAF**|Application layer (Layer 7) protection|

**Exam clue: Network-layer DDoS attacks - AWS Shield**

## **16.1 Practice Question 16**

### **Original Question**

A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon DynamoDB.

What is the MOST operationally efficient solution to delegate permissions?

### **Choices**

A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.  
B. Create an IAM user and use its access key and secret access key in the application.  
C. Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance.  
D. Create an IAM role with the required permissions. Attach the role to the administrative IAM user.

### **Correct Answer**

**A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.**

### **Why?**

The key requirement is to **delegate permissions to an EC2 instance** so that its application can securely access other AWS services.

An **IAM role** provides temporary security credentials that allow an EC2 instance to access authorized AWS resources without storing permanent access keys in the application or instance.

This follows AWS security best practices and reduces credential management overhead.

|Option|Explanation|
|---|---|
|**A. Attach an IAM role to EC2**|Provides the application with the required permissions without manually managing long-term credentials.|
|B. Store IAM user access keys in the application|Introduces credential exposure risks and requires manual credential management.|
|C. Store IAM user access keys in a CLI profile|Still requires storing and managing long-term credentials on the EC2 instance.|
|D. Attach an IAM role to an administrative IAM user|Does not grant the EC2 instance the permissions it requires. IAM users can assume roles, but roles are not attached to users in this manner.|

### **Exam Focus**

|IAM Concept|Purpose|
|---|---|
|**IAM User**|Represents an identity that can have long-term credentials.|
|**IAM Role**|Provides temporary security credentials and delegated permissions.|
|**IAM Policy**|Defines allowed or denied actions on AWS resources.|
|**Least privilege**|Grants only the permissions required to perform a task.|

Important reminders:

- Use **IAM roles** to grant AWS services access to other AWS resources.
- Avoid hardcoding access keys in application code.
- Avoid storing unnecessary long-term credentials on EC2 instances.
- Grant only the permissions required by the application.

**Exam clue: EC2 application needs access to S3 or DynamoDB - IAM role attached to EC2**

## **17.1 Practice Question 17**

### **Original Question**

A company needs to perform queries and interactively search and analyze log data. Which AWS service or feature will meet this requirement?

### **Choices**

A. Amazon CloudWatch anomaly detection  
B. Amazon CloudWatch Logs Insights  
C. Amazon EventBridge  
D. Amazon CloudWatch Logs streams

### **Correct Answer**

**B. Amazon CloudWatch Logs Insights**

### **Why?**

The key requirement is to **interactively query, search and analyze log data**.

**Amazon CloudWatch Logs Insights** provides a purpose-built query language for analyzing log data. It also allows users to query multiple log groups in a single operation.

| Service or Feature           | Explanation                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| CloudWatch anomaly detection | Uses machine learning to identify unusual patterns in metrics rather than interactively querying logs.                       |
| **CloudWatch Logs Insights** | Enables interactive searching, querying and analysis of log data.                                                            |
| Amazon EventBridge           | Serverless event bus that connects application components and routes events rather than providing interactive log analysis.  |
| CloudWatch Logs streams      | Stores sequences of log events that share the same source but does not independently provide interactive query capabilities. |

### **Exam Focus**

|Requirement|Service or Feature|
|---|---|
|Identify unusual metric patterns|**CloudWatch anomaly detection**|
|Interactively query and analyze logs|**CloudWatch Logs Insights**|
|Store log events from the same source|**CloudWatch Logs streams**|
|Route events between applications|**Amazon EventBridge**|

**Exam clue: Interactive log queries and analysis - CloudWatch Logs Insights**

## **18.1 Practice Question 18**

### **Original Question**

Which of the following is a benefit of using an AWS managed service?

### **Choices**

A. Increased fixed costs that can be predicted by a finance team  
B. Removal of the need to have a backup strategy  
C. Removal of the need to follow compliance standards  
D. Reduced operational overhead for a company's IT staff

### **Correct Answer**

**D. Reduced operational overhead for a company's IT staff**

### **Why?**

**AWS managed services** reduce the amount of infrastructure management and operational maintenance that customers must perform.

AWS handles various operational tasks depending on the service, allowing IT staff to focus more on business requirements and application development.

| Option                             | Explanation                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Increased fixed costs              | A benefit of cloud computing is trading fixed expenses for variable expenses rather than increasing fixed costs.   |
| Removal of backup strategy         | Some managed services provide automated backups, but customers must still establish appropriate backup strategies. |
| Removal of compliance requirements | Compliance remains a shared responsibility between AWS and the customer.                                           |
| **Reduced operational overhead**   | AWS handles service-specific management tasks, reducing the operational workload of IT staff.                      |

### **Exam Focus**

- **Managed services - Reduced operational overhead**
- **Cloud economics - Trade fixed expenses for variable expenses**
- Managed services allow customers to focus more on business value.
- Managed services do not eliminate customer backup, security or compliance responsibilities.
- Customer responsibilities vary depending on the service being used.

**Exam clue: Reduce infrastructure maintenance and administrative workload - AWS managed services**

## **19.1 Practice Question 19**

### **Original Question**

Which AWS service provides a simple way to set up a new multi-account AWS environment and govern it at scale?

### **Choices**

A. AWS Control Tower  
B. AWS Trusted Advisor  
C. AWS Security Hub  
D. AWS Resource Access Manager

### **Correct Answer**

**A. AWS Control Tower**

### **Why?**

The key requirements are to **set up a multi-account AWS environment** and **govern it at scale**.

**AWS Control Tower** simplifies the setup, governance and management of multiple AWS accounts.

| Service                               | Explanation                                                                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **AWS Control Tower**                 | Simplifies the setup and governance of a multi-account AWS environment.                                                                          |
| AWS Trusted Advisor                   | Inspects AWS environments and provides recommendations based on AWS best practices rather than establishing multi-account environments.          |
| AWS Security Hub                      | Provides centralized security findings and visibility into compliance with security standards rather than setting up multi-account environments. |
| AWS Resource Access Manager (AWS RAM) | Enables resource sharing across AWS accounts rather than establishing and governing those accounts.                                              |

### **Exam Focus**

| Requirement                                   | AWS Service                               |
| --------------------------------------------- | ----------------------------------------- |
| Set up and govern a multi-account environment | **AWS Control Tower**                     |
| AWS best practice recommendations             | **AWS Trusted Advisor**                   |
| Centralized security findings                 | **AWS Security Hub**                      |
| Share AWS resources across accounts           | **AWS Resource Access Manager (AWS RAM)** |

**Exam clue: Set up and govern multiple AWS accounts at scale - AWS Control Tower**

## **20.1 Practice Question 20**

### **Original Question**

Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?

### **Choices**

A. AWS Cost Explorer  
B. Amazon CloudWatch  
C. AWS Budgets  
D. AWS Trusted Advisor

### **Correct Answer**

**A. AWS Cost Explorer**

### **Why?**

The key requirements are to **visualize, understand and analyze AWS spending and usage over time**.

**AWS Cost Explorer** enables customers to visualize and analyze AWS costs and resource usage to understand spending patterns.

| Service               | Explanation                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **AWS Cost Explorer** | Visualizes and analyzes AWS spending and usage over time.                                                                                                                                        |
| Amazon CloudWatch     | Monitors workload performance, metrics and logs rather than providing detailed historical cost analysis.                                                                                         |
| AWS Budgets           | Allows customers to configure custom budgets and receive alerts when spending or usage thresholds are exceeded. Its primary purpose is budget monitoring rather than detailed spending analysis. |
| AWS Trusted Advisor   | Analyzes AWS environments and provides best practice recommendations, including cost optimization recommendations, rather than visualizing historical spending patterns.                         |

### **Exam Focus**

### **AWS Cost Management Tools**

|Service|Exam Clue|
|---|---|
|**AWS Cost Explorer**|Visualize and analyze spending and usage over time|
|**AWS Budgets**|Set budgets and receive spending or usage alerts|
|**AWS Trusted Advisor**|Identify optimization opportunities and receive best practice recommendations|
|**Amazon CloudWatch**|Monitor workload performance, metrics and logs|

Important distinctions:

- **Analyze historical spending patterns - AWS Cost Explorer**
- **Receive alerts when budget thresholds are exceeded - AWS Budgets**
- **Identify cost optimization opportunities - AWS Trusted Advisor**
- **Monitor resource performance - Amazon CloudWatch**

## **21.1 Practice Question 21**

### **Original Question**

A company has existing software licenses that it wants to bring to AWS, but the licensing model requires licensing physical cores.

How can the company meet this requirement in the AWS Cloud?

### **Choices**

A. Launch an Amazon EC2 instance on a Dedicated Host.  
B. Launch an Amazon EC2 instance with default tenancy.  
C. Purchase Reserved Instances.  
D. Create an On-Demand Capacity Reservation.

### **Correct Answer**

**A. Launch an Amazon EC2 instance on a Dedicated Host.**

### **Why?**

The key requirement is to use existing software licenses that are tied to **physical CPU cores**.

**Amazon EC2 Dedicated Hosts** provide physical servers dedicated to a customer's use. They provide visibility into physical hardware, allowing customers to bring existing server-bound software licenses to AWS.

|Option|Explanation|
|---|---|
|**Dedicated Hosts**|Provides dedicated physical servers and supports existing software licenses tied to physical cores or sockets.|
|Default tenancy|EC2 instances run on physical hardware shared with other AWS customers. Customers do not control the underlying physical hardware.|
|Reserved Instances|Provides pricing discounts in exchange for a 1-year or 3-year commitment. Does not inherently provide control over physical hardware.|
|On-Demand Capacity Reservation|Reserves EC2 compute capacity in a specific Availability Zone but does not satisfy physical-core licensing requirements.|

### **Exam Focus**

|Requirement|EC2 Option|
|---|---|
|Bring Your Own License (BYOL) tied to physical cores|**Dedicated Hosts**|
|Shared physical hardware|**Default tenancy**|
|Discounted pricing with a long-term commitment|**Reserved Instances**|
|Guaranteed compute capacity in a specific Availability Zone|**On-Demand Capacity Reservation**|

**Exam clue: Existing software licenses tied to physical cores or sockets - EC2 Dedicated Hosts**

## **22.1 Practice Question 22**

### **Original Question**

A company needs to run an application on Amazon EC2 instances. The running workload cannot be interrupted. The company needs an instance purchasing option that requires no commitment.

Which instance purchasing option will meet these requirements MOST cost-effectively?

### **Choices**

A. Reserved Instances  
B. On-Demand Instances  
C. Dedicated Hosts  
D. Spot Instances

### **Correct Answer**

**B. On-Demand Instances**

### **Why?**

The two key requirements are **no long-term commitment** and a **workload that cannot tolerate interruptions from capacity reclamation**.

**On-Demand Instances** allow customers to pay for compute capacity by the hour or second, depending on the instance and operating system, without a long-term commitment.

| Option                  | Explanation                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Reserved Instances      | Provides significant discounts but requires a 1-year or 3-year commitment.                                                 |
| **On-Demand Instances** | Provides flexible compute capacity without a long-term commitment or Spot-style interruptions.                             |
| Dedicated Hosts         | Provides dedicated physical servers and supports server-bound licenses but introduces unnecessary costs for this scenario. |
| Spot Instances          | Provides discounted access to unused EC2 capacity but can be interrupted when AWS needs the capacity back.                 |

### **Exam Focus**

| EC2 Purchasing Option   | Exam Clue                                                   |
| ----------------------- | ----------------------------------------------------------- |
| **On-Demand Instances** | No commitment, flexible workloads                           |
| **Reserved Instances**  | 1-year or 3-year commitment                                 |
| **Spot Instances**      | Discounted unused capacity, interruption-tolerant workloads |
| **Dedicated Hosts**     | Dedicated physical hardware and software licensing          |

Important distinctions:

- **No commitment and cannot tolerate Spot interruptions - On-Demand Instances**
- **No commitment and can tolerate interruptions - Spot Instances**
- **Existing physical-core software licenses - Dedicated Hosts**

## **23.1 Practice Question 23**

### **Original Question**

Which AWS service can help a company detect an outage of its website servers and redirect users to alternate servers?

### **Choices**

A. Amazon CloudFront  
B. Amazon GuardDuty  
C. AWS Trusted Advisor  
D. Amazon Route 53

### **Correct Answer**

**D. Amazon Route 53**

### **Why?**

The key requirements are to **detect unhealthy website servers** and **redirect users to healthy alternative servers**.

**Amazon Route 53** is a managed DNS service that supports health checks and failover routing policies.

When a primary endpoint becomes unhealthy, Route 53 can direct subsequent DNS requests to a healthy secondary endpoint.

| Service             | Explanation                                                                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon CloudFront   | Content delivery network that accelerates content delivery through edge locations. Its primary purpose is content delivery rather than DNS-based failover. |
| Amazon GuardDuty    | Detects malicious activity and unauthorized behavior rather than redirecting website traffic during outages.                                               |
| AWS Trusted Advisor | Provides recommendations for improving AWS environments but does not automatically redirect website traffic.                                               |
| **Amazon Route 53** | Provides DNS resolution, health checks and failover routing to healthy resources.                                                                          |

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|DNS resolution|**Amazon Route 53**|
|Domain registration|**Amazon Route 53**|
|DNS health checks and failover routing|**Amazon Route 53**|
|Accelerate content delivery through edge locations|**Amazon CloudFront**|
|Detect malicious activity|**Amazon GuardDuty**|
|Receive best practice recommendations|**AWS Trusted Advisor**|

**Exam clue: Detect website server outages and redirect users through DNS - Amazon Route 53**

## **24.1 Practice Question 24**

### **Original Question**

Which AWS Support plan includes a designated AWS technical account manager (TAM)?

### **Choices**

A. AWS Enterprise Support  
B. AWS Developer Support  
C. AWS Basic Support  
D. AWS Business Support

### **Correct Answer**

**A. AWS Enterprise Support**

### **Why?**

The key requirement is access to a **designated Technical Account Manager (TAM)**.

AWS Enterprise Support includes access to a designated TAM who provides technical guidance and helps customers manage their AWS environments.

|AWS Support Plan|Explanation|
|---|---|
|**AWS Enterprise Support**|Includes access to a designated Technical Account Manager.|
|AWS Developer Support|Provides technical support for development workloads but does not include a designated TAM.|
|AWS Basic Support|Provides basic account and billing support but does not include a designated TAM.|
|AWS Business Support|Provides technical support for production workloads but does not include a designated TAM.|

### **Exam Focus**

|Support Plan Listed in the Question|Designated TAM|
|---|---|
|AWS Basic Support|No|
|AWS Developer Support|No|
|AWS Business Support|No|
|**AWS Enterprise Support**|**Yes**|

**Exam clue: Designated Technical Account Manager (TAM) - AWS Enterprise Support**

## **25.1 Practice Question 25**

### **Original Question**

A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access.

What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?

### **Choices**

A. EC2 key pairs  
B. AWS Systems Manager Session Manager  
C. AWS Identity and Access Management (IAM)  
D. Network ACLs

### **Correct Answer**

**B. AWS Systems Manager Session Manager**

### **Why?**

The key requirements are **secure remote access to EC2 instances without opening inbound SSH ports or managing SSH keys**.

**AWS Systems Manager Session Manager** provides secure remote access to managed instances without requiring inbound SSH connections.

It uses IAM permissions to control session access, reducing security risks and administrative overhead.

|Option|Explanation|
|---|---|
|EC2 key pairs|Authenticate SSH connections using cryptographic keys but still require SSH key management.|
|**AWS Systems Manager Session Manager**|Provides secure remote access without opening inbound SSH ports or managing SSH keys.|
|AWS IAM|Manages identities and permissions. IAM can authorize Session Manager access but does not independently establish remote shell sessions.|
|Network ACLs|Acts as a subnet-level firewall that controls inbound and outbound network traffic rather than providing remote instance access.|

### **Exam Focus**

|Requirement|AWS Service or Feature|
|---|---|
|Secure remote access without inbound SSH ports|**Session Manager**|
|Remote instance access without SSH keys|**Session Manager**|
|SSH authentication|**EC2 key pairs**|
|Manage identities and permissions|**AWS IAM**|
|Subnet-level network traffic filtering|**Network ACLs**|

**Exam clue: Remotely access EC2 without opening port 22 or managing SSH keys - AWS Systems Manager Session Manager**

## **26.1 Practice Question 26**

### **Original Question**

A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey.

Which AWS CAF governance perspective capability will meet these requirements?

### **Choices**

A. Cloud financial management  
B. Risk management  
C. Application portfolio management  
D. Benefits management

### **Correct Answer**

**D. Benefits management**

### **Why?**

The key requirement is to **define, track and realize business outcomes from cloud transformation**.

**Benefits management** is a capability within the **Governance perspective** of AWS CAF. It helps organizations identify, measure and communicate the business value generated by cloud adoption and investments.

All four options are governance perspective capabilities, but they address different objectives.

|AWS CAF Capability|Explanation|
|---|---|
|Cloud financial management|Manages and optimizes cloud costs, investments and financial metrics rather than tracking overall business outcomes.|
|Risk management|Identifies, assesses and mitigates risks associated with cloud adoption.|
|Application portfolio management|Helps organizations plan and manage their application portfolios and determine migration strategies.|
|**Benefits management**|Defines, tracks and measures business outcomes and value resulting from cloud transformation.|

### **Exam Focus**

### **AWS CAF Governance Perspective Capabilities**

|Capability|Exam Clue|
|---|---|
|**Cloud financial management**|Manage cloud costs and investments|
|**Risk management**|Identify, assess and mitigate risks|
|**Application portfolio management**|Manage application portfolios and migration strategies|
|**Benefits management**|Define, track and realize business outcomes|

Important distinctions:

- **Financial metrics and cloud spending - Cloud financial management**
- **Migration planning and application portfolios - Application portfolio management**
- **Business value and transformation outcomes - Benefits management**

**Exam clue: Measure the business value delivered by cloud adoption - Benefits management**

## **27.1 Practice Question 27**

### **Original Question**

Which of the following will help a user determine if they need to request a VPC service limit increase?

### **Choices**

A. AWS Trusted Advisor  
B. AWS Cost and Usage Report  
C. AWS Health Dashboard  
D. AWS Service Catalog

### **Correct Answer**

**A. AWS Trusted Advisor**

### **Why?**

The key requirement is to determine whether current VPC resource usage is approaching **AWS service limits (service quotas)**.

**AWS Trusted Advisor** performs checks on AWS environments and provides recommendations for improvement, including service limit checks.

These checks help customers identify whether they should request a service quota increase.

|Service|Explanation|
|---|---|
|**AWS Trusted Advisor**|Performs best practice checks, including checks related to service limits and resource usage.|
|AWS Cost and Usage Report|Provides detailed AWS usage and associated cost information rather than service limit recommendations.|
|AWS Health Dashboard|Provides visibility into AWS service health, outages and service-related events rather than service quota usage.|
|AWS Service Catalog|Allows administrators to create, manage and distribute portfolios of approved IT products to end users.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Identify approaching service limits|**AWS Trusted Advisor**|
|Receive best practice recommendations|**AWS Trusted Advisor**|
|Detailed cost and usage information|**AWS Cost and Usage Report**|
|Monitor AWS service health and outages|**AWS Health Dashboard**|
|Manage approved IT products|**AWS Service Catalog**|

**Exam clue: Determine whether a service limit increase is needed - AWS Trusted Advisor**

## **28.1 Practice Question 28**

### **Original Question**

A company creates a new AWS account and wants to quickly launch an Amazon EC2 instance without first manually creating a VPC and its basic networking components.

Which option explains what the company can expect?

### **Choices**

A. A global VPC is shared across all AWS Regions.  
B. A new VPC is automatically created every time an EC2 instance is launched.  
C. A default VPC must be created manually before launching any EC2 instance.  
D. A default VPC is available in each AWS Region.

### **Correct Answer**

**D. A default VPC is available in each AWS Region.**

### **Why?**

The key requirement is to launch an EC2 instance without manually configuring its underlying networking infrastructure.

AWS automatically provides a **default Virtual Private Cloud (VPC)** in supported AWS Regions for new accounts.

A default VPC includes preconfigured basic networking components, allowing customers to launch resources without manually creating a VPC first.

|Option|Explanation|
|---|---|
|A. Global VPC shared across Regions|A VPC is a Regional resource. VPCs in different AWS Regions are independent.|
|B. New VPC for every EC2 instance|EC2 instances are launched into existing VPCs. AWS does not create a new VPC for each instance.|
|C. Default VPC must be created manually|AWS automatically provides a default VPC in supported Regions for new accounts.|
|**D. Default VPC available in each Region**|Provides preconfigured networking infrastructure for launching AWS resources.|

### **Exam Focus**

|VPC Concept|Description|
|---|---|
|**VPC**|Logically isolated virtual network within an AWS Region|
|**Default VPC**|Automatically provided with basic networking components|
|**Custom VPC**|Manually created and configured according to customer requirements|
|**Regional scope**|A VPC belongs to a single AWS Region|

Important reminders:

- A VPC is a **Regional resource**, not a global resource.
- Multiple EC2 instances can use the same VPC.
- AWS does not create a new VPC for every EC2 instance.
- Customers can use the default VPC or create their own VPCs.

**Exam clue: Quickly launch EC2 without manually configuring networking - Default VPC**

## **29.1 Practice Question 29**

### **Original Question**

Which tasks are the customer's responsibility, according to the AWS shared responsibility model? (Select TWO)

### **Choices**

A. Configure firewalls.  
B. Patch the network hardware.  
C. Patch the guest operating system.  
D. Decommission deprecated storage devices.  
E. Physically secure the data center hardware.

### **Correct Answer**

**A. Configure firewalls.**
**C. Patch the guest operating system.**

### **Why?**

The **AWS Shared Responsibility Model** divides security responsibilities between AWS and the customer.
- **AWS - Security of the cloud:** Protects and maintains the underlying physical infrastructure.
- **Customer - Security in the cloud:** Secures customer workloads, configurations, applications and data.

For Amazon EC2, customers are responsible for configuring their firewalls and patching the guest operating system.

| Task                                    | Responsibility | Explanation                                                                         |
| --------------------------------------- | -------------- | ----------------------------------------------------------------------------------- |
| **Configure firewalls**                 | **Customer**   | Customers configure firewall rules and network access controls for their workloads. |
| Patch network hardware                  | AWS            | AWS maintains and patches the underlying physical networking infrastructure.        |
| **Patch guest operating system**        | **Customer**   | Customers maintain and patch the operating systems running on their EC2 instances.  |
| Decommission deprecated storage devices | AWS            | AWS manages the lifecycle and disposal of physical storage hardware.                |
| Physically secure data center hardware  | AWS            | AWS manages physical security and access to its data centers.                       |

### **Exam Focus**

### **AWS Shared Responsibility Model**

|Customer — Security in the Cloud|AWS — Security of the Cloud|
|---|---|
|Guest operating system patching on EC2|Physical hardware maintenance|
|Application patching|Physical network hardware patching|
|Firewall configuration|Physical data center security|
|Customer data protection|Physical storage device disposal|
|IAM permissions|Underlying cloud infrastructure|

Important distinctions:

- **Guest operating system on EC2 - Customer responsibility**
- **Physical server and network hardware - AWS responsibility**
- **Firewall configuration - Customer responsibility**
- **Physical data center security - AWS responsibility**

Customer responsibilities vary depending on the AWS service being used. Managed services generally transfer more operational responsibilities to AWS.

## **30.1 Practice Question 30**

### **Original Question**

Which AWS benefit enables users to deploy cloud infrastructure that consists of multiple geographic Regions connected by a network with low latency, high throughput, and redundancy?

### **Choices**

A. Security  
B. Global reach  
C. Economies of scale  
D. Elasticity

### **Correct Answer**

**B. Global reach**

### **Why?**

The key clues are **multiple geographic Regions**, **low latency**, **high throughput** and **network redundancy**.

**Global reach** is a benefit of AWS global infrastructure that allows customers to deploy applications and resources across multiple geographic Regions.

These Regions are connected through a redundant, high-performance global network.

|Cloud Benefit|Explanation|
|---|---|
|Security|Protects cloud resources and workloads but does not specifically describe worldwide infrastructure connectivity.|
|**Global reach**|Enables customers to deploy resources worldwide using AWS global infrastructure.|
|Economies of scale|Aggregates usage across many customers, allowing AWS to achieve lower costs and offer lower prices.|
|Elasticity|Automatically increases or decreases resource capacity according to changing workload demand.|

### **Exam Focus**

|Cloud Benefit|Exam Clue|
|---|---|
|**Security**|Protect cloud infrastructure, workloads and data|
|**Global reach**|Deploy applications across geographic Regions|
|**Economies of scale**|Lower costs through aggregated customer usage|
|**Elasticity**|Automatically increase and decrease resource capacity|

Important distinctions:

- **Worldwide deployment and geographic coverage - Global reach**
- **Lower prices through aggregated demand - Economies of scale**
- **Automatically adjust capacity to workload demand - Elasticity**

## **31.1 Practice Question 31**

### **Original Question**

A company wants to build, train, and deploy a machine learning model without having to manage the underlying machine learning infrastructure.

Which AWS service should the company use?

### **Choices**

A. Amazon Comprehend  
B. Amazon Bedrock  
C. Amazon Rekognition  
D. Amazon SageMaker

### **Correct Answer**

**D. Amazon SageMaker**

### **Why?**

The key requirement is to **build, train and deploy machine learning (ML) models** without managing the underlying infrastructure.

**Amazon SageMaker** is a fully managed service that helps developers and data scientists manage the machine learning lifecycle.

|Service|Explanation|
|---|---|
|Amazon Comprehend|Uses natural language processing (NLP) to extract insights and information from text.|
|Amazon Bedrock|Provides access to foundation models for building generative AI applications rather than primarily developing and training custom ML models from scratch.|
|Amazon Rekognition|Uses computer vision to analyze images and videos.|
|**Amazon SageMaker**|Provides a managed platform for building, training and deploying machine learning models.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Natural language processing and text analysis|**Amazon Comprehend**|
|Foundation models and generative AI|**Amazon Bedrock**|
|Image and video analysis|**Amazon Rekognition**|
|Build, train and deploy ML models|**Amazon SageMaker**|

**Exam clue: End-to-end machine learning model development - Amazon SageMaker**

## **32.1 Practice Question 32**

### **Original Question**

A company stores sensitive documents in an Amazon S3 bucket. The company wants to ensure that the bucket and its objects are not accidentally made publicly accessible.

Which two options can the company use to control access to the S3 bucket? (Select TWO)

### **Choices**

A. S3 bucket policy  
B. S3 Transfer Acceleration  
C. S3 Lifecycle rules  
D. S3 Bucket Versioning  
E. S3 Block Public Access

### **Correct Answer**

**A. S3 bucket policy**
**E. S3 Block Public Access**

### **Why?**

The key requirements are to **control access permissions** and **prevent accidental public access** to S3 buckets and objects.

An **S3 bucket policy** defines permissions that allow or deny access to the bucket and its objects.

**S3 Block Public Access** provides additional protection against public access, even when a bucket policy or access control list (ACL) might otherwise allow it.

| S3 Feature                 | Explanation                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **S3 bucket policy**       | Controls access permissions to buckets and objects based on specified conditions.                             |
| S3 Transfer Acceleration   | Accelerates object uploads and downloads over long geographic distances. Does not control access permissions. |
| S3 Lifecycle rules         | Automates storage class transitions and object expiration rather than access control.                         |
| S3 Bucket Versioning       | Preserves previous object versions but does not control who can access them.                                  |
| **S3 Block Public Access** | Helps prevent unintended public access to buckets and objects.                                                |

### **Exam Focus**

| Requirement                                 | S3 Feature                   |
| ------------------------------------------- | ---------------------------- |
| Allow or deny access to bucket resources    | **S3 bucket policy**         |
| Prevent accidental public access            | **S3 Block Public Access**   |
| Accelerate long-distance file transfers     | **S3 Transfer Acceleration** |
| Automate storage transitions and expiration | **S3 Lifecycle rules**       |
| Recover overwritten or deleted objects      | **S3 Versioning**            |

**Important distinction:** Bucket policies define permissions, while Block Public Access provides safeguards against public exposure.

## **33.1 Practice Question 33**

### **Original Question**

Which of the following is an example of designing for high availability in the AWS Cloud?

### **Choices**

A. Deploying in any part of the world by using AWS Regions  
B. Consulting AWS technical support at any time of the day  
C. Ensuring that an application remains accessible, even if one of the resources fails  
D. Making any AWS service available for use by paying on demand

### **Correct Answer**

**C. Ensuring that an application remains accessible, even if one of the resources fails**

### **Why?**

**High availability** refers to designing applications and infrastructure to remain accessible and operational even when individual resources fail.

Highly available architectures minimize downtime through redundancy and the elimination of **single points of failure (SPOFs)**.

|Option|Explanation|
|---|---|
|Deploying worldwide using AWS Regions|Represents global reach rather than necessarily providing high availability.|
|Consulting AWS technical support at any time|Represents support availability rather than application availability.|
|**Application remains accessible despite resource failure**|Demonstrates high availability through redundancy and failure resilience.|
|Making AWS services available by paying on demand|Represents pay-as-you-go pricing rather than high availability.|

### **Exam Focus**

|Concept|Exam Clue|
|---|---|
|**High availability**|Keep applications accessible despite resource failures|
|**Redundancy**|Provide alternative resources when individual components fail|
|**Global reach**|Deploy applications worldwide|
|**Pay-as-you-go pricing**|Pay for consumed resources|

Important reminders:

- Design architectures to eliminate single points of failure.
- High availability aims to minimize application downtime.
- Deploying redundant resources across multiple Availability Zones helps achieve high availability.

**Exam clue: Application remains accessible when a resource fails - High availability**

## **34.1 Practice Question 34**

### **Original Question**

A company wants to build a data analytics application that uses Amazon Redshift. The company needs a cost estimate for its future Amazon Redshift usage.

Which AWS tool will provide a high-level cost estimation?

### **Choices**

A. AWS Budgets  
B. AWS Pricing Calculator  
C. Savings Plans  
D. AWS Cost Explorer

### **Correct Answer**

**B. AWS Pricing Calculator**

### **Why?**

The key requirement is to **estimate AWS costs before building a new application**.

**AWS Pricing Calculator** allows customers to estimate the expected costs of AWS services based on planned resource configurations and anticipated usage.

|Service or Tool|Explanation|
|---|---|
|AWS Budgets|Sets custom cost and usage budgets and provides alerts when actual or forecasted spending exceeds defined thresholds.|
|**AWS Pricing Calculator**|Estimates the costs of planned AWS workloads before deployment.|
|Savings Plans|Provides discounted pricing in exchange for a usage spending commitment rather than generating cost estimates.|
|AWS Cost Explorer|Visualizes and analyzes AWS spending and usage over time. Although it supports forecasting, Pricing Calculator is more appropriate for estimating a new workload.|

### **Exam Focus**

### **AWS Cost Management Tools**

|Requirement|AWS Tool|
|---|---|
|Estimate costs before deployment|**AWS Pricing Calculator**|
|Analyze historical spending and forecast costs|**AWS Cost Explorer**|
|Set budgets and receive threshold alerts|**AWS Budgets**|
|Reduce eligible usage costs through spending commitments|**Savings Plans**|

**Exam clue: Estimate the cost of an application that has not been built yet - AWS Pricing Calculator**

## **35.1 Practice Question 35**

### **Original Question**

A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance.

What is the MOST operationally efficient way to perform this backup?

### **Choices**

A. Attach another EBS volume to the EC2 instance, and copy the contents.  
B. Create a custom script to copy the EBS file contents to Amazon S3.  
C. Create an EBS snapshot of the volume.  
D. Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect.

### **Correct Answer**

**C. Create an EBS snapshot of the volume.**

### **Why?**

The key requirements are a **one-time backup of an EBS volume** and **minimal operational effort**.

An **Amazon EBS snapshot** is a built-in feature that provides a point-in-time backup of an EBS volume.

EBS snapshots are incremental after the initial snapshot, meaning subsequent snapshots save only changed data. AWS automatically stores EBS snapshots in Amazon S3, managed by AWS.

| Option                                                     | Explanation                                                                  |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Attach another EBS volume and copy contents                | Requires additional storage, manual volume attachment, mounting and copying. |
| Create a custom script to copy files to S3                 | Requires unnecessary development, testing and maintenance.                   |
| **Create an EBS snapshot**                                 | Provides a built-in point-in-time backup with minimal operational effort.    |
| Copy the volume to an external server using Direct Connect | Requires additional infrastructure and complex data transfer processes.      |

### **Exam Focus**

|Requirement|AWS Service or Feature|
|---|---|
|Persistent block storage for EC2|**Amazon EBS**|
|Point-in-time backup of an EBS volume|**EBS snapshot**|
|Incremental volume backups|**EBS snapshots**|
|Dedicated private connectivity to AWS|**AWS Direct Connect**|

Important reminders:

- EBS snapshots can be created while a volume is attached to an EC2 instance.
- AWS manages snapshot storage in Amazon S3.
- Subsequent snapshots are incremental.
- Prefer built-in AWS capabilities over custom scripts when operational efficiency is required.

**Exam clue: One-time backup of an EBS volume with minimal effort - EBS snapshot**

## **36.1 Practice Question 36**

### **Original Question**

Which capability is provided by Amazon Rekognition?

### **Choices**

A. The ability to place watermarks on images  
B. The ability to resize millions of images automatically  
C. The ability to bid on object detection jobs  
D. The ability to detect objects that appear in pictures

### **Correct Answer**

**D. The ability to detect objects that appear in pictures**

### **Why?**

**Amazon Rekognition** is an AI service that uses pre-trained machine learning models and computer vision to analyze images and videos.

It can identify objects that appear in images without requiring customers to develop their own machine learning models.

| Option                                     | Explanation                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Place watermarks on images                 | Rekognition analyzes images rather than modifying them.                                                              |
| Resize millions of images automatically    | Image resizing is an image processing operation rather than a computer vision analysis capability.                   |
| Bid on object detection jobs               | Amazon Mechanical Turk provides a marketplace for human intelligence tasks, rather than automated image recognition. |
| **Detect objects that appear in pictures** | Rekognition uses pre-trained machine learning models to identify objects in images.                                  |

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Detect objects in images|**Amazon Rekognition**|
|Analyze images and videos|**Amazon Rekognition**|
|Human intelligence tasks|**Amazon Mechanical Turk**|
|Develop and train custom ML models|**Amazon SageMaker**|

**Important distinction:** Amazon Rekognition analyzes visual content; it does not perform image editing operations such as resizing or watermarking.

**Exam clue: Automated object detection using pre-trained ML models - Amazon Rekognition**

## **37.1 Practice Question 37**

### **Original Question**

A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers.

How can the company meet this requirement?

### **Choices**

A. Place both EC2 instances in a placement group for dedicated bandwidth.  
B. Place the EC2 instances in two separate Availability Zones within the same AWS Region.  
C. Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection.  
D. Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection.

### **Correct Answer**

**B. Place the EC2 instances in two separate Availability Zones within the same AWS Region.**

### **Why?**

The two key requirements are **physically separate data centers** and **minimal network latency**.

**Availability Zones (AZs)** consist of one or more physically separate data centers within an AWS Region.

Availability Zones within the same Region are connected through high-bandwidth, low-latency and redundant networking. Deploying EC2 instances across multiple AZs provides infrastructure redundancy while maintaining low communication latency.

| Option                                               | Explanation                                                                                                                                           |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Placement group for dedicated bandwidth              | Placement groups control EC2 instance placement, but the proposed dedicated-bandwidth arrangement does not meet the stated requirements.              |
| **Separate AZs within the same Region**              | Provides physical separation, low-latency communication and protection against the failure of an individual AZ.                                       |
| On-premises instance and AWS Region connected by VPN | Running EC2 on customer premises requires infrastructure such as AWS Outposts. VPN connectivity does not guarantee minimal latency.                   |
| Separate Regions connected by VPC peering            | Provides geographic separation, but inter-Region communication generally introduces higher latency than communication between AZs in the same Region. |

### **Exam Focus**

### **AWS Regions vs Availability Zones**

|Infrastructure Component|Description|
|---|---|
|**AWS Region**|Separate geographic area containing multiple Availability Zones|
|**Availability Zone**|One or more physically isolated data centers within a Region|
|**Multi-AZ deployment**|Provides redundancy and low-latency communication within a Region|
|**Multi-Region deployment**|Provides broader geographic separation|

Important distinctions:

- **Separate data centers with low latency - Multiple Availability Zones in the same Region**
- **Protection against individual AZ failure - Multi-AZ deployment**
- **Geographic redundancy and Regional disaster recovery - Multi-Region deployment**

## **38.1 Practice Question 38**

### **Original Question**

A company wants to protect its web application from common web exploits using AWS WAF.

Which AWS service can be associated with AWS WAF to inspect and filter incoming requests?

### **Choices**

A. Network Load Balancer (NLB)  
B. Gateway Load Balancer (GWLB)  
C. Application Load Balancer (ALB)  
D. AWS Lambda

### **Correct Answer**

**C. Application Load Balancer (ALB)**

### **Why?**

The key requirement is to **inspect and filter incoming web requests using AWS WAF**.

**AWS WAF** operates at the application layer (Layer 7) and protects web applications against common web exploits, such as SQL injection and cross-site scripting (XSS).

An **Application Load Balancer (ALB)** operates at Layer 7 and handles HTTP and HTTPS traffic. AWS WAF web access control lists (web ACLs) can be directly associated with an ALB to inspect and filter incoming web requests.

|Service|OSI Layer|Explanation|
|---|---|---|
|Network Load Balancer|Layer 4|Handles transport-layer traffic. Cannot be directly associated with AWS WAF.|
|Gateway Load Balancer|Layer 3|Deploys, scales and manages virtual network appliances. Cannot be directly associated with AWS WAF.|
|**Application Load Balancer**|**Layer 7**|Handles HTTP and HTTPS traffic and supports direct integration with AWS WAF.|
|AWS Lambda|Not applicable|Serverless compute service that executes code. AWS WAF cannot be directly associated with a Lambda function.|

### **Exam Focus**

### **Elastic Load Balancing Types**

|Load Balancer|Layer|Exam Clue|
|---|---|---|
|**Application Load Balancer (ALB)**|Layer 7 - Application|HTTP, HTTPS, web requests, AWS WAF integration|
|**Network Load Balancer (NLB)**|Layer 4 - Transport|TCP, UDP, high-performance network traffic|
|**Gateway Load Balancer (GWLB)**|Layer 3 - Network|Virtual firewalls and network security appliances|

### **AWS WAF vs AWS Shield**

|Service|Purpose|
|---|---|
|**AWS WAF**|Filter web requests and protect against application-layer exploits|
|**AWS Shield**|Protect against DDoS attacks|

Important distinctions:

- **HTTP/HTTPS traffic and application-level routing - ALB**
- **Transport-layer traffic - NLB**
- **Deploy and scale virtual security appliances - GWLB**
- **Inspect and filter malicious web requests - AWS WAF**
- AWS WAF supports direct integration with ALB, not NLB or GWLB.

**Exam clue: Associate AWS WAF with a load balancer - Application Load Balancer**

## **39.1 Practice Question 39**

### **Original Question**

A company needs access to cloud support engineers 24 hours a day, 7 days a week.

What is the LEAST expensive AWS Support plan that meets this requirement?

### **Choices**

A. AWS Business Support  
B. AWS Developer Support  
C. AWS Basic Support  
D. AWS Enterprise Support

### **Correct Answer**

**A. AWS Business Support**

### **Why?**

The key requirements are **24/7 access to cloud support engineers** and the **lowest possible cost**.

Among the listed options, AWS Business Support is the least expensive support plan that provides access to cloud support engineers 24 hours a day, 7 days a week.

|AWS Support Plan|Explanation|
|---|---|
|**AWS Business Support**|Provides 24/7 access to cloud support engineers at a lower cost than Enterprise Support.|
|AWS Developer Support|Provides access to cloud support associates during business hours rather than 24/7 access to cloud support engineers.|
|AWS Basic Support|Provides customer service, documentation and other self-service resources but does not include access to cloud support engineers.|
|AWS Enterprise Support|Provides 24/7 access to cloud support engineers but is more expensive than Business Support.|

### **Exam Focus**

|AWS Support Plan|Key Feature|
|---|---|
|**Basic Support**|Account and billing support, documentation and self-service resources|
|**Developer Support**|Business-hours access to cloud support associates|
|**Business Support**|24/7 access to cloud support engineers|
|**Enterprise Support**|24/7 technical support and designated Technical Account Manager (TAM)|

Important distinctions:

- **Least expensive plan with 24/7 access to cloud support engineers - Business Support**
- **Designated Technical Account Manager (TAM) - Enterprise Support**
- **Business-hours technical support - Developer Support**

Pay attention to keywords such as **LEAST expensive**. Multiple support plans may satisfy the technical requirement, but only one satisfies the cost requirement.

## **40.1 Practice Question 40**

### **Original Question**

According to the AWS shared responsibility model, which task is the responsibility of AWS for workloads running on Amazon EC2?

### **Choices**

A. Updating the user data  
B. Updating the database engine  
C. Updating the operating system  
D. Updating the physical hardware

### **Correct Answer**

**D. Updating the physical hardware**

### **Why?**

The **AWS Shared Responsibility Model** divides responsibilities between AWS and the customer.

AWS is responsible for **security of the cloud**, including maintaining and securing the physical infrastructure that supports AWS services.

For Amazon EC2, customers are responsible for **security in the cloud**, including managing their data, guest operating systems and installed applications.

|Task|Responsibility|Explanation|
|---|---|---|
|Updating user data|Customer|Customers are responsible for managing, maintaining and securing their data.|
|Updating the database engine|Customer|Database software installed on an EC2 instance is managed by the customer.|
|Updating the operating system|Customer|Customers are responsible for patching and maintaining the EC2 guest operating system.|
|**Updating the physical hardware**|**AWS**|AWS maintains and secures the underlying physical infrastructure.|

### **Exam Focus**

### **AWS Shared Responsibility Model for Amazon EC2**

|AWS — Security of the Cloud|Customer — Security in the Cloud|
|---|---|
|Physical hardware maintenance|Guest operating system patching|
|Physical server security|Application patching|
|Physical network infrastructure|Self-managed database engine updates|
|Data center security|Customer data management and protection|
|Virtualization infrastructure|Firewall configuration and IAM permissions|

### **Self-Managed Databases vs Managed Databases**

|Database Deployment|Database Engine Maintenance|
|---|---|
|Self-managed database on Amazon EC2|**Customer**|
|Managed database on Amazon RDS|**AWS**, with customer configuration responsibilities|

Important distinctions:

- **Physical hardware updates - AWS responsibility**
- **EC2 guest operating system updates - Customer responsibility**
- **Database engine installed on EC2 - Customer responsibility**
- **Customer data - Customer responsibility**

Customer responsibilities depend on the AWS service being used. More highly managed services reduce customer operational responsibilities.

## **41.1 Practice Question 41**

### **Original Question**

A developer needs to access AWS resources from the AWS CLI. Which feature in AWS Identity and Access Management (IAM) can the developer use for authentication?

### **Choices**

A. SSH keys  
B. IAM policies  
C. Account password policies  
D. IAM access keys

### **Correct Answer**

**D. IAM access keys**

### **Why?**

The key requirement is to **authenticate programmatic access to AWS resources using the AWS Command Line Interface (AWS CLI)**.

**IAM access keys** are security credentials that enable programmatic access to AWS services through the AWS CLI, AWS SDKs and AWS APIs.

|IAM Feature|Explanation|
|---|---|
|SSH keys|Authenticate remote server connections through SSH rather than AWS CLI requests.|
|IAM policies|Define permissions for AWS identities and resources but are not authentication credentials.|
|Account password policies|Define password complexity and expiration requirements for IAM users rather than providing programmatic access.|
|**IAM access keys**|Provide credentials for authenticating programmatic requests to AWS services.|

### **Exam Focus**

|Requirement|IAM Feature|
|---|---|
|Programmatic authentication|**IAM access keys**|
|Define access permissions|**IAM policies**|
|Define password requirements|**Account password policies**|
|Authenticate SSH connections|**SSH keys**|

Important distinctions:

- **Authentication** - Verifies an identity.
- **Authorization** - Determines what an identity is permitted to do.
- Access keys consist of an **access key ID** and a **secret access key**.
- Prefer temporary security credentials over long-term access keys whenever possible.

**Exam clue: Authenticate programmatic access through AWS CLI or SDKs - Access keys**

## **42.1 Practice Question 42**

### **Original Question**

A system automatically recovers from failure when a company launches its workload on the AWS Cloud services platform.

Which pillar of the AWS Well-Architected Framework does this situation demonstrate?

### **Choices**

A. Reliability  
B. Cost optimization  
C. Operational excellence  
D. Performance efficiency

### **Correct Answer**

**A. Reliability**

### **Why?**

The key requirement is **automatic recovery from failure**.

The **Reliability pillar** focuses on ensuring that workloads perform their intended functions consistently and recover from failures.

|Well-Architected Pillar|Explanation|
|---|---|
|**Reliability**|Ensures workloads operate consistently and recover automatically from failures.|
|Cost Optimization|Focuses on avoiding unnecessary expenditure and optimizing resource costs.|
|Operational Excellence|Focuses on operating and monitoring systems, responding to events and continuously improving operational processes.|
|Performance Efficiency|Focuses on using computing resources efficiently to meet workload requirements.|

Although Operational Excellence involves operational automation and responding to events, **automatic failure recovery** is explicitly a Reliability design principle.

### **Exam Focus**

| Design Principle                   | Well-Architected Pillar    |
| ---------------------------------- | -------------------------- |
| Automatically recover from failure | **Reliability**            |
| Test recovery procedures           | **Reliability**            |
| Perform operations as code         | **Operational Excellence** |
| Anticipate failure                 | **Operational Excellence** |
| Adopt a consumption model          | **Cost Optimization**      |
| Deploy globally in minutes         | **Performance Efficiency** |

### **Reliability vs Operational Excellence**

|Reliability|Operational Excellence|
|---|---|
|Recover from failures|Improve operational processes|
|Test recovery procedures|Perform operations as code|
|Maintain workload availability|Monitor and operate workloads|
|Ensure workload resilience|Anticipate operational failures|

**Exam clue: Automatically recover from failure - Reliability**

## **43.1 Practice Question 43**

### **Original Question**

Which AWS service provides a managed in-memory data store for applications that require fast data access?

### **Choices**

A. Amazon ElastiCache  
B. Amazon Timestream  
C. Amazon RDS  
D. Amazon DynamoDB

### **Correct Answer**

**A. Amazon ElastiCache**

### **Why?**

The key requirements are **in-memory data storage** and **fast data access**.

**Amazon ElastiCache** is a fully managed in-memory caching service that improves application performance by allowing frequently accessed data to be retrieved from memory.

|Service|Explanation|
|---|---|
|**Amazon ElastiCache**|Provides managed in-memory caching for fast data access and improved application performance.|
|Amazon Timestream|Database service designed for storing and analyzing time-series data rather than in-memory caching.|
|Amazon RDS|Managed relational database service designed for SQL-based database workloads.|
|Amazon DynamoDB|Managed NoSQL database that provides fast access to data stored in durable storage rather than primarily serving as an in-memory cache.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Managed in-memory caching|**Amazon ElastiCache**|
|Time-series data|**Amazon Timestream**|
|Managed relational databases|**Amazon RDS**|
|Managed NoSQL databases|**Amazon DynamoDB**|

### **Amazon ElastiCache vs Amazon DynamoDB**

|Amazon ElastiCache|Amazon DynamoDB|
|---|---|
|In-memory data storage|Durable NoSQL data storage|
|Caching frequently accessed data|Persistent application data|
|Reduces database access latency|Fast, scalable database operations|

**Exam clue: In-memory data store and caching - Amazon ElastiCache**

## **44.1 Practice Question 44**

### **Original Question**

A company has a Java web application. The company wants to use auto deployment to create the AWS environment and deploy new versions of its application.

Which AWS service will meet these requirements?

### **Choices**

A. AWS Elastic Beanstalk  
B. Amazon EC2  
C. AWS Control Tower  
D. AWS Auto Scaling

### **Correct Answer**

**A. AWS Elastic Beanstalk**

### **Why?**

The key requirements are to **automatically provision an application environment** and **deploy new application versions**.

**AWS Elastic Beanstalk** simplifies the deployment and scaling of web applications. Developers upload their application code, and Elastic Beanstalk manages the deployment and supporting infrastructure.

Elastic Beanstalk automatically handles:
- Capacity provisioning
- Load balancing
- Auto scaling
- Application deployment
- Application health monitoring

|Service|Explanation|
|---|---|
|**AWS Elastic Beanstalk**|Automatically provisions application environments, deploys application code and manages supporting infrastructure.|
|Amazon EC2|Provides virtual servers but does not independently automate the complete application environment and deployment process.|
|AWS Control Tower|Sets up and governs multi-account AWS environments rather than deploying web applications.|
|AWS Auto Scaling|Automatically adjusts resource capacity according to demand but does not independently deploy application versions.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Upload code and automatically deploy a web application|**AWS Elastic Beanstalk**|
|Provision virtual servers|**Amazon EC2**|
|Set up and govern multiple AWS accounts|**AWS Control Tower**|
|Automatically adjust resource capacity|**AWS Auto Scaling**|

**Exam clue: Upload application code and let AWS manage deployment, provisioning, load balancing and scaling - AWS Elastic Beanstalk**

## **45.1 Practice Question 45**

### **Original Question**

Which of the following are security best practices for using AWS Identity and Access Management (IAM)? (Select TWO)

### **Choices**

A. Use AWS account root user credentials for IAM tasks.  
B. Enable multi-factor authentication (MFA).  
C. Rotate credentials regularly.  
D. Use IAM inline policies instead of customer managed policies.  
E. Remove credentials as soon as they are used for the first time.

### **Correct Answer**

**B. Enable multi-factor authentication (MFA).**
**C. Rotate credentials regularly.**

### **Why?**

IAM security best practices focus on protecting credentials, reducing unauthorized access and managing permissions securely.

**Multi-factor authentication (MFA)** provides an additional layer of security by requiring another authentication factor.

**Credential rotation** reduces the risks associated with compromised long-term credentials by periodically replacing them.

|Option|Explanation|
|---|---|
|Use root user credentials for IAM tasks|The root user should only be used for tasks that specifically require root user access.|
|**Enable MFA**|Adds another authentication factor to reduce the risk of unauthorized access.|
|**Rotate credentials regularly**|Reduces the security risks associated with long-term credentials.|
|Use inline policies instead of customer managed policies|Customer managed policies are reusable across multiple IAM identities. Inline policies are associated with a single identity.|
|Remove credentials after their first use|Continually deleting and recreating credentials after every use creates unnecessary operational overhead.|

### **Exam Focus**

### **IAM Security Best Practices**

- **Enable multi-factor authentication (MFA).**
- Follow the **principle of least privilege**.
- Prefer temporary security credentials whenever possible.
- Rotate long-term access keys when their use is necessary.
- Avoid using root user credentials for everyday tasks.
- Prefer reusable managed policies over inline policies where appropriate.

### **Customer Managed Policies vs Inline Policies**

|Customer Managed Policies|Inline Policies|
|---|---|
|Reusable across multiple IAM identities|Associated with a single IAM identity|
|Centralized policy management|Individually managed|
|Generally preferred for reusable permissions|Useful for strictly identity-specific permissions|

**Exam clue: Additional authentication protection - MFA**

## **46.1 Practice Question 46**

### **Original Question**

Which AWS service can create similar AWS resources across AWS Regions in an automated way?

### **Choices**

A. AWS Systems Manager  
B. AWS CloudTrail  
C. Amazon ElastiCache  
D. AWS CloudFormation

### **Correct Answer**

**D. AWS CloudFormation**

### **Why?**

The key requirements are **automated infrastructure provisioning** and **consistent resource deployment across multiple AWS Regions**.

**AWS CloudFormation** is an **Infrastructure as Code (IaC)** service that allows customers to define and provision AWS resources using templates.

The same CloudFormation template can be reused across multiple Regions to create consistent and repeatable infrastructure deployments.

| Service                | Explanation                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Systems Manager    | Manages AWS resources and automates operational tasks rather than serving primarily as a template-based infrastructure provisioning service. |
| AWS CloudTrail         | Records AWS API activity and account events for auditing purposes. Does not provision resources.                                             |
| Amazon ElastiCache     | Provides managed in-memory caching rather than general infrastructure provisioning.                                                          |
| **AWS CloudFormation** | Uses infrastructure templates to automate consistent and repeatable resource deployments across AWS Regions.                                 |

### **Exam Focus**

| Requirement                               | AWS Service             |
| ----------------------------------------- | ----------------------- |
| Infrastructure as Code (IaC)              | **AWS CloudFormation**  |
| Repeatable infrastructure deployment      | **AWS CloudFormation**  |
| Automate infrastructure operational tasks | **AWS Systems Manager** |
| Record and audit API activity             | **AWS CloudTrail**      |
| Managed in-memory caching                 | **Amazon ElastiCache**  |

### **AWS CloudFormation vs AWS Elastic Beanstalk**

|AWS CloudFormation|AWS Elastic Beanstalk|
|---|---|
|Infrastructure provisioning|Application deployment|
|Infrastructure as Code|Managed application environment|
|Defines resources using templates|Developers upload application code|
|Consistent, repeatable infrastructure|Automated application deployment and scaling|

**Exam clue: Deploy identical infrastructure across multiple AWS Regions using templates - AWS CloudFormation**

## **47.1 Practice Question 47**

### **Original Question**

Which of the following responsibilities is shared by AWS and the customer under the AWS Shared Responsibility Model?

### **Choices**

A. Control the environment of physical AWS data centers  
B. Provide a key for Amazon S3 client-side encryption  
C. Configure an Amazon EC2 instance  
D. Provide cloud security awareness training

### **Correct Answer**

**D. Provide cloud security awareness training**

### **Why?**

The key requirement is to identify a **shared control** under the AWS Shared Responsibility Model.

**Cloud security awareness training** is a shared responsibility because both AWS and the customer must provide appropriate security training to their respective employees.
- **AWS** provides security awareness training to AWS employees.
- **Customers** provide security awareness training to their own employees.

A shared control does not necessarily mean that AWS and the customer perform the same task on the same resource. Each party implements the control within its respective area of responsibility.

|Task|Responsibility|Explanation|
|---|---|---|
|Control the physical data center environment|AWS|AWS manages and protects its physical facilities and infrastructure.|
|Provide an S3 client-side encryption key|Customer|Customers performing client-side encryption are responsible for supplying and managing their encryption keys.|
|Configure an Amazon EC2 instance|Customer|Customers configure and manage their EC2 workloads and guest operating systems.|
|**Provide cloud security awareness training**|**Shared**|AWS and customers each train their respective employees.|

### **Exam Focus**

### **Types of Controls in the Shared Responsibility Model**

|Control Type|Description|Example|
|---|---|---|
|**Inherited controls**|Controls that customers inherit from AWS|Physical and environmental security|
|**Shared controls**|Controls implemented by both parties within their respective areas|Security awareness training|
|**Customer-specific controls**|Controls implemented by customers for their workloads|EC2 security configuration|

### **Examples of Shared Responsibilities**

| Shared Control           | AWS Responsibility              | Customer Responsibility                                   |
| ------------------------ | ------------------------------- | --------------------------------------------------------- |
| Awareness and training   | Train AWS employees             | Train customer employees                                  |
| Patch management         | Patch underlying infrastructure | Patch customer-managed operating systems and applications |
| Configuration management | Configure AWS infrastructure    | Configure customer workloads and resources                |

Important distinctions:

- **Physical data center security - AWS responsibility**
- **EC2 instance configuration - Customer responsibility**
- **Client-side encryption key management - Customer responsibility**
- **Security awareness and training - Shared responsibility**

**Exam clue: Both AWS and customers train their respective employees - Shared control**

## **48.1 Practice Question 48**

### **Original Question**

Which tasks require use of the AWS account root user? (Select TWO)

### **Choices**

A. Running applications in Amazon Elastic Kubernetes Service (Amazon EKS)  
B. Restoring IAM administrator permissions  
C. Grouping resources in AWS Systems Manager  
D. Modifying an Amazon EC2 instance type  
E. Closing an AWS account

### **Correct Answer**

**B. Restoring IAM administrator permissions**
**E. Closing an AWS account**

### **Why?**

The **AWS account root user** has unrestricted access to the AWS account and should only be used for tasks that specifically require root user privileges.

If the only IAM administrator accidentally revokes their own permissions, the root user can restore administrative access.

Closing a standalone AWS account is also a root user task.

|Task|Explanation|
|---|---|
|Running applications in Amazon EKS|An IAM identity with appropriate permissions can perform this task. Root user access is unnecessary.|
|**Restoring IAM administrator permissions**|The root user can recover administrative access when no other authorized administrator remains.|
|Grouping resources in AWS Systems Manager|Can be performed using an IAM identity with the required permissions.|
|Modifying an Amazon EC2 instance type|Can be performed using appropriate EC2 permissions without root user access.|
|**Closing an AWS account**|Requires root user access for a standalone AWS account.|

### **Exam Focus**

|Task|Required Access|
|---|---|
|Recover permissions when the only IAM administrator loses access|**Root user**|
|Close a standalone AWS account|**Root user**|
|Launch and modify EC2 instances|Authorized IAM identity|
|Manage Amazon EKS workloads|Authorized IAM identity|
|Manage resources using Systems Manager|Authorized IAM identity|

### **Root User Security Best Practices**

- Enable MFA on the root user.
- Avoid creating root user access keys.
- Never use root user credentials for routine administrative tasks.
- Use the root user only when specifically required.
- Use IAM identities with appropriate permissions for everyday tasks.

**Exam clue: Recover lost administrative access or close a standalone AWS account - Root user**

## **49.1 Practice Question 49**

### **Original Question**

Which AWS service or feature can a developer use to access AWS services programmatically?

### **Choices**

A. AWS CodePipeline  
B. AWS Management Console  
C. AWS software development kits (SDKs)  
D. AWS CodeDeploy

### **Correct Answer**

**C. AWS software development kits (SDKs)**

### **Why?**

The key requirement is to **access AWS services programmatically from application code**.

**AWS Software Development Kits (SDKs)** provide language-specific libraries that allow developers to interact with AWS service APIs using their preferred programming languages.

|Service or Feature|Explanation|
|---|---|
|AWS CodePipeline|Continuous delivery service that automates software release workflows rather than providing general programmatic access to AWS services.|
|AWS Management Console|Provides a graphical web-based interface for interacting with AWS services.|
|**AWS SDKs**|Enable developers to interact with AWS service APIs directly from application code.|
|AWS CodeDeploy|Automates application deployments to AWS compute resources and supported on-premises instances.|

### **Exam Focus**

### **Methods of Accessing AWS Services**

|Access Method|Purpose|
|---|---|
|**AWS Management Console**|Graphical web-based interface|
|**AWS CLI**|Command-line access and scripting|
|**AWS SDKs**|Programmatic access from application code|
|**AWS APIs**|Direct service requests through application programming interfaces|

### **AWS Developer Tools**

|Service|Purpose|
|---|---|
|**AWS CodePipeline**|Automate software release workflows|
|**AWS CodeDeploy**|Automate application deployments|
|**AWS SDKs**|Integrate AWS services into application code|

Important distinctions:

- **Interact with AWS through a browser - AWS Management Console**
- **Interact with AWS through terminal commands - AWS CLI**
- **Interact with AWS through programming languages - AWS SDKs**
- **Automate the software release process - AWS CodePipeline**
- **Automate application deployments - AWS CodeDeploy**

**Exam clue: Access AWS services directly from application code - AWS SDKs**

## **50.1 Practice Question 50**

### **Original Question**

After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?

### **Choices**

A. Hourly on-demand payment  
B. No upfront payment  
C. All upfront payment  
D. Partial upfront payment

### **Correct Answer**

**C. All upfront payment**

### **Why?**

The key requirement is to obtain the **largest pricing discount for an Amazon EC2 Dedicated Host reservation**.

The **All Upfront** payment option requires customers to pay the entire reservation cost at the beginning of the reservation term.

For comparable reservation terms, paying the full amount upfront generally provides the greatest discount among the listed payment options.

|Payment Option|Explanation|
|---|---|
|Hourly on-demand payment|Provides flexible usage without a reservation commitment but does not provide the largest reservation discount.|
|No upfront payment|Requires no initial payment but generally provides a smaller discount than paying upfront.|
|**All upfront payment**|Requires full payment at the beginning of the reservation term and provides the largest discount among the listed options.|
|Partial upfront payment|Requires an initial payment followed by additional payments during the reservation term. Provides a smaller discount than All Upfront.|

### **Exam Focus**

### **Reservation Payment Options**

|Payment Option|Initial Payment|Typical Discount|
|---|---|---|
|On-Demand|None|No reservation discount|
|No Upfront|None|Lower|
|Partial Upfront|Partial payment|Higher|
|**All Upfront**|Full payment|**Highest**|

Important distinctions:

- **Maximum reservation discount - All Upfront**
- **Reduced initial expenditure - No Upfront**
- **Balance upfront expenditure and discount - Partial Upfront**
- **Flexible usage without long-term commitment - On-Demand**

Remember that **Dedicated Hosts** provide dedicated physical hardware, while a **Dedicated Host reservation** provides pricing savings in exchange for a commitment.

**Exam clue: Largest discount for an EC2 reservation - All Upfront payment**

## **51.1 Practice Question 51**

### **Original Question**

A company wants to continuously monitor AWS account activity, including actions taken through the AWS Management Console, AWS software development kits (SDKs), and command line tools.

Which AWS service meets these requirements?

### **Choices**

A. Amazon CloudWatch  
B. AWS CloudTrail  
C. Amazon Inspector  
D. AWS Trusted Advisor

### **Correct Answer**

**B. AWS CloudTrail**

### **Why?**

The key requirement is to **monitor and record AWS account activity**, including actions performed through the console, SDKs and command-line tools.

**AWS CloudTrail** records AWS account activity and API events, providing visibility into who performed an action, what action was performed and when it occurred.

|Service|Explanation|
|---|---|
|Amazon CloudWatch|Monitors resource and application performance through metrics, logs and alarms rather than primarily auditing account activity.|
|**AWS CloudTrail**|Records AWS account activity and API calls for auditing, governance and security investigations.|
|Amazon Inspector|Scans supported AWS workloads for software vulnerabilities and unintended network exposure.|
|AWS Trusted Advisor|Provides best practice recommendations for cost optimization, security, performance and availability.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Monitor resource performance and metrics|**Amazon CloudWatch**|
|Record AWS account activity and API calls|**AWS CloudTrail**|
|Identify software vulnerabilities|**Amazon Inspector**|
|Receive best practice recommendations|**AWS Trusted Advisor**|

### **CloudWatch vs CloudTrail**

|Amazon CloudWatch|AWS CloudTrail|
|---|---|
|Resource monitoring|Account activity monitoring|
|Metrics, logs and alarms|API activity and event history|
|Operational visibility|Auditing and governance|
|Monitor resource performance|Identify who performed an action|

**Exam clue: Track actions performed through the AWS Console, CLI, SDKs and APIs - AWS CloudTrail**

## **52.1 Practice Question 52**

### **Original Question**

Which architecture design principle applies to the concept of rightsizing the AWS Cloud infrastructure?

### **Choices**

A. Perform operations as code.  
B. Optimize for cost.  
C. Make frequent, small, reversible changes.  
D. Scale horizontally for increased workload availability.

### **Correct Answer**

**B. Optimize for cost.**

### **Why?**

**Rightsizing** involves selecting resource types and sizes that match actual workload requirements without unnecessarily overprovisioning resources.

By analyzing workload utilization metrics, companies can select appropriate resource configurations to reduce unnecessary costs.

This aligns with the **Cost Optimization pillar** of the AWS Well-Architected Framework.

|Design Principle|Pillar|Explanation|
|---|---|---|
|Perform operations as code|Operational Excellence|Automates operational activities using code rather than optimizing resource sizes.|
|**Optimize for cost**|**Cost Optimization**|Selects appropriate resource types and sizes to meet requirements while minimizing costs.|
|Make frequent, small, reversible changes|Operational Excellence|Reduces the risks associated with operational changes.|
|Scale horizontally for increased workload availability|Reliability|Distributes workloads across multiple resources to improve availability rather than specifically reducing overprovisioning.|

### **Exam Focus**

|Design Principle|Well-Architected Pillar|
|---|---|
|Rightsizing resources to reduce costs|**Cost Optimization**|
|Perform operations as code|**Operational Excellence**|
|Make frequent, small, reversible changes|**Operational Excellence**|
|Scale horizontally to improve availability|**Reliability**|

Important distinctions:

- **Rightsizing** - Match resource types and sizes to actual workload requirements.
- **Overprovisioning** - Provisioning more resources than necessary.
- **Horizontal scaling** - Adding or removing resources.
- **Vertical scaling** - Increasing or decreasing the capacity of an individual resource.

**Exam clue: Select the appropriate instance type and size based on utilization metrics to reduce costs - Rightsizing / Cost Optimization**

## **53.1 Practice Question 53**

### **Original Question**

A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order.

Which AWS service should the company use?

### **Choices**

A. Amazon Simple Queue Service (Amazon SQS)  
B. AWS Step Functions  
C. Amazon Kinesis Data Streams  
D. Amazon Simple Notification Service (Amazon SNS)

### **Correct Answer**

**A. Amazon Simple Queue Service (Amazon SQS)**

### **Why?**

The key requirements are to **send, store and receive messages between application components** and maintain **first-in, first-out (FIFO) ordering**.

**Amazon SQS** is a fully managed message queuing service that helps decouple and scale microservices, distributed systems and serverless applications.

Amazon SQS provides two queue types: **Standard queues** and **FIFO queues**.

FIFO queues preserve message ordering within each message group and provide message deduplication capabilities.

|Service|Explanation|
|---|---|
|**Amazon SQS**|Provides managed message queues that store messages until consumers retrieve and process them. Supports FIFO queues.|
|AWS Step Functions|Coordinates AWS services through serverless workflows and state machines rather than providing a message queue.|
|Amazon Kinesis Data Streams|Processes high-volume streaming data in real time rather than providing a traditional message queue between application components.|
|Amazon SNS|Provides publish/subscribe messaging and pushes notifications to subscribers rather than providing a consumer-retrieved message queue.|

### **Exam Focus**

### **SQS Standard vs FIFO Queues**

|Feature|Standard Queue|FIFO Queue|
|---|---|---|
|Message ordering|Best-effort ordering|First-in, first-out within a message group|
|Duplicate messages|Possible|Deduplication supported|
|Primary use case|General-purpose, high-throughput messaging|Workloads requiring ordered message processing|

### **AWS Messaging and Integration Services**

|Requirement|AWS Service|
|---|---|
|Store messages until consumers process them|**Amazon SQS**|
|Process queued messages in FIFO order|**Amazon SQS FIFO**|
|Push notifications to subscribers|**Amazon SNS**|
|Coordinate multi-step workflows|**AWS Step Functions**|
|Process real-time streaming data|**Amazon Kinesis Data Streams**|

**Important distinction:** Amazon SNS also supports FIFO topics, but Amazon SQS is the appropriate service when the requirement is to store messages in a queue for consumers to retrieve.

**Exam clue: Decouple application components using ordered message queues - Amazon SQS FIFO**

## **54.1 Practice Question 54**

### **Original Question**

A company is developing an e-learning application that converts written course content into spoken audio so that learners can listen to lessons instead of reading them.

Which AWS service should the company use?

### **Choices**

A. Amazon Transcribe  
B. Amazon Polly  
C. Amazon Rekognition  
D. Amazon Translate

### **Correct Answer**

**B. Amazon Polly**

### **Why?**

The key requirement is to **convert written text into spoken audio**.

**Amazon Polly** is an AI service that uses deep learning technologies to convert text into natural-sounding speech.

|Service|Explanation|
|---|---|
|Amazon Transcribe|Converts spoken audio into written text, which is the opposite of the requirement.|
|**Amazon Polly**|Converts written text into natural-sounding speech.|
|Amazon Rekognition|Analyzes images and videos to identify objects, people, activities and other visual content.|
|Amazon Translate|Translates text between supported languages rather than converting text into audio.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Text-to-speech|**Amazon Polly**|
|Speech-to-text|**Amazon Transcribe**|
|Language translation|**Amazon Translate**|
|Image and video analysis|**Amazon Rekognition**|
|Natural language processing and text analysis|**Amazon Comprehend**|

### **Amazon Polly vs Amazon Transcribe**

|Amazon Polly|Amazon Transcribe|
|---|---|
|Text-to-speech|Speech-to-text|
|Written text as input|Spoken audio as input|
|Generates spoken audio|Generates written transcripts|
|Audiobooks and voice applications|Meeting transcription and subtitles|

**Exam clue: Convert written lessons into spoken audio - Amazon Polly**

## **55.1 Practice Question 55**

### **Original Question**

A company has a stateless application that can handle interruptions. The application must be available all day and night for the foreseeable duration of more than one year. Traffic increases heavily during business hours.

Which instance types for base and peak traffic are MOST cost-efficient to meet these requirements?

### **Choices**

A. On-Demand Instances for base traffic and On-Demand Instances with auto scaling for peak traffic  
B. Reserved Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet  
C. On-Demand Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet  
D. Reserved Instances for both the base and peak traffic

### **Correct Answer**

**B. Reserved Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet**

### **Why?**

The question contains three important clues:

- **Available all day and night for more than one year** - Predictable, long-term base workload.
- **Traffic increases during business hours** - Temporary increases in capacity requirements.
- **Stateless application that can handle interruptions** - Suitable for Spot Instances.

**Reserved Instances** provide pricing discounts for predictable workloads in exchange for a 1-year or 3-year commitment.

**Spot Instances** provide discounted access to unused EC2 capacity and are suitable for interruption-tolerant workloads.

**Amazon EC2 Fleet** allows customers to combine On-Demand and Spot capacity to meet specified capacity targets. Applicable Reserved Instance discounts cover eligible On-Demand usage.

|Option|Explanation|
|---|---|
|A. On-Demand for base and peak traffic|Provides flexibility but misses reservation discounts for predictable workloads and Spot discounts for interruptible peak workloads.|
|**B. Reserved for base and Spot for peak traffic**|Combines long-term savings for predictable demand with discounted capacity for interruption-tolerant peak demand.|
|C. On-Demand for base and Spot for peak traffic|Reduces peak traffic costs but misses long-term reservation savings for continuously running workloads.|
|D. Reserved for base and peak traffic|Commits to peak capacity that is not consistently required, potentially paying for unused capacity outside business hours.|

### **Exam Focus**

### **EC2 Purchasing Options**

|Workload Characteristic|Purchasing Option|
|---|---|
|Predictable, long-term workloads|**Reserved Instances**|
|Temporary, unpredictable workloads without commitment|**On-Demand Instances**|
|Interruption-tolerant workloads|**Spot Instances**|
|Physical-core software licensing|**Dedicated Hosts**|

| Traffic Type | Characteristics                      | Cost-Effective Option  |
| ------------ | ------------------------------------ | ---------------------- |
| Base traffic | Predictable and continuously running | **Reserved Instances** |
| Peak traffic | Temporary and interruption-tolerant  | **Spot Instances**     |

**Exam clue: Predictable long-term baseline with interruptible peak workloads - Reserved Instances for base traffic and Spot Instances for peak traffic**

## **56.1 Practice Question 56**

### **Original Question**

Which service can a customer use to set up a management payer account to view consolidated billing reports?

### **Choices**

A. Amazon Macie  
B. AWS Organizations  
C. AWS Budgets  
D. Amazon QuickSight (Now Amazon Quick)

### **Correct Answer**

**B. AWS Organizations**

### **Why?**

The key requirements are a **management payer account** and **consolidated billing across multiple AWS accounts**.

**AWS Organizations** enables customers to centrally manage multiple AWS accounts.

Its **consolidated billing** feature allows the management account to consolidate billing and payments for accounts within the organization.

|Service|Explanation|
|---|---|
|Amazon Macie|Discovers and classifies sensitive data, including PII, stored in Amazon S3. Does not consolidate billing.|
|**AWS Organizations**|Centrally manages multiple AWS accounts and provides consolidated billing and payment capabilities.|
|AWS Budgets|Tracks costs and usage against defined budgets and provides threshold alerts rather than consolidating account billing.|
|Amazon QuickSight|Business intelligence service that provides analytics, visualizations and dashboards rather than establishing consolidated AWS billing.|

### **Exam Focus**

|Requirement|AWS Service|
|---|---|
|Centrally manage multiple AWS accounts|**AWS Organizations**|
|Consolidated billing and payments|**AWS Organizations**|
|Set cost and usage budgets|**AWS Budgets**|
|Visualize AWS spending over time|**AWS Cost Explorer**|
|Business intelligence dashboards|**Amazon QuickSight**|
|Discover sensitive data in S3|**Amazon Macie**|

### **AWS Organizations vs AWS Control Tower**

|AWS Organizations|AWS Control Tower|
|---|---|
|Centralized account management|Multi-account environment setup and governance|
|Consolidated billing|Automated governance controls|
|Organizational units (OUs)|Govern accounts according to AWS best practices|
|Service control policies (SCPs)|Builds on AWS Organizations|

**Exam clue: Single payer account and consolidated billing for multiple AWS accounts - AWS Organizations**

## **57.1 Practice Question 57**

### **Original Question**

According to the AWS shared responsibility model, which security-related tasks are the customer's responsibility? (Select TWO)

### **Choices**

A. Customer data integrity  
B. Client-side data encryption  
C. Security of edge locations  
D. AWS global infrastructure network security  
E. Hardware security within AWS Regions

### **Correct Answer**

**A. Customer data integrity**
**B. Client-side data encryption**

### **Why?**

Under the **AWS Shared Responsibility Model**, customers are responsible for securing their data, applications and resource configurations.

AWS is responsible for securing the physical infrastructure and global networking that support AWS services.

**Customer data integrity** and **client-side data encryption** are both examples of security in the cloud.

| Task                                       | Responsibility | Explanation                                                                                         |
| ------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------- |
| **Customer data integrity**                | **Customer**   | Customers must ensure their data remains accurate, protected and unaltered by unauthorized parties. |
| **Client-side data encryption**            | **Customer**   | Customers are responsible for encrypting data on their side before sending it to AWS.               |
| Security of edge locations                 | AWS            | Edge locations are part of AWS physical global infrastructure.                                      |
| AWS global infrastructure network security | AWS            | AWS protects the underlying global networking infrastructure.                                       |
| Hardware security within AWS Regions       | AWS            | AWS secures the physical hardware within its Regions and data centers.                              |

### **Exam Focus**

### **AWS Shared Responsibility Model**

|Customer — Security in the Cloud|AWS — Security of the Cloud|
|---|---|
|Customer data integrity|Physical hardware security|
|Client-side data encryption|Physical edge location security|
|IAM permissions|Global infrastructure network security|
|Customer data protection|Data center security|
|Customer workload configuration|Underlying cloud infrastructure|

Important distinctions:

- **Customer data and its protection - Customer responsibility**
- **Client-side encryption - Customer responsibility**    
- **Physical infrastructure and global networking - AWS responsibility**
- **Physical edge location security - AWS responsibility**

**Exam clue: Protect customer data and perform client-side encryption - Security in the cloud**

## **58.1 Practice Question 58**

### **Original Question**

A company is migrating an application to AWS. As part of the migration, the company needs to move the application's database to Amazon RDS.

Which AWS service should the company use to migrate the database?

### **Choices**

A. AWS Schema Conversion Tool (AWS SCT)  
B. AWS Application Migration Service  
C. Migration Evaluator  
D. AWS Database Migration Service (AWS DMS)

### **Correct Answer**

**D. AWS Database Migration Service (AWS DMS)**

### **Why?**

The key requirement is to **migrate an existing database to Amazon RDS**.

**AWS Database Migration Service (AWS DMS)** helps customers migrate databases to AWS with minimal downtime during the migration process.

| Service or Tool                    | Explanation                                                                                                                                                             |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Schema Conversion Tool         | Converts database schemas between different database engines. It can work alongside AWS DMS but is not the primary database migration service for this scenario.        |
| AWS Application Migration Service  | Migrates applications and their associated servers to AWS rather than specifically migrating database data into Amazon RDS.                                             |
| Migration Evaluator                | Assesses on-premises environments and provides cost and resource projections to support migration planning and business cases. It does not perform database migrations. |
| **AWS Database Migration Service** | Migrates databases to AWS services such as Amazon RDS with minimal downtime.                                                                                            |

### **Exam Focus**

| Migration Requirement                            | AWS Service or Tool                   |
| ------------------------------------------------ | ------------------------------------- |
| Migrate databases with minimal downtime          | **AWS DMS**                           |
| Convert database schemas between engines         | **AWS SCT**                           |
| Lift and shift applications and servers          | **AWS Application Migration Service** |
| Assess migration costs and build a business case | **Migration Evaluator**               |

### **AWS DMS vs AWS SCT**

| AWS DMS                                           | AWS SCT                                          |
| ------------------------------------------------- | ------------------------------------------------ |
| Migrates database data                            | Converts database schemas                        |
| Supports database migration with minimal downtime | Helps address database engine compatibility      |
| Supports homogeneous and heterogeneous migrations | Particularly useful for heterogeneous migrations |

- **Homogeneous migration** - Migrating between the same database engine, such as MySQL to MySQL.
- **Heterogeneous migration** - Migrating between different database engines, such as Oracle to PostgreSQL.

**Exam clue: Migrate an existing database to Amazon RDS with minimal downtime - AWS DMS**

## **59.1 Practice Question 59**

### **Original Question**

Which AWS service can generate a finding when personally identifiable information (PII) is stored within an Amazon S3 bucket?

### **Choices**

A. Amazon Inspector  
B. Amazon Macie  
C. AWS Trusted Advisor  
D. Amazon GuardDuty

### **Correct Answer**

**B. Amazon Macie**

### **Why?**

The key requirements are to identify **personally identifiable information (PII)** within **Amazon S3 buckets** and generate security findings.

**Amazon Macie** is a data security service that uses machine learning and pattern matching to discover sensitive data stored in Amazon S3.

Macie can generate findings when sensitive information is discovered.

|Service|Explanation|
|---|---|
|Amazon Inspector|Scans AWS workloads for software vulnerabilities and unintended network exposure rather than discovering sensitive information within S3 objects.|
|**Amazon Macie**|Discovers and classifies sensitive data, including PII, stored in Amazon S3.|
|AWS Trusted Advisor|Evaluates AWS environments and provides best practice recommendations rather than inspecting S3 object contents for PII.|
|Amazon GuardDuty|Detects malicious activity, suspicious behavior and potential security threats rather than classifying sensitive data stored in S3.|

### **Exam Focus**

### **AWS Security Services**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon Macie**|Sensitive data discovery|PII and sensitive information in S3|
|**Amazon Inspector**|Vulnerability management|Software vulnerabilities and network exposure|
|**Amazon GuardDuty**|Threat detection|Malicious activity and suspicious behavior|
|**AWS Trusted Advisor**|Best practice recommendations|Security, cost, performance and service limits|
|**AWS Security Hub**|Centralized security visibility|Security findings and security standards|
|**AWS Shield**|DDoS protection|Network-layer DDoS attacks|
|**AWS WAF**|Web application protection|SQL injection and cross-site scripting|

### **Examples of Personally Identifiable Information (PII)**

- Personal identification numbers
- Names and addresses
- Passport numbers
- Financial account information

**Important distinction:** Macie discovers sensitive data, Inspector discovers vulnerabilities, and GuardDuty detects threats.

**Exam clue: Detect personally identifiable information stored in Amazon S3 - Amazon Macie**

## **60.1 Practice Question 60**

### **Original Question**

What are characteristics of AWS IAM users and groups? (Select TWO)

### **Choices**

A. Groups can contain users only and cannot be nested.  
B. Groups can be nested and can contain other groups.  
C. A user can be a member of multiple groups.  
D. All new users are automatically added to a default group.  
E. A user can only be a member of a single group at one time.

### **Correct Answer**

**A. Groups can contain users only and cannot be nested.**
**C. A user can be a member of multiple groups.**

### **Why?**

**IAM user groups** are collections of IAM users that simplify permission management.

Instead of assigning the same permissions individually to multiple users, administrators can attach IAM policies to a group and add users to that group.

IAM groups can contain only IAM users. They cannot contain other groups.

An IAM user can belong to multiple groups and receive permissions from the policies associated with those groups, subject to applicable policy evaluation rules.

| Option                                                  | Explanation                                                                                          |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **A. Groups contain users only and cannot be nested**   | IAM groups support IAM users as members but do not support nested groups.                            |
| B. Groups can contain other groups                      | IAM does not support group nesting.                                                                  |
| **C. A user can belong to multiple groups**             | An IAM user can receive permissions through membership in multiple IAM groups.                       |
| D. New users are automatically added to a default group | IAM does not automatically assign new users to a default group. Group membership must be configured. |
| E. A user can belong to only one group                  | IAM users can belong to multiple groups simultaneously.                                              |

### **Exam Focus**

### **IAM Users, Groups, Roles and Policies**

| IAM Component  | Purpose                                                            |
| -------------- | ------------------------------------------------------------------ |
| **IAM User**   | Represents an individual IAM identity.                             |
| **IAM Group**  | Organizes IAM users and simplifies permission management.          |
| **IAM Role**   | Provides assumable permissions and temporary security credentials. |
| **IAM Policy** | Defines allowed and denied actions on AWS resources.               |

### **IAM Group Structure**

| IAM Group Characteristic                     | Supported? |
| -------------------------------------------- | ---------- |
| A group can contain multiple users           | Yes        |
| A user can belong to multiple groups         | Yes        |
| A group can contain another group            | No         |
| Groups can be nested                         | No         |
| New users automatically join a default group | No         |
| IAM policies can be attached to groups       | Yes        |

**Exam clue: IAM groups contain users only, cannot be nested, and users can belong to multiple groups.**

## **61.1 Practice Question 61**

### **Original Question**

A company needs to retain large amounts of data for several years to meet regulatory requirements. The data is rarely accessed, but the company needs a highly durable and cost-effective storage option for long-term archival.

Which Amazon S3 storage class should the company use?

### **Choices**

A. S3 Standard  
B. S3 Intelligent-Tiering  
C. S3 Standard-IA  
D. S3 Glacier Deep Archive

### **Correct Answer**

**D. S3 Glacier Deep Archive**

### **Why?**

The key requirements are **long-term data retention**, **rarely accessed data**, **high durability** and **cost-effective archival storage**.

**Amazon S3 Glacier Deep Archive** is designed for long-term archival of data that is rarely accessed, such as records retained for regulatory and compliance requirements.

It provides low storage costs in exchange for longer retrieval times.

|S3 Storage Class|Explanation|
|---|---|
|S3 Standard|Designed for frequently accessed data. Generally more expensive for long-term archival.|
|S3 Intelligent-Tiering|Automatically moves objects between access tiers based on changing access patterns. More suitable when access patterns are unpredictable.|
|S3 Standard-IA|Designed for infrequently accessed data that still requires rapid retrieval when needed.|
|**S3 Glacier Deep Archive**|Designed for rarely accessed data requiring long-term retention at minimal storage cost.|

### **Exam Focus**

|Storage Class|Exam Clue|
|---|---|
|**S3 Standard**|Frequently accessed data|
|**S3 Intelligent-Tiering**|Unknown or changing access patterns|
|**S3 Standard-IA**|Infrequently accessed data requiring rapid retrieval|
|**S3 Glacier Deep Archive**|Long-term archival and regulatory data retention|

Important distinctions:

- **Unpredictable access patterns - S3 Intelligent-Tiering**
- **Infrequent access with rapid retrieval - S3 Standard-IA**
- **Rarely accessed data retained for several years - S3 Glacier Deep Archive**

**Exam clue: Long-term archival with minimal storage costs - S3 Glacier Deep Archive**

## **62.1 Practice Question 62**

### **Original Question**

A company needs to maintain a record of configuration changes made to its AWS resources for auditing purposes. Which AWS service should the company use?

### **Choices**

A. Amazon Inspector  
B. AWS Config  
C. Amazon CloudWatch  
D. AWS Artifact

### **Correct Answer**

**B. AWS Config**

### **Why?**

The key requirement is to maintain a **historical record of AWS resource configuration changes for auditing purposes**.

**AWS Config** is a fully managed service that records AWS resource configurations and configuration changes. It provides resource inventories, configuration history and compliance evaluation capabilities.

|Service|Explanation|
|---|---|
|Amazon Inspector|Scans supported AWS workloads for software vulnerabilities and unintended network exposure rather than tracking resource configuration history.|
|**AWS Config**|Records resource configurations and configuration changes for auditing and compliance purposes.|
|Amazon CloudWatch|Collects metrics and logs to monitor resource and application performance rather than maintaining resource configuration history.|
|AWS Artifact|Provides access to AWS security and compliance reports and agreements rather than auditing customer resource configuration changes.|

### **Exam Focus**

### **AWS Monitoring, Auditing and Compliance Services**

| Service               | Primary Purpose           | Exam Clue                                     |
| --------------------- | ------------------------- | --------------------------------------------- |
| **AWS Config**        | Configuration tracking    | Resource configuration history and compliance |
| **AWS CloudTrail**    | Account activity auditing | Who performed an API action and when          |
| **Amazon CloudWatch** | Resource monitoring       | Metrics, logs and alarms                      |
| **Amazon Inspector**  | Vulnerability management  | Software vulnerabilities and network exposure |
| **AWS Artifact**      | Compliance documentation  | AWS audit reports and compliance agreements   |

### **AWS Config vs AWS CloudTrail vs Amazon CloudWatch**

|Service|Question It Helps Answer|
|---|---|
|**AWS Config**|How has the resource configuration changed?|
|**AWS CloudTrail**|Who performed the action, and when?|
|**Amazon CloudWatch**|How is the resource performing?|

**Exam clue: Record and audit AWS resource configuration changes - AWS Config**

## **63.1 Practice Question 63**

### **Original Question**

Which benefit of the AWS Cloud allows organizations to develop, test, and launch products and services more quickly?

### **Choices**

A. Decreased deployment speed  
B. Increased backup capabilities  
C. Increased business agility  
D. Increased application security

### **Correct Answer**

**C. Increased business agility**

### **Why?**

The key requirement is to **develop, test and launch products and services more quickly**.

**Business agility** refers to an organization's ability to respond quickly to changing business requirements, experiment with new ideas and deliver products faster.

AWS allows organizations to provision IT resources within minutes rather than waiting for physical infrastructure to be purchased and installed.

|Option|Explanation|
|---|---|
|Decreased deployment speed|AWS increases deployment speed rather than decreasing it.|
|Increased backup capabilities|Improves data protection and recovery but does not directly address time to market.|
|**Increased business agility**|Enables rapid resource provisioning, experimentation, development and application deployment.|
|Increased application security|Helps protect applications and workloads but does not specifically describe faster product development and deployment.|

### **Exam Focus**

### **Benefits of Cloud Computing**

|Cloud Benefit|Exam Clue|
|---|---|
|**Agility**|Faster development, experimentation and deployment|
|**Elasticity**|Increase or decrease capacity according to demand|
|**Scalability**|Handle growing workloads|
|**Global reach**|Deploy applications worldwide|
|**Economies of scale**|Lower prices through aggregated customer usage|
|**Pay-as-you-go pricing**|Pay for consumed resources|
|**High availability**|Maintain application accessibility despite resource failures|

Important distinctions:

- **Reduce time to market - Agility**
- **Provision resources within minutes - Agility**
- **Experiment and innovate quickly - Agility**
- **Automatically adjust capacity to demand - Elasticity**

**Exam clue: Develop, test and launch products faster - Increased business agility**

## **64.1 Practice Question 64**

### **Original Question**

A company runs a production application that uses Amazon RDS. The company wants to improve database availability and ensure that the database can automatically fail over if the primary database instance becomes unavailable.

Which RDS feature should the company use?

### **Choices**

A. RDS Multi-AZ deployment  
B. RDS Read Replicas  
C. Amazon RDS automated backups  
D. Amazon ElastiCache

### **Correct Answer**

**A. RDS Multi-AZ deployment**

### **Why?**

The key requirements are **database high availability** and **automatic failover when the primary database instance becomes unavailable**.

An **Amazon RDS Multi-AZ deployment** maintains redundant database infrastructure across multiple Availability Zones.

In a standard Multi-AZ DB instance deployment, Amazon RDS maintains a standby database instance in another Availability Zone and automatically fails over to it if the primary instance becomes unavailable.

|Service or Feature|Explanation|
|---|---|
|**RDS Multi-AZ deployment**|Improves database availability through redundant infrastructure and automatic failover.|
|RDS Read Replicas|Primarily improves read scalability by distributing read traffic. Can also support disaster recovery but is not the standard automatic failover mechanism described.|
|Amazon RDS automated backups|Supports data recovery and point-in-time restoration but does not provide a running standby database for automatic failover.|
|Amazon ElastiCache|Provides in-memory caching to improve application performance but does not provide automatic database failover for Amazon RDS.|

### **Exam Focus**

### **RDS Multi-AZ vs Read Replicas**

| Feature                                    | RDS Multi-AZ DB Instance                          | RDS Read Replicas                   |
| ------------------------------------------ | ------------------------------------------------- | ----------------------------------- |
| Primary purpose                            | **High availability**                             | **Read scalability**                |
| Replication                                | Synchronous                                       | Asynchronous                        |
| Automatic failover                         | Yes                                               | Not the standard failover mechanism |
| Serve read traffic from secondary instance | No, in a standard Multi-AZ DB instance deployment | Yes                                 |
| Main benefit                               | Improved availability                             | Improved read performance           |

### **Database Availability, Performance and Recovery**

|Requirement|AWS Service or Feature|
|---|---|
|Database high availability|**RDS Multi-AZ**|
|Automatic database failover|**RDS Multi-AZ**|
|Scale database read workloads|**RDS Read Replicas**|
|Point-in-time database restoration|**RDS automated backups**|
|Reduce database access latency through caching|**Amazon ElastiCache**|

**Important distinction:** Multi-AZ is primarily an availability solution, while Read Replicas are primarily a read performance and scalability solution. Multi-AZ DB clusters can also support readable standby instances.

**Exam clue: Primary RDS database fails and a standby automatically takes over - RDS Multi-AZ deployment**

## **65.1 Practice Question 65**

### **Original Question**

An application is receiving SQL injection attacks from multiple external resources. Which AWS service or feature can help automate mitigation against these attacks?

### **Choices**

A. Network ACL  
B. AWS Web Application Firewall (WAF)  
C. Elastic Load Balancing (ELB)  
D. Security groups

### **Correct Answer**

**B. AWS Web Application Firewall (WAF)**

### **Why?**

The key requirement is to automatically mitigate **SQL injection attacks**, which are application-layer web exploits.

**AWS WAF** is a web application firewall that inspects incoming HTTP and HTTPS requests and applies configurable web security rules.

AWS WAF helps protect web applications against common exploits, including SQL injection and cross-site scripting (XSS).

|Service or Feature|Explanation|
|---|---|
|Network ACL|Controls subnet-level traffic based on IP addresses, ports and protocols. Cannot inspect web request contents for SQL injection attacks.|
|**AWS WAF**|Inspects application-layer web requests and blocks requests that match malicious patterns, including SQL injection.|
|Elastic Load Balancing|Distributes incoming requests across multiple resources. Does not independently detect or block SQL injection attacks.|
|Security groups|Controls inbound and outbound traffic at the resource level based on network rules rather than inspecting application-layer request contents.|

### **Exam Focus**

### **AWS Network and Application Security**

|Security Service or Feature|Purpose|Exam Clue|
|---|---|---|
|**Security groups**|Resource-level traffic filtering|Stateful firewall|
|**Network ACLs**|Subnet-level traffic filtering|Stateless firewall|
|**AWS WAF**|Application-layer web request filtering|SQL injection and XSS|
|**AWS Shield**|DDoS protection|Network-layer and transport-layer DDoS attacks|
|**AWS Firewall Manager**|Centralized security policy management|Manage firewall rules across accounts|

### **Security Groups vs Network ACLs vs AWS WAF**

|Feature|Security Groups|Network ACLs|AWS WAF|
|---|---|---|---|
|Scope|Resource level|Subnet level|Web application level|
|Rules|Allow only|Allow and deny|Web request filtering|
|Stateful|Yes|No|Not applicable|
|Filter IP addresses and ports|Yes|Yes|Supports IP-based rules and application-layer inspection|
|Inspect SQL injection attacks|No|No|**Yes**|
|Inspect cross-site scripting attacks|No|No|**Yes**|

### **AWS WAF vs AWS Shield**

|AWS WAF|AWS Shield|
|---|---|
|Application-layer protection|DDoS protection|
|SQL injection|Network-layer DDoS attacks|
|Cross-site scripting|Transport-layer DDoS attacks|
|Configurable web security rules|Managed DDoS mitigation|

Important reminders:

- Network firewalls do not independently inspect web application payloads for SQL injection.
- AWS WAF operates at **Layer 7 (Application layer)**.
- AWS WAF can be associated directly with an Application Load Balancer (ALB).
- Elastic Load Balancing distributes traffic; AWS WAF filters malicious web requests.

**Exam clue: Automatically detect and block SQL injection or cross-site scripting attacks - AWS WAF**