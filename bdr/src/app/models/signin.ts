export interface Signin {
    // isSuccess: any;
    email: string;
    password: string;
};

export interface SigninResponse {
    // isSuccess: any;
    token: string;
    userId: string;
};
export interface SignupData {
    status: number;
    message: string;
};



