import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تحويل المشروع إلى static files
  output: "export",

  // المسار الي رفعتِ فيه المشروع على cPanel
  basePath: "/support2",

  // يحل مشكلة /ar تجي تلقائي
  i18n: undefined,

  // مهم للصور تشتغل بدون مشاكل
  images: {
    unoptimized: true,
  },

  // يمنع trailing slash يسبب مشاكل
  trailingSlash: true,
};

export default nextConfig;