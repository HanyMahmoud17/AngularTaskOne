import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    Products:Array<any>= [
        {
            id: 1,
            name: "Lenvo thinpad X230",
            price: 100000,
            quantity: 10,
            categoryID: 1,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 2,
            name: "Dell",
            price: 2002020,
            quantity: 20,
            categoryID: 1,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 3,
            name: "Lenovo Tab",
            price: 100888,
            quantity: 10,
            categoryID: 2,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 4,
            name: "Samsung Tab",
            price: 1000000,
            quantity: 10,
            categoryID: 2,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 5,
            name: "Samsung note 10",
            price: 100777,
            quantity: 10,
            categoryID: 3,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 6,
            name: "Samsung S10",
            price: 100,
            quantity: 10,
            categoryID: 3,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 7,
            name: "tochiba Utlra",
            price: 60000,
            quantity: 14,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 8,
            name: "Apple Utlra",
            price: 7800060,
            quantity: 6,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 9,
            name: "test Utlra",
            price: 7800060,
            quantity: 3,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 10,
            name: "jhgfjxz",
            imgURL: "https://picsum.photos/200",
            quantity: 33,
            price: 44444444,
            categoryID: 1
        },
        {
            name: "fsdjhfgsdjhkgfsh",
            price: 7800060,
            quantity: 3,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4,
            id: 11
        }
    ]
    Categories:Array<any> =[
        {
          id: 0,
          name: "All",
          desciption: "This is description"
        },
        {
          id: 1,
          name: "Laptops",
          desciption: "This is description"
        },
        {
          id: 2,
          name: "Tablets",
          desciption: "This is description"
        },
        {
          id: 3,
          name: "Mobiles",
          desciption: "This is description"
        },
        {
          id: 4,
          name: "Accessories",
          desciption: "This is description"
        }
      ]
}


