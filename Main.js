

document.write('<section><div id=preloader><div class=ctn-preloader id=ctn-preloader><div class=animation-preloader><div class=spinner></div><div class=txt-loading><span class=letters-loading data-text-preloader=L>L </span><span class=letters-loading data-text-preloader=O>O </span><span class=letters-loading data-text-preloader=A>A </span><span class=letters-loading data-text-preloader=D>D </span><span class=letters-loading data-text-preloader=I>I </span><span class=letters-loading data-text-preloader=N>N </span><span class=letters-loading data-text-preloader=G>G</span></div></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div></div></div></section>');



document.write('<div class="bottom w3-container"id=id01><h4 class="text-center copyright">{{Name}}</h4></div><div class="container mt-3"><div class="input-group mb-3"><input class="border-primary form-control"id=youtubeVID onblur=lock() placeholder="Enter Domain"><div class=input-group-append><button class="btn js-click btn-primary"onclick=my() type=button>Lock Domain</button></div></div></div><textarea id=enter class=generator__markup-generated placeholder="Paste code here..."></textarea> <textarea id=ob readonly></textarea><div class=container><div class="input-group mb-3"><div class=input-group-prepend id=file-progress-container><span class="border-primary input-group-text"id=inputGroupFileAddon01>0</span> <span class="border-primary input-group-text">% read</span></div><div class=custom-file><input class=custom-file-input id=customFile accept="text/javascript, text/plain"name=filename type=file> <label class="border-primary custom-file-label"for=inputGroupFile01><i class="fa fa-upload"aria-hidden=true></i> Choose Js file</label></div></div><div class="container text-center"><div><textarea id=code class="border-primary form-control generator__markup-generated"placeholder="Paste code here..."onblur=ob() rows=5></textarea></div><button class="btn btn-primary mt-4"id=myFile onclick=myF()><i class="fa fa-lock"></i> Obfuscate</button></div><button id=my onclick=ob() type=button value=Obfuscate>Obfuscate</button> <textarea id=encript></textarea><div class="container pt-4"><textarea id=d class="border-primary form-control"rows=5 readonly>/*Protected by Digitaltox JavaScript Obfuscator: https://Digitaltox.in;*/                                    </textarea></div><div class="container text-center mt-4"><button class="btn btn-primary copy-btn"id=copiedbtn onclick=copied() type=button onmouseout=outFunc()><span class=tooltiptext id=myTooltip></span> <i class="fa fa-clone"aria-hidden=true></i> Copy</button> <button class="btn btn-success"id=Dawnload type=button><i class="fa fa-download"aria-hidden=true></i> Dawnload</button> <br> <button class="mt-2 btn btn-danger"id=bu onclick=location.reload() type=button><i class="fa fa-trash"aria-hidden=true></i> Clear</button></div></div>');




document.write('<div class="bottom mt-4 section-padding"><div class=container><div class=row><div class="col-12 col-lg-12 col-md-12 text-center"><div class="mycredit1 text-white">Copyright ©');



var creditsyear = new Date();
document.write(creditsyear.getFullYear());


document.write('All Right Reserved -<div class=text-white id=mycredit2>created by <a class=text-white href=# id=mycredit>Deepak parashari</a>');




$(document).ready(function () {
    setTimeout(function () {
            $('#ctn-preloader').addClass('loaded');
            $('body').removeClass('no-scroll-y');
            if ($('#ctn-preloader').hasClass('loaded')) {
                $('#preloader').delay(1000).queue(function () {
                    $(this).remove();
                });
            }
        },
        3000);
});


$( document ).ready(function() {
  $( ".js-click" ).click(function() {
    $( ".js-click" ).css('background', 'green');
  });
});