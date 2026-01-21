// items.js
const ITEM_SYSTEM = {
    slots: ["weapon", "hat", "top", "bottom", "glove", "neck", "wrist"],
    commonNames: {
        weapon: ["모나미 볼펜", "키보드", "마우스"],
        hat: ["비니", "야구 모자", "헤드셋"],
        top: ["흰 티셔츠", "체크 남방"],
        bottom: ["슬랙스", "청바지"],
        glove: ["면장갑", "니트장갑"],
        neck: ["임시 출입증", "넥타이"],
        wrist: ["시계", "손목보호대"]
    },
    villainRares: {
        "출근 대리님": { name: "결재판 방패", slot: "top", val: 55 },
        "스팸 전화 070": { name: "스팸 차단기", slot: "neck", val: 50 },
        "데이터 없는 폰": { name: "무제한 요금제", slot: "wrist", val: 52 },
        "USB 반대로 끼움": { name: "C타입 젠더", slot: "weapon", val: 48 },
        "안 씻은 텀블러": { name: "살균 세척제", slot: "glove", val: 55 },
        "눅눅한 시리얼": { name: "바삭한 설탕가루", slot: "hat", val: 45 },
        "안터지는 WIFI": { name: "5G 증폭기", slot: "neck", val: 60 },
        "사라진 리모컨": { name: "만능 리모컨", slot: "weapon", val: 65 },
        "빨간불 횡단보도": { name: "빛의 운동화", slot: "bottom", val: 70 },
        "광고 스킵 불가": { name: "유튜브 프리미엄", slot: "neck", val: 150 }, // 보스
        "법카 부장님": { name: "한우 등심 법카", slot: "weapon", val: 120 },
        "라떼 차장님": { name: "황금 비율 믹스커피", slot: "neck", val: 110 },
        "이어폰 한쪽 고장": { name: "노이즈캔슬링 팟", slot: "hat", val: 115 },
        "카공족 눈총": { name: "투명 망토", slot: "top", val: 105 },
        "보이스 피싱": { name: "경찰청 보이스", slot: "wrist", val: 130 },
        "무한 로딩": { name: "SSD 1TB", slot: "bottom", val: 125 },
        "마라탕 얼룩": { name: "초강력 얼룩제거제", slot: "top", val: 110 },
        "안 열리는 뚜껑": { name: "다이아 악력기", slot: "glove", val: 120 },
        "겨울 정전기": { name: "섬유 유연제", slot: "wrist", val: 135 },
        "만원 버스 백팩": { name: "에어 서스펜션", slot: "bottom", val: 300 }, // 보스
        "퇴근직전 팀장": { name: "칼퇴근 승인권", slot: "weapon", val: 450 },
        "읽씹 썸녀": { name: "마법의 답장권", slot: "neck", val: 420 },
        "층간소음 망치": { name: "진동 방지 패드", slot: "bottom", val: 400 },
        "흰운동화와 비": { name: "나노 방수 코팅", slot: "bottom", val: 380 },
        "비번 5회 오류": { name: "지문 인식기", slot: "wrist", val: 450 },
        "고장난 엔터키": { name: "청축 기계식 키보드", slot: "weapon", val: 460 },
        "택배 오배송": { name: "GPS 추적장치", slot: "neck", val: 410 },
        "중고나라 벽돌": { name: "황금 벽돌", slot: "weapon", val: 500 },
        "상한 우유": { name: "유산균 방패", slot: "top", val: 480 },
        "조별과제 잠수": { name: "프리라이더 척살권", slot: "weapon", val: 800 }, // 보스
        "발가락 찧음": { name: "강철 토캡 안전화", slot: "bottom", val: 1200 },
        "저장 안한 문서": { name: "클라우드 자동저장", slot: "wrist", val: 1500 },
        "지하철 급똥": { name: "지옥의 괄약근링", slot: "bottom", val: 1100 },
        "무한수정 갑질": { name: "최종의최종의진짜최종본", slot: "weapon", val: 1800 },
        "사회적 수치": { name: "기억 소거 장치", slot: "hat", val: 2000 },
        "잘못 보낸 카톡": { name: "시간을 되돌리는 시계", slot: "wrist", val: 1600 },
        "에어컨 깜빡함": { name: "태양광 발전기", slot: "top", val: 1400 },
        "월요일 아침": { name: "일요일의 축복", slot: "neck", val: 2500 },
        "윈도우 업뎃": { name: "리눅스 마스터", slot: "hat", val: 2200 },
        "명절 잔소리": { name: "무지개 반사 방패", slot: "top", val: 5000 }, // 보스
        "예비군 통지": { name: "민방위 대장 마크", slot: "hat", val: 8000 },
        "누진세 고지": { name: "무한 동력 전지", slot: "top", val: 9000 },
        "액정 파손": { name: "고릴라 글래스 100", slot: "wrist", val: 8500 },
        "전애인 연락": { name: "차단 리스트 1순위", slot: "neck", val: 10000 },
        "서버 점검": { name: "로컬 서버 구축기", slot: "weapon", val: 9000 },
        "아재 개그": { name: "개그 콘서트 방청권", slot: "hat", val: 7500 },
        "비상금 걸림": { name: "스위스 비밀 계좌", slot: "wrist", val: 15000 },
        "퇴사 반려": { name: "사직서 프리패스", slot: "weapon", val: 20000 },
        "대출 이자": { name: "제로 금리 계약서", slot: "neck", val: 25000 },
        "인사팀장": { name: "전설의 황금 사직서", slot: "weapon", val: 50000 } // 보스
    },
    generateDrop(monster, stageIdx) {
        const dice = Math.random() * 100;
        if (monster.isBoss) return { ...this.villainRares[monster.name], grade: "unique" };
        if (dice < 5) return { ...this.villainRares[monster.name], grade: "rare" };
        if (dice < 50) {
            const slot = this.slots[Math.floor(Math.random() * this.slots.length)];
            const name = this.commonNames[slot][Math.floor(Math.random() * this.commonNames[slot].length)];
            return { name, slot, val: (stageIdx + 1) * 20 + Math.floor(Math.random() * 10), grade: "common" };
        }
        return null;
    }
};