# 1 - Know your Exam

## 1.1 - Knowing Your Exam

The **AWS Certified Cloud Practitioner** is AWS's foundational certification. It is designed to validate a broad understanding of:

- Cloud computing concepts
- AWS services
- Security and compliance
- AWS pricing, billing, and support

You do **not** need deep implementation knowledge for most services. The exam mainly tests whether you understand **what a service does**, **when it is used**, and **its important characteristics**.

### 1.1.1 - Exam Overview

| **Item**        | **Details**                         |
| --------------- | ----------------------------------- |
| Certification   | AWS Certified Cloud Practitioner    |
| Exam Code       | **CLF-C02**                         |
| Level           | Foundational                        |
| Total Questions | **65**                              |
| Exam Duration   | **90 minutes**                      |
| Question Types  | Multiple choice + Multiple response |
| Scaled Score    | **100-1000**                        |
| Passing Score   | **700**                             |

AWS recommends approximately **6 months of exposure to AWS Cloud concepts and services**, although hands-on professional AWS experience is not strictly required.

> Important: A score of **700/1000 is a scaled score**. It should not be interpreted as simply needing 70% of the questions correct.

## 1.2 - Queston Types

### 1.2.1 - Multiple Choice

You select **one correct answer** from several choices.

Example:

Which EC2 purchasing option allows customers to use spare AWS compute capacity at potentially large discounts?

- Reserved Instances
- Dedicated Hosts
- **Spot instances**
- On-Demand Instances

Answer: **Spot Instances**

### 1.2.2 - Multiple Response

You select **two or more correct answers**.

The question normally tells you how many answers must be selected.

Example:

Under the AWS Shared Responsibility Model, which responsibilities belong to the customer? **Select TWO**.

Possible answers could include:
- **Configuring IAM permissions**
- **Configuring EC2 security groups**
- Securing AWS data centers
- Maintaining physical AWS servers

The customer manages configuration and access **in the cloud**, while AWS manages the underlying infrastructure **of the cloud**.

Always check how many answers the question asks you to select.

## 1.3 - Exam Domains

The CLF-C02 exam is divided into four domains.

| **Domain** | **Topic**                     | **Weight** |
| ---------- | ----------------------------- | ---------- |
| Domain 1   | Cloud Concepts                | **24%**    |
| Domain 2   | Security and Compliance       | **30%**    |
| Domain 3   | Cloud Technology and Services | **34%**    |
| Domain 4   | Billing, Pricing, and Support | **12%**    |

The percentages indicate approximately how much of the **scored exam content** comes from each domain.

## 1.4 - Domain 1 - Cloud Concepts

This domain covers the fundamentals of cloud computing.

You should understand concepts such as:
- What cloud computing is
- Benefits of cloud computing
- AWS Cloud value proposition
- High availability
- Scalability
- Elasticity
- Agility
- Global infrastructure
- Cloud economics
- Migration to the cloud

You should also understand common cloud service models such as:
- **IaaS - Infrastructure as a Service**
- **PaaS - Platform as a Service**
- **SaaS - Software as a Service**

The goal is to understand **why organizations use cloud computing** rather than only memorizing AWS service names.

## 1.5 - Domain 2 - Security and Compliance

Security is a major part of the exam.

A central concept is the:

**AWS Shared Responsibility Model**

AWS is responsible for:
> **Security OF the cloud**

Examples:
- Physical data centers
- Physical servers
- Networking infrastructure
- Hardware
- Hypervisor infrastructure

The customer is responsible for:
> **Security IN the cloud**

Depending on the service, this may include:
- IAM users and permissions
- Application security
- Data protection
- Security groups
- Operating system patching
- Encryption configuration

The amount of responsibility handled by the customer changes depending on the AWS service being used.

For example:

**EC2**

Customer manages more components, including the operating system.

**Managed services**

AWS manages more of the underlying infrastructure

## 1.6 - Domain 3 - Cloud Technology and Service

This is the **largest exam domain**.

You need to recognize many AWS services and understand their main purposes.

Important service categories include:
- Compute
- Storage
- Databases
- Networking
- Security
- Analytics
- Artificial Intelligence / Machine Learning
- Application integration
- Management and monitoring
- Developer tools

Typical services include:

| **Service** | **Main Purpose**               |
| ----------- | ------------------------------ |
| EC2         | Virtual servers                |
| S3          | Object storage                 |
| RDS         | Managed relational databases   |
| Lambda      | Serverless compute             |
| VPC         | AWS virtual network            |
| IAM         | Identity and access management |
| CloudWatch  | Monitoring                     |
| Route 53    | DNS                            |
| ELB         | Load balancing                 |

For Cloud Practitioner, focus primarily on:

**What problem does this service solve?**

rather than detailed configuration.

## 1.7 - Domain 4 - Billing, Pricing, and Support

This domain focuses on the business and administrative side of AWS.

Topics include:
- AWS pricing models
- AWS billing
- Cost management
- AWS support plans
- Cost optimization tools
- AWS Organizations
- Consolidated billing

You should understand concepts such as:
- Pay-as-you-go pricing
- Economies of scale
- Reserved pricing
- Spot pricing
- AWS Free Tier
- Cost monitoring
- AWS support options

## 1.8 - Example Exam Concepts

The exam often presents a scenario and asks you to identify the most appropriate AWS service or concept.

**Shared Responsibility Model**

Question:

Which task is the customer's responsibility?

Possible correct examples:
- Configuring IAM policies
- Configuring EC2 security groups

Remember:

- **AWS - security OF the cloud**
- **Customer - security IN the cloud**

**EC2 Spot Instances**

Scenario:

A company wants unused EC2 capacity at a significantly discounted price and can tolerate interruptions

Answer:

**EC2 Spot Instances**

Key association:

> Spare capacity + discount + interruption possible → **Spot Instances**

**Amazon RDS Multi-AZ**

Scenario:

Why would a company deploy an Amazon RDS database using Multi-AZ?

Main reason:

**High availability / reliability**

Multi-AZ maintains infrastructure in multiple Availability Zones so workloads can recover from certain infrastructure failures.

Key association:

> RDS + Multi-AZ → **High availability**

**AWS Site-to-Site VPN**

Scenario:

A company wants an **encrypted network connection** between its on-premises data center and AWS.

Answer:

**AWS Site-to-Site VPN**

Key association:

> On-premises ↔ AWS + encrypted connection → **Site-to-Site VPN**

## 1.9 - Breadth vs Depth

One of the most important characteristics of the Cloud Practitioner exam is its **breadth**.

AWS has a large number of services, and many may appear within the exam scope.

You generally do not need deep technical knowledge of every service.

Instead, be able to answer:

- **What is the service?**
- **What is it mainly used for?**
- **When would I choose it?**
- **What similar AWS services could it be confused with?**

For example:
- S3 → Object storage
- EBS → Block storage
- EFS → Shared file storage

Knowing these differences is often more valuable than knowing detailed implementation steps.

## 1.10 - Certification Path After Cloud Practitioner

Cloud Practitioner is a foundational certification.

After completing it, learners can move toward certifications aligned with their interests or job role.

Common directions include:
- Solutions Architecture
- Development
- DevOps / Operations
- Security
- Data
- Machine Learning / AI

Cloud Practitioner provides broad AWS knowledge that can serve as a foundation for these more specialized paths.

## 1.11 - Exam Focus

For this topic, remember these facts:

**CLF-C02**
= AWS Certified Cloud Practitioner exam code

**65 questions**
= Total questions

**90 minutes**
= Exam duration

**700 / 1000**
= Passing scaled score

**Two question formats**
= Multiple Choice + Multiple Response

Know the four domains:
1. **Cloud Concepts** - **24%**
2. **Security and Compliance** - **30%**
3. **Cloud Technology and Services - 34%**
4. **Billing, Pricing, and Support - 12%**

Most important mindset:

> Cloud Practitioner tests **breadth more than depth**

For AWS services, prioritize learning:

> **Service → Purpose → Common use case → Difference from similar services**

Examples worth remembering immediately:
- **Spot Instances** → discounted spare EC2 capacity, can be interrupted
- **RDS Multi-AZ** → high availability
- **Site-to-Site VPN** → encrypted connection between on-premises and AWS
- **IAM policies / Security Groups** → customer responsibility under the Shared Responsibility Model

# 2 - Getting the Most Out of This Course

## 2.1 - Getting the Most Out of This Course

The primary goal of this course is to prepare for the **AWS Certified Cloud Practitioner (CLF-C02)** exam.

However, the course is also designed to build a strong AWS foundation that can support more advanced learning later.

Cloud Practitioner knowledge can serve as a starting point before moving toward areas such as:
- Solutions Architecture
- Networking
- Security
- Machine Learning
- DevOps
- Site Reliability Engineering (SRE)

The important objective is therefore not only to memorize enough information to pass the exam, but also to understand the fundamental AWS services and concepts.

## 2.2 - Four Core AWS Services

The course places particular emphasis on four foundational AWS services:

| **Area**   | **AWS Service** | **Purpose**                    |
| ---------- | --------------- | ------------------------------ |
| Compute    | **Amazon EC2**  | Virtual servers                |
| Storage    | **Amazon S3**   | Object storage                 |
| Networking | **Amazon VPC**  | Virtual networking             |
| Security   | **AWS IAM**     | Identity and access management |

These four services represent important foundational areas of AWS.

### 2.2.1 - Amazon EC2

**Amazon Elastic Compute Cloud (EC2)** provides virtual servers in AWS.

Key idea:

> EC2 = Compute

You can choose:
- Instance type
- Operating system
- Storage
- Networking
- Security configuration

EC2 is one of the fundamental services used to understand AWS compute concepts.

### 2.2.2 - Amazon S3

**Amazon Simple Storage Service (S3)** provides scalable object storage.

Key idea:

> S3 = Object Storage

Typical use cases include:
- File storage
- Backups
- Static website assets
- Logs
- Data lakes
- Application data

### 2.2.3 - Amazon VPC

**Amazon Virtual Private Cloud (VPC)** provides logically isolated networking within AWS.

Key idea:

> VPC = Networking

VPC concepts eventually include areas such as:
- Subnets
- Route tables
- Internet Gateways
- Security Groups
- Network ACLs
- Public and private networking

Understanding VPC helps explain how AWS resources communicate with each other and with external networks

### 2.2.4 - AWS IAM

**AWS Identity and Access Management (IAM)** controls authentication and authorization in AWS.

Key idea:

> IAM = Who can access what?

IAM concepts include:
- Users
- Groups
- Roles
- Policies
- Permissions

IAM is especially important because security questions appear throughout the Cloud Practitioner exam.

## 2.3 - Why These Four Services Matter

A useful way to remember the foundation is:

- **EC2 → Compute**
- **S3 → Storage**
- **VPC → Networking**
- **IAM → Security**

Once these concepts are understood, many additional AWS services become easier to learn because they often build on the same underlying ideas.

For example:

A typical AWS application might use:
- EC2 for application servers
- S3 for storing files
- VPC for network isolation
- IAM for controlling access

Other AWS services can then be added depending on the requirements.

## 2.4 - Learn by Doing

The course includes both theoretical lessons and hands-on demonstrations.

The instructor recommends performing the hands-on exercises where possible.

Hands-on experience is useful because it connects conceptual knowledge with the actual AWS interface and configuration process.

For example, instead of only learning:

> EC2 provides virtual servers

A hands-on exercise may involve:
1. Launching an EC2 instance
2. Selecting an instance type
3. Configuring networking
4. Creating a Security Group
5. Connecting to the instance
6. Terminating it afterward

This makes concepts easier to understand and remember

However, extensive hands-on administration is **not the primary focus** of the Cloud Practitioner exam.

The exam generally focuses more on:

> Understanding AWS concepts, services, capabilities, and appropriate use cases.

## 2.5 - Recommended Learning Process

A useful learning cycle for each course section is:

**Learn → Practice → Review → Test**

### 2.5.1 - Learn

Watch the lectures and understand the concepts.

Avoid concentrating only on memorizing service names.

Ask:
- What does this service do?
- Why would someone use it?
- What problem does it solve?
- What similar services could it be confused with?

### 2.5.2 - Practice

Complete hands-on exercises where practical.

Hands-on exercises help reinforce concepts such as:
- Resource creation
- AWS Console navigation
- Permissions
- Networking
- Storage configuration

### 2.5.3 - Review

Use the section summary or exam-essential material after completing each section.

The objective is to identify:
- Important definitions
- Important AWS services
- Common exam scenarios
- Similar services that need to be differentiated.

### 2.5.4 - Test

Complete the section practice questions before moving forward.

Practice questions help identify the difference between:

> "I recognize this concept"

and:

> "I can correctly apply this concept in an exam scenario."

If an answer is incorrect, review **why the correct option is correct and why the other options are incorrect**

That comparison is especially valuable for AWS exams.

## 2.6 - Practice Exams

The course includes full-length practice exams.

Practice exams are useful for testing several abilities simultaneously:
- AWS knowledge
- Service recognition
- Scenario interpretation
- Time management
- Identifying distractor answers

One practice exam is intended to resemble the normal exam difficulty.

Another includes more difficult and less frequently tested concepts.

The purpose of harder questions is to expose knowledge gaps before the actual exam.

## 2.7 - Using Practice Questions Correctly

Do not use practice tests only to memorize answers.

Instead, for every question, understand four things:

**Correct Answer**

Why is this option correct?

**Incorrect Answers**

Why are the other options incorrect?

**Trigger Words**

What words in the question point toward the correct service?

For example:

> "Unused EC2 capacity" + "discount" + "can tolerate interruption"

→ **Spot Instances**

**Service Comparison**

What similar service could the exam use as a distractor?

For example:

Spot Instances vs On-Demand Instances vs Saving Plans vs Reserved Instances

This approach builds reusable exam knowledge instead of question memorization.

## 2.8 - Course Revision Materials

The course provides revision resources such as:
- Course slides
- Section summaries
- Exam-essential material
- Practice quizzes
- Full practice exams

The detailed lectures are most useful during the learning phase.

Shorter summary material becomes more useful closer to the exam.

A useful progression is:

**Detailed learning → Section summaries → Practice questions → Weak-topic revision → Final exam-essential review**

## 2.9 - Suggested Study Timeline

The instructor recommends approximately **2 weeks** with roughly **1.5 - 2 hours per day** for completing the course.

The exact schedule can be adjusted depending on available time.

A useful principle is consistency rather than trying to complete many hours in one session.

For example:

**Daily session**

Lecture → Notes → Hands-on → Quiz → Review mistakes

This creates repeated exposure to the same concepts from different angles.

## 2.10 - Managing Outdated AWS Information

AWS services change frequently.

Changes can include:
- Service names
- Pricing
- Console interfaces
- Features
- Limits
- Support plans
- Service availability

Therefore, it is important to distinguish between **Core concepts** which usually remain stable, and **Product details** which may change over time.

For exam preparation, current AWS documentation and the official exam guide should be treated as authoritative when course material conflicts with updated AWS information.

## 2.11 - Recommended Study Mindset

Avoid learning AWS as a giant list of unrelated services.

Instead, organize services into categories.

For example:

**Compute**
- EC2
- Lambda
- ECS
- EKS

**Storage**
- S3
- EBS
- EFS
- S3 Glacier

**Database**
- RDS
- DynamoDB
- Aurora

**Networking**
- VPC
- Route 53
- CloudFront
- Direct Connect

**Security**
- IAM
- KMS
- WAF
- Shield

Then ask:

> What makes each service different from the others in its category?

AWS exam questions frequently test these distinctions.

## 2.12 - A Good Study Pattern for AWS Services

For each AWS service, learn approximately five things:

**1. Category**

What type of service is it?

Example:

> EC2 → Compute

**2. Purpose**

What does it do?

Example:

> EC2 provides virtual servers

**3. Common Use Case**

When would it be used?

Example:

> Running an application that requires control over the operating system.

**4. Key Feature**

What characteristic is commonly tested?

Example:

> EC2 supports multiple purchasing models such as On-Demand and Spot

**5. Similar Services**

What could the exam confuse it with?

Example:

> EC2 vs Lambda

This structure is more effective than memorizing long descriptions.

## 2.13 - Exam Focus

This lecture is mainly about **how to study**, rather than introducing a large amount of exam content.

The four foundational services worth remembering immediately are:

- **EC2** = Compute
- **S3** = Object storage
- **VPC** = Networking
- **IAM** = Identity and access management

A strong study workflow is:

> **Learn → Hands-on → Review → Practice Questions → Analyze Mistakes**

When studying an AWS service, focus on:

> **Category → Purpose → Use Case → Key Feature → Similar Services**

For practice questions, do not only memorize the correct option.

Understand:

> **Why the correct answer is correct + why the distractors are wrong**

For final preparation:

> Use detailed lectures first and condensed exam-essential material closer to the exam.

Most important takeaway:

> Build a strong foundation in **EC2, S3, VPC, and IAM**, because many later AWS concepts depend on understanding compute, storage, networking, and security.