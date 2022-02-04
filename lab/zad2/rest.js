var request;
var objJSON;
var id_mongo;

function getRequestObject()      {
    if ( window.ActiveXObject)  {
        return ( new ActiveXObject("Microsoft.XMLHTTP")) ;
    } else if (window.XMLHttpRequest)  {
        return (new XMLHttpRequest())  ;
    } else {
        return (null) ;
    }
}

//funkcja zbierajaca informacje o danych urzadzenia i pomiarach
function _insertForm() {
    var form1 = `<form name='add'><table>
    <tr><td>Nazwa urzadzenia</td><td><input type='text' name='id' value='id' ></input></td></tr>
    <tr><td>temperatura</td><td><input type='text' name='temperatura' value='temperatura' ></input></td></tr>
    <tr><td>cisnienie</td><td><input type='text' name='cisnienie' value='cisnienie' ></input></td></tr>
    <tr><td>czas</td><td><input type='date' name='czas'></input></td></tr>
    <tr><td></td><td><input type='button' value='wyslij' onclick='_insert(this.form)' ></input></td></tr>
    </table></form>`;
    document.getElementById('data').innerHTML = form1;
    document.getElementById('result').innerHTML = ''; 
}


//funkcja wstawiajaca dane o urzadzeniu i jego pomiarach do bazy
function _insert(form)  {
    var data = {};
    data.id = form.id.value;
    data.teperatura = form.temperatura.value;
    data.cisnienie = form.cisnienie.value;
    data.czas = form.czas.value;
    
    txt = JSON.stringify(data);
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200 )    {
            document.getElementById('result').innerHTML = request.response;
        }
    }
    request.open("POST", "http://pascal.fis.agh.edu.pl/~9kotlowska/projekt3/biblioteka/save", true);
    request.send(txt);
}


//funkcja wypisujaca elementy dla szukanego id
function _list() {
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4)  {
            objJSON = JSON.parse(request.response);
            var txt = "";
            for ( var id in objJSON ){
                txt +=  id+": {";
                for ( var prop in objJSON[id] ) {             
                    if ( prop !== '_id')                    { 
                        txt += prop+":"+objJSON[id][prop]+",";  
                    } else { 
                        txt += "id:" + objJSON[id][prop]['$oid']+","; 
                    } 
                }
                txt +="}<br/>";
            }
            document.getElementById('result').innerHTML = txt;
        }
    }
    request.open("GET", "/~9kotlowska/projekt3/biblioteka/list", true);
    request.send(null);
}



//funkcja pobierajaca infomracje o elemencie do usuniecia
function _deleteElement() {
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4) { 
            objJSON = JSON.parse(request.response);
            var txt = "<form name='data'><select name='del' size='10'>";
            for ( var id in objJSON ) {
                txt +=  "<option value="+id+" >"+id+": {" ;
                for ( var prop in objJSON[id] ) {             
                    if ( prop !== '_id')
                    { txt += prop+":"+objJSON[id][prop]+",";  }
                    else
                    { txt += "id:"+ objJSON[id][prop]['$oid']+"," ;  }
                }     
                txt +="}</option>";
            }
            txt += "</select><br/><input type='button' value='usun' onclick='_delete(this.form)'/></form>";
            document.getElementById('data').innerHTML = txt;
        }
    }
    request.open("GET", "/~9kotlowska/projekt3/biblioteka/list", true);
    request.send(null);
}


//funkcja usuwajaca element
function _delete(form) {
    var rec = form.del.selectedIndex;
    var id = document.getElementsByTagName('option')[rec].value;
    var id_mongo = objJSON[id]['_id']['$oid'];
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 )    {
            document.getElementById('result').innerHTML = request.response;
        }
    }
    print (id_mongo);
    request.open("DELETE", "/~9kotlowska/projekt3/biblioteka/delete1/"+id_mongo, true);

    request.send(null);
}



//funkcja pobierajca infomracje o modfikacji danego pomiaru
function _updateElement() {
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4)    { 
        objJSON = JSON.parse(request.response);
        var txt = "<form name='data'><select name='del' size='10'>";
        for ( var id in objJSON )  {
            txt +=  "<option value="+id+" >"+id+": {" ;
            for ( var prop in objJSON[id] ) {             
                if ( prop !== '_id')
                { txt += prop+":"+objJSON[id][prop]+",";  }
                else
                { txt += "oid:" + objJSON[id][prop]['$oid']+"," ;  }
            }    
            txt +="}</option>";
        }
        txt += "</select><br/><input type='button' value='popraw' onclick='_update(this.form)'/></form>";
        document.getElementById('data').innerHTML = txt;
        }
    }
    request.open("GET", "/~9kotlowska/projekt3/biblioteka/list", true);
    request.send(null);
  }


//funkcja modyfikujaca dany pomiar
function _update(form) {
    var rec = form.del.selectedIndex;
    id_rec = document.getElementsByTagName('option')[rec].value;
    id_mongo = objJSON[id_rec]['_id']['$oid'];
    console.log(id_mongo);
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    var form1 = `<form name='add'><table>
    <tr><td>Nazwa urzadzenia</td><td><input type='text' name='id' value='id' ></input></td></tr>
    <tr><td>temperatura</td><td><input type='text' name='temperatura' value='temperatura' ></input></td></tr>
    <tr><td>cisnienie</td><td><input type='text' name='cisnienie' value='cisnienie' ></input></td></tr>
    <tr><td>czas</td><td><input type='date' name='czas'></input></td></tr>
    <tr><td></td><td><input type='button' value='wyslij' onclick='_updateOne(this.form)' ></input></td></tr>
    </table></form>`;
    document.getElementById('data').innerHTML = form1;
    document.getElementById('result').innerHTML = ''; 
}


function _updateOne(form) {
    var data = {};
    data.id = form.id.value;
    data.teperatura = form.temperatura.value;
    data.cisnienie = form.cisnienie.value;
    data.czas = form.czas.value;
    
    txt = JSON.stringify(data)
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200 )    {
            document.getElementById('result').innerHTML = request.response;
            }
    }
    request.open("PUT", "/~9kotlowska/projekt3/biblioteka/update1/"+id_mongo, true);
    request.send(txt);
}

//odczyt danych dla konkretnego urzadzaneia
function _searchForm() {
    var form1 = `<form name='add'><table>
    <tr><td>Nazwa urzadzenia</td><td><input type='text' name='id' value='id' ></input></td></tr>
    <tr><td></td><td><input type='button' value='wyslij' onclick='_search(this.form)' ></input></td></tr>
    </table></form>`;
    document.getElementById('data').innerHTML = form1;
    document.getElementById('result').innerHTML = ''; 
}



//funkcja zbierajaca informacje z jakiego przedzialu czasowego nalezy pobrac dane
function _searchFormDate(){
    var form1 = `<form name='add'><table>
    <label for=\"data\">Wybor przedzialu czasu:</label><tr><td>od</td><td><input type='date' name='czas1'></input></td></tr>
    <tr><td>do</td><td><input type='date' name='czas2'></input></td></tr>
    <tr><td></td><td><input type='button' value='wyslij' onclick='_searchDate(this.form)' ></input></td></tr>
    </table></form>`;
    document.getElementById('data').innerHTML = form1;
    document.getElementById('result').innerHTML = ''; 
}

//funkcja pobierajaca przedzial czasowy z ktorego nalezy usunac wszytsie dane
function _searchFormDate(){
    var form1 = `<form name='add'><table>
    <label for=\"data\">Wybor przedzialu czasu:</label><tr><td>od</td><td><input type='date' name='czas1'></input></td></tr>
    <tr><td>do</td><td><input type='date' name='czas2'></input></td></tr>
    <tr><td></td><td><input type='button' value='wyslij' onclick='_deleteDate(this.form)' ></input></td></tr>
    </table></form>`;
    document.getElementById('data').innerHTML = form1;
    document.getElementById('result').innerHTML = ''; 
}

//funkcja pobierajaca pomiary dla danego uzadzaeniae
function _search(form) {
    var trg = form.id.value;
    var txt = '';
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 )  {
            objJSON = JSON.parse(request.response);
            for(var id in objJSON)  {
                if(objJSON[id]['id'] == trg) {
                    for ( var prop in objJSON[id] ) {             
                        if ( prop !== '_id')
                            { txt += prop+": "+objJSON[id][prop]+", ";  }
                        else
                            { txt += "oid: " + objJSON[id][prop]['$oid']+", " ;  }
                    }    
                }
            }
            document.getElementById('result').innerHTML = txt;
        }
    }
   request.open("GET", "http://pascal.fis.agh.edu.pl/~9kotlowska/projekt3/biblioteka/list", true);
   request.send(null);
}



//szukanie danych z danego przedzialu czasu
function _searchDate(form) {
    var trg = form.czas1.value;
    var trg2 = form.czas2.value;
    var txt = '';
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 )    {
            objJSON = JSON.parse(request.response);
            for(var id in objJSON) {
                if(objJSON[id]['czas']>trg && objJSON[id]['czas']<trg2) {
                    for ( var prop in objJSON[id] ) {             
                        if ( prop !== '_id')  { 
                            txt += prop+": "+objJSON[id][prop]+", ";  
                        }
                        else{ 
                            txt += "<br/>oid: " + objJSON[id][prop]['$oid']+", " ;  
                        }
                }    
                }
            }
            document.getElementById('result').innerHTML = txt;
        }
    }

    request.open("GET", "/~9kotlowska/projekt3/biblioteka/list/", true);
    request.send(null);
}


//szukanie danych z danego przedzialu czasu
function _deleteDate(form) {
    var trg = form.czas1.value;
    var trg2 = form.czas2.value;
    var txt = '';
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('data').innerHTML = '';  
    request = getRequestObject() ;
    request.onreadystatechange = function() {
        if (request.readyState == 4 )    {
            objJSON = JSON.parse(request.response);
            for(var id in objJSON) {
                if(objJSON[id]['czas']>trg && objJSON[id]['czas']<trg2) {
                    for ( var prop in objJSON[id] ) {             
                        if ( prop !== '_id')  { 
                            txt += prop+": "+objJSON[id][prop]+", ";  
                        }
                        else{ 
                            txt += "<br/>oid: " + objJSON[id][prop]['$oid']+", " ;  
                        }
                }    
                }
            }
            document.getElementById('result').innerHTML = txt;
        }
    }

    request.open("GET", "/~9kotlowska/projekt3/biblioteka/list/", true);
    request.send(null);
}