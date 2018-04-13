function ajouteUnZero(temps)
{ // temps est de type numérique  
    var tpsAvecZero;  
    if(temps < 10)
    {   tpsAvecZero = "0"+temps; // concaténation avec conversion implicite  
    }
    else
    {   
        tpsAvecZero = temps;  
    }  
    return tpsAvecZero; 
}