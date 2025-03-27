# [yju-portfolio](https://yju-portfolio.com)

### 웹으로 제작한 Frontend 포트 폴리오

###### 2024.01

###### 1인 프로젝트

## 📌 Summary

프론트엔드 개발자로서 역량을 효과적으로 보여줄 수 있는 방법을 고민한 끝에, 웹사이트 형태의 포트폴리오를 제작

- Next.js 로 SEO 에 유리

  - 구글, 네이버에 [‘양정운 포트폴리오’, ‘개발자 양정운’, ‘프론트 양정운’] 검색 시 1면 1열에 배치

- SCSS 로 효율적이고, 유지보수에 유리한 스타일링

  - 공통되는 스타일을 ‘mixin’ 으로 재사용성을 높임

  - 로딩 애니메이션의 %를 ‘for’, ‘if’ 로 하드코딩 없이 구현

  - 반복되는 변수를 ’each’ 로 하드코딩 없이 선언

- 바닐라JS 구현

  - 기본 동작 원리를 이해하기 위해 resize, scroll 등을 바닐라JS 로 구현

- Zustand 로 가볍고 빠른 상태 관리

  - Parallel Routes 로 띄운 모달에 상태를 공유

- 반응형

  - 데스크탑에선 skill 을 hover 시 확장에서 모바일에선 클릭 시 확장

  - prefers-color-scheme 에 따라 색상 변경

## Troubleshooting

- 모바일에서 body에 스크롤이 있어야 주소창이 숨겨졌고, 다른 방법으로 숨길 수 없어서 기존 레이아웃에서 body에 스크롤이 가능하게 갈아엎음

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
