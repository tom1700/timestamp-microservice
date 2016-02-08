this.isDate=function(input){
    var unix="null",
        natural="null",
        result,
        date;
    if(!isNaN(parseInt(input))){
        unix = input;
        date = new Date(parseInt(unix)*1000);
        natural = dateToNatural(date);
    }
    else{
        unix=Date.parse(input.replace("%20"," "));
        natural=dateToNatural(new Date(unix));
        if(isNaN(unix)){
            natural="null";
            unix="null";
        }
    }
    return '{ "unix": '+unix+', "natural": "'+natural+'" }';
}



function dateToNatural(date){
    switch(date.getMonth()){
        case 0:
            return "January "+date.getDate()+", "+date.getYear();
        case 1:
            return "February "+date.getDate()+", "+date.getYear();
        case 2:
            return "March "+date.getDate()+", "+date.getYear();
        case 3:
            return "April "+date.getDate()+", "+date.getYear();
        case 4:
            return "May "+date.getDate()+", "+date.getYear();
        case 5:
            return "June "+date.getDate()+", "+date.getYear();
        case 6:
            return "July "+date.getDate()+", "+date.getYear();
        case 7:
            return "August "+date.getDate()+", "+date.getYear();
        case 8:
            return "September "+date.getDate()+", "+date.getYear();
        case 9:
            return "October "+date.getDate()+", "+date.getYear();
        case 10:
            return "November "+date.getDate()+", "+date.getYear();
        case 11:
            return "December "+date.getDate()+", "+date.getYear();
    }
}