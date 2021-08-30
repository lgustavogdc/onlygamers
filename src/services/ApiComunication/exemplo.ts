import Account from "../../models/account";
import AxiosAdapter from "./AxiosAdapter";

export class AccountService {
  async getAccountById (userId: string): Promise<Account> {
    const fetcher = new AxiosAdapter.get<Account>()

    const response = await fetcher.get({
      url: `/account/${userId}s`
    })

    return response.body
  }
}
