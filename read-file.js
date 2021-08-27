function copied() {
  var copyText = document.getElementById("d");
  copyText.select();
  document.execCommand("");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied:";
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "";
}




var div = document.getElementById('ob');
var di = document.getElementById('encript');
function myF() {
  var d = document.getElementById('d');
        d.innerHTML = d.innerHTML + di.value + div.value;
}



/*dawnload script*/

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("Dawnload").addEventListener("click", function() {
  // Generate download of hello.txt file with some content
  let text = document.getElementById("d").value;
  let filename = "Obfuscate.js";

  download(filename, text);
}, false);



$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


document.querySelector("#customFile").addEventListener('change', function() {
  setTimeout(function() {
    document.querySelector("#my").click();
  }, 500);
  
	// files that user has chosen
	var all_files = this.files;
	if(all_files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// first file selected by user
	var file = all_files[0];

	// files types allowed
	var allowed_types = [ 'text/plain' , 'text/javascript'];
	if(allowed_types.indexOf(file.type) == -1) {
		alert('Error : Incorrect file type');
		return;
	}

	// Max 2 MB allowed
	var max_size_allowed = 2*1024*1024
	if(file.size > max_size_allowed) {
		alert('Error : Exceeded size 2MB');
		return;
	}

	// file validation is successfull
	// we will now read the file

	var reader = new FileReader();

	// file reading finished successfully
	reader.addEventListener('load', function(e) {
	    var text = e.target.result;

	    // contents of the file
	    document.querySelector("#code").innerHTML = text;
	    
	});

	// file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// file read progress 
	reader.addEventListener('progress', function(e) {
	    if(e.lengthComputable == true) {
	    	document.querySelector("#inputGroupFileAddon01").innerHTML = Math.floor((e.loaded/e.total)*100);
	    	document.querySelector("#inputGroupFileAddon01").style.display = 'block';
	    }
	});

	// read as text file
	reader.readAsText(file);
});


let btnClear = document.querySelector('#bu');
let inputs = document.querySelectorAll('textarea');
 
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});



//credit


  $(document).ready(function () {
    $("#mycredit2").css("display", "inline-block").html('Created by <i style="color:rgb(243,21,40);" class="fa fa-heart"></i> <a href="#">Deepak parashari</a>');
    setInterval(function () {
      if (!$("#mycredit2:visible").length) {
        window.location.href = "https://google.com"
      }
    },
      3000)
  })