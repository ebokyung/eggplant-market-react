import React from 'react';
import { Helmet } from 'react-helmet-async';

// 배포 후 절대경로로 변경
export function Meta({ title }) {
  return (
    <Helmet>
      <title>{`${title} | `}가지마켓</title>
      <link rel="icon" href="../assets/favicon.ico" />
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="바자회, 플리마켓, 환경, 재활용, 나눔, 기부, 중고거래" />
      <meta
        name="description"
        content="'가치를 지켜라!' 가지마켓은 플리마켓 등 나눔과 기부 관련 정보를 공유하는 SNS입니다. 중고거래를 하면서 환경과 경제적으로도 유익함을 누릴 수 있습니다. 함께 가치를 지켜가며 더 나은 세상을 만들어가보세요."
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="가지마켓" />
      <meta
        property="og:description"
        content="'가치를 지켜라!' 가지마켓은 플리마켓 등 나눔과 기부 관련 정보를 공유하는 SNS입니다. 중고거래를 하면서 환경과 경제적으로도 유익함을 누릴 수 있습니다. 함께 가치를 지켜가며 더 나은 세상을 만들어가보세요."
      />
      <meta property="og:image" content="../assets/og(800x400).png" />
      <meta property="og:url" content="" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="가지마켓" />
      <meta
        property="twitter:description"
        content="'가치를 지켜라!' 가지마켓은 플리마켓 등 나눔과 기부 관련 정보를 공유하는 SNS입니다. 중고거래를 하면서 환경과 경제적으로도 유익함을 누릴 수 있습니다. 함께 가치를 지켜가며 더 나은 세상을 만들어가보세요."
      />
      <meta property="twitter:image" content="../assets/og(800x400).png" />
      <meta property="twitter:url" content="" />
    </Helmet>
  );
}
