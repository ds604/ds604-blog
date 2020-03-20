---
layout: post-layout.njk
title: List of Books
date: 2020-03-13
tags: ['post']
---
List of Books:
<button onclick="toggleColor()">Color by Language</button>
<button onclick="sortAlphabetical()">Sort Alphabetical</button>

<ul>
	<li class="python">Elegant SciPy</li>
	<li class="python">Programming Computer Vision with Python</li>
	<li class="python">Complex Network Analysis in Python</li>
	<li class="python">Feedback Control for Computer Systems</li>
	<li class="python">Data Science from Scratch</li>
	<li class="python">Programming Collective Intelligence</li>
	<li class="python">Think DSP</li>
	<li class="python">Think Bayes</li>
	<li class="python">Bayesian Methods for Hackers</li>
	<li class="python">Python Playground</li>
	<li class="python">Impractical Python Projects</li>
	<li class="python">Math Adventures with Python</li>
	<li class="R">A First Course in Statistical Programming with R</li>
	<li class="R">The Art of R Programming</li>
	<li class="R">Text Mining with R</li>
	<li class="R">Advanced Object-Oriented Programming in R</li>
	<li class="R">R for Data Science</li>
	<li class="R">Deep Learning with R</li>
	<li class="R">Beginning Data Science with R</li>
	<li class="R">Exploring Everyday Things with R and Ruby</li>
	<li class="R">Practical Statistics for Data Scientists</li>
	<li class="js">Data Structures and Algorithms with Javascript</li>
	<li class="js">Introduction to Numerical Methods with Examples in Javascript</li>
	<li class="js">Data Wrangling with Javascript</li>
	<li class="js">Programming Typescript</li>
	<li class="ruby">Mazes for Programmers</li>
	<li class="ruby">Understanding Computation</li>
	<li class="ruby">Text Processing with Ruby</li>
	<li class="rust">Programming WebAssembly with Rust</li>
	<li class="rust">The Rust Programming Language</li>
	<li>Bayesian Statistics the Fun Way</li>
	<li>Seven Languages in Seven Weeks</li>
	<li>Optimization for Computer Vision</li>
	<li>Numerical Linear Algebra</li>
	<li>A Common-Sense Guide to Data Structures and Algorithms</li>
</ul>

<style>
	ul>li {
		display: flex;
		font-size: 12pt;
	}
	li.python { color:#755c7f; }
	li.js { color:#7991a4; }
	li.R { color:#a18568; }
	li.ruby { color:#a25d6a; }
	li.rust { color:#535b84; }
	li.noColor { color:gray; }
</style>
<script>
	function toggleColor(){
		document.querySelectorAll("li").forEach(d => {
			d.classList.contains("noColor") ? d.classList.remove("noColor") : d.classList.add("noColor")
		})
	}

	let list = document.querySelector('ul')
	let items = Array.from(list.children)
	let originalOrder = [...items]
	let order = 'original'
	function sortAlphabetical(){
		if(order === 'original'){
			items.sort((a,b) => {
		    	return a.textContent > b.textContent ? 1 : -1
			}).map(node => list.appendChild(node))
			order = 'alphabetical'
		} else if(order === 'alphabetical'){
			originalOrder.map(node => list.appendChild(node))
			order = 'original'
		}
	}
</script>