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

## 8.1 - IAM Groups for Permission Management

An **IAM group** is a collection of IAM users that can share the same permissions.

Instead of attaching policies individually to each user, you can:

- Create a group such as `developers`, `test-engineers`, `SRE`, or `DevOps`
- Attach relevant **IAM policies** to the group
- Add IAM users to that group

Users in the group receive the permissions assigned to the group

**Same permissions for multiple users - Use an IAM group**

## 8.2 - Developers Group Example

In this exercise, a group named `developers` is created

The group is assigned the **AmazonEC2FullAccess** policy

This means users in the developers group can perform EC2-related operations permitted by that policy, such as:
- Launch EC2 instances
- Start EC2 instances
- Stop EC2 instances

A new IAM user named `dev` is then added to the `developers` group.

The EC2 permissions come from the **group**, rather than from a policy attached directly to the user.

## 8.3 - Permissions Are Limited to What Is Granted

The `dev` user receives EC2 permissions through the developers group, but no S3 permissions are granted.

When the user attempts to create an **Amazon S3** bucket, AWS denies the request because the user is not authorized to perform the required S3 action.

However, the same user can successfully launch an **Amazon EC2** instance because the developers group has EC2 full-access permissions.

This demonstrates an important IAM principle:

**A user can perform only the actions that have been explicitly permitted through applicable IAM permissions**.

## 8.4 - Permission Examples from the Exercise

| **IAM User**     | **Permission Source**      | **Effective Access in This Exercise** |
| ---------------- | -------------------------- | ------------------------------------- |
| `Chetan / admin` | Administrative permissions | Broad administrative access           |
| `automation`     | Custom IAM policy          | List, start, and stop EC2 instances   |
| `Dave`           | `developers` IAM group     | Full EC2 access                       |

The `Dave` user does not receive S3 permissions simply because it has EC2 permissions.

Permissions are granted according to the policies associated with the identity or its group membership.

## 8.5 - Exam Focus

- **IAM group - Collection of IAM users**
- **Group permissions - Applied to users who belong to the group**
- **Same permissions for multiple users - Attach the policy to an IAM group**
- **Developers group with EC2 policy - Users receive EC2 permissions through the group**
- **No S3 permission - S3 actions are denied**
- **Allowed EC2 permission - EC2 operations succeed**
- **IAM authorization - Users can perform only actions permitted by applicable policies**

# 9 - IAM Role - Deep Dive

## 9.1 - Why IAM Roles Are Needed

Applications running on AWS services may need permission to access other AWS services.

For example:
- An application running on **Amazon EC2** may need to upload or download data from **Amazon S3**
- An **AWS Lambda** function may need permission to access other AWS services.

One option is to create an IAM user for the application and store its **access keys** on the EC2 instance. However, IAM user credentials are **long-term credentials** and do not automatically change.

Storing long-term credentials on an EC2 instance creates a security risk if those credentials are exposed.

**IAM roles provide a more secure alternative because they use temporary credentials that AWS automatically rotates**.

## 9.2 - IAM Role Permissions

An **IAM role** can have IAM policies attached to it, similar to an IAM user.

The policies define what actions can be performed when the role is used.

For an EC2 workload:
1. Create an **IAM policy** containing the required permissions.
2. Create an **IAM role**.
3. Attach the policy to the role.
4. Attach the role to the **EC2 instance**.
5. The application can then access permitted AWS resources without storing long-term IAM user credentials

**EC2 needs access to S3 - Attach an IAM role with the required S3 permissions**

## 9.3 - Temporary vs Long-Term Credentials

| **IAM Identity** | **Credential Type**   | **Key Characteristic**                             |
| ---------------- | --------------------- | -------------------------------------------------- |
| **IAM user**     | Long-term credentials | Credentials remain valid until changed or removed  |
| **IAM role**     | Temporary credentials | Credentials are automatically provided and rotated |

For workloads running on AWS services, roles are preferred because they avoid storing long-term access keys in applications or instances.

## 9.4 - IAM Roles for AWS Services

IAM roles can be used by AWS services that need permission to interact with other AWS services.

Examples include:
- **Amazon EC2**
- **AWS Lambda**

The service uses the permissions granted through the role to perform allowed actions.

**AWS service needs permissions to access another AWS service - IAM role**

## 9.5 - Cross-Account Access

IAM roles can also provide **cross-account access**

Suppose:
- An IAM user exists in **Account A**
- Resources that the user needs to access exist in **Account B**

Instead of creating another IAM user in Account B and managing separate credentials, Account B can create an **IAM role**.

The user in Account A can then **assume the role** in Account B and receive the permissions assigned to that role.

This reduces the need to create and manage duplicate IAM users across accounts.

**User in one AWS account needs access to another AWS account - Assume an IAM role**

## 9.6 - Role Trust Policy

An IAM role includes a **trust policy** that defines **who is allowed to assume the role**.

For cross-account access, the trust policy can allow:
- A particular identity from another AWS account
- An AWS account to use the role as permitted

After the trusted identity assumes the role, it can perform actions allowed by the IAM policies attached to that role.

### Trust vs Permissions

- **Trust policy** - Defines **who can assume the role**
- **IAM permissions attached to the role** - Define **what the role can do**

## 9.7 - Federated Users

IAM roles can also be used with **federated users**

Federation allows users to authenticate through an external identity provider and then access AWS through an IAM role.

The lesson uses authentication providers such as:
- Google
- Facebook

The external provider authenticates the user, while an IAM role provides the permissions needed to access AWS resources.

**Externally authenticated user needs AWS access - Federation with an IAM role**

## 9.8 - Common IAM Role Use Cases

| **Scenario**                             | **IAM Role Use**                           |
| ---------------------------------------- | ------------------------------------------ |
| EC2 application needs S3 access          | Assign a role to the EC2 instance          |
| Lambda needs access to AWS resources     | Assign a role to the Lambda function       |
| User in another AWS account needs access | User assumes a cross-account role          |
| Federated user needs AWS access          | Federated user assumes an appropriate role |

The major advantage is that IAM roles provide **temporary credentials** rather than requiring long-term credentials to be stored and managed.

## 9.9 - Exam Focus

- **IAM role - Provides permissions using temporary credentials**
- **IAM user credentials - Long-term credentials**
- **AWS workload needs access to another AWS service - Use an IAM role**
- **EC2 needs S3 access - Attach an IAM role with the required permissions**
- **Temporary role credentials - Automatically rotated by AWS**
- **Cross-account access - Assume an IAM role in another AWS account**
- **Trust policy - Defines who can assume an IAM role**
- **Role permissions - Define what actions can be performed after assuming the role**
- **Federated users - Can use IAM roles to obtain AWS access**
- **Avoid storing long-term access keys on AWS workloads when an IAM role can be used**

# 10 - \[Exercise] IAM Credentials - Access Keys

## 10.1 - IAM Access Keys

**Access keys** are long-term credentials used for **programmatic access** to AWS.

Different access methods use different credentials:

| **Access Method**          | **Credentials**                       |
| -------------------------- | ------------------------------------- |
| **AWS Management Console** | Username and password, optionally MFA |
| **AWS CLI**                | Access keys                           |
| **AWS SDKs**               | Access keys                           |

Access keys allow applications and command-line tools to authenticate when making requests to AWS APIs.

## 10.2 - Components of an Access Key

An access key consists of two parts:
- **Access Key ID** - Identifies the user associated with the credentials
- **Secret Access Key** - Secret value used together with the Access Key ID for authentication

Both values are required for programmatic access.

**Access Key ID + Secret Access Key - IAM access key credentials**

Access keys are **long-term credentials**, similar in concept to a username and password.

## 10.3 - Programmatic Access to AWS

Access keys can be used when accessing AWS through:
- **AWS Command Line Interface (AWS CLI)**
- **AWS SDKs**
- Direct AWS API requests

AWS CLI and SDKs ultimately invoke AWS service APIs

Direct API requests must be signed using **AWS Signature Version 4 (SigV4)**, so the CLI or SDK is typically easier to use.

## 10.4 - Managing Access Keys

Access keys can be generated for:
- **IAM users**
- The **root user**

According to the exercise, a user can have a maximum of **two active access keys** at the same time.

Because access keys are long-term credentials, they should be **stored securely**.

The **Secret Access Key is available when the access key is created**. If it is lost, the same secret cannot simply be retrieved again. A new access key must be created.

In the exercise, an access key is created for the `automation` IAM user so that its credentials can later be used with the **AWS CLI**

## 10.5 - Console Credentials vs Access Keys

| **Credential**                        | **Main Use**                                                |
| ------------------------------------- | ----------------------------------------------------------- |
| **Username + password**               | Sign in to the AWS Management Console                       |
| **MFA**                               | Adds an additional authentication factor for console access |
| **Access Key ID + Secret Access Key** | Programmatic access through AWS CLI or SDKs                 |

The key exam distinction is recognizing that **console credentials and programmatic credentials are different**.

## 10.6 - Exam Focus

- **AWS CLI / AWS SDK programmatic access - Access keys**
- **AWS Management Console - Username and password**
- **Access key - Long-term credential**
- **Access Key ID - Identifies the associated user**
- **Secret Access Key - Secret portion of the access key credentials**
- **Access Key ID + Secret Access Key - Used together for programmatic access**
- **Lost Secret Access Key - Create a new access key**
- **Access keys - Store securely because they provide AWS API access**
- **Direct AWS API requests - Signed using AWS Signature Version 4 (SigV4)**

# 11 - \[Exercise] Using AWS CLI

## 11.1 - AWS Command Line Interface (AWS CLI)

The **AWS Command Line Interface (AWS CLI)** allows users to access and manage AWS services from a command line.

For programmatic access through the AWS CLI, the CLI uses **IAM access keys** rather than a console username and password.

Before using the CLI, it must first be installed on the local operating system, such as:
- Windows
- Linux
- macOS

## 11.2 - Configuring the AWS CLI

After installation, the AWS CLI can be configured using:

`aws configure`

The configuration includes:
- **Access Key ID**
- **Secret Access Key**
- **Default AWS Region**
- **Default output format**

The output format can be configured as formats such as:
- JSON
- Text

The **default Region** determines which regional endpoint CLI commands use when no Region is explicitly specified.

A different Region can be provided for an individual command using the `--region` option.

## 11.3 - Using AWS CLI Commands

Once configured, AWS CLI commands can perform operations against AWS services.

Examples from the exercise include:

`aws ec2 describe-instances`

Used to list EC2 instance information in the account.

`aws ec2 start-instances --instance-id <instance-id>`

Used to start a specified EC2 instance.

`aws ec2 stop-instances --instance-id <instance-id>`

Used to stop a specified EC2 instance.

The exact syntax for commands can be found in the AWS documentation or command-line help.

## 11.4 - IAM Permissions Still Apply

Using the AWS CLI does **not bypass IAM permissions**.

The permissions available through the CLI are determined by the IAM identity associated with the configured access keys.

In this exercise, the `automation` IAM user's access keys are used. That user has permission to:

- Describe EC2 instances
- Start EC2 instances
- Stop EC2 instances

Therefore, the CLI can perform only those operations permitted by the user's IAM policies.

## 11.5 - Resource Access is Based on Permissions

AWS resources are not permanently associated with the IAM user that originally created them.

For example:
- One IAM user can launch an EC2 instance
- Another IAM user can start or stop that instance
- An administrator can view and manage the same instance

What matters is whether the identity has the required **IAM permissions** for that resource and action.

**Who created the resource does not determine who can manage it - IAM permissions do**

## 11.6 - AWS Console vs AWS CLI

| **Access Method**          | **Main Authentication Method**    | **Interface** |
| -------------------------- | --------------------------------- | ------------- |
| **AWS Management Console** | Username/password, optionally MFA | Web browser   |
| **AWS CLI**                | IAM access keys                   | Command line  |

Both ultimately interact with AWS services, but the method of authentication and interaction is different.

## 11.7 - Exam Focus

- **AWS CLI - Command-line interface for programmatic AWS access**
- **AWS CLI authentication - Uses IAM access keys**
- **`aws configure` - Sets access key, secret key, default Region, and output format**
- **Default Region - Used when a command does not specify another Region**
- **`--region` - Overrides the default Region for a command**
- **`describe-instances` - Lists EC2 instance information**
- **`start-instances` - Starts EC2 instances**
- **`stop-instances` - Stops EC2 instances**
- **AWS CLI permissions - Controlled by IAM policies**
- **Resource management - Depends on IAM permissions, not which user originally created the resource**

# 12 - \[Exercise] Using AWS SDK

## 12.1 - AWS Software Development Kits (SDKs)

An **AWS Software Development Kit (SDK)** allows applications to access AWS services programmatically using a supported programming language.

AWS provides SDKs for many languages, including:
- Python
- Java
- Node.js
- Other common programming languages

An organization typically chooses the SDK that matches the programming language used by its application.

For example:
- Java application - Use the **AWS SDK for Java**
- Python application - Use the **AWS SDK for Python (Boto3)**

## 12.2 - How AWS SDKs Work

AWS SDKs provide a programming-language interface for interacting with AWS services.

The SDK acts as a wrapper around the AWS **HTTP/REST APIs**, allowing developers to call AWS services using normal programming constructs instead of manually making API requests.

The overall process is similar to the **AWS CLI:**
- **AWS CLI** - Interact with AWS through command-line commands
- **AWS SDK** - Interact with AWS through application code

Both ultimately invoke AWS service APIs.

## 12.3 - AWS SDK for Python (Boto3)

**Boto3** is the **AWS SDK for Python**.

Applications can use Boto3 functions to perform AWS operations.

In the exercise, a Python program is used to:
- Start an **Amazon EC2** instance
- Stop an **Amazon EC2** instance

The program performs essentially the same AWS operations previously performed using the AWS CLI, but through Python code.

SDK documentation provides information about:
- Available functions
- Required parameters
- Supported AWS service operations

## 12.4 - SDK vs CLI

| **Method**  | **How AWS is Accessed**   | **Best Association**                    |
| ----------- | ------------------------- | --------------------------------------- |
| **AWS CLI** | Command-line commands     | Scripts and command-line administration |
| **AWS SDK** | Programming-language code | Applications and custom automation      |

Using an SDK provides the flexibility of a programming language, allowing developers to add:
- Application logic
- Parameters
- Environment variables
- Integration with other application components

## 12.5 - AWS CloudShell

**AWS CloudShell** provides a **browser-based shell environment** from within the AWS Management Console.

In the exercise, CloudShell is used as the environment for running the Python SDK example.

CloudShell includes tools such as:
- AWS CLI
- Python
- Node.js and related development tools

It can also store files, making it useful for running commands and programs directly from a browser-based terminal.

The lesson also notes that CloudShell is **pre-authenticated** with the AWS identity being used.

## 12.6 - Exam Focus

- **AWS SDK - Programmatically access AWS services using application code**
- **Boto3 - AWS SDK for Python**
- **AWS CLI - Command-line access to AWS**
- **AWS SDK - Programming-language access to AWS**
- **CLI and SDK - Ultimately interact with AWS service APIs**
- **CloudShell - Browser-based shell environment provided by AWS**
- **Application requires custom AWS automation - Use an AWS SDK**

# 13 - Understanding Relation Between AWS APIs, CLI and SDK

# 14 - IAM Audit

# 15 - AWS IAM - Section Summary

# 16 - AWS IAM - Section Quiz