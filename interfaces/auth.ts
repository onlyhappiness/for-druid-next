// 회원가입
export interface ISignup {
  name: string;
  nickname: string;
  phone: string;
  password: string;
}

// 로그인
export interface ILogin {
  phone: string;
  password: string;
}
