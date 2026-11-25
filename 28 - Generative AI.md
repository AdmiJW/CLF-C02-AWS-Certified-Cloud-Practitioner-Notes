# 1 - Overview of AWS Generative AI Services

## **1.1 Overview of AWS Generative AI Services**

AWS provides **Generative AI (GenAI)** services across three main layers, depending on how much control, customization, and technical expertise is required.

| Layer                    | Purpose                                                                           | Key AWS Services                                                         |
| ------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Infrastructure Layer** | Build and train your own Foundation Models (FMs) and Large Language Models (LLMs) | AWS Compute Infrastructure, Amazon SageMaker                             |
| **Platform Layer**       | Access existing models and build AI-powered applications or agents                | Amazon Bedrock, Amazon Bedrock AgentCore                                 |
| **Application Layer**    | Use ready-made AI applications and agents                                         | Amazon Q, Kiro, AWS DevOps Agent, AWS Security Agent, AWS Quick |

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

The CLF-C02 guide lists **Amazon Q**. Recognize it as the name used for AWS generative AI assistants that help with AWS tasks or answer questions using business data.

| Name encountered in the course | Role and current status |
| --- | --- |
| **Amazon Q Developer in the AWS console** | Provides AWS guidance and assistance in the Management Console. AWS renamed this console and mobile experience **the AWS assistant** on November 5, 2026. |
| **Amazon Q Developer IDE plugins** | Provide coding assistance. New sign-ups ended May 15, 2026. AWS lists April 30, 2027 as the end of support for the plugins and paid subscriptions. Kiro is the AWS-recommended transition for IDE use. |
| **Amazon Q Business** | Answers questions and summarizes information from enterprise data. Closed to new customers on July 31, 2026. Existing customers can continue using it. |

[AWS assistant rename](https://aws.amazon.com/about-aws/whats-new/2026/11/q-developer-renamed-aws-assistant/) · [Q Developer IDE transition](https://aws.amazon.com/blogs/devops/amazon-q-developer-end-of-support-announcement/) · [Q Business availability](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/doc-history.html)

### **Ready-to-Use AI Agents**

**Lecture context:** AWS DevOps Agent assists with incident investigation. AWS Security Agent supports software security work. Kiro is an AI-assisted development environment.

<span id="amazon-quick-suite"></span>

### **AWS Quick**

**AWS Quick** is a workspace that helps teams find answers, analyze data, and work with connected applications. AWS announced the new name in November 2026. The course calls the workspace **Amazon Quick Suite**, and the CLF-C02 guide lists **Amazon Quick**. See [AWS Quick Sight for BI dashboards](./13%20-%20AWS%20Big%20Data%20And%20Analytics%20Services.md). [AWS Quick rename](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-quick-aws-quick/)

## **1.5 Exam Focus**

**CLF-C02 priority:** Recognize **Amazon Q** assistant use cases and review SageMaker AI in [Machine Learning and AI](./18%20-%20Machine%20Learning%20and%20AI.md). The lecture’s three layers show where AWS compute, managed foundation models such as those offered through Bedrock, and ready-to-use assistants fit. AgentCore and the agent examples are lecture context at this level. [CLF-C02 in-scope services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
