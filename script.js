function copyNumber(number) {

    navigator.clipboard.writeText(number)
        .then(() => {

            const toast = document.getElementById("toast");

            toast.textContent = "✓ Nomor berhasil disalin";

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 1800);

        })
        .catch(() => {

            alert("Gagal menyalin nomor.");

        });
}


async function downloadQRIS() {

    const image = document.querySelector(".qris-img");

    try {

        const response = await fetch(image.src);

        const blob = await response.blob();

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = "QRIS-Payment.jpg";

        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(url);

    } catch (error) {

        window.open(image.src, "_blank");

    }
}