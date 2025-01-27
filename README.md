# [yju-portfolio](https://yju-portfolio.vercel.app)

### 웹으로 만든 Frontend 포트 폴리오

###### 2024.01

###### 1인 프로젝트

## 📌 Summary

프론트엔드 개발자로서 역량을 효과적으로 보여줄 수 있는 방법을 고민한 끝에, 웹사이트 형태의 포트폴리오를 제작하였다.

- **Next.js**를 사용하여 서버 사이드 렌더링(**SSR**)과 클라이언트 사이드 렌더링(**CSR**)을 적절히 혼합.
- 프로젝트 및 개인 이력을 한눈에 확인할 수 있도록 직관적인 **UI**와 **UX**를 제공.

  - 화면 크기(모바일 및 데스크탑)와 시스템 컬러 모드(다크 모드 및 라이트 모드)에 따른 **반응형** 디자인을 중심으로 웹사이트를 설계하고 구현하였다.
  - 모바일에서 body에 스크롤이 있어야 주소창이 숨겨졌고, 다른 방법으로 숨길 수 없어서 기존 디자인에서 갈아 엎었다.

- 스타일링은 **Sass**를 사용해 직관적이고 효율적으로 구현.

  - if 문과 for 문 등을 이용하여 애니메이션을 하드코딩 없이 만들 수 있었다.

- `framer-motion`와 같은 라이브러리를 사용하지 않고 JS와 CSS로 **직접 애니메이션 구현**.

## 🔨 Technology Stack(s)

| Stack                                                                                                 | Version  | etc.       |
| ----------------------------------------------------------------------------------------------------- | -------- | ---------- |
| <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white">       | `15.1.4` | App Router |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black">           | `19.0.0` |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"> | `5`      |
| <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white">             | `1.83.3` |

## ⚙️ Setup & Usage

```bash
# Install Packages
npm install

# Run Frontend Server
npm run dev
```
