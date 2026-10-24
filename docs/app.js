/* ===== CONTENT ===== */
const content = {
  en: {
    heroName: "Shawn (Zheng) Xiang",
    heroTitle: '<span class="gradient-text">AI × Robotics engineer</span>. I hand-build legged robots and measure how reinforcement-learning policies transfer to them.',
    heroDesc: "MS in AI Engineering at Carnegie Mellon, Dec 2026, on eight years of production software. Current robot: a 15-DoF MicroDuck biped built from parts at the CMU RoboClub, printed body, servo chain and controller firmware, onboard computer and sensors, two power routes. Its walking policies are Pollen Robotics'; the as-built simulation, the reward-audited fine-tuning, the sim-to-real measurements and the camera-guided beak pickup now in training are mine.",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Copy Email",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Writing", href: "#writing" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" }
    ],
    stats: [
      { value: "15", label: "DoF on the biped I built from parts and run" },
      { value: "8+", label: "Years in Production Software & Solution Architecture" },
      { value: "100M+", label: "Annual Orders at Scale" },
      { value: "3.96", label: "GPA at CMU (AI Engineering)" }
    ],
    aboutLabel: "About Me",
    aboutTitle: "Two things I can show: a complete robot built by hand, and learning that is measured on it.",
    aboutBody: "Eight years of production systems and solution delivery across China, the Philippines, Singapore, India and the US taught me to ship software that other people depend on. At CMU I put that base under a real robot. The MicroDuck biped at the CMU RoboClub is mine end to end: 34 printed parts of my own on the community part set, 15 DYNAMIXEL XL330 in one chain on an OpenRB-150 running my dual-host firmware, a Radxa Cubie A7Z head with IMU, camera, speaker and a five-pad touch sense the official design lacks, and two power routes. It walks on Pollen Robotics' policies. On top of it I built the as-built MuJoCo model with its acceptance suite, a fine-tuning pipeline whose reward audit caught a policy learning to stand still, and the sim-to-real measurements (IMU latency, servo deadband, read drops, trunk jitter) that decide what gets trained next. The current training target is the camera-guided beak pickup: find an object on the floor, walk to it, crouch, pick it up.",
    aboutHighlights: [
      { icon: "🤖", title: "Whole-Robot Build", desc: "Form, actuation, onboard intelligence and power supply, built and wired by hand: 15 DoF, a 50 Hz policy loop on the head computer, two power routes" },
      { icon: "🧪", title: "RL Behind Gates", desc: "Reward audit and tracking guard on every fine-tune; the first run learned to stand still while total reward tripled, and the per-term audit explained why" },
      { icon: "📏", title: "Sim-to-Real, Measured", desc: "IMU latency about 15 ms, servo deadband 0.05 rad, 4 % read drops, trunk jitter 4 to 6 times the simulation, all fed back into the as-built model" },
      { icon: "⚡", title: "Production Engineering", desc: "100M+ order systems, JVM tuning, zero-downtime ops" }
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
          "End-to-end ownership: client discovery, architecture, implementation, deployment, and adoption."
        ]
      },
      {
        role: "Solution Architect",
        company: "Bang Dao Technology · GCash / Alipay+",
        meta: "Jun 2024 — Aug 2025",
        bullets: [
          "Embedded with Southeast Asia's largest digital wallet (GCash) — designed wearable payment capability on Huawei watches from business problem to production launch.",
          "Co-architected the foundational solution path for GCash public transit QR payment rollout.",
          "Worked embedded with the client before AI was the primary toolkit: deep customer immersion, business-process understanding, and local customization across product, engineering, compliance, and external stakeholders."
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
        title: "CMU's first hand-built MicroDuck",
        body: "A 15-DoF bipedal duck after Pollen Robotics' open-source MicroDuck, built from parts at the CMU RoboClub: 34 printed parts of my own, a servo chain on an OpenRB-150 with my dual-host firmware, a Radxa Cubie A7Z head with IMU, camera, speaker and five copper touch pads the official design does not have, and two power routes. It walks at 0.25 m/s on Pollen's policies with my heading hold and graded hold. The as-built simulation, the reward-audited fine-tuning and the sim-to-real measurements are the training base for the camera-guided beak pickup, now in training.",
        tag: "Robotics · Built 2026 · pickup policy in training",
        featured: true,
        link: "./microduck/",
        internal: true,
        linkText: "Project page →",
        techs: ["DYNAMIXEL XL330", "Radxa Cubie A7Z", "MuJoCo", "RL Fine-tuning", "Touch Sensing"]
      },
      {
        title: "MicroDuck Training Fork",
        body: "Pollen Robotics' training repository plus our cmu/ layer: an as-built MuJoCo model of this robot (measured masses, a measured 7.87° forward gap), a seven-case acceptance suite that takes rail voltage, IMU rate and servo read drops from the robot's measured state, and a fine-tuning pipeline with a reward-audit launch gate and a tracking-error guard, added after a first run learned to stand still while total reward tripled.",
        tag: "Open Source · Robot Learning",
        link: "https://github.com/qilinxiaoxiang/microduck_rl",
        linkText: "View repository →",
        techs: ["MuJoCo", "PPO", "Reward Audit", "Modal L4"]
      },
      {
        title: "Agentic Life OS",
        body: "A local-first proof of a new software contract: people decide, agents operate through typed actions, deterministic code protects time and money state, and the interface is built for review. Includes evidence-backed budget-change proposals with explicit approval.",
        tag: "Open Source · AI-Native Systems",
        link: "https://github.com/qilinxiaoxiang/agentic-life-os",
        linkText: "View repository →",
        techs: ["Agent Operations", "FastAPI", "SQLite", "Human Approval"]
      },
      {
        title: "Agentic Flashcards",
        body: "A versioned learning system with adaptive scheduling, append-only review history, an offline mutation queue, conflict handling, and a native SwiftUI client. Agents maintain content; the learner retains collection and conflict decisions.",
        tag: "Open Source · Native iOS + Server",
        link: "https://github.com/qilinxiaoxiang/agentic-flashcards",
        linkText: "View repository →",
        techs: ["SwiftUI", "Python", "SQLite/WAL", "Offline Sync"]
      },
      {
        title: "Agentic Job Hunting",
        body: "A synthetic hiring-material pipeline for discovery, deduplication, fit screening, source-constrained drafting, and two independent reviews. The public system deliberately stops at a reviewed local material pack.",
        tag: "Open Source · Evidence-Constrained AI",
        link: "https://github.com/qilinxiaoxiang/agentic-job-hunting",
        linkText: "View repository →",
        techs: ["Evidence Graph", "Independent Review", "SQLite", "Privacy Gates"]
      },
      {
        title: "Agent Skills and Cards",
        body: "A compact operating kit for reusable skills and reviewer roles, with bounded parallel execution, named resource locks, retries, structured failure history, and local full-text memory.",
        tag: "Open Source · Agent Infrastructure",
        link: "https://github.com/qilinxiaoxiang/agent-skills-and-cards",
        linkText: "View repository →",
        techs: ["Bounded Concurrency", "Resource Locks", "Retry Records", "Local Search"]
      },
      {
        title: "VoxClinBench",
        body: "Cross-lingual, cross-disease clinical voice biomarker benchmark — in submission at NeurIPS 2026 (Datasets & Benchmarks track). 23 scored binary tasks across 4 languages and 5 corpora, with Holm-Bonferroni-corrected cross-language transfer testing. Shipped pip-installable evaluation harness, subject-ID manifests, and Croissant datasheet.",
        tag: "CMU · Voice Biomarker Benchmark",
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
    writingLabel: "Writing",
    writingTitle: "Field Notes",
    writingIndexText: "View all field notes",
    writing: [
      {
        title: "Software Is Switching Operators",
        body: "Humans were the assumed operators of software. Agents change the contract: people direct, agents operate, code enforces, and UIs adapt.",
        meta: "July 2026 · Agent-Operated Software",
        link: "./articles/agentic-life-os/",
        linkText: "Read the field note →"
      },
      {
        title: "What Lean in Hospitals Could Take From Forward-Deployed Engineering",
        body: "Landing Lean inside a hospital is the same job as forward-deployed engineering — show up, map the real work, change it in small steps, make it stick. The younger field lands more often. So the question runs backwards: here is what healthcare can take back from FDE.",
        meta: "May 2026 · FDE × Patient Safety",
        link: "./articles/hospital-lean-fde-lens/",
        linkText: "Read the field note →"
      },
      {
        title: "I Spent a Night Unpacking Palantir and FDE: The Moat Is Not Where You Think It Is",
        body: "Palantir's moat is not Ontology, and it is not the software. It's FDE as a five-piece organizational machine that sells software deep, expensive, and long. AI is eroding it unevenly — and OpenAI just spent $4B to skip the line.",
        meta: "May 2026 · Business Model",
        link: "./articles/palantir-fde-deep-dive/",
        linkText: "Read the field note →"
      },
      {
        title: "What Twelve AI Coding Harnesses Miss for Forward-Deployed Work",
        body: "I read the source of twelve popular AI coding harnesses before installing any. None is built for FDE client engagement. The minimal six-layer pipeline to build instead.",
        meta: "May 2026 · AI Tooling",
        link: "./articles/twelve-harness-fde-lens/",
        linkText: "Read the field note →"
      },
      {
        title: "Forward Deployed Engineering: A Practical Field Guide",
        body: "A practical field guide for finding AI-native workflows, earning trust from frontline teams, and turning field observation into deployable systems.",
        meta: "May 2026 · AI Deployment",
        link: "./articles/fde-field-method/",
        linkText: "Read the field note →"
      }
    ],
    skillsLabel: "Skills",
    skillsTitle: "What I Bring",
    skillGroups: [
      { icon: "🤖", label: "Robotics", tags: ["Sim-to-Real", "MuJoCo", "RL Fine-tuning (PPO)", "Reward Audits", "DYNAMIXEL Servos", "IMU / Touch / Camera Bring-up", "Embedded Linux (Radxa)", "3D Printing"] },
      { icon: "🧠", label: "AI / ML", tags: ["PyTorch", "Reinforcement Learning", "Fine-tuning", "ONNX Deployment", "LLM", "Agents"] },
      { icon: "🎯", label: "Delivery", tags: ["Customer Discovery", "Solution Architecture", "Client-side Delivery", "Observability", "PMP Certified", "Agile / Scrum"] },
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
        gpa: "GPA: 3.96 / 4.0",
        courses: "Fall '25: LLM Methods & Application · ML for Engineers · BCI · Systems & Toolchains for AI<br>Spring '26: Intro to Deep Learning · Projects in Biomedical AI<br>Summer '26: General Robotics (audit) · Fall '26: Introduction to Robot Learning (16-831), project: Learning Camera-Guided Beak Pickup with MicroDuck"
      },
      {
        icon: "🔬",
        school: "Jiangnan University",
        degree: "MS in Microbiology · BS in Biological Engineering",
        meta: "2007 — 2014 · Wuxi, China"
      }
    ],
    contactTitle: "Let's Put Learning on a Real Machine",
    contactBody: "I'm looking for robotics engineering roles: robot learning, sim-to-real, deployment, evaluation, and the software around real machines. Teams where a policy has to survive contact with hardware are the ones I want to join."
  },
  zh: {
    heroName: "项峥",
    heroTitle: '<span class="gradient-text">AI × 机器人工程师</span>。亲手造足式机器人，并实测强化学习策略迁移到实机的效果。',
    heroDesc: "卡内基梅隆大学 AI 工程硕士，2026 年 12 月毕业，底子是 8 年生产级软件。当前的机器人：一台在 CMU RoboClub 从零件装起来的 15 自由度 MicroDuck 双足，打印机身、舵机链和控制器固件、机载计算板和传感器、两路供电。它的行走策略是 Pollen Robotics 的；按实物建的仿真、带奖励审计的微调、sim-to-real（仿真到实机）实测，以及正在训练的相机引导喙部拾取，是我的。",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "复制邮箱",
    navLinks: [
      { label: "关于", href: "#about" },
      { label: "经历", href: "#experience" },
      { label: "项目", href: "#projects" },
      { label: "文章", href: "#writing" },
      { label: "技能", href: "#skills" },
      { label: "教育", href: "#education" }
    ],
    stats: [
      { value: "15", label: "亲手从零件装起并运行的双足机器人自由度" },
      { value: "8+", label: "年生产级软件与方案架构经验" },
      { value: "1亿+", label: "年订单量级系统维护" },
      { value: "3.96", label: "CMU GPA (AI Engineering)" }
    ],
    aboutLabel: "关于我",
    aboutTitle: "能拿出来的两件事：一台亲手造的完整机器人，和在它身上实测过的学习。",
    aboutBody: "8 年横跨中国、菲律宾、新加坡、印度和美国的生产系统与方案交付，教会我做别人真正依赖的软件。在 CMU，我把这个底子放到了一台真实机器人下面。RoboClub 这台 MicroDuck 双足从头到尾是我的：社区打印件之上 34 个自己设计的零件，15 个 DYNAMIXEL XL330 一条链接在跑我双主机固件的 OpenRB-150 上，Radxa Cubie A7Z 头部带 IMU（惯性测量单元）、相机、喇叭和官方设计没有的五片触摸感知，以及两路供电。它跑的是 Pollen Robotics 的行走策略。在此之上我建了按实物建模的 MuJoCo（物理仿真器）模型和验收套件、一条带奖励审计的微调流水线（它抓住了一个学会站着不动的策略），以及决定下一步训什么的 sim-to-real 实测（IMU 延迟、舵机死区、丢读率、躯干抖动）。当前训练目标是相机引导的喙部拾取：在地上找到物体、走过去、蹲下、用嘴捡起。",
    aboutHighlights: [
      { icon: "🤖", title: "整机手造", desc: "外形、动力、机载智能和供电全部亲手造好接好：15 自由度，头部计算板跑 50 Hz 策略循环，两路供电" },
      { icon: "🧪", title: "带门禁的强化学习", desc: "每次微调都过奖励审计和跟踪守卫；第一次训练学会了站着不动而总奖励翻三倍，逐项审计说清了原因" },
      { icon: "📏", title: "实测过的 sim-to-real", desc: "IMU 延迟约 15 ms，舵机死区 0.05 rad，丢读率 4 %，躯干抖动是仿真的 4 到 6 倍，全部喂回按实物建的模型" },
      { icon: "⚡", title: "生产级工程", desc: "亿级订单系统、JVM 调优、零故障运维" }
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
          "全链路主导：客户 discovery、架构、实现、部署、采纳落地。"
        ]
      },
      {
        role: "解决方案架构师",
        company: "邦道科技 · GCash / Alipay+",
        meta: "2024.06 — 2025.08",
        bullets: [
          "驻场东南亚最大电子钱包 GCash——从业务问题到生产上线，主导华为手表可穿戴支付方案设计与落地。",
          "参与 GCash 公交二维码支付的底层方案共建与推进。",
          "在 AI 成为主工具前就驻场客户现场：深入客户、理解业务流程、做本地化 customization，跨产品/研发/合规/外部方对齐。"
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
        title: "CMU 第一只手工打造的 MicroDuck",
        body: "一台按 Pollen Robotics 开源 MicroDuck 做的 15 自由度双足，在 CMU RoboClub 从零件装起：34 个自己设计的打印件、接在跑我双主机固件的 OpenRB-150 上的舵机链、带 IMU（惯性测量单元）、相机、喇叭和官方设计没有的五片铜箔触摸垫的 Radxa Cubie A7Z 头部，以及两路供电。它以 0.25 m/s 跑 Pollen 的策略，配我的航向保持和分级抱持。按实物建的仿真、带奖励审计的微调和 sim-to-real（仿真到实机）实测，是正在训练的相机引导喙部拾取的训练底座。",
        tag: "机器人 · 2026 年手造 · 拾取策略训练中",
        featured: true,
        link: "./microduck/",
        internal: true,
        linkText: "项目页面 →",
        techs: ["DYNAMIXEL XL330", "Radxa Cubie A7Z", "MuJoCo", "强化学习微调", "触摸感知"]
      },
      {
        title: "MicroDuck 训练分支",
        body: "Pollen Robotics 的训练仓库加上我们的 cmu/ 层：按实物建模的 MuJoCo 模型（实测质量、实测 7.87° 前倾间隙）、七用例验收套件（供电电压、IMU 频率、舵机读取丢失率都取自机器人的实测状态），以及带奖励审计启动门禁和跟踪误差守卫的微调管线——起因是第一次微调学会了站着不动，总奖励却翻了三倍。",
        tag: "开源 · 机器人学习",
        link: "https://github.com/qilinxiaoxiang/microduck_rl",
        linkText: "查看仓库 →",
        techs: ["MuJoCo", "PPO", "奖励审计", "Modal L4"]
      },
      {
        title: "Agentic Life OS",
        body: "本地优先的 AI 原生系统：人负责决策，智能体通过明确接口执行，确定性代码保护时间与资金状态，界面负责复核；资源调整先形成带证据和替代方案的提案，再由人批准。",
        tag: "开源 · AI 原生系统",
        link: "https://github.com/qilinxiaoxiang/agentic-life-os",
        linkText: "查看仓库 →",
        techs: ["智能体操作", "FastAPI", "SQLite", "人工批准"]
      },
      {
        title: "Agentic Flashcards",
        body: "带版本控制的学习系统：自适应排期、只追加的复习记录、离线操作队列、冲突处理和原生 SwiftUI 客户端。智能体维护内容，学习者决定卡片归属与冲突取舍。",
        tag: "开源 · 原生 iOS + 服务端",
        link: "https://github.com/qilinxiaoxiang/agentic-flashcards",
        linkText: "查看仓库 →",
        techs: ["SwiftUI", "Python", "SQLite/WAL", "离线同步"]
      },
      {
        title: "Agentic Job Hunting",
        body: "全合成的求职材料管线：岗位发现、去重、匹配筛选、证据约束写作和两路独立审查。公开版明确止于本地审阅完成的材料包。",
        tag: "开源 · 证据约束 AI",
        link: "https://github.com/qilinxiaoxiang/agentic-job-hunting",
        linkText: "查看仓库 →",
        techs: ["证据图", "独立审查", "SQLite", "隐私门禁"]
      },
      {
        title: "Agent Skills and Cards",
        body: "可复用技能和审查角色的小型运行工具箱，包含有限并行、具名资源锁、重试、结构化失败历史与本地全文记忆。",
        tag: "开源 · 智能体基础设施",
        link: "https://github.com/qilinxiaoxiang/agent-skills-and-cards",
        linkText: "查看仓库 →",
        techs: ["有限并行", "资源锁", "失败记录", "本地检索"]
      },
      {
        title: "VoxClinBench",
        body: "跨语言、跨疾病的临床语音生物标志物评测基准——投稿 NeurIPS 2026（Datasets & Benchmarks 赛道，匿名评审中）。23 项 binary 任务 × 4 种语言 × 5 个语料，Holm-Bonferroni 校正的跨语言迁移测试。交付 pip 可装的测评 harness、subject-ID manifest 与 Croissant datasheet。",
        tag: "CMU · 语音生物标志物 Benchmark",
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
    writingLabel: "文章",
    writingTitle: "Field Notes",
    writingIndexText: "查看全部文章",
    writing: [
      {
        title: "Software Is Switching Operators",
        body: "软件正在更换操作者：人从别人预定义界面的操作员，变成自己定义系统的指挥官；Agent 负责操作，code 负责约束，界面负责适配。英文长文。",
        meta: "2026.07 · Agent-Operated Software",
        link: "./articles/agentic-life-os/",
        linkText: "阅读文章 →"
      },
      {
        title: "What Lean in Hospitals Could Take From Forward-Deployed Engineering",
        body: "把 Lean 落地进医院，和 FDE 是同一份活：到现场、画真实流程、小步改、让它留住。更年轻的 FDE 反而落得更稳——所以反过来问：医院 Lean 能从 FDE 偷什么。英文长文。",
        meta: "2026.05 · FDE × 患者安全",
        link: "./articles/hospital-lean-fde-lens/",
        linkText: "阅读文章 →"
      },
      {
        title: "I Spent a Night Unpacking Palantir and FDE: The Moat Is Not Where You Think It Is",
        body: "Palantir 的护城河不是 Ontology，也不是软件本身。是 FDE 这套把软件卖深 / 卖贵 / 卖久的 5 件套组织机制。AI 在分层侵蚀它——OpenAI 砸 $4B 走捷径。英文长文。",
        meta: "2026.05 · 商业模式",
        link: "./articles/palantir-fde-deep-dive/",
        linkText: "阅读文章 →"
      },
      {
        title: "What Twelve AI Coding Harnesses Miss for Forward-Deployed Work",
        body: "通读 12 个 AI coding harness 源码，没有一个是为 FDE 客户场设计的。该偷的 5 个模式 + 6 层最小 pipeline。英文长文。",
        meta: "2026.05 · AI 工具",
        link: "./articles/twelve-harness-fde-lens/",
        linkText: "阅读文章 →"
      },
      {
        title: "Forward Deployed Engineering: A Practical Field Guide",
        body: "一篇英文实操手册：如何识别 AI-native workflow、如何做现场观察、如何从 shadow prototype 走向可部署系统。",
        meta: "2026.05 · AI 落地",
        link: "./articles/fde-field-method/",
        linkText: "阅读文章 →"
      }
    ],
    skillsLabel: "技能",
    skillsTitle: "我能带来什么",
    skillGroups: [
      { icon: "🤖", label: "机器人", tags: ["仿真到真机 (Sim-to-Real)", "MuJoCo", "强化学习微调 (PPO)", "奖励审计", "DYNAMIXEL 舵机", "IMU / 触摸 / 摄像头调通", "嵌入式 Linux (Radxa)", "3D 打印"] },
      { icon: "🧠", label: "AI / 机器学习", tags: ["PyTorch", "强化学习", "模型微调", "ONNX 部署", "大语言模型", "智能体"] },
      { icon: "🎯", label: "交付", tags: ["客户发现", "方案架构", "客户侧交付", "可观测性", "PMP 认证", "敏捷 / Scrum"] },
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
        gpa: "GPA: 3.96 / 4.0",
        courses: "2025 秋：大语言模型方法与应用 · 面向工程师的机器学习 · 脑机接口 · AI 工程系统与工具链<br>2026 春：深度学习导论 · 生物医学 AI 项目<br>2026 夏：通用机器人学（旁听） · 2026 秋：机器人学习导论（16-831），课程项目：MicroDuck 摄像头引导的鸭嘴拾取学习"
      },
      {
        icon: "🔬",
        school: "江南大学",
        degree: "微生物学硕士 · 生物工程学士",
        meta: "2007 — 2014 · 无锡"
      }
    ],
    contactTitle: "把学习放到真实机器上",
    contactBody: "我在找机器人工程岗位：机器人学习、仿真到真机、部署、评测，以及围绕真实机器的软件。策略必须经得起硬件考验的团队，是我想加入的团队。"
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
      ${p.link ? `<a class="project-link" href="${p.link}"${p.internal ? '' : ' target="_blank" rel="noreferrer"'}>${p.linkText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>` : ''}
    </div>
  `).join("");
  setupCardTilt();
}

function renderWriting(t) {
  const root = document.getElementById("writing-list");
  const featuredWriting = t.writing.slice(0, 3);
  root.innerHTML = featuredWriting.map(w => `
    <a class="writing-card reveal" href="${w.link}">
      <div class="writing-meta">${w.meta}</div>
      <h4>${w.title}</h4>
      <p>${w.body}</p>
      <span class="writing-link">${w.linkText}</span>
    </a>
  `).join("") + `
    <a class="writing-index-link reveal" href="./articles/">${t.writingIndexText}</a>
  `;
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

  // Writing
  document.getElementById("writing-label").textContent = t.writingLabel;
  document.getElementById("writing-title").textContent = t.writingTitle;
  renderWriting(t);

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
