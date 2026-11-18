# 1 - What is Big Data and Analytics?

## **1.1 What Is Big Data?**

**Big Data** refers to extremely large datasets that cannot be easily managed, processed, or analyzed using traditional data processing tools.

Big Data is commonly characterized by the **3 V's: Volume, Velocity, and Variety**.

### **The 3 V's of Big Data**

| Characteristic | Description                                                | Example                                               |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| **Volume**     | Amount of data being generated and stored                  | Terabytes, petabytes, exabytes, or zettabytes of data |
| **Velocity**   | Speed at which data is generated, collected, and processed | Connected cars sending data every second              |
| **Variety**    | Different types and formats of data                        | Structured, semi-structured, and unstructured data    |

#### **1. Volume**

- Refers to the **quantity of data** being collected and stored.
- Big Data systems must handle massive amounts of information.

#### **2. Velocity**

- Refers to how quickly data is generated and must be processed.
- Processing requirements depend on the use case.

Two common processing approaches:

- **Real-time processing:** Data is processed immediately as it arrives.
- **Batch processing:** Data is collected and processed later, often at scheduled intervals.

**Example:**

- Connected car sending sensor data every second - High velocity.
- Machine sending data once per night - Batch processing.

#### **3. Variety**

Big Data can include different data formats.

| Data Type           | Description                             | Example                    |
| ------------------- | --------------------------------------- | -------------------------- |
| **Structured**      | Organized into a predefined structure   | Relational database tables |
| **Semi-structured** | Has some organizational structure       | JSON or XML documents      |
| **Unstructured**    | Does not follow a predefined data model | Images, videos             |

Different data types may require different storage and processing tools.

### **Additional V's of Big Data**

Beyond the primary 3 V's, other characteristics are sometimes considered:

| Characteristic    | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **Value**         | How useful or valuable the collected data is           |
| **Veracity**      | Accuracy, reliability, and trustworthiness of data     |
| **Variability**   | Changes in data characteristics or relevance over time |
| **Visualization** | Presenting data through charts, graphs, and dashboards |

These characteristics help determine the appropriate **data storage, processing, and analytics architecture**.

### **Common Big Data Frameworks**

Big Data frameworks support distributed storage and processing of large datasets.
- **Apache Hadoop:** Distributed storage and processing framework.
    - **HDFS:** Distributed file storage.
    - **MapReduce:** Distributed data processing.
    - **YARN:** Resource management and job scheduling.
- **Apache Spark:** Big Data processing framework.
- **Apache Hive, Apache HBase, and Presto:** Additional technologies used in Big Data environments.

For Cloud Practitioner, recognizing these technologies as part of the Big Data ecosystem is more important than understanding their internal implementation.

## **1.2 OLTP vs OLAP**

Two important database processing concepts are:
- **OLTP (Online Transaction Processing)**
- **OLAP (Online Analytical Processing)**

### **OLTP - Online Transaction Processing**

**OLTP** systems are designed to handle frequent, small transactions for operational applications.

Characteristics:
- Optimized for **continuous reads and writes**.
- Handles relatively small amounts of data per transaction.
- Supports application operations requiring fast responses.
- Commonly uses relational or NoSQL databases.

**Example:** A web or mobile application continuously reading and updating customer information.

### **OLAP - Online Analytical Processing**

**OLAP** systems are designed to analyze large volumes of data for reporting and business intelligence.

Characteristics:
- Optimized for **complex analytical queries**.
- Processes large amounts of data.
- Often uses data loaded in batches.
- Supports historical analysis, reporting, and business intelligence.

**Example:** An organization analyzing several years of customer transactions to identify purchasing trends.

### **OLTP vs OLAP Comparison**

|Feature|OLTP|OLAP|
|---|---|---|
|Full Name|Online Transaction Processing|Online Analytical Processing|
|**Primary Purpose**|Application transactions|Data analysis and reporting|
|Workload|Frequent, small read/write operations|Complex queries across large datasets|
|Data|Current operational data|Large volumes of historical and aggregated data|
|Processing|Continuous transactions|Analytical queries, often with batch data loading|
|Common Use Case|Application backend|Business intelligence and analytics|
|Example|Updating a customer order|Analyzing yearly sales trends|

**Key Distinction:**
- **OLTP - Running applications and processing transactions.**
- **OLAP - Analyzing large datasets to generate insights.**

## **1.3 Data Warehouse and ETL**

### **What Is a Data Warehouse?**

A **Data Warehouse** is a centralized system that stores and organizes data from multiple sources for **reporting, analytics, and business intelligence**.

Characteristics:
- Combines data from multiple databases and applications.
- Stores data in a structured format suitable for analysis.
- Supports large-scale analytical queries.
- Commonly used for **OLAP workloads**.
- Enables business analysts to generate reports and insights using **Business Intelligence (BI) tools**.

**Example:** A company combines sales data from multiple applications into a central data warehouse to analyze revenue and customer trends.

### **ETL - Extract, Transform, Load**

**ETL** is the process of moving data from source systems into a destination such as a data warehouse.

| Step          | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| **Extract**   | Retrieve data from source databases or applications          |
| **Transform** | Clean, process, and convert data into a common format        |
| **Load**      | Store the transformed data in the destination data warehouse |

## **1.4 Data Lake**

A **Data Lake** is a centralized storage repository used to store large volumes of data, including structured, semi-structured, and unstructured data.

Unlike a data warehouse, a data lake primarily acts as a **storage layer** rather than a traditional analytical database.

### **Key Characteristics**

- Stores large amounts of data from multiple sources.
- Can retain historical data for future processing and analysis.
- Provides relatively **low-cost storage** compared with maintaining data in a data warehouse.
- Data can be processed and loaded into other databases or analytics systems when required.
- Does not replace operational databases used by applications.

### **Amazon S3 and Data Lakes**

**Amazon Simple Storage Service (Amazon S3)** can be used as the storage foundation for a data lake.
- Provides scalable object storage for large datasets.
- Can store historical application data.
- Helps separate long-term data storage from operational databases.
- Data can be moved into analytics systems when needed.

**Example:**

A connected-car application generates sensor data continuously.
- **OLTP database:** Stores current data needed by the application.
- **Amazon S3 Data Lake:** Stores large amounts of historical sensor data.
- **Data Warehouse:** Organizes relevant data for analytical queries.
- **BI tools:** Visualize trends and produce reports.

### **Data Warehouse vs Data Lake**

| Feature             | Data Warehouse                                | Data Lake                                                 |
| ------------------- | --------------------------------------------- | --------------------------------------------------------- |
| **Primary Purpose** | Analytics and reporting                       | Centralized large-scale data storage                      |
| Data Types          | Primarily structured data                     | Structured, semi-structured, and unstructured             |
| Data Organization   | Organized for analytical queries              | Can retain data in its original format                    |
| Cost                | Generally higher processing and storage costs | Generally lower-cost storage                              |
| Analysis            | Designed for analytical queries               | Data can be processed or transferred to analytics systems |
| AWS Association     | Data warehouse and OLAP services              | **Amazon S3**                                             |

**Important:** Data lakes are not limited to storing data for later transfer. Data stored in a data lake can also be analyzed directly using appropriate analytics tools.

### **Relationship Between OLTP, Data Lakes, and Data Warehouses**

These components serve different purposes and can work together:
- **OLTP databases:** Maintain current application data and support transactions.
- **Data Lakes:** Store large amounts of raw or historical data economically.
- **Data Warehouses:** Organize data for efficient analytical querying.
- **BI tools:** Present insights through reports, charts, and dashboards.

## **1.5 Exam Focus**

- **Big Data -** Extremely large datasets requiring specialized storage and processing tools.
- **3 V's -** Volume, Velocity, Variety.
- **Volume -** Amount of data.
- **Velocity -** Speed of data generation and processing.
- **Variety -** Different data formats.
- **Real-time processing -** Analyze data immediately.
- **Batch processing -** Collect and process data later.
- **OLTP -** Frequent transactions and application backend operations.
- **OLAP -** Large-scale analytics and reporting.
- **Data Warehouse -** Centralized, organized data for analytical queries.
- **ETL -** Extract, Transform, Load.
- **Data Lake -** Centralized, cost-effective storage for large datasets.
- **Amazon S3 -** Common storage foundation for data lakes.
- **Business Intelligence (BI) -** Reporting, dashboards, and data visualization.

**Key Exam Distinctions:**

- **Application transactions - OLTP**
- **Complex analytical queries - OLAP**
- **Structured analytics and reporting - Data Warehouse**
- **Store large volumes of raw and historical data - Data Lake**
- **Object storage for a data lake - Amazon S3**

# 2 - Overview of AWS Analytics Services

## **2.1 Overview of AWS Analytics Services**

**AWS Analytics Services** provide tools for collecting, processing, storing, analyzing, and visualizing data.

AWS supports both:
- **Real-time data processing:** Continuously ingesting and processing data as it arrives.
- **Batch data processing:** Processing large amounts of collected data at scheduled intervals.

These services work together to build end-to-end **data analytics pipelines**.

### **AWS Analytics Services Overview**

| Category                       | AWS Service                                    | Primary Purpose                                     |
| ------------------------------ | ---------------------------------------------- | --------------------------------------------------- |
| **OLTP Databases**             | **Amazon RDS, Amazon Aurora, Amazon DynamoDB** | Store and manage operational application data       |
| **Real-time Data Ingestion**   | **Amazon Kinesis**                             | Collect and process streaming data in real time     |
| **Real-time Data Ingestion**   | **Amazon MSK**                                 | Managed Apache Kafka for streaming data             |
| **ETL / Data Processing**      | **AWS Glue**                                   | Extract, transform, and load data                   |
| **Big Data Processing**        | **Amazon EMR**                                 | Process large datasets using Big Data frameworks    |
| **Data Warehouse (OLAP)**      | **Amazon Redshift**                            | Store and analyze data at petabyte scale            |
| **Data Lake**                  | **Amazon S3**                                  | Store large amounts of raw and historical data      |
| **SQL Query Service**          | **Amazon Athena**                              | Query data directly in Amazon S3 using SQL          |
| **Business Intelligence (BI)** | **Amazon QuickSight**                          | Create dashboards, reports, and data visualizations |

## **2.2 Real-time Data Ingestion**

Real-time data ingestion involves continuously collecting data from sources such as:
- Mobile applications
- Connected cars and IoT devices
- Web applications

AWS provides two services for streaming data ingestion.

### **Amazon Kinesis**

**Amazon Kinesis** is an AWS service for collecting and processing streaming data in real time.
- Supports continuous data ingestion.
- Used when data is generated at high velocity.
- Enables real-time streaming analytics.

**Example:** Collecting live clickstream data from a website.

### **Amazon Managed Streaming for Apache Kafka (Amazon MSK)**

**Amazon MSK** is a managed service for running **Apache Kafka**.
- Apache Kafka is an open-source distributed event streaming platform.
- Producers continuously publish data to Kafka.
- Consumers subscribe to and process the data.
- Amazon MSK provides a managed Kafka environment on AWS.

### **Amazon Kinesis vs Amazon MSK**

| Feature         | Amazon Kinesis                          | Amazon MSK                            |
| --------------- | --------------------------------------- | ------------------------------------- |
| Technology      | AWS-native streaming service            | Managed Apache Kafka                  |
| Primary Purpose | Real-time data ingestion and processing | Real-time event streaming using Kafka |
| Key Distinction | AWS streaming solution                  | Kafka-compatible managed solution     |

**Exam Clues:**
- **Real-time streaming data using AWS-native services - Amazon Kinesis**
- **Managed Apache Kafka - Amazon MSK**

## **2.3 ETL and Big Data Processing**

Data collected from multiple sources often needs to be transformed into a common format before analysis.

This process is called **ETL (Extract, Transform, Load)**.

AWS provides two important services for data transformation and processing.

### **AWS Glue**

**AWS Glue** is a managed ETL service.
- Extracts data from different sources.
- Transforms data into the required format.
- Loads processed data into target storage or analytics systems.
- Used to prepare data for analytics.

**Example:** Transforming application data before loading it into a data warehouse.

### **Amazon EMR (Elastic MapReduce)**

**Amazon EMR** provides a managed environment for processing large amounts of data using Big Data frameworks.
- Supports large-scale data processing.
- Provides flexibility for running Big Data processing frameworks.
- Useful for complex data processing workloads.

### **AWS Glue vs Amazon EMR**

|Feature|AWS Glue|Amazon EMR|
|---|---|---|
|**Primary Purpose**|ETL and data integration|Large-scale Big Data processing|
|Main Focus|Extract, transform, and load data|Flexible processing using Big Data frameworks|
|Exam Clue|Managed ETL|Big Data processing with more framework flexibility|

## **2.4 Data Warehouse and Business Intelligence**

### **Amazon Redshift**

**Amazon Redshift** is an AWS data warehousing service designed for large-scale analytics.
- Supports **OLAP workloads**.
- Stores and analyzes data at **petabyte scale**.
- Used for analytical queries and reporting.
- Provides centralized storage for data from multiple sources.

**Example:** Analyzing historical sales data from several applications.

### **Amazon QuickSight**

**Amazon QuickSight** is an AWS **Business Intelligence (BI)** service.
- Used for analyzing and visualizing data.
- Creates interactive dashboards, graphs, and reports.
- Helps users interpret data and identify trends.

**Example:** Creating a dashboard to visualize revenue and customer activity.

**Key Distinction:**
- **Amazon Redshift - Data warehousing and analytics.**
- **Amazon QuickSight - Business intelligence and data visualization.**

## **2.5 Data Lakes and Direct SQL Queries**

### **Amazon S3 as a Data Lake**

**Amazon Simple Storage Service (Amazon S3)** can serve as the storage foundation for a data lake.
- Stores large volumes of raw and historical data.
- Provides scalable, cost-effective object storage.
- Data can be processed and loaded into data warehouses or other databases.
- Can also be queried directly using supported analytics services.

### **Amazon Athena**

**Amazon Athena** is an interactive SQL query service that allows users to analyze data stored directly in **Amazon S3**.
- Uses **SQL** to query data.
- Does not require loading data into a separate database.
- Useful for analyzing data stored in an S3-based data lake.

**Example:** Running SQL queries against historical application logs stored in Amazon S3.

### **Amazon Redshift vs Amazon Athena**

| Feature             | Amazon Redshift                     | Amazon Athena              |
| ------------------- | ----------------------------------- | -------------------------- |
| **Primary Purpose** | Data warehousing                    | Interactive SQL queries    |
| Data Location       | Data warehouse                      | Data stored in Amazon S3   |
| Main Use Case       | Large-scale analytics and reporting | Query S3 data directly     |
| Exam Clue           | Petabyte-scale data warehouse       | SQL queries directly on S3 |

**Important:** Amazon Athena can query data directly in S3 without first loading it into Amazon Redshift.

## **2.6 Exam Focus**

| Exam Scenario / Keyword                     | AWS Service             |
| ------------------------------------------- | ----------------------- |
| **Real-time data streaming**                | **Amazon Kinesis**      |
| **Managed Apache Kafka**                    | **Amazon MSK**          |
| **Managed ETL processing**                  | **AWS Glue**            |
| **Big Data processing using frameworks**    | **Amazon EMR**          |
| **Petabyte-scale data warehouse**           | **Amazon Redshift**     |
| **Low-cost storage for a data lake**        | **Amazon S3**           |
| **SQL queries directly on S3**              | **Amazon Athena**       |
| **BI dashboards and data visualization**    | **Amazon QuickSight**   |
| **Relational application databases (OLTP)** | **Amazon RDS / Aurora** |
| **NoSQL application database (OLTP)**       | **Amazon DynamoDB**     |

**Key Exam Distinctions:**

- **Kinesis vs MSK - AWS-native streaming vs managed Apache Kafka.**
- **Glue vs EMR - Managed ETL vs flexible Big Data framework processing.**
- **Redshift vs Athena - Data warehouse vs SQL queries directly on S3.**
- **Redshift vs QuickSight - Data analytics and warehousing vs BI visualization.**
- **S3 vs Redshift - Data lake storage vs analytical data warehouse.**

# 3 - Amazon Kinesis

## **3.1 Amazon Kinesis Overview**

**Amazon Kinesis** is a fully managed AWS service family for collecting, processing, and analyzing **real-time streaming data**.

It enables applications to continuously ingest data from multiple sources and generate immediate business insights.

### **Key Characteristics**

- Supports **real-time data ingestion and processing**.
- Handles continuously generated streaming data.
- Supports different data types, including text, audio, video, and application logs.
- Can ingest data from hundreds or thousands of sources.
- Enables real-time analytics and automated responses to events.

**Example:** A website captures user activity (clickstream data) in real time to provide personalized recommendations, advertisements, or offers.

**Key Exam Keyword: Real-time streaming data.**

## **3.2 Amazon Kinesis Services**

AWS provides several services for different stages of streaming data ingestion, processing, analysis, and delivery.

| Service                                     | Primary Purpose                                              | Exam Clue                                            |
| ------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **Amazon Kinesis Data Streams**             | Ingest real-time streaming data                              | Collect streaming events from multiple sources       |
| **Amazon Kinesis Video Streams**            | Ingest and stream video data                                 | Video streaming from cameras and devices             |
| **Amazon Managed Service for Apache Flink** | Process and analyze streaming data in real time              | Real-time analytics on streaming events              |
| **Amazon Data Firehose**                    | Deliver streaming data to storage and analytics destinations | Load streaming data into S3, Redshift, or OpenSearch |

### **Amazon Kinesis Data Streams**

**Amazon Kinesis Data Streams** is used to continuously collect and ingest streaming data from multiple sources.
- Supports high-volume, real-time data ingestion.
- Can ingest data from hundreds or thousands of data producers.
- Uses **shards** to manage streaming data throughput.
- Supports scaling to accommodate changing data volumes.

**Example:** Collecting user clicks, application events, or IoT sensor data continuously.

### **Amazon Kinesis Video Streams**

**Amazon Kinesis Video Streams** is designed to ingest and stream video data from connected devices.
- Supports video streaming from cameras and other devices.
- Enables real-time video monitoring and analysis.
- Can support video analytics and machine learning use cases.

**Example:** Streaming video from home security cameras to detect motion or monitor activity.

### **Amazon Managed Service for Apache Flink**

**Amazon Managed Service for Apache Flink** enables **real-time processing and analytics** on streaming data.
- Processes continuously arriving data.
- Can analyze data received through Amazon Kinesis Data Streams.
- Supports **time-window-based analytics**.
- Useful when immediate insights or actions are required.

**Example:** Analyzing all user activities performed during the last 30 seconds or one minute to generate personalized recommendations.

**Key Distinction:**
- **Kinesis Data Streams - Ingest streaming data.**
- **Managed Service for Apache Flink - Analyze and process streaming data.** 

### **Amazon Data Firehose**

**Amazon Data Firehose** is a fully managed service used to deliver streaming data to supported storage and analytics destinations.

Common destinations include:
- **Amazon S3:** Store streaming data in object storage.
- **Amazon Redshift:** Load data into a data warehouse.
- **Amazon OpenSearch Service:** Store data for search, log analytics, and analysis.
- **Third-party platforms:** Datadog, Splunk, Dynatrace, and other supported destinations.

#### **Data Transformation with AWS Lambda**

Amazon Data Firehose can integrate with **AWS Lambda** to transform streaming data before delivery.
- Firehose receives streaming data.
- Data batches can be passed to a Lambda function.
- Lambda executes transformation logic.
- Firehose delivers the transformed data to the configured destination.

**Example:** Transforming application logs before storing them in Amazon S3.

**Key Distinction:**
- **Kinesis Data Streams - Collect streaming data.**
- **Amazon Data Firehose - Deliver streaming data to destinations.**
- **AWS Lambda with Firehose - Transform data before delivery.**

## **3.3 Common Amazon Kinesis Use Cases**

### **Real-time Data Analytics**

| Use Case                   | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| **Clickstream Analytics**  | Track website activity to provide personalized recommendations and advertisements |
| **Fraud Detection**        | Analyze financial transactions to identify suspicious activity immediately        |
| **Log Analytics**          | Detect errors and anomalies from continuously generated application logs          |
| **IoT Monitoring**         | Analyze sensor data to identify device malfunctions                               |
| **Social Media Analytics** | Monitor user engagement and recommend content                                     |
| **Real-time Advertising**  | Analyze user activity to deliver relevant advertisements                          |

### **Video Streaming and Analytics**

**Amazon Kinesis Video Streams** is particularly relevant for video-based use cases.

| Use Case                  | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| **Home Security**         | Stream camera footage for motion detection and monitoring      |
| **Connected Vehicles**    | Analyze driver behavior to identify unsafe driving conditions  |
| **Industrial Monitoring** | Remotely monitor equipment or facilities using cameras         |
| **Video Analytics**       | Stream video to AWS for analysis using machine learning models |

## **3.5 Exam Focus**

- **Amazon Kinesis -** Real-time streaming data ingestion and processing.
- **Amazon Kinesis Data Streams -** Collect continuous streaming data from multiple sources.
- **Amazon Kinesis Video Streams -** Stream video from cameras and connected devices.
- **Amazon Managed Service for Apache Flink -** Real-time analytics and processing of streaming data.
- **Amazon Data Firehose -** Deliver streaming data to storage and analytics destinations.
- **AWS Lambda + Amazon Data Firehose -** Transform streaming data before delivery.
- **Amazon S3 / Redshift / OpenSearch -** Common Amazon Data Firehose destinations.
- **Clickstream Analytics -** Analyze user activity in real time.
- **Fraud Detection / IoT Monitoring -** Common real-time streaming analytics scenarios.

**Key Exam Distinctions:**

- **Ingest real-time streaming events - Amazon Kinesis Data Streams**
- **Ingest streaming video - Amazon Kinesis Video Streams**
- **Analyze streaming events in real time - Amazon Managed Service for Apache Flink**
- **Deliver streaming data to Amazon S3 - Amazon Data Firehose**
- **Transform streaming data during Firehose delivery - AWS Lambda integration**

# 4 - AWS Glue

## **4.1 AWS Glue Overview**

**AWS Glue** is a fully managed **Extract, Transform, Load (ETL)** service that simplifies data integration, preparation, and processing for analytics.

It enables users to extract data from multiple sources, transform it into the required format, and load it into target systems such as **Amazon S3** or **Amazon Redshift**.

### **Key Characteristics**

- **Managed ETL:** Automates and simplifies data extraction, transformation, and loading.
- **Data Transformation:** Supports data cleansing, formatting, and duplicate removal.
- **Schema Discovery:** Automatically identifies the structure of data sources.
- **Data Cataloging:** Organizes metadata about datasets for easier discovery and processing.
- **Visual ETL:** Provides a visual interface for building ETL workflows.
- **Multiple Data Sources:** Integrates with AWS services and third-party databases.

**Example:** Extracting customer data from multiple databases, removing duplicate records, and loading the cleaned data into Amazon Redshift for analytics.

**Key Exam Keywords: Managed ETL, Schema Discovery, Data Cataloging.**

## **4.2 ETL Process in AWS Glue**

**ETL (Extract, Transform, Load)** is the process of collecting data from source systems, preparing it for analysis, and loading it into a destination.

| Step          | Purpose                                 | Example                                        |
| ------------- | --------------------------------------- | ---------------------------------------------- |
| **Extract**   | Retrieve data from source systems       | Read data from Amazon S3 or an Oracle database |
| **Transform** | Clean, process, and standardize data    | Remove duplicates and convert data formats     |
| **Load**      | Store processed data in a target system | Load data into Amazon S3 or Amazon Redshift    |

## **4.3 AWS Glue Crawlers and Data Catalog**

AWS Glue provides two important capabilities for discovering and organizing data.

### **AWS Glue Crawlers**

**AWS Glue Crawlers** automatically discover data sources and identify their schemas.
- Connect to supported data sources.
- Inspect datasets to identify their structure.
- Discover metadata such as tables and columns.
- Populate or update the **AWS Glue Data Catalog**.

**Example:** A Glue Crawler scans files stored in Amazon S3 and identifies their schema automatically.

### **AWS Glue Data Catalog**

The **AWS Glue Data Catalog** is a centralized metadata repository that stores information about datasets.
- Stores discovered schemas and metadata.
- Helps Glue jobs understand the structure of source data.
- Supports data discovery and ETL processing.

### **Glue Crawler vs Data Catalog vs Glue Job**

| Component                 | Primary Purpose                      | Exam Clue                       |
| ------------------------- | ------------------------------------ | ------------------------------- |
| **AWS Glue Crawler**      | Automatically discovers data schemas | Schema discovery                |
| **AWS Glue Data Catalog** | Stores dataset metadata and schemas  | Centralized metadata repository |
| **AWS Glue Job**          | Extracts, transforms, and loads data | ETL execution                   |

**Key Distinction:**
- **Crawler - Discovers the schema.**
- **Data Catalog - Stores the metadata.**
- **Glue Job - Processes and transforms the data.**

## **4.4 AWS Glue Data Processing Features**

### **Data Transformation**

AWS Glue supports several data preparation operations:
- **Data Cleansing:** Clean inconsistent or unwanted data.
- **Duplicate Removal:** Identify and remove duplicate records.
- **Data Formatting:** Convert data into a standardized structure.
- **Data Preparation:** Prepare datasets for analytics and reporting.

### **Supported Processing Technologies**

AWS Glue supports multiple technologies for building data processing jobs.

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Apache Spark** | Distributed processing of large datasets       |
| **Python**       | Writing data processing and ETL scripts        |
| **Ray**          | Scaling Python-based data processing workloads |

### **AWS Glue Studio**

**AWS Glue Studio** provides a visual interface for designing ETL workflows.
- Build ETL jobs visually.
- Define data sources, transformations, and destinations.
- Simplify ETL development without requiring every step to be manually coded.

**Example:** Creating a visual ETL workflow that reads data from Amazon S3, removes duplicates, and loads the results into Amazon Redshift.

## **4.5 Exam Focus**

- **AWS Glue -** Fully managed ETL and data integration service.
- **ETL -** Extract, Transform, Load.
- **AWS Glue Crawler -** Automatic schema discovery.
- **AWS Glue Data Catalog -** Centralized metadata and schema repository.
- **AWS Glue Jobs -** Execute data extraction, transformation, and loading.
- **AWS Glue Studio -** Visual ETL job development.
- **Data Cleansing -** Clean data and remove duplicates.
- **Amazon S3 / Amazon Redshift -** Common data sources and destinations for AWS Glue.
- **Apache Spark / Python / Ray -** Supported data processing technologies.

**Key Exam Distinctions:**

- **Managed ETL service - AWS Glue**
- **Automatically discover dataset schemas - AWS Glue Crawler**
- **Store and organize dataset metadata - AWS Glue Data Catalog**
- **Execute data transformation workloads - AWS Glue Jobs**
- **Build ETL pipelines visually - AWS Glue Studio**

# 5 - Amazon EMR

## **5.1 Amazon EMR Overview**

**Amazon EMR (Elastic MapReduce)** is a managed AWS service used for **large-scale Big Data processing and analytics** using popular open-source frameworks.

It enables organizations to process massive datasets through distributed computing.

### **Key Characteristics**

- Supports **Big Data processing and analytics**.
- Uses open-source frameworks such as **Apache Hadoop, Apache Spark, Apache Hive, and Presto**.
- Distributes data processing across scalable computing resources.
- Can process data from **Amazon S3, Amazon RDS**, and other data sources.
- Supports data transformation, batch processing, and machine learning workloads.
- Provides greater flexibility and customization than simpler managed ETL solutions.

**Example:** Processing terabytes of application logs stored in Amazon S3 to identify customer behavior patterns.

**Key Exam Keywords: Big Data Processing, Hadoop, Spark, Distributed Computing.**

## **5.2 Amazon EMR Architecture and Frameworks**

### **Supported Big Data Frameworks**

Amazon EMR supports multiple open-source frameworks for large-scale data processing.

|Framework|Primary Purpose|
|---|---|
|**Apache Hadoop**|Distributed storage and processing of large datasets|
|**Apache Spark**|Large-scale distributed data processing|
|**Apache Hive**|SQL-like queries and analytics on Big Data|
|**Presto**|Distributed SQL query processing|

**Important:** Amazon EMR is particularly useful when organizations need the flexibility to use existing Big Data frameworks.

### **Compute and Deployment Options**

Amazon EMR supports different approaches for running Big Data workloads.
- **Amazon EC2:** Run processing workloads on managed clusters of EC2 instances.
- **Serverless:** Run supported EMR workloads without managing the underlying infrastructure.
- **Resizable Clusters:** Scale computing resources according to processing requirements

### **Data Storage**

Amazon EMR can work with different storage systems:
- **Amazon S3:** Stores large datasets used for processing.
- **Hadoop Distributed File System (HDFS):** Distributed file system used in Hadoop-based processing environments.

### **Typical Amazon EMR Workflow**

1. Extract data from sources such as **Amazon S3** or **Amazon RDS**.
2. Process and transform data using frameworks such as **Apache Spark** or **Hadoop**.
3. Store the processed results in **Amazon S3** or load them into a data warehouse.
4. Use the processed datasets for analytics, reporting, or machine learning.

## **5.3 Amazon EMR Use Cases and Cost Optimization**

### **Common Use Cases**

| Use Case                | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| **Log Analysis**        | Process large volumes of application or system logs     |
| **Web Indexing**        | Analyze and organize large amounts of web data          |
| **Machine Learning**    | Prepare and transform large datasets for model training |
| **Financial Analytics** | Analyze financial data to identify trends               |
| **Customer Analytics**  | Identify customer preferences and behavior              |
| **Batch Processing**    | Process accumulated datasets periodically               |

**Example:** An organization processes a month's worth of transaction data to identify market trends and customer purchasing patterns.

### **Cost Optimization with EC2 Spot Instances**

Amazon EMR can use **Amazon EC2 Spot Instances** to reduce computing costs.
- Spot Instances use spare Amazon EC2 capacity.
- Can provide savings of **up to 90% compared with On-Demand pricing**.
- Suitable for flexible, interruption-tolerant batch processing workloads.
- Particularly useful when processing jobs can be delayed, retried, or resumed.

**Important:** Spot Instances can be interrupted when AWS needs the capacity back, making them less suitable for workloads that cannot tolerate interruptions.

**Exam Clue: Cost-effective Big Data batch processing with flexible execution - Amazon EMR using EC2 Spot Instances.**

## **5.4 AWS Glue vs Amazon EMR**

Both **AWS Glue** and **Amazon EMR** can perform data transformation and ETL workloads, but they differ in flexibility, complexity, and management requirements.

| Feature             | AWS Glue                                         | Amazon EMR                                                 |
| ------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| **Primary Purpose** | Managed ETL and data integration                 | Large-scale Big Data processing                            |
| Management          | Simplified, managed ETL                          | Managed Big Data platform with flexible deployment options |
| Frameworks          | Supports Spark, Python, and Ray                  | Supports Hadoop, Spark, Hive, Presto, and others           |
| Development         | Low-code visual tools and scripts                | Greater framework-level customization                      |
| Typical Workloads   | ETL, data preparation, data integration          | Complex distributed processing and analytics               |
| Skills Required     | Easier for general developers and data engineers | Often requires specialized Big Data expertise              |
| Migration Use Case  | Building managed ETL pipelines                   | Migrating existing Hadoop-based workloads                  |

### **When to Choose AWS Glue**

Choose **AWS Glue** when:
- You need a managed ETL service.
- You want built-in connectors and transformations.
- You prefer low-code or visual ETL development.
- You want to simplify data preparation and integration.

**Example:** Cleaning customer records and loading them into Amazon Redshift.

### **When to Choose Amazon EMR**

Choose **Amazon EMR** when:
- You need to process large datasets using distributed computing.
- You require greater flexibility with open-source Big Data frameworks.
- You already use Hadoop, Spark, Hive, or similar technologies.
- You are migrating existing on-premises Hadoop workloads to AWS.
- You have specialized data engineering requirements.

**Example:** Migrating an existing Hadoop analytics environment from an on-premises data center to AWS.

**Key Distinction:**
- **AWS Glue - Simplified, managed ETL and data integration.**
- **Amazon EMR - Flexible, large-scale Big Data processing using open-source frameworks.**

Both services can process large datasets; the primary distinction is the **type of workload and level of flexibility required**, not simply dataset size.

## **5.5 Exam Focus**

- **Amazon EMR (Elastic MapReduce) -** Managed Big Data processing and analytics.
- **Apache Hadoop / Apache Spark -** Common Big Data frameworks supported by EMR.
- **Apache Hive / Presto -** SQL-based analytics frameworks supported by EMR.
- **Amazon S3 -** Common storage source and destination for EMR workloads.
- **EMR Serverless -** Run Big Data processing without managing infrastructure.
- **EC2 Spot Instances -** Reduce costs for interruption-tolerant EMR workloads.
- **Batch Processing -** Common EMR workload for processing accumulated datasets.
- **Hadoop Migration -** Common scenario for choosing Amazon EMR.

**Key Exam Distinctions:**

- **Managed ETL and data integration - AWS Glue**
- **Big Data processing using Hadoop or Spark - Amazon EMR**
- **Migrate on-premises Hadoop workloads to AWS - Amazon EMR**
- **Flexible open-source Big Data frameworks - Amazon EMR**
- **Visual ETL development - AWS Glue Studio**
- **Cost-effective, interruption-tolerant batch processing - Amazon EMR with EC2 Spot Instances**

# 6 - Amazon Athena

## **6.1 Amazon Athena Overview**

**Amazon Athena** is a **serverless, interactive SQL query service** that allows users to analyze data stored directly in **Amazon S3** without moving it into a database.

It provides an easy way to run **ad hoc SQL queries** on data stored in Amazon S3 and other supported data sources.

### **Key Characteristics**

- **Serverless:** No infrastructure to provision or manage
- **Direct S3 Queries:** Query data stored in Amazon S3 without loading it into a separate database.
- **Standard SQL:** Supports familiar SQL queries for data analysis.
- **Ad Hoc Analytics:** Ideal for occasional, on-demand data analysis.
- **Open-source SQL Engines:** Built on technologies such as Trino and Presto.
- **Pay-per-query Pricing:** Charges based on the amount of data scanned for queries under its standard SQL pricing model.

**Example:** An organization stores historical application logs in Amazon S3 and uses Amazon Athena to run SQL queries without setting up a data warehouse.

**Key Exam Keywords: Serverless, Ad Hoc SQL Queries, Query S3 Directly.**

## **6.2 Amazon Athena Pricing and Query Optimization**

### **Pay-per-Query Pricing**

Amazon Athena uses a consumption-based pricing model.
- No infrastructure to maintain for serverless queries.
- Under the standard SQL pricing model, charges depend on the **amount of data scanned**.
- Queries scanning larger datasets generally cost more.

The lecture uses a pricing example of **$5 per TB of data scanned**.

**Important:** Reducing the amount of data scanned can help reduce Athena query costs.

### **Data Partitioning**

**Partitioning** organizes datasets into smaller logical sections so Athena can scan only the relevant data.

For example, data stored in Amazon S3 can be partitioned by:
- Year 
- Month
- Day

If a query only needs data from a specific day, Athena can scan the relevant partition instead of the entire dataset.

**Benefits:**
- Reduces the amount of data scanned.
- Improves query efficiency.
- Helps reduce query costs.

**Exam Clue: Reduce Athena query costs by scanning less data - Data Partitioning.**

## **6.3 Supported Data Formats**

Amazon Athena supports different file formats stored in Amazon S3.

| Data Format        | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| **CSV**            | Text-based, comma-separated data                                |
| **JSON**           | Semi-structured data format                                     |
| **Apache Parquet** | Columnar storage format optimized for analytical queries        |
| **Apache ORC**     | Columnar storage format optimized for efficient data processing |

### **Columnar Storage with Apache Parquet**

**Apache Parquet** is a columnar file format that stores data by columns rather than rows.

This makes it efficient for queries that need only specific columns.

**Example:**

An organization wants to calculate the average age of employees.
- With row-based data, the query may need to read more information than necessary.
- With **Apache Parquet**, Athena can read the required age column without scanning unrelated columns.

**Key Benefits:**
- Reduces unnecessary data scanning.
- Improves analytical query efficiency.
- Can reduce Athena query costs.

**Exam Clue: Optimize Athena queries by reading only required columns - Apache Parquet or ORC.**

## **6.4 Amazon Athena Integrations and Use Cases**

### **Integration with Amazon QuickSight**

**Amazon QuickSight** can connect to Amazon Athena to visualize data stored in Amazon S3.

### **Common Use Cases**

|Use Case|Description|
|---|---|
|**Ad Hoc Data Analysis**|Run occasional SQL queries on data stored in S3|
|**Log Analysis**|Analyze application or AWS service logs stored in S3|
|**Security Auditing**|Query AWS CloudTrail logs stored in S3|
|**Business Intelligence**|Analyze S3 data and visualize results using Amazon QuickSight|
|**Historical Data Analysis**|Query archived datasets without loading them into a data warehouse|

### **Athena and AWS CloudTrail**

**AWS CloudTrail** records AWS account activity and API events.

When CloudTrail logs are stored in **Amazon S3**, Athena can query those logs using SQL.

**Example:** A security team uses Athena to identify specific AWS API activities from historical CloudTrail logs stored in S3.

**Key Distinction:**
- **AWS CloudTrail - Records AWS API activity.**
- **Amazon S3 - Stores the logs.**
- **Amazon Athena - Queries the stored logs using SQL.**

## **6.5 Amazon Athena vs Amazon Redshift**

Both **Amazon Athena** and **Amazon Redshift** support analytical SQL queries, but they serve different use cases.

| Feature             | Amazon Athena                                     | Amazon Redshift                            |
| ------------------- | ------------------------------------------------- | ------------------------------------------ |
| **Primary Purpose** | Ad hoc SQL queries                                | Data warehousing and large-scale analytics |
| Data Location       | Queries data directly in Amazon S3                | Uses a data warehouse                      |
| Infrastructure      | Serverless                                        | Managed data warehouse                     |
| Typical Workload    | Occasional, interactive queries                   | Repeated, complex analytical workloads     |
| Pricing Focus       | Data scanned per query under standard SQL pricing | Data warehouse compute and storage usage   |
| Exam Clue           | Query S3 using SQL without moving data            | Petabyte-scale data warehouse              |

### **When to Choose Amazon Athena**

Choose **Amazon Athena** when:
- Data is already stored in **Amazon S3**.
- You need to run occasional or **ad hoc SQL queries**.
- You do not want to move data into a separate database.
- You want a serverless query service without infrastructure management.

### **When to Choose Amazon Redshift**

Choose **Amazon Redshift** when:
- You need a centralized **data warehouse**.
- You need to perform large-scale analytical queries.
- You have ongoing reporting and business intelligence workloads.

**Key Distinction:**

- **Amazon Athena - Query data directly in S3 using SQL.**
- **Amazon Redshift - Managed data warehouse for large-scale analytics.**

## **6.6 Exam Focus**

- **Amazon Athena -** Serverless, interactive SQL query service.
- **Ad Hoc SQL Queries on S3 -** Amazon Athena.
- **No Database Setup Required -** Query S3 data directly with Athena.
- **Pay-per-Query Pricing -** Standard Athena SQL queries are billed based on data scanned.
- **Data Partitioning -** Reduces the amount of data scanned.
- **Apache Parquet / ORC -** Columnar formats that improve query efficiency.
- **Amazon QuickSight -** Visualizes data queried through Athena.
- **AWS CloudTrail Logs -** Can be analyzed using Athena when stored in S3.
- **Amazon Redshift -** Data warehouse for large-scale analytical workloads.

**Key Exam Distinctions:**

- **Run ad hoc SQL queries directly on Amazon S3 - Amazon Athena**
- **Serverless SQL analytics without managing infrastructure - Amazon Athena**
- **Reduce Athena data scanning and costs - Partitioning and columnar formats**
- **Query historical CloudTrail logs stored in S3 - Amazon Athena**
- **Visualize SQL query results - Amazon QuickSight**
- **Centralized data warehousing - Amazon Redshift**

# 7 - Amazon Redshift

## **7.1 Amazon Redshift Overview**

**Amazon Redshift** is a fully managed, **petabyte-scale data warehouse service** designed for large-scale data analytics and business intelligence.

It enables organizations to centrally store and analyze large amounts of data using SQL queries.

### **Key Characteristics**

- **Fully Managed:** AWS manages the underlying data warehouse infrastructure.
- **Petabyte-scale Analytics:** Supports analysis of extremely large datasets.
- **Massively Parallel Processing (MPP):** Distributes query processing across multiple computing resources.
- **SQL Support:** Provides a SQL interface for analytical queries.
- **Multiple Data Sources:** Ingests data from data lakes, databases, and streaming pipelines.
- **Business Intelligence Integration:** Connects to BI tools for reporting and visualization.

**Example:** An organization combines sales data from multiple databases into Amazon Redshift to analyze customer behavior and generate business reports.

**Key Exam Keywords: Data Warehouse, OLAP, Petabyte-scale Analytics, MPP.**

## **7.2 Amazon Redshift Data Integration**

Amazon Redshift can ingest data from multiple sources for centralized analytics.

### **Supported Data Sources**

|Data Source|Example|
|---|---|
|**Data Lakes**|Amazon S3|
|**Relational Databases**|Amazon Aurora, Amazon RDS|
|**Non-relational Databases**|NoSQL database sources|
|**Streaming Data**|Amazon Kinesis pipelines|

Data can be loaded into Redshift and analyzed using SQL queries.

### **Zero-ETL Integration**

**Amazon Redshift Zero-ETL Integration** enables data from supported databases to become available in Amazon Redshift without building and maintaining traditional ETL pipelines.

Key characteristics:
- Eliminates the need to write custom ETL code for supported integrations.
- Automatically replicates data from source databases into Redshift.
- Supports **near-real-time data availability** for analytics.
- Simplifies data integration between operational databases and the data warehouse.

**Example:** Data from an **Amazon Aurora** or supported **Amazon RDS for MySQL** database is automatically made available in Amazon Redshift for analytics.

**Key Distinction:**
- **Traditional ETL -** Extract, transform, and load data using a processing pipeline.
- **Zero-ETL Integration -** Automatically makes data available in Redshift without custom ETL pipelines.

**Exam Clue: Near-real-time analytics from operational databases without writing ETL code - Amazon Redshift Zero-ETL Integration.**

## **7.3 Amazon Redshift Data Sharing and BI Integration**

### **Data Sharing**

**Amazon Redshift Data Sharing** allows organizations to share data with other users and supported environments without manually copying or moving the underlying data.

It supports data sharing across:
- Different teams within an organization.
- Different AWS accounts.
- Different AWS Regions.
- Supported third-party data warehouse environments.

**Example:** Multiple business teams access shared analytical datasets without maintaining separate copies of the same data.

### **Business Intelligence Integration**

Amazon Redshift integrates with Business Intelligence (BI) tools to analyze and visualize data.

|BI Tool|Purpose|
|---|---|
|**Amazon QuickSight**|AWS business intelligence service for dashboards and visualizations|
|**Tableau**|Third-party BI platform for reporting and analytics|

**Key Distinction:**
- **Amazon Redshift -** Stores and analyzes data.
- **Amazon QuickSight -** Visualizes data through dashboards and reports.

## **7.4 Amazon Redshift Serverless**

**Amazon Redshift Serverless** allows users to run data warehouse workloads without manually provisioning or managing underlying compute infrastructure.

### **Key Characteristics**

- Automatically manages data warehouse compute capacity.
- Adjusts capacity based on workload demands.
- Considers query activity and processing requirements.
- Simplifies infrastructure management for analytical workloads.

**Example:** A business runs analytical reports with varying query complexity, and Amazon Redshift Serverless automatically adjusts compute resources to accommodate demand.

**Exam Clue: Data warehouse with automatic compute capacity management - Amazon Redshift Serverless.**

### **Amazon Redshift vs Amazon Athena**

Both services support SQL-based analytics but are designed for different scenarios.

| Feature             | Amazon Redshift                              | Amazon Athena                       |
| ------------------- | -------------------------------------------- | ----------------------------------- |
| **Primary Purpose** | Data warehousing                             | Ad hoc SQL queries                  |
| Data Location       | Centralized data warehouse                   | Queries data directly in Amazon S3  |
| Main Workload       | Large-scale analytical queries and reporting | Occasional, interactive SQL queries |
| Processing          | Massively Parallel Processing (MPP)          | Serverless SQL query engine         |
| Exam Clue           | Petabyte-scale data warehouse                | Query S3 directly using SQL         |

**Key Distinction:**
- **Amazon Redshift - Managed data warehouse for large-scale analytics.**
- **Amazon Athena - Serverless SQL queries directly on Amazon S3.**

## **7.5 Exam Focus**

- **Amazon Redshift -** Fully managed, petabyte-scale data warehouse.
- **OLAP -** Analytical processing and reporting workloads.
- **Massively Parallel Processing (MPP) -** Distributed analytical query processing.
- **SQL -** Query language supported by Amazon Redshift.
- **Zero-ETL Integration -** Integrate data from supported databases without custom ETL pipelines.
- **Redshift Data Sharing -** Share analytical data across teams, accounts, and supported Regions without copying it.
- **Amazon Redshift Serverless -** Automatically manages compute capacity for data warehouse workloads.
- **Amazon QuickSight / Tableau -** BI tools that can visualize Redshift data.

**Key Exam Distinctions:**

- **Petabyte-scale data warehouse - Amazon Redshift**
- **Query S3 directly using SQL - Amazon Athena**
- **Managed ETL and data transformation - AWS Glue**
- **Near-real-time database integration without custom ETL - Amazon Redshift Zero-ETL Integration**
- **Automatically scaling serverless data warehouse - Amazon Redshift Serverless**
- **Business intelligence dashboards - Amazon QuickSight**

# 8 - Amazon QuickSight (Now part of Amazon Quick Suite)

## **8.1 Amazon QuickSight Overview**

**Amazon QuickSight (now part of Amazon Quick Suite)** is a **serverless, machine learning-powered Business Intelligence (BI) service** used to create interactive dashboards, reports, and data visualizations.

It enables organizations to analyze data from multiple sources and transform it into meaningful business insights.

### **Key Characteristics**

- **Serverless:** No infrastructure to provision or manage.
- **Business Intelligence (BI):** Analyze data and create interactive dashboards.
- **Machine Learning-Powered:** Supports intelligent data analysis and visualization.
- **Multiple Data Sources:** Integrates with AWS services and external data sources.
- **Embedded Analytics:** Dashboards can be embedded directly into web applications.
- **File Uploads:** Supports analyzing data from uploaded files.

**Example:** A business uses Amazon QuickSight to visualize sales trends, customer behavior, and revenue performance through interactive dashboards.

**Key Exam Keywords: Business Intelligence, Interactive Dashboards, Data Visualization, Serverless BI.**

## **8.2 Amazon QuickSight Data Sources**

Amazon QuickSight integrates with multiple AWS analytics and database services.

| Data Source                   | Purpose                                              |
| ----------------------------- | ---------------------------------------------------- |
| **Amazon Redshift**           | Analyze data stored in a data warehouse              |
| **Amazon S3**                 | Analyze datasets stored in object storage            |
| **Amazon Athena**             | Visualize results from SQL queries on S3 data        |
| **Amazon RDS**                | Analyze data stored in relational databases          |
| **Amazon Aurora**             | Analyze data stored in Aurora databases              |
| **Amazon OpenSearch Service** | Visualize search and analytics data                  |
| **Local Files**               | Analyze uploaded datasets such as CSV, XLS, and JSON |

### **File-Based Analytics**

Amazon QuickSight supports direct file uploads for data analysis.
- Supports formats such as **CSV, XLS, and JSON**.
- Uploaded data can be used to create visualizations.
- For datasets stored centrally, **Amazon S3** can be used as a data source.

**Example:** Uploading a CSV file containing monthly sales records and creating a sales performance dashboard.

## **8.3 Embedded Analytics and BI Integration**

### **Embedded Dashboards**

**Amazon QuickSight Embedded Analytics** allows dashboards to be integrated directly into existing web applications.
- Users can view dashboards within an application.
- Eliminates the need to open a separate BI interface.
- Enables analytics within existing business workflows.

**Example:** A company embeds a sales analytics dashboard into its internal web application so employees can monitor business performance.

### **Integration with AWS Analytics Services**

A typical analytics workflow involves:
1. **Amazon S3:** Stores raw or historical data.
2. **Amazon Athena:** Queries the data stored in S3 using SQL.
3. **Amazon QuickSight:** Visualizes the queried data through interactive dashboards.

Alternatively, QuickSight can connect directly to **Amazon Redshift** for data warehouse analytics.

### **Amazon QuickSight vs Amazon Athena vs Amazon Redshift**

| Service               | Primary Purpose                         | Exam Clue                          |
| --------------------- | --------------------------------------- | ---------------------------------- |
| **Amazon QuickSight** | Business intelligence and visualization | Interactive dashboards and reports |
| **Amazon Athena**     | Serverless SQL queries on S3            | Ad hoc SQL queries directly on S3  |
| **Amazon Redshift**   | Large-scale data warehousing            | Petabyte-scale analytical database |

**Key Distinction:**

- **Amazon Redshift -** Stores and analyzes data in a data warehouse.
- **Amazon Athena -** Queries data directly in Amazon S3.
- **Amazon QuickSight -** Presents analytical data through dashboards and visualizations.

## **8.4 Exam Focus**

- **Amazon QuickSight -** Serverless, machine learning-powered BI service.
- **Amazon Quick Suite -** Suite that now includes Amazon QuickSight.
- **Interactive Dashboards -** Amazon QuickSight.
- **Business Intelligence (BI) -** Reporting, analytics, and data visualization.
- **Embedded Analytics -** Integrate QuickSight dashboards into web applications.
- **Multiple Data Sources -** Redshift, Athena, S3, RDS, Aurora, OpenSearch, and uploaded files.
- **File-Based Analytics -** Supports formats such as CSV, XLS, and JSON.

**Key Exam Distinctions:**

- **Create interactive BI dashboards - Amazon QuickSight**
- **Embed analytics dashboards into web applications - Amazon QuickSight**
- **Query data directly in Amazon S3 using SQL - Amazon Athena**
- **Petabyte-scale data warehousing - Amazon Redshift**
- **Managed ETL and data transformation - AWS Glue**
- **Real-time streaming data ingestion - Amazon Kinesis**

# 9 - \[Exercise] Build an end to end Data Pipeline using AWS Services

## **9.1 End-to-End AWS Data Analytics Pipeline**

This exercise demonstrates how multiple **AWS Analytics Services** work together to ingest, catalog, transform, query, and visualize data.

### **Services Used**

|AWS Service|Role in the Pipeline|
|---|---|
|**Amazon S3**|Stores raw and transformed datasets|
|**AWS Glue Crawler**|Automatically discovers data schemas|
|**AWS Glue Data Catalog**|Stores metadata about the datasets|
|**AWS Glue ETL Job**|Transforms and processes data|
|**Amazon Athena**|Queries S3 data directly using SQL|
|**Amazon QuickSight**|Creates interactive dashboards and visualizations|
|**AWS IAM**|Controls service permissions and access to S3|

### **Exercise Scenario**

A company has employee data stored in a CSV file containing:
- Employee details, location, email, and hobbies.
- Employee salary information for **2023**.

The goal is to:
1. Upload the 2023 employee dataset to **Amazon S3**.
2. Discover and catalog the data using **AWS Glue Crawler**.
3. Increase all employee salaries by **10%** using an **AWS Glue ETL Job**.
4. Save the transformed dataset as **2024 employee data**.
5. Query both datasets using **Amazon Athena**.
6. Visualize the 2024 dataset using **Amazon QuickSight**.

## **9.2 Data Storage and Cataloging**

### **Step 1: Store Data in Amazon S3**

**Amazon S3** acts as the data lake for this exercise.

The datasets are organized into separate folders:

```
S3 Bucket
└── company/
    ├── 2023/
    │   └── employees.csv
    └── 2024/
        └── employees.csv
```

- **2023:** Original employee data.
- **2024:** Transformed employee data with a 10% salary increase.

### **Step 2: Discover Data Using AWS Glue Crawler**

**AWS Glue Crawler** scans the employee CSV file in Amazon S3.

The crawler:
- Identifies the structure and columns of the CSV file.
- Automatically discovers the data schema.
- Creates table metadata in the **AWS Glue Data Catalog**.

In this exercise, the crawler creates a table for the 2023 dataset in the `company` catalog database.

**Important:** The Glue Data Catalog stores **metadata**, not the actual employee records. The original data remains in **Amazon S3**.

## **9.3 Data Transformation with AWS Glue**

### **Step 3: Create an AWS Glue ETL Job**

**AWS Glue ETL Jobs** perform the Extract, Transform, Load process.

The job performs the following operations:

| ETL Stage     | Action                                                |
| ------------- | ----------------------------------------------------- |
| **Extract**   | Read employee data from the 2023 dataset              |
| **Transform** | Increase every employee's salary by 10%               |
| **Load**      | Write the updated employee data to the 2024 S3 folder |

### **Salary Transformation**

The business logic applies the following calculation:
$$ \text{New Salary}=\text{Original Salary}\times1.10 $$

**Example:**

|Year|Employee Salary|
|---|---|
|2023|$80,000|
|2024|$88,000|

The Glue ETL job creates a new CSV dataset while preserving the original 2023 data.

### **Step 4: Catalog the Transformed Data**

A second **AWS Glue Crawler** scans the 2024 folder.

This creates another table in the same Glue Data Catalog database.

The catalog now contains two datasets:
- **2023 Employee Data:** Original salary information.
- **2024 Employee Data:** Updated salary information.

Both datasets can be accessed using **Amazon Athena**.

## **9.4 SQL Queries with Amazon Athena**

### **Step 5: Query the Datasets**

**Amazon Athena** allows users to run SQL queries directly against data stored in Amazon S3.

Athena uses the table metadata from the **AWS Glue Data Catalog** to identify the structure and location of the data.

For this exercise:
- Select the `company` database.
- Query the 2023 or 2024 employee table.
- Compare salaries to verify the transformation.

### **Key Observations**

- Athena can query the original 2023 dataset without moving it into a database.
- The transformed 2024 dataset is also accessible through SQL.
- Comparing employee records confirms that the Glue job increased salaries by **10%**.
- Athena requires an **Amazon S3 location to store query results**.

**Exam Clue: Query structured data stored directly in Amazon S3 using SQL - Amazon Athena.**

## **9.5 Data Visualization with Amazon QuickSight**

### **Step 6: Create Business Intelligence Dashboards**

**Amazon QuickSight** connects to Amazon Athena to visualize the employee data.

In this exercise:
1. QuickSight connects to **Amazon Athena** as its data source.
2. Athena accesses the employee tables defined in the **AWS Glue Data Catalog**.
3. QuickSight uses the 2024 employee dataset.
4. Interactive charts display information such as the **number of employees by location**.

### **Key Service Responsibilities**

|Service|Responsibility|
|---|---|
|**Amazon S3**|Stores the employee records|
|**AWS Glue Data Catalog**|Defines the dataset schema and metadata|
|**Amazon Athena**|Executes SQL queries against the S3 data|
|**Amazon QuickSight**|Visualizes the query results|

**Important:** QuickSight does not replace Athena or Glue. Each service handles a different stage of the analytics pipeline.

## **9.6 IAM Permissions and Cost Considerations**

### **IAM Permissions**

AWS analytics services require appropriate permissions to access data.
- **AWS Glue Crawler:** Requires permission to read data from S3.
- **AWS Glue ETL Job:** Requires permission to read source data and write transformed data.
- **Amazon QuickSight:** Requires appropriate permissions to access Athena and the underlying S3 datasets.

The exercise uses a Glue service role with broad S3 permissions for simplicity.

In production environments, follow the **principle of least privilege** by granting access only to the required S3 buckets and operations.

### **Cost Considerations**

Running an analytics pipeline can generate AWS charges.

| Service               | Cost Consideration                            |
| --------------------- | --------------------------------------------- |
| **Amazon S3**         | Data storage                                  |
| **AWS Glue**          | Crawlers and ETL job execution                |
| **Amazon Athena**     | Query processing and data scanned             |
| **Amazon QuickSight** | BI service usage and applicable subscriptions |

**Important:** After completing the exercise, delete unnecessary resources, including Glue jobs, crawlers, datasets, S3 objects, and QuickSight resources, to avoid ongoing costs.

## **9.7 Exam Focus**

- **Amazon S3 -** Stores raw and transformed data in a data lake.
- **AWS Glue Crawler -** Automatically discovers dataset schemas.
- **AWS Glue Data Catalog -** Stores metadata about datasets, not the underlying records.
- **AWS Glue ETL Job -** Extracts, transforms, and loads data.
- **Amazon Athena -** Queries data directly in S3 using SQL.
- **Amazon QuickSight -** Creates interactive BI dashboards.
- **AWS IAM -** Controls access between AWS analytics services.
- **Least Privilege -** Grant only the permissions required for each service.

**Key Exam Distinctions:**

- **Store large historical datasets - Amazon S3**
- **Discover data schemas automatically - AWS Glue Crawler**
- **Store dataset metadata - AWS Glue Data Catalog**
- **Transform employee salaries or clean datasets - AWS Glue ETL Job**
- **Query S3 data without loading it into a database - Amazon Athena**
- **Visualize analytical results - Amazon QuickSight**
- **Control service access to S3 - AWS IAM**

**End-to-End Pipeline Memory Aid:**

**Amazon S3 - AWS Glue Crawler - AWS Glue Data Catalog - AWS Glue ETL Job - Amazon S3 - Amazon Athena - Amazon QuickSight**

**Exam Takeaway:** Each AWS analytics service performs a specific function in the data pipeline: **storage, discovery, transformation, querying, or visualization**.

# 10 - Section Summary

## **10.1 AWS Analytics Services Summary**

AWS provides different analytics services for **data ingestion, processing, transformation, storage, analysis, and visualization**.

For the **AWS Certified Cloud Practitioner (CLF-C02)** exam, focus on identifying the correct service based on the keywords in a scenario.

### **AWS Analytics Services - Scenario Matching**

| Exam Scenario / Keyword                                           | AWS Service                                 |
| ----------------------------------------------------------------- | ------------------------------------------- |
| **Big Data processing using Hadoop frameworks**                   | **Amazon EMR**                              |
| **Real-time streaming data analytics**                            | **Amazon Managed Service for Apache Flink** |
| **Transform and deliver streaming data to storage**               | **Amazon Data Firehose**                    |
| **Managed ETL (Extract, Transform, Load)**                        | **AWS Glue**                                |
| **Big Data processing and custom ETL**                            | **Amazon EMR**                              |
| **Ad hoc SQL queries on Amazon S3 data**                          | **Amazon Athena**                           |
| **BI dashboards, graphs, and charts**                             | **Amazon QuickSight**                       |
| **Streaming ingestion using Apache Kafka**                        | **Amazon MSK**                              |
| **Petabyte-scale data warehouse and OLAP**                        | **Amazon Redshift**                         |
| **Automatic schema discovery and data cataloging**                | **AWS Glue**                                |
| **Migration of existing Hadoop workloads to AWS**                 | **Amazon EMR**                              |
| **Real-time streaming ingestion from mobile apps or IoT devices** | **Amazon Kinesis Data Streams**             |
| **Stream video from cameras or connected devices**                | **Amazon Kinesis Video Streams**            |
| **Low-cost storage for large historical datasets**                | **Amazon S3**                               |

## **10.2 Important Service Distinctions**

### **Data Ingestion vs Processing vs Analytics vs Storage**

|Requirement|AWS Service|
|---|---|
|**Ingest streaming events**|Amazon Kinesis Data Streams|
|**Ingest streaming data using Kafka**|Amazon MSK|
|**Process streaming data in real time**|Amazon Managed Service for Apache Flink|
|**Transform and deliver streaming data**|Amazon Data Firehose|
|**Perform managed ETL jobs**|AWS Glue|
|**Process Big Data using Hadoop or Spark**|Amazon EMR|
|**Store raw or historical data**|Amazon S3|
|**Query data directly in S3**|Amazon Athena|
|**Analyze data using a data warehouse**|Amazon Redshift|
|**Visualize analytical data**|Amazon QuickSight|

### **Commonly Confused Services**

- **Amazon Kinesis Data Streams vs Apache Flink:** Data ingestion vs real-time data processing and analytics.
- **Amazon Kinesis Data Streams vs Amazon Data Firehose:** Collect streaming data vs deliver streaming data to destinations.
- **AWS Glue vs Amazon EMR:** Managed ETL and data integration vs flexible Big Data processing using open-source frameworks.
- **Amazon Athena vs Amazon Redshift:** Ad hoc SQL queries directly on S3 vs petabyte-scale data warehousing.
- **Amazon Redshift vs Amazon QuickSight:** Data warehousing and analytics vs BI dashboards and visualization.
- **AWS Glue Crawler vs AWS Glue Data Catalog:** Discover schemas vs store dataset metadata.
- **Amazon Kinesis vs Amazon MSK:** AWS-native streaming vs managed Apache Kafka.

## **10.3 Exam Focus**

**Recognize the keywords in each exam question:**
- **Hadoop / Spark / Big Data processing - Amazon EMR**
- **Real-time streaming analytics - Amazon Managed Service for Apache Flink**
- **Streaming data delivery to S3 or Redshift - Amazon Data Firehose**
- **Managed ETL - AWS Glue**
- **SQL queries directly on S3 - Amazon Athena**
- **BI dashboards and visualization - Amazon QuickSight**
- **Managed Apache Kafka - Amazon MSK**
- **Data warehouse / OLAP - Amazon Redshift**
- **Schema discovery - AWS Glue Crawler**
- **Metadata repository - AWS Glue Data Catalog**
- **Hadoop migration - Amazon EMR**
- **Streaming data ingestion - Amazon Kinesis Data Streams**
- **Video streaming ingestion - Amazon Kinesis Video Streams**
- **Data lake storage - Amazon S3**

**Most Important Exam Tip:** Distinguish whether a question asks about **ingesting, transforming, processing, storing, querying, or visualizing data**. The required operation is usually the strongest clue for selecting the correct AWS analytics service.

# 11 - Quiz

## **11.1 Practice Question**

### **Original Question**

Your organization wants to store and analyze large volumes of structured, semi-structured, and unstructured data in a centralized, scalable repository. Which AWS service is most suitable for storing such data?

### **Choices**

A. Amazon Redshift  
B. Amazon RDS  
C. Amazon S3  
D. Amazon DynamoDB

### **Correct Answer**

**C. Amazon S3**

### **Why?**

**Amazon S3** provides scalable, cost-effective object storage and is commonly used as the foundation for a **Data Lake**.
- Supports structured, semi-structured, and unstructured data.
- Stores massive datasets in a centralized repository.
- **Amazon Redshift** is primarily a data warehouse for analytics.
- **Amazon RDS** and **Amazon DynamoDB** are databases for application workloads.

**Exam Clue: Centralized storage for all data types / Data Lake - Amazon S3.**

## **11.2 Practice Question**

### **Original Question**

Your company needs to process and analyze large-scale datasets using Apache Spark, and you prefer a fully managed service. Which AWS service should you use?

### **Choices**

A. Amazon EMR  
B. Amazon Redshift  
C. Amazon Kinesis Data Streams  
D. Amazon QuickSight

### **Correct Answer**

**A. Amazon EMR**

### **Why?**

**Amazon EMR (Elastic MapReduce)** is a managed Big Data processing service that supports frameworks such as **Apache Spark, Hadoop, and Hive**.
- **Amazon Redshift:** Data warehousing and SQL analytics.
- **Amazon Kinesis Data Streams:** Real-time data ingestion.
- **Amazon QuickSight:** Business intelligence and visualization.

**Exam Clue: Large-scale processing using Spark or Hadoop - Amazon EMR.**

## **11.3 Practice Question**

### **Original Question**

Your team needs to run SQL queries on large datasets stored in Amazon S3 without moving the data into a database. Which service should you use?

### **Choices**

A. Amazon Redshift  
B. Amazon Kinesis Data Streams  
C. AWS Glue  
D. Amazon Athena

### **Correct Answer**

**D. Amazon Athena** 

### **Why?**

**Amazon Athena** is a serverless, interactive SQL query service that allows users to query data stored directly in **Amazon S3**.
- No separate database is required.
- Supports ad hoc SQL queries.
- **Amazon Redshift:** Managed data warehouse.
- **AWS Glue:** ETL and data integration.
- **Amazon Kinesis Data Streams:** Streaming data ingestion.

**Exam Clue: Run SQL queries directly on S3 without moving data - Amazon Athena.**

## **11.4 Practice Question**

### **Original Question**

Which service allows you to run serverless ETL jobs to process data at scale?

### **Choices**

A. AWS Glue  
B. Amazon EMR  
C. Amazon Redshift  
D. Amazon QuickSight

### **Correct Answer**

**A. AWS Glue**

### **Why?**

**AWS Glue** is a serverless data integration service designed for **ETL (Extract, Transform, Load)** workloads.
- Extracts data from multiple sources.
- Cleans, transforms, and prepares datasets.
- Loads processed data into target systems.
- **Amazon EMR** also supports data processing but focuses on flexible Big Data frameworks.

**Exam Clue: Serverless ETL / Managed data transformation - AWS Glue.**

## **11.5 Practice Question**

### **Original Question**

You need to create interactive dashboards for your sales team to visualize data stored in Amazon Redshift. Which service should you use?

### **Choices**

A. Amazon QuickSight  
B. Amazon Kinesis Data Analytics  
C. AWS Glue  
D. Amazon EMR

### **Correct Answer**

**A. Amazon QuickSight** 

### **Why?**

**Amazon QuickSight** is a serverless Business Intelligence (BI) service used to create interactive dashboards, charts, and visualizations.
- Integrates with **Amazon Redshift** as a data source.
- Supports reporting and business analytics.
- **Amazon Kinesis Data Analytics:** Real-time streaming analytics.
- **AWS Glue:** Data transformation and ETL.
- **Amazon EMR:** Big Data processing.

**Exam Clue: Interactive BI dashboards and visualization - Amazon QuickSight.**

## **11.6 Practice Question**

### **Original Question**

Your IoT devices send a continuous stream of telemetry data to AWS. You want to process the streaming data and make it available for the search in Amazon OpenSearch?

### **Choices**

A. Amazon EMR  
B. AWS Glue  
C. AWS Lambda  
D. Amazon Data Firehose

### **Correct Answer**

**D. Amazon Data Firehose**

### **Why?**

**Amazon Data Firehose** is a managed service for delivering streaming data to supported destinations, including **Amazon OpenSearch Service**.
- Continuously receives and delivers streaming data.
- Can transform records before delivery using **AWS Lambda**.
- Supports destinations such as Amazon S3, Redshift, and OpenSearch.
- **AWS Glue** and **Amazon EMR** focus on broader ETL and Big Data processing workloads.

**Important Distinction:**
- **Amazon Kinesis Data Streams -** Ingest streaming data.
- **Amazon Data Firehose -** Transform and deliver streaming data.
- **Amazon OpenSearch Service -** Search and analyze ingested data.

**Exam Clue: Deliver real-time streaming data to OpenSearch - Amazon Data Firehose.**

## **11.7 Practice Question**

### **Original Question**

Your organization processes massive amounts of unstructured data using frameworks like Hadoop and Spark. Which service is most suitable?

### **Choices**

A. Amazon EMR  
B. AWS Glue  
C. Amazon S3  
D. Amazon Redshift

### **Correct Answer**

**A. Amazon EMR** 

### **Why?**

**Amazon EMR** supports distributed Big Data processing using open-source frameworks such as **Apache Hadoop and Apache Spark**.
- Designed for large-scale processing workloads.
- **AWS Glue:** Managed ETL service that also supports Spark.
- **Amazon S3:** Object storage, not a Big Data processing engine.
- **Amazon Redshift:** Analytical data warehouse.

The strongest clue is the requirement to use **Hadoop and Spark frameworks**.

**Exam Clue: Big Data processing using Hadoop or Spark - Amazon EMR.**

## **11.8 Practice Question**

### **Original Question**

Your organization needs to clean and transform raw data from multiple sources before loading it into a data warehouse. Which service should you use?

### **Choices**

A. Amazon Kinesis Data Streams  
B. Amazon QuickSight  
C. Amazon Redshift  
D. AWS Glue

### **Correct Answer**

**D. AWS Glue**

### **Why?**

**AWS Glue** is designed for **ETL and data preparation**.
- Extracts data from multiple sources.
- Cleans and transforms raw data.
- Loads prepared data into destinations such as **Amazon Redshift**.
- **Amazon Redshift** is the target data warehouse, not the primary ETL service.
- **Amazon QuickSight:** Data visualization.
- **Amazon Kinesis Data Streams:** Real-time data ingestion.

**Exam Clue: Clean, transform, and load data into a warehouse - AWS Glue.**

## **11.9 Practice Question**

### **Original Question**

You need a fully managed data warehouse for processing and analyzing petabytes of structured and semi-structured data. Which service is best suited?

### **Choices**

A. Amazon Redshift  
B. Amazon EMR  
C. AWS Glue  
D. Amazon Kinesis Data Streams

### **Correct Answer**

**A. Amazon Redshift** 

### **Why?**

**Amazon Redshift** is a fully managed, petabyte-scale data warehouse designed for large-scale analytical workloads.
- Supports **OLAP (Online Analytical Processing)**.
- Uses **Massively Parallel Processing (MPP)**.
- Supports SQL-based analytical queries.
- **Amazon EMR:** Distributed Big Data processing.
- **AWS Glue:** ETL and data integration.
- **Amazon Kinesis Data Streams:** Real-time data ingestion.

**Exam Clue: Fully managed petabyte-scale data warehouse - Amazon Redshift.**

## **11.10 Practice Question**

### **Original Question**

Your application processes live stock market data streams that require real-time analytics. Which service should you use?

### **Choices**

A. Amazon Redshift  
B. Amazon Kinesis Data Analytics  
C. AWS Glue  
D. Amazon EMR

### **Correct Answer**

**B. Amazon Kinesis Data Analytics** 

### **Why?**

**Amazon Kinesis Data Analytics** is the service name used in the quiz for real-time analytics on streaming data.

The lesson covers **Amazon Managed Service for Apache Flink** for this type of workload.
- Processes continuously arriving streaming events.
- Supports real-time analytics on data such as stock market updates.
- **Amazon Redshift:** Data warehousing.
- **AWS Glue:** ETL and data transformation.
- **Amazon EMR:** Large-scale distributed Big Data processing.

**Exam Clue: Real-time analysis of streaming events - Amazon Managed Service for Apache Flink (formerly Amazon Kinesis Data Analytics).**

## **11.11 Exam Focus**

### **AWS Analytics Services - Key Exam Associations**

| Exam Keyword / Scenario                   | Correct AWS Service                         |
| ----------------------------------------- | ------------------------------------------- |
| **Centralized Data Lake storage**         | **Amazon S3**                               |
| **Hadoop / Spark processing**             | **Amazon EMR**                              |
| **SQL queries directly on S3**            | **Amazon Athena**                           |
| **Serverless ETL processing**             | **AWS Glue**                                |
| **BI dashboards and visualization**       | **Amazon QuickSight**                       |
| **Streaming data delivery to OpenSearch** | **Amazon Data Firehose**                    |
| **Clean and transform raw data**          | **AWS Glue**                                |
| **Petabyte-scale data warehouse**         | **Amazon Redshift**                         |
| **Real-time streaming analytics**         | **Amazon Managed Service for Apache Flink** |
| **Real-time streaming ingestion**         | **Amazon Kinesis Data Streams**             |

### **Important Exam Distinctions**

- **Amazon S3 vs Amazon Redshift -** Data Lake storage vs data warehousing.
- **AWS Glue vs Amazon EMR -** Managed ETL vs flexible Big Data processing.
- **Amazon Athena vs Amazon Redshift -** Query data directly in S3 vs use a data warehouse.
- **Amazon Kinesis Data Streams vs Amazon Data Firehose -** Streaming ingestion vs streaming delivery.
- **Amazon Data Firehose vs Apache Flink -** Deliver streaming data vs analyze streaming data in real time.
- **Amazon Redshift vs Amazon QuickSight -** Analytical data warehouse vs BI visualization.

**Final Exam Tip:** Pay close attention to the verbs in AWS analytics questions:

- **Store - Amazon S3**
- **Ingest streams - Amazon Kinesis Data Streams**
- **Transform - AWS Glue**
- **Process Big Data - Amazon EMR**
- **Deliver streams - Amazon Data Firehose**
- **Query S3 - Amazon Athena**
- **Data Warehouse - Amazon Redshift**
- **Visualize - Amazon QuickSight**
- **Analyze streams in real time - Amazon Managed Service for Apache Flink**