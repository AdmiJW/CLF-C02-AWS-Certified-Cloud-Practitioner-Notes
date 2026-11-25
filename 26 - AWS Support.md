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

The current plan comparison is in section 2.5. **Basic** includes account and billing help and self-service resources. Technical cases with AWS engineers depend on the support plan. For AWS-event alerts, see [AWS Health Dashboard and API](./17%20-%20AWS%20Monitoring%20and%20Logging.md).

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

- Account and billing assistance → **Basic Support**.
- Technical cases and troubleshooting → choose a paid plan based on response and guidance needs.
- Best-practice checks → **Trusted Advisor**.
- View limits and request increases → **Service Quotas**.

# 2 - AWS Support Plans

## **2.1 AWS Support Plans**

Use the [AWS Support Center](https://console.aws.amazon.com/support/home) to open or manage cases. Account and billing cases are available with Basic. Access to technical cases depends on the plan. For reporting suspected misuse of AWS resources, see [AWS Trust & Safety and the Acceptable Use Policy](./22%20-%20AWS%20Shared%20Responsibility%20Model.md).

## **2.2 Types of AWS Support Plans**

The current CLF-C02 exam guide names **Basic**, **Business Support+**, **Enterprise Support**, and **Unified Operations**. See the comparison in section 2.5.

### Legacy plan transition

As of November 25, 2026, **Developer Support**, **Business Support**, and **Enterprise On-Ramp** are legacy plans in transition. AWS lists **January 1, 2027** as the discontinuation date and says the three plans remain available in **AWS GovCloud (US)**. Older lecture examples may refer to Developer for business-hours technical help, Business for around-the-clock engineer access, or Enterprise On-Ramp for access to a pool of TAMs.

[AWS Support plan changes](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html) · [CLF-C02 Domain 4](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html)

## **2.3 Technical Account Manager (TAM)**

A **Technical Account Manager (TAM)** helps a customer plan, operate, and improve AWS workloads. **Enterprise Support** includes a designated TAM. **Unified Operations** includes a designated TAM and a Domain Specialist Engineer (DSE).

## **2.4 AWS Support Pricing**

Basic is included with an AWS account. Paid Support plans use pricing that varies by plan and applicable AWS spend or agreement. [AWS Support pricing](https://aws.amazon.com/premiumsupport/pricing/)

## **2.5 AWS Support Plans Comparison**

| Plan | Cases and engineering access | Fastest applicable technical response | Guidance and checks |
| --- | --- | --- | --- |
| **Basic** | Account and billing help, documentation, and community resources | — | Core Trusted Advisor checks |
| **Business Support+** | 24/7 access to Cloud Support Engineers by phone, web, and chat | Under 30 minutes for a business-critical system down | Expanded Trusted Advisor access and AWS Support API |
| **Enterprise Support** | 24/7 technical support | Up to 15 minutes for a production-critical case | Designated TAM, Trusted Advisor, and Security Incident Response |
| **Unified Operations** | 24/7 technical support and incident management | Five minutes for eligible severity-5 Incident Detection and Response cases | Designated TAM and DSE, workload reviews, and operational guidance |

**Response targets** depend on severity and case type. They measure initial response or human engagement, not resolution time. [AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html) · [AWS Support FAQ](https://aws.amazon.com/premiumsupport/faqs/)

## **2.6 Exam Focus**

Use the comparison in section 2.5. **Business Support+** is the first current broad-availability plan with 24/7 engineer access. **Enterprise Support** adds a designated TAM. **Unified Operations** adds deeper operational engagement and the five-minute target for eligible incident cases.

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

Basic includes a limited set of core checks. Business Support+, Enterprise Support, and Unified Operations provide expanded checks. Use the current [Trusted Advisor documentation](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html) for the checks and entitlements available to your plan.

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
| First current paid tier with expanded Trusted Advisor checks | **Business Support+** |

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

Use the plan comparison in section 2.5. Start with the type of help, severity, and ongoing guidance the scenario requires.

## **5.2 AWS Trusted Advisor**

Trusted Advisor checks AWS resources for improvements across cost, performance, security, fault tolerance, service limits, and operational excellence. Section 3 has the category examples.

## **5.3 AWS Service Quotas**

**AWS Service Quotas** allows customers to view and manage AWS service limits.
- **Soft limits** - Adjustable.
- **Hard limits** - Non-adjustable.
- Quota increases can be requested through the Service Quotas dashboard or AWS Support Center.
- Many quotas are Region-specific.

## **5.4 Exam Focus**

- **Support Center** → Open an account, billing, or plan-eligible technical case.
- **Trusted Advisor** → Find recommendations and potential issues.
- **Service Quotas** → View service limits and request increases.
- [AWS Health](./17%20-%20AWS%20Monitoring%20and%20Logging.md) → Check service status, account impact, or programmatic events.
