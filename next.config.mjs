/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tong.visitkorea.or.kr",
        port: "", // 기본 포트를 사용하는 경우 빈 문자열
        pathname: "/**", // 모든 경로를 허용
      },
    ],
  },
};

export default nextConfig;
