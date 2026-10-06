# 1 - Introduction to AWS IAM

## 1.1 - AWS Identity and Access Management (IAM)

**AWS Identity and Access Management (IAM)** is the AWS service used to **manage access and permissions** for users working within an AWS account.

IAM is considered a foundational AWS security service alongside other core services:
- **Amazon EC2** - Compute
- **Amazon S3** - Storage
- **Amazon VPC** - Networking
- **AWS IAM** - Security and access management

Understanding these foundational services provides a strong base for working with AWS.

## 1.2 - AWS Accounts and Access

An **AWS account** is required to use AWS services and deploy workloads in AWS.

In a large organization, many different teams may work within the same AWS environment, including:
- Network administrators
- SRE and DevOps teams
- Application developers
- Machine learning developers
- Data scientists
- Database administrators

Each team has different responsibilities and therefore requires **different permissions**.

For example:
- A **network administrator** may need permissions to manage **Amazon VPC**, subnets, internet gateways, and network connectivity
- A network administrator typically does not need access to machine learning services such as **Amazon SageMaker**
- Application developers may not need permissions to create or manage databases.

## 1.3 - IAM and Permissions

**AWS IAM controls who can access AWS resources and what actions they are allowed to perform**.

Permissions should be assigned according to a user's or team's responsibilities.

IAM provides the mechanism for managing:
- **Users**
- **Access to AWS services**
- **Permissions** associated with different responsibilities

This allows organizations to give different groups the AWS access required for their specific roles without giving everyone the same permissions.

## 1.4 - Exam Focus

- **Manage users and permissions - AWS IAM**
- **Security and access management - AWS IAM**
- Different teams may require **different AWS permissions** based on their responsibilities
- **AWS account - Required to access and use AWS services**
- **Compute - Amazon EC2**
- **Storage - Amazon S3**
- **Networking - Amazon VPC**
- **Identity and access management - AWS IAM**

# 2 - AWS Account and IAM users

## 2.1 - AWS Account, Root User, and IAM Users

An **AWS account** is the **top-level entity** for using AWS services.

When an AWS account is created:
- It is created using an **email address and password**
- The identity created with the account is the **root user**.
- The root user is the **owner of the AWS account**
- Additional **IAM users** can be created within the account.

**AWS Identity and Access Management (IAM)** is a **global service**. IAM identities are not tied to a specific AWS Region.

## 2.2 - Root User vs IAM User

The main difference between the **root user** and an **IAM user** is how their permissions are controlled.

| **Identity**  | **Main Characteristic**                            | **Permissions**                                      |
| ------------- | -------------------------------------------------- | ---------------------------------------------------- |
| **Root user** | Owner of the AWS account                           | Has unrestricted access to the account               |
| **IAM user**  | Individual identity created within the AWS account | Permissions can be controlled using **IAM policies** |

The root user signs in using the account's **email address and password**

An IAM user signs in using an **IAM username and password**.

### Least Privilege

IAM users should follow the **principle of least privilege**:
- Grant only the permissions required to perform the user's job.
- Do not provide unnecessary access to AWS services or resources.

For example, different IAM users can be created for different job responsibilities, with each user receiving only the permissions appropriate for that role.

## 2.3 - Authentication vs Authorization

AWS access involves two separate concepts:

### Authentication

**Authentication** answers:
**"Is this a legitimate user?"**

It verifies the user's identity.

Authentication methods discussed include:
- Username and password
- **IAM access keys**

### Authorization

**Authorization** answers:
**"What is this user allowed to do?"**

For IAM users, authorization is controlled using **IAM policies**.

An IAM policy defines a set of permissions that determines what an IAM user **can or cannot do** within an AWS account.

- **Authentication - Proves who the user is**
- **Authorization - Determines what the user is allowed to do**

## 2.4 - IAM Policies

An **IAM policy** is a set of permissions that defines which actions an IAM identity is authorized to perform.

IAM policies can be used to control permissions for **IAM users**.

According to the distinction in this lesson:
- **Root user** - IAM policies are not used to restrict its account-level permissions
- **IAM user** - Permissions can be controlled through IAM policies

This allows organizations to provide different levels of access to different users.

## 2.5 - Root User Best Practice

The **root user should not be used for everyday AWS operations**.

For example, routine activities such as launching **Amazon EC2 instances** should normally be performed using an IAM identity rather than root credentials.

The root user should be reserved for **special account-level actions**.

Examples highlighted in this lesson include:
- Changing the **AWS Support plan**
- Closing the **AWS account**

For normal day-to-day administration, the recommended approach presented in the lesson is:
1. Create the AWS account and root user.
2. Sign in as the root user initially
3. Create an administrative **IAM user**.
4. Use the IAM identity for normal AWS operations.

## 2.6 - Root User vs IAM User Summary

| **Feature**       | **Root User**                       | **IAM User**                         |
| ----------------- | ----------------------------------- | ------------------------------------ |
| Created when      | AWS account is created              | Created after the AWS account exists |
| Sign-in identity  | Email address and password          | IAM username and password            |
| Account ownership | **Owns the AWS account**            | Identity within the account          |
| Permissions       | Unrestricted account access         | Controlled using **IAM policies**    |
| Recommended use   | Special account-level tasks         | Day-to-day AWS access                |
| Least privilege   | Not used like a normal IAM identity | **Grant only required permissions**  |

## 2.7 - Exam Focus

- **AWS account - Top-level AWS entity**
- **Root user - Owner of the AWS account with unrestricted access**
- **IAM user - Identity whose permissions can be controlled**
- **IAM policy - Defines what an IAM user can or cannot do**
- **Authentication - Verifies identity**
- **Authorization - Determines permitted actions**
- **Least privilege - Grant only the permissions required**
- **Day-to-day AWS operations - Use IAM identities rather than the root user**
- **Special account-level actions - May require the root user**
- **IAM - Global AWS service**

# 3 - \[Exercise] Create an IAM user

## 3.1 - Creating an IAM User

An **IAM user** can be created for day-to-day AWS access instead of using the **root user**

For console access, an IAM user can be configured with:
- An **IAM username**
- A **password**
- Access to the **AWS Management Console**

After creating the IAM user, normal AWS activities should be performed using that IAM identity rather than the root user.

## 3.2 - Assigning Permissions to an IAM User

An IAM user needs permissions before it can perform actions in an AWS account.

Permissions can be assigned in several ways:
- Add the user to an **IAM group** that already has permissions.
- Copy permissions from another IAM user.
- Attach specific **IAM policies** directly to the user.

AWS provides predefined policies called **AWS managed policies** to simplify permission management

In this exercise, the **AdministratorAccess** managed policy is attached to the IAM user.

**AdministratorAccess** provides very broad permissions across AWS services and resources, but it does not allow actions that specifically require the **root user**.

## 3.3 - IAM Policy Structure

An **IAM policy** defines the permissions granted to an IAM identity.

IAM policies are represented as **JSON documents**.

The policy attached in this exercise effectively grants broad access to:
- AWS services
- AWS resources
- AWS actions covered by the policy

The exact JSON structure of IAM policies is covered separately.

## 3.4 - IAM User Sign-In

IAM users use a dedicated AWS sign-in URL associated with the AWS account.

The sign-in information includes:
- **AWS account ID** or **account alias**
- **IAM username**
- Password

An **account alias** can be configured to provide an easier-to-remember sign-in URL instead of using the numeric AWS account ID.

The alias must be unique because it forms part of the account's IAM sign-in URL.

## 3.5 - Root User vs IAM User for Daily Operations

A common setup process is:
1. Create the AWS account using the **root user**
2. Use the root user initially to configure access
3. Create an **IAM user** with the permissions required for administration
4. Sign out of the root user
5. Use the IAM identity for normal AWS activities

The key security principle is to avoid using **root user credentials for routine operations**.

## 3.6 - Exam Focus

- **Day-to-day AWS access - Use an IAM identity instead of the root user**
- **IAM user permissions - Controlled using IAM policies**
- **AWS managed policy - Predefined policy provided by AWS**
- **AdministratorAccess - Broad administrative permissions**
- **IAM policy format - JSON**
- **IAM user console sign-in - Account ID or account alias + IAM username + password**
- **Account alias - Easier-to-remember alternative in the IAM sign-in URL**
- **Root user - Reserve for tasks that specifically require root access**

# 4 - \[Exercise] Set up MFA for an IAM user

## 4.1 - Multi-Factor Authentication (MFA)

**Multi-Factor Authentication (MFA)** adds an additional layer of security to AWS sign-in.

Normally, a user authenticates using:
- Username
- Password

With MFA enabled, the user must also provide a **dynamically generated authentication code**.

This means access requires both the normal sign-in credentials and an additional authentication factor.

## 4.2 - MFA Authentication Process

When MFA is enabled, the sign-in process becomes:
1. Enter the IAM username and password
2. Provide the current **MFA code**
3. AWS verifies the credentials and MFA code before granting access.

The additional MFA requirement helps protect the AWS account even if the username and password are compromised.

## 4.3 - MFA Device Options

AWS supports different ways to obtain the additional MFA authentication factor.

### Virtual Authenticator Apps

A **virtual authenticator app** can generate temporary authentication codes on a mobile device.

Examples mentioned include:
- Google Authenticator
- Microsoft/Azure Authenticator
- Okta Authenticator

The generated codes are refreshed periodically

### Security Devices

Other MFA options discussed include:
- **Passkeys**
- **FIDO security keys**
- Hardware devices that generate **time-based one-time passwords (TOTP)**

These provide alternatives to software-based authenticator applications.

## 4.4 - Configuring MFA for an IAM User

MFA can be assigned to an IAM user through the user's **security credentials**

For a virtual authenticator application, the general process is:
1. Select the IAM user
2. Open the user's **security credentials**
3. Assign an MFA device
4. Select an authenticator application
5. Scan the displayed **QR code** using the authenticator app
6. Enter consecutive authentication codes to register the device
7. Complete the MFA assignment

After MFA is configured, the user must supply an MFA code during future sign-ins.

## 4.5 - MFA for IAM and Root Users

MFA can be configured for:
- **IAM users**
- The **AWS account root user**

Adding MFA provides extra protection for AWS sign-in credentials and is recommended as an additional security measure.

## 4.6 - Exam Focus

- **MFA - Adds an additional authentication factor to AWS sign-in**
- **Username/password + MFA code - Stronger authentication than password alone**
- **Virtual authenticator app - Generates temporary MFA codes**
- **FIDO security key - Hardware-based MFA option**
- **TOTP - Time-based one-time password**
- **IAM users and root user - Can be protected with MFA**
- **Security best practice - Enable MFA to strengthen AWS account access**

# 5 - IAM Policy

## 5.1 - IAM Policies

An **IAM policy** defines permissions that determine what actions an identity can perform in AWS.

When a user tries to perform an AWS action, such as:
- Launch an **Amazon EC2** instance
- Create an **Amazon S3** bucket
- List existing EC2 instances

AWS evaluates the applicable IAM permissions before allowing or denying the action

**IAM policies are the core mechanism used to control authorization in AWS**.

## 5.2 - How Users Interact with AWS

Users and applications can interact with AWS in several ways:
- **AWS Management Console**
- **AWS Command Line Interface (AWS CLI)**
- **AWS SDKs**

Regardless of the method used, these interactions ultimately invoke AWS service APIs.

For example:
- Launching an EC2 instance uses an EC2 action such as `RunInstances`
- Listing EC2 instances uses an action such as `DescribeInstances`

IAM permissions can control access at the **individual action/API level**, allowing very granular access control.

## 5.3 - IAM Policy Elements

An IAM policy is represented as a **JSON document** and can contain one or more statements.

Important policy elements include:

| **Element**   | **Purpose**                                                      |
| ------------- | ---------------------------------------------------------------- |
| **Effect**    | Specifies whether access is **Allow** or **Deny**                |
| **Principal** | Specifies the identity to which access applies when required     |
| **Action**    | Specifies which AWS actions/API operations are allowed or denied |
| **Resource**  | Specifies which AWS resources the actions apply to               |
| **Condition** | Specifies optional requirements that must be satisfied           |

A policy can therefore describe:
**Who can do what, on which resource, under which conditions, and whether the action is allowed or denied**.

### Effect

The **Effect** determines whether the statement:
- **Allows** access
- **Denies** access

### Action

The **Action** specifies the AWS service actions that are affected by the policy

For example:
- Start an EC2 instance
- Stop an EC2 instance
- Put an object into an S3 bucket

A wildcard (\*) can represent all applicable actions.

### Resource

The **Resource** identifies which AWS resource the policy applies to.

For example, permissions might apply to:
- All EC2 instances
- A particular EC2 instance
- All S3 buckets
- A particular S3 bucket

### Condition

The optional **Condition** element allows permissions to apply only when specified requirements are met.

For example, a policy could allow EC2 actions only when particular resource tags match required values.

## 5.4 - Principal

The **Principal** identifies the user, account, or other identity that is allowed or denied access.

Whether Principal is required depends on the type of policy.

For an **identity-based policy**, the policy is already attached to an identity, so the policy already knows which identity receives the permissions.

For a **resource-based policy**, the policy must specify **who can access the resource**, so the Principal is required.

## 5.5 - Identity-Based vs Resource-Based Policies

IAM policies can be associated with either identities or resources.

| **Policy Type**           | **Attached To** | **Defines**                           |
| ------------------------- | --------------- | ------------------------------------- |
| **Identity-based policy** | IAM identity    | What the identity is allowed to do    |
| **Resource-based policy** | AWS resource    | Who is allowed to access the resource |

### Identity-Based Policy

An **identity-based policy** defines the permissions granted to an IAM identity.

Because the policy is attached directly to the identity, a **Principal** does not need to be specified within the policy.

**Question it answers: "What can this identity do?"**

### Resource-Based Policy

A **resource-based policy** is attached directly to an AWS resource.

It specifies which principals are permitted to access that resource.

Because the policy must identify who receives access, it includes a **Principal**.

**Question it answers: "Who can access this resource?"**

## 5.6 - Granular Access Control

IAM permissions can be highly granular.

Permissions can control:
- Specific AWS services
- Specific actions within a service
- Specific resources
- Conditions under which the permission applies

For example, instead of granting access to all EC2 functionality, a policy could allow only specific EC2 actions on selected resources.

This granular permission model supports the **principle of least privilege** by allowing users to receive only the permissions they require.

## 5.7 - Exam Focus

- **IAM policy - Defines AWS permissions**
- **Authorization - Controlled through IAM permissions and policies**
- **IAM policy format - JSON**
- **Effect - Allow or Deny**
- **Action - AWS API operation that can be performed**
- **Resource - AWS resource to which the action applies**
- **Condition - Optional requirements for permission to apply**
- **Principal - Identity that receives access in policies where it must be specified**
- **Identity-based policy - Defines what an IAM identity can do**
- **Resource-based policy - Defines who can access an AWS resource**
- **Identity-based policy - Principal does not need to be specified because the policy is attached to the identity**
- **Resource-based policy - Principal identifies who can access the resource**
- **Granular permissions - IAM can control individual actions and resources**
- **Least privilege - Grant only the permissions required**

# 6 - \[Exercise] Create IAM Policy

## 6.1 - Custom IAM Policies

A **custom IAM policy** can be created when an identity needs a specific set of permissions that is not covered by an existing policy.

In this exercise, the custom policy grants only three **Amazon EC2** actions:
- `DescribeInstances` - List EC2 instances
- `StartInstances` - Start EC2 instances
- `StopInstances` - Stop EC2 instances

This is an example of granting only the permissions required for a specific task.

## 6.2 - Automation Use Case

A common use case is automatically starting and stopping development or test EC2 instances.

For example:
- Start EC2 instances in the morning
- Stop EC2 instances in the evening
- Run the automation using the **AWS CLI**, an **AWS SDK**, or an **AWS Lambda** function.
- A Lambda function can be triggered on a schedule using **Amazon EventBridge**

The identity used by the automation only needs permissions required for those EC2 operations.

**Need scheduled EC2 start/stop automation - Grant only the required EC2 permissions**

## 6.3 - AWS Managed vs Customer Managed Policies

IAM policies can be managed in different ways.

| **Policy Type**             | **Description**                              |
| --------------------------- | -------------------------------------------- |
| **AWS managed policy**      | Predefined and managed by AWS                |
| **Customer managed policy** | Created and managed by the AWS customer      |
| **Inline policy**           | Embedded directly into a single IAM identity |

The policy created in this exercise is a **customer managed policy** because it is created specifically for the required automation permissions.

## 6.4 - Creating a Customer Managed Policy

A custom policy can be created using:
- The visual IAM policy editor
- A **JSON policy document**

For this exercise, the policy allows the three required EC2 actions.

The **Resource** is configured as `*`, meaning the permissions apply to all applicable EC2 resources rather than a specific instance.

A policy should also have a meaningful and unique name that reflects its purpose.

## 6.5 - Attaching the Policy to an IAM User

An IAM user named `automation` is created and the custom policy is attached directly to that user.

The resulting permissions are limited to what the attached policy allows.

In this scenario, the automation user can:
- Describe EC2 instances
- Start EC2 instances
- Stop EC2 instances

The user does not automatically receive broader permissions simply because it is an IAM user.

This demonstrates the **principle of least privilege**.

## 6.6 - Inline Policies

An **inline policy** is created directly inside a specific IAM user or identity.

Key characteristic:
- It is tied directly to that identity
- It is not intended to be reused and attached to multiple identities
- It can provide additional permissions specific to that identity

By contrast, a **customer managed policy** can be created separately and reused by attaching it to multiple IAM identities.

### Customer Managed vs Inline Policy

| **Policy Type**             | **Reusable?** | **Typical Use**                      |
| --------------------------- | ------------- | ------------------------------------ |
| **Customer managed policy** | Yes           | Shared or reusable permission set    |
| **Inline policy**           | No            | Permissions specific to one identity |

## 6.7 - Exam Focus

- **AWS managed policy - Created and managed by AWS**
- **Customer managed policy - Created and managed by the customer**
- **Inline policy - Embedded directly into a specific IAM identity**
- **Customer managed policies - Reusable across identities**
- **Inline policies - Intended for permissions specific to one identity**
- **Least privilege - Grant only the permissions required**
- **`DescribeInstances` - List EC2 instances**
- **`StartInstances` - Start EC2 instances**
- **`StopInstances` - Stop EC2 instances**
- **Resource `*` - Policy applies to all applicable resources**
- **Scheduled automation - Can use AWS Lambda with Amazon EventBridge**

# 7 - IAM Users, IAM Group and IAM Role

## 7.1 - IAM Users

An **IAM user** represents an individual identity within an AWS account.

Permissions can be granted to an IAM user by attaching one or more **IAM policies**.

**IAM user - Individual identity with permissions defined by attached policies**.

## 7.2 - IAM Groups

An **IAM group** is a collection of IAM users.

Instead of attaching the same IAM policies separately to multiple users, policies can be attached to an IAM group.

Users added to that group receive the permissions associated with the group.

This simplifies permission management because permissions can be managed at the **group level** rather than individually for every user.

For example:
- Create a group for developers
- Attach the required IAM policies to the group
- Add developer IAM users to that group

**IAM group - Collection of IAM users that can share permissions**

## 7.3 - IAM Roles

An **IAM role** is another IAM identity to which IAM policies can be attached

IAM roles are commonly used when one **AWS service needs permission to access another AWS service**.

Examples include:
- An **Amazon EC2** instance accessing data in **Amazon S3**
- An **AWS Lambda** function accessing Amazon S3
- A Lambda function sending messages to **Amazon SQS**
- A Lambda function interacting with another AWS service through permitted API actions

In these scenarios, the AWS service needs IAM permissions to perform the required actions.

Instead of using an IAM user, an **IAM role** can be assigned to the AWS service.

## 7.4 - Users vs Groups vs Roles

| **IAM Identity** | **Main Purpose**                                                            | **Policy Attachment**                                     |
| ---------------- | --------------------------------------------------------------------------- | --------------------------------------------------------- |
| **IAM user**     | Represents an individual identity                                           | Policies can be attached directly                         |
| **IAM group**    | Groups multiple IAM users for easier permission management                  | Policies are attached to the group and apply to its users |
| **IAM role**     | Provides permissions to AWS services or other entities that assume the role | Policies are attached to the role                         |

The key idea is that **IAM policies define permissions**, and those policies can be associated with:
- IAM users
- IAM groups
- IAM roles

## 7.5 - Exam Focus

- **IAM user - Individual AWS identity**
- **IAM group - Collection of IAM users**
- **IAM group - Simplifies permission management for multiple users**
- **IAM role - Commonly used to grant permissions to AWS services**
- **EC2 needs access to S3 - Use an IAM role**
- **Lambda needs access to S3 or SQS - Use an IAM role**
- **IAM policies - Can be associated with users, groups, and roles**
- **Same permissions for many users - Attach policies to an IAM group rather than managing each user separately**

# 8 - \[Exercise] Create IAM Group

# 9 - IAM Role - Deep Dive

# 10 - \[Exercise] IAM Credentials - Access Keys

# 11 - \[Exercise] Using AWS CLI

# 12 - \[Exercise] Using AWS SDK

# 13 - Understanding Relation Between AWS APIs, CLI and SDK

# 14 - IAM Audit

# 15 - AWS IAM - Section Summary

# 16 - AWS IAM - Section Quiz