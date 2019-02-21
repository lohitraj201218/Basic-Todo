var todos = []; 

function check()
{
  var name_value = document.getElementById("name").value
  var i;
  for (i = 0; i < todos.length; i++)
  {
    if (todos[i].name === name_value)
    {
      // alert("Note already exist's!")
      document.getElementById("AlertMessage").style.display="block";
      document.getElementById("name").value = "";
      return false;
    }
  }
  document.getElementById("AlertMessage").style.display="none";
  return true;
}

function add()
{
  var name_value = document.getElementById("name").value;
  //creation of object   
  if (name_value === "")
  {
    // alert("Name can't be empty");
    document.getElementById("AlertMessage2").style.display="block";
    return false;
  }
  else
  {
    document.getElementById("AlertMessage2").style.display="none";
    if (check())
    {
      var item = {
        name: name_value,
        des: document.getElementById("des").value,
        priority: document.getElementById("opt").value,
        time: document.getElementById("time").value,
      };
      todos.push(item);
      //console.log("pushed...,length: "+todos.length);
      display();
    }

  }

  document.getElementById("name").value = "";
  document.getElementById("des").value = "";
  document.getElementById("time").value = "";
}

function display()
{
  var count = (todos.length) - 1;
  //console.log("displaying...latest ele: ");
  //console.log(todos[count]);

  var tb = document.getElementById("todotable");
  var rowCount = tb.rows.length;
  //console.log("no.of rows "+rowCount);
  if (rowCount > 1)
  {
    for (var i = rowCount - 1; i > 0; i--)
    {
      tb.deleteRow(i);
    }
  }

  for (var item = 0; item < todos.length; item++)
  {
    console.log("creating...");
    var inpt = document.createElement("input");
    inpt.type = "checkbox"
    inpt.id = item;
    inpt.className = "checkboxes";
    inpt.onclick = displayField;

    var tr0 = document.createElement("tr");
    tr0.className = "tablerow";

    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var txt1 = document.createTextNode(todos[item].name);
    var txt2 = document.createTextNode(todos[item].des);
    var txt3 = document.createTextNode(todos[item].priority);
    var txt4 = document.createTextNode(todos[item].time);

    td0.appendChild(inpt);
    td1.appendChild(txt1);
    td2.appendChild(txt2);
    td3.appendChild(txt3);
    td4.appendChild(txt4);

    tr0.appendChild(td0);
    tr0.appendChild(td1);
    tr0.appendChild(td2);
    tr0.appendChild(td3);
    tr0.appendChild(td4);

    tb.appendChild(tr0);
    //console.log("input id :"+inpt.id);
    //console.log("created row");
  }

}
//checkboxlisten.addEventListener("onclick",togglefunc);

function togglefunc()
{
  var tb = document.getElementById("todotable");
  var checkboxlisten = document.getElementById("test");
  var cbs = document.getElementsByClassName("checkboxes");
  console.log(checkboxlisten.checked);
  if (checkboxlisten.checked == true)
  {
    console.log("checkingall");
    for (var i = 0; i < cbs.length; i++)
    {
      cbs[i].checked = true;
    }
  }
  else
  {
    console.log("un checkingall");
    for (var i = 0; i < cbs.length; i++)
    {
      cbs[i].checked = false;
    }
  }
}

function displayField()
{
  if (this.checked == true)
  {
    console.log(this.id);
    var id = this.id;
    document.getElementById("name").value = todos[id].name;
    document.getElementById("des").value = todos[id].des;
    document.getElementById("opt").value = todos[id].priority;
    document.getElementById("time").value = todos[id].time;
  }
  else
  {
    document.getElementById("name").value = "";
    document.getElementById("des").value = "";
    document.getElementById("opt").value = 0;
    document.getElementById("time").value = "";
  }
}

function del()
{
  var tb = document.getElementById("todotable");
  console.log("deleteing...");
  var cbs = document.getElementsByClassName("checkboxes");
  for (var i = cbs.length - 1; i >= 0; i--)
  {
    console.log(cbs[i].checked);
    if (cbs[i].checked == true)
    {
      console.log(cbs[i]);
      //console.log("before len "+todos.length)
      //console.log(cbs[i].id +" is checked");
      todos.splice(i, 1);
      // tb.deleteRow(i+2);
      //console.log("deleted");
      //console.log("after len "+todos.length)

    }
  }
  display();
}

function upd()
{

  var cbs = document.getElementsByClassName("checkboxes");
  for (var i = 0; i < cbs.length; i++)
  {
    if (cbs[i].checked == true)
    {
      todos[i].name = document.getElementById("name").value;
      todos[i].des = document.getElementById("des").value;
      todos[i].priority = document.getElementById("opt").value;
      todos[i].time = document.getElementById("time").value;
      display();
      console.log("up: " + todos[i])
    }

  }
}