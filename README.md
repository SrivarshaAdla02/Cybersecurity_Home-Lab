# Cybersecurity_Home-Lab

A self-contained attack-and-defense home lab environment for hands-on learning and experimentation in cybersecurity. This lab features:

Attacker Machine: Kali Linux

Victim Machine: Windows Server with Active Directory domain controller

VPN Gateway: Ubuntu server running OpenVPN for secure network segmentation

Within this lab, you will:

Reconnaissance & Scanning

Use Nessus on Kali to scan the Windows Server for vulnerabilities

Analyze scan reports to identify high- and medium-severity issues

Patch & Harden

Apply patches and configuration changes to remediate discovered vulnerabilities

Implement Active Directory security best practices (strong password policies, least-privilege groups)

Verification

Re-run Nessus scans to confirm vulnerabilities have been closed

Validate AD authentication and VPN connectivity post-remediation

🛠️ Architecture Diagram

[Internet] -- [Kali Attacker]
                  |(Nessus Scan)
        [OpenVPN Gateway (Ubuntu)]
                  |(VPN Tunnel)
      [Windows Server (AD Domain Controller)]

🚀 Getting Started

Prerequisites

Host machine with VirtualBox or VMware

Minimum 8 GB RAM, 2 CPUs, 50 GB free disk space

ISO images for Kali Linux, Windows Server 2019/2022, Ubuntu 20.04+

Nessus Professional or Nessus Essentials license (free)

Lab Setup

Deploy Ubuntu VPN Gateway

Create a VM: 2 CPU, 2 GB RAM, 20 GB disk

Install Ubuntu and OpenVPN server using EasyRSA

Generate client and server certificates

Enable IP forwarding and configure UFW to allow VPN traffic

Deploy Windows Server AD

Create a VM: 2 CPU, 4 GB RAM, 40 GB disk

Install Windows Server and promote to a Domain Controller

Configure DNS and Active Directory domain (e.g., lab.local)

Deploy Kali Attacker

Create a VM: 2 CPU, 2 GB RAM, 20 GB disk

Install Kali Linux

Install Nessus and configure it to scan the Windows Server IP

Connect to the VPN gateway client profile to access the AD network

🔧 Usage

Connect to VPN

sudo openvpn --config /path/to/client.ovpn

Run Nessus Scan

Open https://localhost:8834 in Kali

Create a new scan against the Windows Server IP (e.g., 10.8.0.2)

Launch and review the report

Patch Windows Server

Log into the Windows VM

Apply Microsoft Updates and review Security baselines

Disable or secure any unnecessary services

Verify Remediation

Re-run the Nessus scan

Confirm the absence of previously detected vulnerabilities

📚 Learning Outcomes

Mastery of vulnerability scanning and analysis with Nessus

Practical experience patching and hardening Windows AD environments

Understanding of secure VPN deployment and network segmentation

Verification and validation techniques for security controls
