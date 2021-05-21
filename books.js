class Books{
    constructor(name,author,pages,ISBN){
        this.BookName=name;
        this.BookAuthor=author;
        this.BookISBN=ISBN;
        this.BookPages=pages;

    }
    
    show(){
        return this.BookName+" is written by "+ this.BookAuthor; 
    }

    show1(){
        return this.BookName+" has pages- "+ this.BookPages +" and ISBN-"+this.BookISBN;
    }
}

class Genres extends Books{
    constructor(name,author,genre){
        super(name,author)
        this.genre=genre;
    }
}

var book1=new Genres("Mercy","Jodi Picoult","mystery");

document.getElementById("disp").innerHTML=book1.show()+" which falls under genre "+book1.genre;

class Price extends Books{
    constructor(name,pages,ISBN,price){
        super(name,pages,ISBN)
        this.BookPrice=price;
    }
}

var book1=new Price("Mercy","","400","FI1034","560");
document.getElementById("disp1").innerHTML=book1.show1()+" and price:Rs."+book1.BookPrice;