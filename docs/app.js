/* ===== CONTENT ===== */
const content = {
  en: {
    heroName: "Shawn (Zheng) Xiang",
    heroTitle: '<span class="gradient-text">Forward-Deployed AI Engineer</span>. I turn business problems into shipped AI solutions, open to any industry.',
    heroDesc: "MS in AI Engineering — Biomedical Engineering at Carnegie Mellon. 8+ years across software, solution architecture, and enterprise delivery — spanning China, the Philippines, Singapore, India, and the US.",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Copy Email",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" }
    ],
    stats: [
      { value: "8+", label: "Years in Software & Solution Architecture" },
      { value: "100M+", label: "Annual Orders at Scale" },
      { value: "3.93", label: "GPA at CMU (AI Engineering)" },
      { value: "5", label: "Countries Delivered Across" }
    ],
    aboutLabel: "About Me",
    aboutTitle: "Engineering depth + customer instincts + AI toolkit — stacked, not pivoted.",
    aboutBody: "I don't read my background as career pivots. Biology → sales → software → solution architecture → AI engineering is an inventory: domain fluency, customer conversations, production engineering, cross-cultural delivery. Forward-Deployed AI Engineering sits exactly where these layers compound — translate a business problem into an AI solution, architect it, ship it, own adoption. Currently at CMU to add frontier AI depth to that stack.",
    aboutHighlights: [
      { icon: "🎯", title: "Forward-Deployed Pattern", desc: "Embed with customers — diagnose, architect, ship, own adoption" },
      { icon: "🌐", title: "Cross-Cultural Delivery", desc: "Citigroup (China × US × India × Singapore), GCash (Philippines), CMU (US)" },
      { icon: "⚡", title: "Production Engineering", desc: "100M+ order systems, JVM tuning, zero-downtime ops" },
      { icon: "🚀", title: "Operator Mindset", desc: "Founded a solo AI consulting practice; shipped live revenue before CMU" }
    ],
    expLabel: "Experience",
    expTitle: "Where I've Built Things",
    experiences: [
      {
        role: "Founder",
        company: "Shenyou AI Technology (Wuxi)",
        meta: "May 2025 — Aug 2025",
        bullets: [
          "Founded a solo AI consulting and solution-delivery practice; delivered a production cloud system with AI-assisted engineering before CMU enrollment.",
          "Shipped a waste-management operations platform for an enterprise client, generating early commercial revenue (RMB 100K–200K).",
          "End-to-end ownership: client discovery, architecture, implementation, deployment, and adoption — the full Forward-Deployed loop."
        ]
      },
      {
        role: "Solution Architect (proto-FDE)",
        company: "Bang Dao Technology · GCash / Alipay+",
        meta: "Jun 2024 — Aug 2025",
        bullets: [
          "Embedded with Southeast Asia's largest digital wallet (GCash) — designed wearable payment capability on Huawei watches from business problem to production launch.",
          "Co-architected the foundational solution path for GCash public transit QR payment rollout.",
          "Lived the forward-deployed pattern before AI was the primary toolkit: deep customer immersion, business-process understanding, and local customization across product, engineering, compliance, and external stakeholders."
        ]
      },
      {
        role: "Tech Lead — CitiFTP China Pod",
        company: "Citigroup Services and Technology (China)",
        meta: "Sep 2022 — May 2024",
        bullets: [
          "De facto Tech Lead for the only China-based pod within CitiFTP, a global internal fund transfer pricing system — interlocked daily with pods in India, Singapore, and North America.",
          "Early AI adoption inside a bank: built an internal ChatGPT-wrapper tool with compliance approval and a whitelisted egress IP, unlocking team-wide AI assistance for code review and shell validation when direct access wasn't permitted.",
          "Won Round B (~¥15,000) at Citi China's internal innovation contest with an AI-generated demo re-architecting the AutoSys job-scheduling platform around a Terraform-style end-state model.",
          "Advanced to Round B of Citi's internal Tank Battle AI coding competition — one of the earliest vibe-coding workflows demonstrated inside the bank."
        ]
      },
      {
        role: "Senior Application Development Specialist",
        company: "Bang Dao Technology",
        meta: "Aug 2019 — Sep 2022",
        bullets: [
          "Built high-concurrency cloud backend for a visual-recognition vending network, scaling annual orders from 10M to 100M+.",
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
        title: "VoxClinBench",
        body: "Cross-lingual, cross-disease clinical voice biomarker benchmark — in submission at NeurIPS 2026 (Datasets & Benchmarks track). 23 scored binary tasks across 4 languages and 5 corpora, with Holm-Bonferroni-corrected cross-language transfer testing. Shipped pip-installable evaluation harness, subject-ID manifests, and Croissant datasheet.",
        tag: "CMU · Voice Biomarker Benchmark",
        featured: true,
        techs: ["Voice Biomarker", "Benchmark Design", "Clinical AI", "Bootstrap + DeLong"]
      },
      {
        title: "NextMove",
        body: "An AI decision engine that surfaces the one task you should do right now. Aggregates from Canvas LMS, Google Calendar, voice memos, and photos of whiteboards or syllabi; ranks by urgency and context; swipe to defer or complete. iOS (DoNextMove on the App Store) and web.",
        tag: "Personal Product · iOS + Web",
        link: "https://nextmove.work",
        linkText: "Visit NextMove →",
        techs: ["AI/LLM", "iOS App", "Productivity", "Voice + Photo Input"]
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
    skillsLabel: "Skills",
    skillsTitle: "What I Bring",
    skillGroups: [
      { icon: "🎯", label: "Forward-Deployed & Delivery", tags: ["Customer Discovery", "Business Problem Framing", "Cross-Domain Translation", "Solution Architecture", "Client-side Delivery", "Adoption Ownership", "PMP Certified", "Agile / Scrum", "Cross-team Leadership"] },
      { icon: "🤖", label: "AI / ML", tags: ["LLM", "RAG", "Fine-tuning", "PyTorch", "scikit-learn", "LangChain", "Prompt Engineering", "Agents"] },
      { icon: "💻", label: "Languages", tags: ["Python", "Java", "Shell", "SQL"] },
      { icon: "🗄️", label: "Data & Infrastructure", tags: ["MySQL", "Redis", "Elasticsearch", "Neo4j", "Hadoop", "Spark"] },
      { icon: "☁️", label: "Cloud & DevOps", tags: ["Docker", "Kubernetes", "AWS", "GCP", "Alibaba Cloud", "CI/CD"] },
      { icon: "🏗️", label: "Systems & Scale", tags: ["Microservices", "High-Concurrency", "System Design", "Production Ops"] }
    ],
    eduLabel: "Education",
    eduTitle: "Where I've Studied",
    education: [
      {
        icon: "🎓",
        school: "Carnegie Mellon University",
        degree: "MS in AI Engineering — Biomedical Engineering",
        meta: "Expected Dec 2026 · Pittsburgh, PA",
        gpa: "GPA: 3.93 / 4.0",
        courses: "Fall '25: LLM Methods & Application · ML for Engineers · BCI · Systems & Toolchains for AI<br>Spring '26: AI Cofounder: A Startup Builder's Guide · Intro to Deep Learning · Projects in Biomedical AI"
      },
      {
        icon: "🔬",
        school: "Jiangnan University",
        degree: "MS in Microbiology · BS in Biological Engineering",
        meta: "2007 — 2014 · Wuxi, China"
      }
    ],
    contactTitle: "Let's Build Something Together",
    contactBody: "I'm looking for Forward-Deployed AI Engineer, AI Solutions Engineer, and applied AI builder roles. Industry-agnostic — I prioritize problem caliber over vertical. If you have a hard AI problem in a real business, let's talk."
  },
  zh: {
    heroName: "项峥",
    heroTitle: '<span class="gradient-text">前置交付 AI 工程师</span>。把业务问题转化为能落地的 AI 方案，行业不设限。',
    heroDesc: "卡内基梅隆大学 AI 工程 —— 生物医学工程 硕士在读。8+ 年跨软件、方案架构与企业交付，覆盖中国、菲律宾、新加坡、印度与美国。",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "复制邮箱",
    navLinks: [
      { label: "关于", href: "#about" },
      { label: "经历", href: "#experience" },
      { label: "项目", href: "#projects" },
      { label: "技能", href: "#skills" },
      { label: "教育", href: "#education" }
    ],
    stats: [
      { value: "8+", label: "年软件与方案架构经验" },
      { value: "1亿+", label: "年订单量级系统维护" },
      { value: "3.93", label: "CMU GPA (AI Engineering)" },
      { value: "5", label: "交付覆盖国家数" }
    ],
    aboutLabel: "关于我",
    aboutTitle: "工程深度 × 客户直觉 × AI 工具箱 —— 是叠加，不是跳槽。",
    aboutBody: "我不把自己的背景读作职业跳转。生物 → 销售 → 软件 → 方案架构 → AI 工程，是一层层的库存：领域熟悉度、客户对话能力、生产级工程、跨文化交付。Forward-Deployed AI Engineering（前置交付 AI 工程师）正好是这些能力的交汇点——把业务问题翻译成 AI 方案、架构它、落地它、盯采纳。现在在 CMU 给这套库存再加一层前沿 AI 深度。",
    aboutHighlights: [
      { icon: "🎯", title: "前置交付模式", desc: "驻场客户——诊断、架构、落地、跟进采纳" },
      { icon: "🌐", title: "跨文化交付", desc: "花旗（中国×美国×印度×新加坡）、GCash（菲律宾）、CMU（美国）" },
      { icon: "⚡", title: "生产级工程", desc: "亿级订单系统、JVM 调优、零故障运维" },
      { icon: "🚀", title: "Operator 思维", desc: "独立创立 AI 咨询实践，赴美求学前已跑通商业收入" }
    ],
    expLabel: "工作经历",
    expTitle: "我在哪里做过事",
    experiences: [
      {
        role: "创始人",
        company: "神佑人工智能科技（无锡）",
        meta: "2025.05 — 2025.08",
        bullets: [
          "独立创立 AI 咨询与方案交付实践，以 AI 辅助工程方式交付生产级云系统，赴 CMU 前完成首个企业客户交付。",
          "为企业客户交付垃圾清运管理平台，实现早期商业收入（约 10–20 万元人民币）。",
          "全链路主导：客户 discovery、架构、实现、部署、采纳落地——完整的 Forward-Deployed 闭环。"
        ]
      },
      {
        role: "解决方案架构师（proto-FDE）",
        company: "邦道科技 · GCash / Alipay+",
        meta: "2024.06 — 2025.08",
        bullets: [
          "驻场东南亚最大电子钱包 GCash——从业务问题到生产上线，主导华为手表可穿戴支付方案设计与落地。",
          "参与 GCash 公交二维码支付的底层方案共建与推进。",
          "在 AI 成为主工具前就跑通了 forward-deployed 模式：深入客户、理解业务流程、做本地化 customization，跨产品/研发/合规/外部方对齐。"
        ]
      },
      {
        role: "Tech Lead · CitiFTP 中国小队",
        company: "花旗金融信息服务（中国）",
        meta: "2022.09 — 2024.05",
        bullets: [
          "在 CitiFTP 全球内部资金划转定价系统中，作为唯一中国小队的事实 Tech Lead——与印度、新加坡、北美的兄弟小队日常交织协作。",
          "银行内 AI 早期 adoption：自建 ChatGPT-wrapper 工具并完成合规审批 + 白名单出口 IP，让团队在无法直连 ChatGPT 的情况下获得代码审查与 shell 脚本校验的 AI 辅助。",
          "凭 AI 生成的 demo 赢下花旗中国内部创新大赛 B 轮（约 15,000 元奖金）——用 Terraform 终态思想重构 AutoSys 任务调度平台。",
          "参加花旗内部坦克大战 AI 编程比赛进入 B 轮——全行最早的 vibe coding 工作流之一。"
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
        title: "VoxClinBench",
        body: "跨语言、跨疾病的临床语音生物标志物评测基准——投稿 NeurIPS 2026（Datasets & Benchmarks 赛道，匿名评审中）。23 项 binary 任务 × 4 种语言 × 5 个语料，Holm-Bonferroni 校正的跨语言迁移测试。交付 pip 可装的测评 harness、subject-ID manifest 与 Croissant datasheet。",
        tag: "CMU · 语音生物标志物 Benchmark",
        featured: true,
        techs: ["语音生物标志物", "Benchmark 设计", "临床 AI", "Bootstrap + DeLong"]
      },
      {
        title: "NextMove",
        body: "AI 决策引擎，告诉你「现在最该做的那一件事」。聚合 Canvas LMS、Google 日历、语音备忘、白板与课纲照片，按紧迫度与上下文排序；左滑延后、右滑完成。iOS 端（App Store 上叫 DoNextMove）+ Web 应用。",
        tag: "个人产品 · iOS + Web",
        link: "https://nextmove.work",
        linkText: "访问 NextMove →",
        techs: ["AI/LLM", "iOS 应用", "效率工具", "语音 + 拍照输入"]
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
    skillsLabel: "技能",
    skillsTitle: "我能带来什么",
    skillGroups: [
      { icon: "🎯", label: "Forward-Deployed 与交付", tags: ["客户 Discovery", "业务问题定义", "跨领域翻译", "方案架构", "客户侧交付", "采纳落地", "PMP 认证", "敏捷 / Scrum", "跨团队协同"] },
      { icon: "🤖", label: "AI / ML", tags: ["LLM", "RAG", "微调", "PyTorch", "scikit-learn", "LangChain", "提示词工程", "Agents"] },
      { icon: "💻", label: "编程语言", tags: ["Python", "Java", "Shell", "SQL"] },
      { icon: "🗄️", label: "数据与基础设施", tags: ["MySQL", "Redis", "Elasticsearch", "Neo4j", "Hadoop", "Spark"] },
      { icon: "☁️", label: "云与 DevOps", tags: ["Docker", "Kubernetes", "AWS", "GCP", "阿里云", "CI/CD"] },
      { icon: "🏗️", label: "系统与规模", tags: ["微服务", "高并发", "系统设计", "生产级运维"] }
    ],
    eduLabel: "教育经历",
    eduTitle: "在哪里学习过",
    education: [
      {
        icon: "🎓",
        school: "卡内基梅隆大学",
        degree: "AI 工程 —— 生物医学工程 硕士",
        meta: "预计 2026.12 毕业 · 匹兹堡",
        gpa: "GPA: 3.93 / 4.0",
        courses: "Fall '25：LLM 方法与应用 · 面向工程师的机器学习 · 脑机接口 · AI 工程系统与工具链<br>Spring '26：AI 联创指南 · 深度学习导论 · 生物医学 AI 项目"
      },
      {
        icon: "🔬",
        school: "江南大学",
        degree: "微生物学硕士 · 生物工程学士",
        meta: "2007 — 2014 · 无锡"
      }
    ],
    contactTitle: "一起做点有意思的事",
    contactBody: "我在找前置交付 AI 工程师、AI 解决方案工程师、以及应用型 AI 开发者岗位。行业不设限——问题质量比领域更重要。如果你有真实业务里的硬 AI 问题，聊聊？"
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
  root.innerHTML = t.stats.map(s => {
    const match = s.value.match(/^([\d.]+)(.*)/);
    if (match && parseFloat(match[1]) > 1) {
      const numStr = match[1];
      const suffix = match[2] || '';
      const initial = numStr.includes('.') ? '0.00' : '0';
      return `
    <div class="stat-card reveal">
      <div class="stat-value" data-target="${numStr}" data-suffix="${suffix}">${initial}${suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
    }
    return `
    <div class="stat-card reveal">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join("");
  initCountUp();
}

function initCountUp() {
  const els = document.querySelectorAll('.stat-value[data-target]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  els.forEach(el => obs.observe(el));
}

function animateCount(el) {
  const targetStr = el.dataset.target;
  const target = parseFloat(targetStr);
  const suffix = el.dataset.suffix || '';
  const isDecimal = targetStr.includes('.');
  const decimals = isDecimal ? targetStr.split('.')[1].length : 0;
  const duration = 1400;
  const startTime = performance.now();
  function tick(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = target * eased;
    el.textContent = (isDecimal ? value.toFixed(decimals) : Math.round(value)) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
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
  setupCardTilt();
}

function setupCardTilt() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotX = (0.5 - y) * 5;
      const rotY = (x - 0.5) * 5;
      card.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
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
  document.getElementById("hero-name").textContent = t.heroName;
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

/* ===== COPY EMAIL ===== */
function copyEmail(btn) {
  navigator.clipboard.writeText("shawn.xiang2@gmail.com").then(() => {
    const span = btn.querySelector("span");
    const original = span.textContent;
    span.textContent = "Copied!";
    setTimeout(() => { span.textContent = original; }, 2000);
  });
}

/* ===== INIT ===== */
render();
