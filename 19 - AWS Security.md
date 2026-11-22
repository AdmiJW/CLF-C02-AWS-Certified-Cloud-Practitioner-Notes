# 1 - Overview of AWS Security Services

## **1.1 AWS Security Overview**

AWS provides multiple **security services** to protect cloud resources, applications, networks, and data.

Security in AWS can be divided into five main categories:

| Security Category                  | Main Purpose                                                        |
| ---------------------------------- | ------------------------------------------------------------------- |
| **Identity and Access Management** | Control users, roles, and permissions                               |
| **Data Protection**                | Protect sensitive data through encryption and secrets management    |
| **Infrastructure Protection**      | Protect networks and applications from attacks                      |
| **Detective Controls**             | Identify vulnerabilities, suspicious activity, and security threats |
| **Incident Response**              | Investigate security incidents and determine their root causes      |

AWS provides specialized services for each security category.

## **1.2 Identity and Data Protection Services**

### **Identity and Access Management**

**AWS Identity and Access Management (IAM)** controls access to AWS resources.
- Manages **IAM users, roles, and permissions**.
- Determines who can access AWS resources and what actions they can perform.

Network access can also be controlled using:
- **Security Groups** - Control inbound and outbound traffic at the instance level.
- **Network Access Control Lists (NACLs)** - Control inbound and outbound traffic at the subnet level.

### **Data Protection Services**

| AWS Service                              | Main Purpose                                                  | Exam Clue                                  |
| ---------------------------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| **AWS Key Management Service (AWS KMS)** | Manage encryption keys used to encrypt and decrypt data       | Managed encryption keys                    |
| **AWS CloudHSM**                         | Dedicated hardware for generating and storing encryption keys | Dedicated hardware and greater key control |
| **AWS Certificate Manager (ACM)**        | Provision and manage SSL/TLS certificates                     | HTTPS certificates                         |
| **AWS Secrets Manager**                  | Securely store, retrieve, and manage application secrets      | Database credentials and passwords         |
| **Amazon Macie**                         | Discover sensitive data in Amazon S3                          | Identify PII in S3 buckets                 |

### **AWS KMS vs AWS CloudHSM**

Both services support **data encryption at rest**, but they differ in key management and control.

**AWS KMS**
- Fully managed encryption key management service.
- AWS manages the underlying key management infrastructure.
- Commonly used to protect data stored in **Amazon EBS, Amazon S3, and databases**.

**AWS CloudHSM**
- Provides dedicated **Hardware Security Modules (HSMs)**.
- Gives customers greater control over cryptographic keys.
- Useful for organizations with strict security or compliance requirements.
- Generally more expensive due to dedicated hardware.

- **Exam distinction: Managed encryption keys - AWS KMS**
- **Exam distinction: Dedicated cryptographic hardware - AWS CloudHSM**

### **AWS Certificate Manager (ACM)**

**AWS Certificate Manager (ACM)** manages SSL/TLS certificates used to secure **data in transit**.
- Enables encrypted HTTPS communication.
- Certificates can be used with services such as:
    - Elastic Load Balancing
    - Amazon CloudFront
    - Amazon API Gateway

**Key distinction:**
- **AWS KMS / CloudHSM** - Encryption key management, commonly for data at rest.
- **ACM** - SSL/TLS certificates for protecting data in transit.

### **AWS Secrets Manager**

**AWS Secrets Manager** protects sensitive application credentials.
- Securely stores secrets such as database usernames, passwords, and API credentials.
- Encrypts stored secrets.
- Applications can retrieve secrets securely at runtime through API calls.
- Avoids hardcoding sensitive credentials in application code or storing them locally on EC2 instances.

**Example:** An EC2 application needs database credentials to connect to Amazon RDS. Use **AWS Secrets Manager** to retrieve those credentials securely.

### **Amazon Macie**

**Amazon Macie** is a data security service focused on **Amazon S3**.
- Identifies sensitive information stored in S3 buckets.
- Detects **Personally Identifiable Information (PII)**, such as:
    - Email addresses
    - Phone numbers
    - Credit card information
- Useful for organizations handling sensitive customer or regulated data.

**Exam clue: Discover sensitive data or PII in S3 - Amazon Macie**

## **1.3 Application and Infrastructure Protection**

AWS provides services to protect applications from web attacks, DDoS attacks, and software vulnerabilities.

| AWS Service          | Main Purpose                                                              | Exam Clue                           |
| -------------------- | ------------------------------------------------------------------------- | ----------------------------------- |
| **AWS WAF**          | Protect web applications from common application-layer attacks            | SQL injection, cross-site scripting |
| **AWS Shield**       | Protect applications against Distributed Denial of Service (DDoS) attacks | DDoS protection                     |
| **Amazon Inspector** | Detect software vulnerabilities in compute workloads                      | Vulnerability scanning              |

### **AWS WAF (Web Application Firewall)**

**AWS WAF** protects web applications against common application-layer attacks.
- Operates at **Layer 7 (Application Layer)** of the OSI model.
- Protects against attacks such as:
    - **SQL Injection**
    - **Cross-Site Scripting (XSS)**
- Can protect applications exposed through services such as load balancers and Amazon CloudFront.

### **AWS Shield**

**AWS Shield** provides protection against **Distributed Denial of Service (DDoS)** attacks.

A DDoS attack occurs when attackers overwhelm an application with large volumes of traffic, preventing legitimate users from accessing it.

**Key distinction:**

| AWS WAF                                                  | AWS Shield                                |
| -------------------------------------------------------- | ----------------------------------------- |
| Protects against web application attacks                 | Protects against DDoS attacks             |
| Focuses on Layer 7 threats such as SQL injection and XSS | Focuses on overwhelming malicious traffic |
| Web application firewall                                 | DDoS protection service                   |

### **Amazon Inspector**

**Amazon Inspector** is an automated vulnerability management service.

It scans supported compute workloads to identify software vulnerabilities, including:
- **Amazon EC2 instances**
- **Container images**
- **AWS Lambda functions**

Inspector generates findings that help identify vulnerable software components and workloads requiring remediation.

**Exam clue: Scan EC2, container images, or Lambda for software vulnerabilities - Amazon Inspector**

## **1.4 Threat Detection and Security Incident Investigation**

Even with preventive security controls, organizations must continuously detect, investigate, and respond to security threats.

AWS provides three important services:

| AWS Service          | Main Purpose                   | Exam Clue                                       |
| -------------------- | ------------------------------ | ----------------------------------------------- |
| **Amazon GuardDuty** | Intelligent threat detection   | Detect suspicious or malicious activity         |
| **AWS Security Hub** | Centralize security findings   | Aggregate security alerts from multiple sources |
| **Amazon Detective** | Investigate security incidents | Analyze relationships and identify root causes  |

### **Amazon GuardDuty**

**Amazon GuardDuty** is an intelligent **threat detection service**.
- Analyzes information from AWS data sources.
- Uses **machine learning and threat detection techniques**.
- Identifies suspicious activity, anomalies, and potential security threats.
- Produces security findings with severity information.

**Example:** Detect potentially malicious activity occurring within an AWS environment.

### **AWS Security Hub**

**AWS Security Hub** provides centralized visibility into security findings.
- Aggregates findings from multiple AWS security services.
- Provides a central location for monitoring security threats.
- Can integrate with third-party security and incident management tools.
- Helps security teams prioritize and respond to findings.

**Example:** A security team wants to view findings from several security services in one place instead of checking each service separately.

### **Amazon Detective**

**Amazon Detective** helps investigate security incidents and identify their **root causes**.
- Analyzes security-related activity and relationships between events.
- Uses **graph technology and machine learning** to support investigations.
- Helps security teams understand how suspicious activity occurred.
- Reduces the manual effort required to correlate security information.

**Example:** A suspicious access event has been detected, and the security team needs to investigate related activities to understand the cause.

### **GuardDuty vs Security Hub vs Detective**

These services have different roles in security operations.

|Service|Main Question|
|---|---|
|**Amazon GuardDuty**|Is there suspicious or malicious activity?|
|**AWS Security Hub**|Where can I view security findings together?|
|**Amazon Detective**|How and why did the security incident occur?|

**Remember:**
- **GuardDuty - Detect threats**
- **Security Hub - Centralize findings**
- **Detective - Investigate root causes**

## **1.5 Exam Focus**

### **Identity and Data Security**

- **Manage users, roles, and permissions - AWS IAM**
- **Manage encryption keys - AWS KMS**
- **Dedicated hardware for cryptographic keys - AWS CloudHSM**
- **Manage SSL/TLS certificates for HTTPS - AWS Certificate Manager**
- **Store application passwords and credentials - AWS Secrets Manager**
- **Discover PII and sensitive data in S3 - Amazon Macie**

### **Application and Infrastructure Security**

- **Protect against SQL injection and XSS - AWS WAF**
- **Protect against DDoS attacks - AWS Shield**
- **Scan compute workloads for software vulnerabilities - Amazon Inspector**
- **Control instance-level network traffic - Security Groups**
- **Control subnet-level network traffic - Network ACLs**

### **Threat Detection and Incident Investigation**

- **Detect suspicious and malicious activity - Amazon GuardDuty**
- **Aggregate security findings centrally - AWS Security Hub**
- **Investigate incidents and identify root causes - Amazon Detective**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Encrypt stored data using managed encryption keys|**AWS KMS**|
|Require dedicated cryptographic hardware|**AWS CloudHSM**|
|Secure HTTPS communication using certificates|**AWS Certificate Manager**|
|Securely retrieve database passwords at runtime|**AWS Secrets Manager**|
|Identify sensitive customer information in S3|**Amazon Macie**|
|Prevent SQL injection and cross-site scripting|**AWS WAF**|
|Protect an application from DDoS attacks|**AWS Shield**|
|Identify vulnerable software in EC2 instances|**Amazon Inspector**|
|Detect suspicious activity using machine learning|**Amazon GuardDuty**|
|Consolidate security findings from multiple services|**AWS Security Hub**|
|Investigate the root cause of a security incident|**Amazon Detective**|

# 2 - Data Security Basics

## **2.1 Data Security Overview**

Data security involves protecting information in two main states:

| Data State          | Description                                           | Example                                         |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| **Data at Rest**    | Data stored in a storage system                       | Data stored on disks, databases, or Amazon S3   |
| **Data in Transit** | Data being transferred between systems over a network | Data sent between applications or through HTTPS |

Both **data at rest** and **data in transit** must be protected to maintain data confidentiality.
- **Data at Rest** - Typically protected using encryption before storing the data.
- **Data in Transit** - Typically protected using encrypted communication protocols such as **SSL/TLS**.

**AWS Key Management Service (AWS KMS)** is commonly used to manage encryption keys for protecting data at rest.

## **2.2 Encryption and Decryption Basics**

**Encryption** converts readable data into an unreadable format to protect it from unauthorized access.

### **Encryption**

Encryption requires:
- **Plaintext** - Original readable data.
- **Encryption Algorithm** - Mathematical process that transforms the data.
- **Encryption Key** - Cryptographic key used by the algorithm.
- **Ciphertext** - Resulting encrypted data.

The encrypted data cannot be meaningfully read without the appropriate decryption process and key.

### **Decryption**

**Decryption** reverses encryption by converting encrypted data back into its original readable form.

It requires:
- **Ciphertext** - Encrypted data.
- **Decryption Algorithm** - Process that reverses encryption.
- **Decryption Key** - Key used to recover the original data.

**Key Concept:** Encryption protects data confidentiality, while decryption restores the original data for authorized use.

## **2.3 Types of Encryption**

There are two primary encryption methods:

### **Symmetric Encryption**

**Symmetric Encryption** uses the **same cryptographic key** for both encryption and decryption.

Characteristics:
- Uses a **single shared key**.
- Faster and more efficient for encrypting large amounts of data.
- Commonly used to protect **data at rest**.
- Also used to encrypt application data transmitted over an established SSL/TLS connection.

Common use cases:
- Disk encryption
- Database encryption
- Encrypting large amounts of stored data
- SSL/TLS session data encryption

**Exam clue: Same key for encryption and decryption - Symmetric Encryption**

### **Asymmetric Encryption**

**Asymmetric Encryption** uses a **key pair**, consisting of two mathematically related keys.
- **Public Key** - Can be shared with others.
- **Private Key** - Must be kept secret.

Data encrypted using one key can be decrypted using its corresponding key.

Characteristics:
- Uses **two different but related keys**.
- Supports secure communication and identity verification.
- Can be used for **digital signatures**.
- Asymmetric cryptography is used during SSL/TLS connection establishment.

Common use cases:
- Secure email communication
- Digital signatures
- Identity verification
- Establishing secure SSL/TLS sessions

**Exam clue: Public/private key pair or digital signatures - Asymmetric Cryptography**

### **Symmetric vs Asymmetric Encryption**

| Feature                       | Symmetric Encryption             | Asymmetric Encryption                                   |
| ----------------------------- | -------------------------------- | ------------------------------------------------------- |
| **Keys**                      | One shared key                   | Public/private key pair                                 |
| **Encryption and Decryption** | Same key                         | Corresponding keys                                      |
| **Performance**               | Faster and more efficient        | Generally slower                                        |
| **Primary Use Case**          | Encrypting large amounts of data | Secure communication and digital signatures             |
| **Example**                   | Disk and database encryption     | Digital signatures and SSL/TLS connection establishment |

**Important distinction:** SSL/TLS uses asymmetric cryptography during secure connection establishment, while symmetric encryption is used to protect the application data transmitted during the session.

## **2.4 AWS Key Management Service (AWS KMS)**

**AWS Key Management Service (AWS KMS)** is a managed AWS service for creating and controlling cryptographic keys used to protect data.

Key characteristics:
- Supports **symmetric encryption keys**.
- Supports **asymmetric encryption keys**.
- Helps manage encryption keys used to secure AWS data.
- Commonly associated with **encryption at rest**.

For Cloud Practitioner, the key concept is recognizing that **AWS KMS provides managed encryption key management**, rather than requiring customers to build their own key management infrastructure.

## **2.5 Exam Focus**

### **Key Definitions**

- **Data at Rest** - Data stored on disks, databases, or storage services.
- **Data in Transit** - Data transferred across a network.
- **Encryption** - Converts plaintext into unreadable ciphertext.
- **Decryption** - Converts ciphertext back into readable plaintext.
- **Encryption Key** - Cryptographic key used during encryption.

### **Encryption Distinctions**

- **Same key for encryption and decryption - Symmetric Encryption**
- **Public/private key pair - Asymmetric Encryption**
- **Fast encryption of large amounts of data - Symmetric Encryption**
- **Digital signatures and identity verification - Asymmetric Cryptography**
- **Encrypt application data during SSL/TLS communication - Symmetric Encryption**
- **Establish secure SSL/TLS connections - Asymmetric Cryptography**
- **Manage encryption keys in AWS - AWS KMS**
- **AWS service supporting symmetric and asymmetric keys - AWS KMS**

**Remember:** AWS KMS manages encryption keys, while SSL/TLS protects data transmitted over secure network connections.

# 3 - AWS KMS

## **3.1 AWS Key Management Service (AWS KMS)**

**AWS Key Management Service (AWS KMS)** is a managed AWS service used for **data encryption and encryption key management**.

Key characteristics:
- Creates and manages cryptographic keys used to encrypt and decrypt data.
- Supports both **symmetric and asymmetric encryption keys**.
- Supports multiple encryption algorithms, including:
    - **Advanced Encryption Standard (AES)**
    - **Elliptic Curve Cryptography (ECC)**
- Supports different encryption key sizes.
- Integrates with many AWS services to protect stored data.

**Primary use case:** Managing encryption keys for **data encryption at rest**.

## **3.2 AWS KMS Integration with AWS Services**

AWS KMS integrates with various AWS services that support encryption.

| AWS Service         | Encryption Use Case                  |
| ------------------- | ------------------------------------ |
| **Amazon EBS**      | Encrypt EBS volumes                  |
| **Amazon S3**       | Encrypt objects stored in S3 buckets |
| **Amazon RDS**      | Encrypt database storage             |
| **Amazon EFS**      | Encrypt file system data             |
| **Amazon Redshift** | Encrypt data warehouse storage       |

These integrations allow AWS services to use **KMS keys** for encryption without requiring customers to build their own key management infrastructure.

**Exam clue: Centrally manage encryption keys for AWS storage and database services - AWS KMS**

## **3.3 AWS KMS Access Control and Key Sharing**

### **IAM Permissions**

Access to AWS KMS is controlled through **AWS Identity and Access Management (IAM)** and KMS key permissions.
- Users and AWS services require appropriate permissions to use KMS keys.
- Permissions determine who can access and perform cryptographic operations using the keys.
- KMS keys can also be shared across AWS accounts by granting the required access permissions.

### **Cross-Account Key Sharing**

AWS KMS supports **cross-account access to encryption keys**.

**Example: Sharing an encrypted EBS snapshot**

1. An Amazon EBS volume is encrypted using a KMS key in **AWS Account A**.
2. Account A creates an encrypted snapshot of the EBS volume.
3. The snapshot is shared with **AWS Account B**.
4. Account B also requires permission to use the KMS key associated with the snapshot.

**Key concept:** Sharing encrypted data with another AWS account may also require sharing access to the **encryption key** used to protect that data.

## **3.4 Regional and Multi-Region KMS Keys**

### **Regional KMS Keys**

By default, **AWS KMS keys are Regional resources**.
- A KMS key is created within a specific **AWS Region**.
- The key is associated with that Region.
- Encrypted data moved to another Region may require appropriate key availability in the destination Region.

### **Multi-Region KMS Keys**

AWS KMS supports **multi-Region keys**, which allow related KMS keys to exist across multiple AWS Regions.
- Keys can be replicated to other AWS Regions.
- Useful when encrypted data needs to be accessed across Regions.
- Supports cross-Region encryption requirements.

Common use cases:
- **Disaster Recovery (DR)**
- Cross-Region backups
- Multi-Region applications

### **Regional vs Multi-Region KMS Keys**

| Feature              | Regional KMS Key                        | Multi-Region KMS Key                          |
| -------------------- | --------------------------------------- | --------------------------------------------- |
| **Scope**            | Single AWS Region                       | Related keys across multiple Regions          |
| **Replication**      | Not replicated as a multi-Region key    | Supports replication to other Regions         |
| **Primary Use Case** | Regional data encryption                | Cross-Region encryption requirements          |
| **Example**          | Encrypt an EBS volume within one Region | Support encrypted data backups across Regions |

**Exam clue: Encryption key replication across AWS Regions for disaster recovery - Multi-Region KMS Keys**

## **3.5 Exam Focus**

### **AWS KMS Fundamentals**

- **Managed encryption key service - AWS KMS**
- **Data encryption at rest - AWS KMS**
- **Symmetric and asymmetric key support - AWS KMS**
- **Encryption algorithms supported by KMS - AES and ECC**
- **Control access to KMS keys - IAM and KMS key permissions**

### **AWS KMS Integrations**

- **Encrypt EBS volumes - AWS KMS**
- **Encrypt S3 objects - AWS KMS**
- **Encrypt RDS databases - AWS KMS**
- **Encrypt EFS file systems - AWS KMS**
- **Encrypt Redshift storage - AWS KMS**

### **Important Exam Distinctions**

| Scenario                                                     | Correct Concept                  |
| ------------------------------------------------------------ | -------------------------------- |
| Centrally manage encryption keys across AWS services         | **AWS KMS**                      |
| Grant users or services access to encryption keys            | **IAM and KMS key permissions**  |
| Share encrypted data with another AWS account                | **Cross-account KMS key access** |
| Create an encryption key within a single AWS Region          | **Regional KMS Key**             |
| Replicate encryption keys across Regions                     | **Multi-Region KMS Key**         |
| Support cross-Region encrypted backups for disaster recovery | **Multi-Region KMS Keys**        |

**Remember:** AWS KMS manages encryption keys, integrates with AWS services, supports controlled cross-account access, and provides **multi-Region keys** for cross-Region encryption requirements.

# 4 - Amazon Certificate Manager (ACM)

## **4.1 AWS Certificate Manager (ACM)**

**AWS Certificate Manager (ACM)** is a managed AWS service used to provision and manage **SSL/TLS certificates** for securing network communication.

Key characteristics:
- Provides **public and private SSL/TLS certificates**.
- Certificates follow the **X.509 standard**.
- Helps secure **data in transit** using HTTPS and encrypted communication.
- Integrates with supported AWS services such as **Elastic Load Balancing, Amazon CloudFront, and Amazon API Gateway**.

**Primary use case:** Managing SSL/TLS certificates to secure communication between users and AWS-hosted applications.

## **4.2 Public vs Private Certificates**

ACM supports two main certificate types:

| Feature               | Public Certificate                  | Private Certificate                                  |
| --------------------- | ----------------------------------- | ---------------------------------------------------- |
| **Purpose**           | Secure public-facing applications   | Secure internal communication                        |
| **Use Case**          | Public websites and HTTPS endpoints | Communication between internal servers and services  |
| **Domain Validation** | Domain ownership must be verified   | Issued through a private certificate authority       |
| **Deployment**        | Supported AWS services              | Can be deployed on internal servers and applications |
| **Pricing**           | Public certificates are free        | Private CA incurs charges                            |

### **Public Certificates**

**Public SSL/TLS certificates** secure publicly accessible applications and websites.
- Require ownership or control of the requested **domain name**.
- ACM validates domain ownership before issuing the certificate.
- Can be deployed on supported AWS services, including:
    - **Application Load Balancer (ALB)**
    - **Amazon CloudFront**
    - **Amazon API Gateway**
    - **AWS Elastic Beanstalk** (through supported integrations)

**Important distinction:** ACM-issued public certificates are intended for supported AWS-integrated services and cannot be directly installed on EC2 instances in the arrangement described in this lesson.

### **Private Certificates**

**Private SSL/TLS certificates** are typically used to secure communication within an organization's infrastructure.
- Suitable for internal servers, services, and applications.
- Issued using a **Private Certificate Authority (CA)**.
- Provide greater deployment control than ACM-issued public certificates.
- Private certificate authorities incur additional charges.

**Exam clue: Secure communication between internal servers using private certificates - ACM Private Certificates**

## **4.3 Domain Validation for Public Certificates**

Before issuing a public certificate, ACM must verify that the requester controls the domain.

Two validation methods are discussed:

| Validation Method    | How It Works                                                          |
| -------------------- | --------------------------------------------------------------------- |
| **DNS Validation**   | Create the required DNS records to prove domain control               |
| **Email Validation** | Confirm domain ownership through an approved email validation process |

Once domain ownership is validated, ACM can issue the requested public certificate.

**Key concept:** Public SSL/TLS certificates require **domain validation** before issuance.

## **4.4 Wildcard SSL/TLS Certificates**

A **Wildcard Certificate** secures multiple subdomains under the same domain using a single certificate.

Example:
 - *.example.com`

This wildcard certificate can secure:
- `us.example.com`
- `uk.example.com`
- `app.example.com`

Characteristics:
- Uses an asterisk (`*`) as a wildcard.
- The wildcard appears at the beginning of the domain pattern.
- Allows one certificate to cover multiple subdomains at the same level.
- `*.example.com` does not automatically cover the root domain `example.com`.

**Exam clue: Secure multiple subdomains using one SSL/TLS certificate - Wildcard Certificate**

## **4.5 ACM Integration and HTTPS Communication**

ACM certificates can be used with supported AWS services to secure communication between clients and applications.

### **Example: Securing a Web Application**

1. A web application is deployed behind an **Application Load Balancer** or **Amazon CloudFront**.
2. The application owner requests a **public SSL/TLS certificate** through ACM.
3. ACM validates domain ownership and issues the certificate.
4. The certificate is associated with the supported AWS service.
5. Users can access the application over **HTTPS**, providing encrypted communication.

### **ACM vs AWS KMS**

| Feature                    | AWS Certificate Manager (ACM) | AWS KMS                                        |
| -------------------------- | ----------------------------- | ---------------------------------------------- |
| **Main Purpose**           | Manage SSL/TLS certificates   | Manage encryption keys                         |
| **Primary Security Focus** | Data in transit               | Data at rest                                   |
| **Typical Use Case**       | Secure HTTPS connections      | Encrypt EBS volumes, S3 objects, and databases |
| **Exam Keyword**           | SSL/TLS, HTTPS, certificates  | Encryption keys, key management                |

- **Exam distinction: HTTPS certificates - ACM**
- **Exam distinction: Encryption key management - AWS KMS**

## **4.6 Exam Focus**

### **ACM Fundamentals**

- **Manage SSL/TLS certificates - AWS Certificate Manager (ACM)**
- **Secure data in transit using HTTPS - SSL/TLS certificates**    
- **Digital certificate standard - X.509**
- **Secure public-facing websites - ACM Public Certificates**
- **Secure internal communication - Private Certificates**
- **Verify domain ownership - DNS or Email Validation**
- **Secure multiple subdomains - Wildcard Certificate**

### **Pricing and Deployment**

- **ACM public certificates - Free**
- **Private certificate authority - Additional charges**
- **Deploy public certificates on supported AWS services - ACM**
- **Public certificates for CloudFront, ALB, and API Gateway - ACM**
- **Direct installation of ACM-issued public certificates on EC2 - Not supported**

### **Important Exam Distinctions**

|Scenario|Correct Concept|
|---|---|
|Manage HTTPS certificates for an Application Load Balancer|**AWS Certificate Manager**|
|Secure a CloudFront distribution using SSL/TLS|**AWS Certificate Manager**|
|Secure communication between internal servers|**Private Certificates**|
|Prove domain ownership before certificate issuance|**DNS or Email Validation**|
|Secure `us.example.com` and `uk.example.com` using one certificate|**Wildcard Certificate**|
|Manage encryption keys for stored AWS data|**AWS KMS**|

**Remember:** **AWS Certificate Manager** manages SSL/TLS certificates for securing **data in transit**, while **AWS KMS** manages cryptographic keys commonly used for protecting **data at rest**.

# 5 - AWS Secrets Manager

## **5.1 AWS Secrets Manager**

**AWS Secrets Manager** is a managed AWS service used to **securely store, retrieve, and rotate sensitive credentials** used by applications and services.

Common types of secrets include:
- **Database credentials** - Usernames and passwords.
- **API Keys** - Keys used to access APIs.
- **Authentication Tokens** - Tokens used to authenticate applications and services.
- **Application Credentials** - Passwords or other sensitive information required to connect to services.

Key characteristics:
- Securely stores sensitive credentials.
- Allows applications to retrieve secrets at runtime using API calls.
- Supports **automatic secret rotation**.
- Encrypts stored secrets using **AWS Key Management Service (AWS KMS)**.
- Uses **IAM permissions** to control access to secrets.

**Primary use case:** Avoid hardcoding sensitive credentials in application code or configuration files.

## **5.2 Secure Storage and Retrieval of Secrets**

AWS Secrets Manager allows applications to retrieve credentials securely whenever they are needed.

### **How Secret Retrieval Works**

**Example: An application running on Amazon EC2 needs to connect to an Amazon RDS database.**
1. The application requests the database credentials using the **AWS Secrets Manager API**.
2. Secrets Manager checks whether the application has the required **IAM permissions**.
3. If authorized, Secrets Manager returns the requested secret.
4. The application uses the credentials to connect to the database.

The application can retrieve credentials directly into memory without storing them permanently on disk.

### **Benefits**

- **No Hardcoded Credentials** - Sensitive credentials are not embedded in application code.
- **Centralized Secret Management** - Credentials are stored and managed in one service.
- **Secure Retrieval** - Applications retrieve secrets through authorized API requests.
- **Simplified Credential Updates** - Applications can retrieve updated credentials without changing hardcoded values.

**Exam clue: Securely retrieve database passwords at runtime without hardcoding credentials - AWS Secrets Manager**

## **5.3 Automatic Secret Rotation**

**Secret Rotation** is the process of periodically changing credentials to improve security.

Without Secrets Manager, changing a password may require manually updating both:
- The password in the target database or service.  
- The password stored in the application's code or configuration.

AWS Secrets Manager simplifies this process through **automatic secret rotation**.

### **Rotation for Supported AWS Databases**

Secrets Manager integrates with supported AWS database services.
- Can automatically rotate database credentials at configured intervals.
- Updates the password in the target database.
- Stores the updated credentials in Secrets Manager.
- Applications retrieve the latest secret when needed.

**Example:** A database password is configured to rotate every three months. Secrets Manager updates the database password and the stored secret without requiring the application to maintain a hardcoded password.

### **Rotation Using AWS Lambda**

For third-party applications or services that do not have built-in rotation integration, Secrets Manager can use **AWS Lambda**.
- A Lambda function performs the required password or credential changes.
- The updated secret is stored in Secrets Manager.
- Applications continue retrieving the current secret through the same API.

### **Secret Rotation Methods**

| Method                        | Use Case                                                      |
| ----------------------------- | ------------------------------------------------------------- |
| **Managed Database Rotation** | Automatically rotate credentials for supported AWS databases  |
| **AWS Lambda Rotation**       | Rotate secrets for third-party applications or other services |

**Exam clue: Automatically and periodically rotate database passwords - AWS Secrets Manager**

## **5.4 Secret Encryption and Access Control**

AWS Secrets Manager protects stored credentials using encryption and access permissions.

### **Encryption with AWS KMS**

- Secrets are encrypted using **AWS KMS**.
- Protects sensitive credentials stored in Secrets Manager.
- AWS KMS provides encryption key management.

### **Access Control with IAM**

- Access to secrets is controlled using **AWS Identity and Access Management (IAM)**.
- Users and AWS services must have appropriate permissions to retrieve secrets.
- Applications running on EC2 can use **IAM roles** to access authorized secrets.

### **AWS Secrets Manager vs AWS KMS**

|Feature|AWS Secrets Manager|AWS KMS|
|---|---|---|
|**Main Purpose**|Store, retrieve, and rotate secrets|Manage encryption keys|
|**Data Managed**|Passwords, API keys, tokens|Cryptographic keys|
|**Automatic Rotation**|Supports automatic credential rotation|Not responsible for rotating application passwords|
|**Relationship**|Uses KMS to encrypt secrets|Provides encryption key management|

- **Exam distinction: Application credentials and password rotation - AWS Secrets Manager**
- **Exam distinction: Encryption key management - AWS KMS**

## **5.5 Exam Focus**

### **AWS Secrets Manager Fundamentals**

- **Securely store application credentials - AWS Secrets Manager**
- **Retrieve database passwords at runtime - AWS Secrets Manager**
- **Avoid hardcoding credentials - AWS Secrets Manager**
- **Automatically rotate database passwords - AWS Secrets Manager**
- **Rotate third-party application credentials - AWS Secrets Manager with AWS Lambda**
- **Encrypt stored secrets - AWS KMS**
- **Control access to secrets - IAM permissions**
- **Allow EC2 applications to access secrets securely - IAM Roles**

### **Important Exam Distinctions**

| Scenario                                                       | Correct Service                      |
| -------------------------------------------------------------- | ------------------------------------ |
| Store database passwords and API keys securely                 | **AWS Secrets Manager**              |
| Retrieve application credentials dynamically through API calls | **AWS Secrets Manager**              |
| Automatically rotate database passwords at regular intervals   | **AWS Secrets Manager**              |
| Rotate credentials for third-party services using custom logic | **AWS Secrets Manager + AWS Lambda** |
| Encrypt secrets stored in Secrets Manager                      | **AWS KMS**                          |
| Control which applications can retrieve secrets                | **AWS IAM**                          |
| Centrally manage cryptographic encryption keys                 | **AWS KMS**                          |

**Remember:** **AWS Secrets Manager** manages sensitive application credentials and supports **automatic secret rotation**, while **AWS KMS** provides the encryption key management used to protect those secrets.

# 6 - Amazon Macie

## **6.1 Amazon Macie**

**Amazon Macie** is a fully managed **data security service** that helps discover and identify sensitive data stored in **Amazon S3**.

Key characteristics:
- Identifies **sensitive data** and **Personally Identifiable Information (PII)** in S3 buckets.
- Uses **machine learning (ML)** and **pattern matching** to discover sensitive information.
- Supports custom logic for identifying organization-specific sensitive data.
- Helps identify S3 buckets that are publicly accessible or shared with other AWS accounts.
- Integrates with **Amazon EventBridge** to enable notifications and automated security workflows.

**Primary use case:** Discover sensitive information in Amazon S3 and identify potential data exposure risks.

## **6.2 Sensitive Data Discovery**

Amazon S3 can store large volumes of data from multiple sources, including sensitive customer information.

**Amazon Macie** helps organizations identify sensitive data that may require additional protection.

### **Personally Identifiable Information (PII)**

**PII** refers to information that can identify an individual.

Examples include:
- Names
- Phone numbers
- Credit card information

Organizations must protect this information to meet applicable **data security and compliance requirements**.

### **How Amazon Macie Identifies Sensitive Data**

Macie uses several techniques to discover sensitive information:
- **Machine Learning** - Helps identify sensitive information in stored data.
- **Pattern Matching** - Detects recognizable data formats and patterns.
- **Custom Detection Logic** - Allows organizations to define additional sensitive data patterns.

Macie is designed to discover sensitive information at scale across S3 buckets.

**Exam clue: Automatically discover PII or sensitive customer information stored in S3 - Amazon Macie**

## **6.3 S3 Bucket Exposure and Security**

Amazon S3 buckets may be configured to allow access from:
- Other AWS accounts
- Public internet users

Improper access configurations can expose sensitive information.

**Amazon Macie** helps identify:
- S3 buckets configured for **public access**.
- S3 buckets accessible by **other AWS accounts**.
- Sensitive information that may require additional protection.

This helps security teams identify potential data exposure risks.

**Important distinction:** Amazon Macie identifies sensitive data and security risks. It does not automatically secure or restrict access to every identified object.

## **6.4 Amazon Macie Integration with EventBridge**

Amazon Macie can integrate with **Amazon EventBridge** to support automated security notifications and response workflows.

### **Example: Sensitive Data Detection and Notification**

1. **Amazon Macie** scans data stored in Amazon S3.
2. Macie identifies sensitive information, such as PII.
3. A security finding is sent to **Amazon EventBridge**.
4. EventBridge triggers an **AWS Lambda** function.
5. Lambda sends a notification to an external system, such as Slack.
6. The security team reviews the finding and takes appropriate action to protect the data.

### **Service Responsibilities**

| AWS Service            | Responsibility                                                     |
| ---------------------- | ------------------------------------------------------------------ |
| **Amazon Macie**       | Discover sensitive information and identify S3 data security risks |
| **Amazon EventBridge** | Route security events to configured targets                        |
| **AWS Lambda**         | Execute automated actions or integrations                          |
| **Amazon S3**          | Store objects and data being analyzed                              |

**Key concept:** Amazon Macie performs **sensitive data discovery**, while EventBridge and Lambda can support automated responses to its findings.

## **6.5 Exam Focus**

### **Amazon Macie Fundamentals**

- **Discover sensitive data in Amazon S3 - Amazon Macie**
- **Identify Personally Identifiable Information (PII) - Amazon Macie**
- **Detect names, phone numbers, and credit card information in S3 - Amazon Macie**
- **Identify publicly accessible S3 buckets - Amazon Macie**
- **Identify S3 buckets shared with other AWS accounts - Amazon Macie**
- **Sensitive data discovery using machine learning and pattern matching - Amazon Macie**
- **Custom sensitive data detection - Amazon Macie**

### **Security Notifications and Automation**

- **Route Macie security findings - Amazon EventBridge**
- **Trigger automated actions based on security findings - AWS Lambda**
- **Notify security teams about detected sensitive data - EventBridge and Lambda**

### **Important Exam Distinctions**

| Scenario                                                | Correct Service         |
| ------------------------------------------------------- | ----------------------- |
| Discover PII stored in S3 buckets                       | **Amazon Macie**        |
| Identify sensitive credit card information in S3        | **Amazon Macie**        |
| Identify S3 buckets with public or cross-account access | **Amazon Macie**        |
| Route sensitive data findings to an automated workflow  | **Amazon EventBridge**  |
| Execute custom notification or response logic           | **AWS Lambda**          |
| Manage encryption keys for protecting stored data       | **AWS KMS**             |
| Securely store and rotate application credentials       | **AWS Secrets Manager** |

**Remember:** **Amazon Macie** focuses on **sensitive data discovery and S3 data security**, particularly identifying **PII** and potential data exposure risks.

# 7 - AWS WAF - Web Application Firewall

## **7.1 AWS WAF (Web Application Firewall)**

**AWS WAF (Web Application Firewall)** is a security service that protects web applications from common **web exploits and application-layer attacks**.

Key characteristics:
- Operates at **Layer 7 (Application Layer)** of the OSI model.
- Protects applications from common attacks such as:
    - **SQL Injection (SQLi)**
    - **Cross-Site Scripting (XSS)**
    - Malicious IP addresses
    - Malicious bots
- Allows filtering of incoming **HTTP/HTTPS requests**.
- Supports geographic restrictions, rate-based rules, and CAPTCHA challenges.
- Can be integrated with supported AWS services.

**Primary use case:** Protect web applications from common **Layer 7 security threats**.

## **7.2 AWS WAF Integrations**

AWS WAF can be associated with several AWS services to protect web applications and APIs.

| AWS Service                         | Protection Use Case                                            |
| ----------------------------------- | -------------------------------------------------------------- |
| **Amazon CloudFront**               | Protect applications and websites delivered through CloudFront |
| **Application Load Balancer (ALB)** | Protect web applications behind an ALB                         |
| **Amazon API Gateway**              | Protect APIs from malicious HTTP requests                      |
| **AWS AppSync**                     | Protect GraphQL APIs from web application attacks              |

**Exam clue: Protect an application behind CloudFront, ALB, or API Gateway from SQL injection and XSS - AWS WAF**

## **7.3 AWS WAF Web ACLs and Security Rules**

AWS WAF uses **Web Access Control Lists (Web ACLs)** to define rules for inspecting and controlling incoming web traffic.

A Web ACL contains rules that determine whether requests should be allowed, blocked, or challenged.

### **Common AWS WAF Rules**

| Rule Type                           | Purpose                                                     |
| ----------------------------------- | ----------------------------------------------------------- |
| **IP-Based Rules**                  | Allow or block specific IP addresses                        |
| **HTTP Request Filtering**          | Inspect request headers and bodies                          |
| **SQL Injection Protection**        | Detect common SQL injection patterns                        |
| **Cross-Site Scripting Protection** | Detect common XSS attack patterns                           |
| **Geographic Restrictions**         | Restrict requests originating from specific countries       |
| **Rate-Based Rules**                | Limit requests from clients exceeding configured thresholds |
| **Bot Protection**                  | Identify and manage malicious bot traffic                   |
| **CAPTCHA / Challenge**             | Verify requests to reduce automated attacks                 |

### **Rate-Based Rules**

**Rate-Based Rules** help protect applications from clients sending excessive requests.

Example:
- A client repeatedly calls an application API.
- The number of requests exceeds a configured threshold.
- AWS WAF can block or otherwise handle the excessive requests.

This helps reduce malicious automated traffic and application abuse.

### **CAPTCHA and Challenge**

AWS WAF supports **CAPTCHA** and **Challenge** actions to help distinguish legitimate requests from automated bot traffic.

These controls can provide additional protection against malicious bots.

## **7.4 AWS WAF and HTTP 403**

When AWS WAF blocks a request using its default block response, it returns:

**HTTP 403 - Forbidden**

This indicates that the request has been denied.

**Exam clue: Web application request blocked with HTTP 403 - AWS WAF**

## **7.5 AWS WAF vs Other Network Security Services**

AWS provides different security services for different layers of infrastructure protection.

| Security Service         | Main Purpose                                               | Security Layer                  |
| ------------------------ | ---------------------------------------------------------- | ------------------------------- |
| **AWS WAF**              | Protect against web application attacks                    | Layer 7 (Application)           |
| **Security Groups**      | Control inbound and outbound traffic at the instance level | Network traffic control         |
| **Network ACLs (NACLs)** | Control inbound and outbound traffic at the subnet level   | Network traffic control         |
| **AWS Network Firewall** | Provide network-level traffic filtering and protection     | Network infrastructure          |
| **AWS Firewall Manager** | Centrally manage firewall policies across AWS resources    | Centralized security management |

### **Important Distinctions**

**AWS WAF**

- Focuses on **HTTP/HTTPS application traffic**.
- Protects against SQL injection, XSS, and malicious web requests.

**Security Groups and NACLs**

- Control network traffic based on rules involving IP addresses, ports, and protocols.
- Do not provide the same application-layer inspection as AWS WAF.

**AWS Network Firewall**

- Provides network-level security filtering.
- Used for more advanced network traffic protection.

**AWS Firewall Manager**

- Provides centralized management of firewall and security policies.

- **Exam distinction: Protect against Layer 7 web attacks - AWS WAF**
- **Exam distinction: Centrally manage firewall policies - AWS Firewall Manager**

## **7.6 Exam Focus**

### **AWS WAF Fundamentals**

- **Web Application Firewall - AWS WAF**
- **Protect against Layer 7 attacks - AWS WAF**
- **Prevent SQL injection and cross-site scripting - AWS WAF**
- **Define web traffic filtering rules - Web ACL**
- **Block malicious IP addresses - AWS WAF**
- **Restrict requests by geographic location - AWS WAF**
- **Limit excessive client requests - Rate-Based Rules**
- **Reduce automated bot attacks - CAPTCHA / Challenge**
- **Default response for blocked requests - HTTP 403 Forbidden**

### **AWS WAF Integrations**

- **Protect web applications behind an ALB - AWS WAF**
- **Protect applications delivered through CloudFront - AWS WAF**
- **Protect APIs exposed through API Gateway - AWS WAF**
- **Protect GraphQL APIs through AppSync - AWS WAF**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Protect a website from SQL injection and XSS|**AWS WAF**|
|Filter requests based on HTTP headers or request bodies|**AWS WAF**|
|Block incoming web traffic from specific countries|**AWS WAF**|
|Limit excessive API requests from a client|**AWS WAF Rate-Based Rules**|
|Protect web applications from malicious bots|**AWS WAF**|
|Control network traffic at the instance level|**Security Groups**|
|Control network traffic at the subnet level|**Network ACLs**|
|Apply advanced network-level traffic filtering|**AWS Network Firewall**|
|Centrally manage firewall policies|**AWS Firewall Manager**|

**Remember:** **AWS WAF** protects web applications at **Layer 7**, using **Web ACLs** to filter malicious HTTP/HTTPS requests. Its most important exam associations are **SQL Injection, XSS, IP filtering, geographic restrictions, and rate-based rules**.

# 8 - AWS Shield

## **8.1 AWS Shield**

**AWS Shield** is a managed AWS security service that protects applications and infrastructure from **Distributed Denial of Service (DDoS) attacks**.

Key characteristics:
- Provides protection against **Layer 3 (Network)** and **Layer 4 (Transport)** DDoS attacks.
- Helps maintain application availability during malicious traffic attacks.
- Protects supported AWS resources and applications.
- Offers two protection tiers:
    - **AWS Shield Standard**
    - **AWS Shield Advanced**

**Primary use case:** Protect AWS applications and infrastructure from DDoS attacks that attempt to disrupt service availability.

## **8.2 DoS and DDoS Attacks**

### **Denial of Service (DoS)**

A **Denial of Service (DoS)** attack attempts to make an application or service unavailable to legitimate users by overwhelming its resources.

The attacker's objective is typically to **disrupt availability**, rather than steal credentials or sensitive data.

### **Distributed Denial of Service (DDoS)**

A **Distributed Denial of Service (DDoS)** attack uses multiple distributed systems or bots to generate malicious traffic against a target.

Characteristics:
- Attack traffic originates from **multiple sources**.
- The application receives excessive requests or network traffic.
- Server resources become overwhelmed.
- Legitimate users may be unable to access the application.

### **SYN Flood Attack**

A **SYN Flood** is a common type of DDoS attack that targets the TCP connection process.
- Attackers initiate large numbers of TCP connections.
- They intentionally do not complete the **TCP three-way handshake**.
- The server maintains numerous **half-open TCP connections**.
- Server resources can become exhausted, preventing legitimate connections.

**Exam clue: Excessive half-open TCP connections caused by incomplete TCP handshakes - SYN Flood Attack**

## **8.3 AWS Shield Standard vs AWS Shield Advanced**

AWS Shield offers two levels of DDoS protection.

| Feature                  | AWS Shield Standard                             | AWS Shield Advanced                       |
| ------------------------ | ----------------------------------------------- | ----------------------------------------- |
| **Purpose**              | Basic DDoS protection                           | Enhanced DDoS protection                  |
| **Pricing**              | Free                                            | Additional charges                        |
| **Availability**         | Automatically enabled for AWS customers         | Requires subscription                     |
| **Protection**           | Common network and transport-layer DDoS attacks | More sophisticated DDoS attacks           |
| **24/7 Expert Support**  | No dedicated Shield Response Team access        | Access to **Shield Response Team (SRT)**  |
| **DDoS Cost Protection** | Not included                                    | Available for eligible DDoS-related costs |
| **Typical Use Case**     | General AWS workloads                           | Critical or large-scale applications      |

### **AWS Shield Standard**

**AWS Shield Standard** provides basic DDoS protection at no additional cost.
- Automatically available to **all AWS customers**.
- Protects against common DDoS attacks.
- Provides protection for supported AWS services, including:
    - **Amazon CloudFront**
    - **Elastic Load Balancing**
    - **Amazon Route 53**

**Exam clue: Free, automatically enabled DDoS protection - AWS Shield Standard**

### **AWS Shield Advanced**

**AWS Shield Advanced** is a paid service offering enhanced DDoS protection for critical applications.

Key benefits:
- Enhanced protection against sophisticated DDoS attacks.
- Additional protection for supported AWS resources.
- **24/7 access to the AWS Shield Response Team (SRT)**.
- **DDoS cost protection** for eligible additional expenses caused by attacks.

Typically used for:
- Business-critical applications
- Large-scale production workloads
- Applications requiring enhanced DDoS protection and expert assistance

**Exam clue: Advanced DDoS protection with 24/7 expert support - AWS Shield Advanced**

## **8.4 Shield Response Team and DDoS Cost Protection**

### **AWS Shield Response Team (SRT)**

**AWS Shield Advanced** provides access to the **Shield Response Team (SRT)**.
- Available **24/7**.
- Provides expert assistance during DDoS attacks.
- Helps customers investigate attacks and implement appropriate mitigation actions.
- Supports organizations in minimizing application disruption.

### **DDoS Cost Protection**

AWS Shield Advanced provides financial protection against certain additional costs caused by DDoS attacks.

**Example: EC2 Auto Scaling During a DDoS Attack**

1. An application uses **Amazon EC2 Auto Scaling** to handle increases in traffic.
2. A DDoS attack generates an unusually large volume of requests.
3. Auto Scaling launches additional EC2 instances to handle the increased traffic.
4. The organization incurs additional infrastructure costs.
5. **AWS Shield Advanced** can provide cost protection for eligible DDoS-related scaling expenses.

**Key concept:** Shield Advanced provides both enhanced DDoS protection and financial safeguards for eligible costs associated with DDoS attacks.

## **8.5 AWS Shield vs AWS WAF**

AWS Shield and AWS WAF protect applications against different security threats.

| Feature              | AWS Shield                        | AWS WAF                                     |
| -------------------- | --------------------------------- | ------------------------------------------- |
| **Primary Purpose**  | DDoS protection                   | Web application protection                  |
| **Security Layer**   | Primarily Layer 3 and Layer 4     | Layer 7 (Application)                       |
| **Protects Against** | SYN floods and other DDoS attacks | SQL injection, XSS, malicious HTTP requests |
| **Main Focus**       | Application availability          | Filtering malicious web requests            |
| **Key Exam Term**    | DDoS                              | Web application attacks                     |

Both services can be used together to provide protection at different layers.

- **Exam distinction: Protect against DDoS attacks - AWS Shield**
- **Exam distinction: Protect against SQL injection and XSS - AWS WAF**

## **8.6 Exam Focus**

### **DDoS Fundamentals**

- **Denial of Service attack - DoS**
- **Attack originating from multiple distributed sources - DDoS**
- **Overwhelm application resources to prevent legitimate access - DDoS**
- **Large numbers of half-open TCP connections - SYN Flood**
- **Protect against network and transport-layer DDoS attacks - AWS Shield**

### **AWS Shield Standard vs Advanced**

- **Free DDoS protection - AWS Shield Standard**
- **Automatically enabled for AWS customers - AWS Shield Standard**
- **Enhanced protection against sophisticated DDoS attacks - AWS Shield Advanced**
- **24/7 DDoS expert assistance - Shield Response Team (SRT)**
- **DDoS cost protection for eligible expenses - AWS Shield Advanced**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Protect AWS resources from DDoS attacks|**AWS Shield**|
|Free, automatically enabled DDoS protection|**AWS Shield Standard**|
|Protect critical applications from sophisticated DDoS attacks|**AWS Shield Advanced**|
|Receive 24/7 expert assistance during DDoS attacks|**AWS Shield Advanced (SRT)**|
|Obtain cost protection for eligible DDoS-related scaling expenses|**AWS Shield Advanced**|
|Protect against SQL injection and cross-site scripting|**AWS WAF**|
|Filter malicious HTTP/HTTPS requests|**AWS WAF**|

**Remember:** **AWS Shield** focuses on **DDoS protection**, with **Shield Standard** providing free basic protection and **Shield Advanced** offering enhanced protection, **24/7 SRT support**, and **DDoS cost protection**.

# 9 - Amazon Inspector

## **9.1 Amazon Inspector**

**Amazon Inspector** is an automated **vulnerability management service** that scans AWS compute workloads to identify security vulnerabilities and unintended network exposure.

Key characteristics:
- Automatically scans supported AWS compute environments for vulnerabilities.
- Identifies known software vulnerabilities using **Common Vulnerabilities and Exposures (CVEs)**.
- Detects potential **network exposure risks**.
- Identifies supported application code vulnerabilities.
- Generates security findings that can be integrated with **Amazon EventBridge** and **AWS Security Hub**.

**Primary use case:** Identify software vulnerabilities and security risks in AWS compute workloads.

## **9.2 Amazon Inspector Vulnerability Scanning**

Amazon Inspector supports vulnerability scanning across three main AWS compute environments.

| AWS Resource         | Scanning Purpose                                                    |
| -------------------- | ------------------------------------------------------------------- |
| **Amazon EC2**       | Identify software vulnerabilities and unintended network exposure   |
| **Container Images** | Identify vulnerabilities in software packages and dependencies      |
| **AWS Lambda**       | Identify vulnerable dependencies and supported code vulnerabilities |

### **Common Vulnerabilities and Exposures (CVE)**

**Common Vulnerabilities and Exposures (CVE)** is a standardized system for identifying publicly known cybersecurity vulnerabilities.

Examples include vulnerabilities found in:
- OpenSSL
- SSH-related software packages
- Cryptographic libraries
- Open-source software dependencies

Amazon Inspector uses known vulnerability information to identify affected workloads.

**Exam clue: Scan EC2 instances and container images for known CVEs - Amazon Inspector**

### **Network Exposure Detection**

Amazon Inspector can identify potential **network exposure risks** affecting EC2 instances.

For example:
- An EC2 instance has unnecessary ports exposed.
- Security group configurations allow potentially unintended network access.

These findings help security teams recognize and address possible security weaknesses.

### **Code Vulnerability Detection**

Amazon Inspector can also identify supported vulnerabilities in application code, particularly for **AWS Lambda functions**.

This helps organizations detect certain security weaknesses in their compute workloads.

## **9.3 Amazon Inspector Findings and Integrations**

After scanning AWS resources, Amazon Inspector generates **security findings** describing detected vulnerabilities.

These findings can be integrated with other AWS services.

|AWS Service|Purpose|
|---|---|
|**Amazon Inspector**|Scan workloads and identify vulnerabilities|
|**Amazon EventBridge**|Route findings to automated workflows|
|**AWS Security Hub**|Aggregate and centrally manage security findings|

### **Automated Security Workflows**

**Amazon EventBridge** can be used to trigger automated actions when Inspector generates findings.

Example:
1. **Amazon Inspector** scans an EC2 instance.
2. Inspector detects a known software vulnerability.
3. A security finding is sent to **Amazon EventBridge**.
4. EventBridge triggers a configured automated response.

### **Centralized Security Findings**

**AWS Security Hub** can consolidate Inspector findings with other AWS security findings.
- Provides centralized security visibility.
- Aggregates findings from multiple security services.
- Supports security monitoring across one or multiple AWS accounts.

- **Exam distinction: Detect vulnerabilities - Amazon Inspector**
- **Exam distinction: Centralize security findings - AWS Security Hub**

## **9.4 Amazon Inspector vs Related Security Services**

| AWS Service            | Main Purpose                                           | Exam Clue                        |
| ---------------------- | ------------------------------------------------------ | -------------------------------- |
| **Amazon Inspector**   | Identify software vulnerabilities and network exposure | Vulnerability scanning           |
| **Amazon GuardDuty**   | Detect suspicious activity and potential threats       | Intelligent threat detection     |
| **AWS Security Hub**   | Aggregate security findings from multiple sources      | Centralized security findings    |
| **Amazon EventBridge** | Route events to automated workflows                    | Event-driven security automation |

### **Important Distinctions**

**Amazon Inspector**

- Focuses on identifying **known vulnerabilities** in supported compute workloads.
- Helps identify workloads requiring security remediation.

**Amazon GuardDuty**

- Focuses on detecting **suspicious or malicious activity** within AWS environments.

**AWS Security Hub**

- Consolidates security findings generated by services such as Inspector and GuardDuty.

**Key distinction:** Inspector identifies vulnerabilities that could be exploited, while GuardDuty detects suspicious activities and potential threats.

## **9.5 Exam Focus**

### **Amazon Inspector Fundamentals**

- **Automated vulnerability scanning - Amazon Inspector**
- **Scan EC2 instances for software vulnerabilities - Amazon Inspector**
- **Scan container images for vulnerable packages - Amazon Inspector**
- **Scan Lambda functions for vulnerabilities - Amazon Inspector**
- **Publicly known security vulnerabilities - Common Vulnerabilities and Exposures (CVE)**
- **Identify unintended EC2 network exposure - Amazon Inspector**
- **Identify supported application code vulnerabilities - Amazon Inspector**

### **Security Findings and Integrations**

- **Generate vulnerability findings - Amazon Inspector**
- **Route findings for automated security actions - Amazon EventBridge**
- **Centralize findings across security services - AWS Security Hub**

### **Important Exam Distinctions**

| Scenario                                                   | Correct Service        |
| ---------------------------------------------------------- | ---------------------- |
| Identify known vulnerabilities in EC2 instances            | **Amazon Inspector**   |
| Scan container images for vulnerable software dependencies | **Amazon Inspector**   |
| Detect vulnerabilities in AWS Lambda functions             | **Amazon Inspector**   |
| Identify unintended network exposure on EC2 instances      | **Amazon Inspector**   |
| Detect suspicious or malicious activity in AWS             | **Amazon GuardDuty**   |
| Consolidate vulnerability findings from multiple sources   | **AWS Security Hub**   |
| Trigger automated actions based on vulnerability findings  | **Amazon EventBridge** |

**Remember:** **Amazon Inspector** focuses on **vulnerability scanning** across **EC2 instances, container images, and Lambda functions**, helping identify known **CVEs**, network exposure risks, and supported code vulnerabilities.

# 10 - Amazon GuardDuty

## **10.1 Amazon GuardDuty**

**Amazon GuardDuty** is a managed **intelligent threat detection service** that continuously monitors AWS environments for suspicious activities and potential security threats.

Key characteristics:
- Uses **machine learning (ML)** and **threat intelligence** to detect malicious activities.
- Analyzes information from multiple AWS data sources.
- Identifies sophisticated attacks and unusual behavior.
- Classifies security findings by **severity**.
- Can be enabled easily within an AWS account.
- Integrates with **Amazon EventBridge** and **AWS Security Hub** for security monitoring and response.

**Primary use case:** Automatically detect suspicious or malicious activities in AWS using machine learning and threat intelligence.

## **10.2 Threat Detection with Amazon GuardDuty**

Amazon GuardDuty identifies potential security threats by analyzing activity within an AWS environment.

### **Examples of Threats Detected**

| Threat                          | Description                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| **Compromised EC2 Instances**   | Detect suspicious activities indicating that an EC2 instance may have been compromised |
| **Cryptocurrency Mining**       | Identify unauthorized cryptocurrency mining activity                                   |
| **Data Exfiltration**           | Detect suspicious attempts to transfer sensitive data outside the AWS environment      |
| **DNS-Based Data Exfiltration** | Identify malicious data transfers hidden within DNS queries                            |
| **Anomalous Activity**          | Detect unusual behavior that may indicate a security threat                            |

### **Data Exfiltration**

**Data Exfiltration** refers to the unauthorized transfer of data from a system to an external destination.

For example:
- A compromised EC2 instance sends DNS queries to an external destination.
- The attacker embeds sensitive information within the DNS traffic.
- Because DNS traffic is commonly permitted, this activity may be difficult to detect using traditional security controls.
- **Amazon GuardDuty** can identify suspicious patterns using machine learning and threat intelligence.

**Exam clue: Detect cryptocurrency mining or suspicious data exfiltration from EC2 - Amazon GuardDuty**

## **10.3 Amazon GuardDuty Data Sources**

Amazon GuardDuty analyzes activity from multiple AWS data sources to identify potential threats.

| Data Source             | Information Analyzed                             |
| ----------------------- | ------------------------------------------------ |
| **AWS CloudTrail Logs** | AWS account activity and API operations          |
| **VPC Flow Logs**       | Network traffic information within Amazon VPC    |
| **DNS Query Logs**      | DNS query activity associated with AWS workloads |

### **How GuardDuty Detects Threats**

1. GuardDuty analyzes activity information from supported AWS data sources.
2. It applies **machine learning models** and **threat intelligence**.
3. Suspicious or malicious activities are identified.
4. GuardDuty generates security findings.
5. Findings are categorized based on their severity.
6. Findings can be reviewed or forwarded to other security services.

**Key concept:** GuardDuty correlates information from multiple AWS sources to identify threats that may be difficult to detect individually.

## **10.4 GuardDuty Security Findings and Severity**

Amazon GuardDuty generates **security findings** when potential threats are detected.

Findings are classified into severity levels:

|Severity|Meaning|
|---|---|
|**Low**|Lower-severity suspicious activity|
|**Medium**|Potential security threats requiring investigation|
|**High**|Serious threats requiring urgent attention|

Security teams can use severity classifications to prioritize investigations and responses.

### **Findings and Integrations**

| AWS Service            | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| **Amazon GuardDuty**   | Detect threats and generate security findings                         |
| **Amazon EventBridge** | Route findings to automated workflows                                 |
| **AWS Security Hub**   | Consolidate security findings from multiple AWS services              |
| **Third-Party SIEM**   | Centralize and analyze security events in external security platforms |

**SIEM (Security Information and Event Management)** systems collect and analyze security information to support threat monitoring and incident management.

### **Example: Automated Security Notification**

1. **Amazon GuardDuty** identifies suspicious activity on an EC2 instance.
2. A security finding is generated with an assigned severity.
3. The finding is sent to **Amazon EventBridge**.
4. EventBridge triggers a configured security workflow.
5. The security team receives a notification and investigates the threat.

## **10.5 Amazon GuardDuty vs Related Security Services**

| AWS Service            | Main Purpose                                                              | Exam Clue                        |
| ---------------------- | ------------------------------------------------------------------------- | -------------------------------- |
| **Amazon GuardDuty**   | Detect suspicious activity using machine learning and threat intelligence | Intelligent threat detection     |
| **Amazon Inspector**   | Identify software vulnerabilities and network exposure                    | Vulnerability scanning           |
| **AWS Security Hub**   | Aggregate security findings from multiple sources                         | Centralized security findings    |
| **Amazon EventBridge** | Route security events to automated workflows                              | Event-driven security automation |

### **Important Distinctions**

**Amazon GuardDuty**

- Focuses on identifying **potential threats and malicious activities**.
- Analyzes AWS activity and network-related information.
- Uses machine learning and threat intelligence.

**Amazon Inspector**

- Focuses on identifying **known software vulnerabilities**.
- Scans EC2 instances, container images, and Lambda functions.

**AWS Security Hub**

- Provides centralized visibility into findings from multiple AWS security services.

- **Exam distinction: Detect suspicious or malicious activity - Amazon GuardDuty**
- **Exam distinction: Scan workloads for known vulnerabilities - Amazon Inspector**

## **10.6 Exam Focus**

### **Amazon GuardDuty Fundamentals**

- **Intelligent threat detection - Amazon GuardDuty**
- **Detect threats using machine learning - Amazon GuardDuty**
- **Analyze AWS activity for malicious behavior - Amazon GuardDuty**
- **Detect compromised EC2 instances - Amazon GuardDuty**
- **Detect unauthorized cryptocurrency mining - Amazon GuardDuty**
- **Detect suspicious data exfiltration - Amazon GuardDuty**
- **Detect malicious DNS activity - Amazon GuardDuty**

### **Data Sources and Findings**

- **Analyze AWS API activity - AWS CloudTrail**
- **Analyze VPC network traffic - VPC Flow Logs**
- **Analyze DNS query activity - DNS Query Logs**
- **Classify detected threats - Low, Medium, High severity**
- **Route security findings - Amazon EventBridge**
- **Centralize security findings - AWS Security Hub**
- **External security monitoring platform - SIEM**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Detect threats using machine learning and threat intelligence|**Amazon GuardDuty**|
|Identify suspicious cryptocurrency mining on an EC2 instance|**Amazon GuardDuty**|
|Detect unauthorized data exfiltration|**Amazon GuardDuty**|
|Analyze CloudTrail, VPC Flow Logs, and DNS activity for threats|**Amazon GuardDuty**|
|Scan EC2 instances for known software vulnerabilities|**Amazon Inspector**|
|Consolidate security findings from multiple AWS services|**AWS Security Hub**|
|Trigger automated workflows based on detected threats|**Amazon EventBridge**|

**Remember:** **Amazon GuardDuty** is an **intelligent threat detection service** that uses **machine learning and threat intelligence** to identify suspicious activities, compromised resources, and potential attacks across AWS environments.

# 11 - AWS Security Hub

## **11.1 AWS Security Hub**

**AWS Security Hub** is a centralized security management service that **aggregates, analyzes, and prioritizes security findings** across AWS accounts and services.

Key characteristics:
- Collects security findings from **multiple AWS services and accounts**.
- Integrates with **third-party security tools**.
- Provides centralized visibility into security threats and issues.
- Helps security teams **analyze security trends and prioritize findings** based on severity.
- Supports security assessments and recommended remediation actions.
- Integrates with **Amazon EventBridge** for automated security workflows.

**Primary use case:** Centrally collect and prioritize security findings across multiple AWS accounts and services.

## **11.2 Centralized Security Findings**

Organizations often operate multiple AWS accounts, each containing different resources and security services.

**AWS Security Hub** provides a centralized location where security teams can monitor findings across these environments.

### **Security Finding Sources**

Security Hub can collect findings from:
- **Amazon GuardDuty** - Suspicious activities and potential security threats.
- **Amazon Inspector** - Software vulnerabilities and network exposure risks.
- **Amazon Macie** - Sensitive data findings in Amazon S3.
- **Other AWS Security Services** - Additional security findings and assessments.
- **Third-Party Security Tools** - Findings from external security solutions.

Security Hub can also support custom integrations.

### **Security Analysis and Prioritization**

AWS Security Hub helps security teams:
- **Aggregate Findings** - Collect security issues from multiple sources.
- **Analyze Security Trends** - Identify patterns across AWS environments.
- **Prioritize Threats** - Focus on the most severe security issues first.
- **Review Security Posture** - Understand security risks across accounts and resources.

**Example:** A centralized security team manages multiple AWS accounts and needs a single dashboard to identify and prioritize security threats.

**Exam clue: Centralized visibility and prioritization of security findings across AWS accounts - AWS Security Hub**

## **11.3 AWS Security Hub and AWS Config**

**AWS Config** is used to record and assess the configurations of AWS resources.

AWS Config is a prerequisite for Security Hub's resource configuration assessments.
- **AWS Config** captures AWS resource configuration information.
- Security Hub uses this information to evaluate relevant security controls.
- Helps identify resource configurations that may violate security best practices.

### **AWS Security Hub vs AWS Config**

| Service              | Main Purpose                                                            |
| -------------------- | ----------------------------------------------------------------------- |
| **AWS Config**       | Record and assess AWS resource configurations                           |
| **AWS Security Hub** | Aggregate security findings and provide centralized security visibility |

**Key distinction:** AWS Config focuses on **resource configuration assessment**, while Security Hub focuses on **centralized security findings and prioritization**.

## **11.4 AWS Security Hub Integrations and Incident Response**

AWS Security Hub integrates with other services to support security monitoring and incident response.

| AWS Service            | Role                                                                 |
| ---------------------- | -------------------------------------------------------------------- |
| **Amazon GuardDuty**   | Generates threat detection findings                                  |
| **Amazon Inspector**   | Generates vulnerability findings                                     |
| **Amazon Macie**       | Generates sensitive data security findings                           |
| **Amazon EventBridge** | Routes security events to automated workflows                        |
| **Amazon Detective**   | Supports deeper investigation and root cause analysis                |
| **AWS Config**         | Provides resource configuration information for security assessments |

### **Example: Centralized Security Monitoring**

1. **Amazon GuardDuty** identifies suspicious activity in an AWS account.
2. The security finding is sent to **AWS Security Hub**.
3. Security Hub consolidates the finding with other security information.
4. The security team reviews and prioritizes the finding.
5. **Amazon EventBridge** can trigger an automated notification or response.
6. **Amazon Detective** can be used for deeper investigation and root cause analysis.

**Key concept:** Security Hub centralizes and prioritizes security findings, while other AWS services help detect threats, automate responses, or investigate incidents.

## **11.5 AWS Security Hub vs Related Security Services**

|AWS Service|Main Purpose|Exam Clue|
|---|---|---|
|**AWS Security Hub**|Centralize and prioritize security findings|Security findings aggregation|
|**Amazon GuardDuty**|Detect suspicious and malicious activities|Intelligent threat detection|
|**Amazon Inspector**|Identify software vulnerabilities|Vulnerability scanning|
|**Amazon Detective**|Investigate security incidents|Root cause analysis|
|**AWS Config**|Assess resource configurations|Configuration compliance|
|**Amazon EventBridge**|Route events and trigger workflows|Event-driven automation|

### **Important Distinctions**

**AWS Security Hub**
- Collects findings from multiple AWS security services.
- Provides centralized visibility across AWS accounts.
- Helps security teams prioritize security issues.

**Amazon GuardDuty**
- Detects suspicious activity using machine learning and threat intelligence.

**Amazon Inspector**
- Scans supported compute workloads for known vulnerabilities.

**Amazon Detective**
- Investigates security incidents and helps identify root causes.

- **Exam distinction: Detect threats - Amazon GuardDuty**
- **Exam distinction: Identify vulnerabilities - Amazon Inspector**
- **Exam distinction: Centralize security findings - AWS Security Hub**
- **Exam distinction: Investigate root causes - Amazon Detective**

## **11.6 Exam Focus**

### **AWS Security Hub Fundamentals**

- **Centralized security findings management - AWS Security Hub**
- **Aggregate findings across multiple AWS accounts - AWS Security Hub**
- **Prioritize security issues based on severity - AWS Security Hub**
- **Integrate AWS and third-party security findings - AWS Security Hub**
- **Analyze security trends across AWS environments - AWS Security Hub**
- **Record resource configurations for security assessments - AWS Config**
- **Route security events for automated responses - Amazon EventBridge**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Centrally monitor security findings across multiple AWS accounts|**AWS Security Hub**|
|Aggregate findings from GuardDuty, Inspector, and Macie|**AWS Security Hub**|
|Prioritize security issues based on severity|**AWS Security Hub**|
|Evaluate AWS resource configurations|**AWS Config**|
|Detect suspicious activity using machine learning|**Amazon GuardDuty**|
|Identify vulnerabilities in EC2 instances and container images|**Amazon Inspector**|
|Investigate the root cause of a security incident|**Amazon Detective**|
|Trigger automated workflows from security findings|**Amazon EventBridge**|

**Remember:** **AWS Security Hub** acts as a **centralized security findings hub**, collecting and prioritizing findings from AWS and third-party security services to help organizations monitor their security posture and respond to threats.

# 12 - Amazon Detective

## **12.1 Amazon Detective**

**Amazon Detective** is a managed AWS security service that helps **analyze, investigate, and identify the root causes of security incidents**.

Key characteristics:
- Uses **machine learning (ML)** and **graph technology** to investigate security issues.
- Correlates security information from multiple AWS data sources.
- Helps identify the **root cause** of suspicious or malicious activities.
- Analyzes relationships between users, AWS resources, and security events.
- Helps determine the **scope and potential impact** of a security incident.

**Primary use case:** Investigate security incidents and identify their root causes by correlating information across AWS resources and security findings.

## **12.2 Security Investigation and Root Cause Analysis**

Amazon Detective analyzes information from multiple AWS sources to build a correlated view of security activity.

### **Data Sources**

| Data Source              | Information Analyzed                                        |
| ------------------------ | ----------------------------------------------------------- |
| **Network Traffic Data** | Network communication and connections between resources     |
| **AWS Account Activity** | Account activity and actions performed using IAM identities |
| **Amazon GuardDuty**     | Suspicious activities and threat detection findings         |
| **AWS Security Hub**     | Aggregated security findings                                |
| **Amazon Macie**         | Sensitive data security findings                            |

### **Machine Learning and Graph Technology**

Amazon Detective uses:
- **Machine Learning** - Helps analyze security activity and identify relevant patterns.
- **Graph Technology** - Builds relationships between AWS resources, identities, and security events.
- **Data Correlation** - Combines information from multiple sources to support security investigations. 

These capabilities help security teams understand **how an incident occurred, which resources were involved, and its potential impact**.

**Exam clue: Investigate security incidents using machine learning and graph technology - Amazon Detective**

## **12.3 Example: Investigating a Compromised EC2 Instance**

Consider a scenario where **Amazon GuardDuty** detects suspicious activity involving an EC2 instance.

### **Investigation Process**

1. **Amazon GuardDuty** identifies an EC2 instance communicating with a known malicious IP address.
2. The suspicious activity is flagged as a security finding.
3. **Amazon Detective** analyzes the activity and related security information.
4. Detective investigates which **IAM credentials** were used to launch the EC2 instance.
5. It examines whether the same credentials were used to create or access other AWS resources.
6. The security team uses these relationships to investigate whether credentials were compromised and determine the potential impact.

### **Key Benefits**

- **Root Cause Analysis** - Helps identify how the security incident occurred.
- **Activity Correlation** - Connects related events across AWS resources.
- **Impact Analysis** - Helps determine which other resources may be affected.
- **Faster Investigation** - Reduces manual effort when analyzing multiple security data sources.

**Exam clue: Investigate whether compromised IAM credentials were used to access multiple AWS resources - Amazon Detective**

## **12.4 Amazon Detective vs Related Security Services**

| AWS Service          | Main Purpose                                            | Exam Clue                        |
| -------------------- | ------------------------------------------------------- | -------------------------------- |
| **Amazon Detective** | Investigate security incidents and identify root causes | Root cause analysis              |
| **Amazon GuardDuty** | Detect suspicious and malicious activities              | Intelligent threat detection     |
| **AWS Security Hub** | Aggregate and prioritize security findings              | Centralized security findings    |
| **Amazon Inspector** | Identify software vulnerabilities and network exposure  | Vulnerability scanning           |
| **Amazon Macie**     | Discover sensitive data in Amazon S3                    | PII and sensitive data discovery |

### **Important Distinctions**

**Amazon GuardDuty**

- Detects potential security threats and suspicious activities.
- Generates findings that may require further investigation.

**AWS Security Hub**

- Centralizes security findings from multiple AWS services.
- Helps security teams monitor and prioritize security issues.

**Amazon Detective**

- Performs deeper analysis of security incidents.
- Correlates information to help determine **root causes and potential impact**. 

- **Exam distinction: Detect suspicious activity - Amazon GuardDuty**
- **Exam distinction: Centralize security findings - AWS Security Hub**
- **Exam distinction: Investigate root causes - Amazon Detective**

## **12.5 Exam Focus**

### **Amazon Detective Fundamentals**

- **Security incident investigation - Amazon Detective**
- **Root cause analysis - Amazon Detective**
- **Correlate security events across AWS resources - Amazon Detective**
- **Analyze security incidents using graph technology - Amazon Detective**
- **Investigate suspicious IAM credential usage - Amazon Detective**
- **Determine the potential impact of security incidents - Amazon Detective**

### **Important Exam Distinctions**

| Scenario                                                                      | Correct Service      |
| ----------------------------------------------------------------------------- | -------------------- |
| Investigate the root cause of a compromised EC2 instance                      | **Amazon Detective** |
| Correlate network traffic and AWS account activity to investigate an incident | **Amazon Detective** |
| Investigate whether compromised credentials affected other resources          | **Amazon Detective** |
| Detect suspicious communication with malicious IP addresses                   | **Amazon GuardDuty** |
| Aggregate and prioritize security findings                                    | **AWS Security Hub** |
| Scan EC2 instances for known vulnerabilities                                  | **Amazon Inspector** |
| Discover sensitive information in S3 buckets                                  | **Amazon Macie**     |

**Remember:** **Amazon GuardDuty detects threats**, **AWS Security Hub centralizes findings**, and **Amazon Detective investigates root causes** using **machine learning and graph technology**.

# 13 - AWS Artifact

## **13.1 AWS Artifact**

**AWS Artifact** is a self-service AWS portal that provides centralized access to **security and compliance reports and agreements**.

Key characteristics:
- Provides access to AWS **security and compliance documentation**.
- Allows customers to **view and download compliance reports and agreements**.
- Includes reports demonstrating AWS compliance with various security standards and regulations.
- Provides access to certain compliance reports from **third-party sellers on AWS Marketplace**.
- Helps organizations review AWS compliance information for their own security and auditing requirements.

**Primary use case:** Access and download AWS security and compliance reports and agreements.

## **13.2 AWS Artifact Reports and Agreements**

AWS Artifact provides two main categories of compliance documentation.

| Category                    | Main Purpose                                            |
| --------------------------- | ------------------------------------------------------- |
| **AWS Artifact Reports**    | Access and download AWS security and compliance reports |
| **AWS Artifact Agreements** | Review and manage AWS compliance-related agreements     |

### **AWS Artifact Reports**

**AWS Artifact Reports** provides downloadable compliance reports related to AWS services.

Examples of compliance documentation include:
- **ISO** - International security and management standards.
- **HIPAA** - Healthcare data protection requirements.
- Other AWS security and regulatory compliance reports.

These reports help organizations understand AWS compliance with relevant industry standards.

### **AWS Artifact Agreements**

**AWS Artifact Agreements** provides access to compliance-related agreements between AWS and its customers.
- Allows customers to review applicable agreements.
- Supports management of compliance-related agreements.
- Helps organizations meet applicable regulatory and contractual requirements.

## **13.3 AWS Artifact and Compliance**

AWS maintains various security and compliance certifications and reports for its cloud services.

Organizations can use **AWS Artifact** to obtain documentation required for:
- **Security Audits** - Review AWS security and compliance reports.
- **Regulatory Compliance** - Access documentation related to applicable industry regulations.
- **Compliance Verification** - Review AWS certifications and compliance evidence.
- **Third-Party Assessments** - Access available compliance reports from AWS Marketplace sellers.

**Important distinction:** AWS Artifact provides **compliance documentation and agreements**. It does not automatically make customer workloads compliant with regulatory requirements.

## **13.4 Exam Focus**

### **AWS Artifact Fundamentals**

- **Access AWS security and compliance reports - AWS Artifact**
- **Download AWS compliance documentation - AWS Artifact Reports**
- **Review and manage compliance agreements - AWS Artifact Agreements**
- **Access ISO and HIPAA-related compliance documentation - AWS Artifact**
- **Access available third-party AWS Marketplace compliance reports - AWS Artifact**

### **Important Exam Distinctions**

|Scenario|Correct Service|
|---|---|
|Download AWS compliance reports for an audit|**AWS Artifact**|
|Access AWS ISO certification documentation|**AWS Artifact**|
|Review AWS HIPAA-related compliance documentation|**AWS Artifact**|
|Review compliance-related agreements with AWS|**AWS Artifact Agreements**|
|Obtain AWS security and compliance evidence|**AWS Artifact Reports**|
|Assess AWS resource configurations|**AWS Config**|
|Centralize security findings across AWS accounts|**AWS Security Hub**|

**Remember:** **AWS Artifact** is the centralized portal for accessing **AWS compliance reports, certifications, and agreements**. For exam questions mentioning **downloadable compliance reports, ISO documentation, HIPAA agreements, or audit evidence**, think **AWS Artifact**.

# 14 - Penetration Testing in AWS

## **14.1 Penetration Testing in AWS**

**Penetration Testing (Pen Testing)** is a security assessment technique used to identify vulnerabilities by simulating attacks against applications, systems, or infrastructure.

Common activities include:
- Attempting unauthorized access to applications or systems.
- Testing network-level security vulnerabilities.
- Identifying weaknesses in application security.
- Assessing potential data exposure risks.

AWS allows customers to perform **security assessments and penetration testing** on supported AWS resources, subject to AWS testing policies.

**Primary purpose:** Identify security vulnerabilities before malicious attackers can exploit them.

## **14.2 AWS Penetration Testing Policies**

Because AWS operates a **shared public cloud infrastructure**, penetration testing must follow AWS security policies.
- AWS permits customers to perform penetration testing on certain AWS services **without prior approval**.
- Some testing activities require **prior authorization from AWS**.
- Certain attack simulations are **prohibited** because they may disrupt AWS infrastructure or other customers.

### **Permitted Services Without Prior Approval**

AWS permits penetration testing on supported services without requesting prior authorization.

Examples mentioned in the lesson include:

| AWS Service                      | Example Testing Scope                                                |
| -------------------------------- | -------------------------------------------------------------------- |
| **Amazon EC2**                   | Assess security vulnerabilities in hosted instances and applications |
| **Amazon RDS**                   | Assess security of hosted database workloads                         |
| **Elastic Load Balancing (ELB)** | Test applications exposed through load balancers                     |
| **Amazon CloudFront**            | Assess security of applications delivered through CloudFront         |
| **NAT Gateway**                  | Test permitted network configurations and workloads                  |

**Important:** Permission to test a supported service does not mean every attack technique is allowed. Testing must remain within AWS's permitted scope.

## **14.3 Restricted and Prohibited Testing Activities**

Certain penetration testing activities require additional authorization or are not permitted.

|Testing Activity|Policy Described in the Lesson|
|---|---|
|**Standard penetration testing on permitted services**|No prior approval required|
|**Command and Control (C2) testing**|Requires prior AWS authorization|
|**DDoS attack simulations**|Not permitted as ordinary penetration testing|
|**Port flooding**|Prohibited|
|**DNS hijacking**|Prohibited|

### **Command and Control (C2) Testing**

**Command and Control (C2)** involves communication between an attacker-controlled system and a compromised host.
- Commonly associated with simulated cyberattacks.
- May be used during advanced security assessments.
- Requires appropriate authorization under AWS policies.

### **Prohibited Attack Simulations**

Activities such as **DDoS attacks, port flooding, and DNS hijacking** can potentially disrupt service availability.

These activities are not permitted as part of ordinary AWS penetration testing.

- **Exam distinction: Penetration testing on supported AWS services - Allowed without prior approval**
- **Exam distinction: Certain advanced attack simulations - Require authorization or are prohibited**

## **14.4 AWS Security Notifications During Testing**

AWS monitors its infrastructure for suspicious or potentially malicious activities.

If AWS detects unusual activity that may indicate an unauthorized attack:
- AWS may send a **security notification email** to the customer.
- The customer may be asked to confirm whether the activity was intentional.
- The customer should acknowledge and respond to the notification.
- Testing activities outside the permitted scope must follow the applicable AWS authorization process.

**Key concept:** Customers must ensure that penetration testing complies with **AWS security policies and permitted testing guidelines**.

## **14.5 Exam Focus**

### **Penetration Testing Fundamentals**

- **Simulated security attacks to identify vulnerabilities - Penetration Testing**
- **Penetration testing on supported AWS services - Permitted without prior approval**
- **Testing must follow AWS security policies - Customer responsibility**
- **Command and Control (C2) testing - Requires appropriate authorization**
- **DDoS and disruptive attack simulations - Restricted or prohibited**
- **AWS security notification - Customer should acknowledge and respond**

### **Important Exam Distinctions**

| Scenario                                                                     | Correct Concept                    |
| ---------------------------------------------------------------------------- | ---------------------------------- |
| Perform standard penetration testing on supported EC2 workloads              | **No prior AWS approval required** |
| Perform permitted security testing against applications on RDS or CloudFront | **No prior AWS approval required** |
| Conduct Command and Control (C2) security testing                            | **Prior authorization required**   |
| Perform unrestricted DDoS or port flooding attacks                           | **Not permitted**                  |
| Receive an AWS notification about suspicious testing activity                | **Acknowledge and respond to AWS** |
| Determine whether a security test is allowed                                 | **AWS Penetration Testing Policy** |

**Remember:** AWS allows **penetration testing on supported services without prior approval**, but certain advanced or disruptive testing activities require authorization or are prohibited. Always follow the applicable **AWS penetration testing policies**.

# 15 - Section Summary

## **15.1 AWS Security Services Summary**

|AWS Service|Main Purpose|Exam Clue|
|---|---|---|
|**AWS Certificate Manager (ACM)**|Manage public and private SSL/TLS certificates|HTTPS, SSL/TLS certificates|
|**AWS Security Hub**|Centralize security findings and alerts|Aggregate security findings|
|**AWS IAM**|Manage users, roles, and permissions|Access control|
|**Amazon GuardDuty**|Detect threats using machine learning and AWS activity logs|Intelligent threat detection|
|**Amazon Macie**|Identify sensitive data and PII in Amazon S3|Sensitive data discovery|
|**Amazon Inspector**|Detect vulnerabilities in EC2, container images, and Lambda|Vulnerability scanning|
|**AWS KMS**|Manage encryption keys|Managed encryption keys|
|**AWS CloudHSM**|Provide dedicated hardware for cryptographic key management|Dedicated key control|
|**AWS WAF**|Protect web applications against common Layer 7 attacks|SQL injection, XSS|
|**AWS Artifact**|Access security and compliance reports and agreements|Compliance documentation|
|**AWS Shield**|Protect infrastructure against DDoS attacks|DDoS protection|
|**AWS Secrets Manager**|Securely store, retrieve, and rotate credentials|Passwords, API keys, tokens|
|**AWS Network Firewall**|Provide network traffic inspection and intrusion prevention|Network-level protection|
|**AWS Firewall Manager**|Centrally manage firewall and security policies|Centralized firewall management|

## **15.2 Important Security Service Distinctions**

|Comparison|Key Difference|
|---|---|
|**AWS KMS vs AWS CloudHSM**|KMS provides managed encryption keys; CloudHSM provides dedicated cryptographic hardware with greater customer control|
|**AWS WAF vs AWS Shield**|WAF protects against Layer 7 web attacks; Shield protects against DDoS attacks|
|**Amazon GuardDuty vs Amazon Inspector**|GuardDuty detects suspicious activities; Inspector identifies software vulnerabilities|
|**Amazon GuardDuty vs AWS Security Hub**|GuardDuty detects threats; Security Hub centralizes security findings|
|**AWS Network Firewall vs AWS Firewall Manager**|Network Firewall protects network traffic; Firewall Manager centrally manages security policies|
|**AWS Certificate Manager vs AWS KMS**|ACM manages SSL/TLS certificates; KMS manages encryption keys|

## **15.3 Exam Focus**

### **Data and Identity Protection**

- **Manage AWS access and permissions - AWS IAM**
- **Manage encryption keys - AWS KMS**
- **Dedicated cryptographic hardware - AWS CloudHSM**
- **Manage SSL/TLS certificates - AWS Certificate Manager**
- **Store and rotate passwords, API keys, and tokens - AWS Secrets Manager**
- **Discover PII and sensitive data in S3 - Amazon Macie**

### **Infrastructure Protection**

- **Protect against SQL injection and XSS - AWS WAF**
- **Protect against DDoS attacks - AWS Shield**
- **Enhanced DDoS protection - AWS Shield Advanced**
- **Network intrusion detection and prevention - AWS Network Firewall**
- **Centrally manage firewall policies - AWS Firewall Manager**

### **Threat Detection and Compliance**

- **Intelligent threat detection using machine learning - Amazon GuardDuty**
- **Scan EC2, container images, and Lambda for vulnerabilities - Amazon Inspector**
- **Centralize security findings and alerts - AWS Security Hub**
- **Download security and compliance reports - AWS Artifact**

**Remember:** For the CLF-C02 exam, focus on identifying the **correct AWS security service based on the scenario**, particularly the differences between **WAF and Shield**, **GuardDuty and Inspector**, and **KMS and CloudHSM**.

# 16 - Quiz

## **16.1 Practice Question 1**

### **Original Question**

Which AWS service provides real-time threat detection specifically tailored to protect your AWS accounts, workloads, and data?

### **Choices**

A. AWS GuardDuty  
B. AWS WAF  
C. AWS Security Hub  
D. AWS Shield Advanced

### **Correct Answer**

**A. Amazon GuardDuty**

### **Why?**

**Amazon GuardDuty** is an intelligent threat detection service that uses **machine learning and threat intelligence** to identify suspicious or malicious activities.
- **AWS WAF** - Protects against web application attacks such as SQL injection and XSS.
- **AWS Security Hub** - Centralizes security findings from multiple services.
- **AWS Shield Advanced** - Provides enhanced protection against DDoS attacks.

**Key clue: Real-time intelligent threat detection - Amazon GuardDuty**

## **16.2 Practice Question 2**

### **Original Question**

Which service would you use to discover S3 buckets containing public or shared sensitive data?

### **Choices**

A. AWS Macie  
B. AWS Security Hub  
C. AWS Inspector  
D. AWS GuardDuty

### **Correct Answer**

**A. Amazon Macie**

### **Why?**

**Amazon Macie** identifies **sensitive data and Personally Identifiable Information (PII)** stored in Amazon S3.

It also helps identify S3 buckets that are publicly accessible or shared with other AWS accounts.
- **AWS Security Hub** - Aggregates security findings.
- **Amazon Inspector** - Scans compute workloads for vulnerabilities.
- **Amazon GuardDuty** - Detects suspicious or malicious activity.

**Key clue: Sensitive data or PII in S3 - Amazon Macie**

## **16.3 Practice Question 3**

### **Original Question**

Your company needs an easy way to access compliance reports such as ISO certifications. Which AWS service should you use?

### **Choices**

A. Amazon Inspector  
B. AWS Shield  
C. AWS GuardDuty  
D. AWS Artifact

### **Correct Answer**

**D. AWS Artifact**

### **Why?**

**AWS Artifact** provides on-demand access to AWS **security and compliance reports, certifications, and agreements**.

Organizations can use it to download compliance documentation required for audits.
- **Amazon Inspector** - Identifies software vulnerabilities.
- **AWS Shield** - Protects against DDoS attacks.
- **Amazon GuardDuty** - Detects security threats.

**Key clue: Download ISO certifications or compliance reports - AWS Artifact**

## **16.4 Practice Question 4**

### **Original Question**

You want to investigate the root cause of a security incident using past logs and activity trails. Which AWS service should you use?

### **Choices**

A. AWS Security Hub  
B. AWS GuardDuty  
C. AWS Detective  
D. AWS Macie

### **Correct Answer**

**C. Amazon Detective**

### **Why?**

**Amazon Detective** uses **machine learning and graph technology** to correlate security information and investigate the **root cause** of security incidents.

It helps identify relationships between suspicious activities, AWS resources, and IAM identities.
- **AWS Security Hub** - Centralizes and prioritizes security findings.
- **Amazon GuardDuty** - Detects suspicious activities.
- **Amazon Macie** - Discovers sensitive information in S3.

**Key clue: Security incident investigation and root cause analysis - Amazon Detective**

## **16.5 Practice Question 5**

### **Original Question**

Which statement is true regarding penetration testing in AWS?

### **Choices**

A. Penetration testing is not allowed on AWS resources.  
B. Penetration testing requires prior approval for certain AWS services.  
C. Penetration testing is automatically enabled for all AWS accounts.  
D. Penetration testing only applies to AWS Shield-protected resources.

### **Correct Answer**

**B. Penetration testing requires prior approval for certain AWS services.**

### **Why?**

AWS permits customers to perform **penetration testing** on supported AWS resources.

However, authorization requirements depend on the services and testing activities involved.
- **Standard permitted penetration testing** - Does not require prior approval.
- **Certain advanced testing activities** - Require AWS authorization.
- **Disruptive activities such as unauthorized DDoS testing** - Are restricted or prohibited.

**Key clue: Penetration testing in AWS - Allowed under AWS testing policies, with approval required for certain activities**

## **16.6 Practice Question 6**

### **Original Question**

You need to issue and manage SSL/TLS certificates for your web applications. Which AWS service should you use?

### **Choices**

A. Amazon Certificate Manager (ACM)  
B. AWS KMS  
C. AWS Macie  
D. AWS Secrets Manager

### **Correct Answer**

**A. AWS Certificate Manager (ACM)**

### **Why?**

**AWS Certificate Manager (ACM)** provisions, manages, and renews **SSL/TLS certificates** used to secure communication over HTTPS.
- **AWS KMS** - Manages encryption keys.
- **Amazon Macie** - Discovers sensitive data in S3.
- **AWS Secrets Manager** - Stores and rotates application credentials.

**Key clue: Issue and manage SSL/TLS certificates - AWS Certificate Manager**

## **16.7 Practice Question 7**

### **Original Question**

Which service provides hardware security modules (HSM) for generating and managing encryption keys?

### **Choices**

A. AWS KMS  
B. AWS CloudHSM  
C. AWS ACM  
D. AWS Shield

### **Correct Answer**

**B. AWS CloudHSM**

### **Why?**

**AWS CloudHSM** provides dedicated **Hardware Security Modules (HSMs)** for generating, storing, and managing cryptographic keys.

It provides customers with greater control over their encryption keys.
- **AWS KMS** - Provides managed encryption key management.
- **AWS ACM** - Manages SSL/TLS certificates.
- **AWS Shield** - Protects against DDoS attacks.

**Key clue: Dedicated hardware for cryptographic key management - AWS CloudHSM**

## **16.8 Practice Question 8**

### **Original Question**

Your team wants to centrally manage security rules across multiple AWS accounts. Which service should you use?

### **Choices**

A. AWS WAF  
B. AWS Inspector  
C. AWS Firewall Manager  
D. AWS Security Hub

### **Correct Answer**

**C. AWS Firewall Manager**

### **Why?**

**AWS Firewall Manager** allows organizations to **centrally manage and enforce security policies** across multiple AWS accounts and resources.
- **AWS WAF** - Protects individual web applications from common web attacks.
- **Amazon Inspector** - Identifies vulnerabilities in supported compute workloads.
- **AWS Security Hub** - Centralizes security findings rather than firewall policies.

**Key clue: Centrally manage firewall rules across multiple AWS accounts - AWS Firewall Manager**

## **16.9 Practice Question 9**

### **Original Question**

Your e-commerce site needs advanced protection against DDoS attacks. Which AWS service should you enable?

### **Choices**

A. AWS Shield Advanced  
B. AWS WAF  
C. AWS Security Hub  
D. AWS GuardDuty

### **Correct Answer**

**A. AWS Shield Advanced**

### **Why?**

**AWS Shield Advanced** provides enhanced protection against sophisticated **Distributed Denial of Service (DDoS)** attacks.

Additional benefits include:
- **24/7 access to the Shield Response Team (SRT)**.
- Enhanced DDoS protection for critical applications.
- **DDoS cost protection** for eligible attack-related expenses.

**AWS Shield Standard** provides basic DDoS protection at no additional cost, while **Shield Advanced** provides enhanced protection through a paid subscription.

**Key clue: Advanced DDoS protection for critical applications - AWS Shield Advanced**

## **16.10 Practice Question 10**

### **Original Question**

Which service provides a unified dashboard to aggregate and prioritize security findings across multiple AWS services?

### **Choices**

A. AWS GuardDuty  
B. AWS Detective  
C. AWS Firewall Manager  
D. AWS Security Hub

### **Correct Answer**

**D. AWS Security Hub**

### **Why?**

**AWS Security Hub** provides **centralized visibility into security findings** from AWS services and third-party security tools.

It helps security teams aggregate, analyze, and prioritize security issues.
- **Amazon GuardDuty** - Detects security threats.
- **Amazon Detective** - Investigates security incidents.
- **AWS Firewall Manager** - Centrally manages firewall policies.

**Key clue: Unified security dashboard and findings aggregation - AWS Security Hub**

## **16.11 Practice Question 11**

### **Original Question**

Which AWS service helps identify vulnerabilities in your EC2 instances by performing automated security assessments?

### **Choices**

A. AWS Inspector  
B. AWS GuardDuty  
C. AWS Detective  
D. AWS Macie

### **Correct Answer**

**A. Amazon Inspector**

### **Why?**

**Amazon Inspector** performs automated vulnerability scanning of supported compute workloads, including:
- **Amazon EC2 instances**
- **Container images**
- **AWS Lambda functions**

It helps identify known software vulnerabilities, including **Common Vulnerabilities and Exposures (CVEs)**.
- **Amazon GuardDuty** - Detects suspicious or malicious activity.
- **Amazon Detective** - Investigates the root causes of security incidents.
- **Amazon Macie** - Discovers sensitive data stored in S3.

**Key clue: Automated vulnerability assessment of EC2 instances - Amazon Inspector**

## **16.12 Practice Question 12**

### **Original Question**

Your organization requires a managed service to generate, store, and control encryption keys for secure data access. Which AWS service should you use?

### **Choices**

A. AWS KMS  
B. AWS Macie  
C. AWS Secrets Manager  
D. AWS ACM

### **Correct Answer**

**A. AWS Key Management Service (AWS KMS)**

### **Why?**

**AWS KMS** provides managed **encryption key creation, storage, and access control**.

It integrates with AWS services such as Amazon S3, Amazon EBS, and Amazon RDS for data encryption.
- **Amazon Macie** - Discovers sensitive information in S3.
- **AWS Secrets Manager** - Stores and rotates passwords, API keys, and other secrets.
- **AWS ACM** - Manages SSL/TLS certificates.

**Key clue: Managed cryptographic encryption keys - AWS KMS**

## **16.13 Practice Question 13**

### **Original Question**

You need to safeguard your web application from common vulnerabilities such as SQL injection and cross-site scripting (XSS). Which AWS service should you choose?

### **Choices**

A. AWS Shield  
B. AWS WAF  
C. AWS GuardDuty  
D. AWS Firewall Manager

### **Correct Answer**

**B. AWS WAF**

### **Why?**

**AWS WAF (Web Application Firewall)** protects web applications against common **Layer 7 (Application Layer)** attacks, including:
- **SQL Injection (SQLi)**
- **Cross-Site Scripting (XSS)**
- Malicious HTTP/HTTPS requests

- **AWS Shield** - Protects against DDoS attacks.
- **Amazon GuardDuty** - Detects suspicious or malicious activities.
- **AWS Firewall Manager** - Centrally manages security policies.

**Key clue: Protect against SQL injection and XSS - AWS WAF**

## **16.14 Exam Focus**

### **Security Service Recognition**

|Exam Scenario|Correct AWS Service|
|---|---|
|Intelligent threat detection using machine learning|**Amazon GuardDuty**|
|Discover sensitive data or PII in S3|**Amazon Macie**|
|Download ISO certifications and compliance reports|**AWS Artifact**|
|Investigate root causes of security incidents|**Amazon Detective**|
|Manage SSL/TLS certificates|**AWS Certificate Manager**|
|Dedicated cryptographic hardware|**AWS CloudHSM**|
|Centrally manage firewall policies across accounts|**AWS Firewall Manager**|
|Advanced DDoS protection|**AWS Shield Advanced**|
|Centralize security findings|**AWS Security Hub**|
|Scan EC2 instances for vulnerabilities|**Amazon Inspector**|
|Manage encryption keys|**AWS KMS**|
|Protect against SQL injection and XSS|**AWS WAF**|

### **Most Important Exam Distinctions**

- **Detect malicious activities - Amazon GuardDuty**
- **Identify software vulnerabilities - Amazon Inspector**
- **Investigate root causes - Amazon Detective**
- **Centralize security findings - AWS Security Hub**
- **Centrally manage security policies - AWS Firewall Manager**
- **Protect web applications from Layer 7 attacks - AWS WAF**
- **Protect infrastructure from DDoS attacks - AWS Shield**
- **Managed encryption key management - AWS KMS**
- **Dedicated hardware key management - AWS CloudHSM**
- **Compliance reports and agreements - AWS Artifact**

**Remember:** The most important skill for AWS Security questions is recognizing the service from keywords such as **threat detection, vulnerability scanning, root cause analysis, DDoS, SQL injection, sensitive data discovery, and encryption key management**.