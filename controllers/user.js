//create new controller for user

export class userCOntroller {
  async register(req, res) {
    try {
      //declare the success case
    } catch (error) {
      // declare function register failed nya seperti apa
    }
  }

  async login(req, res) {
    try {
      //validate email dan pswd input
    } catch (error) {
      //declare the failure case
    }
  }
  /**
   * misal ada 100 user, skip, limit, page, pageSize,
   */
  async getAlluser(skip, limit) {
    //decalre the skip limir,
    //findAll
    const data = this.userModel.findAll();
    //return all the data after using pagination
    return data;
  }
}
