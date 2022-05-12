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

export type IRefreshToken = Omit<TokenData, "refresh_token">

export interface RefreshTokenResponse {
    data: IRefreshToken
}
