import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <Navigation />

      {children}

      <Footer />
    </NextIntlClientProvider>
  );
}