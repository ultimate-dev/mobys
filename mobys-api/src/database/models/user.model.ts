import { Table, Column, Model } from 'sequelize-typescript';

@Table({ modelName: 'user' })
export class User extends Model {
  @Column
  name: string;
}
