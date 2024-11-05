import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

// React의 App 컴포넌트와 같이 다른 컴포넌트의 부모 컴포넌트 역할을 함
// _app.tsx은 루트 컴포넌트 역할을 함

// 여기에 컴포넌트나 스타일을 추가하면 전역으로 적용됨
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
  };

  return (
    <>
      <header>
        <Link href="/">index</Link>
        &nbsp;
        <Link href="/search">search</Link>
        &nbsp;
        <Link href="/book/1">book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
