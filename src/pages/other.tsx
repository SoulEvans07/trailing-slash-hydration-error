import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocale } from "../utils/locale";

export default function OtherPage() {
  const { t } = useTranslation("translations");

  return (
    <div>
      <h1>Othe {t("test")}</h1>
      <Link href="/">Home</Link>
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
