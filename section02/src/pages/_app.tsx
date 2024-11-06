import GlobalLayout from "@/components/layouts/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

// 어떤 페이지를 접속하든 루트 컴포넌트인 App 컴포넌트에서 Component로 들어옴
export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
