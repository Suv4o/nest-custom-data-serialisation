import { Expose } from 'class-transformer';

export class SerializeUserDto {
  @Expose()
  uid: string;

  @Expose()
  email: string;

  @Expose()
  displayName: string;
}
