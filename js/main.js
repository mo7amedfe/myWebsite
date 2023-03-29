







let text = 'mohamed223344631@gmail.com';



  

	const copyMail = async () => {
	  try {
		await navigator.clipboard.writeText(text);
		window.alert('the email copied to clipboard')
	  } catch (err) {
		console.error('Failed to copy: ', err);
	  }
	}
  