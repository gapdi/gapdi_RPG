// villains.js
const VILLAINS_DATA = [
    [ // STAGE 1: 일상의 시련
        { name: "출근 대리님", hp: 60, atk: 6, skill: "서류 던지기", killMsg: "거 김대리, 이 서류 오늘까지야." },
        { name: "스팸 전화 070", hp: 45, atk: 5, skill: "꿀잠 방해", killMsg: "대출 권유 전화였습니다." },
        { name: "데이터 없는 폰", hp: 50, atk: 8, skill: "오프라인 고립", killMsg: "로딩 스피너만 10분째..." },
        { name: "USB 반대로 끼움", hp: 50, atk: 5, skill: "단자 입구막기", killMsg: "뒤집어도 안 들어갑니다." },
        { name: "안 씻은 텀블러", hp: 60, atk: 10, skill: "곰팡이 향기", killMsg: "커피에서 이상한 맛이 납니다." },
        { name: "눅눅한 시리얼", hp: 45, atk: 5, skill: "종이 식감", killMsg: "바삭함이 사라졌습니다." },
        { name: "안터지는 WIFI", hp: 70, atk: 12, skill: "무한 로딩", killMsg: "연결이 끊겼습니다." },
        { name: "사라진 리모컨", hp: 75, atk: 10, skill: "구석 숨기기", killMsg: "결국 제자리에서 일어났습니다." },
        { name: "빨간불 횡단보도", hp: 80, atk: 12, skill: "버스 놓치기", killMsg: "눈앞에서 버스가 떠납니다." },
        { name: "광고 스킵 불가", hp: 150, atk: 25, skill: "강제 15초", killMsg: "15초가 영겁의 시간 같았습니다.", isBoss: true }
    ],
    [ // STAGE 2: 사회의 쓴맛
        { name: "법카 부장님", hp: 200, atk: 30, skill: "갑자기 회식", killMsg: "오늘 메뉴는 삼겹살이다!" },
        { name: "라떼 차장님", hp: 220, atk: 35, skill: "무한 훈화", killMsg: "나 때는 말이야..." },
        { name: "이어폰 한쪽 고장", hp: 180, atk: 25, skill: "모노 사운드", killMsg: "왼쪽 귀가 외롭습니다." },
        { name: "카공족 눈총", hp: 170, atk: 22, skill: "한숨 쉬기", killMsg: "키보드 소리가 죄인가요?" },
        { name: "보이스 피싱", hp: 250, atk: 45, skill: "검찰 사칭", killMsg: "서울 중앙 지검입니다." },
        { name: "무한 로딩", hp: 230, atk: 35, skill: "뱅글뱅글", killMsg: "서버가 응답하지 않습니다." },
        { name: "마라탕 얼룩", hp: 210, atk: 30, skill: "흰셔츠 저격", killMsg: "최애 셔츠가 사망했습니다." },
        { name: "안 열리는 뚜껑", hp: 190, atk: 28, skill: "진공 밀착", killMsg: "손바닥만 빨개졌습니다." },
        { name: "겨울 정전기", hp: 240, atk: 50, skill: "찌릿찌릿", killMsg: "문고리가 무서워집니다." },
        { name: "만원 버스 백팩", hp: 500, atk: 70, skill: "길막 하기", killMsg: "가방에 밀려 못 내렸습니다.", isBoss: true }
    ],
    [ // STAGE 3: 사내 정치
        { name: "퇴근직전 팀장", hp: 600, atk: 80, skill: "이것만 더 해", killMsg: "자네, 아직 안 갔나?" },
        { name: "읽씹 썸녀", hp: 550, atk: 85, skill: "숫자 1 지옥", killMsg: "답장이 영영 안 옵니다." },
        { name: "층간소음 망치", hp: 650, atk: 100, skill: "천장 드릴링", killMsg: "잠을 잘 수가 없습니다." },
        { name: "흰운동화와 비", hp: 580, atk: 70, skill: "진흙 튀기기", killMsg: "새 신발이 걸레가 됐네요." },
        { name: "비번 5회 오류", hp: 620, atk: 110, skill: "계정 잠금", killMsg: "본인인증 다시 하세요." },
        { name: "고장난 엔터키", hp: 700, atk: 90, skill: "입력 불가", killMsg: "채팅을 칠 수 없습니다." },
        { name: "택배 오배송", hp: 600, atk: 85, skill: "옆집 배달", killMsg: "물건이 사라졌습니다." },
        { name: "중고나라 벽돌", hp: 800, atk: 150, skill: "바꿔치기", killMsg: "벽돌이 배달됐습니다." },
        { name: "상한 우유", hp: 680, atk: 180, skill: "복통 유발", killMsg: "배가 뒤틀립니다." },
        { name: "조별과제 잠수", hp: 2000, atk: 250, skill: "연락 두절", killMsg: "이름 뺐습니다.", isBoss: true }
    ],
    [ // STAGE 4: 현실의 벽
        { name: "발가락 찧음", hp: 4000, atk: 450, skill: "모서리 저격", killMsg: "으아아아악!" },
        { name: "저장 안한 문서", hp: 5000, atk: 550, skill: "강제 종료", killMsg: "다시 만드세요." },
        { name: "지하철 급똥", hp: 3500, atk: 400, skill: "괄약근 한계", killMsg: "다음 역이 너무 멉니다." },
        { name: "무한수정 갑질", hp: 6000, atk: 650, skill: "피드백 지옥", killMsg: "전안이 낫네요." },
        { name: "사회적 수치", hp: 8000, atk: 1000, skill: "최대 볼륨", killMsg: "이민 가야 합니다." },
        { name: "잘못 보낸 카톡", hp: 5500, atk: 500, skill: "삭제 실패", killMsg: "부장님 죄송합니다." },
        { name: "에어컨 깜빡함", hp: 4500, atk: 450, skill: "전기세 폭탄", killMsg: "월급이 삭제됐습니다." },
        { name: "월요일 아침", hp: 10000, atk: 1200, skill: "알람 10개", killMsg: "출근하기 싫어!" },
        { name: "윈도우 업뎃", hp: 12000, atk: 1100, skill: "강제 재부팅", killMsg: "파일 날아갔습니다." },
        { name: "명절 잔소리", hp: 25000, atk: 1800, skill: "결혼 콤보", killMsg: "그냥 잘게요.", isBoss: true }
    ],
    [ // STAGE 5: 사회적 멸망
        { name: "예비군 통지", hp: 40000, atk: 3000, skill: "입소 통보", killMsg: "강원도로 갑니다." },
        { name: "누진세 고지", hp: 50000, atk: 4000, skill: "고지서 테러", killMsg: "파산했습니다." },
        { name: "액정 파손", hp: 45000, atk: 3500, skill: "바닥 추락", killMsg: "수리비 60만원." },
        { name: "전애인 연락", hp: 35000, atk: 5000, skill: "자니 시전", killMsg: "추억 파괴." },
        { name: "서버 점검", hp: 45000, atk: 3000, skill: "연장의 연장", killMsg: "오픈 불가." },
        { name: "아재 개그", hp: 40000, atk: 2500, skill: "강요된 웃음", killMsg: "사회 생활 힘드네요." },
        { name: "비상금 걸림", hp: 70000, atk: 5500, skill: "전액 압수", killMsg: "거지 됐습니다." },
        { name: "퇴사 반려", hp: 90000, atk: 7000, skill: "종신 계약", killMsg: "죽어서 나갑니다." },
        { name: "대출 이자", hp: 120000, atk: 10000, skill: "금리 인상", killMsg: "이자의 노예." },
        { name: "인사팀장", hp: 250000, atk: 25000, skill: "권고사직", killMsg: "짐 싸세요.", isBoss: true }
    ]
];