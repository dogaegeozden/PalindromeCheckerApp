document.addEventListener('DOMContentLoaded', function() {
  const userInput = document.getElementById('text-input');
  const checkPalindromeBtn = document.getElementById('check-btn');
  const resultDiv = document.getElementById('result');

  const checkForPalindrome = input => {
    const originalInput = input.trim(); // Store for later output

    if (originalInput === '') {
      alert('Please input a value');
      return;
    }

    // Remove the previous result
    resultDiv.innerHTML = '';

    const lowerCaseStr = originalInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');

    const resultMsg = document.createElement('p');
    resultMsg.innerHTML = `<strong>${originalInput}</strong> ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
    resultDiv.appendChild(resultMsg);

    // Show the result.
    resultDiv.classList.remove('hidden');
  };

  checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  });

  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkForPalindrome(userInput.value);
      userInput.value = '';
    }
  });
});
