# 1 - Amazon API Gateway, AppSync, SQS, SNS, EventBridge

## **1.1 AWS Application Integration Services Overview**

**AWS Application Integration Services** help applications communicate with each other through **APIs** and **event-driven architectures**.

These services fall into two main categories:

| Category                                        | AWS Services                                           | Purpose                                                        |
| ----------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------- |
| **API Integration**                             | **Amazon API Gateway**, **AWS AppSync**                | Enable communication between applications through APIs         |
| **Event-Driven & Loosely Coupled Applications** | **Amazon SQS**, **Amazon SNS**, **Amazon EventBridge** | Enable applications to communicate through messages and events |

### **Key Concepts**

- **API (Application Programming Interface):** Allows applications or clients to communicate with backend services.
- **Event-Driven Architecture:** Applications respond automatically when specific events occur.
- **Loosely Coupled Architecture:** Components can communicate without being tightly dependent on each other.

## **1.2 API Integration - Weather Application Example**

A weather application demonstrates how multiple AWS services work together to retrieve and update information.

### **Retrieving Weather Information**

1. A user requests weather information for a specific city through **Amazon API Gateway**.
2. **API Gateway** invokes an **AWS Lambda** function.
3. **Lambda** queries an **Amazon DynamoDB** table using the city parameter.
4. The temperature information is returned to the user.

**Key Service Responsibilities:**

- **Amazon API Gateway:** Receives and manages API requests.
- **AWS Lambda:** Executes backend application logic.
- **Amazon DynamoDB:** Stores weather information.

### **Updating Weather Information Securely**

An administrator needs permission to update weather information in DynamoDB.

The application uses **Amazon Cognito** for authentication and authorization.

**Process:**

1. The administrator authenticates using **Amazon Cognito**.
2. After successful authentication, Cognito returns an **authorization token**.
3. The administrator sends a **PUT API request** with the token to **Amazon API Gateway**.
4. API Gateway validates the token.
5. If the request is authorized, **AWS Lambda** updates the **DynamoDB** table.

### **Security Concepts**

- **Authentication:** Verifies the identity of a user.
- **Authorization:** Determines whether the user is permitted to perform an operation.
- **Amazon Cognito:** Provides user authentication and authorization capabilities for applications.

**Exam clue: Secure user authentication for an application - Amazon Cognito**

## **1.3 Event-Driven Architecture - Weather Alerts**

The weather application can automatically notify users about severe weather conditions, such as cyclones or high wind speeds.

This demonstrates an **event-driven architecture** using **DynamoDB Streams**, **Amazon EventBridge**, and **Amazon SNS**.

### **Automated Weather Notification Process**

1. An administrator updates the **DynamoDB** table with severe weather information.
2. **DynamoDB Streams** captures changes made to the table and generates change records.
3. These changes can be processed as events and evaluated against rules in **Amazon EventBridge**.
4. An **EventBridge rule** identifies specific conditions, such as wind speeds exceeding 50 km/h.
5. When the condition is met, **Amazon SNS** sends notifications to subscribed users.

### **Amazon DynamoDB Streams**

**DynamoDB Streams** captures changes made to items in a DynamoDB table.
- Generates records when data is modified.
- Supports event-driven processing based on database changes.
- Useful for triggering automated actions when data changes.

### **Amazon EventBridge**

**Amazon EventBridge** is used for **event-driven application integration**.
- Processes and routes events based on configured rules.
- Allows applications to respond automatically when specific conditions are met.
- In the weather example, a rule identifies severe weather conditions that require notifications.

**Exam clue: Route events based on rules - Amazon EventBridge**

### **Amazon Simple Notification Service (Amazon SNS)**

**Amazon SNS** is a messaging service used to distribute notifications to multiple subscribers.

SNS uses two important concepts:
- **Topic:** A communication channel to which messages are published.
- **Subscribers:** Recipients that receive notifications from the topic.

Subscribers can include:
- Email addresses
- Mobile phone numbers (SMS)

**Key Characteristic:**

Amazon SNS supports **Publish/Subscribe (Pub/Sub)** messaging, allowing one message to be distributed to multiple subscribers.

This is useful for broadcasting alerts or notifications.

**Exam clue: Send the same notification to multiple subscribers - Amazon SNS**

## **1.4 Application Integration Service Comparison**

| AWS Service            | Main Purpose                                     | Exam Scenario                             |
| ---------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Amazon API Gateway** | Manage APIs and receive application requests     | Expose backend functionality through APIs |
| **AWS AppSync**        | API-based application integration                | Application communication through APIs    |
| **Amazon SQS**         | Message queuing for loosely coupled applications | Decouple components using message queues  |
| **Amazon SNS**         | Publish messages to multiple subscribers         | Broadcast alerts and notifications        |
| **Amazon EventBridge** | Event-driven integration using rules             | Route events based on specific conditions |
| **AWS Step Functions** | Run a stateful workflow | Coordinate steps, branches, and retries |
| **Amazon SES** | Send application email | Deliver receipts, password resets, or newsletters |

**Important Distinctions:**

- **API Gateway vs Cognito:** API Gateway handles API requests. Cognito provides app sign-in and identity features. See [workforce federation and Cognito](./05%20-%20Foundation%20-%20AWS%20IAM.md).
- **SNS vs EventBridge:** SNS distributes messages to subscribers; EventBridge routes events based on configured rules.
- **SQS vs SNS:** SQS queues messages for processing; SNS distributes messages to multiple subscribers.

## **1.5 Exam Focus**

- **API management - Amazon API Gateway**
- **API-based application integration - AWS AppSync**
- **User authentication and authorization - Amazon Cognito**
- **Execute backend logic without managing servers - AWS Lambda**
- **Store application data in a NoSQL database - Amazon DynamoDB**
- **Capture DynamoDB table changes - DynamoDB Streams**
- **Message queues and application decoupling - Amazon SQS**
- **Publish/Subscribe messaging and broadcasting notifications - Amazon SNS**
- **Event routing based on rules - Amazon EventBridge**
- **Event-Driven Architecture - Applications automatically respond to events**
- **Loosely Coupled Architecture - Components communicate with reduced dependencies**

## 1.6 Workflow orchestration and application email

**AWS Step Functions** runs a workflow defined as a state machine. For an order, it can validate payment, retry a failed call, branch on stock availability, and request shipment. **EventBridge** can start the workflow when the order arrives. **SQS** can buffer work for consumers. **SNS** can send a notification to multiple subscribers.

**Amazon Simple Email Service (SES)** sends customer-facing email from applications. Use it for a receipt or password-reset message. A notification published to a topic with multiple subscriber types points to SNS.

[Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html) · [Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/Welcome.html)

# 2 - Amazon API Gateway

## **2.1 Amazon API Gateway Overview**

**Amazon API Gateway** is a **fully managed, serverless AWS service** that allows developers to create, publish, manage, monitor, and secure APIs.

An **API (Application Programming Interface)** enables clients to communicate with backend applications or services.

### **Why Use Amazon API Gateway?**

Applications can expose APIs directly from backend servers, such as **Amazon EC2**, without using API Gateway.

However, developers must then manage additional responsibilities, including:
- **Authentication and Authorization:** Control who can access APIs.
- **API Throttling:** Limit excessive API requests to protect backend applications.
- **API Key Management:** Generate and manage API keys for clients.
- **Monitoring and Logging:** Track API requests, usage, and performance.
- **Security:** Help protect applications from excessive or malicious traffic.

**Amazon API Gateway** handles many of these responsibilities, allowing developers to focus on their **core business logic**.

### **Decoupling APIs from Backend Logic**

API Gateway separates **API management** from **backend application logic**.
- **Client:** Communicates with APIs exposed through API Gateway.
- **Amazon API Gateway:** Manages incoming API requests, security, and routing.
- **Backend Service:** Executes the actual business logic.

The client does not need to know which backend service processes the request.

**Key Benefit:** API Gateway simplifies API management and reduces the operational effort required to expose backend services.

## **2.2 Amazon API Gateway Features**

### **Security and Access Control**

Amazon API Gateway provides several security-related capabilities:
- **Authentication and Authorization:** Controls access to APIs.
- **API Throttling:** Limits the rate of incoming API requests to prevent backend overload.
- **API Keys:** Identifies and tracks API clients.
- **Request Management:** Helps manage incoming traffic to backend services.

**Important:** API keys are useful for identifying clients and tracking usage, but they are not a replacement for proper authentication and authorization.

### **Monitoring and Logging**

Amazon API Gateway integrates with **Amazon CloudWatch** for monitoring and logging.

This allows developers to:
- Monitor API activity and performance.
- Track API requests.
- Identify operational issues.

### **API Usage Tracking**

API Gateway supports tracking API usage by individual clients.
- API keys can help identify clients and track their API consumption.
- Developers can monitor how many API requests each client makes.
- Usage information can support client-based billing models.

**Exam clue: Manage, secure, throttle, and monitor APIs - Amazon API Gateway**

## **2.3 Types of APIs Supported**

Amazon API Gateway supports three main API types:

|API Type|Communication Model|Use Case|
|---|---|---|
|**REST API**|Request-Response|Traditional RESTful applications|
|**HTTP API**|Request-Response|HTTP-based application APIs|
|**WebSocket API**|Persistent, two-way communication|Real-time applications requiring continuous updates|

### **REST and HTTP APIs**

REST and HTTP APIs commonly use the **Request-Response Model**.
- A client sends an API request.
- The backend processes the request.
- A response is returned to the client.

Suitable for applications where clients request information or perform operations.

### **WebSocket APIs**

**WebSocket APIs** enable persistent, two-way communication between clients and backend applications.
- Maintain an active connection between the client and API.
- Allow servers to push updates to clients in real time.
- Useful for **low-latency, real-time applications**.

**Example:** A stock market application continuously updates stock prices without requiring users to repeatedly request new information.

**Key Distinction:**

- **REST / HTTP APIs - Request-Response communication**
- **WebSocket APIs - Persistent connections and real-time updates**

## **2.4 Integration with AWS Services**

Amazon API Gateway integrates with various AWS services that host backend applications.

Examples include:

| AWS Service                 | Role                                   |
| --------------------------- | -------------------------------------- |
| **AWS Lambda**              | Execute serverless backend logic       |
| **Amazon EC2**              | Host applications on virtual servers   |
| **Amazon ECS / Amazon EKS** | Run containerized backend applications |
| **AWS Elastic Beanstalk**   | Deploy and manage backend applications |

**Example:**

A weather application uses the following services:
1. A client sends a request to **Amazon API Gateway**.
2. API Gateway invokes an **AWS Lambda** function.
3. Lambda retrieves weather information from **Amazon DynamoDB**.
4. The response is returned to the client through API Gateway.

**Key Concept:** API Gateway manages API access and requests, while backend services execute the application logic.

## **2.5 Custom Domain Names**

Amazon API Gateway supports **custom domain names** for APIs.

By default, AWS generates an API endpoint with an AWS-provided domain name.

Organizations can instead use their own domain, such as `api.example.com`.

### **AWS Services Involved**

- **AWS Certificate Manager (ACM):** Provides SSL/TLS certificates to enable secure HTTPS connections.
- **Amazon Route 53:** DNS service used to point the custom domain name to the API Gateway endpoint.
- **Amazon API Gateway:** Hosts the API and supports the custom domain configuration.

**Example Process:**

1. Configure a custom domain name for API Gateway.
2. Obtain an **SSL/TLS certificate** using **AWS Certificate Manager (ACM)**.
3. Associate the certificate with the API Gateway custom domain.
4. Configure **Amazon Route 53** DNS records to direct requests to API Gateway.

**Exam Associations:**

- **Secure HTTPS certificates - AWS Certificate Manager**
- **DNS management - Amazon Route 53**
- **Custom API endpoint - Amazon API Gateway**

## **2.6 Amazon API Gateway Pricing**

Amazon API Gateway follows a **serverless, usage-based pricing model**.
- No infrastructure provisioning or server management is required.
- Charges are primarily based on API usage.
- API request volume is an important pricing factor.
- No API request charges are incurred when no requests are made.

**Key Benefit:** Pay based on usage instead of provisioning and maintaining dedicated API infrastructure.

## **2.7 Exam Focus**

- **Fully managed API management service - Amazon API Gateway**
- **Serverless API management - No servers to provision or manage**
- **Separate API management from backend logic - Amazon API Gateway**
- **Control excessive API requests - API Throttling**
- **Identify clients and track API usage - API Keys**
- **Monitor API activity and logs - Amazon CloudWatch**
- **Traditional Request-Response APIs - REST / HTTP APIs**
- **Real-time, bidirectional communication - WebSocket APIs**
- **Execute serverless backend logic - AWS Lambda**
- **Custom API domain with HTTPS - API Gateway + AWS Certificate Manager**
- **Configure DNS for custom API domains - Amazon Route 53**
- **Usage-based API pricing - Pay based on API consumption**

**Important Exam Distinctions:**

- **API Gateway vs Lambda:** API Gateway manages API requests; Lambda executes backend code.
- **REST/HTTP vs WebSocket:** REST/HTTP commonly use request-response communication; WebSocket supports persistent, real-time communication.
- **API Keys vs Authentication:** API keys identify and track clients; authentication verifies user or client identity.

# 3 - AWS AppSync

## **3.1 AWS AppSync Overview**

**AWS AppSync** is a **fully managed AWS service** used to build APIs based on **GraphQL** technology.

GraphQL is an API query language originally developed by Facebook that allows clients to request exactly the data they need.

### **Key Features**

- **GraphQL APIs:** Retrieve data from multiple backend services through a single API request.
- **Selective Data Retrieval:** Clients specify which fields they want in the response.
- **Data Aggregation:** Combines information from multiple backend data sources into one response.
- **Real-Time Updates:** Supports **Publish/Subscribe (Pub/Sub)** communication for automatic data updates.

**Key Benefit:** AWS AppSync simplifies data retrieval by reducing unnecessary API requests and allowing clients to receive only the information they need.

## **3.2 GraphQL vs Traditional REST APIs**

### **Traditional REST API Approach**

Consider an **e-commerce application** that displays customer information.

The application may need to retrieve:
- Customer profile
- Order history
- Payment details
- Personalized offers

With traditional REST APIs, the application may make separate API calls to retrieve information from different backend services.

**Potential Challenges:**

- **Multiple API Requests:** The client may need to call several APIs to retrieve all required information.
- **Over-Fetching:** API responses may contain more information than the client actually needs.

For example, a mobile application may require only a customer's name and email address, but a REST API might return the entire customer profile.

### **GraphQL Approach**

**GraphQL** allows clients to request specific data fields from multiple backend sources through a single API request.

**Process:**
1. The client sends a **GraphQL query** specifying the required data.
2. **AWS AppSync** processes the query using the defined **GraphQL schema**.
3. **GraphQL resolvers** retrieve information from the appropriate backend data sources.
4. AppSync combines the requested information into a single response.

**Key Advantages:**

- Reduces the need for multiple API requests.
- Minimizes unnecessary data transfer.
- Allows different applications to request different fields.
- Simplifies retrieving related information from multiple backend services.

### **REST vs GraphQL Comparison**

|Feature|Traditional REST APIs|GraphQL APIs|
|---|---|---|
|**AWS Service**|Amazon API Gateway|AWS AppSync|
|**Data Retrieval**|Often uses multiple endpoints|Can retrieve related data in one request|
|**Response Data**|Typically defined by the API endpoint|Client specifies required fields|
|**Over-Fetching**|May return unnecessary information|Helps reduce unnecessary data|
|**Common Use Case**|General-purpose APIs|Applications requiring flexible data retrieval|

**Exam Distinction:**

- **Manage REST and HTTP APIs - Amazon API Gateway**
- **Build GraphQL APIs with flexible data retrieval - AWS AppSync**

## **3.3 Real-Time Updates with Publish/Subscribe**

AWS AppSync supports **Publish/Subscribe (Pub/Sub)** functionality through GraphQL subscriptions.

This enables applications to receive updates automatically when data changes.

### **Example: Customer Information Updates**

1. Customer information is updated in the backend.
2. A relevant update is published through the application's subscription mechanism.
3. Subscribed clients automatically receive the updated information.

This is useful for applications requiring **real-time synchronization** without repeatedly requesting updated data.

### **GraphQL Subscriptions vs WebSocket APIs**

Both AWS AppSync and Amazon API Gateway can support real-time application communication.

|AWS Service|Real-Time Capability|
|---|---|
|**AWS AppSync**|GraphQL subscriptions for real-time data updates|
|**Amazon API Gateway**|WebSocket APIs for persistent, two-way communication|

**Exam clue: GraphQL APIs with real-time subscriptions - AWS AppSync**

## **3.4 Exam Focus**

- **Fully managed GraphQL API service - AWS AppSync**
- **Query language for requesting specific data fields - GraphQL**
- **Retrieve data from multiple backend sources in one request - AWS AppSync**
- **Fetch only required fields - GraphQL**
- **Retrieve backend data for GraphQL queries - GraphQL Resolvers**
- **Real-time data updates through subscriptions - AWS AppSync**
- **REST, HTTP, and WebSocket API management - Amazon API Gateway**

**Important Exam Distinctions:**

- **API Gateway vs AppSync:** API Gateway manages REST, HTTP, and WebSocket APIs; AppSync specializes in GraphQL APIs.
- **REST vs GraphQL:** REST commonly retrieves predefined responses from endpoints; GraphQL allows clients to specify exactly which fields they need.
- **GraphQL Queries vs Subscriptions:** Queries retrieve requested data; subscriptions enable real-time updates.

# 4 - Amazon SQS

## **4.1 Amazon SQS Overview**

**Amazon Simple Queue Service (Amazon SQS)** is a **fully managed, highly available, distributed message queuing service** used to **decouple application components** and enable **asynchronous communication**.

A **message queue** temporarily stores messages sent between different application components.

### **Why Use Amazon SQS?**

In tightly coupled applications, components depend directly on one another. If one component fails, it may affect other components.

**Amazon SQS** reduces these dependencies by allowing components to communicate through queues.
- **Decoupling:** Application components communicate without direct dependencies.
- **Asynchronous Communication:** Components can send and process messages independently.
- **Reliability:** Messages remain in the queue until they are successfully processed and deleted.
- **Scalability:** Backend applications can scale based on the number of messages waiting in the queue.

**Key Benefit:** Amazon SQS improves application reliability and scalability by separating message producers from message consumers.

### **How Amazon SQS Works**
1. A **Producer** sends a message to an SQS queue.
2. The message remains in the queue until a **Consumer** retrieves it.
3. The consumer processes the message.
4. After successful processing, the consumer deletes the message from the queue.

**Important Terminology:**
- **Producer:** Application component that sends messages.
- **Consumer:** Application component that retrieves and processes messages.
- **Queue:** Temporarily stores messages between producers and consumers.

Amazon SQS supports **multiple producers and multiple consumers** accessing the same queue.

## **4.2 Types of Amazon SQS Queues**

Amazon SQS provides two main queue types:

| Feature              | Standard Queue                                            | FIFO Queue                                             |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| **Default Type**     | Yes                                                       | No                                                     |
| **Message Ordering** | Best-effort ordering; messages may arrive out of order    | Preserves message order                                |
| **Message Delivery** | At-least-once delivery                                    | Supports exactly-once processing through deduplication |
| **Primary Use Case** | Applications where strict message ordering is unnecessary | Applications requiring strict message ordering         |

### **Standard Queue**

**Standard Queues** are the default queue type in Amazon SQS.
- Messages may be delivered **out of order**.
- A message may occasionally be delivered more than once.
- Suitable when strict message ordering is not required.

### **FIFO Queue**

**FIFO (First-In-First-Out) Queues** preserve the order in which messages are sent and received.
- Ensures messages are processed in the intended order.
- Supports deduplication to prevent duplicate message processing.
- Suitable for applications where **message ordering is critical**.

**Exam Distinction:**

- **Default messaging queue without strict ordering - SQS Standard Queue**
- **Strict message ordering - SQS FIFO Queue**

## **4.3 Amazon SQS Features**

### **Message Visibility Timeout**

**Visibility Timeout** is the period during which a message becomes temporarily invisible to other consumers after being retrieved from the queue.

This prevents multiple consumers from processing the same message simultaneously during the visibility timeout.

**Example:**
1. Consumer A retrieves a message from the queue.
2. The message becomes invisible to other consumers for a configured period, such as **30 seconds**.
3. Consumer A processes the message and deletes it after successful processing.
4. If Consumer A fails to process and delete the message before the visibility timeout expires, the message becomes visible again.
5. Another consumer can retrieve and attempt to process the message.

**Key Concept:** Visibility Timeout allows failed message-processing attempts to be retried.

### **Delay Queues**

**Delay Queues** postpone the availability of newly added messages for a configured period.
- Messages are placed in the queue but are not immediately available to consumers.
- Consumers can retrieve messages after the delay period expires.

**Example:**

An email application provides an **Undo Send** feature.

The application can delay email processing, giving users a short period to cancel the operation before the message is processed.

**Exam clue: Delay message processing after submission - SQS Delay Queue**

### **Dead-Letter Queues (DLQ)**

A **Dead-Letter Queue (DLQ)** stores messages that could not be processed successfully after repeated attempts.
- Failed messages can be moved to a separate queue.
- Developers can investigate why message processing failed.
- Messages can be corrected and reprocessed when appropriate.

**Key Benefit:** Dead-letter queues help isolate failed messages for troubleshooting without repeatedly disrupting normal message processing.

**Exam clue: Store and troubleshoot messages that repeatedly fail processing - Dead-Letter Queue**

## **4.4 Amazon SQS Use Cases**

### **Decoupling Microservices**

Amazon SQS allows microservices to communicate asynchronously.
- Each microservice can operate independently.
- Failures in one component do not necessarily stop other components.
- Messages remain queued while consumers are unavailable.

**Example:** An order-processing application stores incoming orders in an SQS queue while backend services process them independently.

### **Scaling Based on Queue Depth**

**Queue Depth** refers to the number of messages waiting in a queue.

Applications can scale backend processing capacity based on queue depth.

**Example: E-commerce Order Processing**

1. Customers continuously submit orders.
2. Order messages are stored in an **SQS queue**.
3. Backend workers retrieve and process the orders.
4. When queue depth increases, the application can **scale out** by adding more consumers.
5. As the queue becomes smaller, processing capacity can be reduced.

**Key Benefit:** Amazon SQS helps applications handle fluctuating workloads by buffering incoming messages and supporting independent scaling of consumers.

## **4.5 Exam Focus**

- **Fully managed message queuing service - Amazon SQS**
- **Decouple application components - Amazon SQS**
- **Enable asynchronous communication - Amazon SQS**
- **Default queue with best-effort ordering - Standard Queue**
- **Strict message ordering - FIFO Queue**
- **Temporarily hide messages during processing - Visibility Timeout**
- **Postpone message availability - Delay Queue**
- **Store messages that repeatedly fail processing - Dead-Letter Queue (DLQ)**
- **Scale consumers based on pending messages - Queue Depth**
- **Improve application reliability - Message Queuing and Decoupling**

**Important Exam Distinctions:**

- **Standard vs FIFO:** Standard queues do not guarantee message order; FIFO queues preserve ordering.
- **Visibility Timeout vs Delay Queue:** Visibility Timeout hides retrieved messages during processing; Delay Queues postpone the initial availability of messages.
- **SQS vs SNS:** SQS stores messages in queues for consumers to process; SNS distributes messages to multiple subscribers.
- **SQS vs EventBridge:** SQS provides message queuing; EventBridge routes events based on rules.

# 5 - \[Exercise] Create SQS Queue and Send Message

## **5.1 Sending Messages to Amazon SQS from EC2**

**Amazon SQS** allows applications to send messages to queues for asynchronous processing.

In this exercise, an **Amazon EC2 instance** acts as a **message producer**, sending messages to an **SQS Standard Queue** using the **AWS CLI**.

### **AWS Services Involved**

|AWS Service|Purpose|
|---|---|
|**Amazon SQS**|Stores messages in a queue|
|**Amazon EC2**|Acts as the message producer|
|**AWS IAM**|Grants EC2 permission to send messages|
|**AWS CLI**|Sends messages to SQS using commands|

### **IAM Permissions for SQS**

An EC2 instance requires appropriate **IAM permissions** to interact with Amazon SQS.
- Create an **IAM Role** trusted by Amazon EC2.
- Attach an IAM policy granting SQS permissions.
- Associate the IAM role with the EC2 instance.
- EC2 can then send messages to SQS using the permissions provided by the role.

**Security Best Practice:** Follow the **Principle of Least Privilege** by granting only the permissions required, such as `sqs:SendMessage`, instead of full SQS access.

**Exam clue: Allow an EC2 instance to access SQS securely - Attach an IAM Role with appropriate SQS permissions**

## **5.2 SQS Message Workflow**

### **Sending Messages**

The exercise demonstrates the following process:
1. Create an **SQS Standard Queue**.
2. Obtain the **Queue URL**, which identifies the destination queue.
3. Create an **IAM Role** with SQS permissions and attach it to an EC2 instance.
4. Connect to the EC2 instance using SSH.
5. Use the **AWS CLI** to send messages to the queue.
6. Verify the messages using the SQS console.

**Example AWS CLI Command:**

```
aws sqs send-message \
  --queue-url <queue-url> \
  --message-body "Hello, this is message one"
```

### **Receiving Messages**

Messages sent to SQS can be retrieved by **polling the queue**.
- **Producer:** Sends messages to the queue.
- **Queue:** Stores messages until they are consumed.
- **Consumer:** Retrieves and processes messages.

In the exercise, the EC2 instance acts as the producer, while the SQS console is used to manually poll and inspect the messages.

In production applications, consumers typically retrieve, process, and delete messages automatically.

### **Resource Cleanup**

After completing the exercise:
- Delete the **SQS queue**.
- Terminate the **EC2 instance**.

This helps prevent unnecessary AWS charges.

## **5.3 Exam Focus**

- **Fully managed message queuing - Amazon SQS**
- **Send messages to SQS from EC2 - AWS CLI**
- **Grant EC2 permissions to access SQS - IAM Role**
- **Permission required to send messages -** `sqs:SendMessage`
- **Identify the destination SQS queue - Queue URL**
- **Application sending messages - Producer**
- **Application retrieving messages - Consumer**
- **Retrieve messages from a queue - Polling**
- **Secure AWS service-to-service access - IAM Roles instead of hardcoded credentials**
- **Minimize unnecessary permissions - Principle of Least Privilege**

**Important Exam Distinctions:**

- **IAM Role vs IAM Policy:** An IAM role provides an assumable identity; an IAM policy defines the permissions granted.
- **Producer vs Consumer:** Producers send messages to SQS; consumers retrieve and process them.
- **SQS vs EC2:** SQS manages message queuing; EC2 can host applications that produce or consume messages.

# 6 - Amazon SNS

## **6.1 Amazon SNS Overview**

**Amazon Simple Notification Service (Amazon SNS)** is a **fully managed messaging service** that enables applications to send notifications and distribute messages to multiple subscribers.

SNS follows the **Publish/Subscribe (Pub/Sub)** messaging model.

### **How Amazon SNS Works**

1. A **Publisher** sends a message to an **SNS Topic**.
2. The SNS topic receives the published message.
3. **Subscribers** registered to the topic receive the message.
4. SNS distributes the message to multiple subscribers simultaneously.

### **Key Terminology**

- **Publisher:** Application or service that sends messages to an SNS topic.
- **Topic:** Communication channel used to distribute messages.
- **Subscriber:** Endpoint or recipient that receives messages from the topic.
- **Publish/Subscribe (Pub/Sub):** Messaging model where a message published to a topic is distributed to its subscribers.

**Key Benefit:** Amazon SNS enables **message broadcasting**, allowing one message to reach multiple subscribers without requiring the publisher to communicate with each subscriber individually.

## **6.2 Amazon SNS Notification Types**

Amazon SNS supports two main categories of notifications:

| Notification Type                    | Description                                      | Supported Destinations                       |
| ------------------------------------ | ------------------------------------------------ | -------------------------------------------- |
| **Application-to-Application (A2A)** | Sends messages between applications and services | Amazon SQS, AWS Lambda, HTTP/HTTPS endpoints |
| **Application-to-Person (A2P)**      | Sends notifications directly to users            | SMS, Email, Mobile Push Notifications        |

### **Application-to-Application (A2A)**

**A2A notifications** allow different applications and AWS services to communicate through SNS.

Examples include:
- **Amazon SQS:** Deliver messages to queues for asynchronous processing.
- **AWS Lambda:** Invoke functions in response to published messages.
- **HTTP/HTTPS Endpoints:** Send notifications to external applications.

**Example:**

An e-commerce application receives an order and publishes an SNS message containing the order details.

An external delivery partner subscribed through an HTTP/HTTPS endpoint receives the notification to initiate shipping.

### **Application-to-Person (A2P)**

**A2P notifications** allow applications to send messages directly to users.

Supported notification channels include:
- **Email:** Send alerts or notifications to email subscribers.
- **SMS:** Send text messages to mobile phone numbers.
- **Mobile Push Notifications:** Deliver notifications to mobile applications.

**Exam clue: Send email, SMS, or mobile push notifications - Amazon SNS**

## **6.3 Amazon SNS Use Cases**

### **Monitoring and Alert Notifications**

Amazon SNS integrates with **Amazon CloudWatch** to send notifications when alarms are triggered.

**Example:**
1. **Amazon CloudWatch** detects a condition that triggers an alarm.
2. A notification is published to an **SNS Topic**.
3. SNS sends an email notification to the subscribed administrator.

**Exam clue: Send notifications when CloudWatch alarms are triggered - Amazon SNS**

### **Mobile Push Notifications**

Amazon SNS can deliver push notifications to mobile applications.

**Example:** An application sends real-time notifications to mobile users about important updates or events.

### **Decoupling Applications**

Amazon SNS enables **loosely coupled application architectures** by allowing publishers to distribute messages without directly communicating with downstream systems.

**Example: E-commerce Order Processing**

When a customer places an order:
1. The e-commerce application publishes an order message to an **SNS Topic**.
2. SNS broadcasts the message to subscribed downstream systems.
3. Different systems independently process the order information.

Possible subscribers include:
- **Shipping System:** Processes delivery information.
- **Billing System:** Handles payment-related operations.
- **Inventory Management System:** Updates product inventory.

Each downstream system may receive messages through an **SQS queue**, **AWS Lambda function**, or **HTTP/HTTPS endpoint**.

**Key Benefit:** SNS allows a single event to trigger actions across multiple independent systems.

## **6.4 Amazon SNS vs Amazon SQS**

Both Amazon SNS and Amazon SQS support asynchronous communication and application decoupling, but they serve different purposes.

| Feature                  | Amazon SNS                                  | Amazon SQS                                          |
| ------------------------ | ------------------------------------------- | --------------------------------------------------- |
| **Messaging Model**      | Publish/Subscribe                           | Message Queue                                       |
| **Primary Purpose**      | Broadcast messages to multiple subscribers  | Store messages for asynchronous processing          |
| **Message Delivery**     | Pushes messages to subscribers              | Consumers poll queues for messages                  |
| **Message Distribution** | One message can reach multiple subscribers  | Messages are processed by consumers of a queue      |
| **Common Use Case**      | Alerts, notifications, message broadcasting | Task processing, buffering, microservice decoupling |

### **Key Distinction**

**Amazon SNS - Message Broadcasting**

- One publisher can notify multiple subscribers.
- Suitable when multiple systems need to receive the same event.

**Amazon SQS - Message Queuing**

- Messages are stored until consumers retrieve them.
- Suitable when workloads need buffering and independent processing.

**Exam Associations:**

- **Broadcast one message to multiple systems - Amazon SNS**
- **Store messages for later processing - Amazon SQS**
- **Send the same event to multiple SQS queues - Amazon SNS**

## **6.5 Exam Focus**

- **Fully managed notification and messaging service - Amazon SNS**
- **Publish/Subscribe messaging - Amazon SNS**
- **Broadcast messages to multiple subscribers - SNS Topic**
- **Application-to-Application notifications - SNS A2A**
- **Application-to-Person notifications - SNS A2P**
- **Send email, SMS, and mobile push notifications - Amazon SNS**
- **Send CloudWatch alarm notifications - Amazon SNS**
- **Distribute one event to multiple downstream systems - Amazon SNS**
- **Decouple applications using message broadcasting - Amazon SNS**
- **Deliver SNS messages to queues - Amazon SNS + Amazon SQS**

**Important Exam Distinctions:**

- **SNS vs SQS:** SNS broadcasts messages to subscribers; SQS stores messages for consumers to process.
- **SNS A2A vs A2P:** A2A sends messages between applications; A2P sends notifications directly to people.
- **SNS vs CloudWatch:** CloudWatch monitors resources and triggers alarms; SNS delivers notifications to subscribers.

# 7 - \[Exercise] Create SNS Topic and Send Notification

## **7.1 Amazon SNS Notification Exercise Overview**

**Amazon Simple Notification Service (Amazon SNS)** allows applications to publish messages to a topic and distribute notifications to multiple subscribers.

This exercise demonstrates **Application-to-Person (A2P)** notifications using **Email** and **SMS**.

### **AWS Concepts Involved**

| Concept              | Purpose                                                 |
| -------------------- | ------------------------------------------------------- |
| **SNS Topic**        | Receives messages published by applications or services |
| **SNS Subscription** | Defines the endpoint that receives notifications        |
| **Standard Topic**   | Supports message broadcasting to multiple subscribers   |
| **Email Protocol**   | Delivers notifications through email                    |
| **SMS Protocol**     | Delivers notifications to mobile phone numbers          |
| **Topic ARN**        | Uniquely identifies an SNS topic                        |

## **7.2 SNS Notification Workflow**

### **Creating a Topic and Subscriptions**

The exercise uses an **SNS Standard Topic** with two subscriptions:
- **Email Subscription:** Sends notifications to an email address.
- **SMS Subscription:** Sends notifications to a mobile phone number.

### **Subscription Confirmation**

**Email Subscription:**

- SNS sends a confirmation email to the subscriber.
- The recipient must confirm the subscription before receiving notifications.
- This helps prevent unwanted email notifications.

**SMS Subscription:**

- SMS sandbox restrictions may require phone numbers to be verified before receiving notifications.
- Verification involves receiving and entering a confirmation code.
- SMS delivery may also depend on country-specific telecommunications regulations and mobile service provider restrictions.

### **Publishing Notifications**

1. Create an **SNS Standard Topic**.
2. Add and confirm the **Email subscription**.
3. Add the **SMS subscription**, completing phone verification if required.
4. Publish a test message to the topic.
5. SNS distributes the message to the subscribed endpoints.

**Key Concept:** A single published message can be delivered through multiple notification channels.

### **Manual vs Automated Publishing**

- **Manual Publishing:** Messages are published directly through the AWS SNS console for testing.
- **Automated Publishing:** Applications or AWS services, such as **AWS Lambda**, publish messages programmatically.

In real-world applications, SNS notifications are typically triggered automatically by application events.

## **7.3 Exam Focus**

- **Publish/Subscribe messaging - Amazon SNS**
- **Send notifications to multiple subscribers - SNS Topic**
- **Identify an SNS topic - Topic ARN**
- **Define notification recipients - SNS Subscription**
- **Send notifications to people - SNS A2P**
- **Email and SMS notifications - Amazon SNS**
- **Confirm email subscriptions before receiving messages - SNS Subscription Confirmation**
- **Verify SMS destinations when sandbox restrictions apply - SMS Sandbox**
- **Automatically publish notifications from application logic - AWS Lambda + SNS**

**Important Exam Distinctions:**

- **SNS Topic vs Subscription:** A topic receives published messages; a subscription defines where notifications are delivered.
- **Publisher vs Subscriber:** Publishers send messages to topics; subscribers receive notifications.
- **SNS A2P vs A2A:** A2P sends notifications to people through email, SMS, or mobile push; A2A sends messages to applications and services.

# 8 - Amazon EventBridge

## **8.1 Amazon EventBridge Overview**

**Amazon EventBridge** is a **serverless event bus service** that enables applications to communicate through events and build **event-driven, loosely coupled architectures**.

An **Event Bus** acts as a communication channel between applications, receiving events from different sources and routing them to appropriate destinations.

### **Key Features**

- **Serverless:** No infrastructure provisioning or management required.
- **Event-Driven Architecture:** Applications automatically respond to events.
- **Loose Coupling:** Application components communicate without direct dependencies.
- **Event Routing:** Routes events to appropriate targets based on configured rules.
- **AWS Integration:** Connects AWS services, custom applications, and third-party SaaS applications.

**Key Benefit:** Amazon EventBridge enables independent application components to communicate through events, improving flexibility and reliability.

## **8.2 How Amazon EventBridge Works**

Amazon EventBridge uses an **Event Bus** to receive and route events.

### **Key Components**

|Component|Purpose|
|---|---|
|**Event Source**|Application or AWS service that produces an event|
|**Event Bus**|Receives events from different sources|
|**Event**|JSON-formatted data describing something that happened|
|**EventBridge Rule**|Evaluates events and determines which events should be routed|
|**Target**|AWS service or application that processes the matching event|

### **Event Processing Workflow**

1. An **Event Source** generates an event.
2. The event is sent to an **EventBridge Event Bus**.
3. **EventBridge Rules** evaluate the event based on its type or fields.
4. Matching events are routed to configured **Targets**.
5. The target service performs the required action.

### **Event Bus Types**

Amazon EventBridge supports:
- **Default Event Bus:** Receives events from AWS services.
- **Custom Event Bus:** Allows applications to publish custom events.

EventBridge can also integrate with **third-party SaaS applications**, enabling event-driven communication across different systems.

**Exam clue: Route JSON events between AWS services and applications using rules - Amazon EventBridge**

## **8.3 Amazon EventBridge Use Cases**

Amazon EventBridge enables automated actions in response to different events.

| Event Source / Scenario | Target Service     | Automated Action                                   |
| ----------------------- | ------------------ | -------------------------------------------------- |
| **Amazon S3**           | **AWS Lambda**     | Process a newly uploaded object                    |
| **Custom Application**  | **Amazon Kinesis** | Send application event data for processing         |
| **Scheduled Event**     | **AWS CodeBuild**  | Trigger a build job at a scheduled time            |
| **Amazon EC2**          | **Amazon SNS**     | Send a notification when an instance changes state |
| **Amazon EC2**          | **Zendesk**        | Create a support ticket based on an instance event |

### **Example: S3 Object Upload**

1. A user uploads a file to an **Amazon S3 bucket**.
2. S3 generates an object-related event.
3. **Amazon EventBridge** receives the event.
4. An EventBridge rule matches the event.
5. **AWS Lambda** is invoked to process the uploaded file.

**Key Concept:** EventBridge enables automatic actions based on events, without requiring applications to continuously check for changes.

## **8.4 Building Loosely Coupled Applications**

Amazon EventBridge helps reduce dependencies between application components.

### **Tightly Coupled Architecture**

Consider an application with two components:
- **Payment Processing Service:** Processes customer payments.
- **Subscription Confirmation Service:** Activates a subscription after successful payment.

In a tightly coupled architecture, the payment service directly depends on the subscription service.

**Problem:**

If the subscription service becomes unavailable, the payment process may also fail because it is waiting for the subscription confirmation.

### **Loosely Coupled Architecture with EventBridge**

Amazon EventBridge separates these components through asynchronous event communication.

**Workflow:**

1. The **Payment Processing Service** successfully processes a payment.
2. It publishes a **Payment Successful Event** to EventBridge.
3. An **EventBridge Rule** routes the event to the **Subscription Confirmation Service**.
4. The subscription service processes the event and updates the subscription information.
5. If event delivery fails, EventBridge can retry delivery.
6. After repeated delivery failures, the event can be sent to an **Amazon SQS Dead-Letter Queue (DLQ)** for troubleshooting, if configured.

### **Benefits**

- **Loose Coupling:** Payment processing does not need to wait for subscription confirmation.
- **Fault Isolation:** Failure of the subscription service does not necessarily interrupt payment processing.
- **Automatic Retries:** EventBridge supports retrying failed event deliveries.
- **Failure Handling:** Failed events can be captured in an SQS dead-letter queue for investigation.

**Important:** Successfully processing a payment does not guarantee immediate subscription activation. Failed downstream operations must still be handled appropriately.

**Exam clue: Decouple application components using event-based communication - Amazon EventBridge**

## **8.5 Amazon EventBridge vs SNS vs SQS**

These services support **asynchronous communication** and **loosely coupled architectures**, but serve different purposes.

|Feature|Amazon EventBridge|Amazon SNS|Amazon SQS|
|---|---|---|---|
|**Primary Purpose**|Event routing|Message broadcasting|Message queuing|
|**Communication Model**|Event Bus with Rules|Publish/Subscribe|Producer/Consumer|
|**Message Handling**|Routes matching events to targets|Pushes messages to subscribers|Stores messages for consumers|
|**Key Feature**|Event filtering and rule-based routing|Fan-out to multiple subscribers|Message buffering and asynchronous processing|
|**Common Use Case**|Trigger actions based on events|Send notifications to multiple systems|Decouple backend processing|

### **Key Distinctions**

**Amazon EventBridge - Event Routing**

- Receives events from AWS services, custom applications, and SaaS applications.
- Applies rules to determine which events should trigger specific actions.

**Amazon SNS - Message Broadcasting**

- Publishes messages to topics.
- Distributes messages to multiple subscribers.

**Amazon SQS - Message Queuing**

- Stores messages until consumers retrieve them.
- Enables asynchronous processing between application components.

**Exam Associations:**

- **Route events based on rules - Amazon EventBridge**
- **Broadcast one message to multiple subscribers - Amazon SNS**
- **Store messages for asynchronous processing - Amazon SQS**

## **8.6 Exam Focus**

- **Serverless event bus service - Amazon EventBridge**
- **Build event-driven architectures - Amazon EventBridge**
- **Decouple applications using events - Amazon EventBridge**
- **Route events based on conditions - EventBridge Rules**
- **Receive and route events - Event Bus**
- **Represent events using structured data - JSON Events**
- **Connect AWS services, custom applications, and SaaS applications - Amazon EventBridge**
- **Automatically process S3 upload events - EventBridge + AWS Lambda**
- **Trigger automated actions from EC2 state changes - Amazon EventBridge**
- **Retry failed event deliveries - EventBridge Retry Mechanism**
- **Capture failed event deliveries - Amazon SQS Dead-Letter Queue**

**Important Exam Distinctions:**

- **EventBridge vs SNS:** EventBridge routes events based on rules; SNS broadcasts messages to subscribers.
- **EventBridge vs SQS:** EventBridge routes events to targets; SQS stores messages for asynchronous processing.
- **Tightly Coupled vs Loosely Coupled:** Tightly coupled components depend directly on each other; loosely coupled components communicate independently through events or messages.

# 9 - \[Exercise] Notify when EC2 Changes State

## **9.1 Amazon EventBridge - EC2 State Change Notifications**

**Amazon EventBridge** enables applications to automatically respond to events generated by AWS services.

This exercise demonstrates how to use **Amazon EventBridge** and **Amazon SNS** to send notifications when an **Amazon EC2 instance changes state**.

### **AWS Services Involved**

|AWS Service|Purpose|
|---|---|
|**Amazon EC2**|Generates events when an instance changes state|
|**Amazon EventBridge**|Detects matching events and routes them to configured targets|
|**Amazon SNS**|Sends notifications to subscribed recipients|

### **Event-Driven Notification Workflow**

1. An **EC2 instance** changes state, such as entering `running` or `stopped`.
2. An **EC2 Instance State-change Notification** event is received by the **EventBridge Default Event Bus**.
3. An **EventBridge Rule** checks whether the event matches the configured conditions.
4. If the event matches, EventBridge sends it to an **SNS Topic**.
5. **Amazon SNS** distributes the notification to subscribed email addresses or mobile phone numbers.

**Key Benefit:** AWS services can automatically respond to infrastructure events without requiring manual monitoring.

## **9.2 EventBridge Rules and Targets**

### **EventBridge Event Bus**

An **Event Bus** receives events from AWS services and applications.
- **Default Event Bus:** Receives events generated by supported AWS services.
- **EventBridge Rules:** Evaluate events and determine which actions should be triggered.
- **Targets:** AWS services or applications that receive matching events.

### **Event Pattern Matching**

**EventBridge Rules** use **event patterns** to identify specific events.

In this exercise, the rule is configured with:

|Configuration|Value|
|---|---|
|**Event Bus**|Default Event Bus|
|**Event Source**|AWS Services - Amazon EC2|
|**Event Type**|EC2 Instance State-change Notification|
|**Matching States**|`running`, `stopped`|
|**Target**|Amazon SNS Topic|

**Example:**

A production EC2 instance unexpectedly enters the `stopped` state.

EventBridge detects the matching state-change event and sends it to SNS, which notifies the administrator.

**Exam clue: Automatically detect EC2 state changes and trigger actions - Amazon EventBridge**

### **EventBridge Targets**

Amazon EventBridge can route matching events to different AWS services.

Examples include:
- **Amazon SNS:** Send notifications to administrators.
- **AWS Lambda:** Execute automated application logic.
- **Other AWS Services:** Trigger supported actions based on events.

**Key Concept:** EventBridge is not limited to notifications. It supports **event-driven automation** across AWS services.

## **9.3 EventBridge and SNS Integration**

Amazon EventBridge and Amazon SNS work together to detect events and distribute notifications.

### **Service Responsibilities**

**Amazon EventBridge**
- Receives EC2 state-change events.
- Evaluates events against configured rules.
- Routes matching events to the SNS topic.

**Amazon SNS**
- Receives messages from EventBridge.
- Distributes notifications to topic subscribers.
- Supports notification delivery through email and SMS.

### **Example: EC2 Instance Startup**

1. A new EC2 instance is launched.
2. The instance enters the `running` state.
3. EventBridge detects the matching event.
4. The configured SNS topic receives the event.
5. Subscribed administrators receive a notification.

**Important Distinction:**

- **EventBridge - Detect and route events**
- **SNS - Distribute notifications to subscribers**

## **9.4 Exam Focus**

- **Serverless event-driven integration - Amazon EventBridge**
- **Receive AWS service events - Default Event Bus**
- **Identify specific events - EventBridge Event Patterns**
- **Route matching events to targets - EventBridge Rules**
- **Detect EC2 instance state changes - Amazon EventBridge**
- **Send notifications based on AWS events - EventBridge + Amazon SNS**
- **Deliver email and SMS notifications - Amazon SNS**
- **Automatically respond to infrastructure events - Event-Driven Architecture**

**Important Exam Distinctions:**

- **EventBridge vs SNS:** EventBridge detects and routes matching events; SNS distributes notifications to subscribers.
- **Event Source vs Target:** The event source generates an event; the target receives and processes the matching event.
- **EventBridge Rule vs Event Pattern:** A rule defines event routing and targets; an event pattern specifies which events should match.

# 10 - Amazon MQ

## **10.1 Amazon MQ Overview**

**Amazon MQ** is a **fully managed message broker service** that supports popular open-source messaging technologies such as **Apache ActiveMQ** and **RabbitMQ**.

It is primarily used when migrating existing applications to AWS that depend on traditional enterprise messaging systems.

### **Key Features**

- **Fully Managed:** AWS manages the underlying messaging infrastructure.
- **Open-Source Compatibility:** Supports **Apache ActiveMQ** and **RabbitMQ**.
- **Migration Support:** Allows existing messaging applications to migrate to AWS with minimal or no application code changes.
- **Enterprise Messaging Protocols:** Supports traditional messaging protocols used by enterprise applications.

**Key Benefit:** Amazon MQ simplifies migrating existing messaging applications to AWS while maintaining compatibility with their messaging technologies.

## **10.2 Amazon MQ Use Cases**

### **Migrating On-Premises Messaging Applications**

Organizations may already have on-premises applications using **Apache ActiveMQ** or **RabbitMQ**.

Replacing these messaging systems with AWS-native messaging services, such as **Amazon SQS** or **Amazon EventBridge**, might require application code changes.

**Amazon MQ** provides a managed alternative that allows organizations to continue using their existing messaging technologies.

**Example:**

An organization runs an on-premises application using RabbitMQ and wants to migrate it to AWS without rewriting its messaging integration.

**Recommended Service - Amazon MQ**

### **Supported Messaging Protocols**

Amazon MQ supports traditional enterprise messaging protocols, depending on the selected message broker.

Examples include:
- **MQTT**
- **AMQP**
- **STOMP**

**Exam clue: Existing applications require traditional enterprise messaging protocols - Amazon MQ**

## **10.3 Amazon MQ vs AWS-Native Messaging Services**

|AWS Service|Main Purpose|Exam Scenario|
|---|---|---|
|**Amazon MQ**|Managed ActiveMQ and RabbitMQ message brokers|Migrate existing enterprise messaging applications|
|**Amazon SQS**|Managed message queuing|Decouple components using asynchronous message queues|
|**Amazon SNS**|Publish/Subscribe messaging|Broadcast messages to multiple subscribers|
|**Amazon EventBridge**|Serverless event bus|Route events based on rules|

### **Key Distinction**

- **Amazon MQ:** Best suited for applications requiring compatibility with existing **ActiveMQ or RabbitMQ** implementations.
- **Amazon SQS:** Used for message queuing and asynchronous application communication.
- **Amazon EventBridge:** Used for event-driven architectures and rule-based event routing.

**Important:** If an application already relies on ActiveMQ or RabbitMQ and requires minimal code changes during migration, **Amazon MQ** is a strong choice.

## **10.4 Exam Focus**

- **Fully managed message broker service - Amazon MQ**
- **Managed Apache ActiveMQ and RabbitMQ - Amazon MQ**
- **Migrate existing on-premises messaging applications - Amazon MQ**
- **Maintain compatibility with existing messaging systems - Amazon MQ**
- **Support enterprise messaging protocols such as MQTT, AMQP, and STOMP - Amazon MQ**
- **Message queuing and application decoupling - Amazon SQS**
- **Event-driven routing based on rules - Amazon EventBridge**

**Important Exam Distinctions:**

- **Amazon MQ vs Amazon SQS:** MQ provides compatibility with traditional message brokers; SQS provides AWS-managed message queues.
- **Amazon MQ vs EventBridge:** MQ supports existing broker-based messaging applications; EventBridge provides serverless, rule-based event routing.
- **Migration Keyword:** If an exam question mentions **ActiveMQ, RabbitMQ, or migrating existing messaging applications without rewriting code**, think **Amazon MQ**.

# 11 - Section Summary

## **11.1 AWS Application Integration Services Summary**

Use the comparison in section 1.4 to match the requirement to the service. For an event-driven flow, identify whether the application needs a queue (**SQS**), fan-out (**SNS**), rule-based event routing (**EventBridge**), a stateful workflow (**Step Functions**), or application email (**SES**). For existing broker protocols, see the **Amazon MQ** examples in section 10.

## **11.2 Exam Focus**

- **Manage REST, HTTP, and WebSocket APIs - Amazon API Gateway**
- **GraphQL APIs and optimized data retrieval - AWS AppSync**
- **Asynchronous message queuing - Amazon SQS**
- **Strict message ordering - SQS FIFO Queue**
- **Temporarily hide messages during processing - SQS Visibility Timeout**
- **Retain messages for up to 14 days - Amazon SQS**
- **Broadcast messages to multiple subscribers - Amazon SNS**
- **Send email, SMS, and mobile push notifications - Amazon SNS**
- **Route events using rules - Amazon EventBridge**
- **Serverless event bus and event-driven integration - Amazon EventBridge**
- **Migrate ActiveMQ or RabbitMQ applications - Amazon MQ**

**Critical Exam Distinctions:**

|Requirement|AWS Service|
|---|---|
|Expose and secure REST APIs|**Amazon API Gateway**|
|Build GraphQL APIs|**AWS AppSync**|
|Store messages for asynchronous processing|**Amazon SQS**|
|Broadcast one message to multiple subscribers|**Amazon SNS**|
|Route events based on rules and conditions|**Amazon EventBridge**|
|Use existing ActiveMQ or RabbitMQ messaging|**Amazon MQ**|

# 12 - Quiz

## **12.1 Practice Question 1**

### **Original Question**

For your application you want to build an automated event system where if there are any issues identified in your application on AWS infrastructure e.g. EC2 instance is unhealthy, you want to notify to the administrator and also create a service ticket into JIRA. Which AWS service will you use for this?

### **Choices**

A. Amazon SNS  
B. Amazon API Gateway  
C. Amazon Lambda  
D. Amazon EventBridge

### **Correct Answer**

**D. Amazon EventBridge**

### **Why?**

**Amazon EventBridge** is a **serverless event bus** that routes events from AWS services to different targets based on configured rules.
- Detects events such as EC2 instance state changes.
- Routes matching events to **Amazon SNS** for administrator notifications.
- Can integrate with third-party systems such as **JIRA** for automated ticket creation.

**Why not Amazon SNS?**

SNS distributes notifications to subscribers but does not provide the same rule-based event routing capabilities as EventBridge.

**Exam clue: Detect AWS infrastructure events and trigger multiple automated actions - Amazon EventBridge**

## **12.2 Practice Question 2**

### **Original Question**

You need to create an Rest API that integrates with AWS Lambda functions to handle business logic. Which AWS service would you use to expose this Lambda function as an API?

### **Choices**

A. AWS AppSync  
B. Amazon SQS  
C. Amazon SNS  
D. Amazon API Gateway

### **Correct Answer**

**D. Amazon API Gateway**

### **Why?**

**Amazon API Gateway** is a fully managed service that allows developers to create, publish, manage, and secure APIs.
- Supports **REST, HTTP, and WebSocket APIs**.
- Integrates with **AWS Lambda** to execute backend business logic.
- Provides authentication, authorization, throttling, and monitoring capabilities.

**Why not AWS AppSync?**

AppSync specializes in **GraphQL APIs**, whereas the question specifically requires a **REST API**.

**Exam clue: Expose AWS Lambda functions through REST APIs - Amazon API Gateway**

## **12.3 Practice Question 3**

### **Original Question**

You need to decouple microservices and ensure that messages are reliably delivered even if one of the services is temporarily unavailable. Which AWS service would be the best choice for this?

### **Choices**

A. Amazon SQS  
B. Amazon SNS  
C. AWS AppSync  
D. Amazon API Gateway

### **Correct Answer**

**A. Amazon SQS**

### **Why?**

**Amazon Simple Queue Service (Amazon SQS)** is a fully managed message queuing service that enables **asynchronous communication** between application components.
- Stores messages until they are processed or their retention period expires.
- Allows microservices to operate independently.
- Enables consumers to retrieve messages after recovering from temporary failures.

**Why not Amazon SNS?**

SNS is primarily used to **push messages to subscribers**, while SQS provides persistent message queuing for asynchronous processing.

**Exam clue: Decouple microservices and retain messages during temporary service outages - Amazon SQS**

## **12.4 Practice Question 4**

### **Original Question**

You need to send notifications via SMS and mobile push notifications to end users who are subscribed to your app. Which AWS service should you use?

### **Choices**

A. Amazon SQS  
B. Amazon SNS  
C. Amazon MQ  
D. Amazon EventBridge

### **Correct Answer**

**B. Amazon SNS**

### **Why?**

**Amazon Simple Notification Service (Amazon SNS)** is a fully managed **Publish/Subscribe (Pub/Sub)** messaging service.

It supports **Application-to-Person (A2P)** notifications through:
- Email
- SMS
- Mobile Push Notifications

A publisher sends a message to an **SNS Topic**, which distributes notifications to subscribed recipients.

**Why not Amazon SQS?**

SQS stores messages for consumers to process rather than directly providing SMS or mobile push notifications.

**Exam clue: Send SMS, email, or mobile push notifications - Amazon SNS**

## **12.5 Practice Question 5**

### **Original Question**

Your company needs a managed message broker service to support both MQTT and AMQP messaging protocols for communication between various applications. Which AWS service would you use?

### **Choices**

A. Amazon SQS  
B. Amazon SNS  
C. Amazon MQ  
D. AWS AppSync

### **Correct Answer**

**C. Amazon MQ**

### **Why?**

**Amazon MQ** is a fully managed message broker service supporting popular open-source messaging technologies, including:
- **Apache ActiveMQ**
- **RabbitMQ**

It supports traditional enterprise messaging protocols such as **MQTT**, **AMQP**, and **STOMP**, depending on the broker.

**Why not Amazon SQS or SNS?**

SQS and SNS are AWS-native messaging services, whereas Amazon MQ provides compatibility with traditional message broker technologies and protocols.

**Exam clue: Managed message brokers supporting MQTT, AMQP, ActiveMQ, or RabbitMQ - Amazon MQ**

## **12.6 Practice Question 6**

### **Original Question**

Your microservices architecture requires the services to be decoupled while ensuring messages are processed reliably. Which AWS service should you use for this purpose?

### **Choices**

A. Amazon SNS  
B. Amazon SQS  
C. AWS AppSync  
D. AWS API Gateway

### **Correct Answer**

**B. Amazon SQS**

### **Why?**

**Amazon SQS** enables **loosely coupled microservices** by providing message queues for asynchronous processing.
- Producers send messages without waiting for consumers.
- Messages remain available for processing during temporary consumer failures.
- Consumers can process and delete messages independently.

**Why not Amazon SNS?**

SNS is designed for message broadcasting, while SQS is better suited for **reliable asynchronous task processing**.

**Exam clue: Reliable message processing between decoupled microservices - Amazon SQS**

## **12.7 Practice Question 7**

### **Original Question**

You need to implement a GraphQL API that allows real-time updates for clients. Which AWS service is best suited for this use case?

### **Choices**

A. AWS AppSync  
B. Amazon API Gateway  
C. Amazon SNS  
D. Amazon SQS

### **Correct Answer**

**A. AWS AppSync**

### **Why?**

**AWS AppSync** is a fully managed service for building **GraphQL APIs**.

Its key capabilities include:
- **GraphQL Queries:** Retrieve specific data fields from backend sources.
- **GraphQL Subscriptions:** Enable real-time updates to connected clients.
- **Data Aggregation:** Retrieve related information from multiple backend sources.

**Why not Amazon API Gateway?**

API Gateway supports REST, HTTP, and WebSocket APIs, while AppSync specifically provides managed GraphQL capabilities.

**Exam clue: GraphQL APIs with real-time client updates - AWS AppSync**

## **12.8 Practice Question 8**

### **Original Question**

You want to build an event-driven architecture where events generated by different services are routed to various targets for processing. Which service should you use?

### **Choices**

A. Amazon MQ  
B. Amazon SQS  
C. Amazon EventBridge  
D. Amazon API Gateway

### **Correct Answer**

**C. Amazon EventBridge**

### **Why?**

**Amazon EventBridge** is a **serverless event bus** designed for building **event-driven architectures**.
- Receives events from AWS services, custom applications, and third-party SaaS applications.
- Uses **EventBridge Rules** to match and filter events.
- Routes matching events to appropriate targets for processing.

**Why not Amazon SQS?**

SQS provides message queuing, whereas EventBridge provides **rule-based event routing** across different services.

**Exam clue: Route events from multiple sources to different targets - Amazon EventBridge**

## **12.9 Exam Focus**

### **Key Service Associations**

|Exam Scenario|Correct AWS Service|
|---|---|
|Create and manage REST APIs|**Amazon API Gateway**|
|GraphQL APIs with real-time updates|**AWS AppSync**|
|Decouple microservices using message queues|**Amazon SQS**|
|Ensure reliable asynchronous message processing|**Amazon SQS**|
|Send SMS, email, and push notifications|**Amazon SNS**|
|Broadcast messages to multiple subscribers|**Amazon SNS**|
|Route AWS events based on rules|**Amazon EventBridge**|
|Trigger multiple actions from infrastructure events|**Amazon EventBridge**|
|Support ActiveMQ, RabbitMQ, MQTT, or AMQP|**Amazon MQ**|

### **Critical Exam Distinctions**

- **SQS vs SNS:** SQS stores messages for asynchronous processing; SNS broadcasts messages to subscribers.
- **SNS vs EventBridge:** SNS distributes messages; EventBridge evaluates events and routes them based on rules.
- **API Gateway vs AppSync:** API Gateway supports REST, HTTP, and WebSocket APIs; AppSync specializes in GraphQL APIs.
- **SQS vs Amazon MQ:** SQS is an AWS-native message queuing service; Amazon MQ supports traditional enterprise message brokers.
- **EventBridge vs API Gateway:** EventBridge supports event-driven integration; API Gateway exposes and manages APIs.

**Most Important Memory Aid:**

- **API Management - API Gateway**
- **GraphQL - AppSync**
- **Message Queue - SQS**
- **Notifications / Broadcasting - SNS**
- **Event Routing - EventBridge**
- **Traditional Message Brokers - Amazon MQ**
