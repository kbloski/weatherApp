export function getStringWeekDay( numWeekDay ){

    let result = null;
    switch(numWeekDay) {
        case 0:
            result = "niedziela"
            break
        case 1:
            result = "poniedziałek"
            break
        case 2:
            result = "wtorek"
            break
        case 3:
            result = "środa"
            break
        case 4:
            result = 'czwartek'
            break
        case 5:
            result = 'piatek'
            break
        case 6:
            result = 'sobota'
            break
        default:
            console.error("Error in function getStringWeekDay(), invalid number week day.")
            break;
        }

        return result;
}