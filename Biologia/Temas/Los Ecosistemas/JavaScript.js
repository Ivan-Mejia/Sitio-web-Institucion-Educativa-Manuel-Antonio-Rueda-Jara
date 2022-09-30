function funcionboton() {

    var op=[];
        for(var i=0;i<15;i++)
        {
            op[i]=document.getElementsByName("P"+(i+1));
        }
    var cont =0 ;
    var rp=["b","b","a","b","b","b","a","c","d","a","b","d","b","c","c",];
        for(var i=0;i<15;i++)
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
    
    alert (cont + "/15 Preguntas acertadas.");
    }
    