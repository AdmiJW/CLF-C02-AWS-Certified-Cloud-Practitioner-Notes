# 1 - Migration Strategies

## **1.1 Introduction to AWS Migration**

**Cloud migration** is the process of moving applications, servers, databases, and workloads from an **on-premises data center to AWS**.

AWS provides different migration strategies and services depending on:
- Application architecture and technology stack.
- Business requirements and application criticality.
- Licensing requirements.
- Cost and complexity of migration.
- Effort required to modify existing applications.

The **7Rs Migration Strategy** helps organizations determine the most appropriate approach for migrating each application to AWS.

## **1.2 AWS Migration Strategies (7Rs)**

AWS migration strategies define how an existing application should be moved or managed when adopting the cloud.

The key strategies discussed in this lesson are:

|Strategy|Description|AWS Example|
|---|---|---|
|**Rehost**|Move applications without significant modifications (**Lift and Shift**)|Migrate existing servers to **Amazon EC2**|
|**Replatform**|Make limited changes to take advantage of managed cloud services|Migrate an on-premises database to **Amazon RDS**|
|**Refactor / Re-architect**|Modify application code or architecture to modernize the application|Modernize legacy applications using **AWS Transform**|
|**Retire**|Decommission applications that are no longer needed|Remove unused legacy applications|

### **Key Migration Distinctions**

**Rehost (Lift and Shift)**
- Moves existing applications to AWS with minimal changes.
- Commonly involves migrating servers to **Amazon EC2**.
- Suitable when organizations want to migrate without redesigning applications.

**Replatform**
- Makes limited changes to an application or its underlying platform.
- Common example: migrating an on-premises relational database to **Amazon RDS**.
- Takes advantage of AWS managed services without completely redesigning the application.

**Refactor / Re-architect**
- Involves significant changes to application architecture or code.
- Focuses on modernization rather than simply moving existing infrastructure.
- Generally requires more time and effort than rehosting or replatforming.

**Exam distinction:**

- **Rehost - Lift and shift with minimal changes**
- **Replatform - Limited changes to use cloud-managed services**
- **Refactor - Significant application modernization**
- **Retire - Decommission applications no longer needed**

## **1.3 AWS Migration Assessment and Planning**

Before migrating workloads to AWS, organizations must evaluate whether migration is technically and financially beneficial.

Typical migration activities include:
1. **Assessment** - Evaluate migration feasibility, costs, and business benefits.
2. **Discovery** - Identify existing applications, servers, and dependencies.
3. **Planning** - Determine migration strategies and organize migration activities.
4. **Migration** - Move workloads and databases using appropriate AWS services.

### **AWS Migration Evaluator**

**AWS Migration Evaluator** helps organizations assess the **business case for migrating to AWS**.
- Evaluates existing on-premises environments.
- Supports migration cost and business assessments.
- Helps organizations make informed migration decisions.

**Exam clue: Assess the business case for migrating to AWS - AWS Migration Evaluator**

### **AWS Application Discovery Service**

**AWS Application Discovery Service** collects information about existing on-premises applications and infrastructure before migration.
- Discovers application and server inventory.
- Collects information needed for migration planning.
- Supports two discovery approaches:
    - **Agent-based discovery**
    - **Agentless discovery**

**Exam clue: Discover on-premises servers and application inventory - AWS Application Discovery Service**

### **AWS Migration Hub**

**AWS Migration Hub** provides a centralized location for managing and tracking application migrations to AWS.
- Helps organize migration activities.
- Provides centralized visibility into migration progress.
- Supports managing migrations involving multiple AWS migration services.

**Exam clue: Centrally track and manage migration progress - AWS Migration Hub**

**Availability:** AWS Application Discovery Service and AWS Migration Hub closed to new customers on November 7, 2025. Existing customers can continue using them. AWS points new customers to AWS Transform for discovery and migration planning. The CLF-C02 guide still lists these services, so recognize the tasks they perform. [Application Discovery Service availability](https://docs.aws.amazon.com/application-discovery/latest/userguide/application-discovery-service-availability-change.html) · [Migration Hub availability](https://docs.aws.amazon.com/migrationhub-strategy/latest/userguide/migrationhub-availability-change.html)

## **1.4 AWS Migration Services**

AWS provides specialized services to migrate different types of workloads.

| AWS Service                                  | Primary Purpose                                         | Common Use Case                                            |
| -------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| **AWS Application Migration Service (MGN)**  | Migrates existing servers and applications to AWS       | Rehost on-premises servers using lift and shift            |
| **AWS Database Migration Service (AWS DMS)** | Migrates databases to AWS                               | Move on-premises databases to AWS                          |
| **AWS App2Container**                        | Containerizes existing applications                     | Containerize web applications for deployment on ECS or EKS |
| **AWS Transform**                            | AI-powered application modernization and transformation | Modernize and transform legacy applications                |

### **AWS Application Migration Service (MGN)**

**AWS Application Migration Service (MGN)** is primarily used for **rehosting existing servers and applications**.
- Supports the **Lift and Shift** migration strategy.
- Helps migrate on-premises workloads to AWS.
- Reduces the need for significant changes to existing applications.

**Exam clue: Migrate existing on-premises servers to AWS with minimal changes - AWS Application Migration Service (MGN)**

### **AWS Database Migration Service (AWS DMS)**

**AWS Database Migration Service (AWS DMS)** is used to migrate databases to AWS.
- Focuses specifically on **database migration**.
- Helps move databases from on-premises environments to AWS.
- Can be used when migrating databases to AWS database services.

**Important distinction:**

- **AWS MGN - Server and application migration**
- **AWS DMS - Database migration**

### **AWS App2Container**

**AWS App2Container** helps convert existing applications into containerized applications.
- Containerizes existing web applications.
- Containerized applications can be deployed using:
    - **Amazon Elastic Container Service (Amazon ECS)**
    - **Amazon Elastic Kubernetes Service (Amazon EKS)**

### **AWS Transform**

**AWS Transform** is an **agentic AI-powered** service for application modernization and migration.
- Helps modernize legacy applications.
- Supports application transformation and containerization.
- Can assist with migration lifecycle activities.

The lesson emphasizes traditional AWS migration services, particularly **AWS MGN** and **AWS DMS**, as the primary exam focus.

## **1.5 Exam Focus**

- **Lift and shift existing servers - AWS Application Migration Service (MGN)**
- **Migrate databases to AWS - AWS Database Migration Service (AWS DMS)**
- **Assess the migration business case - AWS Migration Evaluator**
- **Discover on-premises application inventory - AWS Application Discovery Service**
- **Centrally track migration progress - AWS Migration Hub**
- **Containerize existing applications - AWS App2Container**
- **AI-powered legacy application modernization - AWS Transform**
- **Move applications with minimal changes - Rehost**
- **Move databases to a managed service such as Amazon RDS - Replatform**
- **Redesign or significantly modify application architecture - Refactor**
- **Decommission unnecessary applications - Retire**

**Key exam distinction:** **AWS MGN migrates servers and applications**, while **AWS DMS migrates databases**.

# 2 - AWS Application Migration Service (MGN) and Database Migration Service (DMS)

## **2.1 AWS Application Migration Service (MGN)**

**AWS Application Migration Service (MGN)** is used to migrate existing on-premises servers and applications to AWS using the **Rehost (Lift and Shift)** migration strategy.
- Replicates an existing server to AWS as an **Amazon EC2 instance**.
- Uses **block-level replication** to replicate data from the source server's disks.
- Replicated data is stored in **Amazon Elastic Block Store (Amazon EBS)** volumes.
- Supports **test migrations** before the final production migration.
- Enables **near-zero data loss** by continuously replicating changes from the source server.

### **How AWS MGN Works**

1. Install the **AWS Replication Agent** on the on-premises source server.
2. The agent performs **block-level replication** of the server's disk data to AWS.
3. The replicated data is stored in **Amazon EBS volumes**.
4. An **Amazon EC2 instance** is launched using the replicated server data.
5. Perform test migrations before the final **cutover** to production.

**Key concepts:**

- **Block-level replication** - Replicates underlying disk data rather than individual files or applications.
- **Continuous replication** - Captures ongoing changes to keep replicated data updated.
- **Cutover** - Switches the workload from the original server to the migrated AWS environment.

**Exam clue: Migrate an on-premises server to Amazon EC2 with minimal changes - AWS Application Migration Service (MGN)**

## **2.2 AWS Database Migration Service (AWS DMS)**

**AWS Database Migration Service (AWS DMS)** is used to migrate databases from on-premises environments to AWS.
- Supports migrations between the **same database engines** or **different database engines**.
- Uses replication tasks to transfer data between source and target databases.
- Supports an initial **full data load**, followed by incremental replication.
- Helps keep source and target databases synchronized during migration.
- Enables **near-zero data loss** during migration.

### **How AWS DMS Works**

1. Identify the **source database** and the **target database** in AWS.
2. Create a **DMS replication task** connecting both databases.
3. Perform a **full load** to migrate the existing data.
4. Perform **incremental replication** to capture subsequent database changes.
5. Synchronize the target database before completing the migration.

**Exam clue: Migrate an existing database to AWS with minimal data loss - AWS Database Migration Service (AWS DMS)**

## **2.3 Database Migration Types**

AWS DMS supports two major database migration approaches.

| Migration Type              | Description                                      | Example                     |
| --------------------------- | ------------------------------------------------ | --------------------------- |
| **Homogeneous Migration**   | Source and target use the same database engine   | Oracle to Oracle            |
| **Heterogeneous Migration** | Source and target use different database engines | SQL Server to Amazon Aurora |

### **Homogeneous Migration**

- Migrates between databases using the **same database engine**.
- Typically does not require database schema conversion.
- Example: Migrating an on-premises Oracle database to Oracle in AWS.

### **Heterogeneous Migration**

- Migrates between **different database engines**.
- May require schema conversion because database structures and SQL features can differ.
- Example: Migrating SQL Server to **Amazon Aurora** to move away from legacy database licensing requirements.

### **AWS Schema Conversion Tool (AWS SCT)**

**AWS Schema Conversion Tool (AWS SCT)** helps convert database schemas when migrating between different database engines.
- Primarily associated with **heterogeneous database migrations**.
- Converts database schema objects and supported database code to formats compatible with the target database.
- Works alongside AWS DMS, which handles the actual data migration.

**Important distinction:**

- **AWS DMS - Migrates database data**
- **AWS SCT - Converts database schemas and supported database code**

## **2.4 AWS MGN vs AWS DMS**

| Feature                | AWS MGN                                            | AWS DMS                                                    |
| ---------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| **Primary Purpose**    | Server and application migration                   | Database migration                                         |
| **Migration Strategy** | Rehost (Lift and Shift)                            | Homogeneous or heterogeneous database migration            |
| **Replication Method** | Block-level replication                            | Full load and incremental replication                      |
| **Target**             | Amazon EC2 with EBS volumes                        | Database in AWS                                            |
| **Data Loss**          | Near-zero data loss                                | Near-zero data loss                                        |
| **Key Component**      | AWS Replication Agent                              | DMS replication task                                       |
| **Typical Scenario**   | Move an existing physical or virtual server to AWS | Migrate Oracle, PostgreSQL, or SQL Server databases to AWS |

Both services support ongoing replication to minimize data loss during migration, but they operate at different levels.

- **AWS MGN** replicates the entire server's disk data.
- **AWS DMS** replicates database data between database systems.

## **2.5 Exam Focus**

- **Migrate on-premises servers to Amazon EC2 - AWS MGN**
- **Lift and Shift migration - AWS MGN**
- **Block-level replication using AWS Replication Agent - AWS MGN**
- **Replicated server disk storage - Amazon EBS**
- **Migrate databases to AWS - AWS DMS**
- **Initial full load followed by incremental replication - AWS DMS**
- **Same source and target database engine - Homogeneous Migration**
- **Different source and target database engines - Heterogeneous Migration**
- **Convert database schemas between different engines - AWS SCT**
- **Minimize data loss during server or database migration - Continuous replication**

**Key exam distinction:** **AWS MGN migrates servers using block-level replication**, while **AWS DMS migrates databases using full-load and incremental data replication**.

# 3 - AWS Data Transfer Services

## **3.1 Introduction to AWS Data Migration**

**Data migration** is the process of transferring data from an **on-premises data center to AWS**.

Unlike server and database migration, data migration focuses on moving existing files and stored data into AWS storage services.

### **AWS Migration Services Overview**

Use the assessment and migration comparisons in sections 1–2 for workload or database migrations. For files and objects, sections 3–5 cover a transfer with **DataSync**, a physical high-speed transfer at a **Data Transfer Terminal**, and ongoing hybrid access with **Storage Gateway**.

## **3.2 Data Transfer Considerations**

Data can be transferred to AWS directly over the internet using APIs, such as uploading files to **Amazon S3**.

However, the feasibility of online transfer depends on two important factors:
- **Data size** - The total amount of data that must be transferred.
- **Network bandwidth** - The available internet connection speed.

For example, transferring several petabytes of data over a **1 Gbps connection** can take an extremely long time, making internet-based migration impractical.

For large datasets, organizations may prefer transferring data using physical storage devices rather than relying entirely on internet bandwidth.

**Key concept:** The larger the dataset and the lower the available bandwidth, the less practical a direct online transfer becomes.

## **3.3 Online vs Offline Data Transfer**

AWS supports different approaches for transferring data from on-premises environments to the cloud.

| Feature                | Online Data Transfer                       | Offline Data Transfer                                    |
| ---------------------- | ------------------------------------------ | -------------------------------------------------------- |
| **Method**             | Transfers data over a network              | Physically transports data on storage devices            |
| **Network Dependency** | Depends on available bandwidth             | Reduces reliance on the source site's internet bandwidth |
| **Best Use Case**      | Ongoing data transfers and synchronization | Initial migration of very large datasets                 |
| **AWS Service**        | **AWS DataSync**                           | **AWS Data Transfer Terminal**                           |

### **Online Data Transfer**

- Transfers data to AWS over a network connection.
- Suitable for continuous or incremental data transfers.
- Useful when additional data is generated after an initial migration.
- **AWS DataSync** is a key service for online data migration.

### **Offline Data Transfer**

- Copies large datasets onto physical storage devices.
- Physically transports those devices to a designated location.
- Uses high-speed infrastructure to upload the data to AWS.
- Reduces the need to transfer massive datasets over the organization's internet connection.

### **Combining Offline and Online Transfers**

Organizations can use both approaches during large migrations:
1. **Initial transfer** - Move large volumes of existing data using an offline method.
2. **Incremental transfer** - Transfer newly generated or modified data using an online method.
3. **Synchronization** - Keep the destination updated until migration is completed.

This approach is useful when large datasets must be migrated while on-premises applications continue generating new data.

## **3.4 AWS Data Transfer Services**

### **AWS DataSync**

For a managed transfer of files or objects over a network, use **AWS DataSync**. The detailed transfer example is in section 4.

### **AWS Data Transfer Terminal**

**AWS Data Transfer Terminal** provides physical locations managed by AWS where customers can upload large datasets using high-bandwidth connections to AWS.

How it works:

1. Select a nearby **AWS Data Transfer Terminal** location.
2. Reserve an appointment for data transfer.
3. Bring physical storage devices containing the data.
4. Connect the devices and upload the data at the terminal.
5. AWS transfers the uploaded data to supported AWS storage destinations, such as **Amazon S3** or **Amazon EFS**.

**Key characteristics:**

- Designed for transferring large datasets.
- Uses AWS-managed physical locations and high-bandwidth network connections.
- Reduces dependence on the customer's existing internet connection.

**Exam clue: Transfer large datasets by physically bringing storage devices to an AWS-managed location - AWS Data Transfer Terminal**

### **AWS Snow Family (Legacy Services Discussed)**

The lesson also mentions two services historically used for offline data transfer:
- **AWS Snowcone** - Portable device for transferring data.
- **AWS Snowball Edge** - Physical device for transferring large datasets.

**Availability:** AWS Snowball Edge closed to new customers on November 7, 2025 and remains available to existing customers. AWS points new customers to **DataSync** for online moves, **Data Transfer Terminal** for high-speed physical uploads at an AWS facility, or AWS Partner solutions. [Snowball Edge availability](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html)

For this lesson, prioritize understanding the distinction between **offline data transfer** and **online data transfer using AWS DataSync**.

## **3.5 Exam Focus**

- **Migrate on-premises servers to AWS - AWS MGN**
- **Migrate databases to AWS - AWS DMS**
- **Transfer and synchronize data over a network - AWS DataSync**
- **Transfer large datasets at an AWS-managed physical location - AWS Data Transfer Terminal**
- **Transfer data using network connectivity - Online Data Transfer**
- **Physically transport storage devices - Offline Data Transfer**
- **Initial bulk migration followed by incremental synchronization - Combine offline and online transfer methods**
- **Store migrated objects - Amazon S3**
- **Store migrated shared files - Amazon EFS or Amazon FSx**
- **Choose a data transfer approach - Consider dataset size and network bandwidth**

**Key exam distinction:** **AWS DataSync** is used for network-based data transfer and synchronization, while **AWS Data Transfer Terminal** provides a physical-location-based approach for transferring very large datasets to AWS.

# 4 - Online Data Transfer - AWS DataSync

## **4.1 AWS DataSync Overview**

**AWS DataSync** is an **online data transfer service** that automates moving and synchronizing data between on-premises storage, edge locations, other cloud providers, and AWS storage services.
- Transfers data over a network connection.
- Supports **incremental data transfers** and scheduled synchronization.
- Can transfer data from external environments to AWS or **between AWS storage services**.
- Supports secure data transfers using **TLS encryption**.

### **Supported Data Sources and Destinations**

|Source|Examples|
|---|---|
|**On-Premises Storage**|NFS, SMB, HDFS (Hadoop Distributed File System)|
|**AWS Edge Locations**|AWS Outposts, AWS Snowcone|
|**Other Cloud Providers**|Google Cloud Storage, Microsoft Azure Storage|
|**AWS Storage Services**|Amazon S3, Amazon EFS, Amazon FSx|

**Supported AWS storage destinations:**

- **Amazon Simple Storage Service (Amazon S3)** - Object storage.
- **Amazon Elastic File System (Amazon EFS)** - Managed shared file storage.
- **Amazon FSx** - Managed file systems.

**Important:** AWS DataSync is not limited to on-premises migrations. It can also transfer data **between AWS services**, such as copying data from one Amazon S3 bucket to another.

## **4.2 How AWS DataSync Works**

AWS DataSync uses a **DataSync Agent** to transfer data from supported external storage environments to AWS.
1. Deploy the **AWS DataSync Agent** on a virtual machine in the source environment.
2. Configure the source and destination storage locations.
3. Create a **DataSync Task** to define the data transfer.
4. Run or schedule the task to initiate the transfer.
5. DataSync transfers the data and handles incremental updates and failed transfers.

The DataSync Agent communicates with the **AWS DataSync service** in the cloud to perform the transfer.

## **4.3 Key Features of AWS DataSync**

| Feature                        | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| **Online Data Transfer**       | Transfers data over network connections                    |
| **Multiple Storage Protocols** | Supports NFS, SMB, and HDFS                                |
| **AWS-to-AWS Transfer**        | Transfers data between supported AWS storage services      |
| **Scheduled Tasks**            | Supports hourly, daily, and weekly transfers               |
| **Bandwidth Throttling**       | Limits the network bandwidth used during transfers         |
| **Incremental Transfer**       | Transfers only new or modified data after the initial copy |
| **Failure Recovery**           | Handles failed transfers and retries affected files        |
| **Parallel Tasks**             | Runs multiple tasks to utilize higher available bandwidth  |
| **Encryption in Transit**      | Protects transferred data using TLS encryption             |

### **Scheduled and Incremental Transfers**

**AWS DataSync Tasks** can be scheduled to run automatically.
- **Hourly** - Frequent synchronization.
- **Daily** - Regular data transfers.
- **Weekly** - Periodic data transfers.

Organizations can schedule transfers during **off-peak hours** to avoid consuming network bandwidth during business hours.

**Incremental transfers** improve efficiency by avoiding unnecessary retransmission of previously copied, unchanged data.

If a transfer fails, DataSync can retry the affected files instead of restarting the entire migration.

### **Bandwidth Management and Performance**

AWS DataSync provides controls for optimizing data transfer performance.
- **Bandwidth throttling** - Restricts how much network bandwidth a transfer consumes.
- **Parallel execution** - Multiple DataSync tasks can run simultaneously to use higher available bandwidth.
- **High-speed transfer** - The lecture describes transfer speeds of up to **10 Gbps per task**.

For example, an organization with a **100 Gbps AWS Direct Connect** connection can run multiple DataSync tasks in parallel to better utilize its available bandwidth.

### **Security**

AWS DataSync uses **Transport Layer Security (TLS)** to encrypt data during transmission.
- Protects data **in transit** between the source and destination.
- Helps prevent unauthorized access to transferred data.

## **4.4 Common AWS DataSync Use Cases**

| Scenario                                              | AWS DataSync Capability          |
| ----------------------------------------------------- | -------------------------------- |
| Migrate files from an on-premises Windows file server | Transfer SMB data to AWS storage |
| Migrate data from a Linux NFS file server             | Transfer NFS data to AWS storage |
| Migrate data from a Hadoop environment                | Transfer HDFS data to AWS        |
| Move data from Google Cloud or Azure to AWS           | Cross-cloud data transfer        |
| Copy data between Amazon S3 buckets                   | AWS-to-AWS data transfer         |
| Synchronize newly generated files nightly             | Scheduled incremental transfers  |
| Transfer data without saturating company bandwidth    | Bandwidth throttling             |

## **4.5 Exam Focus**

- **Online data transfer and synchronization - AWS DataSync**
- **Transfer NFS, SMB, or HDFS data to AWS - AWS DataSync**
- **Transfer data from Google Cloud or Azure to AWS - AWS DataSync**
- **Move data between AWS storage services - AWS DataSync**
- **Supported AWS destinations - Amazon S3, Amazon EFS, Amazon FSx**
- **Connect external storage environments - AWS DataSync Agent**
- **Automate recurring transfers - Scheduled DataSync Tasks**
- **Transfer only new or modified data - Incremental Transfer**
- **Recover from transfer failures - Automatic Retry**
- **Limit network usage - Bandwidth Throttling**
- **Utilize higher bandwidth - Parallel DataSync Tasks**
- **Encrypt data in transit - TLS Encryption**

**Key exam distinction:** **AWS DataSync** is used for **online data transfer and synchronization**, supporting scheduled, incremental, encrypted transfers between on-premises environments, other cloud providers, and AWS storage services.

# 5 - Hybrid Storage - AWS Storage Gateway

## **5.1 AWS Storage Gateway Overview**

**AWS Storage Gateway** is a **hybrid cloud storage service** that enables on-premises applications to access AWS cloud storage services.
- Allows applications to remain **on-premises** while using AWS as an extension of local storage.
- Provides access to AWS storage through standard storage protocols.
- Supports **NFS, SMB, and iSCSI** protocols.
- Enables hybrid storage, cloud-backed volumes, and backup solutions.

**Key concept:** Unlike data migration services, which focus on moving existing data to AWS, **AWS Storage Gateway** enables on-premises applications to continuously access and use AWS cloud storage.

### **How AWS Storage Gateway Works**

1. Deploy a **Storage Gateway appliance** as a virtual machine on-premises or on an **Amazon EC2 instance** with connectivity to the on-premises applications.
2. On-premises applications connect to the gateway using supported storage protocols.
3. The gateway communicates with the **AWS Storage Gateway service**.
4. Application data is stored in or retrieved from supported AWS storage services.

**Supported storage protocols:**

- **NFS (Network File System)** - File-based storage access.
- **SMB (Server Message Block)** - File sharing commonly used by Windows applications.
- **iSCSI (Internet Small Computer Systems Interface)** - Block-level storage access.

## **5.2 Types of AWS Storage Gateway**

AWS Storage Gateway provides four gateway types for different storage requirements.

| Gateway Type                | Primary Purpose                             | AWS Storage                        |
| --------------------------- | ------------------------------------------- | ---------------------------------- |
| **Amazon S3 File Gateway**  | File-based access to objects stored in S3   | Amazon S3                          |
| **Amazon FSx File Gateway** | File-based access to Windows file shares    | Amazon FSx for Windows File Server |
| **Volume Gateway**          | Cloud-backed block storage using iSCSI      | Amazon S3 and EBS snapshots        |
| **Tape Gateway**            | Replace physical tape backup infrastructure | Amazon S3 and S3 Glacier storage   |

### **Amazon S3 File Gateway**

**Amazon S3 File Gateway** allows on-premises applications to access data stored in **Amazon S3** using file protocols.
- Provides file-based access to Amazon S3.
- Supports **NFS and SMB**.
- Useful when applications need to use Amazon S3 without directly interacting with S3 APIs.

**Exam clue: Access Amazon S3 from on-premises applications using NFS or SMB - Amazon S3 File Gateway**

### **Amazon FSx File Gateway**

**Amazon FSx File Gateway** provides on-premises access to **Amazon FSx for Windows File Server**.
- Supports Windows-compatible file sharing using **SMB**.
- Allows applications to access files stored in Amazon FSx.
- Useful for hybrid environments requiring Windows file shares.

**Exam clue: Access Amazon FSx for Windows File Server from on-premises - Amazon FSx File Gateway**

### **Volume Gateway**

**Volume Gateway** provides cloud-backed storage volumes to on-premises applications using the **iSCSI protocol**.

It supports two configurations:
- **Cached Volumes**
- **Stored Volumes**

These configurations differ in where the primary data is stored and how it is accessed.

### **Tape Gateway**

**Tape Gateway** allows organizations to replace traditional physical tape backups with **virtual tapes stored in AWS**.
- Provides cloud-based tape backup storage.
- Eliminates the need to maintain physical tape infrastructure.
- Uses **Amazon S3 and Amazon S3 Glacier storage** for backup and archival.

**Exam clue: Replace physical backup tapes with virtual tapes in AWS - Tape Gateway**

## **5.3 Volume Gateway: Cached vs Stored Volumes**

Volume Gateway offers two storage approaches depending on whether the application prioritizes cloud storage or local access to the entire dataset.

| Feature                   | Cached Volumes                      | Stored Volumes                                         |
| ------------------------- | ----------------------------------- | ------------------------------------------------------ |
| **Primary Data Location** | AWS Cloud (Amazon S3)               | On-premises                                            |
| **Locally Stored Data**   | Frequently accessed data            | Entire dataset                                         |
| **Main Benefit**          | Minimize local storage requirements | Low-latency access to all data                         |
| **AWS Integration**       | Cloud-backed storage                | Asynchronous backups as EBS snapshots                  |
| **Use Case**              | Cloud storage with local caching    | Local storage with cloud backups and disaster recovery |

### **Cached Volumes**

- Primary data is stored in **Amazon S3**.
- Frequently accessed data is cached locally on the gateway appliance.
- Reduces the amount of storage required on-premises.
- Provides faster access to frequently used data.

**Exam clue: Store primary data in AWS while caching frequently accessed data locally - Cached Volume Gateway**

### **Stored Volumes**

- The entire dataset is stored **locally on-premises**.
- Provides low-latency access to all application data.
- Data is asynchronously backed up to AWS as **Amazon EBS snapshots**, stored in Amazon S3.
- Can support **disaster recovery (DR)**.

### **Disaster Recovery Using Stored Volumes**

If an on-premises data center fails:

1. Retrieve the available **EBS snapshots** stored in AWS.
2. Restore the snapshots into **Amazon EBS volumes**.
3. Attach the restored volumes to **Amazon EC2 instances**.
4. Run applications in AWS using the recovered data.

**Exam clue: Keep all data on-premises for low latency while maintaining cloud backups for disaster recovery - Stored Volume Gateway**

## **5.4 AWS Storage Gateway vs AWS DataSync**

Although both services connect on-premises environments with AWS storage, they serve different purposes.

| Feature             | AWS Storage Gateway                                            | AWS DataSync                                          |
| ------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| **Primary Purpose** | Hybrid cloud storage access                                    | Online data transfer and synchronization              |
| **Typical Usage**   | Continuous access to AWS storage from on-premises applications | Migrate or synchronize data between storage locations |
| **Data Access**     | Applications access storage through gateway protocols          | Data is copied between source and destination         |
| **Common Scenario** | Keep applications on-premises while storing data in AWS        | Transfer files from on-premises storage to AWS        |

**Important distinction:**

- **AWS Storage Gateway - Hybrid storage access**
- **AWS DataSync - Data migration and synchronization**

## **5.5 Exam Focus**

- **Hybrid storage for on-premises applications - AWS Storage Gateway**
- **Access Amazon S3 using NFS or SMB - Amazon S3 File Gateway**
- **Access Windows file shares in Amazon FSx - Amazon FSx File Gateway**
- **Cloud-backed block storage using iSCSI - Volume Gateway**
- **Primary data in AWS with frequently accessed data cached locally - Cached Volumes**
- **Entire dataset stored locally with cloud backups - Stored Volumes**
- **Disaster recovery using EBS snapshots - Stored Volume Gateway**
- **Replace physical tape backups with virtual tapes - Tape Gateway**
- **Supported storage protocols - NFS, SMB, iSCSI**
- **Transfer and synchronize data to AWS - AWS DataSync**

**Key exam distinctions:**

- **File Gateway - File-based access to AWS storage**
- **Volume Gateway - Block-level storage using iSCSI**
- **Tape Gateway - Virtual tape backups**
- **Cached Volumes - Primary data in AWS, frequently accessed data locally**
- **Stored Volumes - Entire dataset locally, backups in AWS**

# 6 - Quiz

## **6.1 Practice Question**

### **Original Question**

Which AWS service helps estimate the cost savings of moving workloads from on-premises to AWS?

### **Choices**

A. AWS Pricing Calculator  
B. AWS Migration Evaluator  
C. AWS Cost Explorer  
D. AWS Budgets

### **Correct Answer**

**B. AWS Migration Evaluator**

### **Why?**

**AWS Migration Evaluator** analyzes existing on-premises workloads and provides cost comparison reports to estimate potential savings from migrating to AWS.

**Key distinction:**

- **AWS Migration Evaluator** - Estimates potential cost savings from migrating on-premises workloads to AWS.
- **AWS Pricing Calculator** - Estimates the cost of running AWS services.
- **AWS Cost Explorer** - Analyzes historical AWS spending and usage trends.
- **AWS Budgets** - Sets spending budgets and alerts when thresholds are exceeded.

**Exam clue: Estimate cost savings and build a business case for cloud migration - AWS Migration Evaluator**

## **6.2 Practice Question**

### **Original Question**

Which AWS service helps you lift and shift on-premises servers to AWS with minimal downtime?

### **Choices**

A. AWS DataSync  
B. AWS Snowball Edge  
C. AWS Application Migration Service (MGN)  
D. AWS CloudFormation

### **Correct Answer**

**C. AWS Application Migration Service (MGN)**

### **Why?**

**AWS Application Migration Service (MGN)** enables **Lift and Shift (Rehost)** migration of on-premises servers to AWS with minimal downtime.
- Uses **block-level replication** to continuously replicate server data.
- Migrates existing servers to **Amazon EC2**.
- Supports test migrations and production cutover.

**Why the other options are incorrect:**

- **AWS DataSync** - Transfers and synchronizes files and stored data, not entire servers.
- **AWS Snowball Edge** - Physical device historically used for offline data transfers.
- **AWS CloudFormation** - Automates AWS infrastructure provisioning using templates.

**Exam clue: Lift and shift servers to AWS with minimal downtime - AWS MGN**

## **6.3 Practice Question**

### **Original Question**

Which AWS service helps migrate databases to AWS quickly and securely with minimal downtime?

### **Choices**

A. AWS DataSync  
B. Amazon RDS  
C. AWS Migration Hub  
D. AWS Database Migration Service (DMS)

### **Correct Answer**

**D. AWS Database Migration Service (DMS)**

### **Why?**

**AWS Database Migration Service (AWS DMS)** migrates databases to AWS with minimal downtime.
- Supports **homogeneous migrations** (same database engine).
- Supports **heterogeneous migrations** (different database engines).
- Performs an initial full data load followed by incremental replication to keep databases synchronized.

**Why the other options are incorrect:**

- **AWS DataSync** - Transfers files and stored data, not database migrations.
- **Amazon RDS** - Managed relational database service, not the primary database migration service.
- **AWS Migration Hub** - Centrally tracks migration activities rather than performing database replication.

**Exam clue: Migrate databases with minimal downtime - AWS DMS**

## **6.4 Practice Question**

### **Original Question**

Which AWS service provides a physical device to transfer large amounts of data to the AWS Cloud?

### **Choices**

A. AWS Storage Gateway  
B. AWS DataSync  
C. AWS Snowball Edge  
D. AWS Transfer Family

### **Correct Answer**

**C. AWS Snowball Edge**

### **Why?**

**AWS Snowball Edge** is a physical device historically used for **offline data transfer** to AWS.
- Designed to transfer large datasets.
- Data is copied onto a physical device and shipped for ingestion into AWS.
- Reduces dependence on internet bandwidth during large migrations.

**Why the other options are incorrect:**

- **AWS Storage Gateway** - Provides hybrid storage access between on-premises applications and AWS.
- **AWS DataSync** - Transfers data online over a network.
- **AWS Transfer Family** - Provides managed file transfers using protocols such as SFTP, FTPS, and FTP.

**Exam clue: Physical device for transferring large datasets to AWS - AWS Snowball Edge**

**Note:** This quiz tests Snowball Edge as a physical data transfer device. The course also discusses changes to AWS Snow Family availability and the newer AWS Data Transfer Terminal.

## **6.5 Practice Question**

### **Original Question**

Which AWS service provides hybrid cloud storage that connects on-premises applications to cloud storage?

### **Choices**

A. AWS Backup  
B. Amazon EFS  
C. AWS DataSync  
D. AWS Storage Gateway

### **Correct Answer**

**D. AWS Storage Gateway**

### **Why?**

**AWS Storage Gateway** is a **hybrid cloud storage service** that connects on-premises applications to AWS storage services.
- Allows applications to remain on-premises while accessing AWS storage.
- Supports **NFS, SMB, and iSCSI** protocols.
- Provides File Gateway, Volume Gateway, and Tape Gateway capabilities.

**Why the other options are incorrect:**

- **AWS Backup** - Centrally manages and automates backups across supported AWS services.
- **Amazon EFS** - Managed shared file storage, not a hybrid storage gateway.
- **AWS DataSync** - Transfers and synchronizes data rather than providing ongoing gateway-based storage access.

**Exam clue: Connect on-premises applications to AWS cloud storage - AWS Storage Gateway**

## **6.6 Exam Focus**

| Exam Scenario                                   | Correct AWS Service         |
| ----------------------------------------------- | --------------------------- |
| Estimate cost savings from cloud migration      | **AWS Migration Evaluator** |
| Lift and shift on-premises servers              | **AWS MGN**                 |
| Migrate databases with minimal downtime         | **AWS DMS**                 |
| Transfer large datasets using a physical device | **AWS Snowball Edge**       |
| Connect on-premises applications to AWS storage | **AWS Storage Gateway**     |

### **Key Distinctions to Remember**

- **AWS MGN vs AWS DMS** - MGN migrates servers; DMS migrates databases.
- **AWS DataSync vs AWS Storage Gateway** - DataSync transfers and synchronizes data; Storage Gateway provides hybrid storage access.
- **AWS Migration Evaluator vs AWS Pricing Calculator** - Migration Evaluator estimates potential migration savings; Pricing Calculator estimates AWS service costs.
- **AWS Snowball Edge vs AWS DataSync** - Snowball Edge uses physical devices for offline transfers; DataSync transfers data online.
- **AWS Migration Hub vs Migration Services** - Migration Hub tracks migration progress; MGN and DMS perform actual migrations.