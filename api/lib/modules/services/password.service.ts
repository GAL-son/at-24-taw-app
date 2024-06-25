import PasswordModel from '../schemas/password.schema';
import bcrypt from 'bcrypt';

class PasswordService {
    public async createOrUpdate(data: any) {
        const result = await PasswordModel.findOneAndUpdate({ userId: data.userId }, { $set: { password: data.password } }, { new: true });
        if (!result) {
            const dataModel = new PasswordModel({ userId: data.userId, password: data.password });
            return await dataModel.save();
        }
        return result;
    }

    public async authorize(userId: string, password: string) {
        try {
            const passworddata = await PasswordModel.findOne({ userId: userId });
            console.log(passworddata);
            console.log(password);
            

            const result = await bcrypt.compare(password, passworddata.password);

            return result;
        } catch (error) {
            console.error('Wystąpił błąd podczas tworzenia danych:', error);
            throw new Error('Wystąpił błąd podczas tworzenia danych');
        }

    }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('hash', hashedPassword)
        return hashedPassword;
    }

    public async getUserPassword(id: string) {
        try {
            const result = await PasswordModel.findOne({ userId: id }, "password");
            if (result) {
                return
            }
        } catch (error) {
            console.error("Failed fetching password");
            throw new Error("Failed fetching password");
        }
    }
}



export default PasswordService;