import { Component, OnInit} from '@angular/core';
import { GetListDataService } from "../services/get-list-data.service"

@Component({

  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrl: './storage-list.component.scss'
})



export class StorageListComponent {
  currentDate = new Date;
  //invoiceDate = this.currentDate.getFullYear() + "-" + this.currentDate.getMonth() + "-" + this.currentDate.getDate();
  invoiceDate = "0000-00-00"

  dataFromDB = new Array<any>();
  productFromDB = new Array<any>();
  order = {
    date: "",
    dateOperation: "",
    recipient: "",
    Responsible: "",
    ProductPosition: "",
    Units:"kg, quantity, liter",
    Value: "",
    ProductPrice: "",
    SummaryPrice: "",
    SmPriceTramsctription: "",

    id: 1, name: ""};

  constructor(private getDataService: GetListDataService){}
  ngOnInit(): void {
    this.getDataService.getProducts().subscribe((data) => {
      this.dataFromDB = data;
      console.log(this.dataFromDB[0]);
      console.log(typeof(this.dataFromDB));
      let i = 0;
      for(let item of this.dataFromDB){
        this.productFromDB[i] = item;
        i++;
      }
      console.log(this.productFromDB);
    })
  }



  product = new Array();

  onSelected(value: string): void {
    this.product = this.productFromDB.filter((item) => item == value);
    this.order.date = this.invoiceDate;
    console.log(this.order.ProductPosition = this.product[0][1] );
  }

  console = console;

}
/*
1. Дата документа: что бы подтягивалось с системы в момент формирования (с возможностью дописать вручную если задним числом)
2. Дата операции: что бы подтягивалось с системы в момент формирования (с возможностью дописать вручную если задним числом)
3. Грузополучатель: что бы можно было выбрать из списка шаблонов который можно будет редактировать
4. Ответственный: другой список, что бы можно было выбрать из шаблонов который можно будет редактировать
5. Позиция товара: в соответсвии с наименованием в таблице xl + с возможностью добавлять позиции ниже
6. Единицы измерения: на выбор из списка (кг,шт)
7. Выдать/принять, Отпущено/принято: количество в цифрах, эти два столба в 99.99% сходятся, это вручную можно, чи из списка который можно скролить до 9999, тоже варик норм))0
8. Цена: в соответствии с таблицей xl + возможность исправить вручную
9. Сумма: цена за ед. умножено на количество в 7м пункте
10. Залупа (да) в штуках: сумма 7го пункта по каждой позиции (2 лопаты + 2 топора + 2 мешков = 6 (шесть) штук)
11. Всего: сумма сумм, цифра + транскрипция словами гривен и копеек тоже
12. Подпись ответственного: что бы подтягивалось из шаблона, но лучше что бы вытягивалось из 4го пункта только фамилия КАПСОМ и перед ним инициалы только имя (О. БОБИК) + его звание в начале строки (тоже из 4го пункта)

export class StorageListComponent {
  dataFromDB = new Array<any>();
  productsFromDB = new Array<any>();
  constructor(private getDataService: GetListDataService){}
  ngOnInit(): void {
    this.getDataService.getProducts().subscribe((data) => {
      this.dataFromDB = data;
      for(let item of this.dataFromDB){
        this.productsFromDB[item] = this.dataFromDB[item];
      }
      console.log(data);
      console.log(typeof(this.productsFromDB));
    })
  }
  product = new Array();
  onSelected(value: string): void {
    this.product = Object.keys(this.productsFromDB.filter((item) => item == value)[0]);
    console.log(value);
  }

 */
