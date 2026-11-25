# 1 - Introduction to AWS Databases

## **1.1 Introduction to AWS Databases**

AWS provides various **purpose-built database services** designed to support different application requirements and data access patterns.

Traditionally, applications relied on a single **relational database** for most tasks. However, modern applications, particularly those using **microservices architecture**, often require different database types for different workloads.

### **Why Do We Need Different Database Types?**

- **Traditional Applications:** Primarily used relational databases for storing and retrieving data.
- **Modern Applications:** Use microservices, where individual services may have their own databases.
- **Purpose-Built Databases:** Databases optimized for specific requirements, such as performance, flexibility, relationships, or analytics.

**Key Concept:** No single database type is optimal for every workload. AWS offers different database services based on application requirements.

## **1.2 Types of AWS Database Services**

AWS offers several database services designed for specific use cases.

| Database Type         | AWS Service                                                  | Primary Use Case                                     |
| --------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **Relational**        | **Amazon RDS**, **Amazon Aurora**                            | Banking, finance, booking systems                    |
| **Key-Value / NoSQL** | **Amazon DynamoDB**                                          | Shopping carts, product catalogs                     |
| **Document**          | **Amazon DocumentDB**                                        | Content management, user profiles                    |
| **In-Memory**         | **Amazon ElastiCache**                                       | Caching, gaming leaderboards                         |
| **Graph**             | **Amazon Neptune**                                           | Social networks, fraud detection                     |
| **Time Series**       | **Amazon Timestream**                                        | IoT data, timestamp-based data                       |
| **Data Warehouse**    | **Amazon Redshift**                                          | Large-scale data analytics                           |
| **Ledger**            | **Amazon Quantum Ledger Database (QLDB, retired)**           | Immutable transaction records, supply chain tracking |
| **Vector**            | **Amazon OpenSearch Service**, other supported AWS databases | Generative AI, vector embeddings                     |

### **Relational Databases**

- Store structured data with **strict schemas**.
- Support **ACID properties**, making them suitable for reliable transactions.
- Commonly used for banking, financial systems, and booking applications.

**AWS Services:** Amazon Relational Database Service (Amazon RDS) and Amazon Aurora.

### **Key-Value / NoSQL Databases**

- Suitable for large volumes of **semi-structured data**.
- Provide flexibility when records contain different attributes.
- Commonly used for shopping carts and product catalogs.

**AWS Service:** Amazon DynamoDB.

### **Document Databases**

- Store information as **documents** rather than traditional relational tables.
- Suitable for content management and user profile information.

**AWS Service:** Amazon DocumentDB.

### **In-Memory Databases**

- Store frequently accessed data in memory for **very low latency**.
- Suitable for performance-critical applications.
- Common use cases include caching shopping carts and gaming leaderboards.

**AWS Service:** Amazon ElastiCache.

### **Graph Databases**

- Designed to store and query **relationships between entities**.
- Useful when connections between data points are important.

**Common Use Cases:**

- Social media connections
- Fraud detection

**AWS Service:** Amazon Neptune.

### **Time Series Databases**

- Designed for data associated with **timestamps**.
- Suitable for applications generating high-frequency, time-based information.

**Common Use Case:** IoT sensor data.

**AWS Service:** Amazon Timestream.

### **Data Warehouses**

- Designed for **large-scale analytical queries**.
- Support analytics across massive datasets, potentially at **petabyte scale**.
- Suitable for running ad hoc analytical queries.

**AWS Service:** Amazon Redshift.

### **Ledger Databases**

- Maintain **immutable transaction records** that cannot be modified after being recorded.
- Suitable for applications requiring a reliable history of transactions.

**Common Use Cases:**

- Supply chain tracking
- Systems of record

**AWS Service:** Amazon Quantum Ledger Database (Amazon QLDB).

### **Vector Databases**

- Store **vector embeddings**, which are numerical representations of information such as text, images, and audio.
- Help identify and retrieve related information based on similarity.
- Commonly used in **Generative AI** applications.

**AWS Services:**

- Amazon OpenSearch Service (a search and analytics service with vector capabilities)
- Amazon Aurora
- Amazon RDS
- Amazon Neptune
- Amazon DocumentDB

These services can support vector-related workloads depending on their capabilities.

## **1.3 Managed AWS Databases vs. Self-Managed Databases on EC2**

Databases can be deployed using two general approaches:
1. **Self-Managed Databases:** Install and manage database software on Amazon EC2 instances.
2. **Managed Database Services:** Use AWS database services that handle much of the database administration.

### **Responsibility Comparison**

| Activity                            | Self-Managed on EC2    | Managed AWS Database                     |
| ----------------------------------- | ---------------------- | ---------------------------------------- |
| Database installation               | Customer               | AWS                                      |
| Database patching                   | Customer               | AWS                                      |
| Database upgrades                   | Customer               | AWS manages supported upgrade operations |
| Backups and recovery infrastructure | Customer               | AWS provides managed capabilities        |
| Multi-AZ deployment                 | Customer manages setup | AWS provides managed deployment options  |
| Schema design                       | Customer               | Customer                                 |
| Data queries                        | Customer               | Customer                                 |

### **Benefits of Managed Database Services**

- **Reduced Operational Overhead:** AWS handles many database administration tasks.
- **Simplified Maintenance:** Automated capabilities for patching, backups, and upgrades.
- **High Availability:** Managed services can provide Multi-AZ deployment options.
- **Focus on Application Data:** Customers primarily focus on schema design, data management, and querying.

**Cost Consideration:**

- Managed database services may cost more than running the database software on EC2.
- However, they reduce the effort required for database administration and maintenance.

**Important Distinction:** Managed does not mean the customer has no responsibilities. Customers still manage their data, schema, queries, and relevant service configurations.

## **1.4 Exam Focus**

### **Database Service Recognition**

- **Relational database / ACID transactions - Amazon RDS or Amazon Aurora**
- **NoSQL / Key-value / Shopping carts - Amazon DynamoDB**
- **Document storage / User profiles - Amazon DocumentDB**
- **In-memory caching / Low latency - Amazon ElastiCache**
- **Graph relationships / Fraud detection - Amazon Neptune**
- **Time-stamped IoT data - Amazon Timestream**
- **Data warehousing / Petabyte-scale analytics - Amazon Redshift**
- **Immutable transaction history - Amazon QLDB (retired lecture example)**
- **Vector embeddings / Generative AI similarity search - Amazon OpenSearch Service or supported database services**

### **Key Exam Distinctions**

- **Relational vs. NoSQL:** Structured data with strict schemas and transactional requirements vs. flexible, semi-structured data.
- **ElastiCache vs. DynamoDB:** In-memory caching and low-latency access vs. NoSQL database storage.
- **Neptune vs. Redshift:** Relationship-based queries vs. large-scale analytical queries.
- **Managed Database vs. EC2 Database:** AWS handles much of the database maintenance vs. the customer manages database software and operations.

**Remember:** For CLF-C02, focus on identifying the **appropriate AWS database service based on the workload and use case**, rather than detailed database implementation.

For moving databases and converting schemas, see [AWS DMS and AWS SCT](./20%20-%20AWS%20Migration%20and%20Hybrid%20Storage.md).

# 2 - Amazon RDS

## **2.1 Amazon RDS Overview**

**Amazon Relational Database Service (Amazon RDS)** is a **managed relational database service** that allows users to run SQL databases on AWS without managing the underlying database infrastructure.

AWS handles database administration tasks, allowing customers to focus on their data and applications.

### **Key Features**

Amazon RDS simplifies database management by handling:
- **Provisioning:** Setting up database infrastructure.
- **Patching:** Applying database software patches.
- **Upgrades:** Managing database software upgrades.
- **Backups and Recovery:** Supporting data backup and restoration.
- **Repair:** Handling database infrastructure maintenance.
- **Monitoring:** Providing database monitoring capabilities.

**Key Concept:** Amazon RDS reduces operational overhead by automating common database administration tasks.

## **2.2 Amazon RDS Supported Database Engines**

Amazon RDS supports multiple **relational database engines**, including open-source databases, commercial databases, and AWS-built technology.

|Database Engine|Category|Key Detail|
|---|---|---|
|**PostgreSQL**|Open-source|Supported by Amazon RDS|
|**MySQL**|Open-source|Supported by Amazon RDS|
|**MariaDB**|Open-source|Supported by Amazon RDS|
|**Oracle Database**|Commercial|Additional licensing costs may apply|
|**Microsoft SQL Server**|Commercial|Additional licensing costs may apply|
|**IBM Db2**|Commercial|Additional licensing costs may apply|
|**Amazon Aurora**|AWS-built|Relational database engine developed by AWS|

### **Open-Source vs. Commercial Databases**

**Open-Source Databases:**
- Amazon RDS supports familiar database engines such as PostgreSQL, MySQL, and MariaDB.
- Customers can use supported versions of these databases without managing the underlying database infrastructure.

**Commercial Databases:**
- Amazon RDS supports Oracle Database, Microsoft SQL Server, and IBM Db2.
- **Additional licensing costs** may apply depending on the database engine and licensing option.

**Amazon Aurora:**
- AWS-developed relational database engine.
- Part of the Amazon RDS ecosystem but also discussed as a separate database service.

## **2.3 Exam Focus**

- **Managed relational database / SQL database - Amazon RDS**
- **Automated provisioning, patching, upgrades, backups, and recovery - Amazon RDS**
- **Open-source relational engines - PostgreSQL, MySQL, MariaDB**
- **Commercial relational engines - Oracle, Microsoft SQL Server, IBM Db2**
- **Commercial database licensing - Additional costs may apply**
- **AWS-built relational database engine - Amazon Aurora**

**Key Exam Distinctions:**

- **Amazon RDS vs. Self-Managed Database on EC2:** AWS manages routine database administration in RDS, while customers manage these tasks when running database software on EC2.
- **Amazon RDS vs. Amazon Aurora:** Amazon RDS is a managed relational database service supporting multiple engines; Aurora is an AWS-built relational database engine.
- **Open-Source vs. Commercial Engines:** Both are supported by RDS, but commercial engines may involve additional licensing costs.

# 3 - \[Exercise] Create MySQL RDS Database

## **3.1 Creating an Amazon RDS MySQL Database**

**Amazon RDS** allows users to deploy and manage relational databases, such as **MySQL**, without managing the underlying database infrastructure.

In this exercise, a **MySQL RDS database** is created and accessed from an **Amazon EC2 instance** within the same **Amazon VPC**.

### **Database Deployment Architecture**

- **Amazon EC2:** Hosts the application or database client.
- **Amazon RDS:** Hosts the managed MySQL database.
- **Amazon VPC:** Provides the network environment for communication between EC2 and RDS.
- **Security Groups:** Control which resources can connect to the database.

### **Single-AZ vs. Multi-AZ Deployment**

| Deployment    | Description                                                               | Use Case                                         |
| ------------- | ------------------------------------------------------------------------- | ------------------------------------------------ |
| **Single-AZ** | Database deployed in one Availability Zone                                | Development, testing, demonstrations             |
| **Multi-AZ**  | Primary database and standby deployed across different Availability Zones | Production workloads requiring high availability |

**Best Practice:** Production databases should generally be deployed in **private subnets**, with **Multi-AZ deployment** when high availability is required.

## **3.2 Key Amazon RDS Configuration Options**

| Configuration       | Demo Selection               | Important Concept                           |
| ------------------- | ---------------------------- | ------------------------------------------- |
| **Database Engine** | MySQL                        | Open-source relational database             |
| **Deployment**      | Single-AZ                    | Uses one Availability Zone                  |
| **Instance Type**   | db.t4g.micro                 | Determines database compute capacity        |
| **Storage**         | 20 GB SSD                    | Storage allocated to the database           |
| **VPC**             | Default VPC                  | Network environment for the database        |
| **Public Access**   | Disabled                     | Database is not publicly accessible         |
| **Security Group**  | Custom security group        | Controls inbound database connections       |
| **Authentication**  | Master username and password | Credentials required to access the database |

### **Database Connectivity and Security**

The following configurations are important when connecting EC2 to RDS:
- **VPC Connectivity:** EC2 and RDS are deployed within the same VPC in this demonstration.
- **Public Accessibility:** Set to **No**, keeping the database inaccessible directly from the public internet.
- **Security Group:** Configure an inbound rule allowing MySQL traffic from the **EC2 instance's security group**.
- **Database Endpoint:** RDS provides a **DNS endpoint** that applications use to connect to the database.
- **Authentication:** Connections require a valid database username and password.

**Key Concept:** Instead of allowing database access from an arbitrary public IP address, the RDS security group can allow traffic specifically from the EC2 instance's security group.

## **3.3 Connecting Amazon EC2 to Amazon RDS**

An EC2 instance can connect to an RDS MySQL database using a compatible **MySQL client**.

### **Connection Process**

1. Launch a **MySQL RDS database**.
2. Configure its **security group** to allow traffic from the EC2 instance.
3. Install a compatible MySQL client on the EC2 instance.
4. Retrieve the **RDS DNS endpoint**.
5. Connect using the endpoint and database credentials.

Example connection command:

```
mysql -h <RDS-endpoint> -u admin -p
```

- `-h`**:** Specifies the database endpoint.
- `-u`**:** Specifies the database username.
- `-p`**:** Prompts for the database password.

Once connected, standard SQL operations can be performed, including creating databases, creating tables, and inserting records.

**Important:** Applications typically perform these SQL operations by connecting to the RDS database.

## **3.4 Exam Focus**

- **Managed MySQL relational database - Amazon RDS**
- **Connect applications to RDS - Database DNS endpoint**
- **Control database network access - Security Groups**
- **Restrict access to EC2 instances - Allow the EC2 security group as the inbound source**
- **Prevent direct public access - Disable Public Accessibility**
- **Production database network isolation - Private Subnet**
- **Database high availability across AZs - Multi-AZ Deployment**
- **Development or testing deployment - Single-AZ**

### **Key Exam Distinctions**

- **Single-AZ vs. Multi-AZ:** Single-AZ uses one Availability Zone; Multi-AZ provides a standby in another Availability Zone for high availability.
- **Security Group vs. Database Credentials:** Security groups control **network access**, while database credentials control **authentication**.
- **RDS Endpoint vs. EC2 IP Address:** Applications connect to the database using the **RDS endpoint**, not the EC2 instance's IP address.

**Remember:** Amazon RDS manages the database infrastructure, but customers must still configure appropriate **network access, security groups, and database authentication**.

# 4 - Amazon RDS Features

## **4.1 Amazon RDS Read Replicas**

**Amazon RDS Read Replicas** allow you to create read-only copies of a primary database to **scale read performance** and reduce the load on the primary database.

### **Key Features**

- **Primary Database:** Handles both read and write operations.
- **Read Replicas:** Handle read-only queries.
- **Asynchronous Replication:** Data is copied from the primary database to read replicas asynchronously.
- **Replication Lag:** Read replicas may contain slightly outdated data because replication is not instantaneous.
- **Cross-Region Replication:** Read replicas can be created in the same or different AWS Regions.
- **Number of Replicas:** Depends on the database engine; some engines support up to **15 read replicas**.
- **Monitoring:** Replication lag can be monitored using **Amazon CloudWatch**.

### **Read Replica Promotion**

If the primary database fails, a read replica can be **manually promoted** to become an independent, writable database.

**Important:** Unlike Multi-AZ deployments, traditional RDS Read Replicas do not provide automatic failover.

### **Common Use Cases**

- **Read Scalability:** Distribute read-heavy workloads across multiple databases.
- **Performance Optimization:** Reduce read-query load on the primary database.
- **Disaster Recovery:** Promote a read replica if the primary database becomes unavailable.
- **Lower Read Latency:** Deploy read replicas closer to users in different AWS Regions.

**Key Concept:** The primary purpose of Read Replicas is **read scalability**, not automatic high availability.

## **4.2 Amazon RDS Multi-AZ Deployment**

Multi-AZ deployments increase availability within a Region. A **Multi-AZ DB instance** pairs one writer with one synchronous standby in another AZ. The standby is reserved for failover. A **Multi-AZ DB cluster** has one writer and two readable standby instances across three AZs. If the writer fails, RDS can promote a standby. [RDS Multi-AZ architectures](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)

## **4.3 Read Replicas vs. Multi-AZ Deployment**

| Option | What it serves | Failover behavior |
| --- | --- | --- |
| **RDS read replica** | Read traffic with asynchronous replication. Can be cross-Region for supported engines. | Promote separately when needed. |
| **Multi-AZ DB instance** | One writer and a standby that does not serve reads. | Automatic failover to the standby. |
| **Multi-AZ DB cluster** | One writer and two readable standbys. | Automatic writer failover. Readers can also serve read traffic. |

**Exam cues** — Offload reads from a primary with a read replica. Protect against an AZ failure with Multi-AZ. When a question names the DB instance deployment, its standby does not serve reads.

## **4.4 Amazon RDS Backups and Snapshots**

Amazon RDS supports **automated backups** and **database snapshots** for data protection and recovery.

### **Automated Backups**

- RDS supports automatic continuous backups.
- Supports **Point-in-Time Recovery (PITR)** to restore a database to a specific point within the backup retention period.
- Recovery supports **one-second granularity**.
- Uses database transaction logs to support point-in-time restoration.
- Automated backups can be retained for up to **35 days**.

### **Database Snapshots**

- **Manual Snapshots:** Created on demand.
- **Scheduled Snapshots:** Can be created using scheduled backup arrangements.
- Represent a backup of the database at a specific point in time.
- Snapshots are stored in **Amazon S3**.
- Snapshots can be copied across AWS Regions.
- Snapshots can also be shared with other AWS accounts.

### **Automated Backups vs. Snapshots**

| Feature       | Automated Backups              | Manual Snapshots                   |     |
| ------------- | ------------------------------ | ---------------------------------- | --- |
| **Purpose**   | Continuous backup and recovery | Backup at a specific point in time |     |
| **Creation**  | Automatically managed          | Created on demand                  |     |
| **Recovery**  | Point-in-Time Recovery         | Restore from snapshot              |     |
| **Retention** | Up to 35 days                  | Retained until explicitly deleted  |     |

**Key Exam Distinction:**

- **Restore to a specific second - Automated Backups / Point-in-Time Recovery**
- **Create a backup on demand - Manual DB Snapshot**

## **4.5 Monitoring and Maintenance**

### **Amazon CloudWatch Integration**

Amazon RDS integrates with **Amazon CloudWatch** to monitor database performance and operational metrics.

Common metrics include:

- **CPU Utilization:** Database compute usage.
- **Database Connections:** Number of active database connections.
- **Free Storage Space:** Remaining available storage.
- **Disk I/O:** Database disk read and write activity.
- **Replica Lag:** Delay between the primary database and its read replicas.

**Exam Clue:** Monitor RDS database performance and metrics - **Amazon CloudWatch**.

### **Maintenance Window**

Amazon RDS uses a **maintenance window** to perform database maintenance operations.
- The maintenance window is a **30-minute weekly time slot**.
- Customers can configure their preferred maintenance window.
- If no window is specified, RDS automatically assigns one.

### **Modifying an RDS Database**

Amazon RDS allows certain database configurations to be modified after creation.

For example:
- Convert a **Single-AZ deployment** into a **Multi-AZ deployment**.
- RDS creates an additional standby database in another Availability Zone.

### **Underlying Infrastructure Access**

Because Amazon RDS is a **managed database service**:
- AWS manages the underlying database infrastructure.
- Customers do not receive direct access to the underlying EC2 instances.
- Customers connect to the database using its endpoint and manage their data and database operations

## **4.6 Exam Focus**

### **Important Service Associations**

- **Scale database read performance - RDS Read Replicas**
- **Asynchronous database replication - Read Replicas**
- **Cross-Region read access - Read Replicas**
- **Manual replica promotion - Read Replicas**
- **High availability / Automatic failover - Multi-AZ**
- **Synchronous database replication - Multi-AZ**
- **Restore database to a specific point in time - Automated Backups**
- **Create an on-demand database backup - Manual Snapshot**
- **Monitor CPU, connections, storage, and replica lag - Amazon CloudWatch**
- **Configure database maintenance schedule - Maintenance Window**

### **Key Exam Reminders**

- **Read Replicas = Performance and Read Scalability.**
- **Multi-AZ = High Availability and Automatic Failover.**
- Read Replicas use **asynchronous replication**, so data may be slightly outdated.
- Traditional Multi-AZ deployments use **synchronous replication** and automatically handle failover.
- Automated backups support **Point-in-Time Recovery** with retention of up to **35 days**.
- Amazon RDS is a **managed service**, so customers do not manage or directly access the underlying EC2 infrastructure.

# 5 - Amazon Aurora DB

## **5.1 Amazon Aurora Overview**

**Amazon Aurora** is a fully managed, **AWS-built relational database engine** that is part of the Amazon RDS family.

Unlike traditional RDS database engines, Aurora uses an **AWS-designed storage architecture** optimized for high performance, scalability, and durability.

### **Key Features**

- **MySQL and PostgreSQL Compatible:** Supports applications designed for MySQL and PostgreSQL.
- **AWS-Native Database:** Built and optimized specifically for AWS infrastructure.
- **High Performance:** Designed to provide greater throughput than standard MySQL and PostgreSQL databases.
- **High Durability:** Automatically maintains multiple copies of data across Availability Zones.
- **Read Scalability:** Supports up to **15 read replicas**.
- **Fully Managed:** AWS handles database infrastructure and maintenance operations.

### **Performance Advantages**

According to AWS performance comparisons, Aurora can provide:

| Comparison                          | Performance / Cost Advantage    |
| ----------------------------------- | ------------------------------- |
| **Aurora vs. MySQL**                | Up to **5x higher throughput**  |
| **Aurora vs. PostgreSQL**           | Up to **3x higher throughput**  |
| **Aurora vs. Commercial Databases** | Potentially **1/10th the cost** |

These are advertised comparisons, not guaranteed improvements for every workload.

**Key Concept:** Amazon Aurora combines **relational database compatibility** with AWS-optimized performance, scalability, and durability.

## **5.2 Amazon Aurora High Availability and Durability**

Amazon Aurora uses a distributed storage architecture designed to provide **high durability and availability**.

### **Key Features**

- Automatically maintains **6 copies of data** across **3 Availability Zones**.
- Protects data against underlying storage failures.
- Provides strong durability through multiple data copies.
- Supports up to **15 read replicas** to scale read-heavy workloads.

### **Aurora Read Replicas**

Similar to Amazon RDS Read Replicas, Aurora Read Replicas allow applications to distribute read operations across multiple database instances.

- The **primary database** handles write operations.
- **Read replicas** handle read queries.
- Read replicas help reduce the workload on the primary database.

**Key Distinction:** Aurora's distributed storage architecture provides high durability, while its read replicas improve **read scalability**.

## **5.3 Amazon Aurora Global Database**

**Amazon Aurora Global Database** allows a database to span **multiple AWS Regions**, supporting globally distributed applications.

### **Key Features**

- Uses a **primary AWS Region** for database write operations.
- Replicates data to secondary databases in other AWS Regions.
- Supports secondary databases in up to **5 additional AWS Regions**, as described in the lecture.
- Allows applications to read data closer to their users.
- Supports **disaster recovery** by allowing a secondary Region to be promoted when necessary.

### **Common Use Cases**

- **Global Applications:** Serve users across different geographic locations.
- **Low-Latency Reads:** Access data from a Region closer to the application or users.
- **Disaster Recovery:** Recover from primary Region failures using a secondary Region.

**Key Concept:** Aurora Global Database is designed for **cross-Region data replication, global read performance, and disaster recovery**.

## **5.4 Amazon Aurora Serverless**

**Amazon Aurora Serverless** is an on-demand, automatically scaling configuration of Amazon Aurora.

It eliminates the need to manually provision fixed database instance capacity.

### **Key Features**

- **Automatic Scaling:** Adjusts database compute capacity based on application demand.
- **No Fixed Instance Sizing:** Customers define capacity requirements rather than selecting a fixed instance type.
- **Capacity-Based Pricing:** Billing is based on consumed database capacity, with per-second metering.
- **Reduced Infrastructure Management:** AWS automatically manages database capacity adjustments.
- **Variable Workload Support:** Suitable for applications with unpredictable or intermittent database usage.

### **Common Use Cases**

- **Development and Testing:** Environments with occasional database usage.
- **Intermittent Applications:** Applications that access the database infrequently.
- **Unpredictable Workloads:** Applications with changing or unknown database demand.

**Key Concept:** Aurora Serverless automatically scales database capacity, reducing the need for manual capacity planning.

## **5.5 Amazon RDS vs. Amazon Aurora vs. Aurora Serverless**

| Feature               | Amazon RDS (Traditional Engines)  | Amazon Aurora                         | Aurora Serverless                        |
| --------------------- | --------------------------------- | ------------------------------------- | ---------------------------------------- |
| **Database Type**     | Managed relational databases      | AWS-built relational engine           | Serverless Aurora configuration          |
| **Supported Engines** | MySQL, PostgreSQL, Oracle, etc.   | MySQL and PostgreSQL compatible       | Aurora MySQL/PostgreSQL compatible       |
| **Infrastructure**    | Provisioned database instances    | Provisioned Aurora instances          | Automatically scaling capacity           |
| **Scaling**           | Instance sizing and read replicas | Read replicas and optimized storage   | Automatic compute capacity scaling       |
| **Primary Advantage** | Managed database administration   | Performance, durability, scalability  | Flexible capacity and variable workloads |
| **Typical Use Case**  | General relational workloads      | High-performance relational workloads | Unpredictable or intermittent workloads  |

### **Important Exam Distinctions**

- **Amazon RDS:** Managed service supporting multiple relational database engines.
- **Amazon Aurora:** AWS-built relational database engine optimized for performance and durability.
- **Aurora Global Database:** Extends Aurora across AWS Regions for global reads and disaster recovery.
- **Aurora Serverless:** Automatically adjusts database capacity based on workload demand.

## **5.6 Exam Focus**

### **Important Service Associations**

- **AWS-built relational database - Amazon Aurora**
- **MySQL and PostgreSQL compatibility - Amazon Aurora**
- **High-performance relational database - Amazon Aurora**
- **6 copies across 3 Availability Zones - Amazon Aurora**
- **Scale Aurora read operations - Aurora Read Replicas**
- **Globally distributed relational database - Aurora Global Database**
- **Cross-Region disaster recovery - Aurora Global Database**
- **Automatically scaling relational database capacity - Aurora Serverless**
- **Unpredictable or intermittent database workloads - Aurora Serverless**

### **Key Exam Reminders**

- **Amazon Aurora** is part of the **Amazon RDS family**, but uses an AWS-designed database storage architecture.
- Aurora supports **MySQL and PostgreSQL compatibility**.
- Aurora maintains **6 copies of data across 3 Availability Zones** for durability.
- Aurora supports up to **15 read replicas** for read scalability.
- **Aurora Global Database = Cross-Region replication and disaster recovery.**
- **Aurora Serverless = Automatic database capacity scaling.**
- Serverless capacity-based billing does not necessarily mean all database costs stop whenever the application is idle.

# 6 - SQL vs NoSQL

## **6.1 SQL vs. NoSQL Databases**

Databases can be broadly categorized into **SQL (Relational)** and **NoSQL (Non-Relational)** databases.

The choice between SQL and NoSQL depends on the application's **data structure, query patterns, scalability, and performance requirements**.

### **SQL (Relational) Databases**

SQL databases organize data into **tables with predefined schemas** and support flexible queries using **Structured Query Language (SQL)**.

**Key Characteristics:**

- **Fixed Schema:** Data structure is typically predefined and consistent.
- **Ad Hoc Queries:** Support flexible queries to retrieve and analyze data in different ways.
- **Structured Data:** Suitable for data with well-defined relationships and attributes.
- **Predictable Workloads:** Often used when data structures and workload requirements are relatively stable.

**Common Use Cases:**

- Banking and financial transactions
- Flight booking systems
- Employee management systems
- Applications requiring complex data queries

**Examples:**

- **Amazon Aurora**
- **MySQL**
- **PostgreSQL**
- **Oracle Database**
- **Microsoft SQL Server**

### **NoSQL (Non-Relational) Databases**

NoSQL databases are designed for applications requiring **flexible data structures, scalable performance, and efficient access to large volumes of data**.

**Key Characteristics:**

- **Flexible Schema:** Different records can contain different attributes.
- **Predefined Access Patterns:** Applications typically know how data will be accessed in advance.
- **Consistent Performance at Scale:** Designed to support predictable performance as data volumes and traffic increase.
- **Scalability:** Suitable for applications handling large and growing datasets.

**Common Use Cases:**

- E-commerce product catalogs
- Shopping carts
- Multiplayer gaming applications
- Applications storing varied product attributes

**Examples:**

- **Amazon DynamoDB**
- **MongoDB**
- **Apache Cassandra**
- **Apache CouchDB**
- **Azure Cosmos DB**

**Key Concept:** NoSQL databases are particularly useful when data structures vary between records and applications require scalable, predictable performance.

## **6.2 SQL vs. NoSQL Comparison**

|Feature|SQL (Relational)|NoSQL (Non-Relational)|
|---|---|---|
|**Data Structure**|Structured tables|Flexible data models|
|**Schema**|Typically fixed|Flexible|
|**Query Patterns**|Supports flexible, ad hoc queries|Often optimized for predefined access patterns|
|**Scalability**|Scaling depends on the database engine|Designed for scalable workloads|
|**Performance**|Depends on workload and database configuration|Optimized for predictable performance at scale|
|**Typical Use Cases**|Banking, booking, employee systems|Product catalogs, gaming, shopping carts|
|**AWS Examples**|Amazon RDS, Amazon Aurora|Amazon DynamoDB|

### **Understanding the Difference with an Example**

**SQL Example - Employee Database**

An organization stores employee information with consistent attributes such as:
- Employee ID
- Name
- Age
- Department
- Location

The organization may need to run different queries, such as calculating the **average employee age** or grouping employees by location.

**Best Fit: SQL Database**, because the schema is structured and flexible querying is important.

**NoSQL Example - E-Commerce Product Catalog**

An online store sells different types of products:
- Mobile phones with RAM, storage, and camera specifications.
- Televisions with screen size, resolution, and display technology.
- Bicycles with frame size, gear count, and material.

Each product category has different attributes, making a rigid schema less suitable.

**Best Fit: NoSQL Database**, because it supports flexible attributes and scalable access patterns.

## **6.3 Choosing Between SQL and NoSQL**

Choose **SQL** when:
- Applications require **ad hoc or complex queries**.
- Data follows a relatively **fixed schema**.
- Information has well-defined structures and relationships.
- Workloads involve traditional relational applications such as banking or bookings.

Choose **NoSQL** when:
- Applications have **known access patterns**.
- Data has a **flexible or evolving schema**.
- Consistent performance at large scale is important.
- Records contain different attributes, such as an e-commerce product catalog.

**Important:** These are general selection guidelines, not absolute limitations. The best database depends on the application's specific requirements.

## **6.4 Exam Focus**

### **Key Service Associations**

- **Relational / SQL database - Amazon RDS or Amazon Aurora**
- **NoSQL database - Amazon DynamoDB**
- **Fixed schema / Structured data - SQL**
- **Flexible schema / Different record attributes - NoSQL**
- **Ad hoc queries / Complex querying - SQL**
- **Predefined access patterns - NoSQL**
- **Consistent performance at scale - NoSQL**
- **Banking / Flight booking - SQL**
- **E-commerce product catalog / Multiplayer gaming - NoSQL**

### **Key Exam Distinctions**

- **SQL = Structured data, relational models, and flexible querying.**
- **NoSQL = Flexible schemas, known access patterns, and scalable performance.**
- **Amazon RDS / Aurora vs. DynamoDB:** RDS and Aurora support relational workloads, while DynamoDB is designed for NoSQL workloads.

**Remember:** For CLF-C02, identify whether a scenario requires a **relational database (Amazon RDS / Aurora)** or a **NoSQL database (Amazon DynamoDB)** based on its data structure, access patterns, and scalability requirements.

# 7 - Amazon DynamoDB

## **7.1 Amazon DynamoDB Overview**

**Amazon DynamoDB** is a **fully managed, serverless NoSQL key-value database service** designed to deliver consistent, low-latency performance at any scale.

It is an AWS-native database service commonly used for applications requiring **high scalability, flexible schemas, and predictable performance**.

### **Key Features**

- **Fully Managed:** AWS handles the underlying database infrastructure and maintenance.
- **Serverless:** No database servers need to be provisioned or managed.
- **NoSQL / Key-Value Database:** Stores data using flexible attributes rather than fixed relational schemas.
- **High Performance:** Provides **single-digit millisecond latency** for read and write operations.
- **Massive Scalability:** Can support millions of requests per second and tables containing trillions of items.
- **High Availability:** Designed for highly available workloads.
- **Security:** Supports **encryption at rest**.
- **Regional Service:** DynamoDB tables are created within an AWS Region.

**Key Concept:** Amazon DynamoDB provides **single-digit millisecond performance at any scale**, making it suitable for high-traffic applications requiring predictable database performance.

## **7.2 Amazon DynamoDB Data Model**

DynamoDB stores data in **tables**, which contain **items** and **attributes**.

Unlike relational databases, DynamoDB supports a **flexible schema**, allowing different items to contain different attributes.

### **Core Components**

|Component|Description|
|---|---|
|**Table**|Collection of related data|
|**Item**|Individual record within a table, similar to a row|
|**Attribute**|Data field represented as a key-value pair|
|**Partition Key**|Determines how data is distributed and stored|
|**Sort Key**|Optional key used to organize items sharing a partition key|
|**Primary Key**|Uniquely identifies an item in a table|

### **Partition Key and Sort Key**

**Partition Key:**
- Required for every DynamoDB table.
- Determines the partition where data is stored.
- Can uniquely identify an item when used as a simple primary key.

**Sort Key:**
- Optional.
- Allows multiple items to share the same partition key.
- Helps organize and efficiently query items within the same partition key.

### **Primary Key Types**

DynamoDB supports two primary key structures:
1. **Simple Primary Key:** Partition Key only.
2. **Composite Primary Key:** Partition Key + Sort Key.

**Important:** When using a composite primary key, the combination of the partition key and sort key must uniquely identify each item.

### **Flexible Schema Example**

Consider a DynamoDB table named **Products**.

| ProductID (Partition Key) | ProductType (Sort Key) | Color | Size |
| ------------------------- | ---------------------- | ----- | ---- |
| 1                         | Pen                    | Black | -    |
| 2                         | Bicycle                | Blue  | 19   |

- Both items belong to the same table.
- The bicycle contains a **Size** attribute, while the pen does not.
- Non-key attributes can differ between items.

**Key Concept:** DynamoDB does not require every item in a table to have the same non-key attributes.

## **7.3 DynamoDB Query vs. Scan Operations**

DynamoDB provides two important operations for retrieving data: **Query** and **Scan**.

### **Query Operation**

- Retrieves items using a **partition key**.
- Can optionally use a **sort key condition** to narrow results.
- Returns items matching the specified key conditions.
- Generally more efficient than scanning an entire table.

**Example:** Retrieve products associated with a specific partition key.

### **Scan Operation**

- Reads through **every item in the table** (or a specified index).
- Can return all items or apply filters.
- Generally less efficient because it examines a large amount of data.
- Can consume significant read capacity for large tables.

### **Query vs. Scan Comparison**

|Feature|Query|Scan|
|---|---|---|
|**Access Pattern**|Key-based retrieval|Full table/index scan|
|**Partition Key**|Required|Not required|
|**Efficiency**|Generally more efficient|Generally less efficient|
|**Data Examined**|Items matching partition key|All items in the scanned table/index|
|**Typical Use Case**|Retrieve specific items|Examine data across an entire table|

**Key Exam Distinction:**

- **Efficient key-based data retrieval - Query**
- **Read through an entire table - Scan**

**Important:** Prefer Query over Scan when the application's access pattern supports key-based retrieval.

## **7.4 DynamoDB Capacity and Data Access**

### **Read and Write Capacity**

DynamoDB uses capacity concepts to determine how database requests are handled.
- **Read Capacity Units (RCUs):** Represent database read capacity.
- **Write Capacity Units (WCUs):** Represent database write capacity. 

These capacity units are relevant when configuring provisioned throughput.

**Key Concept:** DynamoDB can be configured to handle different levels of read and write demand without managing database servers.

### **Accessing DynamoDB**

Applications interact with DynamoDB using **AWS DynamoDB APIs** to perform operations such as:
- Creating items
- Reading items
- Updating items
- Querying tables

DynamoDB tables and items can also be managed through the **AWS Management Console**.

## **7.5 Exam Focus**

### **Important Service Associations**

- **Fully managed NoSQL database - Amazon DynamoDB**
- **Serverless key-value database - Amazon DynamoDB**
- **Single-digit millisecond latency at scale - Amazon DynamoDB**
- **Flexible schema / Different item attributes - Amazon DynamoDB**
- **Massively scalable database - Amazon DynamoDB**
- **Secure database storage / Encryption at rest - Amazon DynamoDB**
- **Efficient key-based retrieval - Query**
- **Read an entire DynamoDB table - Scan**
- **Read capacity - RCU**
- **Write capacity - WCU**

### **Key Exam Distinctions**

- **DynamoDB vs. Amazon RDS:** DynamoDB is a serverless NoSQL database with a flexible schema, while RDS is a managed relational database service.
- **Partition Key vs. Sort Key:** Partition key determines data distribution; sort key helps organize and query items sharing the same partition key.
- **Query vs. Scan:** Query efficiently retrieves data using keys, while Scan examines the entire table and is generally less efficient.
- **DynamoDB vs. Traditional Relational Databases:** DynamoDB supports flexible item attributes and predictable performance at massive scale.

**Remember: Amazon DynamoDB = Fully Managed + Serverless + NoSQL + Single-Digit Millisecond Latency at Any Scale.**

# 8 - Amazon DynamoDB Features

## **8.1 Amazon DynamoDB Global Tables**

**Amazon DynamoDB Global Tables** provide a **fully managed, multi-Region, multi-active database** that automatically replicates data across multiple AWS Regions.

Unlike traditional primary-secondary database architectures, Global Tables allow applications to **read and write data in any participating AWS Region**.

### **Key Features**

- **Multi-Region:** Replicates DynamoDB tables across multiple AWS Regions.
- **Multi-Active:** Every participating Region supports both read and write operations.
- **Automatic Replication:** Changes made in one Region are automatically replicated to other Regions.
- **High Availability:** Designed for highly available, globally distributed applications.
- **Low Latency:** Allows users to access data from a geographically closer AWS Region.
- **Disaster Recovery:** Supports application continuity during Regional failures.

### **Common Use Cases**

- **Global Applications:** Applications serving users across multiple geographic locations.
- **Low-Latency Access:** Allow users to read and write data in their nearest Region.
- **Disaster Recovery:** Maintain database replicas across Regions to reduce the impact of Regional failures.

### **DynamoDB Global Tables vs. Aurora Global Database**

| Feature              | DynamoDB Global Tables             | Aurora Global Database             |
| -------------------- | ---------------------------------- | ---------------------------------- |
| **Database Type**    | NoSQL                              | Relational                         |
| **Architecture**     | Multi-Region, multi-active         | Primary and secondary Regions      |
| **Write Operations** | Read and write in multiple Regions | Writes primarily in one Region     |
| **Replication**      | Automatic cross-Region replication | Cross-Region replication           |
| **Primary Use Case** | Global read/write access           | Global reads and disaster recovery |

**Key Exam Distinction:**

- **Multi-Region, multi-active NoSQL database - DynamoDB Global Tables**
- **Multi-Region relational database with a primary write Region - Aurora Global Database**

## **8.2 DynamoDB Accelerator (DAX)**

**Amazon DynamoDB Accelerator (DAX)** is a **fully managed, highly available, in-memory cache** designed specifically for Amazon DynamoDB.

DAX improves the performance of read-heavy applications by caching frequently accessed data.

### **Key Features**

- **In-Memory Caching:** Stores frequently accessed DynamoDB data in memory.
- **Microsecond Latency:** Reduces read latency from milliseconds to **microseconds** for cached data.
- **Performance Improvement:** Can provide up to **10x faster read performance**.
- **Fully Managed:** AWS manages the caching infrastructure.
- **DynamoDB Compatibility:** Supports existing DynamoDB API operations with minimal application changes.
- **Eventual Consistency:** Cached data may temporarily be outdated compared to the underlying DynamoDB table.

Applications use a **DAX client and endpoint** to access cached data.

### **Common Use Cases**

DAX is suitable for applications requiring **extremely low read latency** and frequent access to the same data.

Examples include:
- Gaming applications
- Real-time bidding platforms
- Trading and financial applications with read-heavy workloads
- Applications repeatedly accessing frequently used data

### **When Not to Use DAX**

DAX is generally not suitable when:
- **Strongly Consistent Reads:** Applications require the most up-to-date data for every read.
- **Write-Intensive Workloads:** Applications perform significantly more writes than reads.
- **Non-Repeated Reads:** Data is rarely accessed more than once, reducing the benefits of caching.

**Key Concept:** DAX accelerates **DynamoDB read performance** through in-memory caching. It is not a replacement for DynamoDB.

## **8.3 Amazon DynamoDB Streams**

**Amazon DynamoDB Streams** captures **item-level changes** made to a DynamoDB table in a time-ordered sequence.

It enables applications and AWS services to react to database changes automatically.

### **Key Features**

- **Change Data Capture:** Records modifications made to DynamoDB items.
- **Time-Ordered Records:** Captures changes in the order they occur for each item.
- **24-Hour Retention:** Stream records are retained for **24 hours**.
- **Optional Feature:** Can be enabled or disabled on new or existing tables.
- **Minimal Performance Impact:** Enabling Streams does not reduce the base table's provisioned read or write capacity.
- **AWS Integration:** Can integrate with **AWS Lambda** to process database changes.

### **How DynamoDB Streams Works**

1. An application creates, updates, or deletes an item in a **DynamoDB table**.
2. **DynamoDB Streams** captures the item-level change.
3. An AWS service, such as **AWS Lambda**, processes the change.
4. Lambda performs an action, such as sending a notification or updating another system.

### **Common Use Cases**

**Real-Time Notifications**

- An order is placed in an e-commerce application.
- DynamoDB Streams captures the database change.
- AWS Lambda processes the event and triggers an order confirmation notification.

**Real-Time Monitoring**

- Process changes associated with IoT applications or connected vehicle data.
- Trigger actions when new telemetry information is recorded.

**Data Replication and Backup Workflows**

- Capture changes from an existing DynamoDB table.
- Process those changes and replicate them to another table or storage system.

**Important:** Streams can support near-real-time replication workflows, but they are not a replacement for a dedicated backup and recovery solution.

**Key Concept:** DynamoDB Streams enables **event-driven processing** when data changes in a DynamoDB table.

## **8.4 DynamoDB Features Comparison**

| Feature                        | Primary Purpose     | Key Characteristic                   | Common Use Case                            |
| ------------------------------ | ------------------- | ------------------------------------ | ------------------------------------------ |
| **DynamoDB Global Tables**     | Global availability | Multi-Region, multi-active           | Global applications, disaster recovery     |
| **DynamoDB Accelerator (DAX)** | Read performance    | In-memory cache, microsecond latency | Read-heavy, latency-sensitive applications |
| **DynamoDB Streams**           | Change tracking     | Captures item-level changes          | Notifications, event-driven processing     |

### **Key Differences**

**DynamoDB Global Tables**

- Focuses on **geographic distribution and availability**.
- Allows read and write operations across multiple AWS Regions.

**DynamoDB Accelerator (DAX)**

- Focuses on **reducing read latency**.
- Uses in-memory caching for frequently accessed data.

**DynamoDB Streams**

- Focuses on **capturing and processing database changes**.
- Commonly integrates with AWS Lambda for event-driven workflows.

## **8.5 Exam Focus**

### **Important Service Associations**

- **Multi-Region NoSQL database - DynamoDB Global Tables**
- **Multi-Active / Multi-Region writes - DynamoDB Global Tables**
- **Cross-Region database replication - DynamoDB Global Tables**
- **Microsecond read latency - DynamoDB Accelerator (DAX)**
- **In-memory caching for DynamoDB - DAX**
- **Improve read-heavy application performance - DAX**
- **Capture item-level database changes - DynamoDB Streams**
- **24-hour change record retention - DynamoDB Streams**
- **Trigger AWS Lambda from database changes - DynamoDB Streams**
- **Event-driven notifications and processing - DynamoDB Streams**

### **Key Exam Reminders**

- **Global Tables = Multi-Region, Multi-Active, High Availability.**
- **DAX = In-Memory Cache, Microsecond Read Latency.**
- **DynamoDB Streams = Change Data Capture, Event-Driven Processing.**
- DynamoDB Global Tables allow **reads and writes in multiple Regions**, unlike the primary-write architecture described for Aurora Global Database.
- DAX is useful for **frequently repeated reads**, but not for workloads requiring strongly consistent cached reads.
- DynamoDB Streams captures item-level changes for **24 hours** and can integrate with **AWS Lambda**.

**Remember:** For CLF-C02, identify whether a DynamoDB scenario requires **global data access (Global Tables)**, **faster reads (DAX)**, or **reactions to data changes (Streams)**.

# 9 - Amazon DocumentDB

## **9.1 Amazon DocumentDB Overview**

**Amazon DocumentDB (with MongoDB compatibility)** is a **fully managed document database service** designed to store, query, and manage **JSON-like documents**.

Unlike traditional relational databases, DocumentDB stores related information together in a **single document**, supporting flexible data structures.

### **What Is a Document Database?**

A **document database** stores information as documents containing structured data, typically using **nested key-value pairs**.

Documents are commonly represented in a **JSON-like format**.

Example of a product document:

```json
{
  "productId": 101,
  "name": "Laptop",
  "brand": "Dell",
  "specifications": {
    "ram": "16GB",
    "storage": "512GB SSD"
  },
  "reviews": {
    "rating": 4.5,
    "count": 120
  }
}
```

**Key Characteristics:**

- **Document-Based Storage:** Related information is grouped into a single document.
- **JSON-Like Structure:** Supports nested key-value data.
- **Flexible Schema:** Different documents can contain different fields and structures.
- **Flexible Queries:** Applications can retrieve an entire document or specific fields within it.

**Key Concept:** Document databases are useful for storing **semi-structured data** where different records may have different attributes.

## **9.2 Amazon DocumentDB Features**

### **Key Features**

- **MongoDB Compatibility:** Amazon DocumentDB is compatible with **MongoDB**, a popular open-source document database.
- **Fully Managed:** AWS manages the underlying database infrastructure.
- **Document Storage:** Stores JSON-like documents with nested attributes.
- **Flexible Schema:** Documents within the same database can have different structures.
- **Automatic Storage Scaling:** Storage grows automatically in **10 GB increments**, up to **64 TB**, as described in the lecture.
- **High Scalability:** Designed to support large-scale applications handling millions of requests.

### **Common Use Cases**

| Use Case               | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| **User Profiles**      | Store social media profiles and related user information     |
| **Content Management** | Store blog content, author information, and related metadata |
| **Product Catalogs**   | Store e-commerce product details with varying attributes     |
| **Product Reviews**    | Store product information and associated reviews             |
| **Media Metadata**     | Store descriptive information about images and videos        |

**Key Concept:** Amazon DocumentDB is particularly suitable for applications that need to store and query **complex, flexible JSON-like documents**.

## **9.3 Amazon DocumentDB vs. Amazon DynamoDB**

Both services support **NoSQL workloads** and flexible data structures, but they use different data models.

| Feature               | Amazon DocumentDB                                  | Amazon DynamoDB                                     |
| --------------------- | -------------------------------------------------- | --------------------------------------------------- |
| **Database Type**     | Document database                                  | Key-value / NoSQL database                          |
| **Data Model**        | JSON-like documents                                | Tables containing items and attributes              |
| **Schema**            | Flexible                                           | Flexible                                            |
| **Data Organization** | Related data grouped into documents                | Data stored as items with attributes                |
| **Compatibility**     | MongoDB-compatible                                 | AWS-native DynamoDB APIs                            |
| **Typical Use Cases** | User profiles, content management, product details | Shopping carts, gaming, high-scale key-value access |

### **Key Exam Distinctions**

- **Amazon DocumentDB:** Best associated with **JSON-like documents, nested data, and MongoDB compatibility**.
- **Amazon DynamoDB:** Best associated with **serverless key-value storage, predictable performance, and single-digit millisecond latency at scale**.

## **9.4 Exam Focus**

### **Important Service Associations**

- **Managed document database - Amazon DocumentDB**
- **MongoDB-compatible database - Amazon DocumentDB**
- **Store JSON-like documents - Amazon DocumentDB**
- **Nested key-value structures - Document Database**
- **Flexible document schemas - Amazon DocumentDB**
- **User profiles / Content management - Amazon DocumentDB**
- **Product details / Reviews / Media metadata - Amazon DocumentDB**
- **Automatic document database storage scaling - Amazon DocumentDB**

### **Key Exam Reminders**

- **Amazon DocumentDB = Document Database + JSON-Like Data + MongoDB Compatibility.**
- Different documents can contain **different attributes and structures**.
- DocumentDB supports querying **entire documents or individual fields**.
- **DocumentDB vs. DynamoDB:** DocumentDB focuses on document-oriented workloads, while DynamoDB focuses on key-value access with consistently low latency at scale.

**Remember:** If an exam scenario mentions **MongoDB compatibility**, **JSON-like documents**, or **document-oriented data storage**, think of **Amazon DocumentDB**.

# 10 - Amazon ElastiCache

## **10.1 Amazon ElastiCache Overview**

**Amazon ElastiCache** is a **fully managed, in-memory key-value database and caching service** designed to provide extremely low-latency data access.

Unlike traditional databases such as Amazon RDS, DynamoDB, and DocumentDB, which use persistent storage, ElastiCache primarily stores data **in memory (RAM)** for faster access.

### **Key Features**

- **In-Memory Storage:** Stores frequently accessed data in memory for fast retrieval.
- **Ultra-Low Latency:** Provides extremely fast read and write operations.
- **Reduced Database Load:** Offloads frequently repeated queries from the primary database.
- **Fully Managed:** AWS handles the underlying caching infrastructure.
- **High Availability:** Supports highly available, Multi-AZ configurations.
- **Serverless Option:** Supports serverless caching with automatic capacity scaling.
- **Cross-Region Replication:** Supported through applicable engine-specific configurations.

**Key Concept:** Amazon ElastiCache improves **application performance** and reduces the load on primary databases by caching frequently accessed data in memory.

## **10.2 Amazon ElastiCache Caching Strategies**

Applications commonly use ElastiCache alongside a primary database, such as **Amazon RDS**, to improve read performance.

### **Lazy Loading (Cache-Aside)**

The application checks the cache before retrieving data from the primary database.

**How It Works:**
1. The application checks **ElastiCache** for the requested data.
2. If the data exists, it is a **Cache Hit**, and the cached data is returned.
3. If the data does not exist, it is a **Cache Miss**.
4. The application retrieves the data from the primary database.
5. The retrieved data is stored in ElastiCache for future requests.

- **Advantage:** Reduces unnecessary database queries by caching frequently accessed data.
- **Disadvantage:** Cached data may become outdated (**stale data**) if the primary database changes.

### **Time to Live (TTL)**

**Time to Live (TTL)** defines how long an item remains in the cache before it expires.
- Each cached item can have an expiration time.
- Once the TTL expires, the item is automatically removed.
- Helps limit how long outdated data remains cached.

**Key Concept:** TTL helps manage **cache expiration and data freshness**.

### **Write-Through Caching**

With **Write-Through Caching**, data is written to both the primary database and the cache when the application updates data.
- Helps keep cached data synchronized with the primary database.
- Reduces the likelihood of serving stale data.
- Requires additional write operations and application logic.

### **Caching Strategies Comparison**

| Strategy          | How It Works                                              | Main Benefit                       |
| ----------------- | --------------------------------------------------------- | ---------------------------------- |
| **Lazy Loading**  | Loads data into cache when requested and missing          | Reduces unnecessary database reads |
| **TTL**           | Automatically expires cached items after a specified time | Limits stale data                  |
| **Write-Through** | Updates the cache when the primary database is updated    | Improves cache freshness           |

These strategies can be combined depending on application requirements.

## **10.3 Amazon ElastiCache Supported Engines**

Amazon ElastiCache supports popular in-memory caching engines, including **Redis OSS** and **Memcached**.

### **Redis vs. Memcached**

|Feature|Redis|Memcached|
|---|---|---|
|**Data Structures**|Supports advanced data structures|Primarily simple key-value storage|
|**Transactions**|Supported|Not supported|
|**Replication**|Supported|Not supported natively|
|**Snapshots**|Supported|Not supported|
|**Publish/Subscribe**|Supported|Not supported|
|**Typical Use Case**|Advanced caching and data structures|Simple distributed caching|

### **Key Differences**

**Redis:**

- Supports advanced data structures.
- Provides features such as replication, snapshots, transactions, and publish/subscribe.
- Suitable for more complex in-memory caching requirements.

**Memcached:**

- Simpler in-memory key-value caching engine.
- Suitable for straightforward caching workloads.
- Does not provide the same advanced capabilities as Redis.

**Key Exam Distinction:**

- **Advanced in-memory data structures and replication - Redis**
- **Simple distributed key-value caching - Memcached**

## **10.4 Amazon ElastiCache Use Cases**

Amazon ElastiCache is commonly used for applications requiring **extremely low latency** or reduced load on backend databases.

| Use Case                        | Why ElastiCache?                                            |
| ------------------------------- | ----------------------------------------------------------- |
| **Database Query Caching**      | Reduces repeated queries to the primary database            |
| **User Session Storage**        | Provides fast access to session information                 |
| **Gaming Leaderboards**         | Supports low-latency access to frequently changing rankings |
| **Online Shopping Carts**       | Provides fast access to frequently accessed cart data       |
| **Read-Intensive Applications** | Reduces database load and improves response times           |

### **ElastiCache as a Standalone Database**

ElastiCache can also be used as a **standalone in-memory database** for certain workloads.

However:
- In-memory storage can be more expensive than disk-based storage.
- It is generally used for caching or specialized low-latency workloads.
- It is not necessarily a replacement for traditional relational databases such as Amazon RDS.

## **10.5 Amazon ElastiCache vs. DynamoDB Accelerator (DAX)**

Both services improve application performance through **in-memory caching**, but they serve different purposes.

| Feature                  | Amazon ElastiCache                                       | DynamoDB Accelerator (DAX)          |
| ------------------------ | -------------------------------------------------------- | ----------------------------------- |
| **Primary Purpose**      | General-purpose in-memory caching                        | DynamoDB-specific caching           |
| **Database Integration** | Can cache data from RDS and other databases              | Designed specifically for DynamoDB  |
| **Supported Engines**    | Redis, Memcached                                         | AWS-managed DynamoDB cache          |
| **Typical Use Case**     | Reduce database load and improve application performance | Accelerate DynamoDB read operations |

**Key Exam Distinction:**
- **Cache frequently accessed RDS data - Amazon ElastiCache**
- **Accelerate DynamoDB reads to microsecond latency - DynamoDB Accelerator (DAX)**

## **10.6 Exam Focus**

### **Important Service Associations**

- **Fully managed in-memory caching - Amazon ElastiCache**
- **Ultra-low-latency data access - Amazon ElastiCache**
- **Reduce primary database read load - Amazon ElastiCache**
- **Cache data from Amazon RDS - Amazon ElastiCache**
- **Simple key-value caching - Memcached**
- **Advanced caching / Replication / Pub-Sub - Redis**
- **Cache Hit - Requested data exists in cache**
- **Cache Miss - Requested data must be fetched from the primary database**
- **Automatic cache expiration - Time to Live (TTL)**
- **Synchronize cache during database writes - Write-Through Caching**

### **Key Exam Reminders**

- **ElastiCache = In-Memory Caching + Ultra-Low Latency + Reduced Database Load.**
- **Redis vs. Memcached:** Redis supports advanced data structures and features, while Memcached provides simpler key-value caching.
- **Lazy Loading vs. Write-Through:** Lazy loading caches data when needed; write-through updates the cache during writes.
- **ElastiCache vs. DAX:** ElastiCache provides general-purpose caching, while DAX is specifically designed for DynamoDB.
- ElastiCache is particularly useful for **read-intensive workloads** requiring fast access to frequently requested data.

**Remember:** If an exam scenario mentions **in-memory caching**, **reducing database load**, or **improving read performance for Amazon RDS**, think of **Amazon ElastiCache**.

# 11 - Amazon Neptune

## **11.1 Amazon Neptune Overview**

**Amazon Neptune** is a **fully managed graph database service** designed to store and query data as a network of **entities and relationships**.

Unlike relational or key-value databases, Neptune focuses on understanding **connections between data points**.

### **How Graph Databases Work**

Graph databases represent information using two primary components:
- **Nodes (Vertices):** Represent entities such as people, products, locations, or interests.
- **Edges (Relationships):** Represent connections between entities, such as friendships, purchases, or shared interests.

**Example - Social Network:**

A social networking application might store:
- Users and their connections.
- Users and their interests.
- Relationships between people, groups, and activities.

This allows applications to identify indirect connections, recommend relevant groups, or discover relationships between users.

**Key Concept:** Graph databases are optimized for **storing, querying, and analyzing relationships between entities**.

## **11.2 Amazon Neptune Features**

### **Key Features**

- **Fully Managed:** AWS handles database infrastructure and maintenance.
- **Graph Data Model:** Stores information as nodes and edges representing entities and relationships.
- **High Performance:** Designed to analyze billions of relationships efficiently.
- **High Availability:** Supports deployment across multiple **Availability Zones**.
- **Cross-Region Replication:** Supports database replication across AWS Regions.
- **Serverless Option:** Provides automatic database capacity scaling through **Amazon Neptune Serverless**.
- **Generative AI Integration:** Can support GenAI applications involving knowledge graphs and vector-related data.

### **Why Use a Graph Database?**

Traditional databases are useful for structured records or key-based data retrieval.

However, when applications need to explore complex relationships across multiple entities, **graph databases** provide a more suitable data model.

**Example:** Detecting suspicious financial transactions by analyzing connections between accounts, users, and activities.

## **11.3 Amazon Neptune Use Cases**

| Use Case                   | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| **Social Networking**      | Analyze friendships, connections, and shared interests                      |
| **Fraud Detection**        | Identify suspicious patterns by tracing relationships between entities      |
| **Recommendation Engines** | Recommend products, groups, or content based on connections                 |
| **Route Optimization**     | Analyze connected locations and possible routes                             |
| **Knowledge Graphs**       | Organize interconnected information, such as Wikipedia-style relationships  |
| **Generative AI**          | Support applications using interconnected knowledge and related information |

### **Common Exam Scenarios**

**Social Networking**

- Identify first-, second-, or third-degree connections.  
- Recommend groups or people based on shared interests.

**Fraud Detection**

- Trace relationships between accounts, transactions, and individuals.
- Identify unusual connections that may indicate fraudulent activity.

**Recommendation Engines**

- Analyze relationships between users, interests, and products.
- Generate relevant recommendations based on connected information.

**Key Concept:** Amazon Neptune is particularly useful when an application's primary requirement is to **analyze relationships between interconnected entities**.

## **11.4 Amazon Neptune vs. Other NoSQL Databases**

| Service               | Database Type     | Primary Purpose                                  |
| --------------------- | ----------------- | ------------------------------------------------ |
| **Amazon Neptune**    | Graph             | Store and analyze relationships between entities |
| **Amazon DynamoDB**   | Key-value / NoSQL | Scalable, low-latency key-value data access      |
| **Amazon DocumentDB** | Document          | Store and query JSON-like documents              |

### **Key Exam Distinctions**

- **Amazon Neptune:** Best for relationship-heavy workloads such as social networks, fraud detection, and knowledge graphs.
- **Amazon DynamoDB:** Best for scalable NoSQL applications requiring predictable, low-latency key-value access.
- **Amazon DocumentDB:** Best for storing flexible JSON-like documents with MongoDB compatibility.

## **11.5 Exam Focus**

### **Important Service Associations**

- **Fully managed graph database - Amazon Neptune**
- **Nodes and edges / Entities and relationships - Graph Database**
- **Social networking connections - Amazon Neptune**
- **Fraud detection / Relationship analysis - Amazon Neptune**
- **Recommendation engines - Amazon Neptune**
- **Route optimization - Amazon Neptune**
- **Knowledge graphs - Amazon Neptune**
- **Serverless graph database - Amazon Neptune Serverless**

### **Key Exam Reminders**

- **Amazon Neptune = Graph Database + Nodes + Edges + Relationships.**
- **Nodes** represent entities, while **edges** represent relationships.
- Neptune is optimized for analyzing **complex relationships between interconnected data**.
- Neptune supports **high availability across multiple AZs** and cross-Region replication.
- **Neptune vs. DynamoDB:** Relationship-based queries vs. key-value access.
- **Neptune vs. DocumentDB:** Connected entities and relationships vs. JSON-like document storage.

**Remember:** If an exam scenario mentions **graph databases, social network connections, fraud detection, knowledge graphs, or relationships between entities**, think of **Amazon Neptune**.

# 12 - Amazon Timestream and QLDB

**Lecture context:** Amazon QLDB reached end of support on July 31, 2025. Amazon Timestream for LiveAnalytics closed to new customers on June 20, 2025. Existing LiveAnalytics customers retain access. Timestream for InfluxDB is a separate engine offering.

[QLDB retirement](https://aws.amazon.com/jp/blogs/news/migration-from-amazon-qldb/) · [Timestream for LiveAnalytics availability](https://docs.aws.amazon.com/timestream/latest/developerguide/AmazonTimestreamForLiveAnalytics-availability-change.html)

## **12.1 Amazon Timestream**

**Amazon Timestream** is a **fully managed time series database service** designed to store and analyze data that changes over time.

A **time series database** is optimized for data associated with **timestamps**, particularly when large amounts of time-based information must be analyzed.

### **Key Features**

- **Time Series Data:** Stores data points associated with timestamps.
- **Real-Time Analytics:** Supports analyzing time-based data as it is collected.
- **IoT Integration:** Suitable for applications continuously generating sensor or telemetry data.
- **InfluxDB Support:** AWS offers **Amazon Timestream for InfluxDB** for applications using the InfluxDB time series database engine.

### **Common Use Cases**

- **IoT Applications:** Store and analyze sensor readings over time.
- **Connected Vehicles:** Track speed, acceleration, and geolocation data.
- **Real-Time Monitoring:** Analyze continuously generated operational data.

### **Amazon Timestream vs. DynamoDB**

| Feature              | Amazon Timestream                  | Amazon DynamoDB                  |
| -------------------- | ---------------------------------- | -------------------------------- |
| **Database Type**    | Time series                        | NoSQL / Key-value                |
| **Primary Purpose**  | Store and analyze timestamped data | Scalable key-value data storage  |
| **Data Access**      | Time-based analysis                | Key-based queries                |
| **Typical Use Case** | IoT telemetry, sensor monitoring   | Shopping carts, product catalogs |

**Key Exam Distinction:**

- **Time-stamped data requiring time-based analytics - Amazon Timestream**
- **NoSQL data requiring scalable key-value access - Amazon DynamoDB**

## **12.2 Amazon Quantum Ledger Database (QLDB)**

**Amazon Quantum Ledger Database (Amazon QLDB)** is a **fully managed ledger database** designed to maintain an **immutable and verifiable history of transactions**.

A **ledger database** records transactions in a way that preserves their history and prevents previously committed records from being altered.

### **Key Features**

- **Immutable Records:** Previously committed transaction history cannot be changed.
- **Transaction History:** Maintains a record of changes over time.
- **Data Integrity:** Provides a verifiable history of transactions.
- **Tracking and Tracing:** Suitable for applications requiring reliable historical records.

### **Common Use Cases**

| Use Case                  | Description                                     |
| ------------------------- | ----------------------------------------------- |
| **Financial Records**     | Maintain immutable transaction histories        |
| **Supply Chain Tracking** | Track products as they move between locations   |
| **Insurance Claims**      | Maintain claim history and related transactions |
| **Tracking Systems**      | Preserve records of activities and changes      |

**Key Concept:** Amazon QLDB is designed for workloads requiring **immutable transaction history and verifiable records**.

### **QLDB vs. Blockchain**

Both ledger databases and blockchain technology can provide immutable transaction records.

However, **Amazon QLDB** is a centrally managed ledger database, whereas blockchain systems typically use distributed or decentralized approaches.

**Exam Clue: Immutable and verifiable transaction records - Amazon QLDB.**

## **12.3 Exam Focus**

**Lecture recognition** — Timestream stores timestamped data such as sensor readings. QLDB was a centrally managed, verifiable transaction ledger. Prioritize the current relational, NoSQL, cache, and migration tools in the CLF-C02 guide.

# 13 - Section Summary

## **13.1 AWS Database Services Summary**

AWS provides **purpose-built database services** optimized for different data models, workloads, and performance requirements.

| Database Type               | AWS Service            | Key Exam Association                                                                        |
| --------------------------- | ---------------------- | ------------------------------------------------------------------------------------------- |
| **Relational**              | **Amazon RDS**         | Managed SQL databases; supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and IBM Db2 |
| **Relational (AWS-Native)** | **Amazon Aurora**      | High-performance relational database; MySQL and PostgreSQL compatible                       |
| **In-Memory Cache**         | **Amazon ElastiCache** | Low-latency caching; supports Redis OSS and Memcached                                       |
| **Key-Value / NoSQL**       | **Amazon DynamoDB**    | Serverless NoSQL database; single-digit millisecond latency                                 |
| **Document**                | **Amazon DocumentDB**  | MongoDB-compatible; JSON-like documents                                                     |
| **Graph**                   | **Amazon Neptune**     | Nodes, edges, and relationships                                                             |
| **Time Series**             | **Amazon Timestream**  | Timestamped data and IoT analytics; includes an InfluxDB-compatible offering                |
| **Ledger**                  | **Amazon QLDB**        | Immutable transaction history                                                               |
| **Wide-Column**             | **Amazon Keyspaces**   | Apache Cassandra-compatible database                                                        |

## **13.2 Important Database Features**

|Service|Feature|Primary Purpose|
|---|---|---|
|**Amazon RDS**|Read Replicas|Read scalability|
|**Amazon RDS**|Multi-AZ|High availability and automatic failover|
|**Amazon Aurora**|Aurora Global Database|Cross-Region replication and disaster recovery|
|**Amazon DynamoDB**|Global Tables|Multi-Region, multi-active read/write access|
|**Amazon DynamoDB**|DynamoDB Accelerator (DAX)|In-memory caching with microsecond read latency|
|**Amazon DynamoDB**|DynamoDB Streams|Capture item-level changes for event-driven processing|
|**Amazon ElastiCache**|Redis OSS|Advanced caching, replication, and data structures|
|**Amazon ElastiCache**|Memcached|Simple distributed key-value caching|

## **13.3 Exam Focus**

### **High-Priority Service Associations**

- **Managed relational SQL database - Amazon RDS**
- **AWS-native, high-performance relational database - Amazon Aurora**
- **Serverless NoSQL / Key-value database - Amazon DynamoDB**
- **In-memory caching / Reduce database load - Amazon ElastiCache**
- **MongoDB compatibility / JSON-like documents - Amazon DocumentDB**
- **Graph relationships / Fraud detection - Amazon Neptune**
- **Timestamped IoT data - Amazon Timestream**
- **Immutable transaction records - Amazon QLDB**
- **Apache Cassandra compatibility - Amazon Keyspaces**

### **Key Exam Distinctions**

- **RDS read replicas** offload reads. **Multi-AZ** provides automatic failover, and its DB cluster option also serves reads on the standbys.
- **Aurora Global Database vs. DynamoDB Global Tables:** Primary-Region writes vs. multi-Region, multi-active writes.
- **ElastiCache vs. DAX:** General-purpose in-memory caching vs. DynamoDB-specific caching.
- **DynamoDB vs. DocumentDB:** Key-value access vs. MongoDB-compatible document storage.
- **Redis vs. Memcached:** Advanced caching features vs. simple key-value caching.

**Remember:** Prioritize **Amazon RDS, Amazon Aurora, and Amazon DynamoDB** for CLF-C02, while recognizing the primary use cases of the other AWS database services.

# 14 - Quiz

## **14.1 Practice Question 1**

### **Original Question**

Your company wants to migrate an on-premises database to Amazon RDS for PostgreSQL with minimal downtime. Which service is best suited for this task?

### **Choices**

A. AWS Database Migration Service (DMS)  
B. AWS Snowball Edge  
C. Amazon RDS Read Replicas  
D. AWS Glue

### **Correct Answer**

**A. AWS Database Migration Service (DMS)**

### **Why?**

**AWS Database Migration Service (AWS DMS)** is designed to migrate databases to AWS with **minimal downtime**.
- Supports migration from on-premises databases to AWS databases such as **Amazon RDS**.
- Supports **continuous data replication**, allowing the source database to remain operational during migration.
- Reduces downtime when switching from the source database to the target database.

**Why Not the Others?**

- **Snowball Edge:** Primarily used for transferring large amounts of data and edge computing.
- **RDS Read Replicas:** Used for read scalability, not general-purpose database migration.
- **AWS Glue:** Used for data integration and ETL (Extract, Transform, Load) workloads.

**Exam Clue: Database migration with minimal downtime - AWS DMS.**

## **14.2 Practice Question 2**

### **Original Question**

Your company is running a mission-critical application on Amazon RDS. To ensure the database remains available even in the event of an Availability Zone failure, what feature should you enable?

### **Choices**

A. Amazon RDS Read Replicas  
B. Amazon RDS Multi-AZ Deployment  
C. Amazon Aurora Serverless  
D. Amazon RDS Global Database

### **Correct Answer**

**B. Amazon RDS Multi-AZ Deployment**

### **Why?**

**Amazon RDS Multi-AZ** provides high availability and automatic failover. In a single-standby Multi-AZ DB instance deployment, the standby is in another AZ and does not serve reads. Multi-AZ DB clusters also provide automatic failover and have readable standbys.
- Uses **synchronous replication** in a traditional Multi-AZ DB instance deployment.
- Automatically fails over to the standby if the primary database becomes unavailable.
- Applications continue using the same database endpoint.

**Key Distinction:**
- **RDS Read Replicas:** Primarily improve read performance and scalability.
- **RDS Multi-AZ:** Provides high availability and automatic failover.

**Exam Clue: Availability Zone failure / Automatic failover - RDS Multi-AZ.**

## **14.3 Practice Question 3**

### **Original Question**

Your e-commerce application serves customers worldwide. To ensure low-latency reads and writes, you need a database that replicates data across multiple AWS Regions automatically. Which feature of DynamoDB should you use?

### **Choices**

A. DynamoDB Streams  
B. DynamoDB On-Demand Capacity  
C. DynamoDB Global Tables  
D. DynamoDB Accelerator (DAX)

### **Correct Answer**

**C. DynamoDB Global Tables**

### **Why?**

**DynamoDB Global Tables** provides a **multi-Region, multi-active database** that automatically replicates data across AWS Regions.
- Enables **read and write operations** in multiple Regions.
- Automatically replicates changes between participating Regions.
- Provides low-latency access for globally distributed applications.
- Supports disaster recovery during Regional failures.

**Why Not the Others?**

- **DynamoDB Streams:** Captures item-level changes for event-driven processing.
- **DynamoDB On-Demand Capacity:** Automatically accommodates changing read and write traffic without capacity planning.
- **DAX:** Provides in-memory caching for faster DynamoDB reads, not cross-Region replication.

**Exam Clue: Multi-Region + Multi-Active + Global Read/Write Access - DynamoDB Global Tables.**

## **14.4 Practice Question 4**

### **Original Question**

Your application has read-heavy traffic with minimal writes. Which AWS database service supports read replicas to optimize performance?

### **Choices**

A. Amazon DynamoDB  
B. Amazon RDS  
C. Amazon DocumentDB  
D. Amazon Timestream

### **Correct Answer**

**B. Amazon RDS**

### **Why?**

**Amazon RDS Read Replicas** improve database performance by distributing read queries across multiple database instances.
- The **primary database** handles writes and reads.
- **Read replicas** handle additional read queries.
- Reduces the read workload on the primary database.
- Uses **asynchronous replication**.

**Important:** The question tests the standard RDS Read Replica feature. Other AWS databases, including DocumentDB, also support replicas, but Amazon RDS is the intended answer.

**Exam Clue: Read-heavy relational database / Read scalability - Amazon RDS Read Replicas.**

## **14.5 Practice Question 5**

### **Original Question**

Which AWS service is optimized for storing and querying time-series data, such as IoT sensor readings?

### **Choices**

A. Amazon Aurora  
B. Amazon IoT Greengrass  
C. Amazon Timestream  
D. Amazon DynamoDB

### **Correct Answer**

**C. Amazon Timestream**

### **Why?**

**Amazon Timestream** is a purpose-built **time series database** designed for storing and analyzing timestamped data.
- Optimized for **time-based queries and analytics**.
- Suitable for IoT sensor readings, connected vehicles, and telemetry data.
- Supports analysis of data collected continuously over time.

**Key Distinction:**

- **Amazon Timestream:** Time series storage and analytics.
- **Amazon DynamoDB:** Scalable NoSQL key-value storage.
- **Amazon IoT Greengrass:** Runs IoT software and processing on edge devices.

**Exam Clue: Timestamped IoT data / Time series analytics - Amazon Timestream.**

## **14.6 Practice Question 6**

### **Original Question**

Which AWS service is best for storing and querying JSON-like document data?

### **Choices**

A. Amazon ElastiCache  
B. Amazon Neptune  
C. Amazon DocumentDB  
D. Amazon Aurora

### **Correct Answer**

**C. Amazon DocumentDB**

### **Why?**

**Amazon DocumentDB** is a fully managed, **MongoDB-compatible document database** designed for storing and querying JSON-like documents.
- Supports **flexible document schemas**.
- Stores data in structured documents with nested key-value pairs.
- Suitable for user profiles, content management, and product catalogs.

**Why Not the Others?**

- **ElastiCache:** In-memory caching service.
- **Neptune:** Graph database for analyzing relationships.
- **Aurora:** Relational database compatible with MySQL and PostgreSQL.

**Exam Clue: JSON-like documents / MongoDB compatibility - Amazon DocumentDB.**

## **14.7 Practice Question 7**

### **Original Question**

You want to use a relational database but prefer a serverless model to reduce operational overhead. Which service should you choose?

### **Choices**

A. Amazon Aurora  
B. Amazon RDS  
C. Amazon Neptune  
D. Amazon DynamoDB

### **Correct Answer**

**A. Amazon Aurora**

### **Why?**

**Amazon Aurora Serverless** provides an automatically scaling relational database without requiring manual provisioning of fixed database compute capacity.
- Supports **MySQL and PostgreSQL compatibility**.
- Automatically adjusts database capacity based on workload demand.
- Reduces manual capacity management.
- Suitable for unpredictable or intermittent workloads.

**Key Distinction:**

- **Amazon Aurora Serverless:** Automatically scaling relational database.
- **Amazon DynamoDB:** Serverless NoSQL database, not relational.
- **Amazon Neptune:** Graph database.
- **Amazon RDS:** Managed relational database family that includes Aurora, but Aurora Serverless is the specific feature being tested.

**Exam Clue: Serverless relational database / Automatic capacity scaling - Amazon Aurora Serverless.**

## **14.8 Practice Question 8**

### **Original Question**

Your application needs to analyze relationships in data, such as social networks or recommendation engines. Which service should you choose?

### **Choices**

A. Amazon DynamoDB  
B. Amazon Neptune  
C. Amazon DocumentDB  
D. Amazon RDS

### **Correct Answer**

**B. Amazon Neptune**

### **Why?**

**Amazon Neptune** is a fully managed **graph database** optimized for storing and querying relationships between entities.
- Uses **nodes** to represent entities.
- Uses **edges** to represent relationships.
- Supports applications requiring complex relationship analysis.

**Common Use Cases:**

- Social networking
- Recommendation engines
- Fraud detection
- Knowledge graphs

**Key Distinction:**

- **Neptune:** Graph relationships and connected data.
- **DynamoDB:** Key-value and document access.
- **DocumentDB:** JSON-like document storage.
- **RDS:** Relational SQL databases.

**Exam Clue: Nodes / Edges / Social networks / Relationship analysis - Amazon Neptune.**

## **14.9 Practice Question 9**

### **Original Question**

You want to improve the performance of your relational database by caching frequent queries in-memory. Which service should you use?

### **Choices**

A. Amazon Timestream  
B. Amazon Aurora  
C. Amazon DynamoDB  
D. Amazon ElastiCache

### **Correct Answer**

**D. Amazon ElastiCache**

### **Why?**

**Amazon ElastiCache** provides fully managed **in-memory caching** to improve application performance and reduce the load on primary databases.
- Stores frequently accessed data in memory.
- Provides **ultra-low-latency** data access.
- Reduces repeated queries to relational databases such as Amazon RDS.
- Supports caching engines such as **Redis OSS** and **Memcached**.

**Key Distinction:**

- **ElastiCache:** General-purpose in-memory caching, including for relational databases.
- **DAX:** In-memory caching specifically designed for DynamoDB.

**Exam Clue: Cache relational database queries / Reduce database load - Amazon ElastiCache.**

## **14.10 Practice Question 10**

### **Original Question**

Your application requires low-latency, high-throughput access to a key-value store for product information management. Which service is best suited?

### **Choices**

A. Amazon RDS  
B. Amazon Neptune  
C. Amazon DynamoDB  
D. Amazon DocumentDB

### **Correct Answer**

**C. Amazon DynamoDB**

### **Why?**

**Amazon DynamoDB** is a fully managed, serverless **NoSQL key-value and document database** designed for high-throughput, low-latency workloads.
- Provides **single-digit millisecond latency** at scale.
- Supports flexible schemas.
- Handles large volumes of read and write requests.
- Suitable for e-commerce product catalogs, shopping carts, and gaming applications.

**Why Not the Others?**

- **Amazon RDS:** Relational database service.
- **Amazon Neptune:** Graph database for relationships.
- **Amazon DocumentDB:** Document-oriented database with MongoDB compatibility.

**Exam Clue: Key-value / High throughput / Single-digit millisecond latency - Amazon DynamoDB.**

## **14.11 Exam Focus**

### **Key Service Associations**

|Exam Scenario / Keyword|Correct AWS Service|
|---|---|
|Database migration with minimal downtime|**AWS DMS**|
|Relational database high availability / Automatic failover|**Amazon RDS Multi-AZ**|
|Multi-Region, multi-active NoSQL database|**DynamoDB Global Tables**|
|Read-heavy relational database / Read scalability|**Amazon RDS Read Replicas**|
|Timestamped IoT data / Time series analytics|**Amazon Timestream**|
|JSON-like documents / MongoDB compatibility|**Amazon DocumentDB**|
|Serverless relational database|**Amazon Aurora Serverless**|
|Social networks / Graph relationships|**Amazon Neptune**|
|In-memory caching for relational databases|**Amazon ElastiCache**|
|Low-latency, high-throughput key-value store|**Amazon DynamoDB**|

### **Key Exam Distinctions**

- **AWS DMS vs. AWS Glue:** Database migration with minimal downtime vs. data integration and ETL.
- **RDS Multi-AZ** provides automatic failover. Use **read replicas** to offload reads. A Multi-AZ DB cluster can also serve reads on its standbys.
- **DynamoDB Global Tables vs. DAX:** Global multi-Region replication vs. in-memory read acceleration.
- **Aurora Serverless vs. DynamoDB:** Serverless relational database vs. serverless NoSQL database.
- **DocumentDB vs. Neptune:** JSON-like document storage vs. graph relationship analysis.
- **ElastiCache vs. DynamoDB:** In-memory caching vs. scalable NoSQL database storage.

**Remember:** CLF-C02 database questions typically describe a **workload requirement** and ask you to identify the AWS database service or feature that best matches it. Focus on keywords such as **minimal downtime, automatic failover, read scalability, multi-Region replication, serverless, in-memory caching, and data model**.