import { Html, Head, Main, NextScript } from "next/document";

// _document.tsx은 모든 페이지에 공통적으로 되어야 하는 이 Next.js의 HTML 코드를 설정하는 컴포넌트
// 리액트의 index.html과 거의 비슷한 역할을 함
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
