
    function submitFeedback() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const shopping = document.getElementById("shopping").value;
        const suggestions = document.getElementById("suggestions").value;

        var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // Clear previous validation messages
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("mailError").innerHTML = "";
        document.getElementById("shoppingError").innerHTML = "";
        document.getElementById("suggestionsError").innerHTML = "";

        if (!name || !email || !shopping || !suggestions) {
            alert("Please enter each detail correctly.");
            return;
        } else if (name.length <= 3) {
            document.getElementById("nameError").innerHTML = "! Name should be above 3 Characters along";
            return;
        } else if (!email_val.test(email)) {
            document.getElementById("mailError").innerHTML = "! Please enter valid email";
            return;
        }
        else if (suggestions.length <= 5) {
          document.getElementById("suggestionsError").innerHTML = "! Suggestions should be above 5 Characters along";
          return;
        }
          else if (shopping.length <= 5) {
          document.getElementById("shoppingError").innerHTML = "! shoppingExperience should be above 5 Characters along";
          return;
        }

        // If all fields are filled out, proceed with submission
        console.log("Feedback submitted");

        // Display a window alert
        const confirmation = confirm("Do you want to submit the feedback?");

        if (confirmation) {
            // Reset the form after confirmation
            document.getElementById('feedbackForm').reset();
            // Hide the modal
            $('#feedbackModal').modal('hide')
            // Display a thank you message or perform any other actions as needed
            alert("Feedback submitted successfully!");
        }
    }

    // Function to be called when the window has finished loading
    window.onload = function () {
        // Show the feedback modal when the window loads
        setTimeout(function () {
          $('#feedbackModal').modal('show');
          // Scroll down to the feedback section
    
      }, 10000); // 10000 milliseconds = 10 seconds
  };


  //contact form

  function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var text  = document.forms["contactForm"]["message"].value;


    //empty set
    if (name==''||email==''||text==''){
        alert("Enter Each Details Correctly");
        return false;
    }
    else if(!isNaN(name)){
        document.getElementById('nameError').innerText="! This field allows only text not numbers";
        return false;
    }
    else if (text.length < 3) {
        alert("Please provide Message Above 3 Characters");
        return false;
    }
    else if(!isNaN(text)){
        document.getElementById('msgError').innerText="! This field allows not only  numbers Write any text";
        return false;
    }
    
    // Simple name validation: at least one character
    if (name.length < 1) {
      alert("Please enter your name.");
      return false;
    }

    // Email validation using HTML5 pattern attribute
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Additional validation can be added for the textarea or other fields if needed

    // If all validations pass, submit the form
    document.getElementById("contactForm").submit();
    alert("Thank You For Contacting Us");
  }

  function isValidEmail(email) {
    // Email validation using a simple regular expression
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  }

  //faq

  document.addEventListener("DOMContentLoaded", function () {
    const faqList = document.getElementById("faqList");
    const searchInput = document.getElementById("searchInput");

    // Sample FAQ data
    const faqData = [
        { question: "What is your product?", answer: "Our product is Spices and Pickles,Sauce" },
        { question: "How do I contact support?", answer: "You can contact support by Mail or Customer call service " },
        { question: "Can I return my purchase?", answer: "Yes, you can return your purchase within Working 7 days" },
    ];

    // Display all FAQs initially
    displayFAQs(faqData);

    // Handle search input
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredFAQs = faqData.filter(item => item.question.toLowerCase().includes(query));
        displayFAQs(filteredFAQs);
    });

    function displayFAQs(faqs) {
        faqList.innerHTML = "";
        faqs.forEach((item, index) => {
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");
            faqItem.innerHTML = `<strong>${index + 1}. ${item.question}</strong><br>${item.answer}`;
            faqList.appendChild(faqItem);
        });
    }
});
