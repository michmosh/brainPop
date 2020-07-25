export const Months = ["january", "february", "march", "april", "may", "june",
  	        "july", "august", "september", "october", "november", "december"];
export const dateParser = {
    getActivityDate : (value) => {
        let options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(value * 1000 ).toLocaleString("en-US",options);
    },
    
    getActivityMonth : (value, array)=> new Date(value * 1000)
        .toLocaleString("en-US",{month:"long"})
        .toLocaleLowerCase(),

    getModalDate(value){
        let options = { year: "numeric", month: "short", day: "numeric", hour:"2-digit", minute: "2-digit" };
        return new Date(value * 1000 ).toLocaleString("en-US",options);
    }
};