/** @type {import('next').NextConfig} */
const config = {
  env: {
    OPENAI_KEY: process.env.OPENAI_KEY,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/proxy",
      },
    ];
  },
};

export default config;
