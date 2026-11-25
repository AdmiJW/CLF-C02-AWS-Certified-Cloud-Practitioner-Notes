# 1 - Introduction to Infrastructure Management

## **1.1 Infrastructure Management Overview**

**Infrastructure management** involves continuously monitoring and maintaining AWS resources after they have been provisioned.

The goal is to ensure that resources remain in their **expected operational and security states**.

Key responsibilities include:
- **Security patching** - Keeping EC2 instances updated with security patches.
- **Monitoring** - Monitoring file systems and user access to EC2 instances.
- **Remote administration** - Executing commands, debugging, and performing administrative tasks.
- **Configuration compliance** - Ensuring AWS resources follow defined security policies.
- **Change tracking** - Detecting configuration changes that could introduce security risks.

AWS provides services to simplify infrastructure management at scale.

## **1.2 AWS Systems Manager**

**AWS Systems Manager** is a centralized management service used to manage and operate AWS resources, including **Amazon EC2 instances**, at scale.

### **Why AWS Systems Manager?**

Managing a small number of EC2 instances manually using **SSH (Secure Shell)** may be practical.

However, managing hundreds of instances individually becomes inefficient.

**AWS Systems Manager** provides centralized capabilities to:
- Manage multiple EC2 instances.
- Apply security patches to instances.
- Execute commands remotely across instances.
- Perform administrative and troubleshooting tasks.
- Support ongoing instance management.

**Key concept:** AWS Systems Manager simplifies large-scale infrastructure administration without requiring administrators to manage every instance individually.

## **1.3 AWS Config**

**AWS Config** is a service used to **track AWS resource configurations, record configuration changes, and evaluate compliance with defined rules**.

It helps ensure that AWS resources remain in their expected configuration states.

### **Common Use Cases**

- **Security Groups** - Verify that only approved ports and IP address ranges are allowed.
- **Amazon S3 Buckets** - Check that buckets are not publicly accessible unless explicitly required.
- **Configuration Changes** - Detect changes to resource configurations.
- **Compliance Monitoring** - Evaluate whether resource configurations comply with security policies.

### **Configuration Change Detection**

For example:
1. A security group initially allows only approved network access.
2. Someone modifies the security group to open an unauthorized port.
3. **AWS Config** tracks the configuration change.
4. Compliance rules can identify the resource as **noncompliant**.
5. Automated remediation can be configured to correct the issue.

**Key concept:** AWS Config focuses on **resource configuration tracking and compliance**, rather than operating or administering EC2 instances.

### **AWS Systems Manager vs AWS Config**

| Service                 | Primary Purpose                                                              | Exam Clue                                                       |
| ----------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **AWS Systems Manager** | Centralized operational management of AWS resources, including EC2 instances | Manage, patch, or remotely administer multiple EC2 instances    |
| **AWS Config**          | Track resource configurations and evaluate compliance                        | Detect configuration changes or identify noncompliant resources |

## **1.4 Exam Focus**

- **Infrastructure management** - Maintaining resources after provisioning.
- **Centralized EC2 management - AWS Systems Manager**
- **Security patching and remote command execution - AWS Systems Manager**
- **Resource configuration tracking - AWS Config**
- **Configuration compliance monitoring - AWS Config**
- **Detect unauthorized security group changes - AWS Config**
- **Identify publicly accessible S3 buckets - AWS Config**

**Remember the distinction:**

- **AWS Systems Manager** - Manage and operate infrastructure.
- **AWS Config** - Track configurations and evaluate compliance.

# 2 - AWS Systems Manager

## **2.1 AWS Systems Manager Overview**

**AWS Systems Manager** is a centralized management service that helps automate **common and repetitive IT operations and administrative tasks** across AWS and on-premises environments.

It allows administrators to manage multiple servers from a single location instead of connecting to each server individually.

### **Supported Environments**

AWS Systems Manager can manage:
- **Amazon EC2 instances**
- **On-premises servers**

It supports operating systems and environments including **Linux, Windows, macOS, and Raspberry Pi**.

### **How AWS Systems Manager Works**

1. Install and configure the **AWS Systems Manager Agent (SSM Agent)** on the managed server.
2. Configure the required permissions and connectivity.
3. AWS Systems Manager communicates with the agent to perform management tasks remotely.
4. Administrators centrally manage hundreds or thousands of servers.

**Key benefit:** Centralized infrastructure management and automation at scale.

## **2.2 Key AWS Systems Manager Features**

| Feature             | Primary Purpose                              | Common Use Cases                                                   |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| **Run Command**     | Remotely execute commands and scripts        | Run shell scripts, PowerShell scripts, and administrative commands |
| **Fleet Manager**   | Centrally view and manage server information | Inspect file systems, processes, users, and operational details    |
| **Patch Manager**   | Automate operating system patching           | Apply security patches and operating system updates                |
| **Session Manager** | Securely connect to managed instances        | Access EC2 instances without opening SSH ports                     |

### **Run Command**

**Run Command** allows administrators to remotely execute commands and scripts across multiple managed servers.

Common operations include:
- Executing **shell scripts** on Linux instances.
- Running **PowerShell scripts** on Windows instances.
- Installing operating system updates.
- Executing administrative tasks across multiple instances.
- Running configuration management tasks using tools such as Ansible or Chef.

**Exam clue: Execute commands remotely across hundreds of EC2 instances - Systems Manager Run Command**

### **Fleet Manager**

**Fleet Manager** provides centralized visibility into managed servers.

It allows administrators to inspect operational information, such as:
- File system usage.
- Running processes.
- Users accessing the server.
- CPU, memory, and disk-related monitoring information.

It also supports administrative actions such as managing processes.

**Exam clue: Centrally inspect and manage multiple EC2 instances - Systems Manager Fleet Manager**

### **Patch Manager**

**Patch Manager** helps automate the process of applying operating system and security patches to managed servers.

Key capabilities:
- Manage patching across multiple EC2 instances.
- Select and apply patches to managed servers.
- Centrally coordinate patch deployment.

**Exam clue: Automate security patching across EC2 instances - Systems Manager Patch Manager**

## **2.3 AWS Systems Manager Session Manager**

**Session Manager** provides secure, interactive access to EC2 instances and other managed servers through AWS Systems Manager.

It allows administrators to connect to instances **without requiring traditional SSH access**.

### **Key Features**

- Connect to managed instances through AWS Systems Manager.
- **No bastion host required.**
- **No SSH keys required.**
- **No inbound SSH port needs to be opened.**
- Access is controlled through **AWS Identity and Access Management (IAM) permissions**.
- Supports Linux, Windows, and macOS environments.

### **Session Manager vs Traditional SSH**

| Feature                   | Traditional SSH                          | Session Manager     |
| ------------------------- | ---------------------------------------- | ------------------- |
| **Access Method**         | SSH client or terminal                   | AWS Systems Manager |
| **SSH Keys**              | Typically required                       | Not required        |
| **Inbound SSH Port (22)** | Typically required                       | Not required        |
| **Bastion Host**          | May be required for private instances    | Not required        |
| **Access Control**        | SSH credentials and server configuration | IAM permissions     |
| **SSM Agent**             | Not required                             | Required            |

### **Security Benefits**

Session Manager improves security by eliminating the need to expose inbound SSH access.

For example:
1. An EC2 instance has **port 22 (SSH) closed** in its security group.
2. The instance has a properly configured **SSM Agent**.
3. An administrator has the required **IAM permissions**.
4. The administrator connects securely using **Session Manager** without opening port 22.

**Key distinction:** Session Manager provides secure remote access, while Run Command executes commands remotely without requiring an interactive login session.

### Parameter Store

**Systems Manager Parameter Store** stores settings such as endpoint names or configuration values. A **SecureString** uses AWS KMS encryption for sensitive values. If a workload needs managed rotation of credentials such as a database password, see [Secrets Manager rotation](./19%20-%20AWS%20Security.md). [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

## **2.4 Exam Focus**

- **Centralized server management - AWS Systems Manager**
- **Manage EC2 and on-premises servers - AWS Systems Manager**
- **Execute remote commands and scripts - Run Command**
- **View and manage server operational details - Fleet Manager**
- **Automate operating system security patches - Patch Manager**
- **Secure interactive access without SSH keys or open inbound SSH ports - Session Manager**
- **Control Session Manager access - IAM permissions**
- **Enable Systems Manager communication with managed servers - SSM Agent**

**Remember the distinction:**

- **Run Command** - Execute commands remotely.
- **Fleet Manager** - Inspect and manage servers centrally.
- **Patch Manager** - Apply operating system and security patches.
- **Session Manager** - Securely access instances without traditional SSH connections.

# 3 - \[Exercise] Connect and Run Commands On EC2 Using Systems Manager

## **3.1 Connecting EC2 to AWS Systems Manager**

**AWS Systems Manager** allows administrators to centrally manage EC2 instances using the **SSM Agent** and appropriate **IAM permissions**.

For an EC2 instance to be managed by Systems Manager, the following are required:
1. **IAM Role** - Attach an IAM role with the necessary Systems Manager permissions to the EC2 instance.
2. **SSM Agent** - Ensure the Systems Manager Agent is installed and running.
3. **Connectivity** - Ensure the instance can communicate with the Systems Manager service.

In this exercise, an **Amazon Linux EC2 instance** is used because the selected AMI includes the **SSM Agent pre-installed**.

### **Security Configuration**

When using **Session Manager**, the EC2 instance does not require:
- An inbound SSH rule on **port 22**.
- SSH keys for Session Manager access.
- A bastion host.

**Key concept:** The EC2 instance uses its **IAM role** and **SSM Agent** to communicate with Systems Manager, while administrator access is controlled through IAM permissions.

## **3.2 Session Manager - Secure EC2 Access**

**AWS Systems Manager Session Manager** allows administrators to establish an interactive terminal session with an EC2 instance without traditional SSH access.

### **How It Works**

1. The EC2 instance runs the **SSM Agent**.
2. The instance has an IAM role with the required Systems Manager permissions.
3. Systems Manager recognizes the instance as a managed node.
4. An authorized administrator starts a **Session Manager** session.
5. A terminal session is established to execute commands on the instance.

Session Manager can be accessed through either the **AWS Systems Manager console** or the **EC2 console**.

**Exam clue: Connect securely to an EC2 instance without opening inbound port 22 - Systems Manager Session Manager**

## **3.3 Fleet Manager - Centralized Instance Management**

**Fleet Manager** provides a centralized interface for inspecting and administering managed EC2 instances.

Key capabilities demonstrated:
- **File Systems** - Inspect directories, files, and permissions.
- **Processes** - View running processes.
- **Users and Groups** - View and manage operating system users and groups.
- **Remote Access** - Connect to instances using Session Manager.

Fleet Manager retrieves management information from instances through the **SSM Agent**.

**Exam clue: Centrally inspect file systems, processes, and users across managed instances - Systems Manager Fleet Manager**

## **3.4 Run Command - Remote Command Execution**

**AWS Systems Manager Run Command** allows administrators to remotely execute commands or scripts on managed instances without establishing an interactive session.

### **SSM Documents**

Run Command uses **AWS Systems Manager documents (SSM documents)** to define the commands or operations to execute.

AWS provides predefined documents, and administrators can also create custom documents.

Examples include:
- **AWS-RunShellScript** - Execute shell commands on Linux instances.
- Run PowerShell scripts on Windows instances.
- Execute administrative scripts and configuration management tasks.

### **Example: Retrieve EC2 Private IP Address**

The exercise uses the **AWS-RunShellScript** document to execute:

```bash
hostname -I
```

This command displays the IP addresses assigned to the EC2 instance, including its private IP address.

The command can target instances using **EC2 tags**, such as a `Name` tag identifying the desired instance.

### **Command Execution Results**

Run Command provides:
- **Execution Status** - Whether the command succeeded or failed.
- **Command Output** - Results returned by the executed command.
- **Output Storage** - Optionally store command results in **Amazon S3** or **Amazon CloudWatch Logs**.

### **Managing Instances at Scale**

Although the exercise uses a single EC2 instance, Run Command can execute commands across **hundreds or thousands of managed instances**.

This eliminates the need to manually log in to every instance.

**Exam clue: Remotely execute the same script across hundreds of EC2 instances - Systems Manager Run Command**

## **3.5 Session Manager vs Run Command vs Fleet Manager**

| Feature             | Primary Purpose                                              | Exam Scenario                                                    |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Session Manager** | Establish secure interactive sessions with managed instances | Connect to EC2 without SSH keys or opening port 22               |
| **Run Command**     | Execute commands remotely across managed instances           | Run shell scripts or administrative commands on multiple servers |
| **Fleet Manager**   | Inspect and administer managed instances centrally           | View file systems, running processes, and operating system users |

## **3.6 Exam Focus**

- **Enable centralized EC2 management - AWS Systems Manager**
- **Allow EC2 to communicate with Systems Manager - IAM role and SSM Agent**
- **Secure interactive access without inbound SSH - Session Manager**
- **Inspect files, processes, and users - Fleet Manager**
- **Execute commands remotely at scale - Run Command**
- **Define remote command operations - SSM Documents**
- **Target instances for remote execution - EC2 tags**
- **Store command execution output - Amazon S3 or CloudWatch Logs**

**Remember the distinction:**

- **Session Manager** - Connect to an instance interactively.
- **Run Command** - Execute commands remotely without an interactive session.
- **Fleet Manager** - Centrally inspect and administer managed instances.

# 4 - AWS Config

## **4.1 AWS Config Overview**

**AWS Config** is a service that continuously **records, tracks, and evaluates AWS resource configurations** to help monitor configuration changes and ensure compliance with defined policies.

Key capabilities:

- **Configuration Tracking** - Records AWS resource configurations and their changes over time.
- **Compliance Monitoring** - Evaluates resource configurations against predefined or custom rules.
- **Change Detection** - Identifies configuration changes that may violate security policies.
- **Automated Remediation** - Supports corrective actions when resources become noncompliant.
- **Advanced Queries** - Runs SQL-like queries against collected resource configuration data.

### **Regional Service**

**AWS Config is a regional service**, but it can be enabled across multiple AWS Regions.

Using **AWS Config Aggregators**, configuration and compliance data can be consolidated across:
- Multiple AWS Regions.
- Multiple AWS accounts.

**Key concept:** AWS Config provides centralized visibility into resource configurations and compliance across accounts and Regions.

## **4.2 AWS Config Rules and Compliance**

**AWS Config Rules** evaluate AWS resource configurations against defined compliance requirements.

Rules can be:
- **AWS Managed Rules** - Predefined rules provided by AWS.
- **Custom Rules** - Rules created to evaluate specific compliance requirements.

### **Common Compliance Scenarios**

| Resource            | Compliance Check                                                            |
| ------------------- | --------------------------------------------------------------------------- |
| **Security Groups** | Detect security groups exposing ports 22 (SSH) or 80 (HTTP) to the public   |
| **Amazon S3**       | Identify buckets with public access enabled                                 |
| **Amazon DynamoDB** | Identify tables with provisioned write capacity above a specified threshold |
| **Amazon RDS**      | Identify databases that do not have Multi-AZ enabled                        |

### **Compliance Evaluation**

AWS Config evaluates recorded resource configurations against configured rules.

Resources can be classified as:
- **Compliant** - Resource configuration satisfies the rule.
- **Noncompliant** - Resource configuration violates the rule.

When noncompliance is detected, AWS Config can support:
1. **Notifications** - Alert administrators about noncompliant resources.
2. **Remediation Actions** - Initiate automated corrective actions to restore compliance.

**Important:** AWS Config detects noncompliance, but remediation must be configured separately.

**Exam clue: Detect security groups that allow unrestricted SSH access - AWS Config Rules**

## **4.3 AWS Config Aggregators and Advanced Queries**

### **AWS Config Aggregators**

**AWS Config Aggregators** consolidate resource configuration and compliance information across multiple AWS accounts and Regions.

This enables centralized monitoring without individually reviewing every account or Region.

**Exam clue: View configuration compliance across multiple AWS accounts and Regions - AWS Config Aggregator**

### **Advanced Queries**

**AWS Config Advanced Queries** allow administrators to execute **SQL-like queries** against recorded resource configuration data.

Examples:
- Find security groups exposing port 22 to the internet.
- Identify publicly accessible S3 buckets.
- List DynamoDB tables with provisioned capacity exceeding a threshold.
- Find RDS databases without Multi-AZ enabled.
- List active DynamoDB tables.
- Identify Availability Zones associated with load balancers.

AWS provides predefined queries, and administrators can create custom queries.

### **AWS Config Rules vs Advanced Queries**

|Feature|Primary Purpose|Exam Clue|
|---|---|---|
|**Config Rules**|Evaluate resources against compliance requirements|Detect and flag noncompliant configurations|
|**Advanced Queries**|Retrieve resource configuration information using SQL-like queries|Search or report on resource configurations|
|**Config Aggregators**|Consolidate configuration and compliance data|Centralized visibility across accounts and Regions|

## **4.4 Configuration Recording and Storage**

### **Configuration Recorder**

AWS Config requires configuration recording to be enabled before it can track resource configuration changes.
- AWS Config configuration recording is **not enabled by default**.
- Administrators must enable the **Configuration Recorder**.
- Once enabled, AWS Config begins recording configurations for the selected supported resources.

### **Integration with Amazon S3 and Athena**

AWS Config configuration data can be delivered to **Amazon S3**.

This data can then be queried using **Amazon Athena** for additional analysis.

### **Pricing Consideration**

**AWS Config is a paid service.**

Charges may apply for:
- Recording resource configurations.
- Evaluating resources against Config rules.

**Key concept:** AWS Config must be enabled and configured to begin recording resource configurations and evaluating compliance.

## **4.5 Exam Focus**

- **Track AWS resource configuration changes - AWS Config**
- **Evaluate resource compliance - AWS Config Rules**
- **Use predefined compliance checks - AWS Managed Rules**
- **Detect publicly accessible S3 buckets - AWS Config**
- **Detect unrestricted security group ports - AWS Config**
- **Identify noncompliant resources - AWS Config Rules**
- **Automate corrective actions - AWS Config Remediation**
- **Aggregate configuration data across accounts and Regions - AWS Config Aggregator**
- **Run SQL-like queries on resource configurations - AWS Config Advanced Queries**
- **Store configuration data for analysis - Amazon S3 and Amazon Athena**
- **Begin tracking configurations - Enable AWS Config Configuration Recorder**

**Remember the distinction:**

- **AWS Config** - Tracks resource configurations and configuration changes.
- **AWS Config Rules** - Evaluates configuration compliance.
- **AWS Config Aggregator** - Consolidates data across accounts and Regions.
- **AWS Config Advanced Queries** - Searches recorded resource configuration data

## 4.6 Approved deployments and license tracking

| Requirement | Service |
| --- | --- |
| Let teams deploy approved products with preconfigured constraints | **AWS Service Catalog**. An administrator can give developers a portfolio containing an approved stack. |
| Track and enforce eligible software license rules | **AWS License Manager**. Use it to monitor license consumption under a BYOL arrangement. |

See [Control Tower](./23%20-%20AWS%20Account%20Management.md) for account governance and [cloud economics](./03%20-%20Cloud%20Concepts.md) for BYOL. [Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/) · [License Manager](https://docs.aws.amazon.com/license-manager/latest/userguide/)

# 5 - Section Summary

## **5.1 Infrastructure Management & Compliance Summary**

Two key AWS services covered in this section:

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS Systems Manager**|Centrally manage and automate administrative tasks across EC2 instances and on-premises servers|Manage servers, execute remote commands, apply patches, and establish secure sessions|
|**AWS Config**|Track AWS resource configurations and evaluate compliance with defined rules|Detect configuration changes, identify noncompliant resources, and query configuration data|

Use **Config** for configuration history and rules. To identify who made a change or to alarm on a metric, see [CloudTrail and CloudWatch](./17%20-%20AWS%20Monitoring%20and%20Logging.md).

## **5.2 Exam Focus**

- **Centralized server management - AWS Systems Manager**
- **Remote command execution - Systems Manager Run Command**
- **Secure EC2 access without SSH - Systems Manager Session Manager**
- **Automated security patching - Systems Manager Patch Manager**
- **Track resource configurations and changes - AWS Config**
- **Evaluate configuration compliance - AWS Config Rules**
- **Query resource configuration data - AWS Config Advanced Queries**
- **Centralize configuration data across accounts and Regions - AWS Config Aggregator**

**Remember the key distinction:**

- **AWS Systems Manager** - Manages and operates servers.
- **AWS Config** - Tracks resource configurations and evaluates compliance.

# 6 - Quiz

## **6.1 Practice Question**

### **Original Question**

Your application requires secure storage for configuration data and secrets like database credentials. Which feature of AWS Systems Manager should you use?

### **Choices**

A. Automation  
B. Resource groups  
C. Patch Manager  
D. Parameter Store

### **Correct Answer**

**D. Parameter Store**

### **Why?**

**AWS Systems Manager Parameter Store** provides centralized, secure storage for configuration data and sensitive information such as database credentials.
- **Parameter Store** - Stores configuration values and secrets securely.
- **Automation** - Automates operational and maintenance workflows.
- **Resource Groups** - Organizes AWS resources for management.
- **Patch Manager** - Automates operating system patching.

**Key distinction:** Parameter Store stores application configuration and secrets, while the other features focus on resource organization or operational management.

## **6.2 Practice Question**

### **Original Question**

How can you identify changes in your AWS resource configurations and compare them to a previous state?

### **Choices**

A. Use AWS Config  
B. Use AWS Systems Manager Parameter Store  
C. Use AWS CloudTrail  
D. Use AWS Trusted Advisor

### **Correct Answer**

**A. AWS Config**

### **Why?**

**AWS Config** records AWS resource configurations and tracks changes over time.

It allows administrators to:
- Review historical resource configurations.
- Identify configuration changes.
- Compare current configurations with previous states.
- Evaluate resource compliance against defined rules.

**AWS Config vs AWS CloudTrail:**
- **AWS Config** - Tracks resource configuration states and changes.
- **AWS CloudTrail** - Records AWS API activity, including who performed actions.

**Key distinction:** Use AWS Config to determine **what changed in a resource's configuration**, and CloudTrail to investigate **who performed an API action**.

## **6.3 Practice Question**

### **Original Question**

Your team wants to schedule automatic patching for EC2 instances without manual intervention. Which Systems Manager feature should you use?

### **Choices**

A. Session Manager  
B. Parameter Store  
C. Patch Manager  
D. Maintenance Window

### **Correct Answer**

**C. Patch Manager**

### **Why?**

**AWS Systems Manager Patch Manager** automates the process of applying operating system and security patches to managed EC2 instances.

- **Patch Manager** - Automates patching operations.
- **Maintenance Window** - Defines scheduled periods for running operational tasks, including patching.
- **Session Manager** - Provides secure interactive access to instances.
- **Parameter Store** - Stores configuration data and secrets.

**Key distinction:**

- **Patch Manager** - Determines and performs patching operations.
- **Maintenance Window** - Controls when scheduled management tasks run.

**Exam clue: Automated operating system security patching - Systems Manager Patch Manager**

## **6.4 Practice Question**

### **Original Question**

You need to track the compliance of your resources against company-defined policies and receive alerts when a resource configuration drifts. Which AWS service should you use?

### **Choices**

A. AWS Config  
B. AWS Systems Manager  
C. AWS Trusted Advisor  
D. AWS CloudTrail

### **Correct Answer**

**A. AWS Config** 

### **Why?**

**AWS Config** tracks resource configurations and evaluates them against **compliance rules**.

It helps organizations:
- Detect configuration changes.
- Evaluate configurations against company-defined policies.
- Identify **noncompliant resources**.
- Trigger notifications or remediation when configured rules are violated.

### **Important Service Distinctions**

| Service                 | Primary Purpose                                               |
| ----------------------- | ------------------------------------------------------------- |
| **AWS Config**          | Tracks resource configurations and evaluates compliance       |
| **AWS Systems Manager** | Automates infrastructure administration and operational tasks |
| **AWS Trusted Advisor** | Provides recommendations based on AWS best practices          |
| **AWS CloudTrail**      | Records AWS API activity for auditing                         |

**Exam clue: Detect configuration drift and compliance violations - AWS Config**

## **6.5 Practice Question**

### **Original Question**

Your organization needs a centralized service to automate operational tasks like applying patches, managing system configurations, and running commands on EC2 instances. Which AWS service should you use?

### **Choices**

A. AWS Config  
B. AWS Systems Manager  
C. AWS CloudFormation  
D. AWS OpsWorks

### **Correct Answer**

**B. AWS Systems Manager** 

### **Why?**

**AWS Systems Manager** provides centralized capabilities for managing and automating operational tasks across EC2 instances and on-premises servers.

Its features include:

- **Run Command** - Execute commands and scripts remotely.
- **Patch Manager** - Automate operating system patching.
- **Session Manager** - Securely access managed instances.
- **Fleet Manager** - Centrally inspect and administer instances.

### **Important Service Distinctions**

|Service|Primary Purpose|
|---|---|
|**AWS Systems Manager**|Centralized infrastructure operations and management|
|**AWS Config**|Resource configuration tracking and compliance|
|**AWS CloudFormation**|Provision and manage infrastructure using templates|
|**AWS OpsWorks**|Configuration management using tools such as Chef and Puppet|

**Key distinction:**

- **AWS CloudFormation** - Provisions infrastructure as code.
- **AWS Systems Manager** - Manages and operates infrastructure.
- **AWS Config** - Tracks resource configurations and evaluates compliance.

## **6.6 Exam Focus**

- **Secure configuration and secret storage - Systems Manager Parameter Store**
- **Track historical resource configuration changes - AWS Config**
- **Compare current and previous resource configurations - AWS Config**
- **Audit AWS API activity - AWS CloudTrail**
- **Automate EC2 operating system patching - Systems Manager Patch Manager**
- **Schedule operational tasks - Systems Manager Maintenance Windows**
- **Detect resource configuration drift - AWS Config**
- **Evaluate compliance against company policies - AWS Config Rules**
- **Automate infrastructure management tasks - AWS Systems Manager**
- **Provision infrastructure using templates - AWS CloudFormation**

**Remember the key distinctions:**

- **Parameter Store** - Store configuration data and secrets.
- **Patch Manager** - Automate security patching.
- **Systems Manager** - Centrally manage infrastructure operations.
- **AWS Config** - Track configurations and evaluate compliance.
- **AWS CloudTrail** - Audit API activity.
- **AWS CloudFormation** - Provision infrastructure using templates.