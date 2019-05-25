module.exports = function main(inputs) {
    var cost;
    if(0<inputs.distance&&inputs.distance<=2){
        cost=6+inputs.parkTime*0.25;
    }
    else if(2<inputs.distance&&inputs.distance<=8){
        cost=6+(inputs.distance-2)*0.8+inputs.parkTime*0.25;
    }

    else if(inputs.distance>8){
        cost=10.8+(inputs.distance-8)*1.2+inputs.parkTime*0.25;
    }
    return Math.round(cost);
};
