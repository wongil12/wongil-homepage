import { ContactPanel, ProjectGallery } from "@/app/interactive";
import { careers, skills } from "@/data/portfolio";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="홈으로">
        WON<span>GIL</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="mailto:judgevi52@gmail.com">
        Let&apos;s talk <span>↗</span>
      </a>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-orbit" aria-hidden="true">
        <span>8+</span>
        <small>
          YEARS
          <br />
          CRAFTING
        </small>
      </div>
      <p className="eyebrow">
        <span /> Seoul-based Frontend Developer
      </p>
      <h1>
        Build for
        <br />
        <em>people,</em> scale
        <br />
        for <strong>growth.</strong>
      </h1>
      <div className="hero-bottom">
        <p>
          사용자에게는 자연스럽고,
          <br />
          팀에게는 오래 가는 제품을 만듭니다.
        </p>
        <a className="scroll-cue" href="#about">
          <span>↓</span> Scroll to explore
        </a>
      </div>
      <div className="hero-grid" aria-hidden="true" />
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="section-label">
        <span>01</span> About
      </div>
      <div className="about-copy">
        <p className="lead">
          기능을 만드는 사람을 넘어,
          <br />
          <em>서비스와 조직의 성장</em>을 만듭니다.
        </p>
        <div className="about-detail">
          <p>
            웹, 모바일 앱, 관리자 시스템까지. 구현보다 먼저 “왜 필요한가”를 묻고, 지금의 팀과
            서비스에 가장 현실적인 답을 설계합니다.
          </p>
          <p>
            아키텍처 설계, 개발 방향 설정, 코드 리뷰와 일정 관리까지 맡으며 동료가 더 빠르고
            안정적으로 일할 수 있는 기반을 만들어 왔습니다.
          </p>
        </div>
        <div className="stats">
          <div>
            <strong>
              8<span>+</span>
            </strong>
            <p>Years of experience</p>
          </div>
          <div>
            <strong>34</strong>
            <p>Agency projects</p>
          </div>
          <div>
            <strong>
              94<span>%</span>
            </strong>
            <p>On-time delivery</p>
          </div>
          <div>
            <strong>21</strong>
            <p>UI components built</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="career section">
      <div className="section-label">
        <span>02</span> Experience
      </div>
      <div className="timeline">
        {careers.map((career, index) => (
          <article className="career-item" key={career.company}>
            <div className="career-index">0{index + 1}</div>
            <div className="career-period">{career.period}</div>
            <div className="career-main">
              <h3>{career.company}</h3>
              <p className="career-role">{career.role}</p>
              <p>{career.summary}</p>
              <div className="tags">
                {career.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <details className="career-details">
                <summary>
                  <span>전체 이력 보기</span>
                  <i>+</i>
                </summary>
                <div className="detail-content">
                  {career.details.map(([title, meta, body]) => (
                    <div className="detail-row" key={title}>
                      <div>
                        <h4>{title}</h4>
                        <span>{meta}</span>
                      </div>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="skills section" id="skills">
      <div className="section-label light">
        <span>03</span> Capabilities
      </div>
      <div className="skills-head">
        <h2>
          Tools change.
          <br />
          <em>Principles remain.</em>
        </h2>
        <p>기술은 목적이 아니라 더 나은 경험과 운영을 위한 도구입니다.</p>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <article key={skill.name}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{skill.name}</h3>
            <p>{skill.note}</p>
            <b>{skill.level}</b>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorkSection() {
  return (
    <section className="work section" id="work">
      <div className="section-label">
        <span>04</span> Selected work
      </div>
      <div className="work-head">
        <h2>
          Problems solved,
          <br />
          <em>not just screens shipped.</em>
        </h2>
      </div>
      <ProjectGallery />
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-title">
        <p>Have a problem worth solving?</p>
        <h2>
          Let&apos;s make
          <br />
          <em>it happen.</em>
        </h2>
      </div>
      <ContactPanel />
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <a className="brand" href="#top">
        WON<span>GIL</span>
      </a>
      <p>Frontend developer who builds for sustainable growth.</p>
      <div>
        <a href="https://github.com/wongil12" target="_blank" rel="noreferrer">
          Github ↗
        </a>
        <a href="https://www.linkedin.com/in/onewaykim/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
      <small>© 2026 Kim Wongil</small>
    </footer>
  );
}
