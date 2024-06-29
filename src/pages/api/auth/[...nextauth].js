import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';    // 구글 소셜로그인
import GithubProvider from 'next-auth/providers/github';        // 깃허브 소셜로그인
import CredentialsProvider from 'next-auth/providers/credentials';      // 내 DB 로그인

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: '',               // 구글 클라이언트ID
            clientSecret: '',           // 구글 클라이언트 보안 비밀번호
        }),
        GithubProvider({
            clientId: '',               // 깃허브 클라이언트ID
            clientSecret: '',           // 깃허브 클라이언트 비밀번호
        }),
        CredentialsProvider({
            
        }),
    ],
    secret: 'anything'
};

export default NextAuth(authOptions);

// 소셜로그인 설정
// npm install next-auth

// 구글로그인 (2024.06 기준)
/* 
    https://console.cloud.google.com/ -> API 및 서비스 -> OAuth 동의 화면 (External 버튼 클릭)
    사용자 인증 정보 -> 사용자 인증 정보 만들기 -> OAuth 2.0 클라이언트 생성 -> 웹 애플리케이션 선택 -> 이름 입력 -> 승인된 리디렉션 URI 추가
    http://localhost:3000/api/auth/callback/google -> 만들기
    클라이언트ID 와 클라이언트 보안 비밀번호 메모해놓기
*/

// 깃허브 로그인 (2024.06 기준)
/*
github 로그인 -> 우측 프로필 아이콘 클릭 -> Settings -> Developer settings -> OAuth Apps -> New OAuth App
-> Application name 입력 -> http://localhost:3000/ 입력 (실제 사이트도 있으면 실제사이트 URL로 추가하기)
-> Generate a new client secret 버튼 클릭
클라이언트ID와 클라이언트 비밀번호 메모해놓기
*/

// URI(Uniform Resource Identifier)와 URL(Uniform Resource Locator)

