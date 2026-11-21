# 1 - Overview of AWS AI/ML Services

## **1.1 AWS AI/ML Three-Layer Approach**

AWS provides **three layers** for building and using Artificial Intelligence (AI) and Machine Learning (ML) solutions.

| Layer                    | Purpose                                                        | Key Characteristic                                |
| ------------------------ | -------------------------------------------------------------- | ------------------------------------------------- |
| **Infrastructure Layer** | Build custom ML solutions using AWS compute and infrastructure | Maximum flexibility, more management              |
| **ML Platform Layer**    | Build, train, and deploy ML models using **Amazon SageMaker**  | AWS manages much of the underlying infrastructure |
| **AI Services Layer**    | Use pre-built AI capabilities without developing ML models     | Fully managed, ready-to-use AI services           |

### **1. Infrastructure Layer**

Provides the underlying infrastructure required to build and run custom ML models.

Key capabilities:
- Powerful **CPUs and GPUs** for ML workloads.
- **Elastic Fabric Adapter (EFA)** for enhanced networking.
- **Deep Learning AMIs** and specialized container images.
- Custom-built ML chips for efficient training and inference.
- Support for deploying ML frameworks of your choice.

**Key characteristics:**

- Maximum flexibility and customization.
- Customers manage most of the ML development and infrastructure.
- Suitable for experienced ML engineers and practitioners.
- ML workloads can run on **Amazon EC2**, **Amazon ECS**, or **Amazon EKS**.

### **2. ML Platform Layer - Amazon SageMaker**

**Amazon SageMaker** is AWS's managed machine learning platform for building, training, and deploying ML models.

Key capabilities:
- **Build:** Develop ML models using pre-integrated ML frameworks.
- **Train:** Train models using managed infrastructure.
- **Deploy:** Deploy models into testing or production environments.
- **Evaluate:** Compare model versions and performance.
- **Fine-tune:** Improve models based on results.

**Key characteristics:**

- AWS manages much of the underlying ML infrastructure.
- Reduces infrastructure management and operational complexity.
- Designed for developers and data scientists building custom ML models.

**Exam clue: Build, train, and deploy custom ML models - Amazon SageMaker**

### **3. AI Services Layer**

Provides **pre-trained, fully managed AI services** that can be used directly without building ML models.

Key characteristics:
- No need to develop or train custom ML models.
- AWS manages the underlying infrastructure.
- Provides ready-to-use AI capabilities for common business requirements.
- Examples include image recognition, speech processing, text analysis, chatbots, and forecasting.

**Exam clue: Need AI capabilities without building ML models - AWS AI Services**

## **1.2 AWS AI Services Overview**

AWS provides AI services across several categories.

| Category          | AWS Service               | Main Purpose                                         |
| ----------------- | ------------------------- | ---------------------------------------------------- |
| Image & Video     | **Amazon Rekognition**    | Identify objects and faces in images and videos      |
| Speech            | **Amazon Polly**          | Convert text into speech                             |
| Speech            | **Amazon Transcribe**     | Convert speech into text                             |
| Text              | **Amazon Textract**       | Extract text and data from scanned documents         |
| Text              | **Amazon Translate**      | Translate text between languages                     |
| Text              | **Amazon Comprehend**     | Analyze text using Natural Language Processing (NLP) |
| Enterprise Search | **Amazon Kendra**         | Intelligent search across enterprise documents       |
| Chatbots          | **Amazon Lex**            | Build conversational chatbots                        |
| Recommendations   | **Amazon Personalize**    | Generate personalized recommendations                |
| Forecasting       | **Amazon Forecast**       | Predict future demand using historical data          |
| Fraud Detection   | **Amazon Fraud Detector** | Detect potentially fraudulent activities             |
| Contact Center    | **Amazon Connect**        | Cloud-based contact center with AI integrations      |

### **Image and Video Processing**

**Amazon Rekognition**
- Analyzes images and videos.
- Detects objects and faces.
- Used for automated image and video analysis.

**Exam clue: Detect objects or faces in images/videos - Amazon Rekognition**

### **Speech Processing**

**Amazon Polly**
- Converts **Text-to-Speech (TTS)**.
- Generates natural-sounding speech from written text.
- Example: Automated voice responses in telephone systems (IVR).

**Amazon Transcribe**
- Converts **Speech-to-Text (STT)**.
- Transcribes spoken audio into written text.
- Examples:
    - Generate video captions.
    - Convert recorded customer calls into text.

**Key distinction:**
- **Polly - Text to Speech**
- **Transcribe - Speech to Text**

### **Text Processing**

**Amazon Textract**
- Extracts text and data from documents using **Optical Character Recognition (OCR)**.
- Supports scanned documents, printed text, and handwriting.
- Examples: Digitizing invoices, cheques, and forms.

**Amazon Translate**
- Translates text between different languages.
- Supports multilingual applications.

**Amazon Comprehend**
- Uses **Natural Language Processing (NLP)** to analyze text.
- Identifies:
    - Sentiment (positive or negative).
    - Important entities such as names, products, and numbers.
- Example: Analyzing customer reviews to determine customer sentiment.

**Key distinction:**
- **Textract - Extract text from documents**
- **Translate - Translate between languages**
- **Comprehend - Understand and analyze text**

### **Enterprise Search**

**Amazon Kendra**
- Provides intelligent **enterprise search** capabilities.
- Searches information across indexed organizational documents.
- Allows users to ask questions using natural language.
- Returns relevant answers with references to source documents.

**Example:** An employee asks, "How many annual leave days do I have?" and Kendra retrieves the relevant information from company HR documents.

**Exam clue: Intelligent enterprise document search using natural-language questions - Amazon Kendra**

### **Conversational AI**

**Amazon Lex**
- Builds conversational interfaces and interactive chatbots.
- Supports automated interactions with users.
- Example: Customer support chatbot on an e-commerce website.

**Exam clue: Build an interactive chatbot - Amazon Lex**

### **Personalized Recommendations**

**Amazon Personalize**
- Generates recommendations based on user behavior and activity.
- Uses historical interactions and user preferences.

Common use cases:
- E-commerce product recommendations.
- Personalized content suggestions.
- Targeted recommendations.

**Exam clue: Recommend products based on customer purchase history - Amazon Personalize**

### **Forecasting**

**Amazon Forecast**
- Uses historical data and trends to predict future outcomes.
- Supports demand forecasting and inventory planning.

**Example:** Predicting product demand to determine how much inventory a business should maintain.

**Exam clue: Predict future demand using historical data - Amazon Forecast**

### **Fraud Detection**

**Amazon Fraud Detector**
- Detects potentially fraudulent activities using ML.
- Helps identify suspicious transactions and payment activities.

**Exam clue: Detect suspicious or fraudulent transactions - Amazon Fraud Detector**

### **Intelligent Contact Center**

**Amazon Connect**
- AWS's cloud-based **contact center service**.
- Supports customer service and call center operations.
- Can integrate AI services such as:
    - **Amazon Lex** for conversational chatbots.
    - **Amazon Polly** for text-to-speech.
    - **Amazon Transcribe** for speech-to-text.

**Exam clue: Build a cloud-based customer contact center - Amazon Connect**

## **1.3 Important AI/ML Service Distinctions**

### **Custom ML Models vs Pre-Built AI Services**

|Requirement|AWS Solution|
|---|---|
|Full infrastructure control for custom ML models|**Infrastructure Layer (EC2/ECS/EKS)**|
|Build, train, and deploy custom ML models|**Amazon SageMaker**|
|Use ready-made AI capabilities without training models|**AWS AI Services**|

### **Commonly Confused AI Services**

|Scenario|Correct Service|
|---|---|
|Convert written text into spoken audio|**Amazon Polly**|
|Convert a recorded conversation into text|**Amazon Transcribe**|
|Extract text from a scanned invoice|**Amazon Textract**|
|Translate English text into another language|**Amazon Translate**|
|Determine whether a customer review is positive or negative|**Amazon Comprehend**|
|Search internal company documents using natural-language questions|**Amazon Kendra**|
|Create an interactive customer support chatbot|**Amazon Lex**|
|Suggest products based on user preferences|**Amazon Personalize**|
|Predict future inventory demand|**Amazon Forecast**|
|Identify potentially fraudulent payments|**Amazon Fraud Detector**|

**Important:** Amazon SageMaker is used to **build custom ML models**, whereas pre-built AWS AI services provide specific AI capabilities without requiring customers to build models.

## **1.4 Exam Focus**

1. **Three AWS AI/ML layers**
	- Infrastructure - Maximum control and customization.
	- ML Platform - Amazon SageMaker.
	- AI Services - Ready-to-use AI capabilities.
2. **Build, train, and deploy ML models - Amazon SageMaker**
3. **Identify objects and faces in images/videos - Amazon Rekognition**
4. **Text-to-Speech - Amazon Polly**
5. **Speech-to-Text - Amazon Transcribe**
6. **Extract text from scanned documents using OCR - Amazon Textract**
7. **Translate languages - Amazon Translate**
8. **Sentiment analysis and NLP - Amazon Comprehend**
9. **Intelligent enterprise search - Amazon Kendra**
10. **Build conversational chatbots - Amazon Lex**
11. **Personalized product recommendations - Amazon Personalize**
12. **Historical data forecasting - Amazon Forecast**
13. **Detect fraudulent transactions - Amazon Fraud Detector**
14. **Cloud contact center - Amazon Connect**

**Key exam distinction:** Identify whether a question requires **custom ML model development (Amazon SageMaker)** or a **ready-to-use AI capability (AWS AI Services)**.

# 2 - \[Demo] Amazon Rekognition

## **2.1 How AWS AI Services Are Consumed**

AWS AI services are typically accessed through **API calls** from applications such as web or mobile apps.

### **How It Works**

1. An application sends an **API request** to an AWS AI service.
2. The request provides input data such as images, videos, or text.
3. The AI service processes the data and returns a response.
4. The application uses the response to perform the required action.

### **Integration with Amazon S3**

- **Amazon Simple Storage Service (Amazon S3)** is commonly used to store images and videos.
- Many AWS AI services integrate with **Amazon S3**.
- Applications can reference files stored in S3 instead of transferring large files directly in API requests.
- This helps reduce unnecessary data transfers.

**Key concept:** AWS AI services provide ready-to-use AI capabilities through APIs without requiring applications to build their own ML models.

## **2.2 Amazon Rekognition**

**Amazon Rekognition** is a fully managed, **computer vision-based AI service** that analyzes images and videos to identify objects, people, text, and scenes.

It provides pre-trained image and video analysis capabilities without requiring users to build custom ML models.

### **Key Capabilities**

| Capability                   | Description                                                 | Example Use Case                                         |
| ---------------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| **Object & Scene Detection** | Identifies objects, activities, and scenes in images/videos | Detect cars, buses, roads, or buildings                  |
| **Facial Analysis**          | Analyzes facial characteristics and expressions             | Identify facial expressions such as happiness or sadness |
| **Face Comparison**          | Compares faces across images                                | Determine whether two images show the same person        |
| **Celebrity Recognition**    | Recognizes known celebrities in images                      | Identify celebrities in uploaded photos                  |
| **Text Detection**           | Detects text appearing within images                        | Extract text from signs or images                        |
| **Content Moderation**       | Detects potentially inappropriate visual content            | Filter explicit or suggestive images/videos              |
| **Video Analysis**           | Analyzes video content, including detecting blank segments  | Identify specific content or segments in videos          |

### **Common Use Cases**

**1. Content Moderation**
- Detect potentially inappropriate or explicit content.
- Screen user-uploaded images and videos before publishing.
- Example: A social media platform automatically checks uploaded images for inappropriate content.

**2. Object and Scene Recognition**
- Identify objects and environments within images.
- Example: Detect whether an image contains cars, roads, buses, or people.

**3. Facial Recognition and Comparison**
- Analyze faces and compare whether images contain the same person.
- Recognize celebrities in uploaded images.
- Example: Detect celebrity photos submitted as profile pictures.

**4. Text Detection**
- Detect text embedded within images.
- Example: Identify text appearing on signs or other visual content.

### **Amazon Rekognition vs Amazon Textract**

Both services can work with text in images, but they have different primary purposes.

| Service                | Primary Purpose                                                           | Exam Clue                                          |
| ---------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| **Amazon Rekognition** | Computer vision for analyzing images and videos, including detecting text | Identify objects, faces, or scenes                 |
| **Amazon Textract**    | Extract text and structured data from scanned documents                   | Digitize invoices, forms, or handwritten documents |

**Key distinction:**
- **Rekognition - Image and video analysis**
- **Textract - Document text and data extraction**

## **2.3 Exam Focus**

1. **Computer vision and image/video analysis - Amazon Rekognition**
2. **Detect objects, people, and scenes - Amazon Rekognition**
3. **Analyze facial expressions or compare faces - Amazon Rekognition**
4. **Recognize celebrities in images - Amazon Rekognition**
5. **Detect inappropriate images or videos - Amazon Rekognition Content Moderation**
6. **Detect text within images - Amazon Rekognition**
7. **Extract text and structured data from scanned documents - Amazon Textract**
8. **Store images/videos for AI processing - Amazon S3**
9. **Consume AWS AI services - API calls**

**Key exam distinction:** If a scenario involves **identifying objects, faces, scenes, or inappropriate content in images/videos**, the correct service is typically **Amazon Rekognition**.

# 3 - \[Demo] Amazon Polly

## **3.1 Amazon Polly**

**Amazon Polly** is a fully managed AWS AI service that converts **text into natural-sounding speech** using **Text-to-Speech (TTS)** technology.

It allows applications to generate spoken audio from written text without building custom ML models.

### **Key Features**

- **Text-to-Speech (TTS):** Converts written text into spoken audio.
- **Speech Synthesis:** Generates natural-sounding speech from text.
- **Multiple Voices:** Supports different voices for speech generation.
- **Multiple Languages:** Supports speech generation in various languages.
- **Speech Customization:** Allows control over pronunciation, punctuation, phrasing, and pauses.

### **Common Use Cases**

| Use Case                             | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| **Interactive Voice Response (IVR)** | Generate automated voice responses in telephone systems                |
| **Podcasts**                         | Convert written content into spoken audio                              |
| **Automotive Systems**               | Read vehicle instructions aloud through Human-Machine Interfaces (HMI) |
| **Automated Announcements**          | Generate spoken notifications or instructions                          |

**Example:** A telephone system uses Amazon Polly to convert the message "You have insufficient balance to make this call" into spoken audio.

**Exam clue: Convert written text into natural-sounding speech - Amazon Polly**

## **3.2 Amazon Polly vs Amazon Transcribe**

Both services process speech but perform **opposite functions**.

| Feature             | Amazon Polly                           | Amazon Transcribe                  |
| ------------------- | -------------------------------------- | ---------------------------------- |
| **Primary Purpose** | Text-to-Speech (TTS)                   | Speech-to-Text (STT)               |
| **Input**           | Written text                           | Spoken audio                       |
| **Output**          | Spoken audio                           | Written text                       |
| **Common Use Case** | IVR systems, audio narration, podcasts | Call transcription, video captions |

**Key distinction:**
- **Amazon Polly - Text to Speech**
- **Amazon Transcribe - Speech to Text**

## **3.3 Exam Focus**

1. **Text-to-Speech (TTS) - Amazon Polly**
2. **Generate natural-sounding speech - Amazon Polly**
3. **Speech synthesis with different voices and languages - Amazon Polly**
4. **Automated voice responses and IVR systems - Amazon Polly**
5. **Convert written content into podcasts or audio narration - Amazon Polly**
6. **Speech-to-Text (STT) - Amazon Transcribe**

**Key exam distinction:** If a scenario requires **converting text into spoken audio**, choose **Amazon Polly**. If it requires **converting spoken audio into written text**, choose **Amazon Transcribe**.

# 4 - \[Demo] Amazon Transcribe

## **4.1 Amazon Transcribe**

**Amazon Transcribe** is a fully managed AWS AI service that uses **Automatic Speech Recognition (ASR)** to convert spoken audio into written text.

It supports both **real-time transcription** and **batch transcription** of recorded audio or video files.

### **Key Features**

- **Speech-to-Text (STT):** Converts spoken audio into written text.
- **Automatic Language Identification:** Automatically detects the language being spoken.
- **Multiple Languages:** Supports transcription in over 100 languages.
- **PII Redaction:** Detects and redacts **Personally Identifiable Information (PII)**, such as credit card numbers, from transcription output.
- **Real-Time Transcription:** Converts live speech into text as it is spoken.
- **Batch Transcription:** Processes previously recorded audio or video files.
- **Custom Vocabulary:** Improves transcription accuracy for specialized terminology.
- **Custom Language Models:** Supports customization for domain-specific language and terminology.

### **Common Use Cases**

| Use Case                       | Description                                               |
| ------------------------------ | --------------------------------------------------------- |
| **Call Center Transcription**  | Convert recorded customer service conversations into text |
| **Video Captions & Subtitles** | Automatically generate captions for videos                |
| **Media Search**               | Convert media content into searchable text and metadata   |
| **Real-Time Transcription**    | Transcribe live conversations or speech                   |
| **PII Redaction**              | Remove sensitive information from transcription output    |

**Example:** A call center uses Amazon Transcribe to convert recorded customer conversations into text while redacting sensitive information such as credit card numbers.

**Exam clue: Convert spoken audio into written text - Amazon Transcribe**

## **4.2 Amazon Transcribe Medical**

**Amazon Transcribe Medical** is a specialized version of Amazon Transcribe designed for the **healthcare industry**.

It recognizes medical terminology and converts healthcare-related conversations into written text.

### **Key Features**
- Recognizes specialized **medical terminology**.
- Understands terms related to diseases, treatments, and healthcare procedures.
- Transcribes conversations between healthcare practitioners and patients.
- Helps automate medical documentation.

### **Common Use Cases**

- Documenting doctor-patient conversations.
- Transcribing clinical discussions.
- Creating written medical records from spoken conversations.

**Exam clue: Transcribe medical conversations using specialized healthcare terminology - Amazon Transcribe Medical**

## **4.3 Amazon Transcribe Integration with AWS Services**

Amazon Transcribe can integrate with other AWS services to automate transcription workflows.

### **Example: Automated Video Transcription**

1. A video file is uploaded to **Amazon S3**.
2. The upload event triggers an **AWS Lambda** function.
3. Lambda starts an **Amazon Transcribe** transcription job using the uploaded file.
4. Amazon Transcribe converts the audio into text.
5. The transcription output is stored in **Amazon S3**.
6. A notification is generated when the transcription job completes.

### **Related AWS Services**

|Service|Role|
|---|---|
|**Amazon S3**|Stores input media files and transcription output|
|**AWS Lambda**|Automatically triggers transcription jobs|
|**Amazon Transcribe**|Converts audio into written text|

**Key concept:** Amazon Transcribe can be combined with **Amazon S3** and **AWS Lambda** to build automated, event-driven transcription workflows.

## **4.4 Amazon Transcribe Customization**

### **Custom Vocabulary**

**Custom Vocabulary** allows Amazon Transcribe to recognize specialized words, acronyms, and technical terminology.

Examples:
- Recognize **AWS** and format it using uppercase letters.
- Recognize **S3** with the correct alphanumeric formatting.
- Recognize technical terms such as **NAT Gateway** and **AWS Direct Connect**.

Common use cases:
- Technical training videos.
- Industry-specific terminology.
- Specialized business conversations.

### **Custom Language Models**

**Custom Language Models (CLM)** allow Amazon Transcribe to be customized using domain-specific text data.
- Useful when an application contains highly specialized terminology.
- Requires additional training data containing relevant words, phrases, and sentences.
- Provides more advanced customization than a custom vocabulary.

**Key distinction:**
- **Custom Vocabulary - Improve recognition of specific words and terms**
- **Custom Language Model - Adapt transcription to specialized language patterns**

## **4.5 Amazon Polly vs Amazon Transcribe**

|Feature|Amazon Polly|Amazon Transcribe|
|---|---|---|
|**Technology**|Text-to-Speech (TTS)|Automatic Speech Recognition (ASR)|
|**Primary Purpose**|Convert text into speech|Convert speech into text|
|**Input**|Written text|Audio|
|**Output**|Spoken audio|Written text|
|**Common Use Case**|IVR systems, audio narration|Video captions, call transcription|
|**Specialized Variant**|Not covered in this lesson|Amazon Transcribe Medical|

**Key distinction:**
- **Amazon Polly - Text to Speech**
- **Amazon Transcribe - Speech to Text**

## **4.6 Exam Focus**

1. **Speech-to-Text (STT) - Amazon Transcribe**
2. **Automatic Speech Recognition (ASR) - Amazon Transcribe**
3. **Convert recorded customer calls into text - Amazon Transcribe**
4. **Generate video captions and subtitles - Amazon Transcribe**
5. **Transcribe live conversations - Real-Time Transcription**
6. **Detect and redact sensitive information - PII Redaction**
7. **Recognize specialized terminology - Custom Vocabulary**
8. **Customize domain-specific transcription - Custom Language Models**
9. **Transcribe healthcare conversations - Amazon Transcribe Medical**
10. **Automate transcription using S3 events - AWS Lambda + Amazon Transcribe**
11. **Text-to-Speech (TTS) - Amazon Polly**

**Key exam distinction:** If a scenario requires **converting spoken audio into written text**, choose **Amazon Transcribe**. If the scenario specifically involves **medical terminology or healthcare conversations**, choose **Amazon Transcribe Medical**.

# 5 - \[Demo] Amazon Textract

## **5.1 Amazon Textract**

**Amazon Textract** is a fully managed AWS AI service that automatically extracts **printed text, handwriting, and structured data** from scanned documents using **Optical Character Recognition (OCR)** and machine learning.

Unlike traditional OCR, Amazon Textract can understand the **layout and structure** of documents, including forms and tables.

### **Key Features**

- **Printed Text Recognition:** Extracts text from printed documents.
- **Handwriting Recognition:** Recognizes and extracts handwritten text.
- **Form Extraction:** Identifies and extracts information from forms, including related fields and values.
- **Table Extraction:** Recognizes tables and preserves their structure, including rows and columns.
- **Document Layout Analysis:** Understands the arrangement of information within documents.
- **Structured Output:** Returns extracted information in structured formats such as **JSON**.

### **Common Use Cases**

| Use Case                  | Description                                         |
| ------------------------- | --------------------------------------------------- |
| **Financial Documents**   | Extract data from invoices and financial reports    |
| **Medical Records**       | Digitize handwritten or printed medical documents   |
| **Insurance Claims**      | Extract information from insurance forms and claims |
| **Tax Documents**         | Process tax forms and financial records             |
| **Identity Documents**    | Extract information from passports and ID documents |
| **Handwritten Documents** | Convert handwritten notes into digital text         |

**Example:** A company uses Amazon Textract to digitize handwritten invoices while preserving their table structure and extracting the relevant information.

**Exam clue: Extract text, handwriting, forms, and tables from scanned documents - Amazon Textract**

## **5.2 Amazon Textract vs Traditional OCR**

Traditional OCR primarily recognizes text, whereas **Amazon Textract** can also extract structured information from documents.

| Feature               | Traditional OCR                                                | Amazon Textract                               |
| --------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| **Text Extraction**   | Extracts printed text                                          | Extracts printed and handwritten text         |
| **Form Recognition**  | Limited understanding of form structure                        | Identifies fields and related values          |
| **Table Recognition** | Typically extracts text without preserving table relationships | Recognizes rows, columns, and table structure |
| **Document Layout**   | Limited layout understanding                                   | Understands document layout and structure     |
| **Structured Data**   | Primarily unstructured extracted text                          | Returns organized document information        |

### **Why Amazon Textract?**

- Reduces manual data entry.
- Automates document digitization.
- Preserves relationships between extracted data.
- Simplifies processing of forms, invoices, and tables.

**Key distinction:**

- **Traditional OCR - Recognize text**
- **Amazon Textract - Recognize text and extract structured document data**

## **5.3 Amazon Textract vs Amazon Rekognition**

Both services can detect text in images, but they serve different purposes.

| Feature              | Amazon Textract                         | Amazon Rekognition                             |
| -------------------- | --------------------------------------- | ---------------------------------------------- |
| **Primary Purpose**  | Document text and data extraction       | Image and video analysis                       |
| **Text Recognition** | Extracts printed and handwritten text   | Detects text within images                     |
| **Forms & Tables**   | Extracts structured information         | Not designed for document structure extraction |
| **Common Use Case**  | Digitizing invoices, forms, and records | Detecting objects, faces, and scenes           |

**Key distinction:**

- **Textract - Extract data from documents**
- **Rekognition - Analyze visual content in images and videos**

## **5.4 Exam Focus**

1. **Extract printed and handwritten text - Amazon Textract**
2. **Optical Character Recognition (OCR) - Amazon Textract**
3. **Extract structured data from forms and tables - Amazon Textract**
4. **Preserve document layout and table relationships - Amazon Textract**
5. **Digitize invoices, medical records, tax forms, and ID documents - Amazon Textract**
6. **Return extracted document data in JSON format - Amazon Textract**
7. **Identify objects, faces, and scenes in images/videos - Amazon Rekognition**

**Key exam distinction:** If a scenario involves **extracting text, handwriting, or structured data from scanned documents**, choose **Amazon Textract**. If it involves **analyzing objects, faces, or scenes in images/videos**, choose **Amazon Rekognition**.

# 6 - \[Demo] Amazon Translate

## **6.1 Amazon Translate**

**Amazon Translate** is a fully managed AWS AI service that provides **automatic language translation** using machine learning.

It converts written text from a **source language** into a **target language**.

### **Key Features**

- **Text-Based Translation:** Translates written text between different languages.
- **Multiple Languages:** Supports up to 75 languages, according to the lesson.
- **Real-Time Translation:** Translates text immediately upon request.
- **Batch Translation:** Processes multiple text files through translation jobs.
- **Amazon S3 Integration:** Uses S3 buckets to store input text files and translated output.

### **Common Use Cases**

|Use Case|Description|
|---|---|
|**Document Translation**|Translate documents, manuals, and books|
|**Website Localization**|Translate website content into different languages|
|**Multilingual Applications**|Provide application content in multiple languages|
|**Batch Document Processing**|Translate large collections of text files|

**Example:** A company uses Amazon Translate to convert English product manuals into Spanish for international customers.

**Exam clue: Automatically translate written text between languages - Amazon Translate**

## **6.2 Real-Time vs Batch Translation**

Amazon Translate supports two translation approaches.

|Feature|Real-Time Translation|Batch Translation|
|---|---|---|
|**Purpose**|Translate text immediately|Translate multiple text files|
|**Input**|Text provided in a request|Text files stored in Amazon S3|
|**Output**|Translated text response|Translated files stored in Amazon S3|
|**Use Case**|Website or application translation|Large-scale document translation|

### **Batch Translation Workflow**

1. Upload source text files to an **Amazon S3** bucket.
2. Start an **Amazon Translate** batch translation job.
3. Specify the source and target languages.
4. Amazon Translate processes the text files.
5. Translated files are saved to the designated S3 output location.

**Key distinction:**

- **Real-Time Translation - Immediate text translation**
- **Batch Translation - Translate multiple stored text files**

## **6.3 Combining AWS AI Services for Video Translation**

**Amazon Translate processes text**, not audio or video directly.

To translate spoken content in videos, multiple AWS AI services can be combined.

### **Service Responsibilities**

| Service               | Responsibility                             |
| --------------------- | ------------------------------------------ |
| **Amazon Transcribe** | Converts spoken audio into written text    |
| **Amazon Translate**  | Translates text between languages          |
| **Amazon Polly**      | Converts translated text into spoken audio |

**Key concept:** AWS AI services can be combined to build workflows that process speech, text, and language translation.

## **6.4 Exam Focus**

1. **Automatic language translation - Amazon Translate**
2. **Translate text between source and target languages - Amazon Translate**
3. **Immediate text translation - Real-Time Translation**
4. **Translate multiple text files - Batch Translation**
5. **Store translation input and output files - Amazon S3**
6. **Convert speech into text - Amazon Transcribe**
7. **Convert text into another language - Amazon Translate**
8. **Convert translated text into speech - Amazon Polly**

**Key exam distinction:** If a scenario requires **translating written text between languages**, choose **Amazon Translate**. For translating spoken audio into another language, combine **Amazon Transcribe, Amazon Translate, and Amazon Polly**.

# 7 - \[Demo] Amazon Comprehend

## **7.1 Amazon Comprehend**

**Amazon Comprehend** is a fully managed AWS AI service that uses **Natural Language Processing (NLP)** to analyze text and extract meaningful insights, patterns, and relationships.

It helps applications understand the **meaning, sentiment, entities, and topics** within written content without building custom ML models.

### **Key Features**

- **Natural Language Processing (NLP):** Analyzes and understands written text.
- **Sentiment Analysis:** Determines whether text expresses positive, negative, neutral, or mixed sentiments.
- **Entity Recognition:** Identifies important entities such as people, organizations, brands, products, and events.
- **Key Phrase Extraction:** Identifies important words and phrases within text.
- **Language Detection:** Automatically identifies the language of a document.
- **Topic Modeling:** Groups documents based on common topics or themes.
- **PII Detection:** Identifies **Personally Identifiable Information (PII)** within text.
- **Real-Time & Batch Analysis:** Supports analyzing individual text requests or processing large collections of documents.

### **Supported Data Sources**

Amazon Comprehend can analyze text from various sources, including:
- Customer reviews and feedback.
- Social media posts.
- Emails and customer interactions.
- Business documents and articles.

### **Common Use Cases**

| Use Case                         | Description                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------- |
| **Customer Sentiment Analysis**  | Determine whether customer feedback is positive, negative, neutral, or mixed |
| **Product Feedback Analysis**    | Identify customer satisfaction and areas for product improvement             |
| **Entity Extraction**            | Identify people, brands, products, or events mentioned in documents          |
| **Document Classification**      | Organize documents based on topics or themes                                 |
| **Social Media Analysis**        | Analyze customer opinions and trends                                         |
| **Customer Experience Analysis** | Identify factors contributing to positive or negative customer experiences   |

**Example:** An e-commerce company uses Amazon Comprehend to analyze customer reviews and identify whether customers are satisfied with a product.

**Exam clue: Extract insights and sentiment from text using NLP - Amazon Comprehend**

## **7.2 Amazon Comprehend Sentiment Analysis**

**Sentiment Analysis** identifies the emotional tone expressed in written text.

Amazon Comprehend classifies sentiment into four categories.

|Sentiment|Meaning|
|---|---|
|**Positive**|Expresses satisfaction or favorable opinions|
|**Negative**|Expresses dissatisfaction or unfavorable opinions|
|**Neutral**|Does not express a strong positive or negative opinion|
|**Mixed**|Contains both positive and negative opinions|

### **Example: Customer Product Review**

A customer provides the following feedback:

"The Bluetooth speaker has excellent sound quality, but the device is too heavy and the Bluetooth range could be better."

Amazon Comprehend can identify:
- **Sentiment:** A combination of positive and negative feedback.
- **Entities:** Product-related references.
- **Key Phrases:** Sound quality, device weight, Bluetooth range.
- **Language:** English.

Amazon Comprehend also provides **confidence scores** indicating how strongly its analysis supports each sentiment classification.

These insights help businesses understand customer satisfaction and identify areas for improvement.

### **Real-Time vs Batch Analysis**

|Feature|Real-Time Analysis|Batch Analysis|
|---|---|---|
|**Purpose**|Analyze text immediately|Analyze large collections of documents|
|**Input**|Individual text requests|Multiple documents|
|**Use Case**|Analyze customer feedback as it arrives|Process historical customer reviews|

## **7.3 Amazon Comprehend vs Other Text-Based AWS AI Services**

|Service|Primary Purpose|Exam Clue|
|---|---|---|
|**Amazon Comprehend**|Analyze text using NLP|Sentiment analysis, entity recognition, key phrases|
|**Amazon Textract**|Extract text and structured data from documents|Scan invoices, forms, and handwritten documents|
|**Amazon Translate**|Translate text between languages|Convert English text into another language|
|**Amazon Transcribe**|Convert spoken audio into written text|Generate captions or transcribe customer calls|

### **Important Distinctions**

- **Amazon Comprehend - Understand and analyze text**
- **Amazon Textract - Extract text from documents**
- **Amazon Translate - Translate text between languages**
- **Amazon Transcribe - Convert speech into text**

**Example:** A business wants to understand whether customer reviews are positive or negative. Use **Amazon Comprehend**, not Amazon Textract or Amazon Translate.

## **7.4 Exam Focus**

1. **Natural Language Processing (NLP) - Amazon Comprehend**
2. **Extract insights and relationships from text - Amazon Comprehend**
3. **Identify positive, negative, neutral, or mixed sentiment - Sentiment Analysis**
4. **Identify people, brands, products, and events - Entity Recognition**
5. **Extract important words and phrases - Key Phrase Extraction**
6. **Automatically identify the language of text - Language Detection**
7. **Group documents by common themes - Topic Modeling**
8. **Detect personally identifiable information in text - PII Detection**
9. **Analyze customer reviews and feedback - Amazon Comprehend**
10. **Extract text from scanned documents - Amazon Textract**
11. **Translate written text - Amazon Translate**
12. **Convert speech into text - Amazon Transcribe**

**Key exam distinction:** If a scenario requires **understanding text, analyzing customer sentiment, identifying entities, or extracting meaningful insights using NLP**, choose **Amazon Comprehend**.

# 8 - Amazon Kendra

## **8.1 Amazon Kendra**

**Amazon Kendra** is a fully managed, **Machine Learning (ML)-powered intelligent enterprise search service** that allows users to search and retrieve information across multiple organizational data sources using **natural language queries**.

It enables employees and customers to ask questions in plain language and receive relevant answers from enterprise documents.

### **Key Features**

- **Intelligent Enterprise Search:** Searches organizational information across multiple data sources.
- **Natural Language Processing (NLP):** Understands questions written in everyday language.
- **ML-Powered Search:** Uses machine learning to provide relevant search results.
- **Multiple Data Sources:** Searches information stored across different systems and repositories.
- **Document Indexing:** Indexes enterprise documents to make them searchable.
- **Data Source Connectors:** Supports over 180 connectors, according to the lesson.
- **On-Demand & Scheduled Synchronization:** Keeps indexed information updated.
- **User Feedback:** Allows users to provide feedback on search results to help improve relevance.

### **Supported Data Sources**

Amazon Kendra can index and search information from various sources, including:
- Company websites.
- **Microsoft SharePoint**.
- Microsoft Word documents.
- Microsoft PowerPoint presentations.
- HR policies and internal company documents.
- Other enterprise repositories.

### **Common Use Cases**

| Use Case                        | Description                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| **Enterprise Knowledge Search** | Search internal company documents and knowledge bases                                   |
| **HR Policy Search**            | Answer employee questions about leave policies and benefits                             |
| **Customer Support**            | Help customers find answers in support documentation                                    |
| **Document Search**             | Search information across multiple enterprise repositories                              |
| **Employee Self-Service**       | Allow employees to retrieve organizational information using natural-language questions |

**Example:** An employee asks, "How many annual leave days am I entitled to?"

Amazon Kendra searches indexed HR policy documents and returns the relevant answer.

**Exam clue: Intelligent enterprise search using natural-language queries - Amazon Kendra**

## **8.2 How Amazon Kendra Works**

Amazon Kendra uses **data connectors, document indexing, and natural-language search** to retrieve information from enterprise repositories.

### **Workflow**

1. **Connect Data Sources:** Connect enterprise repositories such as Microsoft SharePoint, websites, or document storage systems.
2. **Index Documents:** Amazon Kendra indexes information from connected data sources.
3. **Synchronize Data:** Update the index using on-demand or scheduled synchronization.
4. **Search Using Natural Language:** Users ask questions in plain English.
5. **Retrieve Relevant Answers:** Amazon Kendra searches indexed content and returns relevant information.
6. **Collect User Feedback:** Users provide feedback to help improve search relevance.

### **Data Synchronization**

Amazon Kendra supports two synchronization approaches.

| Type               | Description                                            |
| ------------------ | ------------------------------------------------------ |
| **On-Demand Sync** | Manually initiate synchronization when required        |
| **Scheduled Sync** | Automatically synchronize data at configured intervals |

**Key concept:** Enterprise information must be **indexed in Amazon Kendra** before it can be searched effectively.

## **8.3 Amazon Kendra vs Amazon Comprehend**

Both services use AI and NLP but serve different purposes.

|Feature|Amazon Kendra|Amazon Comprehend|
|---|---|---|
|**Primary Purpose**|Intelligent enterprise search|Text analysis and insight extraction|
|**Core Capability**|Find relevant answers across enterprise documents|Understand sentiment, entities, and topics|
|**Input**|Natural-language questions|Text content|
|**Output**|Relevant answers and search results|Sentiment, entities, key phrases, and topics|
|**Common Use Case**|Search HR policies and internal knowledge bases|Analyze customer reviews and feedback|

### **Important Distinctions**

- **Amazon Kendra - Search and retrieve information from enterprise documents**
- **Amazon Comprehend - Analyze text to extract insights and sentiment**

**Example:**

- An employee wants to find information about company leave policies - **Amazon Kendra**.
- A company wants to analyze whether employee feedback is positive or negative - **Amazon Comprehend**.

## **8.4 Exam Focus**

1. **Intelligent enterprise search - Amazon Kendra**
2. **ML-powered search using natural-language queries - Amazon Kendra**
3. **Search across multiple enterprise repositories - Amazon Kendra**
4. **Search HR policies and internal company documents - Amazon Kendra**
5. **Make enterprise documents searchable - Document Indexing**
6. **Connect different enterprise data sources - Data Source Connectors**
7. **Keep indexed information updated - On-Demand or Scheduled Sync**
8. **Improve search relevance - User Feedback**
9. **Analyze sentiment, entities, and key phrases - Amazon Comprehend**

**Key exam distinction:** If a scenario requires **searching enterprise documents, retrieving relevant answers, or allowing employees to ask natural-language questions about organizational information**, choose **Amazon Kendra**.

# 9 - Amazon Lex

## **9.1 Amazon Lex**

**Amazon Lex** is a fully managed AWS AI service that uses **Natural Language Processing (NLP)** to build conversational chatbots and virtual assistants.

It enables applications to understand user requests, respond to questions, and automate interactions without building custom ML models.

### **Key Features**

- **Conversational AI:** Builds interactive chatbots that communicate with users using natural language.
- **Natural Language Processing (NLP):** Understands user questions and requests.
- **AWS Lambda Integration:** Invokes Lambda functions to execute custom business logic.
- **API Integration:** Supports interactions with external applications and services through Lambda.
- **Task Automation:** Automates activities such as retrieving information, processing requests, and making reservations.
- **Multi-Channel Integration:** Supports chatbot interactions across different customer communication channels.

### **Common Use Cases**

|Use Case|Description|
|---|---|
|**Customer Support Chatbots**|Automatically answer frequently asked customer questions|
|**Virtual Contact Center Agents**|Handle common customer inquiries without human intervention|
|**FAQ Chatbots**|Answer questions related to technical support, HR, or finance|
|**Booking Assistants**|Help users book flights or hotels through API integrations|
|**CRM Automation**|Automate customer interactions and routine CRM activities|
|**Website Chatbots**|Answer visitor questions and provide promotional offers|

**Example:** An airline uses Amazon Lex to build a chatbot that answers customer questions and helps users book flights.

**Exam clue: Build conversational chatbots using NLP - Amazon Lex**

## **9.2 Amazon Lex Integration with AWS Lambda**

**Amazon Lex** integrates with **AWS Lambda** to execute actions based on user requests.

Amazon Lex handles the conversation, while Lambda executes the required business logic.

### **Example: Flight Booking Chatbot**

1. A customer interacts with an **Amazon Lex** chatbot and requests a flight booking.
2. Amazon Lex processes the request using **NLP**.
3. Amazon Lex invokes an **AWS Lambda** function.
4. Lambda executes custom code to retrieve flight information or call an external booking API.
5. The result is returned to Amazon Lex.
6. Amazon Lex responds to the customer with the relevant information.

### **Service Responsibilities**

| Service        | Responsibility                                              |
| -------------- | ----------------------------------------------------------- |
| **Amazon Lex** | Understands user requests and manages chatbot conversations |
| **AWS Lambda** | Executes custom business logic and makes API calls          |

**Key distinction:**

- **Amazon Lex - Understand and respond to conversational requests**
- **AWS Lambda - Execute actions based on those requests**

**Exam clue: Chatbot that performs custom actions through API calls - Amazon Lex + AWS Lambda**

## **9.3 Amazon Lex vs Amazon Kendra**

Both services use AI and NLP but serve different purposes.

|Feature|Amazon Lex|Amazon Kendra|
|---|---|---|
|**Primary Purpose**|Build conversational chatbots|Intelligent enterprise search|
|**Core Capability**|Understand user requests and automate conversations|Find relevant information across enterprise documents|
|**AWS Integration**|Can invoke AWS Lambda for custom actions|Connects to enterprise data repositories|
|**Common Use Case**|Customer support chatbot or booking assistant|Search HR policies or internal company documents|

### **Important Distinctions**

- **Amazon Lex - Build conversational chatbots and virtual assistants**
- **Amazon Kendra - Search enterprise documents using natural-language questions**
    

**Example:**

- A company wants a chatbot to help customers book appointments - **Amazon Lex**.
- An employee wants to search company HR documents using natural-language questions - **Amazon Kendra**.

## **9.4 Exam Focus**

1. **Build conversational chatbots - Amazon Lex**
2. **Natural Language Processing (NLP) for chatbots - Amazon Lex**
3. **Automate customer support conversations - Amazon Lex**
4. **Build FAQ chatbots for HR, finance, or technical support - Amazon Lex**
5. **Create virtual contact center agents - Amazon Lex**
6. **Execute custom chatbot actions - AWS Lambda Integration**
7. **Call external APIs for bookings or information retrieval - Amazon Lex + AWS Lambda**
8. **Automate customer interactions across channels - Amazon Lex**
9. **Intelligent enterprise document search - Amazon Kendra**

**Key exam distinction:** If a scenario requires **building a conversational chatbot or virtual assistant**, choose **Amazon Lex**. If the chatbot needs to **execute custom actions, retrieve external data, or call APIs**, integrate **Amazon Lex with AWS Lambda**.

# 10 - Amazon Forecast

## **10.1 Amazon Forecast**

**Amazon Forecast** is an AWS machine learning service that uses **historical data and trends to predict future outcomes**, such as product demand, inventory requirements, and resource needs.

It uses forecasting ML technology developed from Amazon's experience in demand prediction and inventory management.

### **Key Features**

- **ML-Powered Forecasting:** Predicts future demand using historical data and trends.
- **Demand Prediction:** Estimates future product sales and customer demand.
- **Inventory Optimization:** Helps businesses maintain appropriate stock levels.
- **Cost Reduction:** Reduces waste caused by overstocking or understocking.
- **Multiple Data Sources:** Uses historical business data and additional factors to improve forecasts.
- **Automated Forecasting:** Enables businesses to generate forecasts without developing custom ML models.

### **Input Data for Forecasting**

Amazon Forecast can analyze various types of data, including:
- **Historical Sales Data:** Previous sales and transaction records.
- **Inventory Data:** Existing stock levels.
- **Customer Data:** Customer profiles and purchasing behavior.
- **Website Traffic:** Historical web traffic patterns.
- **Seasonal Events:** Holidays and festive seasons.
- **Promotional Activities:** Discounts and marketing campaigns.
- **Product Information:** Product features and upcoming launches.

### **Common Use Cases**

|Use Case|Description|
|---|---|
|**Product Demand Forecasting**|Predict future product sales based on historical demand|
|**Inventory Planning**|Determine how much stock to maintain|
|**Financial Planning**|Forecast future financial requirements|
|**Resource Planning**|Estimate resources needed for future operations|
|**Seasonal Demand Prediction**|Predict increased demand during holidays or festive seasons|

**Example:** A retail company uses Amazon Forecast to predict Christmas tree sales based on previous sales, seasonal trends, and promotional activities.

This helps the company maintain sufficient inventory while minimizing excess stock.

**Exam clue: Predict future demand using historical data and trends - Amazon Forecast**

## **10.2 Amazon Forecast Availability and Exam Relevance**

According to the lesson, **Amazon Forecast has been discontinued for new AWS customers**.
- The service is no longer available to new AWS customers.
- It may still appear in AWS Certified Cloud Practitioner (CLF-C02) exam questions.
- Focus on recognizing its primary purpose rather than learning implementation details.

**Key concept:** Amazon Forecast is associated with **time-series forecasting, demand prediction, and inventory optimization**.

## **10.3 Exam Focus**

1. **ML-powered forecasting - Amazon Forecast**
2. **Predict future demand using historical data - Amazon Forecast**
3. **Optimize inventory and reduce waste - Amazon Forecast**
4. **Forecast seasonal product demand - Amazon Forecast**
5. **Financial and resource planning - Amazon Forecast**
6. **Use historical sales, transactions, and seasonal trends - Forecasting Input Data**
7. **Service discontinued for new AWS customers - Amazon Forecast**

**Key exam distinction:** If a scenario involves **predicting future sales, estimating inventory requirements, or forecasting demand based on historical data and trends**, associate it with **Amazon Forecast**.

# 11 - Amazon Connect

## **11.1 Amazon Connect**

**Amazon Connect** is a fully managed, **AI-powered cloud contact center service** that enables businesses to manage customer interactions across multiple communication channels.

It integrates with AWS AI services to automate customer support, assist contact center agents, and improve customer experiences.

### **Key Features**

- **Cloud Contact Center:** Provides a complete contact center solution without managing traditional contact center infrastructure.
- **AI-Powered Customer Support:** Uses AWS AI services to automate and improve customer interactions.
- **Multi-Channel Communication:** Supports customer interactions through phone calls, chat, email, and tasks.
- **Call Recording & Transcription:** Captures customer conversations and converts speech into text.
- **Sentiment Analysis:** Analyzes customer conversations to understand customer sentiment.
- **Customer Interaction History:** Provides agents with previous customer interactions and relevant information.
- **Real-Time Recommendations:** Suggests relevant information and actions to contact center agents
- **CRM Integration:** Connects with Customer Relationship Management (CRM) systems.
- **Workflow Automation:** Automates customer service tasks and business processes.

### **Common Use Cases**

| Use Case                          | Description                                                                |
| --------------------------------- | -------------------------------------------------------------------------- |
| **Customer Support Centers**      | Manage customer inquiries through phone, chat, and other channels          |
| **Virtual Contact Center Agents** | Automate customer interactions using AI-powered chatbots                   |
| **Call Center Analytics**         | Analyze call recordings, transcriptions, and customer sentiment            |
| **Automated Bookings**            | Allow customers to book services without human intervention                |
| **Agent Assistance**              | Provide agents with customer history and real-time recommendations         |
| **CRM Automation**                | Retrieve customer information and perform actions through CRM integrations |

**Example:** A cab booking company uses Amazon Connect to handle customer calls and automatically book rides through chatbot and API integrations.

**Exam clue: Build an AI-powered cloud contact center - Amazon Connect**

## **11.2 Amazon Connect Integration with AWS AI Services**

Amazon Connect is **not exclusively an AI service**. It is a cloud contact center platform that integrates multiple AWS services to provide intelligent customer support.

### **Key AWS Service Integrations**

| AWS Service            | Role in Amazon Connect                                              |
| ---------------------- | ------------------------------------------------------------------- |
| **Amazon Lex**         | Provides conversational chatbots and virtual assistants             |
| **AWS Lambda**         | Executes custom business logic and integrates with external systems |
| **Amazon Transcribe**  | Converts customer conversations from speech into text               |
| **Amazon Comprehend**  | Analyzes text to extract insights and customer sentiment            |
| **Amazon Personalize** | Provides personalized recommendations based on customer behavior    |

### **Example: Automated Cab Booking**

1. A customer contacts the business through **Amazon Connect**.
2. **Amazon Lex** understands the customer's booking request.
3. **AWS Lambda** executes the booking logic.
4. Lambda interacts with the company's **CRM or booking system**.
5. The booking is completed, and the customer receives confirmation.

**Key concept:** Amazon Connect manages the **contact center experience**, while integrated AWS services provide conversational AI, automation, and analytics.

### **Amazon Connect Agent Workspace**

**Agent Workspace** provides contact center agents with a unified interface to manage customer interactions.

Key capabilities:
- Access customer information and interaction history.
- Manage calls, chats, emails, and tasks.
- View relevant case information.
- Receive **real-time recommendations**.
- Perform customer service actions through integrated systems.

**Example:** When a customer calls about an existing booking, the agent can immediately access the customer's history and relevant booking information.

## **11.3 Amazon Connect vs Amazon Lex**

Both services support customer interactions but have different primary purposes.

| Feature             | Amazon Connect                                             | Amazon Lex                                          |
| ------------------- | ---------------------------------------------------------- | --------------------------------------------------- |
| **Primary Purpose** | Cloud contact center platform                              | Conversational chatbot service                      |
| **Core Capability** | Manage customer interactions and contact center operations | Understand and respond to natural-language requests |
| **AI Integration**  | Integrates multiple AWS AI services                        | Uses NLP for conversational interactions            |
| **Automation**      | Automates contact center workflows                         | Can invoke AWS Lambda to execute actions            |
| **Common Use Case** | Build a complete customer contact center                   | Build a customer support chatbot                    |

### **Important Distinctions**

- **Amazon Connect - Build and manage cloud contact centers**
- **Amazon Lex - Build conversational chatbots**
- **AWS Lambda - Execute custom business logic**
- **Amazon Comprehend - Analyze customer sentiment**
- **Amazon Transcribe - Convert customer calls into text**

**Example:**

- A company wants to replace its traditional call center with a cloud-based solution - **Amazon Connect**.
- A company wants to add a conversational chatbot to its website - **Amazon Lex**.
- A contact center needs a chatbot that automatically performs bookings - **Amazon Connect + Amazon Lex + AWS Lambda**.

## **11.4 Exam Focus**

1. **AI-powered cloud contact center - Amazon Connect**
2. **Manage customer calls, chats, and other interactions - Amazon Connect**
3. **Provide customer history and real-time agent recommendations - Agent Workspace**
4. **Automate contact center conversations - Amazon Lex**
5. **Execute custom actions and integrate with CRM systems - AWS Lambda**
6. **Convert recorded customer calls into text - Amazon Transcribe**
7. **Analyze customer sentiment - Amazon Comprehend**
8. **Provide personalized customer recommendations - Amazon Personalize**
9. **Automate customer service workflows - Amazon Connect**
10. **Build standalone conversational chatbots - Amazon Lex**

**Key exam distinction:** If a scenario requires a **complete cloud-based contact center solution**, choose **Amazon Connect**. If it specifically requires **building a conversational chatbot**, choose **Amazon Lex**.

# 12 - Amazon SageMaker AI - AWS ML Platform

## **12.1 Amazon SageMaker AI**

**Amazon SageMaker AI** is a fully managed AWS machine learning (ML) service that enables developers and data scientists to **build, train, test, tune, and deploy machine learning models**.

It provides the tools and infrastructure required throughout the **Machine Learning Lifecycle**, reducing the need to manage underlying compute resources manually.

### **Key Features**

- **End-to-End ML Platform:** Supports the complete ML development lifecycle.
- **Managed Infrastructure:** AWS manages much of the underlying infrastructure for training and deploying ML models. 
- **Pre-Built Algorithms:** Provides built-in ML algorithms and frameworks.
- **Model Training:** Trains ML models using datasets.
- **Model Tuning:** Improves model performance through optimization.
- **Model Deployment:** Deploys trained models for application use.
- **Model Monitoring:** Monitors deployed models and their performance.
- **ML Workflow Automation:** Automates model development, training, testing, and deployment.

### **Common Use Cases**

| Use Case                          | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| **Custom ML Model Development**   | Build ML models for specific business requirements   |
| **Image Classification**          | Train models to recognize objects or shapes          |
| **Prediction Models**             | Develop models that make predictions based on data   |
| **Model Training & Optimization** | Train and improve ML model accuracy                  |
| **Production ML Deployment**      | Deploy trained models for application inference      |
| **ML Workflow Automation**        | Automate the ML development and deployment lifecycle |

**Exam clue: Build, train, and deploy custom machine learning models - Amazon SageMaker AI**

## **12.2 Machine Learning Lifecycle**

The **Machine Learning Lifecycle** describes the process of developing, training, evaluating, and deploying ML models.

The following example uses **Supervised Learning**, where models learn from labeled training data.

### **1. Data Collection and Labeling**

- Collect relevant datasets for training.
- Prepare **labeled data**, where each example includes the correct classification or expected result.
- Example: Images of circles, triangles, and squares labeled with their corresponding shapes.

**Key concept:** Supervised learning uses labeled examples to train ML models.

### **2. Model Development**

- Developers create an ML model using machine learning frameworks.
- Examples include **PyTorch** and **Apache MXNet**.
- The model is designed to recognize patterns within the training data.

### **3. Model Training**

- Feed labeled data into the ML model.
- The model learns patterns from the training examples.
- Additional relevant training data can help improve model performance.

**Example:** Train an ML model using hundreds of labeled images of different shapes.

### **4. Model Evaluation and Testing**

- Test the trained model using **unseen test data**.
- Evaluate how accurately the model makes predictions.
- Determine whether the model meets the required performance expectations.

**Example:** Provide a new image of a triangle and check whether the model correctly identifies it.

### **5. Model Tuning and Improvement**

If the model does not perform satisfactorily, its performance can be improved through:
- **Feature Engineering:** Improve the input features used by the model.
- **Hyperparameter Tuning:** Adjust training configuration parameters to optimize model performance.
- **Additional Training Data:** Provide more relevant examples to improve learning.

The model can then be retrained and evaluated.

### **6. Model Deployment and Inference**

- Deploy the trained model into a production environment.
- Applications interact with the deployed model through **inference endpoints**.
- The model processes new inputs and returns predictions.

**Key distinction:**

- **Training - Model learns patterns from data**
- **Inference - Trained model makes predictions using new data**

## **12.3 Amazon SageMaker AI Features and Components**

Amazon SageMaker AI provides managed tools for different stages of the ML lifecycle.

| Feature / Component              | Primary Purpose                                                       |
| -------------------------------- | --------------------------------------------------------------------- |
| **SageMaker Studio**             | Web-based integrated development environment (IDE) for ML development |
| **SageMaker Autopilot (AutoML)** | Automates parts of the ML model-building process                      |
| **Built-In Algorithms**          | Provides ready-to-use algorithms for model development                |
| **Jupyter Notebooks**            | Interactive environment for writing and running ML code               |
| **Model Training**               | Trains ML models using datasets and managed compute resources         |
| **Hyperparameter Tuning**        | Optimizes training parameters to improve model performance            |
| **SageMaker Ground Truth**       | Helps create labeled training datasets                                |
| **SageMaker Endpoints**          | Hosts deployed ML models for inference requests                       |
| **SageMaker Model Monitor**      | Monitors deployed models and their performance                        |
| **SageMaker Pipelines**          | Automates ML development and deployment workflows                     |

### **SageMaker Studio**

**Amazon SageMaker Studio** is a web-based **Integrated Development Environment (IDE)** for machine learning.

It allows developers to:
- Write and execute ML code.
- Work with Jupyter notebooks.
- Train and evaluate ML models.
- Deploy models for testing and production use.

**Exam clue: Web-based development environment for ML - SageMaker Studio**

### **SageMaker Ground Truth**

**Amazon SageMaker Ground Truth** helps create **labeled datasets** used for supervised machine learning.
- Supports labeling training data.
- Reduces the manual effort required to prepare datasets.
- Supports managed human labeling workflows.

**Example:** Label images as circles, squares, or triangles before training an image classification model.

**Exam clue: Label training data for ML models - SageMaker Ground Truth**

### **SageMaker Model Monitor**

**Amazon SageMaker Model Monitor** helps monitor deployed ML models.
- Tracks model behavior and performance.
- Helps identify potential issues with deployed models.
- Supports ongoing evaluation of production ML workloads.

**Exam clue: Monitor deployed ML models - SageMaker Model Monitor**

### **SageMaker Pipelines**

**Amazon SageMaker Pipelines** enables automation of ML development workflows.

It can automate steps such as:
1. Preparing training data.
2. Training ML models.
3. Evaluating model performance.
4. Comparing model results.
5. Deploying models into production.

**Exam clue: Automate the ML development lifecycle - SageMaker Pipelines**

## **12.4 Amazon SageMaker AI vs AWS AI Services**

The key difference is whether the customer needs to **build a custom ML model** or **use an existing AI capability**.

| Feature                       | Amazon SageMaker AI                         | AWS AI Services                                       |
| ----------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| **Primary Purpose**           | Build, train, and deploy custom ML models   | Use pre-built AI capabilities                         |
| **Model Development**         | Customer develops or customizes ML models   | No custom model development required for standard use |
| **Training**                  | Supports custom model training              | Pre-trained models are available                      |
| **Infrastructure Management** | AWS manages underlying ML infrastructure    | AWS manages the AI service infrastructure             |
| **Examples**                  | Custom classification and prediction models | Amazon Rekognition, Polly, Transcribe, Comprehend     |

### **Important Distinctions**

- **Amazon SageMaker AI - Build custom ML models**
- **Amazon Rekognition - Analyze images and videos**
- **Amazon Comprehend - Analyze text using NLP**
- **Amazon Transcribe - Convert speech into text**
- **Amazon Polly - Convert text into speech**

**Example:**

- A company wants to develop and train its own image classification model using labeled images - **Amazon SageMaker AI**.
- A company simply wants to detect objects in images without building an ML model - **Amazon Rekognition**.

## **12.5 Exam Focus**

1. **Build, train, test, and deploy custom ML models - Amazon SageMaker AI**
2. **Fully managed machine learning platform - Amazon SageMaker AI**
3. **Web-based IDE for ML development - SageMaker Studio**
4. **Automated ML model development - SageMaker Autopilot (AutoML)**
5. **Create labeled training datasets - SageMaker Ground Truth**
6. **Optimize model training parameters - Hyperparameter Tuning**
7. **Deploy models for predictions - SageMaker Endpoints**
8. **Monitor deployed ML models - SageMaker Model Monitor**
9. **Automate ML workflows - SageMaker Pipelines**
10. **Learn patterns from labeled examples - Supervised Learning**
11. **Train a model using datasets - Model Training**
12. **Generate predictions using a trained model - Inference**
13. **Ready-to-use AI capabilities - AWS AI Services**

**Key exam distinction:** If a scenario requires **building, training, tuning, or deploying a custom machine learning model**, choose **Amazon SageMaker AI**. If it requires an **existing AI capability without building a custom model**, choose the appropriate **AWS AI service**.