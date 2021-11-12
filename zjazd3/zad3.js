let array = [
    {
        x:2,
        y:3,
    },
    {
        x:-10,
        y:6,
    },
    {
        x:50,
        y:8,
    }
];

let BaseObject = { 
    sum: function () { 
        return this.x+this.y;
    },
}
for (let i = 0;i < array.length;i++) {
    console.log(BaseObject.sum.call(array[i]));
};