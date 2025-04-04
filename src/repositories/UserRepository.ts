import { User} from "../models/User";

export class UserRepository {

    async findALL(): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<User | null > {
        return await User.findByPk(id);
    }

    async validarLogin(username: string, password: string): Promise<User | null> {
        const user = await User.findOne({ where: { username } });
        if (!user || user.password !== password) {
            return null;
        }
        return user;
    }

    async create (userData: Partial<User>): Promise<User> {
        return await User.create(userData);
    }

    async update (id: number, userData: Partial<User>): Promise<[number]> {
        return await User.update(userData, { where: { id } });
    }

    async delete (id: number): Promise<number> {
        return await User.destroy({where : {id} });
    }

}
