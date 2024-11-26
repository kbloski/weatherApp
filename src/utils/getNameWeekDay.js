export function getNameWeekDayByNumber( numWeekDay ){

    switch(numWeekDay) {
        case 0:
            return "niedziela"
        case 1:
            return "poniedziałek"
        case 2:
            return "wtorek"
        case 3:
            return "środa"
        case 4:
            return 'czwartek'
        case 5:
            return 'piatek'
        case 6:
            return 'sobota'
        default:
            console.error("Error in function getStringWeekDay(), invalid number week day.")
            return null;
        }

}