export interface TokenData {
    access_token: string;
    token_type: TokenType;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export type TokenType = "Bearer";

export interface TokenResponse {
    data: TokenData;
}
