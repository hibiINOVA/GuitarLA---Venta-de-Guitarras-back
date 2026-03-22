import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'guitarra',
    timestamps: false
})
class Guitarra extends Model {

    @Column({
        type: DataType.STRING(100)
    })
    declare nombre: string

    @Column({
        type: DataType.TEXT
    })
    declare descripcion: string

    @Column({
        type: DataType.INTEGER
    })
    declare precio: number

    @Column({
        type: DataType.STRING(255)
    })
    declare img: string
}

export default Guitarra