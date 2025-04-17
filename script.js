function showTab(id) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        const links = document.querySelectorAll('.nav-tabs a');
        links.forEach(link => link.classList.remove('active-tab'));
        document.querySelector(`.nav-tabs a[data-tab="${id}"]`).classList.add('active-tab');
      }

      function calculateTotal() {
        let total = 0;
        document.querySelectorAll('#hundiBody .amount').forEach(cell => {
          const val = parseFloat(cell.innerText.replace(/[^0-9.]/g, '')) || 0;
          total += val;
        });
        document.getElementById('totalAmount').innerText = '₹' + total.toLocaleString('en-IN');
      }
      document.addEventListener('input', function(e) {
        if (e.target.classList.contains('amount')) {
          calculateTotal();
        }
      });
      window.onload = () => {
        showTab('home');
        calculateTotal();
      };
    


      function filterExpenses() {
        const selectedFY = document.getElementById('fySelect').value;
        const expenses = document.querySelectorAll('.expense');
        expenses.forEach(expense => {
          if (selectedFY && expense.dataset.fy === selectedFY) {
            expense.classList.remove('hidden');
          } else {
            expense.classList.add('hidden');
          }
        });
      }
    


    function filterData() {
      const selectedYear = document.getElementById("yearSelect").value;
      const data2023 = document.getElementById("data2023");

      if (selectedYear === "2023") {
        data2023.style.display = "block";
      } else {
        data2023.style.display = "none";
      }
	  const data2024 = document.getElementById("data2024");

      if (selectedYear === "2024") {
        data2024.style.display = "block";
      } else {
        data2024.style.display = "none";
      }
	  
	  const data = document.getElementById("data");

      if (selectedYear === "") {
        data.style.display = "block";
      } else {
        data.style.display = "none";
      }
    }

    // Set default view
    filterData();