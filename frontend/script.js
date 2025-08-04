fetch("http://localhost:3000/api/intern")
  .then(res => res.json())
  .then(data => {
    document.getElementById("internName").textContent = data.name;
    document.getElementById("referralCode").textContent = data.referralCode;
    document.getElementById("donationAmount").textContent = data.donationsRaised;
  });