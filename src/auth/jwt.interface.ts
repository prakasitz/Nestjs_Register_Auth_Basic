export interface jwtBody {
    aud: string
    sub: string
    commonid: string
    commonname: string
    displayname: string
}

export type jwtPayload = jwtBody