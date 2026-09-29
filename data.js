"use strict";

/* Edit this file to add, remove or update projects. Add verified repository/demo URLs. */

const PROJECTS = [
  {
    id: "crm-automation",
    title: "CRM Automation",
    tagline: "Full-stack platform for managing leads, contacts and workflows.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "React"],
    github: "https://github.com/RScode-ai/crm-automation",
    demo: "",
    details: {
      problem: "Sales teams tracking leads and tasks across spreadsheets lose visibility and follow-ups fall through.",
      solution: "A CRM automation platform that centralizes leads, contacts, tasks and business workflows behind a REST API.",
      architecture: "Spring Boot REST backend, MySQL persistence layer, React-driven frontend consuming the API.",
      features: ["Lead and contact management", "Task and workflow tracking", "REST API for all core operations"],
      challenges: "Designing a data model flexible enough for varied workflow stages without over-complicating the schema.",
      learned: "How to structure a Spring Boot service around clear domain boundaries and REST resource design."
    }
  },
  {
    id: "ai-email-manager",
    title: "AI Email Manager",
    tagline: "Intelligent system for processing and organizing email with AI-assisted workflows.",
    tech: ["Java", "Spring Boot","React", "AI/API Integration", "MySQL"],
    github: "https://github.com/RScode-ai/smart-mail-manager-ai",
    demo: "",
    details: {
      problem: "Manually sorting and prioritizing high volumes of email is slow and inconsistent.",
      solution: "An email management system that uses AI-assisted workflows to classify, organize and act on incoming mail.",
      architecture: "Spring Boot service integrating an external AI API, with MySQL for storing processed mail and rules.",
      features: ["Automated email classification", "AI-assisted processing pipeline", "Persistent storage of processed results"],
      challenges: "Handling AI API latency and failures gracefully within a synchronous email workflow.",
      learned: "Integrating third-party AI APIs into a backend service and designing around their reliability constraints."
    }
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    tagline: "Core Java application for managing hotel bookings and records.",
    tech: ["Core Java", "JDBC", "MySQL"],
    github: "https://github.com/RScode-ai/hotel-management-system-java",
    demo: "",
    details: {
      problem: "Small hotels need a straightforward way to manage bookings, rooms and guest records without heavy software.",
      solution: "A Core Java desktop-style application backed by JDBC and MySQL for managing hotel operations.",
      architecture: "Layered Java application with JDBC for direct database access to MySQL.",
      features: ["Room and booking management", "Guest record tracking", "Direct JDBC-based data access"],
      challenges: "Managing database connections and transactions safely without a framework like Spring.",
      learned: "The mechanics of JDBC, connection handling and writing SQL directly against a relational schema."
    }
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    tagline: "Application for managing book records with structured exception handling.",
    tech: ["JAVA", "Maven", "MySQL"],
    github: "https://github.com/RScode-ai/library-management-system-java-mysql.git",
    demo: "",
    details: {
      problem: "Libraries need reliable tracking of book inventory, borrowing and returns.",
      solution: "A Python-based library management system with API-driven operations and robust exception handling.",
      architecture: "Python service layer exposing operations for managing books, members and loans.",
      features: ["Book inventory tracking", "Borrow/return operations", "Structured exception handling"],
      challenges: "Designing exception handling that gives clear, actionable errors rather than silent failures.",
      learned: "How to design defensive, well-validated APIs in Python."
    }
  }
];
