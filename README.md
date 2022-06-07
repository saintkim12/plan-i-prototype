# plan-i-prototype
(\[Demo\])[https://saintkim12.github.io/plan-i-prototype]

## 이게 뭐야?
- 개발중이었던 모 사이트의 프로토타입 페이지입니다.
- 일부 퍼블리싱만 되어 있고, 대부분의 기능이 구현되어 있지 않습니다만, React/GoogleApi 등 기능 메모용으로 남겨둡니다.

## 개발 언어 및 사용 기술은?
- [React 18](https://reactjs.org), [KO](https://ko.reactjs.org)
- Typescript
- Redux
- [Styled Component](https://styled-components.com)
- [Vitejs](https://vitejs.dev)
- Google API(OAuth 2.0 Authentication, Calendar 등)
- [bulma](https://bulma.io)
- 그 외는 (package.json)[./prototype-react/package.json] 참고

## 그 외 참고사항은?
- 대부분 API Call 방식으로 작동하도록 설계되었습니다(프로토타입이라서).
    - 현재는 자체 백엔드 서버 없이 작동
- 구글 로그인 시 신뢰할 수 없는 개발자 및 특정 권한(calendar)을 요구하는데 실제로 사용하지는 않습니다.(미개발)
    - 신뢰할 수 없는 개발자 관련해서는 '고급'을 눌러 넘어갈 수 있습니다.
    - 구글 메일?등을 통해 권한을 허용했다고 알림이 갈 수 있습니다.
    - 불안하시면 구글 로그인 대신 (그냥) 로그인 버튼도 사용 가능합니다.(가짜 로그인)
