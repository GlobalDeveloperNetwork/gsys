
# Gsys - GitOps.Systems CLI

This is an experimental CLI in active development.  Please USE AT YOUR OWN RISK.

## What is it?
An Oclif based CLI that is designed to provide multi-cloud deployment capabilities. 

## Which clouds?
- AWS EKS
- Google Cloud Anthos 
- Azure AKS 
- Heroku 
- Render 
- Vercel for UI only
- Open Source Stacks (a fullstack.llc company)

## What are you providing?
- We are providing a DSL for security conformance that will be built into Docker images, and described by Helm deployments.
- This CLI will provide a specification for building stacks.
- By "building stacks", we realize that K8s already provides information on resources and their definitions, deployments, secres, etc.  This project is entirely different.

## What makes this CLI different?
- Publish your Kubernetes stack on any cloud.
- This CLI operates deployment using K8s Helm charts, but the resources described in the helm chart and `.stack` definition are designed for security compliance and idempotent operations.  
- This provides accesss to a language that performs transformations of source code at build time.  i.e.- When the docker images are built and before they are published. 
- Docker images are loaded on top of your base image using multi-step build process (multiple FROM statements)
- Docker images are then [digitally signed and published](https://medium.com/better-programming/docker-content-trust-security-digital-signatures-eeae9348140d) with DCT. 
- Deploy normally using [Helm chart](https://www.magalix.com/blog/kubernetes-deployment-with-helm-charts).
- Optionally we provide Helm and KubeCTL as part of this CLI. 
- Optionally we provide AWS EKS, EC2, and AKS, Gcloud, Heroku, and other CLIs as plugins that can be installed into this CLI.
