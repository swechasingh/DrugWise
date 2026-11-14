const compareBtn = document.getElementById("compareBtn");

compareBtn.addEventListener("click", function () {

    const drug1Name = document.getElementById("drug1Name").value.trim();
    const drug2Name = document.getElementById("drug2Name").value.trim();

    const drug1Text = document.getElementById("drug1Text").value.trim();
    const drug2Text = document.getElementById("drug2Text").value.trim();

    // Check if fields are empty
    if (!drug1Name || !drug2Name || !drug1Text || !drug2Text) {
        alert("Please enter both drug names and their monograph information.");
        return;
    }

    // Show loading message
    document.getElementById("indicationsResult").innerHTML =
        "<p>🔄 Analyzing indications...</p>";

    document.getElementById("precautionsResult").innerHTML =
        "<p>🔄 Analyzing precautions...</p>";

    document.getElementById("summaryResult").innerHTML =
        "<p>🔄 Preparing comparison...</p>";

    // Small delay to simulate processing
    setTimeout(function () {

        document.getElementById("indicationsResult").innerHTML = `
            <h4>${drug1Name}</h4>
            <p>${extractSection(drug1Text, "indications")}</p>

            <h4>${drug2Name}</h4>
            <p>${extractSection(drug2Text, "indications")}</p>

            <hr>

            <p><strong>Comparison:</strong> The two monographs have been
            submitted for comparison. AI analysis can identify common
            and drug-specific indications.</p>
        `;

        document.getElementById("precautionsResult").innerHTML = `
            <h4>${drug1Name}</h4>
            <p>${extractSection(drug1Text, "precautions")}</p>

            <h4>${drug2Name}</h4>
            <p>${extractSection(drug2Text, "precautions")}</p>

            <hr>

            <p><strong>Comparison:</strong> The precautions of both
            monographs can be compared to identify important differences.</p>
        `;

        document.getElementById("summaryResult").innerHTML = `
            <p>
                The system received monographs for
                <strong>${drug1Name}</strong> and
                <strong>${drug2Name}</strong>.
                Their indications and precautions can now be analyzed
                and compared using the AI component.
            </p>
        `;

    }, 1000);
});


// Function to find a particular section in the text
function extractSection(text, sectionName) {

    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(sectionName.toLowerCase());

    if (index === -1) {
        return "Section not specifically identified in the provided text.";
    }

    return text.substring(index, index + 500);
}