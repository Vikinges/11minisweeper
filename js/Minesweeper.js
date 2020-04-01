// class House {
//     constructor(address,floors,windows,doors,roof){
//         this.Locationaddress=address;
//         this.UPfloors=floors;
//         this.Num_windows=windows;
//         this.doors=doors;
//         this.roof=roof;

//         // console.log(this.Locationaddress);  
//         this.init();
//     }

//                 init(){
//                     this.kekTuriAukstu();
//                     console.log('-----------------');
//                     this.arDegaStogos();
//                     console.log('-----------------');
//                 }

//                 arDegaStogos(){
//                     console.log(`ne viskas ${this.Locationaddress} OK `);
//                 }

//                 kekTuriAukstu(){
//                     console.log(`namas aukstas ${this.UPfloors}`);
//                 }
//                 }

// class Humans{
//     constructor(Nickname,Name,LastName,Age,heigth,sizeHands,SizeArms,HairColor,Gender){
//      this.Nick_name_if_have= Nickname;
//      this.Name=Name;
//      this.LastName_if_have=LastName;
//      this.Age=Age;
//      this.sizeHands=sizeHands;
//      this.SizeArms=SizeArms;
//      this.HairColor=HairColor;
//      this.Gender=Gender; 
//     }
    
    
    
// }

// // House aukstas , langu .... 
// const pirmasNamas = new House('gedemino pr.', 2,30,1,true);
// const antrasNamas = new House('peteliskiu g', 1,20,1,true);
// const Valery = new Humans("Valery","Valerusia","Culbeda",33,175,'','','brown','female',)

// console.log(Valery);
// // pirmasNamas.arDegaStogos();
// // antrasNamas.kekTuriAukstu();


class Minesweeper {
    constructor (traget,width,teight,bommbProcent){
    this.target = traget;
    this.DOM = null;
    this.width  = width;
    this.height = teight;
    this.bommbProcent  = bommbProcent;
    this.bombsCount=1;
    
  this.init();
    }

    init(){
        this.validacia();
        this.render();
    }

    validacia(){
    // check if valid target selector 

    const DOM = document.querySelector(this.target);
    // console.log(DOM);
        if (!DOM) {
        // Console.error('kritene claida')
            throw 'kita klaida nado ukazat pravelniy selektor'
        }
        this.DOM=DOM;
        // check for correct size 
         if (typeof(this.width) !== 'number'|| 
         this.width < 1 ||
         this.width % 1 > 0){
             throw 'netinkamas plotis '
         }
         
         if (typeof(this.height) !== 'number'|| 
         this.height < 1 ||
         this.height % 1 > 0){
             throw 'netinkamas aukstis '

         }
         
         if (this.width*this.height <2){
             throw 'maza lentos '
         }
         if (typeof(this.bommbProcent) !=='number' ||
         this.bommbProcent <= 0 ||
         this.bommbProcent >100) {
             throw 'nepodhodit kol vo bomb';
         }
        // calculate bombs count          10            10            15         =  

         const bombsCount=Math.floor(this.width*this.height*this.bommbProcent / 100);
         if (bombsCount >0 ){
             this.bombsCount=bombsCount;

         }   
         console.log('bet testim darba.....');
            
    }

 render(){
    let HTML = `<div class="header">
    <div class="bombs">099</div>
    <div class="smile">:)</div>
    <div class="timer">000</div>
</div>
<div class="field">
    <div class="cell">C</div>
    <div class="cell">C</div>
    <div class="cell">C</div>
    <div class="cell">C</div>
    <div class="cell">C</div>
    <div class="cell">C</div>
    <div class="cell">C</div>
</div>`;
this.DOM.classList.add('minesweeper');
this.DOM.innerHTML = HTML;
}

 
}
// valid 
const game= new Minesweeper('#game',10,10,15);
console.log(game);
