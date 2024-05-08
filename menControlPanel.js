document.getElementById("menProductForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // استخراج بيانات المنتج من النموذج
    var productName = document.getElementById("productName").value;
    var productDescription = document.getElementById("productDescription").value;
    var productPrice = document.getElementById("productPrice").value;
    var productImage = document.getElementById("productImage").files[0];

    // إنشاء عنصر جديد لعرض المنتج
    var productItem = document.createElement("div");
    productItem.innerHTML = `
        <h2>${productName}</h2>
        <p>${productDescription}</p>
        <p>${productPrice}</p>
        <img src="${URL.createObjectURL(productImage)}" alt="${productName}" width="200">
        <button>اشتري الآن</button>
    `;

    // إضافة المنتج إلى قائمة المنتجات
    document.getElementById("menProducts").appendChild(productItem);

    // تفريغ النموذج
    document.getElementById("menProductForm").reset();
});
