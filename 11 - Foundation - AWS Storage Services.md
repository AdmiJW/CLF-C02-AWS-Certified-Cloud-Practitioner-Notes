# 1 - Introduction to AWS Storage Services

## 1.1 Overview of AWS Storage Services

**Storage** is one of the three foundational layers of cloud applications, alongside **Compute** and **Networking**.
- AWS provides storage services to store, manage, access, and protect application data.
- Storage is required wherever applications perform **computing** or **data processing**.
- Different AWS storage services are designed for different **technical requirements and use cases**.

### Storage in AWS Applications

Storage is used across various AWS services:
- **Amazon EC2** - Uses storage such as **Amazon Elastic Block Store (Amazon EBS)** to store data.
- **Media and application files** - Can be stored in external storage services.  
- **Databases** - Combine compute and storage capabilities to process and persist data.
- **Data warehousing and analytics** - Require storage for data processing and analysis.

## 1.2 Main Categories of AWS Storage

AWS storage services are categorized into three primary types:

| Storage Type   | Description                               | Primary Use Case                                            |
| -------------- | ----------------------------------------- | ----------------------------------------------------------- |
| **Block Storage**  | Stores data in blocks                     | Storage for servers and compute instances                   |
| **File Storage**   | Organizes data into files and directories | File-based storage and access                               |
| **Object Storage** | Stores data as objects                    | Media files, application files, and other unstructured data |

The choice of storage depends on the application's **data access requirements** and **use case**.

## 1.3 AWS Data Transfer, Migration, and Backup

In addition to storage services, AWS provides solutions for moving, integrating, and protecting data.

### Data Transfer and Migration Services

AWS provides services to transfer data between **on-premises environments** and **AWS**.

Common scenarios include:
- **Cloud Migration** - Moving existing data from on-premises infrastructure to AWS.
- **Hybrid Cloud** - Applications remain on-premises while data is stored or backed up in AWS.
- **Data Replication** - Maintaining copies of data in AWS for future access.

### AWS Backup

**AWS Backup** provides a centralized mechanism to automate data backups and support recovery.

Key purposes:
- **Automated Backups** - Schedule and manage backups.
- **Data Protection** - Maintain backup copies of important data.
- **Recovery** - Restore backed-up data when required.

## 1.4 Exam Focus

- **Three main storage categories** - Block Storage, File Storage, and Object Storage.
- **Block Storage** - **Amazon EBS** - Storage associated with EC2 instances.
- **Object Storage** - Suitable for media and application files.
- **Data Transfer and Migration** - Moving data between on-premises infrastructure and AWS.
- **Hybrid Cloud Storage** - On-premises applications accessing or backing up data in AWS.
- **Automated Backup and Recovery - AWS Backup**.
- **Key distinction** - Storage services are selected based on their technical characteristics and application requirements.

# 2 - Block Storage vs File Storage vs Object Storage

## 2.1 Storage Performance Characteristics

AWS storage performance is measured using three key metrics: **IOPS**, **Throughput**, and **Latency**.

| Metric         | Definition                                                                                | Measurement                            |
| -------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| **IOPS**       | Input/Output Operations Per Second - Number of read/write operations performed per second | Operations/second                      |
| **Throughput** | Amount of data transferred within a given time                                            | MB/s or GB/s                           |
| **Latency**    | Time delay required to complete a read/write operation                                    | Microseconds (μs) or milliseconds (ms) |

### IOPS vs Throughput vs Latency

- **IOPS** measures how many read/write operations a storage system can perform per second.
- **Throughput** measures how much data can be transferred per second.
- **Latency** measures how quickly an individual read/write operation completes.

Throughput depends on both **IOPS** and the **amount of data transferred per operation**.

A storage system supporting multiple simultaneous clients can achieve higher **aggregate throughput**, even if each individual client has limited throughput.

## 2.2 Block Storage vs File Storage vs Object Storage

AWS provides three main storage categories, each designed for different access patterns and performance requirements.

| Feature               | Block Storage                          | File Storage                        | Object Storage                          |
| --------------------- | -------------------------------------- | ----------------------------------- | --------------------------------------- |
| **AWS Services**      | **Amazon EBS**                         | **Amazon EFS, Amazon FSx**          | **Amazon S3**                           |
| **Data Organization** | Individual data blocks                 | Hierarchical files and directories  | Objects containing data and metadata    |
| **Access Method**     | Attached to a compute instance         | Mounted as a file system            | API requests over HTTP/HTTPS            |
| **Latency**           | Low                                    | Moderate                            | Higher                                  |
| **Performance**       | High IOPS and low latency              | Balanced performance and throughput | High aggregate throughput               |
| **Concurrent Access** | Typically one EC2 instance             | Multiple clients simultaneously     | Large numbers of clients                |
| **Primary Use Case**  | EC2 operating systems and disk storage | Shared file storage                 | Media files and scalable object storage |

### Block Storage - Amazon EBS

**Amazon Elastic Block Store (Amazon EBS)** provides block-level storage for **Amazon EC2** instances.
- Stores data in individual **blocks** that can be accessed randomly.
- Must be **attached to an EC2 instance** for normal access.
- Provides **high IOPS, high performance,** and **low latency**.
- Commonly used to store operating systems and application data.
- Similar in concept to an SSD attached to a computer.

**Exam clue: Low-latency disk storage for EC2 - Amazon EBS**

### File Storage - Amazon EFS and Amazon FSx

**File Storage** organizes data into a hierarchical structure of **files and directories**.

AWS provides two key file storage services:
- **Amazon Elastic File System (Amazon EFS)** - AWS-managed elastic file storage.
- **Amazon FSx** - Managed file storage supporting established file system technologies.

Key characteristics:
- File systems must be **mounted** onto EC2 instances, containers, or supported on-premises servers.
- Multiple clients can access the same file system simultaneously.
- Provides a balance between **latency** and **throughput**.
- Suitable for sharing files across multiple compute resources.

**Exam clue: Multiple EC2 instances requiring shared file storage - Amazon EFS or Amazon FSx**

### Object Storage - Amazon S3

**Amazon Simple Storage Service (Amazon S3)** provides scalable **object storage**.

- Stores data as **objects within buckets**.
- Each object contains **data and metadata**.
- Uses a **flat storage structure**, rather than a traditional file hierarchy.
- Objects are accessed using **API requests over HTTP/HTTPS**.
- Does not require attaching a disk or mounting a file system.
- Supports virtually unlimited storage capacity.
- Provides very high **aggregate throughput**, supporting large numbers of simultaneous clients.
- Has higher access latency compared with block storage.

Common use cases include storing **media files**, application assets, and other unstructured data.

**Exam clue: Scalable object storage accessible through APIs - Amazon S3**

## 2.3 Accessing AWS Storage Services

The three storage categories differ in how applications connect to and access their data.

| Storage Service             | Access Method                                | Key Requirement                                               |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| **Amazon EBS**              | Attach an EBS volume to an EC2 instance      | Volume and EC2 instance must be in the same Availability Zone |
| **Amazon EFS / Amazon FSx** | Mount a shared file system                   | Create and mount the file system on supported clients         |
| **Amazon S3**               | Access objects using HTTP/HTTPS API requests | Create an S3 bucket in an AWS Region                          |

### Availability Zone and Regional Considerations

**Amazon EBS**
- EBS volumes are created within a specific **Availability Zone (AZ)**.
- An EBS volume must be attached to an EC2 instance in the **same AZ**.

**Amazon EFS / Amazon FSx**
- File systems are accessed through mounting.
- Supported EC2 instances and containers can share the same file system simultaneously.
- Access across Availability Zones depends on the file system and configuration.

**Amazon S3**
- S3 buckets are created in an **AWS Region**.
- Objects can be accessed through **HTTPS API requests** from EC2 instances or external clients with appropriate permissions.
- No traditional file system mounting is required.

## 2.4 Exam Focus

- **IOPS** - Number of read/write operations per second.
- **Throughput** - Amount of data transferred per second.
- **Latency** - Delay in completing an I/O operation.
- **Block Storage - Amazon EBS** - Low latency, high IOPS, attached to EC2.
- **File Storage - Amazon EFS / Amazon FSx** - Shared hierarchical file storage, accessed through mounting.
- **Object Storage - Amazon S3** - Objects stored in buckets, accessed through HTTP/HTTPS APIs.
- **EBS Availability Zone requirement** - EBS volume and attached EC2 instance must be in the same AZ.
- **Multiple instances sharing files** - **Amazon EFS** or **Amazon FSx**.
- **Media files and scalable object storage** - Amazon S3.
- **Key access distinction** - EBS is **attached**, EFS/FSx is **mounted**, and S3 is **accessed through APIs**.

# 3 - Elastic Block Storage (EBS)

## 3.1 Amazon Elastic Block Store (Amazon EBS)

**Amazon Elastic Block Store (Amazon EBS)** provides persistent **block-level storage** for **Amazon EC2 instances**.

Key characteristics:
- EBS volumes are **attached to EC2 instances** to provide disk storage.
- EBS is an **Availability Zone (AZ)-level** service.
- An EBS volume must be in the **same Availability Zone** as the EC2 instance to which it is attached. 
- Provides **high availability, reliability, and durability** for stored data.
- Supports dynamic changes to storage capacity and performance.
- Supports **encryption** and **snapshots** for data protection.

## 3.2 EBS Availability vs Durability

EBS is designed to provide reliable and durable storage within an Availability Zone.

| Metric           | Meaning                                             | Value Mentioned in Lecture  |
| ---------------- | --------------------------------------------------- | --------------------------- |
| **Availability** | Ability to access the storage service when required | **99.9%**                   |
| **Durability**   | Ability to retain data without losing it            | **Up to 99.999% (5 nines)** |

### Availability

**Availability** measures whether the storage service remains accessible.
- **99.9% availability** corresponds to approximately **8 hours and 45 minutes of downtime per year**.
- EBS availability is associated with the **Availability Zone** where the volume resides.

### Durability

**Durability** measures how reliably stored data is preserved.
- **99.999% durability** represents five nines of durability.
- Higher durability means a lower probability of data loss.

**Important distinction**: Availability measures whether data can be accessed, while durability measures whether data remains intact.

*Note: Actual EBS durability characteristics vary by volume type; five nines should not be assumed for every EBS volume.*

## 3.3 EBS Storage Scalability and Performance

EBS allows storage capacity and performance settings to be modified dynamically.
- **Volume Size** - Increase the storage capacity of an existing EBS volume.
- **IOPS** - Adjust supported volume performance settings to meet application requirements.
- **Flexible Scaling** - Start with a smaller volume and increase capacity as storage requirements grow.

The lecture describes EBS volumes ranging from small capacities up to **64 TB**, depending on the volume type.

This allows applications to scale storage without initially provisioning their maximum expected capacity.

## 3.4 EBS Encryption

EBS supports **data-at-rest encryption** using **AWS Key Management Service (AWS KMS).**
- **Encryption at Rest** - Protects data stored in EBS volumes.
- **AWS KMS** - Provides encryption key management capabilities.
- Helps protect sensitive data stored on EC2-attached disks.

**Exam clue: Encrypt EBS volumes using managed encryption keys - AWS KMS**

## 3.5 EBS Snapshots and Backup

**EBS Snapshots** provide a mechanism to back up data stored in EBS volumes.

Key characteristics:
- Snapshots capture backups of **EBS volume data**.
- Snapshots are stored in **Amazon S3** and managed by AWS.
- Snapshot data is not directly accessible as ordinary S3 objects.
- Snapshots can be used to **create new EBS volumes** and recover backed-up data.

### Common Backup Scenario

An application runs a database on an **Amazon EC2 instance**, with its data stored on an EBS volume.
- Create an **EBS Snapshot** to back up the volume.
- AWS manages the snapshot storage in **Amazon S3**.
- If recovery is required, create a new **EBS volume** from the snapshot.

**Exam clue: Back up or restore an EBS volume - EBS Snapshot**

## 3.6 Exam Focus

- **Amazon EBS** - Persistent block-level storage for Amazon EC2.
- **Availability Zone scope** - EBS volumes and their attached EC2 instances must be in the same AZ.
- **Availability** - Measures whether storage is accessible.
- **Durability** - Measures the reliability of data retention.
- **Dynamic Scaling** - Modify EBS volume size and supported IOPS settings.
- **Encryption at Rest - AWS KMS**.
- **EBS Snapshot** - Backup mechanism for EBS volume data.
- **Snapshot Storage - Amazon S3** (managed by AWS).
- **Restore EBS Data** - Create a new EBS volume from an existing snapshot.

# 4 - EBS Volume Types

## 4.1 Amazon EBS Volume Types

**Amazon Elastic Block Store (Amazon EBS)** provides different volume types optimized for various **performance requirements, workloads, and costs**.

EBS volumes are divided into two primary categories based on their underlying storage technology:
- **Solid State Drive (SSD)** - Optimized for high IOPS, low latency, and fast read/write operations.
- **Hard Disk Drive (HDD)** - Optimized for high throughput and cost-effective storage of large amounts of sequentially accessed data.

The choice of EBS volume depends on the application's **IOPS requirements**, **throughput requirements**, and **budget**.

## 4.2 SSD-Based EBS Volumes

SSD-based volumes provide **high performance** and **low latency**, making them suitable for applications requiring frequent read/write operations.

AWS provides two main SSD volume categories.

### General Purpose SSD - gp2 and gp3

**General Purpose SSD (gp2 and gp3)** volumes provide a balance between **performance and cost**.
- Suitable for most common **EC2 workloads**.
- Provide general-purpose IOPS and throughput performance.
- More cost-effective than Provisioned IOPS SSD volumes.
- Ideal when extremely high IOPS are not required.

**Exam clue: General-purpose EC2 storage with balanced performance and cost - gp2 or gp3**

### Provisioned IOPS SSD - io1 and io2

**Provisioned IOPS SSD (io1 and io2)** volumes are designed for applications requiring **very high IOPS and consistent storage performance**.
- Suitable for **mission-critical applications**.
- Allow IOPS performance to be provisioned according to application requirements.
- **io2 Block Express** supports particularly high IOPS performance.
- Higher performance comes with **higher storage costs**.
- Provisioned IOPS capacity affects pricing.

**Exam clue: Mission-critical applications requiring very high IOPS - io1 or io2**

## 4.3 HDD-Based EBS Volumes

HDD-based volumes prioritize **throughput and cost efficiency** rather than high IOPS.

They are suitable for workloads involving **large amounts of sequential data access**.

### Throughput Optimized HDD - st1

**Throughput Optimized HDD (st1)** is designed for workloads requiring high sequential throughput.
- Optimized for reading or writing large amounts of data sequentially.
- Focuses on **throughput rather than IOPS**.
- More cost-effective than SSD volumes for suitable workloads.

**Exam clue: Large sequential data access with high throughput requirements - st1**

### Cold HDD - sc1

**Cold HDD (sc1)** is designed for cost-effective storage of less frequently accessed data.
- Suitable for **infrequently accessed workloads**.
- Prioritizes low storage cost over high performance.
- Appropriate when high IOPS and low latency are not primary requirements.

**Exam clue: Low-cost storage for infrequently accessed data - sc1**

## 4.4 EBS Volume Type Comparison

| Volume Type   | Storage Technology | Performance Focus            | Primary Use Case                |
| ------------- | ------------------ | ---------------------------- | ------------------------------- |
| **gp2 / gp3** | SSD                | Balanced IOPS and throughput | General-purpose EC2 workloads   |
| **io1 / io2** | SSD                | Very high provisioned IOPS   | Mission-critical applications   |
| **st1**       | HDD                | High sequential throughput   | Large sequential data workloads |
| **sc1**       | HDD                | Low cost                     | Infrequently accessed data      |

### Performance vs Cost

- **General Purpose SSD** - Balanced performance and cost.
- **Provisioned IOPS SSD** - Higher IOPS performance at a higher cost.
- **Throughput Optimized HDD** - Cost-effective for sequential throughput workloads.
- **Cold HDD** - Prioritizes low storage cost over performance.

The lecture highlights approximately **3,000 IOPS** for general-purpose SSD performance and up to **256,000 IOPS** for high-performance Provisioned IOPS storage.

**Key distinction**: SSD volumes prioritize **IOPS and low latency**, while HDD volumes prioritize **sequential throughput and cost efficiency**.

## 4.5 Exam Focus

- **gp2 / gp3 - General Purpose SSD** - Balanced performance and cost for common EC2 workloads.
- **io1 / io2 - Provisioned IOPS SSD** - Mission-critical workloads requiring very high IOPS.
- **st1 - Throughput Optimized HDD** - High throughput for large sequential data access.
- **sc1 - Cold HDD** - Low-cost storage for infrequently accessed data.
- **SSD vs HDD** - SSD prioritizes IOPS and latency; HDD prioritizes sequential throughput and lower cost.
- **Provisioned IOPS** - Allows storage performance to be provisioned according to application requirements.
- **Performance vs Cost Trade-off** - Higher storage performance generally comes with higher costs.

# 5 - \[Exercise] - Create and Attach EBS Volume to EC2

## 5.1 Creating and Attaching an EBS Volume

**Amazon Elastic Block Store (Amazon EBS)** allows additional block storage volumes to be attached to existing **Amazon EC2 instances**.

An EC2 instance can have:
- **Root Volume** - Contains the operating system and is created when the EC2 instance launches.
- **Additional Data Volume** - A separate EBS volume used to store application data or other files.

### EBS Volume Creation

The exercise demonstrates creating a separate **10 GB General Purpose SSD (gp2/gp3)** volume and attaching it to an existing EC2 instance.

Key requirements:
- **Volume Type** - Select the EBS volume type based on performance and cost requirements.
- **Volume Size** - Choose the required storage capacity.
- **Availability Zone (AZ)** - The EBS volume must be created in the **same AZ as the EC2 instance**.

**Important**: An EBS volume cannot be directly attached to an EC2 instance in a different Availability Zone.

## 5.2 Attaching vs Mounting an EBS Volume

Attaching an EBS volume does not automatically make it usable for storing files.

Two separate operations are required:

| Operation              | Purpose                                                                      |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Attach Volume**      | Connects the EBS volume to an EC2 instance at the AWS infrastructure level   |
| **Create File System** | Prepares a new, unformatted volume to store files                            |
| **Mount Volume**       | Makes the file system accessible through a directory in the operating system |

### Making an EBS Volume Usable

After attaching a new EBS volume to a Linux EC2 instance:
1. **Identify the volume** - Use `lsblk` to list available block devices.
2. **Create a file system** - Format the new volume using a file system such as **ext4**.
3. **Create a mount directory** - Define where the volume will be accessible.
4. **Mount the volume** - Associate the EBS file system with the directory.
5. **Verify the mount** - Use `df` to confirm the volume is mounted.

Once mounted, files saved in the mount directory are stored on the **attached EBS volume**.

### Linux Commands Used in the Exercise

| Command                       | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| `lsblk`                       | List available block devices                 |
| `df`                          | Display mounted file systems and disk usage  |
| `sudo mkfs.ext4 /dev/xvdb`    | Create an ext4 file system on the new volume |
| `sudo mkdir /disk1`           | Create a directory for mounting              |
| `sudo mount /dev/xvdb /disk1` | Mount the volume to the directory            |

These commands illustrate the difference between **AWS-level volume attachment** and **operating-system-level file system access**.

## 5.3 Exam Focus

- **Amazon EBS** - Block storage attached to Amazon EC2 instances.
- **Root Volume** - Stores the EC2 operating system.
- **Additional EBS Volume** - Provides separate storage for application data.
- **Availability Zone Requirement** - EBS volume and EC2 instance must be in the same AZ.
- **Attach vs Mount** - Attaching connects the volume to EC2; mounting makes its file system accessible within the operating system.
- **New EBS Volume** - Requires a file system and mounting before normal file storage use in Linux.
- **General Purpose SSD (gp2/gp3)** - Suitable for common EC2 storage workloads.

# 6 - EBS Snapshots

## 6.1 Amazon EBS Snapshots

**Amazon EBS Snapshots** provide **point-in-time backups** of **Amazon EBS volumes**.

Key characteristics:
- Snapshots can be created at any time to back up EBS volume data.
- Snapshots are stored in **Amazon S3** and managed by AWS.
- Amazon S3 provides **99.999999999% durability (11 nines).**
- Snapshots can be used to **create new EBS volumes** and recover backed-up data.
- Support **incremental backups, cross-account sharing**, and **cross-Region copying**.

## 6.2 Incremental Snapshots

EBS snapshots are **incremental**, meaning only data changes since the previous snapshot need to be stored.
- **First Snapshot** - Backs up all data blocks containing data on the EBS volume.
- **Subsequent Snapshots** - Store only data blocks that have changed since the previous snapshot.
- **Cost Efficiency** - Reduces additional backup storage requirements and associated costs.

### Example: Incremental Backup

| Snapshot  | Data Changes          | Additional Backup Data |
| --------- | --------------------- | ---------------------- |
| **Day 1** | Initial 10 GB of data | 10 GB                  |
| **Day 2** | 1 GB of data changes  | 1 GB                   |
| **Day 3** | 2 GB of data changes  | 2 GB                   |

Instead of storing a complete 10 GB backup every day, only changed data needs to be stored after the initial snapshot.

**Important**: EBS snapshots are incremental for storage efficiency, but each completed snapshot can be used to restore the volume to its corresponding point in time.

## 6.3 Snapshot Sharing and Cross-Region Copying

EBS snapshots support sharing and copying data across AWS environments.

### Cross-Account Snapshot Sharing

- Snapshots can be **shared with other AWS accounts**.
- Recipients can use a shared snapshot to create their own EBS volumes.
- Useful for sharing datasets between teams operating in different AWS accounts.

**Exam clue: Share EBS volume data with another AWS account - EBS Snapshot Sharing**

### Cross-Region Snapshot Copying

- EBS snapshots can be **copied to another AWS Region**.
- New EBS volumes can be created from snapshots in the destination Region.
- Useful for **cross-Region backup and recovery**.

**Exam clue: Create an EBS volume in another AWS Region using existing backup data - Copy EBS Snapshot**

## 6.4 EBS Snapshot Recycle Bin

**Recycle Bin for EBS Snapshots** helps protect against **accidental snapshot deletion**.

Key characteristics:
- Retains deleted snapshots for a **specified retention period** when they match configured retention rules.
- Allows deleted snapshots to be **recovered during the retention period**.
- Recovered snapshots can be used to create new EBS volumes.
- Helps prevent permanent data loss caused by accidental deletion.

### Example Scenario

An EBS snapshot is accidentally deleted, but a Recycle Bin retention rule is configured for that snapshot.
- The snapshot is retained in the **Recycle Bin**.
- It can be recovered before the retention period expires.
- The recovered snapshot can be used to restore the backed-up data.

**Exam clue: Recover an accidentally deleted EBS snapshot - Recycle Bin**

## 6.5 Exam Focus

- **EBS Snapshot** - Point-in-time backup of an EBS volume.
- **Snapshot Storage - Amazon S3** - AWS-managed storage with 11 nines of durability.
- **Incremental Snapshots** - Store changed data blocks after the initial snapshot.
- **Snapshot Cost Efficiency** - Reduced additional storage through incremental backups.
- **Cross-Account Sharing** - Share snapshots with other AWS accounts.
- **Cross-Region Copying** - Copy snapshots to another AWS Region for backup and recovery.
- **Snapshot Recovery** - Create a new EBS volume from an existing snapshot.
- **Recycle Bin** - Recover accidentally deleted snapshots during a configured retention period.

# 7 - \[Exercise] - Create EBS Snapshot

## 7.1 Creating an EBS Snapshot

**Amazon EBS Snapshots** allow you to create a **point-in-time backup** of an existing EBS volume.

In this exercise, a snapshot is created from the previously configured **10 GB EBS data volume** attached to an EC2 instance.

### Snapshot Creation Process

1. Open the **Amazon EC2 Console** and navigate to **Elastic Block Store - Volumes**.
2. Select the existing **EBS data volume**.
3. Choose **Actions - Create Snapshot**.
4. Enter a description, such as `Data Volume Snapshot`.
5. Create the snapshot.
6. Navigate to **Elastic Block Store - Snapshots** to verify its creation.

The snapshot initially enters a **Pending** state while AWS processes the backup.

Once completed, it becomes **Available** and can be used for recovery.

## 7.2 Exam Focus

- **EBS Snapshot** - Point-in-time backup of an existing EBS volume.
- **Snapshot Creation** - Initiated from an EBS volume through the EC2 Console.
- **Snapshot Status** - Changes from Pending to Available after completion.
- **Snapshot Recovery** - A completed snapshot can be used to create a new EBS volume.

# 8 - EBS Features - Good to Know

## 8.1 EBS Availability Zone Considerations

**Amazon Elastic Block Store (Amazon EBS)** is an **Availability Zone (AZ)-level** storage service.

Key characteristics:
- An EBS volume is created within a specific **Availability Zone**.
- EBS volumes can be **detached from one EC2 instance and attached to another**.
- Both EC2 instances must be located in the **same AZ**.
- An EBS volume **cannot be directly attached** to an EC2 instance in a different AZ.

### Moving EBS Volumes Between EC2 Instances

| Scenario                          | Supported?   | Explanation                                             |
| --------------------------------- | ------------ | ------------------------------------------------------- |
| **EC2 A to EC2 B (Same AZ)**      | Yes          | Detach the EBS volume from EC2 A and attach it to EC2 B |
| **EC2 A to EC2 C (Different AZ)** | Not directly | Requires creating a new volume from an EBS snapshot     |

## 8.2 Moving EBS Data Across Availability Zones

To move EBS data to an EC2 instance in another Availability Zone:
1. Create an **EBS Snapshot** of the existing volume.
2. Create a **new EBS volume** from the snapshot in the destination AZ.
3. Attach the new volume to the target **EC2 instance**.

**Important distinction**: An EBS volume can be moved between EC2 instances in the same AZ through detachment and attachment, but moving its data to another AZ requires creating a new volume from a snapshot.

## 8.3 Exam Focus

- **EBS Scope - Availability Zone level**.
- **Same AZ** - Detach an EBS volume from one EC2 instance and attach it to another.
- **Different AZ** - Cannot directly attach an existing EBS volume.
- **Cross-AZ Data Movement** - Create an EBS snapshot and restore it as a new volume in the destination AZ.
- **Exam clue: Move an EBS volume between EC2 instances in the same AZ - Detach and Attach.**
- **Exam clue: Move EBS data to another AZ - EBS Snapshot.**

# 9 - \[Exercise] - Delete EBS Volume

## 9.1 EBS Volume Lifecycle and EC2 Termination

**Amazon EBS volumes** have a lifecycle that can be independent of the **Amazon EC2 instances** to which they are attached.

When an EC2 instance is terminated, the behavior of its attached EBS volumes depends on the **Delete on Termination** setting.

### Delete on Termination

The **Delete on Termination** attribute determines whether an EBS volume is automatically deleted when its associated EC2 instance is terminated.

| Setting   | Behavior                                                                |
| --------- | ----------------------------------------------------------------------- |
| **True**  | EBS volume is automatically deleted when the EC2 instance is terminated |
| **False** | EBS volume is retained after EC2 termination                            |

Key characteristics:
- **Root EBS Volumes** - Typically have **Delete on Termination = True** by default.
- **Additional EBS Volumes** - Typically have **Delete on Termination = False** by default.
- Retained volumes become detached when the EC2 instance is terminated.
- Detached EBS volumes continue to incur **storage charges** until deleted.

**Important**: Terminating an EC2 instance does not necessarily delete all its attached EBS volumes.

## 9.2 Deleting an EBS Volume

An EBS volume that is retained after EC2 termination must be **explicitly deleted** when no longer required.

### Volume Deletion Process

1. **Terminate the EC2 instance.**
2. Verify whether the additional EBS volume has been retained.
3. Ensure the EBS volume is **detached** and in the **Available** state.
4. Navigate to **EC2 Console - Elastic Block Store - Volumes**.
5. Select the unused volume and choose **Delete Volume**.

### EBS Volume vs Snapshot Lifecycle

Deleting an EBS volume does not automatically delete its existing snapshots.

| Action                          | EBS Volume                                     | EBS Snapshot                        |
| ------------------------------- | ---------------------------------------------- | ----------------------------------- |
| **Terminate EC2**               | Deleted or retained depending on configuration | Unaffected                          |
| **Delete EBS Volume**           | Permanently deleted                            | Existing snapshots remain available |
| **Create Volume from Snapshot** | New EBS volume is created                      | Snapshot remains available          |

**Exam clue: Recover data after deleting an EBS volume - Create a new EBS volume from an existing snapshot**

## 9.3 Restoring EBS Volumes from Snapshots

**EBS Snapshots** allow deleted EBS volumes to be recreated without retaining the original volume.

Key characteristics:

- Snapshots are **Regional resources**.
- A snapshot can be used to create a new EBS volume in a selected **Availability Zone within the same Region**.
- The recreated EBS volume can be attached to an EC2 instance in the **same AZ**.
- The original EBS volume does not need to exist for restoration.

**Important distinction**: EBS volumes are **AZ-scoped**, while EBS snapshots are **Region-scoped**.

## 9.4 EBS Storage Cost Optimization

Unused EBS volumes can generate unnecessary AWS charges even when their associated EC2 instances have been terminated.

### Cost Optimization Strategies

- **Delete Unused Volumes** - Remove detached EBS volumes that are no longer required.
- **Review Delete on Termination** - Ensure EBS volume retention settings match application requirements.
- **Use EBS Snapshots for Long-Term Retention** - Create a snapshot before deleting a volume when its data must be preserved but is not needed for immediate access.

### EBS Volume vs Snapshot Storage Cost

| Storage Option   | Cost Consideration                                             | Use Case                          |
| ---------------- | -------------------------------------------------------------- | --------------------------------- |
| **EBS Volume**   | Ongoing provisioned storage charges                            | Data requiring active disk access |
| **EBS Snapshot** | Backup storage charges, typically lower for suitable workloads | Data backup and future recovery   |

The lecture illustrates that snapshot storage can be approximately **five times cheaper** than retaining an EBS volume.

Actual savings depend on the **volume type, snapshot storage usage, and applicable AWS pricing**.

**Exam clue: Preserve EBS data without paying for an unused active volume - Create an EBS Snapshot and delete the volume**

## 9.5 Exam Focus

- **Delete on Termination = True** - EBS volume is automatically deleted during EC2 termination.
- **Delete on Termination = False** - EBS volume remains after EC2 termination.
- **Root EBS Volume** - Typically deleted by default when EC2 is terminated.
- **Additional EBS Volume** - Typically retained by default.
- **Detached EBS Volumes** - Continue to incur storage charges.
- **Volume Deletion** - Does not automatically delete existing EBS snapshots.
- **EBS Volume - AZ-scoped; EBS Snapshot - Region-scoped**.
- **Restore Deleted Volume Data** - Create a new EBS volume from an existing snapshot.
- **Cost Optimization** - Delete unused EBS volumes and retain snapshots when only backup data is required.

# 10 - Elastic Block Storage (EBS) - Summary

## 10.1 Amazon EBS - Key Concepts

**Amazon Elastic Block Store (Amazon EBS)** provides persistent **block-level storage for Amazon EC2 instances**.
- **Availability Zone (AZ)** - EBS volumes are AZ-scoped and must be attached to EC2 instances in the same AZ.
- **Volume Types** - SSD (gp2, gp3, io1, io2) and HDD (st1, sc1), selected based on performance and cost requirements.
- **Attach and Detach** - EBS volumes can be detached and attached to another EC2 instance within the same AZ.
- **EBS Snapshots** - Point-in-time, incremental backups stored in AWS-managed Amazon S3 storage.
- **Cross-AZ Data Movement** - Create an EBS snapshot and restore it as a new volume in the target AZ.
- **Delete on Termination** - Determines whether EBS volumes are automatically deleted when an EC2 instance is terminated.
- **Cost Optimization** - Create a snapshot and delete unused EBS volumes to reduce storage costs.

### EBS vs Instance Store

| Feature          | Amazon EBS                                      | EC2 Instance Store                            |
| ---------------- | ----------------------------------------------- | --------------------------------------------- |
| **Storage Type**     | Persistent block storage                        | Storage from the underlying EC2 host hardware |
| **Data Persistence** | Independent of instance lifecycle when retained | Temporary storage tied to the instance        |
| **Cost**             | Separate EBS storage charges                    | No separate EBS volume charge                 |
| **Primary Use**      | Persistent EC2 storage                          | Temporary local storage                       |

## 10.2 Exam Focus

- **Persistent block storage for EC2 - Amazon EBS**.
- **Temporary storage from EC2 host hardware - Instance Store**.
- **General-purpose SSD - gp2 / gp3.**
- **High-performance Provisioned IOPS SSD - io1 / io2.**
- **Throughput Optimized HDD - st1**.
- **Cold HDD - sc1**.
- **Same AZ - Detach and attach EBS volume**.
- **Different AZ - Create snapshot and restore as a new volume**.
- **Incremental Backup - EBS Snapshot**.
- **Root Volume** - Typically deleted on EC2 termination.
- **Additional EBS Volume** - Typically retained on EC2 termination.
- **Cost Optimization** - Delete unused EBS volumes; retain snapshots when only backup data is needed.

# 11 - Introduction to Amazon S3

## 11.1 Amazon Simple Storage Service (Amazon S3)

**Amazon Simple Storage Service (Amazon S3)** is a web-based **object storage service** that provides highly scalable, durable, and cost-effective storage.

Key characteristics:
- **Object Storage** - Stores data as objects within **S3 buckets**.
- **Virtually Unlimited Storage** - Supports storing terabytes, petabytes, and larger amounts of data.
- **High Durability** - Designed for **99.999999999% durability (11 nines).**
- **Cost-Effective** - Suitable for storing large volumes of data at relatively low cost.
- **Web-Based Access** - Objects can be accessed using web-based APIs over HTTP/HTTPS, subject to access permissions.
- **Scalability** - Supports storage requirements ranging from small applications to large enterprises.

### S3 Durability

Amazon S3 is designed to provide **11 nines of durability (99.999999999%)** for stored objects.
- Durability measures the likelihood that stored data will remain intact without being lost.
- **11 nines of durability** indicates an extremely low probability of data loss.
- Makes S3 suitable for storing important application data, backups, and archived information.

**Important**: High durability does not mean data loss is impossible. Durability is also different from availability, which measures whether data can be accessed when needed.

## 11.2 Common Amazon S3 Use Cases

Amazon S3 supports a wide range of storage requirements across industries.

| Use Case                | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| **Media Storage**           | Store images, videos, and other media files           |
| **Backup and Restore**      | Store backup copies of application and system data    |
| **Data Archiving**          | Archive data from on-premises environments            |
| **Data Lakes**              | Store large datasets for analytics and processing     |
| **Big Data Analytics**      | Store data used in large-scale analytical workloads   |
| **Static Website Hosting**  | Host static website content                           |
| **Content Delivery**        | Act as an origin for a Content Delivery Network (CDN) |
| **IoT Data Storage**        | Store data generated by connected devices and sensors |
| **Enterprise Applications** | Store application files and other business data       |

### S3 vs EBS - Key Distinction
- **Amazon S3** - Object storage designed for scalable, web-accessible storage of files and other data.
- **Amazon EBS** - Block storage designed to provide persistent disk storage for EC2 instances.

**Exam clue: Store images, videos, backups, or large datasets without managing storage volumes - Amazon S3**

## 11.3 Exam Focus

- **Amazon S3 - Object Storage Service.**
- **Storage Capacity - Virtually Unlimited.**
- **Durability - 99.999999999% (11 nines).**
- **Web-Based Object Access - HTTP/HTTPS APIs.**
- **Media Files and Application Assets - Amazon S3.**
- **Backup, Restore, and Archiving - Amazon S3.**
- **Data Lakes and Big Data Analytics - Amazon S3.**
- **Static Website Hosting - Amazon S3.**
- **CDN Origin Storage - Amazon S3.**
- **S3 vs EBS** - S3 provides scalable object storage; EBS provides persistent block storage for EC2.

# 12 - S3 Bucket

## 12.1 Amazon S3 Buckets

An **Amazon S3 Bucket** is a container used to store **objects** in Amazon S3.

Key characteristics:
- **Object Storage** - Data is stored as objects inside buckets, rather than traditional file systems or disk blocks.
- **Regional Resource** - Each S3 bucket is created in a specific **AWS Region**.
- **Data Residency** - Bucket Region selection helps meet regulatory requirements for storing data in specific geographic locations.
- **Virtually Unlimited Storage** - A bucket can store an extremely large number of objects.

### S3 Bucket Naming

S3 buckets require unique names within their respective namespaces.

| Namespace                      | Bucket Name Uniqueness                                       |
| ------------------------------ | ------------------------------------------------------------ |
| **Global Namespace**           | Bucket name must be globally unique across AWS accounts      |
| **Account Regional Namespace** | Bucket name must be unique within the AWS account and Region |

The lecture highlights the newer **account-regional namespace** option, which allows bucket naming without requiring global uniqueness.

## 12.2 S3 Objects and Object Keys

An **S3 Object** represents data stored inside an S3 bucket.
- Objects are identified using a unique **Object Key** within the bucket.
- An object key acts as the object's unique identifier or path.
- The combination of **Bucket Name + Object Key** identifies a specific object.
- S3 uses a **flat object storage structure**, although object keys can contain `/` characters to simulate folders.

### Object Size Limits

- **Maximum Individual Object Size - 50 TB**, as stated in the lecture following the re:Invent 2025 update.
- **Number of Objects** - No practical limit on the number of objects stored in a bucket.

**Important distinction**: The 50 TB limit applies to an **individual object**, not the total storage capacity of an S3 bucket.

### S3 Object URI vs Object URL

An S3 object can be referenced using an **S3 URI** or an **HTTPS URL**.

| Identifier     | Purpose                                                                         |
| -------------- | ------------------------------------------------------------------------------- |
| **S3 URI**     | Identifies objects for AWS tools such as the AWS CLI                            |
| **Object URL** | Provides an HTTP/HTTPS address for accessing the object, subject to permissions |

Example S3 URI:

`s3://example-bucket/section5/s3-overview.pdf`

Components:
- **Bucket Name** - `example-bucket`
- **Object Key** - `section5/s3-overview.pdf`

The S3 object URL can also include the **AWS Region** where the bucket is located.

## 12.3 S3 Bucket and Object Access

By default, **S3 buckets and their objects are private**.
- Objects are not automatically accessible over the public internet.
- Access requires appropriate **permissions**.
- Having an object's HTTPS URL does not automatically grant access.
- Public access must be explicitly allowed through appropriate security configurations.

**Exam clue: An S3 object has a URL but cannot be accessed publicly - Check S3 access permissions**

## 12.4 Creating Buckets and Managing Objects

Amazon S3 supports object management through several AWS interfaces.

### Creating an S3 Bucket

An administrator creates a bucket by specifying:
- **Bucket Name**
- **AWS Region**
- Additional bucket configuration parameters

### Uploading Objects

Objects can be uploaded using:
- **AWS Management Console**
- **AWS Command Line Interface (AWS CLI)**
- **AWS Software Development Kits (SDKs)**

During upload, object-related settings can include:
- **Object Key** - Unique identifier of the object.
- **Storage Class** - Determines the storage option used for the object.
- **Encryption Settings** - Defines how the stored object is encrypted.

### Accessing Objects

Users with appropriate permissions can retrieve objects by specifying the **Bucket Name** and **Object Key**.

The general process is:
1. Create an **S3 Bucket** in an AWS Region.
2. Upload an **Object** with a unique object key.
3. Configure appropriate **access permissions**.
4. Access or download the object through its identifier or URL.

## 12.5 Exam Focus

- **Amazon S3 Bucket** - Container for storing objects.
- **Bucket Scope - AWS Region**.
- **Data Residency** - Select an appropriate AWS Region for regulatory requirements.
- **Bucket Naming** - Globally unique in the global namespace; account- and Region-scoped in the account-regional namespace.
- **Maximum Object Size - 50 TB**, as stated in the lecture.
- **S3 Object Key** - Unique identifier of an object within its bucket.
- **S3 URI** - `s3://bucket-name/object-key`.
- **S3 Access Methods** - AWS Management Console, AWS CLI, SDKs, and HTTPS APIs.
- **Default S3 Access - Private**.
- **Object URL vs Permissions** - An object URL does not automatically make the object publicly accessible.
- **S3 Storage Structure** - Flat object storage with folder-like prefixes in object keys.

# 13 - \[Exercise] - Create S3 Bucket

## 13.1 Creating an Amazon S3 Bucket

**Amazon Simple Storage Service (Amazon S3)** allows users to create buckets and upload objects for scalable storage.

In this exercise, an **S3 bucket** is created in the **Mumbai Region (ap-south-1),** and a sample image is uploaded.

### S3 Bucket Creation
1. Open the **Amazon S3 Console**.
2. Select the desired **AWS Region**.
3. Choose **Create Bucket**.
4. Provide a unique **Bucket Name**.
5. Keep the default configuration settings.
6. Create the bucket.

### S3 Bucket Naming

- Bucket names must be unique within the selected **S3 namespace**.
- In the traditional **global namespace**, names must be unique across AWS accounts and Regions.
- Adding unique characters or numbers can help avoid naming conflicts.

**Important**: Each S3 bucket is associated with a specific AWS Region.

## 13.2 Uploading Objects to an S3 Bucket

Once a bucket is created, files can be uploaded as **S3 objects**.

The exercise demonstrates uploading an image into an existing bucket.

### Object Upload Process

1. Open the newly created **S3 Bucket**.
2. Choose **Upload**.
3. Select a file from the local computer.
4. Upload the file to the bucket.
5. Verify that the uploaded object appears in the bucket.

### S3 Object Identification

Every uploaded object has identifiers that can be used to locate or access it.

| Identifier     | Purpose                                                                    |
| -------------- | -------------------------------------------------------------------------- |
| **Object Key** | Uniquely identifies an object within a bucket                              |
| **S3 URI**     | Identifies the object's location using the bucket name and object key      |
| **Object URL** | Provides an HTTPS address for accessing the object, subject to permissions |

Example S3 URI:

`s3://example-bucket/image.jpg`

The **Object URL** also contains information identifying the S3 endpoint and AWS Region.

## 13.3 S3 Object Access and Permissions

By default, newly created S3 buckets and their objects are **private**.

### Authenticated vs Public Access

| Access Type                | Behavior                                                                    |
| -------------------------- | --------------------------------------------------------------------------- |
| **Authenticated IAM User** | Can access or download objects when appropriate IAM permissions are granted |
| **Anonymous Public User**  | Cannot access private S3 objects without public access permissions          |

Key distinctions:
- Uploading an object does not automatically make it publicly accessible.
- An **S3 Object URL** does not guarantee access to the object.
- An authenticated **IAM user** with appropriate permissions can download a private object through the AWS Console.
- Public access requires explicitly configured permissions and appropriate public access settings.

**Exam clue: S3 object accessible through AWS Console but not through a public browser URL - Private object permissions**

## 13.4 Exam Focus

- **S3 Bucket** - Container used to store objects.
- **Bucket Region** - Selected during bucket creation.
- **Bucket Naming** - Must be unique within the selected namespace.
- **S3 Object Upload** - Files are uploaded as objects into buckets.
- **Object Key** - Unique identifier within an S3 bucket.
- **S3 URI** - `s3://bucket-name/object-key`.
- **Default S3 Access - Private**.
- **IAM Permissions** - Determine whether authenticated users can access objects.
- **Public Object Access** - Requires explicit permission configuration.
- **Object URL vs Access Permission** - Having an HTTPS URL does not automatically grant access.

# 14 - S3 Storage Classes

## 14.1 Amazon S3 Storage Classes

**Amazon S3 Storage Classes** provide different storage options optimized for **access frequency, retrieval speed, durability, and cost**.

Choosing the appropriate storage class helps optimize **S3 storage costs** based on application requirements.

Key considerations:
- **Access Frequency** - How often the stored objects will be accessed.
- **Retrieval Time** - How quickly objects must be available when requested.
- **Durability** - How reliably stored data must be protected against loss.
- **Storage Cost** - Cost of storing data per GB per month.
- **Retrieval Cost** - Additional charges that may apply when retrieving stored data.

## 14.2 S3 Storage Class Comparison

Amazon S3 provides different storage classes for frequently accessed, infrequently accessed, and archived data.

| Storage Class                     | Access Pattern           | Retrieval Time   | Primary Use Case                             |
| --------------------------------- | ------------------------ | ---------------- | -------------------------------------------- |
| **S3 Standard**                   | Frequently accessed      | Milliseconds     | Applications, media, analytics               |
| **S3 Intelligent-Tiering**        | Unknown or unpredictable | Depends on tier  | Data lakes, unpredictable workloads          |
| **S3 Standard-IA**                | Infrequently accessed    | Milliseconds     | Backups, disaster recovery                   |
| **S3 One Zone-IA**                | Infrequently accessed    | Milliseconds     | Re-creatable data, secondary backups         |
| **S3 Glacier Instant Retrieval**  | Rarely accessed archives | Milliseconds     | Archived data requiring immediate access     |
| **S3 Glacier Flexible Retrieval** | Rarely accessed archives | Minutes to hours | Long-term backups and archives               |
| **S3 Glacier Deep Archive**       | Very rarely accessed     | Hours to days    | Long-term regulatory and compliance archives |

### Frequently Accessed Storage - S3 Standard

**S3 Standard** is the default, general-purpose S3 storage class.
- Designed for **frequently accessed data**.
- Provides **99.999999999% durability (11 nines).**
- Stores data across multiple **Availability Zones (AZs).**
- Supports **millisecond access latency**.

Common use cases include **big data analytics, mobile applications, gaming applications, and media distribution**.

**Exam clue: Frequently accessed data requiring immediate access - S3 Standard**

### Automatic Storage Optimization - S3 Intelligent-Tiering

**S3 Intelligent-Tiering** automatically optimizes storage costs based on object access patterns.
- Monitors how frequently objects are accessed.
- Automatically moves objects between appropriate **access tiers**.
- Suitable when access patterns are **unknown or unpredictable**.
- Incurs an additional **monitoring and automation charge**.

Common use cases include **data lakes** and analytics datasets with unpredictable access requirements.

**Exam clue: Unknown or changing access patterns with automatic cost optimization - S3 Intelligent-Tiering**

### Infrequently Accessed Storage - S3 Standard-IA

**S3 Standard-Infrequent Access (S3 Standard-IA)** is designed for data that is accessed infrequently but must remain immediately available.
- Provides **millisecond retrieval**.
- Maintains **11 nines of durability**.
- Stores data across multiple Availability Zones.
- Has lower storage costs than S3 Standard but may incur **retrieval charges**.
- Has a **30-day minimum storage duration**.

Common use cases include **backups**, **disaster recovery**, **older media content**, and **logs**.

**Exam clue: Infrequently accessed data requiring immediate retrieval and multi-AZ resilience - S3 Standard-IA**

### Single-AZ Storage - S3 One Zone-IA

**S3 One Zone-Infrequent Access (S3 One Zone-IA)** stores objects in a **single Availability Zone**.
- Provides lower storage costs than S3 Standard-IA.
- Supports **millisecond retrieval**.
- Does not provide the same multi-AZ resilience as S3 Standard-IA.
- Data may be lost if the underlying Availability Zone is destroyed.
- Has a **30-day minimum storage duration**.

Suitable for **re-creatable data** or secondary backup copies where lower cost is prioritized over multi-AZ resilience.

**Exam clue: Infrequently accessed, re-creatable data stored at lower cost in a single AZ - S3 One Zone-IA**

## 14.3 S3 Glacier Storage Classes

**Amazon S3 Glacier storage** classes provide cost-effective storage for **backup and archival data**.

They are designed for data that is rarely accessed and may need to be retained for years or decades.

### Glacier Storage Class Comparison

| Storage Class                     | Retrieval Options         | Minimum Storage Duration |
| --------------------------------- | ------------------------- | ------------------------ |
| **S3 Glacier Instant Retrieval**  | Millisecond access        | 90 days                  |
| **S3 Glacier Flexible Retrieval** | Expedited, Standard, Bulk | 90 days                  |
| **S3 Glacier Deep Archive**       | Standard, Bulk            | 180 days                 |

### S3 Glacier Instant Retrieval

- Designed for **rarely accessed archival data**.
- Provides **millisecond retrieval**.
- Lower storage cost than frequently accessed storage classes.
- Suitable when archived data must remain immediately accessible.

**Exam clue: Archival storage with immediate millisecond retrieval - S3 Glacier Instant Retrieval**

### S3 Glacier Flexible Retrieval

Provides flexible retrieval options based on the required recovery speed.

| Retrieval Option | Retrieval Time |
| ---------------- | -------------- |
| **Expedited**    | 1–5 minutes    |
| **Standard**     | 3–5 hours      |
| **Bulk**         | Up to 12 hours |

- Suitable for **long-term backup and archival workloads**.
- Retrieval speed affects the **retrieval cost**.
- Faster retrieval options generally cost more.

**Exam clue: Archived data with flexible retrieval times ranging from minutes to hours - S3 Glacier Flexible Retrieval**

### S3 Glacier Deep Archive

**S3 Glacier Deep Archive** is the lowest-cost S3 storage class discussed in the lecture.

| Retrieval Option | Retrieval Time  |
| ---------------- | --------------- |
| **Standard**     | Within 12 hours |
| **Bulk**         | Up to 48 hours  |

- Designed for **very long-term** archival storage.
- Suitable for data retained for **regulatory or compliance requirements**.
- Provides the lowest storage cost among the listed storage classes.
- Has a **180-day minimum storage duration**.

**Exam clue: Lowest-cost archival storage for rarely accessed compliance data - S3 Glacier Deep Archive**

## 14.4 S3 Storage Pricing and Cost Optimization

S3 storage costs vary depending on the **storage class, storage duration,** and **retrieval requirements**.

### Storage Cost Comparison

The lecture provides the following illustrative storage prices:

| Storage Class                     | Approximate Storage Cost (USD/GB/Month)  |
| --------------------------------- | ---------------------------------------- |
| **S3 Standard**                   | $0.023                                   |
| **S3 Standard-IA**                | Approximately half of S3 Standard        |
| **S3 One Zone-IA**                | Lower than Standard-IA                   |
| **S3 Intelligent-Tiering**        | Depends on tier, plus monitoring charges |
| **S3 Glacier Instant Retrieval**  | $0.004                                   |
| **S3 Glacier Flexible Retrieval** | $0.0036                                  |
| **S3 Glacier Deep Archive**       | $0.00099                                 |

*These are illustrative prices from the lecture, not universal rates. Actual prices depend on the AWS Region and applicable pricing.*

### Minimum Storage Duration

Certain S3 storage classes have **minimum storage duration charges**.

| Storage Class                     | Minimum Duration |
| --------------------------------- | ---------------- |
| **S3 Standard-IA**                | 30 days          |
| **S3 One Zone-IA**                | 30 days          |
| **S3 Glacier Instant Retrieval**  | 90 days          |
| **S3 Glacier Flexible Retrieval** | 90 days          |
| **S3 Glacier Deep Archive**       | 180 days         |

**Important**: Deleting an object before its minimum storage duration expires can result in charges for the remaining minimum duration.

### Storage Cost vs Retrieval Cost

- **Frequently Accessed Data** - S3 Standard is suitable when objects are retrieved regularly.
- **Infrequently Accessed Data** - IA classes reduce storage costs but may incur retrieval charges.
- **Archived Data** - Glacier classes offer lower storage costs, with retrieval time and charges varying by class.
- **Unpredictable Access** - S3 Intelligent-Tiering automatically optimizes storage placement based on access patterns.

**Key distinction**: The cheapest storage class is not always the cheapest overall option. Retrieval frequency, retrieval charges, and minimum storage durations must also be considered.

## 14.5 Exam Focus

- **S3 Standard** - Frequently accessed data requiring millisecond retrieval.
- **S3 Intelligent-Tiering** - Unknown or unpredictable access patterns; automatic storage cost optimization.
- **S3 Standard-IA** - Infrequently accessed data requiring immediate access and multi-AZ resilience.
- **S3 One Zone-IA** - Lower-cost, single-AZ storage for re-creatable data.
- **S3 Glacier Instant Retrieval** - Archived data requiring millisecond retrieval.
- **S3 Glacier Flexible Retrieval** - Archive retrieval within minutes to hours.
- **S3 Glacier Deep Archive** - Lowest-cost long-term archival storage with retrieval measured in hours.
- **Minimum Storage Duration** - IA: 30 days; Glacier Instant/Flexible: 90 days; Deep Archive: 180 days.
- **Data Resilience** - S3 Standard and Standard-IA use multiple AZs; One Zone-IA uses one AZ.
- **Cost Optimization** - Choose storage classes based on access frequency, retrieval speed, storage cost, and retrieval charges.

# 15 - S3 Intelligent Tiering

## 15.1 Amazon S3 Intelligent-Tiering

**Amazon S3 Intelligent-Tiering** is a storage class that automatically optimizes storage costs for data with **unknown or changing access patterns**.

Key characteristics:
- Monitors **object access patterns** to determine how frequently data is accessed.
- Automatically moves objects between different **access tiers** based on usage.
- Reduces storage costs by moving less frequently accessed objects to lower-cost tiers.
- Charges a small **monthly monitoring and automation fee**.
- Automatically moves eligible objects back to the **Frequent Access tier** when accessed again.

**Exam clue: Automatically optimize S3 storage costs for unpredictable access patterns - S3 Intelligent-Tiering**

## 15.2 S3 Intelligent-Tiering Access Tiers

S3 Intelligent-Tiering automatically manages objects across different access tiers.

| Access Tier                | Transition Condition                  | Purpose                                              |
| -------------------------- | ------------------------------------- | ---------------------------------------------------- |
| **Frequent Access**        | Initial tier or object accessed again | Frequently accessed data                             |
| **Infrequent Access**      | Not accessed for 30 consecutive days  | Lower-cost storage for less frequently accessed data |
| **Archive Instant Access** | Not accessed for 90 consecutive days  | Lower-cost storage with immediate retrieval          |

### Automatic Tier Transitions

- **Initially** - Objects are placed in the Frequent Access tier.
- **After 30 days without access** - Objects automatically transition to the Infrequent Access tier.
- **After 90 days without access** - Objects automatically transition to the Archive Instant Access tier.
- **When accessed again** - Objects in these tiers automatically move back to the Frequent Access tier.

All three tiers provide **millisecond retrieval**.

## 15.3 Optional Archive Tiers

S3 Intelligent-Tiering also supports optional configurations for data that remains unaccessed for extended periods.

| Optional Tier           | Minimum Inactivity Period | Purpose                                            |
| ----------------------- | ------------------------- | -------------------------------------------------- |
| **Archive Access**      | 90 days                   | Lower-cost archival storage with delayed retrieval |
| **Deep Archive Access** | 180 days                  | Very low-cost storage for long-term archival data  |

These optional tiers provide archival capabilities similar to **S3 Glacier Flexible Retrieval** and **S3 Glacier Deep Archive**.

Unlike the default access tiers, retrieving objects from these archival tiers requires additional retrieval time.

## 15.4 Exam Focus

- **S3 Intelligent-Tiering** - Automatically optimizes storage costs for unknown or changing access patterns.
- **Frequent Access Tier** - Initial storage tier for objects.
- **Infrequent Access Tier** - Automatically transitions after 30 days without access.
- **Archive Instant Access Tier** - Automatically transitions after 90 days without access.
- **Automatic Re-Tiering** - Accessed objects automatically return to the Frequent Access tier.
- **Optional Archive Access** - Archival tier configurable from 90 days of inactivity.
- **Optional Deep Archive Access** - Long-term archival tier configurable from 180 days of inactivity.
- **Monitoring and Automation Fee** - Additional charge for automatic access-pattern monitoring.
- **Exam clue: Automatic storage tier transitions without manually managing access patterns - S3 Intelligent-Tiering.**

# 16 - \[Exercise] S3 Storage Classes

## 16.1 Selecting an S3 Storage Class

Amazon S3 allows users to select a **storage class** when uploading an object to an S3 bucket.
- **S3 Standard** is the default storage class.
- Different storage classes are available based on **access frequency, durability, availability, and cost**.
- Storage classes can be selected individually for each object.
- The selected storage class can be viewed in the object's properties.

### Storage Classes in the Exercise

| Storage Class              | Data Storage                       | Minimum Storage Duration |
| -------------------------- | ---------------------------------- | ------------------------ |
| **S3 Standard**            | At least 3 Availability Zones      | None                     |
| **S3 Standard-IA**         | Multiple Availability Zones        | 30 days                  |
| **S3 One Zone-IA**         | Single Availability Zone           | 30 days                  |
| **S3 Intelligent-Tiering** | Automatically managed access tiers | Depends on access tier   |

The exercise uses **S3 One Zone-IA** to demonstrate uploading an object with a storage class other than the default.

## 16.2 Changing an Object's Storage Class

Amazon S3 allows an object's storage class to be changed after it has been uploaded.

### Storage Class Modification

1. Open the **S3 bucket** containing the object.
2. Select the uploaded object.
3. Navigate to the object's **Storage Class** settings.
4. Choose **Edit**.
5. Select the new storage class, such as **S3 Standard-IA**.
6. Save the changes.

**Important**: An object's storage class is not permanently fixed at upload time. It can be changed later based on storage requirements.

## 16.3 Automatic Storage Class Transitions

AWS provides mechanisms to automate storage class transitions.

| Feature                    | Purpose                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| **S3 Lifecycle Rules**     | Automatically transition objects between storage classes based on configured rules |
| **S3 Intelligent-Tiering** | Automatically optimize storage tiers based on object access patterns               |

### Key Distinction

- **S3 Lifecycle Rules** - Transitions are based on **predefined lifecycle policies**.
- **S3 Intelligent-Tiering** - Transitions are based on **monitored object access patterns**.

- **Exam clue: Automatically transition objects based on predefined rules - S3 Lifecycle Rules**
- **Exam clue: Automatically optimize storage for unpredictable access patterns - S3 Intelligent-Tiering**

## 16.4 Exam Focus

- **Default S3 Storage Class - S3 Standard**. 
- **Storage Class Selection** - Can be specified when uploading an object.
- **Storage Class Modification** - Can be changed after object upload.
- **S3 Standard** - Multi-AZ storage with no minimum storage duration.
- **S3 Standard-IA** - Multi-AZ storage with a 30-day minimum duration.
- **S3 One Zone-IA** - Single-AZ storage with a 30-day minimum duration.
- **S3 Lifecycle Rules** - Automated transitions based on configured policies.
- **S3 Intelligent-Tiering** - Automated tier optimization based on access patterns.

# 17 - S3 Security

## 17.1 Amazon S3 Security Overview

**Amazon S3 Security** provides controls to protect **S3 buckets and objects** from unauthorized access.

Because S3 objects can be accessed directly through **API requests**, appropriate security controls are essential to ensure that only authorized users and applications can access stored data.

S3 security can be divided into three main layers:

| Security Layer             | Purpose                                             | Key Controls                                                          |
| -------------------------- | --------------------------------------------------- | --------------------------------------------------------------------- |
| **Access and Permissions** | Control who can read, write, or access S3 resources | Block Public Access, ACLs, IAM Policies, Bucket Policies              |
| **Network Security**       | Restrict where S3 requests can originate            | VPC restrictions, CIDR ranges, IP addresses                           |
| **Data Security**          | Protect data during storage and transmission        | Server-Side Encryption, Client-Side Encryption, Encryption in Transit |

## 17.2 S3 Access and Permissions

**Access Control** determines which users, applications, and AWS services can access S3 buckets and objects.

AWS provides several mechanisms for managing S3 permissions.

### **S3 Block Public Access**

**S3 Block Public Access** provides controls to prevent unintended public access to S3 resources.
- Helps protect buckets and objects from accidental public exposure.
- Can be configured at the **bucket level**.
- Provides an additional layer of protection against public access.

### **Access Control Lists (ACLs)**

**Access Control Lists (ACLs)** are another mechanism for controlling access to S3 resources.
- Can define permissions for **buckets and individual objects**.
- Provide resource-level access control.
- Are a legacy mechanism; modern S3 configurations generally favor policies with ACLs disabled.

### **IAM Policies**

**AWS Identity and Access Management (IAM) Policies** control permissions granted to AWS identities.
- Define which **IAM users and IAM roles** can access S3 resources.
- Specify permitted actions, such as reading or writing objects.
- Help enforce access permissions for authenticated AWS identities.

### **S3 Bucket Policies**

**S3 Bucket Policies** are resource-based policies attached directly to S3 buckets.
- Define **who can access the bucket and its objects**.
- Specify which S3 actions are allowed or denied.
- Can manage access for different AWS identities and other authorized principals.
- Provide a central mechanism for controlling access to S3 resources.

### **IAM Policies vs Bucket Policies**

| Feature         | IAM Policy                         | S3 Bucket Policy                                                     |
| --------------- | ---------------------------------- | -------------------------------------------------------------------- |
| **Policy Type** | Identity-based                     | Resource-based                                                       |
| **Attached To** | IAM users, groups, or roles        | S3 buckets                                                           |
| **Purpose**     | Define what an AWS identity can do | Define who can access S3 resources and what actions they can perform |

- **Exam clue: Control permissions for an IAM user or role - IAM Policy**
- **Exam clue: Define access permissions directly on an S3 bucket - S3 Bucket Policy**

## 17.3 S3 Network Security

**Network Security** controls the network locations from which users or applications can access S3 resources.

S3 access can be restricted based on:
- **VPC** - Allow requests originating from specified Amazon Virtual Private Cloud environments.
- **CIDR Ranges** - Restrict access based on defined network address ranges, using appropriate policy conditions.
- **IP Addresses** - Allow or deny requests originating from specific external IP addresses.

These restrictions can be enforced using appropriate **S3 bucket policy conditions**.

**Exam clue: Restrict S3 access based on source IP address or VPC - S3 Bucket Policy with network conditions**

## 17.4 S3 Data Security and Encryption

**Data Security** protects S3 objects both while they are stored and while they are being transferred.

### **Encryption at Rest**

**Encryption at Rest** protects objects stored inside S3 buckets.

Amazon S3 supports two main encryption approaches:

|Encryption Type|Description|
|---|---|
|**Server-Side Encryption**|Amazon S3 encrypts data on the server side|
|**Client-Side Encryption**|The client encrypts data before uploading it to Amazon S3|

### **Encryption in Transit**

**Encryption in Transit** protects data while it is transferred between clients and Amazon S3.
- Uses secure communication channels such as **HTTPS**.
- Protects data during upload and download operations.
- Helps prevent unauthorized interception of transmitted data.

**Important distinction:**
- **Encryption at Rest** - Protects stored S3 objects.
- **Encryption in Transit** - Protects data while moving between clients and S3.

## 17.5 Exam Focus

- **S3 Security Layers** - Access and Permissions, Network Security, Data Security.
- **S3 Block Public Access** - Prevent unintended public exposure of buckets and objects.
- **S3 ACLs** - Legacy bucket-level and object-level access permissions.
- **IAM Policies** - Identity-based permissions for IAM users, groups, and roles.
- **S3 Bucket Policies** - Resource-based policies controlling access to S3 buckets and objects.
- **Network Restrictions** - Control access using VPC, CIDR, or source IP conditions.
- **Server-Side Encryption** - Amazon S3 encrypts stored data.
- **Client-Side Encryption** - Data is encrypted before being uploaded to S3.
- **Encryption at Rest** - Protects stored objects.
- **Encryption in Transit** - Protects data transferred using HTTPS.
- **Key distinction** - IAM policies control permissions associated with identities; bucket policies control access through policies attached to S3 resources.

# 18 - S3 Bucket Policy

## 18.1 S3 Access Control and Permissions

**Amazon S3** provides several security mechanisms to control who can access **S3 buckets and objects**.

The four main access controls are:

| Security Control                | Purpose                                                            |
| ------------------------------- | ------------------------------------------------------------------ |
| **S3 Block Public Access**      | Prevents unintended public access to S3 resources                  |
| **Access Control Lists (ACLs)** | Legacy mechanism for bucket-level and object-level permissions     |
| **IAM Policies**                | Control S3 permissions for IAM users and roles                     |
| **S3 Bucket Policies**          | Resource-based policies that control access to buckets and objects |

### **S3 Block Public Access**

**S3 Block Public Access** helps prevent accidental exposure of S3 data to the public internet.
- Can be configured at the **AWS account level** or **individual bucket level**.
- Public access blocking is enabled by default for new S3 buckets.
- Helps prevent **accidental data exposure**.
- Should remain enabled unless public access is explicitly required.

**Exam clue: Prevent accidental public exposure of S3 data - S3 Block Public Access**

### **S3 Access Control Lists (ACLs)**

**ACLs** are a legacy access control mechanism for S3 buckets and objects.
- Control which AWS accounts or predefined groups receive permissions.
- Support permissions such as **read and write**.
- ACLs are **disabled by default** for new S3 buckets.
- AWS generally recommends using **IAM Policies and Bucket Policies** instead.

## 18.2 S3 Bucket Policies

An **S3 Bucket Policy** is a **JSON-based resource policy** attached directly to an S3 bucket.

It defines **who can access the bucket or its objects, which actions are permitted, and under what conditions**.

Bucket policies can control access for:
- **IAM users and roles**.
- **Users from other AWS accounts**.
- **Anonymous users** accessing publicly available objects.

### **S3 Bucket Policy Elements**

| Element       | Purpose                                                | Example                           |
| ------------- | ------------------------------------------------------ | --------------------------------- |
| **Effect**    | Allows or denies access                                | `Allow`, `Deny`                   |
| **Principal** | Specifies who the policy applies to                    | IAM user, AWS account, `*`        |
| **Action**    | Defines permitted or denied S3 API operations          | `s3:GetObject`, `s3:PutObject`    |
| **Resource**  | Specifies the bucket or objects affected               | `arn:aws:s3:::example-bucket/*`   |
| **Condition** | Defines additional requirements for policy application | Source IP address or VPC endpoint |

### **IAM Policy vs S3 Bucket Policy**

| IAM Policy                                   | S3 Bucket Policy                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------------------- |
| **Identity-based policy**                    | **Resource-based policy**                                                        |
| Attached to IAM users, groups, or roles      | Attached directly to an S3 bucket                                                |
| Defines what actions an identity can perform | Defines which principals can access the bucket and what they can do              |
| Commonly used for AWS identities             | Commonly used for cross-account access, public access, and resource restrictions |

**Key distinction:**
- **IAM Policy** - Does the IAM identity have permission to access S3?
- **Bucket Policy** - Does the bucket permit the requested access?

## 18.3 Common S3 Bucket Policy Scenarios

### **Public Read Access**

To make S3 objects publicly readable through a bucket policy:
1. Configure **S3 Block Public Access** to permit the intended public access.
2. Add a bucket policy that allows public read access.

Important policy elements:

| Element       | Configuration                   |
| ------------- | ------------------------------- |
| **Effect**    | `Allow`                         |
| **Principal** | `*` (Anyone)                    |
| **Action**    | `s3:GetObject`                  |
| **Resource**  | `arn:aws:s3:::example-bucket/*` |

The wildcard `*` in the Principal allows access by anyone, including anonymous internet users.

**Important:** `s3:GetObject` grants permission to read objects, not permission to modify or delete them.

**Exam clue: Allow anonymous users to read S3 objects - Configure Block Public Access appropriately and use a Bucket Policy**

### **Cross-Account Access**

An S3 bucket in **AWS Account B** can grant access to an IAM user or role in **AWS Account A**.

For the scenario described in the lecture, two permissions are required:
1. **Account B** - The S3 Bucket Policy allows access to the principal in Account A.
2. **Account A** - The IAM Policy permits the required S3 actions on Account B's bucket.

Both permissions must allow the operation, and no applicable explicit deny can be present.

**Exam clue: Grant an IAM identity access to an S3 bucket in another AWS account - Cross-Account Bucket Policy and IAM Permissions**

## 18.4 S3 Network Security Using Bucket Policies

**S3 Bucket Policies** can also restrict access based on the network location from which requests originate.

| Restriction             | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| **Amazon VPC**          | Restrict access to requests originating from a specific VPC |
| **VPC Endpoint**        | Restrict access through a particular VPC endpoint           |
| **VPC Source IP Range** | Restrict access based on private source IP ranges           |
| **Public IP Address**   | Allow or deny access based on external IP addresses         |

These controls are implemented using **Condition** elements in bucket policies.

For example, a bucket policy can deny access when a request does not originate from an authorized **VPC endpoint**.

**Exam clue: Restrict S3 access to a particular VPC endpoint or source IP address - S3 Bucket Policy Conditions**

## 18.5 S3 Data Security and Encryption

Amazon S3 protects data at two stages:
- **Encryption in Transit** - Protects data while being uploaded or downloaded.
- **Encryption at Rest** - Protects objects stored in S3.

### **Encryption in Transit**

**HTTPS/TLS** provides encrypted communication between clients and Amazon S3.
- Protects data during uploads and downloads.
- Prevents data from being transmitted over an unencrypted connection when HTTPS is used.

### **Encryption at Rest**

Amazon S3 supports **Server-Side Encryption** and **Client-Side Encryption**.

| Encryption Type            | Description                                         | Key Management                                     |
| -------------------------- | --------------------------------------------------- | -------------------------------------------------- |
| **SSE-S3**                 | Amazon S3 encrypts and decrypts the objects         | Keys managed by Amazon S3                          |
| **SSE-KMS**                | Server-side encryption using AWS KMS keys           | AWS Key Management Service                         |
| **SSE-C**                  | Server-side encryption using customer-provided keys | Customer provides encryption keys                  |
| **Client-Side Encryption** | Client encrypts objects before uploading them to S3 | Encryption and decryption controlled by the client |

- **Server-Side Encryption** - Amazon S3 performs encryption when storing the object and decryption when an authorized client retrieves it.
- **Client-Side Encryption** - The client encrypts data before uploading it and is responsible for decrypting the data after retrieval.

**Key distinction:** Server-side encryption is performed by S3, while client-side encryption is performed before data reaches S3.

## 18.6 Exam Focus

- **S3 Block Public Access** - Prevent accidental public exposure of S3 buckets and objects.
- **S3 ACLs** - Legacy access mechanism, disabled by default for new buckets.
- **IAM Policy** - Identity-based permissions for IAM users and roles.
- **S3 Bucket Policy** - JSON-based resource policy controlling access to S3 resources.
- **Effect** - Allow or Deny.
- **Principal** - Who receives the permission.
- **Action** - Which S3 API operation is permitted or denied.
- **Resource** - Which bucket or object is affected.
- **Condition** - Requirements under which the policy applies.
- **Public Read Access** - `Principal: *` with `s3:GetObject`, subject to public access controls.
- **Cross-Account S3 Access** - Bucket Policy and IAM permissions must permit access.
- **Network Access Restrictions** - Use S3 Bucket Policy conditions for VPC, VPC endpoint, and IP restrictions.
- **Encryption in Transit - HTTPS/TLS**.
- **Server-Side Encryption - SSE-S3, SSE-KMS, SSE-C**.
- **Client-Side Encryption** - Encrypt data before uploading it to S3.

# 19 - \[Exercise] - Public S3 Bucket

## 19.1 Making an S3 Bucket Public

**Amazon S3** allows objects to be made publicly accessible so that **anonymous users on the internet** can retrieve them without AWS authentication.

By default, newly created S3 buckets are **private**, and public access is blocked.

To allow public read access through an **S3 Bucket Policy**, two main configurations are required:
1. **Disable S3 Block Public Access** settings that prevent the intended public access.
2. **Configure an S3 Bucket Policy** granting public read permissions.

**Important:** Public access should only be enabled when explicitly required because it can expose stored data to unauthorized users.

## 19.2 Configuring Public Access

### Step 1: Configure S3 Block Public Access

1. Open the **Amazon S3 Console** and select the bucket.
2. Navigate to **Permissions - Block Public Access**.
3. Choose **Edit**.
4. Disable the settings that block the intended public access.
5. Save and confirm the changes.

**S3 Block Public Access** acts as a protective control that can prevent public permissions from taking effect.

### Step 2: Configure the S3 Bucket Policy

A **Bucket Policy** is required to grant public read access to objects.

The policy can be configured using:
- **JSON Policy Document** - Manually enter the policy.
- **Add Statement** - Configure policy permissions through the console.
- **AWS Policy Generator** - Generate a policy based on required permissions.

For public read access, the policy requires the following elements:

| Policy Element | Value                           | Purpose                                        |
| -------------- | ------------------------------- | ---------------------------------------------- |
| **Effect**     | `Allow`                         | Grants permission                              |
| **Principal**  | `*`                             | Allows anonymous users                         |
| **Action**     | `s3:GetObject`                  | Allows reading objects                         |
| **Resource**   | `arn:aws:s3:::example-bucket/*` | Applies to all objects in the specified bucket |

The `/*` suffix identifies **all objects within the bucket**.

**Important:** The bucket ARN must reference the correct bucket. The `s3:GetObject` permission grants **read access**, not permission to upload, modify, or delete objects.

### Step 3: Verify Public Access

After configuring the permissions:

1. Open an existing object in the S3 bucket.
2. Copy its **Object URL**.
3. Open the URL in a web browser without AWS authentication.
4. Verify that the object can be accessed publicly.

If the object is accessible, the configured public read permissions are working.

## 19.3 Exam Focus

- **Default S3 Access - Private**.
- **S3 Block Public Access** - Prevents unintended public exposure of S3 resources.
- **Public Read Access** - Configure Block Public Access appropriately and add a Bucket Policy.
- **Principal:** `*` - Represents anyone, including anonymous users.
- **Effect:** `Allow` - Grants the specified permission.
- **Action:** `s3:GetObject` - Allows users to read S3 objects.
- **Resource:** `arn:aws:s3:::bucket-name/*` - Identifies all objects within the bucket.
- **Public Object Access** - Can be verified using the object's HTTPS URL.
- **Security Best Practice** - Keep S3 Block Public Access enabled unless public access is explicitly required.

# 20 - S3 Lifecycle Policy

## 20.1 Amazon S3 Lifecycle Policies

**Amazon S3 Lifecycle Policies** automate the management of S3 objects by defining rules to **transition objects between storage classes** or **delete them after a specified period**.

Key characteristics:
- Automatically manage objects based on their **age**.
- Help optimize storage costs by transitioning older objects to lower-cost storage classes.
- Support automatic deletion of objects that are no longer required.
- Can apply to **all objects** or a **specific subset of objects** within a bucket.
- Apply to both **existing objects** and **newly uploaded objects** that match the lifecycle rules.

### S3 Lifecycle vs S3 Intelligent-Tiering

| Feature                | S3 Lifecycle Policy                                        | S3 Intelligent-Tiering                          |
| ---------------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| **Transition Trigger** | Predefined rules based on object age                       | Automatically monitored access patterns         |
| **Configuration**      | User defines transition periods and target storage classes | S3 automatically manages access tiers           |
| **Primary Purpose**    | Automate storage transitions and object expiration         | Optimize storage costs for unpredictable access |
| **Object Deletion**    | Supports automatic expiration                              | Does not automatically delete objects           |

- **Exam clue: Automatically transition objects after a predefined number of days - S3 Lifecycle Policy**
- **Exam clue: Automatically optimize storage for unpredictable access patterns - S3 Intelligent-Tiering**

## 20.2 S3 Lifecycle Actions

S3 Lifecycle Policies support two primary types of actions.

### **Transition Actions**

**Transition Actions** automatically move objects between S3 storage classes after a configured period.

For example:

| Object Age         | Storage Class                | Purpose                                  |
| ------------------ | ---------------------------- | ---------------------------------------- |
| **Initially**      | S3 Standard                  | Frequently accessed data                 |
| **After 30 days**  | S3 Standard-IA               | Infrequently accessed data               |
| **After 90 days**  | S3 Glacier Instant Retrieval | Archived data requiring immediate access |
| **After 365 days** | S3 Glacier Deep Archive      | Long-term, low-cost archival storage     |

- Transitions are based on **predefined object age**, not access frequency.
- Objects can transition directly to an appropriate archival storage class without passing through every intermediate class.
- Transitions must follow supported S3 Lifecycle rules and storage class requirements.    

Common use cases include **backup retention**, **log archiving**, and **older media files**.

### **Expiration Actions**

**Expiration Actions** automatically expire and delete objects after a specified period.
- Remove data that is no longer required.
- Help avoid unnecessary storage charges.
- Can be combined with transition rules to manage the complete object lifecycle.

Example backup retention policy:
1. Store backups in **S3 Standard** initially.
2. Transition backups to an appropriate **archival storage class** after a configured period.
3. Automatically **delete backups after one year**.

**Exam clue: Automatically delete S3 objects after a defined retention period - S3 Lifecycle Expiration Action**

## 20.3 Configuring S3 Lifecycle Rules

**S3 Lifecycle Rules** can be configured from the bucket's **Management** settings.

Each rule defines:
- **Rule Name** - Identifies the lifecycle rule.
- **Rule Scope** - Applies to all objects or a selected subset.
- **Object Filters** - Selects objects based on criteria such as object key prefixes.
- **Transition Actions** - Specifies when objects move between storage classes.
- **Expiration Actions** - Specifies when objects should be deleted.

### **Object Filtering**

Lifecycle rules can target specific objects using **object key prefixes**.

For example:

|Object Key Prefix|Lifecycle Rule Applies?|
|---|---|
|`Venice/`|Yes, if the rule targets this prefix|
|`London/`|No, if the rule targets only `Venice/`|

Alternatively, a lifecycle rule can apply to **all objects within the bucket**.

### **Existing vs New Objects**

S3 Lifecycle Rules apply to:
- **Existing Objects** - Objects uploaded before the lifecycle rule was created.
- **New Objects** - Objects uploaded after the lifecycle rule was created.

Both must match the configured rule scope and conditions.

## 20.4 Exam Focus

- **S3 Lifecycle Policy** - Automates object transitions and expiration based on predefined rules.
- **Transition Action** - Moves objects to another S3 storage class after a specified period.
- **Expiration Action** - Automatically deletes objects after a configured retention period.
- **Object Age** - Primary trigger for lifecycle transitions.
- **Object Key Prefix** - Filters which objects a lifecycle rule applies to.
- **Rule Scope** - All objects or a selected subset of objects.
- **Existing and New Objects** - Both are affected when they match the lifecycle rules.
- **Storage Cost Optimization** - Move older data to lower-cost storage classes.
- **Lifecycle vs Intelligent-Tiering** - Lifecycle uses predefined rules; Intelligent-Tiering uses monitored access patterns.
- **Exam clue: Automatically archive logs or delete old backups after a fixed period - S3 Lifecycle Policy**.

# 21 - S3 Static Website

## 21.1 Amazon S3 Static Website Hosting

**Amazon S3 Static Website Hosting** allows users to host **static websites** directly from an S3 bucket without managing web servers.

Key characteristics:
- Supports **static HTML websites**.
- Uses an **S3 bucket** to store website files.
- Websites are accessible through an **HTTP endpoint** provided by AWS.
- Does not support **server-side scripting or processing**.
- Requires the website content to be publicly accessible when using the S3 website endpoint.

### **Static vs Dynamic Websites**

| Feature                    | Static Website                    | Dynamic Website                      |
| -------------------------- | --------------------------------- | ------------------------------------ |
| **Content**                | Predefined HTML files             | Content may be generated dynamically |
| **Server-Side Processing** | Not required                      | Requires server-side processing      |
| **Examples**               | HTML-based informational websites | PHP or Node.js backend applications  |
| **S3 Hosting Support**     | Supported                         | Not supported directly               |

**Important:** Amazon S3 can host static website content but cannot execute server-side application code such as **PHP or Node.js**.

## 21.2 Configuring S3 Static Website Hosting

To host a static website using Amazon S3:
1. Create an **S3 bucket**.
2. Upload the website's **HTML files**.
3. Configure **public read access** to the website objects.
4. Enable **Static Website Hosting** on the S3 bucket.
5. Access the website using the **S3 Website Endpoint** provided by AWS.

### S3 Website Endpoint

When static website hosting is enabled, AWS provides a website endpoint based on the **bucket name** and **AWS Region**.

The endpoint can use formats such as:

`http://bucket-name.s3-website-region.amazonaws.com`

or

`http://bucket-name.s3-website.region.amazonaws.com`

The specific format depends on the AWS Region.

**Important:** S3 static website endpoints support **HTTP only**, not HTTPS.

## 21.3 HTTPS and Custom Domain Names

Although S3 provides static website hosting, its website endpoint has limitations.

| Requirement                           | AWS Service       |
| ------------------------------------- | ----------------- |
| **Host static website files**         | Amazon S3         |
| **Provide HTTPS access**              | Amazon CloudFront |
| **Configure DNS for a custom domain** | Amazon Route 53   |

### Amazon CloudFront

**Amazon CloudFront** can be used with Amazon S3 to provide **HTTPS access** to a static website.
- Supports secure website access using **HTTPS**.
- Can deliver static website content stored in S3.
- Helps serve websites through a custom domain configuration.

### Amazon Route 53

**Amazon Route 53** provides DNS capabilities for custom domain names.
- Allows users to access websites through domain names such as `example.com`.
- Can route domain requests to a website delivered through **Amazon CloudFront**.

**Exam clue: Host a static website with HTTPS and a custom domain - Amazon S3 + Amazon CloudFront + Amazon Route 53**

## 21.4 Exam Focus

- **S3 Static Website Hosting** - Host static websites without managing web servers.
- **Static Content** - HTML-based website files.
- **Server-Side Scripting** - PHP and Node.js backend execution are not supported directly.
- **Public Access** - Website objects must be publicly readable when using the S3 website endpoint directly.
- **S3 Website Endpoint** - AWS-provided HTTP address for the website.
- **HTTPS Support - Amazon CloudFront**.
- **Custom Domain DNS - Amazon Route 53**.
- **Key Limitation** - S3 website endpoints support HTTP, not HTTPS.
- **Exam clue: Low-maintenance hosting for a simple static HTML website - Amazon S3**.

# 22 - \[Exercise] - Host a Static Website on S3

## 22.1 Hosting a Static Website on Amazon S3

**Amazon S3 Static Website Hosting** allows a bucket to serve **static HTML websites** without requiring a web server.

In this exercise, an existing S3 bucket is configured to host a simple website containing an **HTML page and images**.

### **Requirements**

- **S3 Bucket** - Stores the website files.
- `index.html` - Main HTML document displayed when the website is accessed.
- **Static Assets** - Images and other files referenced by the HTML page.
- **Public Read Access** - Allows anonymous users to access the website content.
- **Static Website Hosting** - Must be enabled in the bucket properties.

## 22.2 Configuring S3 Static Website Hosting

### Step 1: Upload Website Files

Upload the required files to the S3 bucket:
- `index.html` - Main website page.
- `Venice1.jpg` and `Venice2.jpg` - Images referenced by the HTML page.    

The HTML file can contain simple static content or references to images stored in the same bucket.

### Step 2: Configure Public Access

For direct public website hosting through the S3 website endpoint:
1. Configure **S3 Block Public Access** to permit the intended public access.
2. Add an **S3 Bucket Policy** granting public read access to the website objects.

Important bucket policy permissions:

|Policy Element|Value|
|---|---|
|**Effect**|`Allow`|
|**Principal**|`*`|
|**Action**|`s3:GetObject`|
|**Resource**|`arn:aws:s3:::bucket-name/*`|

**Important:** Public read access is required for anonymous visitors accessing the S3 website endpoint directly.

### Step 3: Enable Static Website Hosting

1. Open the **S3 Bucket - Properties**.
2. Locate **Static Website Hosting**.
3. Choose **Edit** and enable the feature.
4. Specify `index.html` as the **Index Document**.
5. Save the configuration.

Once enabled, Amazon S3 generates a **Website Endpoint**.

### Step 4: Access the Website

- Open the generated **S3 Website Endpoint** in a browser.
- Amazon S3 serves the `index.html` page.
- Images referenced by the HTML page are loaded from the S3 bucket.

**Important:** The S3 website endpoint supports **HTTP only**. HTTPS hosting requires an additional service such as **Amazon CloudFront**.

## 22.3 Exam Focus

- **S3 Static Website Hosting** - Hosts static HTML websites without managing web servers.
- **Index Document -** `index.html` - Main page served by the website endpoint.
- **Website Files** - HTML pages and static assets stored as S3 objects.
- **Public Read Access** - Requires appropriate S3 Block Public Access settings and Bucket Policy permissions.
- `s3:GetObject` - Allows visitors to read website objects.
- **S3 Website Endpoint** - Generated after enabling static website hosting.
- **HTTP Only** - Native S3 website endpoints do not support HTTPS.
- **HTTPS Website Hosting - Amazon CloudFront with Amazon S3**.
- **Cost Consideration** - S3 storage and usage charges depend on Free Tier eligibility and actual consumption.

# 23 - S3 Bucket Versioning

## 23.1 Amazon S3 Bucket Versioning

**Amazon S3 Versioning** allows multiple versions of the same object to be stored within an S3 bucket.

It helps protect data against **accidental overwrites and deletions** by retaining previous versions of objects.

Key characteristics:
- **Versioning is enabled at the bucket level**.
- Uploading an object with the **same object key** creates a new version.
- Each version receives a unique **Version ID**.
- Previous versions are retained instead of being overwritten.
- Older versions can be retrieved or restored when required.
- Without versioning, uploading an object with the same key replaces the existing object.

### **Example: Object Versioning**

Consider an S3 bucket containing `tax.pdf`.

| Action                            | Result                                                   |
| --------------------------------- | -------------------------------------------------------- |
| Upload `tax.pdf`                  | Version 1 is created                                     |
| Modify and upload `tax.pdf` again | Version 2 is created; Version 1 is retained              |
| Upload `tax.pdf` again            | Version 3 is created; previous versions remain available |
| Retrieve an older version         | Specify its Version ID                                   |

**Exam clue: Protect S3 objects against accidental overwrites and recover previous copies - S3 Versioning**

## 23.2 Object Deletion and Delete Markers

When **S3 Versioning** is enabled, deleting an object behaves differently depending on whether a **Version ID** is specified.

| Delete Operation              | Behavior                                                       |
| ----------------------------- | -------------------------------------------------------------- |
| **Delete without Version ID** | S3 adds a delete marker; existing object versions are retained |
| **Delete with Version ID**    | Permanently deletes the specified object version               |

### S3 Delete Markers

A **Delete Marker** is a special marker that makes an object appear deleted without removing its existing versions.
- Created when an object is deleted **without specifying a Version ID**.
- Becomes the current version of the object.
- Normal requests for the object may return **HTTP 404 Not Found**.
- Previous object versions remain stored in the bucket.
- Removing the delete marker can make the previous version accessible again.

**Important distinction:** Deleting an object without a Version ID does not permanently remove its stored versions.

**Exam clue: Recover an accidentally deleted object in a versioned S3 bucket - Remove the Delete Marker**

## 23.3 S3 Versioning and Lifecycle Policies

**S3 Lifecycle Policies** can manage different versions of objects in version-enabled buckets.

Lifecycle rules can be configured to:
- **Transition Noncurrent Versions** - Move older object versions to lower-cost storage classes.
- **Expire Noncurrent Versions** - Automatically delete older versions after a configured retention period.

For example, when a newer version of an object is uploaded, the previous version becomes **noncurrent** and can be managed using lifecycle rules.

This helps reduce storage costs while retaining historical versions when required.

## 23.4 S3 Versioning and Storage Costs

**Amazon S3 charges for all stored object versions**, not just the latest version.

Example:

|Object|Size|Storage Consumed|
|---|---|---|
|Version 1|1 GB|1 GB|
|Version 2|1 GB|1 GB|
|Version 3|1 GB|1 GB|
|Version 4|1 GB|1 GB|
|Version 5|1 GB|1 GB|
|**Total**||**5 GB**|

Even though the object has only one key, all five versions consume storage.

**Cost Optimization:** Use S3 Lifecycle Policies to transition or expire older versions that are no longer required.

## 23.5 S3 Versioning and Other Features

S3 Versioning is required for certain additional Amazon S3 features.

| Feature            | Relationship with Versioning                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **S3 Replication** | Requires versioning to be enabled on source and destination buckets                                               |
| **S3 Object Lock** | Requires versioning and helps prevent object versions from being deleted or overwritten during a retention period |

### S3 Object Lock

**S3 Object Lock** protects object versions from deletion or modification for a specified retention period.

It is useful when data must be preserved for **compliance or retention requirements**.

## 23.6 Exam Focus

- **S3 Versioning** - Stores multiple versions of the same object.
- **Version ID** - Uniquely identifies an object version.
- **Same Object Key** - Uploading again creates a new version when versioning is enabled.
- **Versioning Disabled** - Uploading the same key overwrites the existing object.
- **Delete Without Version ID** - Creates a Delete Marker while retaining previous versions.
- **Delete With Version ID** - Permanently deletes that specific version.
- **Accidental Deletion Recovery** - Remove the Delete Marker or retrieve a previous version.
- **S3 Lifecycle Policies** - Transition or expire noncurrent object versions.
- **Storage Cost** - All retained object versions incur storage charges.
- **S3 Replication** - Requires bucket versioning.
- **S3 Object Lock** - Protects object versions from deletion or modification during a retention period.

# 24 - S3 Replication

## 24.1 Amazon S3 Replication

**Amazon S3 Replication** automatically and asynchronously replicates objects from a **source S3 bucket** to one or more **destination S3 buckets**.

Key characteristics:
- **Automatic Replication** - Copies objects from the source bucket to destination buckets.
- **Asynchronous Replication** - Replication occurs in the background and may take some time to complete.
- **Versioning Requirement** - S3 Versioning must be enabled on both source and destination buckets.
- **Same-Region and Cross-Region Support** - Replication can occur within the same AWS Region or across different Regions.
- **Cross-Account Support** - Source and destination buckets can belong to different AWS accounts.

## 24.2 S3 Replication Types

Amazon S3 supports two main replication configurations based on the locations of the source and destination buckets.

| Replication Type                   | Description                                                 | Primary Use Case                                       |
| ---------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| **Same-Region Replication (SRR)**  | Replicates objects between buckets in the same AWS Region   | Log aggregation, test environments                     |
| **Cross-Region Replication (CRR)** | Replicates objects between buckets in different AWS Regions | Geographic distribution, compliance, disaster recovery |

### Same-Region Replication (SRR)

**S3 Same-Region Replication (SRR)** replicates objects between S3 buckets located in the same Region.

Common use cases:
- **Log Aggregation** - Consolidate logs from multiple S3 buckets into a central bucket.
- **Environment Replication** - Replicate production data into testing environments.
- **Cross-Account Data Sharing** - Maintain copies of data across AWS accounts within the same Region.

**Exam clue: Automatically replicate S3 objects between buckets in the same Region - S3 SRR**

### Cross-Region Replication (CRR)

**S3 Cross-Region Replication (CRR)** replicates objects between S3 buckets located in different AWS Regions.

Common use cases:
- **Compliance** - Maintain copies of data in geographically separate locations.
- **Disaster Recovery** - Preserve copies of important data in another AWS Region.
- **Geographic Distribution** - Store data closer to users in different locations.
- **Data Sovereignty** - Maintain data copies in selected geographic Regions to meet applicable requirements.

**Exam clue: Automatically replicate S3 objects to another AWS Region - S3 CRR**

## 24.3 Live Replication vs On-Demand Replication

S3 supports **Live Replication** and **On-Demand Replication**.

| Feature              | Live Replication                                            | On-Demand Replication                    |
| -------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| **Trigger**          | Automatically replicates eligible new objects               | Manually initiated batch operation       |
| **Existing Objects** | Not automatically replicated when the rule is first enabled | Can replicate existing objects           |
| **Execution**        | Continuous and asynchronous                                 | Initiated when required                  |
| **Primary Use Case** | Ongoing replication of new data                             | Replication of previously stored objects |

### Live Replication

- Automatically replicates **newly uploaded objects** after replication is configured.
- Operates asynchronously, typically completing replication within minutes.
- Does not automatically replicate objects that existed before the replication rule was enabled.

### On-Demand Replication

- Uses **S3 Batch Replication** to replicate objects when required.
- Can replicate **existing objects** that were stored before live replication was configured.
- Useful when existing data must be copied to another bucket.

**Important distinction:** Live Replication handles ongoing replication, while Batch Replication can be used for previously stored objects.

## 24.4 S3 Replication and Object Deletion

S3 replication can help maintain independent copies of objects in destination buckets.
- Replicated objects are stored in the destination bucket.
- Deleting an object from the source does not automatically remove the corresponding destination object under the default replication behavior.
- This helps preserve replicated copies when source objects are deleted.

**Important:** Delete marker replication can be configured separately, so deletion behavior depends on the replication settings.

## 24.5 Exam Focus

- **S3 Replication** - Automatic, asynchronous object replication between S3 buckets.
- **Versioning Requirement** - Must be enabled on both source and destination buckets.
- **Same-Region Replication (SRR)** - Replication within the same AWS Region.
- **Cross-Region Replication (CRR)** - Replication across different AWS Regions.
- **Cross-Account Replication** - Supports buckets owned by different AWS accounts.
- **Live Replication** - Automatically replicates eligible new objects.
- **S3 Batch Replication** - On-demand replication of existing objects.
- **Asynchronous Replication** - Replication is not necessarily immediate.
- **Object Deletion** - Source deletions do not automatically delete destination objects by default.
- **Exam clue: Maintain S3 object copies in another Region for disaster recovery - S3 Cross-Region Replication**.

# 25 - S3 IAM Access Analyzer

## 25.1 IAM Access Analyzer for Amazon S3

**AWS IAM Access Analyzer** is an IAM security feature that helps identify **unintended public and cross-account access** to Amazon S3 buckets.

Key characteristics:
- Analyzes **S3 bucket policies and Access Control Lists (ACLs)** to identify potentially excessive permissions.
- Identifies **publicly accessible S3 buckets**.
- Detects S3 buckets that are **shared with external AWS accounts**.
- Provides a **consolidated view** of S3 buckets with public or cross-account access.
- Helps administrators review and remediate **unnecessary access permissions**.

**Important:** IAM Access Analyzer evaluates resource permissions and potential external access. It does not monitor individual object reads or downloads.

## 25.2 Reviewing S3 Access Permissions

IAM Access Analyzer for S3 helps administrators identify buckets that may be exposed to unauthorized users.

### **Access Analysis**

| Access Finding           | Description                                                | Security Consideration                            |
| ------------------------ | ---------------------------------------------------------- | ------------------------------------------------- |
| **Public Access**        | Bucket permissions allow access from the public internet   | Potential unintended data exposure                |
| **Cross-Account Access** | Bucket permissions allow access from external AWS accounts | Verify that sharing is intentional and authorized |

### **Managing Access Findings**

Administrators can use the **Amazon S3 Console** to:
1. Enable **IAM Access Analyzer** if it has not been configured.
2. Review buckets identified with **public or cross-account access**.
3. Determine whether the permissions are required.
4. Remove unnecessary permissions or enable **S3 Block Public Access** to prevent public exposure.

**Exam clue: Identify S3 buckets that are publicly accessible or shared with external AWS accounts - IAM Access Analyzer**

## 25.3 Exam Focus

- **IAM Access Analyzer** - Identifies potentially unintended public and cross-account access to AWS resources.
- **S3 Access Analysis** - Evaluates bucket policies and ACLs.
- **Public Access Findings** - Identifies buckets accessible by anonymous internet users.
- **Cross-Account Findings** - Identifies buckets shared with external AWS accounts.
- **Consolidated Security View** - Helps review S3 bucket access exposure.
- **S3 Block Public Access** - Helps prevent unintended public access.
- **Key Distinction** - IAM Access Analyzer identifies access exposure; S3 Bucket Policies and ACLs define resource permissions.
- **Exam clue: Audit S3 bucket permissions for unintended external access - IAM Access Analyzer**.

# 26 - Amazon S3 - Summary

## 26.1 Amazon S3 - Key Concepts

**Amazon Simple Storage Service (Amazon S3)** provides highly durable, scalable, and web-accessible **object storage**.
- **Object Storage** - Stores objects inside S3 buckets.
- **Web Access** - Objects can be accessed using HTTP/HTTPS APIs, subject to permissions.
- **Storage Capacity** - Virtually unlimited number of objects per bucket.
- **Durability** - Designed for **99.999999999% (11 nines)** durability.
- **Storage Classes** - Different options based on access frequency, retrieval latency, durability requirements, and cost.

### S3 Storage Classes

| Storage Class                     | Primary Use Case                                         |
| --------------------------------- | -------------------------------------------------------- |
| **S3 Standard**                   | Frequently accessed data; default storage class          |
| **S3 Standard-IA**                | Infrequently accessed data requiring immediate retrieval |
| **S3 One Zone-IA**                | Low-cost, single-AZ storage for re-creatable data        |
| **S3 Intelligent-Tiering**        | Unknown or changing access patterns                      |
| **S3 Glacier Instant Retrieval**  | Archived data requiring millisecond retrieval            |
| **S3 Glacier Flexible Retrieval** | Archival data retrieved within minutes to hours          |
| **S3 Glacier Deep Archive**       | Lowest-cost, long-term archival storage                  |

### S3 Security

|Security Control|Purpose|
|---|---|
|**Block Public Access**|Prevent unintended public access|
|**IAM Policies**|Control permissions for IAM users and roles|
|**S3 Bucket Policies**|Resource-based permissions controlling access to buckets and objects|
|**ACLs**|Legacy bucket and object permissions; generally avoided|
|**Server-Side Encryption**|S3 encrypts objects using S3-managed, AWS KMS, or customer-provided keys|
|**Client-Side Encryption**|Client encrypts objects before uploading them|

### **S3 Features**

| Feature                    | Purpose                                                                          |
| -------------------------- | -------------------------------------------------------------------------------- |
| **S3 Lifecycle Policies**  | Automatically transition or expire objects based on configured rules             |
| **Static Website Hosting** | Host static HTTP websites without server-side processing                         |
| **S3 Versioning**          | Maintain multiple versions of objects for recovery                               |
| **S3 Replication**         | Asynchronously replicate objects across buckets in the same or different Regions |
| **IAM Access Analyzer**    | Identify publicly accessible buckets and unintended cross-account access         |

**Important:** S3 Replication requires **versioning enabled on both source and destination buckets**.

## 26.2 Exam Focus

- **Amazon S3** - Web-accessible object storage with virtually unlimited capacity.
- **Durability - 11 nines (99.999999999%)**.
- **Frequently Accessed Data - S3 Standard**.
- **Unpredictable Access Patterns - S3 Intelligent-Tiering**.
- **Infrequent Access with Multi-AZ Resilience - S3 Standard-IA**.
- **Infrequent, Re-creatable Data - S3 One Zone-IA**.
- **Long-Term Archival - S3 Glacier**.
- **Prevent Public Exposure - S3 Block Public Access**.
- **Resource-Based Access Control - S3 Bucket Policy**.
- **Automatic Transitions and Expiration - S3 Lifecycle**.
- **Host Static HTTP Website - S3 Static Website Hosting**.
- **Recover Previous Object Versions - S3 Versioning**.
- **Same-Region Replication - S3 SRR**.
- **Cross-Region Replication - S3 CRR**.
- **Identify Public and Cross-Account Access - IAM Access Analyzer**.

# 27 - Introduction to EFS

## 27.1 Amazon Elastic File System (Amazon EFS)

**Amazon Elastic File System (Amazon EFS)** is a fully managed, serverless **network file system** that provides shared file storage for AWS compute services.

Key characteristics:
- **Shared File Storage** - Multiple EC2 instances can access the same file system simultaneously.
- **NFS Protocol** - Supports **Network File System (NFS) version 4**.
- **Regional Service** - Supports access across multiple **Availability Zones (AZs)** within an AWS Region.
- **Linux Support** - Designed for Linux-based instances and applications.
- **Fully Managed** - AWS manages the underlying storage infrastructure.
- **Automatic Scaling** - Storage capacity grows and shrinks automatically as files are added or removed.
- **Pay for Usage** - No need to pre-provision storage capacity; pay for the storage consumed.

**Exam clue: Shared, automatically scaling file storage for multiple Linux EC2 instances - Amazon EFS**

## 27.2 EFS Architecture and Access

Amazon EFS provides a centralized file system that can be mounted by multiple compute resources.

### **Regional and Multi-AZ Access**

- An EFS file system is created within an **AWS Region**.
- **Mount Targets** provide network access to the file system within selected Availability Zones.
- For high availability, mount targets should be configured across multiple AZs.
- EC2 instances access EFS using **NFS clients** and mount the shared file system through network endpoints.

### **Supported Access Environments**

| Environment                                             | Access Method                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------- |
| **Linux EC2 Instances**                                 | Mount EFS using NFS                                                  |
| **Containers and Other Supported AWS Compute Services** | Access the shared file system through supported integrations         |
| **Different VPCs**                                      | Access through appropriate network connectivity, such as VPC peering |
| **On-Premises Linux Servers**                           | Access through AWS Site-to-Site VPN or AWS Direct Connect            |

**Important:** On-premises servers require network connectivity to the AWS VPC hosting the EFS mount targets.

## 27.3 EFS Scalability and Pricing

Amazon EFS automatically adjusts storage capacity based on usage.

Unlike **Amazon EBS**, EFS does not require users to specify a fixed volume size.

| Feature              | Amazon EBS                                                       | Amazon EFS                                          |
| -------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| **Storage Type**     | Block Storage                                                    | Shared File Storage                                 |
| **Scope**            | Availability Zone                                                | Region                                              |
| **Access**           | Attached to EC2                                                  | Mounted using NFS                                   |
| **Multiple Clients** | Typically accessed by one EC2 instance                           | Multiple clients simultaneously                     |
| **Capacity**         | Volume size is provisioned                                       | Automatically scales                                |
| **Storage Cost**     | Based on provisioned storage and applicable performance settings | Based on storage usage and applicable usage charges |

**Key distinction:** EBS provides block storage for EC2, while EFS provides shared file storage that automatically scales based on demand.

## 27.4 Common Amazon EFS Use Cases

| Use Case                               | Why EFS Is Suitable                                                    |
| -------------------------------------- | ---------------------------------------------------------------------- |
| **Containerized Applications**         | Containers can share files through a common file system                |
| **Serverless Applications**            | Supported compute services can access shared persistent files          |
| **Machine Learning**                   | Multiple processing stages can access the same datasets                |
| **Web Serving and Content Management** | Multiple application instances can share content and application state |
| **User Home Directories**              | Storage automatically scales as users add files                        |

## 27.5 Exam Focus

- **Amazon EFS** - Fully managed, serverless network file storage.
- **Storage Protocol - NFS Version 4**.
- **Regional Scope** - Supports access across multiple Availability Zones.
- **Shared Storage** - Multiple Linux EC2 instances can access the same file system.
- **Mount Targets** - Provide network access to EFS within selected AZs.
- **Automatic Scaling** - No need to pre-provision storage capacity.
- **Pay for Storage Used** - Storage consumption determines storage charges.
- **Hybrid Access** - On-premises Linux servers can access EFS through VPN or Direct Connect.
- **EBS vs EFS** - EBS is block storage; EFS is shared file storage.
- **Exam clue: Multiple Linux EC2 instances requiring a shared, scalable file system - Amazon EFS**.

# 28 - Introduction to FSx - Windows, Lustre, OpenZFS

## 28.1 Amazon FSx Overview

**Amazon FSx** provides fully managed file systems based on widely used third-party and open-source file system technologies.

Key characteristics:
- **Fully Managed** - AWS manages the underlying infrastructure and maintenance.
- **Shared File Storage** - Multiple compute instances can access the same file system.
- **High Performance** - Supports workloads requiring high throughput and low latency.
- **Familiar File Systems** - Allows applications to use established file system technologies without managing the underlying storage infrastructure.

### Amazon FSx File System Types

|Amazon FSx Service|File System|Primary Use Case|
|---|---|---|
|**Amazon FSx for Windows File Server**|Windows File Server|Shared file storage for Windows applications|
|**Amazon FSx for NetApp ONTAP**|NetApp ONTAP|Enterprise file storage using NetApp technology|
|**Amazon FSx for Lustre**|Lustre|High-Performance Computing (HPC) and machine learning|
|**Amazon FSx for OpenZFS**|OpenZFS|High-performance file storage using OpenZFS|

## 28.2 Amazon FSx for Windows File Server

**Amazon FSx for Windows File Server** provides fully managed **Windows-based shared file storage**.

Key characteristics:
- Supports the **Server Message Block (SMB)** protocol for file sharing.
- Uses the **NTFS** file system.
- Allows Windows-based EC2 instances and supported on-premises servers to access shared files.
- Supports access across connected networks, including VPCs.
- Integrates with **Microsoft Active Directory** for authentication and authorization.
- Can be accessed from on-premises environments using **AWS Site-to-Site VPN** or **AWS Direct Connect**

### **Common Use Cases**

- Shared file storage for **Windows applications**.
- Centralized file sharing across Windows servers.
- Enterprise environments requiring **Microsoft Active Directory integration**.
- Hybrid environments sharing files between AWS and on-premises Windows servers.

**Exam clue: Managed Windows shared file storage using SMB and Active Directory - Amazon FSx for Windows File Server**

## 28.3 Amazon FSx for Lustre

**Amazon FSx for Lustre** provides a fully managed, high-performance file system designed for **High-Performance Computing (HPC)** workloads.

Key characteristics:
- Supports **high throughput and low-latency data access**.
- Allows thousands of compute instances to access shared data.
- Integrates with **Amazon S3** for storing and processing large datasets.
- Designed for workloads requiring fast access to large amounts of data.

### **Amazon S3 Integration**

FSx for Lustre can integrate with Amazon S3 to support high-performance data processing.
1. **Amazon S3** stores the original datasets.
2. Data is loaded into **Amazon FSx for Lustre** for high-performance access.
3. Compute instances process the data using the shared Lustre file system.
4. Processed results can be stored back in **Amazon S3** for long-term retention.

### **Common Use Cases**

|Use Case|Purpose|
|---|---|
|**Machine Learning Training**|High-speed access to training datasets|
|**High-Performance Computing (HPC)**|Shared storage for intensive computational workloads|
|**Computational Fluid Dynamics**|Process large simulation datasets|
|**Visual Effects (VFX)**|High-performance storage for rendering workloads|
|**Media Processing**|Rendering and transcoding large media files|

**Exam clue: High-performance shared file storage for HPC or machine learning workloads - Amazon FSx for Lustre**

## 28.4 Amazon EFS vs Amazon FSx

|Feature|Amazon EFS|Amazon FSx for Windows|Amazon FSx for Lustre|
|---|---|---|---|
|**Storage Type**|Shared file storage|Shared file storage|High-performance shared file storage|
|**File System**|AWS-managed elastic file system|Windows NTFS|Lustre|
|**Primary Protocol**|NFS|SMB|Lustre|
|**Primary Workloads**|Linux applications|Windows applications|HPC and machine learning|
|**Key Feature**|Automatically scaling shared file storage|Microsoft Active Directory integration|High-performance access and S3 integration|

### Key Distinctions

- **Amazon EFS** - Shared file storage primarily for Linux-based workloads.
- **Amazon FSx for Windows File Server** - Shared file storage for Windows environments using SMB.
- **Amazon FSx for Lustre** - High-performance shared file storage for computationally intensive workloads.
- **Amazon FSx for NetApp ONTAP** - Managed enterprise storage based on NetApp technology.
- **Amazon FSx for OpenZFS** - Managed high-performance file storage based on OpenZFS.

## 28.5 Exam Focus

- **Amazon FSx** - Fully managed file systems based on established file system technologies.
- **Linux Shared File Storage - Amazon EFS**.
- **Windows Shared File Storage - Amazon FSx for Windows File Server**.
- **Windows File Sharing Protocol - SMB**.
- **Windows Authentication Integration - Microsoft Active Directory**.
- **High-Performance Computing (HPC) - Amazon FSx for Lustre**.
- **Machine Learning and Large-Scale Data Processing - Amazon FSx for Lustre**.
- **S3 Integration for HPC Data Processing - Amazon FSx for Lustre**.
- **NetApp File System - Amazon FSx for NetApp ONTAP**.
- **OpenZFS File System - Amazon FSx for OpenZFS**.
- **Hybrid File Storage Access** - Supported FSx file systems can be accessed from on-premises environments through appropriate network connectivity.
- **Key Exam Distinction** - EFS for Linux shared storage, FSx for Windows for Windows/SMB workloads, and FSx for Lustre for HPC workloads.

# 29 - Section Summary

## 29.1 AWS Storage Services - Use Case Summary

AWS provides three main storage categories: **Block Storage, File Storage, and Object Storage**.

The most appropriate storage service depends on the application's **performance requirements, data access patterns, and storage use case**.

| Use Case                                           | Most Appropriate AWS Service        |
| -------------------------------------------------- | ----------------------------------- |
| **Hosting operating systems and databases on EC2** | Amazon EBS                          |
| **Storing social media images and videos**         | Amazon S3                           |
| **Distributed computing with shared data**         | Amazon EFS / Amazon FSx             |
| **Primary application disk storage for EC2**       | Amazon EBS                          |
| **Shared media processing workflows**              | Amazon EFS / Amazon FSx             |
| **Low-latency disk storage**                       | Amazon EBS                          |
| **Static website hosting**                         | Amazon S3                           |
| **Backup and long-term archiving**                 | Amazon S3                           |
| **Storing IoT data at scale**                      | Amazon S3                           |
| **Machine learning training data**                 | Amazon S3 / Amazon EFS / Amazon FSx |
| **Data lakes**                                     | Amazon S3                           |
| **Persistent shared file storage for containers**  | Amazon EFS / Amazon FSx             |
| **Data exchange between organizations**            | Amazon S3                           |

### Key Storage Service Distinctions

| Storage Service | Storage Type   | Key Characteristic                                                     |
| --------------- | -------------- | ---------------------------------------------------------------------- |
| **Amazon EBS**  | Block Storage  | Low-latency, persistent disk storage for EC2                           |
| **Amazon S3**   | Object Storage | Scalable object storage accessible through web APIs                    |
| **Amazon EFS**  | File Storage   | Shared file system for multiple Linux-based compute instances          |
| **Amazon FSx**  | File Storage   | Managed file systems for Windows, HPC, and other specialized workloads |

**Important distinction:**

- **Amazon EBS** - Best suited for EC2 operating systems, application disks, and workloads requiring low-latency block storage.
- **Amazon S3** - Best suited for web-accessible objects, backups, archives, data lakes, and large-scale storage.
- **Amazon EFS / Amazon FSx** - Best suited for shared file storage across multiple compute instances.

Unlike S3, **EBS and EFS/FSx are not directly accessible as public web objects**. Applications typically access them through attached or mounted storage.

## 29.2 Exam Focus

- **EC2 Operating System and Database Disk - Amazon EBS**.
- **Lowest-Latency Block Storage - Amazon EBS**.
- **Images, Videos, and Web-Accessible Objects - Amazon S3**.
- **Static Website Hosting - Amazon S3**.
- **Backup and Long-Term Archiving - Amazon S3**.
- **Data Lakes and Large-Scale IoT Storage - Amazon S3**.
- **Shared Linux File Storage - Amazon EFS**.
- **Windows Shared File Storage - Amazon FSx for Windows File Server**.
- **High-Performance Computing and ML Training - Amazon FSx for Lustre**.
- **Shared Persistent Container Storage - Amazon EFS / Amazon FSx**.
- **Data Sharing Between Organizations - Amazon S3**.

**Key exam strategy:** When multiple storage services appear valid, identify the **most appropriate service** based on the scenario's requirements for latency, shared access, web accessibility, scalability, and storage type.

# 30 - Quiz

## 30.1 Practice Question

### Original Question

Which AWS storage option would you choose if you needed temporary storage for EC2 instance for cache data that does not need to persist?

### Choices

A. Instance Store  
B. EBS General Purpose SSD  
C. Amazon S3  
D. EFS

### Correct Answer

**A. Instance Store**

### Why?

**EC2 Instance Store** provides temporary **block-level storage** located on the physical host running the EC2 instance.
- Suitable for **cache data, temporary files, and scratch storage**.
- Data does not persist when the instance is stopped, terminated, or its underlying host fails.
- **Amazon EBS** provides persistent block storage, while **Amazon S3** provides object storage and **Amazon EFS** provides shared file storage.

**Exam clue: Temporary EC2 storage where data persistence is unnecessary - Instance Store**

## 30.2 Practice Question

### Original Question

What feature of EBS enables you to create point-in-time backups of your data?

### Choices

A. Instance Store  
B. EBS Auto Scaling  
C. S3 Lifecycle Policies  
D. EBS Snapshots

### Correct Answer

**D. EBS Snapshots**

### Why?

**EBS Snapshots** provide **point-in-time backups** of Amazon EBS volumes.
- Snapshots are **incremental**, storing changed data blocks after the initial backup.
- Snapshots are stored in **AWS-managed Amazon S3 storage**.
- Snapshots can be used to **create new EBS volumes** for data recovery.

**S3 Lifecycle Policies** manage S3 object transitions and expiration, not EBS volume backups.

**Exam clue: Point-in-time backup of an EBS volume - EBS Snapshots**

## 30.3 Practice Question

### Original Question

What is the main benefit of using S3 Intelligent-Tiering storage class?

### Choices

A. High availability for all objects  
B. Automatic cost optimization based on access patterns  
C. Fast retrieval times for archived data  
D. Single AZ storage for lower costs

### Correct Answer

**B. Automatic cost optimization based on access patterns**

### Why?

**Amazon S3 Intelligent-Tiering** automatically optimizes storage costs by monitoring object access patterns and moving objects between appropriate access tiers.
- Designed for **unknown or changing access patterns**.
- Automatically moves objects between tiers based on access frequency.
- Charges a small **monitoring and automation fee**.

**S3 One Zone-IA** is associated with lower-cost single-AZ storage, while **S3 Glacier** classes are designed for archival workloads.

**Exam clue: Automatic storage cost optimization for unpredictable access patterns - S3 Intelligent-Tiering**

## 30.4 Practice Question

### Original Question

Your application requires a shared file system accessible by multiple EC2 instances running Linux. Which storage service should you use?

### Choices

A. Amazon EBS  
B. Amazon S3  
C. Amazon EFS  
D. Amazon FSx for Lustre

### Correct Answer

**C. Amazon EFS**

### Why?

**Amazon Elastic File System (Amazon EFS)** provides fully managed, scalable **shared file storage** for Linux-based workloads.
- Supports **NFS** for file system access.
- Multiple Linux EC2 instances can mount and access the same file system simultaneously.
- Automatically scales storage capacity.

**Amazon EBS** is primarily block storage for EC2, while **Amazon FSx for Lustre** is optimized for high-performance computing workloads.

**Exam clue: Multiple Linux EC2 instances requiring shared file storage - Amazon EFS**

## 30.5 Practice Question

### Original Question

Which S3 storage class is most cost-effective for long-term data archiving with retrieval times of hours?

### Choices

A. S3 Standard  
B. S3 Glacier  
C. S3 One Zone-IA  
D. S3 Intelligent-Tiering

### Correct Answer

**B. S3 Glacier**

### Why?

**Amazon S3 Glacier** storage classes provide cost-effective storage for **long-term backups and archival data**.
- Designed for data accessed infrequently.
- Offers lower storage costs than S3 Standard for suitable archival workloads.
- Some Glacier classes support retrieval times measured in **hours**.

For more specific scenarios:
- **S3 Glacier Flexible Retrieval** - Retrieval from minutes to hours.
- **S3 Glacier Deep Archive** - Lowest-cost long-term archive with retrieval taking hours or longer.

**Exam clue: Cost-effective long-term archival storage with delayed retrieval - S3 Glacier**

## 30.6 Practice Question

### Original Question

By design, what is the durability of objects stored in Amazon S3 standard storage?

### Choices

A. 99.999999999% (11 9's)  
B. 99.9999% (6 9's)  
C. 99.99% (4 9's)  
D. 99.95%

### Correct Answer

**A. 99.999999999% (11 9's)**

### Why?

**Amazon S3 Standard** is designed to provide **99.999999999% durability (11 nines)** for stored objects.
- Durability measures how reliably data is preserved against loss.
- S3 Standard stores objects redundantly across multiple **Availability Zones**.
- **Durability** is different from **availability**, which measures whether stored objects can be accessed when required.

**Exam clue: 11 nines of durability - Amazon S3**

## 30.7 Practice Question

### Original Question

Which AWS service provides block-level storage for EC2 instances?

### Choices

A. Amazon S3  
B. Amazon EBS  
C. Amazon FSx  
D. Amazon EFS

### Correct Answer

**B. Amazon EBS**

### Why?

**Amazon Elastic Block Store (Amazon EBS)** provides persistent **block-level storage** for Amazon EC2 instances.
- Used for **operating systems, application disks, and databases hosted on EC2**.
- Provides high IOPS and low-latency storage.
- EBS volumes are **Availability Zone-scoped**.

**Amazon S3** provides object storage, while **Amazon EFS** and **Amazon FSx** provide managed file storage.

**Exam clue: Persistent block-level storage for EC2 - Amazon EBS**

## 30.8 Practice Question

### Original Question

You want to allow public read access to an S3 bucket. What should you configure?

### Choices

A. S3 Versioning  
B. IAM Role  
C. Bucket Policy  
D. S3 Lifecycle Rules

### Correct Answer

**C. Bucket Policy**

### Why?

An **S3 Bucket Policy** is a resource-based policy used to define access permissions for S3 buckets and objects.

For public read access:
- Configure **S3 Block Public Access** to permit the intended public access.
- Set **Principal** to `*` to represent anonymous users.
- Allow the `s3:GetObject` action.
- Specify the appropriate object resources.

**S3 Versioning** manages object versions, while **S3 Lifecycle Rules** manage object transitions and expiration.

**Exam clue: Grant public read permissions to S3 objects - S3 Bucket Policy**

## 30.9 Practice Question

### Original Question

You are storing frequently accessed images for your website. Which S3 storage class should you use?

### Choices

A. S3 Glacier  
B. S3 Intelligent-Tiering  
C. S3 Standard  
D. S3 One Zone-IA

### Correct Answer

**C. S3 Standard**

### Why?

**Amazon S3 Standard** is designed for **frequently accessed data** requiring low-latency retrieval.
- Provides **millisecond access latency**.
- Suitable for **website images, media files, and application assets**.
- Offers high durability and availability.
- Does not have a minimum storage duration requirement.

**S3 Intelligent-Tiering** is more appropriate when access patterns are unknown or changing, while **S3 Glacier** is designed for archival data.

**Exam clue: Frequently accessed website images and media - S3 Standard**

## 30.10 Practice Question

### Original Question

Which AWS storage service is best suited for Windows-based applications requiring a fully managed file system with native Windows compatibility?

### Choices

A. Amazon Elastic File System (EFS)  
B. Amazon FSx for Windows File Server  
C. Amazon S3  
D. Amazon FSx for Lustre

### Correct Answer

**B. Amazon FSx for Windows File Server**

### Why?

**Amazon FSx for Windows File Server** provides fully managed file storage designed for **Windows-based applications**.
- Supports the **Server Message Block (SMB)** protocol.
- Uses the **NTFS** file system.
- Integrates with **Microsoft Active Directory** for authentication and authorization.
- Supports shared file access for Windows applications.

**Amazon EFS** is primarily used for Linux-based shared storage, while **Amazon FSx for Lustre** is designed for high-performance computing workloads.

**Exam clue: Managed Windows shared file storage with SMB and Active Directory - Amazon FSx for Windows File Server**

## 30.11 Exam Focus

| Exam Scenario                        | Correct AWS Service / Feature      |
| ------------------------------------ | ---------------------------------- |
| **Temporary EC2 cache storage**      | Instance Store                     |
| **Point-in-time EBS backup**         | EBS Snapshots                      |
| **Unpredictable S3 access patterns** | S3 Intelligent-Tiering             |
| **Shared Linux file system**         | Amazon EFS                         |
| **Long-term archival storage**       | S3 Glacier                         |
| **11 nines of durability**           | Amazon S3                          |
| **Persistent EC2 block storage**     | Amazon EBS                         |
| **Public S3 object permissions**     | S3 Bucket Policy                   |
| **Frequently accessed S3 objects**   | S3 Standard                        |
| **Windows shared file system**       | Amazon FSx for Windows File Server |

### Key Exam Distinctions

- **Instance Store vs EBS** - Temporary vs persistent EC2 block storage.
- **EBS vs EFS** - Block storage vs shared file storage.
- **EFS vs FSx for Windows** - Linux/NFS vs Windows/SMB.
- **S3 Standard vs Intelligent-Tiering** - Frequent, predictable access vs unknown or changing access patterns.
- **S3 Standard vs Glacier** - Frequently accessed data vs long-term archival storage.
- **S3 Durability vs Availability** - Data preservation vs data accessibility.
- **S3 Bucket Policy vs Lifecycle Policy** - Access permissions vs automated storage management.