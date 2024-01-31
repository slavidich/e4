class Device
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.included = false;
    }
    turnOn()
    {
        this.included = true;
    }
    turnOff()
    {
        this.included = false;
    }
    print()
    {
        console.log(`Прибор ${this.name} мощностью ${this.power}вт - ${this.included? "работает":"выключен(а)"}`);
    }
}

class Lamp extends Device
{
    constructor(name, power, temp)
    {
        super(name, power);
        this.temp = temp;
    }    
    print()
    {
        console.log(`Лампа ${this.name} мощностью ${this.power}вт и цветовой температурой ${this.temp} - ${this.included? "работает":"выключен(а)"}`);
    }
}

class Pc extends Device
{
    constructor(name, power, islaptor)
    {
        super(name, power);
        this.islaptor = islaptor ;
    }
    print()
    {
        console.log(`${this.islaptor?"Ноутбук":"Настольный компьютер"} ${this.name} мощностью ${this.power}вт - ${this.included? "работает":"выключен(а)"}`);
    }
}

let lamp = new Lamp('Лампа RT20', 5, 2700);
let pc = new Pc('RobotComp TY', 600, islaptor=false);
pc.startgame = function(gamename)
{
    this.included? console.log(`${gamename} на ${this.name} запущена `):console.log(`${gamename} не запущена, сначала включите компьютер`)
}

lamp.turnOn();
lamp.print();
pc.print();
pc.startgame('dota2')
pc.turnOn()
pc.startgame('cs2')