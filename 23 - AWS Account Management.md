# 1 - AWS Organization

## **1.1 AWS Organizations**

**AWS Organizations** is an AWS service that allows you to **centrally manage and govern multiple AWS accounts** within a single organization.

In large enterprises, multiple AWS accounts are commonly used to separate:
- **Business units** - Finance, HR, IT
- **Projects** - Project A, Project B
- **Environments** - Development, Testing, Production

Managing these accounts individually becomes difficult as the number of accounts increases.

**AWS Organizations** simplifies multi-account management by providing:
- **Centralized account management** - Manage multiple AWS accounts within one organization.
- **Consolidated billing** - Combine billing across multiple accounts into a single bill.
- **Centralized policies** - Apply governance and permission restrictions across accounts.
- **Organizational Units (OUs)** - Logically group accounts for easier management.
- **Account automation** - Automate the creation and management of AWS accounts.

**Exam clue: Centrally manage and govern multiple AWS accounts - AWS Organizations**

## **1.2 AWS Organizations Structure**

AWS Organizations uses a hierarchical structure to manage accounts.

### **Management Account**

The **Management Account** is the primary AWS account that owns and manages the organization.
- Responsible for managing the AWS organization.
- Can invite or add AWS accounts to the organization.
- Manages consolidated billing.
- An existing AWS account can become the management account by creating an AWS organization.

### **Member Accounts**

**Member Accounts** are AWS accounts that belong to an AWS organization.
- Also informally called **child accounts**.
- Can represent different projects, departments, or environments.
- Remain separate AWS accounts but are managed centrally.
- Can be grouped into Organizational Units.

### **Organizational Units (OUs)**

An **Organizational Unit (OU)** is a logical grouping of AWS accounts within an organization.
- Helps organize accounts based on departments, projects, or environments.
- Allows policies to be applied collectively to grouped accounts.
- **OUs are not AWS accounts** - they are logical containers.
- Supports **nested OUs up to five levels deep**.
- Accounts can also belong directly to the organization's root without being placed in an OU.

## **1.3 Key Features of AWS Organizations**

### **1. Consolidated Billing**

**Consolidated Billing** combines charges from multiple AWS accounts into a single bill.
- Each member account can incur charges independently.
- The management account receives the consolidated bill.
- Simplifies billing administration for large organizations.
- Reduces the risk of missing payments for individual accounts.

**Example:** A company operates 50 AWS accounts across different projects. Instead of paying 50 separate bills, the finance team manages one consolidated bill.

**Exam clue: Single bill for multiple AWS accounts - Consolidated Billing through AWS Organizations**

### **2. Centralized Policies**

AWS Organizations supports centralized governance through organization policies.

One important policy type is the **Service Control Policy (SCP)**.
- SCPs define **permission guardrails** for AWS accounts.
- Can restrict which AWS service actions are permitted.
- Can be applied at different levels:
    - **Organization root** - Applies broadly across the organization.
    - **Organizational Unit (OU)** - Applies to accounts within that OU.
    - **Individual member account** - Applies to a specific account.

**Important distinction:**

- **AWS IAM policies** grant or restrict permissions for identities.
- **SCPs** establish the maximum permissions available to identities in affected member accounts.
- **SCPs do not grant permissions by themselves.**

**Exam clue: Restrict AWS permissions across multiple accounts centrally - Service Control Policies (SCPs)**

### **3. Account Automation**

AWS Organizations supports automation for managing AWS accounts at scale.
- Automate the creation of new AWS accounts.
- Support account-management operations through APIs.
- Reduce manual administration when onboarding new projects.

**AWS Control Tower** is another AWS service that helps automate multi-account setup and governance.

For example, large enterprises may use an **Account Factory** to provision standardized AWS accounts on demand.

## **1.4 Exam Focus**

- **Centralized multi-account management - AWS Organizations**
- **Primary account that manages the organization - Management Account**
- **AWS accounts belonging to an organization - Member Accounts**
- **Logical grouping of AWS accounts - Organizational Units (OUs)**
- **Maximum nested OU depth - Five levels**
- **Single combined bill across AWS accounts - Consolidated Billing**
- **Centralized permission guardrails - Service Control Policies (SCPs)**
- **SCPs restrict permissions; they do not grant permissions**
- **Automated multi-account setup and governance - AWS Control Tower**

**Key Exam Distinction:**

| Concept                             | Primary Purpose                                     |
| ----------------------------------- | --------------------------------------------------- |
| **AWS Organizations**               | Centrally manage and govern multiple AWS accounts   |
| **Organizational Units (OUs)**      | Group AWS accounts logically                        |
| **Consolidated Billing**            | Combine charges from multiple AWS accounts          |
| **Service Control Policies (SCPs)** | Define permission guardrails across member accounts |
| **AWS Control Tower**               | Automate multi-account setup and governance         |

# 2 - SCP - Service Control Policy

## **2.1 Service Control Policies (SCPs)**

**Service Control Policies (SCPs)** are a feature of **AWS Organizations** used to centrally control the **maximum available permissions** for IAM users and roles across AWS member accounts.

SCPs establish **permission guardrails** that restrict what actions can be performed within an AWS organization.

### **Key Characteristics**

- **Maximum Permissions** - SCPs define the maximum permissions available to IAM users and roles.
- **Restrictive Only** - SCPs can restrict permissions but **cannot grant additional permissions**.
- **Centralized Governance** - Manage permission restrictions across multiple AWS accounts.
- **Hierarchical Application** - Apply SCPs at the organization root, Organizational Unit (OU), or individual account level.
- **Member Accounts Only** - SCPs do not restrict IAM users or roles in the **management account**.

**Important:** Even if an SCP allows an action, the IAM user or role must still have the required permission through an **IAM policy**.

**Exam clue: Restrict maximum permissions across AWS accounts - Service Control Policies (SCPs)**

## **2.2 SCP vs IAM Policies**

Both **IAM Policies** and **SCPs** influence access to AWS services, but they serve different purposes.

| Feature                  | IAM Policies                  | Service Control Policies (SCPs)                 |
| ------------------------ | ----------------------------- | ----------------------------------------------- |
| **Purpose**              | Grant or restrict permissions | Define maximum available permissions            |
| **Grant Permissions**    | Yes                           | **No**                                          |
| **Restrict Permissions** | Yes                           | Yes                                             |
| **Scope**                | IAM identities and resources  | AWS organization root, OUs, and member accounts |
| **Management Account**   | Applies                       | SCP restrictions do not apply                   |

### **How SCP Permission Evaluation Works**

For an action to be permitted:
1. The **IAM policy** must grant the required permission.
2. The **SCPs** must permit the action.
3. An **explicit deny** in an applicable SCP blocks the action, even if IAM allows it.

For SCPs using an **allow-list approach**, permissions must be allowed at every level in the hierarchy, from the organization root to the member account.

**Key Distinction:**

- **IAM allows + SCP allows = Access permitted**, assuming no other restrictions.
- **IAM allows + SCP denies = Access denied.**
- **IAM denies or does not grant + SCP allows = Access denied.**

**Exam clue: SCPs set permission boundaries; IAM policies grant the actual permissions.**

## **2.3 Common SCP Use Cases**

SCPs are commonly used to enforce security, compliance, and cost-control restrictions across AWS accounts.

| Use Case                        | Example                                                                     |
| ------------------------------- | --------------------------------------------------------------------------- |
| **Restrict AWS Services**       | Prevent member accounts from using particular AWS services                  |
| **Restrict AWS Regions**        | Prevent resource deployment in unauthorized AWS Regions                     |
| **Restrict EC2 Instance Types** | Allow only small EC2 instance types in development and testing environments |
| **Enforce S3 Encryption**       | Deny S3 object uploads that do not meet encryption requirements             |

### **Example Scenarios**

**Scenario 1: Region Restriction**

An organization wants employees to deploy resources only in approved AWS Regions.
- Apply an **SCP** to restrict actions in unapproved Regions.
- Helps enforce organizational governance and compliance requirements.

**Scenario 2: Cost Control**

A company wants developers to launch only small EC2 instances in development accounts.
- Apply an **SCP** that restricts allowed EC2 instance types, such as `t2.micro`.
- Prevents the use of unnecessarily large instances in lower environments.

**Scenario 3: Security Enforcement**

A company requires encrypted objects in Amazon S3.
- Apply an **SCP** that denies uploads not meeting the required encryption conditions.
- Helps enforce consistent security requirements across member accounts.

## **2.4 Exam Focus**

- **Centrally restrict permissions across AWS accounts - Service Control Policies (SCPs)**
- **Maximum available permissions - SCPs**
- **Grant permissions to IAM users and roles - IAM Policies**
- **SCPs cannot grant additional permissions**
- **Explicit SCP deny overrides an IAM allow**
- **SCPs apply to organization roots, OUs, and member accounts**
- **SCPs do not restrict the management account**
- **Restrict AWS services or Regions - SCPs**
- **Restrict EC2 instance types for cost control - SCPs**
- **Enforce organization-wide security guardrails - SCPs**

**Key Exam Distinction:**

- **IAM Policy - Determines what permissions an identity is granted.**
- **SCP - Limits the maximum permissions that can be exercised in a member account.**

# 3 - Consolidated Billing

## **3.1 Consolidated Billing**

**Consolidated Billing** is a feature of **AWS Organizations** that allows multiple AWS accounts to combine their billing under a single **management account**.
- The **management account** is responsible for paying the bill for the entire AWS organization.
- The consolidated bill includes charges from both the management account and all member accounts.
- Each AWS account can still **track its individual usage and costs**.
- Simplifies billing administration for organizations operating multiple AWS accounts.

**Exam clue: One bill for multiple AWS accounts - Consolidated Billing through AWS Organizations**

## **3.2 Benefits of Consolidated Billing**

### **1. Single Bill with Individual Cost Visibility**

Consolidated Billing combines charges across multiple AWS accounts into a single payment.
- **Single Payment** - The management account pays the combined bill.
- **Individual Cost Tracking** - Member accounts can still monitor their own AWS service usage and costs.
- **Simplified Administration** - Finance teams do not need to manage separate payments for every AWS account. 

**Example:** A company operating 20 AWS accounts can track costs separately for each account while paying one consolidated bill.

### **2. Combined Usage and Shared Discounts**

One of the biggest benefits of Consolidated Billing is the ability to **combine usage across AWS accounts** to maximize cost savings.

Discount benefits from pricing commitments such as:
- **Savings Plans**
- **Reserved Instances (RIs)**
can be shared across eligible AWS accounts within the organization.

This helps reduce wasted commitments when usage decreases in one account but remains available in other accounts.

### **Example: Savings Plans Sharing**

Suppose **Account A** purchases a Savings Plan with a commitment of **$10 per hour**.

Initially, Account A uses the full commitment. Later, its usage decreases to $5 per hour.

**Without Consolidated Billing:**
- Account A uses only $5/hour of its $10/hour commitment.
- The remaining $5/hour commitment may go unused.
- Account A must still pay its original commitment.

**With Consolidated Billing:**
- Account A uses $5/hour of its commitment.
- The remaining $5/hour benefit can apply to eligible usage in other member accounts.
- Helps maximize Savings Plan utilization across the organization.

**Important:** Savings Plans and Reserved Instance discounts can be shared across eligible accounts, subject to applicable sharing settings and rules.

**Exam clue: Share eligible Savings Plans and Reserved Instance discounts across multiple AWS accounts - Consolidated Billing**

## **3.3 AWS Organizations Pricing**

**AWS Organizations is free to use.**
- No additional charge for creating or managing an AWS organization.
- No additional charge for using Consolidated Billing.
- Accounts continue paying for the AWS services and resources they consume.

**Important distinction:** Consolidated Billing does not make AWS resources free. It simplifies payment and can improve cost efficiency through combined usage and discount sharing.

## **3.4 Exam Focus**

- **Single bill across multiple AWS accounts - Consolidated Billing**
- **Responsible for paying the consolidated bill - Management Account**
- **Individual account cost visibility - Available with Consolidated Billing**
- **Combine usage across AWS accounts - Consolidated Billing**
- **Share eligible Savings Plans and Reserved Instance discounts - Consolidated Billing**
- **Maximize pricing commitment utilization across accounts - Combined Usage**
- **Cost of AWS Organizations - Free**

**Key Exam Distinction:**

| Feature                       | Benefit                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| **Single Bill**               | One payment for the entire AWS organization                 |
| **Individual Cost Tracking**  | Monitor usage and costs separately by account               |
| **Combined Usage**            | Improve cost efficiency across accounts                     |
| **Discount Sharing**          | Share eligible Savings Plans and Reserved Instance benefits |
| **AWS Organizations Pricing** | No additional service charge                                |

# 4 - AWS Control Tower

## **4.1 AWS Control Tower**

**AWS Control Tower** is an AWS service that automates the setup and governance of a **secure, well-architected, multi-account AWS environment** based on AWS best practices.

It helps organizations establish a standardized AWS environment without manually configuring multiple AWS services and security policies.

### **Key Characteristics**

- **Automated Multi-Account Setup** - Deploys AWS environments with preconfigured best practices.
- **Landing Zone Creation** - Establishes a secure, well-architected multi-account environment.
- **Centralized Governance** - Applies security and compliance controls across AWS accounts.
- **Account Provisioning** - Automates AWS account creation using **Account Factory**.
- **Centralized Monitoring** - Provides a dashboard to monitor governance and compliance across the landing zone.

AWS Control Tower is particularly useful for **large organizations managing multiple AWS accounts**.

**Exam clue: Automatically set up and govern a secure, well-architected multi-account AWS environment - AWS Control Tower**

## **4.2 AWS Landing Zone**

An **AWS Landing Zone** is a **well-architected, multi-account AWS environment** configured according to AWS security, compliance, and operational best practices.

It serves as the starting point for organizations operating workloads across multiple AWS accounts.

A landing zone typically includes:
- **AWS Organizations** - Centralized account management.
- **Organizational Units (OUs)** - Logical account grouping.
- **Security and Compliance Controls** - Standardized governance policies.
- **Centralized Logging** - Collecting logs from multiple AWS accounts.
- **Identity and Access Management** - Centralized user access management.

**AWS Control Tower automates the creation and ongoing governance of a landing zone.**

### **AWS Organizations vs AWS Control Tower**

| Feature                | AWS Organizations                         | AWS Control Tower                           |
| ---------------------- | ----------------------------------------- | ------------------------------------------- |
| **Primary Purpose**    | Centrally manage multiple AWS accounts    | Automate multi-account setup and governance |
| **Account Management** | Organize accounts into OUs                | Automate standardized account provisioning  |
| **Governance**         | Apply policies such as SCPs               | Establish and monitor governance controls   |
| **Landing Zone**       | Provides the underlying account structure | Automates landing zone setup                |

**Key Distinction:**

- **AWS Organizations** - Manage and govern multiple AWS accounts.
- **AWS Control Tower** - Automate the setup of a governed multi-account environment.

## **4.3 AWS Control Tower Key Features**

### **1. Guardrails (Controls)**

**Guardrails**, also called **controls**, are governance rules used to maintain security and compliance across AWS accounts.

AWS Control Tower provides predefined and customizable controls to help enforce organizational best practices.

Two categories discussed in the lesson are:

| Type                   | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| **Mandatory Controls** | Required controls that establish baseline governance                        |
| **Elective Controls**  | Optional controls that organizations can enable based on their requirements |

**Examples of security and governance requirements:**
- Enforce **Multi-Factor Authentication (MFA)** for sensitive access.
- Restrict **root user access**.
- Prevent unrestricted **SSH or RDP access** from the internet.
- Enforce resource **tagging requirements**.

These are examples of governance objectives, not necessarily the exact predefined controls provided by AWS Control Tower.

**Exam clue: Apply standardized security and compliance controls across AWS accounts - AWS Control Tower**

### **2. Account Factory**

**Account Factory** is an AWS Control Tower feature that automates the provisioning of new AWS accounts.

Instead of manually creating and configuring accounts, organizations can establish standardized configurations for newly provisioned accounts.
- Automates **AWS account creation**.
- Helps ensure accounts follow organizational standards.
- Can support the provisioning of predefined AWS resources.
- Can integrate with Infrastructure as Code tools such as **Terraform**.

**Example:**

A company wants every newly created AWS account to include:
- A predefined **Amazon VPC**.
- Three subnets across three Availability Zones.
- Required VPC endpoints.

Using Account Factory with additional provisioning automation, these resources can be configured when new AWS accounts are created.

**Exam clue: Automatically provision standardized AWS accounts - AWS Control Tower Account Factory**

### **3. Centralized Governance Dashboard**

AWS Control Tower provides a **centralized dashboard** for monitoring the landing zone.

It allows administrators to:
- Monitor the multi-account AWS environment.
- Review governance and compliance status.
- Identify resources that do not comply with configured controls.

This helps organizations maintain consistent governance across AWS accounts.

## **4.4 AWS Control Tower Landing Zone Architecture**

A typical AWS Control Tower landing zone includes separate accounts for **security monitoring, centralized logging, and application workloads**.

### **Security Organizational Unit (OU)**

The **Security OU** commonly contains two important accounts.

| Account                 | Purpose                                                                   |
| ----------------------- | ------------------------------------------------------------------------- |
| **Audit Account**       | Centralized security and compliance visibility across AWS accounts        |
| **Log Archive Account** | Centralized storage of logs, including AWS CloudTrail and AWS Config logs |

**Audit Account**

- Used for centralized security monitoring and auditing.
- Allows security teams to investigate security and compliance events across accounts.

**Log Archive Account**

- Stores logs centrally from multiple AWS accounts.
- Collects logs such as **AWS CloudTrail** and **AWS Config**.
- Supports security investigations and auditing.

### **Workload Accounts**

**Workload Accounts** host the organization's actual applications and resources.

- Can be organized into different OUs based on projects, departments, or environments.
- Follow governance controls established by AWS Control Tower.
- Send configured security and operational logs to centralized accounts.

**Example:**

A company can maintain separate Development, Testing, and Production accounts while managing security and logging centrally.

## **4.5 AWS Control Tower Integrations**

AWS Control Tower integrates with several AWS services to establish and manage its landing zone.

| AWS Service                 | Role in AWS Control Tower                              |
| --------------------------- | ------------------------------------------------------ |
| **AWS Organizations**       | Multi-account management and organizational structure  |
| **AWS IAM Identity Center** | Centralized workforce access across AWS accounts       |
| **AWS Service Catalog**     | Manage and provision approved, preconfigured resources |
| **AWS CloudTrail**          | Record AWS account and API activity                    |
| **AWS Config**              | Track and assess AWS resource configurations           |

**AWS IAM Identity Center** also supports integration with external identity providers, such as Microsoft Active Directory environments.

**AWS Service Catalog** enables organizations to offer approved, preconfigured resources for users to deploy.

These integrations help AWS Control Tower automate **account provisioning, access management, security, and governance**.

## **4.6 Exam Focus**

- **Automate secure multi-account AWS setup - AWS Control Tower**
- **Well-architected multi-account starting environment - AWS Landing Zone**
- **Centrally manage AWS accounts - AWS Organizations**
- **Enforce security and compliance best practices - AWS Control Tower Controls (Guardrails)**
- **Required baseline governance controls - Mandatory Controls**
- **Optional governance controls - Elective Controls**
- **Automate standardized account provisioning - Account Factory**
- **Centralized security and audit access - Audit Account**
- **Centralized CloudTrail and AWS Config log storage - Log Archive Account**
- **Centralized workforce access management - AWS IAM Identity Center**
- **Provision approved resources - AWS Service Catalog**
- **Monitor landing zone compliance - AWS Control Tower Dashboard**

**Key Exam Distinction:**

|Exam Scenario|AWS Service / Feature|
|---|---|
|Manage multiple AWS accounts centrally|**AWS Organizations**|
|Automatically establish a governed multi-account environment|**AWS Control Tower**|
|Provision standardized AWS accounts|**Account Factory**|
|Apply governance controls across accounts|**AWS Control Tower Controls**|
|Centralize security auditing|**Audit Account**|
|Centralize AWS logs|**Log Archive Account**|

# 5 - AWS Resource Access Manager (RAM)

## **5.1 AWS Resource Access Manager (RAM)**

**AWS Resource Access Manager (AWS RAM)** is an AWS service that allows organizations to **securely share supported AWS resources across multiple AWS accounts**.

Instead of creating duplicate resources in each AWS account, organizations can share existing resources to reduce costs and simplify resource management.

### **Key Characteristics**

- **Cross-Account Resource Sharing** - Share supported AWS resources with other AWS accounts.
- **AWS Organizations Integration** - Share resources across accounts within an AWS organization.
- **OU-Level Sharing** - Share resources with accounts belonging to specific Organizational Units (OUs).
- **External Account Sharing** - Certain resources can also be shared with AWS accounts outside the organization.
- **Cost Optimization** - Reduce duplicate infrastructure and associated costs.
- **Centralized Resource Management** - Manage shared resources from a central AWS account.

**Exam clue: Share AWS resources across multiple AWS accounts - AWS Resource Access Manager (RAM)**

## **5.2 How AWS RAM Works**

AWS RAM enables resource sharing between two types of accounts.

### **Resource Owner**

The **Resource Owner** is the AWS account that creates and owns the shared resource.
- Creates and manages the resource.
- Shares the resource with other AWS accounts using AWS RAM.
- Retains ownership of the shared resource.

### **Resource Consumer**

The **Resource Consumer** is an AWS account that receives access to the shared resource.
- Uses the shared resource based on the permissions provided.
- Does not need to create a duplicate resource.
- Can access resources shared from another AWS account.

**Example: Sharing a VPC Subnet**

**Benefits:**

- EC2 instances from different AWS accounts can operate within the same shared subnet.
- Instances can communicate using **private IP addresses**, subject to network security rules.
- Accounts can use common networking infrastructure, reducing duplication.
- Shared infrastructure can reduce operational complexity and costs.

**Important:** AWS RAM shares supported resources. Sharing a subnet does not automatically make every resource associated with that subnet directly shareable through RAM.

## **5.3 Common AWS RAM Use Cases**

AWS RAM supports sharing various AWS resource types.

| Resource                           | Use Case                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| **VPC Subnets**                    | Allow multiple AWS accounts to deploy resources into shared networking infrastructure |
| **AWS Transit Gateway**            | Share centralized network connectivity across accounts                                |
| **Amazon Route 53 Resolver Rules** | Share DNS resolution configurations across accounts                                   |
| **Amazon EC2 Dedicated Hosts**     | Share dedicated physical server capacity across accounts                              |
| **AWS CloudHSM**                   | Share supported CloudHSM resources across accounts to avoid unnecessary duplication   |

### **1. Shared Networking Infrastructure**

Organizations can share VPC subnets across multiple AWS accounts.

This allows accounts to use common networking components, such as:
- **VPC Endpoints** - Access supported AWS services privately.
- **NAT Gateways** - Provide outbound connectivity for resources in private subnets.
- **Network Connectivity** - Enable communication between resources over private IP addresses.

These resources can support workloads in shared VPC networking without requiring each account to build an entirely separate network.

### **2. Shared Storage Access**

Multiple AWS accounts may need access to the same data.

For example, EC2 instances in different accounts may access a common **Amazon FSx file system** when appropriate cross-account access and networking are configured.

This reduces the need to maintain separate copies of the same data.

### **3. Shared Security Infrastructure**

**AWS CloudHSM** provides dedicated hardware security modules for managing cryptographic operations.
- Dedicated HSM resources can involve significant costs.
- Sharing supported resources across accounts can reduce duplicated infrastructure.
- Particularly useful when multiple development or testing accounts can safely use common security infrastructure.

**Exam clue: Reduce infrastructure duplication by sharing supported resources across AWS accounts - AWS RAM**

## **5.4 Exam Focus**

- **Share AWS resources across multiple accounts - AWS Resource Access Manager (RAM)**
- **Share resources within an AWS organization - AWS RAM**
- **Share resources with specific OUs - AWS RAM**
- **Share supported resources with external AWS accounts - AWS RAM**
- **Account that owns and shares a resource - Resource Owner**
- **Account that accesses a shared resource - Resource Consumer**
- **Share VPC subnets across accounts - AWS RAM**
- **Share centralized network connectivity - AWS RAM with AWS Transit Gateway**
- **Reduce duplicate infrastructure and optimize costs - AWS RAM**

**Key Exam Distinction:**

|AWS Service|Primary Purpose|
|---|---|
|**AWS Organizations**|Centrally manage and govern multiple AWS accounts|
|**AWS Control Tower**|Automate secure multi-account setup and governance|
|**AWS Resource Access Manager (RAM)**|Share supported AWS resources across accounts|

**Remember: AWS Organizations manages accounts, AWS Control Tower governs the multi-account environment, and AWS RAM shares resources between accounts.**

# 6 - Section Summary

## **6.1 AWS Account Management - Section Summary**

AWS provides several services to **centrally manage, govern, and share resources across multiple AWS accounts**.

|AWS Service / Feature|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Organizations**|Centrally manage multiple AWS accounts|Multi-account management|
|**Organizational Units (OUs)**|Logically group AWS accounts|Account grouping|
|**Service Control Policies (SCPs)**|Restrict maximum permissions across member accounts|Permission guardrails|
|**Consolidated Billing**|Combine billing across AWS accounts|Single bill, shared discounts|
|**AWS Control Tower**|Automate the setup of a well-architected landing zone|Multi-account setup and governance|
|**AWS Resource Access Manager (RAM)**|Share supported AWS resources across accounts|Cross-account resource sharing|

### **Key Reminders**

**Service Control Policies (SCPs)**
- Can be applied at the **organization root, OU, or individual account** level.
- Restrict access to AWS services, resources, or Regions.
- **Cannot grant additional permissions** - only limit maximum available permissions.
- Do not restrict permissions in the management account.

**AWS Control Tower**
- Automates the creation of a **well-architected AWS Landing Zone**.
- Uses AWS best practices for security, compliance, and multi-account governance.

**AWS Resource Access Manager (RAM)**
- Shares supported AWS resources across multiple accounts.
- Supports sharing within an AWS organization and, for eligible resources, with accounts outside the organization.

## **6.2 Exam Focus**

- **Manage multiple AWS accounts - AWS Organizations**
- **Group AWS accounts logically - Organizational Units (OUs)**
- **Restrict maximum permissions - SCPs**
- **SCPs cannot grant additional IAM permissions**
- **Single bill for multiple accounts - Consolidated Billing**
- **Automate a well-architected landing zone - AWS Control Tower**
- **Share AWS resources between accounts - AWS RAM**

**Key Exam Distinction:**

- **AWS Organizations** - Manage accounts.
- **SCPs** - Restrict permissions.
- **Consolidated Billing** - Combine billing.
- **AWS Control Tower** - Automate setup and governance.
- **AWS RAM** - Share resources.