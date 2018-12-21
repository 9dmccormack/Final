interface Payment{
    amount:number;
    payType:string;
    account:string;
    code:string;

};



abstract class Card{
    name:string;
    number:string;
    pinn:string;
    limit:number;
    balance:number;

    constructor(na, num, pin, lim){
        this.name=na;
        this.number=num;
        this.pinn=pin;
        this.limit=lim;
        this.balance= 0;
    };
};



class Debit extends class Card{

    name: string;
    number: string;
    pinn: string;
    limit: number;
    balance: number;


    constructor(na, num, pin, lim){
     super(na, num, pin, lim);
    }

    pay(amount:number):Payment{
        if(this.balance + amount < this.limit){
            return{
                amount:amount,
                payType: "Debit",
                account: this.number,
                code: this.pinn
            }
        }
    }
}


class Credit extends class Card{

    name: string;
    number: string;
    pinn: string;
    limit: number;
    balance: number;


    constructor(na, num, pin, lim){
        super(na, num, pin, lim);
    this.intrest;

    pay(amount:number):Payment{
        if(this.balance + amount < this.limit){
            return{
                amount: amount,
                payType: "Credit",
                account: this.number,
                code: this.pinn
            }
        }
    };

    intrest(){
        if(this.balance < 0{
            this.over = this.over * this.intrest+1;
        }
        return this.over;
    };
}
