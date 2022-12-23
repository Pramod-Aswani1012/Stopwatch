
    let hour = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let milliseconds = document.getElementById('milliseconds');
    let resetval=true;
    let timer=true;

    function timerstart()
    {
        timer=true;
    }

    function start()
    {
        // timer=true;
        if(timer)
        {
            // if(parseInt(milliseconds.innerHTML)>=0 && parseInt(milliseconds.innerHTML)<9)
            // {
            //     let a = (parseInt(milliseconds.innerHTML)+1);
            //     (milliseconds.innerHTML)="0"+a;
            // }
            // else
            // {
            //     (milliseconds.innerHTML)=parseInt(milliseconds.innerHTML)+1;
            // }

            // if(milliseconds.innerHTML=="1000")
            // {
            //     milliseconds.innerHTML="00";
                if(parseInt(seconds.innerHTML)>=0 && parseInt(seconds.innerHTML)<9)
                {
                    let a = (parseInt(seconds.innerHTML)+1);
                    (seconds.innerHTML)="0"+a;
                }
                else
                {
                    (seconds.innerHTML)=parseInt(seconds.innerHTML)+1;
                }
            
            if(parseInt(seconds.innerHTML)==60)
            {
            //    milliseconds.innerHTML="00";
                seconds.innerHTML="00";
                if(parseInt(minutes.innerHTML)>=0 && parseInt(minutes.innerHTML)<9)
                {
                    let a = (parseInt(minutes.innerHTML)+1);
                    (minutes.innerHTML)="0"+a;
                }
                else
                {
                    (minutes.innerHTML)=parseInt(minutes.innerHTML)+1;
                }
            }

            if(minutes.innerHTML=="60")
            {
                minutes.innerHTML="00";
                //seconds.innerHTML="00";
                if(parseInt(hour.innerHTML)>=0 && parseInt(hour.innerHTML)<9)
                {
                    let a = (parseInt(hour.innerHTML)+1);
                    (hour.innerHTML)="0"+a;
                }
                else
                {
                    (hour.innerHTML)=parseInt(hour.innerHTML)+1;
                }
            }

            setTimeout("start()",1000);
        }
    }

    
    

    function pause()
    {
        timer=false;
        console.log(timer);
    }
    function reset()
    {
        timer=false;
        seconds.innerHTML="00";
        minutes.innerHTML="00";
        hour.innerHTML="00";
    }
