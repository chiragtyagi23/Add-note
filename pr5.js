const butt = document.querySelector("#button");
butt.addEventListener("click",function(){
    addnotes();
})

const main = document.querySelector("#main");

    //    <div class="note">
    //        <div class="tools">
    //            <ion-icon name="bookmark-outline" class="icon"></ion-icon>
    //            <ion-icon name="trash-outline" class="icon"></ion-icon>
    //        </div>
    //        <textarea name="" ></textarea>
    //    </div>
        

const addnotes = function(text = ""){
    const notes = document.createElement("div");
    notes.classList.add("note");
    notes.innerHTML = `
   

    <div class="tools">
    <ion-icon name="bookmark-outline" class="icon1"></ion-icon>
    <ion-icon name="trash-outline" class="icon2"></ion-icon>
    </div>
    <textarea name="" >${text}</textarea>;

    
    `;
  

   notes.querySelector(".icon2");
   notes.addEventListener("click",function(){
       notes.remove()
       save()
       
   })
 
notes.querySelector(".icon1");
notes.addEventListener("click",function(){
 save();
})

main.appendChild(notes);
save()
}

const save = function(){
 const notess = document.querySelectorAll(".note textarea");
 const data = [];
 notess.forEach(function(notes){
     data.push(notes.value)
 })
 console.log(notess);
 localStorage.setItem("notes",JSON.stringify(data))

}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notess"));
        lsnotes.forEach(function(lsnotes){
            addnotes(lsnotes)
        })
    }

)()




