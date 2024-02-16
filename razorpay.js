// Function to initiate the payment process
function makePayment() {
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var amount = document.getElementById("customAmount").value * 100;
  var options = {
    key: 'rzp_live_nTBD5eI6WnX8hg',
    amount: amount, // 100 paise = 1 INR
    currency: 'INR',
    name: 'EMARALZ',
    description: ' ',
    handler: function(response) {
      // Handle the success callback after payment completion
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);

    
    },
    prefill: {
      contact: phone,
      email: email
    }
  };
  var rzp = new Razorpay(options);
  rzp.open();
}