# 1 - Overview of AWS Generative AI Services

## **1.1 Overview of AWS Generative AI Services**

AWS provides **Generative AI (GenAI)** services across three main layers, depending on how much control, customization, and technical expertise is required.

| Layer                    | Purpose                                                                           | Key AWS Services                                                         |
| ------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Infrastructure Layer** | Build and train your own Foundation Models (FMs) and Large Language Models (LLMs) | AWS Compute Infrastructure, Amazon SageMaker                             |
| **Platform Layer**       | Access existing models and build AI-powered applications or agents                | Amazon Bedrock, Amazon Bedrock AgentCore                                 |
| **Application Layer**    | Use ready-made AI applications and agents                                         | Amazon Q, Kiro, AWS DevOps Agent, AWS Security Agent, Amazon Quick Suite |

**Key Distinction:**

- **Infrastructure** - Build your own AI models.
- **Platform** - Use existing AI models and build custom agents.
- **Application** - Use ready-made AI applications and agents.

Organizations can use one or multiple layers depending on their requirements.

## **1.2 Infrastructure Layer**

The **Infrastructure Layer** provides the computing resources needed to build and train custom AI models from scratch.

### **AWS Infrastructure Components**

AWS provides:
- **GPUs and CPUs** - Computing resources for AI workloads.
- **AWS Trainium** - AWS custom-designed AI chips.
- **AWS Inferentia** - AWS custom-designed AI chips.
- **AWS Graviton** - AWS-designed ARM-based processors.
- **Amazon SageMaker** - Helps manage data, build, train, and evaluate machine learning models.

### **Key Characteristics**

- Provides **maximum flexibility and customization**.
- Intended for AI experts and practitioners developing their own models.
- Requires significant computing resources.
- Training large Foundation Models (FMs) and Large Language Models (LLMs) from scratch can be **extremely expensive**.

Large technology companies such as Amazon, Meta, Google, Anthropic, and OpenAI invest heavily in building their own models.

**Key Point:** Organizations that only need to consume existing AI models generally benefit more from the Platform or Application layers.

## **1.3 Platform Layer**

The **Platform Layer** allows organizations to use existing Foundation Models and build AI-powered applications without developing their own models from scratch.

Two important services are **Amazon Bedrock** and **Amazon Bedrock AgentCore**.

### **Amazon Bedrock**

**Amazon Bedrock** is a managed platform that provides access to Foundation Models (FMs) and Large Language Models (LLMs) through APIs.

It supports models from leading AI providers, including:
- **Anthropic Claude**
- **Meta Llama**
- Other supported Foundation Models

**Key Capabilities:**

- **Model Access** - Use existing FMs and LLMs through API calls.
- **Model Customization** - Fine-tune models for specific requirements.
- **Agents** - Build AI agents that can perform tasks.
- **Guardrails** - Apply safety controls to AI applications.

**Security Example:**

A financial company using Generative AI must prevent its AI application from exposing confidential internal information.

**Amazon Bedrock Guardrails** can help enforce safeguards for AI-powered applications.

### **Amazon Bedrock AgentCore**

**Amazon Bedrock AgentCore** provides capabilities for building, deploying, and operating AI agents.

An **AI agent** is an AI-powered system that can perform tasks and interact with tools or other systems.

**Key Capabilities:**
- **Framework Agnostic** - Supports agents developed using frameworks such as LangChain, LangGraph, CrewAI, and Strands Agents.
- **Agent Runtime** - Provides an environment to execute AI agents.
- **Security** - Supports secure agent operations.
- **Memory** - Provides memory capabilities for agents.
- **Agent Gateway** - Enables agents to communicate with external tools, systems, and other agents using protocols such as MCP and A2A.

### **Amazon Bedrock vs. Amazon Bedrock AgentCore**

| Service                      | Primary Purpose                        | Key Distinction                                                    |
| ---------------------------- | -------------------------------------- | ------------------------------------------------------------------ |
| **Amazon Bedrock**           | Access and customize Foundation Models | Focuses on using AI models and building generative AI applications |
| **Amazon Bedrock AgentCore** | Deploy and operate AI agents           | Focuses on runtime, security, memory, and agent connectivity       |

**Remember:**

- **Need access to existing Foundation Models - Amazon Bedrock**
- **Need infrastructure to operate AI agents - Amazon Bedrock AgentCore**

## **1.4 Application Layer**

The **Application Layer** provides ready-to-use Generative AI applications and agents.

Organizations can use AI capabilities without building or managing the underlying models.

### **Amazon Q**

**Amazon Q** is an AWS generative AI assistant with different capabilities for developers and businesses.

| Service                | Purpose                                | Example                                           |
| ---------------------- | -------------------------------------- | ------------------------------------------------- |
| **Amazon Q Developer** | AI assistance for software development | Generate code and assist with development tasks   |
| **Amazon Q Business**  | AI assistance using enterprise data    | Ask questions about internal business information |

Amazon Q capabilities are also integrated with AWS services such as:
- **Amazon QuickSight** - Business intelligence and data analytics.
- **Amazon Connect** - Customer contact center service.
- **AWS Supply Chain** - Supply chain management.

### **Ready-to-Use AI Agents**

AWS also provides specialized AI agents designed for particular tasks.

| AI Agent               | Main Purpose                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------- |
| **AWS DevOps Agent**   | Investigate production incidents, identify root causes, and assist with remediation |
| **AWS Security Agent** | Assist with security activities throughout the software development lifecycle       |
| **Kiro**               | AI-powered coding and debugging assistance                                          |

**AWS DevOps Agent** can help identify production issues, investigate their root causes, prepare remediation steps, and potentially take corrective actions.

**Kiro** provides AI-assisted software development capabilities, including code generation and debugging.

### **Amazon Quick Suite**

**Amazon Quick Suite** is an AI-powered productivity solution designed to connect different business and productivity tools.

Examples of connected tools include:
- Email
- Slack
- Other productivity applications

Its purpose is to **improve productivity by connecting information and workflows across applications**.

## **1.5 Exam Focus**

**Exam Relevance:** This is a bonus overview rather than a core CLF-C02 lesson. Prioritize recognizing the general purpose of the services instead of memorizing detailed agent frameworks or protocols.
- **Build and train custom AI models - AWS Infrastructure and Amazon SageMaker**
- **Access existing Foundation Models through APIs - Amazon Bedrock**
- **Customize AI models and apply safety guardrails - Amazon Bedrock**
- **Deploy and operate AI agents - Amazon Bedrock AgentCore**
- **AI-powered coding assistance - Amazon Q Developer / Kiro**
- **AI assistant using enterprise business data - Amazon Q Business**
- **AI-powered business productivity - Amazon Quick Suite**
- **AI-assisted DevOps incident investigation - AWS DevOps Agent**
- **AI-assisted software security - AWS Security Agent**

**Most Important Distinction:**

- **Infrastructure Layer** - Build models.
- **Platform Layer** - Use models and build agents.
- **Application Layer** - Use ready-made AI applications.