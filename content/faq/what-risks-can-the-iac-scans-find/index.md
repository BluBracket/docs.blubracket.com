---
title: "What risks can the infrastructure-as-code (IaC) checks uncover?"
aliases:
  - /how-to/iac-checks/
  - /how-to/iac-checks/github/
  - /how-to/iac-checks/bitbucket/
  - /how-to/iac-checks/gitlab/
description: "Default IaC scanning policies and capabilities"
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - infrastructure as code
  - IaC
resources:
  - src:
---

BluBracket's infrastructure-as-code (IaC) scanning runs automatically on every repository. If there are any supported IaC-related files, they'll be scanned for risks according to best-practices recommendations outlined below.

{{< alert icon="👉" text="Fully-integrated IaC risk scanning is in limited beta at this time." />}}

### What IaC file types are supported

- Terraform (for AWS, GCP, Azure and OCI)
- CloudFormation (including AWS SAM)
- Azure Resource Manager (ARM)
- Serverless framework
- Helm charts
- Kubernetes
- Docker

### What rules are checked

#### AWS General

- AWS EBS Volumes are not encrypted
- AWS EBS Snapshots are not encrypted
- AWS EBS volumes do not have encrypted launch configurations
- AWS RDS DB cluster data is not encrypted at rest
- Data stored in SageMaker is not securely encrypted at rest
- AWS SNS topic server-side encryption is not enabled
- AWS SQS server-side encryption is not enabled
- Amazon DynamoDB Point-In-Time Recovery (PITR) is not enabled
- AWS ElastiCache Redis cluster data is not encrypted at rest
- AWS ElastiCache Redis cluster data in-transit is not encrypted
- AWS ElastiCache Replication Group data in-transit is not encrypted
- AWS Elastic File System (EFS) data is not encrypted at rest
- AWS Kinesis streams server-side encryption is not enabled
- Amazon Neptune storage is not securely encrypted
- Amazon DynamoDB Accelerator (DAX) is not securely encrypted at rest
- Amazon Elastic Container Registry (ECR) image tags are not immutable
- AWS Redshift cluster data is not encrypted at rest
- Amazon CloudFront distribution does not have Web Application Firewall (WAF) enabled
- Amazon DocumentDB data is not securely encrypted at rest
- AWS Athena Database is not securely encrypted at rest
- AWS CodeBuild project encryption is disabled
- AWS EC2 Instance Metadata Service version 1 (IMDSv1) is enabled
- Amazon Managed Streaming for Apache Kafka (MSK) cluster encryption at rest and in transit is not enabled
- AWS Athena workgroup does not prevent disabling encryption
- AWS Glue Data Catalog encryption is not enabled
- Amazon Aurora data is not securely encrypted at rest
- Elastic File System (EFS) volumes in ECS task definitions do not have encryption in transit enabled
- AWS SageMaker notebook instance data is not encrypted at rest
- AWS Glue security configuration encryption is not enabled
- Amazon Neptune cluster instance is publicly available
- AWS Load Balancer listener is not using TLS 1.2
- AWS Load Balancer does not have deletion protection
- Amazon Elastic MapReduce (EMR) cluster is not configured with Kerberos authentication
- AWS Lambda function is not configured for function-level concurrent execution limit
- AWS Lambda does not have dead letter queue configured
- AWS Lambda Function is not assigned to access within VPC
- Amazon DynamoDB tables are not encrypted
- Elastic load balancers do not use SSL Certificates provided by AWS Certificate Manager
- AWS KMS Customer Managed key rotation is disabled
- AWS RDS instance does not have backup policy
- Amazon ElastiCache Redis clusters do not have automatic backup turned on
- AWS EC2 instance is not EBS optimized
- AWS Elastic Container Registry (ECR) repository encryption is disabled
- AWS RDS cluster/instance has deletion protection disabled
- AWS RDS Global Cluster data is not encrypted
- Amazon Redshit cluster version upgrades are disabled
- Amazon Redshit cluster data is not encrypted using AWS KMS
- AWS S3 bucket lock configuration is disabled
- AWS S3 bucket cross-region replication disabled
- AWS S3 bucket objects are not encrypted using AWS KMS
- AWS RDS instance does not have Multi-AZ enabled
- AWS Elastic Container Registry (ECR) image scan on push is not enabled
- AWS resource does not have any tags set
- EBS volume attached to AWS EC2 Instance is not encrypted
- Amazon GuardDuty is not enabled to specific org/region
- AWS RDS cluster does not have AWS Backup's backup plan
- AWS EBS volume does not have AWS Backup's backup plan
- AWS Redshift cluster does not have AWS Backup's backup plan
- Amazon DynamoDB table does not have Auto Scaling enabled
- Amazon Elastic File System (EFS) does not have AWS Backup's backup plan
- Dynamodb point in time recovery is not enabled for global tables
- Backup Vault is not encrypted at rest using KMS CMK
- Glacier Vault access policy is public and not restricted to specific services or principals
- SQS queue policy is public and access is not restricted to specific services or principals
- SNS topic policy is public and access is not restricted to specific services or principals
- QLDB ledger permissions mode is not set to STANDARD
- EMR cluster is not configured with SSE KMS for data at rest encryption (Amazon S3 with EMRFS)
- AWS Image Builder component not encrypted using Customer Managed Key
- AWS S3 Object Copy not encrypted using Customer Managed Key
- AWS Doc DB not encrypted using Customer Managed Key
- AWS EBS Snapshot Copy not encrypted using Customer Managed Key
- AWS Elastic File System (EFS) not encrypted using Customer Managed Key
- AWS Kinesis streams encryption using default KMS keys instead of Customer's Managed Master Keys
- AWS S3 Object Copy not encrypted using Customer Managed Key
- AWS Sagemaker domain not encrypted using Customer Managed Key
- AWS Redshift Cluster not encrypted using Customer Managed Key
- AWS EBS Volume not encrypted using Customer Managed Key
- AWS Elasticache replication group not configured with CMK key**
- AWS Glue component has no security configuration associated
- Route53 A Record does not have Attached Resource

#### AWS Networking

- AWS Application Load Balancer (ALB) protocol is not HTTPS
- Not every Security Group rule has a description
- AWS Security Group allows all traffic on SSH port 22
- Security Group allows ingress from 0.0.0.0/0 to port 3389
- Amazon CloudFront distribution ViewerProtocolPolicy is not set to HTTPS
- Amazon DocumentDB Transport Layer Security (TLS) is disabled
- AWS SageMaker notebook instance is not configured with direct internet access feature
- AWS VPC endpoint service is not configured for manual acceptance
- AWS Application Load Balancer (ALB) does not drop HTTP headers
- AWS ElasticSearch cluster is not in a VPC
- AWS Elastic Load Balancer (ELB) has cross-zone load balancing disabled
- Not all Network Access Control Lists (NACLs) are attached to subnets
- Security Groups are not attached to EC2 instances or ENIs
- AWS S3 Bucket does not have public access blocks
- Amazon EMR cluster security groups are open to the world
- AWS Default Security Group does not restrict all traffic
- Auto scaling groups associated with a load balancer do not use elastic load balancing health checks
- AWS EC2 instance is not configured with VPC
- Not all Eastic IP addresses allocated to a VPC are attached to EC2 instances or NAT Gateways
- Application Load Balancer (ALB) does not redirect HTTP requests into HTTPS
- Transfer Server is publicly exposed
- CloudFront web distribution that allow TLS versions 1.0 or lower
- AWS WAF does not have associated rules
- WAF allows message lookup in Log4j2
- Application Load Balancer (ALB) not configured with AWS Web Application Firewall v2 (AWS WAFv2)
- Public API gateway not configured with AWS Web Application Firewall v2 (AWS WAFv2)

#### AWS Logging

- AWS KMS Customer Managed Key (CMK) rotation is not enabled
- AWS CloudTrail logs are not encrypted using AWS KMS Customer Managed Key (CMK)
- AWS CloudTrail log validation is not enabled in all regions
- Amazon MQ Broker logging is not enabled
- Container insights are not enabled on ECS cluster
- AWS CloudWatch log groups do not specify retention days
- AWS CloudTrail is not enabled in all regions
- AWS Redshift database does not have audit logging enabled
- Amazon API Gateway does not have X-Ray tracing enabled
- AWS Global Accelerator does not have Flow logs enabled
- Amazon API Gateway does not have access logging enabled
- Amazon Managed Streaming for Apache Kafka (MSK) cluster logging is not enabled
- Amazon DocumentDB logging is not enabled
- Amazon CloudFront distribution has access logging disabled
- AWS Classic Elastic Load Balancer (ELB) does not have access logging enabled
- AWS Elastic Load Balancer (ELB) does not have access logging enabled
- Amazon Neptune logging is not enabled
- Enhanced monitoring for Amazon RDS instances is enabled
- AWS config is not enabled in all regions
- AWS CloudFormation stack configured without SNS topic
- Detailed monitoring for EC2 instances is disabled
- Amazon CloudWatch logs are not encrypted at rest using KMS CMKs
- Amazon API Gateway stage does not have logging level defined appropriately
- AWS CloudTrail trail is not integrated with CloudWatch Log
- AWS VPC Flow logs not enabled
- Postgres RDS does not have Query Logging enabled
- Postgres RDS does not have Query Logging enabled
- AWS WAF2 does not have a Logging Configuration

#### AWS IAM

- AWS IAM policy allows full administrative privileges
- AWS IAM password policy does not expire within 90 days
- AWS IAM password policy does not have a minimum of 14 characters
- AWS IAM password policy does not have a lowercase character
- AWS IAM password policy does not have a number
- AWS IAM password policy allows password reuse
- AWS IAM password policy does not have a symbol
- AWS IAM password policy does not have an uppercase character
- AWS IAM policies are not only attached to Groups and Roles
- AWS IAM policy documents allow * (asterisk) as a statement's action
- AWS IAM role does not allow only specific services or principals to be assumed
- AWS IAM policy allows assume role permission across all services
- AWS IAM policy allows full administrative privileges
- AWS IAM policy documents allow * (asterisk) as a statement's action
- AWS SQS policy documents allow * (asterisk) as a statement's action
- AWS IAM policies allow credentials exposure for ECR
- AWS IAM policies allow data exfiltration without resource constraints
- AWS IAM policies allow modification of policies and exposes resources
- AWS IAM policies allow write access without constraint
- IAM authentication for Amazon RDS clusters is disabled
- Respective logs of Amazon RDS are disabled
- AWS IAM groups do not include at least one IAM user
- Not all AWS IAM users are members of at least one IAM group
- IAM User has access to the console

#### AWS ElasticSearch

- AWS Elasticsearch domain encryption for data at rest is disabled
- AWS Elasticsearch does not have node-to-node encryption enabled
- AWS Elasticsearch domains do not have enforce HTTPS
- AWS Elasticsearch domain logging is not enabled

#### AWS Public

- AWS RDS database instance is publicly accessible
- AWS ECR repository is exposed to public
- Amazon API gateway methods are publicly accessible
- Amazon MQ is publicly accessible
- AWS Redshift clusters should not be publicly accessible
- AWS EC2 instances with public IP and associated with security groups have Internet access
- AWS Database Migration Service (DMS) replication instance should be publicly accessible

#### AWS S3

- AWS access logging is not enabled on S3 buckets
- Data stored in the AWS S3 bucket is not securely encrypted at rest
- AWS S3 Bucket ACL grants READ permission to everyone
- AWS S3 object versioning is disabled
- AWS S3 bucket has block public ACLs disabled
- AWS S3 bucket BlockPublicPolicy is not set to True
- AWS S3 bucket IgnorePublicAcls is not set to True
- AWS S3 bucket RestrictPublicBucket is not set to True
- AWS S3 bucket is publicly writable
- AWS S3 bucket allows an action with any Principal
- AWS S3 bucket policy locks out all but root user

#### AWS EKS

- AWS EKS control plane logging is disabled
- AWS EKS cluster security group overly permissive to all traffic
- AWS EKS cluster endpoint access is publicly enabled
- AWS EKS cluster does not have secrets encryption enabled
- AWS EKS node group does not have implicit SSH access from 0.0.0.0/0
- AWS EKS Kubernetes secrets are not encrypted

#### AWS Secrets

- AWS access keys and secrets are hard coded in infrastructure
- AWS Lambda function's environment variables expose secrets
- AWS EC2 Instance user data exposes secrets

#### AWS Serverless

- AWS Lambda functions do not have tracing enabled

#### Azure General

- Azure VM data disk is encrypted with the default encryption key instead of ADE/CMK
- Azure App Service Web app authentication is Off
- Standard pricing tier is not selected
- No security contact phone number is present
- Send email notification for high severity alerts is not enabled
- Send email notification for high severity alerts to admins is not enabled
- Azure SQL Server threat detection alerts are not enabled for all threat types
- Azure SQL server send alerts to field value is not set
- MSSQL servers do not have email service and co-administrators enabled
- Not all keys have an expiration date
- Azure key vault is not recoverable
- A retention period of less than 90 days is not specified
- Azure Linux scale set does not use an SSH key
- Virtual Machine extensions are installed
- Azure Security Center Defender is set to Off for servers
- Azure function app authentication is set to Off
- CORS allows resource to access app services
- Azure Security Center Defender is set to Off for app service
- CORS allows resources to access function apps
- Azure function app does not use HTTP 2.0
- Azure Security Center Defender is set to Off for Azure SQL database servers
- Managed identity provider is not enabled for app services
- Remote debugging is enabled for app services
- Automation account variables are not encrypted
- Azure Data Explorer does not use disk encryption
- Azure Data Explorer does not use double encryption
- Azure Batch account does not use key vault to encrypt data
- FTP Deployments are enabled
- Azure Defender is set to Off for SQL servers on machines
- Azure App Service Web app does not use the latest .Net Core version
- Azure App Service Web app does not use the latest PHP version
- Azure App Service Web app does not use the latest Python version
- Azure App Service Web app does not use the latest Java version
- Azure Security Center Defender is set to Off for storage
- Azure Security Center Defender is set to Off for Kubernetes
- Azure Defender is set to Off for container registries
- Azure Security Center Defender set to Off for Key Vault
- App services do not use Azure files
- Azure Virtual Machines are not utilizing managed disks
- Managed disks do not use a specific set of disk encryption sets for customer-managed key encryption
- My SQL server disables geo-redundant backups
- Automatic OS image patching is disabled for Virtual Machine scale sets
- MySQL server disables infrastructure encryption
- Virtual Machine scale sets do not have encryption at host enabled
- Cosmos DB Accounts do not have CMKs encrypting data at rest
- PostgreSQL server disables geo-redundant backups
- Azure Data Factory does not use Git repository for source control
- Unencrypted Data Lake Store accounts
- Key vault disables purge protection
- Key vault does not enable soft delete
- Key vault key is not backed by HSM
- Key vault secrets do not have content_type set
- My SQL server does not enable Threat Detection policy
- PostgreSQL server does not enable Threat Detection policy
- MariaDB server does not enable geo-redundant backups
- PostgreSQL server does not enable infrastructure encryption
- Security contact emails are not set
- Storage for critical data are not encrypted with CMKs
- Azure SQL server ADS Vulnerability Assessment is disabled
- Azure SQL server ADS Vulnerability Assessment Periodic recurring scans is disabled
- Azure SQL server ADS VA Send scan reports to is not configured
- Azure SQL server ADS VA Also send email notifications to admins and subscription owners is disabled
- SQL servers do not have Azure Active Directory admin configured
- Azure Virtual Machines are not utilizing managed disks
- Microsoft Antimalware is not configured to automatically update Virtual Machines
- Azure Data Explorer encryption at rest does not use a CMK
- Virtual Machines are not backed up using Azure backup
- SQL servers do not enable data security policy
- Unattached disks are not encrypted
- Azure data factories are not encrypted with a CMK
- MySQL server does not enable CMKs for encryption
- PostgreSQL server does not enable CMKs for encryption
- Azure storage account encryption CMKs are disabled

#### Azure Logging

- Azure Network Watcher NSG flow logs retention is less than 90 days
- Azure SQL server auditing is disabled
- Azure SQL server audit log retention is less than 91 days
- Storage logging for queue service does not have read,  write,  and delete requests enabled
- Activity log retention is set to less than 365 days
- Log profile is not configured to capture all activities
- App service does not enable HTTP logging
- App service disables detailed error messages
- App service does not enable failed request tracing
- The storage container storing activity logs is publicly accessible
- Azure storage account logging for tables is disabled
- Azure storage account logging for blobs is disabled

#### Azure IAM

- App Service is not registered with an Azure Active Directory account
- Azure subscriptions with custom roles are overly permissive

#### Azure Networking

- Azure instance does not authenticate using SSH keys
- RDP Internet access is not restricted
- SSH Internet access is not restricted
- SQL databases allow ingress from 0.0.0.0/0
- Azure App Service Web app does not redirect HTTP to HTTPS
- Web App does not use the latest version of TLS encryption
- Web App does not have incoming client certificates enabled
- Web App does not use the latest version of HTTP
- MySQL server databases do not have Enforce SSL connection enabled
- Azure PostgreSQL database server with SSL connection is disabled
- Azure PostgreSQL database server with log checkpoints parameter is disabled
- Azure PostgreSQL database server with log connections parameter is disabled
- Azure PostgreSQL database server with connection throttling parameter is disabled
- Public access level for  Blob Containers is not set to private
- Azure Storage Account default network access is set to Allow
- Azure Storage Account Trusted Microsoft Services access is not enabled
- MariaDB servers do not have Enforce SSL connection enabled
- Azure Synapse Workspaces do not enable managed virtual networks
- Azure storage account allows blob container with public access
- Storage accounts without secure transfer enabled
- Azure file sync enables public network access
- PostgreSQL server does not disable public network access
- Function apps are not only accessible over HTTPS
- UDP Services are not restricted from the Internet
- Azure cache for Redis has public network access enabled
- My SQL server enables public network access
- Not only SSL are enabled for cache for Redis
- Azure container container group is not deployed into a virtual network
- Cosmos DB accounts do not have restricted access
- Azure Cosmos DB enables public network access
- Azure Data factory public network access is enabled
- Azure Event Grid domain public network access is enabled
- API management services do not use virtual networks*
- Azure IoT Hub enables public network access
- Key vault does not allow firewall rules settings
- SQL Server is enabled for public network access
- Azure virtual machine NIC has IP forwarding enabled
- Network interfaces use public IPs
- Azure application gateway does not have WAF enabled
- Azure front door does not have WAF enabled
- Application gateway does not use WAF in Detection or Prevention modes
- Azure front door does not use WAF in Detection or Prevention modes
- Azure cognitive search does not disable public network access
- Azure Synapse workspaces have IP firewall rules attached
- Front Door WAF allows message lookup in Log4j2
- Cognitive Services does not disable public network access
- Application Gateway WAF allows message lookup in Log4j2

#### Azure Storage

- Secure transfer required is not enabled
- Storage account does not use the latest version of TLS encryption
- CosmosDB account enables privileged escalation by not restricting management plane changes
- Cognitive Services account encryption CMKs are disabled

#### Azure Kubernetes Service

- Azure AKS cluster monitoring is not enabled
- Azure AKS enable RBAC not enforced
- AKS API server does not define authorized IP ranges
- AKS cluster network policies are not enforced
- Kubernetes dashboard is not disabled
- AKS is not enabled for private clusters
- AKS does not use Azure policies add-on
- AKS does not use disk encryption set

#### Azure Secrets

- AKV secrets do not have an expiration date set
- AKV secrets do not have an expiration date set

#### Azure Public

- MariaDB servers do not have public network access enabled set to False

#### Google Kubernetes Engine

- Stackdriver logging on Kubernetes engine clusters is disabled
- ABAC authorization on Kubernetes engine clusters is enabled
- GCP Kubernetes engine clusters have stackdriver logging disabled
- GCP Kubernetes cluster node auto-repair configuration is disabled
- GCP Kubernetes cluster node auto-upgrade configuration is disabled
- GCP Kubernetes engine clusters have network policy disabled
- GCP Kubernetes engine clusters have client certificate disabled
- GKE control plane is public
- GCP Kubernetes engine clusters have basic authentication enabled
- Master authorized networks are not enabled in GKE clusters
- GCP Kubernetes engine clusters do not have any label information
- GCP Kubernetes engine clusters are not using Container-Optimized OS for node image
- Kubernetes clusters are not created with alias IP ranges enabled
- PodSecurityPolicy controller is not enabled on Kubernetes engine clusters
- Private cluster is disabled when creating Kubernetes clusters
- VPC flow logs and intranode visibility are disabled
- GCP Kubernetes Engine Clusters not configured with private nodes feature
- Kubernetes RBAC users are not managed with Google Groups for GKE
- Binary authorization is not used
- GCP Kubernetes engine clusters have legacy compute engine metadata endpoints enabled
- Secure boot for shielded GKE nodes is disabled
- The GKE metadata server is disabled
- Shielded GKE nodes are not enabled
- Integrity monitoring for shielded GKE nodes is not enabled
- GCP Kubernetes engine cluster nodes have default service account for project access

#### GCP Networking

- GCP Firewall rule allows all traffic on SSH port 22
- GCP Firewall rule allows all traffic on RDP port 3389
- GCP HTTPS load balancer is configured with SSL policy having TLS version 1.1 or lower
- Cloud SQL database instances are publicly accessible
- GCP Cloud DNS has DNSSEC disabled
- RSASHA1 is used for Zone-Signing and Key-Signing Keys in Cloud DNS DNSSEC
- Default network exists in a project
- GCP VM instances have block project-wide SSH keys feature disabled
- GCP projects have OS login disabled
- Project instance overrides the project setting enabling OSLogin
- GCP VM instances have serial port access enabled
- IP forwarding on instances is enabled
- GCP project is configured with legacy network
- Cloud Armor allows message lookup in Log4j2
- GCP Firewall rule allows all traffic on MySQL port 3306

#### GCP General

- Incoming connections to Cloud SQL database instances do not use SSL
- Cloud SQL database instances do not have backup configuration enabled
- GCP BigQuery dataset is publicly accessible
- GCP VM disks not encrypted with CSEKs
- Boot disks for instances do not use CSEKs
- Compute instances launch without shielded VM enabled
- GCP KMS encryption key is not rotating every 90 days
- There are not only GCP-managed service account keys for each service account
- Cloud KMS cryptokeys are anonymously or publicly accessible
- GCP Memorystore for Redis has AUTH disabled

#### GCP Logging

- GCP VPC flow logs for the subnet is set to Off
- GCP log bucket retention policy is not configured using bucket lock
- GCP project audit logging is not configured properly across all services and all users in a project

#### GCP IAM

- Instances use default Compute Engine service account
- Instances use default service account with full access to cloud APIs
- IAM users are assigned Service Account User or Service Account Token creator roles at project level
- Service Account has admin privileges
- Roles impersonate or manage Service Accounts used at folder level
- Roles impersonate or manage Service Accounts used at organizational level
- Default Service Account is used at project level
- Default Service Account is used at organization level
- Default Service Account is used at folder level
- Roles impersonate or manage Service Accounts used at project level
- A MySQL database instance allows anyone to connect with administrative privileges
- GCP Cloud KMS key ring is publicly accessible

#### Google Cloud Storage

- Google storage buckets are not encrypted
- GCP cloud storage bucket with uniform bucket-level access are disabled
- Bucket does not log access
- Bucket logs to itself

#### Google Cloud SQL

- GCP MySQL instance with local_infile database flag is not disabled
- Cloud SQL PostgreSQL instances have log_checkpoints database flag set to Off
- GCP PostgreSQL instance database flag log_connections is disabled
- GCP PostgreSQL instance database flag log_disconnections is disabled
- GCP PostgreSQL instance database flag log_lock_waits is disabled
- GCP PostgreSQL instance database flag log_min_messages is not set
- GCP PostgreSQL instance database flag log_temp_files is not set to 0
- GCP PostgreSQL instance database flag log_min_duration_statement is not set to -1
- Cloud SQL SQL server instance database flag cross db ownership chaining is set to On
- Cloud SQL SQL server instance contained database authentication database flag is set to On
- Cloud SQL database instances have public IPs

#### GCP Public

- GCP storage bucket is publicly accessible to all authenticated users
- Google Compute Engine (GCE) instances have public IP addresses
- GCP Vertex AI Workbench has a public IPs
- GCP Cloud Dataflow job has public IPs
- GCP Dataproc cluster is anonymously or publicly accessible
- GCP Pub/Sub Topic is anonymously or publicly accessible
- GCP BigQuery table is publicly accessible
- Artifact Registry repository is anonymously or publicly accessible
- GCP Cloud Run service is anonymously or publicly accessible
- GCP Dataproc cluster has a public IP
- Google Container Registry repository is anonymously or publicly accessible

#### Dockerfile

- Port 22 is exposed
- Healthcheck instructions have not been added to container images
- A user for the container has not been created
- Copy is not used instead of Add in Dockerfiles
- Update instructions are used alone in a Dockerfile
- LABEL maintainer is not used instead of MAINTAINER (deprecated)
- Base image uses a latest version tag
- Last USER is root

#### Kubernetes

- Containers wishing to share host process ID namespace admitted
- Privileged containers are admitted
- Containers wishing to share host IPC namespace admitted
- Containers wishing to share host network namespace admitted
- Containers run with AllowPrivilegeEscalation
- Root containers admitted
- Containers with NET_RAW capability admitted
- Liveness probe is not configured
- Readiness probe is not configured
- CPU request is not set
- CPU limits are not set
- Memory requests are not set
- Memory limits are not set
- Image tag is not set to Fixed
- Image pull policy is not set to Always
- Container is privileged
- Containers share host process ID namespace
- Containers share host IPC namespace
- Containers share the host network namespace
- Containers run with AllowPrivilegeEscalation
- Default namespace is used
- Read-Only filesystem for containers is not used
- Admission of root containers not minimized
- Containers with added capability are allowed
- Admission of containers with added capability is not minimized
- hostPort is specified
- Mounting Docker socket daemon in a container is not limited
- Admission of containers with NET_RAW capability is not minimized
- securityContext is not applied to pods and containers
- securityContext is not applied to pods and containers
- seccomp is not set to Docker/Default or Runtime/Default
- seccomp profile is not set to Docker/Default or Runtime/Default
- Kubernetes dashboard is deployed
- Tiller (Helm V2) is deployed
- Secrets used as environment variables
- Admission of containers with capabilities assigned is not limited
- Admission of containers with capabilities assigned is not limited
- Service account tokens are not mounted where necessary
- CAP_SYS_ADMIN Linux capability is used
- Containers do not run with a high UID
- Default service accounts are actively used
- Default service accounts are actively used
- Images are not selected using a digest
- Tiller (Helm v2) service is not deleted
- Tiller (Helm V2) deployment is accessible from within the cluster
- The `--anonymous-auth` argument is not set to False
- The `--basic-auth-file` argument is Set
- The `--token-auth-file` argument is Set
- The `--kubelet-https` argument is not set to True
- The `--kubelet-client-certificate` and `--kubelet-client-key` arguments are not set appropriately
- The `--kubelet-certificate-authority` argument is not set appropriately
- The `--authorization-mode` argument is set to AlwaysAllow
- The `--authorization-mode` argument does not include node
- The `--authorization-mode` argument does not include RBAC
- The admission control plugin EventRateLimit is not set
- The admission control plugin AlwaysAdmit is set
- The admission control plugin AlwaysPullImages is not set
- The admission control plugin SecurityContextDeny is set if PodSecurityPolicy is used
- The admission control plugin ServiceAccount is not set
- The admission control plugin NamespaceLifecycle is not set
- The admission control plugin PodSecurityPolicy is not set
- The admission control plugin NodeRestriction is not set
- The `--insecure-bind-address` argument is set
- The `--insecure-port` argument is not set to 0
- The `--secure-port` argument is set to 0
- The `--profiling` argument is not set to False
- The `--audit-log-path` argument is not set
- The `--audit-log-maxage` argument is not set appropriately
- The `--audit-log-maxbackup` argument is not set appropriately
- The `--audit-log-maxsize` argument is not set appropriately
- The `--request-timeout` argument is not set appropriately
- The `--service-account-lookup` argument is not set to True
- The `--service-account-key-file` argument is not set appropriately
- The `--etcd-certfile` and `--etcd-keyfile` arguments are not set appropriately
- The `--tls-cert-file` and `--tls-private-key-file` arguments are not set appropriately
- The `--etcd-cafile` argument is not set appropriately
- Encryption providers are not appropriately configured
- The API server does not make use of strong cryptographic ciphers
- The `--terminated-pod-gc-threshold` argument for controller managers is not set appropriately
- The `--profiling` argument for controller managers is not set to False
- The `--use-service-account-credentials` argument for controller managers is not set to True
- The `--service-account-private-key-file` argument for controller managers is not set appropriately
- The `--root-ca-file` argument for controller managers is not set appropriately
- The RotateKubeletServerCertificate argument for controller managers is not set to True
- The `--bind-address` argument for controller managers is not set to 127.0.0.1
- The `--profiling` argument is not set to False
- The `--bind-address` argument is not set to 127.0.0.1
- The `--cert-file` and `--key-file` arguments are not set appropriately
- The `--client-cert-auth` argument is not set to True
- The `--auto-tls` argument is set to True
- The `--peer-cert-file` and `--peer-key-file` arguments are not set appropriately
- The `--peer-client-cert-auth` argument is not set to True
- The `--anonymous-auth` argument is not set to False
- The `--authorization-mode` argument is set to AlwaysAllow
- The `--client-ca-file` argument for API Servers is not set appropriately
- The `--read-only-port` argument is not set to 0
- The `--streaming-connection-idle-timeout` argument is set to 0
- The `--protect-kernel-defaults` argument is not set to True
- The `--make-iptables-util-chains` argument is not set to True
- The `--hostname-override` argument is set
- The `--event-qps` argument is not set to a level that ensures appropriate event capture
- The `--tls-cert-file` and `--tls-private-key-file` arguments are not set appropriately
- The `--rotate-certificates` argument is set to False
- Kubelet does not use strong cryptographic ciphers
- ClusterRoles that grant control over validating or mutating admission webhook configurations are not minimized
- ClusterRoles that grant permissions to approve CertificateSigningRequests are not minimized
- Roles and ClusterRoles that grant permissions to bind RoleBindings or ClusterRoleBindings are not minimized
- Roles and ClusterRoles that grant permissions to escalate Roles or ClusterRole are not minimized

#### Bridgecrew

- Bridgecrew provider has hard-coded API token

#### Oracle Cloud Infrastructure

- OCI private keys are hard coded in the provider
- OCI Block Storage Block Volume has backup is disabled
- OCI Block Storage Block Volumes are not encrypted with a Customer Managed Key (CMK)
- OCI Compute Instance boot volume has in-transit data encryption is disabled
- OCI Compute Instance has Legacy MetaData service endpoint enabled
- OCI Compute Instance has monitoring disabled
- OCI Object Storage bucket does not emit object events
- OCI Object Storage Bucket has object Versioning disabled
- OCI Object Storage Bucket is not encrypted with a Customer Managed Key (CMK)
- OCI Object Storage bucket is publicly accessible
- OCI IAM password policy for local (non-federated) users does not have a lowercase character
- OCI IAM password policy for local (non-federated) users does not have a number
- OCI IAM password policy for local (non-federated) users does not have a symbol
- OCI IAM password policy for local (non-federated) users does not have an uppercase character]
- OCI File Storage File Systems are not encrypted with a Customer Managed Key (CMK)
- OCI VCN has no inbound security list
- OCI VCN Security list has stateful security rules
- OCI IAM password policy for local (non-federated) users does not have minimum 14 characters

#### OpenAPI

- OpenAPI securityDefinitions is not defined or is empty
- If the security scheme is not of type 'oauth2', the array value must be empty
- Security scheme allows cleartext credentials over unencrypted channels
- Security object needs to have defined rules in its array and rules should be defined in the securityScheme
- Security object for operations, if defined, must define a security scheme, otherwise it should be considered an error
- Security requirement not defined in the security definitions

### Implementation

BluBracket's IaC scanning is [powered by the open source Checkov library](/faq/how-does-blubracket-iac-scanning-compare-to-checkov/), and adds BluBracket workflow and reporting.
