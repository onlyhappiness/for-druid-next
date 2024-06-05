const PATH = {
  HOME: "/",

  FEED: {
    ADD: "/feed/add",
    NEW: "/feed/add/new",
    DETAIL: "/feed/:id",
  },

  CHAT: "/chat",

  FAVORITE: "/favorite",

  EXPLORE: "/explore",

  MY: {
    PROFILE: "/my",
    SETTINGS: "/my/settings",
  },

  SEARCH: "/search",

  // support
  SUPPORT: {
    INDEX: "/support",
    NOTICE: "/support/notice",
    FAQ: "/support/faq",
  },

  // auth
  AUTH: {
    SIGNIN: "/account/signin",
    SIGNUP: "/account/signup",
    STEP_ONE: "/account/signup/step-one",
    STEP_TWO: "/account/signup/step-two",
    SET_NAME: "/account/set-name",
  },
};

const ABOUT = [
  {
    label: "드루이드 다이어리 소개",
    href: "",
  },
  {
    label: "공지사항",
    href: "/support/notice",
  },
];

const SERVICES = [
  {
    label: "자주 묻는 질문",
    href: "/support/faq",
  },
  {
    label: "고객센터",
    href: "",
  },
];

const SETTING_ALARM = [{ label: "알림", href: "" }];

const SETTING_INFO = [
  {
    label: "이용 약관",
    href: "",
  },
  {
    label: "개인정보처리방침",
    href: "",
  },
];

export { ABOUT, PATH, SERVICES, SETTING_ALARM, SETTING_INFO };
