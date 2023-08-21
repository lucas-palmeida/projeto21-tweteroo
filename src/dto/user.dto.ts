import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class SignUpUserDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsUrl()
    @IsNotEmpty()
    avatar: string;
}