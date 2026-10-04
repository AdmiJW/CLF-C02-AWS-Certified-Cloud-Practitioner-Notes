# 1 - Section Introduction

## 1.1 - Cloud Concepts Overview

The **Cloud Concepts** domain provides the foundational concepts needed to understand cloud computing and AWS.

For the **AWS Certified Cloud Practitioner (CLF-C02)** exam, this domain has approximately **24% exam weightage**, making it an important area of study.

Key areas include:

- **Benefits of cloud computing**
- **Cloud design principles**
- **Cloud adoption and migration concepts**
- **Cloud economics**

## 1.2 - Topics Covered

This section focuses primarily on general cloud computing concepts:

- **What is cloud computing**
- **Characteristics of cloud computing**
- **Advantages of cloud computing**
- **Cloud deployment models**
- **Types of cloud computing**

Two AWS-specific frameworks are also relevant to Cloud Concepts but are covered later after learning more about the AWS ecosystem:

- **AWS Well-Architected Framework**
- **AWS Cloud Adoption Framework (AWS CAF)**

## 1.3 - Exam Focus

- **Cloud Concepts domain - approximately 24% of the CLF-C02 exam**
- Know the **benefits of cloud computing**
- Recognize important **cloud design principles**
- Understand basic **cloud adoption and migration concepts**
- Understand **cloud economics**
- Be able to distinguish **cloud characteristics, advantages, deployment models, and cloud types**

# 2 - What is Cloud Computing?

## 2.1 - What is Cloud Computing?

**Cloud computing** is the **on-demand delivery of IT resources over the internet with pay-as-you-go pricing**.

Key parts of the definition:

- **On demand** - Resources are available when needed
- **IT resources** - Includes computing resources such as **CPU, memory, and storage**
- **Over the internet** - Resources are accessed remotely instead of being hosted entirely in your own data center.
- **Pay as you go** - You pay for the resources you consume.

A simple way to think about cloud computing is **renting computing resources from a cloud provider instead of purchasing and operating all the underlying infrastructure yourself**

## 2.2 - Electricity Utility Analogy

Cloud computing is similar to consuming electricity from a power company.

With your own electricity generator, you would need to:
- Pay a significant **upfront cost**
- Provide physical space
- Supply fuel
- Perform maintenance
- Handle safety and security

With an electricity provider, electricity is delivered **on demand**, and you pay based on your usage.

Cloud computing applies a similar model to IT resources:

**Need computing resources - consume them on demand from a cloud provider and pay for what you use.**

## 2.3 - Traditional On-Premises Data Centers

Before cloud computing, organizations commonly operated their own **data centers** containing physical servers.

A server provides resources such as:
- **CPU / compute**
- **Memory**
- **Disk / storage**
- **Operating system**

Applications are deployed on these servers, and users connect to the applications over a network.

### Challenges of Operating Your Own Data Center

- High **capital expenditure (CapEx)** to purchase and set up infrastructure
- Ongoing **operational expenditure (OpEx)** for items such as:
	- Data center space
	- Electricity
	- Cooling
	- Operations
- **Fixed capacity** - Additional servers must be purchased and installed when more capacity is required
- Scaling infrastructure can require significant **time and money**
- Requires teams to operate and monitor the infrastructure **24/7**
- The organization must protect the data center against disruptions such as:
	- Flooding
	- Electricity outages

### Potential Benefits of an Organization-Owned Data Center

- Infrastructure can be **dedicated to one organization**
- Costs may be relatively predictable because the organization controls the environment
- Internal applications may have **low latency** when the data center is physically close to users.
- Can support requirements where data must remain on **company premises**

## 2.4 - Public Cloud Model

With a **public cloud**, the organization does not need to own and operate all of the underlying data center infrastructure.

Instead, a cloud service provider such as **Amazon Web Services (AWS)** manages the infrastructure and provides computing resources that customers can use.

The customer can:
1. Obtain computing capacity from the cloud provider
2. Deploy applications on that capacity
3. Allow users to access the applications over the internet
4. Obtain additional capacity when demand increases

This removes much of the overhead associated with purchasing and maintaining an organization's own physical infrastructure.

## 2.5 - On-Premises vs Cloud Computing

| **Area**           | **On-Premises Data Center**                               | **Cloud Computing**                               |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------- |
| Infrastructure     | Organization owns and operates it                         | Resources are obtained from a cloud provider      |
| Initial investment | High **CapEx**                                            | Consumption-based model                           |
| Capacity           | More fixed; new hardware must be acquired                 | Capacity can be obtained when needed              |
| Operations         | Organization manages the data center                      | Cloud provider manages the underlying data center |
| Pricing concept    | Infrastructure purchased and operated by the organization | **Pay-as-you-go**                                 |
| Resource access    | Organization's own infrastructure                         | Resources delivered over the internet             |

## 2.6 - Exam Focus

- **Cloud computing - on-demand delivery of IT resources over the internet with pay-as-you-go pricing**
- **On demand - obtain resources when needed**
- **Pay as you go - pay based on resource consumption**
- **On-premises data center - organization purchases, operates, and maintains its own infrastructure**
- **CapEx - upfront investment in infrastructure**
- **OpEx - ongoing costs of operating infrastructure**
- **Public cloud - consume computing resources provided by a cloud service provider**
- **Need additional capacity without first purchasing new physical servers - cloud computing**

# 3 - Characteristics of the Cloud

## 3.1 - Characteristics of the Cloud

Cloud computing has **five main characteristics:**
1. **On-demand self-service**
2. **Broad network access**
3. **Multi-tenancy and resource pooling**
4. **Rapid elasticity and scalability**
5. **Measured service**

These characteristics describe how cloud resources are provided, shared, scaled, accessed, and billed.

## 3.2 - On-Demand Self-Service

**On-demand self-service** means users can provision cloud resources whenever they need them without requiring human interaction from the cloud service provider.
- Resources are available **when needed**
- Customers can provision resources themselves
- No need to contact the provider each time resources are required

**Exam clue: provision resources without provider interaction - on-demand self-service**

## 3.3 - Broad Network Access

**Broad network access** means cloud resources are accessible over a network and can be used from different types of devices.

Examples include:
- Laptops
- Mobile devices

Users can connect to cloud-hosted resources through the network rather than needing direct physical access to the infrastructure.

## 3.4 - Multi-Tenancy and Resource Pooling

**Multi-tenancy** means a public cloud provider serves multiple customers using shared underlying infrastructure while keeping each customer's resources logically separated.

For example:
- The same physical server hardware may support multiple customers.
- Different **virtual machines** can be created on that hardware for different customers.
- Customers remain logically separated even though physical infrastructure may be shared.

**Resource pooling** means the cloud provider pools physical computing resources so they can be allocated across multiple customers.

This shared-resource model is a core characteristic of **public cloud computing**.

**Exam clue: multiple customers share underlying infrastructure while remaining logically separated - multi-tenancy**

## 3.5 - Rapid Elasticity and Scalability

Cloud resources can be increased or decreased according to demand.

- Customers can obtain additional resources when needed
- Resources can often be added **automatically**
- Resources can also be terminated when they are no longer required.

This allows cloud environments to respond quickly when computing requirements change.

**Exam clue: quickly add or remove resources as demand changes - rapid elasticity**

## 3.6 - Measured Service

Cloud providers measure the amount of computing resources each customer consumes.

This enables:
- Usage tracking
- Customer billing
- **Pay-as-you-go pricing**

Customers can therefore be charged according to their consumption of cloud services

**Exam clue: usage is tracked so customers can be billed for consumption - measured service**

## 3.7 - Exam Focus

- **Provision resources without provider interaction - on-demand self-service**
- **Access cloud resources over a network - broad network access**
- **Multiple customers share infrastructure with logical separation - multi-tenancy**
- **Shared infrastructure allocated across customers - resource pooling**
- **Increase or decrease resources based on demand - rapid elasticity and scalability**
- **Track resource consumption for billing - measured service**
- **Cloud usage measurement supports pay-as-you-go pricing**

# 4 - Advantages of Cloud Computing

## 4.1 - Six Advantages of Cloud Computing

AWS highlights six major advantages of cloud computing:

1. **Pay-as-you-go pricing**
2. **Economies of scale**
3. **Stop guessing capacity**
4. **Increase speed and agility**
5. **Stop spending money running and maintaining data centers**
6. **Go global in minutes**

## 4.2 - Pay-as-You-Go Pricing

With **pay-as-you-go pricing**, you pay for the computing resources you actually consume.

- Avoid paying for unused capacity
- Costs are based on resource consumption
- Resources can be obtained when needed rather than purchased permanently in advance

**Exam clue: pay only for the resources you use - pay-as-you-go**

## 4.3 - Economies of Scale

**Economies of scale** occur because public cloud providers serve large numbers of customers and operate infrastructure at very large scale.

This allows providers such as **AWS** to:
- Purchase and operate hardware more efficiently
- Reduce infrastructure costs through large-scale operations
- Improve efficiency in areas such as power consumption
- Pass some of these cost efficiencies to customers

A private organization operating its own infrastructure usually cannot achieve the same scale as a large public cloud provider

**Exam clue: lower costs resulting from large-scale shared cloud operations - economies of scale**

## 4.4 - Stop Guessing Capacity

With an on-premises data center, organizations must estimate future capacity and purchase enough hardware to meet expected demand.

Cloud computing reduces this requirement because organizations can:

- Use **as much or as little capacity as needed**
- **Scale up** when demand increases
- **Scale down** when demand decreases
- Avoid purchasing large amounts of infrastructure based only on predictions

**Exam clue: avoid predicting future infrastructure requirements - stop guessing capacity**

## 4.5 - Increase Speed and Agility

Cloud resources can be provisioned quickly through **self-service**

Instead of waiting for physical infrastructure or administrators to allocate resources, teams can obtain computing resources and deploy applications much faster.

Benefits include:
- Faster resource provisioning
- Faster application deployment
- Faster experimentation and development
- Greater organizational **agility**

**Exam clue: quickly provision resources and deploy applications - increased speed and agility**

## 4.6 - Stop Spending Money Running and Maintaining Data Centers

With cloud computing, much of the underlying data center infrastructure is operated by the cloud provider

Organizations can reduce the effort and costs associated with:
- Physical infrastructure maintenance
- Hardware replacement and refresh
- Electricity
- Cooling
- Data center operations

This can reduce **operational overhead** and the **total cost of ownership (TCO)** associated with operating physical data centers.

## 4.7 - Go Global in Minutes

Public cloud providers operate infrastructure in multiple geographic locations

This allows organizations to deploy applications closer to users in other parts of the world without first building their own data centers.

Benefits include:
- Faster geographic expansion
- Ability to deploy applications in different locations
- Potentially lower latency for geographically distributed users
- Support for requirements that may require workloads to operate in particular geographic locations

**Exam clue: quickly deploy an application in multiple geographic locations - go global in minutes**

## 4.8 - Additional Cloud Benefits

### Scalability

**Scalability** is the ability to increase or decrease computing capacity to meet changing requirements

Because public cloud providers have large pools of resources, customers can request additional capacity when required.

### Elasticity

**Elasticity** is the ability to adjust resources according to demand, often automatically

Resources can:
- **Scale up or out** when demand increases
- **Scale down or in** when demand decreases

AWS can provide tools such as **Auto Scaling** to adjust Amazon EC2 capacity according to demand.

### Scalability vs Elasticity

| **Concept**     | **Main Idea**                                                      | **Exam Clue**                                         |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| **Scalability** | Increase or decrease capacity to meet workload requirements        | Application needs more computing capacity             |
| **Elasticity**  | Dynamically adjust capacity as demand changes, often automatically | Resources automatically expand and shrink with demand |

### High Availability and Fault Tolerance

Cloud infrastructure can support applications across multiple data centers or locations

- **High availability** focuses on keeping applications and services accessible
- **Fault tolerance** helps systems continue operating when a component or location experiences a failure
- Redundant copies of data and workloads can reduce the impact of failures

### Flexibility

Cloud computing provides flexibility in choosing and changing resources.

For example, an organization can:

- Use different resource sizes as requirements change
- Increase or decrease computing capacity
- Select cloud services appropriate for a particular workload
- Avoid being permanently tied to one fixed hardware configuration

## 4.9 - Exam Focus

- **Pay only for consumed resources - pay-as-you-go pricing**
- **Lower costs through large-scale cloud operations - economies of scale**
- **Use as much or as little capacity as needed - stop guessing capacity**
- **Provision resources quickly - increased speed and agility**
- **Reduce physical data center maintenance - cloud provider operates underlying infrastructure**
- **Deploy workloads to different geographic locations quickly - go global in minutes**
- **Adjust capacity to meet requirements - scalability**
- **Automatically respond to changing demand - elasticity**
- **Keep applications accessible - high availability**
- **Continue operating despite failures - fault tolerance**
- **Choose and change resources as requirements evolve - flexibility**

# 5 - Deployment Models of Cloud - Private, Public and Hybrid

## 5.1 - Cloud Deployment Models

There are three main cloud deployment models:
1. **Private cloud**
2. **Public cloud**
3. **Hybrid cloud**

The key distinction is **who owns/manages the infrastructure and who uses it**

## 5.2 - Private Cloud

A **private cloud** provides cloud services for a **single organization**

It is more than simply operating physical servers in a data center. The infrastructure must provide cloud characteristics such as:
- **On-demand self-service**
- **Broad network access**
- **Resource pooling**
- **Rapid elasticity**
- **Measured service**

Organizations can use software platforms such as **OpenStack** to build cloud capabilities within their own infrastructure.

### Benefits of Private Cloud

- **Full control** over infrastructure and available services
- Can support **very low-latency** applications located close to users or equipment
- Greater control over **security policies**
- Control over **physical security**
- Can meet business requirements where data must remain on **company premises**

**Exam clue: cloud environment dedicated to one organization - private cloud**

## 5.3 - Public Cloud

A **public cloud** is operated by a third-party cloud service provider.

Examples mentioned include:
- **Amazon Web Services (AWS)**
- **Microsoft Azure**
- **Google Cloud**

The provider owns and operates the underlying data centers and computing infrastructure, while customers consume cloud services over the internet.

Public cloud environments are generally **multi-tenant**, meaning infrastructure is shared across multiple customers while their resources remain logically separated.

### Benefits of Public Cloud

- No need to operate the underlying physical data centers
- Reduced infrastructure management overhead
- Access cloud resources over the internet
- Benefit from the provider's large-scale infrastructure

**Exam clue: infrastructure owned and operated by a third-party provider - public cloud**

## 5.4 - Hybrid Cloud

A **hybrid cloud** combines **on-premises or private cloud infrastructure** with **public cloud services**.

An organization can keep some workloads on premises while extending other capabilities into the public cloud

Example:
- Keep a **business-critical or sensitive application** on premises
- Store its backups in the **public cloud**

This provides a combination of:
- **Control** from private/on-premises infrastructure
- **Flexibility** from the public cloud
- **Cost effectiveness** of public cloud resources

**Exam clue: some workloads remain on premises while others use public cloud services - hybrid cloud**

## 5.5 - Private vs Public vs Hybrid Cloud

| **Deployment Model** | **Infrastructure / Usage**                                    | **Main advantage**                | **Exam clue**                                                         |
| -------------------- | ------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------- |
| **Private Cloud**    | Dedicated to one organization                                 | Maximum control                   | Organization requires dedicated infrastructure or on-premises control |
| **Public Cloud**     | Operated by a cloud provider and shared across customers      | Reduced infrastructure management | Consume provider-managed resources over the internet                  |
| **Hybrid Cloud**     | Combines on-premises/private infrastructure with public cloud | Flexibility and control           | Workloads span both on-premises and public cloud                      |

## 5.6 - Exam Focus

- **Dedicated to one organization - private cloud**
- **Third-party provider owns and operates infrastructure - public cloud**
- **Uses both on-premises/private infrastructure and public cloud - hybrid cloud**
- **Maximum infrastructure and physical security control - private cloud**
- **Reduced responsibility for operating data centers - public cloud**
- **Keep sensitive workloads on premises while using cloud services elsewhere - hybrid cloud**
- **Public cloud - multi-tenant**
- **Hybrid cloud - combines the control of private infrastructure with the flexibility of public cloud**

# 6 - Types of Cloud Computing Service Models - IaaS, PaaS, SaaS

## 6.1 - Cloud Computing Service Models

Cloud computing service models are primarily distinguished by **who manages each layer of the technology stack**.

A typical stack includes:
- **Networking**
- **Storage**
- **Compute**
- **Virtualization / Hypervisor**
- **Operating System**
- **Runtime**
- **Middleware**
- **Databases / data**
- **Applications**

As you move from **on-premises** toward managed cloud services, more responsibility shifts from the **customer** to the **cloud service provider (CSP)**

The three main cloud service models are:
1. **Infrastructure as a Service (IaaS)**
2. **Platform as a Service (PaaS)**
3. **Software as a Service (SaaS)**

## 6.2 - On-Premises

With an **on-premises deployment**, the customer manages the entire technology stack.

This includes:
- Physical hardware
- Networking
- Storage
- Compute
- Virtualization
- Operating systems
- Runtime and middleware
- Data
- Applications

**Exam clue: the customer manages everything - on-premises**

## 6.3 - Infrastructure as a Service (IaaS)

With **Infrastructure as a Service (IaaS)**, the cloud provider manages the underlying infrastructure, while the customer manages the software running on top of it.

**Cloud Provider Manages**
- Networking infrastructure
- Storage infrastructure
- Compute hardware
- Virtualization / hypervisor

**Customer Manages**
- Operating system
- Runtime
- Middleware
- Data
- Applications

A key example from AWS is **Amazon Elastic Compute Cloud (Amazon EC2)**

The cloud provider supplies the virtual machine infrastructure, but the customer still manages the operating system and applications running on the instance.

**Exam clue: customer needs control over virtual machines and operating systems - IaaS**

## 6.4 - Platform as a Service (PaaS)

With **Platform as a Service (PaaS)**, more responsibility shifts to the cloud provider.

The provider manages:
- Infrastructure
- Virtualization
- Operating system
- Middleware
- Runtime environment

The customer primarily manages:
- **Application**
- **Data**

This allows developers to deploy applications without managing the underlying virtual machines, operating systems, or runtime infrastructure.

**Exam clue: deploy an application without managing servers or operating systems - PaaS**

## 6.5 - Software as a Service (SaaS)

With **Software as a Service (SaaS)**, the cloud provider manages essentially the entire technology stack.

The customer simply **uses the software service over the internet.**

Customers do not need to manage:
- Infrastructure
- Operating systems
- Runtime environments
- Application platform

An example mentioned is **Gmail**, where users consume the application without managing the infrastructure on which it runs.

**Exam clue: simply consume a completed application over the internet - SaaS**

## 6.6 - IaaS vs PaaS vs SaaS

| **Model**       | **Customer Mainly Manages**                 | **Provider Mainly Manages**             | **Exam Clue**                               |
| --------------- | ------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| **On-Premises** | Everything                                  | Nothing                                 | Customer manages full stack                 |
| **IaaS**        | OS, runtime, middleware, data, applications | Infrastructure and virtualization       | Need control over VMs and OS                |
| **PaaS**        | Applications and data                       | Infrastructure, OS, runtime, middleware | Focus on deploying applications             |
| **SaaS**        | Primarily uses the software                 | Entire underlying stack                 | Consume finished software over the internet |

### Responsibility Progression

As you move through the models:

**On-Premises - IaaS - PaaS - SaaS**

More management responsibility shifts from the **customer** to the **cloud service provider**

## 6.7 - Exam Focus

- **Customer manages everything - on-premises**
- **Provider manages infrastructure; customer manages OS and applications - IaaS**
- **Amazon EC2 - example of IaaS**
- **Provider also manages OS, middleware, and runtime - PaaS**
- **Customer mainly manages application and data - PaaS**
- **Provider manages the complete software stack - SaaS**
- **Consume a finished application over the internet - SaaS**
- **On-Premises to IaaS to PaaS to SaaS - progressively more responsibility shifts to the cloud provider**

# 7 - Cloud Concepts - Section Summary

## 7.1 - Cloud Concepts Summary

**Cloud computing** is the **on-demand delivery of IT resources over the internet with pay-as-you-go pricing**.

### Five Characteristics of Cloud Computing
- **On-demand self-service**
- **Broad network access**
- **Multi-tenancy and resource pooling**
- **Rapid elasticity and scalability**
- **Measured service**

### Six Advantages of Cloud Computing
- **Pay as you go**
- **Economies of Scale**
- **Stop guessing capacity**
- **Increase speed and agility**
- **Stop spending money running and maintaining data centers**
- **Go global in minutes**

Cloud computing also makes it easier to achieve:
- **Scalability**
- **Elasticity**
- **High availability**
- **Fault tolerance**
- **Flexibility**

## 7.2 - Deployment and Service Models

### Cloud Deployment Models

| **Model**         | **Key Idea**                                                        |
| ----------------- | ------------------------------------------------------------------- |
| **Private Cloud** | Cloud environment dedicated to one organization                     |
| **Public Cloud**  | Cloud services provided by a third-party provider over the internet |
| **Hybrid Cloud**  | Combines on-premises/private infrastructure with public cloud       |

### Cloud Service Models

| **Model**       | **Customer Responsibility**     | **Cloud Provider Responsibility** |
| --------------- | ------------------------------- | --------------------------------- |
| **On-Premises** | Everything                      | Nothing                           |
| **IaaS**        | OS, runtime, applications, data | Infrastructure and virtualization |
| **PaaS**        | Applications and data           | Infrastructure, OS, runtime       |
| **SaaS**        | Uses the software               | Entire underlying stack           |

**Responsibility progression:**
**On-Premises - IaaS - PaaS - SaaS**

As you move toward **SaaS**, more responsibility shifts to the **cloud service provider**

## 7.3 - Topics Covered Later

Two additional Cloud Concepts topics will be covered later in the course:
- **AWS Well-Architected Framework** and its **six pillars**
- **AWS Cloud Adoption Framework (AWS CAF)** for cloud adoption and organizational transformation

## 7.4 - Exam Focus

- **Cloud computing - on-demand IT resources over the internet with pay-as-you-go pricing**
- **Provision resources yourself - on-demand self-service**
- **Shared infrastructure with logical separation - multi-tenancy**
- **Automatically adjust to demand - elasticity**
- **Avoid predicting infrastructure needs - stop guessing capacity**
- **Large-scale provider efficiencies - economies of scale**
- **Dedicated to one organization - private cloud**
- **Provider-operated shared cloud - public cloud**
- **On-premises + public cloud - hybrid cloud**
- **Virtual infrastructure with customer-managed OS - IaaS**
- **Deploy applications without managing the OS/runtime - PaaS**
- **Consume finished software over the network -SaaS**

# 8 - Cloud Concepts - Section Quiz

## 8.1 - Practice Question

### Original Question

How does AWS benefit from the **economy of scale?**

### Choices

A. AWS requires fewer data centers as its infrastructure grows  
B. AWS can charge customers lower prices by leveraging its large infrastructure to spread costs across multiple customers  
C. AWS offers custom pricing based on the specific needs of each customer  
D. AWS reduces the number of services it offers to minimize overhead

### Correct Answer

**B. AWS can charge customers lower prices by leveraging its large infrastructure to spread costs across multiple customers**

### Why?

**Economies of scale** result from AWS operating infrastructure for a very large number of customers. Operating at this scale allows AWS to achieve cost efficiencies and pass some of those savings to customers through lower prices.

- **A** is incorrect - economies of scale do not mean AWS requires fewer data centers
- **C** is incorrect - custom pricing per customer is not what economies of scale means
- **D** is incorrect - economies of scale are based on operating at large scale, not reducing the number of AWS services

**Exam clue: lower costs because a cloud provider serves many customers at massive scale - economies of scale**

## 8.2 - Practice Question

### Original Question

A company wants to expand its operations into another geography. Currently, the company operates out of its own data center. Which benefit of the cloud is best suited for this customer?

### Choices

A. Pay as you go  
B. Economy of scale  
C. Increased speed and agility  
D. Go global in minutes

### Correct Answer

**D. Go global in minutes**

### Why?

The key clue is **expanding into another geography**. Public cloud providers already operate infrastructure in different geographic locations, allowing organizations to deploy workloads in new locations without building their own data centers.

- **Pay as you go** relates to paying based on consumption
- **Economy of scale** relates to cost efficiencies from large-scale cloud operations
- **Increased speed and agility** relates to quickly provisioning resources
- **Go global in minutes** directly addresses geographic expansion

**Exam clue: rapidly expand applications into another geographic location - go global in minutes**

## 8.3 - Practice Question

### Original Question

What does the term **high availability** refer to in cloud computing?

### Choices

A. Automatic backups of resources  
B. Deploying applications across multiple regions  
C. Ensuring minimal downtime of services  
D. On-demand resource provisioning

### Correct Answer

**C. Ensuring minimal downtime of services**

### Why?

**High availability** focuses on keeping applications and services accessible with **minimal downtime**.

Deploying across multiple locations can be one way to support high availability, but it is not the definition itself.

**Exam clue: keep a service accessible and minimize downtime - high availability**

## 8.4 - Practice Question

### Original Question

Which of the following is a responsibility of AWS under the **Shared Responsibility Model**?

### Choices

A. Configuring EC2 security groups  
B. Managing physical infrastructure security  
C. Managing customer data encryption  
D. Setting IAM policies

### Correct Answer

**B. Managing physical infrastructure security**

### Why?

Under the **AWS Shared Responsibility Model**, AWS is responsible for **security of the cloud**, including the physical facilities and infrastructure supporting AWS services.

The customer is responsible for configuring items such as:
- **EC2 security groups**
- **IAM policies**
- Security and protection of customer data as applicable

**Exam clue: physical AWS data center and infrastructure security - AWS responsibility**

## 8.5 - Practice Question

### Original Question

What does **elasticity** in cloud computing mean?

### Choices

A. Reducing storage capacity when not needed  
B. Automatically scaling resources based on demand  
C. Distributing traffic across multiple servers  
D. Manually adding additional servers to meet demand

### Correct Answer

**B. Automatically scaling resources based on demand**

### Why?

**Elasticity** is the ability to dynamically increase or decrease resources as demand changes, often automatically.

- **A** describes only one possible reduction in capacity, not the complete concept
- **C** describes traffic distribution rather than elasticity itself
- **D** is manual scaling, whereas elasticity emphasizes dynamically responding to changing demand

**Exam clue: resources automatically expand and shrink with demand - elasticity**

## 8.6 - Practice Question

### Original Question

Which one of the following is a cloud **deployment model**?

### Choices

A. Serverless computing  
B. Private cloud  
C. Opex cloud  
D. Highly Available cloud

### Correct Answer

**B. Private cloud**

### Why?

The cloud deployment models covered are:
- **Private cloud**
- **Public cloud**
- **Hybrid cloud**

**Serverless computing** is not one of these deployment models, while **Opex cloud** and **Highly Available cloud** are not cloud deployment models.

**Exam clue: private, public, and hybrid - cloud deployment models**

## 8.7 - Practice Question

### Original Question

Which cloud computing service model provides the **highest level of abstraction**?

### Choices

A. Software as a Service (SaaS)  
B. Infrastructure as a Service (IaaS)  
C. Platform as a Service (PaaS)  
D. Hybrid Cloud

### Correct Answer

**A. Software as a Service (SaaS)**

### Why?

With **Software as a Service (SaaS)**, the cloud provider manages essentially the entire underlying technology stack, while the customer simply consumes the software.

The responsibility progression is:
**On-Premises - IaaS - PaaS - SaaS**

Moving toward **SaaS** means more responsibility is handled by the provider and more underlying infrastructure is abstracted from the customer.

**Hybrid Cloud** is a deployment model, not a cloud service model

**Exam clue: consume completed software without managing the underlying platform - SaaS**

## 8.8 - Practice Question

### Original Question

Which type of cloud computing allows customers to manage the virtual machines, including the **operating system**?

### Choices

A. Platform as a Service (PaaS)  
B. Infrastructure as a Service (IaaS)  
C. Software as a Service (SaaS)  
D. Function as a Service (FaaS)

### Correct Answer

**B. Infrastructure as a Service (IaaS)**

### Why?

With **IaaS**, the cloud provider manages the underlying infrastructure and virtualization, while the customer retains responsibility for the **operating system** and software running on the virtual machine.

**Amazon EC2** is an example of an IaaS-style service covered in this section.

- **PaaS** abstracts management of the operating system and runtime.
- **SaaS** provides completed software for customers to consume

**Exam clue: customer controls the virtual machine and operating system - IaaS**

## 8.9 - Practice Question

### Original Question

Which of the following is a fundamental characteristic of cloud computing?

### Choices

A. Static resource allocation  
B. Pay-as-you-go pricing model  
C. Manual provisioning of resources  
D. Limited access across geographic locations

### Correct Answer

**B. Pay-as-you-go pricing model**

### Why?

Cloud computing provides resources on demand and supports a consumption-based **pay-as-you-go** approach.

The other options contradict cloud concepts:
- **Static resource allocation** conflicts with scalability and elasticity
- **Manual provisioning** conflicts with on-demand self-service
- **Limited access** conflicts with broad network access

**Exam clue: consume resources and pay according to usage - Pay-as-you-go**

## 8.10 - Practice Question

### Original Question

What are the primary benefits of using cloud computing?

### Choices

A. Capital expenditure costs only  
B. Elasticity and Scalability  
C. Limited elasticity  
D. Access to physical security of data centers

### Correct Answer

**B. Elasticity and Scalability**

### Why?

**Scalability** allows cloud resources to grow or shrink to meet workload requirements, while **elasticity** allows resources to dynamically adjust according to changing demand.

- **Capital expenditure costs only** does not represent a cloud benefit
- **Limited elasticity** is the opposite of a key cloud advantage
- Customers do not gain physical access to AWS data center security as a cloud benefit

**Exam clue: adjust computing capacity according to workload demand - scalability and elasticity**

## 8.11 - Exam Focus

- **Massive-scale cost efficiencies - economies of scale**
- **Expand into another geography quickly - go global in minutes**
- **Minimize service downtime - high availability**
- **Physical infrastructure security - AWS responsibility**
- **Automatically adjust resources to demand - elasticity**
- **Private, public, hybrid - deployment models**
- **Highest abstraction / consume completed software - SaaS**
- **Customer manages VM operating system - IaaS**
- **Usage-based consumption - pay-as-you-go**
- **Capacity grows with requirements - scalability**
- **Scalability vs elasticity**: scalability is the ability to change capacity; elasticity emphasizes dynamically adjusting that capacity as demand changes
- **IaaS vs PaaS vs SaaS**: progressively more management responsibility shifts from the customer to the cloud provider