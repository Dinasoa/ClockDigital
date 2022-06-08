import React , {useEffect , useState} from "react" ;

export function timer (){

        const [seconde , setSecond] = useState(5) ;
        const [minute , setMinute] = useState(12) ;
        let timerId ;

        function padStartDigit(digit){
            return digit.toString().padStart(2 , "0") ;
        }
    
    useEffect(() => {
        timerId = setInterval(() => {
            if(seconde == padStartDigit(0)){
                setMinute(minute - 1) 
                setSecond(seconde + 59)
            }
            else{
                setSecond(seconde -1) ;
            }
        })
    } , 1000) ;

    return () => clearInterval(timerId) ;
}