import { ApiProperty } from "@nestjs/swagger";
import { jwtBody } from "src/auth/jwt.interface";
  
export class ResponseJWTBody implements jwtBody {
    @ApiProperty({ description: 'The audience' })
    aud: string;
  
    @ApiProperty({ description: 'The subject' })
    sub: string;
  
    @ApiProperty({ description: 'The common ID' })
    commonid: string;
  
    @ApiProperty({ description: 'The common name' })
    commonname: string;
  
    @ApiProperty({ description: 'The display name' })
    displayname: string;
  }
  
export class ResponseAuthLogin {
    @ApiProperty({ description: 'The access token' })
    access_token: string;
}