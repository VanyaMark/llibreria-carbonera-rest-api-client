document.querySelectorAll(".emotion").forEach((img) => {
  img.addEventListener("click", async () => {
    const emotion = img.getAttribute("data-emotion");
    document.querySelector("#emotion-selected").textContent = emotion;

    try {
      // TODO: COMPLETAR: Necesitamos hacer un fetch al endpoint correcto, procesar los datos y asignar el libro recuperado a la variable 'book'
        const urlString = `http://localhost:3005/api/books/recommendations/${emotion}/random`;
      const response = await fetch(
        urlString
      );
      const data = await response.json();
      
      console.log('before data')
      console.log(emotion)
      console.log('url string: ', urlString)
      console.log("data: ", data.results[0]);

      const book = data.results[0]; // TODO: Aquí deberíamos tener un objeto con información del libro de la REST API

      // NO MODIFICAR A PARTIR DE AQUÍ
      document.querySelector("#book-title").textContent = book.title;
      document.querySelector("#book-isbn").textContent = book.isbn;
      document.querySelector("#book-price").textContent = book.price;
      document.querySelector("#book-description").textContent =
        book.description;
      document.querySelector("#book-image").src = book.imageURL;

      document.querySelector("#book-container").style.display = "block";
    } catch (error) {
      console.error("Error fetching book:", error.message);
      // alert('An error ocurred. Use the developers tools!');
    }
  });
});
