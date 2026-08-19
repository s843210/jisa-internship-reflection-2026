"use client";

import { useEffect, useState } from "react";

type Language = "ko" | "ja";

const copy = {
  ko: {
    shortTitle: "인턴십 활동 기록",
    languageLabel: "언어 선택",
    skip: "본문으로 건너뛰기",
    nav: ["시작하며", "프로필", "일하며 배운 것", "현장의 기록", "일본 생활", "회고", "감사"],
    eyebrow: "JISA INTERNSHIP · FIELD NOTES 2026",
    title: "일본에서 일하고,\n생활하고, 성장한\n8주의 기록",
    dek: "도쿄의 한 회사에서 처음으로 일하고, 낯선 언어로 의견을 나누고, 혼자 생활하며 배운 것들을 있는 그대로 기록했습니다.",
    meta: [
      ["실습생", "임보현 · 조선대학교 컴퓨터공학과"],
      ["실습 기업", "US Medical Inc. · Tokyo"],
      ["실습 기간", "2026. 06. 30 — 08. 29"],
    ],
    coverCaption: "2026년 7월 3일, US Medical 첫 오리엔테이션. 알아듣지 못한 말이 많았지만, 이 회의실에서 두 달의 기록이 시작됐다.",
    intro: {
      number: "01",
      kicker: "인턴십을 시작하며",
      title: "낯선 회의실에서 시작된 첫날",
      quote: "“내가 여기서 무엇을 할 수 있을까.”",
      paragraphs: [
        "첫 출근 날 아침의 긴장감은 지금도 선명하다. 낯선 나라의 낯선 회사에서, 그것도 서툰 일본어로 일을 해야 한다는 사실은 설렘보다 두려움으로 다가왔다. 처음 며칠은 회의에서 오가는 이야기의 절반도 알아듣지 못한 채 고개만 끄덕였다.",
        "이번 실습에서는 US Medical Inc.의 구강 케어 브랜드 포케덴(POKEDEN)을 담당했다. 제품을 알리는 광고 영상을 만들고, 그 영상을 홈페이지에 적용하고, 담당자가 직접 관리할 수 있는 화면을 정리하고, 마지막에는 제품 패키지를 디자인하는 일까지 맡았다.",
        "이 기록은 완성된 결과만 나열한 포트폴리오가 아니다. 막혔던 순간과 다시 풀어 나간 과정, 회사 밖에서 일본 생활에 적응해 간 시간을 함께 담은 체험 보고서다.",
      ],
    },
    profile: {
      number: "02",
      kicker: "기본 프로필",
      title: "실습을 시작할 때의 나",
      intro: "컴퓨터공학과에서 익힌 웹 개발과 UI/UX 지식을 실제 제품과 서비스에 적용해 보았다. 수업에서 배운 개념이 회사에서는 어떤 기준으로 쓰이는지 확인하고, 부족한 부분은 직접 부딪치며 채워 간 시간이었다.",
      rows: [
        ["대학 · 학과", "조선대학교 컴퓨터공학과"],
        ["인턴십 기간", "2026년 6월 30일 — 8월 29일 · 여름 8주간"],
        ["실습 기업", "US Medical Inc. (도쿄)"],
        ["담당 브랜드", "구강 케어 브랜드 포케덴 POKEDEN"],
        ["배치 · 담당 분야", "광고 영상 · 홈페이지 영상 적용 · 인터랙션 · 관리자 화면 · 패키지 디자인"],
        ["일본어 능력", "일상 회화 수준 · 일본어 주간 회의, 피드백 확인 및 현장 발표 경험"],
        ["주최 · 지원", "대학 SW 중심사업단 · JISA 일본 인턴십 지원협회"],
      ],
      educationTitle: "학교에서 배운 것",
      educationBody: "컴퓨터공학 전공 수업과 프로젝트를 통해 HTML·CSS·JavaScript로 웹 화면을 구성하는 법, React와 TypeScript로 기능을 컴포넌트 단위로 나누는 법, 사용자가 정보를 이해하기 쉬운 순서로 정리하는 UI/UX의 기본을 배웠다. 이번 실습에서는 그 지식을 실제 브랜드 홈페이지와 운영 화면에 연결했다.",
      skillsTitle: "가지고 있던 기술과 실제로 할 수 있는 일",
      skills: [
        {
          name: "프론트엔드 개발",
          tools: "HTML · CSS · JavaScript · React 19 · TypeScript · Tailwind CSS v4 · Vite",
          body: "반응형 웹 화면을 만들고, 영상 재생·정지와 호버 인터랙션 같은 동작을 구현할 수 있다. PC와 모바일에서 화면이 잘리지 않는지 확인하고 오류를 수정하는 작업도 수행했다.",
        },
        {
          name: "UI/UX · 운영 화면",
          tools: "정보 구조 · 반응형 UI · 관리자 화면 · 대시보드",
          body: "처음 사용하는 사람도 기능을 찾을 수 있도록 정보의 순서와 버튼 위치를 정리할 수 있다. 담당자가 개발자 없이 콘텐츠와 문의 현황을 관리하는 화면을 설계했다.",
        },
        {
          name: "영상 · 시각 콘텐츠",
          tools: "영상 기획 · 자막 · 편집 · AI 이미지·영상 제작 · 패키지 콘셉트",
          body: "제품이 쓰이는 상황을 이야기로 구성하고, 장면 소재와 자막을 만들어 한 편의 광고 영상으로 편집할 수 있다. 대상에 맞춰 영상과 패키지의 색, 문구, 분위기를 조정하는 작업도 경험했다.",
        },
        {
          name: "테스트 · 문제 해결",
          tools: "기기별 확인 · 재생 오류 디버깅 · 피드백 반영",
          body: "기능이 예상대로 작동하지 않을 때 조건을 나누어 원인을 찾고 수정할 수 있다. 완성 뒤에도 실제 사용 환경에서 다시 확인하고, 회의 피드백을 다음 버전에 반영하는 방식으로 작업했다.",
        },
      ],
    },
    work: {
      number: "03",
      kicker: "일하며 배운 것",
      title: "만들고, 고치고, 다시 확인한 시간",
      intro: "맡은 일은 다섯 가지였지만 과정은 늘 비슷했다. 먼저 만들고, 회의에서 피드백을 받고, 원인을 찾아 다시 수정했다. 결과보다 그 반복 속에서 얻은 판단 기준을 중심으로 정리했다.",
      items: [
        {
          label: "WORK 01 · 영상",
          title: "제품 광고 영상 만들기",
          body: "의료 현장, 재난, 훈련, 어린이, 야외 활동처럼 제품이 실제로 쓰일 장면을 나누어 여러 편을 만들었다. 이야기의 흐름을 짜고, 장면 소재와 자막을 만들고, 편집 속도를 조정해 완성까지 담당했다.",
          hard: "며칠을 들여 완성했다고 생각한 영상에도 ‘전개가 빠르다’, ‘자막이 눈에 들어오지 않는다’는 수정 요청이 돌아왔다. 처음에는 내 노력을 부정당하는 것처럼 느껴져 속상했다.",
          learned: "수정을 거듭할수록 영상이 눈에 띄게 좋아졌다. 피드백은 나를 부정하는 말이 아니라, 혼자서는 보지 못한 부분을 대신 봐 주는 일이었다.",
        },
        {
          label: "WORK 02 · 웹",
          title: "만든 영상을 홈페이지에 올리기",
          body: "첫 화면 어느 위치에 영상을 둘지, 자동 재생과 소리는 어떻게 처리할지 정하고 컴퓨터와 휴대폰 양쪽에서 제대로 보이는지 확인했다.",
          hard: "영상을 넣자 페이지가 무거워졌고, 휴대폰에서는 화면이 잘리거나 영상만 남기도 했다. 잘 만든 영상도 보는 사람이 기다리다 나가 버리면 의미가 없다는 것을 실감했다.",
          learned: "무언가를 만드는 일과 실제로 잘 보여 주는 일은 다르다. 속도와 기기 환경까지 챙겨야 결과물이 비로소 제 역할을 한다는 것을 배웠다.",
          media: "/web-integration.jpg",
          mediaAlt: "포케덴 홈페이지에 영상이 적용된 화면",
          caption: "제작한 영상을 홈페이지에 적용하고 PC와 모바일에서 표시 상태를 확인했다.",
        },
        {
          label: "WORK 03 · 인터랙션",
          title: "마우스를 올리면 영상이 재생되는 기능",
          body: "사진 위에 마우스를 올리면 영상이 자연스럽게 재생되고, 마우스를 치우면 다시 멈추는 기능을 만들었다. 아무 동작이 없을 때는 다섯 장면이 차례로 바뀌도록 구성했다.",
          hard: "사진에서 영상으로 넘어갈 때 화면이 깜빡이고, 마우스를 빠르게 움직이면 영상이 겹쳐 재생되는 문제가 계속 생겼다. 실습 중 가장 오래 붙잡고 있던 작업이었다.",
          learned: "혼자 끝까지 붙들고 해결한 문제는 쉽게 잊히지 않았다. ‘모르는 상태를 견디는 힘’도 실력의 일부라는 것을 처음 알았다.",
          media: "/hover-site.jpg",
          mediaAlt: "사진 위에 마우스를 올리면 영상이 재생되는 웹 화면",
          caption: "정지 이미지와 영상 사이의 전환이 자연스럽게 이어지도록 반복해서 조정했다.",
        },
        {
          label: "WORK 04 · 운영",
          title: "담당자가 직접 관리할 수 있는 화면",
          body: "개발자를 거치지 않고도 영상과 이미지를 교체하고, 문구와 공지사항을 수정하고, 들어온 문의 건수를 확인할 수 있도록 관리자 화면을 정리했다.",
          hard: "내가 쓰기 편한 것과 다른 사람이 쓰기 편한 것은 달랐다. 만든 사람은 모든 위치를 알고 있기 때문에 오히려 처음 보는 사람의 불편을 알아차리기 어려웠다.",
          learned: "‘내가 만족하는가’보다 ‘받는 사람이 편한가’를 먼저 생각하게 되었다. 내가 떠난 뒤에도 계속 쓰일 화면이라는 점이 중요한 기준이 됐다.",
        },
        {
          label: "WORK 05 · 패키지",
          title: "어린이용과 프리미엄 제품 패키지",
          body: "어린이용은 우주비행사 캐릭터를 중심으로 영상과 패키지 분위기를 맞췄고, 프리미엄 제품은 선물용을 염두에 두고 차분한 인상을 만들었다. 상자 치수와 면별 정보까지 나누어 인쇄 가능한 형태로 정리했다.",
          hard: "두 패키지가 ‘같은 인상으로 보인다’는 피드백이 가장 당황스러웠다. 내 눈에는 둘 다 괜찮아 보였지만, 보는 사람에게는 대상의 차이가 전달되지 않았다.",
          learned: "내가 좋아하는 것을 만들기보다 ‘이것을 보는 사람은 누구인가’를 먼저 떠올리는 습관을 들였다. 대상이 달라지면 색과 문구, 정보의 순서도 달라져야 했다.",
          gallery: [
            ["/kids-package.jpg", "어린이용 포케덴 패키지 디자인", "어린이와 보호자가 함께 이해하기 쉬운 밝은 패키지"],
            ["/adult-package.jpg", "프리미엄 포케덴 패키지 디자인", "선물용을 염두에 둔 차분한 프리미엄 패키지"],
          ],
        },
      ],
    },
    field: {
      number: "04",
      kicker: "현장의 기록",
      title: "말로 설명해야 비로소 내 일이 되었다",
      intro: "만든 결과를 보여 주는 것만큼 어려웠던 일은 그 이유와 과정을 설명하는 일이었다. 아래 영상은 실제 현장에서 업무 내용을 보고하고, 일본어로 발표했던 시간의 기록이다.",
      videos: [
        {
          label: "US MEDICAL · 업무 발표",
          title: "담당 업무와 결과를 정리해 발표한 날",
          body: "영상, 웹 기능, 관리자 화면, 패키지 작업이 어떻게 이어졌는지 회사 관계자 앞에서 설명했다. 결과만 보여 주기보다 어떤 문제를 만났고 어떻게 수정했는지를 전하려 했다.",
          src: "/usmedical-presentation.mp4",
          poster: "/usmedical-presentation-poster.png",
        },
        {
          label: "JAPANESE PRESENTATION · 일본어 발표",
          title: "서툴러도 끝까지 내 말로 전한 발표",
          body: "머릿속의 생각을 일본어 문장으로 바꾸는 일이 쉽지 않았지만, 대본을 고치고 소리 내어 연습하며 끝까지 발표했다. 완벽함보다 전달하려는 태도가 중요하다는 것을 배운 시간이었다.",
          src: "/japanese-presentation.mp4",
          poster: "/japanese-presentation-poster.png",
        },
      ],
      playLabel: "발표 영상 재생",
    },
    life: {
      number: "05",
      kicker: "일본에서의 생활",
      title: "회사 밖에서도 매일이 작은 과제였다",
      paragraphs: [
        "쓰레기를 요일에 맞춰 분리해 내놓는 일, 처음 타 보는 노선을 갈아타는 일처럼 한국에서는 아무것도 아니었던 일들이 여기서는 하나하나 작은 과제였다. 혼자 장을 보고 밥을 해 먹고 생활비를 관리하면서, 그동안 당연하게 누렸던 것들을 새삼 돌아보게 됐다.",
        "가장 인상 깊었던 것은 ‘남에게 폐를 끼치지 않으려는’ 태도가 생활 전체에 배어 있다는 점이었다. 시간을 지키고, 조용한 곳에서 목소리를 낮추고, 어디에서나 정중하게 인사하는 모습이 처음에는 딱딱하게 느껴졌지만 서로를 편안하게 해 주는 배려라는 것을 알게 됐다.",
        "회사 사람들과 함께 식사한 시간에는 회의실에서 미처 나누지 못한 이야기를 편하게 들을 수 있었다. 일이 잘 풀리지 않은 날에도 다시 출근할 힘을 얻었던 따뜻한 기억이다.",
      ],
      caption: "회사 관계자들과 함께한 식사. 업무 밖에서 서로를 알아 가며 일본 생활에 조금씩 익숙해졌다.",
    },
    growth: {
      number: "06",
      kicker: "회고와 성장",
      title: "실력보다 먼저 달라진 것은 태도였다",
      quote: ["모르면 묻고,", "틀리면 고치면 된다."],
      paragraphs: [
        "처음에는 ‘실수하면 안 된다’는 생각에 몸이 굳어 있었다. 하지만 피드백을 받고 다시 고치는 일을 반복하며, 완벽한 사람이 되려 애쓰기보다 배우려는 자세를 가진 사람이 더 멀리 갈 수 있다는 것을 알게 됐다.",
        "일본어는 단순한 어학 능력이 아니라 일을 제대로 해내고 신뢰를 쌓는 도구였다. 피드백을 정확히 이해하지 못해 엉뚱한 부분을 고친 뒤부터는, 모르면 그 자리에서 ‘한 번 더 말씀해 주시겠습니까’라고 묻기로 했다. 그 짧은 문장을 꺼내는 용기가 나를 가장 많이 성장시켰다.",
        "영상은 홈페이지에 올라가 누군가에게 보여야 하고, 관리자 화면은 내가 떠난 뒤에도 사용되어야 하며, 패키지는 실제로 인쇄되어 사람에게 닿아야 한다. 만드는 순간에서 멈추지 않고 그 이후까지 생각하는 것이 진짜 일이라는 것을 배웠다.",
      ],
    },
    thanks: {
      number: "07",
      kicker: "감사 인사",
      title: "이 두 달을 가능하게 해 주신 분들께",
      body: "부족한 점이 많은 저를 처음부터 끝까지 따뜻하게 지도해 주신 US Medical Inc. 대표님과 직원 여러분께 진심으로 감사드립니다. 서툰 일본어를 끝까지 들어 주시고, 실수를 나무라기보다 다시 해 볼 기회를 주셨기에 이만큼 성장할 수 있었습니다.",
      jisa: "또한 일본에서 직접 일하고 생활하며 배울 수 있는 기회를 마련해 주신 JISA 인턴십 프로그램과 대학 SW 중심사업단 관계자 여러분께도 깊이 감사드립니다. 이곳에서 보낸 시간과 배움을 앞으로의 공부와 일에 오래 이어 가겠습니다.",
      sign: "2026 여름 · 실습생 임보현",
    },
    footer: "JISA 인턴십 체험 기록 · US Medical Inc. · 2026",
    top: "맨 위로",
  },
  ja: {
    shortTitle: "インターンシップ活動記録",
    languageLabel: "言語を選択",
    skip: "本文へ移動",
    nav: ["はじめに", "プロフィール", "仕事で学んだこと", "現場の記録", "日本での生活", "振り返り", "感謝"],
    eyebrow: "JISA INTERNSHIP · FIELD NOTES 2026",
    title: "日本で働き、暮らし、\nそして成長した\n8週間の記録",
    dek: "東京の企業で初めて働き、慣れない言葉で意見を交わし、一人で生活しながら学んだことを、そのまま記録しました。",
    meta: [
      ["実習生", "イム・ボヒョン · 朝鮮大学校 コンピュータ工学科"],
      ["実習企業", "US Medical Inc. · Tokyo"],
      ["実習期間", "2026. 06. 30 — 08. 29"],
    ],
    coverCaption: "2026年7月3日、US Medicalでの最初のオリエンテーション。聞き取れない言葉も多かったが、この会議室から二か月の記録が始まった。",
    intro: {
      number: "01",
      kicker: "実習を始めるにあたって",
      title: "慣れない会議室から始まった初日",
      quote: "「自分はここで何ができるのだろうか。」",
      paragraphs: [
        "初出勤の日の朝の緊張感は、今でもはっきりと覚えている。慣れない国の慣れない会社で、しかも拙い日本語で仕事をしなければならないという事実は、期待よりも不安として迫ってきた。最初の数日は会議の半分も聞き取れないまま、うなずくばかりだった。",
        "本実習では、US Medical Inc.の口腔ケアブランド「ポケデン（POKEDEN）」を担当した。広告動画を制作し、企業サイトへ掲載し、担当者が自ら管理できる画面を整え、最後には製品パッケージのデザインまで担当した。",
        "これは完成した成果だけを並べたポートフォリオではない。行き詰まった瞬間と解決していった過程、そして会社の外で日本の生活に慣れていった時間をまとめた体験報告書である。",
      ],
    },
    profile: {
      number: "02",
      kicker: "基本プロフィール",
      title: "実習を始めた時の自分",
      intro: "コンピュータ工学科で学んだWeb開発とUI/UXの知識を、実際の製品とサービスに応用した。授業で学んだ考え方が企業ではどのような基準で使われるのかを確かめ、不足している部分は実務の中で補っていった。",
      rows: [
        ["大学・学科", "朝鮮大学校 コンピュータ工学科"],
        ["実習期間", "2026年6月30日 — 8月29日・夏季8週間"],
        ["実習企業", "US Medical Inc.（東京）"],
        ["担当ブランド", "口腔ケアブランド ポケデン POKEDEN"],
        ["配属・担当分野", "広告動画・サイトへの動画掲載・インタラクション・管理画面・パッケージ"],
        ["日本語能力", "日常会話レベル・日本語での週次会議、フィードバック確認、現場発表を経験"],
        ["主催・支援", "大学SW中心事業団・JISA日本インターンシップ支援協会"],
      ],
      educationTitle: "大学で学んだこと",
      educationBody: "コンピュータ工学の授業とプロジェクトを通して、HTML・CSS・JavaScriptによるWeb画面の構築、ReactとTypeScriptによるコンポーネント単位の機能開発、利用者が情報を理解しやすい順序に整理するUI/UXの基礎を学んだ。今回の実習では、その知識を実際のブランドサイトと運用画面へつなげた。",
      skillsTitle: "身につけていた技術と、実際にできること",
      skills: [
        {
          name: "フロントエンド開発",
          tools: "HTML・CSS・JavaScript・React 19・TypeScript・Tailwind CSS v4・Vite",
          body: "レスポンシブなWeb画面を制作し、動画の再生・停止やホバーインタラクションを実装できる。PCとスマートフォンで表示が崩れないかを確認し、不具合を修正する作業も行った。",
        },
        {
          name: "UI/UX・運用画面",
          tools: "情報設計・レスポンシブUI・管理画面・ダッシュボード",
          body: "初めて使う人でも機能を見つけられるよう、情報の順序とボタンの配置を整理できる。担当者が開発者を介さずにコンテンツや問い合わせ状況を管理できる画面を設計した。",
        },
        {
          name: "動画・ビジュアルコンテンツ",
          tools: "動画企画・字幕・編集・AI画像／動画制作・パッケージ企画",
          body: "製品が使われる場面を物語として構成し、素材と字幕を作り、一本の広告動画に編集できる。対象に合わせて動画とパッケージの色、文言、雰囲気を調整する作業も経験した。",
        },
        {
          name: "テスト・問題解決",
          tools: "端末別確認・再生不具合のデバッグ・フィードバック反映",
          body: "機能が想定どおりに動かない時は、条件を分けて原因を探し、修正できる。完成後も実際の利用環境で確認し、会議で得たフィードバックを次の版へ反映する方法で仕事を進めた。",
        },
      ],
    },
    work: {
      number: "03",
      kicker: "仕事を通して学んだこと",
      title: "作り、直し、もう一度確かめた時間",
      intro: "担当した業務は五つだったが、過程はいつも似ていた。まず作り、会議でフィードバックを受け、原因を探して修正する。完成品よりも、その繰り返しの中で得た判断基準を中心にまとめた。",
      items: [
        {
          label: "WORK 01 · 動画",
          title: "製品広告動画の制作",
          body: "医療現場、災害時、訓練時、子ども、屋外活動など、製品が実際に使われる場面を分けて複数の動画を制作した。構成、素材、字幕、編集速度の調整まで担当した。",
          hard: "何日もかけて完成させた動画にも「展開が速い」「字幕が目に入らない」という修正依頼が戻ってきた。初めは自分の努力を否定されたように感じた。",
          learned: "修正を重ねるほど動画は明らかに良くなった。フィードバックとは否定ではなく、一人では見つけられない部分を代わりに見てもらうことだと理解した。",
        },
        {
          label: "WORK 02 · ウェブ",
          title: "制作した動画をホームページへ掲載",
          body: "トップ画面のどこに動画を置くか、自動再生や音をどう扱うかを決め、パソコンとスマートフォンの両方で表示を確認した。",
          hard: "動画を入れるとページが重くなり、スマートフォンでは画面が切れることもあった。良い動画でも、待ちきれず離脱されれば意味がないと実感した。",
          learned: "作ることと、実際に見せることは違う。表示速度や端末環境まで整えて初めて、成果物が役割を果たすと学んだ。",
          media: "/web-integration.jpg",
          mediaAlt: "ポケデンのウェブサイトに動画を掲載した画面",
          caption: "制作した動画をサイトへ掲載し、PCとスマートフォンで表示を確認した。",
        },
        {
          label: "WORK 03 · インタラクション",
          title: "マウスを載せると動画が再生される機能",
          body: "写真の上にマウスを載せると動画が自然に再生され、離すと止まる機能を制作した。操作がない時は五つの場面が自動で切り替わるようにした。",
          hard: "写真から動画へ移る時のちらつきや、素早くマウスを動かすと動画が重なって再生される問題が続いた。実習中で最も長く向き合った作業だった。",
          learned: "一人で最後まで解決した問題は忘れない。「分からない状態に耐える力」も実力の一部であることを初めて学んだ。",
          media: "/hover-site.jpg",
          mediaAlt: "マウスを載せると動画が再生されるウェブ画面",
          caption: "静止画と動画の切り替えが自然になるまで繰り返し調整した。",
        },
        {
          label: "WORK 04 · 運用",
          title: "担当者が自ら管理できる画面",
          body: "開発者を通さずに動画や画像を交換し、文言やお知らせを修正し、お問い合わせ件数を確認できるよう管理画面を整えた。",
          hard: "自分にとって使いやすいものと、他の人にとって使いやすいものは違った。作った本人には、初めて使う人の不便が見えにくい。",
          learned: "「自分が満足するか」より「受け取る人が使いやすいか」を先に考えるようになった。自分が去った後も使われ続ける画面だからだ。",
        },
        {
          label: "WORK 05 · パッケージ",
          title: "子ども向けとプレミアム製品パッケージ",
          body: "子ども向けは宇宙飛行士のキャラクターを中心に動画と雰囲気を揃え、プレミアム製品は贈答用を意識して落ち着いた印象にした。箱の寸法と各面の情報まで整理し、印刷用データへ仕上げた。",
          hard: "二つのパッケージが「同じ印象に見える」と言われた時が最も戸惑った。自分には良く見えても、見る人には対象の違いが伝わっていなかった。",
          learned: "自分の好みよりも「誰が見るのか」を先に考える習慣がついた。対象が変われば、色も文言も情報の順番も変える必要があった。",
          gallery: [
            ["/kids-package.jpg", "子ども向けポケデンのパッケージ", "子どもと保護者が理解しやすい明るいパッケージ"],
            ["/adult-package.jpg", "プレミアムポケデンのパッケージ", "贈答用を意識した落ち着いたプレミアムパッケージ"],
          ],
        },
      ],
    },
    field: {
      number: "04",
      kicker: "現場の記録",
      title: "言葉で説明してこそ、自分の仕事になった",
      intro: "成果を見せることと同じくらい難しかったのは、その理由と過程を説明することだった。以下は実際の現場で業務内容を報告し、日本語で発表した記録である。",
      videos: [
        {
          label: "US MEDICAL · 業務発表",
          title: "担当業務と成果をまとめて発表した日",
          body: "動画、ウェブ機能、管理画面、パッケージの仕事がどのようにつながったかを企業の方々へ説明した。完成品だけでなく、問題と修正の過程を伝えるよう努めた。",
          src: "/usmedical-presentation.mp4",
          poster: "/usmedical-presentation-poster.png",
        },
        {
          label: "JAPANESE PRESENTATION · 日本語発表",
          title: "拙くても最後まで自分の言葉で伝えた発表",
          body: "考えを日本語の文章へ変えることは難しかったが、原稿を直し、声に出して練習し、最後まで発表した。完璧さより、伝えようとする姿勢が大切だと学んだ時間だった。",
          src: "/japanese-presentation.mp4",
          poster: "/japanese-presentation-poster.png",
        },
      ],
      playLabel: "発表動画を再生",
    },
    life: {
      number: "05",
      kicker: "日本での生活",
      title: "会社の外でも、毎日が小さな課題だった",
      paragraphs: [
        "ごみを曜日に合わせて分別して出すこと、初めて乗る路線を乗り換えることなど、韓国では何でもなかったことが一つひとつ小さな課題だった。一人で買い物をし、食事を作り、生活費を管理する中で、これまで当たり前にしていたことを見つめ直した。",
        "最も印象に残ったのは「他人に迷惑をかけない」という姿勢が生活全体に根づいていたことだ。時間を守り、静かな場所では声を落とし、丁寧に挨拶を交わすことが、互いを心地よくする思いやりだと分かった。",
        "会社の方々との食事では、会議室では話せなかったことを気軽に聞くことができた。仕事がうまくいかなかった日にも、もう一度出勤する力をもらった温かい記憶である。",
      ],
      caption: "会社の方々との食事。仕事の外で互いを知りながら、日本での生活に少しずつ慣れていった。",
    },
    growth: {
      number: "06",
      kicker: "振り返りと成長",
      title: "能力より先に変わったのは、仕事への姿勢だった",
      quote: ["分からなければ尋ね、", "間違えれば直せばよい。"],
      paragraphs: [
        "最初は「失敗してはいけない」と身構えていた。しかしフィードバックを受けて直すことを繰り返す中で、完璧な人になろうとするより、学ぼうとする姿勢を持つ人の方が遠くまで進めると知った。",
        "日本語は単なる語学力ではなく、仕事を成し遂げ、信頼を築くための道具だった。フィードバックを正しく理解できず違う部分を直した経験から、分からない時はその場で「もう一度お願いできますか」と尋ねるようになった。その一言を出す勇気が、自分を最も成長させた。",
        "動画はサイトで見てもらい、管理画面は自分が去った後も使われ、パッケージは印刷されて人に届く。作った瞬間で止まらず、その先まで考えることが本当の仕事だと学んだ。",
      ],
    },
    thanks: {
      number: "07",
      kicker: "感謝の言葉",
      title: "この二か月を支えてくださった皆様へ",
      body: "至らない私を最初から最後まで温かくご指導くださったUS Medical Inc.の代表をはじめ、社員の皆様に心より御礼申し上げます。拙い日本語を最後まで聞き、失敗を咎めるよりもう一度挑戦する機会をくださったからこそ、ここまで成長することができました。",
      jisa: "また、日本で実際に働き、生活しながら学ぶ機会を設けてくださったJISAインターンシッププログラムと大学SW中心事業団の皆様にも深く感謝いたします。ここで過ごした時間と学びを、これからの勉強と仕事に必ず生かしてまいります。",
      sign: "2026年 夏 · 実習生 イム・ボヒョン",
    },
    footer: "JISAインターンシップ体験記録 · US Medical Inc. · 2026",
    top: "ページ上部へ",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("ko");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "ko" ? "일본에서 일하고, 생활하고, 성장한 8주의 기록" : "日本で働き、暮らし、成長した8週間の記録";
  }, [language]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    nodes.forEach((node) => node.classList.add("reveal-pending"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const sectionIds = ["intro", "profile", "work", "field", "life", "growth", "thanks"];

  return (
    <main id="top">
      <a className="skip-link" href="#content">{t.skip}</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.shortTitle}>
          <img src="/jisa-logo.png" alt="JISA" />
          <span>{t.shortTitle}</span>
        </a>
        <nav aria-label={t.shortTitle}>
          {t.nav.map((label, index) => (
            <a key={sectionIds[index]} href={`#${sectionIds[index]}`}>{label}</a>
          ))}
        </nav>
        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          <button type="button" className={language === "ko" ? "active" : ""} onClick={() => setLanguage("ko")} aria-pressed={language === "ko"}>KR</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === "ja" ? "active" : ""} onClick={() => setLanguage("ja")} aria-pressed={language === "ja"}>JP</button>
        </div>
      </header>

      <div id="content">
        <section className={`cover cover-${language}`} aria-labelledby="cover-title">
          <div className="cover-photo">
            <img src="/meeting.jpg" alt={t.coverCaption} />
          </div>
          <div className="cover-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="cover-title">
              {t.title.split("\n").map((line) => <span key={line}>{line}</span>)}
            </h1>
            <p className="cover-dek">{t.dek}</p>
            <dl className="cover-meta">
              {t.meta.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <p className="cover-caption"><span>FIG. 01</span>{t.coverCaption}</p>
          </div>
        </section>

        <article className="report">
          <section className="chapter" id="intro" aria-labelledby="intro-title" data-reveal>
            <ChapterMark number={t.intro.number} kicker={t.intro.kicker} />
            <div className="chapter-body narrative">
              <h2 id="intro-title">{t.intro.title}</h2>
              <blockquote>{t.intro.quote}</blockquote>
              {t.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="chapter" id="profile" aria-labelledby="profile-title" data-reveal>
            <ChapterMark number={t.profile.number} kicker={t.profile.kicker} />
            <div className="chapter-body">
              <h2 id="profile-title">{t.profile.title}</h2>
              <p className="chapter-intro">{t.profile.intro}</p>
              <dl className="profile-list">
                {t.profile.rows.map(([label, value]) => (
                  <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
              <div className="education-note">
                <p className="profile-subtitle">{t.profile.educationTitle}</p>
                <p>{t.profile.educationBody}</p>
              </div>
              <div className="skill-record">
                <p className="profile-subtitle">{t.profile.skillsTitle}</p>
                <div className="skill-list">
                  {t.profile.skills.map((skill, index) => (
                    <section key={skill.name}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{skill.name}</h3>
                        <p className="skill-tools">{skill.tools}</p>
                        <p>{skill.body}</p>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="chapter work-chapter" id="work" aria-labelledby="work-title">
            <ChapterMark number={t.work.number} kicker={t.work.kicker} />
            <div className="chapter-body">
              <div data-reveal>
                <h2 id="work-title">{t.work.title}</h2>
                <p className="chapter-intro">{t.work.intro}</p>
              </div>
              <div className="work-list">
                {t.work.items.map((item, index) => (
                  <section className="work-story" key={item.label} data-reveal>
                    <p className="story-label">{item.label}</p>
                    <h3><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</h3>
                    <p>{item.body}</p>
                    <p><strong>{language === "ko" ? "어려웠던 점." : "難しかった点。"}</strong> {item.hard}</p>
                    <p><strong>{language === "ko" ? "그때 배운 것." : "そこで学んだこと。"}</strong> {item.learned}</p>
                    {"media" in item && item.media ? (
                      <figure className="story-figure">
                        <img src={item.media} alt={item.mediaAlt} />
                        <figcaption>{item.caption}</figcaption>
                      </figure>
                    ) : null}
                    {"gallery" in item && item.gallery ? (
                      <div className="story-gallery">
                        {item.gallery.map(([src, alt, caption]) => (
                          <figure key={src}><img src={src} alt={alt} /><figcaption>{caption}</figcaption></figure>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter field-chapter" id="field" aria-labelledby="field-title">
            <ChapterMark number={t.field.number} kicker={t.field.kicker} />
            <div className="chapter-body">
              <div data-reveal>
                <h2 id="field-title">{t.field.title}</h2>
                <p className="chapter-intro">{t.field.intro}</p>
              </div>
              <div className="video-journal">
                {t.field.videos.map((video, index) => (
                  <figure key={video.src} data-reveal>
                    <div className="video-frame">
                      <video controls playsInline preload="metadata" poster={video.poster} aria-label={`${video.title} · ${t.field.playLabel}`}>
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                    <figcaption>
                      <span>{video.label} · 0{index + 1}</span>
                      <h3>{video.title}</h3>
                      <p>{video.body}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="chapter life-chapter" id="life" aria-labelledby="life-title">
            <ChapterMark number={t.life.number} kicker={t.life.kicker} />
            <div className="chapter-body" data-reveal>
              <h2 id="life-title">{t.life.title}</h2>
              <div className="life-copy">
                {t.life.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <figure className="life-figure">
                <img src="/team-dinner.jpg" alt={t.life.caption} />
                <figcaption><span>FIG. 02</span>{t.life.caption}</figcaption>
              </figure>
            </div>
          </section>

          <section className="chapter growth-chapter" id="growth" aria-labelledby="growth-title" data-reveal>
            <ChapterMark number={t.growth.number} kicker={t.growth.kicker} />
            <div className="chapter-body">
              <h2 id="growth-title">{t.growth.title}</h2>
              <blockquote>{t.growth.quote.map((line) => <span key={line}>{line}</span>)}</blockquote>
              <div className="growth-copy">
                {t.growth.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>
        </article>

        <section className="thanks" id="thanks" aria-labelledby="thanks-title">
          <div className="thanks-mark" aria-hidden="true">{t.thanks.number}</div>
          <div className="thanks-copy" data-reveal>
            <p className="eyebrow">{t.thanks.kicker}</p>
            <h2 id="thanks-title">{t.thanks.title}</h2>
            <p>{t.thanks.body}</p>
            <p>{t.thanks.jisa}</p>
            <p className="signature">{t.thanks.sign}</p>
          </div>
        </section>
      </div>

      <footer>
        <p>{t.footer}</p>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </main>
  );
}

function ChapterMark({ number, kicker }: { number: string; kicker: string }) {
  return (
    <div className="chapter-mark" aria-hidden="true">
      <span>{number}</span>
      <p>{kicker}</p>
    </div>
  );
}
