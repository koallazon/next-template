/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true, // 리액트 엄격모드 활성화
  poweredByHeader: false, // 보안 취약점으로 취급되는 X-Powered-By 헤더 제거
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 무시, 일반적으로는 빌드시 ESLint도 같이 실행된다. 별도의 CI과정에서 작동하도록 만들어 빌드를 더욱 빠르게 하기 위함
  },
  styledComponents: true, // swc가 styled-components를 더 빠르게 변환한다.
}

module.exports = nextConfig
