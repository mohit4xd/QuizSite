var question = [{
    'que': "MARKUPP LANGUAGE",
    'a': "HTML",
    'b': "PHP",
    'c': "JAVA",
    'd': "C++",
    'correct': "opn1",
}, {
    'que': "WHICH OF FOLLOWING IS NOT OOPS LANGUAGE",
    'a': "C++",
    'b': "PYTHON",
    'c': "JAVA",
    'd': "C",
    'correct': "opn4",
},
{
    'que': "FULL FORM OF HTML",
    'a': "HYPER TEXT MARKUP LANGUAGE",
    'b': "HYPER TEXT MEKUP LANGUGE",
    'c': "HYPER TEXTURE MARKUP LANGUAGE",
    'd': "HYPPER TEXT MARKUP LANGUAGE",
    'correct': "opn1",
}]

const o = document.querySelectorAll(".pn");
const oopn = document.querySelectorAll(".zo");
const submit = document.querySelector(".btn");
const point = document.querySelector("#sc");
const po = document.querySelector("#showscore");
let index = 0;
var score = 0;
load = () => {
    const q = document.getElementById("qw");
    let data = question[index];
    q.innerText = data.que;
    console.log(data.que);

    o[0].innerText = data.a;
    o[1].innerText = data.b;
    o[2].innerText = data.c;
    o[3].innerText = data.d;
}
load()

submit.addEventListener('click', () => {
    const check = uh();
    console.log(check);
    if (check == question[index].correct) {
        score++;
        console.log(score)
            // let string='${score}'
            // console.log(string)
            // point.innerText=
            // score 
            ;
    }
    index++;
    deselect()
    if (index < question.length) {
        load()
    } else {
        po.innerHTML = `
         <h2>${score} / ${question.length}</h2>
         <button class="btn" onclick="location.reload()">TRY AGAIN</button>
         `;

    }
})

const deselect = () => {
    oopn.forEach((input) =>
        input.checked = false
    );
}

const uh = () => {
    let gy;
    oopn.forEach(

        (input) => {
            if (input.checked) {
                gy = input.id;
            }

        }
    )
    return gy;
}

