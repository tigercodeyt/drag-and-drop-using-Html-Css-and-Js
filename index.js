let box = document.querySelectorAll(".box");
let imgBox = document.querySelector(".imgBox");
for(boxes of box){
	boxes.addEventListener("dragover",(e)=>{
		console.log("dragover");
		e.preventDefault();
	})
	boxes.addEventListener("drop",(e)=> {
		console.log("drop");
		e.target.append(imgBox);
	})
}