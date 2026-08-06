"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    category: "SYSTEM",
    year: "2025—26",
    title: "Ubittz Design System",
    desc: "Figma Variables부터 npm 배포까지 연결한 확장 가능한 UI 시스템",
    metric: "4 days → 1 day",
    tone: "lime",
    tags: ["React", "Storybook", "tsup"],
  },
  {
    category: "PLATFORM",
    year: "2024—25",
    title: "Multi-platform Admin",
    desc: "고객과 플랫폼이 늘어나도 유연하게 확장되는 SaaS Admin 아키텍처",
    metric: "3 product tiers",
    tone: "violet",
    tags: ["React", "Spring", "AWS"],
  },
  {
    category: "MOBILE",
    year: "2023—24",
    title: "TADA Singpass",
    desc: "싱가포르 전자 ID를 연결하고 인증 구조를 확장 가능하게 개선",
    metric: "Global mobility",
    tone: "blue",
    tags: ["Swift", "RxSwift", "OAuth"],
  },
  {
    category: "AUTOMATION",
    year: "2026",
    title: "Slack Scrum Bot",
    desc: "일일 업무 공유와 병목 발견을 Slack 안에서 자동화",
    metric: "Zero spreadsheets",
    tone: "coral",
    tags: ["Node.js", "Slack SDK", "DynamoDB"],
  },
];

export function ProjectGallery() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", ...projects.map((project) => project.category)];
  return (
    <div>
      <div className="filters" aria-label="프로젝트 필터">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((project) => filter === "ALL" || project.category === filter)
          .map((project, index) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-art" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <b>{project.metric}</b>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}

const intents = ["커피챗", "면접 제안", "프로젝트 협업"];
export function ContactPanel() {
  const [intent, setIntent] = useState("커피챗");
  useEffect(() => {
    const savedIntent = localStorage.getItem("wongil-contact-intent");
    if (savedIntent) queueMicrotask(() => setIntent(savedIntent));
  }, []);
  const choose = (value: string) => {
    setIntent(value);
    localStorage.setItem("wongil-contact-intent", value);
  };
  const share = async () => {
    const data = {
      title: "김원길 — Frontend Developer",
      text: `김원길님께 ${intent}을 제안해 보세요.`,
      url: location.href,
    };
    if (navigator.share) await navigator.share(data);
    else await navigator.clipboard.writeText(location.href);
  };
  return (
    <div className="contact-panel">
      <p>어떤 이야기로 시작할까요?</p>
      <div className="intent-list">
        {intents.map((value) => (
          <button
            key={value}
            className={intent === value ? "active" : ""}
            onClick={() => choose(value)}
          >
            {value}
            <span>{intent === value ? "●" : "○"}</span>
          </button>
        ))}
      </div>
      <a
        className="email-link"
        href={`mailto:judgevi52@gmail.com?subject=${encodeURIComponent(intent + " 제안드립니다")}`}
      >
        judgevi52@gmail.com <span>↗</span>
      </a>
      <button className="share" onClick={share}>
        이 프로필 공유하기 ↗
      </button>
    </div>
  );
}
