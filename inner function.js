//Inner Function in Javascript

function greeting(greet, name){
    function getFirstName(){
        if (name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    let message = greet + ' ' + getFirstName()
    console.log(message);
}
greeting('Good Night', 'Mohammed Millat Khandokar')