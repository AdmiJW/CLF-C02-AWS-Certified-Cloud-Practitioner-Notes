# 1 - AWS General Design Principles

## **1.1 AWS Well-Architected and Cloud Adoption Framework**

| Framework                                  | Purpose                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| **AWS Well-Architected Framework**         | Provides architectural best practices for designing and building workloads on AWS. |
| **AWS Cloud Adoption Framework (AWS CAF)** | Guides organizations through cloud adoption and digital transformation.            |

- **AWS Well-Architected Framework** focuses on workload architecture.
- **AWS CAF** focuses on broader organizational transformation, including people, technology, organizational capabilities and cloud financial management.

## **1.2 AWS General Design Principles**

AWS defines six general design principles for building effective cloud architectures.

### **1. Stop guessing your capacity needs**

- Avoid estimating and provisioning infrastructure based solely on anticipated demand.
- Design applications to **scale automatically based on demand**.
- Reduce unnecessary resource provisioning and improve resource utilization.
- Take advantage of cloud **scalability and elasticity**.

### **2. Test systems at production scale**

- Use cloud resources to test applications under realistic production workloads.
- Simulate high levels of traffic and demand.
- Identify performance issues before they affect production environments.

### **3. Automate to make architectural experimentation easier**

- Automate infrastructure deployment and architectural changes.
- Experiment with new components and configurations.
- Enable changes to be reverted when they do not work as expected.

**Automation** makes architectural experimentation easier and reduces the risks associated with changes.

### **4. Allow for evolutionary architectures**

- Avoid maintaining static architectures indefinitely.
- Continuously improve architectures as business requirements and technologies evolve.
- Experiment with and adopt new cloud services where appropriate.

Cloud architectures should be designed to **evolve over time**.

### **5. Drive architectures using data**

- Collect and analyze system metrics, performance data and resource utilization.
- Make architectural decisions based on actual data rather than assumptions.
- Continuously evaluate opportunities for performance improvement and cost optimization.

**Example:** If Amazon Elastic Compute Cloud (Amazon EC2) instances used for a data pipeline remain idle most of the time, consider using **AWS Lambda** or **AWS Fargate** where appropriate to improve resource efficiency and reduce costs.

### **6. Improve through game days**

- Deliberately introduce failures into an architecture.
- Observe how the application responds to failures.
- Evaluate automated recovery mechanisms.
- Improve system **resiliency and recovery capabilities**.

**Chaos engineering** is the practice of deliberately introducing failures to evaluate system resilience.

**Game days** are exercises that simulate failures and test how systems and teams respond.

Examples:
- Deliberately shutting down an EC2 instance.
- Simulating network connectivity failures.
- Testing whether applications recover automatically.

## **1.3 Exam Focus**

| Scenario / Exam Clue                                         | General Design Principle                                  |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| Automatically adjust resources based on demand               | **Stop guessing your capacity needs**                     |
| Simulate realistic production traffic                        | **Test systems at production scale**                      |
| Easily deploy, experiment and revert changes                 | **Automate to make architectural experimentation easier** |
| Adapt architecture to changing technologies and requirements | **Allow for evolutionary architectures**                  |
| Use metrics to make architectural decisions                  | **Drive architectures using data**                        |
| Deliberately introduce failures to test recovery             | **Improve through game days**                             |

**Key distinctions:**

- **Building effective cloud architectures - AWS Well-Architected Framework**
- **Organizational cloud adoption and digital transformation - AWS CAF**
- **Testing high traffic and demand - Production-scale testing**
- **Testing failures and recovery - Game days / Chaos engineering**
- **Six general design principles** are distinct from the **six AWS Well-Architected pillars**.

# 2 - AWS Well-Architected Framework

## **2.1 AWS Well-Architected Framework**

The **AWS Well-Architected Framework** provides architectural best practices for building **secure, high-performing, resilient and efficient workloads**.
- Helps cloud architects evaluate and improve their architectures. 
- Provides a consistent approach to identifying architectural improvements.
- Its general architectural principles can also be applied to on-premises workloads.
- Consists of **six pillars** and additional specialized **Well-Architected Lenses**.

## **2.2 Six Pillars of the AWS Well-Architected Framework**

### **1. Operational Excellence**

Focuses on **running, monitoring and continuously improving workloads**.
- Monitor systems and collect operational metrics.
- Improve operational processes and procedures.
- Continuously evaluate and improve workload operations.

**Key focus:** Efficient operations and continuous improvement.

### **2. Security**

Focuses on **protecting information, systems and assets**.
- Protect data, databases and infrastructure.
- Manage identities, access and permissions.
- Prevent unauthorized access to resources.

**Key focus:** Protection of data and systems.

### **3. Reliability**

Focuses on ensuring workloads **perform their intended functions consistently and recover from failures**.
- Design fault-tolerant architectures.
- Distribute workloads across multiple Availability Zones (AZs).
- Recover automatically from unexpected failures.
- Scale resources to meet increasing demand.

**Key focus:** Fault tolerance, availability, scalability and recovery.

### **4. Performance Efficiency**

Focuses on **using computing resources efficiently to meet workload requirements**.
- Select appropriate computing resources.
- Monitor and measure system performance.
- Avoid over-provisioning and under-provisioning resources.
- Adjust resources as workload requirements change.

**Key focus:** Efficient resource utilization and meeting performance requirements.

### **5. Cost Optimization**

Focuses on **avoiding unnecessary costs while delivering business value**.
- Eliminate unnecessary resource expenditure.
- Right-size resources based on workload requirements.
- Use **AWS Compute Optimizer** for resource optimization recommendations.
- Use **Savings Plans** and **Reserved Instances** to reduce eligible costs.

**Key focus:** Reducing unnecessary expenditure and maximizing cost efficiency.

### **6. Sustainability**

Focuses on **minimizing the environmental impact of cloud workloads**.
- Measure and track carbon footprint.
- Reduce unnecessary resource consumption.
- Improve architectures to minimize environmental impact.
- Apply sustainability recommendations.

**Key focus:** Environmental impact, energy efficiency and carbon footprint reduction.

## **2.3 Important Pillar Distinctions**

Several pillars may involve similar architectural improvements. Identify the pillar based on the **primary objective** of the scenario.

| Pillar                     | Primary Objective                                          |
| -------------------------- | ---------------------------------------------------------- |
| **Operational Excellence** | Improve how workloads are operated and monitored.          |
| **Security**               | Protect information, systems and assets.                   |
| **Reliability**            | Ensure consistent operation and recovery from failures.    |
| **Performance Efficiency** | Meet performance requirements using resources efficiently. |
| **Cost Optimization**      | Reduce unnecessary financial expenditure.                  |
| **Sustainability**         | Reduce environmental impact.                               |

For example, right-sizing an EC2 instance may support multiple pillars:

| Scenario                                                           | Pillar                     |
| ------------------------------------------------------------------ | -------------------------- |
| Right-sizing to meet application performance requirements          | **Performance Efficiency** |
| Right-sizing to reduce the monthly AWS bill                        | **Cost Optimization**      |
| Right-sizing to reduce energy consumption and environmental impact | **Sustainability**         |

## **2.4 AWS Well-Architected Lenses**

**AWS Well-Architected Lenses** provide additional architectural best practices for specific technologies, industries and workload types.

Examples include:
- Serverless
- Machine learning (ML)
- Internet of Things (IoT)
- Healthcare
- Automotive

Well-Architected Lenses **supplement rather than replace the six pillars** by providing more specialized architectural guidance.

## **2.5 AWS Well-Architected Tool**

The **AWS Well-Architected Tool (AWS WA Tool)** is a free, self-service tool available through the AWS Management Console.

It helps customers:
- Review workloads against AWS architectural best practices.
- Identify architectural risks and areas for improvement.
- Evaluate workloads using the six Well-Architected pillars.
- Apply relevant Well-Architected Lenses.

Customers can conduct reviews independently or engage an experienced **AWS Partner** for assistance.

|Concept|Purpose|
|---|---|
|**AWS Well-Architected Framework**|Defines architectural principles and best practices.|
|**AWS Well-Architected Lenses**|Provides specialized architectural guidance.|
|**AWS Well-Architected Tool**|Helps customers review and evaluate their workloads.|

## **2.6 Exam Focus**

Remember all **six AWS Well-Architected pillars** and recognize their scenario-based associations.

|Exam Clue|Pillar|
|---|---|
|Monitor operations and continuously improve processes|**Operational Excellence**|
|Protect data, identities and infrastructure|**Security**|
|Fault tolerance, automatic recovery and scaling to meet demand|**Reliability**|
|Efficient computing resource utilization|**Performance Efficiency**|
|Right-sizing to reduce costs, Savings Plans, Reserved Instances|**Cost Optimization**|
|Reduce carbon footprint and environmental impact|**Sustainability**|

**Key associations:**

- **Architectural best practices - AWS Well-Architected Framework**
- **Free self-service architectural review - AWS Well-Architected Tool**
- **Technology-specific or industry-specific best practices - AWS Well-Architected Lenses**
- **Organizational cloud adoption and digital transformation - AWS CAF**

# 3 - AWS Well-Architected Tool

## **3.1 AWS Well-Architected Tool**

The **AWS Well-Architected Tool (AWS WA Tool)** is a free, self-service tool available through the AWS Management Console that helps customers review workloads against the **six pillars of the AWS Well-Architected Framework**.

It enables customers to:
- Evaluate architectures against AWS best practices.
- Identify architectural risks and areas for improvement.
- Generate improvement plans and recommendations.
- Track architectural improvements over time using **milestones**.
- Apply additional industry-specific or technology-specific **Well-Architected Lenses**.

Examples of additional lenses include Serverless, IoT, SaaS, DevOps, Migration and Connected Mobility.

## **3.2 Well-Architected Review Process**

The Well-Architected review is a continuous improvement process.

| Step                           | Description                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **1. Define workload**         | Provide workload details, such as application name, description, owner, environment and AWS Regions. |
| **2. Apply lenses**            | Apply the standard Well-Architected Framework and optional specialized lenses.                       |
| **3. Conduct review**          | Answer questions about architectural best practices under each pillar.                               |
| **4. Review improvement plan** | Identify risks and review recommended architectural improvements.                                    |
| **5. Save milestone**          | Capture the state of the workload review at a particular point in time.                              |
| **6. Implement improvements**  | Make architectural changes based on the recommendations.                                             |
| **7. Repeat review**           | Reassess the workload and create new milestones to track progress.                                   |

Reviews should be conducted periodically to support **continuous architectural improvement**. There is no mandatory review interval.

### **Milestones**

A **milestone** captures the state of a workload review at a specific point in time.

Milestones allow organizations to track architectural improvements and compare progress between reviews.

## **3.3 Important Characteristics**

The AWS Well-Architected Tool uses a **questionnaire-based assessment**.
- Recommendations are generated based on the customer's answers.
- Workload details, such as AWS account IDs, Regions and architecture diagrams, provide documentation and context.
- The tool does not automatically inspect deployed resources to determine whether an architecture follows best practices.
- The customer is responsible for implementing the recommended improvements.
- Optional **Jira integration** allows improvement tasks to be created and tracked.

**Important distinction:** The AWS Well-Architected Tool evaluates architectures and provides recommendations; it does not automatically implement architectural improvements.

## **3.4 Exam Focus**

- **Free, self-service architectural assessment - AWS Well-Architected Tool**
- **Evaluate workloads against six architectural pillars - AWS Well-Architected Tool**
- **Industry-specific or technology-specific best practices - Well-Architected Lenses**
- **Capture review progress at a specific point in time - Milestones**
- **Identify architectural risks and recommended actions - Improvement plan**
- Recommendations are based on **questionnaire responses**, not automatic infrastructure inspection.
- Customers are responsible for implementing the recommended architectural improvements.

# 4 - AWS Cloud Adoption Framework (CAF)

## **4.1 AWS Cloud Adoption Framework (AWS CAF)**

The **AWS Cloud Adoption Framework (AWS CAF)** leverages AWS experience and best practices to help organizations achieve **digital transformation through cloud adoption**.

AWS CAF helps organizations:
- Improve cloud readiness.
- Identify and prioritize transformation opportunities.
- Develop foundational organizational capabilities.
- Achieve business outcomes through cloud adoption.
- Continuously improve their cloud transformation strategies.

Unlike the AWS Well-Architected Framework, AWS CAF focuses on organizational transformation rather than individual workload architecture.

## **4.2 Four Transformation Domains**

AWS CAF identifies four transformation domains through which organizations can achieve digital transformation.

| Transformation Domain | Focus                                                                |
| --------------------- | -------------------------------------------------------------------- |
| **Technology**        | Modernizing technology and infrastructure.                           |
| **Process**           | Improving business and operational processes.                        |
| **Organization**      | Improving organizational structures and ways of working.             |
| **Product**           | Developing and delivering better products and services to customers. |

Successful transformation across these domains requires strong foundational capabilities across the six AWS CAF perspectives.

## **4.3 Six AWS CAF Perspectives**

AWS CAF groups foundational capabilities into **six perspectives**. Each perspective focuses on a particular area of cloud transformation and involves relevant organizational stakeholders.

### **Business Perspective**

Focuses on ensuring that cloud investments deliver **business value and desired business outcomes**.

**Key stakeholders:** CEO and other senior business executives.

### **People Perspective**

Focuses on preparing people and organizational culture for successful cloud adoption.

**Key focus:** People, skills and organizational change.

### **Governance Perspective**

Focuses on managing and overseeing cloud transformation initiatives.

**Key focus:** Governance, organizational risks and cloud investments.

### **Platform Perspective**

Focuses on building and modernizing cloud infrastructure and workloads.

**Key stakeholders:**
- Chief Technology Officer (CTO)
- Technology leaders
- Architects
- Engineers

### **Security Perspective**

Focuses on protecting data, systems and workloads.

**Identity and Access Management (IAM)** falls under the **Security perspective**, not the Governance perspective.

### **Operations Perspective**

Focuses on operating and maintaining cloud workloads effectively.

**Key focus:** Cloud operations and operational management.

## **4.4 Four Cloud Transformation Phases**

AWS CAF defines four iterative phases of cloud transformation.

| Phase           | Purpose                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------- |
| **1. Envision** | Identify and prioritize transformation opportunities across the four transformation domains.  |
| **2. Align**    | Develop transformation strategies, identify capability gaps and prepare implementation plans. |
| **3. Launch**   | Implement and validate capabilities through pilot initiatives.                                |
| **4. Scale**    | Expand successful initiatives across business units, products and services.                   |

Cloud transformation is an **iterative process**, rather than a one-time activity. Organizations repeat these phases to continuously improve their capabilities and business outcomes.

**Remember the sequence:** Envision - Align - Launch - Scale.

## **4.5 AWS CAF vs AWS Well-Architected Framework**

|Feature|AWS CAF|AWS Well-Architected Framework|
|---|---|---|
|Primary purpose|Organizational cloud adoption and digital transformation|Designing and improving workload architectures|
|Focus|Organizational capabilities and cloud readiness|Architectural best practices|
|Core structure|Six perspectives|Six pillars|
|Scope|Organization-wide|Workload-level|

**AWS CAF** helps organizations successfully adopt the cloud, while the **AWS Well-Architected Framework** helps them build effective cloud architectures.

## **4.6 Exam Focus**

### **Six CAF Perspectives**

| Exam Clue                                           | Perspective    |
| --------------------------------------------------- | -------------- |
| Business value and return on cloud investments      | **Business**   |
| Employee skills, culture and organizational change  | **People**     |
| Governance and organizational risk management       | **Governance** |
| Cloud infrastructure, architects, engineers and CTO | **Platform**   |
| Identity and Access Management (IAM)                | **Security**   |
| Operating and maintaining cloud workloads           | **Operations** |

### **Transformation Phases**

- **Identify transformation opportunities - Envision**
- **Develop strategies and address capability gaps - Align**
- **Implement pilot initiatives - Launch**
- **Expand successful initiatives - Scale**

### **Key Reminders**

- **Four transformation domains:** Technology, Process, Organization, Product.
- **Six foundational perspectives:** Business, People, Governance, Platform, Security, Operations.
- **Four transformation phases:** Envision, Align, Launch, Scale.
- **IAM belongs to Security, not Governance.**
- **CTO, architects and engineers - Platform perspective**
- **Organizational cloud readiness and digital transformation - AWS CAF**
- Do not confuse the **six CAF perspectives** with the **six Well-Architected pillars**.

# 5 - Section Summary

## **5.1 AWS Well-Architected Framework**

The **AWS Well-Architected Framework** provides best practices for building secure, high-performing, resilient and efficient workloads.

|Six Pillars|Key Focus|
|---|---|
|**Operational Excellence**|Operations, monitoring and continuous improvement|
|**Security**|Protecting data, systems and assets|
|**Reliability**|Fault tolerance, scalability and recovery|
|**Performance Efficiency**|Efficient resource utilization|
|**Cost Optimization**|Reducing unnecessary costs|
|**Sustainability**|Reducing environmental impact|

**AWS Well-Architected Tool:**

- Free, self-service architectural assessment tool.
- Reviews workloads against the six pillars.
- Supports additional industry-specific and technology-specific **Well-Architected Lenses**.
- Generates improvement recommendations based on questionnaire responses.
- Uses **milestones** to track architectural improvements over time.

## **5.2 AWS Cloud Adoption Framework (AWS CAF)**

**AWS CAF** helps organizations improve cloud readiness and achieve digital transformation.

### **Four Transformation Domains**

- Technology
- Process
- Organization
- Product

### **Six CAF Perspectives**

| Perspective    | Key Focus                                          |
| -------------- | -------------------------------------------------- |
| **Business**   | Business value and return on investment            |
| **People**     | Skills, culture and organizational change          |
| **Governance** | Governance and risk management                     |
| **Platform**   | Cloud infrastructure and architecture              |
| **Security**   | Data protection and identity and access management |
| **Operations** | Operating and maintaining cloud workloads          |

### **Four Cloud Transformation Phases**

| Phase        | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| **Envision** | Identify and prioritize transformation opportunities.  |
| **Align**    | Develop strategies and address capability gaps.        |
| **Launch**   | Implement and validate pilot initiatives.              |
| **Scale**    | Expand successful initiatives across the organization. |

These phases form an **iterative transformation process**.

## **5.3 Exam Focus**

- **Architectural best practices - AWS Well-Architected Framework**
- **Free architectural review and improvement recommendations - AWS Well-Architected Tool**
- **Specialized architectural best practices - Well-Architected Lenses**
- **Organizational cloud adoption and digital transformation - AWS CAF**
- **IAM - CAF Security perspective, not Governance**
- **CEO and senior business executives - Business perspective**
- **CTO, architects and engineers - Platform perspective**

**Remember:**

|Framework|Core Components|
|---|---|
|**AWS Well-Architected**|6 general design principles and 6 pillars|
|**AWS CAF**|4 transformation domains, 6 perspectives and 4 transformation phases|

**Transformation sequence:** Envision - Align - Launch - Scale.