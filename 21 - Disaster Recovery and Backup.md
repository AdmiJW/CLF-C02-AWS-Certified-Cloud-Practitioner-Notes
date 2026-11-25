# 1 - Disaster Recovery Strategies

## **1.1 Disaster Recovery (DR) Overview**

**Disaster Recovery (DR)** is the process of **preparing for and recovering from a disaster** to restore applications and systems to normal operation.

A disaster is any event that disrupts an application's availability or operation.

### **Common Causes of Disasters**

- **Natural disasters:** Earthquakes, floods, or other events affecting data centers.
- **Technical failures:** Power outages, network failures, or infrastructure failures.
- **Human errors:** Accidental deletion of files, databases, or other critical resources.

A disaster recovery strategy helps businesses **minimize data loss and application downtime**.

## **1.2 Recovery Point Objective (RPO) vs Recovery Time Objective (RTO)**

Two key metrics determine the appropriate disaster recovery strategy.

| Metric                             | Definition                                                  | Key Question                                     |
| ---------------------------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| **Recovery Point Objective (RPO)** | Maximum acceptable amount of data loss, measured in time    | How much data can we afford to lose?             |
| **Recovery Time Objective (RTO)**  | Maximum acceptable time to restore systems after a disaster | How long can the application remain unavailable? |

### **Recovery Point Objective (RPO)**

**RPO determines how much data loss is acceptable.**

Example:
- Backups are taken every **7 days**.
- A disaster occurs just before the next scheduled backup.
- Up to **7 days of data** may be lost.
- Therefore, the **RPO is 7 days**.

A lower RPO requires more frequent backups or continuous data replication.

### **Recovery Time Objective (RTO)**

**RTO determines how quickly the system must recover after a disaster.**

Example:
- An application becomes unavailable due to a disaster.
- Restoring the infrastructure and application takes **2 days**.
- Therefore, the **RTO is 2 days**.

A lower RTO requires faster recovery mechanisms and infrastructure readiness.

### **RPO and RTO Trade-Off**

Businesses generally prefer **near-zero RPO and RTO**, but achieving them increases infrastructure costs.
- **Lower RPO** - Less acceptable data loss.
- **Lower RTO** - Less acceptable downtime.
- **Lower RPO and RTO** - Typically higher disaster recovery costs.

**Key distinction:** RPO measures **data loss**, while RTO measures **recovery time**.

## **1.3 Disaster Recovery Strategies**

There are two main disaster recovery approaches:
- **Active-Active:** Multiple sites actively serve application traffic.
- **Active-Passive:** A primary site serves traffic while a secondary site is prepared for recovery.

### **Active-Active (Multi-Site)**

In an **Active-Active** setup, two sites run the application simultaneously.
- Both sites are active and capable of serving users.
- If one site fails, users can continue accessing the application through the other site.
- Provides **very low RPO and RTO**, potentially within seconds.
- Requires additional infrastructure and capacity, making it the **most expensive strategy**.

**Best suited for:** Critical applications requiring minimal downtime and data loss.

### **Active-Passive**

In an **Active-Passive** setup, the primary site handles normal application traffic, while the secondary site is used for recovery.
- The recovery site is not actively serving normal traffic.
- Application data is backed up or replicated to the secondary site.
- When a disaster occurs, the recovery environment is activated.

There are three common Active-Passive strategies.

#### **1. Backup and Restore**

**Backup and Restore** is the simplest and least expensive disaster recovery strategy.
- Periodically back up application data to a recovery location, such as another AWS Region.
- No application infrastructure is running at the recovery site.
- After a disaster, provision the required infrastructure and restore data from backups.
- **High RPO:** Data loss depends on backup frequency.
- **High RTO:** Recovery takes time because infrastructure and data must be restored.

**Best suited for:** Cost-sensitive applications that can tolerate longer downtime and greater data loss.

#### **2. Pilot Light**

**Pilot Light** maintains essential components, particularly the database, in the recovery environment.
- Continuously replicate the primary database to the recovery site.
- Application servers are not running in the recovery environment.
- During a disaster, launch the required application servers.
- **Near-zero RPO:** Continuous data replication minimizes potential data loss.
- **Low RTO:** Recovery can take only a few minutes because the database is already available.

**Best suited for:** Applications requiring faster recovery without maintaining a complete secondary environment.

#### **3. Warm Standby**

**Warm Standby** maintains a running but smaller version of the complete application in the recovery environment.
- The application and database are already running at reduced capacity.
- The recovery environment is not sized to handle full production traffic.
- During a disaster, scale up the standby environment to handle the required traffic.
- **Very low RPO and RTO** because the application infrastructure is already running.
- More expensive than Pilot Light but faster to recover.

**Best suited for:** Applications requiring minimal downtime without the full cost of Active-Active.

### **Disaster Recovery Strategy Comparison**

| Strategy                       | Recovery Environment                                                       | RPO       | RTO                            | Relative Cost |
| ------------------------------ | -------------------------------------------------------------------------- | --------- | ------------------------------ | ------------- |
| **Backup and Restore**         | Backups only; infrastructure provisioned after disaster                    | High      | High                           | Lowest        |
| **Pilot Light**                | Essential components running; application servers launched during recovery | Near-zero | Low (minutes)                  | Low           |
| **Warm Standby**               | Complete application running at reduced capacity                           | Very low  | Very low                       | High          |
| **Active-Active (Multi-Site)** | Multiple fully operational application environments                        | Very low  | Very low (potentially seconds) | Highest       |

### **Cost vs Recovery Speed**

Treat recovery times and potential data loss in the comparison as illustrative. Set specific RPO and RTO targets for the workload and validate them with a recovery drill. A warm standby generally costs more than a pilot light because more of the application is already running.

## **1.4 Exam Focus**

- **Disaster Recovery (DR)** - Preparing for and recovering from events that disrupt applications.
- **RPO (Recovery Point Objective)** - Maximum acceptable data loss measured in time.
- **RTO (Recovery Time Objective)** - Maximum acceptable recovery time.
- **Cheapest disaster recovery strategy - Backup and Restore.**
- **Database replicated, application servers launched after disaster - Pilot Light.**
- **Application already running at reduced capacity - Warm Standby.**
- **Multiple sites actively serving traffic - Active-Active (Multi-Site).**
- **Lowest RPO and RTO - Active-Active**, generally at the highest cost.
- **Lower RPO and RTO typically require higher infrastructure costs.**

**Remember:** RPO = **How much data can be lost?** RTO = **How long can recovery take?**

# 2 - AWS Elastic Disaster Recovery Service (DRS)

## **2.1 AWS Elastic Disaster Recovery (DRS) Overview**

**AWS Elastic Disaster Recovery (AWS DRS)** is a disaster recovery service that enables **fast and reliable recovery of on-premises and cloud-based applications into AWS**.
- Replicates source systems and data into an AWS recovery Region.
- Helps minimize **data loss (RPO)** and **recovery time (RTO)**.
- Supports disaster recovery for applications running in different environments. 
- Previously known as **CloudEndure Disaster Recovery**, which AWS acquired and later renamed.

**Primary purpose:** Recover applications and systems into AWS after a disaster with minimal downtime and data loss.

## **2.2 Key Features and Benefits**

### **Low RPO and RTO**

AWS DRS provides fast recovery capabilities.

|Metric|AWS DRS Capability|Benefit|
|---|---|---|
|**RPO (Recovery Point Objective)**|Seconds|Minimal data loss|
|**RTO (Recovery Time Objective)**|Minutes|Fast application recovery|

- **RPO in seconds:** Continuous replication helps minimize potential data loss.
- **RTO in minutes:** Applications can be recovered and made operational in AWS within minutes.

### **Disaster Recovery Testing**

AWS DRS supports **disaster recovery testing and drills**.
- Test recovery procedures before an actual disaster.
- Validate that applications can be successfully recovered.
- Improve confidence in disaster recovery readiness.

### **Supported Source Environments**

AWS DRS supports recovery from multiple environments into AWS.

| Source Environment     | Support                                    |
| ---------------------- | ------------------------------------------ |
| **Physical Servers**   | On-premises physical infrastructure        |
| **VMware**             | Virtualized environments                   |
| **Microsoft Azure**    | Cloud-hosted applications                  |
| **Google Cloud (GCP)** | Cloud-hosted applications                  |
| **AWS Regions**        | Applications running in another AWS Region |

**Key distinction:** The source environment does not need to be AWS. AWS DRS can recover applications from on-premises infrastructure and other cloud providers into AWS.

## **2.3 Exam Focus**

- **Fast disaster recovery into AWS - AWS Elastic Disaster Recovery (AWS DRS).**
- **RPO in seconds - Minimal data loss.**
- **RTO in minutes - Fast application recovery.**
- **Recover physical servers, VMware, Azure, GCP, or AWS workloads into AWS - AWS DRS.**
- **Test disaster recovery procedures and perform recovery drills - AWS DRS.**
- **Formerly CloudEndure Disaster Recovery - AWS DRS.**

**Remember:** AWS DRS is used for **rapid disaster recovery of applications into AWS**, with an RPO measured in seconds and an RTO measured in minutes.

# 3 - AWS Backup Service

## **3.1 AWS Backup Overview**

**AWS Backup** is a fully managed service that **centralizes and automates data backups** across AWS services and supported on-premises environments.
- Provides a centralized solution for managing backups across multiple AWS resources.
- Automates backup scheduling, retention, and lifecycle management.
- Supports **cross-Region** and **cross-account backups**.
- Integrates with AWS storage services and supported third-party applications.

**Primary purpose:** Simplify backup management and protect data across AWS and on-premises environments.

## **3.2 AWS Backup Plans**

AWS Backup uses **Backup Plans** to define how and when data should be backed up.

A backup plan allows you to configure:

| Configuration          | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| **Backup Frequency**   | How often backups are taken (hourly, daily, weekly, etc.)  |
| **Backup Schedule**    | When backups should run                                    |
| **Resource Selection** | Which AWS resources should be backed up                    |
| **Backup Retention**   | How long backups should be retained                        |
| **Storage Lifecycle**  | When backups should transition to lower-cost storage tiers |

### **Automated Backup Lifecycle Management**

AWS Backup supports **automated backup lifecycle management**.
- Backups can transition from higher-cost storage to lower-cost storage tiers.
- Retention and lifecycle policies help manage backup storage costs.
- Reduces manual backup management.

**Key benefit:** Automated backups and lifecycle policies improve operational efficiency and cost optimization.

## **3.3 Key Features of AWS Backup**

### **Cross-Region Backups**

AWS Backup supports **cross-Region backup copies**.
- Backup data from one AWS Region can be copied to another Region.
- Protects against Region-level failures.
- Allows applications to be restored using backups stored in another Region.

**Example:** Back up an Amazon EBS volume in one AWS Region and maintain a backup copy in another Region for disaster recovery.

### **Cross-Account Backups**

AWS Backup supports **cross-account backup management**.
- Backups can be copied across different AWS accounts.
- Organizations can use a **centralized backup account**.
- Helps manage backup protection across multiple AWS accounts.

**Example:** Multiple AWS accounts store backup copies in a dedicated central backup account.

### **Incremental Backups**

AWS Backup uses the **native backup capabilities** of supported AWS services.

For example, **Amazon Elastic Block Store (Amazon EBS)** supports incremental snapshots.
- The initial backup captures the required data.
- Subsequent backups capture only changed data blocks.
- Reduces backup storage requirements and redundant data transfers.

**Key distinction:** Incremental backups store changes rather than repeatedly backing up all unchanged data.

### Backup vaults and restore testing

A **backup vault** stores recovery points and lets you manage access to them. A backup plan schedules backups and sets retention. For example, put nightly recovery points into a dedicated vault and schedule a **restore test** to check that a selected recovery point can be restored. Check the restored application or data separately as part of the recovery drill.

Use [EBS snapshots](./11%20-%20Foundation%20-%20AWS%20Storage%20Services.md) for the volume-level backup mechanism and [migration services](./20%20-%20AWS%20Migration%20and%20Hybrid%20Storage.md) when the goal is moving a workload. **Elastic Disaster Recovery** continuously replicates source disks to support workload recovery. **AWS Backup** centrally manages recovery points and restores.

[AWS Backup vaults](https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html) · [Restore testing](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html)

## **3.4 Supported Services and Environments**

AWS Backup integrates with multiple AWS services and supported external environments.

| Environment                  | Backup Capability                                               |
| ---------------------------- | --------------------------------------------------------------- |
| **AWS Storage Services**     | Centralized backups of supported resources, such as Amazon EBS  |
| **On-Premises Environments** | Backup support for compatible on-premises data and workloads    |
| **Third-Party Applications** | Backup integration with supported applications such as SAP HANA |
| **Multiple AWS Accounts**    | Centralized cross-account backup management                     |
| **Multiple AWS Regions**     | Cross-Region backup copies for disaster recovery                |

### **AWS Backup vs AWS Elastic Disaster Recovery (DRS)**

| Feature             | **AWS Backup**                                 | **AWS Elastic Disaster Recovery (DRS)**             |
| ------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **Primary Purpose** | Centralized backup and recovery of data        | Rapid disaster recovery of applications and systems |
| **Approach**        | Scheduled backups and backup policies          | Continuous replication                              |
| **Recovery Focus**  | Restore backed-up data and supported resources | Recover applications into AWS with minimal downtime |
| **Exam Clue**       | Automated backup management across resources   | RPO in seconds and RTO in minutes                   |

**Key distinction:**

- **AWS Backup** - Centralized backup scheduling, retention, lifecycle management, and data recovery.
- **AWS DRS** - Fast disaster recovery through continuous replication of applications and systems into AWS.