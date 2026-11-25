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
| Exam Price     | **USD $100**                        |
| Question Types  | Multiple choice + Multiple response |
| Scaled Score    | **100-1000**                        |
| Passing Score   | **700**                             |

AWS recommends approximately **6 months of exposure to AWS Cloud concepts and services**, although hands-on professional AWS experience is not strictly required.

> Important: A score of **700/1000 is a scaled score**. It should not be interpreted as simply needing 70% of the questions correct.

Of the **65 questions**, **50 are scored** and **15 are unscored**. AWS does not identify the unscored questions. An unanswered question counts as incorrect, and there is no guessing penalty. Answer every question.

[AWS exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html) · [Certification page](https://aws.amazon.com/certification/certified-cloud-practitioner/)

## 1.2 - Question Types

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

**Review in the notes** — [cloud benefits and economics](./03%20-%20Cloud%20Concepts.md), [Well-Architected and CAF](./25%20-%20AWS%20Well-Architected%20and%20Cloud%20Adoption%20Framework%20%28CAF%29.md), [migration](./20%20-%20AWS%20Migration%20and%20Hybrid%20Storage.md). [AWS Domain 1](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html)

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

**Review in the notes** — [shared responsibility](./22%20-%20AWS%20Shared%20Responsibility%20Model.md), [IAM](./05%20-%20Foundation%20-%20AWS%20IAM.md), [security and compliance](./19%20-%20AWS%20Security.md), [auditing and monitoring](./17%20-%20AWS%20Monitoring%20and%20Logging.md). [AWS Domain 2](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain2.html)

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

**Review in the notes** — [global infrastructure](./04%20-%20AWS%20Global%20Infrastructure.md), [EC2](./06%20-%20Foundation%20-%20Amazon%20EC2.md), [containers and Lambda](./07%20-%20AWS%20Compute%20-%20Containers,%20ECS,%20EKS%20and%20Lambda.md), [scaling and load balancing](./08%20-%20Load%20Balancer%20&%20Auto%20Scaling.md), [VPC](./09%20-%20Foundation%20-%20Amazon%20VPC%20and%20Networking.md), [DNS and edge](./10%20-%20DNS%20and%20Edge%20Networking.md), [storage](./11%20-%20Foundation%20-%20AWS%20Storage%20Services.md), [databases](./12%20-%20AWS%20Database%20Services.md), [analytics](./13%20-%20AWS%20Big%20Data%20And%20Analytics%20Services.md), [integration](./14%20-%20AWS%20Application%20Integration%20Services.md), [deployment](./15%20-%20Infrastructure%20&%20Application%20Deployment%20%28DevOps%29.md), [governance tooling](./16%20-%20Infrastructure%20Management%20&%20Compliance.md), [AI and ML](./18%20-%20Machine%20Learning%20and%20AI.md). [AWS Domain 3](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html)

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

**Review in the notes** — [EC2 purchasing](./06%20-%20Foundation%20-%20Amazon%20EC2.md), [Organizations and consolidated billing](./23%20-%20AWS%20Account%20Management.md), [cost management](./24%20-%20AWS%20Billing%20and%20Cost%20Management.md), [Support](./26%20-%20AWS%20Support.md), [AWS resources and Marketplace](./27%20-%20AWS%20Partners%20Network,%20AWS%20Professionals%20Services%20and%20AWS%20Community.md). [AWS Domain 4](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html)

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

See [Course Introduction](./00%20-%20Course%20Introduction.md) for a study routine and exercise setup.
