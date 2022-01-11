// Accordion in FAQ's
$(document).ready(function(){
    $(".heading").click(function(){
      $(this).next().slideToggle();
    });
  });

// Comment Section
$(document).ready(function(){
    $("#btnComment").click(function(){

        let newImg=$(" <img>");
        $(newImg).attr({
            "src" : "./Assets/images/pages/blogSingle/comment-avatar.png",
            "alt" : "personIcon"
          });
          
        $(newImg).addClass("imgClass");

         let newIcon=$("<div></div>");
        $(newIcon).addClass("icon");

        let newComment=$("<div></div>");
        $(newComment).addClass("comment");

        let newAuthor=$("<div></div>");
        $(newAuthor).addClass("author");

        let newh3=$("<h3></h3>");
        $(newh3).addClass("authorName");

        let name=$("#name").val();
        newh3.text(name);

        let newSpan=$("<span><span>");
        newSpan.text("09 APR 2018");
        $(newSpan).addClass("spanClass");

        let newAtag=$("<a></a>");
        $(newAtag).addClass("aClass");
 
        let commentText=$("<p></p>");   
        commentText=$("#commentSection").val();
        $(commentText).addClass("pText");

        let newLi=$("<li></li>");
        $(newLi).addClass("newComment");

        $(newIcon).append(newImg);
        
        $(newAuthor).append(newh3, newSpan, newAtag);
       
        $(newComment).append(newAuthor, commentText);

        $(newLi).append(newIcon, newComment);

        $("#commentList").append(newLi);

    });
  });
