let main_color = "red"

function create_table(strochka, stolbiki) {
    let table = document.getElementById("my_table");
    table.innerHTML = ""
    for (let count = 0; count < strochka; count++ ) {
        let row = table.insertRow(count)
        for(let count_2 = 0; count_2 < stolbiki; count_2++){
            let cell = row.insertCell(count_2); 
              
            cell.addEventListener("click", function(){
                cell.style.backgroundColor = main_color;
            })
        }        
    }   
}

let colorInput = document.getElementById("color_picker");
colorInput.addEventListener('change', function() {
    main_color = colorInput.value;
    remove_choice()
    let kvadr = document.getElementById("color_picker")
    kvadr.style.border = "3px solid purple"
})
 
function make_transparent(){
    main_color = "transparent"
    remove_choice()
    let kvadr = document.getElementById("palitra_transparent")
    kvadr.style.border = "3px solid purple"
}

function make_red(){
    main_color = "red"
    remove_choice()
    let kvadr = document.getElementById("palitra_red")
    kvadr.style.border = "3px solid purple"
}
function make_green(){
    main_color = "lime"
    remove_choice()
    let kvadr = document.getElementById("palitra_green")
    kvadr.style.border = "3px solid purple"
}
function make_blue(){
    main_color = "blue"
    remove_choice()
    let kvadr = document.getElementById("palitra_blue")
    kvadr.style.border = "3px solid purple"
} 
function make_yellow(){
    main_color = "yellow"
    remove_choice()
    let kvadr = document.getElementById("palitra_yellow")
    kvadr.style.border = "3px solid purple"
}
function make_black(){
    main_color = "black"
    remove_choice()
    let kvadr = document.getElementById("palitra_black")
    kvadr.style.border = "3px solid purple"
}
function make_white(){
    main_color = "white"
    remove_choice()
    let kvadr = document.getElementById("palitra_white")
    kvadr.style.border = "3px solid purple"
}

function clean_field(){
    let table = document.getElementById("my_table");
    let cells = table.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "transparent";
    }
}

function make_size_10(){
    create_table(10, 10);
    remove_choice_size()
    let kvadr = document.getElementById("size_10")
    kvadr.style.border = "3px solid purple"
}

function make_size_15(){
    create_table(15, 15);
    remove_choice_size()
    let kvadr = document.getElementById("size_15")
    kvadr.style.border = "3px solid purple"
}

function make_size_20(){
    create_table(20, 20);
    remove_choice_size()
    let kvadr = document.getElementById("size_20")
    kvadr.style.border = "3px solid purple"
}

function remove_choice(){
    let kvadr1 = document.getElementById("palitra_red")
    let kvadr2 = document.getElementById("palitra_green")
    let kvadr3 = document.getElementById("palitra_blue")
    let kvadr4 = document.getElementById("palitra_yellow")
    let kvadr5 = document.getElementById("palitra_black")
    let kvadr6 = document.getElementById("palitra_white")
    let kvadr7 = document.getElementById("palitra_transparent")
    let kvadr8 = document.getElementById("color_picker")
    kvadr1.style.border = "1px solid grey"
    kvadr2.style.border = "1px solid grey"
    kvadr3.style.border = "1px solid grey"
    kvadr4.style.border = "1px solid grey"
    kvadr5.style.border = "1px solid grey"
    kvadr6.style.border = "1px solid grey"
    kvadr7.style.border = "1px solid grey"
    kvadr8.style.border = "1px solid grey"
}

function remove_choice_size(){
    let kvadr1 = document.getElementById("size_10")
    let kvadr2 = document.getElementById("size_15")
    let kvadr3 = document.getElementById("size_20")
    kvadr1.style.border = "1px solid grey"
    kvadr2.style.border = "1px solid grey"
    kvadr3.style.border = "1px solid grey"
}

function save_image(){    
    var table = document.getElementById("my_table");
    html2canvas(table).then(function(canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "pixelart.jpg";
        link.click();
    })
}

make_size_15()