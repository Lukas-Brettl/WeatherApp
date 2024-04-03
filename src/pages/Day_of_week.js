

export default function Day_of_week(props){
    const date = new Date
    const day = date.getDay() + props.day
    const names = [" ","Po.", "Út.", "St.", "Čt.", "Pá.", "So.", "Ne."]
    return names[day]
}