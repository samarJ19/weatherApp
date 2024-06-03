export function timeconvert(n){
    const date = new Date(n * 1000);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const formattedTime = `${hours}:${minutes}`;
    return `${formattedTime}`;

}