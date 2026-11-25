# 1 - Pre-requisites for the Course

## 1.1 - AWS Account Prerequisite

An **AWS account** is required to complete the course exercises.
- A new AWS account is recommended in the course because some AWS services may be available through the **AWS Free Tier**
- An existing AWS account can also be used
- Verify that the AWS account is **fully active** before beginning the exercises.

## 1.2 - Cost Budget

Set up an **AWS Budget** to help monitor AWS spending
- A budget can notify you when costs exceed a configured amount.
- Example from the course: receive an email notification if monthly costs exceed **$5 USD**
- This helps reduce the risk of unexpected charges while performing exercises.

**Exam association: Cost threshold notifications - AWS Budgets**

## 1.3 - IAM User

Use a non-root identity for the exercises. The standalone lab in section 4 demonstrates an IAM user. If you already have federated workforce access, use the access portal and temporary credentials described in [IAM](./05%20-%20Foundation%20-%20AWS%20IAM.md).

## 1.4 - EC2 SSH Key Pair

The exercises involve launching **Amazon Elastic Compute Cloud (Amazon EC2)** instances.

An **SSH key pair** is required when the exercises involve connecting to supported EC2 instances using SSH.

- Create the key pair in the **AWS Region** where the EC2 instance will be launched.
- The key pair is used for authentication when connecting to the instance.

**Exam association: Secure SSH access to an EC2 instance - EC2 key pair**

## 1.5 - Optional Public Domain Name

A **public domain name** is an optional prerequisite
- It can be used to test exercises involving resources such as a web server with a real domain name.
- Purchasing a domain name requires additional cost
- It is **not required** to complete the course exercises

## 1.6 - Exam Focus

- **Monitor spending and receive cost notifications - AWS Budgets**
- **Manage users and permissions - AWS IAM**
- **Avoid routine use of the AWS account root user**
- **Launch virtual servers - Amazon EC2**
- **Authenticate SSH connections to EC2 instances - SSH key pair**
- **AWS account - required to use AWS services and complete the exercises**

# 2 - Create New AWS Account (Get Free Tier Benefits - $100 + $100)

## 2.1 - AWS Account Signup Options

The course describes two AWS account signup approaches:
- **Sign up for AWS (new)** - creates a more constrained, project-specific account with limitations around AWS Regions, IAM permissions, and some AWS services.
- **Sign up for AWS advanced** - the traditional AWS account creation method that provides broader control over the AWS account.

For the course exercises, use the **AWS advanced signup flow** because the exercises require a traditional AWS account with broader access.

## 2.2 - Information Required to Create an AWS Account

AWS account creation requires information such as:
- Email address
- Mobile number
- Billing address
- Valid debit or credit card
- Identity verification information when requested

AWS may make a **small temporary payment authorization** to validate the payment method. According to the course, this amount is refunded.

The credentials created during signup are associated with the **AWS account root user**.

## 2.3 - AWS Free Plan and Credits

For eligible new customers, either account plan starts with **USD $100** in credits. Completing eligible activities can earn up to **USD $100** more.

### Free Plan vs Paid Plan

| Account plan | What it means for exercises |
| --- | --- |
| **Free Plan** | Access to a subset of AWS services. The plan ends after six months or when credits are used up, whichever comes first. AWS closes the account at the end of the Free Plan unless you upgrade. |
| **Paid Plan** | Standard charges apply when credits or free usage do not cover the resources used. Check the price and eligibility of each lab resource before creating it. |

Accounts created before **July 15, 2025** follow the legacy Free Tier offer rules. Check the Billing and Cost Management console for the offers and credits that apply to your account. The six-month Free Plan period and credit expiration are separate.

**Course account:** Joining AWS Organizations or setting up an AWS Control Tower landing zone automatically upgrades a Free Plan account to Paid. Follow the standalone lab in section 4 if you want to keep your Free Plan. The IAM Identity Center organization instance used for AWS account access requires Organizations.

[AWS Free Tier account plans](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html) · [Free Tier program change](https://aws.amazon.com/blogs/aws/aws-free-tier-update-new-customers-can-get-started-and-explore-aws-with-up-to-200-in-credits/) · [Identity Center instances](https://docs.aws.amazon.com/singlesignon/latest/userguide/identity-center-instances.html)

## 2.4 - AWS Support Plan During Signup

**Basic Support** is included and is sufficient for the exercises. See [AWS Support Plans](./26%20-%20AWS%20Support.md) for the current options.

## 2.5 - Verify Account Activation

After signup, verify that the AWS account is **fully activated** before beginning the exercises.

The course verifies activation by opening the **Amazon EC2 console.**

- If EC2 is accessible normally, the account is considered activated
- If AWS cannot verify payment or account information, activation may remain incomplete
- Account activation can sometimes take additional time

## 2.6 - AWS Service Quotas

If an EC2 launch is blocked by a quota, check the Service Quotas console in the selected Region. The course demonstrates an On-Demand EC2 quota measured in vCPUs. See [Service Quotas](./26%20-%20AWS%20Support.md) for adjustable and fixed quotas.

## 2.7 - Exam Focus

- **Traditional AWS account for course exercises - AWS advanced signup**
- **AWS account root user - identity created with the AWS account**
- **AWS Free Plan - provides limited free usage/credits for eligible new accounts**
- **Not every AWS service is covered by free usage**
- **Free AWS support option - Basic Support**
- **Resource usage limits - AWS Service Quotas**
- **Increasing a service quota does not itself create usage charges**
- **Actual AWS charges depend on resources and services consumed**

# 3 - Setup Cost Budget for the Account Spend

## 3.1 - Why Set Up an AWS Cost Budget?

When performing AWS exercises, it is possible to leave resources running accidentally.

For example, an **Amazon EC2 instance** can continue generating hourly charges while it remains running. Over time, these charges can accumulate and may consume available AWS credits.

**AWS Budgets** helps monitor spending and sends notifications when costs reach configured thresholds.

**Exam association: Cost threshold notifications - AWS Budgets**

## 3.2 - Course Cost and AWS Credits

Course cost depends on your account plan, Region, services, and cleanup. Check the estimate in [AWS Pricing Calculator](./24%20-%20AWS%20Billing%20and%20Cost%20Management.md) and review your credit balance as you work. Stop or delete each lab resource when you finish and check for dependent resources such as volumes and snapshots.

## 3.3 - Monthly Cost Budget

For the course, configure a **monthly cost budget** of **$5 USD**

The budget sends an email notification when AWS account costs exceed the configured amount.

A budget includes:
- Budget name
- Monthly budget amount
- Email address for notifications

The exact threshold can vary, but the course uses **$5** so unexpected charges can be detected early.

## 3.4 - Responding to a Budget Alert

If a budget notification indicates unexpected spending:
1. Review the AWS account to identify the resource generating charges.
2. Determine whether the resource is still required
3. Delete or stop unnecessary resources to prevent further costs.

A common course scenario is forgetting to delete a resource that is **not covered by available free usage or credits**

**Important distinction: AWS Budgets provides cost monitoring and notifications; it does not automatically mean that resources stop running when the budget threshold is reached.**

## 3.5 - Root User Usage

Use an identity with billing permissions to create and manage the budget. Billing console access for IAM identities may require a one-time root account setting. Protect the root user with MFA and reserve it for tasks that require it. See [root user protection](./05%20-%20Foundation%20-%20AWS%20IAM.md).

[Activating IAM access to the billing console](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html)

## 3.6 - Exam Focus

- **Monitor AWS spending against a threshold - AWS Budgets**
- **Receive cost notifications - AWS Budgets alerts**
- **Unexpected charges can occur when resources are left running**
- **EC2 instances can continue generating charges while running**
- **Delete or stop unnecessary resources to control costs**
- **Root user - use only when necessary**
- **Routine AWS access - IAM user**
- **Budget alerts help identify overspending; they do not inherently stop resource usage**

# 4 - Create an IAM User for Performing Exercises

## 4.1 - AWS Account Root User

Set up root-user MFA before performing the exercises. Use the following IAM user walkthrough for a standalone lab account. See [root access and workforce federation](./05%20-%20Foundation%20-%20AWS%20IAM.md) for the full comparison.

## 4.2 - Create an IAM User

**AWS Identity and Access Management (IAM)** allows you to create users that can access AWS with their own credentials and permissions.

For the course, an IAM user named `admin` is created for performing exercises.

The IAM user is configured with:
- **AWS Management Console access**
- Its own password
- Permissions through an IAM policy

This allows regular AWS activities to be performed without repeatedly using the root user.

**Exam association: Create and manage AWS users and permissions - AWS IAM**

## 4.3 - IAM User Permissions

Permissions for an IAM user are assigned using **IAM policies**

For the course, the IAM user receives the **AdministratorAccess** policy because the exercises require broad access across AWS services.

According to the course:
- An IAM user with **AdministratorAccess** can perform most administrative activities in the AWS account.
- The **root user** still has additional account-level capabilities that are not available to the IAM administrator user.

### Root User vs Administrator IAM User

| **Identity**                          | **Access**                        | **Typical Course Usage**  |
| ------------------------------------- | --------------------------------- | ------------------------- |
| **Root user**                         | Unrestricted account-level access | Use only when required    |
| **IAM user with AdministratorAccess** | Broad administrative permissions  | Used for course exercises |

**Exam distinction: Root user and an administrator IAM user are not the same identity.**

**Lab permissions:** The lecture uses broad administrator permissions for the walkthrough. Use them only in a dedicated lab environment. For individual exercises, grant only the permissions they require and remove the lab user or its permissions when you finish.

## 4.4 - Multi-Factor Authentication (MFA)

Enable MFA on the root user and the lab IAM user. The MFA exercise in [AWS IAM](./05%20-%20Foundation%20-%20AWS%20IAM.md) explains device options and enrollment.

## 4.5 - IAM User Sign-In

An IAM user signs in differently from the root user.

IAM user sign-in requires:
- The **AWS account ID** or account-specific sign-in URL
- IAM username
- IAM user password

AWS provides a **direct sign-in link** for IAM users that includes the AWS account information needed for authentication.

After signing in, the console identifies the session as the **IAM user** rather than the root user.

## 4.6 - Password Handling

When creating an IAM user with console access, a password is configured.

The course distinguishes two situations:
- Creating an IAM user **for yourself** - the course keeps the configured password
- Creating an IAM user **for another person** - the course recommends requiring that user to change their password on first login

## 4.7 - Exam Focus

- **Identity with unrestricted AWS account access - Root user**
- **Avoid root user for routine activities**
- **Create users and manage permissions - AWS IAM**
- **Assign permissions to IAM users - IAM policies**
- **Broad administrative IAM permissions - AdministratorAccess**
- **Root user and administrator IAM user are different identities**
- **Additional authentication protection - MFA**
- **IAM console login - account ID/sign-in URL + username + password**

# 5 - Create EC2 SSH Key Pair

## 5.1 - EC2 Key Pairs

Create the key pair required by the Linux or Windows lab in its target Region. Keep the private key in a secure location. See [EC2 SSH Key Pair](./06%20-%20Foundation%20-%20Amazon%20EC2.md) for how SSH and Windows password retrieval use key pairs.

## 5.2 - `.pem` and `.ppk` Key Formats

The required private-key format depends on the SSH client and local operating system.

| **Format** | **Typical Use in the Course**                            |
| ---------- | -------------------------------------------------------- |
| `.pem`     | Native SSH from Linux, macOS, and newer Windows versions |
| `.ppk`     | PuTTY on older Windows systems                           |

### `.pem`

A `.pem` private key can be used with the native terminal on:
- Linux
- macOS
- Modern Windows versions that support SSH

### `.ppk`

Older Windows environments may use **PuTTY** as the SSH client.
- PuTTY traditionally uses a `.ppk` private key file
- **PuTTYgen** can convert a `.pem` key into `.ppk` format

**Exam distinction:** **`.pem` and `.ppk` are private-key file formats used by different SSH tools; they do not represent different EC2 instances**

## 5.3 - Linux EC2 vs Windows EC2 Connectivity

The connection method depends on the operating system running on the EC2 instance.

| **EC2 Operating System** | **Connection Method** | **Authentication Mentioned** |
| ------------------------ | --------------------- | ---------------------------- |
| **Linux**                | SSH                   | EC2 key pair / private key   |
| **Windows**              | RDP                   | Username and password        |

For the course, SSH key pairs are created primarily for connecting to **Linux EC2 instances**.

- **Exam clue: Remote terminal connection to Linux - SSH**
- **Exam clue: Remote desktop connection to Windows - RDP**

## 5.4 - EC2 Key Pairs are Regional

**EC2 key pairs are Region-specific**

A key pair created in one AWS Region should be used with EC2 instances launched in that same Region.

For example, the course creates a key pair in the **Mumbai Region** and uses it for EC2 instances launched there.

Because the course repeatedly launches EC2 instances, it recommends:
- Using the same Region for exercises where practical
- Naming key pairs in a way that identifies their Region
- Organizing downloaded private keys by AWS account and Region to avoid confusion

**Important distinction: An EC2 key pair created in one Region is not automatically available in another Region**

## 5.5 - Creating the Key Pair

The course creates the key pair from the **Amazon EC2 console**

The key pair is:
- Given a recognizable name such as `Mumbai-Key`
- Created in the Region where EC2 instances will be launched
- Downloaded in `.pem` format for later SSH connections.

The same key pair can then be selected when launching EC2 instances in that Region.

## 5.6 - Exam Focus

- **Linux EC2 remote access - SSH**
- **SSH authentication - EC2 key pair**
- **Native SSH on Linux, macOS, and newer Windows - `.pem` private key**
- **PuTTY on older Windows - `.ppk` private key**
- **Convert `.pem` to `.ppk` - PuTTYgen**
- **Windows EC2 remote access - RDP**
- **EC2 key pairs are Region-specific**
- **Use the key pair from the Region where the EC2 instance is launched**

# 6 - Buy and Configure Public Domain Name

## 6.1 - Why Use a Public Domain Name?

A **public domain name** is an optional course prerequisite that allows a web application to be accessed using a memorable name instead of an IP address.

For example, an application hosted on **Amazon EC2** can be accessed directly using its IP address, but a domain name is easier for users to remember.

The **Domain Name System (DNS)** translates a domain name into the IP address needed to reach the application.

**Exam association: Translate domain names to IP addresses - DNS**

## 6.2 - Domain Registrars

A public domain name must be registered through a **domain registrar**

The course mentions examples such as:
- AWS
- GoDaddy
- Namecheap
- Domain.com

Domain registration normally requires payment, and the price varies depending on the domain name.

For course exercises, the instructor recommends choosing an inexpensive available domain because it is primarily for learning purposes.

## 6.3 - Amazon Route 53

**Amazon Route 53** is AWS's DNS service.

The course configures Route 53 to manage DNS for a domain even when the domain itself was purchased from a third-party registrar.

This allows DNS records for AWS-hosted applications to be managed directly in AWS.

**Exam association: DNS and domain routing - Amazon Route 53**

## 6.4 - Public vs Private Hosted Zones

Create a **public hosted zone** for the course’s public domain. See [Route 53 Hosted Zones](./10%20-%20DNS%20and%20Edge%20Networking.md) for public and private DNS.

## 6.5 - DNS Name Servers

When a **public hosted zone** is created, Route 53 provides multiple **name servers**.

These name servers are responsible for answering DNS queries for the domain.

The configuration flow is:
1. Purchase the domain from a registrar
2. Create a **Route 53 public hosted zone** using the same domain name
3. Obtain the Route 53 name servers
4. Update the domain registrar to use the Route 53 name servers.
5. Route 53 then handles DNS queries for the domain.

Using multiple name servers supports DNS availability.

## 6.6 - Registrar vs DNS Management

If you bought the domain from a third-party registrar, keep the registration there and delegate DNS to Route 53 using the name servers from section 6.5.

## 6.7 - Connecting a Domain to an AWS Application

After DNS is delegated to Route 53, DNS records can later be created to associate the domain name with an AWS-hosted application

For example, a DNS record can be configured to direct a domain name to an application running on **Amazon EC2**

The detailed DNS record configuration is covered later in the course

## 6.8 - Cost Considerations

Check the domain registration, hosted zone, and query charges before starting. Delete the lab hosted zone when finished if you no longer need its DNS records. Domain registration and renewal are billed separately. [Route 53 pricing](https://aws.amazon.com/route53/pricing/)

## 6.9 - Exam Focus

- **Translate domain names to IP addresses - DNS**
- **AWS DNS service - Amazon Route 53**
- **Internet-resolvable DNS records - Public hosted zone**
- **DNS records resolvable within a VPC - Private hosted zone**
- **Route 53 provides name servers for hosted zones**
- **Delegate DNS management to Route 53 - update the registrar's name servers**
- **Domain registrar and DNS provider can be different**
- **Public domain names and Route 53 hosted zones can involve additional cost**

# 7 - Quick Walkthrough of AWS Console

## 7.1 - AWS Management Console

The **AWS Management Console** is the web-based interface used to access and manage AWS services.

From the console, you can:
- Access individual AWS service consoles.
- View AWS account information such as the **account ID**
- Change the selected **AWS Region**
- Search for AWS services

## 7.2 - Root User vs IAM User Sign-In

The console supports signing in using either:
- **AWS account root user**
- **IAM user**

The **root user** uses the email address that was used to create the AWS account

For regular course exercises, the course transitions to using an **IAM user** instead of the root user.

**Exam association: Routine AWS access - IAM user**

## 7.3 - AWS Region Selection

The AWS Management Console includes a **Region selector.**

Changing the selected Region changes the Region in which you are viewing or managing applicable AWS resources.

The Region can also be changed from individual service consoles such as **Amazon EC2**

## 7.4 - Accessing AWS Services

AWS services can be accessed by:
- Browsing the services menu
- Searching directly for the service name.

Examples from the course:
- **Amazon EC2** - compute service console
- **Amazon S3** - storage service console

Using the search box is a quick way to navigate directly to a specific AWS service.

## 7.5 - Working with Multiple Service Consoles

You can open different AWS service consoles in separate browser tabs.

For example:
- One tab for **Amazon EC2**
- Another tab for **Amazon S3**

This can make it easier to work with multiple AWS services during exercises.

## 7.6 - Exam Focus

- **Web interface for managing AWS services - AWS Management Console**
- **Routine AWS access - IAM user**
- **Root user - Identity created with the AWS account**
- **Select where applicable AWS resources are viewed or managed - Region selector**
- **Compute service console - Amazon EC2**
- **Object storage service console - Amazon S3**