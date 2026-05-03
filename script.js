let lastRecommended = [];
let lastUserInput = null;
let currentUILanguage = "en";

const translations = {
  en: {
    subtitle: "Tell us what you want to learn. We help you find the course that actually fits you.",
    topicLabel: "What do you want to learn?",
    topicPlaceholder: "What topic do you want to study?",
    levelLabel: "Your level",
    goalLabel: "Your goal",
    budgetLabel: "Budget",
    languageLabel: "Language",
    anyLevel: "Any level",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    anyGoal: "Any goal",
    school: "School support",
    project: "Build projects",
    job: "Career / job",
    anyBudget: "Any budget",
    free: "Free",
    paid: "Paid",
    anyLanguage: "Any language",
    english: "English",
    korean: "Korean",
    ctaText: "Find the course that fits your way of learning.",
    searchButton: "Compass",
    loadingTitle: "Finding your best courses...",
    loadingText: "Please wait while Compass matches your learning needs.",
    resultsTitle: "Recommended courses",
    backButton: "Compass again",
    topicAlert: "Please enter a topic.",
    noResult: "Sorry, no results match your requirements.",
    viewCourse: "View course",
    bestMatch: "🔥 Best Match",
    goodMatch: "👍 Good Match",
    possibleMatch: "🙂 Possible Match"
  },

  ko: {
    subtitle: "배우고 싶은 주제를 입력하면, 당신에게 맞는 강의를 찾아드릴게요.",
    topicLabel: "무엇을 배우고 싶나요?",
    topicPlaceholder: "예: 자바, 파이썬, 웹개발",
    levelLabel: "현재 수준",
    goalLabel: "학습 목표",
    budgetLabel: "예산",
    languageLabel: "강의 언어",
    anyLevel: "상관없음",
    beginner: "입문",
    intermediate: "중급",
    advanced: "고급",
    anyGoal: "상관없음",
    school: "학교 공부",
    project: "프로젝트 만들기",
    job: "취업 / 커리어",
    anyBudget: "상관없음",
    free: "무료",
    paid: "유료",
    anyLanguage: "상관없음",
    english: "영어",
    korean: "한국어",
    ctaText: "당신의 학습 방식에 맞는 강의를 찾아보세요.",
    searchButton: "강의 추천받기",
    loadingTitle: "가장 잘 맞는 강의를 찾는 중...",
    loadingText: "Compass가 학습 조건에 맞는 강의를 찾고 있습니다.",
    resultsTitle: "추천 강의",
    backButton: "다시 찾기",
    topicAlert: "검색할 주제를 입력해주세요.",
    noResult: "조건에 맞는 강의를 찾지 못했습니다.",
    viewCourse: "강의 보러가기",
    bestMatch: "🔥 최고의 추천",
    goodMatch: "👍 좋은 추천",
    possibleMatch: "🙂 가능한 추천"
  }
};

const topicMap = {
  "자바": "java",
  "java": "java",

  "파이썬": "python",
  "python": "python",

  "자바스크립트": "javascript",
  "javascript": "javascript",
  "js": "javascript",

  "웹": "web",
  "웹개발": "web",
  "web": "web",

  "html": "html",
  "css": "html",

  "인공지능": "ai",
  "ai": "ai",
  "머신러닝": "ai",
  "machine learning": "ai",

  "자료구조": "data structure",
  "data structure": "data structure",
  "알고리즘": "data structure",

  "백엔드": "backend",
  "backend": "backend",

  "프론트엔드": "frontend",
  "frontend": "frontend",

  "데이터": "data",
  "data": "data",
  "sql": "data"
};

const courses = [
  {
    title: "Java Programming Masterclass",
    topic: "java",
    level: "beginner",
    goal: "project",
    priceType: "paid",
    price: "$19.99",
    duration: "long",
    hasProject: true,
    language: "English",
    platform: "Udemy",
    rating: 4.7,
    url: "https://www.udemy.com/",
    features: "Comprehensive Java course with hands-on projects",
    featuresKo: "실습 프로젝트 중심의 종합 Java 강의"
  },
  {
    title: "Python for Everybody",
    topic: "python",
    level: "beginner",
    goal: "school",
    priceType: "free",
    price: "Free",
    duration: "long",
    hasProject: false,
    language: "English",
    platform: "Coursera",
    rating: 4.8,
    url: "https://www.coursera.org/",
    features: "Beginner-friendly and widely recommended",
    featuresKo: "초보자를 위한 입문용 파이썬 강의"
  },
  {
    title: "Full Web Development Bootcamp",
    topic: "web",
    level: "beginner",
    goal: "job",
    priceType: "paid",
    price: "$15.99",
    duration: "long",
    hasProject: true,
    language: "English",
    platform: "Udemy",
    rating: 4.7,
    url: "https://www.udemy.com/",
    features: "Covers full stack with real-world projects",
    featuresKo: "실무 프로젝트 중심의 풀스택 웹 개발 강의"
  },
  {
    title: "HTML & CSS Crash Course",
    topic: "html",
    level: "beginner",
    goal: "project",
    priceType: "free",
    price: "Free",
    duration: "short",
    hasProject: true,
    language: "English",
    platform: "YouTube",
    rating: 4.6,
    url: "https://www.youtube.com/",
    features: "Quick start for building web pages",
    featuresKo: "웹페이지 제작을 빠르게 시작할 수 있는 기초 강의"
  },
  {
    title: "JavaScript Essentials",
    topic: "javascript",
    level: "beginner",
    goal: "project",
    priceType: "free",
    price: "Free",
    duration: "medium",
    hasProject: true,
    language: "English",
    platform: "freeCodeCamp",
    rating: 4.8,
    url: "https://www.freecodecamp.org/",
    features: "Interactive learning with coding exercises",
    featuresKo: "코딩 연습과 함께 배우는 JavaScript 인터랙티브 강의"
  },
  {
    title: "Data Structures and Algorithms",
    topic: "data structure",
    level: "intermediate",
    goal: "job",
    priceType: "paid",
    price: "$29.99",
    duration: "long",
    hasProject: false,
    language: "English",
    platform: "Udemy",
    rating: 4.5,
    url: "https://www.udemy.com/",
    features: "Important for coding interviews",
    featuresKo: "코딩 테스트 대비에 중요한 자료구조와 알고리즘 강의"
  },
  {
    title: "Machine Learning Basics",
    topic: "ai",
    level: "intermediate",
    goal: "job",
    priceType: "free",
    price: "Free",
    duration: "medium",
    hasProject: true,
    language: "English",
    platform: "Coursera",
    rating: 4.7,
    url: "https://www.coursera.org/",
    features: "Intro to ML concepts and models",
    featuresKo: "머신러닝 개념과 모델을 배우는 입문 강의"
  },
  {
    title: "Spring Boot for Beginners",
    topic: "backend",
    level: "intermediate",
    goal: "project",
    priceType: "paid",
    price: "$19.99",
    duration: "medium",
    hasProject: true,
    language: "English",
    platform: "Udemy",
    rating: 4.6,
    url: "https://www.udemy.com/",
    features: "Backend development with Java framework",
    featuresKo: "Java 기반 백엔드 개발을 배우는 실습 강의"
  },
  {
    title: "Korean Python Course",
    topic: "python",
    level: "beginner",
    goal: "school",
    priceType: "free",
    price: "Free",
    duration: "medium",
    hasProject: false,
    language: "Korean",
    platform: "Inflearn",
    rating: 4.5,
    url: "https://www.inflearn.com/",
    features: "Beginner Python course in Korean",
    featuresKo: "한국어로 배우는 초보자용 파이썬 강의"
  },
  {
    title: "React Frontend Development",
    topic: "frontend",
    level: "intermediate",
    goal: "project",
    priceType: "paid",
    price: "$24.99",
    duration: "long",
    hasProject: true,
    language: "English",
    platform: "Udemy",
    rating: 4.6,
    url: "https://www.udemy.com/",
    features: "Build modern UI with React",
    featuresKo: "React로 현대적인 UI를 만드는 프론트엔드 강의"
  },
  {
    title: "SQL for Data Analysis",
    topic: "data",
    level: "beginner",
    goal: "job",
    priceType: "free",
    price: "Free",
    duration: "short",
    hasProject: false,
    language: "English",
    platform: "Coursera",
    rating: 4.7,
    url: "https://www.coursera.org/",
    features: "Learn SQL basics quickly",
    featuresKo: "SQL을 활용한 데이터 분석 입문 강의"
  },
  {
    title: "Advanced Java Backend",
    topic: "java",
    level: "advanced",
    goal: "job",
    priceType: "paid",
    price: "$34.99",
    duration: "long",
    hasProject: true,
    language: "English",
    platform: "Udemy",
    rating: 4.6,
    url: "https://www.udemy.com/",
    features: "Advanced backend concepts",
    featuresKo: "고급 Java 백엔드 개발 개념을 배우는 강의"
  },
  {
  title: "Java Intermediate Projects",
  topic: "java",
  level: "intermediate",
  goal: "project",
  priceType: "paid",
  price: "$17.99",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "Udemy",
  rating: 4.5,
  url: "https://www.udemy.com/",
  features: "Build real Java applications",
  featuresKo: "실제 Java 애플리케이션을 만들어보는 프로젝트 강의"
},
{
  title: "Python Data Science Bootcamp",
  topic: "python",
  level: "intermediate",
  goal: "job",
  priceType: "paid",
  price: "$21.99",
  duration: "long",
  hasProject: true,
  language: "English",
  platform: "Udemy",
  rating: 4.7,
  url: "https://www.udemy.com/",
  features: "Data analysis with Python and projects",
  featuresKo: "데이터 분석 프로젝트 중심의 Python 강의"
},
{
  title: "JavaScript Advanced Concepts",
  topic: "javascript",
  level: "advanced",
  goal: "job",
  priceType: "free",
  price: "Free",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "freeCodeCamp",
  rating: 4.8,
  url: "https://www.freecodecamp.org/",
  features: "Deep dive into JS core concepts",
  featuresKo: "JavaScript 핵심 개념을 깊게 이해하는 강의"
},
{
  title: "React Complete Guide",
  topic: "frontend",
  level: "beginner",
  goal: "project",
  priceType: "paid",
  price: "$19.99",
  duration: "long",
  hasProject: true,
  language: "English",
  platform: "Udemy",
  rating: 4.7,
  url: "https://www.udemy.com/",
  features: "Start from basics to advanced React",
  featuresKo: "React를 처음부터 고급까지 배우는 종합 강의"
},
{
  title: "Node.js Backend Development",
  topic: "backend",
  level: "beginner",
  goal: "job",
  priceType: "free",
  price: "Free",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "YouTube",
  rating: 4.6,
  url: "https://www.youtube.com/",
  features: "Build backend APIs using Node.js",
  featuresKo: "Node.js로 API를 만드는 백엔드 입문 강의"
},
{
  title: "HTML CSS Portfolio Project",
  topic: "html",
  level: "intermediate",
  goal: "project",
  priceType: "free",
  price: "Free",
  duration: "short",
  hasProject: true,
  language: "English",
  platform: "freeCodeCamp",
  rating: 4.6,
  url: "https://www.freecodecamp.org/",
  features: "Create a personal portfolio website",
  featuresKo: "포트폴리오 웹사이트를 만드는 실습 강의"
},
{
  title: "Intro to Artificial Intelligence",
  topic: "ai",
  level: "beginner",
  goal: "school",
  priceType: "free",
  price: "Free",
  duration: "medium",
  hasProject: false,
  language: "English",
  platform: "edX",
  rating: 4.7,
  url: "https://www.edx.org/",
  features: "Basic AI concepts explained simply",
  featuresKo: "AI 개념을 쉽게 이해할 수 있는 입문 강의"
},
{
  title: "Deep Learning Specialization",
  topic: "ai",
  level: "advanced",
  goal: "job",
  priceType: "paid",
  price: "$39.99",
  duration: "long",
  hasProject: true,
  language: "English",
  platform: "Coursera",
  rating: 4.9,
  url: "https://www.coursera.org/",
  features: "Neural networks and deep learning",
  featuresKo: "딥러닝과 신경망을 배우는 고급 AI 강의"
},
{
  title: "SQL Advanced Queries",
  topic: "data",
  level: "intermediate",
  goal: "job",
  priceType: "paid",
  price: "$14.99",
  duration: "short",
  hasProject: false,
  language: "English",
  platform: "Udemy",
  rating: 4.5,
  url: "https://www.udemy.com/",
  features: "Master complex SQL queries",
  featuresKo: "복잡한 SQL 쿼리를 다루는 심화 강의"
},
{
  title: "Data Analysis with Python",
  topic: "data",
  level: "beginner",
  goal: "project",
  priceType: "free",
  price: "Free",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "Coursera",
  rating: 4.7,
  url: "https://www.coursera.org/",
  features: "Hands-on data analysis projects",
  featuresKo: "Python으로 데이터 분석 프로젝트를 수행하는 강의"
},
{
  title: "Spring Boot REST API",
  topic: "backend",
  level: "intermediate",
  goal: "job",
  priceType: "paid",
  price: "$22.99",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "Udemy",
  rating: 4.6,
  url: "https://www.udemy.com/",
  features: "Build scalable REST APIs",
  featuresKo: "확장 가능한 REST API를 만드는 백엔드 강의"
},
{
  title: "Frontend UI Design Basics",
  topic: "frontend",
  level: "beginner",
  goal: "project",
  priceType: "free",
  price: "Free",
  duration: "short",
  hasProject: false,
  language: "English",
  platform: "YouTube",
  rating: 4.5,
  url: "https://www.youtube.com/",
  features: "UI/UX fundamentals",
  featuresKo: "UI/UX 디자인 기초를 배우는 입문 강의"
},
{
  title: "Java for Interview Preparation",
  topic: "java",
  level: "intermediate",
  goal: "job",
  priceType: "paid",
  price: "$18.99",
  duration: "medium",
  hasProject: false,
  language: "English",
  platform: "Udemy",
  rating: 4.6,
  url: "https://www.udemy.com/",
  features: "Prepare for coding interviews",
  featuresKo: "Java 코딩 테스트 대비 강의"
},
{
  title: "Python Automation Scripts",
  topic: "python",
  level: "intermediate",
  goal: "project",
  priceType: "free",
  price: "Free",
  duration: "short",
  hasProject: true,
  language: "English",
  platform: "YouTube",
  rating: 4.6,
  url: "https://www.youtube.com/",
  features: "Automate tasks using Python",
  featuresKo: "Python으로 반복 작업을 자동화하는 실습 강의"
},
{
  title: "Modern JavaScript Projects",
  topic: "javascript",
  level: "intermediate",
  goal: "project",
  priceType: "paid",
  price: "$16.99",
  duration: "medium",
  hasProject: true,
  language: "English",
  platform: "Udemy",
  rating: 4.7,
  url: "https://www.udemy.com/",
  features: "Build real-world JS apps",
  featuresKo: "실전 JavaScript 프로젝트를 만드는 강의"
},
{
  title: "Web Development Career Path",
  topic: "web",
  level: "beginner",
  goal: "job",
  priceType: "free",
  price: "Free",
  duration: "long",
  hasProject: true,
  language: "English",
  platform: "freeCodeCamp",
  rating: 4.8,
  url: "https://www.freecodecamp.org/",
  features: "Full roadmap for web developers",
  featuresKo: "웹 개발자로 성장하기 위한 전체 로드맵 강의"
},
{
  title: "Backend System Design Basics",
  topic: "backend",
  level: "advanced",
  goal: "job",
  priceType: "paid",
  price: "$27.99",
  duration: "long",
  hasProject: false,
  language: "English",
  platform: "Udemy",
  rating: 4.5,
  url: "https://www.udemy.com/",
  features: "Learn scalable system design",
  featuresKo: "대규모 시스템 설계를 배우는 백엔드 심화 강의"
},
{
  title: "AI for Beginners (Korean)",
  topic: "ai",
  level: "beginner",
  goal: "school",
  priceType: "free",
  price: "Free",
  duration: "short",
  hasProject: false,
  language: "Korean",
  platform: "Inflearn",
  rating: 4.6,
  url: "https://www.inflearn.com/",
  features: "AI basics explained in Korean",
  featuresKo: "한국어로 배우는 AI 기초 강의"
}
];

function searchCourse() {
  const rawTopic = document.getElementById("topic").value.toLowerCase().trim();
  const topic = topicMap[rawTopic] || rawTopic;
  const level = document.getElementById("level").value;
  const goal = document.getElementById("goal").value;
  const priceType = document.getElementById("budget").value;
  const language = document.getElementById("language").value;

  const userInput = { level, goal, priceType, language };

  const searchScreen = document.getElementById("search-screen");
  const loadingScreen = document.getElementById("loading-screen");
  const resultsScreen = document.getElementById("results-screen");

  if (topic === "") {
    alert(translations[currentUILanguage].topicAlert);
    return;
  }

  searchScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    const recommended = courses
  .filter(course => course.topic.toLowerCase() === topic)
  .map(course => {
    let score = 4;

    if (level === "any" || course.level === level) score += 2;
    if (goal === "any" || course.goal === goal) score += 2;
    if (priceType === "any" || course.priceType === priceType) score += 1;
    if (language === "any" || course.language === language) score += 1;

    return {
      ...course,
      score: score
    };
  })
  .sort((a, b) => b.score - a.score);

    lastRecommended = recommended;
    lastUserInput = userInput;

    loadingScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    renderResults(recommended, userInput);

  }, 2000);
}

function goBack() {
  document.getElementById("results-screen").classList.add("hidden");
  document.getElementById("loading-screen").classList.add("hidden");
  document.getElementById("search-screen").classList.remove("hidden");
}

function changeUILanguage() {
  currentUILanguage = document.getElementById("ui-language").value;
  const t = translations[currentUILanguage];

  document.getElementById("title-text").textContent = "Compass";
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("topic-label").textContent = t.topicLabel;
  document.getElementById("topic").placeholder = t.topicPlaceholder;

  document.getElementById("level-label").textContent = t.levelLabel;
  document.getElementById("goal-label").textContent = t.goalLabel;
  document.getElementById("budget-label").textContent = t.budgetLabel;
  document.getElementById("language-label").textContent = t.languageLabel;

  document.getElementById("level-any").textContent = t.anyLevel;
  document.getElementById("level-beginner").textContent = t.beginner;
  document.getElementById("level-intermediate").textContent = t.intermediate;
  document.getElementById("level-advanced").textContent = t.advanced;

  document.getElementById("goal-any").textContent = t.anyGoal;
  document.getElementById("goal-school").textContent = t.school;
  document.getElementById("goal-project").textContent = t.project;
  document.getElementById("goal-job").textContent = t.job;

  document.getElementById("budget-any").textContent = t.anyBudget;
  document.getElementById("budget-free").textContent = t.free;
  document.getElementById("budget-paid").textContent = t.paid;

  document.getElementById("language-any").textContent = t.anyLanguage;
  document.getElementById("language-english").textContent = t.english;
  document.getElementById("language-korean").textContent = t.korean;

  document.getElementById("cta-text").textContent = t.ctaText;
  document.getElementById("search-button").textContent = t.searchButton;
  document.getElementById("loading-title").textContent = t.loadingTitle;
  document.getElementById("loading-text").textContent = t.loadingText;
  document.getElementById("results-title").textContent = t.resultsTitle;
  document.getElementById("back-button").textContent = t.backButton;

  if (!document.getElementById("results-screen").classList.contains("hidden")) {
  renderResults(lastRecommended, lastUserInput);
  }
}

function renderResults(recommended, userInput) {
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (recommended.length === 0) {
    result.innerHTML = `<p class='message'>${translations[currentUILanguage].noResult}</p>`;
    return;
  }

  renderCards(recommended.slice(0, 1), userInput, result, 0, true);

     if (recommended.length > 1) {
    result.innerHTML += `
      <button id="show-more-btn" onclick="showMore()" aria-label="Show more courses">
        ↓
      </button>
      <div id="more-results"></div>
    `;
  }
}

function showMore() {
  const moreResults = document.getElementById("more-results");
  const showMoreBtn = document.getElementById("show-more-btn");

  showMoreBtn.remove();

  renderCards(
    lastRecommended.slice(1),
    lastUserInput,
    moreResults,
    1,
    false
  );
}

function renderCards(list, userInput, container, startIndex = 0, isBest = false) {
   list. forEach((course, index) => {
    const cardClass = isBest && index === 0 ? "course-card best-card" : "course-card";


    container.innerHTML += `
      <div class="${cardClass}" style="animation-delay: ${(startIndex + index) * 0.6}s">
        <div class="card-top">
          <span class="match-badge">${getMatchLabel(course.score)}</span>
          <span class="match-score">${course.score}/10</span>
        </div>

        <h3>${course.title}</h3>

        <div class="course-meta">
          <span>⭐ ${course.rating}</span>
          <span>${getLevelText(course.level)}</span>
          <span>${getPriceText(course.price)}</span>
          <span>${course.platform}</span>
        </div>

        <p class="course-feature">
          ${currentUILanguage === "ko" && course.featuresKo 
            ? course.featuresKo 
            : course.features}
        </p>

        <p class="course-reason">
          ${generateReason(course, userInput)}
        </p>

        <a href="${course.url}" target="_blank">${translations[currentUILanguage].viewCourse}</a>
      </div>
    `;
  });
}

function getMatchLabel(score) {
  const t = translations[currentUILanguage];

  if (score >= 8) return t.bestMatch;
  if (score >= 6) return t.goodMatch;
  return t.possibleMatch;
}

function getLevelText(level) {
  if (currentUILanguage === "ko") {
    if (level === "beginner") return "입문";
    if (level === "intermediate") return "중급";
    if (level === "advanced") return "고급";
  }
  return level;
}

function getPriceText(price) {
  if (currentUILanguage === "ko") {
    if (price === "Free") return "무료";
  }
  return price;
}

function generateReason(course, userInput) {
  let reasons = [];

  if (currentUILanguage === "ko") {
    if (course.level === userInput.level) {
      reasons.push("현재 수준에 맞고");
    }

    if (course.goal === userInput.goal) {
      reasons.push("학습 목표에 적합하며");
    }

    if (course.language === userInput.language) {
      reasons.push("선호하는 언어로 제공되고");
    }

    if (course.priceType === userInput.priceType) {
      reasons.push("예산 조건에도 맞으며");
    }

    if (course.hasProject) {
      reasons.push("실습 프로젝트가 포함되어 있고");
    }

    if (course.duration === "short") {
      reasons.push("짧은 시간 안에 수강 가능합니다");
    }

    if (reasons.length === 0) {
      return "이 강의는 관심 주제와 관련된 추천 강의입니다.";
    }

    return "이 강의는 " + reasons.join(" ") + ".";
  }


  if (course.level === userInput.level) {
    reasons.push("matches your level");
  }

  if (course.goal === userInput.goal) {
    reasons.push("fits your goal");
  }

  if (course.language === userInput.language) {
    reasons.push("available in your preferred language");
  }

  if (course.priceType === userInput.priceType) {
    reasons.push("fits your budget");
  }

  if (course.hasProject) {
    reasons.push("includes hands-on projects");
  }

  if (course.duration === "short") {
    reasons.push("quick to complete");
  }

  if (reasons.length === 0) {
    return "This course is still a relevant option based on your interest.";
  }

  return "This course " + reasons.join(", ") + ".";
}