# 1 - AWS Support Overview

## **1.1 AWS Support Overview**

**AWS Support** helps customers resolve issues and operate their AWS environments effectively.

Common use cases include:
- Troubleshooting AWS service errors and technical issues.
- Resolving resource limitations and requesting quota increases.
- Planning for large resource capacity requirements.
- Obtaining professional assistance to mitigate security attacks.

AWS offers different support plans to accommodate customers with varying business sizes, technical experience, and operational requirements.

All AWS customers receive **24/7 access to customer service** and self-help resources, including AWS documentation, technical whitepapers, and support forums.

## **1.2 AWS Support Plans**

The five AWS Support plans covered in this lesson, in order of increasing support levels, are:

| Support Plan           |
| ---------------------- |
| **Basic**              |
| **Developer**          |
| **Business**           |
| **Enterprise On-Ramp** |
| **Enterprise**         |

Higher-level support plans provide access to additional support resources, services, and capabilities.

**Customer service** available to all customers should not be confused with technical support, which depends on the selected support plan.

## **1.3 AWS Trusted Advisor**

**AWS Trusted Advisor** evaluates an AWS environment by performing checks and providing recommendations based on AWS best practices.

These checks are aligned with the **AWS Well-Architected Framework**.

The number and types of checks available depend on the customer's AWS Support plan.

Trusted Advisor provides recommendations, which customers can act upon to improve their AWS environments.

## **1.4 AWS Service Quotas**

**AWS Service Quotas** are limits applied to AWS resources and service usage within an AWS account.

Service quotas act as a safety mechanism by preventing excessive or accidental resource provisioning, such as an automation process unintentionally launching thousands of Amazon EC2 instances.

This helps reduce the **blast radius** of operational mistakes.

Customers can request **quota increases** for adjustable quotas when they anticipate requiring additional resources beyond their existing limits.

## **1.5 Exam Focus**

| Exam Scenario                                       | Answer                    |
| --------------------------------------------------- | ------------------------- |
| Obtain professional assistance with AWS issues      | **AWS Support**           |
| Receive recommendations based on AWS best practices | **AWS Trusted Advisor**   |
| View resource and service usage limits              | **AWS Service Quotas**    |
| Request an increase in resource limits              | **AWS Service Quotas**    |
| Determine available Trusted Advisor checks          | **AWS Support plan**      |
| Access customer service 24/7                        | **All AWS Support plans** |

**Remember:** Trusted Advisor provides recommendations, while Service Quotas manages service usage limits.

# 2 - AWS Support Plans

## **2.1 AWS Support Plans**

AWS provides different support plans based on customer requirements, workload criticality, and the level of technical assistance needed.

Higher-tier support plans offer additional benefits, including:
- Faster technical support response times.
- Additional communication channels.
- More comprehensive **AWS Trusted Advisor** checks.
- Access to a **Technical Account Manager (TAM)**.

## **2.2 Types of AWS Support Plans**

### **Basic Support**

- **Free** and enabled by default for all AWS accounts.
- 24/7 access to customer service.
- Access to AWS documentation, whitepapers, and support forums.
- Account, billing, and service quota increase assistance.
- Access to core Trusted Advisor security and service quota checks.
- Access to **AWS Health Dashboard**, including personalized account health information.
- **No technical support cases.** 

### **Developer Support**

- Minimum **$29/month**.
- Includes all Basic Support benefits.
- Ability to create **technical support cases**.
- Web-based technical support.
- Recommended for **development, experimentation, and testing environments**.

### **Business Support**

- Includes lower-tier support benefits.
- **24/7 technical support**.
- Access to technical support through additional channels, including phone calls.
- Faster response times than Developer Support.
- Access to the **full set of AWS Trusted Advisor checks**.
- Recommended for customers running **production workloads** on AWS.

### **Enterprise On-Ramp Support**

- Minimum **$5,500/month**.
- Recommended for enterprises running **business-critical workloads**.
- Faster technical support response times.
- Access to a **pool of Technical Account Managers (TAMs)**.

### **Enterprise Support**

- Minimum **$15,000/month**.
- Recommended for large enterprises running **mission-critical workloads**.
- Technical support response time as fast as **15 minutes** for critical cases.
- Access to a **dedicated Technical Account Manager (TAM)**.

## **2.3 Technical Account Manager (TAM)**

A **Technical Account Manager (TAM)** provides technical guidance and acts as a point of contact between the customer and AWS.

Common responsibilities include:
- Providing guidance during production issues.
- Assisting with planning for major application launches.
- Coordinating anticipated large-scale capacity requirements.
- Coordinating with internal AWS teams to resolve customer issues.

|Support Plan|TAM Access|
|---|---|
|Basic|No|
|Developer|No|
|Business|No|
|Enterprise On-Ramp|**Pool of TAMs**|
|Enterprise|**Dedicated TAM**|

## **2.4 AWS Support Pricing**

**Basic Support** is free, while other support plans have a minimum monthly fee.

Paid support plans use **tiered pricing** based on monthly AWS charges.

The support fee is generally the higher of:
- The minimum monthly support fee.
- The applicable percentage-based fee calculated from monthly AWS charges.

Therefore, support costs can increase as AWS usage increases.

## **2.5 AWS Support Plans Comparison**

| Feature                 | Basic         | Developer               | Business   | Enterprise On-Ramp | Enterprise       |
| ----------------------- | ------------- | ----------------------- | ---------- | ------------------ | ---------------- |
| Recommended use         | General usage | Development and testing | Production | Business-critical  | Mission-critical |
| Technical support       | No            | Yes                     | Yes        | Yes                | Yes              |
| 24/7 technical support  | No            | No                      | Yes        | Yes                | Yes              |
| Phone technical support | No            | No                      | Yes        | Yes                | Yes              |
| Trusted Advisor checks  | Core          | Core                    | Full       | Full               | Full             |
| TAM                     | No            | No                      | No         | Pool               | Dedicated        |

### **Important Distinction**

**Customer service vs Technical support**

- **Customer service** - Available 24/7 to all AWS customers for non-technical issues such as account and billing inquiries.
- **Technical support** - Requires a paid support plan, starting with Developer Support.

## **2.6 Exam Focus**

| Exam Scenario                                   | Answer                 |
| ----------------------------------------------- | ---------------------- |
| Free support plan enabled by default            | **Basic**              |
| Account and billing assistance                  | **All support plans**  |
| Development, testing, and experimentation       | **Developer**          |
| Minimum plan for technical support              | **Developer**          |
| Minimum plan for 24/7 technical support         | **Business**           |
| Minimum plan for phone technical support        | **Business**           |
| Minimum plan for full Trusted Advisor checks    | **Business**           |
| Running production workloads                    | **Business**           |
| Business-critical workloads with a pool of TAMs | **Enterprise On-Ramp** |
| Mission-critical workloads with a dedicated TAM | **Enterprise**         |
| Critical issue response time of 15 minutes      | **Enterprise**         |

**Remember:**

- **Basic - Free**
- **Developer - Development and testing**
- **Business - Production workloads**
- **Enterprise On-Ramp - Pool of TAMs**
- **Enterprise - Dedicated TAM**

# 3 - AWS Trusted Advisor

## **3.1 AWS Trusted Advisor Overview**

**AWS Trusted Advisor** is a service under AWS Support that evaluates an AWS environment and provides recommendations based on **AWS best practices**.

It helps customers:
- Reduce unnecessary AWS costs.
- Improve application performance.
- Identify security vulnerabilities and misconfigurations.
- Improve workload availability and fault tolerance.
- Monitor service quota usage.
- Improve operational practices.

Trusted Advisor is a **global service** that evaluates resources across AWS Regions.

The checks available depend on the customer's **AWS Support plan**.

## **3.2 AWS Trusted Advisor Check Categories**

Trusted Advisor performs checks across six categories aligned with AWS best practices and the **AWS Well-Architected Framework**.

| Category                   | Purpose                                                        |
| -------------------------- | -------------------------------------------------------------- |
| **Cost Optimization**      | Identify opportunities to reduce unnecessary costs.            |
| **Performance**            | Improve application speed and responsiveness.                  |
| **Security**               | Identify security risks and misconfigurations.                 |
| **Fault Tolerance**        | Improve workload availability and resilience against failures. |
| **Service Limits**         | Identify resources approaching service quotas.                 |
| **Operational Excellence** | Improve workload management and operational practices.         |

### **Cost Optimization**

Identifies opportunities to reduce AWS spending by detecting unnecessary or inefficient resource usage.

Examples:
- Idle or underutilized resources.
- Overprovisioned resources.
- Unused NAT Gateways.
- Inactive resources that continue to incur charges.

**Exam clue: Identify unused resources and reduce AWS spending - Cost Optimization.**

### **Performance**

Identifies opportunities to improve application speed, capacity, and responsiveness.

Examples:
- Highly utilized Amazon EC2 instances.
- Highly utilized Amazon RDS databases.
- Amazon EBS volumes approaching throughput limits.
- AWS Lambda functions approaching concurrency limits.

**Exam clue: Identify performance bottlenecks - Performance.**

### **Security**

Identifies potential security vulnerabilities and configurations that do not follow AWS security best practices.

Examples:
- Security groups with unrestricted access.
- Amazon S3 buckets with public access.
- Amazon EFS or Amazon RDS resources without encryption enabled.
- AWS CloudTrail logging not enabled.
- Unused or unrotated IAM access keys.
- Expiring or expired AWS Certificate Manager (ACM) certificates.

**Exam clue: Identify security risks and misconfigurations - Security.**

### **Fault Tolerance**

Identifies opportunities to improve application resilience and maintain availability during infrastructure failures.

Examples:
- Missing **Multi-AZ deployments**.
- Missing backups and automated snapshots.
- Missing detailed resource monitoring.
- Missing Amazon Route 53 health checks.

Multi-AZ deployments help applications remain available when an **Availability Zone (AZ)** experiences a failure.

**Exam clue: Improve resilience against infrastructure failures - Fault Tolerance.**

### **Service Limits**

Monitors AWS resource usage against existing **service quotas** and identifies resources approaching their limits.

| Alert  | Quota Usage |
| ------ | ----------- |
| Green  | Below 80%   |
| Yellow | 80% or more |
| Red    | 100%        |

These alerts help customers proactively request quota increases before resource provisioning is affected.

**Exam clue: Identify resources approaching AWS service quotas - Service Limits.**

### **Operational Excellence**

Identifies opportunities to improve the management, monitoring, and operation of AWS workloads.

Examples:
- Missing Amazon S3 access logs.
- Missing Amazon API Gateway logs.
- Missing VPC Flow Logs.
- Missing Elastic Load Balancing access logs.
- EC2 instances not managed by AWS Systems Manager.
- Deletion protection not enabled for databases or load balancers.
- Outdated software, platform, or database engine versions.

**Exam clue: Improve logging, resource management, and operational practices - Operational Excellence.**

## **3.3 Hard Limits vs Soft Limits**

AWS applies limits to resource provisioning and service usage.

| Feature                | Soft Limit                       | Hard Limit                            |
| ---------------------- | -------------------------------- | ------------------------------------- |
| Adjustable             | Yes                              | No                                    |
| Quota increase request | Supported                        | Not supported                         |
| Example                | Number of S3 buckets per account | Maximum lifecycle rules per S3 bucket |

- **Soft limits** - Adjustable service quotas that customers can request to increase.
- **Hard limits** - Fixed service limitations that cannot be increased.

AWS Trusted Advisor helps customers identify when their resource usage is approaching existing limits.

## **3.4 AWS Trusted Advisor and Support Plans**

The number and types of Trusted Advisor checks available depend on the AWS Support plan.

| Support Plan       | Trusted Advisor Access |
| ------------------ | ---------------------- |
| Basic              | Limited checks         |
| Developer          | Limited checks         |
| Business           | Full set of checks     |
| Enterprise On-Ramp | Full set of checks     |
| Enterprise         | Full set of checks     |

Basic and Developer Support provide access to core security and service limit checks.

**Business Support** is the minimum support plan covered in the course that provides access to the full set of Trusted Advisor checks.

## **3.5 AWS Trusted Advisor vs AWS Service Quotas**

| Service                 | Main Purpose                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **AWS Trusted Advisor** | Evaluate AWS environments and recommend improvements, including identifying resources approaching service quotas. |
| **AWS Service Quotas**  | View and manage service quotas and request adjustable quota increases.                                            |

**Trusted Advisor identifies potential problems; Service Quotas helps manage resource limits.**

## **3.6 Exam Focus**

| Exam Scenario                                              | Answer                     |
| ---------------------------------------------------------- | -------------------------- |
| Receive recommendations based on AWS best practices        | **AWS Trusted Advisor**    |
| Identify idle or underutilized resources                   | **Cost Optimization**      |
| Identify highly utilized EC2 instances                     | **Performance**            |
| Identify unrestricted security groups or public S3 buckets | **Security**               |
| Recommend Multi-AZ deployments and backups                 | **Fault Tolerance**        |
| Identify resources approaching quotas                      | **Service Limits**         |
| Recommend access logging and deletion protection           | **Operational Excellence** |
| Request a quota increase                                   | **AWS Service Quotas**     |
| Minimum support plan for full Trusted Advisor checks       | **Business Support**       |

**Remember the six Trusted Advisor categories:**

- Cost Optimization
- Performance
- Security
- Fault Tolerance
- Service Limits
- Operational Excellence

**AWS Trusted Advisor - Checks and recommendations, not automatic remediation.**

# 4 - AWS Service Quotas

## **4.1 AWS Service Quotas Overview**

**AWS Service Quotas** are limits applied to AWS accounts that determine how many resources customers can provision or how much of a particular AWS service they can consume.

Service quotas were previously referred to as **service limits**. Both terms are used interchangeably in AWS.

Service quotas help:
- Prevent accidental overprovisioning of resources. 
- Reduce the impact of unauthorized resource provisioning.
- Limit unexpected AWS costs.
- Reduce the **blast radius** of operational mistakes and compromised credentials.

Service quotas act as a safety mechanism but do not replace security controls.

## **4.2 Managing AWS Service Quotas**

AWS provides a dedicated **Service Quotas** dashboard that allows customers to:
- View AWS service quotas.
- Check currently applied quota values.
- Request increases for adjustable quotas.
- Manage quotas across AWS services.

Quota values may differ between AWS accounts.

### **Requesting Quota Increases**

Customers can request quota increases through the **Service Quotas dashboard** or **AWS Support Center**.

Remember:
- **Soft limits** can be increased.
- **Hard limits** cannot be increased.
- Quota increase requests are not necessarily approved immediately.
- AWS may require additional justification before approving a request.

Organizations planning large-scale application deployments should review and request necessary quota increases **in advance**.

## **4.3 Regional Service Quotas**

Many AWS service quotas are **Region-specific**.

A quota increase in one AWS Region does not automatically increase the corresponding quota in another Region.

For example, if an organization plans to launch a large number of Amazon EC2 instances in the Singapore Region, it must ensure that sufficient quotas are available in that Region.

## **4.4 Service Quota Monitoring**

**AWS Trusted Advisor** monitors resource usage against existing service quotas and identifies resources approaching their limits.

**Amazon CloudWatch** can be used to monitor quota usage and provide alerts.

| AWS Service             | Purpose                                                                    |
| ----------------------- | -------------------------------------------------------------------------- |
| **AWS Service Quotas**  | View and manage quotas and request quota increases.                        |
| **AWS Trusted Advisor** | Identify resources approaching service quotas and provide recommendations. |
| **Amazon CloudWatch**   | Monitor quota usage and generate alarms.                                   |
| **AWS Support**         | Assist with quota increase requests.                                       |

## **4.5 Exam Focus**

- **View and manage AWS resource limits - AWS Service Quotas**
- **Request an adjustable quota increase - AWS Service Quotas**
- **Identify resources approaching service limits - AWS Trusted Advisor**
- **Monitor quota usage and configure alarms - Amazon CloudWatch**
- **Soft limits - Adjustable**
- **Hard limits - Non-adjustable**
- **Regional quotas - Managed separately for each Region**

**Exam scenario:** A company plans to launch a large number of EC2 instances for an upcoming application rollout. It should review its service quotas and request necessary increases in the target AWS Region before deployment.

# 5 - Section Summary

## **5.1 AWS Support Plans**

All AWS customers receive **24/7 customer service** and access to documentation, technical whitepapers, and support forums.

| Support Plan           | Key Exam Distinction                         |
| ---------------------- | -------------------------------------------- |
| **Basic**              | Free, no technical support                   |
| **Developer**          | Development, testing, and experimentation    |
| **Business**           | Production workloads, 24/7 technical support |
| **Enterprise On-Ramp** | Business-critical workloads, pool of TAMs    |
| **Enterprise**         | Mission-critical workloads, dedicated TAM    |

**Business Support** is the recommended minimum support plan for production workloads, but it is **not mandatory**.

## **5.2 AWS Trusted Advisor**

**AWS Trusted Advisor** performs checks and provides recommendations based on AWS best practices across six categories:

- **Cost Optimization** - Reduce unnecessary costs.
- **Performance** - Improve application performance.
- **Security** - Identify security risks.
- **Fault Tolerance** - Improve workload resilience.
- **Service Limits** - Identify resources approaching quotas.
- **Operational Excellence** - Improve operational practices.

|Support Plans|Trusted Advisor Checks|
|---|---|
|Basic and Developer|Core checks|
|Business and Enterprise plans|Full set of checks|

## **5.3 AWS Service Quotas**

**AWS Service Quotas** allows customers to view and manage AWS service limits.
- **Soft limits** - Adjustable.
- **Hard limits** - Non-adjustable.
- Quota increases can be requested through the Service Quotas dashboard or AWS Support Center.
- Many quotas are Region-specific.

## **5.4 Exam Focus**

- **Development and testing - Developer Support**
- **Production workloads - Business Support**
- **Pool of TAMs - Enterprise On-Ramp Support**
- **Dedicated TAM - Enterprise Support**
- **Minimum plan for full Trusted Advisor checks - Business Support**
- **AWS best practice recommendations - AWS Trusted Advisor**
- **View and request quota increases - AWS Service Quotas**