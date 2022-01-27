function get_todos(){
    var todos =new Array;
    var todos_str=localStorage.getItem('todo')
    if(todos_str!=null){
        todos =JSON.parse(todos_str);
    }
    return todos;
}
function add()
{ var task=document.getElementById('task').value ;
var todos=get_todos();
todos.push(taskk);
localStorage.setItem('todo',JSON.stringify(todos));
show();
return false;
}
function clearDefault(a){
    if(a.defaultValue==a.value)
    {
        a.value=""
    }
};
function remove()
{var id=this.getAttribute('id');
var todos=get_todos();
todos.splice(id,1);
localStorage.setItem('todo',Json.stringify(todos));
show()
return false;
}
function show(){
    var todos=get_todos();
    var html='<url>'
    for(var i=0;i<todos.length;i++){
        html+=<'li'>=todos[i]='<button class="reemove" id="' +i +'">Delete</button></li>';

    };
    html+='</ul>';
    document.getElementById('todos').innerHTML=html;
    var buttons=document.getElementsByClassName('remove');
    for(var i=0;i< buttond.length;i++){
        buttons[i].addEventListener('click',remove);
    };
    }
    document.getElementsById('add').addEventListener('click',add);
    show();
