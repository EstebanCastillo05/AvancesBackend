import { Table, Column, Model, DataType, AutoIncrement, Unique } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: false,

})

export class User extends Model {
    @Column ({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;


    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true,
    })
    username!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    names!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    lastnames!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 18,
        
        }
    })
    age!: number;

    @Column({
        type: DataType.ENUM("Masculino", "Femenino"),
        allowNull: false,
    })
    gender!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true,
        validate : {
            isEmail: true,
        }
    })
    email!: string;

}