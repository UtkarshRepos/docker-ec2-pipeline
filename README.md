# Docker EC2 Pipeline with Terraform & GitHub Actions

## Project Overview
This project demonstrates a full **Infrastructure-as-Code (IaC) workflow** using **Terraform**, **AWS EC2**, **Docker**, and **GitHub Actions** for CI/CD. The goal is to automatically deploy a Dockerized application on an EC2 instance whenever changes are pushed to GitHub.

---

## Architecture

GitHub Repository
│
▼
GitHub Actions Workflow
│
▼
Terraform Scripts → AWS VPC, Subnet, Security Group, EC2
│
▼
EC2 Instance → Docker Container (Web App)


- **Terraform** provisions AWS infrastructure (VPC, Subnet, Security Group, EC2 instance).  
- **Docker** runs the web application on the EC2 instance.  
- **GitHub Actions** automates the build and deployment pipeline.  

---

## Tech Stack
- AWS: VPC, Subnet, Security Group, EC2  
- Terraform: IaC for provisioning resources  
- Docker: Containerization of the application  
- GitHub Actions: CI/CD workflow  

---

## Folder Structure

docker-ec2-pipeline/
├─ .github/workflows/
│ └─ deploy.yml # GitHub Actions workflow
├─ terraform/
│ ├─ main.tf
│ ├─ variables.tf
│ └─ outputs.tf
├─ app/ # Optional: Test application files
├─ README.md


---

## Setup & Deployment

### 1. Clone the Repository
```bash
git clone https://github.com/UtkarshRepos/docker-ec2-pipeline.git
cd docker-ec2-pipeline

2. Terraform Commands
cd terraform
terraform init
terraform plan
terraform apply

3. GitHub Actions

Push any changes to the repository.

GitHub Actions workflow will automatically build and deploy the Docker container to EC2.

4. Access the Application

Use the public IP of the EC2 instance in your browser:
http://<EC2-Public-IP>

Key Features

Automated provisioning of AWS infrastructure via Terraform

Secure EC2 instance deployment with SSH key pairs

Dockerized application deployment on EC2

Fully automated CI/CD pipeline using GitHub Actions

Notes

Ensure port 80 is open in the Security Group for HTTP access.

SSH key (.pem) is required to access EC2 instance directly.

Docker image must exist in Docker Hub to deploy successfully.

Author

Utkarsh Chaudhary
GitHub: https://github.com/UtkarshRepos
