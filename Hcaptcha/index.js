document.getElementById("Check").addEventListener("click",function(){
    document.querySelector('.popup').style.display = 'flex';
})

document.getElementById("inner_button").addEventListener("click",function(){
    document.querySelector('.popup').style.display = 'none';
})


data=["","Airplane","Bicycle","Boat","Motorbus","Motorcycle","Seaplane","Train","Truck"];
function getRandomNumber()
{
    return Math.floor(Math.random()*7)+1;
}
var arr = new Array();
var flag;
var num = getRandomNumber();
console.log(num);
console.log(data[num]);

// Get the element by its ID
var element = document.getElementById('name');

// Change the HTML content
element.innerHTML = data[num];

for(i=1;i<10;i++)
{
    var k = (Math.floor(Math.random()*7)+1)*10 + Math.floor(Math.random()*4)+1
    // console.log(k);
    const m = document.querySelectorAll(".element");
      m.forEach(element => {
         element.src = `images/img${k}.jpg`
     })
    document.getElementById("img"+ i ).src = `images/img${k}.jpg`;
    arr.push(k);

}
arr.forEach(function(entry) {
    console.log(entry);
  });

var clicked = new Array();





// for(i=1;i<10;i++){

//   // Get the image element
// var image = document.getElementById('img' +  i);

// // Attach a click event listener
// image.addEventListener('click', function() {
//   // Get the source attribute of the clicked image
//   var src = this.src;
//   var imageNumber = src.split("img")[1].split(".")[0];
//   clicked.push(Math.floor(imageNumber/10));
//   // Display the image source
//   console.log(src);
//   console.log(imageNumber);
  
// });
// if( i==9){
//     break;
//   }
// }
// clicked.forEach(function(entry) {
//     console.log(entry);
//   });

// // Get all selectable images
// var selectableImages = document.querySelectorAll('.element');

// // Add click event listener to each image
// selectableImages.forEach(function(image) {
//   image.addEventListener('click', function() {
//     // Toggle the 'selected' class on the clicked image
//     this.classList.toggle('selected');
//   });
// });
// console.log(selectableImages);


// // Get all selectable images
// var selectableImages = document.querySelectorAll('.elements');

// // Variable to store the selected image element
// var selectedImage = null;

// // Add click event listener to each image
// selectableImages.forEach(function(image) {
//   image.addEventListener('click', function() {
//     if (selectedImage === this) {
//       // Deselect the image if it's already selected
//       selectedImage.classList.remove('selected');
//       selectedImage = null;
//       console.log('Image deselected');
//     } else {
//       // Deselect the previously selected image, if any
//       if (selectedImage) {
//         selectedImage.classList.remove('selected');
//       }
//       console.log(selectedImage);
//       // Select the clicked image
//       selectedImage = this;
//       selectedImage.classList.add('selected');
//       var imageId = this.id;
//       console.log('Selected image ID:', imageId);
//     }
//   });
// });





function getImageSourceById(imageId) {
    var imageElement = document.getElementById(imageId);
    
    if (imageElement) {
      var imageSource = imageElement.getAttribute('src');
      return imageSource;
    } else {
      return null;
    }
  }





// Get all selectable images
var selectableImages = document.querySelectorAll('.elements');

// Object to store the click count for each image
var clickCounts = {};

// Add click event listener to each image
selectableImages.forEach(function(image) {
  // Initialize click count to 0 for each image
  clickCounts[image.id] = 0;

  image.addEventListener('click', function() {
    var imageId = this.id;

    // Increment the click count for the clicked image
    clickCounts[imageId]++;

    // Check if the image was clicked twice
    if (clickCounts[imageId] === 2) {
      // Deselect the image if it was clicked twice
      this.classList.remove('selected');
      clickCounts[imageId] = 0; // Reset the click count
      console.log('Image deselected:', imageId);
      var imageSource = getImageSourceById(imageId);
      console.log(imageSource);     
        var imageNumber = imageSource.split("img")[1].split(".")[0];
      const index = clicked.indexOf(Math.floor(imageNumber/10));
        if (index > -1) { // only splice array when item is found
        clicked.splice(index, 1); // 2nd parameter means remove one item only
        }
    } else {
      // Select the image
      this.classList.add('selected');
      console.log('Image selected:', imageId);
      var imageSource = getImageSourceById(imageId);
      console.log(imageSource);
      

        var imageNumber = imageSource.split("img")[1].split(".")[0];
        clicked.push(Math.floor(imageNumber/10));
        // Display the image source
        console.log(imageNumber);
    }
    console.log(clicked);
  });
});


var submitButton = document.querySelector('button[type="submit"]');

// Add click event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Check if any other value is present outside the specific value
  var hasOtherValue = clicked.some(function(element) {
    return element !== num;
  });
  


  // Display result based on the presence of other values
  if (hasOtherValue) {
    console.log('Failed');
    flag=0;
  } else {
    console.log('Success');
    flag=1;
  }
  console.log('Submit button clicked');
  console.log(flag);

if(flag===1){
        var box = document.getElementById("checkbox_img");
        var sus = document.getElementById("verify");

        document.getElementById("checkbox_img").style.display = "none";
        document.getElementById("verify").style.display = "inline";

        var text = document.getElementById("cap_text");
        text.innerHTML = "Captcha Verified!";

}
else{
    var box = document.getElementById("checkbox_img");
    var fail = document.getElementById("verify1");

    document.getElementById("checkbox_img").style.display = "none";
    document.getElementById("verify1").style.display = "inline";

    var text = document.getElementById("cap_text");
    text.innerHTML = "Invalid Captcha!";

}
});
// console.log(flag);

// if(flag===1){
//     function replaceWithImage() {
//         var squareElement = document.getElementById("Check");
//         var imageElement = document.createElement("img");
//         imageElement.src = "image.jpg";
//         squareElement.parentNode.replaceChild(imageElement, squareElement);
//       }

// }

  
  