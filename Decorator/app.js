// Decorator
// За допомогою даного паттерна можна міняти поведінку обєкта в залежності від умов,
// створюємо червоний мячик, а якщо нам потрібний мячик в полоску ? тут нам прийде в нагоді
// паттерн Decorator.
// Реалізуєм паттерн декількома способами :
// перший - комплексний
// В кожному декораторі потрібно  відновити всі функції які мають бути в батьківському обєкті,
// і в тих в яких поведінку міняти ми не хочем,потрібно перенаправити на запит батьківському обєкту
// цей варіант краще застосовувати коли відбуваються грандіозні зміни, які стосуються більше 1-ої функції.

function Ball(param) {
    this._radius = param.radius;
    this._color = param.color;
};

Ball.prototype = {
    constructor: Ball,

    INCREMENTATION_STEP: 5,

    draw: function () {
        console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)
        },
        inc: function () {
        this._radius += this.INCREMENTATION_STEP
        }
    };

// Перший спосіб
new Ball({radius: 100, color: "red"});

let ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
let ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

ball1.draw();
ball1.inc();
ball1.draw();

ball2.draw();

// Простий тест
let ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
let ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

ball1.draw();
ball1.inc();
ball1.draw();

ball2.draw();

// Другий спосіб якщо зміни потрібні не суттєві
function MakeStripedBall( ball )
{
    let functionName = "draw";
    let prevState = ball[ function_name ];

    ball[ functionName ] = function()
    {
        prevState.apply( this, arguments )
        console.log("and with stripes");
    };

    return ball;
}
function MakeSpeckledBall( ball )
{
    let functionName = "draw";
    let prevState = ball[functionName];

    ball[functionName] = function ()
    {
        prevState.apply(this, arguments)
        console.log("and with dots!");
    };

    return ball;
}

// Пишем тест

let ball3 = MakeStripedBall(MakeSpeckledBall(new Ball({radius: 150, color: "blue"})));
let ball4 = MakeSpeckledBall(MakeStripedBall(new Ball({radius: 150, color: "blue"})));

ball3.draw();
ball3.inc();
ball3.draw();
ball4.draw();
