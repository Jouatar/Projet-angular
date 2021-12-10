export class User {
    private name: String;
    private pkCoin: number;
    private token : String = "";
    private deck : Array<String> = [];

    constructor(
      private usn: String,
      private coin: number
      ) {
        this.name = usn;
        this.pkCoin = coin;
      }

    getName(){
      return this.name;
    }

    getCoin(){
      return this.pkCoin;
    }

    getToken(){
      return this.token;
    }

    getDeck(){
      return this.deck;
    }

    setToken(str: String){
      this.token = str;
    }


}
