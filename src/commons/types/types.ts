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
