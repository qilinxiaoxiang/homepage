/* ===== CONTENT ===== */
const content = {
  en: {
    heroBadge: "Open to AI Solutions & Startup Roles",
    heroTitle: 'I build <span class="gradient-text">AI systems</span> that ship, scale, and deliver real impact.',
    heroDesc: "MS in AI Engineering at Carnegie Mellon. 8+ years turning complex backend challenges into scalable production systems across fintech, payments, and cloud infrastructure.",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Email Me",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" }
    ],
    stats: [
      { value: "8+", label: "Years in Software Engineering" },
      { value: "100M+", label: "Annual Orders at Scale" },
      { value: "3.93", label: "GPA at CMU (AI Engineering)" },
      { value: "200K", label: "DB Instances Managed" }
    ],
    aboutLabel: "About Me",
    aboutTitle: "From Biology to Backend to AI — Always Building.",
    aboutBody: "I started in bioengineering, pivoted through sales, then self-taught into software engineering. After 8 years building scalable backend systems — from fintech platforms to high-concurrency cloud services processing 100M+ orders — I'm now at CMU connecting my engineering depth with AI to build solutions that create measurable impact. I thrive at the intersection of technical execution and business value.",
    aboutHighlights: [
      { icon: "🧠", title: "AI + Engineering", desc: "LLM fine-tuning, RAG systems, and production AI pipelines" },
      { icon: "⚡", title: "Scale & Performance", desc: "100M+ order systems, JVM tuning, zero-downtime ops" },
      { icon: "🌏", title: "Global Experience", desc: "Citigroup, GCash (Philippines), CMU — cross-cultural teams" },
      { icon: "🚀", title: "Builder Mindset", desc: "Founded a tech company, shipped production systems solo" }
    ],
    expLabel: "Experience",
    expTitle: "Where I've Built Things",
    experiences: [
      {
        role: "Founder",
        company: "Shenyou AI Technology (Wuxi)",
        meta: "May 2025 — Present",
        bullets: [
          "Founded and operated a solo software practice delivering production cloud systems with AI-assisted engineering.",
          "Shipped a waste-management operations platform generating early commercial revenue (RMB 100K–200K).",
          "End-to-end ownership: requirements gathering, architecture, development, deployment, and client delivery."
        ]
      },
      {
        role: "Solution Architect",
        company: "Bang Dao Technology · GCash / Alipay+",
        meta: "Jun 2024 — Aug 2025",
        bullets: [
          "Drove solution architecture for GCash wearable payments on Huawei smart watches in Southeast Asia's largest e-wallet.",
          "Co-developed foundational solution path for GCash public transit QR payment rollout.",
          "Led cross-party alignment across product, engineering, compliance, and external stakeholders."
        ]
      },
      {
        role: "Tech Lead · Apps Dev Programmer Analyst",
        company: "Citigroup Services and Technology (China)",
        meta: "Sep 2022 — May 2024",
        bullets: [
          "De facto tech lead for CitiFTP China team within a global internal fund transfer pricing system.",
          "Pioneered ChatGPT API productivity tooling for code review and shell script validation across the team.",
          "Improved release reliability through structured requirement breakdown and cross-team agile execution."
        ]
      },
      {
        role: "Senior Application Development Specialist",
        company: "Bang Dao Technology",
        meta: "Aug 2019 — Sep 2022",
        bullets: [
          "Built high-concurrency cloud backend for visual-recognition vending network, scaling annual orders from 10M to 100M+.",
          "Achieved Full GC elimination through JVM tuning, reducing GC time by 90% in production.",
          "Designed custom observability framework that cut incident response time significantly."
        ]
      },
      {
        role: "Senior Software Engineer",
        company: "Isoftstone Technology (Alibaba Cloud)",
        meta: "Sep 2017 — Jul 2019",
        bullets: [
          "Developed disaster-tolerant inspection module handling ~200K online database instances at minute-level granularity.",
          "Built team from scratch — improved on-time delivery from 85% to 91.7% while reducing defect density.",
          "Containerized DR components, reducing private-cloud failover from 232 to 30 minutes."
        ]
      }
    ],
    projectLabel: "Projects",
    projectTitle: "Things I've Made",
    projects: [
      {
        title: "NextMove",
        body: "An AI-powered career intelligence tool that helps job seekers optimize their applications, identify transferable skills, and navigate career transitions with personalized guidance.",
        tag: "Personal Product",
        featured: true,
        link: "https://nextmove.work",
        linkText: "Visit NextMove →",
        techs: ["AI/LLM", "Career Tech", "Web App"]
      },
      {
        title: "EEG Cognitive & Behavioral Decoding",
        body: "Built large-scale EEG regression pipeline (3K+ subjects) with frozen pretrained encoder and latent-space regularization under heavy cross-subject noise.",
        tag: "CMU · NeurIPS EEG 2025",
        techs: ["PyTorch", "BCI", "Deep Learning"]
      },
      {
        title: "Structured Medical Answer Generation",
        body: "Fine-tuned small LLMs (Qwen, DeepSeek) with full and LoRA training, achieving high MECE compliance in structured medical QA generation.",
        tag: "CMU · NLP",
        techs: ["LLM Fine-tuning", "LoRA", "Medical AI"]
      },
      {
        title: "GCash Wearable & Transit Payments",
        body: "Architected wallet-side wearable payment and public transit QR capabilities for Southeast Asia's largest digital wallet ecosystem.",
        tag: "Fintech · Production",
        techs: ["Solution Architecture", "Payments", "IoT"]
      }
    ],
    skillsLabel: "Technical Skills",
    skillsTitle: "What I Work With",
    skillGroups: [
      { icon: "🤖", label: "AI / ML", tags: ["LLM", "RAG", "Fine-tuning", "PyTorch", "scikit-learn", "LangChain", "Prompt Engineering", "Agents"] },
      { icon: "💻", label: "Languages", tags: ["Python", "Java", "Shell", "SQL"] },
      { icon: "🗄️", label: "Data & Infrastructure", tags: ["MySQL", "Redis", "Elasticsearch", "Neo4j", "Hadoop", "Spark"] },
      { icon: "☁️", label: "Cloud & DevOps", tags: ["Docker", "Kubernetes", "AWS", "GCP", "Alibaba Cloud", "CI/CD"] },
      { icon: "🏗️", label: "Architecture", tags: ["Microservices", "High-Concurrency", "System Design", "Solution Architecture"] },
      { icon: "📋", label: "Management", tags: ["PMP Certified", "Agile / Scrum", "Cross-team Leadership"] }
    ],
    eduLabel: "Education",
    eduTitle: "Where I've Studied",
    education: [
      {
        icon: "🎓",
        school: "Carnegie Mellon University",
        degree: "MS in AI Engineering (Biomedical Track)",
        meta: "Expected Dec 2026 · Pittsburgh, PA",
        gpa: "GPA: 3.93 / 4.0",
        courses: "LLM Methods & Application · ML for Engineers · BCI · Systems & Toolchains for AI"
      },
      {
        icon: "🔬",
        school: "Jiangnan University",
        degree: "MS in Microbiology · BS in Biological Engineering",
        meta: "2008 — 2014 · Wuxi, China"
      }
    ],
    contactTitle: "Let's Build Something Together",
    contactBody: "I'm open to AI solutions, applied AI engineering, and startup-stage builder roles. If you're working on something interesting — let's talk."
  },
  zh: {
    heroBadge: "寻求 AI 解决方案 / 创业型岗位",
    heroTitle: '我专注于构建能<span class="gradient-text">落地交付</span>、可扩展、创造实际价值的 AI 系统。',
    heroDesc: "Carnegie Mellon University AI Engineering 硕士在读。8+ 年后端与架构交付经验，覆盖金融科技、支付与高并发云服务。",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "发邮件给我",
    navLinks: [
      { label: "关于", href: "#about" },
      { label: "经历", href: "#experience" },
      { label: "项目", href: "#projects" },
      { label: "技能", href: "#skills" },
      { label: "教育", href: "#education" }
    ],
    stats: [
      { value: "8+", label: "年软件与架构经验" },
      { value: "1亿+", label: "年订单量级系统维护" },
      { value: "3.93", label: "CMU GPA (AI Engineering)" },
      { value: "20万", label: "分钟级巡检数据库实例" }
    ],
    aboutLabel: "关于我",
    aboutTitle: "从生物到后端到 AI —— 一直在构建。",
    aboutBody: "从生物工程出发，经历销售后自学转入软件工程。8 年间从初级开发做到架构师，构建过从金融到支付到高并发云服务等多个亿级规模系统。现在在 CMU 将工程深度与 AI 能力结合，专注打造可衡量业务结果的 AI 应用方案。我擅长在技术执行与业务价值之间找到最优解。",
    aboutHighlights: [
      { icon: "🧠", title: "AI + 工程", desc: "LLM 微调、RAG 系统、生产级 AI 管线" },
      { icon: "⚡", title: "规模与性能", desc: "亿级订单系统、JVM 调优、零故障运维" },
      { icon: "🌏", title: "跨文化经验", desc: "花旗、GCash（菲律宾）、CMU — 多元团队协作" },
      { icon: "🚀", title: "Builder 思维", desc: "创立科技公司，独立交付生产系统" }
    ],
    expLabel: "工作经历",
    expTitle: "我在哪里做过事",
    experiences: [
      {
        role: "创始人",
        company: "神佑人工智能科技（无锡）",
        meta: "2025.05 — 至今",
        bullets: [
          "以个人主导形式创立并运营软件交付实践，以 AI 辅助工程方式交付生产级云系统。",
          "交付垃圾清运管理平台，实现早期商业收入（约十几到二十万元人民币）。",
          "全链路主导：需求对接、架构设计、开发实现、部署上线、客户交付。"
        ]
      },
      {
        role: "解决方案架构师",
        company: "邦道科技 · GCash / Alipay+",
        meta: "2024.06 — 2025.08",
        bullets: [
          "负责东南亚最大电子钱包 GCash 在华为手表上的可穿戴支付方案设计与落地。",
          "参与 GCash 公交二维码支付的底层方案共建与推进。",
          "完成产品、研发、合规与外部合作方之间的跨团队对齐。"
        ]
      },
      {
        role: "Tech Lead · 核心系统开发",
        company: "花旗金融信息服务（中国）",
        meta: "2022.09 — 2024.05",
        bullets: [
          "在 CitiFTP 全球系统中国团队中承担事实 Tech Lead 职责，主导关键交付与技术推进。",
          "率先引入基于 ChatGPT API 的研发效率工具，用于代码审查和脚本校验。",
          "通过结构化需求拆解和跨团队敏捷协作提升版本交付稳定性。"
        ]
      },
      {
        role: "高级开发专家",
        company: "邦道科技",
        meta: "2019.08 — 2022.09",
        bullets: [
          "主导视觉识别自动贩卖机高并发云服务开发，支撑年订单量从千万到过亿级跃升。",
          "通过 JVM 调优实现 Full GC 清零，GC 耗时下降 90%。",
          "自研日志与可观测性方案，显著缩短故障响应时间。"
        ]
      },
      {
        role: "资深软件工程师",
        company: "软通动力（阿里云项目）",
        meta: "2017.09 — 2019.07",
        bullets: [
          "开发分钟级巡检模块，支撑约 20 万线上数据库实例的自动化运维。",
          "从零搭建技术团队——按时交付率从 85% 提升到 91.7%，缺陷密度显著降低。",
          "容器化容灾组件，将私有云切换时间从 232 分钟降到 30 分钟。"
        ]
      }
    ],
    projectLabel: "项目精选",
    projectTitle: "我做过的东西",
    projects: [
      {
        title: "NextMove",
        body: "AI 驱动的求职智能工具，帮助求职者优化申请材料、发现可迁移技能，并通过个性化指导完成职业转型。",
        tag: "个人产品",
        featured: true,
        link: "https://nextmove.work",
        linkText: "访问 NextMove →",
        techs: ["AI/LLM", "求职科技", "Web 应用"]
      },
      {
        title: "EEG 认知与行为解码",
        body: "构建 3000+ 被试的大规模 EEG 回归管线，在跨被试高噪声条件下使用冻结预训练编码器与潜空间正则化保持竞争力效果。",
        tag: "CMU · NeurIPS EEG 2025",
        techs: ["PyTorch", "脑机接口", "深度学习"]
      },
      {
        title: "结构化医疗问答生成",
        body: "基于 Qwen/DeepSeek 完成全量微调与 LoRA 对比实验，显著提升结构化回答一致性（MECE）。",
        tag: "CMU · NLP",
        techs: ["LLM 微调", "LoRA", "医疗 AI"]
      },
      {
        title: "GCash 可穿戴支付与公交码",
        body: "在东南亚最大数字钱包生态中，架构设计钱包侧可穿戴支付与公交码能力的完整方案。",
        tag: "金融科技 · 生产",
        techs: ["方案架构", "支付", "IoT"]
      }
    ],
    skillsLabel: "技术能力",
    skillsTitle: "我使用的工具",
    skillGroups: [
      { icon: "🤖", label: "AI / ML", tags: ["LLM", "RAG", "微调", "PyTorch", "scikit-learn", "LangChain", "提示词工程", "Agents"] },
      { icon: "💻", label: "编程语言", tags: ["Python", "Java", "Shell", "SQL"] },
      { icon: "🗄️", label: "数据与基础设施", tags: ["MySQL", "Redis", "Elasticsearch", "Neo4j", "Hadoop", "Spark"] },
      { icon: "☁️", label: "云与 DevOps", tags: ["Docker", "Kubernetes", "AWS", "GCP", "阿里云", "CI/CD"] },
      { icon: "🏗️", label: "架构", tags: ["微服务", "高并发", "系统设计", "方案架构"] },
      { icon: "📋", label: "管理", tags: ["PMP 认证", "敏捷 / Scrum", "跨团队协同"] }
    ],
    eduLabel: "教育经历",
    eduTitle: "在哪里学习过",
    education: [
      {
        icon: "🎓",
        school: "Carnegie Mellon University",
        degree: "AI Engineering 硕士（生物医学方向）",
        meta: "预计 2026.12 毕业 · 匹兹堡",
        gpa: "GPA: 3.93 / 4.0",
        courses: "LLM Methods & Application · ML for Engineers · 脑机接口 · AI 工程系统与工具链"
      },
      {
        icon: "🔬",
        school: "江南大学",
        degree: "微生物学硕士 · 生物工程学士",
        meta: "2008 — 2014 · 无锡"
      }
    ],
    contactTitle: "一起做点有意思的事",
    contactBody: "我正在寻找 AI 解决方案、AI 应用落地和创业型 builder 岗位。如果你在做有趣的事情——聊聊？"
  }
};

/* ===== STATE ===== */
const params = new URLSearchParams(window.location.search);
const forcedLang = params.get("lang");
const langKey = "site-lang-v3";
let lang = forcedLang === "zh" || forcedLang === "en"
  ? forcedLang
  : localStorage.getItem(langKey) === "zh" ? "zh" : "en";

/* ===== RENDERERS ===== */
function renderNav(t) {
  const root = document.getElementById("nav-links");
  root.innerHTML = t.navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join("");
}

function renderStats(t) {
  const root = document.getElementById("stats-grid");
  root.innerHTML = t.stats.map(s => `
    <div class="stat-card reveal">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderAbout(t) {
  const root = document.getElementById("about-highlights");
  root.innerHTML = t.aboutHighlights.map(h => `
    <div class="highlight-card">
      <div class="highlight-icon">${h.icon}</div>
      <h4>${h.title}</h4>
      <p>${h.desc}</p>
    </div>
  `).join("");
}

function renderExperience(t) {
  const root = document.getElementById("exp-list");
  root.innerHTML = t.experiences.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-header">
        <div>
          <div class="timeline-role">${e.role}</div>
          <div class="timeline-company">${e.company}</div>
        </div>
        <div class="timeline-meta">${e.meta}</div>
      </div>
      <ul class="timeline-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderProjects(t) {
  const root = document.getElementById("project-list");
  root.innerHTML = t.projects.map(p => `
    <div class="project-card${p.featured ? ' featured' : ''} reveal">
      <div class="project-tag">${p.tag}</div>
      <h4>${p.title}</h4>
      <p>${p.body}</p>
      <div class="project-techs">
        ${p.techs.map(t => `<span class="project-tech">${t}</span>`).join("")}
      </div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">${p.linkText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>` : ''}
    </div>
  `).join("");
}

function renderSkills(t) {
  const root = document.getElementById("skills-grid");
  root.innerHTML = t.skillGroups.map(g => `
    <div class="skill-card reveal">
      <h4><span class="skill-icon">${g.icon}</span>${g.label}</h4>
      <div class="skill-tags">
        ${g.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderEducation(t) {
  const root = document.getElementById("edu-list");
  root.innerHTML = t.education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-icon">${e.icon}</div>
      <div class="edu-info">
        <h4>${e.school}</h4>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-meta">${e.meta}</div>
        ${e.gpa ? `<div class="edu-gpa">⭐ ${e.gpa}</div>` : ''}
        ${e.courses ? `<div class="edu-meta" style="margin-top:8px;font-style:italic">${e.courses}</div>` : ''}
      </div>
    </div>
  `).join("");
}

function render() {
  const t = content[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  // Nav
  renderNav(t);

  // Hero
  document.getElementById("hero-badge").textContent = t.heroBadge;
  document.getElementById("hero-title").innerHTML = t.heroTitle;
  document.getElementById("hero-desc").textContent = t.heroDesc;
  document.getElementById("cta-linkedin-text").textContent = t.ctaLinkedin;
  document.getElementById("cta-email-text").textContent = t.ctaEmail;

  // Stats
  renderStats(t);

  // About
  document.getElementById("about-label").textContent = t.aboutLabel;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-body").textContent = t.aboutBody;
  renderAbout(t);

  // Experience
  document.getElementById("exp-label").textContent = t.expLabel;
  document.getElementById("exp-title").textContent = t.expTitle;
  renderExperience(t);

  // Projects
  document.getElementById("project-label").textContent = t.projectLabel;
  document.getElementById("project-title").textContent = t.projectTitle;
  renderProjects(t);

  // Skills
  document.getElementById("skills-label").textContent = t.skillsLabel;
  document.getElementById("skills-title").textContent = t.skillsTitle;
  renderSkills(t);

  // Education
  document.getElementById("edu-label").textContent = t.eduLabel;
  document.getElementById("edu-title").textContent = t.eduTitle;
  renderEducation(t);

  // Contact
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-body").textContent = t.contactBody;

  // Language toggle
  document.getElementById("lang-toggle").checked = lang === "zh";

  // Re-apply scroll reveals
  requestAnimationFrame(initReveal);
}

/* ===== LANGUAGE TOGGLE ===== */
document.getElementById("lang-toggle").addEventListener("change", (e) => {
  lang = e.target.checked ? "zh" : "en";
  localStorage.setItem(langKey, lang);
  render();
});

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ===== NAV SCROLL EFFECT ===== */
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const nav = document.getElementById('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* ===== SMOOTH NAV CLICKS ===== */
document.addEventListener('click', (e) => {
  const link = e.target.closest('.nav-links a');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

/* ===== INIT ===== */
render();
