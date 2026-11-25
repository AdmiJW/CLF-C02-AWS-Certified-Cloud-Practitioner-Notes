# 1 - AWS Billing Dashboard and Tools

## **1.1 AWS Billing and Cost Management Overview**

**AWS Billing and Cost Management** provides tools to estimate, monitor, analyze, and manage AWS costs.

Two key aspects of AWS cost management:
1. **Cost Visibility** - Understand where money is being spent across AWS services.
2. **Cost Control** - Identify opportunities to reduce and optimize AWS spending.

AWS provides different tools depending on whether you need to **estimate future costs** or **analyze actual usage and spending**.

## **1.2 AWS Cost Estimation and Analysis Tools**

### **AWS Pricing Calculator**

**AWS Pricing Calculator** is a free, publicly available tool used to **estimate AWS costs before deploying resources**.
- Estimates monthly costs based on selected AWS services and configurations.
- Helps plan infrastructure budgets before deployment.
- Does not require resources to be deployed in an AWS account.

**Example:**

A company plans to deploy an application requiring:
- 10 Amazon EC2 instances
- 1 Amazon RDS database
- Amazon S3 storage

The **AWS Pricing Calculator** can estimate the monthly cost of this infrastructure.

**Exam clue: Estimate AWS costs before deployment - AWS Pricing Calculator**

### **AWS Billing and Cost Management Dashboard**

The **AWS Billing and Cost Management Dashboard** provides an overview of **actual AWS spending and monthly bills**.
- Available within the **AWS Management Console**.
- Displays overall monthly AWS charges.
- Provides a breakdown of costs by AWS service.
- Helps identify which services contribute most to the monthly bill.

**Example:**

An AWS account has the following monthly charges:
- Amazon EC2 - $100 
- Amazon RDS - $150

The Billing Dashboard displays these charges as part of the overall monthly bill.

**Exam clue: View monthly AWS bills and service charges - AWS Billing and Cost Management Dashboard**

### **AWS Cost Explorer**

**AWS Cost Explorer** is used to **visualize, analyze, and forecast AWS costs and usage**.
- Provides more detailed cost analysis than the Billing Dashboard.
- Analyzes spending across different dimensions, including:
    - **AWS Services** - Cost per service.
    - **AWS Regions** - Cost across different regions.
    - **Usage Patterns** - How spending changes over time.
- Supports **cost forecasting** to estimate future spending.
- Available through the **AWS Billing and Cost Management Console**.

**Example:**

A company wants to identify which AWS Region generates the highest EC2 costs and forecast next month's spending.

**Exam clue: Analyze historical costs, filter spending, or forecast future costs - AWS Cost Explorer**

### **AWS Data Exports**

Use **AWS Data Exports** to deliver detailed billing and usage line items to an S3 bucket. **Cost and Usage Report 2.0 (CUR 2.0)** is the recommended export. The exam also uses the name **AWS Cost and Usage Reports (CUR)**, which is the legacy format. [AWS Data Exports](https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html)

## **1.3 AWS Free Tier Usage Dashboard**

Use the Billing console to check the offers, actual usage, and credits for your account. The offers depend on the account’s creation date and plan. See [Free and Paid account plans](./02%20-%20Course%20Pre-requisites%20for%20Exercises.md). [AWS Free Tier](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html)

## **1.4 AWS Billing Tools Comparison**

| Question | Tool |
| --- | --- |
| What might a planned workload cost? | **AWS Pricing Calculator** models expected usage. |
| What have we spent and where are costs trending? | **AWS Bills** for billed charges and **AWS Cost Explorer** to filter, group, and forecast costs. |
| How can I analyze the underlying usage and charge line items? | **AWS Data Exports** with **CUR 2.0** to S3. |
| Is spending approaching a target? | **AWS Budgets** for actual or forecast thresholds. **CloudWatch billing alarms** monitor estimated charges. |
| Is spending unusually high relative to past usage? | **AWS Cost Anomaly Detection**. |
| Which resources could be resized? | **AWS Compute Optimizer**. **AWS Cost Optimization Hub** collects and prioritizes recommendations. |

## **1.5 Exam Focus**

- **Estimate costs before deployment - AWS Pricing Calculator**
- **View monthly AWS bills - AWS Billing and Cost Management Dashboard**
- **Analyze AWS spending by service or Region - AWS Cost Explorer**
- **Forecast future AWS costs - AWS Cost Explorer**
- **Export detailed billing and usage data to S3 - AWS Data Exports / AWS Cost and Usage Reports**
- **Query exported billing data in S3 - Amazon Athena**
- **Create customized billing dashboards - Amazon QuickSight with exported cost data**
- **Monitor AWS Free Tier consumption - AWS Free Tier Usage Dashboard**

**Remember:**

- **Before deployment - Pricing Calculator**
- **After deployment - Billing Dashboard / Cost Explorer**
- **Advanced customized reporting - AWS Data Exports**
- **Free usage monitoring - Free Tier Usage Dashboard**

# 2 - \[Demo] AWS Pricing Calculator

## **2.1 AWS Pricing Calculator Overview**

**AWS Pricing Calculator** is a free, publicly available tool used to **estimate the cost of running applications and infrastructure on AWS**.
- Helps estimate AWS costs **before deploying resources**.
- Does **not require an AWS account**.
- Provides **monthly and annual cost estimates**.
- Estimates are based on selected AWS services, configurations, and expected usage.
- **Actual costs may differ** from estimates because real resource consumption can vary.

**Important:** AWS Pricing Calculator provides an **estimate, not a guaranteed bill**.

**Exam clue: Estimate AWS infrastructure costs before deployment - AWS Pricing Calculator**

## **2.2 Factors Affecting AWS Cost Estimates**

Before using AWS Pricing Calculator, you should identify the required **AWS services, architecture, and estimated resource capacity**.

### **Key Configuration Inputs**

| Factor                  | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| **AWS Region**          | Region where resources will be deployed                      |
| **AWS Services**        | Services required, such as EC2 and S3                        |
| **Instance Type**       | EC2 instance family and size                                 |
| **Operating System**    | OS selected for compute instances                            |
| **Number of Instances** | Quantity of EC2 instances required                           |
| **Pricing Model**       | Pricing option, such as On-Demand                            |
| **Storage Capacity**    | Expected disk or object storage requirements                 |
| **Usage Requests**      | Expected service operations, such as S3 PUT and GET requests |
| **Data Transfer Out**   | Expected amount of data transferred outside AWS              |

### **Example: Estimating Amazon EC2 Costs**

For **Amazon Elastic Compute Cloud (Amazon EC2)**, the calculator can use:
- **AWS Region** - Example: Mumbai.
- **Instance Count** - 2 instances.
- **Instance Type** - `m5.large`.
- **Pricing Model** - On-Demand.
- **Storage** - 1 TB of disk space.

If the instance type is unknown, CPU and memory requirements can be provided to help identify suitable instances.

### **Example: Estimating Amazon S3 Costs**

For **Amazon Simple Storage Service (Amazon S3)**, the calculator can consider:
- **Storage Capacity** - 1,024 GB.
- **PUT Requests** - 10,000 requests.
- **GET Requests** - 10,000 requests.
- **Data Transfer Out** - 100 GB per month to the internet.

**Important:** Data transferred **out of AWS to the internet** can incur additional charges and should be considered when estimating costs.

## **2.3 Cost Estimate Results and Sharing**

Once all required services and configurations are added, AWS Pricing Calculator generates an estimated cost summary.

### **Cost Estimate Outputs**

- **Monthly Estimate** - Expected AWS spending per month.
- **Annual Estimate** - Expected AWS spending per year.
- **Service-Level Breakdown** - Estimated costs for individual AWS services.

### **Sharing and Exporting Estimates**

AWS Pricing Calculator supports:
- **Shareable Links** - Allows others to access an estimate through a public link.
- **PDF Export** - Download an estimate as a PDF.
- **JSON Export** - Export estimate data in JSON format.
- **Excel Export** - Export estimates to a spreadsheet.

These capabilities are useful for **budget planning, cost discussions, and communicating infrastructure estimates**.

## **2.4 Exam Focus**

- **Estimate AWS costs before deployment - AWS Pricing Calculator**
- **Free public cost estimation tool - No AWS account required**
- **Estimate monthly and annual spending - AWS Pricing Calculator**
- **Region, instance type, pricing model, and storage - Affect estimated costs**
- **S3 storage, PUT/GET requests, and data transfer - Important pricing inputs**
- **Data transfer out to the internet - Can incur additional charges**
- **Estimated costs may differ from actual AWS bills - Usage can vary**
- **Share or export cost estimates - AWS Pricing Calculator**

**Remember:**

- **AWS Pricing Calculator** - Estimates costs for planned infrastructure.
- **AWS Cost Explorer** - Analyzes actual AWS spending and forecasts future costs based on usage.

# 3 - \[Demo] AWS Billing Tools

## **3.1 AWS Billing and Cost Management Dashboard**

The **AWS Billing and Cost Management Dashboard** provides a centralized location to view and manage AWS spending.

### **AWS Bills**

The **Bills** section allows users to:
- View **current-month AWS charges**.
- Review **previous monthly bills**.
- See a breakdown of costs by **AWS service**.
- Identify services contributing to unexpected spending.

**Important distinction:**

- **Current Month** - Displays accumulated charges that may change before the bill is finalized.
- **Previous Months** - Displays historical billing information.

**Example:**

An AWS account has unexpectedly high monthly charges. The Bills section reveals additional charges from **Amazon QuickSight**.

This helps identify which service is responsible for the increased cost.

**Exam clue: View monthly AWS bills and service-level charges - AWS Bills**

## **3.2 AWS Cost Explorer**

**AWS Cost Explorer** is used to **visualize, analyze, and forecast AWS spending and usage**.

It provides detailed cost analysis across different AWS services, accounts, regions, and usage categories.

### **Cost Analysis and Filtering**

AWS Cost Explorer supports filtering costs using multiple dimensions:

| Filter            | Purpose                                                          |
| ----------------- | ---------------------------------------------------------------- |
| **AWS Service**   | Analyze costs for services such as EC2, RDS, or API Gateway      |
| **AWS Account**   | View spending for individual accounts within an AWS Organization |
| **AWS Region**    | Identify costs incurred in different regions                     |
| **Instance Type** | Analyze costs associated with particular EC2 instance types      |
| **Usage Type**    | Examine costs such as data transfer, storage, or API requests    |
| **Time Period**   | Compare spending across different months                         |

**Example:**

A company operates multiple AWS accounts and wants to identify how much one account spends on Amazon EC2 in a specific AWS Region.

**AWS Cost Explorer** can filter costs by account, service, and region.

### **Cost Forecasting**

AWS Cost Explorer also provides **cost forecasting**.
- Estimates future AWS spending based on historical and current usage patterns.
- Helps predict costs for upcoming periods.
- Supports proactive budget planning.

**Example:**

A company wants to predict its AWS spending for the following month based on existing usage.

**Exam clue: Analyze historical AWS costs or forecast future spending - AWS Cost Explorer**

## **3.3 AWS Cost Anomaly Detection**

**AWS Cost Anomaly Detection** helps identify **unexpected or unusual changes in AWS spending**.
- Analyzes historical cost and usage patterns.
- Detects spending that differs significantly from normal behavior.
- Can send **notifications** when unusual costs are detected.
- Helps organizations investigate unexpected spending.

### **Example**

A company normally spends **$100 per month** on Amazon EC2.

Suddenly, EC2 spending increases to **$500 or $1,000**.

**AWS Cost Anomaly Detection** can recognize this unusual increase and notify the organization.

The increase could be:
- **Intentional** - Planned infrastructure expansion.
- **Unintentional** - Unexpected resource usage or unnecessary spending.

**Important:** Cost Anomaly Detection identifies unusual spending but does not automatically determine whether the spending is justified.

**Exam clue: Detect unexpected AWS spending patterns and receive notifications - AWS Cost Anomaly Detection**

## **3.4 AWS Free Tier Usage Dashboard**

In the Billing console, open **Free Tier** and compare actual usage against offer limits. Check **Credits** for remaining eligible credits. Follow the account-plan details in [Course Pre-requisites](./02%20-%20Course%20Pre-requisites%20for%20Exercises.md) when interpreting the results.

## **3.5 AWS Data Exports**

In **Data Exports**, choose a standard export for **CUR 2.0**. Select the columns and an S3 destination. Analyze the resulting files in Athena or another reporting tool. Include activated cost allocation tags or cost categories to report costs by team, environment, or application. [CUR 2.0 migration](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-migrate.html)

## **3.6 AWS Billing Tools Comparison**

Use the comparison in section 1.4 to identify which tool answers the question. Start with Bills to see billed charges, use Cost Explorer to investigate a cost trend, and export CUR 2.0 when you need the detailed line items.

## **3.7 Exam Focus**

- **View monthly AWS bills - AWS Bills**
- **Analyze AWS costs by service, account, or region - AWS Cost Explorer**
- **Forecast future AWS spending - AWS Cost Explorer**
- **Detect unexpected spending increases - AWS Cost Anomaly Detection**
- **Receive notifications about unusual AWS costs - AWS Cost Anomaly Detection**
- **Track remaining Free Tier allowances - AWS Free Tier Usage Dashboard**
- **Export detailed billing data to Amazon S3 - AWS Data Exports**
- **Create customized cost dashboards - Amazon QuickSight**
- **Query exported billing data in S3 - Amazon Athena**

**Remember:**

- **AWS Bills** - What am I being charged?
- **AWS Cost Explorer** - Where am I spending money, and what might I spend next?
- **AWS Cost Anomaly Detection** - Is my spending unusually high?
- **AWS Free Tier Usage Dashboard** - How much free usage remains?
- **AWS Data Exports** - How can I access detailed billing data for custom analysis?

# 4 - AWS Cost Control Tools

## **4.1 AWS Cost Control Overview**

AWS provides tools to **monitor spending, receive cost alerts, allocate costs, and identify cost optimization opportunities**.

The main objectives of cost control are:
1. **Cost Monitoring** - Track spending against expected limits.
2. **Cost Alerts** - Receive notifications when spending exceeds defined thresholds.
3. **Cost Allocation** - Organize costs by projects, environments, or other business categories.
4. **Cost Optimization** - Identify opportunities to reduce AWS spending.

## **4.2 Amazon CloudWatch Billing Alarms**

**Amazon CloudWatch Billing Alarms** allow users to receive notifications when AWS billing charges exceed a specified threshold.
- Monitors overall AWS billing charges.
- Uses **Amazon CloudWatch** to create billing alarms.
- Triggers notifications when spending crosses a defined threshold.
- Provides a basic method for monitoring AWS costs.

**Example:**

A company wants to receive a notification when its monthly AWS charges exceed **$100**.

A CloudWatch billing alarm can be configured with a $100 threshold.

**Important:** CloudWatch billing alarms are a more basic approach to cost monitoring compared to AWS Budgets.

**Exam clue: Create a billing alarm when AWS charges exceed a threshold - Amazon CloudWatch**

## **4.3 AWS Budgets**

**AWS Budgets** allows users to **define spending limits, track costs, and receive notifications when costs exceed expected amounts**.
- Create budgets for **overall AWS spending**.
- Create budgets for **individual AWS services**, such as Amazon EC2 or Amazon S3.
- Track spending against predefined budget amounts.
- Receive notifications when spending exceeds configured thresholds.
- Available within the **AWS Billing and Cost Management Console**.

### **Example**

A company wants to monitor:
- Total AWS spending - $1,000 per month.
- Amazon EC2 spending - $500 per month.
- Amazon S3 spending - $100 per month.

Using **AWS Budgets**, the company can create separate budgets for these categories and receive notifications when the defined thresholds are exceeded.

### **AWS Budgets vs CloudWatch Billing Alarms**

| Feature             | Amazon CloudWatch Billing Alarms            | AWS Budgets                               |
| ------------------- | ------------------------------------------- | ----------------------------------------- |
| **Primary Purpose** | Monitor billing charges against a threshold | Track spending against configured budgets |
| **Cost Scope**      | Overall AWS billing charges                 | Overall spending or specific AWS services |
| **Notifications**   | Billing threshold alarms                    | Budget threshold notifications            |
| **Use Case**        | Basic billing monitoring                    | More granular budget management           |

**Exam clue: Set spending limits and receive budget notifications for specific AWS services - AWS Budgets**

## **4.4 AWS Cost Allocation Tags**

**Cost Allocation Tags** help organizations **categorize and track AWS spending using resource tags**.

They are particularly useful when costs need to be organized beyond AWS services or regions.

### **How Cost Allocation Tags Work**

1. Assign **key-value tags** to AWS resources.
2. Enable those tags as **cost allocation tags**.
3. Use the activated tags to group and analyze AWS spending.

### **Types of Cost Allocation Tags**

| Tag Type               | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| **AWS-Generated Tags** | Tags automatically created by AWS                        |
| **User-Defined Tags**  | Custom tags created by users to categorize AWS resources |

Both types can be enabled for cost allocation.

### **Example: Project-Based Cost Allocation**

An organization operates multiple projects in AWS.

Resources can be tagged using:
- `Project = ProjectA`
- `Project = ProjectB`

This allows the organization to analyze AWS spending separately for each project.

### **Example: Environment-Based Cost Allocation**

Resources can also be categorized by environment:
- `Environment = Development`
- `Environment = Production`

This helps identify how much the organization spends on its development and production environments.

**Important:** Cost allocation tags are useful for tracking costs based on **business-defined categories**, rather than only by AWS service or region.

**Exam clue: Track AWS spending by project, department, or environment - AWS Cost Allocation Tags**

Activate the tag keys you want in Billing and Cost Management so they can be used in cost reporting. Resource tags can appear in CUR 2.0 and help attribute line items to teams or environments. For a single bill across accounts, see [consolidated billing and discount sharing](./23%20-%20AWS%20Account%20Management.md). [Cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)

## **4.5 AWS Cost Optimization Hub**

**AWS Cost Optimization Hub** provides **centralized recommendations to identify AWS cost-saving opportunities**.
- Helps organizations discover potential savings.
- Provides recommendations for AWS pricing commitments, including:
    - **Savings Plans**
    - **Reserved Instances**
- Uses historical usage patterns to help determine suitable purchasing recommendations.
- Helps organizations reduce costs for workloads with predictable, long-term usage.

### **Example: Savings Plans Recommendations**

A company runs Amazon EC2 instances continuously using **On-Demand pricing**.

Because these workloads run consistently over long periods, the organization may save money by purchasing a **Savings Plan** or **Reserved Instances**.

AWS Cost Optimization Hub can recommend:
- Suitable cost-saving opportunities.
- Potential Savings Plans or Reserved Instance purchases.
- Appropriate Savings Plans commitment amounts based on historical usage.

**Important:** Savings Plans involve a commitment to a specified amount of usage spending per hour.

**Exam clue: Identify centralized AWS cost-saving opportunities and commitment recommendations - AWS Cost Optimization Hub**

## **4.6 AWS Compute Optimizer**

**AWS Compute Optimizer** analyzes resource utilization and provides **recommendations to optimize resource configurations and reduce unnecessary costs**.
- Identifies potentially **overprovisioned AWS resources**.
- Recommends appropriate resource sizes based on usage patterns.
- Helps reduce spending on resources with excess capacity.
- Provides optimization recommendations for supported resources, including compute resources and databases.

### **Example: EC2 Rightsizing**

A company runs an Amazon EC2 instance with more CPU and memory capacity than its workload requires.

**AWS Compute Optimizer** can recommend a more suitable instance size.

This process is known as **rightsizing**.

**Rightsizing** means selecting an appropriate resource size based on actual workload requirements.

### **AWS Compute Optimizer vs AWS Cost Optimization Hub**

| Service                       | Primary Purpose                                     | Exam Scenario                                                                   |
| ----------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------- |
| **AWS Compute Optimizer**     | Recommend optimal resource configurations and sizes | Identify oversized EC2 instances                                                |
| **AWS Cost Optimization Hub** | Centralize cost-saving recommendations              | Identify Savings Plans, Reserved Instance, and other optimization opportunities |

**Important distinction:**

- **AWS Compute Optimizer** - Focuses on optimizing resource configurations and capacity.
- **AWS Cost Optimization Hub** - Provides a centralized view of cost optimization opportunities, including pricing commitments.

**Exam clue: Identify overprovisioned resources and recommend appropriate instance sizes - AWS Compute Optimizer**

## **4.7 AWS Cost Control Tools Comparison**

Use section 1.4 for tool selection. For example, use **AWS Budgets** to get an alert when projected EC2 spend exceeds a target. Use **AWS Compute Optimizer** to investigate resource sizing, and activate **cost allocation tags** to see which project incurred the charges.

## **4.8 Exam Focus**

- **Receive alerts when AWS billing charges exceed a threshold - Amazon CloudWatch Billing Alarms**
- **Create budgets and receive spending notifications - AWS Budgets**
- **Track budgets for individual AWS services - AWS Budgets**
- **Categorize AWS costs by project or environment - AWS Cost Allocation Tags**
- **AWS-generated and user-defined tags - Both can be enabled for cost allocation**
- **Identify centralized cost-saving opportunities - AWS Cost Optimization Hub**
- **Get Savings Plans and Reserved Instance recommendations - AWS Cost Optimization Hub**
- **Identify overprovisioned resources - AWS Compute Optimizer**
- **Recommend appropriate EC2 instance sizes - AWS Compute Optimizer**
- **Select resource capacity based on workload requirements - Rightsizing**

**Remember:**

- **CloudWatch Billing Alarms** - Notify me when billing charges exceed a threshold.
- **AWS Budgets** - Notify me when spending exceeds my budget.
- **Cost Allocation Tags** - Show me how much each project or environment costs.
- **Cost Optimization Hub** - Show me opportunities to reduce AWS costs.
- **Compute Optimizer** - Recommend better resource sizes to avoid overprovisioning.

# 5 - \[Demo] AWS Cost Control Tools

## **5.1 Amazon CloudWatch Billing Alarms**

**Amazon CloudWatch Billing Alarms** allow users to receive notifications when estimated AWS charges exceed a defined threshold.

### **Key Characteristics**

- Billing alarms must be created in the **US East (N. Virginia) Region (**`us-east-1`**)**.
- AWS billing is consolidated across regions, so a billing alarm does not need to be created in every region.
- Uses the **EstimatedCharges** CloudWatch metric.
- Billing charges are monitored in **USD**.
- Notifications can be delivered using **Amazon Simple Notification Service (Amazon SNS)**.

### **Example: Billing Threshold Alert**

A company wants to receive a notification when its estimated AWS charges exceed **$5**.

The billing alarm uses:
- **Metric** - EstimatedCharges.
- **Threshold** - Greater than $5.
- **Notification Service** - Amazon SNS.
- **Notification Channels** - Email or SMS through an SNS topic.

When the threshold is breached, CloudWatch can trigger an alarm notification through Amazon SNS.

**Exam clue: Monitor estimated AWS charges and send threshold alerts - Amazon CloudWatch Billing Alarms**

## **5.2 AWS Budgets**

**AWS Budgets** allows organizations to create spending budgets and receive notifications when costs exceed defined thresholds.
- Available in the **AWS Billing and Cost Management Console**.
- Supports **monthly cost budgets**.
- Allows users to define a budget amount.
- Sends notifications to configured email recipients.
- Provides predefined **budget templates** for easier configuration.

### **Example: Monthly Cost Budget**

A company wants to limit its expected monthly AWS spending to **$100**.

Using AWS Budgets, it can define:
- **Budget Type** - Monthly cost budget.
- **Budget Amount** - $100.
- **Notification Recipient** - Email address.

AWS Budgets can notify the recipient when the configured spending threshold is exceeded.

### **CloudWatch Billing Alarms vs AWS Budgets**

| Feature                | CloudWatch Billing Alarms         | AWS Budgets                                 |
| ---------------------- | --------------------------------- | ------------------------------------------- |
| **Purpose**            | Monitor estimated billing charges | Monitor spending against budgets            |
| **Monitoring Scope**   | AWS billing charges               | Overall or service-specific budgets         |
| **Notifications**      | Through Amazon SNS                | Budget notifications, including email       |
| **Region Requirement** | US East (N. Virginia)             | Managed through Billing and Cost Management |

**Exam clue: Create monthly spending budgets with threshold notifications - AWS Budgets**

## **5.3 AWS Cost Optimization Hub and Compute Optimizer**

### **AWS Cost Optimization Hub**

**AWS Cost Optimization Hub** provides a centralized view of **AWS cost optimization recommendations**.
- Helps identify opportunities to reduce AWS spending.
- Provides recommendations based on AWS resource usage.
- Can include recommendations from **AWS Compute Optimizer**.
- Useful for organizations running workloads continuously.

**Important:** Recommendations depend on available resource and usage data. Accounts with little or no running infrastructure may not have recommendations.

### **AWS Compute Optimizer**

**AWS Compute Optimizer** analyzes AWS resource utilization and recommends **more appropriate resource configurations**.
- Uses **Amazon CloudWatch metrics** to analyze resource usage.
- The demonstration describes analysis using approximately **14 days of historical metrics**.
- Helps identify **overprovisioned resources**.
- Can recommend rightsizing supported resources, including:
    - **Amazon EC2 instances**
    - **Amazon RDS databases**
- Basic Compute Optimizer recommendations are available without an additional Compute Optimizer charge, although associated CloudWatch monitoring may incur charges.

### **Example: Rightsizing an EC2 Instance**

A company runs an EC2 instance that consistently uses only a small portion of its allocated CPU and memory.

**AWS Compute Optimizer** can analyze utilization metrics and recommend a smaller instance size.

This is called **rightsizing** and can reduce unnecessary infrastructure spending.

### **Key Distinction**

| AWS Tool                      | Primary Purpose                                                       |
| ----------------------------- | --------------------------------------------------------------------- |
| **AWS Compute Optimizer**     | Analyze resource utilization and recommend appropriate resource sizes |
| **AWS Cost Optimization Hub** | Centralize cost-saving recommendations across AWS                     |

**Exam clue: Recommend smaller EC2 instances based on utilization - AWS Compute Optimizer**

**Exam clue: View centralized AWS cost optimization recommendations - AWS Cost Optimization Hub**

## **5.4 AWS Cost Allocation Tags**

**AWS Cost Allocation Tags** allow organizations to **categorize and analyze AWS spending using resource tags**.

A tag consists of a **key-value pair** assigned to an AWS resource.

### **Types of Cost Allocation Tags**

| Tag Type               | Description                                   | Example                    |
| ---------------------- | --------------------------------------------- | -------------------------- |
| **User-Defined Tags**  | Tags created by users to categorize resources | `Environment = Production` |
| **AWS-Generated Tags** | Tags automatically generated by AWS           | `aws:createdBy`            |

Tags must be **activated for cost allocation** before they can be used for billing analysis.

### **Example: Environment-Based Cost Tracking**

An organization operates two environments:
- `Environment = Development`
- `Environment = Production`

By activating the **Environment** tag as a cost allocation tag, the organization can analyze spending separately for development and production resources.

### **Example: Tracking Resource Creators**

AWS-generated tags, such as **CreatedBy**, can help associate resource costs with the identities that created them, where those tags are available.

This can help organizations investigate costs generated by different developers or users.

**Exam clue: Group and track AWS costs using resource key-value tags - AWS Cost Allocation Tags**

## **5.5 AWS Cost Categories**

**AWS Cost Categories** allows organizations to **group AWS costs into custom business-defined categories**.
- Helps organize spending based on business requirements.
- Can group costs using **cost allocation tags**.
- Supports categories such as:
    - Development
    - Production
    - Project
- Can be used with **AWS Cost Explorer** to filter and analyze costs.

### **Example: Development Environment Costs**

An organization has resources tagged with:

`Environment = Development`

It can create an **AWS Cost Category** named Development and define rules for grouping the relevant costs.

The category can then be used in **AWS Cost Explorer** to analyze development spending.

### **Cost Allocation Tags vs Cost Categories**

| Feature           | Cost Allocation Tags                 | AWS Cost Categories                          |
| ----------------- | ------------------------------------ | -------------------------------------------- |
| **Purpose**       | Categorize costs using resource tags | Group costs into business-defined categories |
| **Basis**         | Resource key-value pairs             | Custom cost grouping rules                   |
| **Example**       | `Environment = Development`          | Development cost category                    |
| **Cost Explorer** | Filter costs by activated tags       | Filter costs by cost categories              |

**Important distinction:**

- **Cost Allocation Tags** - Identify and categorize costs associated with tagged resources.
- **AWS Cost Categories** - Organize costs into custom business groupings for reporting and analysis.

**Exam clue: Group AWS spending into custom business categories - AWS Cost Categories**

## **5.6 AWS Cost Control Tools Comparison**

Use section 1.4 for tool selection. A budget sets a threshold for a known target. Cost Anomaly Detection looks for unusual changes relative to prior spending. Use the allocation tag and cost category demos above to attribute the resulting charges.

## **5.7 Exam Focus**

- **Create AWS billing alarms - Amazon CloudWatch**
- **CloudWatch billing alarm Region - US East (N. Virginia),** `us-east-1`
- **Monitor estimated billing charges - EstimatedCharges metric**
- **Send billing alarm notifications - Amazon SNS**
- **Create monthly spending budgets - AWS Budgets**
- **Receive notifications when budget thresholds are exceeded - AWS Budgets**
- **View centralized cost-saving recommendations - AWS Cost Optimization Hub**
- **Recommend resource rightsizing based on utilization - AWS Compute Optimizer**
- **Analyze resource utilization metrics - Amazon CloudWatch**
- **Categorize costs using resource tags - AWS Cost Allocation Tags**
- **Group spending into business-defined categories - AWS Cost Categories**
- **Filter spending by tags and cost categories - AWS Cost Explorer**

**Remember:**

- **CloudWatch Billing Alarms** - Alert me when estimated charges exceed a threshold.
- **AWS Budgets** - Track spending against a defined budget.
- **Cost Optimization Hub** - Show me cost-saving opportunities.
- **Compute Optimizer** - Recommend better resource sizes.
- **Cost Allocation Tags** - Categorize costs using resource tags.
- **Cost Categories** - Group costs into business categories.
- **Cost Explorer** - Analyze spending using those categories and tags.

## 5.8 Data transfer pricing

| Traffic path | What to check |
| --- | --- |
| **Internet to AWS** | Inbound data transfer is often free. A NAT gateway, load balancer, or another service on the path may still have processing charges. |
| **AWS to the internet** | Data transfer out commonly has usage-based charges after any applicable allowance. |
| **Within one Region** | Same-AZ transfer is often free for qualifying paths. Cross-AZ traffic can be billable, depending on the services and endpoints. |
| **Between Regions** | Check inter-Region charges on the applicable service, including replication and the direction of the transfer. |

For an estimate, trace each traffic leg. A private EC2 instance sending traffic through a NAT gateway can incur NAT processing charges as well as any applicable transfer charges. See [VPC routing](./09%20-%20Foundation%20-%20Amazon%20VPC%20and%20Networking.md) and [S3 storage and retrieval pricing](./11%20-%20Foundation%20-%20AWS%20Storage%20Services.md). [EC2 data transfer pricing](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer) · [AWS data transfer guidance](https://docs.aws.amazon.com/wellarchitected/latest/framework/cost04-bp03.html)

# 6 - Section Summary

## **6.1 AWS Billing and Cost Management Summary**

Use section 1.4 as the main tool comparison. When estimating a workload, include compute, storage, retrieval, and data transfer. When investigating a bill, use tags and linked-account detail for attribution. Apply [EC2 purchasing options](./06%20-%20Foundation%20-%20Amazon%20EC2.md) to predictable compute usage and [consolidated billing](./23%20-%20AWS%20Account%20Management.md) for organization-wide billing.

## **6.2 Exam Focus**

- **Estimate AWS costs before deployment - AWS Pricing Calculator**
- **View monthly AWS bills - AWS Bills**
- **Analyze and forecast AWS spending - AWS Cost Explorer**
- **Detect unexpected spending using machine learning - AWS Cost Anomaly Detection**
- **Export detailed billing data to S3 - AWS Data Exports**
- **Build customized billing dashboards - Amazon QuickSight**
- **Create billing alarms in** `us-east-1` **- Amazon CloudWatch**
- **Set budgets and receive spending notifications - AWS Budgets**
- **Track costs using resource tags - Cost Allocation Tags**
- **Group costs into business-defined categories - AWS Cost Categories**
- **Identify Savings Plans and Reserved Instance opportunities - AWS Cost Optimization Hub**
- **Identify overprovisioned resources and recommend rightsizing - AWS Compute Optimizer**
- **Monitor remaining free usage allowances - AWS Free Tier Usage Dashboard**

**Key Exam Distinctions:**

- **Pricing Calculator vs Cost Explorer** - Estimate planned infrastructure costs vs analyze existing spending.
- **CloudWatch Billing Alarms vs AWS Budgets** - Basic billing threshold monitoring vs flexible budget management.
- **Cost Allocation Tags vs Cost Categories** - Resource-based cost categorization vs business-defined cost grouping.
- **Cost Optimization Hub vs Compute Optimizer** - Centralized cost-saving opportunities vs resource rightsizing recommendations.
