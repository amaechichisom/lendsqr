// RESPONSE META TYPES

export interface UserDataType {
    createdAt: number;
    name: string;
    avatar: string;
    phoneNumber: string;
    children: number;
    maritalStatus: string;
    email: string;
    typeOfResidence: string;
    bvn: number;
    gender: string;
    levelOfEducation: string;
    employmentStatus: string; // Typo in "employmentStatus" corrected here
    officeEmail: string;
    monthlyIncome: string;
    sectorOfEmployment: string;
    loanRepayment: string;
    durationOfEmployment: number;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantorName: string;
    guarantorEmail: string;
    guarantorPhoneNumber: string;
    guarantorRelationship: string;
    id: string;
  }
  

export interface UserData {
    success: boolean;
    data: UserDataType;
}

// STATE
interface AsyncState<T> {
loading: boolean;
error: string | null;
data: T | null;
}

export interface UserState extends AsyncState<UserData['data']> {}

export interface ApiState {
    user: UserState;
}