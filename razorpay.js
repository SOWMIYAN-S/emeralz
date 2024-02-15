// Function to initiate the payment process
function makePayment() {
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  // You can add more data like item name, amount, etc., to be sent to Razorpay
  var options = {
    key: 'rzp_live_nTBD5eI6WnX8hg',
    amount: 10000, // Example amount in paise (100 paise = 1 INR)
    currency: 'INR',
    name: 'EMERALZ',
    description: 'Purchase Description',
    handler: function(response) {
      // Handle the success callback after payment completion
      alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      // You can redirect to a thank you page or handle the success as per your requirement
    },
    prefill: {
      contact: phone,
      email: email
    }
  };
  var rzp = new Razorpay(options);
  rzp.open();
}
