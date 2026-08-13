# ClickBox SOC Product

SOCBOX — Enterprise Cybersecurity Investigation & SOC Training Platform

ROLE

You are a Principal Product Designer, Enterprise SaaS Architect, Senior UX Engineer, and Cybersecurity Product Designer with over 20 years of experience designing enterprise cybersecurity platforms.

You have previously worked on products similar to:

Microsoft Sentinel

Microsoft Defender XDR

Microsoft Entra ID

CrowdStrike Falcon

Google Chronicle

Splunk Enterprise Security

Elastic Security

SentinelOne

Palo Alto Cortex XDR

Your responsibility is to design the complete frontend experience and user interface for SOCBOX, a commercial cybersecurity SaaS platform.

Do NOT generate a generic admin dashboard.

Design a premium enterprise-grade cybersecurity platform.

PRODUCT NAME

SOCBOX

PRODUCT VISION

SOCBOX is a proprietary cloud-native cybersecurity investigation and Security Operations Center (SOC) training platform.

SOCBOX is NOT a SIEM.

SOCBOX simulates enterprise SOC investigations using proprietary synthetic telemetry, allowing learners and security teams to investigate realistic incidents in an environment that feels comparable to Microsoft Sentinel, CrowdStrike Falcon, Google Chronicle, or Splunk Enterprise Security.

Rather than ingesting customer logs, SOCBOX generates realistic attack scenarios, security events, alerts, incidents, and forensic evidence.

Users investigate those incidents exactly as they would inside a real enterprise SOC.

The platform secretly knows the "ground truth" behind every scenario and evaluates the analyst's investigation, methodology, and decisions.

SOCBOX should ultimately become the leading cybersecurity investigation training platform for universities, cybersecurity academies, enterprises, governments, training providers, and SOC teams.

DESIGN PHILOSOPHY

The product must feel:

• Enterprise

• Premium

• Sophisticated

• Modern

• Executive

• Trustworthy

• Fast

• Minimal

• Security-focused

This is software used by professional security analysts.

Do not design it like a startup dashboard.

Do not use playful illustrations.

Do not use hacker clichés.

Do not use Matrix effects.

Do not use neon green themes.

Do not use gaming aesthetics.

PRIMARY UI REFERENCE

Use the attached dashboard designs as the primary inspiration.

The overall design language should closely resemble:

Microsoft Defender XDR

Microsoft Sentinel

CrowdStrike Falcon

Linear

Notion

Vercel Dashboard (Enterprise sections)

Figma Dev Mode

GitHub Enterprise

The interface should feature:

Dark enterprise theme

Thin borders

Rounded cards

Spacious layouts

Dense but readable information

Executive dashboards

Professional tables

Minimal colors

Elegant charts

Clean typography

Floating content cards

Premium spacing

Modern iconography

The interface should immediately communicate that SOCBOX is an enterprise cybersecurity product.

DESIGN SYSTEM

Background

#0B0F14

Sidebar

#11161D

Cards

#171D25

Borders

#262F3A

Primary Text

#FFFFFF

Secondary Text

#B7C0CB

Muted Text

#7E8794

Success

#00C48C

Warning

#FFB020

High Risk

#FF7A00

Critical

#FF5A5F

Information

#3B82F6

Accent colors should only be used for statuses, risks, and interactive elements.

The overall UI should remain clean and mostly monochrome.

TYPOGRAPHY

Use modern enterprise typography.

Large page titles.

Clear hierarchy.

Comfortable spacing.

Readable tables.

Professional information density.

SIDEBAR NAVIGATION

Persistent left navigation.

Include:

Dashboard

Investigations

Alerts

Incident Queue

Identity Center

Endpoint Center

Email Investigations

Threat Intelligence

Global Search

Scenario Library

Learning Center

Certificates

Analytics

Reports

Instructor Portal

Organizations

Settings

Profile

Bottom section:

Subscription

Documentation

Support

Storage Usage

DASHBOARD

The dashboard should feel like the homepage of a professional SOC.

Display:

Security Overview

Active Investigations

Open Incidents

Critical Alerts

Average Investigation Score

Investigation Completion Rate

MITRE ATT&CK Coverage

Recent Alerts

Threat Timeline

Analyst Activity

Learning Progress

Organization Risk Score

Leaderboard

Upcoming Assignments

Recent Certificates

Security News

ALERT CENTER

Design an alert queue inspired by Microsoft Sentinel.

Each alert displays:

Alert Name

Severity

Status

Assigned Analyst

Detection Rule

MITRE Technique

Timestamp

Source

Affected User

Affected Device

Investigation Status

Support:

Search

Filtering

Sorting

Bulk Actions

Saved Views

INCIDENT INVESTIGATION

Every incident opens a professional investigation workspace.

Sections include:

Incident Summary

Timeline

Evidence

Entities

Related Alerts

MITRE Mapping

Recommendations

Investigation Notes

Activity Log

Scoring

Resolution

AI Assistant

IDENTITY CENTER

Inspired by Microsoft Entra ID.

Each identity should display:

User Overview

Department

Role

Manager

Authentication Timeline

Risk Score

MFA Status

Devices

Group Membership

Password History (Simulated)

Conditional Access Policies

Impossible Travel

Password Spray Detection

Risky Sign-ins

Location History

Behavior Timeline

ENDPOINT CENTER

Inspired by Microsoft Defender.

Each endpoint includes:

Device Health

Operating System

Installed Software

Running Processes

Services

Startup Programs

Registry Changes

USB Activity

Open Ports

Network Connections

Security Timeline

Malware History

Risk Score

Isolation Status

EMAIL INVESTIGATION

Outlook-inspired investigation interface.

Include:

Email Preview

Headers

SPF

DKIM

DMARC

Attachments

Embedded URLs

Threat Intelligence

Campaign Correlation

Sandbox Results

Delivery Timeline

Recipients

GLOBAL SEARCH

Universal search across the platform.

Search:

Users

Devices

Incidents

Alerts

Files

Domains

Processes

Emails

IPs

MITRE IDs

Scenarios

Everything searchable from one interface.

SCENARIO LIBRARY

Professional catalog of investigations.

Each scenario shows:

Title

Difficulty

Estimated Duration

Attack Category

MITRE Coverage

Completion Rate

Recommended Skill Level

Launch Investigation

INVESTIGATION LAB

The investigation environment should resemble a real SOC console.

Include:

Alert Panel

Evidence Viewer

Entity Graph

Timeline

Notebook

Checklist

Hints

AI Copilot

Scoring Panel

LEARNING CENTER

Include:

Courses

Labs

Career Paths

Achievements

Certificates

Progress Tracking

Leaderboards

SOC Analyst Track

Threat Hunter Track

Incident Responder Track

Blue Team Track

AI COPILOT

Conversational assistant capable of:

Explaining alerts

Summarizing investigations

Suggesting next actions

Explaining MITRE techniques

Generating investigation reports

Providing analyst guidance

Offering contextual learning tips

REPORTING

Professional reporting dashboards.

Support:

Executive Reports

Analyst Reports

Performance Metrics

Learning Analytics

Investigation Statistics

MITRE Coverage

Risk Trends

Exports:

PDF

CSV

Excel

COMPONENT LIBRARY

Build reusable enterprise components.

Include:

Cards

Charts

Tables

Status Badges

Dropdowns

Filters

Tabs

Modals

Command Palette

Notifications

Timeline Components

Investigation Widgets

Evidence Panels

Entity Cards

Graph Views

Search Components

USER EXPERIENCE

The interface must feel extremely responsive.

Use:

Skeleton loaders

Empty states

Professional onboarding

Toast notifications

Hover interactions

Keyboard shortcuts

Command palette

Subtle transitions

Dark mode by default

ANIMATIONS

Use only subtle enterprise animations.

Fade

Slide

Hover elevation

Chart transitions

Soft panel expansion

Avoid flashy animations.

CONTENT

Do not use placeholder data.

Populate every page with realistic cybersecurity information.

Generate realistic:

Users

Devices

Alerts

Email messages

IP addresses

Domains

Hostnames

MITRE Techniques

Security Events

Processes

Risk Scores

Incidents

Threat Intelligence

Everything should resemble a real enterprise environment.

ARCHITECTURE

Organize the frontend using reusable layouts and modular components.

Create:

Global Layout

Authentication Layout

Dashboard Layout

Investigation Layout

Learning Layout

Administration Layout

Reporting Layout

Settings Layout

Everything should be scalable and reusable.

FINAL OBJECTIVE

Design SOCBOX as if it will become the world's leading enterprise cybersecurity investigation and SOC training platform.

Every screen should feel polished enough to be presented to enterprise customers, cybersecurity training organizations, Fortune 500 companies, universities, and government agencies.

The interface should immediately evoke the experience of using Microsoft Sentinel or CrowdStrike Falcon while remaining entirely original and proprietary under the SOCBOX brand. (Use the attached picture as inspo for the branding for the landing page and also the Dashboard)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/848001c9-7abd-4a79-81cc-3f35836d48b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
