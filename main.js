menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Paneer Tikka Pizza",
                   "Veg Supreme Pizza",
                   "Deluxe Veggie Pizza",
                   "Country Feast Pizza",
                   "Farmers Pick Pizza",
                   "Veggie Lovers Pizza",
                   "Triple Chicken Feast Pizza",
                   "Peppy Paneer Pizza",
                   "Mexican Green Wave Pizza",
                   "Veg Extravaganza Pizza",
                   "Cheese n Corn Pizza",
                   "Cheese n Tomato Pizza",
                   "Pepper Barbecue & Onion Pizza",
                   "Chicken Golden Delight Pizza",
                   "Non Veg Supreme Pizza",
                   "Chicken Dominator Pizza",
                   "Garden Delight Pizza",
                   "Lovers Bite Pizza",
                   "Spring Fling Pizza",
                   "Burn To Hell Pizza",
                   "Country Side Pizza",
                   "Farm Villa Pizza",
                   "Cheesy Mac Veg Pizza",
                   "Cheezy-7 Pizza",
                   "Garden Special Pizza",
                   "Hot Passion Pizza",
                   "Las Vegas Treat Pizza",
                   "Peri Peri Veg Pizza",
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='Menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
}
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata = "<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata = htmldata + '<div class="card">' + '<img src="pizzaImg.png"/>' + menu_list_array[i] + '</div>'
}
htmldata = htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
console.log(htmldata);


}

function add_top(){

    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
    console.log(add_item);
}