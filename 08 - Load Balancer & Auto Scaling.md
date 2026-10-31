# 1 - Introduction to High Availability and Scalability

## 1.1 High Availability

**High Availability (HA)** means designing an application to remain operational even when some components fail.

In AWS, high availability for **Amazon EC2** typically involves deploying instances across **multiple Availability Zones (AZs)** within a Region.

### How High Availability Works

- Deploy **EC2 instances across multiple Availability Zones**.
- Use **Elastic Load Balancing (ELB)** to distribute incoming traffic across EC2 instances.
- If an EC2 instance or an entire Availability Zone becomes unavailable, traffic can be directed to healthy instances in another AZ.
- This reduces the risk of application downtime caused by a single point of failure.

**Key Concept**: High availability focuses on keeping applications running despite infrastructure failures.

## 1.2 Scalability

**Scalability** is the ability to increase or decrease computing capacity based on application demand.

AWS supports two main types of scaling:

### Vertical Scaling (Scaling Up / Down)

Vertical scaling involves **changing the resources of an existing instance**.
- **Scaling Up**: Increase CPU, RAM, or instance size to handle more workload.
- **Scaling Down**: Decrease CPU, RAM, or instance size when fewer resources are needed.
- For EC2, changing the instance type commonly involves stopping the instance, resizing it, and restarting it.

**Common Use Case**:
- Relational databases or applications that are difficult to distribute across multiple machines.

**Limitations**:
- Limited by the maximum resources available for an instance.
- Increasing instance size does not guarantee proportional performance improvements.

### Horizontal Scaling (Scaling Out / In)

Horizontal scaling involves **adding** or **removing instances** to adjust computing capacity.
- **Scaling Out**: Add more EC2 instances when demand increases.
- **Scaling In**: Remove EC2 instances when demand decreases.
- Commonly used for distributed applications where workloads can be shared across multiple instances.

**Common Use Cases**:
- Web applications handling varying traffic.
- Application tiers running across multiple EC2 instances.
- Big data processing using multiple machines in parallel.

### Vertical vs Horizontal Scaling

| Feature              | Vertical Scaling            | Horizontal Scaling                           |
| -------------------- | --------------------------- | -------------------------------------------- |
| **Approach**         | Resize an existing instance | Add or remove instances                      |
| **Scale Up / Out**   | Increase CPU or RAM         | Add more EC2 instances                       |
| **Scale Down / In**  | Reduce CPU or RAM           | Remove EC2 instances                         |
| **Typical Use Case** | Relational databases        | Web applications, distributed systems        |
| **Limitations**      | Maximum instance size       | Requires workloads that support distribution |
| **AWS Example**      | Change EC2 instance type    | EC2 Auto Scaling                             |

**Key Distinction**:
- **Vertical Scaling - Make an existing instance bigger or smaller.**
- **Horizontal Scaling - Increase or decrease the number of instances.**

## 1.3 Elastic Load Balancing and EC2 Auto Scaling

AWS commonly combines **Elastic Load Balancing (ELB)** and **Amazon EC2 Auto Scaling** to achieve both high availability and scalability.

### Elastic Load Balancing (ELB)

**Elastic Load Balancing** automatically distributes incoming application traffic across multiple targets, such as EC2 instances.
- Distributes incoming requests across multiple EC2 instances.
- Supports applications deployed across multiple Availability Zones.
- Helps maintain application availability by directing traffic to healthy instances.

**Primary Purpose**: Distribute incoming traffic and improve application availability.

### Amazon EC2 Auto Scaling

**Amazon EC2 Auto Scaling** automatically adjusts the number of EC2 instances based on application demand.

It uses **Auto Scaling groups (ASGs)** to manage EC2 instance capacity.
- Monitors instance utilization and scaling conditions.
- **Scales Out**: Launches additional instances when demand increases.
- **Scales In**: Terminates unnecessary instances when demand decreases.
- Helps maintain sufficient capacity while avoiding unnecessary resources.

**Primary Purpose**: Automatically adjust EC2 capacity according to demand.

### How They Work Together

A highly available and scalable architecture typically includes
1. An **Elastic Load Balancer** receiving incoming application traffic.
2. Multiple **EC2 instances** deployed across different Availability Zones.
3. An **Auto Scaling group** managing the number of EC2 instances.
4. The load balancer distributing traffic among healthy instances.
5. Auto Scaling adding or removing instances as demand changes.

### ELB vs Auto Scaling

| Feature               | Elastic Load Balancing (ELB)                             | EC2 Auto Scaling                                    |
| --------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| **Main Purpose**      | Distribute traffic                                       | Adjust computing capacity                           |
| **Primary Function**  | Route requests to healthy instances                      | Add or remove EC2 instances                         |
| **High Availability** | Helps maintain availability through traffic distribution | Helps maintain sufficient healthy instance capacity |
| **Scalability**       | Distributes traffic across available instances           | Automatically scales the number of instances        |
| **Exam Keyword**      | Traffic distribution                                     | Automatic capacity adjustment                       |

**Important**: ELB does not add or remove EC2 instances. Auto Scaling manages instance capacity, while ELB distributes traffic across those instances.

## 1.4 Exam Focus

- **High Availability - Keep applications running despite infrastructure failures.**    
- **Multiple Availability Zones - Reduce the risk of downtime from an AZ failure.**
- **Scalability - Adjust computing capacity based on demand.**
- **Vertical Scaling - Increase or decrease the resources of an existing instance.**
- **Horizontal Scaling - Add or remove EC2 instances.**
- **Scaling Up / Down - Change the size of an instance.**
- **Scaling Out / In - Change the number of instances.**
- **Elastic Load Balancing (ELB) - Distribute incoming traffic across healthy instances.**
- **Amazon EC2 Auto Scaling - Automatically adjust EC2 instance capacity based on demand.**
- **High Availability + Scalability - Use multiple AZs, Elastic Load Balancing, and EC2 Auto Scaling together.**

**Exam Scenario Clues**:

- **Distribute incoming requests across EC2 instances - Elastic Load Balancing.**
- **Automatically add EC2 instances during traffic spikes - EC2 Auto Scaling.**
- **Automatically remove unnecessary instances during low demand - EC2 Auto Scaling.**
- **Keep an application available if an Availability Zone fails - Multi-AZ architecture.**
- **Increase the CPU and RAM of an EC2 instance - Vertical Scaling.**
- **Add more EC2 instances to handle increased workload - Horizontal Scaling.**

# 2 - AWS Elastic Load Balancer

## 2.1 AWS Elastic Load Balancing (ELB)

**Elastic Load Balancing (ELB)** is an AWS service that automatically distributes incoming application traffic across multiple backend targets.

Instead of users connecting directly to individual EC2 instances, requests are first received by the **Load Balancer**, which forwards them to available targets.

### Key Features

- **Traffic Distribution**: Distributes incoming requests across multiple backend targets.
- **Health Checks**: Monitors target health and avoids routing traffic to unhealthy targets.
- **High Availability**: Supports distributing traffic across multiple Availability Zones (AZs).
- **Multiple Target Types**: Supports EC2 instances, IP addresses, containers, and AWS Lambda functions (depending on load balancer type).
- **SSL/TLS Termination**: Supports HTTPS communication using certificates from **AWS Certificate Manager (ACM).**
- **DNS Name**: AWS automatically provides a DNS name for accessing the load balancer. Custom domain names can also be configured.
- **Flexible Routing**: Supports different traffic-routing mechanisms, including **Sticky Sessions**.

**Key Concept**: ELB improves application availability by distributing traffic across healthy targets instead of relying on a single server.

### Health Checks

**Health Checks** allow a load balancer to determine whether backend targets can successfully serve requests.
- ELB continuously checks the health of registered targets.
- An EC2 instance may be running while its application is unavailable.
- For example, if a web application is not responding on **port 80**, the target may be marked unhealthy.
- ELB avoids forwarding new requests to unhealthy targets.

**Exam Distinction**: An EC2 instance being in the **running** state does not necessarily mean the application is healthy.

### Sticky Sessions

**Sticky Sessions** allow requests from the same client to be directed to the same backend target for a period of time.
- Useful when an application needs to maintain user session continuity.
- Also called **Session Affinity**.

## 2.2 Components of Elastic Load Balancing

An ELB architecture consists of three main components:

| Component         | Purpose                                                              |
| ----------------- | -------------------------------------------------------------------- |
| **Load Balancer** | Receives incoming traffic and distributes requests                   |
| **Listener**      | Checks for incoming connections using a configured protocol and port |
| **Target Group**  | Groups backend targets to which traffic is routed                    |

### How Traffic Flows

1. A client sends a request to the **Load Balancer**.    
2. The **Listener** receives the request on a configured port, such as HTTP (80) or HTTPS (443).
3. The listener routes the request to an appropriate **Target Group**.
4. The target group forwards the request to a healthy registered **Target**, such as an EC2 instance.

**Key Concept**: Listeners receive incoming connections, while target groups organize the backend resources that process requests.

## 2.3 Types of AWS Load Balancers

AWS provides four types of load balancers.

| Load Balancer                       | OSI Layer             | Supported Protocols / Purpose           | Main Use Case                                |
| ----------------------------------- | --------------------- | --------------------------------------- | -------------------------------------------- |
| **Application Load Balancer (ALB)** | Layer 7 - Application | HTTP, HTTPS, WebSocket, gRPC            | Web applications and HTTP-based routing      |
| **Network Load Balancer (NLB)**     | Layer 4 - Transport   | TCP, UDP, TLS                           | High performance and ultra-low latency       |
| **Gateway Load Balancer (GWLB)**    | Layer 3 - Network     | IP traffic                              | Deploy and scale network security appliances |
| **Classic Load Balancer (CLB)**     | Layer 4 / Layer 7     | Legacy TCP and HTTP-based functionality | Older applications (legacy load balancer)    |

### Application Load Balancer (ALB)

**Application Load Balancer** operates at **Layer 7 (Application Layer)** of the OSI model.
- Designed primarily for **HTTP and HTTPS applications**.
- Supports application-level protocols such as WebSocket and gRPC.
- Can make routing decisions using application-level information.

**Common Use Case**: Distributing HTTP/HTTPS traffic across multiple web servers.

### Network Load Balancer (NLB)

**Network Load Balancer** operates at **Layer 4 (Transport Layer)** of the OSI model.
- Supports **TCP, UDP, and TLS** traffic.
- Provides **very high performance and ultra-low latency**.
- Processes transport-level connections without requiring application-layer HTTP inspection.

**Common Use Case**: Applications requiring high throughput, TCP/UDP support, or ultra-low latency.

### Gateway Load Balancer (GWLB)

**Gateway Load Balancer** operates at the **Network Layer (Layer 3).*
- Used to deploy and scale **network security appliances**.
- Commonly associated with traffic inspection and security appliances.

**Common Use Case**: Distributing network traffic through security appliances.

### Classic Load Balancer (CLB)

**Classic Load Balancer** is the legacy AWS load balancer.
- Supports older Layer 4 and Layer 7 load-balancing functionality.
- Primarily associated with legacy applications.
- AWS recommends using the newer load balancer types for new applications.

### ALB vs NLB

This is the most important load balancer distinction for the Cloud Practitioner exam.

| Feature               | Application Load Balancer (ALB)   | Network Load Balancer (NLB)              |
| --------------------- | --------------------------------- | ---------------------------------------- |
| **OSI Layer**         | Layer 7                           | Layer 4                                  |
| **Primary Protocols** | HTTP, HTTPS                       | TCP, UDP, TLS                            |
| **Primary Focus**     | Application-level traffic routing | High-performance transport-level routing |
| **Latency**           | Application-level processing      | Ultra-low latency                        |
| **Exam Keyword**      | HTTP/HTTPS web application        | Ultra-low latency, TCP/UDP               |

**Important Exam Clues:**
- **HTTP/HTTPS application-level routing - Application Load Balancer**
- **Ultra-low latency or TCP/UDP traffic - Network Load Balancer**

## 2.4 Internet-Facing vs Internal Load Balancers

Load balancers can be configured to serve either **public internet traffic** or **internal application traffic**.

### Internet-Facing Load Balancer

An **Internet-Facing Load Balancer** receives traffic from users over the internet.
- Deployed using **public subnets**.
- Used for applications that must be accessible publicly.
- Commonly placed in front of the web tier.

**Example**: Internet users accessing a website hosted on EC2 instances.

### Internal Load Balancer

An **Internal Load Balancer** distributes traffic within a private network.
- Uses private IP addresses for internal communication.
- Commonly deployed in **private subnets**.
- Used for communication between internal application tiers.

Example: A web tier sending requests to application servers through an internal load balancer.

### Comparison

| Feature             | Internet-Facing ELB    | Internal ELB                  |
| ------------------- | ---------------------- | ----------------------------- |
| **Traffic Source**  | Public internet        | Internal network              |
| **Typical Subnet**  | Public subnet          | Private subnet                |
| **Common Use Case** | Public-facing websites | Internal application services |
| **Accessibility**   | Publicly reachable     | Privately reachable           |

**Exam Distinction:**
- **Publicly accessible application - Internet-Facing Load Balancer**
- **Private application-to-application communication - Internal Load Balancer**

## 2.5 Load Balancer Security Groups

**Security Groups** control inbound and outbound network traffic for supported load balancers and EC2 instances.

A common architecture uses separate security groups for the load balancer and backend EC2 instances.

### Load Balancer Security Group

Controls which clients can connect to the load balancer.

For example:
- Allow **HTTP (port 80)** from the internet.
- Allow **HTTPS (port 443)** from the internet.

### EC2 Security Group

Controls which sources can connect to the backend EC2 instances.
- Backend EC2 instances should accept application traffic from the **Load Balancer Security Group**.
- The EC2 security group can reference the load balancer's security group ID instead of allowing traffic from arbitrary public IP addresses.
- This restricts direct access to backend instances.

**Key Concept**: Security group rules can reference **another security group** as a traffic source, not only IP addresses or CIDR ranges.

**Exam Scenario**: Backend EC2 instances should receive application traffic only through the load balancer - Allow inbound traffic from the **Load Balancer Security Group**.

## 2.6 Exam Focus

- **Elastic Load Balancing (ELB) - Automatically distributes incoming traffic across healthy targets.**
- **Health Checks - Detect unhealthy targets and prevent new traffic from being routed to them.**
- **Listener - Receives requests on a configured protocol and port.**
- **Target Group - Organizes backend targets that receive traffic.**
- **Sticky Sessions - Keep client requests associated with the same backend target.**
- **AWS Certificate Manager (ACM) - Provides SSL/TLS certificates for HTTPS communication.**
- **Application Load Balancer (ALB) - Layer 7, HTTP/HTTPS traffic.**
- **Network Load Balancer (NLB) - Layer 4, TCP/UDP, ultra-low latency.**
- **Gateway Load Balancer (GWLB) - Layer 3, network security appliances.**
- **Classic Load Balancer (CLB) - Legacy load balancer.**
- **Internet-Facing ELB - Receives public internet traffic.**
- **Internal ELB - Handles private application traffic.**
- **Security Group Referencing - Restrict EC2 inbound traffic to the load balancer's security group.**

**Exam Scenario Clues:**

- **Distribute web traffic across multiple EC2 instances - Elastic Load Balancing.**
- **Route HTTP/HTTPS application traffic - Application Load Balancer.**
- **Require ultra-low latency and TCP/UDP support - Network Load Balancer.**
- **Deploy network security appliances - Gateway Load Balancer.**
- **Avoid routing requests to an unhealthy application - ELB Health Checks.**
- **Secure HTTPS communication - SSL/TLS certificates from AWS Certificate Manager.**
- **Restrict backend EC2 access to load balancer traffic - Reference the ELB Security Group.**

# 3 - \[Exercise] - Application Load Balancer with Two Backend EC2 Instances

## 3.1 Application Load Balancer Architecture

An **Application Load Balancer (ALB)** distributes incoming HTTP/HTTPS traffic across multiple backend targets, such as **Amazon EC2 instances**.

In this exercise, an **internet-facing ALB** distributes traffic between two EC2 web servers deployed across **two Availability Zones (AZs).**

### Architecture Overview

- **Application Load Balancer (ALB):** Receives incoming requests from internet users.
- **Two EC2 Instances**: Host separate web servers.
- **Multiple Availability Zones**: Each EC2 instance runs in a different AZ to improve availability.
- **Target Group**: Registers both EC2 instances as backend targets.
- **HTTP Listener**: Receives traffic on port 80 and forwards requests to the target group.
- **Security Groups**: Control access to the ALB and backend EC2 instances.

### How Traffic Flows

1. A user accesses the application using the **ALB DNS name**.
2. The ALB receives the HTTP request through its **listener on port 80**.
3. The listener forwards the request to the configured **target group**.
4. The ALB distributes traffic across the healthy EC2 instances.
5. Each EC2 instance responds with its hosted web page.

**Key Concept**: Users access the application through the ALB instead of connecting directly to individual EC2 instances.

## 3.2 Target Groups and Health Checks

A **Target Group** contains the backend resources that receive traffic from the load balancer.

In this exercise:
- **Target Type**: EC2 Instances.
- **Protocol**: HTTP.
- **Registered Targets**: Two EC2 web servers.
- **Health Check Path**: `/index.html`.

### Health Checks

The ALB uses **Health Checks** to determine whether its registered targets are available to process requests.
- The ALB periodically checks the configured health check path.
- A target is marked **Healthy** after meeting the configured success criteria.
- A target is marked **Unhealthy** after meeting the configured failure criteria.
- The ALB stops routing normal requests to an unhealthy target when healthy alternatives are available.

**Important**: An EC2 instance can be running but still fail its application health checks.

**Exam Scenario**: An application server stops responding to HTTP requests - The ALB uses health checks to identify the unhealthy target.

## 3.3 Security Groups for ALB and EC2

The exercise demonstrates how **Security Groups** restrict traffic between an internet-facing ALB and its backend EC2 instances.

### Security Group Configuration

| Resource               | Inbound Rule   | Source             |
| ---------------------- | -------------- | ------------------ |
| **ALB Security Group** | HTTP - Port 80 | Anywhere (IPv4)    |
| **EC2 Security Group** | HTTP - Port 80 | ALB Security Group |

### Security Group Referencing

Instead of allowing traffic from an entire VPC CIDR range, the EC2 security group can reference the **ALB Security Group ID**.
- Allows the backend EC2 instances to receive application traffic from the ALB.
- Prevents other resources from accessing the web servers unless separately permitted.
- Reduces unnecessary exposure of backend instances.

**Key Distinction:**
- **ALB Security Group - Controls who can access the load balancer.**
- **EC2 Security Group - Controls who can access the backend instances.**

**Exam Scenario**: Allow only the load balancer to communicate with backend EC2 instances - Reference the **ALB Security Group** in the EC2 inbound rules.

## 3.4 Load Balancing Across Multiple Availability Zones

The exercise deploys two EC2 instances in separate Availability Zones within the same AWS Region.

This demonstrates how an ALB can distribute application traffic across multiple AZs.

### Key Benefits

- **Traffic Distribution**: Incoming requests are distributed across available backend servers.
- **High Availability**: Running instances across multiple AZs reduces dependency on a single AZ.
- **Health Monitoring**: The ALB monitors whether registered instances can process requests.

The demonstration shows requests being served by different web servers when the ALB DNS name is refreshed.

**Important**: An ALB distributes traffic across healthy targets, but it does not automatically create additional EC2 instances. That responsibility belongs to **Amazon EC2 Auto Scaling.**

## 3.5 Resource Cleanup and Cost Awareness

After completing an AWS exercise, unused resources should be deleted to avoid unnecessary charges.

- **EC2 Instances**: Terminate instances that are no longer required.    
- **Application Load Balancer**: Delete the ALB to stop ongoing load balancer charges.
- **Target Groups**: Delete unused target groups to keep the environment organized.

**Key Concept**: AWS resources can continue generating charges even when they are no longer actively being used.

## 3.6 Exam Focus

- **Application Load Balancer (ALB) - Distributes HTTP/HTTPS traffic across backend targets.**
- **Multiple Availability Zones - Improve application high availability.**
- **Target Group - Contains registered backend targets such as EC2 instances.**
- **Listener - Receives incoming requests on a configured protocol and port.**
- **Health Checks - Determine whether backend targets can serve requests.**
- **ALB DNS Name - Provides an endpoint for accessing the application.**
- **ALB Security Group - Allows client traffic to reach the load balancer.**
- **EC2 Security Group - Can restrict backend access to the ALB Security Group.**
- **Cost Optimization - Delete unused EC2 instances and load balancers.**

**Exam Scenario Clues:**

- **Distribute HTTP requests across two EC2 instances - Application Load Balancer.**
- **Improve availability across infrastructure failures - Deploy EC2 instances across multiple AZs.**
- **Stop routing requests to an unhealthy server - ALB Health Checks.**
- **Allow only ALB traffic to backend EC2 instances - Security Group Referencing.**
- **Automatically increase the number of EC2 instances - Amazon EC2 Auto Scaling, not ALB.**

# 4 - EC2 Autoscaling Group (ASG)

## 4.1 Amazon EC2 Auto Scaling

**Amazon EC2 Auto Scaling** automatically adjusts the number of EC2 instances based on application demand.

It uses **Auto Scaling Groups (ASGs)** to manage EC2 capacity through **Horizontal Scaling**.

### Key Features

- **Scale Out**: Automatically launch additional EC2 instances when demand increases.
- **Scale In**: Automatically terminate unnecessary EC2 instances when demand decreases.
- **Maintain Desired Capacity**: Ensure the required number of EC2 instances is running.
- **Health Monitoring**: Automatically replace unhealthy EC2 instances.
- **Elastic Load Balancing Integration**: Automatically register and deregister EC2 instances with a load balancer.
- **Cost Optimization**: Run only the required number of EC2 instances to reduce unnecessary costs.

**Key Concept**: EC2 Auto Scaling improves application availability and scalability while optimizing costs by adjusting computing capacity based on demand.

## 4.2 Auto Scaling Group Capacity Configuration

An **Auto Scaling Group (ASG)** manages the number of EC2 instances using three capacity settings.

| Setting              | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **Minimum Capacity** | Minimum number of EC2 instances that must remain running     |
| **Desired Capacity** | Target number of EC2 instances the ASG attempts to maintain  |
| **Maximum Capacity** | Maximum number of EC2 instances the ASG is allowed to launch |

### Example

Suppose an Auto Scaling Group is configured with:
- **Minimum Capacity**: 2 instances.    
- **Desired Capacity**: 3 instances.
- **Maximum Capacity**: 10 instances.

The ASG initially maintains **3 EC2 instances**.

- When demand increases, it can scale out up to **10 instances**.
- When demand decreases, it can scale in to as few as **2 instances**.
- The ASG maintains the configured desired capacity unless scaling actions adjust it.

### Why Maximum Capacity Matters

Setting a maximum capacity helps control infrastructure costs.

For example, during a **Distributed Denial-of-Service (DDoS) attack**, unusually high traffic could cause EC2 utilization to remain elevated.

Without appropriate scaling limits, the ASG could continue adding instances, increasing costs.

**Key Concept**: Minimum and maximum capacity settings establish boundaries for automatic scaling.

## 4.3 Types of EC2 Auto Scaling

Amazon EC2 Auto Scaling supports several scaling strategies.

| Scaling Type           | How It Works                                                                       | Example                                        |
| ---------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Manual Scaling**     | Manually change desired capacity                                                   | Increase desired instances from 3 to 5         |
| **Dynamic Scaling**    | Automatically scale based on monitored metrics                                     | Add instances when CPU utilization exceeds 80% |
| **Scheduled Scaling**  | Scale at predefined times                                                          | Add capacity for a planned monthly sale        |
| **Predictive Scaling** | Uses machine learning and historical utilization trends to forecast capacity needs | Anticipate recurring traffic increases         |

### Manual Scaling

**Manual Scaling** allows administrators to change the desired EC2 capacity directly.
- Configured using the **AWS Management Console** or **AWS CLI**.
- The ASG launches or terminates instances to match the updated desired capacity.

### Dynamic Scaling

**Dynamic Scaling** automatically adjusts EC2 capacity based on monitored metrics, such as CPU utilization.

Two approaches covered in this lesson are:

1. **Simple Scaling**
- Uses predefined conditions and scaling adjustments.
- Example: If average CPU utilization exceeds **80%,** add one EC2 instance.
- Can also remove instances when utilization falls below a configured threshold.

1. **Target Tracking Scaling**
- Maintains a specified target value for a metric.
- Example: Maintain average CPU utilization at **40%** across the EC2 fleet.
- Automatically adds or removes instances to keep utilization near the target.

**Key Distinction:**
- **Simple Scaling - Scale based on a defined threshold and adjustment.**
- **Target Tracking - Automatically adjust capacity to maintain a target metric value.**

### Scheduled Scaling

**Scheduled Scaling** adjusts EC2 capacity at predefined times.
- Suitable for workloads with predictable increases or decreases in demand.
- Example: An e-commerce website increases capacity before a scheduled end-of-month sale.

### Predictive Scaling

**Predictive Scaling** uses **machine learning** to forecast future capacity requirements.
- Analyzes historical utilization patterns.
- Predicts future workload demand.
- Proactively adjusts capacity based on expected usage.

**Exam Distinction:**
- **Metrics-driven scaling - Dynamic Scaling**
- **Time-based scaling - Scheduled Scaling**
- **Historical pattern-based forecasting - Predictive Scaling**

## 4.4 EC2 Auto Scaling with CloudWatch and Elastic Load Balancing

**Amazon EC2 Auto Scaling** integrates with **Amazon CloudWatch** and **Elastic Load Balancing (ELB)** to automatically adjust computing capacity and distribute traffic.

### How Dynamic Auto Scaling Works

1. **Amazon CloudWatch** monitors EC2 metrics, such as average CPU utilization.
2. A **CloudWatch Alarm** detects when utilization exceeds a configured threshold.
3. The **Auto Scaling Group** launches additional EC2 instances based on the scaling policy.
4. The **Elastic Load Balancer** automatically registers the new instances through the associated target group.
5. The load balancer distributes incoming traffic across healthy instances, helping reduce the average workload per instance.

### Scaling Example

| Condition                        | ASG Action                          | Purpose                  |
| -------------------------------- | ----------------------------------- | ------------------------ |
| Average CPU greater than **80%** | **Scale Out** - Add EC2 instances   | Handle increased demand  |
| Average CPU less than **30%**    | **Scale In** - Remove EC2 instances | Reduce unnecessary costs |

*These CPU thresholds are examples, not AWS default scaling thresholds.*

### Automatic Health Replacement

Auto Scaling Groups also help maintain application availability by replacing unhealthy EC2 instances.
- The ASG detects instances that fail its configured health checks.
- Unhealthy instances are removed and replaced with new instances.
- The ASG restores the required capacity automatically.

### ELB vs EC2 Auto Scaling

| Service                          | Primary Responsibility                                        |
| -------------------------------- | ------------------------------------------------------------- |
| **Elastic Load Balancing (ELB)** | Distributes incoming traffic across healthy backend targets   |
| **Amazon EC2 Auto Scaling**      | Automatically adds, removes, and replaces EC2 instances       |
| **Amazon CloudWatch**            | Monitors metrics and triggers alarms used by scaling policies |

**Key Concept**: ELB handles traffic distribution, while EC2 Auto Scaling manages instance capacity. Together, they improve high availability, scalability, and cost efficiency.

## 4.5 Exam Focus

- **Amazon EC2 Auto Scaling - Automatically adjusts EC2 instance capacity based on demand.**
- **Auto Scaling Group (ASG) - Maintains the desired number of EC2 instances within minimum and maximum limits.**
- **Scale Out - Add EC2 instances when demand increases.**
- **Scale In - Remove EC2 instances when demand decreases.**
- **Minimum Capacity - Lowest number of instances allowed.**
- **Desired Capacity - Target number of instances to maintain.**
- **Maximum Capacity - Highest number of instances allowed.**
- **Manual Scaling - Manually change the desired capacity.**
- **Dynamic Scaling - Automatically scale using monitored metrics.**
- **Target Tracking Scaling - Maintain a target metric value, such as average CPU utilization.**
- **Scheduled Scaling - Scale at predefined times.**
- **Predictive Scaling - Use machine learning and historical patterns to forecast demand.**
- **Automatic Health Replacement - Replace unhealthy EC2 instances to maintain capacity.**
- **Amazon CloudWatch - Monitors metrics and supports scaling decisions.**

**Exam Scenario Clues:**

- **Automatically add EC2 instances during high traffic - EC2 Auto Scaling.**
- **Automatically reduce EC2 instances during low demand - EC2 Auto Scaling.**
- **Maintain average CPU utilization around 40% - Target Tracking Scaling.**
- **Increase capacity before a scheduled sale - Scheduled Scaling.**
- **Forecast future capacity using historical patterns - Predictive Scaling.**
- **Replace failed EC2 instances automatically - Auto Scaling Group.**
- **Distribute incoming traffic across newly launched instances - Elastic Load Balancing.**
- **Limit the maximum number of EC2 instances to control costs - ASG Maximum Capacity.**

# 5 - Section Summary

## 5.1 Load Balancer and Auto Scaling Summary

**Elastic Load Balancing (ELB)** and **Amazon EC2 Auto Scaling** work together to provide **High Availability, Scalability**, and **Cost Optimization**.

### High Availability and Scalability

- **High Availability**: Deploy EC2 instances across multiple **Availability Zones (AZs)** to reduce downtime.
- **Elastic Load Balancing (ELB):** Distributes incoming traffic across healthy backend targets, including EC2 instances, containers, IP addresses, and Lambda functions (depending on load balancer type).
- **EC2 Auto Scaling**: Automatically adds or removes EC2 instances based on demand to maintain the required capacity and optimize costs.

### Types of Load Balancers

| Load Balancer                       | OSI Layer | Primary Use Case             |
| ----------------------------------- | --------- | ---------------------------- |
| **Application Load Balancer (ALB)** | Layer 7   | HTTP/HTTPS applications      |
| **Network Load Balancer (NLB)**     | Layer 4   | TCP/UDP, ultra-low latency   |
| **Gateway Load Balancer (GWLB)**    | Layer 3   | Security appliances, IDS/IPS |
| **Classic Load Balancer (CLB)**     | Layer 4/7 | Legacy applications          |

### ELB Troubleshooting

- **ALB cannot connect to backend EC2 instances**: Check the **EC2 Security Group** inbound rules.    
- **HTTP 503 (Service Unavailable):** Check whether the target group has registered, available targets.
- **Unhealthy Targets**: ELB uses **Health Checks** to avoid routing normal traffic to unhealthy targets when healthy alternatives exist.

### Auto Scaling Policies

| Policy                 | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| **Manual Scaling**     | Manually adjust desired EC2 capacity                           |
| **Dynamic Scaling**    | Automatically scale based on metrics                           |
| **Scheduled Scaling**  | Scale at predefined times                                      |
| **Predictive Scaling** | Forecast demand using machine learning and historical patterns |

## 5.2 Exam Focus

- **High Availability - Deploy EC2 instances across multiple Availability Zones.**
- **Traffic Distribution - Elastic Load Balancing (ELB).**
- **Automatic EC2 Capacity Adjustment - EC2 Auto Scaling.**
- **HTTP/HTTPS Traffic - Application Load Balancer (ALB).**
- **TCP/UDP and Ultra-Low Latency - Network Load Balancer (NLB).**
- **Network Security Appliances (IDS/IPS) - Gateway Load Balancer (GWLB).**
- **Legacy Load Balancing - Classic Load Balancer (CLB).**
- **Backend Connection Issues - Check EC2 Security Groups.**
- **HTTP 503 Error - Check for registered and available targets.**
- **Unhealthy Backend Instances - ELB Health Checks.**
- **Automatic Scaling Based on Metrics - Dynamic Scaling.**
- **Predictable Traffic Spikes - Scheduled Scaling.**
- **Forecasting Future Capacity - Predictive Scaling.**
- **Cost Optimization - Scale in unnecessary EC2 instances during low demand.**

# 6 - Quiz

## 6.1 Practice Question

### Original Question

A company runs a railway booking website where they offer a flash sale for 2 hours every day between 9 AM and 11 AM. During this period, they experience high traffic and need to scale their capacity.

Which is the best way to handle this kind of traffic?

### Choices

A. Use Auto Scaling Group with dynamic scaling policy  
B. Use Auto Scaling Group with scheduled scaling policy  
C. Use Auto Scaling Group with manual scaling policy  
D. Configure ALB to scale the capacity

### Correct Answer

**B. Use Auto Scaling Group with scheduled scaling policy**

### Why?

**Scheduled Scaling** is ideal when traffic increases at **known, predictable times**.
- The company knows traffic will increase daily between **9 AM** and **11 AM**.
- An **Auto Scaling Group (ASG)** can be configured to increase EC2 capacity before the sale and reduce it afterward.
- This ensures sufficient capacity during peak traffic while minimizing unnecessary costs.

**Why Not the Others?**

- **A. Dynamic Scaling**: Reacts to monitored metrics such as CPU utilization. Useful for unpredictable traffic increases, but scheduled scaling is more appropriate here.
- **C. Manual Scaling**: Requires administrators to adjust capacity manually.
- **D. Application Load Balancer**: Distributes incoming traffic but does not automatically add EC2 instances.

**Exam Clue: Predictable traffic at specific times - Scheduled Scaling.**

## 6.2 Practice Question

### Original Question

A company needs to ensure that their load balancer provides a static IP address for clients to whitelist in their firewalls.

Which type of load balancer should they use?

### Choices

A. Network Load Balancer  
B. Application Load Balancer  
C. Classic Load Balancer  
D. Gateway Load Balancer

### Correct Answer

**A. Network Load Balancer**

### Why?

**Network Load Balancer (NLB)** supports **static IP addresses**, making it suitable for applications that require IP whitelisting.
- Operates at **Layer 4 (Transport Layer).**
- Provides a static IP address for each enabled **Availability Zone**.
- Internet-facing NLBs can use **Elastic IP addresses**.
- Suitable for applications requiring consistent IP addresses and high-performance network traffic.

**Why Not the Others?**

- **B. Application Load Balancer**: Operates at Layer 7 and uses DNS-based access without directly providing fixed static IP addresses.    
- **C. Classic Load Balancer**: Legacy load balancer that does not provide the same static IP capability.
- **D. Gateway Load Balancer**: Primarily used for deploying network security appliances.

**Exam Clue: Static IP address or IP whitelisting - Network Load Balancer.**

## 6.3 Practice Question

### Original Question

A startup needs a Load Balancer for TCP and UDP traffic with low latency. What should they use?

### Choices

A. Application Load Balancer  
B. Classic Load Balancer  
C. Gateway Load Balancer  
D. Network Load Balancer

### Correct Answer

**D. Network Load Balancer**

### Why?

**Network Load Balancer (NLB)** is designed for **high-performance, low-latency network traffic**.
- Operates at **Layer 4 (Transport Layer)**.
- Supports **TCP, UDP, and TLS** protocols.
- Optimized for high throughput and **ultra-low latency**.

**Why Not the Others?**

- **A. Application Load Balancer**: Primarily designed for HTTP/HTTPS traffic at Layer 7.
- **B. Classic Load Balancer**: Legacy load balancer and not the preferred choice for modern high-performance TCP/UDP workloads.
- **C. Gateway Load Balancer**: Designed for network security appliances and traffic inspection.

**Exam Clue: TCP/UDP with ultra-low latency - Network Load Balancer.**

## 6.4 Practice Question

### Original Question

A developer wants to ensure requests from the same client are always routed to the same instance. What should they enable?

### Choices

A. Health checks  
B. Sticky Sessions  
C. Auto Scaling  
D. This is not possible

### Correct Answer

**B. Sticky Sessions**

### Why?

**Sticky Sessions**, also called **Session Affinity**, allow requests from the same client to be routed to the same backend instance for a configured session duration.
- Helps maintain **session continuity**.
- Useful when applications store session-related information on individual backend instances.
- Supported by **Elastic Load Balancing**.

*Note: Session affinity does not guarantee the same instance indefinitely, particularly if the target becomes unavailable.*

**Why Not the Others?**

- **A. Health Checks**: Determine whether backend instances are healthy.
- **C. Auto Scaling**: Automatically adds or removes EC2 instances based on demand.
- **D. This is not possible**: Incorrect because ELB supports Sticky Sessions.

**Exam Clue: Route requests from the same client to the same backend instance - Sticky Sessions.**

## 6.5 Practice Question

### Original Question

There is a web application that can be accessed over HTTPS. It is required to distribute the traffic across different backend EC2 instances based on the URL path.

Which AWS Load Balancer is best for routing this traffic?

### Choices

A. Application Load Balancer (ALB)  
B. Network Load Balancer (NLB)  
C. Gateway Load Balancer (GLB)  
D. HTTP Load Balancer (HLB)

### Correct Answer

**A. Application Load Balancer (ALB)**

### Why?

**Application Load Balancer (ALB)** operates at **Layer 7 (Application Layer)** and supports HTTP/HTTPS application-level routing.
- Supports **Path-Based Routing**, which routes requests to different target groups based on their URL paths.
- Also supports **Host-Based Routing**, which routes requests based on domain names.
- Suitable for distributing web application traffic across multiple backend EC2 instances.

Example:

- `/images` - Route to an image service.
- `/api` - Route to an API service.
- `/orders` - Route to an order service.

Why Not the Others?

- **B. Network Load Balancer**: Operates at Layer 4 and does not support HTTP URL path-based routing.
- **C. Gateway Load Balancer**: Designed for network security appliances.
- **D. HTTP Load Balancer**: Not an official AWS Elastic Load Balancing type.

**Exam Clue: HTTP/HTTPS with URL path-based routing - Application Load Balancer.**

## 6.6 Practice Question

### Original Question

A team needs to scale EC2 instances automatically based on CPU usage. What feature should they configure?

### Choices

A. Elastic Load Balancer  
B. Auto Scaling Group  
C. Amazon Route 53  
D. EC2 Reserved Instances

### Correct Answer

**B. Auto Scaling Group**

### Why?

**Auto Scaling Groups (ASGs)** automatically adjust the number of EC2 instances according to scaling policies.
- Uses **Dynamic Scaling** to adjust capacity based on metrics such as CPU utilization.
- **Scales Out**: Ads EC2 instances when CPU utilization increases.
- **Scales In**: Removes unnecessary instances when CPU utilization decreases.
- Works with **Amazon CloudWatch** to monitor metrics and support scaling decisions.

**Why Not the Others?**

- **A. Elastic Load Balancer**: Distributes traffic but does not manage the number of EC2 instances. 
- **C. Amazon Route 53**: Provides DNS and routing capabilities, not EC2 capacity scaling.
- **D. EC2 Reserved Instances**: Provide pricing benefits through a usage commitment, not automatic scaling.

**Exam Clue: Automatically adjust EC2 instance count based on CPU utilization - EC2 Auto Scaling with Dynamic Scaling.**

## 6.7 Exam Focus

| Exam Scenario / Keyword                             | Correct Service or Feature      |
| --------------------------------------------------- | ------------------------------- |
| **Predictable traffic at specific times**           | Scheduled Scaling               |
| **Traffic changes based on CPU utilization**        | Dynamic Scaling                 |
| **Maintain a target CPU utilization**               | Target Tracking Scaling         |
| **Static IP addresses for firewall whitelisting**   | Network Load Balancer (NLB)     |
| **TCP/UDP and ultra-low latency**                   | Network Load Balancer (NLB)     |
| **HTTP/HTTPS and URL path-based routing**           | Application Load Balancer (ALB) |
| **Same client routed to the same backend instance** | Sticky Sessions                 |
| **Automatically add or remove EC2 instances**       | Auto Scaling Group (ASG)        |
| **Distribute traffic across backend instances**     | Elastic Load Balancing (ELB)    |

### Key Exam Distinctions

- **ALB vs NLB**: ALB is for Layer 7 HTTP/HTTPS routing; NLB is for Layer 4 TCP/UDP, static IPs, and ultra-low latency.
- **ELB vs ASG**: ELB distributes traffic; ASG manages EC2 instance capacity.
- **Scheduled vs Dynamic Scaling**: Scheduled scaling handles predictable time-based demand; dynamic scaling responds to monitored metrics.
- **Sticky Sessions vs Health Checks**: Sticky Sessions maintain client affinity; Health Checks identify unhealthy targets.
- **CloudWatch vs Auto Scaling**: CloudWatch monitors metrics; Auto Scaling adjusts EC2 capacity using scaling policies.