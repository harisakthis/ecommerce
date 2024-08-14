




    //
    function showPaymentOptions() {
        const paymentMethod = document.getElementById("paymentMethod").value;

        document.getElementById("codOptions").style.display = paymentMethod === "cod" ? "block" : "none";
        document.getElementById("upiOptions").style.display = paymentMethod === "upi" ? "block" : "none";
        document.getElementById("creditOptions").style.display = paymentMethod === "credit" ? "block" : "none";
    }

    function check() {
        const paymentMethod = document.getElementById("paymentMethod").value;
    
        var t = document.getElementById("text").value;
        var e = document.getElementById("email").value;
        var a = document.getElementById("adress").value;
        var c = document.getElementById("city").value;
        var s = document.getElementById("state").value;
        var cod = document.getElementById("code").value;
    
        //code for password validation
        var letters = /^[A-Za-z]+$/;
        var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        //validation required code
        if (t == '' || e == '' || a == '' || c == '' || s == '' || cod == '') {
            alert("Enter each detail correctly");
            return false;
        }
    
        if (paymentMethod === "cod") {
            alert("Payment successful with Cash on Delivery.");
        } else if (paymentMethod === "upi") {
            const upiId = document.getElementById("upiId").value; // Make sure "upiId" is the correct element id
            alert(`Payment successful with UPI. UPI ID: ${upiId}`);
        } else if (paymentMethod === "credit") {
            const cardNumber = document.getElementById("cardNumber").value;
            alert(`Payment successful with Credit Card. Card Number: ${cardNumber}`);
        } else {
            alert("Invalid payment method.");
        }
    
        if (!email_val.test(e)) {
            alert("Enter a valid email");
            return false;
        }
    
        alert("Success");
        return true;
    }
    