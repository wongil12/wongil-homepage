export type CareerDetail = readonly [title: string, meta: string, body: string];

export interface Career {
  period: string;
  company: string;
  role: string;
  summary: string;
  tags: readonly string[];
  details: readonly CareerDetail[];
}

export const skills = [
  { name: "React · Next.js", level: "Core", note: "서비스 구조 설계부터 운영까지" },
  { name: "TypeScript", level: "Core", note: "strict 기반의 예측 가능한 코드" },
  { name: "Design System", level: "Lead", note: "토큰, 패키징, Storybook, 배포" },
  { name: "Frontend Architecture", level: "Lead", note: "확장성과 팀 생산성을 함께 설계" },
  { name: "Swift · iOS", level: "Product", note: "TADA Driver / Rider 앱 운영" },
  { name: "Node.js · Spring", level: "Bridge", note: "API부터 AWS 배포까지 연결" },
] as const;

export const careers: readonly Career[] = [
  {
    period: "2024.10 — NOW",
    company: "SeedTo",
    role: "Development PL · Frontend",
    summary:
      "SaaS Admin을 기획부터 구축하고, 디자인 시스템과 개발 프로세스로 조직의 생산성을 높이고 있습니다.",
    tags: ["React", "Next.js", "TypeScript", "Spring", "AWS"],
    details: [
      [
        "Admin 시스템 초기 기획 및 개발",
        "2024.10 — 2024.11 · 2명 · 기여도 90%",
        "고객이 데이터를 직접 관리하는 Admin 구조와 프로토타입을 구축했습니다. Basic 단일 상품을 Basic·Standard·Premium 3단계로 확장하고 매출 성장에 기여했습니다.",
      ],
      [
        "Admin 시스템 1차 고도화",
        "2024.12 — 2025.02 · FE 기여도 100%",
        "Gateway·Auth·Platform 서버로 역할을 분리하고 platformId 기반 프론트엔드 구조를 설계했습니다. 플랫폼별 Route와 Navigation이 자동 구성되도록 확장성을 확보했습니다.",
      ],
      [
        "Ubittz Design System",
        "2025.07 — 2026.04 · 4명 · 기여도 60%",
        "모노레포, ESM/CJS 빌드와 npm 배포를 구축하고 3계층 디자인 토큰과 UI 컴포넌트 21종을 구현했습니다. Figma MCP 연동으로 평균 4일의 퍼블리싱을 1일로 단축했습니다.",
      ],
      [
        "Slack Scrum Bot",
        "2026.07 · 1명 · 기여도 100%",
        "Node.js, Slack SDK, DynamoDB로 일일 업무 공유를 자동화하고 기존 스프레드시트 관리 리소스를 제거했습니다.",
      ],
      [
        "에이전시 프로젝트",
        "2024.10 — 2026.07 · 총 34건",
        "20개 이상 도메인에서 Frontend 29건, Full-stack 4건, Backend 1건을 담당했습니다. Basic 7건, Standard 21건, Premium 3건, 본개발 3건 중 32건을 납기 내 완료했습니다.",
      ],
    ],
  },
  {
    period: "2022.04 — 2024.07",
    company: "Easi6",
    role: "Frontend & iOS Developer",
    summary:
      "글로벌 Ride Hailing 서비스의 Admin, Corp, Web과 iOS 앱을 개발하고 국가 확장에 강한 구조로 개선했습니다.",
    tags: ["React", "Redux Saga", "Swift", "RxSwift", "Google Maps"],
    details: [
      [
        "TADA Driver · Rider iOS",
        "2023.03 — 2024.07",
        "Swift, RxSwift, RxCocoa, RxFlow, FlexLayout, Tuist, Fastlane으로 글로벌 Ride Hailing 앱을 개발·운영했습니다.",
      ],
      [
        "Singpass 도입",
        "2024.04 — 2024.07 · 기여도 40%",
        "싱가포르 전자 ID 인증 플로우를 구축하고 인증·인가 구조를 리팩토링해 다른 인증 플랫폼 추가에도 대응하도록 개선했습니다.",
      ],
      [
        "TADA Admin · Corp · Homepage",
        "2022.04 — 2024.07",
        "React, TypeScript, Redux Saga, Bootstrap, Google Maps 기반 웹 서비스를 개발하고 유지보수했습니다.",
      ],
      [
        "Driver Application 리팩토링",
        "2023.07 — 2023.10 · 기여도 100%",
        "국가별 조건문 구조를 문서 타입과 국가별 컴포넌트로 분리해 신규 국가·문서 추가 시 변경 범위를 줄였습니다.",
      ],
      [
        "Help Center 데이터화",
        "2024.02 — 2024.03 · 기여도 50%",
        "하드코딩 FAQ를 다국어 데이터 구조로 전환하고 각국 관리자가 Admin에서 직접 관리하도록 시스템화했습니다.",
      ],
    ],
  },
  {
    period: "2018.04 — 2022.04",
    company: "Atman Partners",
    role: "Frontend Developer",
    summary:
      "SK DWP 프론트엔드 팀 리더를 비롯해 여러 기업의 RPA 플랫폼과 웹 서비스를 구축·운영했습니다.",
    tags: ["React", "Redux", "RPA", "Java", "MySQL"],
    details: [
      [
        "SK DWP 구축",
        "2021.07 — 2022.04 · FE 팀 리더",
        "React, Ant Design, Material UI, Redux 기반 Digital Workforce Platform의 프론트엔드 개발을 리딩했습니다.",
      ],
      [
        "SK가스 RPA · 웹",
        "2020.06 — 2021.06",
        "SK가스 RPA와 웹 서비스를 운영하고 유지보수 및 신규 개발 업무를 수행했습니다.",
      ],
      [
        "기업 RPA · BI 프로젝트",
        "2018.11 — 2020.10",
        "효성ITX 기술지원, 태영건설 RPA 운영, 잇츠한불 SAP BSP, ZINUS RPA 개발·운영, SK가스 RPA PoC를 수행했습니다.",
      ],
    ],
  },
] as const;
