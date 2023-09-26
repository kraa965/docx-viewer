function PreviewWordDoc() {
    //URL of the Word Document.
    var url = "/src/assets/sample1.docx";

    //Send a XmlHttpRequest to the URL.
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'blob';
    request.onload = function () {
        //Set the ContentType to docx.
        var contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

        //Convert BLOB to File object.
        var doc = new File([request.response], contentType);

        //If Document not NULL, render it.
        if (doc != null) {
            //Set the Document options.
            var docxOptions = Object.assign(docx.defaultOptions, {
                useMathMLPolyfill: true
            });
            //Reference the Container DIV.
            var container = document.querySelector("#word-container");

            //Render the Word Document.
            docx.renderAsync(doc, container, null, docxOptions);
        }
    };
    request.send();
};