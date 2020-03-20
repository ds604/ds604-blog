---
layout: post-layout.njk
title: List of Topics
date: 2020-02-29
tags: ['post']
---
<!-- Excerpt Start -->
A list of topics:
<!-- Excerpt End -->

- Fourier Transform 
- Linear systems of equations
	- LU decomposition
	- QR decomposition
	- Determinant
	- Matrix inverse
- Interpolation
	- Polynomial interpolation
	- Spline interpolation
		- Linear
		- Quadratic
		- Cubic
- Linear least squares
	- Solution via QR decomposition
	- Ordinary least squares curve fitting
- Numerical Integration
	- Classical quadrature
	- Adaptive quadrature
	- Gauss-Konrod quadratures
- Monte Carlo integration
	- Multi-dimensional integration
	- Plain Monte Carlo sampling
	- Importance sampling
	- Stratified sampling
	- Quasi-random (low discrepancy) sampling
- Ordinary Differential Equations
	- 123

- Clustering
	- PCA

- Image Processing
	- Deblur
	- Seam carving
	- Poisson image editing
	- Upscaling
	- Pixel to vector

- Audio
	- ICA

<hr>

Some Markdown text with <span style="color:red">some *red* text</span>.

<style>
table th:first-of-type {
	width:10px;
}
table th:nth-of-type(2) {
	width:50px;
}
table th:nth-of-type(3) {
	width:50px;
}
table th:nth-of-type(4) {
	width:50px;
}
</style>
| Topic	| JS | R | Python |
|:-----:|:--:|:--:|:-----:|
| FFT |   ✅ | ✅ |  ✅  |

<style>
.box {
	display:inline-block; 
	width:1.5em; 
	height:1.5em; 
	margin:1px 0; 
	border:1px 
	solid black; 
	background-color: #008080; 
	color:black; 
	font-size:100%; 
	text-align:center;
}
</style>
<hr>

hello world 
	<a onclick="htmlEditor.src='https://ds604.neocities.org/monacoHTMLEditor_03062020.html?initText=PGgxPmhlbGxvIHdvcmxkPC9oMT4='" style="cursor:pointer">🔴</a>
Fourier Transform
	<a onclick="htmlEditor.src='https://ds604.neocities.org/monacoHTMLEditor_03062020.html?initText=PHNjcmlwdD4KLyogCiAqIENvbXB1dGVzIHRoZSBkaXNjcmV0ZSBGb3VyaWVyIHRyYW5zZm9ybSAoREZUKSBvZiB0aGUgZ2l2ZW4gY29tcGxleCB2ZWN0b3IuCiAqICdpbnJlYWwnIGFuZCAnaW5pbWFnJyBhcmUgZWFjaCBhbiBhcnJheSBvZiBuIGZsb2F0aW5nLXBvaW50IG51bWJlcnMuCiAqIFJldHVybnMgYW4gYXJyYXkgb2YgdHdvIGFycmF5cyAtIG91dHJlYWwgYW5kIG91dGltYWcsIGVhY2ggb2YgbGVuZ3RoIG4uCiAqLwpmdW5jdGlvbiBjb21wdXRlRGZ0KGlucmVhbCwgaW5pbWFnKSB7Cgl2YXIgbiA9IGlucmVhbC5sZW5ndGg7Cgl2YXIgb3V0cmVhbCA9IG5ldyBBcnJheShuKTsKCXZhciBvdXRpbWFnID0gbmV3IEFycmF5KG4pOwoJZm9yICh2YXIgayA9IDA7IGsgPCBuOyBrKyspIHsgIC8vIEZvciBlYWNoIG91dHB1dCBlbGVtZW50CgkJdmFyIHN1bXJlYWwgPSAwOwoJCXZhciBzdW1pbWFnID0gMDsKCQlmb3IgKHZhciB0ID0gMDsgdCA8IG47IHQrKykgeyAgLy8gRm9yIGVhY2ggaW5wdXQgZWxlbWVudAoJCQl2YXIgYW5nbGUgPSAyICogTWF0aC5QSSAqIHQgKiBrIC8gbjsKCQkJc3VtcmVhbCArPSAgaW5yZWFsW3RdICogTWF0aC5jb3MoYW5nbGUpICsgaW5pbWFnW3RdICogTWF0aC5zaW4oYW5nbGUpOwoJCQlzdW1pbWFnICs9IC1pbnJlYWxbdF0gKiBNYXRoLnNpbihhbmdsZSkgKyBpbmltYWdbdF0gKiBNYXRoLmNvcyhhbmdsZSk7CgkJfQoJCW91dHJlYWxba10gPSBzdW1yZWFsOwoJCW91dGltYWdba10gPSBzdW1pbWFnOwoJfQoJcmV0dXJuIFtvdXRyZWFsLCBvdXRpbWFnXTsKfQo8L3NjcmlwdD4='" style="cursor:pointer">🔴</a>

✅❎

<span class="box">&nbsp;</span>

<script> 
function getRmdText(file, sectionTitle){
	fetch(`./../../../content/${file}`)
		.then(res => res.text())
		.then(fullText => extractSectionText(fullText, sectionTitle))
		.then(text => {
			// text = text.replace(/`/g, "\\`")
			let b64text = window.btoa(encodeURIComponent(text))
			// console.log(b64text)
			htmlEditor.src = `https://ds604.neocities.org/monacoHTMLEditor_03062020.html?initText=${b64text}`
		})

	////////////////////////////////////////
	function extractSectionText(fullText, sectionTitle){
		let sectionText = fullText.split("```")
			.filter(d => d)
			.filter(d => d.includes(sectionTitle))
			.filter(d => d)[0]
		sectionText = sectionText.substring(sectionText.indexOf("\n")+1) // get rid of first line
		return sectionText
	}
}
</script>
<!-- <script src="./../../../js/util.js"></script> -->
Get text from Rmd file:
<button onclick="getRmdText('testCode.Rmd', 'get folders recursive')">get folders recursive</button>
<button onclick="getRmdText('testCode.Rmd', 'fourier transform')">fourier transform</button>