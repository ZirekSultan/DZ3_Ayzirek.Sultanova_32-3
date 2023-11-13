var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var object= {}

for(const item of tags){
    if (object[item]){
        object[item] += 1
    }
    else {
        object[item] = 1
    }

}
console.log(object)

var Starbacks = {
    tea: {
        black: 'Этот вид чая производится путем сильной ферментации (окисления). Как правило, имеет терпкий насыщенный вкус.' ,
        green: 'Чай имеет настой золотисто-желтого цвета, а также легкий и травянистый вкус. Наиболее популярен в Азии.' ,
        anchan: 'Тайский чай из синих цветов клитории тройчатой. Не содержит кофеин, считается оздоровительным напитком. ' ,
        roibush: 'Традиционный африканский напиток, который получают из стеблей, листьев и побегов кустарника аспалатуса линейного.',
        white: 'Слабоферментированный (почти не ферментированный) чай, содержащий типсы (чайные почки). Особенно популярен в Китае, считается максимально полезным.' ,
        blue: 'Тайский синий чай — напиток из цветов клитории тройчатой, или тайской орхидеи.' ,
        buckwheat: 'Вкус ее более нежный и мягкий, чем у гречки «на кашу». Родом этот напиток из Китая, и ценят его больше всего за пользу для организма.'

    },

    coffee: {
        espresso: 'Практически все кофейные напитки готовятся на основе эспрессо: с добавлением воды и молока в разных пропорциях. ' ,
        lungo: 'Напиток готовится по тому же принципу и с тем же количеством кофе, что и эспрессо. Но с большим объемом воды — 70 мл, и дольше по времени. ' ,
        risretto: 'Ристретто — один из любимых напитков итальянцев. Его никогда не пьют с добавлением сахара или с десертом. Иначе не удастся ощутить всю глубину вкуса и аромата кофе.' ,
        latte: 'Латте — это скорее молочно-кофейный напиток. Ведь в его основе одна часть эспрессо, целых две или даже три части молока и молочная пенка.' ,
        mocachino: 'В составе мокко также есть эспрессо, горячее молоко и… шоколад.Кофе с шоколадом украшает пышная молочная пенка и облако взбитых сливок. А сверху — корица, какао или молотые орешки.' ,
        bombon: 'Испанский вариант кофе со сгущенкой. В данном случае, сгущенку доливают в готовый эспрессо по стеночке, чтобы напиток расслоился. Подают в прозрачном стакане. Соотношение ингредиентов 1:1.'
    }
}

var menu = prompt('Какой напиток вы хотите? Введите название напитка.')
if (menu in Starbacks) {
    alert('Данный напиток есть.')
    var choose = prompt('Введите название напитка.')

    if (menu === 'tea' && choose in Starbacks.tea) {
        alert(`Ваш чай: ${Starbacks.tea[choose]}Ваш заказ принят.`)

    }
   else if (menu === 'coffee' && choose in Starbacks.coffee) {
        alert(`Ваш кофе: ${Starbacks.coffee[choose]}Ваш заказ принят.`)

    }
   else {
       alert('К сожелению,данного напитка нет в ассортименте.')
    }
}
else{
    alert('К сожелению,данного напитка нет в ассортименте.')
}

