
Swal.fire({
    title: 'Sweet!',
    text: 'We have new version of this web page , visit It ?',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    showCancelButton: true,
    confirmButtonText: 'Yes, I am sure!',
    cancelButtonText: "No, cancel it!",
    closeOnConfirm: false,
    closeOnCancel: false
  }).then (function(isConfirm){
        if (isConfirm.value){  
            Swal.fire("Cancelled", "Your Still stay with old version:)", "error");
            $("iframe").attr("src", $("iframe").attr("src").replace("autoplay=0", "autoplay=1"));
              e.preventDefault();
         } else {
            window.location.replace("https://rovers00.xyz"); // this not a new version
         }});