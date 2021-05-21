//constructor
class ClassCheck{
    constructor(first,last,age,height,address){
    this.firstName=first;
    this.lastName=last;
    this.PersonAge=age;
    this.PersonHeight=height;
    this.PersonAddress=address;
}
}

var person1=new ClassCheck("Ram"," Sh","56","5.10ft","xyz");
var person3=new ClassCheck("Sita"," LOL","40","5.7ft","mno");

document.getElementById("disp").innerHTML=person1.firstName+person1.lastName+ " is "+person1.PersonAge+ 
" and lives in "+person1.PersonAddress + 
". "+person3.firstName+person3.lastName+ " is "+person3.PersonAge+ " and lives in "+person3.PersonAddress;

class InheritCheck extends ClassCheck{
    constructor(first,last,age,height,address,gender){
    super(first,last,age,height,address);
    this.gender=gender;
    }

    displ(){
        return this.firstName+" is "+ this.gender;
    }
}

var person2=new InheritCheck("Hari"," J.K.","35","5.7ft","abc","male");
document.getElementById("disp1").innerHTML=person2.displ();