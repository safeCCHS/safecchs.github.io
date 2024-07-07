<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, 
                   initial-scale=1.0">
    <title>Display Image</title>
</head>
 
<body>
 
 
    <script>
        function show_image(src, width, height,alt) {
            // Create a new image element
            let img = document.createElement("img");
 
            // Set the source, width, 
            // height, and alt attributes
            img.src = src;
            img.width = width;
            img.height = height;
            img.alt = alt;
 
            // Append the image element
            // to the body of the document
            document.body.appendChild(img);
        }
 
        // Example usage:
        show_image(
"https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg",
            300, 200,"gfg logo");
    </script>
 
</body>
 
</html>
