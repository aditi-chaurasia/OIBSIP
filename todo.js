document.querySelector('#add').onclick=function()
        {
            if(document.querySelector('#newtask input').value.length == 0)
            {
                alert("Enter the task for the day");
            }
            else
            {
                document.querySelector('#tasks').innerHTML +=`<div class="tasks">
                <span id ="taskname">
                ${document.querySelector("#newtask input").value}
                </span><button class="delete">X
                </button>
                </div>`;
            var current_tasks = document.querySelectorAll('.delete');
            for (var i =0; i<current_tasks.length ;i++)
            {
                current_tasks[i].onclick=function()
                {
                    this.parentNode.remove();
                }
            } 
            var tasks = document.querySelectorAll('#taskname');
            for (var i =0; i<tasks.length ;i++)
            {
                tasks[i].onclick=function()
                {
                    this.classList.toggle('completed');
                }
            } 
            document.querySelector('#newtask input').value= "";
            document.getElementById('audio').play();
        }
    }