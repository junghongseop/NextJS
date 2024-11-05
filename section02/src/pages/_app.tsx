import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// React의 App 컴포넌트와 같이 다른 컴포넌트의 부모 컴포넌트 역할을 함
// _app.tsx은 루트 컴포넌트 역할을 함

// 여기에 컴포넌트나 스타일을 추가하면 전역으로 적용됨
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
  };

  // test 페이지에서는 프리페칭이 이루어지지 않는 이유
  // 다른 페이지는 Link로 연결되어 있어서 프리페칭이 가능하지만
  // test는 프로그래메틱한 코드로 작성되어 있어 프리페칭이 안됨 => useEffect를 사용하여 /test에서 프리패칭이 가능하도록 함

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href="/">index</Link>
        &nbsp;
        {/* Link 태그에서 prefetch를 false라고 하면 prefech가 이루어지지 않음 */}
        <Link href="/search" prefetch={false}>search</Link>
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
