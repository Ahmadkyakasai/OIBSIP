  const form = document.querySelector("form");

        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevent the form from reloading the page

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset(); // Clear the form after successful submission
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            } catch (error) {
                alert("There was an error sending your message.");
            }
        });
