# 1 - Section Introduction

## **1.1 Infrastructure Deployment**

**Infrastructure Deployment** refers to automating the provisioning and creation of AWS resources instead of configuring them manually.

- Enables **automated infrastructure provisioning**.
- Reduces the need to manually create and configure AWS resources.
- Examples:
    - Launching **Amazon EC2 instances**.
    - Creating **Amazon S3 buckets**.
    - Provisioning multiple AWS resources automatically.

**Key Concept:** Infrastructure deployment focuses on **automating the creation and management of AWS infrastructure**.

## **1.2 DevOps - Continuous Integration and Continuous Deployment (CI/CD)**

**DevOps** focuses on automating the process of building, testing, and deploying application changes.

**CI/CD (Continuous Integration and Continuous Deployment)** enables developers to:
1. **Build** new application features.
2. **Test** application changes automatically.
3. **Deploy** tested changes into production.

The goal is to **automate software delivery** and release new features as quickly as possible.

**Key Concept:** DevOps focuses on **automating the software development and deployment lifecycle**.

## **1.3 Application Deployment**

**Application Deployment** allows developers to deploy their application code without managing the underlying infrastructure.
- Developers focus primarily on **writing and deploying application code**.
- The deployment service handles infrastructure-related tasks such as:
    - **Server management**
    - **Load balancing**
    - **Auto Scaling**
- Developers do not need to manually provision and manage all the supporting infrastructure.

**Key Concept:** Application deployment focuses on **deploying code while abstracting infrastructure management**.

### **Infrastructure Deployment vs. DevOps vs. Application Deployment**

|Category|Primary Focus|Key Distinction|
|---|---|---|
|**Infrastructure Deployment**|Provision AWS resources|Automate infrastructure creation|
|**DevOps (CI/CD)**|Build, test, and deploy software|Automate software delivery|
|**Application Deployment**|Deploy application code|Minimize infrastructure management|

## **1.4 Exam Focus**

- **Automated AWS resource provisioning - Infrastructure Deployment**
- **Automated build, test, and release process - DevOps (CI/CD)**
- **Deploy code without managing servers - Application Deployment**
- **Automatically provisioning EC2 instances or S3 buckets - Infrastructure Deployment**
- **Automatically deploying new application features - DevOps**
- **AWS handles servers, load balancing, and Auto Scaling - Application Deployment**

**Exam Tip:** Recognize whether a scenario focuses on **provisioning infrastructure**, **automating software delivery**, or **deploying applications without managing infrastructure**.

# 2 - Overview of Infrastructure Deployment

## **2.1 Challenges of Manual Infrastructure Deployment**

**Infrastructure Deployment** refers to provisioning and configuring AWS resources required to run an application.

Deploying a complex AWS architecture manually can be **time-consuming, error-prone, and difficult to scale**.

An application may require accurate configuration of:
- **Amazon EC2** - Instance configurations.
- **Security Groups** - Inbound and outbound traffic rules.
- **Amazon VPC** - Subnet CIDR ranges and route table entries.
- **Amazon S3** - Bucket configurations and permissions.
- **AWS IAM** - Policies and permissions for users and AWS resources.
- **Databases** - Database configurations.

### **Problems with Manual Deployment**

- **Scalability:** Manually provisioning hundreds of resources is inefficient.
- **Human Errors:** Missing or incorrect configurations can cause application failures.
- **Time Consumption:** Large infrastructures may require significant deployment time.
- **Troubleshooting:** Identifying and fixing deployment failures can be difficult.
- **Consistency:** Repeating the same deployment accurately is challenging.

**Key Concept:** Large-scale AWS infrastructure requires **automated provisioning** to reduce manual effort and configuration errors.

## **2.2 Methods of Deploying AWS Infrastructure**

AWS provides several ways to create and manage infrastructure resources.

### **1. AWS Management Console**

The **AWS Management Console** is a web-based interface for manually managing AWS resources.

**Suitable for:**
- Creating individual AWS resources.
- Making small configuration changes.
- Starting or stopping EC2 instances.
- Taking database snapshots.

**Limitations:**
- Manual operations become inefficient at scale.
- Increased chances of configuration errors.
- Not ideal for deploying complex architectures with hundreds of resources.

### **2. AWS Command Line Interface (AWS CLI)**

The **AWS CLI** allows users to create and manage AWS resources using command-line commands.

**Suitable for:**
- Executing AWS operations through commands.
- Automating individual administrative tasks.
- Starting, stopping, or modifying AWS resources.

**Limitations for Complex Deployments:**
- Commands may depend on resource IDs generated by previous commands.
- Failed commands require manual recovery or additional scripting.
- Shell or PowerShell scripts must handle errors and resource cleanup.
- Complex infrastructure provisioning becomes difficult to manage.

### **3. AWS Software Development Kits (AWS SDKs)**

**AWS SDKs** allow developers to interact with AWS services programmatically using programming languages such as Python.

**Suitable for:**
- Managing AWS resources through application code.
- Automating specific AWS operations.
- Making configuration changes on demand.

**Limitations for Complex Deployments:**
- Developers must implement deployment logic.
- Partial failures require additional error-handling logic.
- Successfully created resources may need to be deleted before retrying a failed deployment.

**Example:** If a deployment program successfully creates five resources but fails while creating the sixth, the developer must handle the existing resources before retrying.

### **Comparison of Infrastructure Deployment Methods**

|Method|Primary Use|Limitation|
|---|---|---|
|**AWS Management Console**|Manual resource management|Inefficient for large deployments|
|**AWS CLI**|Command-line resource management|Requires scripting and error handling|
|**AWS SDKs**|Programmatic resource management|Requires custom deployment and recovery logic|
|**AWS CloudFormation / AWS CDK**|Automated infrastructure provisioning|Designed for managing infrastructure deployments|

## **2.3 AWS Services for Automated Infrastructure Deployment**

AWS provides two services specifically suited for automating infrastructure provisioning.

### **AWS CloudFormation**

**AWS CloudFormation** is an AWS service used to automate the provisioning and management of infrastructure resources.
- Helps deploy complex AWS architectures.
- Reduces the need to create resources individually.
- Supports automated infrastructure deployment.

### **AWS Cloud Development Kit (AWS CDK)**

**AWS Cloud Development Kit (AWS CDK)** is another AWS service/tool used for automated infrastructure provisioning.
- Supports defining and deploying AWS infrastructure using code.
- Provides an alternative approach to creating infrastructure manually.

**Key Distinction:** The **AWS Management Console, AWS CLI, and AWS SDKs** are useful for individual resource operations, while **AWS CloudFormation and AWS CDK** are designed for automated infrastructure provisioning.

## **2.4 Exam Focus**

- **Manual resource management - AWS Management Console**
- **Manage resources using commands - AWS CLI**
- **Manage AWS resources programmatically - AWS SDKs**
- **Automate infrastructure provisioning - AWS CloudFormation**
- **Define AWS infrastructure using code - AWS CDK**
- **Deploy hundreds of AWS resources consistently - Automated infrastructure deployment**
- **Complex deployment failures and resource cleanup - Challenges of CLI/SDK-based deployment scripts**

**Exam Tip:** If a scenario requires **automated, repeatable deployment of complex AWS infrastructure**, recognize **AWS CloudFormation or AWS CDK** rather than manually provisioning resources through the console, CLI, or SDKs.

# 3 - AWS CloudFormation

## **3.1 AWS CloudFormation**

**AWS CloudFormation** is an AWS service that automates the provisioning and management of AWS infrastructure using **JSON or YAML templates**.
- Allows users to define AWS resources and their configurations in a text file.
- Uses a **declarative approach**, meaning you specify the desired infrastructure rather than manually creating each resource.
- Automatically provisions resources according to the template.
- Ensures **consistent and repeatable infrastructure deployments**.

**Example:** A single CloudFormation template can define:
- **Amazon VPC** and subnets.
- **Internet Gateway** and VPC attachments.
- **Security Groups** and their rules.
- **Amazon EC2 instances** with specific configurations.
- Other AWS resources required by an application.

**Key Concept:** CloudFormation enables **Infrastructure as Code (IaC)**, where infrastructure is defined and managed using code-based templates.

## **3.2 CloudFormation Templates and Stacks**

### **CloudFormation Template**

A **CloudFormation template** is a JSON or YAML file that defines the AWS resources and configurations required for an application.
- Specifies which AWS resources to create.
- Defines resource properties and configurations.
- Can be reused to deploy infrastructure consistently.
- Can be stored and version-controlled in a code repository.

### **CloudFormation Stack**

A **CloudFormation Stack** is a collection of AWS resources created and managed together using a CloudFormation template.
- **Create Stack** - Provisions the resources defined in the template.
- **Update Stack** - Modifies existing infrastructure based on template changes.
- **Delete Stack** - Deletes stack-managed resources together, except resources configured to be retained or otherwise preserved.

**Key Distinction:**
- **Template** - Defines the infrastructure.
- **Stack** - Represents the deployed infrastructure resources.

## **3.3 Benefits of AWS CloudFormation**

### **1. Automated Resource Management**

- Automatically creates and manages AWS resources.
- Reduces manual configuration effort and human errors.
- Supports managing multiple related resources as a group.
- Helps prevent forgotten resources that may generate unnecessary costs.

### **2. Dependency Management**

CloudFormation automatically handles **resource dependencies** during deployment.
- Resources with dependencies are created in the required order.
- Independent resources can be created **in parallel**, reducing deployment time.

**Example:**

- A **VPC** must exist before its subnet can be created.
- An independent **AWS Lambda function** can be created in parallel with a VPC.

### **3. Consistent and Repeatable Deployments**

- The same template can be reused to deploy consistently configured infrastructure.
- Reduces configuration differences caused by manual deployment.
- Helps standardize infrastructure across environments.

### **4. Reusability Across Regions and Accounts**

- CloudFormation templates can be reused across **different AWS Regions and AWS accounts**.
- Enables teams to share infrastructure definitions.
- Region-specific configurations may require adjustments.

### **5. Version Control and Infrastructure as Code (IaC)**

- Templates are text files that can be stored in code repositories.
- Infrastructure changes can be tracked through version control.
- Previous template versions can be reused when reverting infrastructure configurations.

**Key Concept:** **Infrastructure as Code (IaC)** allows infrastructure to be managed similarly to application source code.

## **3.4 Additional CloudFormation Features**

### **CloudFormation Conditions**

**CloudFormation Conditions** allow templates to define different resource configurations based on specified conditions.

**Examples:**

- **Region-based configuration:**
	- Northern Virginia Region - Use one Amazon Machine Image (AMI).
	- Mumbai Region - Use a different AMI.
- **Environment-based configuration:**
	- Development environment - Deploy smaller EC2 instances.
	- Production environment - Deploy larger EC2 instances.

This enables a single template to support different deployment requirements.

### **Preview Infrastructure Changes**

CloudFormation supports previewing proposed infrastructure changes before applying them.
- Helps identify modifications to existing resources.
- Allows users to review the impact of an update.
- Reduces the risk of unintended infrastructure changes.

This functionality is available through **CloudFormation Change Sets**.

## **3.5 Exam Focus**

- **Automate AWS infrastructure provisioning - AWS CloudFormation**
- **Define infrastructure using JSON or YAML - CloudFormation Template**
- **Collection of AWS resources managed together - CloudFormation Stack**
- **Manage infrastructure using code-based definitions - Infrastructure as Code (IaC)**
- **Automatically manage resource creation order - Dependency Management**
- **Create independent resources simultaneously - Parallel Provisioning**
- **Deploy consistent infrastructure across AWS accounts or Regions - Reusable CloudFormation Templates**
- **Use different configurations based on Region or environment - CloudFormation Conditions**
- **Preview proposed infrastructure updates - CloudFormation Change Sets**
- **Track infrastructure definitions in repositories - Version Control**

**Exam Tip:** When a scenario requires **automated, consistent, repeatable provisioning of multiple AWS resources using JSON or YAML templates**, the expected service is **AWS CloudFormation**.

# 4 - \[Exercise] Launch AWS CloudFormation Stack

## **4.1 Launching an EC2 Instance Using AWS CloudFormation**

**AWS CloudFormation** allows users to provision AWS resources automatically using a **JSON or YAML template**.

In this exercise, a CloudFormation template is used to deploy:
- An **Amazon EC2 instance**.
- A **Security Group** with defined security rules.

### **CloudFormation Template Configuration**

The template contains a **Resources** section that defines the AWS resources and their properties.

Important EC2 configuration properties include:
- **Instance Type** - Defines the EC2 instance size.
- **Amazon Machine Image (AMI)** - Specifies the operating system and software image.
- **Key Pair** - Specifies the SSH key pair for instance access.
- **Security Group** - Defines network access rules.

**Important:** AMI IDs and EC2 key pairs are **Region-specific**. Their values must match the AWS Region where the stack is deployed.

## **4.2 CloudFormation Stack Creation and Resource Dependencies**

When a CloudFormation template is submitted, AWS CloudFormation automatically creates the resources defined in the template.

### **Automatic Dependency Management**

CloudFormation identifies dependencies between AWS resources and provisions them in the appropriate order.

**Example:**
1. CloudFormation creates the **Security Group**.
2. After the Security Group is available, CloudFormation launches the **EC2 instance** associated with it.

Resources without dependencies can be created **in parallel**.

### **Stack Events and Outputs**

|Feature|Purpose|
|---|---|
|**Events**|Displays resource creation, update, and deletion activities|
|**Resources**|Displays AWS resources managed by the stack|
|**Outputs**|Displays values defined as stack outputs, such as EC2 instance IDs or public IP addresses|
|**Stack Status**|Indicates the current state of the stack, such as `CREATE_COMPLETE`|

**Key Concept:** CloudFormation automatically manages **resource provisioning, dependencies, and deployment status**.

## **4.3 CloudFormation Drift Detection**

**CloudFormation Drift Detection** identifies differences between the expected configuration defined in a template and the actual configuration of deployed AWS resources.

### **Example Scenario**

1. CloudFormation creates an EC2 instance with a specified Security Group.
2. Someone manually modifies the Security Group configuration.
3. The actual configuration no longer matches the CloudFormation template.
4. **Drift Detection** identifies the configuration differences.

**Purpose:**

- Detect configuration changes made outside CloudFormation.
- Identify resources that no longer match their expected configuration.
- Help administrators maintain infrastructure consistency.

**Important:** Drift Detection **identifies differences but does not automatically correct them**. Reconciliation requires appropriate resource or stack changes.

**Exam Clue:** **Detect manual configuration changes to CloudFormation-managed resources - CloudFormation Drift Detection**

## **4.4 AWS Infrastructure Composer**

**AWS Infrastructure Composer** provides a visual interface for designing and understanding AWS infrastructure.

### **Key Capabilities**

- **Visualize Infrastructure** - Display AWS resources and their relationships through diagrams.
- **Drag-and-Drop Design** - Add and organize AWS resources visually.
- **Template Generation** - Generate CloudFormation templates from visual infrastructure designs.

**Example:** Visualize an application architecture containing VPCs, subnets, EC2 instances, and Security Groups.

**Key Concept:** Infrastructure Composer helps users **visually design AWS infrastructure and generate Infrastructure as Code templates**.

## **4.5 CloudFormation Stack Deletion**

CloudFormation allows users to delete a stack and its managed resources as a group.
- Automatically initiates the deletion of stack resources.
- Handles resource dependencies during deletion.
- Reduces the risk of leaving behind unused resources.
- Helps avoid unnecessary AWS costs.

**Important:** Some resources may be retained because of configured retention policies or other deletion constraints.

**Key Concept:** Deleting a CloudFormation stack generally deletes the AWS resources managed by that stack.

## **4.6 Exam Focus**

- **Provision AWS resources automatically - AWS CloudFormation**
- **Define EC2 instances and Security Groups - CloudFormation Resources section**
- **Automatically create resources in the correct order - Dependency Management**
- **View stack creation and deletion activities - CloudFormation Events**
- **Retrieve EC2 instance IDs or public IP addresses - CloudFormation Outputs**
- **Identify manual changes to deployed resources - CloudFormation Drift Detection**
- **Visually design AWS infrastructure - AWS Infrastructure Composer**
- **Generate CloudFormation templates using drag-and-drop - Infrastructure Composer**
- **Delete managed infrastructure as a group - CloudFormation Stack Deletion**
- **AMI IDs and EC2 key pairs - Region-specific**

**Exam Tip:** Remember the difference between **CloudFormation Drift Detection** and **AWS Infrastructure Composer**:

- **Drift Detection** - Identifies differences between expected and actual resource configurations.
- **Infrastructure Composer** - Visually designs infrastructure and generates CloudFormation templates.

# 5 - AWS CDK - Cloud Development Kit

## **5.1 AWS Cloud Development Kit (AWS CDK)**

**AWS Cloud Development Kit (AWS CDK)** is an **open-source software development framework** that allows developers to define AWS infrastructure using familiar programming languages.
- Enables developers to define infrastructure using **programming code** instead of manually writing JSON or YAML templates.
- Automatically generates **AWS CloudFormation templates** from the code.
- Uses **AWS CloudFormation** to provision and manage the infrastructure.
- Provides a developer-friendly approach to **Infrastructure as Code (IaC)**.

**Key Concept:** AWS CDK allows developers to **define infrastructure using programming languages**, while AWS CloudFormation performs the actual resource provisioning.

## **5.2 How AWS CDK Works**

AWS CDK follows a workflow that ultimately creates a **CloudFormation Stack**.

### **AWS CDK Deployment Workflow**

1. **Write CDK Code** - Define AWS infrastructure using a supported programming language.
2. **Synthesize Template** - Convert the CDK code into a CloudFormation template.
3. **Deploy Infrastructure** - Use CloudFormation to provision the AWS resources.

### **Important AWS CDK Commands**

|Command|Purpose|
|---|---|
|`cdk synth`|Generates a CloudFormation template from CDK code|
|`cdk deploy`|Deploys the infrastructure using AWS CloudFormation|

**Important:** AWS CDK does not replace CloudFormation. It **generates CloudFormation templates**, which CloudFormation uses to create and manage AWS resources.

## **5.3 Benefits of AWS CDK**

### **1. Developer-Friendly Infrastructure Management**

- Developers can use familiar programming languages.
- Supports programming capabilities when defining AWS infrastructure.
- Eliminates the need to manually write complex JSON or YAML templates.

### **2. Reusable Infrastructure Components**

AWS CDK allows developers to create and reuse infrastructure components.

**Example:**

- A developer creates a reusable **VPC infrastructure module**.
- Other developers can import and reuse that module in their CDK applications.
- This avoids repeatedly defining the same infrastructure.

### **3. Open-Source Framework**

- AWS CDK is **open source**.
- Developers can share infrastructure code using repositories such as **GitHub**.
- Encourages code reuse and collaboration between development teams.

**Key Concept:** AWS CDK supports **reusable infrastructure definitions**, similar to importing modules in programming languages.

## **5.4 AWS CloudFormation vs. AWS CDK**

Both services support **Infrastructure as Code (IaC)** and automated AWS infrastructure provisioning.

| Feature                   | **AWS CloudFormation**                    | **AWS CDK**                              |
| ------------------------- | ----------------------------------------- | ---------------------------------------- |
| Infrastructure Definition | JSON or YAML templates                    | Programming languages                    |
| Primary Approach          | Declarative templates                     | Programmatic infrastructure definitions  |
| Resource Provisioning     | Creates and manages AWS resources         | Uses CloudFormation for provisioning     |
| Reusability               | Reusable templates                        | Reusable code and infrastructure modules |
| Best Suited For           | Defining infrastructure through templates | Developers who prefer writing code       |

### **Key Distinction**

- **AWS CloudFormation** - Define AWS infrastructure directly using JSON or YAML templates.
- **AWS CDK** - Define AWS infrastructure using programming languages and automatically generate CloudFormation templates.

**Both ultimately use AWS CloudFormation to provision the infrastructure.**

## **5.5 Exam Focus**

- **Define AWS infrastructure using programming languages - AWS CDK**
- **Define AWS infrastructure using JSON or YAML templates - AWS CloudFormation**
- **Open-source Infrastructure as Code framework - AWS CDK**
- **Generate a CloudFormation template from CDK code -** `cdk synth`
- **Deploy infrastructure using AWS CDK -** `cdk deploy`
- **Actual resource provisioning for CDK applications - AWS CloudFormation**
- **Share and reuse infrastructure code - AWS CDK modules**

**Exam Tip:** When a scenario requires developers to **define AWS infrastructure using familiar programming languages instead of JSON or YAML**, choose **AWS CDK**.

Remember: **AWS CDK generates the infrastructure template; AWS CloudFormation provisions the resources.**

# 6 - Introduction to AWS DevOps Services

## **6.1 Introduction to AWS DevOps Services**

**AWS DevOps Services** help automate the software development lifecycle, including **source code management, building, testing, and deployment**.

The goal is to implement **Continuous Integration and Continuous Deployment (CI/CD)** so that application changes can be delivered automatically.

### **Roles in a DevOps Workflow**

| Role                                          | Responsibility                                  |
| --------------------------------------------- | ----------------------------------------------- |
| **Developers**                                | Write application code and develop new features |
| **Quality Engineers (QA)**                    | Write and execute test cases                    |
| **DevOps / Site Reliability Engineers (SRE)** | Manage, provision, and maintain infrastructure  |

All these roles can store their work in a **source code repository**, including application code, test code, and infrastructure definitions.

## **6.2 AWS DevOps Services**

AWS provides several services for automating different stages of the CI/CD process.

### **1. AWS CodeCommit - Source Code Management**

**AWS CodeCommit** is a managed source control service used to store and manage code repositories.
- Stores application source code.
- Stores automated test code.
- Stores Infrastructure as Code definitions, such as **CloudFormation templates** and **AWS CDK code**.
- Provides source control capabilities similar to **GitHub** and **GitLab**.

**Key Concept:** AWS CodeCommit is used for **source code repository management**.

### **2. AWS CodeBuild - Build and Test**

**AWS CodeBuild** is a fully managed build service that compiles source code, runs tests, and produces deployable software packages.
- Provides a **managed build environment**.
- Compiles and builds application source code.
- Generates **build artifacts**, such as Java `.jar` and `.war` files.
- Can execute automated tests during the build process.

**Key Concept:** AWS CodeBuild is used for **compiling, testing, and generating build artifacts**.

### **3. AWS CodeDeploy - Application Deployment**

**AWS CodeDeploy** automates the deployment of application code to application servers.
- Deploys new application versions.
- Automates the replacement of existing application code.
- Can deploy compiled build artifacts to application servers.
- Reduces manual deployment effort.

**Example:** After CodeBuild generates a new `.jar` or `.war` file, **AWS CodeDeploy** deploys the updated application to the servers.

**Key Concept:** AWS CodeDeploy focuses on **automating application deployments**.

### **4. AWS CodePipeline - CI/CD Orchestration**

**AWS CodePipeline** is a fully managed **Continuous Integration and Continuous Delivery (CI/CD)** service that automates the software release workflow.
- Connects different stages of software delivery.
- Automates the process from source code changes to application deployment.
- Coordinates building, testing, and deploying application changes.
- Can integrate with **AWS CodeCommit, AWS CodeBuild, and AWS CodeDeploy**.

**Example Workflow:**
1. Developer commits new code to **AWS CodeCommit**.
2. **AWS CodePipeline** detects the change and starts the pipeline.
3. **AWS CodeBuild** builds the application and runs tests.
4. If tests succeed, **AWS CodeDeploy** deploys the new application version.

**Key Concept:** AWS CodePipeline **orchestrates the entire CI/CD workflow**.

## **6.3 Infrastructure Deployment vs. Application Deployment in CI/CD**

A CI/CD pipeline can automate both **infrastructure provisioning** and **application deployment**.

### **Infrastructure Deployment**

- DevOps engineers define infrastructure using **AWS CloudFormation** or **AWS CDK**.
- Infrastructure definitions can be stored in source code repositories.
- AWS CloudFormation provisions the required infrastructure.
- Useful when an environment requires new or updated infrastructure.

### **Application Deployment**

- Developers commit updated application code.
- AWS CodeBuild generates new application artifacts.
- AWS CodeDeploy deploys the updated application to existing infrastructure.
- In production environments, application updates do not necessarily require recreating the entire infrastructure.

**Key Distinction:**

- **Infrastructure Deployment** - Creates or updates AWS resources.
- **Application Deployment** - Deploys new application code to the infrastructure.

## **6.4 AWS DevOps Services Comparison**

|AWS Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS CodeCommit**|Source code repository|Store and version-control source code|
|**AWS CodeBuild**|Build and test applications|Compile code and generate build artifacts|
|**AWS CodeDeploy**|Automate application deployment|Deploy application updates to servers|
|**AWS CodePipeline**|Orchestrate CI/CD workflows|Automate the complete software release process|
|**AWS CloudFormation**|Provision AWS infrastructure|Create infrastructure from templates|
|**AWS CDK**|Define infrastructure using code|Generate CloudFormation templates programmatically|

### **AWS Services vs. Other DevOps Tools**

| AWS Service          | Similar Tool or Capability                                |
| -------------------- | --------------------------------------------------------- |
| **AWS CodeCommit**   | GitHub, GitLab repositories                               |
| **AWS CodeBuild**    | Jenkins build automation                                  |
| **AWS CodeDeploy**   | Deployment automation using tools such as Ansible or Chef |
| **AWS CodePipeline** | Jenkins pipelines                                         |

These comparisons represent similar capabilities, not necessarily identical functionality.

## **6.5 Exam Focus**

- **Store application source code - AWS CodeCommit**
- **Compile source code and generate artifacts - AWS CodeBuild**
- **Run automated build tests - AWS CodeBuild**
- **Deploy new application versions - AWS CodeDeploy**
- **Automate the complete CI/CD workflow - AWS CodePipeline**
- **Define infrastructure with JSON or YAML templates - AWS CloudFormation**
- **Define infrastructure using programming languages - AWS CDK**
- **Deploy updates without recreating infrastructure - Application Deployment**
- **Automate building, testing, and releasing software - CI/CD**

**Exam Tip:** Remember the four AWS DevOps services by their primary responsibilities:

- **CodeCommit - Store Code**
- **CodeBuild - Build and Test Code**
- **CodeDeploy - Deploy Code**
- **CodePipeline - Orchestrate the Entire Process**

If an exam scenario asks for a service that **automatically coordinates source, build, test, and deployment stages**, the answer is **AWS CodePipeline**, not CodeBuild or CodeDeploy.

# 7 - AWS CodeCommit \[Service Was Discountinued > Relaunched in Nov 2025]

## **7.1 AWS CodeCommit**

**AWS CodeCommit** is a fully managed, secure, and scalable **source control service** that hosts private **Git repositories**.
- Allows developers to **store, manage, and version-control source code**.
- Uses **Git**, a widely adopted distributed version control system.
- Enables multiple developers to collaborate on the same codebase.
- Maintains a history of code changes through **commits**.
- Supports reviewing code, merging branches, and reverting to previous versions.

**Key Concept:** AWS CodeCommit provides **managed private Git repositories** for storing and collaborating on source code.

## **7.2 Key Features of AWS CodeCommit**

### **1. Source Code Version Control**

- Tracks changes made to source code over time.
- Every **commit** has a unique identifier.
- Developers can access previous versions of the code.
- Supports reverting changes when necessary.

### **2. Developer Collaboration**

- Multiple developers can work on the same repository.
- Supports **code reviews** and **branch merging**.
- Helps teams manage code changes collaboratively.

### **3. Fully Managed and Scalable**

- AWS manages the underlying repository infrastructure.
- Developers do not need to provision or maintain repository servers.
- Automatically scales to accommodate repository requirements.
- AWS manages the underlying service availability.

### **4. Secure Private Repositories**

- Hosts **private Git repositories**.
- Provides secure storage for application source code.
- Enables controlled collaboration between development teams.

## **7.3 AWS CodeCommit in a CI/CD Pipeline**

AWS CodeCommit typically acts as the **source code repository** in a CI/CD workflow.
1. **Developers / QA Engineers** - Write application code and automated tests.
2. **AWS CodeCommit** - Stores and version-controls the code.
3. **AWS CodeBuild** - Compiles the source code, runs tests, and generates build artifacts.
4. **AWS CodeDeploy** - Deploys the application to the target environment.
5. **AWS CodePipeline** - Orchestrates the automated CI/CD workflow.

**Key Distinction:**

- **AWS CodeCommit** - Stores and manages source code.
- **AWS CodeBuild** - Builds and tests the code.
- **AWS CodeDeploy** - Deploys the application.
- **AWS CodePipeline** - Automates the workflow.

## **7.4 AWS CodeCommit Service Availability Update**

Verified AWS service update
- **July 25, 2024** - AWS stopped accepting new CodeCommit customers while existing customers could continue using the service.
- **November 24, 2025** - AWS announced that CodeCommit returned to **General Availability (GA)**, reopening access to new customers.

**Important:** AWS CodeCommit is available to both new and existing customers. It should not be considered a discontinued service.

## **7.5 Exam Focus**

- **Managed source control service - AWS CodeCommit**
- **Host private Git repositories - AWS CodeCommit**
- **Underlying version control technology - Git**
- **Track source code changes - Git Commits**
- **Review code and merge branches - AWS CodeCommit**
- **Store previous versions of source code - AWS CodeCommit**
- **Build and test source code - AWS CodeBuild**
- **Deploy application updates - AWS CodeDeploy**
- **Orchestrate CI/CD workflows - AWS CodePipeline**
- **Fully managed Git repository hosting - AWS CodeCommit**
- **Returned to General Availability in November 2025 - AWS CodeCommit**

**Exam Tip:** When a scenario requires a **secure, scalable, fully managed AWS service for hosting private Git repositories and collaborating on source code**, choose **AWS CodeCommit**.

Remember: **CodeCommit stores code; CodeBuild builds code; CodeDeploy deploys code; CodePipeline orchestrates the process.**

# 8 - AWS CodeBuild

## **8.1 AWS CodeBuild**

**AWS CodeBuild** is a fully managed build service that **compiles source code, runs automated tests, and produces deployable software packages**.
- Provides **preconfigured build environments** with the required operating systems, programming runtimes, and build tools.
- Automatically compiles source code into executable binaries or libraries.
- Executes **unit tests** during the build process.
- Generates **build artifacts** that are ready for deployment.
- Eliminates the need to manually provision and manage build servers.

**Key Concept:** AWS CodeBuild automates the **build and testing stages** of the CI/CD pipeline.

## **8.2 Preconfigured Build Environments**

AWS CodeBuild provides managed build environments containing the tools required to build applications.

A build environment typically includes:
- **Operating System** - Environment where the build executes.
- **Programming Runtime** - Required runtime for the application.
- **Build Tools** - Tools used to compile and package source code.

### **Examples of Build Tools**

|Programming Language|Build Tool / Runtime|
|---|---|
|**Java**|JVM, Maven|
|**C / C++**|GCC|
|**Node.js**|npm|

**Key Concept:** CodeBuild provides the necessary **build environment, runtime, and tools** so developers can focus on building applications rather than maintaining build infrastructure.

## **8.3 Benefits of AWS CodeBuild**

### **1. Fully Managed and Serverless**

- AWS manages the underlying build infrastructure.
- No need to provision or maintain build servers.
- Reduces infrastructure management overhead.

### **2. Automatic Scaling**

- Automatically scales build capacity based on demand.
- Supports workloads ranging from a few builds to large numbers of builds.
- Eliminates the need to manually increase build server capacity.

### **3. Pay-as-You-Go Pricing**

- Charges are based on **build compute usage**, such as build duration.
- No need to maintain continuously running build servers.
- Helps reduce costs when build activity is low.

**Key Concept:** AWS CodeBuild provides **managed build infrastructure, automatic scaling, and usage-based pricing**.

## **8.4 AWS CodeBuild in a CI/CD Pipeline**

AWS CodeBuild operates in the **build and testing stage** of the CI/CD workflow.
1. **AWS CodeCommit** - Stores application source code.
2. **AWS CodeBuild** - Compiles code, runs tests, and generates build artifacts.
3. **AWS CodeDeploy** - Deploys the generated artifacts to application servers.
4. **AWS CodePipeline** - Orchestrates the automated workflow.

### **CodeBuild vs. CodeDeploy**

| Service            | Primary Purpose                 | Exam Clue                                  |
| ------------------ | ------------------------------- | ------------------------------------------ |
| **AWS CodeBuild**  | Compile, test, and package code | Generate binaries and deployable artifacts |
| **AWS CodeDeploy** | Deploy application updates      | Deploy new application versions to servers |

**Important Distinction:** CodeBuild **produces deployment packages**, while CodeDeploy **deploys those packages** to the target environment.

## **8.5 Exam Focus**

- **Fully managed build service - AWS CodeBuild**
- **Compile source code - AWS CodeBuild**
- **Execute automated unit tests - AWS CodeBuild**
- **Generate deployable binaries and packages - AWS CodeBuild**
- **Preconfigured build environments - AWS CodeBuild**
- **Automatically scale build capacity - AWS CodeBuild**
- **Pay based on build compute usage - AWS CodeBuild**
- **No build server management - AWS CodeBuild**
- **Deploy application artifacts - AWS CodeDeploy**
- **Orchestrate the CI/CD workflow - AWS CodePipeline**

**Exam Tip:** If a scenario requires a **fully managed service to compile source code, execute tests, and generate deployment artifacts without managing build servers**, choose **AWS CodeBuild**.

Remember: **CodeBuild builds and tests the application; CodeDeploy deploys the application.**

# 9 - AWS CodeDeploy

## **9.1 AWS CodeDeploy**

**AWS CodeDeploy** is a fully managed deployment service that automates the deployment of application code and build artifacts to different compute environments.
- Automates **application deployments** without manually updating individual servers.
- Deploys different types of application content:
    - **Source Code** - Python applications, HTML files, etc.
    - **Executables and Libraries** - Compiled application binaries.
    - **Build Artifacts** - Application packages generated by build tools.
- Retrieves deployment artifacts from sources such as **Amazon S3** or supported external repositories.
- Supports different deployment strategies to reduce application downtime and deployment risks.

### **Supported Deployment Targets**

| Compute Platform        | Deployment Support                                    |
| ----------------------- | ----------------------------------------------------- |
| **Amazon EC2**          | Deploy application code and binaries to EC2 instances |
| **On-Premises Servers** | Deploy applications to servers outside AWS            |
| **AWS Lambda**          | Deploy new versions of Lambda functions               |
| **Amazon ECS**          | Deploy containerized applications                     |

**Key Concept:** AWS CodeDeploy automates **application deployment across different compute platforms**.

## **9.2 AWS CodeDeploy Deployment Strategies**

AWS CodeDeploy supports two primary deployment approaches: **In-Place Deployment** and **Blue/Green Deployment**.

### **1. In-Place Deployment**

**In-Place Deployment** updates the application directly on existing servers.
- Replaces the currently running application version with a newer version.
- Uses the **same infrastructure** for both application versions.
- Does not require provisioning a separate replacement environment.

**Example:**
1. EC2 instances are running application **Version 1 (V1)**.
2. CodeDeploy replaces V1 with **Version 2 (V2)**.
3. Existing EC2 instances start running V2.

**Advantages:**
- Simple deployment process.
- No separate replacement environment is required.

**Disadvantages:**
- Application availability may be affected during deployment.
- If the new version fails, users may experience disruptions.

### **2. Blue/Green Deployment**

**Blue/Green Deployment** deploys the new application version into a separate environment before shifting production traffic.
- **Blue Environment** - Existing application version (V1).
- **Green Environment** - New application version (V2).
- New application instances are prepared before production traffic is redirected.
- A **Load Balancer** can be used to shift traffic from the old environment to the new environment.
- The old environment can be terminated after successful deployment, depending on the configuration.    

**Example:**

1. Existing EC2 instances run **V1 (Blue)**.
2. New EC2 instances are launched with **V2 (Green)**.
3. Traffic is redirected from V1 to V2.
4. Once deployment succeeds, the old environment can be removed.

**Advantages:**

- Reduces deployment downtime and risks.
- Allows the new application version to be validated before fully replacing the old version.
- Provides a safer approach to application updates.

### **In-Place vs. Blue/Green Deployment**

| Feature              | In-Place Deployment           | Blue/Green Deployment               |
| -------------------- | ----------------------------- | ----------------------------------- |
| Infrastructure       | Uses existing servers         | Uses separate environments          |
| Application Update   | Replaces existing application | Deploys new version separately      |
| Deployment Risk      | Higher risk of disruption     | Lower risk through traffic shifting |
| Additional Resources | Generally not required        | May require additional resources    |
| Best Use Case        | Simple application updates    | Safer production deployments        |

## **9.3 Deployment Traffic Shifting Strategies**

During supported deployments, CodeDeploy can control how user traffic is transferred to a new application version.

### **1. Canary Deployment**

**Canary Deployment** shifts a small percentage of traffic to the new application version before transferring the remaining traffic.

**Example:**
- First 10 minutes - Route **10%** of traffic to V2.
- After 10 minutes - Route the remaining **90%** to V2.

**Purpose:** Test the new application version with limited production traffic before completing the deployment.

### **2. Linear Deployment**

**Linear Deployment** gradually shifts traffic to the new application version in equal increments.

**Example:**
- Every 10 minutes - Shift an additional **10%** of traffic.
- Continue until **100%** of traffic reaches V2.

**Purpose:** Reduce deployment risk by gradually increasing traffic to the new version.

### **3. All-at-Once Deployment**

**All-at-Once Deployment** immediately shifts all traffic to the new application version.
- Routes **100% of traffic** to the new version at once.
- Provides faster deployment.
- Carries a higher risk if the new version contains errors.

### **Traffic Shifting Comparison**

|Strategy|Traffic Shifting|Key Distinction|
|---|---|---|
|**Canary**|Small percentage first, remaining traffic later|Validate with limited users|
|**Linear**|Gradual, equal increments|Progressive traffic migration|
|**All-at-Once**|100% immediately|Fastest traffic transition|

**Key Concept:** Traffic shifting strategies balance **deployment speed and deployment risk**.

## **9.4 CodeDeploy Agent and AppSpec File**

### **AWS CodeDeploy Agent**

The **CodeDeploy Agent** is software installed on target servers to communicate with AWS CodeDeploy and execute deployment instructions.
- Required for deployments to **Amazon EC2 instances and on-premises servers**.
- Executes instructions defined in the deployment configuration.
- Helps automate application installation and lifecycle operations.

### **AppSpec File (**`appspec.yml`**)**

The **Application Specification (AppSpec) file** defines how CodeDeploy should deploy an application.

For EC2 and on-premises deployments, it can specify application files and scripts executed during deployment.

|Deployment Stage|Example Action|
|---|---|
|**Pre-Deployment**|Stop the existing application|
|**Deployment**|Copy application files and binaries to the target location|
|**Post-Deployment**|Clean up temporary files and restart the application|

**Key Concept:** The **CodeDeploy Agent** executes deployment instructions, while the **AppSpec file** defines the deployment configuration and lifecycle actions.

## **9.5 Exam Focus**

- **Automate application deployments - AWS CodeDeploy**
- **Deploy applications to EC2 and on-premises servers - AWS CodeDeploy**
- **Deploy Lambda functions and ECS applications - AWS CodeDeploy**
- **Replace application code on existing servers - In-Place Deployment**
- **Deploy new application version in a separate environment - Blue/Green Deployment**
- **Shift a small percentage of traffic before the remainder - Canary Deployment**
- **Gradually shift traffic in equal increments - Linear Deployment**
- **Shift 100% of traffic immediately - All-at-Once Deployment**
- **Execute deployment instructions on EC2 and on-premises servers - CodeDeploy Agent**
- **Define application deployment instructions - AppSpec File (**`appspec.yml`**)**
- **Build application artifacts - AWS CodeBuild**
- **Deploy application artifacts - AWS CodeDeploy**

**Exam Tip:** Remember the differences between the deployment strategies:
- **In-Place** - Replace the application on existing servers.
- **Blue/Green** - Deploy to a separate environment and redirect traffic.
- **Canary** - Small percentage first, remaining traffic later.
- **Linear** - Shift traffic in equal increments.
- **All-at-Once** - Shift all traffic immediately.

For scenarios emphasizing **safer deployments with reduced downtime**, look for **Blue/Green Deployment**. For **gradual traffic shifting**, distinguish between **Canary** and **Linear** strategies.

# 10 - AWS CodePipeline

## **10.1 AWS CodePipeline**

**AWS CodePipeline** is a fully managed **Continuous Integration and Continuous Delivery (CI/CD)** service that automates the entire software release process.
- Allows users to **set up, visualize, and automate** software release workflows.
- Coordinates different stages of application delivery, including **source, build, test, approval, and deployment**.
- Integrates with both **AWS services and third-party DevOps tools**.
- Supports automated deployments to staging and production environments.

**Key Concept:** AWS CodePipeline acts as the **orchestration service** that connects and automates the different stages of a CI/CD pipeline.

## **10.2 Stages of an AWS CodePipeline Workflow**

A typical CI/CD pipeline contains the following stages:

| Stage        | Purpose                                   | Example AWS Service                 |
| ------------ | ----------------------------------------- | ----------------------------------- |
| **Source**   | Retrieve application source code          | AWS CodeCommit                      |
| **Build**    | Compile code and generate build artifacts | AWS CodeBuild                       |
| **Test**     | Execute automated application tests       | AWS CodeBuild / AWS Device Farm     |
| **Approval** | Require authorization before deployment   | CodePipeline Manual Approval        |
| **Deploy**   | Deploy the application or infrastructure  | AWS CodeDeploy / AWS CloudFormation |

### **Typical CI/CD Workflow**

1. **Source** - Developers commit new code to a repository.
2. **Build** - Source code is compiled into deployable artifacts.
3. **Test** - Automated tests validate the application.
4. **Approval** - Deployment may require manual approval before proceeding.
5. **Deploy** - The application is deployed to staging or production.

**Important:** AWS CodePipeline **orchestrates these stages**, while integrated services perform the actual build, testing, and deployment operations.

## **10.3 Integration with AWS and Third-Party Tools**

AWS CodePipeline is not limited to AWS DevOps services.

It can integrate with **AWS services and supported third-party tools** at different stages of the pipeline.

|Pipeline Stage|AWS Services|Third-Party Tools|
|---|---|---|
|**Source**|AWS CodeCommit|GitHub, GitLab, Bitbucket|
|**Build**|AWS CodeBuild|Jenkins, TeamCity|
|**Test**|AWS CodeBuild, AWS Device Farm|Ghost Inspector, LoadRunner|
|**Deploy**|AWS CodeDeploy, AWS Elastic Beanstalk, Amazon ECS, AWS CloudFormation|Supported external deployment integrations|

### **Key Benefits**

- **Flexibility** - Integrates with different source control, build, testing, and deployment tools.
- **Automation** - Reduces manual intervention in software releases.
- **Integration** - Supports AWS and external DevOps tools.
- **Visibility** - Provides a visual representation of pipeline stages and execution progress.

**Key Concept:** AWS CodePipeline can automate CI/CD workflows without requiring every stage to use an AWS-native service.

## **10.4 AWS Device Farm**

**AWS Device Farm** is a managed application testing service that allows developers to test applications on AWS-hosted physical devices.
- Provides access to different **mobile phones and tablets**.
- Supports testing **Android and iOS applications**.
- Allows developers to remotely test applications on different devices.
- Helps identify compatibility and functionality issues.

**Example:** A developer builds an Android application and uses AWS Device Farm to test it across different mobile devices.

**Key Distinction:**
- **AWS CodeBuild** - Builds applications and runs automated tests.
- **AWS Device Farm** - Tests applications on real mobile devices.
- **AWS CodePipeline** - Orchestrates the testing stage within the CI/CD workflow.

## **10.5 AWS CodePipeline and Infrastructure Deployment**

AWS CodePipeline can automate both **application deployment** and **infrastructure provisioning**.

### **Application Deployment**

- Integrates with **AWS CodeDeploy** to deploy application updates.
- Supports deployment through **AWS Elastic Beanstalk** and **Amazon ECS**.

### **Infrastructure Deployment**

- Integrates with **AWS CloudFormation**.
- Can deploy CloudFormation stacks as part of a CI/CD workflow.
- Enables infrastructure provisioning to be included in automated release pipelines.

**Example:** A pipeline can use a CloudFormation template to provision AWS infrastructure before deploying application code.

### **AWS DevOps Services Comparison**

|Service|Primary Responsibility|Exam Clue|
|---|---|---|
|**AWS CodeCommit**|Source control|Store and version-control code|
|**AWS CodeBuild**|Build and test|Compile code and produce artifacts|
|**AWS CodeDeploy**|Application deployment|Deploy application updates|
|**AWS CodePipeline**|CI/CD orchestration|Automate the entire software release workflow|
|**AWS Device Farm**|Mobile application testing|Test applications on physical mobile devices|
|**AWS CloudFormation**|Infrastructure provisioning|Deploy AWS infrastructure from templates|

## **10.6 Exam Focus**

- **Automate the complete CI/CD workflow - AWS CodePipeline**
- **Set up and visualize software release stages - AWS CodePipeline**
- **Store source code - AWS CodeCommit**
- **Compile code and generate artifacts - AWS CodeBuild**
- **Automate application deployments - AWS CodeDeploy**
- **Test mobile applications on real devices - AWS Device Farm**
- **Require approval before production deployment - CodePipeline Manual Approval**
- **Deploy infrastructure using templates - AWS CloudFormation**
- **Integrate AWS and third-party DevOps tools - AWS CodePipeline**
- **Coordinate source, build, test, approval, and deploy stages - AWS CodePipeline**

**Exam Tip:** The most important distinction is between **orchestration** and **execution**:

- **CodeBuild** - Performs builds and tests.
- **CodeDeploy** - Performs application deployments.
- **CodePipeline** - Coordinates and automates the entire workflow.

If an exam scenario requires **automating the software release process from source code changes through testing and deployment**, choose **AWS CodePipeline**.

# 11 - Application Deployment and Amazon Lightsail

## **11.1 Application Deployment in AWS**

**Application Deployment** focuses on deploying and running applications without requiring developers to manually configure and manage the underlying AWS infrastructure.
- Developers focus on **writing application code and generating build artifacts**.
- AWS services simplify infrastructure-related operations.
- Reduces the need to manually configure servers, networking, and other infrastructure components.

AWS provides two application deployment services discussed in this section:
1. **Amazon Lightsail** - Simplified deployment for small applications and websites.
2. **AWS Elastic Beanstalk** - Application deployment for more complex applications requiring load balancing and automatic scaling.

**Key Concept:** Application deployment services allow developers to focus on **application code rather than infrastructure management**.

## **11.2 Amazon Lightsail**

**Amazon Lightsail** is an AWS service that provides an easy way to deploy and manage **simple applications, websites, and development environments** using preconfigured cloud resources.
- Provides preconfigured environments for popular applications and frameworks.
- Simplifies deployment by combining commonly required infrastructure components.
- Offers **virtual servers, managed databases, and container services**.
- Supports **Linux/Unix and Windows** instances.
- Uses **bundle-based monthly pricing** for predictable infrastructure costs.

Amazon Lightsail is similar to a **Virtual Private Server (VPS)** hosting solution.

**Key Concept:** Amazon Lightsail is designed for **simple application hosting with minimal infrastructure configuration**.

## **11.3 Amazon Lightsail Features and Use Cases**

### **1. Preconfigured Application Environments**

Amazon Lightsail provides ready-to-use environments for popular applications and technology stacks.

|Application / Stack|Description|
|---|---|
|**WordPress**|Popular content management system for websites and blogs|
|**LAMP Stack**|Linux, Apache, MySQL, PHP|
|**MEAN Stack**|MongoDB, Express, Angular, Node.js|
|**Nginx**|Web server commonly used for hosting web applications|

Developers can select a preconfigured environment, upload their application code, and make the necessary configurations.

### **2. Simplified Infrastructure Resources**

Amazon Lightsail provides access to:
- **Virtual Instances** - Cloud servers for hosting applications.
- **Managed Databases** - Database hosting with simplified management.
- **Container Services** - Hosting containerized applications.

### **3. Predictable Monthly Pricing**

Amazon Lightsail offers **predefined resource bundles** with monthly pricing.
- Bundles provide specified **CPU and memory** resources.
- Users can select a bundle based on application requirements.
- Simplifies cost estimation compared with individually configuring multiple AWS services.

**Key Concept:** Amazon Lightsail is associated with **simple cloud hosting and predictable bundle-based pricing**.

### **4. Common Use Cases**

- **Simple websites** and blogs.
- **Small web applications**.
- **WordPress hosting**.
- **Development and testing environments**.
- Applications with relatively simple infrastructure requirements.

### **5. Scalability Considerations**

- Amazon Lightsail provides simplified infrastructure management.
- Supports availability features but does not provide the same automatic scaling capabilities as more advanced AWS application deployment services.
- Applications requiring sophisticated **Auto Scaling** and load balancing may be better suited to **AWS Elastic Beanstalk**.

## **11.4 Amazon Lightsail vs. AWS Elastic Beanstalk**

|Feature|**Amazon Lightsail**|**AWS Elastic Beanstalk**|
|---|---|---|
|Primary Purpose|Simple application and website hosting|Deployment of more complex applications|
|Infrastructure|Simplified, preconfigured resources|Manages application infrastructure|
|Typical Applications|Small websites, WordPress, simple web applications|Multi-tier applications|
|Auto Scaling|No built-in automatic instance scaling|Supports Auto Scaling|
|Load Balancing|Simplified load balancing options|Supports application load balancing|
|Pricing Approach|Bundle-based monthly pricing|Pricing based on underlying AWS resources|
|Best Suited For|Simple, predictable hosting requirements|Applications requiring greater scalability|

### **Key Distinction**

- **Amazon Lightsail** - Best suited for applications requiring **simple deployment, preconfigured resources, and predictable pricing**.
- **AWS Elastic Beanstalk** - Better suited for applications requiring **load balancing, Auto Scaling, and more complex infrastructure management**.

## **11.5 Exam Focus**

- **Simple application and website hosting - Amazon Lightsail**
- **Preconfigured cloud hosting environments - Amazon Lightsail**
- **Virtual Private Server (VPS)-style hosting - Amazon Lightsail**
- **Host WordPress applications - Amazon Lightsail**
- **Deploy LAMP or MEAN applications easily - Amazon Lightsail**
- **Predictable bundle-based monthly pricing - Amazon Lightsail**
- **Simple development and testing environments - Amazon Lightsail**
- **Deploy complex applications with Auto Scaling - AWS Elastic Beanstalk**
- **Automate infrastructure provisioning using templates - AWS CloudFormation**
- **Define infrastructure using programming languages - AWS CDK**

**Exam Tip:** Distinguish the services based on application complexity:

- **Amazon Lightsail** - Simple websites, WordPress hosting, preconfigured environments, predictable pricing.
- **AWS Elastic Beanstalk** - More complex applications requiring managed deployment, load balancing, and Auto Scaling.
- **AWS CloudFormation / AWS CDK** - Infrastructure as Code for provisioning and managing AWS resources.

If an exam scenario emphasizes **quickly launching a small website or application with minimal configuration and predictable monthly pricing**, choose **Amazon Lightsail**.

# 12 - AWS Elastic Beanstalk

## **12.1 AWS Elastic Beanstalk**

**AWS Elastic Beanstalk** is a fully managed **Platform as a Service (PaaS)** that simplifies the deployment, scaling, and monitoring of web applications.
- Allows developers to **deploy application code without manually provisioning and managing the underlying infrastructure**.
- Automatically provisions and configures the AWS resources required to run an application.
- Supports **load balancing, Auto Scaling, application monitoring, and environment management**.
- Provides a developer-friendly way to deploy applications across different programming languages and frameworks.
- Commonly used for **web applications and multi-tier application architectures**.

**Key Concept:** AWS Elastic Beanstalk allows developers to **focus on application code while AWS manages the supporting application infrastructure**.

## **12.2 How AWS Elastic Beanstalk Works**

AWS Elastic Beanstalk automates the application deployment process.

### **Application Deployment Workflow**

1. **Create Application** - Define an application in AWS Elastic Beanstalk.
2. **Upload Application Version** - Upload application code or build artifacts, such as `.jar` or `.war` files.
3. **Launch Environment** - Elastic Beanstalk provisions the required AWS infrastructure.
4. **Deploy Application** - Deploys the application version to the application servers.
5. **Manage Environment** - Monitors application health and manages application updates.

### **Infrastructure Managed by Elastic Beanstalk**

Depending on the application configuration, Elastic Beanstalk can provision and manage resources such as:
- **Amazon EC2** - Application servers.
- **Elastic Load Balancing** - Distributes incoming application traffic.
- **Amazon EC2 Auto Scaling** - Automatically adjusts compute capacity.
- **Amazon VPC** - Networking infrastructure and configurations.
- **Amazon RDS** - Database resources when configured.

**Key Concept:** Elastic Beanstalk simplifies infrastructure provisioning by automatically configuring the AWS resources required for application hosting.

## **12.3 Key Features of AWS Elastic Beanstalk**

### **1. Platform as a Service (PaaS)**

- Developers focus primarily on **writing and deploying application code**.
- AWS manages infrastructure provisioning and supporting platform operations.
- Reduces the need for manual infrastructure management.

### **2. Automatic Scaling and Load Balancing**

- Supports **Auto Scaling** to adjust application capacity based on demand.
- Integrates with **Elastic Load Balancing** to distribute application traffic.
- Helps improve application scalability and availability.

### **3. Application Health Monitoring**

Elastic Beanstalk provides a managed dashboard to monitor and manage application environments.

- View **application and infrastructure health**.
- Monitor the currently deployed application version.
- Review environment configurations.
- Modify environment settings when required.

### **4. Application Version Management**

- Supports deploying updated application versions.
- Allows developers to upload new binaries or application packages.
- Simplifies updating applications without manually configuring individual servers.

### **5. Blue/Green Deployment**

Elastic Beanstalk supports **Blue/Green Deployment** for updating applications.

**Example:**

1. **Blue Environment** - Existing application running Version 1.
2. **Green Environment** - A separate environment is created with Version 2.
3. The new application version is deployed and validated.
4. Production traffic is redirected to the new environment.

**Key Concept:** Blue/Green Deployment reduces deployment risk by deploying a new application version into a **separate environment** before redirecting traffic.

## **12.4 Supported Application Platforms**

AWS Elastic Beanstalk supports multiple programming languages and application platforms.

|Platform|Example|
|---|---|
|**Java**|Java web applications (`.jar` / `.war`)|
|**Python**|Python web applications|
|**PHP**|PHP applications|
|**Go**|Go applications|
|**Docker**|Containerized applications|

Elastic Beanstalk also supports deploying applications using container technologies.

**Key Concept:** AWS Elastic Beanstalk supports **multiple programming languages and application platforms**, making it suitable for different web application workloads.

### **Amazon Lightsail vs. AWS Elastic Beanstalk**

| Feature                | **Amazon Lightsail**                                 | **AWS Elastic Beanstalk**                              |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| Primary Purpose        | Simple application and website hosting               | Managed application deployment                         |
| Application Complexity | Small, simple applications                           | More complex web applications                          |
| Infrastructure         | Preconfigured hosting resources                      | Automatically provisions application infrastructure    |
| Auto Scaling           | No built-in automatic instance scaling               | Supports Auto Scaling                                  |
| Load Balancing         | Simplified load balancing                            | Integrated Elastic Load Balancing                      |
| Typical Use Case       | WordPress, simple websites, development environments | Scalable web applications and multi-tier architectures |

**Key Distinction:**

- **Amazon Lightsail** - Simplified hosting for small applications with predictable resource bundles.
- **AWS Elastic Beanstalk** - Managed application deployment with **Auto Scaling, load balancing, and environment management**.

## **12.5 Exam Focus**

- **Platform as a Service (PaaS) for web applications - AWS Elastic Beanstalk**
- **Deploy applications without manually managing infrastructure - AWS Elastic Beanstalk**
- **Automatically provision application infrastructure - AWS Elastic Beanstalk**
- **Automatically adjust application capacity - Auto Scaling**
- **Distribute application traffic - Elastic Load Balancing**
- **Monitor application health and configurations - Elastic Beanstalk Environment Management**
- **Deploy new application versions in separate environments - Blue/Green Deployment**
- **Support Java, Python, PHP, Go, and Docker applications - AWS Elastic Beanstalk**
- **Simple website hosting with predictable pricing - Amazon Lightsail**
- **Automated infrastructure provisioning using templates - AWS CloudFormation**

**Exam Tip:** Recognize the difference between infrastructure provisioning and managed application deployment:

- **AWS CloudFormation** - Automates AWS infrastructure provisioning using JSON or YAML templates.
- **AWS CDK** - Defines AWS infrastructure using programming languages.
- **Amazon Lightsail** - Simplifies hosting small websites and applications.
- **AWS Elastic Beanstalk** - Deploys and manages scalable web applications while handling underlying infrastructure.

If an exam scenario requires developers to **upload application code and have AWS automatically handle infrastructure provisioning, load balancing, scaling, and monitoring**, choose **AWS Elastic Beanstalk**.

# 13 - \[Exercise] Launch an Application with AWS Elastic Beanstalk

## **13.1 AWS Elastic Beanstalk Applications and Environments**

**AWS Elastic Beanstalk** simplifies application deployment by automatically provisioning and managing the AWS infrastructure required to run an application.

### **Application vs. Environment**

- **Application** - Logical collection of application versions and environments.
- **Environment** - Collection of AWS resources running a specific application version.

A single Elastic Beanstalk application can have **multiple environments**, such as:

- **Development (Dev)** - Used for application development.
- **Testing (Test)** - Used for validating application changes.
- **Production (Prod)** - Used for hosting the live application.

Each environment can have its own **configuration, infrastructure, and DNS endpoint**.

**Key Concept:** A single Elastic Beanstalk application can support **multiple independent deployment environments**.

## **13.2 Application Deployment with AWS Elastic Beanstalk**

Elastic Beanstalk automatically provisions the infrastructure required to host an application.

### **Application Deployment Options**

|Configuration|Purpose|
|---|---|
|**Platform**|Select application runtime, such as Python|
|**Application Version**|Deploy a sample application or upload custom application code|
|**Single Instance**|Run the application using a single EC2 instance|
|**High Availability**|Deploy multiple instances across Availability Zones|
|**IAM Service Role**|Allows Elastic Beanstalk to manage AWS resources|
|**DNS Endpoint**|Provides a URL to access the deployed application|

### **Single Instance vs. High Availability**

**Single Instance Environment**
- Uses a single EC2 instance.
- Suitable for simple applications and development environments.

**High Availability Environment**
- Uses multiple EC2 instances across **multiple Availability Zones**.
- Supports **load balancing and Auto Scaling**.
- Suitable for applications requiring higher availability.

**Key Concept:** Elastic Beanstalk supports both **simple single-instance deployments** and **high-availability environments**.

## **13.3 Elastic Beanstalk Environment Management**

AWS Elastic Beanstalk provides several features for managing deployed applications.

### **1. Application Version Updates**

- Developers can upload a new version of their application.
- Elastic Beanstalk deploys the updated application to the environment.
- Eliminates the need to manually update individual application servers.

### **2. Environment Cloning**

**Environment Cloning** allows users to create a new environment based on an existing environment's configuration.

- Useful for creating similar development, testing, or production environments.
- Reduces repetitive environment configuration.

### **3. Blue/Green Deployment**

Elastic Beanstalk supports **Blue/Green Deployment** through environment URL swapping.

**Example:**
1. **Blue Environment** - Runs the existing production application.
2. **Green Environment** - Runs the updated application version.
3. Test the new version in the green environment.
4. **Swap environment URLs (CNAMEs)** to redirect production traffic to the new environment.

**Key Concept:** Blue/Green Deployment enables application updates by **switching production traffic between separate environments**.

### **4. Monitoring and Health Checks**

Elastic Beanstalk provides monitoring capabilities for application environments.
- **Environment Health** - Displays the health status of the application environment.
- **CPU Utilization** - Monitors compute resource usage.
- **Application Metrics** - Provides visibility into application and infrastructure performance.

### **5. Environment Configuration**

- Allows modification of environment settings.
- Configuration changes can be applied to the existing environment.
- Simplifies infrastructure management without manually configuring every AWS resource.

## **13.4 Environment Termination and Costs**

Elastic Beanstalk environments use underlying AWS resources, such as **Amazon EC2 instances**.
- Users incur charges for the AWS resources provisioned by Elastic Beanstalk.
- Running environments may continue generating costs even when applications are not being actively used.
- **Terminating an environment** deletes its managed resources, subject to resource retention settings.

**Key Concept:** Terminate unused Elastic Beanstalk environments to **avoid unnecessary infrastructure costs**.

## **13.5 Exam Focus**

- **Deploy applications without manually provisioning infrastructure - AWS Elastic Beanstalk**
- **Logical collection of application versions and environments - Elastic Beanstalk Application**
- **AWS resources running an application version - Elastic Beanstalk Environment**
- **Multiple Dev, Test, and Prod environments - AWS Elastic Beanstalk**
- **Deploy an application using a single EC2 instance - Single Instance Environment**
- **Deploy across multiple Availability Zones - High Availability Environment**
- **Allow Elastic Beanstalk to manage AWS resources - IAM Service Role**
- **Create an environment from an existing configuration - Environment Cloning**
- **Switch production traffic between environments - Blue/Green Deployment (CNAME Swap)**
- **Monitor application health and CPU utilization - Elastic Beanstalk Monitoring**
- **Avoid charges from unused environments - Environment Termination**

**Exam Tip:** If a scenario requires developers to **deploy application code while AWS automatically provisions infrastructure, manages application environments, supports scaling, and provides monitoring**, choose **AWS Elastic Beanstalk**.

Remember these important distinctions:
- **Application** - Logical container for application versions and environments.
- **Environment** - AWS infrastructure running a particular application version.
- **Environment Cloning** - Creates another environment using an existing configuration.
- **Blue/Green Deployment** - Switches application traffic between environments using a **CNAME swap**.

# 14 - Section Summary

## **14.1 AWS Infrastructure, DevOps, and Application Deployment Services**

AWS provides three categories of services for **infrastructure provisioning, CI/CD automation, and application deployment**.

### **1. Infrastructure Deployment**

Used to **automate the provisioning and management of AWS infrastructure**.

|AWS Service|Primary Purpose|Exam Clue|
|---|---|---|
|**AWS CloudFormation**|Provision AWS resources using JSON or YAML templates|Infrastructure as Code (IaC), stacks|
|**AWS CDK**|Define infrastructure using programming languages|Programmatically generate CloudFormation templates|

**Key Distinction:**

- **CloudFormation** - Define infrastructure directly using templates.
- **AWS CDK** - Write infrastructure code that generates CloudFormation templates.

### **2. DevOps - CI/CD Services**

Used to **automate the building, testing, and deployment of application changes**.

| AWS Service          | Primary Purpose                                 | Exam Clue                        |
| -------------------- | ----------------------------------------------- | -------------------------------- |
| **AWS CodeCommit**   | Store and version-control source code           | Managed Git repositories         |
| **AWS CodeBuild**    | Compile code, run tests, and generate artifacts | Build automation                 |
| **AWS CodeDeploy**   | Deploy application updates                      | Automated application deployment |
| **AWS CodePipeline** | Orchestrate the complete CI/CD workflow         | End-to-end release automation    |

**CI/CD Workflow:**

**CodeCommit - CodeBuild - CodeDeploy**

**AWS CodePipeline** coordinates and automates these stages.

### **3. Application Deployment**

Used to **deploy applications without manually managing the underlying infrastructure**.

| AWS Service               | Primary Purpose                                 | Exam Clue                                          |
| ------------------------- | ----------------------------------------------- | -------------------------------------------------- |
| **Amazon Lightsail**      | Simple application and website hosting          | WordPress, small applications, predictable pricing |
| **AWS Elastic Beanstalk** | Managed deployment of scalable web applications | PaaS, load balancing, Auto Scaling                 |

**Key Distinction:**

- **Amazon Lightsail** - Simple applications, websites, and development/testing environments.
- **AWS Elastic Beanstalk** - More complex web applications requiring managed infrastructure and scalability.

## **14.2 Infrastructure Deployment vs. Application Deployment vs. CI/CD**

| Category                      | Main Focus                                                    | Key AWS Services                                |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| **Infrastructure Deployment** | Provision and manage AWS resources                            | CloudFormation, CDK                             |
| **DevOps (CI/CD)**            | Continuously build, test, and deploy application changes      | CodeCommit, CodeBuild, CodeDeploy, CodePipeline |
| **Application Deployment**    | Deploy applications with simplified infrastructure management | Lightsail, Elastic Beanstalk                    |

### **Important Distinctions**

- **Infrastructure Deployment** - May happen initially or when infrastructure changes are required.
- **Application Deployment** - Deploys application code into the target environment.
- **CI/CD** - Continuously automates software updates and releases.

These services can be **combined based on application requirements**.

**Example:** AWS CodePipeline can automate building an application with CodeBuild and deploying it using CodeDeploy or Elastic Beanstalk.

## **14.3 Exam Focus**

- **Automate infrastructure provisioning using JSON/YAML - AWS CloudFormation**
- **Define infrastructure using programming languages - AWS CDK**
- **Store source code in Git repositories - AWS CodeCommit**
- **Compile, test, and package application code - AWS CodeBuild**
- **Automate application deployments - AWS CodeDeploy**
- **Orchestrate the entire CI/CD workflow - AWS CodePipeline**
- **Simple websites and predictable monthly pricing - Amazon Lightsail**
- **Deploy scalable web applications with minimal infrastructure management - AWS Elastic Beanstalk**

**Exam Tip:** Identify the requirement before selecting the AWS service:
- **Provision Infrastructure - CloudFormation / CDK**
- **Store Code - CodeCommit**
- **Build Code - CodeBuild**
- **Deploy Code - CodeDeploy**
- **Automate CI/CD - CodePipeline**
- **Host Simple Applications - Lightsail**
- **Deploy Scalable Web Applications - Elastic Beanstalk**

# 15 - Quiz

## **15.1 Practice Question 1**

### **Original Question**

Your development team wants to integrate source control, build, and deployment in a single automated workflow. Which AWS service should you use to orchestrate these steps?

### **Choices**

A. AWS CodeDeploy  
B. AWS CodeBuild  
C. AWS CodePipeline  
D. AWS CloudFormation

### **Correct Answer**

**C. AWS CodePipeline**

### **Why?**

**AWS CodePipeline** is a fully managed **CI/CD orchestration service** that automates the entire software release workflow.
- **AWS CodePipeline** - Coordinates source control, build, testing, and deployment.
- **AWS CodeBuild** - Compiles source code, runs tests, and generates build artifacts.
- **AWS CodeDeploy** - Automates application deployments.
- **AWS CloudFormation** - Automates infrastructure provisioning.

**Key Clue:** The question mentions **integrating multiple development stages into a single automated workflow**.

## **15.2 Practice Question 2**

### **Original Question**

Your startup wants an affordable way to host static websites with predictable costs and minimal management. Which service should you choose?

### **Choices**

A. AWS Elastic Beanstalk  
B. AWS Lightsail  
C. AWS CloudFormation  
D. Amazon EC2

### **Correct Answer**

**B. AWS Lightsail (Amazon Lightsail)**

### **Why?**

**Amazon Lightsail** provides simplified cloud hosting with **predictable bundle-based monthly pricing**.
- Suitable for **simple websites and small applications**.
- Provides preconfigured hosting environments.
- Requires minimal infrastructure management.
- Offers predictable pricing based on selected resource bundles.

**Why not the others?**

- **Elastic Beanstalk** - Better suited for managed deployment of scalable web applications.
- **CloudFormation** - Used for infrastructure provisioning, not simplified website hosting.
- **Amazon EC2** - Provides virtual servers but requires more manual configuration and management.

**Key Clue:** **Affordable hosting + predictable costs + minimal management.**

## **15.3 Practice Question 3**

### **Original Question**

You want to implement a blue/green deployment strategy to reduce downtime for your web application. Which AWS service should you use?

### **Choices**

A. AWS Lightsail  
B. AWS CodePipeline  
C. AWS CodeDeploy  
D. AWS CloudFormation

### **Correct Answer**

**C. AWS CodeDeploy**

### **Why?**

**AWS CodeDeploy** supports **Blue/Green Deployment**, which allows application updates to be deployed into a separate environment before redirecting production traffic.
- **Blue Environment** - Existing application version.
- **Green Environment** - New application version.
- Production traffic is shifted to the new environment after deployment.

This approach helps reduce **application downtime and deployment risk**.

**Why not CodePipeline?**

- **CodePipeline** orchestrates the CI/CD workflow.
- **CodeDeploy** performs the actual application deployment using supported strategies.

**Key Clue:** **Blue/Green Deployment + reduced downtime.**

## **15.4 Practice Question 4**

### **Original Question**

Your team wants to store code in a Git-based repository and integrate it into a CI/CD pipeline. Which combination of services would you use?

### **Choices**

A. AWS CodeCommit and AWS CodePipeline  
B. AWS CloudFormation and AWS CodeBuild  
C. Amazon S3 and AWS CodeDeploy  
D. AWS CDK and AWS Elastic Beanstalk

### **Correct Answer**

**A. AWS CodeCommit and AWS CodePipeline**

### **Why?**

These two AWS services address different stages of the software release process.
- **AWS CodeCommit** - Provides managed private **Git repositories** for source code storage and version control.
- **AWS CodePipeline** - Integrates the source repository into an automated CI/CD workflow.

**Key Distinction:**

- **CodeCommit - Store and version-control code.**
- **CodePipeline - Automate the software release workflow.**

**Key Clue:** **Git-based repository + CI/CD integration.**

## **15.5 Practice Question 5**

### **Original Question**

You need a flexible, customizable approach to define and deploy cloud infrastructure using your preferred programming language. Which AWS service should you choose?

### **Choices**

A. AWS Elastic Beanstalk  
B. AWS CloudFormation  
C. AWS CDK  
D. Amazon Lightsail

### **Correct Answer**

**C. AWS CDK**

### **Why?**

**AWS Cloud Development Kit (AWS CDK)** allows developers to define AWS infrastructure using familiar programming languages, such as Python, JavaScript, and Java.
- Supports **Infrastructure as Code (IaC)**.
- Enables reusable infrastructure components.
- Generates **AWS CloudFormation templates**.
- Uses CloudFormation to provision AWS resources.

**Why not CloudFormation?**

- **CloudFormation** defines infrastructure directly using JSON or YAML templates.
- **AWS CDK** defines infrastructure using programming languages.

**Key Clue:** **Define infrastructure using a preferred programming language.**

## **15.6 Practice Question 6**

### **Original Question**

Your startup needs a cost-effective, easy-to-use platform for hosting a WordPress site. Which AWS service should you use?

### **Choices**

A. Amazon EC2  
B. Amazon Lightsail  
C. AWS Elastic Beanstalk  
D. AWS CloudFormation

### **Correct Answer**

**B. Amazon Lightsail**

### **Why?**

**Amazon Lightsail** provides preconfigured hosting solutions for popular applications such as **WordPress**.
- Simplifies website deployment.
- Provides ready-to-use application environments.
- Offers predictable monthly pricing.
- Requires minimal infrastructure configuration.

**Why not the others?**

- **Amazon EC2** - Requires more manual server management.
- **Elastic Beanstalk** - Designed for managed application deployment with scaling and environment management.
- **CloudFormation** - Automates infrastructure provisioning using templates.

**Key Clue:** **WordPress + simple hosting + cost-effective.**

## **15.7 Practice Question 7**

### **Original Question**

Your organization wants a secure way to manage software packages such as Maven, npm, and Python artifacts. Which AWS service is most appropriate?

### **Choices**

A. AWS CodeArtifact  
B. Amazon S3  
C. AWS CodeBuild  
D. AWS CodePipeline

### **Correct Answer**

**A. AWS CodeArtifact**

### **Why?**

**AWS CodeArtifact** is a fully managed **software artifact repository service** that securely stores and manages software packages and dependencies.
- Supports package managers such as **Maven, npm, and pip (Python)**.
- Allows development teams to store and share software packages.
- Provides centralized package and dependency management.
- Integrates with development and CI/CD workflows.

**Why not the others?**

- **Amazon S3** - General-purpose object storage, not a dedicated package repository.
- **AWS CodeBuild** - Compiles, tests, and generates application artifacts.
- **AWS CodePipeline** - Orchestrates CI/CD workflows.

### **Important Distinction: CodeArtifact vs. CodeBuild**

|Service|Purpose|Exam Clue|
|---|---|---|
|**AWS CodeArtifact**|Store and manage software packages and dependencies|Maven, npm, Python packages|
|**AWS CodeBuild**|Compile, test, and package application code|Build automation, deployable artifacts|

**Key Clue:** **Secure software package management + Maven/npm/Python dependencies.**

## **15.8 Practice Question 8**

### **Original Question**

Your team needs a service to compile, test, and package code into deployable artifacts. Which AWS service should you choose?

### **Choices**

A. AWS CodePipeline  
B. AWS CodeDeploy  
C. AWS CodeBuild  
D. CodeArtifact

### **Correct Answer**

**C. AWS CodeBuild**

### **Why?**

**AWS CodeBuild** is a fully managed build service responsible for:
- **Compiling** source code.
- **Running automated tests**.
- **Packaging** applications.
- **Generating deployable artifacts**, such as `.jar` and `.war` files.

**Key Distinction:**

- **CodeBuild** - Creates deployable artifacts.
- **CodeArtifact** - Stores and manages software packages.
- **CodeDeploy** - Deploys application updates.
- **CodePipeline** - Orchestrates the complete workflow.

**Key Clue:** **Compile + test + package code.**

## **15.9 Practice Question 9**

### **Original Question**

You need to deploy a web application and manage its scaling, monitoring, and updates without extensive operational overhead. Which AWS service is the best fit?

### **Choices**

A. AWS CloudFormation  
B. AWS Elastic Beanstalk  
C. AWS CDK  
D. CodeDeploy

### **Correct Answer**

**B. AWS Elastic Beanstalk**

### **Why?**

**AWS Elastic Beanstalk** is a managed **Platform as a Service (PaaS)** that simplifies application deployment and infrastructure management.
- Automatically provisions application infrastructure.
- Supports **Auto Scaling**.
- Integrates with **Elastic Load Balancing**.
- Provides **application health monitoring**.
- Simplifies application version updates.

**Why not the others?**

- **CloudFormation** - Automates infrastructure provisioning.
- **AWS CDK** - Defines infrastructure using programming languages.
- **CodeDeploy** - Automates application deployments but does not provide the same complete application environment management.

**Key Clue:** **Deploy web applications + scaling + monitoring + minimal operational management.**

## **15.10 Practice Question 10**

### **Original Question**

Your team wants to automate the creation of a highly available architecture for your application, including EC2 instances, a load balancer, and an RDS database. Which service should you use to define the infrastructure as code?

### **Choices**

A. AWS Elastic Beanstalk  
B. AWS CDK  
C. AWS CloudFormation  
D. Amazon Lightsail

### **Correct Answer**

**C. AWS CloudFormation**

### **Why?**

**AWS CloudFormation** automates the provisioning and management of AWS infrastructure through **JSON or YAML templates**.
- Defines multiple AWS resources in a single template.
- Automatically manages resource dependencies.
- Deploys AWS resources together as a **CloudFormation Stack**.
- Supports consistent, repeatable infrastructure deployments.

**Important Distinction:**

- **AWS CloudFormation** - Defines infrastructure directly using JSON or YAML templates.
- **AWS CDK** - Defines infrastructure programmatically and generates CloudFormation templates.
- **Elastic Beanstalk** - Simplifies application deployment and manages supporting infrastructure.
- **Lightsail** - Simplified hosting for small applications.

**Key Clue:** **Automate provisioning of multiple AWS resources as Infrastructure as Code.**

**Note:** AWS CDK is also a valid Infrastructure as Code solution. The expected answer is **CloudFormation**, but this question would be clearer if it specifically mentioned JSON or YAML templates.

## **15.11 Exam Focus**

### **DevOps and CI/CD Services**

|Exam Scenario|AWS Service|
|---|---|
|Store and version-control source code|**AWS CodeCommit**|
|Compile code, run tests, generate artifacts|**AWS CodeBuild**|
|Automate application deployments|**AWS CodeDeploy**|
|Orchestrate the entire CI/CD workflow|**AWS CodePipeline**|
|Manage Maven, npm, and Python packages|**AWS CodeArtifact**|

### **Infrastructure and Application Deployment**

|Exam Scenario|AWS Service|
|---|---|
|Provision infrastructure using JSON/YAML|**AWS CloudFormation**|
|Define infrastructure using programming languages|**AWS CDK**|
|Host simple websites or WordPress|**Amazon Lightsail**|
|Deploy scalable web applications with minimal operational management|**AWS Elastic Beanstalk**|
|Perform Blue/Green application deployments|**AWS CodeDeploy**|

### **Key Exam Distinctions**

- **CodeBuild vs. CodeArtifact** - CodeBuild creates build artifacts; CodeArtifact manages software packages and dependencies.
- **CodeDeploy vs. CodePipeline** - CodeDeploy performs deployments; CodePipeline orchestrates the release process.
- **CloudFormation vs. CDK** - CloudFormation uses JSON/YAML templates; CDK uses programming languages to generate CloudFormation templates.
- **Lightsail vs. Elastic Beanstalk** - Lightsail simplifies small website hosting; Elastic Beanstalk manages scalable web application environments.

**Exam Tip:** For CLF-C02 questions, focus on recognizing the **primary purpose of each AWS service**. Most questions in this quiz can be answered by identifying the action requested: **store, build, package, deploy, orchestrate, provision, or host**.