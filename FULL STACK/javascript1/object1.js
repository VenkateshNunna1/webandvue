function mechanism(){
    console.log('super car');
}
let car={
    name:'benz',
    model:'690d',
    work:function(){
        return `the ${car.name} is super speed and most people love this ${car.model}`;
    },
    mechanism
};
console.log(car.work());
car.mechanism();