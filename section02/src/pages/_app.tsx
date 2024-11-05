import "@/styles/globals.css";
import type { AppProps } from "next/app";

// React의 App 컴포넌트와 같이 다른 컴포넌트의 부모 컴포넌트 역할을 함
// _app.tsx은 루트 컴포넌트 역할을 함

// 여기에 컴포넌트나 스타일을 추가하면 전역으로 적용됨
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
