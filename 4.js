function Device(name, power)
{
    this.name = name;
    this.power = power;
    this.included = false;
}
Device.prototype.turnOn = function()
{
    this.included = true;
}
Device.prototype.turnOff = function()
{
    this.included = false;
}
Device.prototype.print = function()
{
    console.log(`Прибор ${this.name} мощностью ${this.power}вт - ${this.included? "работает":"выключен(а)"}`);
}

function Lamp(name, power, temp)
{
    this.name = name
    this.power = power
    this.temp = temp
}
Lamp.prototype = new Device()
Lamp.prototype.print = function()
{
    console.log(`Лампа ${this.name} мощностью ${this.power}вт и цветовой температурой ${this.temp} - ${this.included? "работает":"выключен(а)"}`);
}

function Pc(name, power, islaptor)
{
    this.name = name
    this.power = power
    this.islaptor = islaptor 
}
Pc.prototype = new Device()
Pc.prototype.print = function()
{
    console.log(`${this.islaptor?"Ноутбук":"Настольный компьютер"} ${this.name} мощностью ${this.power}вт - ${this.included? "работает":"выключен(а)"}`);
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