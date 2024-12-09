import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocale } from "../utils/locale";

export default function Home() {
  const { t } = useTranslation("translations");

  return (
    <div>
      <h1>Home {t("test")}</h1>
      <Link href="/other">Other</Link>
    </div>
  );
}

export const getServerSideProps = (async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(getLocale(ctx), ["translations"])),
    },
  };
}) satisfies GetServerSideProps;
