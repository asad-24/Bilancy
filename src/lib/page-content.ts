export type ContentSection = {
  title: string;
  body: string[];
};

export const aboutSections: ContentSection[] = [
  {
    title: "Who We Are",
    body: [
      "Bilancy is a YouTube automation and content production team built for creators, entrepreneurs, and businesses that want consistent, professional video output without managing every production step themselves.",
      "Our work covers niche research, content ideas, script writing, voiceovers, video editing, thumbnails, YouTube SEO, channel setup, and growth tracking.",
    ],
  },
  {
    title: "What We Do",
    body: [
      "We help clients turn channel ideas into upload-ready content systems. That includes researching topics, writing retention-focused scripts, producing voiceovers, editing complete videos, designing high-CTR thumbnails, and preparing SEO metadata.",
      "Our goal is to make the production process clear, reliable, and scalable while keeping ownership of final assets with the client.",
    ],
  },
  {
    title: "How We Work",
    body: [
      "Every project starts with the channel goal, niche, audience, and preferred content style. From there, we recommend the package or custom workflow that fits the channel.",
      "Clients receive drafts for review, can request revisions, and approve final deliverables before using them on their own channels.",
    ],
  },
];

export const policyPages: Record<string, { updated: string; sections: ContentSection[] }> = {
  "/privacy-policy": {
    updated: "June 1, 2026",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "We may collect information you voluntarily provide, including your name, email address, phone number, project details, billing-related information, and messages sent through email, WhatsApp, forms, or other contact channels.",
          "We may also collect basic technical information such as device type, browser, referring pages, and general website usage data to improve performance and user experience.",
        ],
      },
      {
        title: "How We Use Information",
        body: [
          "We use submitted information to respond to inquiries, prepare quotes, deliver services, process orders, provide support, improve the website, and communicate project updates.",
          "We do not sell personal information. We may share limited information with trusted service providers only when needed to operate the website, process payments, communicate with you, or deliver requested services.",
        ],
      },
      {
        title: "Data Protection",
        body: [
          "We use reasonable administrative and technical safeguards to protect information. No online transmission or storage method is completely secure, so clients should avoid sending unnecessary sensitive information.",
        ],
      },
      {
        title: "Your Choices",
        body: [
          "You may request access, correction, or deletion of your personal information by contacting us at info@bilancy.com. We may retain records when required for legal, tax, dispute, or legitimate business purposes.",
        ],
      },
    ],
  },
  "/terms-and-conditions": {
    updated: "June 1, 2026",
    sections: [
      {
        title: "Use of This Website",
        body: [
          "By using this website or ordering Bilancy services, you agree to use the site and services lawfully and to provide accurate information when requesting quotes, support, or production work.",
          "We may update website content, service details, pricing, or these terms at any time. Continued use of the website after changes means you accept the updated terms.",
        ],
      },
      {
        title: "Services and Deliverables",
        body: [
          "Service scope, timelines, deliverables, revision terms, and pricing are confirmed before work begins. Custom requests may require additional time or cost depending on complexity.",
          "Final responsibility for publishing, channel management, monetization eligibility, and compliance with platform rules remains with the client.",
        ],
      },
      {
        title: "Payments and Approvals",
        body: [
          "Payments may be required before production begins unless otherwise agreed. Clients should review deliverables promptly and provide clear revision notes within the agreed review window.",
          "Approved deliverables are considered accepted. Additional edits after approval may be treated as new work or billed separately.",
        ],
      },
      {
        title: "Intellectual Property",
        body: [
          "After full payment, clients receive rights to use the final deliverables created specifically for their project. Bilancy may retain rights to internal processes, templates, systems, and non-client-specific materials.",
          "Clients must ensure any materials they provide are authorized for use.",
        ],
      },
    ],
  },
  "/disclaimer": {
    updated: "June 1, 2026",
    sections: [
      {
        title: "No Guaranteed Results",
        body: [
          "Bilancy provides content production and YouTube growth support, but we do not guarantee views, subscribers, monetization approval, rankings, revenue, or any specific platform outcome.",
          "YouTube performance depends on many factors outside our control, including audience behavior, niche competition, upload consistency, platform policies, and algorithm changes.",
        ],
      },
      {
        title: "Platform Responsibility",
        body: [
          "Clients are responsible for reviewing and approving all content before publishing. Clients are also responsible for following YouTube's Terms of Service, Community Guidelines, copyright rules, and monetization policies.",
        ],
      },
      {
        title: "Informational Content",
        body: [
          "Website content is provided for general informational purposes and should not be treated as legal, financial, tax, or professional business advice.",
        ],
      },
    ],
  },
  "/cookie-policy": {
    updated: "June 1, 2026",
    sections: [
      {
        title: "What Cookies Are",
        body: [
          "Cookies are small files stored on your device that help websites remember preferences, understand usage, improve performance, and support basic functionality.",
        ],
      },
      {
        title: "How We May Use Cookies",
        body: [
          "Bilancy may use essential cookies for website operation, analytics cookies to understand aggregate usage, and preference cookies to improve your browsing experience.",
          "Third-party tools, embedded content, or communication services may also use cookies according to their own policies.",
        ],
      },
      {
        title: "Managing Cookies",
        body: [
          "You can manage or block cookies through your browser settings. Some website features may not work properly if essential cookies are disabled.",
        ],
      },
    ],
  },
  "/refund-policy": {
    updated: "June 1, 2026",
    sections: [
      {
        title: "Custom Service Work",
        body: [
          "Bilancy provides custom digital services such as video editing, scripts, thumbnails, voiceovers, SEO preparation, and channel setup. Because these services require time, labor, and project-specific production, refunds are limited once work has started.",
        ],
      },
      {
        title: "Before Work Begins",
        body: [
          "If you cancel before production has started, you may request a refund. Any payment processor fees, consultation costs, or already-purchased project assets may be deducted where applicable.",
        ],
      },
      {
        title: "After Work Begins",
        body: [
          "After research, writing, design, editing, voiceover, or project setup has begun, refunds are not guaranteed. We will prioritize revisions and reasonable fixes within the agreed scope.",
          "If a project cannot be completed due to an issue on our side, we may offer a partial refund, replacement deliverable, credit, or other fair resolution.",
        ],
      },
      {
        title: "How to Request Help",
        body: [
          "Contact info@bilancy.com with your project details, order information, and the reason for your request. We review refund and revision requests case by case.",
        ],
      },
    ],
  },
};

export const extraFaqs = [
  {
    question: "What services are included in YouTube automation?",
    answer:
      "Depending on the package, services can include niche research, topic research, scripts, voiceovers, video editing, thumbnail design, YouTube SEO, channel setup, and performance guidance.",
  },
  {
    question: "Do I own the final videos and thumbnails?",
    answer:
      "Yes. After full payment, you can use the final deliverables created for your project on your own YouTube channel or brand properties.",
  },
  {
    question: "Can you work with an existing YouTube channel?",
    answer:
      "Yes. We can review existing channel performance, improve production quality, refresh thumbnails, optimize metadata, and create a more consistent upload workflow.",
  },
  {
    question: "Do you guarantee monetization or revenue?",
    answer:
      "No agency can honestly guarantee monetization, revenue, views, or subscriber counts. We focus on professional production quality, research, retention, thumbnails, and SEO best practices.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Revision terms are confirmed with your package or custom quote. Clear, consolidated feedback helps us revise efficiently and keep delivery moving.",
  },
];
