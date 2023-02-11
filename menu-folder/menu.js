let options = document.querySelectorAll(".option");

function setSection(n){
    let section= document.getElementById("s"+n);
    section.style.display="block";
    for(let i=0;i<5;i++){
        let p = i+1;
        if(p !== n){
            console.log("id: ", "s"+p)
            let s = document.getElementById("s"+(p).toString());
            s.style.display="none"
            
        }
    }
}