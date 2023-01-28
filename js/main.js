//declarations
let list = document.querySelector(".list");


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 & i % 5 == 0) {
        list.innerHTML += `<li class="box box-both"><h4>fizzbuzz</h4></li`
    } else if (i % 3 == 0) {
        list.innerHTML += `<li class="box box-3mult"><h4>fizz</h4></li`
    } else if (i % 5 == 0) {
        list.innerHTML += `<li class="box box-5mult"><h4>buzz</h4></li`
    } else {
        list.innerHTML += `<li class="box"><h4>${i}</h4></li`
    }
}