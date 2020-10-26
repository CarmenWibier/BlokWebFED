/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var deButton = document.querySelector("h2");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("form");
	hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);

function hitEnterOpDeButton(e){
    if(e.code == "Enter" || e.code == "Space") {
        doeFormNeerEnOp();
    }
}

deButton.addEventListener("keydown", hitEnterOpDeButton);

