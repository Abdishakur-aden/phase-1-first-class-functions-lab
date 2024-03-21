const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers){
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integer){
    return function multiplier (fare){
        return integer * fare;
    }
}

const fareDoubler = function (createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier){
    return createFareMultiplier * 3;
}

function selectDifferentDrivers (drivers, select){
    if (select === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }else if (select === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}
