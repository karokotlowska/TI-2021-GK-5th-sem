const req = new XMLHttpRequest();

function add(e) {
    e.preventDefault();
    var div = document.getElementById('myContent');
    var content = `
      <form action="#" method="post" id='dodaj'>
      <fieldset>
      <div style="width: 650px; padding: 8px;">
        <label for="title" class = "obr">
        <span>Title</span>
        <input id="title-input" type="text" name="title" value=""/></label>   
         
        <label for="author" class="obr">
        <span>Author</span>
        <input id="author-input" type="text" name="author" value=""/></label>
        
      </div>
        <button id = "myContent" onclick="sendRequest(event)">Send</button>
	<div id="errors"></div>
      </fieldset>
      </form>
      `;
    div.innerHTML = content;
}

function sendRequest(e) {
  e.preventDefault();
  if(validate()){
	let data = new FormData(document.getElementById("dodaj"));

    	let url = 'cgi-bin/zad7post.py';
    
    	req.open('POST', url, true);
    	req.send(data);
	
    	req.onreadystatechange = (e) => {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log(req.responseText);
            }
        }
    }
  }
}

function show(e) {
    const table  = document.querySelector('.placeholder');

    e.preventDefault();
    let url = 'cgi-bin/zad7get.py';
    req.responseType = XMLDocument;
    req.open('GET', url);
    req.send(null);

    req.onreadystatechange = (e) => {
        if (req.readyState == 4) {
            if (req.status == 200) {
                table.innerHTML = req.responseText;
            }
        }
    }
}

function validate(){
	var msg="";
	if(document.getElementById('title-input').value=="" || document.getElementById('author-input').value==""){
		msg+='Wpisz autora i tytul';
		document.getElementById('errors').innerHTML = msg;
		return false;
	}
	return true;
}
