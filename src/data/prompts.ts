export type Prompt = {
    title: string;
    content: string;
};

export type RoleData = {
    id: string;
    label: string;
    prompts: Prompt[];
};

export const roles: RoleData[] = [
    {
        id: "marketing",
        label: "마케팅",
        prompts: [
            {
                title: "SNS 마케팅 (전략적 카피라이팅)",
                content: `# Role
너는 10년 차 전문 카피라이터이자 SNS 마케팅 전략가야.

# Task
[제품/서비스]를 홍보하기 위한 인스타그램 피드 광고 문구를 작성해줘.

# Context
- 타겟 오디언스: [20대 직장인 여성] (자기계발과 트렌드에 민감함)
- 제품의 특장점: [핵심 키워드/특장점]

# Steps
1. **Pain Point 분석**: 타겟이 겪고 있는 문제 상황을 생생하게 묘사해줘.
2. **Solution 제시**: 그 문제를 우리 제품이 어떻게 세련되게 해결하는지 연결해줘.
3. **Drafting**: 3가지 톤(감성형 / 논리형 / 위트형)으로 각각 작성해줘.

# Constraints
- 모바일 가독성을 위해 5줄 이내로 끊어쓰기.
- 이모지를 적절히 사용하여 시선을 끄는 스타일.

# Output Format
- 버전 1 (감성형): 본문 + 해시태그 5개
- 버전 2 (논리형): 본문 + 해시태그 5개
- 버전 3 (위트형): 본문 + 해시태그 5개`,
            },
            {
                title: "SEO 블로그 포스팅 기획",
                content: `# Role
너는 SEO 콘텐츠 마케터야. 구글 검색 상위 노출을 목표로 해.

# Task
[주제]에 대한 블로그 포스팅 아웃라인을 작성해줘.

# Strategy
1. **Search Intent (검색 의도)**: 사용자가 이 키워드를 검색할 때 궁금해하는 본질적인 질문은 무엇인가?
2. **Hooking (후킹)**: 클릭을 유도할 수 있는 매력적인 제목 5가지를 제안해줘. (숫자 활용, 호기심 자극)
3. **Structure (구조화)**: 체류 시간을 확보할 수 있는 논리적인 글 구조(서론-본론(3파트)-결론)를 잡아줘.

# Output Format
- 분석된 검색 의도
- 추천 제목 5선
- 글 구조 (각 문단별 포함해야 할 핵심 키워드 및 예상 분량)`,
            },
            {
                title: "뉴스레터 작성",
                content: `# Role
너는 따뜻하고 통찰력 있는 뉴스레터 에디터야.

# Task
[주제]에 대해 구독자들에게 보내는 뉴스레터 초안을 작성해줘.

# Context
우리 구독자들은 [구독자 특징]이며, 주로 [관심사]에 관심이 많아.

# Guidelines
1. **Headline**: 메일함을 열 수밖에 없는 호기심 자극 제목.
2. **Body**: 친구에게 말하듯 친근한 구어체 (해요체) 사용.
3. **Insight**: 단순 정보 전달이 아닌, 생각할 거리를 던져주는 인사이트 포함.
4. **Closing**: 독자의 행동을 유도하거나(참여), 답장을 부르는 마무리.

# Output
- 이메일 제목
- 이메일 본문`,
            },
        ],
    },
    {
        id: "sales",
        label: "세일즈",
        prompts: [
            {
                title: "B2B 콜드 메일 (가치 제안)",
                content: `# Role
너는 Top-tier B2B 세일즈 전문가야.

# Task
[타겟 기업/담당자]에게 보낼 콜드 메일 초안을 작성해줘.

# Context
우리의 서비스 [서비스명]은 [타겟 기업]의 [문제가 되는 상황]을 해결해줄 수 있어.

# Key Principles
1. **Subject Line**: 짧고 강렬하며, 개인화된 제목 (오픈율 극대화).
2. **Rapport**: 뻔한 인사 대신, 상대방의 최근 뉴스/성과를 언급하며 시작.
3. **Benefit**: "기능"이 아닌 "혜택" 중심(Benefit-driven)으로 서술. (시간 절약, 비용 절감 등)
4. **CTA (Call to Action)**: 부담 없이 "커피 챗"이나 "15분 줌 미팅" 제안.

# Tone
정중하지만 비즈니스 파트너로서 동등한 자신감을 보여주는 톤.`,
            },
            {
                title: "고객 거절 방어 (Feel-Felt-Found)",
                content: `# Situation
고객이 우리 제안을 듣고 "가격이 예산보다 비싸네요"라고 거절한 상황이야.

# Task
이 거절을 극복하고, 가치를 재확인시킬 수 있는 대응 스크립트를 작성해줘.

# Methodology (Feel-Felt-Found)
1. **Feel (공감)**: 가격 부담을 느끼는 점을 충분히 이해하고 인정해줘.
2. **Felt (사례)**: "다른 고객님들도 처음엔 그렇게 느끼셨습니다."라고 안심시켜줘.
3. **Found (재발견)**: "하지만 도입 후 [구체적 성과]를 보시고는 오히려 이익이라고 하셨습니다."라고 반전시켜줘.

# Output Options
- 옵션 1: ROI(투자 대비 효과) 강조형 대응
- 옵션 2: 분할 납부/프로모션 등 대안 제시형 대응`,
            },
            {
                title: "세일즈 스크립트 시뮬레이션",
                content: `# Role
너는 까다로운 [업종] 고객 역할을 맡아줘. 나는 세일즈맨이야.

# Task
나와 실제 미팅을 하듯 롤플레잉(Role-play)을 진행해줘.

# Scenario
나는 [우리 제품]을 팔려고 하고, 너는 [예산 부족 / 기존 업체 만족 / 결정 권한 없음] 중 하나의 이유로 방어적이야.

# Rules
1. 한 번에 한 마디씩 대화를 주고받자.
2. 내가 설득력 있게 말하면 조금씩 마음을 열고, 논리가 부족하면 날카롭게 지적해줘.
3. 시뮬레이션 종료 후 내 화법에 대한 피드백을 줘.

(지금부터 "안녕하세요, 담당자님!" 이라고 내가 먼저 시작할게.)`,
            },
        ],
    },
    {
        id: "pm",
        label: "기획(PM/PO)",
        prompts: [
            {
                title: "PRD (제품 요구사항 정의서) - MECE",
                content: `# Role
너는 논리적이고 꼼꼼한 시니어 PO(Product Owner)야.

# Task
[기능/아이디어] 구현을 위한 상세 PRD(제품 요구사항 정의서)를 작성해줘.

# Structure (MECE)
1. **Background (Why)**: 왜 이 기능을 만들어야 하는가? (비즈니스 임팩트, 유저 페인포인트)
2. **Target User (Who)**: 누가, 어떤 상황에서 사용하는가?
3. **User Stories**: 핵심 유저 스토리 3가지.
4. **Functional Specs (How)**:
    - UI 요소 및 로직 상세 (초기값, 로딩 상태, 에러 상태 포함)
    - 데이터 요구사항 (Input/Output)
5. **Edge Cases**: 발생 가능한 예외 상황 (네트워크 오류, 데이터 없음 등)

# Constraint
- 개발자와 디자이너가 읽고 바로 작업할 수 있을 정도로 모호함 없이 구체적이어야 함.`,
            },
            {
                title: "유저 스토리 (INVEST 원칙)",
                content: `# Task
[기능] 개발을 위한 유저 스토리(User Story)와 인수 조건(AC)을 작성해줘.

# Criteria
1. **INVEST 원칙** 준수 (Independent, Negotiable, Valuable, Estimable, Small, Testable).
2. **Format**:
    - **Story**: "As a [Role], I want to [Action], so that [Benefit]."
    - **AC (Acceptance Criteria)**: Gherkin 문법(Given/When/Then)으로 작성.

# Scope
Happy Path(성공 케이스) 뿐만 아니라 Unhappy Path(실패/예외 케이스)도 반드시 포함해줘.`,
            },
            {
                title: "서비스 정책 정의",
                content: `# Role
너는 꼼꼼한 서비스 기획자야.

# Task
[기능 - 예: 회원 탈퇴]에 대한 정책 정의서를 작성해줘.

# Checklist
- **조건**: 서비스 이용 기간, 잔여 포인트 처리 등 탈퇴 가능/불가능 조건.
- **프로세스**: 탈퇴 신청 -> 유예 기간 -> 데이터 삭제까지의 흐름.
- **데이터 처리**: 개인정보 보존 기간(법적 이슈 고려) 및 파기 시점.
- **UI 메시지**: 퍼널 단계별 유저에게 노출될 안내 문구.

# Output Format
표 형식으로 정리해줘.`,
            },
        ],
    },
    {
        id: "dev",
        label: "개발",
        prompts: [
            {
                title: "코드 리팩토링 (Clean Code)",
                content: `# Role
너는 구글 출신의 시니어 소프트웨어 엔지니어야. 'Clean Code'의 신봉자지.

# Task
아래 제공하는 코드를 리팩토링해줘.

# Objectives
1. **Readability**: 변수명과 함수명을 직관적으로 변경.
2. **Modularity**: 하나의 함수가 하나의 일만 하도록 분리 (SRP 원칙).
3. **Efficiency**: 불필요한 연산이나 중복 로직 제거 (오버 엔지니어링 주의).
4. **Error Handling**: 예외 처리가 누락된 부분 보완.

# Code
[여기에 코드 붙여넣기]

# Output
- 리팩토링된 코드 (주석 포함)
- 변경된 주요 사항과 이유 설명`,
            },
            {
                title: "버그 원인 분석 및 해결",
                content: `# Role
너는 디버깅 전문가야.

# Situation
다음 에러 로그가 발생했고, 관련 코드는 아래와 같아.

# Error Log
[에러 로그 붙여넣기]

# Code snippet
[코드 붙여넣기]

# Task
1. 에러의 가장 유력한 원인 3가지를 추론해줘.
2. 각 원인별 검증 방법(어디를 찍어봐야 할지 등)을 알려줘.
3. 수정된 코드 예시를 제안해줘.`,
            },
            {
                title: "API 명세서 작성",
                content: `# Role
너는 백엔드 개발자야. 프론트엔드 개발자와 소통하기 위한 API 문서를 작성 중이야.

# Task
[기능]을 위한 RESTful API 명세서를 작성해줘.

# Spec
- **Endpoint**: URL 및 Method (GET, POST 등)
- **Description**: API의 기능 설명
- **Request Parameters**: Header, Body, Query Param 등 (필수/선택 여부, 타입 명시)
- **Response**:
    - 200 OK (성공 시 JSON 예시)
    - 400/500 Errors (실패 시 에러 코드 및 메시지 예시)

# Format
Markdown 포맷으로 작성해줘.`,
            },
        ],
    },
    {
        id: "design",
        label: "디자인",
        prompts: [
            {
                title: "UX 리서치 분석",
                content: `# Role
너는 UX 리서처야.

# Data
[사용자 인터뷰 내용 / 설문조사 결과]

# Task
위 데이터를 바탕으로 사용자의 페르소나(Persona)와 저니맵(User Journey Map)을 도출해줘.

# Output
1. **Persona**: 이름, 나이, 직업, 목표, 좌절요소(Frustrations)
2. **Journey Map**:
    - 단계: 인지 -> 탐색 -> 결정 -> 사용 -> 추천
    - 각 단계별 사용자 감정 곡선 및 주요 행동`,
            },
            {
                title: "UI 디자인 컨셉 도출",
                content: `# Role
너는 UI/UX 디자이너야.

# Task
[앱/서비스 서비스명]의 메인 화면 디자인 컨셉을 제안해줘.

# Keywords
[심플한, 미래지향적인, 따뜻한]

# Output
1. **Color Palette**: 메인 컬러, 서브 컬러 (Hex 코드 포함) 및 선정 이유.
2. **Typography**: 추천 폰트 및 스타일 가이드.
3. **Layout Idea**: 주요 컴포넌트 배치 아이디어 3가지.
4. **Vibe**: Dribbble이나 Behance에서 참고할 만한 키워드.`,
            },
        ],
    },
    {
        id: "hr",
        label: "인사/총무",
        prompts: [
            {
                title: "JD (채용 공고) 작성",
                content: `# Role
너는 IT 기업의 채용 담당자야.

# Task
[채용 포지션] 채용 공고(Job Description)를 매력적으로 작성해줘.

# Guidelines
1. **Company Info**: 우리 회사의 비전과 문화 포장 (성장, 자율성 강조).
2. **Responsibilities**: 주요 업무 내용을 명확하게 5가지로 요약.
3. **Qualifications**: 필수 자격 요건(Must-have)과 우대 사항(Nice-to-have) 구분.
4. **Benefits**: 지원자가 혹할만한 복지 혜택 및 성장 가능성 어필.

# Tone
딱딱하지 않고, 능력 있는 동료를 기다리는 진취적인 톤.`,
            },
            {
                title: "면접 예상 질문 리스트",
                content: `# Role
너는 [직무] 분야의 10년 차 면접관이야.

# Task
[직무] 신입/경력 면접을 위한 핵심 질문 리스트 10개를 뽑아줘.

# Categories
1. **직무 역량 (Hard Skill)**: 실무 능력을 검증하는 기술 질문.
2. **문제 해결력 (Soft Skill)**: 갈등 상황이나 난관 극복 경험을 묻는 질문.
3. **컬처 핏 (Culture Fit)**: 우리 회사 문화와 맞는지 확인하는 질문.

# Output
각 질문에 대해 "이 질문을 통해 확인해야 하는 포인트(의도)"를 함께 적어줘.`,
            },
        ],
    },
];
