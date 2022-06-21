export interface UserData {
  birthday: string;
  ci: string;
  createdAt: string;
  di: string;
  name: string;
  isDeleted: string;
  gender: string;
  nickname: string;
  phoneNumber: string;
  role: string;
  telecomCode: string;
  updatedAt: string;
  userId: number;
}

export interface UserGold {
  bonusGold: number;
  created_at: string;
  gold: number;
  id: number;
  updated_at: string;
}

export interface UserGoldHistory {
  id: number;
  amount: number;
  bonusAmount: number;
  category: string;
  code: string;
  created_at: string;
  datetime: string;
  type: string;
}

//* Login Container & Presenter
export interface UserAuth {
  send: boolean;
  ok: boolean;
  code: string;
  timer: boolean;
  error: boolean;
  timeout: boolean;
}

export interface UserLoginInput {
  name: string;
  phone: string;
  authCode: string;
}

// * goldHistory
export interface GoldHistory {
  amount: number;
  bonusAmount: number;
  category: string;
  code: string;
  created_at: string;
  datetime: string;
  id: number;
  isExpired: number;
  payment: never[];
  type: string;
  updated_at: string;
  userId: number;
}

export interface TudalUsHistory {
  created_at: string;
  endDate: string;
  id: number;
  startDate: string;
  subscription: boolean;
  type: string;
  updated_at: string;
  userId: number;
}
