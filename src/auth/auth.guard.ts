import { AuthGuard } from "@nestjs/passport";

export class UserAuthGuard extends AuthGuard('user-guard'){}
