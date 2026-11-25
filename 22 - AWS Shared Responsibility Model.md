# 1 - AWS Shared Responsibility Model

## **1.1 AWS Shared Responsibility Model**

The **AWS Shared Responsibility Model** defines how **security and compliance responsibilities** are divided between AWS and its customers.

Both AWS and the customer are responsible for securing applications and resources deployed in the AWS Cloud.

The model helps customers **manage security risks effectively** by clearly identifying which responsibilities belong to AWS and which belong to the customer.

### **Core Principle**

| AWS Responsibility                                                        | Customer Responsibility                                                                          |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Security OF the Cloud**                                                 | **Security IN the Cloud**                                                                        |
| Protecting the underlying cloud infrastructure                            | Securing applications, data, and configurations deployed in AWS                                  |
| Managing physical hardware, facilities, and virtualization infrastructure | Managing access permissions, operating systems, application security, and network configurations |

**Key distinction:**

- **AWS** secures the infrastructure that runs AWS services.
- **Customers** secure what they deploy, configure, and manage within AWS.

Deploying an application on AWS does **not** mean AWS automatically assumes responsibility for all aspects of its security.

## **1.2 AWS vs Customer Responsibilities**

### **AWS Responsibilities - Security OF the Cloud**

AWS is responsible for protecting the **underlying infrastructure** that operates AWS Cloud services.

This includes:
- **Physical security** of AWS data centers and facilities.
- **Physical servers and hardware** hosting AWS services.
- **Storage infrastructure** and underlying physical disks.
- **Networking infrastructure** supporting AWS services.
- **Virtualization layer and hypervisors**.
- **AWS Regions and Availability Zones** infrastructure.
- **Host operating systems** supporting the virtualization infrastructure.

### **Customer Responsibilities - Security IN the Cloud**

Customers are responsible for securing the resources and applications they configure or deploy.

This includes:
- **Guest operating systems** running on Amazon EC2 instances.
- **Applications and software** installed on EC2 instances.
- **Operating system and software patching** for customer-managed systems.
- **Security groups** and network firewall configurations.
- **AWS Identity and Access Management (IAM)** permissions and access controls.
- **Data access permissions**.
- **Encryption configurations** where customer-managed.
- **Application security** and configuration.

### **Responsibility Comparison**

| Component                                         | Responsible Party |
| ------------------------------------------------- | ----------------- |
| Physical data center security                     | **AWS**           |
| Physical servers and hardware                     | **AWS**           |
| Hypervisor and virtualization infrastructure      | **AWS**           |
| AWS Regions and Availability Zones infrastructure | **AWS**           |
| EC2 guest operating system                        | **Customer**      |
| EC2 operating system patching                     | **Customer**      |
| Applications installed on EC2                     | **Customer**      |
| Security group configurations                     | **Customer**      |
| IAM users, roles, and permissions                 | **Customer**      |
| Customer data access controls                     | **Customer**      |

## **1.3 Shared Responsibility Across AWS Services**

| Service | AWS secures or operates | Customer secures or configures |
| --- | --- | --- |
| **Amazon EC2** | Physical infrastructure, host OS, and hypervisor | Guest OS and patches, application software, security groups, credentials, and data |
| **Amazon RDS** | Database infrastructure, underlying OS, and the managed maintenance and backup mechanisms | Database users and access, network exposure, data and encryption configuration, and available backup and maintenance settings |
| **AWS Lambda** | Infrastructure and managed runtime operation. AWS delivers updates for managed runtimes according to their update mode. | Function code, bundled dependencies or container image, IAM role, data, and runtime selection or update settings |
| **Amazon S3** | Storage infrastructure, built-in redundancy for the chosen storage class, and default server-side encryption | Bucket and object access, encryption choice and key permissions, retention, replication if needed, and data classification |
| **Amazon ECS** | Container orchestration control plane and the underlying compute when using Fargate | Application containers and access. For self-managed EC2 capacity, also manage the instances and guest OS. |

[AWS shared responsibility model](https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-shared-responsibility.html) · [Lambda runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html)

### Inherited, shared, and customer-specific controls

| Control type | Example |
| --- | --- |
| **Inherited** | AWS handles physical access and environmental controls for its data centers. |
| **Shared** | AWS patches its infrastructure. On EC2, the customer applies guest OS and application patches. Each party implements the control at its own layer. |
| **Customer-specific** | The customer configures a workload’s security group rules or manages application data classification. |

[AWS security controls](https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-shared-responsibility.html)

## **1.4 Exam Focus**

- **Security OF the Cloud - AWS responsibility**
- **Security IN the Cloud - Customer responsibility**
- **Physical data centers, servers, and hypervisors - AWS**
- **EC2 guest operating system and patching - Customer**
- **EC2 security groups and IAM permissions - Customer**
- **S3 underlying storage infrastructure and redundancy - AWS**
- **S3 data access and security configurations - Customer**
- **RDS underlying OS, managed patching, and automated backup operations - AWS**
- **RDS public accessibility and security group configurations - Customer**
- **More managed AWS services - AWS generally assumes more infrastructure management responsibilities**

**Exam Tip:** In scenario-based questions, first identify the **AWS service** and then determine whether the task concerns the **underlying AWS infrastructure** or a **customer-managed resource or configuration**.

# 2 - AWS Acceptable Use Policy

## **2.1 AWS Acceptable Use Policy (AUP)**

The **AWS Acceptable Use Policy (AUP)** defines what activities are **permitted and prohibited** when using AWS services and the AWS website.

Customers must comply with this policy when using AWS infrastructure.

**Key points:**
- The policy governs the acceptable use of **AWS services and the AWS website**.
- Customers cannot use AWS resources for **illegal, fraudulent, or harmful activities**.
- Customers must not use AWS services to **violate the rights of others**.
- Customers must not facilitate or allow others to perform prohibited activities using AWS services.
- Creating an AWS account involves accepting the applicable AWS terms and policies.

### **Prohibited Activities**

Examples of activities prohibited under the policy include:
- **Illegal or fraudulent activities**.
- **Threatening or harassing others**.
- **Promoting terrorism or violence**.
- **Violating the rights of others**.
- **Misusing AWS services** to perform prohibited activities.

**Example:**

**Amazon Simple Notification Service (Amazon SNS)** can send notifications through email or SMS.

Using SNS to send threatening messages or facilitate illegal activities would violate the **AWS Acceptable Use Policy**.

## **2.2 Reporting AWS Abuse**

AWS provides a mechanism to report suspected misuse of its infrastructure.
- Customers can report activities that violate the **AWS Acceptable Use Policy**.
- Abuse can be reported when suspicious activities occur within their own AWS account or involve other AWS users.
- Reports can be submitted through **AWS Report Abuse**.

**Exam association:**

**Suspected illegal or abusive use of AWS resources - AWS Report Abuse**

Send reports of suspected misuse of AWS resources to **AWS Trust & Safety**. For a support case about your workload or account, see [AWS Support Center](./26%20-%20AWS%20Support.md). [Report abuse of AWS resources](https://repost.aws/knowledge-center/report-aws-abuse)

## **2.3 Exam Focus**

- **AWS Acceptable Use Policy (AUP) - Defines permitted and prohibited activities on AWS**
- **Illegal, fraudulent, or harmful activities - Prohibited**
- **Misusing AWS services to threaten others or promote violence - AUP violation**
- **Suspected misuse of AWS infrastructure - AWS Report Abuse**
- **Using AWS services - Requires compliance with AWS policies**

**Exam Tip:** If a question asks which AWS policy defines **what customers are allowed or prohibited from doing with AWS services**, the answer is **AWS Acceptable Use Policy (AUP)**.

# 3 - Quiz

## **3.1 Practice Question**

### **Original Question**

Which of the following activities is explicitly prohibited by the AWS Acceptable Use Policy?

### **Choices**

A. Running simulations for financial modeling.
B. Hosting malware or other malicious software.
C. Performing load tests on your applications.
D. Storing encrypted sensitive data.

### **Correct Answer**

**B. Hosting malware or other malicious software.**

### **Why?**

The **AWS Acceptable Use Policy (AUP)** prohibits using AWS infrastructure for malicious, illegal, or harmful activities.
- **B (Correct):** Hosting or distributing malware violates the AWS Acceptable Use Policy.
- **A:** Financial modeling is a legitimate use of AWS resources.
- **C:** Load testing is generally permitted when conducted in compliance with AWS policies.
- **D:** Storing encrypted sensitive data is allowed when applicable security and compliance requirements are met.

**Exam clue: Hosting malware or performing malicious activities - AWS Acceptable Use Policy violation**

## **3.2 Practice Question**

### **Original Question**

You are using Amazon S3 to store sensitive business documents. Which task is your responsibility?

### **Choices**

A. Ensuring that you allocate enough storage for your S3 bucket.
B. Maintaining multiple copies of the data.
C. Making sure that you always upload encrypted data.
D. Setting up bucket policies and access permissions.

### **Correct Answer**

**D. Setting up bucket policies and access permissions.**

### **Why?**

Under the **AWS Shared Responsibility Model**, customers are responsible for configuring **Amazon S3 bucket policies and access permissions**.
- **D (Correct):** Customers control who can access their S3 buckets and objects.
- **A:** Amazon S3 automatically scales storage capacity without requiring customers to allocate storage in advance.
- **B:** AWS manages the underlying data redundancy and storage infrastructure.
- **C:** Customers are responsible for applicable encryption configurations, but S3 automatically encrypts new object uploads by default. Customers do not have to pre-encrypt every file before uploading it.

**Exam clue: S3 bucket policies and access permissions - Customer responsibility**

## **3.3 Practice Question**

### **Original Question**

Which of the following is NOT allowed under AWS Acceptable Use Policy?

### **Choices**

A. Hosting a public-facing website.
B. Storing and analyzing healthcare data.
C. Using AWS resources for cryptocurrency mining without consent.
D. Running penetration tests on your applications hosted on AWS.

### **Correct Answer**

**C. Using AWS resources for cryptocurrency mining without consent.**

### **Why?**

The quiz identifies **cryptocurrency mining without AWS consent** as a prohibited activity.
- **C (Correct):** According to the quiz, cryptocurrency mining requires prior AWS approval and is not permitted without consent.
- **A:** Hosting public-facing websites is a legitimate AWS use case.
- **B:** Healthcare data can be stored and analyzed on AWS when applicable security, privacy, and compliance requirements are met.
- **D:** Penetration testing is permitted for supported AWS services when conducted according to AWS security testing policies.

**Exam clue: Prohibited or unauthorized activities on AWS - AWS Acceptable Use Policy**

## **3.4 Practice Question**

### **Original Question**

When using Amazon RDS, which task remains your responsibility?

### **Choices**

A. Database high availability.
B. Operating system patching for RDS instances.
C. Configuring database schemas and user permissions.
D. Ensuring the physical security of the RDS servers.

### **Correct Answer**

**C. Configuring database schemas and user permissions.**

### **Why?**

**Amazon Relational Database Service (Amazon RDS)** is a managed database service where AWS manages the underlying infrastructure, while customers retain responsibility for their database configurations and access controls.
- **C (Correct):** Customers manage database schemas, database users, and permissions.  
- **A:** AWS provides managed high-availability capabilities, but customers are responsible for selecting and configuring options such as Multi-AZ when required.
- **B:** AWS manages operating system patching for RDS instances.
- **D:** AWS is responsible for the physical security of the underlying servers and data centers.

**Exam clue: RDS database schemas and user permissions - Customer responsibility**

## **3.5 Practice Question**

### **Original Question**

Your company uses Amazon EC2 to run applications. Which task is your responsibility under the shared responsibility model?

### **Choices**

A. Managing the underlying physical hardware.
B. Patching the operating system of the EC2 instance.
C. Ensuring data center power and cooling.
D. Maintaining the network infrastructure.

### **Correct Answer**

**B. Patching the operating system of the EC2 instance.**

### **Why?**

Under the **AWS Shared Responsibility Model**, customers are responsible for managing the **guest operating system** running inside their Amazon EC2 instances.
- **B (Correct):** Customers manage and patch the EC2 guest operating system and installed software.
- **A:** AWS manages the underlying physical hardware.
- **C:** AWS manages data center facilities, including power and cooling.
- **D:** AWS maintains the underlying network infrastructure, while customers configure their own network security controls.

**Exam clue: EC2 guest operating system patching - Customer responsibility**

## **3.6 Exam Focus**

- **AWS Acceptable Use Policy - Defines prohibited activities on AWS**
- **Hosting malware or malicious software - Prohibited**
- **Unauthorized cryptocurrency mining - Prohibited according to the quiz**
- **Amazon S3 storage infrastructure and redundancy - AWS responsibility**
- **Amazon S3 bucket policies and access permissions - Customer responsibility**
- **Amazon RDS underlying OS patching - AWS responsibility**
- **Amazon RDS database schemas and user permissions - Customer responsibility**
- **Amazon EC2 guest OS patching - Customer responsibility**
- **Physical hardware, data centers, and underlying networking infrastructure - AWS responsibility**

**Exam Tip:** The **AWS Shared Responsibility Model** establishes who is responsible for securing and managing resources, while the **AWS Acceptable Use Policy** defines which activities are permitted or prohibited when using AWS services.
