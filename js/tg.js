    const TELEGRAM_USERNAME = 'OlgaKiryu';  // Change this!
    
    const button = document.getElementById('telegramButton');
    
    button.addEventListener('click', () => {
      // Option 1: Open chat with a specific username
      // Format: https://t.me/username
      const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}`;
      
      // Option 2: Open chat by phone number (international format, no '+')
      // const telegramUrl = `https://t.me/+1234567890`;
      
      // Option 3: Open group invite link
      // const telegramUrl = `https://t.me/joinchat/ABC123xyz`;
      
      // Option 4: Open chat ID for bots or channels
      // const telegramUrl = `https://t.me/c/1234567890`;
      
      window.open(telegramUrl, '_blank', 'noopener,noreferrer');
    });