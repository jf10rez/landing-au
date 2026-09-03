const en = {
  meta: {
    home: {
      title: "Ilaxus | Hire AI digital employees for your business",
      description:
        "AI digital employees for sales, marketing, finance and more. Add specialists that work for your business 24/7 and supercharge your team.",
      keywords: [
        "AI automation",
        "n8n workflows",
        "sales automation",
        "automated marketing reporting",
        "AI agents",
        "automation for agencies",
        "automatic sales pipeline",
      ],
    },
    catalog: {
      title: "AI Digital Employees — Ilaxus",
      description:
        "Catalog of AI-based digital employees by department: sales, marketing, content, legal, finance, e-commerce and more. From $3 USD/mo.",
      ogTitle: "AI Digital Employees — Ilaxus",
      ogDescription:
        "Hire specialized AI talent from $3 USD/mo. Sales, marketing, content and more agents operating 24/7. Prices in USD and COP.",
    },
  },
  nav: {
    links: [
      { href: "/#productos", label: "Products" },
      { href: "/catalogo", label: "Catalog" },
      { href: "/#como-funciona", label: "How it works" },
      { href: "/#casos", label: "Use cases" },
      { href: "/#pricing", label: "Book" },
    ],
    cta: "Book a call",
    ctaShort: "Book",
  },
  hero: {
    title: "Process automation, no off-the-shelf templates.",
    subtitle:
      "AI workflows that fit your architecture. n8n, custom agents and APIs — without forcing tools you don't need.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See how it works",
  },
  socialProof: {
    eyebrow: "Teams already operating without friction",
  },
  productsSection: {
    eyebrow: "Products",
    title: "Three ways to get your time back. Pick yours.",
  },
  productCategories: {
    comercial: "Sales Automation",
    marketing: "Marketing Automation",
    openclaw: "AI Agent",
    empleadoIa: "AI Employee",
    b2b: "B2B Automation",
    agency: "Agency Automation",
  },
  carousel: {
    regionLabel: "Product carousel",
    regionRole: "carousel",
    prevAria: "Previous product",
    nextAria: "Next product",
    tablistLabel: "Select product",
    slideRole: "slide",
    slideAria: "{{title}} — slide {{index}} of {{count}}",
  },
  products: {
    viewAgent: "View agent",
    comercial: {
      title: "More deals closed. Fewer hours lost on screens.",
      description:
        "Leads that arrive enriched, a pipeline that moves on its own, automatic follow-up. Your team stops copy-pasting data between screens and actually starts selling.",
      features: [
        "Qualified leads on arrival — no manual data entry",
        "Email sequences that fire at the exact right moment",
        "A CRM that updates itself — without opening it",
        "Alerts that only ping when an opportunity is real",
      ],
      ctaLabel: "See sales automation",
    },
    marketing: {
      title: "Reports that write themselves. Content that publishes on its own.",
      description:
        "Connect Meta Ads, Google Ads and Analytics in one workflow. Multi-client dashboards that refresh without anyone exporting CSVs at 11 PM.",
      features: [
        "Multi-client dashboards that refresh automatically",
        "AI content that goes from idea to published without editing",
        "Campaigns that optimize while your team sleeps",
        "One-click cross-platform publishing — no logging into every network",
      ],
      ctaLabel: "See agency automation",
    },
    openclaw: {
      title: "Your personal 24/7 AI agent",
      description:
        "Your private AI assistant, always on and deployable in 60 seconds. It connects to Telegram and WhatsApp to automate your daily tasks with zero maintenance.",
      features: [
        "One-click deploy — no technical setup",
        "Telegram and WhatsApp integration",
        "Preinstalled AI credits",
        "Private and secure environment by default",
        "Zero maintenance — automatic updates",
        "A dedicated inbox for your agent",
      ],
      ctaLabel: "See the OpenClaw plan",
    },
  },
  howItWorks: {
    eyebrow: "Process",
    title: "How we automate your processes",
    steps: [
      {
        number: "01",
        title: "Operational diagnostic",
        description:
          "We map your current processes. We identify the points where time is lost and money leaks.",
      },
      {
        number: "02",
        title: "Workflow build",
        description:
          "We design the flow with n8n, AI agents and the APIs of your tools. Every node has a measurable purpose.",
      },
      {
        number: "03",
        title: "Delivery and monitoring",
        description:
          "We don't walk away. We hand over a documented system, train your team and monitor that the numbers improve.",
      },
    ],
  },
  stack: {
    eyebrow: "Tech Stack",
    title: "We integrate the tools you already use",
    description:
      "We connect n8n, AI agents and your business platforms without breaking what already works.",
    footer:
      "Don't see your tool? If it has an API, we integrate it. We also work with private connectors and custom endpoints.",
    categories: {
      Orchestration: "Orchestration",
      "AI Agent": "AI Agent",
      Automation: "Automation",
      CRM: "CRM",
      Comms: "Comms",
      Database: "Database",
      Workspace: "Workspace",
    },
  },
  useCases: {
    eyebrow: "Results",
    title: "Numbers that matter",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    items: [
      {
        id: "saas-b2b",
        clientType: "SaaS B2B",
        problem:
          "The sales team was losing 12 hours a week on data entry and lead follow-up.",
        solution:
          "Automated prospecting workflow: contact enrichment, scoring, email sequences and HubSpot sync.",
        metrics: [
          { label: "hours saved / week", value: 12, suffix: "h" },
          { label: "increase in response", value: 34, suffix: "%" },
        ],
      },
      {
        id: "marketing-agency",
        clientType: "Marketing Agency",
        problem:
          "10 clients, 10 manual reports. The team couldn't scale.",
        solution:
          "Automated reporting pipeline: data extraction from Meta Ads, Google Ads and Analytics, PDF generation and scheduled delivery.",
        metrics: [
          { label: "automated reports / month", value: 120, suffix: "" },
          { label: "time reduction", value: 85, suffix: "%" },
        ],
      },
      {
        id: "ecommerce",
        clientType: "E-commerce",
        problem:
          "Abandoned carts with no recovery. Out-of-date stock across channels.",
        solution:
          "Cart recovery workflow + real-time inventory sync between Shopify, Amazon and ERP.",
        metrics: [
          { label: "cart recovery", value: 18, suffix: "%" },
          { label: "stock errors", value: 0, suffix: "" },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Step one",
    title: "Request a free diagnostic",
    description:
      "Tell us which process you want to automate and we'll reach out within 24 hours.",
    cardTitle: "Free diagnostic",
    cardDescription:
      "We analyze your current operations and deliver a map of automatable workflows with an ROI estimate.",
    list: [
      "Mapping of current processes",
      "Bottleneck identification",
      "Workflow proposal with estimates",
      "Implementation roadmap",
    ],
    note: "No credit card. No commitment.",
  },
  booking: {
    fields: {
      name: {
        label: "Full name",
        placeholder: "Your name",
      },
      email: {
        label: "Email address",
        placeholder: "you@company.com",
      },
      phone: {
        label: "Phone",
        placeholder: "Optional",
      },
      message: {
        label: "What process would you like to automate?",
        placeholder:
          "Tell us briefly which repetitive tasks you want to eliminate...",
      },
    },
    submit: "Request diagnostic",
    sending: "Sending...",
  },
  bookingFeedback: {
    rateLimited:
      "You've sent too many requests. Please wait a moment and try again.",
    success:
      "Message sent. We'll review your request and get back to you soon.",
    errorSend:
      "Your request couldn't be sent right now. Please try again later.",
    reviewFields: "Please review the highlighted fields.",
    errors: {
      name: "The name must be between 2 and 100 characters.",
      email: "Please enter a valid email address.",
      phone: "The phone number is too long.",
      message: "Tell us a bit more about your process (10 to 2000 characters).",
    },
    emailSubject: "New diagnostic request — {{name}}",
    emailSentLabel: "Sent on",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        id: "q1",
        question: "What automation tools do you use?",
        answer:
          "n8n as the main orchestrator, complemented by OpenAI APIs, Make, Zapier and the CRMs you already use (HubSpot, Salesforce, Pipedrive). We don't force a stack: we integrate what you already have.",
      },
      {
        id: "q2",
        question: "How long does it take to implement a workflow?",
        answer:
          "It depends on complexity. An email automation flow takes 3-5 days. A multi-channel prospecting system can take 2-3 weeks. We always deliver with documentation and training.",
      },
      {
        id: "q3",
        question: "Do I need to know how to code to automate processes?",
        answer:
          "No. We design, build and maintain the workflows. You receive a working system. If you want to make minor adjustments, we train you.",
      },
      {
        id: "q4",
        question: "What if an API changes or fails?",
        answer:
          "The workflows include error handling, automatic retries and alerts via Slack/email. We monitor failures and adjust at no extra cost during the warranty period.",
      },
      {
        id: "q5",
        question: "How is billing handled?",
        answer:
          "Fixed project fee after the initial diagnostic. No retainer and no hidden costs. The price depends on the number of nodes, integrations and logic complexity.",
      },
      {
        id: "q6",
        question: "How much does automating business processes cost?",
        answer:
          "It depends on the complexity of the flow and the required integrations. We do a free 30-minute diagnostic to map your processes and give you an exact quote. Typical projects start from USD $2,500 for basic workflows up to USD $15,000+ for multi-system architectures.",
      },
      {
        id: "q7",
        question: "Which CRMs do your workflows integrate with?",
        answer:
          "We work with HubSpot, Salesforce, Pipedrive, Zoho CRM and any CRM with a REST API. If your CRM has no public API, we can use controlled scraping or Zapier/Make integrations as a bridge.",
      },
    ],
  },
  footer: {
    ariaHome: "Ilaxus — Home",
    links: [
      { label: "Products", href: "/#productos" },
      { label: "How it works", href: "/#como-funciona" },
      { label: "Use cases", href: "/#casos" },
      { label: "Contact", href: "/#pricing" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    rights: "© {{year}} Ilaxus. All rights reserved.",
    tagline: "Designed to run without friction.",
  },
  stickyCta: {
    label: "Request diagnostic",
  },
  jsonLd: {
    organizationDescription:
      "Smart workflows with n8n and AI agents that automate sales, marketing and operations. Real results, not processes. For your architecture.",
    websiteName:
      "Ilaxus — AI automation that delivers real results",
    websiteDescription:
      "Workflows with n8n and AI agents that fill your pipeline and update your dashboards on their own. No templates.",
    productComercial: {
      name: "AI sales automation for sales teams",
      description:
        "Enriched leads, automatic pipeline, synced CRM. Your team stops copying data and starts closing deals. HubSpot, Salesforce, LinkedIn integration.",
      offerDescription: "Custom project based on diagnostic",
    },
    productMarketing: {
      name: "Automation for marketing agencies",
      description:
        "Multi-client dashboards that update on their own, AI content from idea to publication, scheduled campaign optimization and cross-platform publishing in one click.",
      offerDescription: "Custom project based on diagnostic",
    },
    serviceDescription:
      "Workflows with n8n and AI agents that deliver results in sales, marketing and operations. No templates. Built for your architecture.",
    areaServed: [
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Mexico" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
    ],
    navHome: "Home",
    navProducts: "Products",
    navHowItWorks: "How it works",
    navCases: "Use cases",
    navContact: "Contact",
  },
  catalog: {
    currencyLabel: "Select currency",
    perMonth: "/mo",
    hero: {
      badge: "AI Employees · from ",
      titleBefore: "Hire an AI employee",
      titleAccent: "for less than a coffee a day",
      titleAfter: ".",
      descriptionStart:
        "A catalog of specialized agents organized by department. Start with the ",
      descriptionPlan: "Starter plan at ",
      descriptionEnd:
        " and scale to Pro or Custom when you need it. No contracts, no setup fee. Prices in USD or COP.",
      ctaPrimary: "View catalog",
      ctaSecondary: "How they work",
    },
    stats: {
      labels: ["entry price", "operating", "deploy time", "areas covered"],
    },
    categoryNavLabel: "Categories:",
    grid: {
      eyebrow: "Catalog",
      title: "Choose a department. Hire an employee.",
      description:
        "Every employee has three plans: Starter to try, Pro for production and Custom for made-to-measure agents.",
      popular: "Popular",
      planStarter: "Starter",
      planPro: "Pro",
      perMonth: "/mo",
      from: "From",
      hire: "Hire",
      details: "View details",
      hireAria: "Hire {{name}} from {{price}}/mo",
    },
    pricingNote: {
      starter: {
        title: "Starter Plan",
        from: "From ",
        description:
          "Ideal to get started. The Self-Setup Agent is the lowest entry point in the catalog. Zero setup, cancel whenever you want.",
      },
      pro: {
        title: "Pro Plan",
        from: "From ",
        description:
          "Unlimited volume, custom integrations with your stack, priority support and advanced models. Much more capacity for less than 2× the Starter price.",
      },
      custom: {
        title: "Custom Plan",
        description:
          "Bespoke agent development: integrations with your stack, exclusive workflows and dedicated models. Pricing depends on scope.",
      },
      bookCall: "Book a call",
      note: "Prices in USD. Switch to COP with the currency selector — converted at the current TRM exchange rate ({{trm}}).",
    },
    custom: {
      label: "Custom",
      value: "Bespoke",
      description:
        "Bespoke agent development: integrations with your stack, exclusive workflows and dedicated models. Pricing depends on scope.",
      features: [
        "Scope and workflows defined with you",
        "Integrations with your existing stack",
        "Dedicated models and private data",
        "SLA and priority support",
      ],
    },
    howItWorks: {
      eyebrow: "Process",
      title: "Start cheap. Scale when it works.",
      steps: [
        {
          n: "01",
          t: "Choose a department",
          d: "Sales, marketing, content, legal, finance, e-commerce or self-setup. Select the roles you're missing.",
        },
        {
          n: "02",
          t: "Start with Starter",
          d: "From $3/mo per employee. No contracts, no setup, live in 60 seconds.",
        },
        {
          n: "03",
          t: "Scale to Pro",
          d: "Once you validate the ROI, move up to the Pro plan with unlimited volume, advanced models and custom integrations.",
        },
        {
          n: "04",
          t: "Or go bespoke",
          d: "No plan fits? With Custom we build agents designed 100% for your operation.",
        },
      ],
    },
    cta: {
      badge: "Starter from ",
      title: "Build your digital team today.",
      descriptionStart: "Start with one agent for ",
      descriptionEnd:
        ". If it works, scale to Pro or add more roles. If not, cancel at no cost.",
      start: "Start with ",
      back: "Back to catalog",
    },
    categories: {
      ventas: {
        name: "Sales & Business Development",
        description:
          "Employees specialized in generating business opportunities, prospecting companies, winning clients and supporting the sales process.",
      },
      marketing: {
        name: "Marketing",
        description:
          "Employees specialized in designing marketing strategies, ad campaigns, SEO, email marketing, automation and brand growth.",
      },
      contenido: {
        name: "Content Creation",
        description:
          "Employees specialized in creating audiovisual and multimedia content to boost a company's digital presence.",
      },
      legal: {
        name: "Legal",
        description:
          "Employees specialized in legal support, drafting and reviewing legal documents, consultations and legal processes.",
      },
      finanzas: {
        name: "Finance",
        description:
          "AI employees that master money: they analyze markets, control budgets and cash flow, and turn your numbers into decisions.",
      },
      ecommerce: {
        name: "E-commerce",
        description:
          "Employees specialized in building online stores, publishing products, managing orders and supporting buyers through the whole purchase.",
      },
      autoservicio: {
        name: "Self-setup",
        description:
          "Agents you configure yourself, no code and no dependence on anyone. The cheapest way to start with AI.",
      },
    },
    employees: {
      "b2b-ia": {
        name: "B2B IA",
        tagline:
          "Prospects companies, qualifies opportunities and books meetings straight to your calendar.",
        description:
          "A B2B prospecting engine that works while your team sleeps. It finds companies that match your ideal customer profile, researches them, drafts personalized messages and books meetings directly into your calendar. Leads arrive qualified and with context, ready for a human to close.",
        idealFor:
          "B2B sales teams, SaaS and professional services that need more meetings without growing headcount.",
        skills: [
          "B2B prospecting",
          "Lead qualification",
          "CRM sync",
          "Meeting booking",
        ],
        starterFeatures: [
          "Up to 100 prospected leads per month",
          "Basic company enrichment",
          "Personalized emails ready to copy-paste and send from your inbox (manual mode)",
          "Sync with your CRM",
          "No extra subscriptions: you only pay for the plan",
        ],
        proFeatures: [
          "Unlimited prospecting",
          "Advanced personalization models",
          "Predictive opportunity scoring",
          "100% automated multi-channel outreach (email + LinkedIn)",
          "Automatic meeting booking",
          "Subscriptions included: WarmUp, anti-spam mirror domain, sending workspace and AI models",
        ],
        proBadge: "Best value",
      },
      "asesor-comercial-ia": {
        name: "Sales Advisor IA",
        tagline:
          "Serves your customers 24/7, answers their questions, recommends your products and turns conversations into sales opportunities.",
        description:
          "A digital sales rep that never sleeps. It replies on WhatsApp and web in seconds, understands what each customer needs, recommends the right product and hands over the conversation ready to close when there's real buying intent. Every interaction is logged and classified.",
        idealFor:
          "Businesses with high volumes of queries: e-commerce, retail, services and SMBs that sell through WhatsApp.",
        skills: [
          "24/7 support",
          "WhatsApp",
          "Lead qualification",
          "Follow-up",
          "Customer support",
          "Conversion",
        ],
        starterFeatures: [
          "24/7 support on WhatsApp and web",
          "Up to 100 conversations per month",
          "Product recommendations",
          "Logging of every interaction",
        ],
        proFeatures: [
          "Unlimited conversations",
          "Lead qualification and routing",
          "Automatic post-sale follow-up",
          "Integration with your catalog and payments",
          "Custom tone and scripts",
        ],
      },
      "marketing-ia": {
        name: "Marketing IA",
        tagline:
          "Designs strategies, launches campaigns and automates your brand growth.",
        description:
          "Your entire marketing team in a single agent. It connects Meta Ads, Google Ads and Analytics, generates the content for each campaign, publishes it and delivers reports that write themselves. Dashboards refresh without anyone exporting CSVs at 11 PM.",
        idealFor:
          "Agencies, growth teams and brands that need consistent marketing execution without burning out their people.",
        skills: ["Strategy", "SEO", "Email marketing", "Automation"],
        starterFeatures: [
          "1 brand and up to 3 channels",
          "Weekly content calendar",
          "Automatic monthly reports",
          "Cross-platform publishing",
        ],
        proFeatures: [
          "Unlimited brands and channels",
          "Real-time multi-client dashboards",
          "Automatic campaign optimization",
          "AI content from idea to publication",
          "White-label client reports",
        ],
        proBadge: "Best value",
      },
      "tiktok-autopilot-ia": {
        name: "TikTok Autopilot IA",
        tagline:
          "Pick your niche and publish on TikTok every day: the agent creates the content, schedules it and uploads it automatically.",
        description:
          "A content creator that works alone. You choose the niche — fitness, finance, humor, your brand — and the agent handles the rest: it spots trends, writes the scripts, generates the videos, schedules them and publishes them to your TikTok account every day. You just review and reply to comments.",
        idealFor:
          "Creators, personal brands and businesses that want a daily presence on TikTok without recording a single video.",
        skills: [
          "Niche of your choice",
          "Automatic publishing",
          "Content calendar",
          "TikTok trends",
          "AI scripts",
          "Generative videos (Pro)",
        ],
        starterFeatures: [
          "Daily publishing (up to 20 videos/mo)",
          "Niche of your choice with retraining",
          "Scripts and niche trends",
          "Automatic scheduling",
        ],
        proFeatures: [
          "Professional generative videos with AI",
          "Realistic avatars and voiceovers",
          "Expanded publishing volume",
          "A/B testing of hooks and formats",
          "Per-video performance analytics",
        ],
      },
      "abogado-ia": {
        name: "Legal IA",
        tagline:
          "Drafts and reviews contracts, policies and legal documents; answers legal consultations.",
        description:
          "A legal assistant available around the clock. It drafts contracts and policies from Colombian and international templates, reviews risky clauses, and answers legal consultations with clear references. Ideal for day-to-day operations that don't require a lawyer's signature.",
        idealFor:
          "SMBs, startups and legal teams that need to free up time from repetitive document work.",
        skills: [
          "Contracts",
          "Policies and terms",
          "Legal consultations",
          "Compliance",
        ],
        starterFeatures: [
          "Up to 10 documents per month",
          "Contract and policy templates",
          "Basic clause review",
          "Unlimited legal consultations",
        ],
        proFeatures: [
          "Unlimited documents",
          "Deep review with risk matrix",
          "Regulatory compliance (data protection)",
          "Expiry and renewal alerts",
          "Approval flows with your team",
        ],
      },
      "financiero-ia": {
        name: "Financial Analyst IA",
        tagline:
          "Your 24/7 market analyst. It studies stocks, crypto and futures, interprets charts, trends and indicators, and spots potential entry and exit opportunities.",
        description:
          "It applies real technical analysis — trends, support and resistance, candlesticks, volume and indicators — to stocks, crypto and futures, and combines it with market context and risk management to design short, medium and long-term trading and investment strategies. It doesn't decide for you: it hands you the analysis and the plan so you decide with judgment.",
        idealFor:
          "Investors and traders who want rigorous analysis and risk discipline without paying for expensive subscriptions or a full-time analyst.",
        skills: [
          "Technical analysis",
          "Stocks",
          "Crypto",
          "Futures",
          "Trading",
          "Investing",
          "Indicators",
          "Charts and trends",
          "Risk management",
        ],
        starterFeatures: [
          "1 market of your choice (stocks, crypto or futures)",
          "Daily technical analysis of your assets",
          "Support, resistance and breakout alerts",
          "Weekly market and opportunity report",
        ],
        proFeatures: [
          "Unlimited markets and assets",
          "Real-time entry and exit alerts",
          "Short, medium and long-term strategies",
          "Risk management and suggested position size",
          "Monthly portfolio performance report",
        ],
      },
      "ecommerce-ia": {
        name: "Ecommerce IA",
        tagline:
          "Your online store, built and run by a digital employee: publishes products, processes orders and serves your buyers 24/7. No code, no agency, no touching the dashboard.",
        description:
          "Ecommerce IA is your whole store team in one. It sets up your store on Shopify or WooCommerce with the default or custom template, guides you step by step through hosting and domain topics, imports your catalog from photos, Excel or WhatsApp, and writes product sheets with AI. Then it runs the store for you: publishes products, processes orders, and supports every buyer from start to finish — pre-sale questions, purchase advice, shipping follow-up and post-sale. If your product needs a recommendation, it makes it; if a customer leaves without buying, it win them back. You just focus on your business: the agent handles the storefront, the operations and the customers.",
        idealFor:
          "Physical businesses that want to sell online without touching tech, entrepreneurs with a WhatsApp/Instagram catalog who want a real store, and existing stores that need frictionless operations.",
        skills: [
          "Store creation",
          "Shopify / WooCommerce",
          "Catalog management",
          "Orders and payments",
          "Buyer support",
          "Shipping tracking",
          "Cart recovery",
          "Conversion optimization",
        ],
        starterFeatures: [
          "Online store ready with your business details",
          "Up to 50 published products with AI product sheets (text + photos)",
          "Catalog import from photos, Excel or WhatsApp",
          "Monthly sales report",
          "Guide for Colombian payment gateways (Wompi, PayU)",
        ],
        proFeatures: [
          "Everything in Starter, plus:",
          "Unlimited catalog",
          "Automatic order processing (payment + confirmation)",
          "24/7 support with shipping tracking on WhatsApp and web",
          "Abandoned cart recovery",
          "Continuous conversion optimization (product sheets, prices and promos)",
          "Web + direct WhatsApp sales (multi-channel)",
          "Real-time sales, inventory and customer reports",
        ],
      },
      "agente-autoconfigurable": {
        name: "Self-Setup Agent",
        tagline:
          "Build your own AI agent in minutes: choose channels, tools and personality, and deploy it yourself. The lowest price in the catalog.",
        description:
          "The gateway to AI agents. You choose the name, personality, channels (WhatsApp, Telegram, web) and the tools it can use — calendar, spreadsheets, search — and the agent is deployed in minutes. No code, no agency, no sales calls. Perfect for learning, testing ideas and automating personal tasks.",
        idealFor:
          "Entrepreneurs, freelancers and curious minds who want their first AI agent without depending on anyone.",
        skills: [
          "No code",
          "Channels of your choice",
          "Tools of your choice",
          "Ready templates",
          "Self-deployment",
        ],
        starterFeatures: [
          "1 agent, 1 channel",
          "Up to 200 tasks per month",
          "Preconfigured templates",
          "Autonomous deployment in minutes",
        ],
        proFeatures: [
          "Unlimited agents and channels",
          "Expanded storage",
          "Advanced reasoning models",
          "Connection to your own APIs",
          "Priority support",
        ],
        disclaimer:
          "Starter has limitations: reduced storage, standard models and lower task volume. Scale to Pro when you need it.",
      },
    },
  },
  employeePage: {
    from: "From",
    perMonth: "/mo",
    noContract: "No contracts. Cancel whenever you want.",
    hire: "Hire",
    metaStarter: "Starter plan at {{price}}.",
    whatItDoes: "What it does",
    idealFor: "Ideal for",
    plans: "Plans",
    plansTitle: "Start cheap. Scale when it works.",
    startStarter: "Start with Starter",
    startPro: "Start with Pro",
    bookCall: "Book a call",
    note: "Prices in USD. Switch to COP with the currency selector — converted at the current TRM exchange rate ({{trm}}).",
    ctaTitle: "Hire {{name}} today.",
    ctaDescription:
      "Start with the Starter plan. If it works, scale to Pro or Custom. If not, cancel at no cost.",
    startWith: "Start with ",
    viewOthers: "View other agents",
    breadcrumbHome: "Home",
    breadcrumbCatalog: "Catalog",
    breadcrumbAria: "Breadcrumb",
  },
  whatsapp: {
    message:
      "Hi, I'm interested in hiring {{name}} ({{plan}} plan) that I saw in the Ilaxus catalog. Can you help me get started?",
  },
};

export default en;