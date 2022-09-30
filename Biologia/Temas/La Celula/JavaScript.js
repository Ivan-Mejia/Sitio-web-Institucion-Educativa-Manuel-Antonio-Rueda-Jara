function funcionboton() {

    var op=[];
        for(var i=0;i<10;i++)
        {
            op[i]=document.getElementsByName("P"+(i+1));
        }
    var cont =0 ;
    var rp=["a","a","c","b","b","a","c","a","d","a",];
        for(var i=0;i<10;i++)
            {
                for( var k=0;k<4;k++) 
                    {
                        if(op[i][k].checked)
    
                        {
                            if(op[i][k].value==rp[i] )
    
                            {
                                cont= cont +1;
                            }
                        }
                    }
            }
    
    alert (cont + "/10 Preguntas acertadas.");
    }
    