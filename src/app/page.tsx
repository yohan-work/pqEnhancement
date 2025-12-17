import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabSystem from "@/components/TabSystem";
import PromptCard from "@/components/PromptCard";
import styles from "@/styles/home.module.scss";
import { roles } from "@/data/prompts";

export default function Home() {
  const basicPrompts = [
    {
      title: "기획 아이디어 생성",
      content: `너는 기획 전문가야.
[주제]에 대한 창의적인 아이디어 10개를 제안해줘.
각 아이디어는 "아이디어 명 - 한 줄 설명 - 기대 효과" 형식으로 작성해줘.`,
    },
    {
      title: "어려운 개념 쉽게 배우기",
      content: `나는 [분야]에 대해 전혀 모르는 초심자야.
[개념]에 대해 유치원생도 이해할 수 알기 쉽게 비유를 들어서 설명해줘.`,
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.gridContainer}>
          {/* Section 1: AI Understanding */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>🤖 AI 이해하기</h2>
            <p className={styles.description}>
              AI는 마법 구슬이 아닙니다. <br />
              <strong>"엄청 똑똑하지만 눈치 없는 신입 인턴"</strong>이라고
              생각하세요.
            </p>
            <ul className={styles.tipList}>
              <li>명확하게 지시하지 않으면 엉뚱한 답을 줍니다.</li>
              <li>한 번에 모든 걸 시키기보다 단계별로 나누어 시키세요.</li>
              <li>
                틀린 정보를 말할 수 있으니(할루시네이션) 반드시 확인이 필요합니다.
              </li>
            </ul>
          </section>

          {/* Section 2: 3 Golden Rules */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>✨ 프롬프트 3원칙</h2>
            <div className={styles.ruleBox}>
              <h3>1. 페르소나 (Persona)</h3>
              <p>AI에게 역할을 쥐어주세요. 전문가처럼 생각하고 답변합니다.</p>
              <div className={styles.codeBlock}>
                "너는 10년 차 전문 마케터야."<br />
                "친절한 초등학교 선생님처럼 설명해줘."
              </div>
            </div>
            <div className={styles.ruleBox}>
              <h3>2. 맥락 (Context)</h3>
              <p>배경 상황을 자세히 설명할수록 좋은 답이 나옵니다.</p>
              <div className={styles.codeBlock}>
                "나는 지금 다이어트 중이고, 탄수화물을 줄이려고 해." <br />
                "우리 서비스는 20대 대학생이 주 타겟이야."
              </div>
            </div>
            <div className={styles.ruleBox}>
              <h3>3. 출력 형식 (Output Format)</h3>
              <p>원하는 결과물의 형태를 지정하세요.</p>
              <div className={styles.codeBlock}>
                "표로 정리해줘." <br />
                "블로그 포스팅 말투로 작성해줘." <br />
                "3줄 요약해줘."
              </div>
            </div>
          </section>

          {/* Section 3: Basic Templates */}
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>📋 바로 쓰는 템플릿</h2>
            {basicPrompts.map((prompt, idx) => (
              <PromptCard
                key={`basic-${idx}`}
                id={`basic-${idx}`}
                title={prompt.title}
                content={prompt.content}
              />
            ))}
          </section>
        </div>

        {/* Section 4: Role-based Templates (Tab System) */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>💼 직군별 Advanced 템플릿</h2>
          <TabSystem roles={roles} />
        </section>

        {/* Section 5: Credibility & Tips */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>💡 꿀팁 및 출처</h2>
          <ul className={styles.tipList}>
            <li>
              <strong>피드백 주기:</strong> "이 부분은 좀 더 자세히 설명해줘"라고
              대화를 이어가세요.
            </li>
            <li>
              <strong>영어 활용:</strong> 가능하다면 영문 질문이 더 퀄리티가 좋을
              때가 많습니다. (번역기 활용 추천)
            </li>
            <li>
              <strong>예시 제공:</strong> 원하는 스타일의 예시를 하나 던져주면 기가
              막히게 따라합니다. (Few-shot prompting)
            </li>
          </ul>
          <div className={styles.references}>
            <h4>📚 참고 문헌 (Credibility)</h4>
            <p>
              본 가이드의 내용은 AI 프롬프트 엔지니어링의 공식 가이드를 기반으로
              작성되었습니다.
            </p>
            <ul>
              <li>
                <a
                  href="https://platform.openai.com/docs/guides/prompt-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenAI Prompt Engineering Guide
                </a>
              </li>
              <li>
                <a
                  href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anthropic Prompt Library
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
