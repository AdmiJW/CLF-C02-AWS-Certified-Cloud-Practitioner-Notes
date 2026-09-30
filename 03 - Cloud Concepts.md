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

# 5 - Deployment Models of Cloud - Private, Public and Hybrid

# 6 - Types of Cloud Computing Service Models - IaaS, PaaS, SaaS

# 7 - Cloud Concepts - Section Summary

# 8 - Cloud Concepts - Section Quiz